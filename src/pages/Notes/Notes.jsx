import React, { Component } from "react";
import DisplayNotes from "../../Component/DisplayNotes/DisplayNotes";
import TakeANote from "../../Component/TakeANote/TakeANote";
import NoteService from "../../service/NoteService";


const noteService =  new NoteService();

export class Notes extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
            getAllNotes:[]
          }
        }
        componentDidMount() {
          noteService.getNote()
                .then((res) => {
                  console.log(res.data.data.data);
                  this.setState({
                    getAllNotes:res.data.data.data,
                    // title:res.data.data.data.title,
                    // description:res.data.data.data.description
                  })
                  console.log(this.state.getAllNotes);
                })
                .catch(err => {
                  console.log(err)
                })

                
        }

  

    render() {
        return (
            <div>
                <TakeANote getnotes={this.getAllNotes} /> 
                <DisplayNotes  displayallNotes={this.state.getAllNotes}/>
            </div>
        )
    }
}
export default Notes;       

