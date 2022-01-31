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
                  let filteredData = res.data.data.data.filter(value => value.isArchived !== true && value.isDeleted !== true)
                  this.setState({
                    getAllNotesArray : filteredData
                   
                  })
                 
                  
                })
                .catch(err => {
                  console.log(err)
                })
      }

     

  

    render() {
        return (
            <div>
                <TakeANote getnotes={this.updateNote}  /> 
                <DisplayNotes  getAllnotesArr={this.state.getAllNotesArray}  getnotes={this.updateNote}/>
            </div>
        ) 
    }
}
export default Notes;       

