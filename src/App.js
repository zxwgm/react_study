import Header from "./components/Header"
import Main from "./components/Main";
import Background from "./images/backgroung_blue.jpg"


function App() {
  return (
    <div className='h-screen overflow-hidden' style={{background:`url(${Background})`}}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
