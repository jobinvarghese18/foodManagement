import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import DateFnsUtils from '@date-io/date-fns'
import datefns from "date-fns"
import {connect} from 'react-redux'
import {Button,TextField,Checkbox,FormControl,FormControlLabel
} from '@material-ui/core'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';

const useStyles = makeStyles({
    
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const style = {
    height: 400
 }
export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <Card className={classes.root} className='mt-3' style={style}variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Mess Details
        </Typography>
        <Typography variant="h5" component="h2">
          Fill Up !
        </Typography>
        <div clssName ='row'>
            <div className='col-md-4 ml-2'>
                    <form className={classes.root}>
                            <TextField id="standard-basic" label="Dish Name" />
                            <br/>
                <FormControlLabel
                className='mt-2'
                 control={
                <Checkbox
                // onChange={handleChange}
                name="vegNonVeg"
                color="primary"
          />
        }
        label="VEG?"
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Select Date of serving"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        <TextField
        id="time"
        label="Serving"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
                            <br/>
                            <Button variant="contained" className='mt-2' color="secondary">
                            Proceed
                            </Button>
                    </form>
                    
            </div>
        </div>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
