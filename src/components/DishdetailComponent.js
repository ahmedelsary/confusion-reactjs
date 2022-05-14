import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Breadcrumb } from "reactstrap";
import { BreadcrumbItem } from "reactstrap";

function RenderComments({ comments }) {
    if (comments != null) {
        const commentsElement = comments.map((comment) => {
            return (
                <li className="border-0">
                    <p>{comment.comment}</p>
                    <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}</p>
                </li>
            );
        });

        return commentsElement;

    } else {
        return (
            <div></div>
        );
    }

}
function RenderDish({dish}) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}
const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem> <Link to="/menu">Menu</Link></BreadcrumbItem>

                    <BreadcrumbItem active >{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <div>
                            <h4>Comments</h4>
                            <ul className="list-unstyled">
                                <RenderComments comments={props.comments} />
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


        );
    }
    else {
        return (
            <div></div>
        );
    }

}
export default DishDetail;