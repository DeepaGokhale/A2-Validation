import React from 'react'

const validation = (props) => {

    let textValid = <p>"Text long enough"</p>;    
    
        if (props.value < 5)
        {
            textValid = textValid = <p>"Text too shrort"</p>;
        }
    return(
            <div>
                {textValid}
            </div>
    )
}

export default validation;