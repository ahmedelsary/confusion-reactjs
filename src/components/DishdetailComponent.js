import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, ListGroup, ListGroupItem, } from "reactstrap";

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);

    }
    renderComments(comments) {

        if (comments != null) {
            const commentsElement = comments.map((comment) => {
                return (
                    <ListGroupItem className="border-0">
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {comment.date}</p>
                    </ListGroupItem>
                );
            });

            return commentsElement;

        } else {
            return (
                <div></div>
            );
        }

    }

    render() {
        // get dish from props
        const dish = this.props.dish;

        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card >
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <div>
                            <h4>Comments</h4>
                            <ListGroup>
                                {this.renderComments(dish.comments)}
                            </ListGroup>
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
}
export default DishdetailComponent;