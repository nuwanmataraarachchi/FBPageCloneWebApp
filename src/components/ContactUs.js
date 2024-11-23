import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('message', formData.message);
    if (photo) form.append('photo', photo);

    try {
      const response = await fetch('http://localhost/contact.php', {
        method: 'POST',
        body: form,
      });

      const result = await response.json();
      if (result.status === 'success') {
        alert('Form submitted successfully!');
      } else {
        alert(result.message || 'Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form.');
    }
  };

  return (
    <div className="contact-form-container mt-4 d-flex justify-content-center">
      <div className="contact-form-card p-4 border rounded shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <h4 className="text-center mb-4">Contact Us</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="photo" className="form-label">Upload Photo</label>
            <input
              type="file"
              className="form-control"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
