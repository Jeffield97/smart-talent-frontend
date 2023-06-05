import React from "react";
import { useForm } from "react-hook-form";

const FormClient = ({closeModal, room, handleReserv,handleSendBooking}) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className=" w-3/12 mx-auto shadow-md shadow-stone-900 p-4 rounded-xl text-stone-300 bg-stone-800">
      <h1 className="text-center font-bold text-2xl">Registrar reserva</h1>
      <form
        className="mt-5 space-y-3 text-stone"
        action=""
        onSubmit={handleSubmit(handleSendBooking)}
      >
        <h3>Habitación a reservar {room?.numero}</h3>
        <div className="flex flex-col space-y-1 ">
          <label htmlFor="nombre">Nombre y apellido:</label>
          <input
            className="bg-white text-stone-800"
            id="nombre"
            type="text"
            {...register("nombre")}
          />
        </div>
        <div className="flex space-x-4">
          <label htmlFor="nombre">Fecha de nacimiento:</label>
          <input
            className="bg-white text-stone-800"
            id="nombre"
            type="date"
            {...register("fecha_nacimiento")}
          />
        </div>
        <div className="flex justify-start space-x-2">
          <label htmlFor="genero">Genero:</label>
          <select {...register("genero")} name="" id="genero">
            <option value={"masculino"}>Masculino</option>
            <option value={"femenino"}>Femenino</option>
          </select>
        </div>
        <div className="flex justify-start space-x-2">
          <label htmlFor="tipoDocumento">Tipo de documento:</label>
          <select {...register("tipo_documento")} name="" id="tipoDocumento">
            <option value={"dni_extranjero"}>DNI Extranjero</option>
            <option value={"dni_local"}>DNI</option>
          </select>
        </div>
        <div className="flex flex-col space-y-1 ">
          <input
            className="bg-white text-stone-800"
            id="dni"
            type="text"
            maxLength={10}
            placeholder="Ingresa tu documento"
            {...register("documento")}
          />
        </div>
        <div className="flex flex-col space-y-1 ">
          <label htmlFor="email">Email:</label>
          <input
            className="bg-white text-stone-800"
            id="email"
            type="email"
            placeholder="example@email.com"
            {...register("email")}
          />{" "}
        </div>
        <div className="flex flex-col space-y-1 ">
          <label htmlFor="email">Telefono:</label>
          <input
            className="bg-white text-stone-800"
            id="email"
            type="number"
            maxLength={10}
            placeholder="0987556412"
            {...register("telefono")}
          />{" "}
        </div>
        <button className="w-full btn mt-5 btn-sm">Reservar</button>
        <button className="w-full btn mt-5 btn-warning btn-sm" onClick={closeModal}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormClient;
