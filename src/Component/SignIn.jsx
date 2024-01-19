import { useState, useContext } from "react";
import Alert from "@mui/material/Alert";
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
import { SignInData } from "../Service/api";

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
  const [signIn, setSignIn] = useState(initialValue);
  const [error, setError] = useState(false);
  const [getBoolen, setGetBoolen] = useContext(UserContext)
  let navigate = useNavigate();

  const SignIn = async () => {
    if (signIn.title !== "" && signIn.pages !== "") {
      const resalt = await SignInData(signIn);
      if (resalt) {
        setGetBoolen(!getBoolen)
          navigate("/all");
      } else {
        setError(true);
      }
    }
  };

  const onValueChange = (e) => {
    setSignIn({ ...signIn, [e.target.name]: e.target.value });
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
        <Typography variant="h4">Sign In</Typography>
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
            {error && (
              <Alert severity="warning">Parol yoki Login noto'g'ri</Alert>
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={() => SignIn()}
              sx={{ mt: 2 }}
            >
              Login
            </Button>
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/register")}
            >
              Rejister
            </Button>
          </FormControl>
        </FormControl>
      </Card>
    </Container>
  );
};

export default EditUser;
