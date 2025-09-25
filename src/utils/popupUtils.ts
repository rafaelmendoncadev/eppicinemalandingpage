/**
 * Utility function to open links in a popup window that is 40% smaller than the current window
 * This provides a better user experience by keeping the original site visible in the background
 */

export const openPurchasePopup = (url: string, windowName: string = 'purchaseWindow') => {
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
 * Opens a purchase link in a popup window
 * @param url - The URL to open
 * @param language - Current language ('pt' or 'en')
 */
export const handlePurchaseClick = (url: string, language: string = 'pt') => {
  const windowName = language === 'en' ? 'purchaseWindowEN' : 'purchaseWindowPT';
  return openPurchasePopup(url, windowName);
};

/**
 * Handles purchase click with payment instructions for English version
 * @param url - The URL (used for Portuguese version)
 * @param language - Current language
 * @param imageUrl - The payment instructions URL (English only)
 */
export const handleDualPurchaseClick = (url: string, language: string = 'pt', imageUrl?: string) => {
  if (language === 'en' && imageUrl) {
    // Open only payment instructions window for English version
    const windowName = 'paymentInstructionsEN';
    return openPurchasePopup(imageUrl, windowName);
  } else {
    // Use single popup for Portuguese
    return handlePurchaseClick(url, language);
  }
};