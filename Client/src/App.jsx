import {useState,useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [data,setData] = useState([])
  let API = 'http://localhost:8080/'
  
  const fetchData = async (url) =>{
    axios.get(url).then((response) =>{
      console.log(response.data.data[0].channel);
    })
  }
  useEffect(() =>{
  fetchData(API)
},[])
  return (
    <div>
      
    </div>
  )
}

export default App