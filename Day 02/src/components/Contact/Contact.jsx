import React from 'react';
import Navbar from '../Navbar/Navbar';
// import Sidebar from './Sidebar';
import Footer from '../Footer/Footer';
import '../Contact/Contact.css';
// import axios from 'axios';

class Contact extends React.Component {
  
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.name.trim()) {
      alert('Please enter your name.');
      return;
    }
    if (!this.state.email.trim()) {
      alert('Please enter your email.');
      return;
    }
    if (!this.state.subject.trim()) {
      alert('Please enter your subject.');
      return;
    }
    if (!this.state.message.trim()) {
      alert('Please enter your message.');
      return;
    }

    const contactData = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    axios
      .post('http://localhost:8080/contact/submit', contactData)
      .then(() => {
        alert('Message submitted successfully!');
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error submitting message:', error);
      });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        <Navbar />
        {/* <div className='main'> */}
        {/* <Sidebar/> */}
        <div className="container-fluid contact-container">
          <div className="row">
            <div className="col-md-3">
              <div className="position-fixed"> {/* Add position-fixed class */}
                {/* <Sidebar /> */}
              </div>
            </div>
            <div className="col-md-10 offset-md-2 mx-auto about-container"> {/* Add offset-md-3 class */}
              <section className="mb-4">
                <h2 className="h1-responsive text-white fw-bold text-center mx-auto my-4">Contact Us</h2>
                <p className="text-center w-responsive mx-auto mb-5">
                  Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.
                </p>
                <form id="contact-form" name="contact-form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <label htmlFor="name" className="">
                          Your name
                        </label>
                        <input type="text" id="name" name="name" className="form-control" value={this.state.name} onChange={this.handleInputChange}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <label htmlFor="email" className="">
                          Your email
                        </label>
                        <input type="text" id="email" name="email" className="form-control" value={this.state.email} onChange={this.handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <label htmlFor="subject" className="">
                          Subject
                        </label>
                        <input type="text" id="subject" name="subject" className="form-control" value={this.state.subject} onChange={this.handleInputChange} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <label htmlFor="message">Your message</label>
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" 
                        value={this.state.message} onChange={this.handleInputChange}></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-md-left">
                    <button className="btn btn-primary mt-4 mb-4" type="submit">
                      Send
                    </button>
                  </div>
                  <div className="status"></div>
                </form>
              </section>
            </div>
          </div>
        </div>
        {/* </div> */}
        <Footer />
      </>
    );
  }
}

export default Contact;
