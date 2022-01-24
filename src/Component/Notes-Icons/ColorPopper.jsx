import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { listItemButtonClasses, MenuItem } from "@mui/material";
import './Icons.scss';

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <Box sx={{ width: 500   }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className="Threedots-display">
              <Typography sx={{ p: 1 , zIndex:'3'}}>
                <div className="color-red" ></div>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <ColorLensOutlinedIcon onClick={handleClick("bottom-end")}>
        </ColorLensOutlinedIcon>
      </Grid>
    </Box>
  );
}
