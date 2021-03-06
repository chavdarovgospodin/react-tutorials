import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromsProps')
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps', props)
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Perons.js] getSnapShotBeforeUpdate')
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...')
        return this.props.persons.map((person, index) =>{
            return  <Person
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.props.changed(event,person.id)}/>
          }  );
    }
    

}      

export default Persons;
