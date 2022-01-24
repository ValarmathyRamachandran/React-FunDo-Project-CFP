import React, { Component } from "react";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import ColorPopper from "./ColorPopper";
import ThreeDotsIconPopper from "./ThreeDotsIconPopper";
import './Icons.scss';
import { ListItem } from "@mui/material";
import Popover from "@mui/material/Popover";


export class Icons extends Component {
    constructor(props){
        super(props);
    
        this.state ={
          anchorEl: null,
         setAnchorEl:null
        }
      }

      handleClick = event => this.setState({anchorEl:event.currentTarget})
      


    render() {
        const { anchorEl } = this.state
        return (
            <div  className="TakeNoteExpand-icons">
            <AddAlertOutlinedIcon />
            <PersonAddAlt1OutlinedIcon />
            < ColorLensOutlinedIcon  onClick={this.handleClick}/>
            <Popover
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                      }}
                ><div  className="color-list-container">
                    <div className="color-red" ></div>
                    <div className="color-yellow"></div>
                    <div className="color-green"></div>
                    <div className="color-teal"></div>
                    <div className="color-blue"></div>
                    <div className="color-darkBlue"></div>
                    <div className="color-purple"></div>
                    <div className="color-pink"></div>
                    <div className="color-brown"></div>
                    <div className="color-gray"></div>
                   
                </div>
                       
                </Popover>



            <ImageOutlinedIcon />
            <ArchiveOutlinedIcon />
            {/* <MoreVertOutlinedIcon /> */}
            <ThreeDotsIconPopper  />
             </div>
    
        )
    }
}

export default Icons; 