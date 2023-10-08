import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./components/Layout/DefaultLayout";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes className="todo-item">
          {publicRoutes.map((route, index) => {
            const Layout = DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page key={index} />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
