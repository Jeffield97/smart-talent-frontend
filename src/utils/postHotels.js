import axios from "axios"

const postHotels = async (data) => {
  await axios.post("https://hotels-rax2.onrender.com/hoteles",data)
}

export default postHotels