import React from "react";
import { useEffect , useState } from "react";

const App = () => {
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, [])
  

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#181010",
      }}
    >
      <h1 style={{color: "white" , marginBottom: "1rem" , fontSize: "80px"}}>Full Stack Development</h1>
      <p style={{color: "white" , fontSize: "40px"}}>{message}</p>
    </div>
  );
};

export default App;
