import { useState, useEffect, createContext } from "react";
import { supabase } from "../client.js";
import CreatorCard from "../components/CreatorCard.jsx";
import ViewCreator from "./ViewCreator.jsx";
const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

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

  const onDelete = async (id) => {};
  const onEdit = async (id) => {};
  const onView = async (id) => {};

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
