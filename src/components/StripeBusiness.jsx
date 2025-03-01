import React, { useState } from 'react';
import Button from "./Button";
import { useNavigate } from 'react-router-dom';

const PricingformBusiness = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [adressError, setAdressError] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [streetNr, setStreetNr] = useState('');
  const [plzZip, setPlzZip] = useState('');
  const [plzZipError, setPlzZipError] = useState('');
  const [color, setColor] = useState('');
  const [colorError, setColorError] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const wordCount = description.trim().split(/\s+/).length;

    if (
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === '' ||
      company.trim() === '' ||
      address.trim() === '' ||
      country.trim() === '' ||
      city.trim() === '' ||
      streetNr.trim() === '' ||
      plzZip.trim() === '' ||
      color.trim() === '' ||
      wordCount < 200
    ) {
      setFormError(true);
      setFormSubmitted(false);
    } else {
      setFormSubmitted(true);
      setFormError(false);
      navigate('/stripe-business'); // Navigation zur neuen Seite
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    const wordCount = value.trim().split(/\s+/).length;

    setDescription(value);

    if (wordCount < 200) {
      setDescriptionError('You need more than 200 words');
    } else {
      setDescriptionError('');
    }
  };

  const handlePlzZipChange = (e) => {
    const value = e.target.value;
    if (/^[0-9]*$/.test(value)) {
      if (value.length <= 5) {
        setPlzZip(value);
        setPlzZipError('');
      } else {
        setPlzZipError('No ZIP+4-Code');
      }
    } else {
      setPlzZipError('only Numbers');
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError(<span>Please enter a <br /> valid email address</span>);
    } else {
      setEmailError('');
    }
  };

  const validatePhone = (value) => {
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(value)) {
      setPhoneError(<span>Please enter a <br /> valid phone number<br />(10-15 digits)</span>);
    } else {
      setPhoneError('');
    }
  };

  const validateAddress = (value) => {
    if (value.toLowerCase() !== 'he' && value.toLowerCase() !== 'she') {
      setAdressError(<span>Only he or she <br /> is allowed</span>);
    } else {
      setAdressError('');
    }
  };

  const handleColorChange = (e) => {
    const value = e.target.value;
    setColor(value);
    validateColor(value);
  };

  const handleColorBlur = () => {
    validateColor(color);
  };

  const validateColor = (value) => {
    if (value.toLowerCase() !== 'white' && value.toLowerCase() !== 'dark') {
      setColorError(<span>Dark or white color theme (type dark or white)<br /> No color-codes!</span>);
    } else {
      setColorError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailBlur = () => {
    validateEmail(email);
  };

  const handlePhoneBlur = () => {
    validatePhone(phone);
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    validateAddress(value);
  };

  const handleAddressBlur = (e) => {
    validateAddress(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-[1rem] gap-[5rem]">
        <div className="flex justify-between">
          <div className="px-3 py-1 bg-n-6 rounded-full">
            <p className="font-sora">1</p>
          </div>
        </div>
        <div className="px-3 py-1 bg-n-9 rounded-full">
          <p className="font-sora">2</p>
        </div>
        <div className="px-3 py-1 bg-n-6 rounded-full">
          <p className="font-sora">3</p>
        </div>
      </div>
      <div className="text-center flex items-center justify-center mt-1 gap-[2.35rem] font-source-code-pro">
        <p>Pricing</p>
        <p>Checkout</p>
        <p>Payment</p>
      </div>
      <div className='flex justify-center text-center mt-4 font-sora'>
        <a href="/" className='text-lg text-n-4 hover:text-white transition duration-200 cursor-pointer text-'>Get back to our Homepage</a>
      </div>

      <form method='POST' onSubmit={handleSubmit}>
        <div className="block text-wrap text-center justify-center items-center gap-[1rem]">
          <h1 className="h3 mt-[1.5rem]">Your Contact</h1>
          <div className="flex justify-center mt-[3rem] gap-[3rem] flex-wrap">
            <input
              type="text"
              placeholder="First Name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`block px-3 py-2 border transition duration-400 bg-n-14 rounded-xl text-black input-placeholder`}
            />
            <input
              type="text"
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`block px-3 py-2 border transition duration-400 bg-n-14 rounded-xl text-black input-placeholder`}
            />

            <div className='w-full flex justify-center gap-[3rem]'>
              <div>
                <input
                  type="text"
                  placeholder="Email*"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  className={`block px-3 py-2 border transition duration-400 bg-n-14 rounded-xl text-black input-placeholder ${emailError ? 'border-red-500' : ''}`}
                />
                {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone Number*"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={handlePhoneBlur}
                  className={`block px-3 py-2 border transition duration-400 bg-n-14 rounded-xl text-black input-placeholder ${phoneError ? 'border-red-500' : ''}`}
                />
                {phoneError && <p className="text-red-500 mt-2">{phoneError}</p>}
              </div>
            </div>

            <div className="w-full flex justify-center gap-[3rem]">
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Form of address*"
                  value={address}
                  onChange={handleAddressChange}
                  onBlur={handleAddressBlur}
                  className={`block px-3 py-2 border transition duration-400 bg-n-14 rounded-xl text-black input-placeholder ${adressError ? 'border-red-500 border' : ''}`}
                />
                {adressError && <p className="text-red-500 mt-1">{adressError}</p>}
              </div>
              <div className="flex flex-col items-center">
                <input 
                  type="text"
                  placeholder="Company-name*"
                  value={company}
                  onChange={handleCompanyChange}
                  className={`block px-3 py-2 border transition duration-400 border-none bg-n-14 rounded-xl text-black input-placeholder`}
                />
              </div>
            </div>

            <div className='block'>
              <h2 className="h3 mt-[0.5rem]">Your Location- Details</h2>
              <div className="flex justify-center mt-[3rem] gap-[3rem] items-center">
                <input
                  type="text"
                  placeholder="Country*"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className={`block px-3 py-2 border transition duration-400 bg-n-14 rounded-xl text-black input-placeholder`}
                />
                <input
                  type="text"
                  placeholder="City*"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`block px-3 py-2 border transition duration-400 bg-n-14 rounded-xl text-black input-placeholder`}
                />
              </div>

              <div className="w-full flex justify-center gap-[3rem] mt-[3rem] items-start">
                <div className="flex-col items-center">
                  <input
                    type="text"
                    placeholder="Street, Nr.*"
                    value={streetNr}
                    onChange={(e) => setStreetNr(e.target.value)}
                    className={`block px-3 py-2 border transition duration-400 border-none bg-n-14 rounded-xl text-black input-placeholder`}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <input
                    type="text"
                    placeholder="PLZ/ZIP*"
                    value={plzZip}
                    onChange={handlePlzZipChange}
                    className={`block px-3 py-2 border transition duration-400 bg-n-14 rounded-xl text-black input-placeholder ${plzZipError ? 'border-red-500' : ''}`}
                  />
                  {plzZipError && <p className="text-red-500 mt-2">{plzZipError}</p>}
                </div>
              </div>
            </div>
          </div>

          <h2 className="h3 mt-[3.5rem]">Your Website- Details</h2>
          <div className="flex flex-col items-center">
            <input
              type="text"
              placeholder="white- or dark mode*"
              value={color}
              onChange={handleColorChange}
              onBlur={handleColorBlur}
              className={`block px-3 py-2 mt-[2.5rem] border transition duration-400 bg-n-14 rounded-xl text-black input-placeholder ${colorError ? 'border-red-500' : ''}`}
            />
            {colorError && <p className="text-red-500 mt-2">{colorError}</p>}
          </div>

          <textarea 
            style={{ width: '26.9%', minHeight: '14rem', padding: '1rem' }}
            placeholder="Write a Description of your Website-Idea here. Please write the Description in english or german"
            className="justify-center items-center mt-[2rem] px-[9rem] py-[8rem] border transition duration-400 border-none bg-n-14 rounded-xl text-black input-placeholder" 
            type="text"
            value={description} 
            onChange={handleDescriptionChange}
          />
        </div>
        <div className='block text-center mb-[3rem]'>
        {descriptionError && <p className="text-red-500">{descriptionError}</p>}
        </div>
        <div className='flex justify-center items-center mt-[2rem] mb-[1rem]'>
          <Button type="submit" white className="">{'>'}Payment <br/></Button></div>
        <div className='block text-center mb-[3rem]'>
        {formSubmitted && <p className="text-green-500">Form submitted successfully!</p>}
        {formError && <p className="text-red-500">Please fill out all required fields.</p>}
        </div>
      </form>
    </div>
  );
};

export default PricingformBusiness;
