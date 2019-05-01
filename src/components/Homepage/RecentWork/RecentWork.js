import React, { Component } from 'react';
import { MDBRow, MDBContainer } from "mdbreact";

import SampleWork from './SampleWork/SampleWork';
import classes from './RecentWork.module.css';
import dgf from '../../../assets/images/DGF/dgf_logo.png';
import DgfSample from './SampleWork/Samples/DGF/DgfSample';
import confort from '../../../assets/images/ConfortAir/confort_logo.png';
import ConfortAir from './SampleWork/Samples/ConfortAir/ConfortAirSample';
import mgx_dev from '../../../assets/images/MGX/mgx_dev.png';
import MgxdevSample from './SampleWork/Samples/MGXDEV/MgxdevSample';
import mgx_sup from '../../../assets/images/MGX/mgx_sup.png';
import MgxsupSample from './SampleWork/Samples/MGXSUP/MgxsupSample';
import who from '../../../assets/images/who.png';




class RecentWork extends Component {

    modals = {
        'DGF PROFESSIONAL': <DgfSample />,
        'CONFORTAIR': <ConfortAir />,
        'MEDIAGENIX - DEVELOPER': <MgxdevSample />,
        'MEDIAGENIX - IT SUPPORT': <MgxsupSample />,
        'WHO': ''
    }

    render() {
        return (
            <section className={classes.RecentWork}>
                <div><h1>Recent Work</h1></div>
                <div className={classes.PicContainer}>

                    <MDBContainer className="mt-5">
                        <MDBRow>
                            
                                <SampleWork
                                picture={mgx_dev}
                                text={'MEDIAGENIX - DEVELOPER'}
                                click={() => {
                                    this.props.setSampleContent(
                                        this.modals['MEDIAGENIX - DEVELOPER']
                                    );
                                    this.props.showSample();
                                }}>
                                </SampleWork>
                                <SampleWork
                                picture={mgx_sup}
                                text={'MEDIAGENIX - IT SUPPORT'}
                                click={() => {
                                    this.props.setSampleContent(
                                        this.modals['MEDIAGENIX - IT SUPPORT']
                                    );
                                    this.props.showSample();
                                }}>
                                </SampleWork>
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
                                <SampleWork
                                    picture={who}
                                    text={'WHO'}
                                    click={() => {
                                        this.props.setSampleContent(
                                            this.modals['WHO']
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