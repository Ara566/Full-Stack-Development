/*
The process to follow to send data from the child to the parent component.
1. Create a function in the parent component.
2. Send this function to the child component as a prop in the parent component.
3. call that passed function in the child component and add a required argument in the calling function as an argument.

*/
import React, { useState } from 'react';

const ParentComponent = () => {
  const [dataFromChild, setDataFromChild] = useState('');

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h2>Data from Child: {dataFromChild}</h2>
      <ChildComponent send={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;





const ChildComponent = ({ send }) => {
  function sendData(){
    send('Hello from child!');
  };

  return (
    <div>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};
