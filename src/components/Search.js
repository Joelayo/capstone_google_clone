import { useState, React } from "react";
import "../styles/Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "../components/MicIcon";
import { Button } from "@mui/material";
import sidehustle from "../sidehustle.png";

function Search() {
  const [text, setText] = useState(null);
  const [image, setImage] = useState(sidehustle);
  function handleChange(event) {
    setText(event.target.value);

    if (event.target.value.length != 0) {
      setImage(null);
    } else {
      setImage(sidehustle);
    }
  }
  return (
    <>
      <div className="home__body">
        <div className="home__text">
          <p> {text} </p>
        </div>
        <img src={image} className="App-logo" />
      </div>
      <form className="search">
        <div className="search__input">
          <SearchIcon className="search__inputIcon" />
          <input onChange={handleChange} />
          <MicIcon />
        </div>

        <div className="search__buttons">
          <Button variant="outlined" type="submit">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      </form>
    </>
  );
}

export default Search;
