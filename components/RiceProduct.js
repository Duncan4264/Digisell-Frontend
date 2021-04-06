//Complete all necessary imports for the page
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


//create the styles use and store into useStyles


/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function RiceCard() {
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
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://static01.nyt.com/images/2018/02/21/dining/00RICEGUIDE8/00RICEGUIDE8-articleLarge.jpg"
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
      <Typography gutterBottom variant="h5" component="h2">
        Tasty Rice
      </Typography>
      <Typography>
        Rice is really nice. Eat lots!
      </Typography>
      </CardContent>
      <CardActions>
                    
      <Button size="small" color="primary">
        Add
      </Button>
      <TextField id="quantity" label="Quantity" style={{width:75}}/>
        {/* <Button size="small" color="primary">
          Edit
          </Button> */}
      </CardActions>
    </Card>
  );
}