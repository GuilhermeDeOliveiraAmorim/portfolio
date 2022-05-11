import Menu from "./components/menu";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
	return (
    	<main>
      		<Router>
        		<Menu />
        		<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
        		</Routes>
      		</Router>
    	</main>
  	);
}
