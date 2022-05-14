import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
class Menu extends Component {
   
    render() {
        const Menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card Key='{dish.id}' onClick={() => this.props.onClick(dish.id)}>

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
            </div>
        );
    }

}

export default Menu;