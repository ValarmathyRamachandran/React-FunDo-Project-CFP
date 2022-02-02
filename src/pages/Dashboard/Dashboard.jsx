import * as React from 'react';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useHistory } from "react-router-dom";  
import InputBase from '@mui/material/InputBase';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { sizeHeight } from '@mui/system';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './Dashboard.scss';
import SearchIcon from '@mui/icons-material/Search';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { styled, alpha, useTheme } from '@mui/material/styles';
import Notes from '../Notes/Notes';
import DisplayNotes from '../../Component/DisplayNotes/DisplayNotes';
import TakeANote from '../../Component/TakeANote/TakeANote';
import UserProfile from '../../Component/UserProfile/UserProfile';


import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useRoutes
} from "react-router-dom";
import { Archive } from '../Archive/Archive';
import Trash from '../Trash/Trash';




const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  overflowY: 'hidden'
  
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor:'#fff',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

   const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  }));


  export default function MiniDrawer() {
    let navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  let sidebarIcons =
  [ 
    {
        iconText:"Notes",
        icon:<LightbulbOutlinedIcon/>
    },
      
    {
      iconText:"Reminders",
      icon:<NotificationsOutlinedIcon/>
    },
     
    {
      iconText:"Edit Labels",
      icon:<BorderColorTwoToneIcon/>
    },
      
    {
      iconText:"Archive",
      icon:<ArchiveOutlinedIcon />
    },
     
    {
      iconText:"Trash",
      icon:<DeleteOutlineSharpIcon/>
    }
  ];
    


  const handleDrawerOpen = () => {
    setOpen(!open);
  };


  const sideMenuIconClick= (text) => {
   
    if (text.iconText == "Archive") {
      navigate('/archive')
      console.log(text.iconText,'inside archive' );
      
    }
    else if(text.iconText == "Trash"){
      navigate('/trash')
  
    }
    else if (text.iconText == "Notes") {

      navigate("/notes")
    }
    else{
      console.log(text.iconText,'inside else' );
    }
   
  }


return (
    <Box sx={{ display: 'flex', backgroundColor: '#fff', border:'.5px solid lightgray', }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start">
              
            <MenuIcon />
          </IconButton>
            <img className='logo-img' src='https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png' width={'40px'} height={'40px'}></img>
            <span className='keep-text'>Fundoo</span>
          <Search className='searchIcon-style'>
          
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
         <ListItem className="rightMenu-icons"> 
         <li className="Refresh-icon"><RefreshOutlinedIcon /></li> 
         <li className="Grid-icon"><ViewStreamOutlinedIcon /></li>
         <li className="setting-icon"><SettingsOutlinedIcon /></li> 
         <li className="app-icon"><AppsRoundedIcon /></li>
         </ListItem>
          {/* <div className="Circle-color-icon" CircleRoundedIcon   > < CircleRoundedIcon /></div> */}
          <UserProfile />
        
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader></DrawerHeader>
        <Divider />

        <List >
            {sidebarIcons.map((text,index) =>(
                <ListItem button key ={text.iconText} onClick={() => sideMenuIconClick(text)}>
              <ListItemIcon>
             {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.iconText} />
            </ListItem>
          ))}
        </List> 
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
        <Routes>
    
        <Route exact path= "/archive" element= {<Archive />} />
        <Route exact path= "/trash" element= {<Trash />} />
        <Route exact path= "/" element= {<Notes />} />
        
        </Routes> 
       </Typography>
        </Box>
    </Box>
    
  );
}
