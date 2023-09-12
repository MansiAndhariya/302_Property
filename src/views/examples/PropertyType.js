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
} from "reactstrap";
import {
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PropertyTypeHeader from "components/Headers/PropertyTypeHeader";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const PropertyType = () => {

  let [propertyData, setPropertyData] = useState();
  const [open, setOpen] = React.useState(false);
  const [isEditDialogOpen, setEditDialogOpen] = React.useState(false);
  const [editingProperty, setEditingProperty] = React.useState(null);

  // let getPropertyData = async () => {
  //   let responce = await axios.get("https://rms-node-9f9ec5119d40.herokuapp.com/newproparty/newproparty");
  //   setPropertyData(responce.data.data);
  // };

  const openEditDialog = (property) => {
    setEditingProperty(property);
    setEditDialogOpen(true);
  };

  const closeEditDialog = () => {
    setEditDialogOpen(false);
    setEditingProperty(null);
  };

  const getPropertyData = async () => {
    try {
      const response = await axios.get("https://rms-node-9f9ec5119d40.herokuapp.com/newproparty/newproparty");
      setPropertyData(response.data.data);
    } catch (error) {
      console.error("Error fetching property data:", error);
    }
  };

  const editPropertyData = async (id, updatedData) => {
    try {
      const editUrl = `https://rms-node-9f9ec5119d40.herokuapp.com/newproparty/proparty-type/${id}`;
      console.log("Edit URL:", editUrl);
      console.log("Property ID:", id);
      console.log("Updated Data:", updatedData); // Log the updated data for debugging
  
      const response = await axios.put(editUrl, updatedData); // Send the updated data in the request body
      console.log("Edit Response:", response);
  
      if (response.status === 200) {
        getPropertyData(); // Refresh the data after successful edit
      } else {
        console.error("Edit request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error editing property:", error);
    }
  };
  

  const deleteProperty = async (id) => {
    try {
      const deleteUrl = `https://rms-node-9f9ec5119d40.herokuapp.com/newproparty/newproparty/${id}`;
      console.log("DELETE URL:", deleteUrl);
      console.log("Property ID:", id); // Debugging line
  
      const response = await axios.delete(deleteUrl);
      console.log("DELETE Response:", response);
  
      if (response.status === 200) {
        getPropertyData(); // Refresh the data after successful deletion
      } else {
        console.error("Delete request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };
  
  //  const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
      setOpen(false);
    };

  useEffect(() => {
    getPropertyData();
  }, []);
  
  return (
    <>
      <PropertyTypeHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Property Types</h3>   
              </CardHeader>


              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    {/* <th scope="col">Property_ID</th> */}
                    <th scope="col">Main Type</th>
                    <th scope="col">Sub Type</th>
                    <th scope="col">Action</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {propertyData?.map((property) => (
                    <tr key={property._id}>

                      <td>{property.property_type}</td>
                      <td>{property.propertysub_type}</td>
                      <td>
                        <div>
                          <div style={{ cursor: "pointer" }}
                            onClick={() => deleteProperty(property._id)}>
                            <DeleteIcon />
                          </div>
                          <div style={{ cursor: "pointer" }}
                            onClick={() => openEditDialog(property)}>
                            <EditIcon />
                          </div>
                        </div>
                      </td>
                    </tr>))}
                </tbody>
              </Table>
            </Card>
            </div>
         </Row>
      </Container>
                  <Dialog open={isEditDialogOpen}
                      onClose={closeEditDialog}
                      maxWidth="sm"
                      fullWidth>
                        <DialogTitle style={{ background: '#F0F8FF' }}>Update</DialogTitle>
                        <DialogContent style={{ width: '100%', maxWidth: '500px' }}>
                        <TextField
                          label="Property Type"
                          variant="outlined"
                          fullWidth
                          value={editingProperty?.property_type || ""}
                          onChange={(e) => {
                            const newValue = e.target.value;
                            setEditingProperty((prev) => ({
                              ...prev,
                              property_type: newValue,
                            }));
                          }}
                        />
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-property"
                          >
                            What is the property sub type?
                          </label>
                          <br />
                          <br />
                          <Input
                            className="form-control-alternative"
                            id="input-protype"
                            
                            type="text"
                            name="propertysub_type"
                            // onBlur={propertyFormik.handleBlur}
                            // onChange={propertyFormik.handleChange}
                            // value={propertyFormik.values.propertysub_type}
                          />
                          </FormGroup>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={closeEditDialog}>Cancel</Button>
                        <Button
                          onClick={() => {
                            // Handle the update logic here
                            // Call editPropertyData(editingProperty._id, editingProperty) or similar
                            closeEditDialog();
                          }}
                          color="primary"
                        >
                          Save
                        </Button>
                        </DialogActions>
                      </Dialog>
    </>
  );
};

export default PropertyType;

