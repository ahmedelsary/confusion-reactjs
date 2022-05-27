import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import Loading from './LoadingComponent';


function RenderCard({item, isLoading, errorMess}) {
    if(isLoading)
        return(
            <Loading />
        );
    else if(errorMess)
        return(
            <h4>{errorMess}</h4>
        );
    else
        return (
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item= {props.dish}  isLoading= {props.dishIsLoading} errorMess= {props.dishErrorMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item= {props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Home;   