import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { addComment, fetchDishes } from "../redux/ActionCreators";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishdetailComponent";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Menu from './MenuComponent';

const mapStateToProps = state =>{
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
      };
};
const mapDispatchToProps = dispatch => {
    return {
        addComment: (dishId, author, rating, comment) => dispatch(addComment(dishId, author, rating, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
    };
};

class Main extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.fetchDishes();
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish= {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishIsLoading= {this.props.dishes.isLoading}
                    dishErrorMess=  {this.props.dishes.errMess}
                    promotion= {this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader= {this.props.leaders.filter((leader) => leader.featured)[0]}
                    
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === +match.params.dishId)[0]}
                    isLoading= {this.props.dishes.isLoading}
                    errorMess=  {this.props.dishes.errMess}
                    comments={this.props.comments.filter((comment) => comment.dishId === +match.params.dishId)}
                    addComment={this.props.addComment}
                />
            );
        }
        const AboutPage =() =>{
            return(
                <About leaders={this.props.leaders} />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/aboutus' component={AboutPage} />
                    <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />

            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));