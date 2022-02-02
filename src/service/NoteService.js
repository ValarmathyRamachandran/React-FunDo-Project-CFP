import Axiossercice from "./Axioservice";

const noteService = new Axiossercice();


let baseurl='http://fundoonotes.incubation.bridgelabz.com/api/';

let headerConfig={
    headers:{
        Authorization:localStorage.getItem('token')
    }
}


class NoteService {
    addNote(data){
        return noteService.postMethod(`${baseurl}notes/addNotes`,data,headerConfig)
    }

    getNote(){
        return noteService.getMethod(`${baseurl}notes/getNotesList`,headerConfig);
    }
    changesColorNotes(data){
        return noteService.postMethod(`${baseurl}notes/changesColorNotes`,data,headerConfig);
    }
    getUpdatedNote(data){
        return noteService.postMethod(`${baseurl}notes/updateNotes`,data,headerConfig)
      }

    changeArchive(data){
        return noteService.postMethod(`${baseurl}notes/archiveNotes`,data,headerConfig)
    }

    deleteNote(data){
        return noteService.postMethod(`${baseurl}notes/trashNotes`,data,headerConfig)
    }

    getArchiveNoteList(){
        return noteService.getMethod(`${baseurl}notes/getArchiveNotesList`,headerConfig)
    }

    getTrashNote(){
        return noteService.getMethod(`${baseurl}notes/getTrashNotesList`,headerConfig)
      }
}

export default NoteService;