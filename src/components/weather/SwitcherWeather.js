import React from 'react';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 500,
  },
  wrapper: {
    width: 250 + theme.spacing(1),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(2),
    padding: 10,
  },

}));

export default function SimpleSlide(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const { city, country, temp,  sunset, humidity } = props

  return (
     <div className={classes.root}>
      <div className={classes.wrapper} >
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="More parametrs"
        />
        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Paper elevation={4} className={classes.paper}>
          <div>
           <p> <b>City:  </b>{city}</p>
           <p> <b>Temp:  </b>{temp}</p>
            <p><b>country: </b>{country}</p>
            <p><b>Sunset: </b>{sunset}</p>
            <p><b>humidity: </b> {humidity}</p>
          </div>

          </Paper>
        </Slide>
      </div>
    </div>
  );
}
