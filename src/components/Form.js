import React from 'react';

const Form = props => {
    return (
        <div>
            {props.members.map(form => (
                <div className="form">
                    <h2>{form.name}</h2>
                    <p>{form.email}</p>
                    <p>{form.role}</p>
                </div>
            ))}
    </div>
    );
};

export default Form