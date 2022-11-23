import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import Components3 from "./components/ComponentsNumber3/Components3";
import Components1 from "./components/ComponentsNumber1/Components1";
import Components2 from "./components/ComponentsNumber2/Components2";

function App() {
    return (
        <div className="App">
            {/*<MainPage/>*/}
            <Components1/>
            <Components2/>
            <Components3/>

        </div>
    );
}

export default App;
