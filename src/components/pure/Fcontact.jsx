import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComponenteB from './componenteB';

class Fcontact extends Component {

    constructor(props){
        super(props);
        this.state={
            name : '',
            lastname : '',
            email : '',
            conected : true,

        }
    }

    render() {
        return (
            <div>
                <h1>Name: {this.props.name}</h1>
                <h1>Last name: {this.props.lastname}</h1>
                <h2>Email: {this.props.email}</h2>
                <ComponenteB estado={true} />

            </div>
        );
    }

}

Fcontact.propTypes = {
    name: PropTypes.string,
    lastname: PropTypes.string,
    email: PropTypes.string,
    conected: PropTypes.bool,
};


export default Fcontact;