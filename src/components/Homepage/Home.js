import React, { Component } from 'react';
import Jumbo from './Jumbo/Jumbo';
import Preface from './Preface/Preface';
import Skills from './Skills/Skills';
import RecentWork from './RecentWork/RecentWork';
import Modal from '../UI/Modal/Modal';
import Demos from './Demos/Demos';

// import monkey from "../../assets/images/monkey.gif";

class Home extends Component {

    constructor(props) {
        super(props);
        // const warningContent = (
        //     <div style={{ textAlign: 'center', backgroundColor: 'yellow'}}>
        //         <img src={monkey} alt='monkey' style={{margin: '0 auto'}}/><br/>
        //         <h3>This website is still in construction, proceed at your own risk</h3><br/>
        //         <button onClick={this.closeSample}>OK, PROCEED ANYWAY</button>
        //     </div>
        //     );
        this.state = {
            modal: false,
            sampleContent: '',
            overflow: false
        };
    }

    showSample = () => {
        this.setState({
            modal: true
        })
    }

    closeSample = () => {
        this.setState({
            modal: false,
            sampleContent: '',
            overflow: true
        })
    }

    setSampleContent = (content) => {
        this.setState({
            sampleContent: content
        })
    }

    render() {
        return (
            <>
                <Modal show={this.state.modal} modalClosed={this.closeSample} overflowActive={this.state.overflow}>
                    {this.state.sampleContent}
                </Modal>
                <Jumbo></Jumbo>
                <Preface></Preface>
                <Skills></Skills>
                
                <RecentWork showSample={this.showSample} setSampleContent={this.setSampleContent}></RecentWork>
                <Demos></Demos>
            </>
        )
    }



}

export default Home;