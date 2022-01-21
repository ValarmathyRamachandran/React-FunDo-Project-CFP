import React, { Component } from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import ListItem from '@mui/material/ListItem';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Icons from "../Notes-Icons/Icons";
import NoteService from "../../service/NoteService";
import axios from "axios";
import './DisplayNote.scss';
export class DisplayNotes extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.displayallNotes);
    this.state = {
        
    };
  }

render()
  {  
    
  return (
        <div className="DisplayNote-Container">
          {this.props.displayallNotes.map((item,index) => ( 
              <div className="DisplayNote-box" key={item.title} > 
                   { item.title }<br />
                   { item.description }
                   <Icons />
              </div>
              ))
            }
            </div>
        );
  }
}


export default DisplayNotes;
