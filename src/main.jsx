import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/header/Header";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import myReduxStore from "./redux/store/Store";
// import ReactDOM from "react-dom/client";  // Notice the '/client' here
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={myReduxStore}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root"));