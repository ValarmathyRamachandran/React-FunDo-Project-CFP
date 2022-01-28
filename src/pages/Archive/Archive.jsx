import React, { Component } from "react";
import DisplayNotes from "../../Component/DisplayNotes/DisplayNotes";
import TakeANote from "../../Component/TakeANote/TakeANote";
import NoteService from "../../service/NoteService";


const noteService =  new NoteService();

export class Archive extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
            getAllNotesArray:[]
          }
        }
        componentDidMount() {
          this.updateNote();
          
      }
      updateNote = () => {  
          noteService.getArchiveNoteList()
                .then((res) => {
                  console.log(res.data.data.data.isArchived);
                  this.setState({
                    getAllNotesArray:(res.data.data.data.isArchived === true),
                    // title:res.data.data.data.title,
                    // description:res.data.data.data.description
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
                
                <DisplayNotes  getAllNotes={this.state.getAllNotesArray}  updateDiplayNote={this.updateNote}/>
            </div>
        ) 
    }
}
export default Notes;       

