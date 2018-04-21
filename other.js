document.getElementById("in").oninput = function() {
    //шифровка
    const offset = 3;
    let help = document.getElementById("help");
    //из кода в символ
    /* help.innerHTML = String.fromCharCode(97); */
    let str = this.value;
    //из символа в код
    let out = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code + offset;
        out += String.fromCharCode(code);
    }
    document.getElementById('out').innerHTML = out;
}

document.getElementById('in2').oninput = function() {
    const offset = 3;
    let str = this.value;
    let out = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code - offset;
        out += String.fromCharCode(code);
    }
    document.getElementById('out3').innerHTML = out;
}