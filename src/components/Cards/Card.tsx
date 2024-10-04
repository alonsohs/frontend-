import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  imageSrc: string;
  redirectUrl: string;
  title: string;
}

export const Card: React.FC<CardProps> = ({ imageSrc, redirectUrl, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectUrl);
  };

  return (
    <div className="Card_Card" onClick={handleClick}>
      <img src={imageSrc} alt="Imagen_Card" className="Imagen_Card" />
      <h3 className="Titulo_Card">{title}</h3>
    </div>
  );
};
