import axios from "axios"

const updateHotels = async (data) => {
  await axios.put(`https://hotels-rax2.onrender.com/hoteles/${data.id}`,data)
}

export default updateHotels