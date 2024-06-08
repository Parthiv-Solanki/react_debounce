import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import { debounce } from "lodash";
import { useDebounce } from "./hook/useDebounce";

function App() {
  // const [word, setWord] = useState("");
  const [searchValue, setSearchValue] = useState("");

  // 1st way
  // const handleText = debounce((text) => {
  //   setWord(text);
  // }, 1000);

  // 2nd way
  // const debFunc = useCallback(
  //   debounce((text) => {
  //     setWord(text);
  //   }, 1000),
  //   []
  // );
  // const handleText = (text) => {
  //   debFunc(text);
  // };

  /* new method without using debounce from lodash  */
  const debounceSearchValue = useDebounce(searchValue, 1000);

  return (
    <div className="App">
      <header className="App-header">
        {/* <input type="text" onChange={(e) => handleText(e.target.value)} /> */}
        {/* <div>{word}</div> */}

        {/* new method without using debounce from lodash  */}
        <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
        <div>{debounceSearchValue}</div>
      </header>
    </div>
  );
}

export default App;
