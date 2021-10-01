import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
  const { id, name, phone, website, address } = props.friend;
  const history = useHistory()

  // CSS Style
  const friendStyle = {
    border: '3px solid goldenrod',
    padding: '10px',
    borderRadious: '10px'

  }

  const url = `friend/${id}`

  const handleFriendClick = () => {
    history.push(`/friend/${id}`)
  }
  return (
    <div style={friendStyle}>
      <h2>I am: {name} {id}</h2>
      <h5>Call me: {phone}</h5>
      <p>Visit me: {website}</p>
      <p><small>I line in: {address.city}</small></p>
      <p>My zipcode is: {address.zipcode}</p>
      {/* <Link to={`/friend/${id}`}>Visit me</Link> */}
      <Link to={url}>Visit me</Link>
      <br />
      <Link to={url}>
        <button>Visit Me</button>
      </Link>
      {/* the previous system or the below system use to go another page by button click */}
      <br />

      <button onClick={handleFriendClick}>Visit me 2</button>
    </div>
  );
};

export default Friend;