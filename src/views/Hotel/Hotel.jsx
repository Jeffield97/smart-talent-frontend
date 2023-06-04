import React, { useEffect, useState } from "react";
import Modal from "../../components/ModalCreate/Modal";
import FormHotel from "../../components/Forms/FormHotel";
import HotelCard from "../../components/HotelCard/HotelCard";
import { useNavigate } from "react-router-dom";
import apiHoteles from "../../utils/getHotels"
import postHotels from "../../utils/postHotels";
import updateHotels from "../../utils/updateHotels";

const Hotel = () => {
  const [hotels, sethotels] = useState([]);
  const [isVisible, setisVisible] = useState(false);
  const [editingUser, seteditingUser] = useState(undefined);
  const navigate = useNavigate()

  const getHotels= async()=>{
    const hoteles= await apiHoteles()
    sethotels(hoteles)
  }
  useEffect(() => {
    getHotels()
  }, [])
  
  const openModal = () => {
    setisVisible(true);
  };
  const handleSend = async (data) => {
    data.numero_habitaciones=Number(data.numero_habitaciones)
    data.cantidad_personas=Number(data.cantidad_personas)
    console.log(data);
    data.id? await updateHotels(data):await postHotels(data)
    getHotels()
    setisVisible(false);
    seteditingUser(undefined)

    //Call send function
  };
  const handleEdit = (data) => {
    seteditingUser(data);
    setisVisible(true);
  };
  const cerrarSesion=()=>{
    navigate("/")
  }

  return (
    <div className="w-screen max-h-full" style={{background:"rgb(50 62 70)"}}>
      <div className="text-center"><h2 className="text-2xl pt-5 font-extrabold text-slate-200">Hoteles</h2></div>
      <div className="w-full flex justify-between">
        
        <button className="btn m-8" onClick={cerrarSesion}>
        <i className="fa-solid fa-right-from-bracket"></i>
        <span>Logout</span>
        </button>
        <button className="btn m-8" onClick={openModal}>
          Create new Hotel
        </button>
      </div>
      <div className="flex flex-wrap justify-evenly space w-8/12 mx-auto ">
        {hotels.length &&
          hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              handleEdit={handleEdit}
              hotel={hotel}
            ></HotelCard>
          ))}
        
      </div>
      {isVisible && (
          <Modal isVisible={isVisible}>
            <FormHotel
              setisVisible={setisVisible}
              handleSend={handleSend}
              initialData={editingUser}
              setInitialData={seteditingUser}
            ></FormHotel>
          </Modal>
        )}
    </div>
  );
};

export default Hotel;
