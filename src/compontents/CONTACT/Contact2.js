import React, { useState } from 'react';
import './Contact2.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  
  const [status, setStatus] = useState(''); // لإظهار حالة الاستمارة

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من أن جميع الحقول قد تم ملؤها
    const { firstName, lastName, email, phoneNumber, message } = formData;
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      setStatus('يرجى ملء جميع الحقول المطلوبة.');
      return;
    }

    // إرسال البيانات بعد التحقق
    console.log(formData);
    setStatus('تم إرسال البيانات بنجاح!');
    // إعادة تعيين الحقول بعد الإرسال
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: ''
    });
  };

  return (
    <form className="contact-formcs" onSubmit={handleSubmit}>
      <div className="form-rowc">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <textarea
          name="message"
          placeholder="Message/Questions"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className='buttoncs'>Book Now</button>
      {status && <p className="status-message">{status}</p>}
    </form>
  );
};

export default ContactForm;
