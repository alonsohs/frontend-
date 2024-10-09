import { Logo } from "../../components/Logo";
import { Boton } from "../../components/Botones/Botones";
import { useState, useEffect } from "react";
import {
  Seccion_get,
  serie_get,
  subserie_get,
} from "../../services/cuadro.service";
import { seccion, serie, SubSerie } from "../../Producto";

export function Portada() {
  const [id_seccion, setIdSeccion] = useState("");
  const [id_serie, setIdSerie] = useState("");
  const [id_subserie, setIdSubserie] = useState("");
  const [secciones, setSeccion] = useState<seccion[]>([]);
  const [serie, setSerie] = useState<serie[]>([]);
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
          <form className="multisteps-form_form">
            <div
              className="multisteps-form_panel shadow p-4 rounded bg-white js-active"
              data-animation="scaleIm"
            >
              <div className="form-row mt-4">
                <div className="col">
                  <label>ID Expediente </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="number "
                    placeholder="ID Expediente"
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Número de Expediente </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Número de Expediente"
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
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Acceso </label>
                  <select className="multisteps-form_input form-control">
                    <option>Publico </option>
                    <option>Reservado </option>
                    <option>Confidencial </option>
                  </select>
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Valores Primarios </label>
                  <select className="multisteps-form_input form-control">
                    <option>Administrativo </option>
                    <option>Contable / Fiscal </option>
                    <option>Legal </option>
                  </select>
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label> Número de Legajos </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="number"
                    placeholder="Número de Legajos "
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
                  />
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>Formato de Soporte</label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Formato de Soporte  "
                  />
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>Archivo de Trámite </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="date"
                    placeholder="Archivo de trámite"
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Archivo de Concentración </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="date"
                    placeholder="Archivo de Concentración"
                  />
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>Destino Final</label>
                  <select className="multisteps-form_input form-control">
                    <option>Baja Documental</option>
                    <option>Archivo Histórico</option>
                  </select>
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>Valores Secundarios </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Valores Secundarios   "
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
                <Boton> Enviar </Boton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
