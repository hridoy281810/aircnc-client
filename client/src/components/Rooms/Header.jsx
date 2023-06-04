import React from 'react';
import Heading from '../Heading/Heading';

const Header = ({roomData}) => {
    const {title,location,image} = roomData
    return (
        <>
           <Heading title={title}
           subtitle={location}
           ></Heading> 
           <div className='w-full md:h-[60vh] overflow-hidden rounded-xl '>
            <img className='object-cover w-full' src={image} alt="h-img" />
           </div>
        </>
    );
};

export default Header;