import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import { border, padding } from '@mui/system';
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const signOut = () => {
    localStorage.removeItem('token')
    localStorage.removeItem("email")
    localStorage.removeItem("firstName")
    localStorage.removeItem("lastName")
}

  return (
    <div>
      <Button aria-describedby={id}  onClick={handleClick} style={{backgroundColor:'white'}}>
      <div className="Circle-color-icon" CircleRoundedIcon   > < CircleRoundedIcon /></div>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
            <div className='userProfile-icon-container' style={{backgroundColor:'white'}} >
                <p style={{fontWeight:'500',lineHeight:.2}} >{localStorage.getItem("firstName")}
                {' '}{localStorage.getItem("lastName")}</p>
                <p style={{marginLeft:"4vh"}}>{localStorage.getItem("email")}</p>

                <div>
                <Link to="/signin"> <button className='signOut-btn' onClick={signOut} style={{backgroundColor:'white' ,border: '1px solid gray' ,padding:'5px',marginLeft:'10vh'}}>Sign Out</button></Link>
                </div>
            </div>
        </Typography>
      </Popover>
    </div>
  );
}


