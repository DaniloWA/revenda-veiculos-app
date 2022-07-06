import React from "react";
import { change, login } from "../../store/actions/auth.action";
import { Navigate } from "react-router-dom";
import { Typography, TextField, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

export default function Auth() {
  const dispatch = useDispatch();
  const { credentials, success } = useSelector((state) => state.authReducer);

  return (
    <div className="d-flex bg-white min-vh-100">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="form-group text-center">
              <img src="/logo.png" alt="CAR CRM" height={48} />
              <Typography
                component="h1"
                variant="h6"
                className="mt-3 text-center"
              >
                Plataforma para revenda de veiculos
              </Typography>
            </div>

            <TextField
              label="Email"
              type="email"
              margin="normal"
              autoComplete="email"
              value={credentials.email}
              onChange={(text) =>
                dispatch(change({ email: text.target.value }))
              }
            />

            <TextField
              label="Senha"
              type="password"
              margin="normal"
              value={credentials.password}
              onChange={(text) =>
                dispatch(change({ password: text.target.value }))
              }
            />
            <Button
              variant="contained"
              className="mt-4 mb-4"
              color="primary"
              fullWidth
              size="large"
              onClick={() => dispatch(login(credentials))}
            >
              Entrar
            </Button>

            {success && <Navigate to="/vehicles" replace/>}
          </div>
        </div>
      </div>
    </div>
  );
}
