// Intro Animation
let intro = document.querySelector('.intro');
let logo1 = document.querySelector('.logo-header');
let logo1Span = document.querySelectorAll('.logo1');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logo1Span.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1) * 400)
        });

        setTimeout (()=>{
            logo1Span.forEach((span, idx)=>{
                
                setTimeout (()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2300)
            
    })
})