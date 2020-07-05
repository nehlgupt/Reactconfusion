import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


  
      function RenderComments({comments}){
        if(comments==null){
          return(
            <div>

            </div>
          );
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
  
            );
          })
          return commentSection;

        }
      }
      function RenderDish({selectedDish}){
        return(
          <Card>
                <CardImg   top src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                <CardTitle><h2>{selectedDish.name}</h2></CardTitle>
                <CardText>{selectedDish.description}</CardText>
                </CardBody>
          </Card>

        )
      }
      
      
      const DishDetail=(props)=>{
        if (props.selectedDish != null){
         
         return(
          <div className="container" >
            <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.selectedDish.name}</h3>
                        <hr />
                    </div>                
            </div>
            
            <div className="row">
              
              <div  className="col-12 col-md-5 m-1">
                <RenderDish selectedDish={props.selectedDish}/>
              </div>

                
              <div  className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <RenderComments comments={props.comments}/>

              </div>
              
              
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
       
    
  

export default DishDetail;
