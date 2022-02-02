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
      
                  this.setState({
                    archiveNoteArray:res.data.data.data
                  })
                  console.log(this.state.archiveNoteArray);
                })
                .catch(err => {
                  console.log(err)
                })
      }

     

  

    render() {
        return (
            <div>
                
                <DisplayNotes  getAllnotesArr={this.state.archiveNoteArray}   updateNote={this.ArchiveNote}/>
            </div>
        ) 
    }
}
export default Archive;       

