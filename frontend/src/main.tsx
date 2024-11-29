import ReactDOM from 'react-dom/client';
import './index.css';
import CheckupLogo from './assets/Checkuplogo.jpeg';

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="p-8 bg-white shadow-md rounded-md text-center">
        {/* Imagem com classes responsivas */}
        <img
          src={CheckupLogo}
          alt="Logo"
          className="w-full max-w-xs h-auto mx-auto" // Responsivo
        />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

