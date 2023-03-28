import { Box,Typography,useTheme} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {mockDataTeam} from "../../data/mockData.js"
import { DataGrid,GridToolbar } from '@mui/x-data-grid';

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: 'id', headerName: 'ID', width: 10},
        {field: 'name', headerName: 'Name', flex:1},
        {field: 'email', headerName: 'Email', flex:1},
        {field: 'age', headerName: 'Age', width: 10},
        {field: 'phone', headerName: 'Phone', flex:1},
        {field: 'access', headerName: 'Access', flex:1},
    ];
    return (
        <Box>
            <Header title = "Teams" subtitle="Team management" />
        
        <Box marginLeft="20px" marginRight="10px" height="75vh" sx={{
            "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
        },
        "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            backgroundColor: colors.blueAccent[700],
        },
        }}>
            <DataGrid
            rows={mockDataTeam}
            columns={columns}
            components={{Toolbar:GridToolbar}}

            />
        </Box>
    </Box>

    )
}
export default Team;