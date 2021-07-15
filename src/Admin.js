import { useState } from "react";
import Form from './Form';
import List from "./List";

const Admin = () => {

    const [patients, setPatient] = useState([])

    const addPatient = (patient) => {
        const newList = [...patients, patient]
        setPatient(newList)
    }

    return ( 
        <div className="container">
            <Form getPatient={addPatient}/>
            <List patients={patients}/>
        </div>
     );
}
 
export default Admin;