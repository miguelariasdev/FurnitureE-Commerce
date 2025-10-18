import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
    {title: 'contact', path: '/contact'},
]

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover':{
        color: 'grey.500'
    },
    '&.active': {
        color: '#baecf9'
    }
}

type Props = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({darkMode, setDarkMode}: Props) {

    return (
        <AppBar position="fixed">
            <Toolbar sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                <Box display={'Flex'} alignItems='center'>
                    <Typography component={NavLink} sx={navStyles} to='/' variant="h6">RE-STORE</Typography>
                    <IconButton onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}}/>}
                    </IconButton>
                </Box>

            <List sx={{display: 'flex'}}>
                {midLinks.map(({title, path}) => (
                    <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
            <Box display={'Flex'} alignItems='center'>
                <IconButton size="large" sx={{color: 'inherit'}}>
                    <Badge badgeContent='4' color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>

                <List sx={{display: 'flex'}}>
                    {rightLinks.map(({title, path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Box>
            </Toolbar>
        </AppBar>
    )
}