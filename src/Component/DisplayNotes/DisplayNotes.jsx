import React, { Component } from 'react';
import Icons from "../Notes-Icons/Icons";
import './DisplayNote.scss';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AlertDialog from '../AlertDialogBox/AlertDialog';



export class DisplayNotes extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
            open: false,
            title: this.props.getAllNotes.title,
            description: this.props.getAllNotes.description,
            color: '#ffffff',
            note:''
    };
  }
 
  handleClickDialogOpen(note){
    this.setState({
      note:note.id
    });

    console.log(this.state.note);
  }
 


render()
  {  
  return (
        <div className="DisplayNote-Container">
             
          {this.props.getAllNotes.map((item,index) => ( 
              <div className="DisplayNote-box" key={item.title}  onClick={() => this.handleClickDialogOpen(item)} style={{backgroundColor:item.color}} > 
                   { item.title }<br />
                  <div className="desc-text"> { item.description } </div>
                   <Icons  mode="update" noteId={item.id}  />
              </div>
              ))
          }
               <AlertDialog noteId={this.state.note} ></AlertDialog>
             

      </div>
        );
  }
}


export default DisplayNotes;


