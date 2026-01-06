import React from "react";
import { useNavigate } from "react-router-dom";

const Myname = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <h1>My Name is John Doe</h1>
      <h3>This is my name page.</h3>
      <button className="text-center align-middle m-2 px-1 bg-blue-500 text-white"
         onClick={handleClick}>Go Back</button>
    </div>
  );
}
export default Myname;