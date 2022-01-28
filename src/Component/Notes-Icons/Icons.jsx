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
import NoteService from "../../service/NoteService";

const noteService =  new NoteService();
let colorPopperList =
  [ 
    {
        value:"Red",
        bgcolor:"#f28b82"
    },
      
    {
        value:"Orange",
        bgcolor:"#fbbc04"
    },
     
    {
        value:"Yellow",
        bgcolor:"#fff475"
    },
      
    {
        value:"Green",
        bgcolor:"#ccff90"
    },
     
    {
        value:"Teal",
        bgcolor:"#a7ffeb"
    },
    {
        value:"Blue",
        bgcolor:"#cbf0f8"
    },

    {
        value:"DarkBlue",
        bgcolor:"#aecbfa"
    },

    {
        value:"Purple",
        bgcolor:"#d7aefb"
    },

    {
        value:"Pink",
        bgcolor:"#fdcfe8"
    },
        
    {
        value:"Brown",
        bgcolor:"#e6c9a8"
    },

    {
        value:"Gray",
        bgcolor:"#e8eaed"
    },
    
    {
        value:"Coral",
        bgcolor:"#d2b48c"
    }
  ];

export class Icons extends Component {
    constructor(props){
        super(props);
    
        this.state ={
            anchorEl: false,
            colorOpen:false
            
        
        };
    }
    handleClick = event => this.setState({ anchorEl: event.currentTarget })
    
    handleClose = () => this.setState({ anchorEl: false });

    handleOpenColorIcon = (e) => {
      this.setState({
          colorOpen: e.currentTarget
      })
    }

    handleCloseColorIcon = () => {
      this.setState({
        colorOpen: false
      })
  }

    updateColor = (clrValue) => {
     
      if(this.props.mode === "create"){
         
      this.props.changeColor(clrValue)
      } 
      else{
         
          let data ={
              "noteIdList":[this.props.noteId],
              "color":clrValue
          }
          noteService.changesColorNotes(data)
          .then(res =>{
              console.log(res)
          })
          .catch(err =>{
              console.log( "Error msg" + err)
          })
      }
    }
    
    render() {
        const { anchorEl, colorOpen} = this.state
        return (
            <div  className="iconsList" >
            <AddAlertOutlinedIcon />
            <PersonAddAlt1OutlinedIcon />
            <ColorLensOutlinedIcon onClick={(e) => this.handleOpenColorIcon(e)} />
            <div  className="ColorPopper-icons-main">
        <Popover
                id="simple-menu"
                anchorEl={colorOpen}
                keepMounted
                open={Boolean(colorOpen)}
                onClose={this.handleCloseColorIcon}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}>

            <div className="color-list-container" >
            {colorPopperList.map((item,index) =>(
            <div button key ={index} >
              <div className="color-popper-icons" onClick={() =>this.updateColor(item.bgcolor)} style={{ backgroundColor:item.bgcolor}}>
              {/* {item.bgcolor.backgroundColor} */}
              </div>
            </div>))}
        </div>
        </Popover>
        </div>
      

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