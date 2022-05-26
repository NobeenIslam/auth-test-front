import axios from "axios";
import { useState } from "react";

function App(): JSX.Element {
  const[string,setString] = useState<string>("")
  const[secret,setSecret] = useState<string>("")

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://auth-test-back.herokuapp.com/"
      : "http://localhost:4000/";

  async function handleClick(){
    const response = await axios.get(baseUrl)
    const stringFromServer = response.data
    setString(stringFromServer)
  }

  async function handleClickSecret(){
    const response = await axios.get(baseUrl + "secret")
    const secretFromServer = response.data
    console.log("hello",response)
    setSecret(secretFromServer)
  }

  return (
  <>
    <button onClick={handleClick}>Click Me</button>
    <p>{string}</p>
    <button onClick={handleClickSecret}>Secret Button</button>
    <p>{secret}</p>
  </>
  );
}

export default App;
