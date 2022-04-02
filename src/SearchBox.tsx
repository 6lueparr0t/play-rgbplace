import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';

function SearchBox() {
  return (
    <Box
      sx={{ flexGrow: 1, p: "0 20rem" }}
    >
      <Paper
      component="div"
      elevation={6}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
      }}>
        <InputBase
          sx={{ ml: 1, flex: 1, width: 400, color: grey[900] }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton type="submit" sx={{ p: "10px", color: grey[900] }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
}

export default SearchBox;