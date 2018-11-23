if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js')
            .then(function (reg) {
                console.log('sw is ok', reg);
            })
            .catch(function (err) {
                console.log('sw error', err);
            })
    });
}