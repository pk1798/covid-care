const List = (props) => {

    const patients = props.patients;

    return ( 
        <>
        {patients.map(patient=><h1>{patient}</h1>)}
        </>
     );
}
 
export default List;
