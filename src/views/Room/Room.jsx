import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
];

// const [editingRoom, seteditingRoom] = useState(undefined);

const Room = () => {
  const [isVisible, setisVisible] = useState(false);
  const [isVibileForm, setisVibileForm] = useState(false);
  const [editingRoom, seteditingRoom] = useState(undefined);

  const handleEdit = (data) => {
    seteditingRoom(data);
    console.log(data);
    setisVisible(true);
  };
  const handleReserv = (data) => {
    console.log("abriendome")
    setisVibileForm(true);
  };
  const handleSend = (data) => {
    console.log(data);
    setisVisible(false);
    seteditingRoom(undefined);

    //Call send function
  };
  const { id } = useParams();
  return (
    <div className="bg-slate-500">
      <div>
        <h1>Hotel {id}</h1>
      </div>
      <div className="flex justify-end">
        <button className="btn btn-btn m-8">Asignar habitacion</button>
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
          <FormClient closeModal={() => setisVibileForm(false)}></FormClient>
        )}
      </div>
    </div>
  );
};

export default Room;
