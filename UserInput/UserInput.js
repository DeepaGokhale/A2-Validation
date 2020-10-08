import React from 'react';

const userInput = (props) => {
    
    return (
        <div className='UserInput'>
            <input type="text" onChange={props.changed} value={props.value} />
        </div>
        )
}

export default userInput;