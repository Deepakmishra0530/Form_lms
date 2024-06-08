import { useState } from 'react'

const Form1 = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        Country: '',
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
        if (!formData.password) errors.password = 'Password is required';
        if (!formData.phoneNo) errors.phoneNo = 'Phone No. is required';
        if (!formData.country) errors.country = 'Country is required';
        if (!formData.city) errors.city = 'City is required';
        if (!formData.panNo) errors.panNo = 'Pan No. is required';
        if (!formData.aadharNo) errors.aadharNo = 'Aadhar No. is required';
    
        return errors;
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
          setIsSubmitted(true);
    
        }
      };
  return (
    <div class="flex flex-col items-center justify-center h-screen dark">
        <div class="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-200 mb-4">Sign Up</h2>
          <form class="flex flex-col">
            <div class="flex space-x-4 mb-4">
              <input
                placeholder="First Name"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                id='firstName'
              />
              <input
                placeholder="Last Name"
                class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                id='lastName'
              />
            </div>
            <input
              placeholder="Email"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
              id='email'
            />
            <input
              placeholder="Username"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              id='username'
            />
            <input
              placeholder="Password"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="password"
              id='password'
            />
            <input
              placeholder="Phone Number"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="number"
              id='phoneNo'
            />
            <input
              placeholder="Adhar Number"
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="number"
              id='aadharNo'
            />
            <label class="text-sm mb-2 text-gray-200 cursor-pointer" for="Country">
              Country
            </label>
            <select
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="Country"
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
            </select>
            <label class="text-sm mb-2 text-gray-200 cursor-pointer" for="City">
              City
            </label>
            <select
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              id="City"
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

            <label class="text-sm mb-2 text-gray-200 cursor-pointer" for="Pan Number">
              Pan Number
            </label>
            <input
              class="bg-gray-700 text-gray-200 border-0 rounded-md p-2"
              id="Pan Number"
              type="text"
            />

            <button
              class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
  )
}

export default Form1
