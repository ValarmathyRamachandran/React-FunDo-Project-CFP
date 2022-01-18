import React, { Component } from "react";
import InputUnstyled from '@mui/base/InputUnstyled';
import { TextareaHTMLAttributes } from "react";
import './DisplayNotes.scss';
import ListItem from '@mui/material/ListItem';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
export class DisplayNotes extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          Title: "",
          Notes: "",
         
        };
      }
    render() {
        
        return (
        <div className='DisplayNotes-textareaContainer'>
        <div>
        <input  className="Textarea-DisplayNotes" type="textarea" 
          name="textValue" placeholder= "Take a note..."
        />
        <ListItem  className="DisplayInput-icons">
            <li className="checkBox-icon"><CheckBoxOutlinedIcon /></li>
            <li className="Brush-icon"><BrushOutlinedIcon/></li>
            <li className="Image-icon"><ImageOutlinedIcon /> </li>
        </ListItem>
        
        </div>
      </div>

        );
    }
}

export default DisplayNotes;