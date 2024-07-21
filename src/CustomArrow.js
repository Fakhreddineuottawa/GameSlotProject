import React from 'react';

const CustomArrow = (props) => {
  const { className, style, onClick, direction } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '50%',
        padding: '10px',
        fontSize: '2rem',
        zIndex: 2,
      }}
      onClick={onClick}
    >
      {direction === 'left' ? '‹' : '›'}
    </div>
  );
};

export default CustomArrow;
