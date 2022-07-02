import "./App.css";
import Card from "./Card.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const url = "https://randomuser.me/api/";
  const [first, setFirst] = useState();
  const response = async () => {
    const { data } = await axios.get(url);
    const response = data.results[0];

    // const {
    //   cell,
    //   dob,
    //   email,
    //   gender,
    //   location,
    //   name,
    //   picture,
    //   phone,
    //   nat,
    //   registered,
    // } = response;
    setFirst(response);
    console.log(first);
  };
  useEffect(() => {
    response();
  }, []);
  return (
    <div className="container">
      {first && <Card first={first} />}
      <button className="btn btn-primary mt-4" onClick={() => response()}>
        Random User
      </button>
    </div>
  );
}

export default App;
