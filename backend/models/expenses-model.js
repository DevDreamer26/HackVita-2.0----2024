const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
    type:{
        type:String,
        require:true,
    },
    date:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    quantity:{
        type:Number,
        require:true,
    },
    amount:{
        type:Number,
        require:true,
    },
})

const Expense = new mongoose.model("Expense",expenseSchema)

module.exports = Expense;