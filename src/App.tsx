import Layout from "./components/layout/Default";
import { MenuLeft } from "./components/menu/MenuLeft";
import { ContentPage } from "./components/pages/ContentPage";

import "assets/scss/main.scss";

// @TODO add link parser

function App() {
  return (
    <div className="App">
      <Layout
        menu={<MenuLeft />}
        main={<ContentPage />}
      />
    </div>
  );
}

export default App;
