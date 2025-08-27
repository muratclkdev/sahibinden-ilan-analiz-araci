// Sahibinden İlan Analiz Aracı - Konfigürasyon

const CONFIG = {
    // Gemini AI API yapılandırması
    GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE', // Buraya kendi Gemini API anahtarınızı girin
    GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
    
    // AI Analiz Ayarları
    AI_ANALYSIS_ENABLED: true,
    
    // Analiz ayarları
    ANALYSIS_SETTINGS: {
        // Fiyat değerlendirme eşikleri
        PRICE_THRESHOLDS: {
            LOW: 200000,      // Bu fiyatın altı düşük kabul edilir
            HIGH: 1000000     // Bu fiyatın üstü yüksek kabul edilir
        },
        
        // Kilometre değerlendirme (yıllık)
        KM_THRESHOLDS: {
            LOW_ANNUAL: 15000,    // Yılda bu kadar km düşük
            HIGH_ANNUAL: 25000    // Yılda bu kadar km yüksek
        },
        
        // Yaş değerlendirme
        AGE_THRESHOLDS: {
            NEW: 5,       // 5 yaşından küçük yeni sayılır
            OLD: 10       // 10 yaşından büyük eski sayılır
        }
    },
    
    // UI ayarları
    UI_SETTINGS: {
        BUTTON_POSITION: 'after-exchange', // 'after-exchange', 'top-right', 'bottom'
        ANIMATION_DURATION: 300,
        AUTO_CLOSE_DELAY: 0 // 0 = otomatik kapanmaz
    },
    
    // Debug modu
    DEBUG: true
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}