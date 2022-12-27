function myFunction1() {
    var checkBox = document.getElementById("option1");
    // Get the output text
    var text = document.getElementById("2021");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
        var textt = document.getElementById("usrform2021");
        textt.style.display = "none";
        textt = document.getElementById("usrform2022");
        textt.style.display = "none";
        textt = document.getElementById("usrform2023");
        textt.style.display = "none";
    }
}

function myFunction2() {
    var checkBox = document.getElementById("option2");
    // Get the output text
    var text = document.getElementById("2022");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
        var textt = document.getElementById("usrform2021");
        textt.style.display = "none";
        textt = document.getElementById("usrform2022");
        textt.style.display = "none";
        textt = document.getElementById("usrform2023");
        textt.style.display = "none";
    }
}

function myFunction3() {
    var checkBox = document.getElementById("option3");
    // Get the output text
    var text = document.getElementById("2023");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
        var textt = document.getElementById("usrform2021");
        textt.style.display = "none";
        textt = document.getElementById("usrform2022");
        textt.style.display = "none";
        textt = document.getElementById("usrform2023");
        textt.style.display = "none";
    }
}


document.getElementById("month21").onchange = function () {
    var text = document.getElementById("usrform2021");
    if (this.value === "1") {
        text.style.display = "block";
    }
    else if (this.value == "2") {
        text.style.display = "block";
    }
    else if (this.value == "3") {
        text.style.display = "block";
    }
    else if (this.value == "4") {
        text.style.display = "none";
    }
};

document.getElementById("month22").onchange = function () {
    var text = document.getElementById("usrform2022");
    if (this.value === "1") {

        text.style.display = "block";
    }
    else if (this.value == "2") {
        text.style.display = "block";
    }
    else if (this.value == "3") {
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }
};

document.getElementById("month23").onchange = function () {
    var text = document.getElementById("usrform2023");
    if (this.value === "1") {

        text.style.display = "block";
    }
    else if (this.value == "2") {
        text.style.display = "block";
    }
    else if (this.value == "3") {
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }
};

document.getElementById("month23").onchange = function () {
    var text = document.getElementById("usrform2023");
    if (this.value === "1") {

        text.style.display = "block";
    }
    else if (this.value == "2") {
        text.style.display = "block";
    }
    else if (this.value == "3") {
        text.style.display = "block";
    }
    else {
        text.style.display = "none";
    }
};

var input = document.getElementById('a1');
input.addEventListener('input', updateValuea1);

function updateValuea1(e) {
    var ok = document.getElementById('a2');
    ok.disabled = true;
    ok.value = '';
    ok = document.getElementById('a3');
    ok.disabled = true; ok.value = '';
    ok.value = '';
    ok = document.getElementById('a4');
    ok.disabled = true; ok.value = '';
    ok.value = '';
}

input = document.getElementById('a2');
input.addEventListener('input', updateValuea2);

function updateValuea2(e) {
    var ok = document.getElementById('a1');
    ok.disabled = true;
    ok.value = '';
    ok = document.getElementById('a3');
    ok.disabled = true;
    ok.value = '';
    ok = document.getElementById('a4');
    ok.disabled = true;
    ok.value = '';
}

input = document.getElementById('a3');
input.addEventListener('input', updateValuea3);

function updateValuea3(e) {

    var ok = document.getElementById('a1');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('a2');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('a4');
    ok.disabled = true; ok.value = '';
}

input = document.getElementById('a4');
input.addEventListener('input', updateValuea4);

function updateValuea4(e) {

    var ok = document.getElementById('a1');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('a2');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('a3');
    ok.disabled = true; ok.value = '';
}

input = document.getElementById('b1');
input.addEventListener('input', updateValueb1);

function updateValueb1(e) {

    var ok = document.getElementById('b2');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('b3');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('b4');
    ok.disabled = true; ok.value = '';
}

input = document.getElementById('b2');
input.addEventListener('input', updateValueb2);

function updateValueb2(e) {

    var ok = document.getElementById('b1');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('b3');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('b4');
    ok.disabled = true; ok.value = '';
}

input = document.getElementById('b3');
input.addEventListener('input', updateValueb3);

function updateValueb3(e) {

    var ok = document.getElementById('b1');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('b2');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('b4');
    ok.disabled = true; ok.value = '';
}

input = document.getElementById('b4');
input.addEventListener('input', updateValueb4);

function updateValueb4(e) {

    var ok = document.getElementById('b1');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('b2');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('b3');
    ok.disabled = true; ok.value = '';
}

/// c

input = document.getElementById('c1');
input.addEventListener('input', updateValuec1);

function updateValuec1(e) {

    var ok = document.getElementById('c2');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('c3');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('c4');
    ok.disabled = true; ok.value = '';
}

input = document.getElementById('c2');
input.addEventListener('input', updateValuec2);

function updateValuec2(e) {

    var ok = document.getElementById('c1');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('c3');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('c4');
    ok.disabled = true; ok.value = '';
}

input = document.getElementById('c3');
input.addEventListener('input', updateValuec3);

function updateValuec3(e) {

    var ok = document.getElementById('c1');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('c2');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('c4');
    ok.disabled = true; ok.value = '';
}

input = document.getElementById('c4');
input.addEventListener('input', updateValuec4);

function updateValuec4(e) {

    var ok = document.getElementById('c1');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('c2');
    ok.disabled = true; ok.value = '';
    ok = document.getElementById('c3');
    ok.disabled = true; ok.value = '';
}

input = document.getElementById("r1");
input.addEventListener('click', function () {
    var ok = document.getElementById('a1');
    ok.disabled = false; ok.value = '0';
    ok = document.getElementById('a2');
    ok.disabled = false; ok.value = '0';
    ok = document.getElementById('a3');
    ok.disabled = false; ok.value = '0';
    ok = document.getElementById('a4');
    ok.disabled = false; ok.value = '0';

})

input = document.getElementById("r2");
input.addEventListener('click', function () {
    var ok = document.getElementById('b1');
    ok.disabled = false; ok.value = '0';
    ok = document.getElementById('b2');
    ok.disabled = false; ok.value = '0';
    ok = document.getElementById('b3');
    ok.disabled = false; ok.value = '0';
    ok = document.getElementById('b4');
    ok.disabled = false; ok.value = '0';

})
input = document.getElementById("r3");
input.addEventListener('click', function () {
    var ok = document.getElementById('c1');
    ok.disabled = false; ok.value = '0';
    ok = document.getElementById('c2');
    ok.disabled = false; ok.value = '0';
    ok = document.getElementById('c3');
    ok.disabled = false; ok.value = '0';
    ok = document.getElementById('c4');
    ok.disabled = false; ok.value = '0';

})

input = document.getElementById("s1");
input.addEventListener('click', function (e) {
    if (document.getElementById('a1').value !== '') {
        var ok = document.getElementById('a1');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('a2');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('a3');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('a4');
        ok.disabled = false;
        ok.value = result;
    }
    else if (document.getElementById('a2').value !== '') {
        var ok = document.getElementById('a2');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('a1');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('a3');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('a4');
        ok.disabled = false;
        ok.value = result;
    }
    else if (document.getElementById('a3').value !== '') {
        var ok = document.getElementById('a3');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('a1');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('a2');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('a4');
        ok.disabled = false;
        ok.value = result;
    }
    else if (document.getElementById('a4').value !== '') {
        var ok = document.getElementById('a4');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('a1');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('a2');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('a3');
        ok.disabled = false;
        ok.value = result;
    }
    e.preventDefault();
})

input = document.getElementById("s2");
input.addEventListener('click', function (e) {
    if (document.getElementById('b1').value !== '') {
        var ok = document.getElementById('b1');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('b2');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('b3');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('b4');
        ok.disabled = false;
        ok.value = result;
    }
    else if (document.getElementById('b2').value !== '') {
        var ok = document.getElementById('b2');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('b1');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('b3');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('b4');
        ok.disabled = false;
        ok.value = result;
    }
    else if (document.getElementById('b3').value !== '') {
        var ok = document.getElementById('b3');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('b1');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('b2');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('b4');
        ok.disabled = false;
        ok.value = result;
    }
    else if (document.getElementById('b4').value !== '') {
        var ok = document.getElementById('b4');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('b1');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('b2');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('b3');
        ok.disabled = false;
        ok.value = result;
    }
    e.preventDefault();
})

input = document.getElementById("s3");
input.addEventListener('click', function (e) {
    if (document.getElementById('c1').value !== '') {
        var ok = document.getElementById('c1');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('c2');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('c3');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('c4');
        ok.disabled = false;
        ok.value = result;
    }
    else if (document.getElementById('c2').value !== '') {
        var ok = document.getElementById('c2');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('c1');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('c3');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('c4');
        ok.disabled = false;
        ok.value = result;
    }
    else if (document.getElementById('c3').value !== '') {
        var ok = document.getElementById('c3');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('c1');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('c2');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('c4');
        ok.disabled = false;
        ok.value = result;
    }
    else if (document.getElementById('c4').value !== '') {
        var ok = document.getElementById('c4');
        var a = parseInt(ok.value) - 100;
        var b = parseInt(ok.value) + 100;
        console.log(a);
        console.log(b);
        var step1 = b - a + 1;
        var step2 = Math.random() * step1;
        var result = Math.floor(step2) + a;
        ok = document.getElementById('c1');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('c2');
        ok.disabled = false;
        ok.value = result;
        step2 = Math.random() * step1;
        result = Math.floor(step2) + a;
        ok = document.getElementById('c3');
        ok.disabled = false;
        ok.value = result;
    }
    e.preventDefault();
})
