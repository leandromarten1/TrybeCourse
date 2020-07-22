import React from 'react';

const MyList = (props) => {
  return (
    <ul className='list'>
      {props.children.map((child, i) => {
        if (child.type && child.type === 'li' ) return child;
        return <li key={i}>{child}</li>;
      })}
    </ul>
  )
}
export default MyList;