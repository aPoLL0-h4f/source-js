window.addEventListener("load", function(e){
    const daysText = document.querySelector(".days");
    const hoursText = document.querySelector(".hours");
    const minutesText = document.querySelector(".minutes");
    const secondsText = document.querySelector(".seconds");
    // Tue May 16 2024 20:10:17 GMT+0700 (Indochina Time)
    function countdown(date){
        const currentDate = new Date().getTime();
        const endDate = new Date(date).getTime();
        if(isNaN(endDate) || endDate - currentDate <= 0){
            return;
        }
        setInterval(caculate, 1000);
        function caculate(){
            let days,hours,minutes, seconds;
            const now = new Date();
            const startDate = now.getTime();
            let timeRemaining = parseInt((endDate - startDate) / 1000 );
            if(timeRemaining > 0){
                days = parseInt(timeRemaining/86400);
                timeRemaining = timeRemaining % 86400;
                hours = parseInt(timeRemaining / 3600);
                timeRemaining = timeRemaining % 3600;
                minutes = parseInt(timeRemaining / 60);
                timeRemaining = timeRemaining % 60;
                seconds = timeRemaining;
                
                daysText.textContent= `0${days}`.slice(-2);
                hoursText.textContent= `0${hours}`.slice(-2);
                minutesText.textContent= `0${minutes}`.slice(-2);
                secondsText.textContent= `0${seconds}`.slice(-2);
            }else{
                return;
            }
        }
    }
    countdown("Sun Jun 16 2024 22:06:14 GMT+0700 (Indochina Time)");
});


