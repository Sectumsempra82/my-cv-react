import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBCol } from "mdbreact";

import SampleWork from './SampleWork/SampleWork';
import classes from './RecentWork.module.css';
import dgf from '../../../assets/images/DGF/dgf_logo.png';
import DgfSample from './SampleWork/Samples/DGF/DgfSample';
import confort from '../../../assets/images/ConfortAir/confort_logo.png';
import ConfortAir from './SampleWork/Samples/ConfortAir/ConfortAirSample';




class RecentWork extends Component {

    modals = {
        'DGF PROFESSIONAL': <DgfSample />,
        'CONFORTAIR': <ConfortAir />
    }

    render() {
        return (
            <section className={classes.RecentWork}>
                <div><h1>Recent Work</h1></div>
                <div className={classes.PicContainer}>

                    <MDBContainer className="mt-5">
                        <MDBRow>
                            
                                <SampleWork
                                picture={confort}
                                text={'CONFORTAIR'}
                                click={() => {
                                    this.props.setSampleContent(
                                        this.modals['CONFORTAIR']
                                    );
                                    this.props.showSample();
                                }}>
                                </SampleWork>
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

                           
                        </MDBRow>
                    </MDBContainer>

                </div>
            </section>
        )
    }



}

export default RecentWork;