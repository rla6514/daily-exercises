/* vanilla javascript 

import './style.scss';

export default class message{
    constructor(sender, subject, time ) {
        this.sender = sender;
        this.subject = subject;
        this.time = time;
    }


render () {
    const messageElm = document.createElement('div');
    messageElm.className = 'messge';
    messageElm.innerHTML = 
        `<div class="message__sender">${this.sender}</div>
        <div class="message__subject">${this.subject}</div>
        <div class="message__time">${this.time}</div>
        `;

        return messageElm;

    
    }

    mount(parent) {
        this.element = this.render();
        parent.apppendChild(this.element);
    }
}; */


/* import React from "react";
import './style.scss';

export default class message extends React.Component {
    render () {
        return(
            <div className="message"> 
                <div class="message__sender">{this.props.sender}</div>
                <div class="message__subject">{this.props.subject}</div>
                <div class="message__time">{this.props.time}</div>
            </div>
        );
    
    }
}; */

import React from "react";
import './style.scss';

export default class term extends React.Component{
    render() {
        return (
            <div className="term">
                <div className="term__name">{this.props.name}</div>
                <div className="term__definition">{this.props.definition}</div>
            </div>
        );
    }
};