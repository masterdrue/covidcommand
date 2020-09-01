import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';


function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                <div className="col col-sm">
                        <h5>COVID CONNECTED</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-6 col-sm text-sm-center">
                        <h5>NAVIGATE</h5>
                        <ButtonGroup>
                            <Button href="/home">Home</Button>
                            <Button href="/directory">Directory</Button>
                            <Button href="/aboutus">About Us</Button>
                            <Button href="/contactus">Contact Us</Button>
                        </ButtonGroup>
                    </div>
                    
                    <div className="col text-sm-right">
                        <h5>GLOBAL AWARENESS</h5>
                        <Button href="https://druescloud.com" target="_blank"><i className="fa fa-globe"></i> DruesCloud.com</Button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;