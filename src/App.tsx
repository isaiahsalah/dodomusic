import Logo from '/logo.png'
import './App.css'

function App() {

  return (
    <>
      <img src="https://i.giphy.com/tbapfDZ4mZJn2.webp" className="fondo" alt="React logo" />
      <a target="_blank">
        <img src={Logo} className="logo" alt="React logo" />
      </a>

      <div className="card">
        <h1 style={{ margin: 0 }}>Dodo</h1>
        <h4>
          Academia de musica
        </h4>
      </div>
      <p className="read-the-docs">
        Pagina en construcción 😉
      </p>
      <a href='https://wa.link/yi36gw' target="_blank">
        <button>
          Contactanos
        </button>
      </a>
    </>
  )
}

export default App
