// Popup JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    const openTabBtn = document.getElementById('open-tab-btn');
    const messageArea = document.getElementById('message-area');

    // Mevcut sekmeyi kontrol et
    checkCurrentTab();

    // Sahibinden.com'a git butonu
    openTabBtn.addEventListener('click', function() {
        chrome.tabs.create({
            url: 'https://www.sahibinden.com/otomobil'
        });
    });

    async function checkCurrentTab() {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            
            if (tab.url && tab.url.includes('sahibinden.com/ilan/vasita-')) {
                // Vasıta ilanı sayfası
                statusDot.classList.remove('inactive');
                statusText.textContent = 'Hazır - İlan sayfasında';
                openTabBtn.textContent = 'Analiz Et';
                openTabBtn.onclick = function() {
                    // Content script'e mesaj gönder
                    chrome.tabs.sendMessage(tab.id, { action: 'analyze' }, function(response) {
                        if (chrome.runtime.lastError) {
                            showMessage('Sayfa yeniden yüklenmeli', 'error');
                        } else {
                            showMessage('Analiz başlatıldı', 'success');
                        }
                    });
                };
            } else if (tab.url && tab.url.includes('sahibinden.com')) {
                // Sahibinden.com'da ama ilan sayfası değil
                statusDot.classList.add('inactive');
                statusText.textContent = 'Bir vasıta ilanına gidin';
                openTabBtn.textContent = 'Otomobil Kategorisine Git';
                openTabBtn.onclick = function() {
                    chrome.tabs.update(tab.id, {
                        url: 'https://www.sahibinden.com/otomobil'
                    });
                };
            } else {
                // Başka bir site
                statusDot.classList.add('inactive');
                statusText.textContent = 'Sahibinden.com\'a gidin';
                openTabBtn.textContent = 'Sahibinden.com\'a Git';
            }
        } catch (error) {
            console.error('Tab kontrol hatası:', error);
            statusDot.classList.add('inactive');
            statusText.textContent = 'Hata oluştu';
        }
    }

    function showMessage(text, type) {
        messageArea.innerHTML = `<div class="${type}">${text}</div>`;
        
        setTimeout(() => {
            messageArea.innerHTML = '';
        }, 3000);
    }

    // Sekme değişikliklerini dinle
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
        if (changeInfo.status === 'complete') {
            checkCurrentTab();
        }
    });
});