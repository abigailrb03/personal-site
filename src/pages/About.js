import './About.css';
import mainImg from '../images/abby.jpeg';
import exploPic from '../images/explo-pic.jpg';
import exploPic1 from '../images/explopic1.png';
import pic2 from '../images/otherpic.png';
import React, { useState, useEffect } from 'react';



export default function About() {

    const hobbies = ["write", "read", "research", "teach", "dance"];
    const [hobby, setHobby] = useState(hobbies[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % hobbies.length);
          setHobby(hobbies[index]);
        }, 3000);
    
        return () => clearInterval(intervalId);
      }, [index]);


    return (
        <div className='about-wrapper'> 
            <div className='left'>
                <div className='text-wrapper'>
                    <div className='hey-there'>
                        hey there!
                    </div>
                    <div className='subtext'>
                        thanks for checking out this site
                    </div>
                    <div className='main-text'>
                        I’m Abby Brooks-Ramirez, a student studying computer science, ethnic studies, and science, technology, & society at UC Berkeley.
                    </div>
                    <div className='main-text'>
                        I believe in equity & inclusion in education, using technology for social good, and asking questions about the world around me
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='img-component-wrapper'>
                    <div className='img-wrapper'>
                        <img src = {exploPic1} className='pic'></img>
                    </div>
                    <div className='hobbies'>
                        <div className='i-love-to'>
                            I love to
                        </div>
                             
                        <div className='hobby-item'>
                             {hobby}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}