import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  imageSrc: string;
  redirectUrl: string;
  title: string;
  subtitle?: string;
}

export const Card: React.FC<CardProps> = ({
  imageSrc,
  redirectUrl,
  title,
  subtitle,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectUrl);
  };

  return (
    <div className="w-full p-4 md:p-6">
      <div
        onClick={handleClick}
        className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 h-full"
      >
        <div className="relative flex flex-col h-full">
          <div className="aspect-square w-full overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradiente más oscuro para mejor contraste */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300" />
          </div>

          {/* Contenedor de texto con mejor posicionamiento y espaciado */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent pt-12">
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {title}
              </h3>
              {subtitle && (
                <p className="text-base md:text-lg text-gray-100 font-medium tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardGridProps {
  cards: CardProps[];
  columns?: 2 | 3 | 4;
}

export const CardGrid: React.FC<CardGridProps> = ({ cards, columns = 4 }) => {
  const getGridCols = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div
        className={`
          grid 
          ${getGridCols()} 
          gap-8 
          md:gap-12 
          lg:gap-16
        `}
      >
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
