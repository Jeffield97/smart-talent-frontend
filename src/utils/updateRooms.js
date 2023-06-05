import axios from "axios"

const updateRooms = async (data) => {
  await axios.put(`https://hotels-rax2.onrender.com/habitaciones/${data.id}`,data)
}

export default updateRooms