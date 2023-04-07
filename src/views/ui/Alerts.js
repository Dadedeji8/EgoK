// classes-------------------------------------------------------

import React, { useState } from "react";
import {

  Card,
  CardBody,
  CardTitle,
  ButtonGroup,
  Button,

} from "reactstrap";
import '../../components/dashboard/cards.css'

import AlertCards from "./AlertCards";
import AlertGridView from "./AlertGridView";
import ApexChart from "../../components/dashboard/StudentChart";
const Alerts = () => {
  // For Dismiss Button with Alert


  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };
  const [showCard, setShowCard] = useState(true)


  const [showGrid, setShowGrid] = useState(false)

  const toggleShowGrid = () => {
    setShowGrid(true)
    setShowCard(false)
  }



  const toggleShowCards = () => {
    setShowCard(true)
    setShowGrid(false)
  }


  return (
    <div>


      <Card className="Rounded">
        <ButtonGroup>
          <Button onClick={toggleShowCards} color="primary">List View</Button><Button color="warning" onClick={toggleShowGrid} >Grid View</Button>
        </ButtonGroup>
      </Card>
      {showCard && (<AlertCards />)}
      {showGrid && (<AlertGridView />)}

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
