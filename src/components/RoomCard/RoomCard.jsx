import React, { useState } from "react";
import FormClient from "../Forms/FormClient";
const colorRoom = ["rgb(8 149 136)", "rgb(149 34 8)"];
const RoomCard = ({ room, handleEdit, seteditingUser,openModal,handleReserv }) => {

  return (
    <div className="card flex flex-col shadow-md shadow-stone-950 rounded-xl p-5 text-stone-600 bg-slate-200 my-5">
      <h2 className="font-bold text-center">Habitación {room.id}</h2>
      <div className="text-center my-3">
        <i
          style={{ color: room.reservada ? colorRoom[1] : colorRoom[0] }}
          className={
            room.reservada
              ? "fa-solid fa-door-closed fa-2xl"
              : "fa-solid fa-door-open fa-2xl"
          }
        ></i>
      </div>
      <h2>
        <span className="font-bold">Personas:</span> {room.rooms}
      </h2>
      <h3 className="font-bold">
        {room.reservada ? "Reservada" : "Disponible"}
      </h3>
      <button
        className="btn btn-xs my-2 text-stone-900 btn-outline hover:bg-blue-900 hover:text-slate-50"
        onClick={() => handleEdit(room)}
      >
        Editar
      </button>
      <button
      disabled={room.reservada || !room.enabled}
        className="btn btn-xs my-2 text-stone-900 btn-outline hover:bg-blue-900 hover:text-slate-50"
        onClick={() => handleReserv(room)}
      >
        Reservar
      </button>
      
    </div>
  );
};

export default RoomCard;
