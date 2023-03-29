import { Box,Grid,Typography,useTheme} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {mockDataContacts} from "../../data/mockData.js"
import { DataGrid,GridToolbar  } from '@mui/x-data-grid';

const Clients = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: 'id', headerName: 'ID', width: 10},
        {field: 'name', headerName: 'Name', flex:1},
        {field: 'email', headerName: 'Email', flex:1},
        {field: 'age', headerName: 'Age', width: 10},
        {field: 'phone', headerName: 'Phone', flex:1},
        {field: 'address', headerName: 'Address', flex:1},
        {field: 'city', headerName: 'City', flex:1},
        {field: 'zipCode', headerName: 'Zipcode', flex:1},
        {field: 'registrarId', headerName: 'Total Revenue', flex:1},
    ];
    return (
        <Box>
            <Header title = "Clients" subtitle="List of your current clients" />
        
        <Box marginLeft="20px" marginRight="10px" marginTop="5px" height="75vh">
            <DataGrid
            rows={mockDataContacts}
            columns={columns}
            components={{Toolbar:GridToolbar}}

            />
        </Box>
    </Box>

    )
}
export default Clients;