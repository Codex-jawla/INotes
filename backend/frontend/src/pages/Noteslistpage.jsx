import React, { useEffect, useState } from "react";
import Noteslist from "../component/Noteslist";
import apiurl from "../component/apilink";
import Add from "../component/Add";

const Noteslistpage = () => {
  let [notes, setnotes] = useState([]);
  useEffect(() => {
    getnotes();
  }, []);

  let getnotes = async () => {
    let result = await fetch(`${apiurl}/api/notes`);
    let data = await result.json();
    // console.log('data',data)
    setnotes(data);
  };

  return (
    <>
      <div className="notes">
        <div className="notes-header">
          <h2 className="notes-title">&#9782; Notes </h2>
          <p className="notes-count">{notes.length} </p>
        </div>
        <div className="notes-list">
          {notes.map((note, index) => (
            <Noteslist key={index} note={note} />
          ))}
        </div>
        <Add />
      </div>
    </>
  );
};

export default Noteslistpage;
