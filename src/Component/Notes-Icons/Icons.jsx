import React, { Component } from "react";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';

export class Icons extends Component {
    render() {
        return (
            <div  className="TakeNoteExpand-icons">
            <AddAlertOutlinedIcon />
            <PersonAddAlt1OutlinedIcon />
            <ColorLensOutlinedIcon />
            <ImageOutlinedIcon />
            <ArchiveOutlinedIcon />
            <MoreVertOutlinedIcon /> </div>
    
        )
    }
}

export default Icons; 