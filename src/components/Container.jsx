import React from 'react';

const Container = ({ className, children, ...props }) => {
  return (
    <div className={`rounded ${className || ''}`} {...props}>
      {children}
    </div>
  );
};

export default Container;