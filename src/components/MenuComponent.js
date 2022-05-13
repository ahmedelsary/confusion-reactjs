import { Component } from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import Dish from './DishdetailComponent';
class MenuComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDish: null,
        };
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
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
        });

        return (
            <div className="container">
                <div className="row">
                    {Menu}
                </div>
                <Dish dish={this.state.selectedDish} />
            </div>
        );
    }

}

export default MenuComponent;