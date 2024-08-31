import React, { useEffect, useState } from 'react';
import './Addusers.css'; // Import CSS file
import { toast } from 'react-toastify';

function FormPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
useEffect(()=>{
async function getData () {
  try{
const resData = await fetch("https://lzycrazy-tracking-backend.onrender.com/v1/users/list");
const jsnData = await resData.json()
console.log(jsnData)
  }catch (error)     { 
    console.error();
  }
}
getData()
},[])
  
  const handleSubmit = (event) => {
    let nameSplit= formData.name.split(" ");
    let body={
      ...formData,
      phoneNumber:formData.mobile,
      firstName:nameSplit[0],
      lastName:nameSplit[1]?nameSplit.slice(1).join(" "):""      
    }
    event.preventDefault();
    fetch("https://lzycrazy-tracking-backend.onrender.com/v1/users/create",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(body)
    }).then(res=>res.json())
    .then(res=>{
      setFormData({
        name: '',
        mobile: '',
        email: '',
        password: ''
      })
      toast.success(res.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    })
  };

  return (
    <div className="form-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No.:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;
