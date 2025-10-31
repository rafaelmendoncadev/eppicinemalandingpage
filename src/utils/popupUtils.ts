/**
 * Utility function to open links in a popup window that is 40% smaller than the current window
 * This provides a better user experience by keeping the original site visible in the background
 */

/**
 * Validates URL to prevent XSS and open redirect attacks
 * Only allows HTTPS protocol and whitelisted domains
 */
const isValidURL = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    
    // Only allow https: protocol (reject javascript:, data:, etc.)
    if (parsed.protocol !== 'https:') {
      console.error('Security: Invalid protocol. Only HTTPS is allowed.');
      return false;
    }
    
    // Whitelist allowed domains
    const allowedDomains = ['biolivre.com.br', 'wa.me'];
    const isAllowed = allowedDomains.some(domain => 
      parsed.hostname === domain || parsed.hostname.endsWith('.' + domain)
    );
    
    if (!isAllowed) {
      console.error('Security: Domain not whitelisted:', parsed.hostname);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Security: Invalid URL format:', error);
    return false;
  }
};

export const openPurchasePopup = (url: string, windowName: string = 'purchaseWindow') => {
  // Validate URL before opening
  if (!isValidURL(url)) {
    console.error('Security: Blocked attempt to open invalid URL:', url);
    return null;
  }
  // Get current window dimensions
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;
  
  // Calculate popup dimensions (40% smaller)
  const popupWidth = Math.floor(currentWidth * 0.6);
  const popupHeight = Math.floor(currentHeight * 0.6);
  
  // Calculate center position
  const left = Math.floor((currentWidth - popupWidth) / 2) + window.screenX;
  const top = Math.floor((currentHeight - popupHeight) / 2) + window.screenY;
  
  // Popup window features
  const features = [
    `width=${popupWidth}`,
    `height=${popupHeight}`,
    `left=${left}`,
    `top=${top}`,
    'scrollbars=yes',
    'resizable=yes',
    'toolbar=no',
    'menubar=no',
    'location=no',
    'status=no'
  ].join(',');
  
  // Open the popup window
  const popup = window.open(url, windowName, features);
  
  // Focus on the popup window if it was successfully opened
  if (popup) {
    popup.focus();
  }
  
  return popup;
};

/**
 * Opens two popup windows side by side (for English version only)
 * @param whatsappUrl - The WhatsApp URL for the first window
 * @param imageUrl - The image URL for the second window
 */
export const openDualPopupWindows = (whatsappUrl: string, imageUrl: string) => {
  // Validate both URLs before opening
  if (!isValidURL(whatsappUrl)) {
    console.error('Security: Blocked attempt to open invalid WhatsApp URL:', whatsappUrl);
    return { whatsappWindow: null, imageWindow: null };
  }
  if (!isValidURL(imageUrl)) {
    console.error('Security: Blocked attempt to open invalid image URL:', imageUrl);
    return { whatsappWindow: null, imageWindow: null };
  }
  
  // Get current window dimensions
  const currentWidth = window.innerWidth;
  const currentHeight = window.innerHeight;
  
  // Calculate popup dimensions (each window will be smaller)
  const popupWidth = Math.floor(currentWidth * 0.4); // 40% of screen width each
  const popupHeight = Math.floor(currentHeight * 0.6); // 60% of screen height
  
  // Calculate positions for side-by-side windows
  const leftWindowLeft = Math.floor((currentWidth - (popupWidth * 2)) / 3) + window.screenX;
  const rightWindowLeft = leftWindowLeft + popupWidth + Math.floor((currentWidth - (popupWidth * 2)) / 3);
  const windowTop = Math.floor((currentHeight - popupHeight) / 2) + window.screenY;
  
  // Common window features
  const baseFeatures = [
    `width=${popupWidth}`,
    `height=${popupHeight}`,
    `top=${windowTop}`,
    'scrollbars=yes',
    'resizable=yes',
    'toolbar=no',
    'menubar=no',
    'location=no',
    'status=no'
  ];
  
  // Features for left window (WhatsApp)
  const leftFeatures = [...baseFeatures, `left=${leftWindowLeft}`].join(',');
  
  // Features for right window (Image)
  const rightFeatures = [...baseFeatures, `left=${rightWindowLeft}`].join(',');
  
  // Open both windows
  const whatsappWindow = window.open(whatsappUrl, 'whatsappWindow', leftFeatures);
  const imageWindow = window.open(imageUrl, 'imageWindow', rightFeatures);
  
  // Focus on the WhatsApp window first
  if (whatsappWindow) {
    whatsappWindow.focus();
  }
  
  return { whatsappWindow, imageWindow };
};

/**
 * Opens a purchase link in a popup window with confirmation dialog
 * @param url - The URL to open
 * @param language - Current language ('pt' or 'en')
 * @param planDetails - Optional plan details to show in confirmation
 */
export const handlePurchaseClick = (url: string, language: string = 'pt', planDetails?: { name: string; price: string }) => {
  // Show confirmation dialog before redirecting to payment
  const confirmMessage = language === 'en' 
    ? `You are about to be redirected to the payment page${planDetails ? ` for ${planDetails.name} (${planDetails.price})` : ''}.\n\nDomain: biolivre.com.br\n\nProceed with payment?`
    : `Você será redirecionado para a página de pagamento${planDetails ? ` do plano ${planDetails.name} (${planDetails.price})` : ''}.\n\nDomínio: biolivre.com.br\n\nDeseja continuar?`;
  
  if (!confirm(confirmMessage)) {
    console.log('User cancelled payment redirect');
    return null;
  }
  
  const windowName = language === 'en' ? 'purchaseWindowEN' : 'purchaseWindowPT';
  return openPurchasePopup(url, windowName);
};

/**
 * Handles purchase click with payment instructions for English version
 * @param url - The URL (used for Portuguese version)
 * @param language - Current language
 * @param imageUrl - The payment instructions URL (English only)
 * @param planDetails - Optional plan details to show in confirmation
 */
export const handleDualPurchaseClick = (url: string, language: string = 'pt', imageUrl?: string, planDetails?: { name: string; price: string }) => {
  if (language === 'en' && imageUrl) {
    // Show confirmation for English version before showing payment instructions
    const confirmMessage = `You are about to view payment instructions${planDetails ? ` for ${planDetails.name} (${planDetails.price})` : ''}.\n\nProceed?`;
    
    if (!confirm(confirmMessage)) {
      console.log('User cancelled payment instructions view');
      return null;
    }
    
    // Open only payment instructions window for English version
    const windowName = 'paymentInstructionsEN';
    return openPurchasePopup(imageUrl, windowName);
  } else {
    // Use single popup for Portuguese with confirmation
    return handlePurchaseClick(url, language, planDetails);
  }
};