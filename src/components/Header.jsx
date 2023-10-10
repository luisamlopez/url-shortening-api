import { Box, CssBaseline, IconButton, Typography, Divider, Drawer, Toolbar, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import { styled, useTheme } from '@mui/material/styles';
import logo from "../assets/logo.svg"
import { useState } from "react";
import MuiAppBar from '@mui/material/AppBar';
import { ChevronLeftRounded, ChevronRightRounded, MenuRounded } from "@mui/icons-material";

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="transparent" sx={{
        boxShadow: "none"
      }}>
        <Toolbar
          sx={{

            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",

          }}

        >

          {/* Logo */}
          <Box component='img' src={logo}
          />
          <IconButton
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{
              ...(open && { display: 'none' }),
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
          }}>
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

        </Toolbar>
      </AppBar>
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