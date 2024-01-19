import { useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Card, Button, Box, Grid, Toolbar, styled } from "@mui/material";
import { getUsers, deleteUser } from "../Service/api";
import { Link } from "react-router-dom";
import CreateBox from "./CreateBox";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response?.data);
  };

  return (
    <Container>
      <Box>
        <CreateBox users={users} />
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ flexGrow: 1 }}
          >
            {users?.map((user) => (
              <Grid item xs={4} sm={4} md={4} key={user.id}>
                <Card sx={{ padding: 1, backgroundColor: 'rgb(19, 204, 35)' }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {user.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 14,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {"Pages: "} {user.pages}
                    </Typography>

                    <Typography
                      sx={{
                        mb: 1.5,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                      color="text.secondary"
                    >
                      {"Published: "} {user.published}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {"Auther: "}
                      {user.auther}
                    </Typography>
                  </CardContent>

                  <Toolbar>
                    <Button
                      color="primary"
                      variant="contained"
                      style={{ marginRight: 10 }}
                      component={Link}
                      to={`/edit/${user.id}`}
                    >
                      Edit
                    </Button>
                    <Box sx={{ flexGrow: 1 }} />
                    <Button
                      color="secondary"
                      variant="contained"
                      onClick={() => deleteUserData(user.id)}
                    >
                      Delete
                    </Button>
                  </Toolbar>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AllUsers;
const Container = styled(Box)`
  max-width: 1550px;
  margin: auto;
`;
