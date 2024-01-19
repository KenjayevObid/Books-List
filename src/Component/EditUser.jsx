import { useState, useEffect } from "react";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Card,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, editUser } from "../Service/api";

const initialValue = {
  title: "",
  published: "",
  auther: "",
  pages: "",
};

const Container = styled(FormGroup)`
  max-width: 500px;
  margin: auto;
  & > div {
    margin-top: 20px;
  }
`;

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { title, published, auther, pages } = user;
  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };
  const editUserDetails = async () => {
    if (
      user.title !== "" &&
      user.pages !== "" &&
      user.published !== "" &&
      user.auther !== ""
    ) {
      await editUser(id, user);
      navigate("/all");
    }
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
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
        <Typography variant="h4">Edit Information</Typography>
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
          <FormControl sx={{ mt: 2 }}> 
            <Button
              variant="contained"
              color="primary"
              onClick={() => editUserDetails()}
              
            >
              Edit User
            </Button>
          </FormControl>
        </FormControl>
      </Card>
    </Container>
  );
};

export default EditUser;
