import './App.css';

function App() {
  const [Nombre, setNombre] = useState('');
  const [Edad, setEdad] = useState(0);
  const [Pais, setPais] = useState('');
  const [Cargo, setCargo] = useState('');
  const [Años, setAños] = useState(0);
  const mostrarDatos = ()=>{
    alert(Nombre);
  }
  return (
    <div className="App">
      <div className="datos">
        <label>Nombre: <input type="text" /></label><br />
        onChange={(event) => {
          setNombre(event.target.value);
        }}
        <label>Edad: <input type="text" /></label><br />
        onChange={(event) => {
          setEdad(event.target.value);
        }}
        <label>Cargo: <input type="text" /></label><br />
        onChange={(event) => {
          setCargo(event.target.value);
        }}
        <label>Pais: <input type="text" /></label><br />
        onChange={(event) => {
          setPais(event.target.value);
        }}
        <label>Años: <input type="text" /></label><br />
        onChange={(event) => {
          setAños(event.target.value);
        }}
        <button onClick={mostrarDatos}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
