import axios from "axios"

const apiHoteles = async () => {
  const response = await axios.get("http://localhost:8080/hoteles")
  response.data.sort((a,b)=>a.id - b.id)
  return(response.data)
}

export default apiHoteles