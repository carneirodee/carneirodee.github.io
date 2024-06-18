import './SectionContact.css';
import Section from '../..';
import Typewriter from 'typewriter-effect';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import {
  service_id,
  template_id,
  user_id
} from '../../../../config';
function SectionContact(props) {

  const form = useRef();
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });
  const [formErrors, setFormErros] = useState({
    from_name: false,
    message: false,
    reply_to: false,
  })

  const [isValidating, setIsValidating] = useState(false);

  const isBlank = (value) => {
    return value === '' || value === ' ';
  }

  const isEmail = (email) => {
    const isEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}').test(email);
    return isEmail;
  }



  const validateForm = () => {

    setIsValidating(true);

    if (Object.values(formErrors).includes(true)) {
      return false;
    }
    return true;
  }

  const errorTriggered = () => {
    const toSendToArray = Object.entries(toSend);
    let resultErrors = {}
    toSendToArray.forEach(item => {
      if (item[0] === 'reply_to') {
        resultErrors = { ...resultErrors, [[item[0]]]: (isBlank(item[1])  || !isEmail(item[1])) }
      } else {
        resultErrors = { ...resultErrors, [[item[0]]]: isBlank(item[1]) }
      }
    })

    setFormErros(resultErrors);
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    errorTriggered();
  };


  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.sendForm(service_id, template_id, form.current, user_id)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    }
  };

  return (
    <Section>
      <div id="contact" className="section-contact">
        <div className="contact-box">
          <Typewriter
            options={{
              strings: ['Contact me', 'Send me a message'],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="form-contact" >
            <form ref={form} onSubmit={sendEmail} onKeyDown={handleChange} noValidate>
              <input className={formErrors.from_name && isValidating ? "identifiers error" : "identifiers"} s type="text" defaultValue={toSend.from_name} name='from_name' placeholder="Your name"></input>
              <input className={formErrors.reply_to && isValidating ? "identifiers email error" : "identifiers email"} type="email" defaultValue={toSend.reply_to} name="reply_to" placeholder="Your email"></input>
              <textarea className={formErrors.message && isValidating ? "identifiers message error" : "identifiers message"} defaultValue={toSend.message} name="message" placeholder="Type your message here!"></textarea>
              <div className="button-contact-container">
                <input type="submit" className="button-contact" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SectionContact;
