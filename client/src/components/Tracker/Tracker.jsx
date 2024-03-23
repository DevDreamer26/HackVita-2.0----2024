import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
import { useAuth } from "../store/auth";
import "./Tracker.scss";



const URL = "http://localhost:3000/api/save";

const Home = () => {


  const isLoggedIn= useAuth();
  const user = useAuth()
  const [userData,setUserData] = useState(true)
  const [total, setTotal] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [data, setData] = useState({
    type: "",
    date: "",
    name: "",
    quantity: "",
    amount: "",
  });


  useEffect(() => {
    axios
    .get("http://localhost:3000/api/exp")
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let totalAmount = 0;
    expenses.forEach((expense) => {
      totalAmount += parseFloat(expense.amount);
    });
    setTotal(totalAmount);
  }, [expenses]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert("Saved !");
        setData({
          type: "",
          date: "",
          name: "",
          quantity: "",
          amount: "",
        });
        const updatedExpenses = await axios.get(
        
          "http://localhost:3000/api/exp"
        );
        setExpenses(updatedExpenses.data);
      }
    } catch (error) {
      alert("Something went wrong !");
      console.log(" Error", error);
    }
  };

  return (

    
    <div className="tracker-container">
      <h1>Hello {userData.username}</h1>
      <h1>TRACK YOUR EXPENSES</h1>
      <div className="add-expense">
        <h2>Add a new expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Payment Method :</label>
            <select
              name="type"
              value={data.type}
              onChange={handleInput}
              required
            >
              <option value="Choose Here">Choose Here</option>
              <option value="online">Online</option>
              <option value="cash">Cash</option>
              <option value="card">Card</option>
              <option value="crypto">Crypto</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={data.date}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="What did you buy?"
              value={data.name}
              onChange={handleInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={data.quantity}
              onChange={handleInput}
              placeholder="What amount ?"
              required
            />
          </div>
          <div className="form-group">
            <label>Price (in Rupees):</label>
            <input
              type="number"
              placeholder="How much did you spend ?"
              name="amount"
              required
              value={data.amount}
              onChange={handleInput}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
      <div className="total">
        <h2>Total Expenses: {total} Rs.</h2>
      </div>

<Link to={"/list"}><button>See Transaction History</button></Link>
<br />
    <Link to="/logout"><button>Logout</button></Link>

    <br />
    

    </div>
  );
};

export default Home;
