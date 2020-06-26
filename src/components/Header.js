import React, { Component }  from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form, 
    FormGroup,
    Input,
    Label
  } from "reactstrap";
import { NavLink } from "react-router-dom";


class Header extends Component {
    constructor(props) {
      super(props);
  
      
      this.state = {
        isNavOpen: false,
        isModalOpen:false
      };
      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal= this.toggleModal.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }
  
    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }
  
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }

    couraselHandler(){

    }
  
    handleLogin(event){
      alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
      this.toggleModal();
      event.preventDefault();
  
    }
    render() {
      return (
        <React.Fragment>
          <Navbar light sticky="top" expand="md">
            <div className="container">
              <NavbarBrand calssName="mr-auto" href="/">
                <img
                  src="/assets/images/logo4.png"
                  height="30"
                  width="30"
                  alt="NuCamp Logo"
                />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggleNav} />
              <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link " to="/home">
                      <i className="fa fa-home fa-lg" /> Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link " to="/aboutus">
                      <i className="fa fa-info fa-lg" />  About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/gallery">
                      <i class="fa fa-picture-o"/>Gallery
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                      <i className="fa fa-address-card fa-lg" /> Contact Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/dining">
                    <i class="fa fa-cutlery" aria-hidden="true"/> Dining
                    </NavLink>
                  </NavItem>
                </Nav>
  
                <span className="navbar-text ml-auto">
                                  <Button color="info" outline onClick={this.toggleModal}>
                                      <i className="fa fa-sign-in fa-lg" /> Login
                                  </Button>
                </span>
  
              </Collapse>
            </div>
          </Navbar>
  
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
            <ModalBody>
            <Form onSubmit={this.handleLogin}>
                              <FormGroup>
                                  <Label htmlFor="username">Username</Label>
                                  <Input type="text" id="username" name="username"
                                      innerRef={input => this.username = input} />
                              </FormGroup>
                              <FormGroup>
                                  <Label htmlFor="password">Password</Label>
                                  <Input type="password" id="password" name="password"
                                      innerRef={input => this.password = input} />
                              </FormGroup>
                              <FormGroup check>
                                  <Label check>
                                      <Input type="checkbox" name="remember"
                                          innerRef={input => this.remember = input} />
                                      Remember me
                                  </Label>
                              </FormGroup>
                              <Button type="submit" value="submit" color="primary">Login</Button>
                          </Form>
            </ModalBody>
          </Modal>
         
        </React.Fragment>
      );
    }
  }
export default Header;