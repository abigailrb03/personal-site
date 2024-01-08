import './Work.css';
import plants from '../images/plants.png';
import background from '../images/water-background.jpeg';
import React, { useState } from 'react';
import Preview from '../components/Preview.js';
import Details from '../components/Details.js';
import SkillsOverlay from '../components/SkillsOverlay.js';
import spotify from '../images/spotify.svg';
import etsy from '../images/etsy.svg';
import bfp from '../images/bfp.png';
import d100 from '../images/d100.png';
import cs61c from '../images/cs61c.png';
import magnopus from '../images/magnopus.png';

const Work = () => {
  const [isSpotifyVisible, setSpotifyVisible] = useState(false);
  const [isEtsyVisible, setEtsyVisible] = useState(false);
  const [isD100Visible, setD100Visible] = useState(false);
  const [isCs61cVisible, setCs61cVisible] = useState(false);
  const [isMagnopusVisible, setMagnopusVisible] = useState(false);
  const [isBfpVisible, setBfpVisible] = useState(false);
  

  const toggleEtsy = () => {
    setEtsyVisible(!isEtsyVisible);
  }

  const toggleSpotify = () => {
    setSpotifyVisible(!isSpotifyVisible);
  };

  const toggleD100 = () => {
    setD100Visible(!isD100Visible);
  }

  const toggleCs61c = () => {
    setCs61cVisible(!isCs61cVisible);
  }

  const toggleMagnopus = () => {
    setMagnopusVisible(!isMagnopusVisible);
  }

  const toggleBfp = () => {
    setBfpVisible(!isBfpVisible);
  }

  const spotifyData = {
    title: 'Fraud Prevention',
    description: 'Spotify Backend Engineering Intern',
    dates: 'May 2023 - August 2023',
    details: 'As an intern, I created a message receiver and handler to facilitate communication across GCP pub/sub projects. The receiver obtained & filtered user data and called the handler, which suspended accounts suspected of fraud to prevent revenue loss',
    image: spotify,
    stack: ["backend", "GCP", "Java", "gRPC", "protobuf", "Dagger"],
  };

  const etsyData = {
    title: 'Image Upload Pipeline',
    description: 'Codebase x Etsy Project Manager',
    dates: 'January 2023 - May 2023',
    details: 'I contracted as a Technical Project Manager during a partnership between Etsy and Codebase (a student organization) and oversaw the rearchitecturing of Etsy\'s image upload pipeline. I worked with Etsy technical staff to create the project specification, oversaw 6 student developers, reviewed code, and prepared project deliverables',
    image: etsy,
    stack: ["project management", "gRPC", "Go", "protobuf", "typescript"],
  };

  const housingData = {
    title: 'Data 100 Housing Linear Regression',
    description: 'Student Project: Machine Learning',
    dates: 'March 2023',
    details: 'I created a linear regression model to predict the price of homes in Cook County Illinois based on a database of 500,000 homes. I cleaned & encoded the dataset and selected model features using K-fold cross validation and L2 regularization',
    image: d100,
    stack: ["machine learning", "python", "sklearn", "pandas", "seaborn"],
  };

  const cs61cData = {
    title: 'CS61c Matrix Convolution Optimization',
    description: 'Student Project: Parallelism',
    dates: 'May 2023',
    details: 'I optimized a matrix convolution program through parallel threading and parallel data processing. My program speedup placed in the top 5% of student submissions in a course of over 700 students',
    image: cs61c,
    stack: ["parallelism", "C", "SIMD", "Open MP", "Open MPI"],
  };

  const foodPantryData = {
    title: 'Food Pantry Inventory & Scheduling Website',
    description: 'Codebase x Berkeley Food Pantry Full Stack Developer',
    dates: 'January 2022 - May 2022',
    details: 'I contracted as a developer during a partnership between the Berkeley Food Pantry and Codebase (a student organization) and created a full-stack web and mobile application that alowed administrators and customers to organize and update inventory, schedule appointments, and manage stock',
    image: bfp,
    stack: ["full stack","React.js", "javascript", "PostgreSQL", "ExpressJS"],
  };

  const magnopusData = {
    title: 'Augmented Reality iOS App',
    description: 'Codebase x Magnopus iOS Developer',
    dates: 'August 2022 - December 2022',
    details: 'During a partnership between Magnopus and Codebase (a student organization) I created an iOS application that allowed the user to place scalable & mutable 3D and 2D artifacts in an augmented reality environment',
    image: magnopus,
    stack: ["augmented reality", "iOS", "Swift", "UIKit", "Apple ARKit"],
  };

  const skillsData = ["python", "C", "MongoDB", "SQL", "Java", "JavaScript", "TypeScript", "Express.js", "Node.js", "React.js", "protobuf", "postgreSQL", "sklearn","GCP", "AWS",  "teaching", "project management","Dagger", "Postman", "gRPC", "Docker", "kubernetes", "Figma", "Maven",  "machine learning", "backend", "full stack", "iOS"];

  return (
        <div className="work-wrapper"> 
            <div className='work-left'>
              <div className='work-title'>
                Here’s a handful of projects I’ve worked on 
              </div>
                <div className='work-module-wrapper'>
                    {isSpotifyVisible ? (
                        <Details {...spotifyData} onToggle={toggleSpotify} />
                    ) : (
                        <Preview {...spotifyData} onToggle={toggleSpotify} />
                    )}
                </div>
                <div className='work-module-wrapper'>
                    {isEtsyVisible ? (
                        <Details {...etsyData} onToggle={toggleEtsy} />
                    ) : (
                        <Preview {...etsyData} onToggle={toggleEtsy} />
                    )}
                </div>
                <div className='work-module-wrapper'>
                    {isCs61cVisible ? (
                        <Details {...cs61cData} onToggle={toggleCs61c} />
                    ) : (
                        <Preview {...cs61cData} onToggle={toggleCs61c} />
                    )}
                </div>
                <div className='work-module-wrapper'>
                    {isD100Visible ? (
                        <Details {...housingData} onToggle={toggleD100} />
                    ) : (
                        <Preview {...housingData} onToggle={toggleD100} />
                    )}
                </div>
                <div className='work-module-wrapper'>
                    {isMagnopusVisible ? (
                        <Details {...magnopusData} onToggle={toggleMagnopus} />
                    ) : (
                        <Preview {...magnopusData} onToggle={toggleMagnopus} />
                    )}
                </div>
                <div className='work-module-wrapper'>
                    {isBfpVisible ? (
                        <Details {...foodPantryData} onToggle={toggleBfp} />
                    ) : (
                        <Preview {...foodPantryData} onToggle={toggleBfp} />
                    )}
                </div>
            </div>
            <div className='work-right'>
                <div className='skills-wrapper'>
                      <div className='skills-overlay-container'>
                        <div className='skills-overlay-text'>
                          I’ve gained a lot of experience through my projects! Here are some skills I’m familiar with
                        </div>
                        <SkillsOverlay skillsData={skillsData}/>
                      </div>
                    <img src = {background} className='plants-img'></img>
                    
                </div>
                
            </div>
        </div>
  );
};

export default Work;
