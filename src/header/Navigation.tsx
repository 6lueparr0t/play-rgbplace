import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { red, grey } from '@mui/material/colors';

function Navigation() {
  return (
    <Box
      sx={{ flexGrow: 1, mb: 4 }}
    >
      <AppBar position="static" sx={{ backgroundColor: grey[900] }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            한줄코딩
          </Typography>
          <Button color="inherit" sx={{
            mr: 2 ,
            border: 1,
            color: grey[900],
            backgroundColor: grey[50],
              "&:hover" : {
                color: grey[50],
                backgroundColor: grey[900],
                borderColor: grey[50]
              }
            }}>
            로그인
          </Button>
          <Button color="inherit" sx={{
              color: grey[50],
              backgroundColor: red[800],
              "&:hover" : {
                color: grey[50],
                backgroundColor: red[900]
              }
            }}>
            회원가입
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;