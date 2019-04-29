import React, { Component } from 'react';
import Jumbo from '../../components/Homepage/Jumbo/Jumbo';
import Preface from '../../components/Homepage/Preface/Preface';
import Skills from '../../components/Homepage/Skills/Skills';
import OtherSkills from '../../components/Homepage/OtherSkills/OtherSkills';

class Home extends Component {


    render() {
        return (
            <React.Fragment>
                <Jumbo></Jumbo>
                <Preface></Preface>
                <Skills></Skills>
                <OtherSkills></OtherSkills>
            </React.Fragment>
        )
    }



}

export default Home;