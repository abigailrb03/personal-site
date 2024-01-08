// import React from 'react';
// import minus from '../images/minus.svg';
// import './Details.css'

// const Details = ({ title, description, dates, details, image, onToggle }) => {
//   return (
//     <div className="details-wrapper">
//       <div className='details-wrapper-left'>
//         <img className = "dropdown-img" src={image} alt={title} />
//         <div className='details-header-wrapper'>
//           <div className='details-title'>{title}</div>
//           <div className='details-description'>{description}</div>
//           <div className='details-dates'>{dates}</div>
//         </div>
//       </div>

//       <div className='details-main-text'>{details}</div>
//       <button onClick={onToggle} className='details-button'>
//             <img src= {minus} alt='close'/>
//         </button>
//     </div>
//   );
// };

// export default Details;

// Details.js
import React from 'react';
import minus from '../images/minus.svg';
import './Details.css';

const Details = ({ title, description, dates, details, image, stack, onToggle }) => {
  return (
    <div className="details-wrapper">
      <div className='details-wrapper-left'>
        <img className="dropdown-img" src={image} alt={title} />
        <div className='details-header-wrapper'>
          <div className='details-title'>{title}</div>
          <div className='details-description'>{description}</div>
          <div className='details-dates'>{dates}</div>
          {/* Display tags based on the "stack" prop */}
          <div className='tags-wrapper'>
            {stack.map((tag, index) => (
              <div
                key={index}
                className={`details-tag ${index === 0 ? 'solid-bg' : 'border-only'}`}
              >
                {tag}
              </div>
            ))}
      </div>
        </div>
      </div>

      <div className='details-main-text'>{details}</div>

      <button onClick={onToggle} className='details-button'>
        <img src={minus} alt='close' />
      </button>
    </div>
  );
};

export default Details;

