import { useState, useEffect } from 'react'
import { supabase } from '../client.js'
import CreatorCard from '../components/CreatorCard.jsx'

const ShowCreators = () => {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    const fetchCreators = async() => {
      const {data, error} = await supabase.from('creators').select("*")
      if(error){console.log(error)}
      else{setCreators(data)}
      console.log(creators)
    }
    fetchCreators()
  }, [])

  const onDelete = async(id) => {}
  const onEdit = async(id) => {}

  return (
    <main>
      {creators.map((creator) => <CreatorCard key={creator.id}/>)}
    </main>
  )
}

export default ShowCreators