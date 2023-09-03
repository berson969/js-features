const startCount = document.getElementById('timer');
let secondsTime = Number(startCount.textContent)

let timer = setInterval(() => {
        if(secondsTime > 0) {
            secondsTime --;

            const hours = Math.floor(secondsTime / 3600);
            const minutes = Math.floor((secondsTime % 3600) / 60);
            const seconds = secondsTime % 60;

            startCount.textContent = `${hours}:${String(minutes).padStart(2, '0')}:
                ${String(seconds).padStart(2, '0')}`;

            } else {
                clearInterval(timer);
                alert("Вы победили в конкурсе!");

                const link = document.createElement('a')
                link.setAttribute('download', '');
                link.setAttribute('target', '_blank');
                link.setAttribute('href', 'https://www.zastavki.com/' +
                    'pictures/originals/2023/Aviation_The_plane_is_landing_at_sunset_160793_.jpg');
                link.click();

            }
     }, 1000);