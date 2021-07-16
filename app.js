const itemsToReveal = document.querySelectorAll('.anim');

observer = new IntersectionObserver(showItem);

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
        else{
            entry.target.classList.remove('active')
        }
    })
}

// observer = new IntersectionObserver((entries) => {
    
// })

function makePhoneCall() {
    window.open('tel:064-710-4448');
}

itemsToReveal.forEach(item => {
    observer.observe(item)}
)

const jsDday = document.querySelector(".js-Dday");

function getDays(){
    const today = new Date();
    const Dday = new Date(2021, 7, 31) ;
    const daysLeft = today.getDate() - Dday.getDate();
    const result = Math.abs(daysLeft);
    jsDday.innerHTML = `${daysLeft > 0 ? `D+${result}` : `D-${result}`}`;
}


function init(){
    getDays();
}

init();
