import UpdateForm from "./UpdateForm"


const Details = (props) => {

    const removePatient = (e) => {
        props.remove(e.target.value)
    }

    const handleRemove = (e) => {
        props.updatePatient(e.target.value)
    }

    const handleUpdateForm = (data , id) => {
        props.edit(data, id)
    }

    return ( 
        <>
        <div className="patient-details" key={props.patient.id}>
            <p>name : {props.patient.name}</p>
            <p>status: {props.patient.status}</p>
            <p>age : {props.patient.age}</p>
            <p>Sex : {props.patient.sex}</p>
           <button onClick={removePatient} value={props.patient.id}>Discharge</button>
           <button onClick={handleRemove} value={props.patient.id}>EDIT</button>
        </div>
        <div className="edit-form" className={props.patient.update? "hide" : "show"}> <UpdateForm patients={props.patient} update={handleUpdateForm} id={props.patient.id}/> </div>
        </>
     );
}
 
export default Details;