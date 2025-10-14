import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import React from "react";

type Props = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavBar({darkMode, setDarkMode}: Props) {

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6">RE-STORE</Typography>
                <IconButton onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <DarkMode /> : <LightMode/>}
            </IconButton>
            </Toolbar>
        </AppBar>
    )
}