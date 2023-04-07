// ---------------Students---------------

import { Badge, Button, Card, CardBody, CardTitle, Row, Col, ButtonGroup } from "reactstrap";
import React from 'react'
import { Link } from "react-router-dom";
import './general.css'
import ApexChart from "../../components/dashboard/StudentChart";
import { CiBadgeDollar } from 'react-icons/ci';
import { CiUser } from 'react-icons/ci';
import { TbCurrencyDollarOff } from 'react-icons/tb';
import { Table } from "reactstrap";
import ProjectTables from "../../components/dashboard/ProjectTable";
import { RxCross1 } from 'react-icons/rx';
import { BiBarChartAlt } from 'react-icons/bi';
import { BsCheck2 } from 'react-icons/bs';
import { BiBarChartSquare } from 'react-icons/bi';



const Badges = () => {
  return (
    <div>

      <Row>
        <Col xs="12" md="12" sm="12">

          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Students Highlights
            </CardTitle>
            <CardBody className=" card-container">
              <div className='flex-card cardborder rounded-2 '>
                <div className='icon-box'>
                  <CiUser className='icon-card' />
                </div>
                <div className='cardtext'>
                  <h4 className='card-h4 lead text-secondary'>Total Student</h4>
                  <h2 className='card-h2'>2024</h2>
                </div>
              </div>
              <div className='flex-card cardborder rounded-2  text-white'>
                <div className='icon-box'>
                  <CiBadgeDollar className='icon-card' />
                </div>
                <div className='cardtext'>
                  <h4 className='card-h4 lead text-secondary'> Student Paid</h4>
                  <h2 className='card-h2'>224</h2>
                </div>
              </div>
              <div className='flex-card cardborder rounded-2 '>
                <div className='icon-box'>
                  <TbCurrencyDollarOff className='icon-card' />
                </div>
                <div className='cardtext'>
                  <h4 className='card-h4 lead text-secondary'> Student Not Paid</h4>
                  <h2 className='card-h2'>201</h2>
                </div>
              </div>


            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="12" sm="12">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-2*/}
          {/* --------------------------------------------------------------------------------*/}

          <Card className="Rounded">
            <ButtonGroup>
              <Button color="primary">All Students</Button><Button color="warning"><Link to="../About.js">Grid View</Link></Button>
            </ButtonGroup>
          </Card>

          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">

            </CardTitle>
            <CardBody className="">

              <ApexChart />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Badges with Contextual variations
            </CardTitle>
            <CardBody className="">

              <Table className="the-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Class Name</th>
                    <th>Collection</th>
                    <th>Total</th>
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
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-4*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Departments
            </CardTitle>
            <CardBody className="">
              <ProjectTables />

            </CardBody>
          </Card>
        </Col>

      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Badges;
