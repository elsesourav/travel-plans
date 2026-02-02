import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { ComparePage, DestinationPage, HomePage, TipsPage } from "./pages";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="destination/:slug" element={<DestinationPage />} />
          <Route path="compare" element={<ComparePage />} />
          <Route path="tips" element={<TipsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
