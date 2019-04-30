import React, { Component } from 'react';
import { Figure } from 'react-bootstrap';
import pic from "../../../../assets/images/my-logo.png";
import classes from './SampleWork.module.css';
import { MDBView, MDBMask } from "mdbreact";
import 'mdbreact/dist/css/mdb.css';

class SampleWork extends Component {


    render() {
        return (

            <MDBView className={classes.SampleWork} hover zoom>

                <img
                    className={classes.SamplePic}
                    width={171}
                    height={180}
                    alt="171x180"
                    src={this.props.picture}
                />
                <MDBMask overlay="white-strong" className={["flex-center", classes.SampleText].join(' ')} onClick={this.props.click}>
                    <p className="white-text">{this.props.text}</p>
                </MDBMask>
            </MDBView>
        )
    }



}

export default SampleWork;