import { BrowserRouter, Route, Routes } from "react-router-dom";

// context
import { GlobalProvider } from "./contexts/GlobalContext.jsx";

// layout
import DefaultLayout from "./layout/DefaultLayout.jsx";

// pages
import Home from "./pages/Home";
import RacketsList from "./pages/RacketsList";
import RacketDetails from "./pages/RacketDetails";
import WishList from "./pages/WishList.jsx";
import GameMode from "./pages/GameMode.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="rackets" element={<RacketsList />} />
            <Route path="rackets/:id" element={<RacketDetails />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="vs" element={<GameMode />} />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
}
