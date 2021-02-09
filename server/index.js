const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

////Routes

//create a data
app.post("/medicines",async(req,res)=>{
    try{
        const{medicine_status,medicine_name,medicine_period,medicine_type,medicine_eat_type} = req.body; 
        const newMedicine = await pool.query(
			'INSERT INTO medicine(medicine_status,medicine_name,medicine_period,medicine_type,medicine_eat_type) VALUES ($1,$2,$3,$4,$5) RETURNING *',
			[medicine_status, medicine_name, medicine_period, medicine_type, medicine_eat_type]
		);

        res.json(newMedicine.rows[0]);

    }catch(err){
        console.error(err.message);
    }
})
//get all data

app.get("/medicines",async(req,res)=>{
    try{
        const allMedicines = await pool.query("SELECT * FROM medicine");
        res.json(allMedicines.rows);
    }catch(err){
        console.error(err.message)
    }
})

//get a data

app.get('/medicines/:id', async (req, res) => {
	try { 
        const{id} = req.params;
		const Medicine = await pool.query("SELECT * FROM medicine WHERE medicine_id=$1",[id]);
		res.json(Medicine.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

//update a data

app.put('/medicines/:id', async (req, res) => {
	try {
		const { id } = req.params;
        const { medicine_status, medicine_name, medicine_period, medicine_type, medicine_eat_type }=req.body;
		const updateMedicine = await pool.query(
			'UPDATE medicine SET medicine_status=$1, medicine_name=$2, medicine_period=$3, medicine_type=$4, medicine_eat_type=$5 WHERE medicine_id=$6',
			[medicine_status, medicine_name, medicine_period, medicine_type, medicine_eat_type,id]
		);
		res.json("Medicine was updated!");
	} catch (err) {
		console.error(err.message);
	}
});

//delete a data

app.delete('/medicines/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleteMedicine = await pool.query('DELETE FROM medicine WHERE medicine_id=$1', [id]);
		res.json(deleteMedicine.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
});

app.listen(5000,()=>{
    console.log("server has started an port 5000");
});