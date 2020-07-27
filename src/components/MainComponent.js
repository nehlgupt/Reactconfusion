import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent.js' ;
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import '../App.css';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }


class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }
    

    render(){
        const HomePage=()=>{
            return(
                <Home dish={this.props.dishes.filter((dish)=> dish.featured )[0]}
                promotion={this.props.promotions.filter((dish)=>dish.featured)[0]}
                leader={this.props.leaders.filter((dish)=> dish.featured)[0]}
                />
            );
        };
        const DishWithId = ({match})=>{
            return(
                <DishDetail selectedDish={this.props.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
                comments={this.props.comments.filter((comment)=> comment.dishId===parseInt(match.params.dishId,10))}/>

            );
        };
        const Aboutfunc = ()=>{
            return(
                <About leaders={this.state.leaders}/>
            );
        };

        return (

            <div className="App">
            <Header />
            <Switch>
                <Route path="/home" component={HomePage}/>
                <Route exact path="/menu" component={()=><Menu dishes={this.props.dishes}/>} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={Contact} />
                <Route exact path='/aboutus' component={Aboutfunc} />
                <Redirect to="/home" />

            </Switch>

            <Footer />
            
        
          </div>
        );

    }
 
}

export default withRouter(connect(mapStateToProps)(Main));
