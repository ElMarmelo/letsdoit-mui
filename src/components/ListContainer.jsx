import { Box, Container, CssBaseline, TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskCard from "./TaskCard";
const ListContainer = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ my: 3, textAlign: "center" }}>
        <Box sx={{padding: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TextField
              color="primary"
              placeholder="Buy some eggs"
              variant="standard"
              sx={{ mx: 2 }}
            />
            <Button variant="contained" endIcon={<AddIcon />}>
              Add a new task
            </Button>
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 5
          }}>
            <TaskCard />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ListContainer;
