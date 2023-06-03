import React, { useState } from "react";
import Modal from "../../components/ModalCreate/Modal";
import FormHotel from "../../components/Forms/FormHotel";

const Hotel = () => {
  const [hotels, sethotels] = useState([
    { id: "1", name: "Hotel 1", rooms: 10, enabled: false },
    { id: "2", name: "Hotel 2", rooms: 10, enabled: true },
    { id: "3", name: "Hotel 3", rooms: 10, enabled: false },
  ])
  const [isVisible, setisVisible] = useState(false);
  const [editingUser, seteditingUser] = useState(undefined)
  const openModal = () => {
    setisVisible(true);
  };
  const handleSend=(data)=>{
    console.log(data)
    //Call send function
  }
  const handleEdit=(data)=>{
    seteditingUser(data)
    setisVisible(true)
  }

  return (
    <div>
      <div>contenido</div>
      <button className="btn" onClick={openModal}>
        Create new Hotel
      </button>
      {hotels.length&&hotels.map((hotel)=>(<div key={hotel.id}>{hotel.name} <button className="btn btn-xs" onClick={()=>handleEdit(hotel)}>Editar</button></div>))}
      {isVisible && (
        <Modal isVisible={isVisible} >
          <FormHotel setisVisible={setisVisible} handleSend={handleSend} initialData={editingUser}></FormHotel>
        </Modal>
      )}
    </div>
  );
};

export default Hotel;
