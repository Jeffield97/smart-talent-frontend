import React from "react";
import "./HotelCard.css";
import { useNavigate } from "react-router-dom";
const HotelCard = ({ hotel, handleEdit }) => {
  const navigate = useNavigate();
  const colorHotel = ["rgb(8 149 136)", "rgb(149 34 8)"];
  return (
    <div className="card flex flex-col shadow-md shadow-stone-950 rounded-xl p-5 text-stone-600 bg-slate-200 my-5">
      <h2 className="font-bold text-center">{hotel.nombre}</h2>
      <div className="text-center my-3">
        <i
          style={{ color: hotel.habilitado ? colorHotel[0] : colorHotel[1] }}
          className="fa-solid fa-hotel fa-2xl"
        ></i>
      </div>
      <h2>
        <span className="font-bold">Habitaciones:</span> {hotel.numero_habitaciones}
      </h2>
      <h2>
        <span className="font-bold">Ubicacion:</span> {hotel.ubicacion}
      </h2>
      <h2>
        <span className="font-bold">Cantidad de personas:</span> {hotel.cantidad_personas}
      </h2>
      <h3 className="font-bold">
        {hotel.habilitado ? "Habilitado" : "Deshabilitado"}
      </h3>
      <button
        className="btn btn-xs my-2 text-stone-900 btn-outline hover:bg-blue-900 hover:text-slate-50"
        onClick={() => handleEdit(hotel)}
      >
        Editar
      </button>
      <button
      disabled={!hotel.habilitado}
        className="btn btn-xs my-2 text-stone-900 btn-outline hover:bg-blue-900 hover:text-slate-50"
        onClick={() => navigate(`/rooms/hotel/${hotel.id}`)}
      >
        Habitaciones
      </button>
    </div>
  );
};

export default HotelCard;
