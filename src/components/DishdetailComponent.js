import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,Label,Col, Row } from 'reactstrap';
  import { Control, LocalForm, Errors } from 'react-redux-form';

import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


  
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
      class CommentForm extends Component{
        constructor(props){
          super(props);
          this.toggleModal = this.toggleModal.bind(this);
          
          this.handleSubmit = this.handleSubmit.bind(this);
           
          this.state = {
            
            isModalOpen: false
          };
        }
        handleSubmit(values) {
          this.toggleModal();
          console.log('Current State is: ' + JSON.stringify(values));
          alert('Current State is: ' + JSON.stringify(values));
      }
      
        toggleModal() {
          this.setState({
            isModalOpen: !this.state.isModalOpen
          });
        }
        render(){
          return(
            <div>
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={12}>
                                  <Label htmlFor="rating"> Rating </Label>
                                  <Control.select model=".contactType" name="contactType"
                                          className="form-control">
                                          <option>1</option>
                                          <option>2</option>
                                          <option>3</option>
                                          <option>4</option>
                                          <option>5</option>
                                          <option>6</option>
                                  </Control.select>
                                </Col>

                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                <Label htmlFor="yourname">Your Name</Label>
                                <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>

                            </Row>
                            <Row className="form-group">
                              <Col md={12}>
                                <Label htmlFor="message">Comment</Label>
                                
                                <Control.textarea model=".message" id="message" name="message"
                                                    rows="6"
                                                    className="form-control" />
                              </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>

                  </LocalForm>
                    
                </ModalBody>
              </Modal>
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            </div>
            
          )
          
        }
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
                <CommentForm/>

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
