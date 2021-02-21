import React from 'react';
import "./MainNavBar.css";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      width: "100%",
      height: "10%",
      position: "fixed",
      bottom: "0",
      zIndex: "100",
      backgroundColor: "rgb(20, 20, 20)"
    },
  });

const MainNavBar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
        <BottomNavigationAction label="Trending" className="MainNavBar-action" icon={<WhatshotIcon />} 
            component={NavLink}
            to="/"
            exact 
          />
        <BottomNavigationAction label="Movies" className="MainNavBar-action" icon={<MovieIcon />} 
            component={NavLink}
            to="/movies"
            exact
        />
        <BottomNavigationAction label="Series" className="MainNavBar-action" icon={<TvIcon />} 
            component={NavLink}
            to="/series"
            exact
        />
        <BottomNavigationAction label="Search" className="MainNavBar-action" icon={<SearchIcon />} 
            component={NavLink}
            to="/search"
            exact
        />
        </BottomNavigation>
    );
};

export default MainNavBar;