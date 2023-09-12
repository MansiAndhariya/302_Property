import React from 'react';
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
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Label,
  } from "reactstrap";

import { useState } from "react";
import AddStaffMemberHeader from 'components/Headers/AddStaffMemberHeader';
  
const AddStaffMember = () => {

    const [prodropdownOpen, setproDropdownOpen] = React.useState(false);
    
    const [selectedProp, setSelectedProp] = useState("Select");
    

    const toggle = () => setproDropdownOpen(prevState => !prevState);

    const [open, setOpen] = React.useState(false);

    const handlePropSelection = (value) => {
      setSelectedProp(value);
      setproDropdownOpen(true); 
    };

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };

    const handleChange = (e) => {
        // setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      };

    return (
      <>
        <AddStaffMemberHeader/>
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
          <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">New Staff Member</h3>
                    </Col>
                  </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                        <div className="pl-lg-4">
                        <Row>
                            <Col lg="6">
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-property"
                                        >
                                        What is the name of new staff member?
                                        </label><br/><br/>
                                        <Input
                                        className="form-control-alternative"
                                        id="input-protype"
                                        placeholder="John William"
                                        type="text"
                                        />
                                    </FormGroup>
                                </Col>
                        </Row>
                        <br/>
                        </div>
                        <hr className="my-4" />
                        <div className="pl-lg-4">
                        <Row>
                            <Col lg="6">
                                    <FormGroup>
                                        <label
                                        className="form-control-label"
                                        htmlFor="input-property"
                                        >
                                        What is the designation?
                                        </label><br/><br/>
                                        <Input
                                        className="form-control-alternative"
                                        id="input-protype"
                                        placeholder="Manager"
                                        type="text"
                                        />
                                    </FormGroup>
                                </Col>
                        </Row>
                        <br/>
                        </div>
                    </Form><br/>
                    <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                        style={{background:'green',width:'4rem'}}
                    >
                        Add
                    </Button>
                    <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                        style={{background:'white',color:'black'}}
                    >
                    Cancel
                    </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  
  export default AddStaffMember;
  