import React, { Component } from 'react';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import Popover from '@mui/material/Popover';
import '../ColorPopper/colorPopper.scss';

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


export class ColorPopper extends Component {
  constructor(props){
    super(props);

    this.state ={
      anchorEl: null,
     setAnchorEl:null
    }
  }

  
  handleClick = event => this.setState({anchorEl:event.currentTarget});
 
  
  color=(clr)=>{
    this.props.changeColor(clr);
  }

render() {
    const { anchorEl } = this.state
    return (
        <div  className="ColorPopper-icons-main">
        <ColorLensOutlinedIcon  onClick={this.handleClick}/>
        <Popover
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                  }}>

            <div className="color-list-container" >
            {colorPopperList.map((item,index) =>(
            <div button key ={index} >
              <div className="color-popper-icons" onClick={() =>this.props.changeColor(item.bgcolor)} style={{ backgroundColor:item.bgcolor}}></div>
            </div>))}
          </div>
        </Popover>
        </div>
      )
  }
}



export default ColorPopper;