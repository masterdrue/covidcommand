import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

const RenderPartner = ({ partner }) => {
    if (partner) {
        return (
            <React.Fragment>
                <Media object src={baseUrl + partner.image} alt={partner.name} width="150" />
                    <Media body className="ml-5 mb-4">
                        <Media heading>{partner.name}</Media>
                        {partner.description}
                    </Media>
            </React.Fragment>
        );
    }
    return <div/> 
}

function PartnerList(props) {
    const partners = props.partners.partners.map(partner => {
        return (
            <Media key={partner.id} tag="li">
                <RenderPartner partner={partner} />
            </Media>
        );
    });
    if (props.partners.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.partners.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    } 

    return (
        <div className="col mt-4">
            <Media list>
                {partners}
            </Media>
        </div>
    );
}

function About(props) {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Covid Command</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Covid Command</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>COVID COMMAND</h3>
                    <p>Featuring a focused demonstration of COVID-19 data built with React. </p>
                    <p>The COVID-19 pandemic is a serious global health threat, and CDC is committed to stopping its spread. CDC has a long history of strengthening public health capacity throughout the world to contain outbreaks at their source and minimize their impact. </p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-secondary text-white"><h3>CoronaVirus Stats</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Pandemic Declaration </dt>
                                <dd className="col-6">March 11, 2020</dd>
                                <dt className="col-6">First Discovered</dt>
                                <dd className="col-6">December 31, 2019</dd>
                                <dt className="col-6">Date Updated</dt>
                                <dd className="col-6">September 2, 2020</dd>
                                <dt className="col-6">Confirmed Cases</dt>
                                <dd className="col-6">25,602,665</dd>
                                <dt className="col-6">Global Deaths</dt>
                                <dd className="col-6">852,758</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <p className="mb-0">The way forward is to not look back, but remember the path from which has already been traveled.</p>
                                <footer className="blockquote-footer">Drue McCombs,{' '}
                                    <cite title="Source Title">"Forward Sight" -
                                    Rabling at my Desk - Sept 2020</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>COVID RESOURCES</h3>
                </div>
                <PartnerList partners={props.partners} />
            </div>
        </div>
    );
}

export default About;