function notify(message) {
    const notification = document.querySelector('#notification');
    const post = document.querySelector('.post');

    notification.style.display = 'block';
    notification.textContent = message;
    notification.addEventListener('click',(e)=>{
       e.target.style.display = 'none';
    });
}