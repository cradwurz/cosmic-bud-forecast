
// Google AdSense SDK service

// Initialize AdSense when the component mounts
export const initializeAds = () => {
  if (typeof window !== 'undefined') {
    // Only add the script tag if it doesn't already exist
    if (!document.getElementById('google-adsense-script')) {
      const script = document.createElement('script');
      script.id = 'google-adsense-script';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';
      
      // Add the script to the document
      document.head.appendChild(script);
      
      // Initialize ads when loaded
      script.onload = () => {
        console.log('AdSense script loaded successfully');
      };
      
      script.onerror = () => {
        console.error('Error loading AdSense script');
      };
    }
  }
};

// Function to refresh ads
export const refreshAds = () => {
  if (typeof window !== 'undefined' && window.adsbygoogle) {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error('Error refreshing ads:', e);
    }
  }
};

// Add window type definition
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
