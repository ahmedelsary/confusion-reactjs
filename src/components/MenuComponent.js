import { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

class MenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
        };

    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    renderDish(dish) {
        if (dish != null) {
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
        else {
            return (
                <></>
            );
        }
    }

    render() {
        const Menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card Key='{dish.id}' onClick={() => this.onDishSelect(dish)}>

                        <CardImg top width="100%" src={dish.image} alt={dish.name} />

                        <CardImgOverlay >
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })
        return (
            <div className="container">
                <div className="row">
                    {Menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }

}

export default MenuComponent;