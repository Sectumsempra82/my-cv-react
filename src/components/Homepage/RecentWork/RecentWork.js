import React, { Component } from 'react';
import SampleWork from './SampleWork/SampleWork';

import classes from './RecentWork.module.css';
import dgf from '../../../assets/images/dgf_logo.png';
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";
class RecentWork extends Component {

    modals = {
        'DGF PROFESSIONAL': 'DGF PROFESSIONAL'
    }

    render() {
        return (
            <section className={classes.RecentWork}>
                <div><h1>Recent Work</h1></div>
                <div className={classes.PicContainer}>

                    <MDBContainer className="mt-5">
                        <MDBRow>
                            <MDBCol md="4">
                                <SampleWork></SampleWork>
                                <SampleWork></SampleWork>
                                <SampleWork></SampleWork>

                            </MDBCol>
                            <MDBCol md="4">
                                <SampleWork></SampleWork>
                                <SampleWork></SampleWork>
                                <SampleWork></SampleWork>

                            </MDBCol>
                            <MDBCol md="4">
                                <SampleWork></SampleWork>
                                <SampleWork
                                    picture={dgf}
                                    text={'DGF PROFESSIONAL'}
                                    click={() => {
                                        this.props.setSampleContent(
                                            this.modals['DGF PROFESSIONAL']
                                        );
                                        this.props.showSample();
                                    }}>
                                </SampleWork>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </div>
            </section>
        )
    }



}

export default RecentWork;