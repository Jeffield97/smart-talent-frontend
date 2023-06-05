import axios from "axios"

const postBooking = async (data) => {
  await axios.post("https://hotels-rax2.onrender.com/reservas",data)
}

export default postBooking