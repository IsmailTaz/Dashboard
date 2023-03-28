import { Box,Grid,Typography,useTheme} from "@mui/material";
import Header from "../../components/Header.jsx";
import PieChart from "../../components/PieChart.jsx";
import { tokens } from "../../theme.js";

const Pie = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
        <Header title = "Projects" subtitle="Analysis of your current performance"/>
        <Box marginLeft="20px" marginRight="10px" marginTop="5px" height="75vh">
        <PieChart />
        </Box>
        
        </Box>
    )
}

export default Pie;