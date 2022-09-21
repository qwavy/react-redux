// import React from 'react' 
// import {Link} from 'react-router-dom'; 
// import {Nav, Navbar, NavLink} from 'react-bootstrap'; 
import { useState } from 'react'
import ReactPlayer from 'react-player'

const RNavbar = () => {

    const [result, setResult] = useState([])
    const [inputResult, setInputResult] = useState('')


    

    const go = () => {
        const options = {
            method: 'GET',
            url: 'https://google-search3.p.rapidapi.com/api/v1/search/q=elon+musk',
            headers: {
              'X-User-Agent': 'desktop',
              'X-Proxy-Location': 'EU',
              'X-RapidAPI-Key': 'cc37283b2fmsh8c734849dcc1162p186da9jsn89eade7fc0ec',
              'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
          };
        fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${inputResult}`, options)
            .then(response => response.json())
            .then(response => setResult(response.results))
            .catch(err => console.error(err));
        console.log(inputResult)
    }
    console.log(result)
    const list = result.map((res) => <div><h1>{res.title}</h1> <ReactPlayer url={res.link}/>click</div>)

    

    // console.log(result[0].title)
    return (
        // <Navbar collapseOnSelect expand='lg' bg='dark'> 
        //     <Navbar.Toggle aria-controls='navbarScroll' data-bs-target="@navbarScroll"></Navbar.Toggle> 
        //     <Navbar.Collapse id="navbarScroll"> 
        //         <Nav> 
        //             <NavLink as={Link} to='/'>Home</NavLink> 
        //         </Nav> 
        //     </Navbar.Collapse> 
        // </Navbar> 
        <div>

            <input onChange={value => setInputResult(value.target.value)} />
            {/* {result.map((res) => <div>{res.results.title}</div>)} */}
            <button onClick={go}> do</button>
            {list}
            {/* {result.title} */}
        </div>
    )
}

export default RNavbar