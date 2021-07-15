import { useState } from "react";

const UpdateForm = (props) => {

    const [patient, setPatient] = useState()
    const [isAffected, setIsAffected] = useState()
    const [sex, setSex] = useState()
    const [age, setAge] = useState()


    const updateName = (e) => {
        setPatient(e.target.value)
    }

    const updateAffected = (e) => {
        setIsAffected(e.target.value)
    }

    
    const updateSex = (e) => {
        setSex(e.target.value)
    }
       
    const updateAge = (e) => {
        setAge(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.update({name: patient, age: age, sex: sex, status: isAffected, update: true, id: props.id} , props.id)
    }

    

    return ( 
        <>
        <h2>Edit the details of {props.patients.name}</h2>
        <form onSubmit={handleSubmit} value={props.patients.id}>
        <input type="text" onChange={updateName}   value={patient}  required />
        <select  required value={sex} onChange={updateSex}>
            {/* <option value="" readonly="true" hidden="true" selected>sex</option> */}
            <option value="male">He/him</option>
            <option value="female">she/her</option>
            <option value="others">Others</option>
        </select>
        <input type="number" placeholder="age?" value={age} onChange={updateAge} required />
        <select required value={isAffected} onChange={updateAffected}>
            {/* <option value="" readonly="true" hidden="true"  selected>covid status</option> */}
            <option value="positive">Positive</option>
            <option value="negative">Negative</option>
        </select>
        <button className="button-bg">Update</button>
    </form>
    </>
     );
}
 
export default UpdateForm;