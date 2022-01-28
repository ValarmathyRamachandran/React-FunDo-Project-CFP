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
import { SliderValueLabel } from "@mui/material";

const noteService =  new NoteService();

export class TakeANote extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          openTakeNote:true,  
          title:"",
          description: "",
          color:"#ffffff",
          archive:false
         
        };
      }

      handleOpen = () => {
        this.setState({
          openTakeNote: false
        })
      }
      
      
      
      changeColor=(value)=>{
          this.setState({
            color: value
          })
      }

      
    handleCloseTakeNotes = () => {
      
        var formData = new FormData();

        formData.append("title",this.state.title)
        formData.append("description",this.state.description)
        formData.append("color",this.state.color)
        formData.append("isArchived",this.state.archive)
      
        noteService.addNote(formData)
        .then((response) => {
          console.log(response);
          this.props.updateNote();
            this.setState({
              openTakeNote: true,
              title: '',
              description: '',
              color:'#ffffff',
              archive:false
              })
        }).catch(err => { console.log(err) });
      }



      changeHandleGetNotes = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    render() {
        
        return (
      <div className="TakeANote-main">
            { 
            this.state.openTakeNote?

        <div className='TakeNotes-textareaContainer'>
        <input  className="Textarea-DisplayNotes" type="input" 
          name="title" placeholder= "Take a note..." onClick={this.handleOpen}
        />
        <div  className="DisplayInput-icons">
            <CheckBoxOutlinedIcon />
           <BrushOutlinedIcon/>
            <ImageOutlinedIcon /> 
        </div>
        </div>
      :

          <div className='TakeNote-expandContainer' style={{backgroundColor:this.state.color}} >
          <input  className="Textarea-TakeaNote" type="textarea" name="title" 
          placeholder= "Title" style={{backgroundColor:this.state.color}}
          onChange={(e) => this.changeHandleGetNotes(e)}/>
          <textarea  className="Textarea-TakeaNote" type="textarea" name="description" 
          placeholder= "Take a note..." onChange={(e) => this.changeHandleGetNotes(e)}  style={{backgroundColor:this.state.color}}/>
          <div className="icon-container">
           
          <Icons changeColor={this.changeColor} mode="create" />
          <div className="takenote-close">
          <button className="takenote-close-btn" onClick={this.handleCloseTakeNotes}>Close</button>
          </div>
          </div>
          </div>
          
            }
        </div>
        );
    }
}

export default TakeANote;