import React,{Component} from 'react';
import {Media} from 'reactstrap';
import { render } from '@testing-library/react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
        }
    }
    onDishSelect(dish) {
      this.setState({ selectedDish: dish});
    }
    render() {
      const menu = this.props.dishes.map((dish) => {
        return (
          <div key={dish.id}  className="col-12 col-md-5 m-1">
            <Card 
              onClick={() => this.onDishSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle><h2>{dish.name}</h2></CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        );
    });
        return (
          <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12">
                    <DishDetail selectedDish={this.state.selectedDish}/>
                   
                  </div>
                  
                </div>
          </div>
          
        );
    }
}

export default Menu;