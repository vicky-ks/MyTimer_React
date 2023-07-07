import React, { useState } from "react";

const App = () => {
  let itime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(itime);
  const UpdateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  setInterval(UpdateTime,1000);
  return (
    <>
      <h1>{ctime}</h1>
    </>
  );
};

export default App;
