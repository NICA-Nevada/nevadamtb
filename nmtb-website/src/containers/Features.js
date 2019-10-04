import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Footer from "./FooterComponent";
import "./Features.css";

export default class Features extends Component {
  render() {
    return (
      <div className="Features">
        <div className="lander">
          <h1>Features</h1>
          <p>Learn more about dook</p>
        </div>
      </div>
    );
  }
}
