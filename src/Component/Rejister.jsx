import { useState} from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Card,
  Typography,
} from "@mui/material";
import { useNavigate} from "react-router-dom";
import { RegisterData } from "../Service/api";

const initialValue = {
  username: "",
  email: "",
  password: ""
} 

const Container = styled(FormGroup)`
  max-width: 500px;
  margin: auto;
  & > div {
    margin-top: 20px;
  }
`;

const EditUser = () => {
  const [register, setRegister] = useState(initialValue);

  let navigate = useNavigate();

 
 
  const Register = async () => {
    if (
      register.username !== "" &&
      register.email !== "" &&
      register.password !== "" 
     
    ) {
      await RegisterData(register);
      navigate("/sign-in");
    }
  };

  const onValueChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Card
        sx={{
         
          padding: 2,
          minHeight: 350,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {" "}
        <Typography variant="h4">Register</Typography>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel htmlFor="my-input">Username</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            // value={title}
            id="my-input"
            required
          />
        </FormControl>       
        <FormControl sx={{ mt: 2 }}>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="email"
            // value={title}
            id="my-input"
            required
          />
        </FormControl>       
    
        <FormControl sx={{ mt: 2 }}>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="password"
            // value={auther}
            id="my-input"
            required
          />
          <FormControl sx={{ mt: 2 }}> 
            <Button
              variant="contained"
              color="primary"
              onClick={() => Register()}
              
            >
              Register
            </Button>
          </FormControl>
        </FormControl>
      </Card>
    </Container>
  );
};

export default EditUser;
