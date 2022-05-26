import axios from "axios";
import { useState } from "react";

function App(): JSX.Element {
  const[string,setString] = useState<string>("")
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://auth-test-back.herokuapp.com/"
      : "http://localhost:4000/";

  async function handleClick(){
    const response = await axios.get(baseUrl)
    const stringFromServer = response.data
    setString(stringFromServer)
  }

  return (
  <>
    <button onClick={handleClick}>Click Me</button>
    <div>{string}</div>
  </>
  );
}

export default App;
