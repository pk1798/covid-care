import { useState } from "react";

const Form = (props) => {

    const [patient, setPatient] = useState()

    const handleInput = (e) => {
        setPatient(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getPatient(patient)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add patient..." onChange={handleInput} />
            <button>ADD</button>
        </form>
     );
}
 
export default Form;