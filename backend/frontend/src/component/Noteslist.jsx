import React from "react";
import { Link } from "react-router-dom";

const Noteslist = ({ note }) => {

  let getdate = (note) =>{
    return new Date(note.updated_on).toLocaleDateString();
  }

  let getTitle = (note) => {
    let title = note.body.split('\n') [0]
    if (title.length > 45) {
    return title.slice(0, 45)
    }
    return title
    }

  return (
    <>
      <Link to={`/note/${note.id}`}>
        <div className="notes-list-item">
          <h3>{getTitle(note)}</h3>
          <p><span>{getdate(note)}</span></p>
        </div>
      </Link>
    </>
  );
};

export default Noteslist;
