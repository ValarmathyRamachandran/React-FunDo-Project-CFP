import React, { Component } from 'react';
import Icons from "../Notes-Icons/Icons";
import './DisplayNote.scss';
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import NoteService from '../../service/NoteService';
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';


const noteService =  new NoteService();

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      width: theme.spacing(80)
  },
  '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
      width: theme.spacing(100)
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
          {children}
          {onClose ? (
              <IconButton
                  aria-label="close"
                  onClick={onClose}
                  sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                  }}
              >
              </IconButton>
          ) : null}
      </DialogTitle>
  );
};


export class DisplayNotes extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
            open: false,
            title: this.props.getAllnotesArr.title,
            description: this.props.getAllnotesArr.description,
            color: '#ffffff',
            id:this.props.getAllnotesArr.id,
            setOpen: false,
            archive:false,
            delete:false
    };
  }
 
  handleClickDialogOpen(item){
    this.setState({
      open:true,
      setOpen:false,
        id:item.id,
        title:item.title,
        description:item.description,
        color:item.color
      
      
    });

  }
  handleClose = () => {

    const formData = new FormData();
    formData.append("title",this.state.title)
    formData.append("description",this.state.description)
    formData.append("noteId", this.state.id)
   

    noteService.getUpdatedNote(formData)
        .then(res => {
            console.log(res);  
            this.props.getnotes();
            this.setState({
              open:false,
              setOpen:false,
              title: '',
              description:'',
              color:'',
              id:''
              
        })
        .catch(err => {
            console.log(err)
        })
      
      })
       
}


fetchData = (e) => {
  this.setState({
    
      [e.target.name]: e.target.value
      
  })
}

changeArchive = (val) => {
  this.setState({
      useArchive: val
  })
}

changeDelete = (val) => {
  this.setState({
    handleDelete: val
  })
}

changeColor = (clr) => {
  this.setState({
      color: clr
  })
}

render()
  {  
  return (
        <div className="DisplayNote-Container">
             
          {this.props.getAllnotesArr.map((item,index) => ( 
              <div className="DisplayNote-box" key={index}  onClick={() => this.handleClickDialogOpen(item)} style={{backgroundColor:item.color}} > 
                   { item.title }<br />
                  <div className="desc-text"> { item.description } </div>
                   <Icons  mode="update" noteId={item.id} getnotes={this.props.getnotes} changeArchive={this.changeArchive} changeDelete={this.changeDelete} changeColor={this.changeColor}  />
              </div>
              ))
          }
              <BootstrapDialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open}>
                    <div style={{ width: "100%", overflow: "hidden",backgroundColor:this.state.color }}>

                        <BootstrapDialogTitle id="customized-dialog-title" onClose={this.handleClose}>

                            <input type="text" style={{ border: "none", outline: "none",backgroundColor:this.state.color }} value={this.state.title} name="title" onChange={(e) => this.fetchData(e)}  />

                        </BootstrapDialogTitle>
                        <DialogContent>

                            <input type="text" style={{ border: "none", outline: "none",backgroundColor:this.state.color }} value={this.state.description} name="description" onChange={(e) => this.fetchData(e)} />

                        </DialogContent>
                        <DialogContent className="close-Icon" >

                            <Icons changeColor = {this.changeColor} mode="update" noteId={this.state.id}  style={{ width: "90%"}} getnotes={this.props.getnotes} changeColor={this.changeColor}
                            changeArchive={this.changeArchive} changeDelete={this.changeDelete} />
                            <Button value="Displayclose" className="DisplayCloseBtn" onClick={(title, description) => this.handleClose(title, description)} > Close </Button>

                        </DialogContent>

                    </div>
                </BootstrapDialog>
            </div>
        )
    }
}


export default DisplayNotes;


