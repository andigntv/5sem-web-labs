(function() {
    window.addEventListener('load', function() {
        var loadTime =  window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
        var footer = document.getElementsByTagName('footer')[0];
        footer.innerHTML += '<span style="font-size: 2vh ">Loading time: <span style="color: #D1D1D1">' + loadTime + '</span> ms</span>';
    });
})();