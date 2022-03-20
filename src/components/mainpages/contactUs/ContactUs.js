import React, { useState } from "react";

function ContactUs() {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
  });

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  }

  function handleSubmit() {
    alert("submitted")
  }
  return (
    <div>
      <div className="hero"></div>
      <div className="float" style={{ top: "40px" }}>
        <h1>Contact</h1>
      </div>
      <div className="form">
        <h1>Leave Me a Message</h1>
        <h1>and I’ll Get Back to You:</h1>
        <br />
        <br />
        <br />
        <form>
          <div className="row">
            <div className="column">
              <label htmlFor="FirstName">First Name</label>
              <input
                type="text"
                required
                name="firstName"
                id="firstName"
                value={state.firstName}
                onChange={handleChange}
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <label htmlFor="LastName">Last Name</label>
              <input
                type="text"
                required
                name="lastName"
                id="lastName"
                value={state.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label htmlFor="FirstName">Email *</label>
              <input
                type="email"
                required
                name="email"
                id="email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className="column">
              <label htmlFor="LastName">Subject</label>
              <input
                type="text"
                required
                name="subject"
                id="subject"
                value={state.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="column" style={{ width: "90%" }}>
              <label htmlFor="Message">Type your message here...</label>
              <textarea name="message" id="message" rows="3"></textarea>
            </div>
          </div>
          <input type="button" value="submit" onClick={handleSubmit}/>
        </form>
      </div>
      <footer>
          <p>© 2023 by Cap&Co.</p>
      </footer>
    </div>
  );
}

export default ContactUs;
