import * as React from "react";
import styles from "styled-components";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

export default function CreateBox(users) {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <h1>
            <Typography color="primary" variant="contained">
              You have got {users.users.length} book
            </Typography>
          </h1>
          <Box sx={{ flexGrow: 1 }} />
          <Tabs to="add" exact>
            <Button variant="contained" color="secondary">
              + Create a book
            </Button>
          </Tabs>
        </Toolbar>
      </Box>
    </Container>
  );
}

const Tabs = styled(NavLink)`
  color: #991313;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
`;
const Container = styled(Box)`
  max-width: 1550px;
  margin: auto;
`;