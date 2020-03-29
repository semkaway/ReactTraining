import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null) {
      return(
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )
    } else {
      return(
        <div></div>
      )
    }
  }

  renderComments(comments) {

    if (comments != null) {

      const commentsList = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{ comment.comment }</p>
            <p>-- { comment.author }, { comment.date }</p>
          </li>
        )
      });

      return(
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            { commentsList }
          </ul>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }
  }

  render(){
    let comments = null

    if (this.props.dish != null) {
      comments = this.renderComments(this.props.dish.comments)
    }

    return(
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          { this.renderDish(this.props.dish) }
        </div>
        <div className="col-12 col-md-5 m-1">
          { comments }
        </div>
      </div>
    )
  }
}

export default DishDetail;