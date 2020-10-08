import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import Validation from './Validation/Validation';
import Char from './Char/Char';


class Assignment2 extends Component {

    state = {
        length: 0,
        minLen: 5,
        maxLen: 15,
        isValid: "Text too short",
        newArr: [],
        userInput: ""
    }

    getLength = (event) => {
        const text = event.target.value;
        const lenOfText = text.length;        
        this.validateLen(lenOfText);
        //this.renderChar(text);        
        this.setState({length: lenOfText, userInput: text});
        
            
    }

    validateLen = (lenOfText) => {
        let lenValid = "Text long enough";
        if (lenOfText < this.state.minLen)
        {
            lenValid = "Text too short";
        } 
        this.setState({isValid: lenValid});
    }

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        console.log(updatedText);
        this.setState({userInput: updatedText});
    }


    render() {
        
        const charList = this.state.userInput.split('').map( (ch, index) => {
            return <Char character={ch} key={index} 
            clicked={() => this.deleteCharHandler(index)} />
        });

        return (
            <div>
                <UserInput type="text" changed={this.getLength} value={this.state.userInput} />
                <p>lenght of text: {this.state.userInput.length} </p>                
                <Validation value={this.state.userInput.length} />
                {charList}
            </div>
        )
    }
}

export default Assignment2;



        // let thisArr = [];
        // renderChar = (           
        //     [...this.state.curtext].forEach(char => {
        //             thisArr.push(char);
        //             this.setState({newArr: thisArr});
        //             {
        //                 <div>
        //                     <Char character={char} />
        //                 </div>
        //             }
        //     })
        // )