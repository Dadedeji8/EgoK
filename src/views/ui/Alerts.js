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
} from "reactstrap";
import '../../components/dashboard/cards.css'
import ApexChart from "../../components/dashboard/StudentChart";
const Alerts = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card className="Rounded">
        <ButtonGroup>
          <Button color="primary">List View</Button><Button color="warning">Grid View</Button>
        </ButtonGroup>
      </Card>
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Class Graph
        </CardTitle>
        <CardBody className="">
          <div className="mt-3">
            <h2 className="text-primary">CLASSES</h2>
          </div>
          <Col lg="12">
            <Card>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <i className="bi bi-card-text me-2"> </i>
                <b>Class</b> List
              </CardTitle>
              <CardBody className="">
                <Table className="the-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Class Name</th>
                      <th>Collection</th>
                      <th>Total Students</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className="lead">
                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td> <Badge color="primary">MEDL</Badge></td>
                    </tr>
                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td> <Badge color="secondary">CAL</Badge></td>
                    </tr>
                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td> <Badge color="danger">MKKL</Badge></td>
                    </tr>
                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td> <Badge color="success">MSS</Badge></td>
                    </tr>
                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td> <Badge color="primary">LLRT</Badge></td>
                    </tr>
                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td> <Badge color="primary">SRCC</Badge></td>
                    </tr>
                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td> <Badge color="success">KTW</Badge></td>
                    </tr>
                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td> <Badge color="warning">JSN</Badge></td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </CardBody>
      </Card>
      {/* the graph is below this is the STUDENT GRAPH */}
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
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-3*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Alerts;
