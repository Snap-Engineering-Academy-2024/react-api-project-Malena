import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import characters from './protagonists.json'
import CharacterCard from './CharacterCard';
import { useState } from 'react';



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

 
function App() {

  const [counter, setCounter] = useState(0); //state for counter
  const [picture, setPicture] = useState("https://i.imgur.com/SaYqUTP.png"); //state for fact

  function fetchFact() {
    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    fetch("/proxy/api/image")
    .then((response) => {
      console.log("response", response)
      return response.blob()
    })
    .then(result => {
      const image = URL.createObjectURL(result)
      console.log("image:", image)
      setPicture(image);
      })
    .catch((error) => console.error("err", error));
  }

  function handleClick() { //counter at top of page
    console.log("handleCLick");
    setCounter(counter + 1);
  }

  // function handleYip() { //new fact generator
  //   console.log("handleYip");

  // }


  console.log("characters", characters); //characters is an array
  return (
    <div className="App">
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid lightgray" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Characters Inc
          </Typography>

          <Button
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            
            onClick={handleClick}
          >
            Clicks - {counter}
          </Button>

          <Button
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            onClick={fetchFact}
          >
            Quote
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Quote:
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
          id="subtitle"
        >
          {/* //{myFact} */}
        </Typography>
        <img src={picture} alt=""/>
      </Container>
      {/* End hero unit */}

      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="flex-start"
        >

          {characters.map (oneCharacter =>
          <CharacterCard
            title={oneCharacter.title}
            pic={oneCharacter.pic}
            description={oneCharacter.description}
            key={oneCharacter.title}
          >
          </CharacterCard>
        
          )}
        </Grid>
      </Container>

      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
    
    </div>
    
  );
}







export default App;
