
let display = document.getElementById("display");

let display_result = "";
let btn = document.querySelectorAll('button');
let flag = false;

btn.forEach(select => {
    select.addEventListener(('click'), (Me) => {
        let checker = Me.target.innerHTML;

        if (checker === 'on') {
            display.value = '';
            display.placeholder = '0';
            display_result = '';
            flag = true;
        } else if (flag === true) {
            if (checker === '=') {
                display_result = eval(display_result);
                display.value = display_result;
            } else if (checker === 'AC') {
                display.value = "";
                display_result = "";
    
            } else if (checker === 'clr') {
                display_result = display_result.slice(0, -1);
                display.value = display_result;
            } else if (checker === 'off') {
                display.value = "";
                display.placeholder="off";
                display_result = "";
                flag = false;
               
            } else {
                display_result += checker;
                display.value = display_result;
            }
        }
    })
})
