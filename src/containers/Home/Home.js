import React, { Component } from 'react';
import Jumbo from '../../components/Homepage/Jumbo/Jumbo';
import Preface from '../../components/Homepage/Preface/Preface';
import Skills from '../../components/Homepage/Skills/Skills';

class Home extends Component {


    render() {
        return (
            <React.Fragment>
                <Jumbo></Jumbo>
                <Preface></Preface>
                <Skills></Skills>
            </React.Fragment>
        )
    }



}

export default Home;