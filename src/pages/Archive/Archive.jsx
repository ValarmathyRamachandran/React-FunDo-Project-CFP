import React, { Component } from "react";
import DisplayNotes from "../../Component/DisplayNotes/DisplayNotes";
import TakeANote from "../../Component/TakeANote/TakeANote";
import NoteService from "../../service/NoteService";
import Notes from "../Notes/Notes";



const noteService =  new NoteService();

export class Archive extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
            archiveNoteArray:[]
          }
        }
        componentDidMount() {
          this.ArchiveNote();
          
      }
      ArchiveNote = () => {  
          noteService.getArchiveNoteList()
                .then((res) => {
                  console.log(res.data.data.data.isArchived);
                  this.setState({
                    archiveNoteArray:res.data.data.data.isArchived
                  })
                  console.log(this.state.getAllNotesArray);
                })
                .catch(err => {
                  console.log(err)
                })
      }

     

  

    render() {
        return (
            <div>
                
                <DisplayNotes  getAllNotes={this.state.archiveNoteArray}  updateDiplayNote={this.updateNote} ArchiveNotes={this.ArchiveNote}/>
            </div>
        ) 
    }
}
export default Notes;       

