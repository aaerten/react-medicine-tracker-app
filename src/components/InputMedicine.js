import React, { useState } from 'react';

const InputMedicine = () => {

    const[medicine_status, setStatus] = useState("");
    const[medicine_name, setName] = useState("");
    const[medicine_period, setPeriod] = useState("");
    const[medicine_type, setType] = useState("");
    const[medicine_eat_type, setEatType] = useState("");

    const onSubmitForm = async e =>{
        e.preventDefault();
        try{
            const body = {medicine_status, medicine_name, medicine_period, medicine_type, medicine_eat_type};
            const response = await fetch('http://localhost:5000/medicines', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
        window.location="/";
        }catch(err){
            console.error(err.message);
        }
    }


    return (
		<>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#inputModal">
				ADD NEW MEDICINE
			</button>

			<div className="modal" id="inputModal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Add New Medicine</h4>
							<button type="button" className="close" data-dismiss="modal">
								&times;
							</button>
						</div>
						<div className="modal-body">
							<form onSubmit={onSubmitForm}>
								<div className="form-group">
									<label className="form-label">Status</label>
									<select
										className="form-select"
										value={medicine_status}
										onChange={(e) => setStatus(e.target.value)}
									>
										<option value="" disabled>
											Select the status of medicine
										</option>
										<option value="Taken">Taken</option>
										<option value="Not Taken">Not Taken</option>
									</select>
								</div>
								<div className="mb-3">
									<label className="form-label">Medicine Name</label>
									<input
										type="text"
										className="form-control"
										value={medicine_name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Daily use format (hh:mm:ss)</label>
									<input
										type="text"
										className="form-control"
										value={medicine_period}
										onChange={(e) => setPeriod(e.target.value)}
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Type of Medicine</label>
									<select
										className="form-select"
										value={medicine_type}
										onChange={(e) => setType(e.target.value)}
									>
										<option value="" disabled>
											Select the type of medicine
										</option>
										<option value="Tablet">Tablet</option>
										<option value="Syrup">Syrup</option>
									</select>
								</div>
								<div className="mb-3">
									<label className="form-label">Before or After Eating</label>
									<select
										className="form-select"
										value={medicine_eat_type}
										onChange={(e) => setEatType(e.target.value)}
									>
										<option value="" disabled>
											Select the type of medicine
										</option>
										<option value="Before">Before</option>
										<option value="After">After</option>
									</select>
								</div>

								<button type="submit" className="btn btn-primary">
									ADD MEDICINE
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default InputMedicine
