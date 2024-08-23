import React from 'react';

const ValueProp = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4">
      <div className="mb-4 text-4xl">
        {icon}
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ValueProp;