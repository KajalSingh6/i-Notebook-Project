import React, { useContext } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import NoteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className='col-md-3'>
      <div className="card my-3">
        <div className="card-body">
          {/* <div className='d-flex  align-items-center'> */}
            <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description} </p>
             <RiDeleteBin6Fill className='icons mx-1 text-danger' size={18} onClick={() =>{deleteNote(note._id); props.showAlert("Deleted successfully", "success");}} />
              <FaEdit className='icons mx-1 text-primary' onClick={()=>{updateNote(note)}} />
          {/* </div> */}

        </div>
      </div>
    </div>
  )
}

export default NoteItem;
