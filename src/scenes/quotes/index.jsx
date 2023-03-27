import { Box,Grid,Typography,useTheme} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {mockDataInvoices} from "../../data/mockData.js"
import { DataGrid,GridToolbar  } from '@mui/x-data-grid';

const Quotes = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);





    const columns = [
        {field: 'id', headerName: 'ID', width: 10},
        {field: 'name', headerName: 'Name', flex:1},
        {field: 'email', headerName: 'Email', flex:1},
        {field: 'cost', headerName: 'Quote', flex:1},
        {field: 'phone', headerName: 'Phone', flex:1},
        {field: 'date', headerName: 'Date', flex:1},
    ];
    return (
        <Box>
            <Header title = "Quotes" subtitle="List of Quotes Per Customer" />
        
        <Box marginLeft="20px" marginRight="10px" marginTop="5px" height="75vh" sx={{
            "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
        },
        "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            backgroundColor: colors.blueAccent[700],
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            borderBottom: "none",
            colr: `${colors.grey[100]} !important`,
        },
        }}>
            <DataGrid
            rows={mockDataInvoices}
            columns={columns}
            components={{Toolbar:GridToolbar}}

            />
        </Box>
    </Box>

    )
}
export default Quotes;