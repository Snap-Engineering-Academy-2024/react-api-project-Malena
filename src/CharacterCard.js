import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import Typography from '@mui/material/Typography';
// import characters from './protagonists.json'
import { useState } from 'react';


export default function CharacterCard(character) {
  //  const [img, setImg] = useState(character.pic);
  
  return (
    <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="350px"
                image={img}
              />
              <CardHeader
                title={character.title}
                titleTypographyProps={{ align: "center" }}
                sx={{ mt: 1 }}
              />
              <CardContent sx={{ pt: 0 }}>
              <ul>
            
               
              <Typography component="li">
                {character.description}
              </Typography>
   
              </ul>
              </CardContent> 
              <CardActions>
                <Button
                 className="characterButton"
                  variant="contained"
                  sx={
                   { 
                    px: 6, 
                    mx: "auto",
                    border: "5px solid red",
                   }
                  }
                >
                  {/* Generate Random Fact: {fact} */}
                  Generate
                </Button>
              </CardActions>
            </Card>
          </Grid>
         
  );
}

// function fetchFact() {
//     var requestOptions = {
//       method: 'GET',
//       redirect: 'follow'
//     };
    
//     fetch("/api/image", requestOptions)
//     .then((response) => response.json())
//     .then(result => {
//         console.log(result.text)
//         //alert(result.text)
//       })
//     .catch((error) => console.error(error));
//   }

  