import React from 'react';
const Note = props => {
  const { title, description } = props;
  return (
    <div className='card'>
      <div className='card-body'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-text'>{description}</p>
      </div>
    </div>
  );
};

export default Note;
