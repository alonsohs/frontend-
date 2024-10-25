import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Tlaxcala.png";
import { Boton } from "../../components/Botones/Botones";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
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
import "../../Styles/Styles.css";

export function PortadaComponent() {
  const navigate = useNavigate();
  const [portada, setPortada] = useState<Portada>(new Portada());
  const [isLoading, setIsLoading] = useState(false);
  const [secciones, setSeccion] = useState<seccion[]>([]);
  const [id_serie, setSerie] = useState<serie[]>([]);
  const [id_subserie, setSubSerie] = useState<SubSerie[]>([]);
  const [id_ficha, setIdFicha] = useState<ficha[]>([]);
  const [id_catalogo, setIdCatalogo] = useState<catalogo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const fichas = await ficha_get();
      const catalogos = await catalogo_get();
      const secciones = await Seccion_get();
      const series = await serie_get();
      const subseries = await subserie_get();

      setIdFicha(fichas);
      setIdCatalogo(catalogos);
      setSeccion(secciones);
      setSerie(series);
      setSubSerie(subseries);
    };

    fetchData();
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setPortada((prevPortada) => ({
      ...prevPortada,
      [name]: value,
    }));
  };

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
        text: "Todos los campos son obligatorios",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await portada_post(portada);
      console.log("Respuesta de la API:", result);

      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
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
    <body>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <img className="Logo_imgRU" src={Logo} alt="" width="25%" />
      <div className="layoutAuthentication">
        <div className="layoutAuthentication_content">
          <main>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Portada de Expediente
                      </h3>
                    </div>
                    <div className="card-body">
                      <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Número de Expediente"
                                value={portada.num_expediente}
                                onChange={handleInputChange}
                                name="num_expediente"
                              />
                              <label>Número de Expediente</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Nombre / Asunto del Expediente"
                                value={portada.asunto}
                                onChange={handleInputChange}
                                name="asunto"
                              />
                              <label>Nombre / Asunto del Expediente</label>
                            </div>
                          </div>
                        </div>

                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Valores Secundarios"
                            value={portada.valores_secundarios}
                            onChange={handleInputChange}
                            name="valores_secundarios"
                          />
                          <label>Valores Secundarios</label>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                type="date"
                                value={portada.fecha_apertura}
                                onChange={handleInputChange}
                                name="fecha_apertura"
                              />
                              <label>Fecha Apertura</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                type="date"
                                value={portada.fecha_cierre}
                                onChange={handleInputChange}
                                name="fecha_cierre"
                              />
                              <label>Fecha de Cierre</label>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                type="number"
                                placeholder="Número de Legajos"
                                value={portada.num_legajos}
                                onChange={handleInputChange}
                                name="num_legajos"
                              />
                              <label>Número de Legajos</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                type="number"
                                placeholder="Número de Fojas"
                                value={portada.num_fojas}
                                onChange={handleInputChange}
                                name="num_fojas"
                              />
                              <label>Número de Fojas</label>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Archivo de trámite"
                                value={portada.archivo_tramite}
                                onChange={handleInputChange}
                                name="archivo_tramite"
                              />
                              <label>Archivo de Trámite</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                type="text"
                                placeholder="Archivo de Concentración"
                                value={portada.archivo_concentracion}
                                onChange={handleInputChange}
                                name="archivo_concentracion"
                              />
                              <label>Archivo de Concentración</label>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating">
                              <select
                                className="form-select"
                                value={portada.ficha}
                                onChange={handleInputChange}
                                name="ficha"
                              >
                                <option value="">Seleccione una opción</option>
                                {id_ficha.map((ficha) => (
                                  <option
                                    key={ficha.id_ficha}
                                    value={ficha.id_ficha}
                                  >
                                    {ficha.id_ficha}
                                  </option>
                                ))}
                              </select>
                              <label>Ficha</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <select
                                className="form-select"
                                value={portada.catalogo}
                                onChange={handleInputChange}
                                name="catalogo"
                              >
                                <option value="">Seleccione una opción</option>
                                {id_catalogo.map((catalogo) => (
                                  <option
                                    key={catalogo.id_catalogo}
                                    value={catalogo.id_catalogo}
                                  >
                                    {catalogo.catalogo}
                                  </option>
                                ))}
                              </select>
                              <label>Catálogo</label>
                            </div>
                          </div>
                        </div>

                        <div className="row mb-3">
                          <div className="col-md-4">
                            <div className="form-floating">
                              <select
                                className="form-select"
                                value={portada.seccion}
                                onChange={handleInputChange}
                                name="seccion"
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
                              <label>ID Sección</label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-floating">
                              <select
                                className="form-select"
                                value={portada.serie}
                                onChange={handleInputChange}
                                name="serie"
                              >
                                <option value="">Seleccione una opción</option>
                                {id_serie.map((s) => (
                                  <option key={s.serie} value={s.serie}>
                                    {s.serie}
                                  </option>
                                ))}
                              </select>
                              <label>ID Serie</label>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-floating">
                              <select
                                className="form-select"
                                value={portada.subserie}
                                onChange={handleInputChange}
                                name="subserie"
                              >
                                <option value="">Seleccione una opción</option>
                                {id_subserie.map((sub) => (
                                  <option
                                    key={sub.SubSerie}
                                    value={sub.SubSerie}
                                  >
                                    {sub.SubSerie}
                                  </option>
                                ))}
                              </select>
                              <label>ID Subserie</label>
                            </div>
                          </div>
                        </div>

                        <div className="text-center mt-4">
                          <Boton disabled={isLoading}>
                            {isLoading ? "Enviando..." : "Enviar"}
                          </Boton>
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
