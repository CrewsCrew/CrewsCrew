import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModal: false,
      registerModal: false
    };

    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleRegister = this.toggleRegister.bind(this);
  }

  toggleLogin() {
    this.setState({
      loginModal: !this.state.loginModal
    });
  }

  toggleRegister() {
    this.setState({
      registerModal: !this.state.registerModal
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="/CName">T-Crews Notifications</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/notifications">Notifications</a>
              </li>
            </ul>

            <div class="my-2 my-lg-0">
              <button class="btn btn-primary my-2 my-sm-0" onClick={this.toggleLogin}>Login</button>
              <button class="btn btn-success my-2 ml-3 my-sm-0" onClick={this.toggleRegister}>Register</button>
            </div>
          </div>
        </nav>

        <Modal isOpen={this.state.loginModal} toggleLogin={this.toggleLogin} className={this.props.className}>
          <ModalHeader toggleLogin={this.toggleLogin}>Log into Your Account</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="inputEmail">Email</Label>
                <Input type="email" name="email" id="inputEmail" placeholder="Email address" />
              </FormGroup>
              <FormGroup>
                <Label for="inputPassword">Password</Label>
                <Input type="password" name="password" id="inputPassword" placeholder="Password" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleLogin}>Login</Button>{' '}
            <Button color="secondary" onClick={this.toggleLogin}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.registerModal} toggleRegister={this.toggleRegister} className={this.props.className}>
          <ModalHeader toggleRegister={this.toggleRegister}>Register New Account</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="inputName">Full Name</Label>
                <Input type="text" name="name" id="inputName" placeholder="Full name" />
              </FormGroup>
              <FormGroup>
                <Label for="inputEmail">Email</Label>
                <Input type="email" name="email" id="inputEmail" placeholder="Email address" />
              </FormGroup>
              <FormGroup>
                <Label for="inputPassword">Password</Label>
                <Input type="password" name="password" id="inputPassword" placeholder="Password" />
              </FormGroup>
              <FormGroup>
                <Label for="inputConfirm">Password Confirm</Label>
                <Input type="password" name="password" id="inputConfirm" placeholder="Password confirm" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleRegister}>Register</Button>{' '}
            <Button color="secondary" onClick={this.toggleRegister}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
      
export default Navbar;