import React, { Component } from "react";
import InputUnstyled from '@mui/base/InputUnstyled';
import { TextareaHTMLAttributes } from "react";
import './TakeANote.scss';
import ListItem from '@mui/material/ListItem';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Icons from "../Notes-Icons/Icons";
import NoteService from "../../service/NoteService";

const noteService =  new NoteService();

export class TakeANote extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          openTakeNote:true,  
          title:"",
          description: ""
         
        };
      }

      handleOpen = () => {
        this.setState({
          openTakeNote: false
        })
      }

      
    handleClose = () => {
      this.setState({
        openTakeNote: true
      })
       
        let data = {
          "title": this.state.title,
          "description": this.state.description,
        }

        noteService.addNote(data)
        .then((response) => {
          console.log(response);
          console.log('success');
            localStorage.setItem("title",response.data.title)
            // window.location.href="http://localhost:4200/dashboard";
         
        })
        
        .catch(err => { console.log(err) });
       
      }

      changeHandle = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    render() {
        
        return (
      <div className="TakeANote-main">
            { 
            this.state.openTakeNote?

        <div className='DisplayNotes-textareaContainer'>
        <textarea  className="Textarea-DisplayNotes" type="textarea" 
          name="Title" placeholder= "Take a note..." onClick={this.handleOpen}
        />
        <div  className="DisplayInput-icons">
            <CheckBoxOutlinedIcon />
           <BrushOutlinedIcon/>
            <ImageOutlinedIcon /> 
        </div>
        </div>
      :

          <div className='TakeNote-expandContainer'>
          <textarea  className="Textarea-TakeaNote" type="textarea" name="title" 
          placeholder= "Title..."
          onChange={(e) => this.changeHandle(e)}/>
          <textarea  className="Textarea-TakeaNote" type="textarea" name="description" 
          placeholder= "Take a note..." onChange={(e) => this.changeHandle(e)} />
          <div className="icon-container">
           
          <Icons /> 
          <div className="takenote-close">
          <button className="takenote-close-btn" onClick={this.handleClose}>Close</button>
          </div>
          </div>
          </div>
          
            }
        </div>
        );
    }
}

export default TakeANote;