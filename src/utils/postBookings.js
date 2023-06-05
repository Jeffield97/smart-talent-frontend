import axios from "axios"

const postBooking = async (data) => {
  await axios.post("http://localhost:8080/reservas",data)
}

export default postBooking