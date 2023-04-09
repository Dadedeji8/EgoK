// ---------------------------sessions----------------------

import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  Row,
  ButtonProps,

  Col,
  Badge,
} from "reactstrap";

import './general.css'
import ApexChart from "../../components/dashboard/StudentChart";
import { TfiWallet } from 'react-icons/tfi';
import { CiUser } from 'react-icons/ci';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { Table } from "reactstrap";
import ProjectTables from "../../components/dashboard/ProjectTable";
import SalesChart from "../../components/dashboard/SalesChart";





const Buttons = () => {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

  const onRadioBtnClick = (rSelected) => {
    setRSelected(rSelected);
  };

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  return (
    <div>



      <Row>
        <Col xs="12" md="12">



          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              Students Highlights
            </CardTitle>
            <CardBody className=" card-container">
              <div className="card-container">
                <div className='flex-card cardborder rounded-2 '>
                  <div className='icon-box'>
                    <CiUser className='icon-card' />
                  </div>
                  <div className='cardtext'>
                    <h4 className='card-h4 lead text-secondary'>Total Student</h4>
                    <h2 className='card-h2'>2024</h2>
                  </div>
                </div>
                <div className='flex-card cardborder rounded-2 '>
                  <div className='icon-box'>
                    <TfiWallet className='icon-card' />
                  </div>
                  <div className='cardtext'>
                    <h4 className='card-h4 lead text-secondary'> Student Paid</h4>
                    <h2 className='card-h2'>224</h2>
                  </div>
                </div>
                <div className='flex-card cardborder rounded-2 '>
                  <div className='icon-box'>
                    <BsFillPersonCheckFill className='icon-card' />
                  </div>
                  <div className='cardtext'>
                    <h4 className='card-h4 lead text-secondary'> Student Not Paid</h4>
                    <h2 className='card-h2'>201</h2>
                  </div>
                </div>

              </div>

            </CardBody>
          </Card>
        </Col>

        <Col xs="12" md="12">

          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <b>Terms/ Session</b> list
            </CardTitle>
            <CardBody className="">
              <SalesChart />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" md="12">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-card-text me-2"> </i>
              Table with Striped
            </CardTitle>
            <CardBody className="">
              <Table className="the-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Terms/Session</th>
                    <th>Collection</th>
                    <th>Arrears</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className="lead">
                  <tr>
                    <th scope="row">27</th>
                    <td>First Term</td>
                    <td>7323</td>
                    <td>69</td>
                    <td> <Badge color="primary" className="outline: ">MEDL</Badge></td>
                  </tr>
                  <tr>
                    <th scope="row">27</th>
                    <td>First Term</td>
                    <td>7323</td>
                    <td>69</td>
                    <td> <Badge color="secondary">CAL</Badge></td>
                  </tr>
                  <tr>
                    <th scope="row">27</th>
                    <td>First Term</td>
                    <td>7323</td>
                    <td>69</td>
                    <td> <Badge color="danger">MKKL</Badge></td>
                  </tr>
                  <tr>
                    <th scope="row">27</th>
                    <td>First Term</td>
                    <td>7323</td>
                    <td>69</td>
                    <td> <Badge color="success">MSS</Badge></td>
                  </tr>
                  <tr>
                    <th scope="row">27</th>
                    <td>First Term</td>
                    <td>7323</td>
                    <td>69</td>
                    <td> <Badge color="primary">LLRT</Badge></td>
                  </tr>
                  <tr>
                    <th scope="row">27</th>
                    <td>First Term</td>
                    <td>7323</td>
                    <td>69</td>
                    <td> <Badge color="primary">SRCC</Badge></td>
                  </tr>
                  <tr>
                    <th scope="row">27</th>
                    <td>First Term</td>
                    <td>7323</td>
                    <td>69</td>
                    <td> <Badge color="success">KTW</Badge></td>
                  </tr>
                  <tr>
                    <th scope="row">27</th>
                    <td>First Term</td>
                    <td>7323</td>
                    <td>69</td>
                    <td> <Badge color="warning">JSN</Badge></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>

      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Buttons;
