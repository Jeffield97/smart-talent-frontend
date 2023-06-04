import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RoomCard from "../../components/RoomCard/RoomCard";
import FormRoom from "../../components/Forms/FormRoom";
import Modal from "../../components/ModalCreate/Modal";
import FormClient from "../../components/Forms/FormClient";
const rooms = [
  { id: 1, enabled: true, reservada: true, costo: 2000, impuesto: 12, tipo: 1 },
  { id: 2, enabled: true, reservada: true, costo: 2300, impuesto: 12, tipo: 2 },
  {
    id: 3,
    enabled: true,
    reservada: false,
    costo: 2100,
    impuesto: 12,
    tipo: 1,
  },
  {
    id: 4,
    enabled: true,
    reservada: true,
    costo: 25600,
    impuesto: 12,
    tipo: 3,
  },
  { id: 5, enabled: true, reservada: true, costo: 2440, impuesto: 12, tipo: 1 },
  { id: 6, enabled: true, reservada: true, costo: 3000, impuesto: 12, tipo: 2 },
  { id: 7, enabled: true, reservada: true, costo: 3000, impuesto: 12, tipo: 2 },
  { id: 8, enabled: true, reservada: true, costo: 3000, impuesto: 12, tipo: 2 },
  { id: 9, enabled: true, reservada: true, costo: 3000, impuesto: 12, tipo: 2 },
  { id: 10, enabled: true, reservada: true, costo: 3000, impuesto: 12, tipo: 2 },
  { id: 11, enabled: true, reservada: true, costo: 3000, impuesto: 12, tipo: 2 },
  { id: 12, enabled: true, reservada: true, costo: 3000, impuesto: 12, tipo: 2 },
];

const Room = () => {
  const [isVisible, setisVisible] = useState(false);
  const [isVibileForm, setisVibileForm] = useState(false);
  const [editingRoom, seteditingRoom] = useState(undefined);
  const navigate = useNavigate()
  const openModal = () => {
    setisVisible(true);
  };

  const handleEdit = (data) => {
    seteditingRoom(data);
    console.log({data});
    setisVisible(true);
  };
  const handleReserv = (data) => {
    seteditingRoom(data);
    setisVibileForm(true);
  };
  const handleSend = (data) => {
    console.log(data);
    setisVisible(false);
    setisVibileForm(false);
    seteditingRoom(undefined);

    //Call send function
  };
  const { id } = useParams();
  return (
    <div className="w-screen  max-h-full" style={{background:"rgb(50 62 70)"}}>
      <div className="text-center">
        <h1 className="text-2xl pt-5 font-extrabold text-slate-200 ">Hotel {id}</h1>
      </div>
      <div className="flex justify-between">
        <button className="btn btn-btn m-8" onClick={()=>navigate("/hotels")}><i className="fa-solid fa-circle-chevron-left"></i>Hoteles</button>
        <button className="btn btn-btn m-8" onClick={openModal}>Asignar habitacion</button>
      </div>
      <div className="flex flex-wrap justify-evenly space w-8/12 mx-auto ">
        {rooms.map((room) => (
          <RoomCard
            key={room.id}
            room={room}
            handleEdit={handleEdit}
            handleReserv={handleReserv}
          ></RoomCard>
        ))}
        
      </div>
      {isVisible && (
          <Modal isVisible={isVisible}>
            <FormRoom
              setisVisible={setisVisible}
              handleSend={handleSend}
              initialData={editingRoom}
              setInitialData={seteditingRoom}
            ></FormRoom>
          </Modal>
        )}
        {isVibileForm && (
          <Modal>
            <FormClient closeModal={() => setisVibileForm(false)} room={editingRoom} handleSend={handleSend} ></FormClient>
          </Modal>
        )}
    </div>
  );
};

export default Room;
