import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RoomCard from "../../components/RoomCard/RoomCard";
import FormRoom from "../../components/Forms/FormRoom";
import Modal from "../../components/ModalCreate/Modal";
import FormClient from "../../components/Forms/FormBooking";
import postRooms from "../../utils/postRooms";
import getRooms from "../../utils/getRooms";
import updateRooms from "../../utils/updateRooms";
import postBooking from "../../utils/postBookings";

const Room = () => {
  const [rooms, setrooms] = useState([])

  const [isVisible, setisVisible] = useState(false);
  const [isVibileForm, setisVibileForm] = useState(false);
  const [editingRoom, seteditingRoom] = useState(undefined);
  const navigate = useNavigate()
  const openModal = () => {
    setisVisible(true);
  };

  const getRoomsHotel= async()=>{
    const roomsFromHotel= await getRooms(id)
    setrooms(roomsFromHotel)
  }
  useEffect(() => {
    getRoomsHotel()
  }, [])
  
  const handleEdit = (data) => {
    seteditingRoom(data);
    console.log({data});
    setisVisible(true);
  };
  const handleSendBooking = async (data)=>{
    data.habitacionId=editingRoom.id
    data.hotelId=editingRoom.hotelId
    await postBooking(data)
   
    setisVibileForm(false)
    seteditingRoom(null)
    getRoomsHotel()
  }
  const handleReserv = async (data) => {
    data.hotelId=id
    console.log(data)
    seteditingRoom(data);
    setisVibileForm(true);
  };
  
  const handleSend = async (data) => {
    data.hotelId=Number(id)
    data.numero=Number(data.numero)
    data.costo=Number(data.costo)
    data.impuesto=Number(data.impuesto)
    data.tipo=Number(data.tipo)
    editingRoom?null:data.reservada=false
    if (editingRoom) {
      console.log(data.id)
      await updateRooms(data)
    } else {
      data.reservada=false
      await postRooms(data)
    }    
   
    await getRoomsHotel(id)
    setisVisible(false);
    setisVibileForm(false);
    seteditingRoom(undefined);

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
            <FormClient closeModal={() => setisVibileForm(false)} room={editingRoom}  handleReserv={handleReserv} handleSendBooking={handleSendBooking} ></FormClient>
          </Modal>
        )}
    </div>
  );
};

export default Room;