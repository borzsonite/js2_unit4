// Task 1
let btn_1 = document.getElementById('btn-1');
btn_1.onclick = () => {
    alert('Task 1');
}

// Task 2
document.querySelector('input[type="button"]').onclick = () => {
    alert('Task 2');
}

// Task 3
document.querySelector('.task-3').onclick = () => {
    alert('Task 3');
}
// Task 4
document.getElementById('btn-4').onclick = () => {
    let myCheck = document.querySelector('input[value="Task 4"]');
    alert(myCheck.checked);
}

// Task 5
document.getElementById('btn-5').onclick = () => {
    let myCheck = document.querySelector('input[value="Task 5"]');
    if (myCheck.checked) {
        alert(myCheck.value);
    }
    else alert(myCheck.checked);
}

// Task 6
document.getElementById('btn-6').onclick = () => {
    let myHiddenIn = document.querySelector('input[type="hidden"]');
    alert(myHiddenIn.value);
}

// Task 7
document.getElementById('btn-7').onclick = () => {
    let myPass = document.querySelector('input[type="password"]');
    alert(myPass.value);
    if (myPass.value.length < 6) {
        console.log('Длина пароля должно быть больше 6 символов!')
    }
    myPass.value = '';

}

// Task 8
document.getElementById('btn-8').onclick = () => {
    let task_8 = document.querySelector('.task-8');
    task_8.innerHTML = "<input type ='text' class='innerInput'>" + " <button id='pushBtn'>Push!</button>";
    document.getElementById('pushBtn').onclick = () => {
        alert(document.querySelector('.innerInput').value);
    }
}

// Task 9
document.getElementById('btn-9').onclick = () => {
    let myRadio = document.querySelector('input[type="radio"]');
    if (myRadio.checked) {
        alert(myRadio.value);
        myRadio.checked = false;
    }
    else alert(myRadio.checked);
}

// Task 10
document.getElementById('btn-10').onclick = () => {
    let myColor = document.querySelector('input[type="color"').value;
    document.querySelector('.test-10').style.backgroundColor = myColor;

}

// Task 11
document.getElementById('btn-11').onclick = () => {
    document.querySelector('.color-2').value = document.querySelector('.color-1').value;
}

// Task 12
document.getElementById('btn-12').onclick = () => {
    document.querySelector('span').innerHTML = "Вывод на страницу: ";
    myData = document.querySelector('input[type="date"]').value;
    document.querySelector('span').innerHTML += myData;
}

// Task 13
let myRange = document.querySelector('input[type="range"]');
document.getElementById('btn-13').onclick = () => {
    document.querySelector('.rangeOut').innerHTML = myRange.value;
}
myRange.oninput = () => {
    document.querySelector('.rangeOut').innerHTML = myRange.value;
}

// Task 14
document.getElementById('btn-14').onclick = () => {
    document.querySelector('.text-area-2').innerHTML = document.querySelector('.text-area-1').value;
}

// Task 15
document.getElementById('btn-15').onclick = () => {
    document.querySelector('.text-area-3').value = document.querySelector('.text-to-area').value;
    document.querySelector('.outForTask-15').innerHTML = document.querySelector('.text-to-area').value;
}

// Task 16
document.getElementById('btn-16').onclick = () => {
    let selectValue = document.querySelector('select[name="mySelect-1"]').value;
    document.querySelector('.outForTask-16').innerHTML = selectValue;
}


// Task 18
let mySelect_2 = document.querySelector('select[name="mySelect-2"');
mySelect_2.onchange = () => {
    document.querySelector('.outForTask-18').innerHTML = mySelect_2.value;
}

// Task 19
document.getElementById('btn-19').onclick = (event) => {
event.preventDefault();
let login = document.querySelector('input[name="login"]').value;
let pass = document.querySelector('input[name="pass"]').value;
console.log("login: " + login);
console.log("pass: " + pass);
}


// Task 20
document.getElementById('btn-20').onclick = (event) => {
    event.preventDefault();
    let form = document.forms[1];
    console.log("login: " + form.elements.login.value);
    console.log("pass: " + form.elements.pass.value);

}
