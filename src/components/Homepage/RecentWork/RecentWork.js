import React, { Component } from 'react';
import { MDBRow, MDBContainer, MDBView, MDBMask } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
import Who from './SampleWork/Samples/WHO/WhoSample';
import os from '../../../assets/images/OS/OneSpan.jpg';
import OnespanSample from './SampleWork/Samples/Onespan/OnespanSample';
import thisWebPic from '../../../assets/images/thisWebPic.png';
import ThisWebsite from './SampleWork/Samples/ThisWebsite/ThisWebsite';
import myCV from '../../../assets/CVBEJAN.pdf';
import cvDownload from '../../../assets/images/cvDownload.png';

class RecentWork extends Component {

    picList = [os, mgx_sup, mgx_dev, confort, dgf, who]
    modals = {
        'ONESPAN - TECHNICAL SUPPORT': <OnespanSample />,
        'MEDIAGENIX - IT SUPPORT': <MgxsupSample />,
        'MEDIAGENIX - DEVELOPER': <MgxdevSample />,
        'CONFORTAIR': <ConfortAir />,
        'DGF PROFESSIONAL': <DgfSample />,
        'WHO': <Who />
    }


    render() {

        let sampleList = Object.keys(this.modals).map((el, i) => {
            return ([this.picList[i], el])
        })

            .map((el) => {
                return (
                    <SampleWork
                        picture={el[0]}
                        text={el[1]}
                        click={() => {
                            this.props.setSampleContent(
                                this.modals[el[1]]
                            );
                            this.props.showSample();
                        }}>
                    </SampleWork>
                )
            })


        return (
            <section className={classes.RecentWork}>
                <div><h1>Recent Work</h1></div>
                <div className={classes.PicContainer}>
                    <MDBContainer className="mt-5">
                        <MDBRow>
                            {sampleList}
                            <MDBView className={classes.CV} hover zoom>
                                <img
                                    width={171}
                                    height={180}
                                    alt='CV Download'
                                    src={cvDownload}
                                />
                                <a href={myCV}>
                                    <MDBMask overlay="white-strong" className={["flex-center", classes.SampleText].join(' ')} onClick={this.props.click}>
                                        <FontAwesomeIcon icon={['fas', 'download']} style={{ fontSize: 'xx-large', color: 'black' }} />
                                    </MDBMask>
                                </a>
                            </MDBView>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </section>
        )
    }



}

export default RecentWork;