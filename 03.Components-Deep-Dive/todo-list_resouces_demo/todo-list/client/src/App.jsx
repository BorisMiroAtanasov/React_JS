import Footer from "./components/Footer"
import Header from "./components/Header"
import ToDoList from "./components/ToDolist"


function App() {

  return (
    <div>
  
<Header/>
   Main content 
  <main className="main">

  <ToDoList />

  </main>

   Footer 
<Footer/>
    </div>
  )
}

export default App
