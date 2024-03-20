import React from 'react';
import Navbar from '../Navbar/Navbar';
// import Sidebar from './Sidebar';
import Footer from '../Footer/Footer';
// import '../Assets/css/Feedback.css';
// import axios from 'axios';

class Feedback extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      feedback: '',
    };
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if feedback is empty before submitting
    if (!this.state.feedback.trim()) {
      alert('Please fill the feedback box.');
      return;
    }
  
    const feedbackData = {
      message: this.state.feedback,
    };
  
    axios
      .post('http://localhost:8080/feedback/submit', JSON.stringify(feedbackData), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        alert('Feedback submitted!');
        this.setState({ feedback: '' });
      })
      .catch((error) => {
        console.error('Error submitting feedback:', error);
      });
  };

  handleFeedbackChange = (e) => {
    this.setState({ feedback: e.target.value });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className='main'>
          {/* <Sidebar/> */}
        <section className="container-fluid feedback-container">
          <div className="row">
            <div className="col-md-3">
              <div className="position-fixed"> 
              </div>
            </div>
            <div className="col-md-10 offset-md-2 mx-auto about-container ">
              <section className="mb-4">
                <h2 className="h1-responsive text-white fw-bold text-center mx-2 my-4">Feedback</h2>
                <p className="text-center w-responsive mx-auto mb-5">
                  Do you have any feedback? What could we improve upon?
                </p>
                <form id="contact-form" name="contact-form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form4Example6">Your feedback</label>
                        <textarea class="form-control" id="form4Example6" rows="4" 
                        value={this.state.feedback} onChange={this.handleFeedbackChange}></textarea>
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
        </section>
        </div>
        <Footer />
      </>
    );
  }
}

export default Feedback;
