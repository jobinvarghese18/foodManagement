import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Card,CardContent,Typography,TextField} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
      '& > *': {
        margin: theme.spacing(1),
        height:'4ch'
      },
    flexGrow: 1,
    root: {
        minWidth: 500
       }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const style = {
    height: 400
 }
export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Card className={classes.root} className='mt-3' style={style}variant="outlined">
      <CardContent>

      <Grid container spacing={3}>
        
        <Grid item xs={3}>
          {/* <Paper className={classes.paper}>xs=3</Paper> */}
        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Typography variant='h6'>Login here</Typography>
          <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="E-mail" size="small" />
          <TextField id="standard-basic" label="Name" size='small' />
          <TextField id="standard-basic" label="E-mail" size="small" />
          <TextField id="standard-basic" label="Name" size='small' />

          </form>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          {/* <Paper className={classes.paper}>xs=3</Paper> */}
        </Grid>
      </Grid>
    
      </CardContent>
      </Card>
    </div>
  );
}
