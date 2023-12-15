import { Box, CssBaseline, IconButton, Typography, List, ListItem, ListItemButton, Button } from "@mui/material"
import { styled, useTheme } from '@mui/material/styles';
import logo from "../assets/logo.svg"
import { useState } from "react";
import MuiAppBar from '@mui/material/AppBar';
import { MenuRounded } from "@mui/icons-material";
import MobileMenu from "./MobileMenu";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

}));


const Header = () => {

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };


  const options = ["Features", "Pricing", "Resources"];

  return (
    <Box sx={{
      px: {
        xs: '1rem',
        sm: '1rem',
        md: '4rem',
        lg: '6rem',
      },
      width: "100%",
    }}>
      <CssBaseline />
      <AppBar position="sticky" open={open} color="transparent" sx={{
        boxShadow: "none",
      }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            placeSelf: {
              lg: "center",
              md: "center",
              sm: "normal",
              xs: "normal"
            },
            width: "100%",
          }}
          p={"1rem 0"}
        >
          {/* Logo */}
          <Box component='img' src={logo} />
          <IconButton
            edge="end"
            onClick={handleOpenModal}
            sx={{
              display: {
                lg: "none",

              }
            }}
          >
            <MenuRounded htmlColor="var(--grayish-violet)" />
          </IconButton>

          <List sx={{
            display: {
              sm: "none",
              xs: "none",
              lg: "flex",
              md: "flex"
            }, width: "100%",
            gap: 5,
            ml: 5
          }}>
            {options.map((option, i) =>
              <ListItem key={i} sx={{
                m: 0, p: 0, width: "fit-content"
              }}>
                <ListItemButton sx={{
                  m: 0, p: 0, ":hover": {
                    background: "transparent", boxShadow: 0
                  }
                }} >
                  <Typography sx={{
                    color: "var(--grayish-violet)", fontWeight: "600", p: 0, ":hover": {
                      color: "var(--very-dark-blue)"
                    }
                  }}>
                    {option}
                  </Typography>
                </ListItemButton>
              </ListItem>
            )}
          </List>

          <List sx={{
            display: {
              sm: "none",
              xs: "none",
              lg: "flex",
              md: "flex"
            },
            width: "100%",
            justifyContent: "right",
            alignItems: "center",
            gap: 5

          }}>
            <ListItem sx={{
              placeSelf: "flex-end",
              m: 0, p: 0, width: "fit-content"
            }}>
              <Button variant="text" sx={{
                textTransform: "none", margin: 0, boxShadow: 0, fontWeight: "600", color: "var(--grayish-violet)", ":hover": {
                  color: "var(--very-dark-blue)", background: "transparent", boxShadow: 0
                }
              }}>
                Login
              </Button>
            </ListItem>

            <ListItem sx={{
              placeSelf: "flex-end",
              m: 0, p: 0, width: "fit-content",
            }}>
              <Button variant="contained" sx={{
                textTransform: "none", margin: 0, boxShadow: 0, background: "var( --cyan)", borderRadius: 5, ":hover": {
                  background: "var(--light-cyan)", boxShadow: 0,
                }
              }}>
                Sign Up
              </Button>
            </ListItem>
          </List>

        </Box>
      </AppBar>

      {/* Mobile drawer */}
      {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },

        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <List>
          <ListItem>
            <ListItemButton>
              <Typography color={"var(--grayish-violet)"}>
                Features
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Typography color={"var(--grayish-violet)"}>
                Pricing
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Typography color={"var(--grayish-violet)"}>
                Resources
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Typography color={"var(--grayish-violet)"}>
                Login
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Typography color={"var(--grayish-violet)"}>
                Sign Up
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>

      </Drawer> */}

      <MobileMenu
        isOpen={open}
        closeDialog={handleCloseModal} />
    </Box >
  )
}

export default Header;