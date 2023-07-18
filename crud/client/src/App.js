import './App.css';

function App() {
  const [Nombre, setNombre] = useState('');
  const [Edad, setSueldo] = useState(0);
  const [Pais, setApellidos] = useState('');
  const [Cargo, setCargo] = useState('');
  const [Años, setEdad] = useState(0);
  const mostrarDatos = ()=>{
    alert(Nombre);
  }
  return (
    <div className="App">
      <div className="datos">
        <label>Cedula: <input type="text" /></label><br />
        onChange={(event) => {
          setCedula(event.target.value);
        }}
        <label>Nombre: <input type="text" /></label><br />
        onChange={(event) => {
          setNombre(event.target.value);
        }}
        <label>Apellidos: <input type="text" /></label><br />
        onChange={(event) => {
          setApellidos(event.target.value);
        }}
        <label>Cargo: <input type="text" /></label><br />
        onChange={(event) => {
          setCargo(event.target.value);
        }}
        <label>Sueldo: <input type="text" /></label><br />
        onChange={(event) => {
          setSueldo(event.target.value);
        }}
        <label>Edad: <input type="text" /></label><br />
        onChange={(event) => {
          setEdad(event.target.value);
        }}
       
        <button onClick={mostrarDatos}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
