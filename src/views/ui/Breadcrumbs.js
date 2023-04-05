// ----------Transactions--------------

import {
  Row,
  Col,
  Card,
  Button,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  
} from "reactstrap";

const Breadcrumbs = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card className="col-8 m-auto">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-link me-2"> </i>
            
          </CardTitle>
          <CardBody className="">
          <Container>
            <Form>
              <FormGroup>
              <Label for="exampleText">Verify Payment</Label>
                <Input id="exampleText" name="text" type="text" placeholder="Input Registration Number" />
                <Button color="primary " className="mt-4">Submit</Button>
              </FormGroup>
            </Form>
          </Container>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Breadcrumbs;
