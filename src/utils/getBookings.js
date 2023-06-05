import axios from "axios"

const getBooking = async (id) => {
  const response = await axios.get(`http://localhost:8080/reservas/${id}`)
  response.data.sort((a,b)=>a.id - b.id)
  return(response.data)
}

export default getBooking