import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { COMMENTS } from "../shared/comments";
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Menu from './MenuComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };

    }
    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={this.state.dishes.filter((dish) => dish.id === +match.params.dishId)[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === +match.params.dishId)}
                />
            );
        }
        const AboutPage =() =>{
            return(
                <About leaders={this.state.leaders} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/aboutus' component={AboutPage} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />

            </div>
        );
    }
}
export default Main;