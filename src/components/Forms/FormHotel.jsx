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
    initialData ? initialData.enabled : false
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
      <div className="shadow-lg shadow-stone-400 p-4 rounded-xl text-stone-300 bg-stone-800">
        <h2 className="text-center text-2xl font-bold">Nuevo hotel</h2>
        <form className="mt-5 space-y-3" action="" onSubmit={handleSubmit(handleSend)}>
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="nombre">Nombre</label>
            <input
              className="bg-white text-stone-800"
              id="nombre"
              type="text"
              {...register("name")}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="nombre">Numero de habitaciones</label>
            <input
              className="bg-white text-stone-800"
              id="nombre"
              type="number"
              {...register("rooms")}
            />
          </div>
          <div className="flex justify-between items-center">
            <h3>{enabled?"Habilitado":"Desahabilitado"}</h3>
            <input
              type="checkbox"
              {...register("enabled")}
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

////////////////////***/
/*import React from "react";
import { useForm } from "react-hook-form";

const Modal = ({ openCreate, setOpenCreate }) => {
const {register,handleSubmit}=useForm()
  const closeModal = (e) => {
    e.preventDefault();
    setOpenCreate(false);
  };
  const Register=(data)=>{
    console.log(data)
  }
  return (
    <div
      style={{ background: "rgb(0 0 0 / 56%)" }}
      className=" absolute inset-0 w-screen h-screen flex justify-center items-center"
    >
      <div className="border p-4 rounded-xl text-stone-300">
        <h2 className="text-center text-2xl font-bold">Nuevo hotel</h2>
        <form className="mt-5" action="" onSubmit={handleSubmit(Register)}>
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="nombre">Nombre</label>
            <input
              className="bg-white text-stone-800"
              id="nombre"
              type="text" {...register("nameHotel")}
            />
          </div>
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="nombre">Numero de habitaciones</label>
            <input
              className="bg-white text-stone-800"
              id="nombre"
              type="number"
              {...register("roomsAmount")}
            />
          </div>
          <button  className="w-full btn mt-5 btn-sm">
            Registrar hotel
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

export default Modal;*/
