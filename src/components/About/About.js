//This is About Us Page
import React from 'react';
import img1 from '../../img/about-us.jpg'

const About = () => {

    return (
        <div>
            {/* About Us Background Image  */}
            <div className="bg-about-pattern bg-cover bg-no-repeat bg-center min-h-full py-44 text-white text-center">
                <h2 className="text-3xl">A little bit about Us</h2>
            </div>
            <div className="flex flex-row p-20 justify-between">
                <div className="mr-10 pt-8">
                    <img src={img1} className="w-screen rounded" alt="" />
                </div>
                <div className="ml-10">
                    {/* About Us Description  */}
                    <p>
                        We have English teacher from the U.S. trained by the University of Cambridge in the U.K.

                        Since 2008, We’ve taught students from all around the world, both young adults and working professionals, and at all levels (from A1 to C2).

                        As a teacher, We give equal focus to both Accuracy (correcting your grammar, pronunciation, and vocabulary) and Fluency (increasing your speed and confidence in speaking).

                        In addition to general topics like grammar and pronunciation, my specialties include:

                        <ul className="list-disc list-inside">
                            <li>Business English</li>
                            <li> Conversational ‘Small Talk’</li>
                            <li> Writing for Business & University</li>
                            <li>IELTS Test Preparation</li>
                        </ul>

                        If you’re interested in improving your English through private lessons, you’re welcome to sign up for a free trial lesson with me to see if I’m a good fit for your needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;