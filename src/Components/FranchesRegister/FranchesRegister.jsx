import React, { useState } from 'react';
import "../FranchesRegister/FranchesRegister.css";
import backgroundImage from '../Images/background4.jpg';

export const FranchesRegister = () => {

  const [selectedState, setSelectedState] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [investment, setInvestment] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('api_key', 'Mithra@2024');
    formData.append('name', name);
    formData.append('phone_number', phoneNumber);
    formData.append('email_id', email);
    formData.append('investment', investment);
    formData.append('state', selectedState);
    formData.append('city', location);

    fetch('https://themithraa.com/RestApi/WebApi/franchise.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          alert('Franchise registered successfully');
        } else {
          alert('Failed to register franchise');
        }
      })
      .catch(error => {
        console.error('Error registering franchise:', error);
        alert('An error occurred. Please try again later.');
      });
  };

  return (
    <div 
      className='franchesregister' 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="form-container">
        <h2>Partner with us now</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name*" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            required 
          />
          <input 
            type="tel" 
            placeholder="Phone Number*" 
            value={phoneNumber} 
            onChange={e => setPhoneNumber(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Email*" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            required 
          />
          <div className="form-group">
            <select 
              id="investment" 
              value={investment} 
              onChange={e => setInvestment(e.target.value)} 
              required
            >
              <option value="" disabled>Select Investment Potential</option>
              <option style={{color:'black'}} value="50k to 1Lakh">50k to 1Lakh</option>
              <option style={{color:'black'}} value="1 to 3Lakh">1 to 3Lakh</option>
            </select>
          </div>
          <div className="form-group">
            <select 
              id="state" 
              value={selectedState} 
              onChange={e => setSelectedState(e.target.value)} 
              required
            >
              <option value="" disabled>Select State</option>
              <option style={{color:'black'}} value="Andhra Pradesh">Andhra Pradesh</option>
              <option style={{color:'black'}} value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option style={{color:'black'}} value="Assam">Assam</option>
              <option style={{color:'black'}} value="Bihar">Bihar</option>
              <option style={{color:'black'}} value="Chhattisgarh">Chhattisgarh</option>
              <option style={{color:'black'}} value="Goa">Goa</option>
              <option style={{color:'black'}} value="Gujarat">Gujarat</option>
              <option style={{color:'black'}} value="Haryana">Haryana</option>
              <option style={{color:'black'}} value="Himachal Pradesh">Himachal Pradesh</option>
              <option style={{color:'black'}} value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option style={{color:'black'}} value="Jharkhand">Jharkhand</option>
              <option style={{color:'black'}} value="Karnataka">Karnataka</option>
              <option style={{color:'black'}} value="Kerala">Kerala</option>
              <option style={{color:'black'}} value="Madhya Pradesh">Madhya Pradesh</option>
              <option style={{color:'black'}} value="Maharashtra">Maharashtra</option>
              <option style={{color:'black'}} value="Manipur">Manipur</option>
              <option style={{color:'black'}} value="Meghalaya">Meghalaya</option>
              <option style={{color:'black'}} value="Mizoram">Mizoram</option>
              <option style={{color:'black'}} value="Odisha">Odisha</option>
              <option style={{color:'black'}} value="Punjab">Punjab</option>
              <option style={{color:'black'}} value="Rajasthan">Rajasthan</option>
              <option style={{color:'black'}} value="Tamil Nadu">Tamil Nadu</option>
              <option style={{color:'black'}} value="Uttar Pradesh">Uttar Pradesh</option>
              <option style={{color:'black'}} value="Uttarakhand">Uttarakhand</option>
              <option style={{color:'black'}} value="West Bengal">West Bengal</option>
            </select> 
          </div>
          <input 
            type="text" 
            placeholder="Preferred Location / City" 
            value={location} 
            onChange={e => setLocation(e.target.value)} 
            required 
          />
          <div className="checkbox-container">
            <input type="checkbox" required />
            <label style={{color:'white'}}>I hereby agree to be contacted by Phone, SMS, and Email for further communication</label>
          </div>
          <button type="submit">Become our franchisee</button>
        </form>
        <p className="privacy-note">
          By clicking this button, you agree to our privacy policy.
          <br />* All fields are mandatory.
        </p>
      </div>
    </div>
  );
};

export default FranchesRegister;
