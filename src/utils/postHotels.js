import axios from "axios"

const postHotels = async (data) => {
  await axios.post("http://localhost:8080/hoteles",data)
}

export default postHotels