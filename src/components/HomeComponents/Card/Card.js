import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import classes from './Card.module.css'
const card = props => {
    return (
        <Card className={classes.card}>
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
      </Card>
    );
};

export default card;