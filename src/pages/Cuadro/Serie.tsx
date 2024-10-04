import "../../Styles/Styles.css";
import Logo from "../../assets/Tlaxcala.png";
import { Boton } from "../../components/Botones/Botones";
import { useEffect, useState } from "react";
import { Seccion_get } from "../../services/cuadro.service";
import { seccion } from "../../Producto";
import { serie_post } from "../../services/cuadro.service";

export function Serie() {
  const [ID, setID] = useState("");
  const [Serie, setSerie] = useState("");
  const [Codigo, setCode] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [ID_seccion, setId_seccion] = useState("");
  const [secciones, setSeccion] = useState<seccion[]>([]);

  useEffect(() => {
    const fetchSeccion = async () => {
      try {
        const items = await Seccion_get();
        console.log(items);

        setSeccion(items);
      } catch (error) {
        console.error("Error al obtener las secciones:", error);
      }
    };
    fetchSeccion();
  }, []);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const serie = {
      id_serie: ID,
      serie: Serie,
      codigo_serie: Codigo,
      descripcion: Descripcion,
      id_seccion: ID_seccion,
    };

    try {
      const result = await serie_post(serie);
      console.log("Respuesta de la APi:", result);
    } catch (error) {
      console.error("Error:", error);
    }

    useEffect(() => {
      const fetchSeccion = async () => {
        const items = await Seccion_get();
        setSeccion(items);
      };
      fetchSeccion();
    }, []);
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
            Cuadro General de clasificacion Archivistica
          </h1>
        </div>
      </header>

      {/*Serie*/}

      <div
        className="multisteps-form_panel shadow p-4 rounded bg-white"
        data-animation="scaleIn"
      >
        <h3 className="multisteps-form_title">Serie</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="multisteps-form_content">
            <div className="form-row" mt-4>
              {/*Id seccion*/}
              <div className="col-6 col-sm-3 mt-4 mt-4 mt-sm-0">
                <label>Seccion</label>
                <select
                  name="seccion"
                  id="seccion"
                  value={ID_seccion}
                  onChange={(e) => setId_seccion(e.target.value)}
                >
                  {secciones.map((seccion) => (
                    <option value={seccion.id_seccion}>
                      {" "}
                      {seccion.id_seccion}
                    </option>
                  ))}
                </select>
              </div>

              {/*ID Serie*/}
              <div className="col">
                <label>ID Serie</label>
                <input
                  className="multisteps-form_input form-control"
                  type="Select-box"
                  placeholder="ID Serie"
                  value={ID}
                  onChange={(e) => setID(e.target.value)}
                />
              </div>

              {/*Serie*/}
              <div className="col">
                <label>Serie</label>
                <input
                  className="multisteps-form_input form-control"
                  type="Select-box"
                  placeholder="Serie"
                  value={Serie}
                  onChange={(e) => setSerie(e.target.value)}
                />
              </div>

              {/*Codigo*/}
              <div className="col">
                <label>Codigo</label>
                <input
                  className="multisteps-form_input form-control"
                  type="Select-box"
                  placeholder="Codigo"
                  value={Codigo}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>

              {/*Descripcion*/}
              <div className="form-row mt-4">
                <div className="col">
                  <label>Descripcion</label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Descripcion"
                    value={Descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>
              </div>

              {/*Botones Anterior y Siguiente*/}
              <div className="button-row d-flex mt-4">
                <Boton>Enviar</Boton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
}
