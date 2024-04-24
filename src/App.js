import react from "react";
import AllProduct from "./pages/AllProduct";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
import CreateProduct from "./pages/CreateProduct";
import { RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {ProductContextData} from "./ProductsContext";

export default function App() {
  return (<div className="container">
    <Router>
      <nav className="navbar navbar-expand-sm bg-light">

        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">All Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/edit">Edit</Link>
            </li>
          </ul>
        </div>

      </nav>

      <ProductContextData>
      <Routes>
        <Route path="/" element={<AllProduct />} />
        <Route path="/edit" element={<EditProduct />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/delete" element={<DeleteProduct />} />
      </Routes>
      </ProductContextData>
    </Router>
  </div>)
}