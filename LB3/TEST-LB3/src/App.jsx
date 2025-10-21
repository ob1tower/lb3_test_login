import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  InputAdornment,
  IconButton,
  Paper
} from '@mui/material';
import { AccountCircle, Visibility, VisibilityOff, Lock } from '@mui/icons-material';

const LoginApp = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'user123') {
      setUser(username);
      setLoggedIn(true);
      setErrorMsg('');
    } else {
      setErrorMsg('Ошибка! Неверное имя пользователя или пароль.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUser('');
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    return (
      <Box
        sx={{
          maxWidth: 450,
          margin: '120px auto',
          padding: 4,
          textAlign: 'center',
        }}
        component={Paper}
        elevation={3}
      >
        <Typography variant="h5" gutterBottom>
          Привет, {user}!
        </Typography>
        <Button
          id="logout-button"
          name="logout-button"
          variant="contained"
          color="error"
          onClick={handleLogout}
        >
          Выйти (Logout)
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 450,
        margin: '100px auto',
        padding: 4,
      }}
      component={Paper}
      elevation={3}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Авторизация
      </Typography>

      {errorMsg && (
        <Alert id="login-error-message" severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <form onSubmit={handleLogin}>
        <TextField
          id="username"
          name="username"
          label="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          required
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          id="password"
          name="password"
          label="Пароль"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  size="small"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          id="login-button"
          name="login-button"
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Войти
        </Button>
      </form>
    </Box>
  );
};

export default LoginApp;
