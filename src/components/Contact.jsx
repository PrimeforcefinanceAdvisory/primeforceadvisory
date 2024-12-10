import React, { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const form = e.target;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setMessage('<p><strong>Thank you for reaching out!</strong><br />We have received your message and will be in touch shortly to discuss your inquiry.</p>');
          form.reset(); // Reset form after successful submission
        } else {
          setMessage('<p><strong>Something went wrong.</strong> Please try again later.</p>');
        }
      })
      .catch((error) => {
        setMessage('<p><strong>Something went wrong.</strong> Please try again later.</p>');
      });
  };

  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <div className="contact-container">
        {/* Left Section: Business Information */}
        <div className="contact-info">
          <p>
            <strong>Instagram:</strong>{' '}
            <a
              href="https://www.instagram.com/primeforceadvisory"
              target="_blank"
              rel="noopener noreferrer"
            >
              @primeforceadvisory
            </a>
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:primeforceadvisory@gmail.com">
              primeforceadvisory@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{' '}
            <a href="tel:9581119190">+919581119190</a>
          </p>
        </div>

        {/* Right Section: Contact Form */}
        <div className="contact-form">
          <form action="https://sheetdb.io/api/v1/krwl0tbozkqhn" method="POST" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name *" required />
            <input type="email" name="email" placeholder="Email Address *" required />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
              required
            />
            <textarea name="message" placeholder="Your Message *" required></textarea>
            <input type="submit" value="Send" />
          </form>

          {/* Display success or error message */}
          <div dangerouslySetInnerHTML={{ __html: message }} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
