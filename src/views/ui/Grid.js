// ----------------report-----------------


import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";


const Grid = () => {
  return (
    <div>

      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <h3>Report Form</h3>
          </CardTitle>
          <CardBody className="">
            <Container>
              <Form>
                <FormGroup>
                  <Label for="exampleText">Complaint</Label>
                  <Input id="exampleText" name="text" type="textarea" />
                  <Button color="primary " className="mt-4">Submit</Button>
                </FormGroup>
              </Form>
            </Container>
          </CardBody>
        </Card>

      </Col>

      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Grid;
