import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-10">
      <div className="container mx-auto px-4">
        {language === 'en' ? (
          /* Layout específico para versão inglesa */
          <div className="flex gap-8 items-start">
            <div className="space-y-4 max-w-xs flex-shrink-0">
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t('footer.brandName')}
              </h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line text-xs">
                {t('footer.description')}
              </p>
              <div className="flex space-x-3">
                <a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="mailto:albieroindica@gmail.com" className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex justify-between flex-1 gap-8">
              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">{t('footer.navigation')}</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.home')}</a></li>
                  <li><a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.pricing')}</a></li>
                  <li><a href="#downloads" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.downloads')}</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">{t('footer.support')}</h4>
                <ul className="space-y-2">
                  <li><a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.supportLink')}</a></li>
                  <li><a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.helpCenter')}</a></li>
                  <li><a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.faq')}</a></li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-semibold text-white">{t('footer.contactTitle')}</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm break-all">albieroindica@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">+55 (61) 98222-3599</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MessageCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">{t('footer.chat')}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Layout original para versão portuguesa */
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t('footer.brandName')}
              </h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm">
                {t('footer.description')}
              </p>
              <div className="flex space-x-3">
                <a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="mailto:albieroindica@gmail.com" className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.home')}</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.pricing')}</a></li>
                <li><a href="#downloads" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.downloads')}</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white">{t('footer.support')}</h4>
              <ul className="space-y-2">
                <li><a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.supportLink')}</a></li>
                <li><a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.helpCenter')}</a></li>
                <li><a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">{t('footer.faq')}</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-base font-semibold text-white">{t('footer.contactTitle')}</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm break-all">albieroindica@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">+55 (61) 98222-3599</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MessageCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <a href="https://wa.me/5561982223599?text=Necessito%20de%20Suporte%20para%20o%20Eppi%20Cinema" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors text-sm">{t('footer.chat')}</a>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}