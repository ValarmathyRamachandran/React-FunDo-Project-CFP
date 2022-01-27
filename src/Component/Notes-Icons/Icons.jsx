import React, { Component } from "react";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Popover from '@mui/material/Popover';
import { listItemButtonClasses, MenuItem } from "@mui/material";
import './Icons.scss';
import ColorPopper from "./ColorPopper/ColorPopper";

export class Icons extends Component {
    constructor(props){
        super(props);
    
        this.state ={
            anchorEl: false,
            
        
        };
    }
    handleClick = event => this.setState({ anchorEl: event.currentTarget })
    handleClose = () => this.setState({ anchorEl: false })
    
    render() {
        const { anchorEl} = this.state
        return (
            <div  className="iconsList" >
            <AddAlertOutlinedIcon />
            <PersonAddAlt1OutlinedIcon />
            <ColorPopper onClick={this.handleClick} changeColor={this.props.changeColor}  />
            <ImageOutlinedIcon />
            <ArchiveOutlinedIcon />

            <div>
          <MoreVertOutlinedIcon onClick={this.handleClick} />
          <Popover
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left"
            }}>
            <Typography sx={{ p: 1 , zIndex:'3'}}>
                <MenuItem>Delete note </MenuItem>
                <MenuItem> Add label </MenuItem>
                <MenuItem>Add drawing </MenuItem>
                <MenuItem>Make a copy</MenuItem>
                <MenuItem>Show checkboxes</MenuItem>
                
            </Typography>
          </Popover>
        </div>
        </div>
    
        )
    }
}

export default Icons; 