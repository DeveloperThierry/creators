import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";
const ViewCreator = () => {
  const {id} = useParams()
  const [creator, setCreator] = useState(null)
  useEffect(() => {
      const fetchCreators = async () => {
        const { data, error } = await supabase.from("creators").select("*");
        const creatorFound = data.find((creator) => creator.id == id)        
        if (error) {
          console.log(error);
        } else {
          setCreator(creatorFound);
        }
      };
      fetchCreators();
    }, []);
  if(!creator) return <h1>No Creator with that ID Found</h1>
  return (
    <>
    <main>
      <hgroup>
        <h2 style={{marginBottom:"1rem"}}>View Creator</h2>
        <p>{creator.name}</p>
      </hgroup>
      <hr />
      <details name="example">
        <summary>More details</summary>
        <ul>
          <li>{creator.description}</li>
          <li>Follow on Social @{creator.url}</li>
          <li>
            <img src={creator.imageUrl} alt={`png`} />
          </li>
        </ul>
      </details>
    </main>
    </>
  );
};

export default ViewCreator;
