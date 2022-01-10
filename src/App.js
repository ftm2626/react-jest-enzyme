import Header from "./components/header";
import "./App.scss"
import HeadLine from "./components/headline";

const tempArr = [{
  fNAme:'fatemeh',
  lName:'noorali',
  age:23
}]

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <section>
          <HeadLine header="posts" desc="Click me i dare you!" tempArr={tempArr} />
        </section>
      </div>
    </div>
  );
}

export default App;
