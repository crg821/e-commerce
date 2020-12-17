import React from 'react';
import { AppBar, Toolbar, Iconbutton, Badge, MenuItem, Menu, Typography } from 'material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import classes from '*.module.css';
import logo from '../../assets/logo.png'
import { IconButton } from '@material-ui/core';
import useStyles from './styles';

const Navbar = () => {
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography>
                        <img src={ } alt="Commerce tek" height="25px" className={classes.image} />
                        teknify
                    </Typography>
                </Toolbar>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="Show Cart Item" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </AppBar>
        </div>
    )
}

export default Navbar
