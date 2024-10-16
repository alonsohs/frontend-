import { Logo } from "../../components/Logo";
import { Boton } from "../../components/Botones/Botones";
import { useNavigate } from "react-router-dom";
import {
  catalogo_post,
  destino_get,
  type_get,
  valor_get,
} from "../../services/catalogo.service";
import { useState, useEffect } from "react";
import {
  Seccion_get,
  serie_get,
  subserie_get,
} from "../../services/cuadro.service";
import { seccion, serie, SubSerie } from "../../Producto";
import { valor, type, destino } from "../../services/var.catalogo";
import "../../Styles/Styles.css";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";

export function Catálogo() {
  const navigate = useNavigate();
  const [id_catalogo] = useState("");
  const [catalogo, setCatalogo] = useState("");
  const [archivo_tramite, setArchivoTramite] = useState("");
  const [archivo_concentracion, setArchivoConcentracion] = useState("");
  const [destino_expe, setDestinoExpe] = useState("");
  const [type_access, setTypeAccess] = useState("");
  const [valores_documentales, setValoresDocumentales] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [id_seccion, setIdSeccion] = useState("");
  const [id_serie, setIdSerie] = useState("");
  const [id_subserie, setIdSubserie] = useState("");
  const [secciones, setSeccion] = useState<seccion[]>([]);
  const [valor, setValor] = useState<valor[]>([]);
  const [type, setType] = useState<type[]>([]);
  const [destiny, setDestiny] = useState<destino[]>([]);
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

  useEffect(() => {
    const fetchValor = async () => {
      const items = await valor_get();
      setValor(items);
    };
    fetchValor();
  }, []);

  useEffect(() => {
    const fetchtype = async () => {
      const items = await type_get();
      setType(items);
    };
    fetchtype();
  }, []);

  useEffect(() => {
    const fetchdestiny = async () => {
      const items = await destino_get();
      setDestiny(items);
    };
    fetchdestiny();
  }, []);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !catalogo.trim() ||
      !archivo_tramite.trim() ||
      !archivo_concentracion.trim() ||
      !destino_expe.trim() ||
      !type_access.trim() ||
      !valores_documentales.trim() ||
      !observaciones.trim() ||
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

    const CatalogoData = {
      id_catalogo: id_catalogo,
      catalogo: catalogo,
      archivo_tramite: archivo_tramite,
      archivo_concentracion: archivo_concentracion,
      destino_expe: destino_expe,
      type_access: type_access,
      valores_documentales: valores_documentales,
      observaciones: observaciones,
      id_seccion: id_seccion,
      id_serie: id_serie,
      id_subserie: id_subserie,
    };
    try {
      const result = await catalogo_post(CatalogoData);
      console.log("Respuesta de la API:", result);
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Datos enviados exitosamente.",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        navigate("/Catálogo");
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
          <h1 className="Header_Title">Catálogo de Disposición Documental</h1>
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
                  <label>ID Catálogo </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="number "
                    placeholder="ID Catálogo"
                    value={catalogo}
                    onChange={(e) => setCatalogo(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Valores Documentales </label>
                  <select
                    className="multisteps-form_input form-select"
                    name="seccion"
                    id="seccion"
                    value={valores_documentales}
                    onChange={(e) => setValoresDocumentales(e.target.value)}
                  >
                    <option value="">Seleccione una opción</option>
                    {valor.map((valor) => (
                      <option value={valor.valores}>{valor.valores}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Observaciones </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="text"
                    placeholder="Observaciones "
                    value={observaciones}
                    onChange={(e) => setObservaciones(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Archivo de Trámite </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="date"
                    placeholder="Archivo de Trámite"
                    value={archivo_tramite}
                    onChange={(e) => setArchivoTramite(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row mt-4">
                <div className="col">
                  <label>Archivo de Concentración </label>
                  <input
                    className="multisteps-form_input form-control"
                    type="date"
                    placeholder=" Archivo de Concentración"
                    value={archivo_concentracion}
                    onChange={(e) => setArchivoConcentracion(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>Tipo de Acceso</label>
                  <select
                    className="multisteps-form_input form-select"
                    name="seccion"
                    id="seccion"
                    value={type_access}
                    onChange={(e) => setTypeAccess(e.target.value)}
                  >
                    <option value="">Seleccione una opción</option>
                    {type.map((type) => (
                      <option value={type.type}>{type.type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>Destino del expediente</label>
                  <select
                    className="multisteps-form_input form-select"
                    name="seccion"
                    id="seccion"
                    value={destino_expe}
                    onChange={(e) => setDestinoExpe(e.target.value)}
                  >
                    <option value="">Seleccione una opción</option>
                    {destiny.map((destiny) => (
                      <option value={destiny.destino}>{destiny.destino}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row mt-4">
                <div className="col">
                  <label>ID Sección </label>
                  <select
                    className="multisteps-form_input form-select"
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
                    className="multisteps-form_input form-select"
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
                    className="multisteps-form_input form-select"
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
