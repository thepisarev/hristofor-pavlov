import { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography as Geo, Marker } from 'react-simple-maps';
import { MapPin } from 'lucide-react';

interface City {
  name: string;
  coordinates: [number, number];
}

const cities: City[] = [
  { name: 'Москва', coordinates: [37.62, 55.75] },
  { name: 'Екатеринбург', coordinates: [60.6, 56.84] },
  { name: 'Новосибирск', coordinates: [82.92, 55.03] },
  { name: 'С-Петербург', coordinates: [30.32, 59.93] },
  { name: 'Н. Новгород', coordinates: [43.99, 56.33] },
  { name: 'Сочи', coordinates: [39.73, 43.6] },
  { name: 'Краснодар', coordinates: [38.98, 45.04] },
  { name: 'Казань', coordinates: [49.11, 55.8] },
  { name: 'Пермь', coordinates: [56.25, 58.01] },
  { name: 'Наб. Челны', coordinates: [52.41, 55.74] },
  { name: 'Тюмень', coordinates: [65.53, 57.15] },
  { name: 'Томск', coordinates: [84.97, 56.5] },
  { name: 'Пенза', coordinates: [45.02, 53.2] },
  { name: 'Волгоград', coordinates: [44.51, 48.72] },
  { name: 'Новороссийск', coordinates: [37.77, 44.72] },
  { name: 'Архангельск', coordinates: [40.54, 64.55] },
  { name: 'Уфа', coordinates: [55.97, 54.73] },
  { name: 'Братск', coordinates: [101.61, 56.13] },
  { name: 'Тольятти', coordinates: [49.42, 53.51] },
  { name: 'Воронеж', coordinates: [39.2, 51.67] },
  { name: 'Киров', coordinates: [49.67, 58.6] },
  { name: 'Ухта', coordinates: [53.68, 63.57] },
  { name: 'Ярославль', coordinates: [39.87, 57.63] },
  { name: 'Владивосток', coordinates: [131.87, 43.12] },
  { name: 'Севастополь', coordinates: [33.53, 44.62] },
];

const geoUrl = '/russia.geojson';

export const Geography: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 px-4 bg-slate-950 border-b border-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h4 className="text-amber-500 font-mono text-xs mb-2 uppercase tracking-widest">/ География</h4>
          <h2 className="text-3xl md:text-4xl text-white font-display font-bold">
            Здесь уже навели порядок
          </h2>
          <p className="text-slate-500 text-sm font-mono mt-4 max-w-xl mx-auto">
            {cities.length} городов от Севастополя до Владивостока. Масштаб, подтверждённый результатами.
          </p>
        </div>

        {/* Map */}
        <div className={`relative w-full max-w-5xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Counter overlay */}
          <div className="absolute top-4 right-4 z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-amber-500/30 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl md:text-2xl font-display font-bold text-amber-500">{cities.length}</div>
                <div className="text-[7px] md:text-[8px] font-mono text-slate-500 uppercase tracking-widest">городов</div>
              </div>
            </div>
          </div>

          {/* Tooltip */}
          {hoveredCity && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-2 bg-slate-900/95 border border-amber-500/40 rounded-sm backdrop-blur-sm pointer-events-none">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-white font-mono text-sm font-bold">{hoveredCity}</span>
                <span className="text-amber-500 font-mono text-xs">✓ контроль установлен</span>
              </div>
            </div>
          )}

          <div className="border border-slate-800/50 rounded-sm overflow-hidden">
            <ComposableMap
              projection="geoConicEquidistant"
              projectionConfig={{
                center: [0, 56],
                rotate: [-80, 0, 0],
                parallels: [50, 65],
                scale: 700,
              }}
              width={900}
              height={500}
              style={{ width: '100%', height: 'auto', background: 'rgba(15,23,42,0.5)' }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geo
                      key={geo.rsmKey}
                      geography={geo}
                      fill="rgba(51,65,85,0.5)"
                      stroke="rgba(100,116,139,0.3)"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: 'none' },
                        hover: { outline: 'none', fill: 'rgba(51,65,85,0.6)' },
                        pressed: { outline: 'none' },
                      }}
                    />
                  ))
                }
              </Geographies>

              {cities.map((city) => {
                const isHovered = hoveredCity === city.name;
                return (
                  <Marker
                    key={city.name}
                    coordinates={city.coordinates}
                    onMouseEnter={() => setHoveredCity(city.name)}
                    onMouseLeave={() => setHoveredCity(null)}
                  >
                    {/* Hover pulse */}
                    {isHovered && (
                      <circle r={18} fill="rgba(245,158,11,0.15)">
                        <animate attributeName="r" from="8" to="20" dur="1s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.3" to="0" dur="1s" repeatCount="indefinite" />
                      </circle>
                    )}
                    {/* Glow */}
                    <circle
                      r={isHovered ? 14 : 9}
                      fill={isHovered ? 'rgba(245,158,11,0.2)' : 'rgba(245,158,11,0.1)'}
                      style={{ transition: 'all 0.2s ease' }}
                    />
                    {/* Dot */}
                    <circle
                      r={isHovered ? 5 : 3.5}
                      fill={isHovered ? '#fbbf24' : '#f59e0b'}
                      opacity={0.9}
                      style={{ transition: 'all 0.2s ease', cursor: 'pointer' }}
                    />
                    <circle
                      r={isHovered ? 2.5 : 1.5}
                      fill="#fde68a"
                      style={{ transition: 'all 0.2s ease' }}
                    />
                    {/* Label */}
                    <text
                      textAnchor="middle"
                      y={-8}
                      style={{
                        fontSize: '6.5px',
                        fontFamily: 'monospace',
                        fill: isHovered ? 'rgba(251,191,36,1)' : 'rgba(226,232,240,0.85)',
                        letterSpacing: '0.3px',
                        fontWeight: isHovered ? 700 : 600,
                        pointerEvents: 'none',
                        userSelect: 'none',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {city.name.toUpperCase()}
                    </text>
                  </Marker>
                );
              })}
            </ComposableMap>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-800 bg-slate-900/50 rounded-sm">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-slate-500 font-mono text-xs">Работаем по всей России — дистанционно и с выездом</span>
          </div>
        </div>
      </div>
    </section>
  );
};
