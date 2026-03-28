import React, { useState } from "react";
import { supabase } from "../client";

const CreatorForm = () => {
  const [creator, setCreator] = useState({
    name: "",
    description: "",
    url: "",
    imageURL: "",
  });

  function resetForm() {
    setCreator({
      name: "",
      description: "",
      url: "",
      imageURL: "",
    });
  }

  const submit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("creators")
      .insert([creator])
      .single();
    if (error) {
      alert("Failed to add creator")
    } else {
      alert("Successfully added a creator")
    }
    resetForm();
  };
  return (
    <main>
      <form onSubmit={(e) => submit(e)}>
        <fieldset>
          <label>
            Name
            <input
              name="name"
              placeholder="name"
              autoComplete="name"
              value={creator.name}
              onChange={(e) => setCreator({ ...creator, name: e.target.value })}
              required
            />
          </label>
          <label>
            Description
            <textarea
              name="description"
              placeholder="description"
              aria-label="description"
              required
              value={creator.description}
              onChange={(e) =>
                setCreator({ ...creator, description: e.target.value })
              }
            ></textarea>
          </label>
          <label>
            URL
            <input
              name="url"
              placeholder="url"
              autoComplete="url"
              required
              value={creator.url}
              onChange={(e) => setCreator({ ...creator, url: e.target.value })}
            />
          </label>
          <label>
            imageURL
            <input
              name="imageURL"
              placeholder="imageURL"
              autoComplete="imageURL"
              required
              value={creator.imageURL}
              onChange={(e) =>
                setCreator({ ...creator, imageURL: e.target.value })
              }
            />
          </label>
        </fieldset>

        <input type="submit" value="Submit" />
      </form>
    </main>
  );
};

export default CreatorForm;
