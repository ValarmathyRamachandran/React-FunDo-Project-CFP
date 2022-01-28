import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import './AlertDialog.scss';
import Icons from "../Notes-Icons/Icons";



export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(props.visible);
console.log(open, 'Open');
console.log(props.visible, 'visible');
  // const handleAlertClose = () => {
  //   setOpen(false);
  //   props.closeAlert();
  // };

  React.useEffect(()=>{
    setOpen(props.visible);
  },[props.visible]);
// const [open, setOpen] = React.useState(props.visible);



const handleAlertClose = () => {
  setOpen(false);
  
}


  return (
    <div className="AlertDialog-Container">
      <div  className="AlertDialog-box"  >
        {/* Open alert dialog */}
      </div>
      <div></div>
      
      <Dialog 
        open={props.visible}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.note.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.note.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className="AlertIcons-container">
            <Icons  />
            <Button onClick={handleAlertClose}>Close</Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}