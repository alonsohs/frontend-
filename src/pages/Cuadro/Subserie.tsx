import "../../Styles/Styles.css";
import Logo from "../../assets/Tlaxcala.png";
import { Boton } from "../../components/Botones/Botones";
import { useState, useEffect } from "react";
import { serie_get, subserie_post } from "../../services/cuadro.service";
import { SubSerie } from "../../Producto";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";

export function Subserie() {
  const [subserie, setsubserie] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [serie, setserie] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [Subserie, setSubserie] = useState<SubSerie[]>([]);

  useEffect(() => {
    const fetchSubserie = async () => {
      const items = await serie_get();
      setSubserie(items);
    };
    fetchSubserie();
  }, []);

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (!subserie.trim() || !Descripcion.trim() || !serie.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "Debes llenar todos los campos para enviar el formulario",
      });
      return;
    }
    setIsLoading(true);

    const Subserie = {
      SubSerie: subserie,
      descripcion: Descripcion,
      serie: serie,
    };

    try {
      const result = await subserie_post(Subserie);
      console.log("Respuesta de la APi:", result);

      Swal.fire({
        icon: "success",
        title: "¡Exito!",
        text: "Se ha creado la subserie con exito",
      });

      setsubserie("");
      setDescripcion("");
      setserie("");
    } catch (error) {
      console.error("Error:", error);

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

      {/*Subserie*/}
      <div
        className="multisteps-form_panel shadow p-4 rounded bg-white"
        data-animation="scaleIn"
      >
        <h3 className="multisteps-form_title">Subserie</h3>

        <form action="" onSubmit={handleSubmit}>
          <div className="multisteps-form_content">
            <div className="row">
              <div className="col-12 col-sm-6">
                <label>Serie</label>
                <select
                  className="multisteps-form_select form-control"
                  value={serie}
                  onChange={(e) => setserie(e.target.value)}
                >
                  <option value="">Seleccione una opción</option>
                  {Subserie.map((subserie) => (
                    <option value={subserie.serie}> {subserie.serie}</option>
                  ))}
                </select>
              </div>

              <div className="col-12 col-sm-6">
                <label>Subserie</label>
                <input
                  className="multisteps-form_input form-control"
                  type="text"
                  placeholder="ID Subserie"
                  value={subserie}
                  onChange={(e) => setsubserie(e.target.value)}
                />
              </div>

              <div className="col-12 col-sm-6 mt-4 mt-sm-0">
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

            <div className="row">
              <div className="button-row d-flex mt-4 col-12">
                <Boton disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar"}
                </Boton>
              </div>
            </div>
          </div>
        </form>
      </div>
    </body>
  );
}
