import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
  Card,
  Grid,
} from "@mui/material";
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

const initialValue = {
  title: "",
  published: "",
  auther: "",
  pades: "",
};

const Container = styled(FormGroup)`
  max-width: 500px;
  margin: auto;
  & > div {
    margin-top: 20px;
  }
`;

const AddUser = () => {
  const [user, setUser] = useState(initialValue);
  const { published, title, auther, pages } = user;
  let navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    if (
      user.title !== "" &&
      user.pages !== "" &&
      user.published !== "" &&
      user.auther !== ""
    ) {
      await addUser(user);
      navigate("/all");
    }
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
        <Typography variant="h4">Add User</Typography>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel htmlFor="my-input">Title</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="title"
            value={title}
            id="my-input"
            required
          />
        </FormControl>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel htmlFor="my-input">Pages</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="pages"
            value={pages}
            id="my-input"
          />
        </FormControl>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel htmlFor="my-input">Published</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="published"
            value={published}
            id="my-input"
            required
          />
        </FormControl>
        <FormControl sx={{ mt: 2 }}>
          <InputLabel htmlFor="my-input">Auther</InputLabel>
          <Input
            onChange={(e) => onValueChange(e)}
            name="auther"
            value={auther}
            id="my-input"
            required
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => addUserDetails()}
            sx={{ mt: 2 }}
          >
            Add User
          </Button>
        </FormControl>
      </Card>
    </Container>
  );
};

export default AddUser;
