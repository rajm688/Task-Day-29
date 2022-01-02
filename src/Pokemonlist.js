import * as React from "react";
import Typography from "@mui/material/Typography";
import { Cards } from "./Cards";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export function Pokemonlist(setName, setPower, setWeakness, setImg, setDescription, setList, list, name, power, weakness, img, description, history) {
  return <div className="main">
    <Typography className="heading" gutterBottom variant="h5" component="div">
      Welcome to the Rarest <img className="pokimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokimon" /> Collection! Feel free to add your
      favourite <img className="pokimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokimon" /> and alter the collection as you see fit.
    </Typography>
    <div className="inputfield">
      <TextField
        onChange={(e) => {
          setName(e.target.value);
        }}
        id="standard-basic"
        label="Name"
        variant="standard" />
      <TextField
        onChange={(e) => {
          setPower(e.target.value);
        }}
        id="standard-basic"
        label="Power"
        variant="standard" />
      <TextField
        onChange={(e) => {
          setWeakness(e.target.value);
        }}
        id="standard-basic"
        label="Weakness"
        variant="standard" />
      <TextField
        onChange={(e) => {
          setImg(e.target.value);
        }}
        id="standard-basic"
        label="img"
        variant="standard" />
      <TextField
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        id="standard-basic"
        label="discription"
        variant="standard" />
      <Button
        onClick={() => setList([...list, { name, power, weakness, img, description }])}
        variant="contained"
      >
        Add Pokemon
      </Button>
    </div>

    {Pokemons(list, history)}
  </div>;
}
function Pokemons(list, history) {
    return <div className="App">
        {list.map(({ name, power, weakness, img, description }) => (
            <Cards
                name={name}
                power={power}
                weakness={weakness}
                img={img}
                description={description}
                deletebutton={<IconButton><DeleteIcon color="error" /></IconButton>}
                editbutton={<IconButton onClick={() => history.push("/EditMovies")}><EditIcon color="warning" /></IconButton>} />
        ))}
    </div>;
}

