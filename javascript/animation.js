function checkActive(e, lang) {
    let activeNow = document.getElementById(`active`);
    if (lang == `en`) {
        if (e != activeNow) {
            activeNow.id = "noactive";
            e.id = "active";
            if (activeNow.innerText == `price`) {
                document.getElementById(`price-wrapper`).style.transform = `translateX(-430px)`;
                document.getElementById(`img-price-text`).style.display = `none`;
            }
            if (activeNow.innerText == `sign in` || activeNow.innerText == `sign out`) {
                document.getElementById(`sign-in-wrapper`).style.transform = `translateX(-430px)`;
                document.getElementById(`img-sign-in-text`).style.display = `none`;
            }
            if (activeNow.innerText == `sign up`) {
                document.getElementById(`sign-up-wrapper`).style.transform = `translateX(-430px)`;
                document.getElementById(`img-sign-up-text`).style.display = `none`;
            }
            if (activeNow.innerText == `schedule`) {
                document.getElementById(`schedule-wrapper`).style.transform = `translateX(-430px)`;
                document.getElementById(`img-schedule-text`).style.display = `none`;
            }
            if (activeNow.innerText == `my tickets`) {
                document.getElementById(`tickets-wrapper`).style.transform = `translateX(-430px)`;
                document.getElementById(`img-tickets-text`).style.display = `none`;
            }
            if (activeNow.innerText == `contact`) {
                document.getElementById(`contact-wrapper`).style.transform = `translateX(-430px)`;
                document.getElementById(`img-contact-text`).style.display = `none`;
            }

        }

        if (e != activeNow) {
            // activeNow.id = "noactive";
            // e.id="active";
            if (e.innerText == `price`) {
                document.getElementById(`price-wrapper`).style.transform = `translateX(0px)`;
                document.getElementById(`img-price-text`).style.display = `initial`;
            }
            if (e.innerText == `sign in` || e.innerText == `sign out`) {
                document.getElementById(`img-sign-in-text`).style.display = `initial`;
                document.getElementById(`sign-in-wrapper`).style.transform = `translateX(0px)`;
            }
            if (e.innerText == `sign up`) {
                document.getElementById(`sign-up-wrapper`).style.transform = `translateX(0px)`;
                document.getElementById(`img-sign-up-text`).style.display = `initial`;
            }
            if (e.innerText == `schedule`) {
                document.getElementById(`schedule-wrapper`).style.transform = `translateX(0px)`;
                document.getElementById(`img-schedule-text`).style.display = `initial`;
            }
            if (e.innerText == `my tickets`) {
                document.getElementById(`tickets-wrapper`).style.transform = `translateX(0px)`;
                document.getElementById(`img-tickets-text`).style.display = `initial`;
            }
            if (e.innerText == `contact`) {
                document.getElementById(`contact-wrapper`).style.transform = `translateX(0px)`;
                document.getElementById(`img-contact-text`).style.display = `initial`;
            }

        }
    }
    
    if(lang == `rus`) {
        if(e != activeNow){
            activeNow.id = "noactive";
            e.id="active";
            if(activeNow.innerText == `цена`) {
                document.getElementById(`price-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-price-text`).style.display=`none`;
            }
            if(activeNow.innerText == `авторизоваться` || activeNow.innerText == `Выход`) {
                document.getElementById(`sign-in-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-sign-in-text`).style.display=`none`;
            }
            if(activeNow.innerText == `Регистрация`) {
                document.getElementById(`sign-up-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-sign-up-text`).style.display=`none`;
            }
            if(activeNow.innerText == `график`) {
                document.getElementById(`schedule-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-schedule-text`).style.display=`none`;
            }
            if(activeNow.innerText == `Билеты`) {
                document.getElementById(`tickets-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-tickets-text`).style.display=`none`;
            }
            if(activeNow.innerText == `контакт`) {
                document.getElementById(`contact-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-contact-text`).style.display=`none`;
            }
            if(activeNow.innerText == `Билеты`) {
                document.getElementById(`tickets-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-tickets-text`).style.display=`none`;
            }
        }
        if(e != activeNow){
            // activeNow.id = "noactive";
            // e.id="active";
            if(e.innerText == `цена`) {
                document.getElementById(`price-wrapper`).style.transform=`translateX(0px)`;
                document.getElementById(`img-price-text`).style.display=`initial`;
            }
            if(e.innerText == `авторизоваться` || e.innerText == `Выход`) {
                document.getElementById(`img-sign-in-text`).style.display=`initial`;
                document.getElementById(`sign-in-wrapper`).style.transform=`translateX(0px)`;
            }
            if(e.innerText == `Регистрация`) {
                document.getElementById(`sign-up-wrapper`).style.transform=`translateX(0px)`;
                document.getElementById(`img-sign-up-text`).style.display=`initial`;
            }
            if(e.innerText == `график`) {
                document.getElementById(`schedule-wrapper`).style.transform=`translateX(0px)`;
                document.getElementById(`img-schedule-text`).style.display=`initial`;
            }
            if(e.innerText == `Билеты`) {
                document.getElementById(`tickets-wrapper`).style.transform=`translateX(0px)`;
                document.getElementById(`img-tickets-text`).style.display=`initial`;
            }
            if(e.innerText == `контакт`) {
                document.getElementById(`contact-wrapper`).style.transform=`translateX(0px)`;
                document.getElementById(`img-contact-text`).style.display=`initial`;
            }
    
        }
    }

    if(lang=`ge`){
        if(e != activeNow){
            activeNow.id = "noactive";
            e.id="active";
            if(activeNow.innerText == `ფასი`) {
                document.getElementById(`price-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-price-text`).style.display=`none`;
            }
            if(activeNow.innerText == `შესვლა` || activeNow.innerText == `გამოსვლა`) {
                document.getElementById(`sign-in-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-sign-in-text`).style.display=`none`;
            }
            if(activeNow.innerText == `რეგისტრაცია`) {
                document.getElementById(`sign-up-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-sign-up-text`).style.display=`none`;
            }
            if(activeNow.innerText == `განრიგი`) {
                document.getElementById(`schedule-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-schedule-text`).style.display=`none`;
            }
            if(activeNow.innerText == `ბილეთები`) {
                document.getElementById(`tickets-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-tickets-text`).style.display=`none`;
            }
            if(activeNow.innerText == `კონტაქტი`) {
                document.getElementById(`contact-wrapper`).style.transform=`translateX(-430px)`;
                document.getElementById(`img-contact-text`).style.display=`none`;
            }
            
    
        }
        if(e != activeNow){
            // activeNow.id = "noactive";
            // e.id="active";
            if(e.innerText == `ფასი`) {
                document.getElementById(`price-wrapper`).style.transform=`translateX(0px)`;
                document.getElementById(`img-price-text`).style.display=`initial`;
            }
            if(e.innerText == `შესვლა` || e.innerText == `გამოსვლა`) {
                document.getElementById(`img-sign-in-text`).style.display=`initial`;
                document.getElementById(`sign-in-wrapper`).style.transform=`translateX(0px)`;
            }
            if(e.innerText == `რეგისტრაცია`) {
                document.getElementById(`sign-up-wrapper`).style.transform=`translateX(0px)`;
                document.getElementById(`img-sign-up-text`).style.display=`initial`;
            }
            if(e.innerText == `განრიგი`) {
                document.getElementById(`schedule-wrapper`).style.transform=`translateX(0px)`;
                document.getElementById(`img-schedule-text`).style.display=`initial`;
            }
            if(e.innerText == `ბილეთები`) {
                document.getElementById(`tickets-wrapper`).style.transform=`translateX(0px)`;
                document.getElementById(`img-tickets-text`).style.display=`initial`;
            }
            if(e.innerText == `კონტაქტი`) {
                document.getElementById(`contact-wrapper`).style.transform=`translateX(0px)`;
                document.getElementById(`img-contact-text`).style.display=`initial`;
            }
    
        }
    }
}
