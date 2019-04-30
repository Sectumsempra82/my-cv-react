import React, { Component } from 'react';
import Jumbo from '../../components/Homepage/Jumbo/Jumbo';
import Preface from '../../components/Homepage/Preface/Preface';
import Skills from '../../components/Homepage/Skills/Skills';
import RecentWork from '../../components/Homepage/RecentWork/RecentWork';
import Modal from '../../components/UI/Modal/Modal';

class Home extends Component {

    
    state = {
        modal: false,
        sampleContent: ''
    }

    showSample = () => {
        this.setState({
            modal: true
        })
    }

    closeSample= () => {
        this.setState({
            modal: false
        })
    }

    setSampleContent = (content) => {
        this.setState({
            sampleContent: content
        })
    }

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.modal} modalClosed={this.closeSample}>
                    {this.state.sampleContent}
                </Modal>
                    <Jumbo></Jumbo>
                    <Preface></Preface>
                    <Skills></Skills>
                    <RecentWork showSample={this.showSample} setSampleContent={this.setSampleContent}></RecentWork>
                
            </React.Fragment>
        )
    }



}

export default Home;