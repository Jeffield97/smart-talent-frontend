import React, { useState } from "react";
import Modal from "../../components/ModalCreate/Modal";
import FormHotel from "../../components/Forms/FormHotel";
import HotelCard from "../../components/HotelCard/HotelCard";
import { useNavigate } from "react-router-dom";

const Hotel = () => {
  const [hotels, sethotels] = useState([
    { id: "1", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },
    { id: "2", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: true },
    { id: "3", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },
    { id: "4", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },
    { id: "5", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: true },
    { id: "6", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },
    { id: "7", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },
    { id: "8", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: true },
    { id: "9", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },{ id: "7", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },
    { id: "11", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: true },
    { id: "12", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },{ id: "7", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },
    { id: "13", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: true },
    { id: "23", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },{ id: "7", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },
    { id: "45", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: true },
    { id: "34", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },{ id: "7", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },
    { id: "64", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: true },
    { id: "62", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },{ id: "7", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },
    { id: "74", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: true },
    { id: "53", name: "Hotel Sarmiento del patita Zeref", rooms: 10, enabled: false },
  ]);
  const [isVisible, setisVisible] = useState(false);
  const [editingUser, seteditingUser] = useState(undefined);
  const navigate = useNavigate()
  const openModal = () => {
    setisVisible(true);
  };
  const handleSend = (data) => {
    console.log(data);
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
    <div className="w-screen bg-slate-500 h-screen">
      {/* <div>contenido</div> */}
      <div className="w-full flex justify-between">
        <button className="btn m-8" onClick={openModal}>
          Create new Hotel
        </button>
        <button className="btn m-8" onClick={cerrarSesion}>
        <i class="fa-solid fa-right-from-bracket"></i>
        <span>Logout</span>
        </button>
        
      </div>
      <div className="flex flex-wrap justify-evenly space w-8/12 mx-auto ">
        {hotels.length &&
          hotels.map((hotel) => (
            // <div key={hotel.id}>
            //   {hotel.name}{" "}
            //   <button className="btn btn-xs" onClick={() => handleEdit(hotel)}>
            //     Editar
            //   </button>
            // </div>
            <HotelCard
              key={hotel.id}
              handleEdit={handleEdit}
              hotel={hotel}
            ></HotelCard>
          ))}
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
    </div>
  );
};

export default Hotel;
