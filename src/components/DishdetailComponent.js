import React,{Component} from 'react';
import {Media} from 'reactstrap';
import { render } from '@testing-library/react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

  class DishDetail extends Component{
    //   constructor(props){
    //       super(props)
    //       this.state={
    //           selectedDish : this.props.dishes
    //       }
    //   }
      renderComments(comments){
        if(comments==null){
          return(
            <div>

            </div>
          )
        }
            
        else{
          let options = { year: 'numeric', month: 'short', day: 'numeric' };
          const commentSection=comments.map((comment)=>{
            return(
              <div key={comment.id}>
                <ul className="list-unstyled">
                  <li>
                    {comment.comment}
                  </li>
                  <li>
                    -- {comment.author} , <span>{new Date(comment.date).toLocaleDateString("en-US", options)}</span>
                  </li>
                </ul>
  
  
              </div>
  
            )
          })
          return commentSection

        }
        

      }
      render() {
        
        if (this.props.selectedDish != null){
            //const {image,name,description}=this.props
           // console.log(this.props.selectedDish.id)
           
            return(
              <div className="row">
                
                <div  className="col-12 col-md-5 m-1">
                  <Card>
                  <CardImg  width="100%" top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                  <CardBody>
                  <CardTitle><h2>{this.props.selectedDish.name}</h2></CardTitle>
                  <CardText>{this.props.selectedDish.description}</CardText>
                  </CardBody>
                  </Card>
                </div>

                  
                <div  className="col-12 col-md-5 m-1">
                  <h4>Comments</h4>
                  {this.renderComments(this.props.selectedDish.comments)}

                </div>
                
                
              </div>
               
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
  }

export default DishDetail;
