import { useState } from "react";
import Form from './Form';
import List from "./List";

const Admin = () => {

    const [patients, setPatient] = useState([])

    const addPatient = (patient) => {
        const newList = [...patients, patient]
        setPatient(newList)
    }

    const handleRemove = (id) => {
        setPatient(patients.filter(patient=> patient.id !== id))
    }

    const handleEdit = (id) => {
        setPatient(patients.map(patient => patient.id === id? { ...patient, update: !patient.update} : patient))
    }

    const handleUpdate = (details , id) => {
        setPatient(patients.map(patient => patient.id === id? {...details, name: details.name, status: details.isAffected, sex: details.sex, age: details.age , update: !details.update} : patient))
    }

    // console.log(patients)

    return ( 
        <div className="container">
            <Form getPatient={addPatient}/>
            <List patients={patients} delete={handleRemove} edit={handleEdit} update={handleUpdate}/>
        </div>
     );
}
 
export default Admin;