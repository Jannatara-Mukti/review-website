// Front Page 
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Course from '../Course/Course';


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
               <button onClick={handleClick} className="bg-green-600 px-5 py-3 font-medium text-xl rounded">Get Started</button>
           </div>
           <div className="p-20 min-h-full">
            <div className="grid gap-10 grid-cols-2">
                {
                    courses.map( course => <Course key={course.id} course={course}></Course>)
                }
            </div>
           </div>
        </div>
    );
};

export default Home;