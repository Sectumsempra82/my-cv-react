import React, { Component } from 'react';
import Jumbo from '../../components/Homepage/Jumbo/Jumbo';
import Preface from '../../components/Homepage/Preface/Preface';
import Skills from '../../components/Homepage/Skills/Skills';
import RecentWork from '../../components/Homepage/RecentWork/RecentWork';
import Modal from '../../components/UI/Modal/Modal';
import monkey from "../../assets/images/monkey.gif";

class Home extends Component {


    state = {
        modal: false,
        sampleContent: ''
    }



    showSample = () => {
        this.setState({
            modal: true,
        })
    }

    closeSample = () => {
        this.setState({
            modal: false,
            sampleContent: ''
        })
    }

    setSampleContent = (content) => {
        this.setState({
            sampleContent: content
        })
    }

    componentDidMount() {
        const warningContent = (
            <div style={{ textAlign: 'center', backgroundColor: 'yellow'}}>
                <img src={monkey} alt='monkey' style={{margin: '0 auto'}}/><br/>
                <h3>This website is still in construction, proceed at your own risk</h3><br/>
                <button onClick={this.closeSample}>OK, PROCEED ANYWAY</button>
            </div>
            );
        this.setSampleContent(warningContent);
        this.showSample();
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