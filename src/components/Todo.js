import React from "react";
import Draggable from "react-draggable";
import {
  Card,
  CardImg,
  CardText,
  CardHeader,
  CardBody,
  Button
} from "reactstrap";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    //console.log(this.props);
    const { text } = this.props;
    return (
      <Draggable>
        <Card style={{ width: 20 + "vw" }}>
          <CardHeader>Modal</CardHeader>
          <CardBody>
            <CardText>{text}</CardText>
          </CardBody>
        </Card>
      </Draggable>
    );
  }
}
