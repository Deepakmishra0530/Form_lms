import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form2 = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    countryCode:'',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.email.includes('.')) errors.email = 'Email is incorrect';
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.phoneNo) errors.phoneNo = 'Phone No. is required';
    if (formData.phoneNo.length !== 10) errors.phoneNo = 'Phone No. is invalid';
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.panNo) errors.panNo = 'Pan No. is required';
    if (formData.panNo.length !== 10) errors.panNo = 'Pan No. is invalid';
    if (!formData.aadharNo) errors.aadharNo = 'Aadhar No. is required';
    if (formData.aadharNo.length !== 12) errors.aadharNo = 'Aadhar No. is invalid';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    console.log(88)

    if (Object.keys(validationErrors).length === 0) {
      // setIsSubmitted(true);
      navigate('success')
    }
  };

  return (

    <div className="flex flex-col items-center justify-center  w-6/12 h-screen dark absolute top-1/2 left-1/4">
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-md p-6 ">
        <h2 className="text-2xl text-center font-bold text-gray-200 mb-4">Form Validation</h2>
        <form onSubmit={handleSubmit} className="flex flex-col text-white" >
          <div >
            <div className="flex  items-center">
              <label className="w-1/4">First Name:</label>
              <input
                className="bg-gray-700 text-gray-200 border-0 w-3/4  rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
        
          <div>
             <div className="flex  items-center">
            <label className="w-1/4">Last Name:</label>
            <input
              className="bg-gray-700 text-gray-200 border-0 w-3/4   rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            </div>
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
         
          
          <div>
            <div className="flex  items-center">
            <label className="w-1/4">Username:</label>
            <input
              className="bg-gray-700 text-gray-200 border-0 w-3/4 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            </div>
            {errors.username && <span>{errors.username}</span>}
          </div>
          
          
          <div>
            <div className="flex  items-center">
            <label className="w-1/4">Email:</label>
            <input
              className="bg-gray-700 text-gray-200 border-0 w-3/4 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            </div>
            {errors.email && <span>{errors.email}</span>}
          
          </div>
          
          <div>
             <div className="flex  items-center">
            <label className="w-1/4">Password:</label>
            <input
              className="bg-gray-700 text-gray-200 border-0 w-3/4 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
             </div>
             {errors.password && <span>{errors.password}</span>}
          </div>

         
         <div>
          <div className="flex  items-center">
            <label className="w-1/4">Phone No.:</label>

            <select 
            className="bg-gray-700 text-gray-200 border-0 w-16 mx-1 mt-4 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            >
              <option value=''>code</option>
              <option value='+1'>+1</option>
              <option value='+91'>+91</option>

            </select>
            <input
              className="bg-gray-700 text-gray-200 border-0 w-3/4 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="number"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
            />
            </div>
            {errors.phoneNo && <span>{errors.phoneNo}</span>}
          
         </div>
          
          <div>
            <div className="flex  items-center">
            <label className="w-1/4">Country:</label>
            <select
              className="bg-gray-700 text-gray-200 border-0 w-3/4 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              {/* Add more options as needed */}
            </select>
            </div>
            {errors.country && <span>{errors.country}</span>}
          
          </div>
          

         <div>
          <div className="flex  items-center">
            <label className="w-1/4">City:</label>
            <select
              className="bg-gray-700 text-gray-200 border-0 w-3/4 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="">Select City</option>
              {formData.country === 'India' && (
                <>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  {/* Add more cities */}
                </>
              )}
              {formData.country === 'USA' && (
                <>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  {/* Add more cities */}
                </>
              )}
            </select>
           </div> 
           {errors.city && <span>{errors.city}</span>}
          
         </div>
          
        
          <div>
            <div className="flex  items-center">
            <label className="w-1/4">Pan No.:</label>
            <input
              className="bg-gray-700 text-gray-200 border-0 w-3/4 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              name="panNo"
              value={formData.panNo}
              onChange={handleChange}
            />
             </div>
             {errors.panNo && <span>{errors.panNo}</span>}
         
          </div>
          

          <div>
            <div className="flex items-center">
            <label className="w-1/4">Aadhar No.:</label>
            <input
              className="bg-gray-700 text-gray-200 border-0 w-3/4 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="number"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
            />
            </div> {errors.aadharNo && <span>{errors.aadharNo}</span>}
         
          </div>
          

          <button
            className="inline-flex items-center  justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            type="submit"
            disabled={isSubmitted}

          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


export default Form2
