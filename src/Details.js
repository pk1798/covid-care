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
        <div className="patient-details">
           <div className="patient-detail" key={props.patient.id}>
           <h2 key={props.patient.id}>{props.patient.name} is {props.patient.status}</h2>
           <p>age : {props.patient.age}</p>
           <p>Sex : {props.patient.sex}</p>
           <button onClick={removePatient} value={props.patient.id}>Discharge</button>
           <button onClick={handleRemove} value={props.patient.id}>EDIT</button>
           <div className="edit-form" className={props.patient.update? "hide" : "show"}> <UpdateForm patients={props.patient} update={handleUpdateForm} id={props.patient.id}/> </div>
           </div>
        </div>
     );
}
 
export default Details;