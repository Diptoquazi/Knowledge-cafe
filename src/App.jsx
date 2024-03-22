
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Biikmarks from './components/Bookmarks/Biikmarks'
import Header from './components/Header/Header'

function App() {
  

  return (
    <>
      
      <Header></Header>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Biikmarks></Biikmarks>
      </div>
    </>
  )
}

export default App
