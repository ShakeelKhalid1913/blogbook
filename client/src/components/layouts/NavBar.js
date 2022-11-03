import React from 'react'
import {Container, Nav, Navbar} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import AuthService from "../../services/auth.service"

function NavBar(props) {
   const currentUser = AuthService.getCurrentUser()

   return (
       <>
          <Navbar className={"navbar"} fixed={"top"} expand={"md"}>
             <Container>
                <Navbar.Brand>
                   <h2>
                      <div className={"text-white"}>Blog Book</div>
                   </h2>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={"collapse"}/>
                <Navbar.Collapse id={"collapse"}>
                   <Nav className={"ms-auto navbar-nav"}>
                      <NavLink to={"/home"} className={"nav-link"}>Home</NavLink>
                      {
                         currentUser ?
                             <NavLink onClick={(e) => {
                                AuthService.logout()
                                window.location.reload()
                             }} to={'/auth'} className={"nav-link"}>SignOut</NavLink>
                             : <NavLink to={"/auth"} className={"nav-link"}>Login/Register</NavLink>
                      }
                   </Nav>
                </Navbar.Collapse>
             </Container>
          </Navbar>
          <div style={{paddingTop: "100px"}}></div>
       </>
   )
}

export default NavBar