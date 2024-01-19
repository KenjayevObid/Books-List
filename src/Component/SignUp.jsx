 
 // Sign up page hali oxiriga yitmagan
 
 import { useState, useContext } from "react";
import { UserContext } from "../App";
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
import { useNavigate } from "react-router-dom";

const initialValue = {
  username: "",
  password: "",
};

const Container = styled(FormGroup)`
  max-width: 500px;
  margin: auto;
  & > div {
    margin-top: 20px;
  }
`;

const EditUser = () => {
  const [signUp, setSignUp] = useState(initialValue);
  const [getBoolen, setGetBoolen] = useContext(UserContext);
  let navigate = useNavigate();

  const SignUp = async () => {
    if (signUp.username !== "" && signUp.password !== "") {
      setGetBoolen(!getBoolen);
      navigate("/");
    }
  };
  const onValueChange = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
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
        <Typography variant="h4">Sign Up</Typography>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel htmlFor="my-input">Username</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="username"
            id="my-input"
            required
          />
        </FormControl>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="password"
            id="my-input"
            required
          />
          <FormControl sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => SignUp()}
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </FormControl>
        </FormControl>
      </Card>
    </Container>
  );
};

export default EditUser;
