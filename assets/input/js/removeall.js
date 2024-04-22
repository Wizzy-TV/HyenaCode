function clearall() {
    if (confirm('Are you sure you want to remove all the code?')) {
        console.log('Code removing in progress...')

        localStorage.setItem('savedHTML', '');
        localStorage.setItem('savedCSS', '');
        localStorage.setItem('savedJS', '');

        location.reload()
    } else {
        console.log('Removing code Canceled!');
    }
}