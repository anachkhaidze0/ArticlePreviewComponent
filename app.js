const shareButton = document.getElementById('share-button');
const shareDiv = document.getElementById('share-div');
const account = document.getElementById('account');

shareHandler = () => {
    shareDiv.style.display = 'flex';
    shareDiv.style.marginTop = '-5rem';
}


shareButton.addEventListener('click', shareHandler);