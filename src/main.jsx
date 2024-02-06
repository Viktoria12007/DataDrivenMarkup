import ReactDOM from 'react-dom/client';
import { products } from './products';
import './main.css';
import ProductList from "./components/ProductList/ProductList.jsx";

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

// TODO: Реализовать компонент ProductList
reactRoot.render(<ProductList products={products} />);
