import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FormHotel = ({
  setisVisible,
  handleSend,
  initialData,
  setInitialData,
}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData,
  });
  const [enabled, setenabled] = useState(
    initialData ? initialData.habilitado : false
  );
  const closeModal = (e) => {
    e.preventDefault();
    setisVisible(false);
    reset();
    setInitialData(null);
  };

  const changeEnabled = () => {
    setenabled(!enabled);
  };
  return (
    <div
      style={{ background: "rgb(0 0 0 / 56%)" }}
      className=" absolute inset-0 w-screen h-screen flex justify-center items-center"
    >
      <div className="shadow-md shadow-stone-900 p-4 rounded-xl text-stone-300 bg-stone-800">
        <h2 className="text-center text-2xl font-bold">Nuevo hotel</h2>
        <form className="mt-5 space-y-3" action="" onSubmit={handleSubmit(handleSend)}>
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="nombre">Nombre</label>
            <input
              className="bg-white text-stone-800"
              id="nombre"
              type="text"
              {...register("nombre")}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="numero_habitaciones">Numero de habitaciones</label>
            <input
              className="bg-white text-stone-800"
              id="numero_habitaciones"
              type="number"
              {...register("numero_habitaciones")}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="ubicacion">Ubicacion</label>
            <input
              className="bg-white text-stone-800"
              id="ubicacion"
              type="texto"
              {...register("ubicacion")}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="cantidad_personas">Cantidad de personas</label>
            <input
              className="bg-white text-stone-800"
              id="cantidad_personas"
              type="number"
              {...register("cantidad_personas")}
            />
          </div>
          <div className="flex justify-between items-center">
            <h3>{enabled?"Habilitado":"Desahabilitado"}</h3>
            <input
              type="checkbox"
              {...register("habilitado")}
              onClick={changeEnabled}
              className="toggle toggle-sm toggle-success"
              checked={enabled}
            />
          </div>
          <button className="w-full btn mt-5 btn-sm">
            {initialData ? "Actualizar" : "Registrar"}
          </button>
          <button
            className="w-full btn mt-5 btn-warning btn-sm"
            onClick={closeModal}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormHotel;