import axios from "axios"

const updateHotels = async (data) => {
  await axios.put(`http://localhost:8080/hoteles/${data.id}`,data)
}

export default updateHotels