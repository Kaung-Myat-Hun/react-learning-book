import { useState } from "react";

function Input() {
  const [username, setUsername] = useState("");
  const inputHandler = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value)
  }
  return (
    <input
      type="text"
      name="username"
      value={username}
      placeholder="Enter username"
      onChange={inputHandler}
    />
  );
}

export default Input;

