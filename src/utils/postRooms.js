import axios from "axios"

const postRooms = async (data) => {
  console.log(data)
  await axios.post("http://localhost:8080/habitaciones",data)
}

export default postRooms