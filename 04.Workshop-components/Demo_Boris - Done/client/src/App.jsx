import Footer from "./component/Footer";
import Header from "./component/Header.jsx";
import UserList from "./component/UserList";

import "./styles.css";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <UserList />
      </main>
      <Footer />
    </div>
  );
}

export default App;

{
  /* <div>
<Header />
<Footer />

{/* // <Header />
// <main className="main">

//     <UserList/>

// </main>
// <Footer /> */
}
// </div> */}
