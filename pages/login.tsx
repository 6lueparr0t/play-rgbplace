import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Login.module.scss';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

const Login: NextPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" sx={{maxWidth:"sm"}}>
      <Box
          sx={{
            mt: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ m: 1, bgcolor: 'text.primary' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인 시뮬레이션
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField label="이메일 주소"
            margin="normal"
            required
            fullWidth
            name="email"
          />
          <TextField label="비밀번호"
            margin="normal"
            type="Password"
            required
            fullWidth
            name="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            sx={{userSelect:'none'}}
            control={<Checkbox value="remember" color="primary" />}
            label="로그인 정보 기억하기"
          />
          <Button type="submit"
            fullWidth
            variant="contained"
            sx={{mt:3, mb:2}}
          >
            로그인
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#">패스워드를 잃어버리셨나요?</Link>
            </Grid>
            <Grid item>
              <Link href="#">회원이 아니신가요? 회원가입을 하세요</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Login
