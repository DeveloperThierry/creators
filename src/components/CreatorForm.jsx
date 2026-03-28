import React from "react";

const CreatorForm = () => {
  return (
    <main>
      <form>
        <fieldset>
          <label>
            Name
            <input name="name" placeholder="name" autoComplete="name" />
          </label>
          <label>
            description
            <textarea
              name="description"
              placeholder="description"
              aria-label="description"
            ></textarea>
          </label>
          <label>
            Url
            <input name="url" placeholder="ur;" autoComplete="url" />
          </label>
          <label>
            ImageUrl
            <input name="imageUrl" placeholder="imageUrl" autoComplete="imageUrl" />
          </label>
        </fieldset>

        <input type="submit" value="Submit" />
      </form>
    </main>
  );
};

export default CreatorForm;
