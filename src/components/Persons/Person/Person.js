import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
    render () {
        return (
            <div className={classes.Person}>
                <span className={classes.delete} onClick={this.props.click}>&#10006;</span>
                <p>I am {this.props.name} and I am {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value ={this.props.name}/>
            </div>
            )
    }

}

export default Person;