import React from 'react';

function UserProfile(props) {
return (
<div style={{ border: '1px solid gray', padding: '20px', margin: '10px', borderRadius: '8px' }}>
    <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
    <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
    <p>Bio: {props.bio}</p>
</div>
);
}

export default UserProfile;

