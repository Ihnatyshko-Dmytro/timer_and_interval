document.addEventListener("DOMContentLoaded", function () {
        let button = document.querySelector('.go');
        let input = document.querySelector('#number');
        let out = document.querySelector('.second');
        let time = 0;
        let tr;
        button.addEventListener('click', () => {
            clearInterval(tr);
            time = +input.value;
            out.textContent = time;
            tr = setInterval(myTimer, 1000);

            function myTimer() {
                if (time == 0) {
                    clearInterval(tr);
                    return;
                }
                time--;
                out.textContent = time;
            }
        })

})
