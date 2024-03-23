import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./List.scss"
const List = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios
    // .get(`${import.meta.env.VITE_REACT_API_URL}/api/exp`)
    .get("https://expense-tracker-amyv.onrender.com/api/exp")
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
         <div className="expense-details">
        <h2>Your Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Amount</th>
              <th>Payment Type</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((d) => (
              <tr key={d.id}>
                <td>{d.date}</td>
                <td>{d.name}</td>
                <td>{d.quantity}</td>
                <td>{d.amount} Rs.</td>
                <td>{d.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default List