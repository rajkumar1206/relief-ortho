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
});

let k=0;
const rollText = document.querySelectorAll('.second-text h2');
console.log(rollText[0].style)
setInterval(() => {
    if(k==0) {
        rollText.forEach(r => {
            r.style.transform = "translateY(-100%)";
        });
        
    } else if (k==1) {
        rollText.forEach(r => {
            r.style.transform = "translateY(-200%)";
        });
        
    } else if (k==2) {
        rollText.forEach(r => {
            r.style.transform = "translateY(-300%)";
        });
    } else {
        rollText.forEach(r => {
            r.style.transform = "translateY(-0%)";
        });
    }
    k=(k+1)%5
}, 3000);