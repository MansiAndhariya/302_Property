import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,  
    Container,
    Row,
    Col,
    Table,
    Badge,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";
  import StaffMemberHeader from "components/Headers/StaffMemberHeader";
  import React from 'react';
  const StaffMember = () => {
    return (
      <>
        <StaffMemberHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Staff Members</h3>   
                </CardHeader>
  
  
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">NAME</th>
                      <th scope="col">DESIGNATION</th>
                      <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/* <td>1</td>
                      <td>Residential</td>
                      <td>Townhome</td>
                      <td>Edit</td> */}
                    </tr>   
                  </tbody>
                 </Table>   
              </Card>
              </div>
           </Row>
        </Container>
      </>
    );
  };
  
  export default StaffMember;
  
  