import './App.css'
import Details from "./Details"

const List = (props) => {


        const removePatient = (data) => {
            props.delete(data)
        }

        const handleUpdate = (id) => {
            props.edit(id);
        }

        const updateForm = (data , id) => {
            props.update(data, id)
        }


    return ( 
        <>
        {props.patients.map(patient=> <Details key={patient.id} patient={patient} remove={removePatient} updatePatient={handleUpdate} edit={updateForm} /> )}
        </>
     );
}
 
export default List;
