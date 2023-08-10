// Create a react functional component named Modal and export itimport React from 'react';
import React from 'react';
import { Modal, Fade, Box, Typography, Button, TextField, Backdrop, Paper } from '@mui/material';
import "./style.css";
const ModalView = (props) => {
  const { open, handleClose, btnAction, contact, handleContactInput, handleAddContact,handleEditContact } = props
  const { first_name,last_name,physical_address,billing_address,_id} = contact
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Paper>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...style, textAlign: "center" }}>
            <Typography style={{ textAlign: "center" }} component={"div"}>
              {btnAction ? "Create User Contact" : "Update User Contact"}
            </Typography>
            <Typography
              id="transition-modal-title"
              sx={{ mt: 2 }}
              variant="h6"
              component={"div"}
            >
              <TextField
                sx={{ width: 250 }}
                id="standard-basic"
                required
                label="First Name"
                name="first_name"
                value={first_name ?? ""}
                variant="standard"
                onChange={(e) =>
                  handleContactInput(e)
                }
              />
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
              component={"div"}
            >
              <TextField
                id="standard-basic"
                required
                label="Last Name"
                sx={{ width: 250 }}
                name="last_name"
                value={last_name ?? ""}
                variant="standard"
                onChange={(e) =>
                  handleContactInput(e)
                }
              />
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
              component={"div"}
            >
              <TextField
                id="standard-basic"
                sx={{ width: 250 }}
                label="Physical Address"
                name="physical_address"
                value={physical_address ?? ""}
                variant="standard"
                required
                onChange={(e) =>
                  handleContactInput(e)
                }
              />
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
              component={"div"}
            >
              <TextField
                id="standard-basic"
                required
                sx={{ width: 250 }}
                label="Billing Address"
                name="billing_address"
                value={billing_address ?? ""}
                variant="standard"
                onChange={(e) =>
                  handleContactInput(e)
                }
              />
            </Typography>
            {btnAction ? (
              <Button
                variant="contained"
                sx={{ top: 10 }}
                onClick={handleAddContact}
              >
                Add Contact
              </Button>
            ) : (
              <Button
                variant="contained"
                sx={{ top: 10 }}
              onClick={() => handleEditContact(_id,contact)}
              >
                Update Contact
              </Button>
            )}
          </Box>
        </Fade>
      </Modal>
    </Paper>
  );
};
export default ModalView;

// create an Express app that uses mongoDB to connect to the database 'contacts' which contains name, age, birthday, work_address, email, and contact number