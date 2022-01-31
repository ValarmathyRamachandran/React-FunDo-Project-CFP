import React, { Component } from 'react';
import DisplayNotes from '../../Component/DisplayNotes/DisplayNotes';
import NoteService from '../../service/NoteService';

const noteService = new NoteService();

export class Trash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trashNotesArray: []
        }
    }

    componentDidMount() {
        this.updateTrashNote();
    }

    updateTrashNote = () => {
        noteService.getTrashNote()
            .then(res => {
                console.log(res)
                this.setState({
                    trashNotesArray: res.data.data.data
                })
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return <div>
            <DisplayNotes trashArr={this.state.trashNotesArray} updateNote={this.updateTrashNote} />
        </div>;
    }
}

export default Trash;