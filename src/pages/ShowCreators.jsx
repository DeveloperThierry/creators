import { useState, useEffect, createContext } from "react";
import { supabase } from "../client.js";
import CreatorCard from "../components/CreatorCard.jsx";
import ViewCreator from "./ViewCreator.jsx";
import { useNavigate } from "react-router-dom";
const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        console.log(error);
      } else {
        setCreators(data);
      }
      console.log(creators);
    };
    fetchCreators();
  }, []);

  const onDelete = async (id) => {
    const {data, error} = await supabase.from('creators').delete().eq("id", id)
    if(error){alert("Error. Creator has not been removed"); console.log(error)}
    else{
        alert("Creator has been removed")
        setCreators(creators.filter(creator => creator.id != id))
    }
  };
  const onEdit = async (id) => {
    navigate(`/creators/edit/${id}`)
  };
  const onView = async (id) => {
    navigate(`/creators/${id}`)
  };

  if (creators.length == 0) return <h1>No Creators Found</h1>;

  return (
      <main>
        {creators.map((creator) => (
          <CreatorCard
            key={creator.id}
            onDelete={onDelete}
            onEdit={onEdit}
            onView={onView}
            creator={creator}
          />
        ))}
      </main>
  );
};

export default ShowCreators;
