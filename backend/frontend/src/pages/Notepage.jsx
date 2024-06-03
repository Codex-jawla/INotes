import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import apiurl from '../component/apilink';

const Notepage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState({ body: "" });

    useEffect(() => {
        getNote();
    }, [id]);

    const getNote = async () => {
        
        if(id ==='new') return
        const result = await fetch(`${apiurl}/api/notes/${id}`);
        const data = await result.json();
        setNote(data);    
        
    };
    const getCookie = (name) => {
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : '';
    };
    const csrftoken = getCookie('csrftoken');

    const createNote = async () => {
        
            await fetch(`${apiurl}/api/notes/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify(note)
            });
    
    };

    const updateNote = async () => {
        try {
            await fetch(`${apiurl}/api/notes/${id}/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                body: JSON.stringify(note)
            });
        } catch (error) {
            console.error("Error updating note:", error);
        }
    };

    const deleteNote = async () => {
        try {
            await fetch(`${apiurl}/api/notes/${id}/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
            });
            navigate("/");
        } catch (error) {
            console.error("Error updating note:", error);
        }
    };

    const handleInputChange = (e) => {
        setNote({ ...note, body: e.target.value });
    };

    const handleSubmit = () => {
        if (id!=='new' && !note.body){
            console.log('delete triger')
            deleteNote();
        }else if(id!=='new'){
            console.log('update triger')
            updateNote();
        }else{
            createNote();
        }
        
        navigate("/");
    };

    return (
        <div className='note'>
            <div className='note-header'>
                <div className='separate'>
                    <MdOutlineArrowBackIosNew onClick={handleSubmit} className='itm1' />
                    {id !== 'new' ?  <button onClick={deleteNote} className='itm2'>Delete</button>: <button onClick={handleSubmit} className='itm2'>Done</button>}
                    
                </div>
            </div>
            <textarea value={note.body} onChange={handleInputChange}></textarea>
        </div>
    );
};

export default Notepage;