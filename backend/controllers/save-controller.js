const Expense = require("../models/expenses-model");

const home = (req,res)=>{
    try {
        res.status(200).send('Server is up and running....')
    } catch (error) {
       res.status(500).json("Internal Server Error")
    }
}

const save = async  (req,res) =>{
    try {
      const response = req.body;
      await Expense.create(response);
      return  res.status(200).json({message:"Saved successfuly !"});

        
    } catch (error) {
        res.status(500).json("Error !  Not saved")
    }
}

const showExp = async (req,res) =>{
    try {
        const exp = await Expense.find();
        res.json(exp)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {save,home,showExp};