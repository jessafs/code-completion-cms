// Create a react functional component named Dashboard and export it
// from the server using axios 
import React, { useState, useEffect } from 'react';
import "./style.css";
import {
  Button,
  TablePagination,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModalView from './ModalView'

import helper from '../helper'

const url = "http://localhost:4001/api"

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [btnAction, setBtnAction] = useState(true);
  const handleClose = () => setOpen(false);


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);


  // Create an initial state for first_name, last_name, billing_address and physical_address



  let initialState = {
    first_name: '',
    last_name: '',
    billing_address: '',
    physical_address: ''
  };
  
  const [contact, setContact] = useState(initialState)
  const [contactList, setContactList] = useState([])

  const handleOpen = () => setOpen(true);
  const openCreate = () => {
    setBtnAction(true);
    handleOpen();
  };
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  // Create an arrorw function named handleContactInput with event parameter that set the state from its value


  const handleContactInput = (event) => {
    setContact({ [event.target.name]: event.target.value });
  };
  // const handleContactInput = (event) => {
  //   const { value, name } = event.target
  //   setContact({ ...contact, [name]: value })
  // }
  const handleReset = () => {
    setContact({
      first_name: '',
      last_name: '',
      physical_address: '',
      billing_address: ''
    })
  }

  // Create an asynchronous function named handleAddContact that calls a post axios function

  const handleAddContact = async () => {
    try {
      const response = await helper.post(`${url}/addContact`, contact);
      setContactList([...contactList, response.data])
      handleReset()
      handleClose()
    } catch (error) {
      console.error(error);
    }
  };

  // Create an aynchronous function named handleGetAllContact that calls a get axios function
  const handleGetAllContact = async () => {
    try {
      const { data } = await helper.get(`${url}/getAllContacts`);
      setContactList(data.data??[])
      // return response.data; instead of return we will set the data to our array list
    } catch (error) {
      console.log(error);
    }
  };


  // Create an aynchronous function named handleDeleteContact that calls a delete axios function
  const handleDeleteContact = async (id) => {
    try {
      await helper.delete(`${url}/deleteContact/${id}`);
      const newContact = contactList.filter((i) => i._id !== id)
      setContactList(newContact)
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenUpdateModal = async (id) => {
    const user = contactList.find((data) => id === data._id)
    setBtnAction(false);
    setContact(user);
    handleOpen(true);
  };

  // Create an aynchronous function named handleEditContact that calls a put axios function
  const handleEditContact = async (contactId) => {
    try {
      await helper.put(`${url}/updateContact/${contactId}`, contact);
      handleReset()
      handleClose()
      handleGetAllContact()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetAllContact()
  }, []);



  return (
    <div>
      <div className="title">Contact Management System</div>
      <div className="buttonCreate">
        <Button variant="contained" onClick={openCreate}>
          Add Contact
        </Button>
      </div>
      <ModalView
        handleClose={handleClose}
        open={open}
        btnAction={btnAction}
        handleContactInput={handleContactInput}
        contact={contact}
        handleAddContact={handleAddContact}
        handleEditContact={handleEditContact}
      />
      <Paper sx={{ maxWidth: 1000, margin: "auto", top: 500 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  First Name
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Last Name
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  Physical Address
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  Billing Address
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(contactList.length) ? (
                contactList
                  .map((contact, i) => {
                    const {
                      first_name,
                      last_name,
                      physical_address,
                      billing_address,
                      _id
                    } = contact;
                    return (
                      <TableRow hover role="checkbox" key={i}>
                        <TableCell align="center" colSpan={2}>
                          {first_name}
                        </TableCell>
                        <TableCell align="center" colSpan={2}>
                          {last_name}
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                          {physical_address}
                        </TableCell>
                        <TableCell align="center" colSpan={3}>
                          {billing_address}
                        </TableCell>
                        <TableCell align="center" colSpan={2}>
                          <span>
                            <EditOutlinedIcon
                              style={{ color: "green" }}
                              onClick={() => handleOpenUpdateModal(_id)}
                            ></EditOutlinedIcon>
                          </span>
                          <span>
                            <DeleteOutlineOutlinedIcon
                              style={{ color: "red" }}
                              onClick={() => handleDeleteContact(_id)}
                            ></DeleteOutlineOutlinedIcon>
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={12}>
                    No Data Available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={contactList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
    </div>
  );
};
export default Dashboard;