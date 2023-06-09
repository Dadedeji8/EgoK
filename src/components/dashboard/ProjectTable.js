import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "SS1",
    email: "hgover@gmail.com",
    project: "1/2/23",
    status: "1",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "SS2",
    email: "hgover@gmail.com",
    project: " 1/2/23",
    status: "554",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "SS3",
    email: "hgover@gmail.com",
    project: "1/2/23",
    status: "546",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "SS2",
    email: "hgover@gmail.com",
    project: "1/2/23",
    status: "5677",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "SS3",
    email: "hgover@gmail.com",
    project: "1/2/23",
    status: "7765",
    weeks: "35",
    budget: "95K",
  },
  , {
    avatar: user1,
    name: "SS2A",
    email: "hgover@gmail.com",
    project: "1/2/23",
    status: "7545",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "SS2A",
    email: "hgover@gmail.com",
    project: " 1/2/23",
    status: "4543",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "SS2A",
    email: "hgover@gmail.com",
    project: "1/2/23",
    status: "4533",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "SS2A",
    email: "hgover@gmail.com",
    project: "1/2/23",
    status: "536",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "SS2A",
    email: "hgover@gmail.com",
    project: "1/2/23",
    status: "3544",
    weeks: "35",
    budget: "95K",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Class List List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Payment History
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Student List</th>
                <th>Payment History </th>

                <th>Arrears List</th>
                <th>Student List</th>
                <th>View Mode</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">

                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>

                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  <td>
                    {tdata.status}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td><Button type="" className="btn btn-warning">View</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
