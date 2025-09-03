import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Shield, MapPin, Clock, AlertCircle } from 'lucide-react';

interface MapProps {
  cities: Array<{
    name: string;
    coverage: string;
    response: string;
    coordinates?: [number, number];
  }>;
}

const ModernMap: React.FC<MapProps> = ({ cities }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapToken, setMapToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Morocco cities coordinates
  const cityCoordinates: { [key: string]: [number, number] } = {
    'الدار البيضاء': [-7.589843, 33.573110],
    'الرباط': [-6.849813, 33.971588],
    'مراكش': [-7.981084, 31.629472],
    'طنجة': [-5.813630, 35.759465],
    'فاس': [-4.999237, 34.033149],
    'أكادير': [-9.598107, 30.427755],
    'الصويرة': [-9.759784, 31.512497],
    'شفشاون': [-5.273637, 35.168889],
    'مكناس': [-5.547080, 33.895923],
    'ورزازات': [-6.893451, 30.924795],
  };

  const initializeMap = () => {
    if (!mapContainer.current || !mapToken) return;

    // Initialize map
    mapboxgl.accessToken = mapToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [-7.09262, 31.791702], // Morocco center
      zoom: 5.5,
      pitch: 45,
      bearing: -17.6,
      projection: 'globe' as any,
      antialias: true
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'bottom-right'
    );

    // Enable scroll zoom
    map.current.scrollZoom.enable();

    // Add atmosphere and fog effects
    map.current.on('style.load', () => {
      if (!map.current) return;
      
      map.current.setFog({
        color: 'rgb(186, 210, 235)',
        'high-color': 'rgb(36, 92, 223)',
        'horizon-blend': 0.02,
        'space-color': 'rgb(11, 11, 25)',
        'star-intensity': 0.6
      } as any);

      // Add custom source for Morocco boundary
      map.current.addSource('morocco-boundary', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [[
              [-13, 27.5], [-13, 36], [-1, 36], [-1, 27.5], [-13, 27.5]
            ]]
          }
        }
      });

      // Add a subtle glow layer for Morocco
      map.current.addLayer({
        id: 'morocco-glow',
        type: 'fill',
        source: 'morocco-boundary',
        paint: {
          'fill-color': '#d4af37',
          'fill-opacity': 0.05
        }
      });

      // Add 3D building layer
      const layers = map.current.getStyle()?.layers;
      const labelLayerId = layers?.find(
        (layer: any) => layer.type === 'symbol' && layer.layout['text-field']
      )?.id;

      map.current.addLayer(
        {
          id: '3d-buildings',
          source: 'composite',
          'source-layer': 'building',
          filter: ['==', 'extrude', 'true'],
          type: 'fill-extrusion',
          minzoom: 15,
          paint: {
            'fill-extrusion-color': '#d4af37',
            'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'height']
            ],
            'fill-extrusion-base': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              15.05,
              ['get', 'min_height']
            ],
            'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
      );

      // Add markers for cities
      cities.forEach((city) => {
        const coordinates = cityCoordinates[city.name];
        if (!coordinates || !map.current) return;

        // Create custom marker element
        const el = document.createElement('div');
        el.className = 'custom-marker';
        
        const isMajorCity = city.coverage === 'تغطية كاملة';
        
        el.innerHTML = `
          <div class="relative group cursor-pointer">
            <div class="absolute inset-0 ${isMajorCity ? 'bg-gradient-to-r from-amber-400 to-yellow-500' : 'bg-gradient-to-r from-blue-400 to-cyan-500'} rounded-full blur-md opacity-75 animate-pulse"></div>
            <div class="relative w-4 h-4 ${isMajorCity ? 'bg-gradient-to-r from-amber-400 to-yellow-500' : 'bg-gradient-to-r from-blue-400 to-cyan-500'} rounded-full shadow-lg"></div>
            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block z-50">
              <div class="bg-background/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-xl border border-secondary/20 whitespace-nowrap">
                <div class="text-sm font-bold text-foreground">${city.name}</div>
                <div class="text-xs text-secondary">${city.coverage}</div>
                <div class="text-xs text-accent flex items-center gap-1 mt-1">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  ${city.response}
                </div>
              </div>
            </div>
          </div>
        `;

        // Create popup
        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: false,
          className: 'custom-popup'
        }).setHTML(`
          <div class="p-3">
            <h3 class="font-bold text-foreground mb-1">${city.name}</h3>
            <p class="text-sm text-muted-foreground">${city.coverage}</p>
            <p class="text-xs text-accent mt-1">⏱ ${city.response}</p>
          </div>
        `);

        // Add marker to map
        new mapboxgl.Marker(el)
          .setLngLat(coordinates)
          .setPopup(popup)
          .addTo(map.current);
      });

      // Add animated lines between major cities
      const majorCities = cities
        .filter(city => city.coverage === 'تغطية كاملة')
        .map(city => cityCoordinates[city.name])
        .filter(Boolean);

      if (majorCities.length > 1) {
        for (let i = 0; i < majorCities.length - 1; i++) {
          const sourceId = `route-${i}`;
          const coordinates = [majorCities[i], majorCities[i + 1]];

          map.current.addSource(sourceId, {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'LineString',
                coordinates
              }
            }
          });

          map.current.addLayer({
            id: sourceId,
            type: 'line',
            source: sourceId,
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#d4af37',
              'line-width': 2,
              'line-opacity': 0.5,
              'line-dasharray': [2, 4]
            }
          });
        }
      }
    });

    // Rotation animation for dramatic effect
    let userInteracting = false;
    let rotationEnabled = true;
    
    function rotateCamera() {
      if (!map.current) return;
      
      if (rotationEnabled && !userInteracting) {
        const bearing = map.current.getBearing();
        map.current.easeTo({ 
          bearing: bearing - 0.5, 
          duration: 100,
          easing: (n: number) => n 
        });
      }
    }

    // Event listeners for interaction
    map.current.on('mousedown', () => {
      userInteracting = true;
    });
    
    map.current.on('dragstart', () => {
      userInteracting = true;
    });
    
    map.current.on('mouseup', () => {
      userInteracting = false;
    });
    
    map.current.on('touchend', () => {
      userInteracting = false;
    });

    // Start slow rotation
    const rotationInterval = setInterval(rotateCamera, 100);

    // Stop rotation after 10 seconds
    setTimeout(() => {
      rotationEnabled = false;
      clearInterval(rotationInterval);
    }, 10000);

    // Cleanup on unmount
    return () => {
      clearInterval(rotationInterval);
    };
  };

  useEffect(() => {
    if (mapToken) {
      initializeMap();
    }

    return () => {
      map.current?.remove();
    };
  }, [mapToken, cities]);

  if (showTokenInput) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl backdrop-blur-sm">
        <div className="max-w-md w-full p-8 bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-secondary/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-secondary/20 rounded-xl">
              <MapPin className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-xl font-tajawal font-bold text-foreground">خريطة تفاعلية</h3>
              <p className="text-sm text-muted-foreground font-cairo">أدخل مفتاح Mapbox للمتابعة</p>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-cairo text-muted-foreground mb-2">
              Mapbox Public Token
            </label>
            <input
              type="text"
              value={mapToken}
              onChange={(e) => setMapToken(e.target.value)}
              placeholder="pk.xxxxx..."
              className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:border-secondary transition-colors font-mono text-sm"
            />
          </div>
          
          <div className="flex items-start gap-2 mb-6 p-3 bg-accent/10 rounded-lg">
            <AlertCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground font-cairo">
              احصل على مفتاح مجاني من <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-accent underline">mapbox.com</a>
            </p>
          </div>
          
          <button
            onClick={() => {
              if (mapToken.trim()) {
                setShowTokenInput(false);
              }
            }}
            disabled={!mapToken.trim()}
            className="w-full px-6 py-3 bg-gradient-gold text-primary font-cairo font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            عرض الخريطة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
      <div ref={mapContainer} className="absolute inset-0" />
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/20 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background/40 to-transparent"></div>
      </div>
      
      {/* Map Legend */}
      <div className="absolute top-4 left-4 p-4 bg-background/90 backdrop-blur-sm rounded-xl shadow-lg">
        <h4 className="text-sm font-tajawal font-bold text-foreground mb-3">مفتاح الخريطة</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
            <span className="text-xs font-cairo text-muted-foreground">تغطية كاملة</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
            <span className="text-xs font-cairo text-muted-foreground">تغطية جزئية</span>
          </div>
        </div>
      </div>
      
      {/* Stats overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex gap-4">
        <div className="flex-1 p-3 bg-background/90 backdrop-blur-sm rounded-lg flex items-center gap-2">
          <Shield className="h-4 w-4 text-secondary" />
          <span className="text-xs font-cairo font-semibold text-foreground">10 مدن</span>
        </div>
        <div className="flex-1 p-3 bg-background/90 backdrop-blur-sm rounded-lg flex items-center gap-2">
          <Clock className="h-4 w-4 text-accent" />
          <span className="text-xs font-cairo font-semibold text-foreground">24/7</span>
        </div>
      </div>
    </div>
  );
};

export default ModernMap;