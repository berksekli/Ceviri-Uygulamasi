document.addEventListener('DOMContentLoaded', function() {
    const translateBtn = document.getElementById('translateBtn');
    const inputText = document.getElementById('inputText');
    const translationResult = document.getElementById('translationResult');

    translateBtn.addEventListener('click', function() {
        const textToTranslate = inputText.value;
        const apiKey = process.env.API_KEY;

        const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                q: textToTranslate,
                source: 'en', 
                target: 'tr'  
            })
        })
        .then(response => response.json())
        .then(data => {
            const translatedText = data.data.translations[0].translatedText;
            translationResult.innerText = translatedText;
        })
        .catch(error => {
            console.error('Çeviri hatası:', error);
            translationResult.innerText = 'Çeviri yapılamadı.';
        });
    });
});