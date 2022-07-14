import axios from "axios";
import { useState, useEffect } from "react";
import GitHubSearch from "./Components/GitHubSearch";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  function handleClick(text) {
    fetch().then((res) => {
      let x = res.data.items;
      setData(x);
    });
  }
  useEffect(() => {}, []);

  function fetch(text) {
    return axios.get(`https://api.github.com/search/users?q=${text}`);
  }

  console.log(data);
  console.log(text);

  return (
    <div className="App">
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        type="text"
        placeholder="write something here"
      />
      <button onClick={() => handleClick(text)}>ADD</button>
      <h1>Hello</h1>
      {data.map((elem) => (
        <div>{elem.login}</div>
      ))}
      {/* <GitHubSearch/> */}
      {/* <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
