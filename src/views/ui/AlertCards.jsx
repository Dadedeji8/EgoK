import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Table,
  Col,
  Badge,
  ButtonGroup,
  Button,
} from "reactstrap";
import "../../components/dashboard/cards.css";
import ApexChart from "../../components/dashboard/StudentChart";

const AlertCards = () => {
  return (
    <div>
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
                      <td>
                        {" "}
                        <Badge color="primary">View Students</Badge>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td>
                        {" "}
                        <Badge color="primary">View Students</Badge>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td>
                        {" "}
                        <Badge color="primary">View Students</Badge>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td>
                        {" "}
                        <Badge color="primary">View Students</Badge>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td>
                        {" "}
                        <Badge color="primary">View Students</Badge>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td>
                        {" "}
                        <Badge color="primary">View Students</Badge>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td>
                        {" "}
                        <Badge color="primary">View Students</Badge>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">27</th>
                      <td>SS1A</td>
                      <td>7323</td>
                      <td>69</td>
                      <td>
                        {" "}
                        <Badge color="primary">View Students</Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </CardBody>
      </Card>
      {/* the graph is below this is the STUDENT GRAPH */}
      {/* <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="fa fa-user-circle me-2" />
          CLASS GRAPH
        </CardTitle>
        <CardBody className="">
          <div>
            <ApexChart className="col" />
          </div>
        </CardBody>
      </Card> */}
    </div>
  );
};

export default AlertCards;
