
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e63f3222599c4de593a682c708b37cbd',
  appName: 'cosmic-cannabis-guide',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'https://e63f3222-599c-4de5-93a6-82c708b37cbd.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  ios: {
    contentInset: 'automatic',
    allowsLinkPreview: true,
    scrollEnabled: true,
    backgroundColor: '#212121',
  },
  android: {
    backgroundColor: '#212121',
    allowMixedContent: true, // Allow loading non-HTTPS content
    captureInput: true,      // Capture hardware back button
    webContentsDebuggingEnabled: true, // Enable WebView debugging
    initialFocus: true,      // Set initial focus for WebView
  }
};

export default config;
