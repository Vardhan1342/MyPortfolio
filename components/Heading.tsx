import React from 'react';

const Heading = ({children,}:{  children: React.ReactNode}) => {
  return (
    <h1 className='text-3xl font-bold text-gray-600 font-sans mb-5 text-center dark:text-gray-200'>{children}</h1>
  );
}

export default Heading;
