import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import MailIcon from "@material-ui/icons/Mail";
import "./Contact.css";
const Contact = () => {
  const [value, setValue] = useState();
function sendEmail(){

}

  return (
    <div className="contactus">
      <div className="contact-conatiner">
        <h2>Contact us</h2>
        <div className="Contact-card">
          <h2>
            <LocationCityIcon /> Address
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            tempora ratione
          </p>
        </div>
        <div className="Contact-card">
          <h2>
            <PhoneIcon /> Telephone
          </h2>
          <p>1234567890</p>
          <h2>
            <MailIcon /> Email
          </h2>
          <p>aestheticaHead@gmail.com</p>
        </div>
      </div>
      <div className="Form">
        <form className="contactForm" onSubmit={sendEmail}>
          <div>
            <label>Name :</label> <br />
            <input type="text" placeholder="Name" name="name"required />
          </div>
          <div>
            <label>Email :</label> <br />
            <input type="email" placeholder="Email" name="user_email" required />
          </div>
          <div>
            <label>Phone Number :</label> <br />
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
              required
              name="phone"
            />
          </div>
          <div>
            <label>Subject : </label> <br />
            <input type="text" placeholder="Subject" name="subject" required />
          </div>
          <div>
            <label>Message :</label> <br />
            <textarea
              rows="8"
              type="text"
              name="message"
              placeholder="Type your Message here..."
              required
            />
          </div>

          <div>
            <input className="contactBtn" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
