import React from "react";
import { Box, Container, CssBaseline, TextField, Button } from "@mui/material";
import { indigo } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';

const ListContainer = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ my: 3, textAlign: "center" }}>
        <Box sx={{ background: indigo[50], boxShadow: 3, padding: 5 }}>
          <Box sx={{display: 'flex', flexDirection: "row", justifyContent: "center"}}>
            <TextField
              color="primary"
              placeholder="Buy some eggs"
              variant="standard"
              sx={{mx: 2}}
            />
            <Button variant="contained" endIcon={<AddIcon/>}>Add a new task</Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ListContainer;
