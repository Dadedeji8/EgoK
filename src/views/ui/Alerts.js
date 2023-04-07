// classes-------------------------------------------------------

import React, { useState } from "react";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle, Table,
  TabContentProps,
  TabContent, Row,
  Col,
  Badge,
  ButtonGroup,
  Button,
  Modal, ModalBody, ModalHeader
} from "reactstrap";
import '../../components/dashboard/cards.css'

import AlertCards from "./AlertCards";

import ApexChart from "../../components/dashboard/StudentChart";
const Alerts = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };
  const [showCard, setShowCard] = useState(true)
  const toggleShowCards = () => {
    setShowCard(!showCard)
    console.log(showCard)
  }

  return (
    <div>


      <Card className="Rounded">
        <ButtonGroup>
          <Button onClick={toggleShowCards} color="primary">List View</Button><Button color="warning" onClick={toggleShowCards} >Grid View</Button>
        </ButtonGroup>
      </Card>
      {showCard && (<AlertCards />)}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="fa fa-user-circle me-2" />
          CLASS GRAPH
        </CardTitle>
        <CardBody className="">
          <div>
            <ApexChart className="col" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Alerts;
