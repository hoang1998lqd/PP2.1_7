function tinhToan() {
    let number1 = document.getElementById("vl").value;
    let number2 = document.getElementById("hh").value;
    let number3 = document.getElementById("sh").value;
    let sum = parseInt(number1) + parseInt(number2) + parseInt(number3);
    let tb = (parseInt(number1) + parseInt(number2) + parseInt(number3))/3 ;
    document.getElementById("tong").value = sum
    document.getElementById("trungbinh" ).value = tb;
}
function convertTemp() {
    let c = document.getElementById("doc").value;
    let cv = c * (9 / 5) + 32;
    document.getElementById("dof" ).value = cv;
}
function calculateCircle () {
    let r = document.getElementById("bankinh").value;
    let p = r * 2 * 3.14;
    let s = (r * r * 3.14)/4;
    document.getElementById("chuvi").value = p;
    document.getElementById("dientich").value = s;
}