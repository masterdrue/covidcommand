import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, CardFooter } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';


function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
    return <h4>{errMess}</h4>
    }
    return (
            <FadeTransform
                in 
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(50%)'
                }}>
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                    <Button target="_blank" href={item.url}>{item.button}</Button>
                </CardBody>
                <CardFooter className="text-muted"> min ago</CardFooter>
            </Card>
        </FadeTransform>
    );
}

function Home(props) {
    return (
        
            
            <div className="container">
                <div className="row m-5">
                    <div className="col-md">
                        <RenderCard 
                            item={props.campsite} 
                            isLoading={props.campsitesLoading}
                            errMess={props.campsitesErrMess}
                        />
                    </div>
                    <div className="col-md">
                        <RenderCard 
                            item={props.promotion} 
                            isLoading={props.promotionLoading}
                            errMess={props.promotionErrMess}
                            />
                    </div>
                    <div className="col-md">
                    <RenderCard 
                            item={props.partner}
                            isLoading={props.partnerLoading}
                            errMess={props.partnerErrMess}
                        />                
                    </div>
                </div>
            </div>
       
    );
}

export default Home;