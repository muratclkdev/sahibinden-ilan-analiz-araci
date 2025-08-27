# 🚗 Sahibinden İlan Analiz Aracı

Sahibinden.com'daki vasıta ilanlarını AI ile analiz eden Chrome extension'u. Gemini AI kullanarak araç alım-satım kararında yardımcı olur.

## ✨ Özellikler

### 📊 Veri Analizi
- **Fiyat Kontrolü**: Piyasa değeri ile karşılaştırma
- **Kilometre Analizi**: Yaşa göre kilometre değerlendirmesi
- **Hasar/Boya Durumu**: Boyalı ve değişen parça tespiti (ÇOK ÖNEMLİ!)
- **Teknik Bilgiler**: Motor, yakıt, vites, hasar kaydı analizi
- **İlan Açıklaması**: Metin analizi ile pozitif/negatif noktalar

### 🤖 AI Analiz
- **Gemini AI Entegrasyonu**: Detaylı araç değerlendirmesi
- **Alım-Satım Önerisi**: 🟢 ALIN, 🟡 DİKKATLİ ALIN, 🔴 ALMAYIN
- **Pazarlık Önerileri**: Fiyat pazarlığı için stratejiler
- **Risk Faktörleri**: Dikkat edilmesi gereken noktalar

### 🧪 Kapsamlı Test Sistemi
- **10 Veri Çekme Testi**: Tüm alanların doğruluğu
- **8 Edge Case Testi**: Hata durumları ve güvenlik
- **Performance Testleri**: Hız ve memory optimizasyonu
- **Güvenlik Testleri**: XSS koruması ve API güvenliği

## 🚀 Kurulum

### 1. Extension Yükleme
1. Bu repository'yi klonlayın veya ZIP olarak indirin
2. Chrome'da `chrome://extensions/` adresine gidin
3. "Developer mode"u açın (sağ üst köşe)
4. "Load unpacked" ile extension klasörünü seçin

### 2. API Key Ayarlama
```javascript
// config.js dosyasında:
const CONFIG = {
    GEMINI_API_KEY: 'YOUR_GEMINI_API_KEY_HERE', // Kendi API key'inizi girin
    // ...
};
```

#### Gemini API Key Alma:
1. [Google AI Studio](https://aistudio.google.com/app/apikey)'ya gidin
2. Ücretsiz API key oluşturun
3. Key'i `config.js` dosyasına ekleyin

## 📱 Kullanım

1. Herhangi bir Sahibinden vasıta ilanına gidin
2. Sayfada **"İlanı Analiz Et"** butonunu göreceksiniz
3. Butona tıklayın ve analiz sonucunu bekleyin
4. Detaylı raporu inceleyin ve karar verin

### Test Sistemi
```javascript
// Browser console'da:

// Tüm testleri çalıştır
runAllTests()

// Hızlı veri kontrolü
runQuickDataCheck()

// Test sonuçlarını export et
exportTestResults()
```

## 🎯 Desteklenen Vasıta Türleri

- 🚗 Otomobil
- 🚙 Arazi, SUV & Pickup
- 🚐 Minivan & Panelvan
- 🚚 Kamyon & Kamyonet
- 🚌 Otobüs & Midibüs
- 🏍️ Motosiklet
- 🛥️ Tekne
- 🚐 Karavan

## 📊 Analiz Kriterleri

### Veri Doğruluğu
- **Fiyat**: Element-based extraction
- **Kilometre**: Analytics JSON parsing
- **Yıl**: Age calculation
- **Marka/Model**: Brand detection
- **Hasar Durumu**: Smart damage analysis

### AI Değerlendirme
- Fiyat/Performans oranı
- Kilometre/Yaş uyumu  
- Hasar geçmişi (kritik faktör)
- İlan açıklaması analizi
- Piyasa trend'leri

## 🧪 Test Sistemi

- **18 farklı test** kategorisi
- **Otomatik raporlama** sistemi  
- **Performance monitoring**
- **Export/Import** özelliği

## 🛡️ Güvenlik

- XSS koruması
- API key güvenliği
- Input validation
- Content security policy

## 📁 Dosya Yapısı

```
sahibinden-extension/
├── manifest.json          # Extension config
├── config.js              # Settings & API key
├── content.js             # Main logic
├── styles.css             # UI styles
├── popup.html/js          # Extension popup
├── test-*.js              # Test system
└── README.md              # This file
```

## ⚠️ Yasal Uyarı

Bu araç kişisel kullanım içindir. Sahibinden.com'un kullanım şartlarına uygun kullanın.

---

⭐ **Faydalı bulduysanız yıldızlamayı unutmayın!**