let buttons = document.querySelectorAll('.btn')
let inp = document.querySelector('#display')

buttons.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
        if (btn.innerHTML == 'C') {
            inp.value = ''
        }
        else if (btn.innerHTML == '=') {
            try {
                let ans = eval(inp.value)
                inp.value = ans;
            }
            catch (err) {
                inp.value = "Error";
            }
        }
        else if (btn.innerHTML == 'X') {
            display.value = display.value.slice(0, -1);
        }
        else {
            inp.value += btn.innerHTML;
        }
    })

})
