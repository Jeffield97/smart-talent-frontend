import axios from "axios"

const postRooms = async (data) => {
  console.log(data)
  await axios.post("https://hotels-rax2.onrender.com/habitaciones",data)
}

export default postRooms