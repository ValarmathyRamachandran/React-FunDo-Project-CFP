import React, { Component } from 'react';
import Icons from "../Notes-Icons/Icons";
import './DisplayNote.scss';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AlertDialog from '../AlertDialog';

export class DisplayNotes extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.displayallNotes);
    this.state = {
      
      // openAlert:false,
      // setOpenAlert:false,
    
    };
  }
  // handleClickOpen = () => {
  //   this.setState({
  //     openAlert: true
  //   })
  // };

  //  handleAlertClose = () => {
  //   this.setState({
  //     setOpenAlert: false
  //   })
  // };

 

render()
  {  
    
  return (
        <div className="DisplayNote-Container">

          {this.props.displayallNotes.map((item,index) => ( 
              <div className="DisplayNote-box" key={item.title}  onClick={this.handleClickOpen} > 
                   { item.title }<br />
                  <div className="desc-text"> { item.description } </div>
                   <Icons />
                   <AlertDialog title={item.title} description={item.description}></AlertDialog>
              </div>
              
              ))
             
            }
             

      </div>
        );
  }
}


export default DisplayNotes;


