const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');

openNav.addEventListener('click', (e) => {
    document.querySelector('.sidebarnav').classList.add('sidebarnavactive');
});
closeNav.addEventListener('click', (e) => {
    document.querySelector('.sidebarnav').classList.remove('sidebarnavactive');
});

document.body.addEventListener('click', (e) => {
    if(!e.target.closest('.sidebarnav')) {
        if(document.querySelector('.sidebarnav').classList.contains('sidebarnavactive') && !e.target.classList.contains('open-nav')){
            document.querySelector('.sidebarnav').classList.remove('sidebarnavactive');
        }
    }
})