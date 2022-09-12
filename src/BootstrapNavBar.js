import { Link } from 'react-router-dom'
import { Nav, NavLink, Navbar } from 'react-bootstrap'
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import SignOut from './SignOut'
import { useState, useEffect } from 'react'
// import ImageProfile from './ImageProfile'

const BootstrapNavBar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <Navbar expand='sm' bg='light'>
            <Navbar.Toggle area-controls='myNavbar' />
            <Navbar.Collapse>
                <Nav id='myNavbar'>
                    <NavLink as={Link} to='/' >Home</NavLink>
                    <NavLink as={Link} to='/countries' >Countries</NavLink>
                    <NavLink as={Link} to='/quota' >quota</NavLink>
                    {/* <NavLink as={Link} to='/flags' ></NavLink> */}
                </Nav>
            </Navbar.Collapse>
            {user ? <p>{user.displayName}</p> : null}
            {user ? <img src={user.photoURL} /> : null}
            {user ? <SignOut /> : <SignIn />}
        </Navbar>
    )
}
export default BootstrapNavBar