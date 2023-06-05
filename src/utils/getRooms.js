import axios from "axios"

const getRooms = async (idHotel) => {
  const response = await axios.get(`https://hotels-rax2.onrender.com/habitaciones/hotel/${idHotel}`)
  response.data.sort((a,b)=>a.id - b.id)
  return(response.data)
}

export default getRooms