import React from "react";
// import Image from 'next/image';
const loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img src="https://res.cloudinary.com/dnsmxuhrz/image/upload/v1700215116/banner/loading_rj37pn.gif"  alt='Photos'/>
    </div>
  );
};

export default loading;
