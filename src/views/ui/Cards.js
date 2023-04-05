import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
  Table,
  Badge,
} from "reactstrap";
import { TfiWallet  } from 'react-icons/tfi';
import "./general.css"
import { BsFillPersonCheckFill  } from 'react-icons/bs';

// import Blog from "../../components/dashboard/Blog";
// import bg1 from "../../assets/images/bg/bg1.jpg";
// import bg2 from "../../assets/images/bg/bg2.jpg";
// import bg3 from "../../assets/images/bg/bg3.jpg";
// import bg4 from "../../assets/images/bg/bg4.jpg";

// const BlogData = [
//   {
//     image: bg1,
//     title: "This is simple blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg2,
//     title: "Lets be simple blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg3,
//     title: "Don't Lamp blog",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
//   {
//     image: bg4,
//     title: "Simple is beautiful",
//     subtitle: "2 comments, 1 Like",
//     description:
//       "This is a wider card with supporting text below as a natural lead-in to additional content.",
//     btnbg: "primary",
//   },
// ];

const Cards = () => {
  return (
    <div>
     <Row>
      <Col>
        
     
     
     <Card>
         <CardTitle tag="h6" className="border-bottom p-3 mb-0">
           Students Highlights
         </CardTitle>
         <CardBody className=" card-container">
          <div className="card-container">
          <div className='flex-card cardborder rounded-2 '>
         <div className='icon-box'>
             <BsFillPersonCheckFill className='icon-card' />
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
    
     <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Transactions List
            </CardTitle>
            <CardBody className="">
            <Table  className="the-table">
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
    </div>
  );
};

export default Cards;
