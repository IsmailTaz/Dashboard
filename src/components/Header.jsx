import { Box, Typography,useTheme} from "@mui/material";
import { tokens } from "../theme";

const Header = ({title,subtitle}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box marginLeft="20px">
            <Typography variant="h1" color={colors.grey[100]} marginBottom="5px"> {title}</Typography>
            <Typography variant="h5"> {subtitle}</Typography>
        </Box>
    )

};

export default Header;