import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent} = props;
  const { children: {title, content, timeSeconds} } = props;
  setTimeout(() => hideComponent(), timeSeconds * 1000);
  return (
    <div className='Alert'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

Alert.propTypes = {
  hideComponent: PropTypes.func.isRequired,
  children: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timeSeconds: PropTypes.number.isRequired,
  })
};

export default Alert;