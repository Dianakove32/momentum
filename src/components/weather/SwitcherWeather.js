import React from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
// import Image from "../../assets/weather/sunny.png";
import data from '../dataWeather'

const useStyles = makeStyles((theme) => ({
  root: {
    height: 50,
  },
  wrapper: {
    width: 250 + theme.spacing(1),
  },
  Controllabel:{
 marginLeft:0,
//bacgraund:'#8d6e63'
labelPlacement:'right'
  },
  paper: {
    zIndex: 1,
    position: 'absolute',
    margin: theme.spacing(2),
    padding: 10,
bottom:50,
left:10,
backgroundRepeat: `no-repeat`,
width:250,
height:200,

  },
  im:{

    opacity:1
  }

}));

export default function SimpleSlide(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const { city, country, temp,  sunset, humidity,description,imageModal  } = props


  return (
     <div className={classes.root}>
      <div className={classes.wrapper} >

          <FormControlLabel
          control={<Switch color={'8d6e63'} className={classes.Controllabel} checked={checked} onChange={handleChange} />}
          // label="More parametrs"
        />
        <Slide direction="dawn" in={checked} mountOnEnter unmountOnExit>
          <Paper  elevation={4} className={classes.paper} style={  {backgroundImage:`url(${imageModal})`} }>
          <div >

           <p className={classes.im}> <b>City:  </b>{city}</p>
           <p> <b>Temp:  </b>{temp}</p>
            <p><b>Country: </b>{country}</p>
            <p><b>Sunset: </b>{sunset}</p>
            <p><b>Humidity: </b> {humidity}</p>
          </div>

          </Paper>
        </Slide>
      </div>
    </div>
  );
}
