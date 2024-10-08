import "../../Styles/Styles.css";
import Logo from "../../assets/Tlaxcala.png";
import { Boton } from "../../components/Botones/Botones";
import { useState } from "react";
import { seccion_post } from "../../Services/cuadro.service";

export function Seccion() {
  const [ID, setID] = useState("");
  const [Codigo, setCode] = useState("");
  const [Descripcion, setDescripcion] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const Seccion = {
      id_seccion: ID,
      codigo: Codigo,
      descripcion: Descripcion,
    };

    try {
      const result = await seccion_post(Seccion);
      console.log("Respuesta de la APi:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <body className="Body_Cuadro">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      ></link>

      {/*Imagen de tlaxcala*/}
      <header className="Header_Logo">
        <div className="brandLogo">
          <img src={Logo} alt="Logo" width={300} />
        </div>

        <div className="H_Title">
          <h1 className="Header_Title">
            Cuadro General de Clasificación Archivística
          </h1>
        </div>
      </header>

      {/*Seccion*/}
      <div className="row">
        <div className="col-12 col-lg-18 m-auto">
          <form className="multisteps-form_form" onSubmit={handleSubmit}>
            <div
              className="multisteps-form_panel shadow p-4 rounded bg-white js-active"
              data-animation="scaleIm"
            >
              <h3 className="multisteps-form_title">Sección</h3>

              <div className="multisteps-form_v">
                <div className="form-row mt-4">
                  <div className="col-12 col-sm-6">
                    <label>ID Sección</label>
                    <input
                      className="multisteps-form_input form-control"
                      type="text"
                      placeholder="ID Sección"
                      value={ID}
                      onChange={(e) => setID(e.target.value)}
                    />
                  </div>

                  <div className="col-12 col-sm-6 mt-4 mt-sm-0">
                    <label>Código</label>
                    <input
                      className="multisteps-form_input form-control"
                      type="text"
                      placeholder="Código"
                      value={Codigo}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>

                  <div className="col-12 col-sm-6 mt-4 mt-sm-0">
                    <label>Descripción</label>
                    <input
                      className="multisteps-form_input form-control"
                      type="text"
                      placeholder="Decripción"
                      value={Descripcion}
                      onChange={(e) => setDescripcion(e.target.value)}
                    />
                  </div>

                  <div className="button-row d-flex mt-4">
                    <Boton>Enviar</Boton>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
}
