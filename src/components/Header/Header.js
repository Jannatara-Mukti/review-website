import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle={
        fontWeight: "bold",
        color: "white"
      };
    
      return (
        <div className="flex flex-row justify-between  bg-green-600 p-5">
            {/* Navigation Menu   */}
            <div>
                <NavLink className="m-5 p=5 font-semibold text-xl" activeStyle={activeStyle} to="/home">Home</NavLink>
                <NavLink className="m-5 p=5 font-semibold text-xl" activeStyle={activeStyle} to="/about">About</NavLink>
                <NavLink className="m-5 p=5 font-semibold text-xl" activeStyle={activeStyle} to="/services">Services</NavLink>
                <NavLink className="m-5 p=5 font-semibold text-xl" activeStyle={activeStyle} to="/articles">Articles</NavLink>
            </div>
            {/*  Site Name */}
            <div className="text-white font-medium pr-10">
                <p className="border-b-2">Learn English & Fight Your Fear</p>
            </div>
        </div>
    );
};

export default Header;