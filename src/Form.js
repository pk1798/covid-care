import { useState } from "react";
import shortid from "shortid";

const Form = (props) => {

    const [patient, setPatient] = useState()
    const [isAffected, setIsAffected] = useState()
    const [sex, setSex] = useState()
    const [age, setAge] = useState()


    const handleName = (e) => {
        setPatient(e.target.value)
    }

    const handleAffected = (e) => {
        setIsAffected(e.target.value)
    }

    
    const handleSex = (e) => {
        setSex(e.target.value)
    }
       
    const handleAge = (e) => {
        setAge(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getPatient({name: patient, status: isAffected, sex: sex, age: age , update: true, id: shortid.generate()})
    }


    return ( 
        <>
        <h2>Add new patient details</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add patient..." onChange={handleName} required />
            <select onChange={handleSex} required>
                <option value="" readonly="true" hidden="true" selected>sex</option>
                <option value="male">He/him</option>
                <option value="female">she/her</option>
                <option value="others">Others</option>
            </select>
            <input type="number" placeholder="age?" onChange={handleAge} required />
            <select onChange={handleAffected} required>
                <option value="" readonly="true" hidden="true" selected>covid status</option>
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
            </select>
            <button className="button-bg">ADD</button>
        </form>
        </>
     );
}
 
export default Form;