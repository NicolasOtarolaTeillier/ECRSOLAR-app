import { useEffect, useState } from 'react'

const useFetch = (url,content) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await fetch(url,content)
    const data = await response.json()
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  useEffect(()=>{
    console.log(data)
  },[data])

  return {loading,data}
}

export default useFetch
