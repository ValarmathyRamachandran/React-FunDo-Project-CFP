import React, { Component } from "react";
import DisplayNotes from "../../Component/DisplayNotes/DisplayNotes";
import TakeANote from "../../Component/TakeANote/TakeANote";
import NoteService from "../../service/NoteService";


const noteService =  new NoteService();

export class Notes extends Component {
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
          noteService.getNote()
                .then((res) => {
                  console.log(res.data.data.data);
                  this.setState({
                    getAllNotesArray:res.data.data.data,
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
                <TakeANote getnotes={this.getAllNotesArray}  /> 
                <DisplayNotes  getAllNotes={this.state.getAllNotesArray}  updateDiplayNote={this.updateNote}/>
            </div>
        ) 
    }
}
export default Notes;       

