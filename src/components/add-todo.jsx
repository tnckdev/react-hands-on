import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

// * AddTodo component
// * Task 6: Continues
const AddTodo = ({ handleAddTodo }) => {
  const [addTask, setAddTask] = useState("");
  // * Task 6: Ends here

  // * Task 7: Starts here

  function handleChange(event) {
    setAddTask(event.target.value);
  }

  // * Task 7: Continues to TextField component below

  return (
    <>
      <Grid container spacing={1} sx={{ py: 2 }}>
        <Grid size="grow">
          <TextField
            fullWidth
            placeholder="Add a to-do"
            size="small"
            // * Task 7: Continues
            onChange={(event) => handleChange(event)}
            // * Task 7: Ends here
          />
        </Grid>

        <Button
          variant="contained"
          // * Task 6: Continue
          onClick={() => handleAddTodo(addTask)}
          // * Task 6: Ends here
        >
          Add
        </Button>
      </Grid>
    </>
  );
};

export default AddTodo;
