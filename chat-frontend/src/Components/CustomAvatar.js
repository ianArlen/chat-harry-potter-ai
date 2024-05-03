import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: theme.spacing(5.25), 
    height: theme.spacing(5.25),
    backgroundColor: '#2f72da',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  text: {
    fontSize: '0.7rem',
    lineHeight: '1',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 4px',
  }
}));

const CustomAvatar = ({ name, avatar }) => {
  const classes = useStyles();
  const splitName = name.split(' ');

  return (
    <div className={classes.avatarContainer}>
      <Avatar className={classes.avatar} src={avatar}>
        {!avatar && (
          <div className={classes.text}>
            {splitName.map((part, index) => (
              <span key={index} style={{ color: 'white' }}>{part}</span>
            ))}
          </div>
        )}
      </Avatar>
    </div>
  );
};

export default CustomAvatar;
