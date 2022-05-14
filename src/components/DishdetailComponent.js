import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component {
   
    renderComments(comments) {
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

    render() {
        // get dish from props
        const dish = this.props.dish;
        if (dish != null) {
            return (
                <div className="container">
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
                                <ul className="list-unstyled">
                                    {this.renderComments(dish.comments)}
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
}
export default DishDetail;