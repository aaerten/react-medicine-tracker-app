import React,{Fragment,useState,useEffect} from 'react'

const SetAlarm = ({ medicine }) => {

			const [medicine_alarm, setAlarm] = useState(medicine.medicine_alarm);
            const [medicine_status, setStatus] = useState(medicine.medicine_status);
			const [medicine_name, setName] = useState(medicine.medicine_name);
			const [medicine_period, setPeriod] = useState(medicine.medicine_period);
			const [medicine_type, setType] = useState(medicine.medicine_type);
			const [medicine_eat_type, setEatType] = useState(medicine.medicine_eat_type);

			var [currentTime, setCurrentTime] = useState(new Date());


			useEffect(() => {
				 	var clock = setInterval(() => updateTime(),1000);
				return () => {
					    clearInterval(clock);
				}
			})

			useEffect(() => {
				const interval = setInterval(() => checkAlarm(),1000);
				return () => {
					clearInterval(interval);
				}
			})

			function updateTime(){
				const newTime=new Date();
				setCurrentTime(newTime);
			}
						
			const checkAlarm = ()=>{
					if (currentTime.toLocaleTimeString('en-GB', {hour12: false }) === medicine_period && medicine_alarm==="On") {
						window.alert("Time to take a Medicine");
					} else {
						console.log('not yet');
					}
		}


	const uploadMedicine = async (e) => {
		e.preventDefault();
		try {
			const body = {
                medicine_status, 
                medicine_name, 
                medicine_period, 
                medicine_type, 
                medicine_eat_type,
				medicine_alarm,
			};
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
		<div>
			<Fragment>
				<button
					type="button"
					className="btn btn-info"
					data-toggle="modal"
					data-target={`#sid${medicine.medicine_id}`}
				>
					Set Alarm
				</button>

				<div className="modal" id={`sid${medicine.medicine_id}`}>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Set The Alarm</h4>
								<button type="button" className="close" data-dismiss="modal">
									&times;
								</button>
							</div>

							<div className="modal-body">
								<form onSubmit={uploadMedicine}>
									<div className="form-group">
										<label className="form-label">Alarm Status</label>
										<select
											className="form-select"
											value={medicine_alarm}
											onChange={(e) => setAlarm(e.target.value)}
										>
											<option value="" disabled>
												Select the status of alarm
											</option>
											<option value="On">On</option>
											<option value="Off">Off</option>
										</select>
									</div>
									<button type="submit" className="btn btn-info">
										Set
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		</div>
	);
};

export default SetAlarm
