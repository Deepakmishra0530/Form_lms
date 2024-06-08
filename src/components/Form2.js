import React from 'react'

const Form2 = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phoneNo: '',
        country: '',
        city: '',
        panNo: '',
        aadharNo: ''
      });
    
      const [errors, setErrors] = useState({});
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      //const history = useHistory();
    
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
          //history.push('/success', { formData });
        }
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
    
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
    
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span>{errors.username}</span>}
          </div>
    
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
    
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
    
          <div>
            <label>Phone No.:</label>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
            />
            {errors.phoneNo && <span>{errors.phoneNo}</span>}
          </div>
    
          <div>
            <label>Country:</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              {/* Add more options as needed */}
            </select>
            {errors.country && <span>{errors.country}</span>}
          </div>
    
          <div>
            <label>City:</label>
            <select
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
            {errors.city && <span>{errors.city}</span>}
          </div>
    
          <div>
            <label>Pan No.:</label>
            <input
              type="text"
              name="panNo"
              value={formData.panNo}
              onChange={handleChange}
            />
            {errors.panNo && <span>{errors.panNo}</span>}
          </div>
    
          <div>
            <label>Aadhar No.:</label>
            <input
              type="text"
              name="aadharNo"
              value={formData.aadharNo}
              onChange={handleChange}
            />
            {errors.aadharNo && <span>{errors.aadharNo}</span>}
          </div>
    
          <button type="submit" disabled={isSubmitted}>
            Submit
          </button>
        </form>
      );
    };


export default Form2
