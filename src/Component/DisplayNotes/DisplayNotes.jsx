import React, { Component } from "react";
import InputUnstyled from '@mui/base/InputUnstyled';
import { TextareaHTMLAttributes } from "react";

import ListItem from '@mui/material/ListItem';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Icons from "../Notes-Icons/Icons";

export class DisplayNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open:true,  
      Title: "",
      Notes: "",
     
    };
  }

  handleOpen = () => {
    this.setState({
        open: false
    })
  }

handleClose = () => {
    this.setState({
        open: true
    })
}

render()
{
    return(
      <div className='TakeNote-expandContainer'>
          <input  className="Textarea-TakeaNote" type="textarea" name="textValue" 
          placeholder= "Title..."/>
          <input  className="Textarea-TakeaNote" type="textarea" name="textValue" 
          placeholder= "Description..."/>
          
            <Icons /> 
            
          {/* <div className="takenote-close">
          <button className="takenote-close-btn" onClick={this.handleClose}>Close</button>
          </div> */}
          </div>

          
          )

          
}
}

export default DisplayNotes;
