import React from "react";

const ViewCreator = () => {
  return (
    <>
    <main>
      <hgroup>
        <h2 style={{marginBottom:"1rem"}}>View Creator</h2>
        <p>Name</p>
      </hgroup>
      <hr />
      <details name="example">
        <summary>More details</summary>
        <ul>
          <li>Description</li>
          <li>Follow on Social</li>
          <li>Image</li>
        </ul>
      </details>
    </main>
    </>
  );
};

export default ViewCreator;
