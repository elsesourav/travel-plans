import { Layout } from "@/components/layout";
import { DestinationPage, HomePage } from "@/pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="destination/:slug" element={<DestinationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
