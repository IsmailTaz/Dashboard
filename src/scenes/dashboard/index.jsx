import { Box,Typography,useTheme} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Dashboard = () => {
    return (
        <Box>
            <Header title = "Dashboard" subtitle="Welcome to your dashboard" />
        </Box>
    )
};

export default Dashboard;