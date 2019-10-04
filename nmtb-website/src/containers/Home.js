import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Footer from "./FooterComponent";
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Form from 'react-bootstrap/Form'
import Fade from 'react-reveal/Fade';
import "./Home.css";


export default class Home extends Component {
  render() {
    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Get In Touch
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>What is your complaint?</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }

    function Contact() {
      const [modalShow, setModalShow] = React.useState(false);
      return (
        <div className = "row offset-5">
          <ButtonToolbar>
            <Button variant="outline-light" onClick={() => setModalShow(true)}>
              Contact Us
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />{' '}
            </ButtonToolbar>

            <div class = "buttonDiv" >
            <Button variant="outline-light">
              About Us
            </Button>
            </div>

        </div>
      );
    }
    return (
      <div className="Home">
        <div className="lander">
          <Contact/>
        </div>
        <div className="words">
          <Fade top>
          </Fade>
        </div>
        <Footer/>
      </div>
    );
  }
}
