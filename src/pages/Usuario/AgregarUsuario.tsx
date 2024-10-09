import "../../Styles/Styles.css";
import Logo from "../../assets/Tlaxcala.png";
import { Boton } from "../../components/Botones/Botones";
import { useState } from "react";
import { user_post } from "../../services/user.services";
import Swal from "sweetalert2";

export function AgregarUsuario() {
  const [name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [UA, setUA] = useState("");
  const [cargo, setCargo] = useState("");
  const [password, setPassword] = useState("");
  const [Repass, setRepass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (
      !name.trim() ||
      !last_name.trim() ||
      !username.trim() ||
      !email.trim() ||
      !UA.trim() ||
      !cargo.trim() ||
      !password.trim() ||
      !Repass.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "Todos los campos son obligatorios",
      });
      return;
    }
    setIsLoading(true);

    const Register = {
      first_name: name,
      last_name: last_name,
      username: username,
      email: email,
      unidad_admi: UA,
      cargo: cargo,
      password: password,
    };

    try {
      const result = await user_post(Register);
      console.log("Respuesta de la API", result);

      Swal.fire({
        icon: "success",
        title: "¡Exito!",
        text: "Usuario creado con exito",
      });

      setName("");
      setLastName("");
      setUsername("");
      setEmail("");
      setUA("");
      setCargo("");
      setPassword("");
    } catch (error) {
      console.log("Error", error);

      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Algo salio mal. Por favor intente de nuevo",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <body>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      ></link>
      <img className="Logo_imgRU" src={Logo} alt="" width={"25%"} />
      <div className="layoutAuthentication">
        <div className="layoutAuthentication_content">
          <main>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      {" "}
                      <h3 className="text-center font-weight-light my-4">
                        {" "}
                        Registro de Usuarios
                      </h3>
                    </div>
                    <div className="card-body">
                      <form action="" onSubmit={handleSubmit}>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                id="inputName"
                                type="text"
                                placeholder="Ingresa tu usuario"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                              <label htmlFor="inputName">Nombre</label>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                id="inputLastName"
                                type="text"
                                placeholder="Ingresa tu Apellido"
                                value={last_name}
                                onChange={(e) => setLastName(e.target.value)}
                              />
                              <label htmlFor="inputLastName">Apellido</label>
                            </div>
                          </div>
                        </div>

                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputLastName"
                            type="text"
                            placeholder="Ingresa tu usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <label htmlFor="inputLastName">
                            Nombre de usuario
                          </label>
                        </div>

                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputEmail"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <label htmlFor="inputEmail">Correo Electrónico</label>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                id="inputUA"
                                type="text"
                                placeholder="Coloca tu unidad administrativa"
                                value={UA}
                                onChange={(e) => setUA(e.target.value)}
                              />
                              <label htmlFor="inputUA">
                                Unidad Adminitrativa
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                id="inputCargo"
                                type="text"
                                placeholder="Coloca el cargo"
                                value={cargo}
                                onChange={(e) => setCargo(e.target.value)}
                              />
                              <label htmlFor="input Cargo">Cargo</label>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                id="inputPass"
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <label htmlFor="inputPass">Contraseña</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                id="inputRePass"
                                type="password"
                                placeholder="Confirma la contraseña"
                                value={Repass}
                                onChange={(e) => setRepass(e.target.value)}
                              />
                              <label htmlFor="inputRePass">
                                Confirma la contraseña
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="">
                          <div className="">
                            <Boton disabled={isLoading}>
                              {isLoading ? "Enviando..." : "Enviar"}
                            </Boton>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </body>
  );
}
