import { Box, CssBaseline, IconButton, Typography, Divider, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemIcon, Button } from "@mui/material"
import { styled, useTheme } from '@mui/material/styles';
import logo from "../assets/logo.svg"
import { useEffect, useState } from "react";
import MuiAppBar from '@mui/material/AppBar';
import { ChevronLeftRounded, ChevronRightRounded, MenuRounded } from "@mui/icons-material";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const Header = () => {

  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = ["Features", "Pricing", "Resources"];

  return (
    <Box
      maxWidth="1440px" >
      <CssBaseline />
      <AppBar position="fixed" open={open} color="transparent" sx={{
        boxShadow: "none",
      }}>
        <Toolbar
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
            maxWidth: "1440px"

          }}

        >
          {/* Logo */}
          <Box component='img' src={logo} />
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{
              ...(open && windowWidth < 768 && { display: 'none' }),
            }}
          >
            <MenuRounded htmlColor="var(--grayish-violet)" sx={{
              display: {
                lg: "none",
                md: "none"
              }
            }} />
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
                <ListItemButton sx={{ m: 0, p: 0, }}>
                  <Typography sx={{
                    color: "var(--grayish-violet)", p: 0
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
              m: 0, p: 0, width: "fit-content",
            }}>
              <Button variant="text" sx={{
                textTransform: "none", margin: 0, boxShadow: 0, color: "var(--grayish-violet)"
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
                  background: "var(--light-cyan)", boxShadow: 0
                }
              }}>
                Sign Up
              </Button>
            </ListItem>
          </List>

        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
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
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftRounded /> : <ChevronRightRounded />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton>
              <Typography>
                Features
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Typography>
                Pricing
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Typography>
                Resources
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Typography>
                Login
              </Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Typography>
                Sign Up
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>

      </Drawer>


    </Box>
  )
}

export default Header;