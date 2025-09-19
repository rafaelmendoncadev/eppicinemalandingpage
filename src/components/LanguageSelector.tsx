import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (newLanguage: 'pt' | 'en') => {
    setLanguage(newLanguage);
    
    // Navigate to appropriate route
    if (newLanguage === 'en') {
      navigate('/en');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-white/70" />
      <div className="flex bg-white/10 rounded-lg p-1">
        <button
          onClick={() => handleLanguageChange('pt')}
          className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
            language === 'pt'
              ? 'bg-red-500 text-white shadow-lg'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          PT
        </button>
        <button
          onClick={() => handleLanguageChange('en')}
          className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
            language === 'en'
              ? 'bg-red-500 text-white shadow-lg'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;