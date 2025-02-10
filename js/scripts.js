document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content .tab-pane');

    // tabLinks.forEach(link => {
    //     link.addEventListener('click', function(event) {
    //         event.preventDefault();
    //         const target = this.getAttribute('href');

    //         tabLinks.forEach(link => {
    //             link.classList.remove('active');
    //         });
    //         this.classList.add('active');

    //         tabContents.forEach(content => {
    //             content.classList.remove('show', 'active');
    //         });
    //         document.querySelector(target).classList.add('show', 'active');
    //     });
    // });
});