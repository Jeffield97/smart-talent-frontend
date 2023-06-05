import axios from "axios"

const apiHoteles = async () => {
  const response = await axios.get("https://hotels-rax2.onrender.com/hoteles")
  response.data.sort((a,b)=>a.id - b.id)
  return(response.data)
}

export default apiHoteles