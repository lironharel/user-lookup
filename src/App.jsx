import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContextProvider from "./context/userContext";
import UserLookup from "./pages/UserLookup";
import PageNotFound from "./pages/PageNotFound";
import "./app.scss";

function App() {
   return (
      <div className="app-main-container">
         <UserContextProvider>
            <Router>
               <Routes>
                  <Route exact path="/" element={<UserLookup />} />
                  <Route path="/*" element={<PageNotFound />} />
               </Routes>
            </Router>
         </UserContextProvider>
      </div>
   );
}

export default App;
