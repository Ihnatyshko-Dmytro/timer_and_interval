document.addEventListener("DOMContentLoaded", function () {
        let inputText = document.createElement('input');
        inputText.type = 'text';
        let h2 = document.createElement('h2');
        document.body.append(inputText);
        document.body.append(h2);

        let timer;
        inputText.addEventListener('input', () => {
            clearTimeout(timer);
            timer = setTimeout(inputLater, 300);

            function inputLater() {
                h2.textContent = inputText.value;
            }
        });

})
