import React, { useContext, useState} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/fireBase'

const Form = () => {
    const [value, setValue]  = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)
    const submitHandler = e=>{
        e.preventDefault();
        if(value.trim()){
            firebase.addNote(value.trim()).then(()=>{
                alert.show('Заметка была создана', 'success')
            }).catch(()=>{
                alert.show('Заметка не была создана', 'danger')
            })
            setValue('')
        }
        else{
            alert.show('Введите название заметки')
        }
        
        
    }
    return (
        <form onSubmit={submitHandler}>
            <input
                onChange={e=>setValue(e.target.value)}
                type="text"
                name="title"
                className="form-control"
                placeholder="Введите название заметки"
            />
        
        </form>
    )
}

export default Form
