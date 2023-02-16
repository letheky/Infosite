import './App.scss'
import Content from './components/content/content'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {

  return (
    <div className='app'>
      <div className="person-dark">
        <Header />
        <Content />
        <Footer />
      </div>
      <div className="person-light">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  )
}

export default App
