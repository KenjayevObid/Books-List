import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const drawerWidth = 240;

const DrawerAppBarn = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // const [getBoolen, setGetBoolen] = useContext(UserContext);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

 

  const container =
    window !== undefined ? () => window().document.body : undefined;
    const items = JSON.parse(localStorage.getItem('bool'));

  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {items ? (
                <>
                  <Tabs to="/all">
                    <Button variant="contained" color="success">
                      All Books
                    </Button>
                  </Tabs>
                  <Tabs to="/sign-up">
                    <Button variant="contained" color="error">
                      Sign Up
                    </Button>
                  </Tabs>
                </>
              ) : (
                <>
                  <Tabs to="/">
                    <Button variant="contained" color="secondary">
                      Home
                    </Button>
                  </Tabs>
                  <Tabs to="/sign-in">
                    <Button variant="contained" color="secondary">
                      Sigin In
                    </Button>
                  </Tabs>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
      
        {items ? (
                <>
                  <Tabs to="/all">
                    <Button variant="contained" color="success">
                      All Books
                    </Button>
                  </Tabs>
                  <Tabs to="/sign-up">
                    <Button variant="contained" color="error">
                      Sign Up
                    </Button>
                  </Tabs>
                </>
              ) : (
                <>
                  <Tabs to="/">
                    <Button variant="contained" color="secondary">
                      Home
                    </Button>
                  </Tabs>
                  <Tabs to="/sign-in" sx={{ p: 3 }}>
                    <Button variant="contained" color="secondary">
                      Sigin In
                    </Button>
                  </Tabs>
                </>
              )}
      </List>
    </Box>
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography></Typography>
        </Box>
      </Box>
    </Container>
  );
};

DrawerAppBarn.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBarn;
const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;
const Container = styled(Box)`
  max-width: 1550px;
  margin: auto;
`;
