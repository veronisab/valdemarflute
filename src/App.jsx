import Header from './Header'
import Fullscreen from './Fullscreen'
import About from './About'
import Videos from './Videos'
import Home from './Home'

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Fullscreen>     <Home /></Fullscreen>

        <Fullscreen>
                <About />
        </Fullscreen>
      </div>
    </div>
  )
}

export default App
