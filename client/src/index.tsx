import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
reportWebVitals();
