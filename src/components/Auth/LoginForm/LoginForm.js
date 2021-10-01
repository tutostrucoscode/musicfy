import React, { useState } from "react";
import { Button, Icon, Form, Input } from "semantic-ui-react";
import { toast } from "react-toastify";
import { validateEmail } from "../../../utils/Validations";
import firebase from "../../../utils/Firebase";

import "./LoginForm.scss";

export default function LoginForm(props) {
  const { setSelectedForm } = props;

  const onSubmit = () => {
    console.log("Login..");
  };

  return (
    <div className="login-form">
      <h1>Musica para todos.</h1>

      <Form onSubmit={onSubmit}>
        <Form.Field>
          <Input
            type="text"
            name="email"
            placeholder="Correo electronico"
            icon="mail outline"
            //error={}
          />
          <Input
            type="password"
            name="password"
            placeholder="Contraseña"
            icon="eye"
            //error={}
          />
        </Form.Field>
        <Button type="submit">Iniciarr Sesion</Button>
      </Form>
      <div className="login-form__options">
        <p onClick={() => setSelectedForm(null)}>Volver</p>
        <p>
          No tienes cuenta?{" "}
          <span onClick={() => setSelectedForm("register")}>Registrarte</span>
        </p>
      </div>
    </div>
  );
}
