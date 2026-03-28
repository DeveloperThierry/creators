import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function App() {
  return (
    <main>
      <h1>Welcome to the Social Network</h1>
      <div className="grid">
        <section>
          <Link to="/creators">
            <button className="container">Show Creators</button>
          </Link>
        </section>
        <section>
          <Link to="/creators/new">
            <button className="container">New Creator</button>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default App;
