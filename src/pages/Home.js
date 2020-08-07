import React, { useContext, useEffect } from 'react'
import Form from '../components/Form'
import Notes from '../components/Notes'
import { FirebaseContext } from '../context/firebase/fireBase'
import {Loader} from '../components/Loader'
const Home = () => {
const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

useEffect(() => {
    fetchNotes()
   
}, [])    

return (
        <>
            <Form/>
           {loading
            ?<Loader/>
        :<Notes notes={notes} onRemove={removeNote}/>}
            
        </>
    )
}

export default Home
