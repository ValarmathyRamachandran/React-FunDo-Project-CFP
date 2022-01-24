import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { listItemButtonClasses, MenuItem } from "@mui/material";

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
                <MenuItem>Delete note </MenuItem>
                <MenuItem> Add label </MenuItem>
                <MenuItem>Add drawing </MenuItem>
                <MenuItem>Make a copy</MenuItem>
                <MenuItem>Show checkboxes</MenuItem>
                <MenuItem>Copy to Google Docs</MenuItem>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <MoreVertOutlinedIcon onClick={handleClick("bottom-end")}>
          bottom-end
        </MoreVertOutlinedIcon>
      </Grid>
    </Box>
  );
}
