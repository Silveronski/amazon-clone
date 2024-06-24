import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HelmetProvider } from 'react-helmet-async'; // to changes the title of the page
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <HelmetProvider>
        <App />
    </HelmetProvider>
);