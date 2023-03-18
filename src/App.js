import "./App.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Cards } from "./Cards";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { BrowserRouter as Switch, Route, useHistory } from "react-router-dom";

export default function App() {
  const data = [
    {
      name: "Squido",
      power: "water",
      weakness: "Grass",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      description:
        "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    },
    {
      name: "Charmander ",
      power: "fire",
      weakness: "Water",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
      description:
        "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    },
    {
      name: "Bulbasaur",
      power: "Grass",
      weakness: "Fire",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      description:
        "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    },
    {
      name: "Psyduck",
      power: "Psycic",
      weakness: "Electric",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
      description:
        "Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.",
    },
    {
      name: "Growlithe",
      power: "Fire",
      weakness: "Water",
      img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
      description:
        "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
    },
  ];
  const [list, setList] = useState(data);
  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const [weakness, setWeakness] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  return (
      <div className="main">
        <Typography
          className="heading"
          gutterBottom
          variant="h5"
          component="div"
        >
          Welcome to the Rarest{" "}
          <img
            className="pokimg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="pokimon"
          />{" "}
          Collection! Feel free to add your favourite{" "}
          <img
            className="pokimg"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="pokimon"
          />{" "}
          and alter the collection as you see fit.
        </Typography>
        <div className="inputfield">
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            id="standard-basic"
            label="Name"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setPower(e.target.value);
            }}
            id="standard-basic"
            label="Power"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setWeakness(e.target.value);
            }}
            id="standard-basic"
            label="Weakness"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setImg(e.target.value);
            }}
            id="standard-basic"
            label="img"
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            id="standard-basic"
            label="discription"
            variant="standard"
          />
          <Button
            onClick={() =>
              setList([...list, { name, power, weakness, img, description }])
            }
            variant="contained"
          >
            Add Pokemon
          </Button>
      </div>
      <Switch>
        <Route exact path="/">
          <Main list={list} setList={setList} />
        </Route>
      </Switch>
    </div>
  );
}
function Main({ list, setList }) {
  const history = useHistory();
  return (
    <div className="App">
      {list.map(({ name, power, weakness, img, description }, index) => (
        <Cards
          name={name}
          power={power}
          weakness={weakness}
          img={img}
          description={description}
          deletebutton={
            <IconButton
              onClick={() => {
                const deleteindex = index;
                const remainingpoke = list.filter(
                  (poke, ix) => deleteindex !== ix
                );
                setList(remainingpoke);
              }}
            >
              <DeleteIcon color="error" />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
