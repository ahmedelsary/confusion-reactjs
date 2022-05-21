import React, { Component } from "react";
import { Control, Errors, LocalForm } from "react-redux-form";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Breadcrumb } from "reactstrap";
import { BreadcrumbItem } from "reactstrap";

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }
    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        return (
            <>
                <Button outline onClick={this.toggleModal} ><span class="fa fa-pencil"></span> Submit Comment</Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => { this.handleSubmit(values) }}>
                            <Row className="form-group m-1">
                                <Label htmlFor="rating" >Rating</Label>
                                <Control.select model=".rating" name="rating" id="rating"
                                    className='form-control' >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>

                            </Row>
                            <Row className="form-group m-1">
                                <Label htmlFor="author" >Your Name</Label>
                                <Control.text model=".author" name="author" id="author"
                                    placeholder="Your Name"
                                    className='form-control'
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)

                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }} />

                            </Row>
                            <Row className="form-group m-1">
                                <Label htmlFor="comment" >Comment</Label>
                                <Control.textarea model=".comment" name="comment" id="comment"
                                    rows="6"
                                    className='form-control'
                                />

                            </Row>
                            <Row className="form-group m-1">

                                <Button type="submit" color="primary" >Submit</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>

        );
    }
}


function RenderComments({ comments }) {
    if (comments != null) {
        const commentsElements = comments.map((comment) => {
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

        return (
            <>
                {commentsElements}
                <CommentForm />
            </>

        );

    } else {
        return (
            <div></div>
        );
    }

}
function RenderDish({ dish }) {
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