import React, {Fragment, useState } from 'react';

const EditMedicine = ({medicine}) => {

        const [medicine_status, setStatus] = useState(medicine.medicine_status);
		const [medicine_name, setName] = useState(medicine.medicine_name);
		const [medicine_period, setPeriod] = useState(medicine.medicine_period);
		const [medicine_type, setType] = useState(medicine.medicine_type);
		const [medicine_eat_type, setEatType] = useState(medicine.medicine_eat_type);
        

            const uploadMedicine = async (e) => {
				e.preventDefault();
				try {
					const body = { medicine_status, medicine_name, medicine_period, medicine_type, medicine_eat_type };
					const response = await fetch(`http://localhost:5000/medicines/${medicine.medicine_id}`, {
						method: 'PUT',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(body),
					});
					window.location = '/';
				} catch (err) {
					console.error(err.message);
				}
			};

    return (
		<Fragment>
			<button
				type="button"
				className="btn btn-warning"
				data-toggle="modal"
				data-target={`#id${medicine.medicine_id}`}
			>
				Edit
			</button>

			<div className="modal" id={`id${medicine.medicine_id}`}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Edit The Medicine</h4>
							<button type="button" className="close" data-dismiss="modal">
								&times;
							</button>
						</div>

						<div className="modal-body">
							<form onSubmit={uploadMedicine}>
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
								<button type="submit" className="btn btn-warning">
									Edit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default EditMedicine


						/*			<Select options={options}
                                     onChange={(e) => setHours(e.target.value)} id="hours"></Select>
									<select onChange={(e) => setMinutes(e.target.value)} id="minutes"></select>
									<select onChange={(e) => setSeconds(e.target.value)} id="seconds"></select>
									<select onChange={(e) => setAmPm(e.target.value)} id="ampm">
										<option value="AM"></option>
										<option value="PM"></option>
									</select>*/