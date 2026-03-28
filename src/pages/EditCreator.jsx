import React from "react";
import CreatorForm from "../components/CreatorForm";
import { useParams } from "react-router-dom";

const EditCreator = () => {
  const {id} = useParams()
  return (
    <CreatorForm id={id}/>
  );
};

export default EditCreator;
