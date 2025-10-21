// src/components/WaveDivider.jsx

const WaveDivider = ({ fillColor, direction = 'top', height = '100px' }) => {
  // direction: 'top' (onda na parte superior do divisor) ou 'bottom' (onda na parte inferior do divisor)
  // fillColor: A cor que a onda terá (geralmente a cor da seção que ela está 'cobrindo')

  // Se a direção for 'top', a onda sobe da base. Se for 'bottom', a onda desce da base.
  // Invertemos o SVG e o transform conforme a direção.
  const transform = direction === 'top' ? 'scaleY(-1)' : 'none';
  const viewBox = direction === 'top' ? "0 0 1000 100" : "0 0 1000 100";
  const pathD = direction === 'top' 
    ? "M0,100 C150,0 350,100 500,50 C650,0 850,100 1000,0 L1000,100 L0,100 Z"
    : "M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,100 L1000,0 L0,0 Z";

  return (
    <div 
      className="relative w-full overflow-hidden" 
      style={{ height: height, backgroundColor: fillColor }} // O background do divisor é a cor da onda
    >
      <svg 
        className="absolute bottom-0 left-0 w-full h-full" 
        viewBox={viewBox} 
        preserveAspectRatio="none"
        style={{ transform: transform }}
      >
        <path d={pathD} fill="white"></path> {/* A onda em si é branca, revelando a cor do fill da seção de baixo */}
      </svg>
    </div>
  );
};

export default WaveDivider;