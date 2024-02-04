import "normalize.css";
import "./styles/index.scss";
import Home from "./pages/Home/Home";
import { ConfigProvider } from "antd";
function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2b38d1",
        },
      }}
    >
      <div className="app">
        <Home />
      </div>
    </ConfigProvider>
  );
}

export default App;
