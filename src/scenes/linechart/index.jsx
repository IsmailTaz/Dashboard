import { Box,Grid,Typography,useTheme} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart.jsx";


const Line = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box>
        <Header title = "Projects" subtitle="Analysis of your current performance"/>
        <Box marginLeft="20px" marginRight="20px" marginTop="5px" height="75vh">
        <LineChart />
        </Box>
        
        </Box>
    )
}


export default Line;