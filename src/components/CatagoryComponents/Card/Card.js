import React from 'react';
import classes from './Card.module.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const mediaCard = (props) => {
  return (
    <Card className={classes.card} onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.imageTitle}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">
            {props.info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttonContainer}>
        <Button onClick={props.onClick} variant="outlined" size="large" color="inherit">
            More Info
        </Button>
      </CardActions>
    </Card>
  );
}

export default mediaCard;