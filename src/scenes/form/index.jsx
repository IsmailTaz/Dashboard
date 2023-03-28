import { Formik } from "formik";
import {Box,IconButton, InputBase, useTheme, Typography, TextField,Button} from "@mui/material"; 
import * as yup from "yup";
import { useMediaQuery } from "@mui/material";
import Header from "../../components/Header";

const InitialValues = {
    firstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
    Items: "",
    Quote: "",
    Address: "",
};
const userSchema = yup.object().shape({
    firstName:yup.string().required("This is required"),
    LastName:yup.string().required("This is required"),
    email:yup.string().required("This is required"),
    phoneNumber:yup.string().required("This is required"),
    Items:yup.string().required("This is required"),
    Quote:yup.string().required("This is required"),
    Adress:yup.string().required("This is required"),

})

const Form = () => {
    const HandleFormSubmit = (values) => {
        console.log(values);
    }

    return(
        
        <Box >
            <Header title = "New Quote Form" subtitle="Enter your new quote information"/>
            {/* <Formik
            onSubmit={HandleFormSubmit}
            initialValues={InitialValues}
            validationSchema={userSchema}
            >

            </Formik> */}
            <form>
            <Box
              display="grid"
              marginLeft="20px"
              marginRight="25px"
              gap="15px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                
                value={InitialValues.firstName}
                name="firstName"
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                
                value={InitialValues.LastName}
                name="lastName"
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                
                value={InitialValues.email}
                name="email"
                
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                
                value={InitialValues.phoneNumber}
                name="contact"
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Quote Price"
                
                value={InitialValues.Quote}
                name="Quote"
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                
                value={InitialValues.Address}
                name="address1"
                
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="List of Items"
                
                value={InitialValues.Items}
                name="address2"
                
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px" marginRight="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
            </form>

        </Box>
    )
};
export default Form;