import { Logo } from "../../components/Logo";
import { Boton } from "../../components/Botones/Botones";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ficha_post } from "../../services/ficha.services";
import { seccion, Serie, SubSerie } from "../../Producto";
import "../../Styles/Styles.css";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";
import {
  Seccion_get,
  serie_get,
  subserie_get,
} from "../../Services/cuadro.service";

export function Ficha() {
  const navigate = useNavigate();
  const [id_ficha, setID] = useState("");
  const [area_resguardante, setResguardante] = useState("");
  const [area_intervienen, setIntervienen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [soporte_docu, setSoporte] = useState("");
  const [id_seccion, setIdSeccion] = useState("");
  const [id_serie, setIdSerie] = useState("");
  const [id_subserie, setIdSubserie] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [secciones, setSeccion] = useState<seccion[]>([]);
  const [serie, setSerie] = useState<Serie[]>([]);
  const [subserie, setSubSerie] = useState<SubSerie[]>([]);

  useEffect(() => {
    const fetchSeccion = async () => {
      const items = await Seccion_get();
      setSeccion(items);
    };
    fetchSeccion();
  }, []);

  useEffect(() => {
    const fetchSerie = async () => {
      const items = await serie_get();
      setSerie(items);
    };
    fetchSerie();
  }, []);

  useEffect(() => {
    const fetchSubSerie = async () => {
      const items = await subserie_get();
      setSubSerie(items);
    };
    fetchSubSerie();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !id_ficha.trim() ||
      !area_resguardante.trim() ||
      !area_intervienen.trim() ||
      !descripcion.trim() ||
      !soporte_docu.trim() ||
      !id_seccion.trim() ||
      !id_serie.trim() ||
      !id_subserie.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "Debes llenar todos los campos para enviar el formulario",
      });
      return;
    }
    setIsLoading(true);

    const fichaData = {
      id_ficha: id_ficha,
      area_resguardante: area_resguardante,
      area_intervienen: area_intervienen,
      soporte_docu: soporte_docu,
      descripcion: descripcion,
      id_seccion: id_seccion,
      id_serie: id_serie,
      id_subserie: id_subserie,
    };

    try {
      const result = await ficha_post(fichaData);
      console.log("Respuesta de la API:", result);
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Datos enviados exitosamente.",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        navigate("/Ficha");
      });
    } catch (error) {
      console.error("Error al enviar datos:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al enviar los datos.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="Body_Ficha">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <header>
        <div>
          <Logo />
        </div>
        <div className="H_Title">
          <h1 className="Header_Title">
            Ficha Técnica de Valoración Documental
          </h1>
        </div>
      </header>
      <div className="row">
        <div className="col-12 col-lg-10 m-auto">
          <form className="multisteps-form_form" onSubmit={handleSubmit}>
            <div
              className="multisteps-form_panel shadow p-4 rounded bg-white js-active"
              data-animation="scaleIm"
            >
              <div className="form-row mt-4">
                <div className="col">
                  <label>ID Ficha </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="ID Ficha"
                    value={id_ficha}
                    onChange={(e) => setID(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Área Resguardante </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Área Resguardante"
                    value={area_resguardante}
                    onChange={(e) => setResguardante(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Áreas que Intervienen </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Áreas que Intervienen"
                    value={area_intervienen}
                    onChange={(e) => setIntervienen(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Descripción </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Soporte Documental </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Soporte Documental"
                    value={soporte_docu}
                    onChange={(e) => setSoporte(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>ID Sección </label>
                  <select
                    className="multisteps-form_input form-control"
                    name="seccion"
                    id="seccion"
                    value={id_seccion}
                    onChange={(e) => setIdSeccion(e.target.value)}
                  >
                    <option value="">Seleccione una opción</option>
                    {secciones.map((seccion) => (
                      <option
                        key={seccion.id_seccion}
                        value={seccion.id_seccion}
                      >
                        {seccion.id_seccion}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>ID Serie</label>
                  <select
                    className="multisteps-form_input form-control"
                    name="Serie"
                    id="Serie"
                    value={id_serie}
                    onChange={(e) => setIdSerie(e.target.value)}
                  >
                    <option value="">Seleccione una opción</option>
                    {serie.map((s) => (
                      <option key={s.serie} value={s.serie}>
                        {s.serie}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>ID Subserie </label>
                  <select
                    className="multisteps-form_input form-control"
                    name="Subserie"
                    id="Subserie"
                    value={id_subserie}
                    onChange={(e) => setIdSubserie(e.target.value)}
                  >
                    <option value="">Seleccione una opción</option>
                    {subserie.map((sub) => (
                      <option key={sub.SubSerie} value={sub.SubSerie}>
                        {sub.SubSerie}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="button-row d-flex mt-4">
                <Boton disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Enviar"}
                </Boton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
