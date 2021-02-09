import React,{useEffect,useState} from 'react'
import EditMedicine from "./EditMedicine"


const MedicineList = () => {

const[medicines, setMedicines] = useState([]);

//DELETE FUNCTION
const deleteMedicine = async (id)=>{
try {
    const deleteMedicine = await fetch(`http://localhost:5000/medicines/${id}`,{
        method:"DELETE"
    })
    setMedicines(medicines.filter(medicine=>medicine.medicine_id !== id));
} catch (err) {
    console.error(err.message);
}
}

//GET ALL DATA
const getMedicines = async ()=>{
    try{
        const response = await fetch("http://localhost:5000/medicines")
        const jsonData = await response.json();

        setMedicines(jsonData);
    }catch(err){
        console.error(err.message);
    }
};

    
  useEffect (() => {
    getMedicines();
},[]);


    return (
		<div>
				<table className="table mt-5 text-center">
					<thead>
						<tr>
							<th>Status</th>
							<th>Medicine Name</th>
							<th>Daily use</th>
							<th>Type of Medicine</th>
							<th>Before or After Eating</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{medicines.map((medicine) => (
							<tr key={medicine.medicine_id}>
								<td>{medicine.medicine_status}</td>
								<td>{medicine.medicine_name}</td>
								<td>{medicine.medicine_period}</td>
								<td>{medicine.medicine_type}</td>
								<td>{medicine.medicine_eat_type}</td>
								<td>
									<EditMedicine medicine={medicine} />
								</td>
								<td>
									<button
										className="btn btn-danger"
										onClick={() => deleteMedicine(medicine.medicine_id)}
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
		</div>
	);
}

export default MedicineList