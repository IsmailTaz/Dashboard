import { useState} from 'react';
import { Sidebar, Menu, MenuItem, SubMenu,useProSidebar} from 'react-pro-sidebar';
import {Box,IconButton, InputBase, useTheme, Typography} from "@mui/material"; 
import { Link } from 'react-router-dom';
import { useContext } from "react";
import {colorModeContext,tokens} from "../../theme.js"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ViewListIcon from '@mui/icons-material/ViewList';


const SideBar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(colorModeContext);
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
    return (
        
            <Sidebar>
            <Menu>
                <Box display="flex" p={2} >
                <IconButton onClick={() => collapseSidebar()}>
                <MenuOutlinedIcon />
                    </IconButton>
                    <Typography variant='h3' color={colors.grey[100]} marginLeft="25px">
                        Ismail
                    </Typography>
                </Box>

                <MenuItem component={<Link to="/" />}>
                <Box display="inline-flex">
                    <HomeOutlinedIcon />
                    <Typography marginLeft="40px">
                        Home
                    </Typography>
                    
                    </Box>
                </MenuItem>
                <MenuItem component={<Link to="/team" />}>
                    <Box display="inline-flex">
                    
                    <PeopleOutlinedIcon/> 
                    <Typography marginLeft="40px">
                        Team
                    </Typography>
                    
                    </Box></MenuItem>
                    <MenuItem component={<Link to="/contacts" />}>
                        <Box display="inline-flex">  
                        <ContactsOutlinedIcon />
                        <Typography marginLeft="40px">
                        Clients
                    </Typography>
                        </Box>
                        </MenuItem>
                    <MenuItem component={<Link to="/quotes" />}>
                        <Box display="inline-flex"> 
                        <ReceiptOutlinedIcon />
                        <Typography marginLeft="40px">
                        Quotes
                    </Typography>
                        </Box>
                        </MenuItem>
                    
                {/* <MenuItem component={<Link to="/Calendar" />}>
                    <Box display="inline-flex"> 
                    <CalendarTodayOutlinedIcon />
                    <Typography marginLeft="40px">
                        Calendar
                    </Typography>
                    </Box>
                    </MenuItem> */}
                {/* <MenuItem component={<Link to="/Map" />}><Box display="inline-flex">  
                    <MapOutlinedIcon /> 
                    <Typography marginLeft="40px">
                        Map
                    </Typography>
                    </Box>
                    </MenuItem> */}
                <MenuItem component={<Link to="/quotes-analysis" />}>
                    <Box display="inline-flex"> 
                        <TimelineOutlinedIcon />
                        <Typography marginLeft="40px">
                        Quotes Analytics
                    </Typography>
                        </Box>
                    </MenuItem>
                
                
                <MenuItem component={<Link to="/lead" />}>
                        <Box display="inline-flex">  
                        <PersonOutlinedIcon />
                        <Typography marginLeft="40px">
                        Lead
                    </Typography>

                        </Box>
                        </MenuItem>
                {/* <MenuItem component={<Link to="/Barchart" />}>
                    <Box display="inline-flex"> 
                         <BarChartOutlinedIcon />
                         <Typography marginLeft="40px">
                        Chart
                    </Typography>
                    </Box>
                </MenuItem> */}
                <MenuItem component={<Link to="/pie" />}>
                    <Box display="inline-flex">  
                        <PieChartOutlineOutlinedIcon />
                        <Typography marginLeft="40px">
                        Pie
                    </Typography>
                    </Box>
                </MenuItem>
                <MenuItem component={<Link to="/Help" />}>
                    <Box display="inline-flex"> 
                         <HelpOutlineOutlinedIcon />
                         <Typography marginLeft="40px">
                        Help
                    </Typography>
                    </Box>
                </MenuItem>
                
            </Menu>
            </Sidebar>
        
    )

}

export default SideBar;