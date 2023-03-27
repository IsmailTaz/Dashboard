import {Box,IconButton, InputBase, useTheme} from "@mui/material"; 
import { useContext } from "react";
import {colorModeContext,tokens} from "../../theme.js"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const TopBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(colorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Search BAr  */}
            <Box display="flex" backgroundColor = {colors.primary[400]} borderRadius="3px">
                <InputBase placeholder="Search"></InputBase>
                <IconButton>
                <SearchIcon></SearchIcon>
                </IconButton>
            </Box>
            <Box display="flex" justifyContent="space-between">
                {/* <IconButton onClick={colorMode.toggleColorMode} >
                    {theme.palette.mode === "dark" ? (
                        
                        <LightModeOutlinedIcon></LightModeOutlinedIcon>
                    ) :

                    (
                      <DarkModeOutlinedIcon></DarkModeOutlinedIcon>  
                    )}
                </IconButton> */}
                <IconButton>
                    <PersonOutlinedIcon></PersonOutlinedIcon>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon></SettingsOutlinedIcon>
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon></NotificationsOutlinedIcon>
                </IconButton>
            </Box>
        </Box>
    )
}

export default TopBar;