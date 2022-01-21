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
        return noteService.getMethod(`${baseurl}/notes/getNotesList`,headerConfig);
    }
}

export default NoteService;