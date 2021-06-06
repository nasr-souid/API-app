import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
// import "./User.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 250,
  },
  media: {
    height: 180,
  },
});

const User = ({user}) => {
  const classes = useStyles();

  return (
    <div className="user">
      <Card className={classes.root}>
        <CardActionArea>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {user.username[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">

          </IconButton>
        }
        title={user.name}
        subheader={user.username}
      />
          <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSKVori8sF3_Iltek1h1EAtcbHj19TcEgwQ&usqp=CAU"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {`Email: ${user.email}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`City: ${user.address.city}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`Phone: ${user.phone}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
    </div>
  );
};

export default User;