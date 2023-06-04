import axios from "axios"

const updateRooms = async (data) => {
  await axios.put(`http://localhost:8080/habitaciones/${data.id}`,data)
}

export default updateRooms