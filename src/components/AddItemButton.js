import React from 'react'
import { Button, TextField } from '@material-ui/core';

const AddItemButton = ({onAddClick}) => (
    <div>
    <TextField id='text' label="What's on your mind?"></TextField>
    <Button variant="raised" color="primary" onClick={() => onAddClick(document.getElementById('text').value)}>
    Add item
   </Button>
   </div>
)

export default AddItemButton