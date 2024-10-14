import { Logo } from "../../components/Logo";
import { Boton } from "../../components/Botones/Botones";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/Styles.css";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";
import {
  Seccion_get,
  serie_get,
  subserie_get,
} from "../../services/cuadro.service";
import { seccion, serie, SubSerie } from "../../Producto";
import { portada_post } from "../../services/portada.services";
import { ficha_get } from "../../services/ficha.services";
import { catalogo_get } from "../../services/catalogo.service";
import { ficha } from "../../services/var.ficha";
import { catalogo } from "../../services/var.catalogo";
import { Portada } from "../../services/var.portada";

export function PortadaComponent() {
  const navigate = useNavigate();
  const [portada, setPortada] = useState<Portada>(new Portada());

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setPortada((prevPortada) => ({
      ...prevPortada,
      [name]: value,
    }));
  };

  const [isLoading, setIsLoading] = useState(false);

  const [secciones, setSeccion] = useState<seccion[]>([]);
  const [id_serie, setSerie] = useState<serie[]>([]);
  const [id_subserie, setSubSerie] = useState<SubSerie[]>([]);
  const [id_ficha, setIdFicha] = useState<ficha[]>([]);
  const [id_catalogo, setIdCatalogo] = useState<catalogo[]>([]);

  useEffect(() => {
    const fetchFicha = async () => {
      const items = await ficha_get();
      setIdFicha(items);
    };
    fetchFicha();
  }, []);

  useEffect(() => {
    const fetchCatalogo = async () => {
      const items = await catalogo_get();
      setIdCatalogo(items);
    };
    fetchCatalogo();
  }, []);

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
      !portada.num_expediente.trim() ||
      !portada.asunto.trim() ||
      !portada.num_legajos.trim() ||
      !portada.num_fojas.trim() ||
      !portada.valores_secundarios.trim() ||
      !portada.fecha_apertura.trim() ||
      !portada.fecha_cierre.trim() ||
      !portada.archivo_tramite.trim() ||
      !portada.archivo_concentracion.trim() ||
      !portada.seccion.trim() ||
      !portada.serie.trim() ||
      !portada.subserie.trim() ||
      !portada.ficha.trim() ||
      !portada.catalogo.trim()
    ) {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "Debes llenar todos los campos para enviar el formulario",
      });
      return;
    }
    setIsLoading(true);

    try {
      const result = await portada_post(portada);
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
    <div className="Body_Catálogo">
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
          <h1 className="Header_Title">Portada de Expediente </h1>
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
                  <label>Número de Expediente </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Número de Expediente"
                    value={portada.num_expediente}
                    onChange={handleInputChange}
                    name="num_expediente"
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Nombre / Asunto del Expediente</label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Nombre / Asunto del Expediente "
                    value={portada.asunto}
                    onChange={handleInputChange}
                    name="asunto"
                  />
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label> Valores Secundarios </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Valores Secundarios "
                    value={portada.valores_secundarios}
                    onChange={handleInputChange}
                    name="valores_secundarios"
                  />
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label> Fecha Apertura </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="date"
                    placeholder="Fecha Apertura"
                    value={portada.fecha_apertura}
                    onChange={handleInputChange}
                    name="fecha_apertura"
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label> Fecha de Cierre </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="date"
                    placeholder="Archivo de Concentración"
                    value={portada.fecha_cierre}
                    onChange={handleInputChange}
                    name="fecha_cierre"
                  />
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label> Número de Legajos </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="number"
                    placeholder="Número de Legajos "
                    value={portada.num_legajos}
                    onChange={handleInputChange}
                    name="num_legajos"
                  />
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>Número de Fojas</label>
                  <input
                    className="multisteps-form_input form-control"
                    type="number"
                    placeholder="Número de Fojas "
                    value={portada.num_fojas}
                    onChange={handleInputChange}
                    name="num_fojas"
                  />
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>Archivo de Trámite </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Archivo de trámite"
                    value={portada.archivo_tramite}
                    onChange={handleInputChange}
                    name="archivo_tramite"
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Archivo de Concentración </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Archivo de Concentración"
                    value={portada.archivo_concentracion}
                    onChange={handleInputChange}
                    name="archivo_concentracion"
                  />
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label> Ficha </label>
                  <select
                    className="multisteps-form_input form-control"
                    id="Ficha"
                    value={portada.ficha}
                    onChange={handleInputChange}
                    name="ficha"
                  >
                    <option value="">Seleccione una opción</option>
                    {id_ficha.map((ficha) => (
                      <option value={ficha.id_ficha}>{ficha.id_ficha}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label> Catalogo </label>
                  <select
                    className="multisteps-form_input form-control"
                    id="Catalgo"
                    value={portada.catalogo}
                    onChange={handleInputChange}
                    name="catalogo"
                  >
                    <option value="">Seleccione una opción</option>
                    {id_catalogo.map((catalogo) => (
                      <option value={catalogo.id_catalogo}>
                        {catalogo.catalogo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>ID Sección </label>
                  <select
                    className="multisteps-form_input form-control"
                    name="seccion"
                    id="seccion"
                    value={portada.seccion}
                    onChange={handleInputChange}
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
                    name="serie"
                    id="Serie"
                    value={portada.serie}
                    onChange={handleInputChange}
                  >
                    <option value="">Seleccione una opción</option>
                    {id_serie.map((s) => (
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
                    name="subserie"
                    id="Subserie"
                    value={portada.subserie}
                    onChange={handleInputChange}
                  >
                    <option value="">Seleccione una opción</option>
                    {id_subserie.map((sub) => (
                      <option key={sub.SubSerie} value={sub.SubSerie}>
                        {sub.SubSerie}
                      </option>
                    ))}
                  </select>
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
      </div>
    </div>
  );
}
