import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, ThirdPage, Fourth, Fifth, Sixth, Seventh, Eigth, Ninth, Tenth, ElevenPage, TwelvePage, FourtyPage } from "./components/pages";
import { FrFirstPage, FrThirdPage, FrFourthPage, FrFifthPage, FrSixthPage, FrSeventh, FrEigth, FrNinthPage, FrTenthPage, FrElevenPage, FrTwelvePage, FrFourtyPage } from "./components/fr";
import { NlFirstPage, NlThirdPage, NlFourthPage, NlFifthPage, NlSixthPage, NlSeventh, NlEigth, NlNinthPage, NlTenthPage, NlElevenPage, NlTwelvePage, NlFourtyPage } from "./components/nl";

import NotFound from "./components/pages/NotFound";
import ThirthyPage from "./components/pages/ThirthyPage";


function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/fourth-page" element={<Fourth />} />
        <Route path="/fifth-page" element={<Fifth />} />
        <Route path="/sixth-page" element={<Sixth />} />
        <Route path="seventh-page" element={<Seventh />} />
        <Route path="/eigth-page" element={<Eigth />} />
        <Route path="ninth-page" element={<Ninth />} />
        <Route path="tenth-page" element={<Tenth />} />
        <Route path="eleven-page" element={<ElevenPage />} />
        <Route path="twelve-page" element={<TwelvePage />} />
        <Route path="thirty-page" element={<ThirthyPage />} />
        <Route path="fourty-page" element={<FourtyPage />} />
        {/* France */}
        <Route path="/fr/" element={<FrFirstPage />} />
        <Route path="/fr/third-page" element={<FrThirdPage />} />
        <Route path="/fr/fourth-page" element={<FrFourthPage />} />
        <Route path="/fr/fifth-page" element={<FrFifthPage />} />
        <Route path="/fr/sixth-page" element={<FrSixthPage />} />
        <Route path="/fr/seventh-page" element={<FrSeventh />} />
        <Route path="/fr/eigth-page" element={<FrEigth />} />
        <Route path="/fr/ninth-page" element={<FrNinthPage />} />
        <Route path="/fr/tenth-page" element={<FrTenthPage />} />
        <Route path="/fr/eleven-page" element={<FrElevenPage />} />
        <Route path="/fr/twelve-page" element={<FrTwelvePage />} />
       
        {/* Nl */}
        <Route path="/nl" element={<NlFirstPage />} />
        <Route path="/nl/third-page" element={<NlThirdPage />} />
        <Route path="/nl/fourth-page" element={<NlFourthPage />} />
        <Route path="/nl/fifth-page" element={<NlFifthPage />} />
        <Route path="/nl/sixth-page" element={<NlSixthPage />} />
        <Route path="/nl/seventh-page" element={<NlSeventh />} />
        <Route path="/nl/eigth-page" element={<NlEigth />} />
        <Route path="/nl/ninth-page" element={<NlNinthPage />} />
        <Route path="/nl/tenth-page" element={<NlTenthPage />} />
        <Route path="/nl/eleven-page" element={<NlElevenPage />} />
        <Route path="/nl/twelve-page" element={<NlTwelvePage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
);
}

export default App;
