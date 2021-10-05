// Front Page 
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Course from '../Course/Course';
import img from '../../img/free-tips.jpg';


const Home = () => {

    const [courses, setCourses] = useState([]);

    const history = useHistory();

    useEffect( () => {
        fetch('./homeData.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

    const handleClick = () =>{
        history.push('/services');
    }
    
    return (
        <div>
           <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-full py-44 text-white text-center">
               <h1 className="text-5xl m-5">Fluency in English begins with overcoming your fears </h1>
               <p className="text-3xl m-5">We invite you to choose a course and start your journey with us</p>
               {/* The button will go to Service Page   */}
               <button onClick={handleClick} className="bg-green-600 px-5 py-3 font-medium text-xl rounded"> <i class="fas fa-hourglass-start"></i> Get Started</button>
           </div>
           <div className="p-20 grid gap-2 grid-cols-3">
            <div className="grid gap-2 grid-cols-2 col-span-2">
                {
                    courses.map( course => <Course key={course.id} course={course}></Course>)
                }
            </div>
            <div className="ml-5 bg-gray-200 rounded">
                <img src={img} alt="" />
                <div className="p-10">
                    <h3 className="my-3 text-3xl font-bold">Free Tips for learning English at home</h3>
                    <ul className="list-disc list-inside text-xl text-gray-700">
                        <li>Listen to English Songs</li>
                        <li>Find fun ways to learn new words</li>
                        <li>Learn about the English culture</li>
                        <li>Find study partners</li>
                        <li>Read everything you can get your hands on</li>
                        <li>Actively take note of new vocabulary</li>
                        <li>Focus on communication first</li>
                        <li>Keep a language log or journal</li>
                        <li>Technology is your friend, so use it</li>
                        <li>Practice, practice, practice</li>
                    </ul>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Home;