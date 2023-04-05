import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";
import Cards from "./Cards";
// const FeedData = [
//   {
//     title: "Cras justo odio",
//     icon: "bi bi-bell",
//     color: "primary",
//     date: "6 minute ago",
//   },
//   {
//     title: "New user registered.",
//     icon: "bi bi-person",
//     color: "info",
//     date: "6 minute ago",
//   },
//   {
//     title: "Server #1 overloaded.",
//     icon: "bi bi-hdd",
//     color: "danger",
//     date: "6 minute ago",
//   },
//   {
//     title: "New order received.",
//     icon: "bi bi-bag-check",
//     color: "success",
//     date: "6 minute ago",
//   },
//   {
//     title: "Cras justo odio",
//     icon: "bi bi-bell",
//     color: "dark",
//     date: "6 minute ago",
//   },
//   {
//     title: "Server #1 overloaded.",
//     icon: "bi bi-hdd",
//     color: "warning",
//     date: "6 minute ago",
//   },
// ];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5"></CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
        
        </CardSubtitle>
        <ListGroup flush className="mt-4">
       
            <ListGroupItem>

              <Cards/>
         
            </ListGroupItem>
          
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
