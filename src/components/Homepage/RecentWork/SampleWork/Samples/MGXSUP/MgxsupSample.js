import React from 'react';
import classes from './MgxsupSample.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import win_sup from '../../../../../../assets/images/MGX/win_sup.png';




const MgxsupSample = (props) => {
    return (

        <div className={classes.MgxdevSample}>
            <div className={classes.BrandName}><h3>Mediagenix NG</h3></div>
            <p>   Contacts: <a href='https://www.mediagenix.tv/en/'>  Website </a> - <a href="https://www.facebook.com/MEDIAGENIX/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /> </a> - <a href="https://www.linkedin.com/company/mediagenix-ng/"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /> </a></p>
            <h5><b>Back-end / GUI Developer <br /> September 2017 / September 2018</b></h5>
            <h6>Mission:</h6>
            <p><b>Support Engineer</b></p>
            <img src={win_sup} alt="Whats'On software" />
            <ul>
                <li>
                    <p>1st and 2nd level IT support</p>
                </li>
                <li>
                    <p>Working on Jira custom ticketing system</p>
                </li>
                <li>
                    <p>Windows 10, Windows Server 2008/ 2008 R2/ 2012 / 2012 R2 / 2016 / 2019, Active directory, Group Policy, SCCM, SCOM, IIS, WDS, RDS, VMware ESXi, Hyper-V, RDS</p>
                </li>
                <li>
                    <p>Maintenance of web portals – PHP, Javascript, HTML, XML, CSS, Angular, React.js</p>
                </li>
                <li>
                    <p>ISO 27001 implementation</p>
                </li>
                <li>
                    <p>Maintenance of OracleDB 11, 12, 18 databases and relative servers</p>
                </li>
                <li>
                    <p>Problem solving and maintenance planning</p>
                </li>
                <li>
                    <p>Domain administration</p>
                </li>
            </ul>

        </div>

    );
}

export default MgxsupSample;