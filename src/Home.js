import React from 'react'
import { NavLink } from 'react-router-dom';
const Home=()=> {

return (
    <>
    <h2> Home Page </h2>
    <NavLink to='/Functional'>Click For Functional Image Slider App</NavLink><br /><br />
    <NavLink to='/Class'>Click For Class Image Slider App</NavLink>
    
    </>
)
}
export default Home;