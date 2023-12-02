var currentFileName = document.location.pathname.split('/').pop();
if (currentFileName === 'profile.html') {
    var button = document.getElementsByClassName('profile_profile')[0];
    button.style.textDecoration = 'None';
    button.style.backgroundColor = '#17A5EF';
    button.style.marginTop = 'auto';
    button.style.marginBottom = 'auto';
    button.style.fontSize = '24px';
    button.style.color = '#CACACA';
    button.style.fontWeight = 'bold';
    button.style.textShadow = '1px 1px 1px #222222';
    button.style.padding = '5px';
    button.style.borderStyle = 'solid';
    button.style.borderColor = '#CACACA';
    button.style.borderRadius = '5px';
    button.style.boxShadow = '2px 2px 8px #808080';
}