function tinhToan() {
    let number1 = document.getElementById("vl").value;
    let number2 = document.getElementById("hh").value;
    let number3 = document.getElementById("sh").value;
    let sum = parseInt(number1) + parseInt(number2) + parseInt(number3);
    let tb = (parseInt(number1) + parseInt(number2) + parseInt(number3))/3 ;
    // tb.tofix(2);
    document.getElementById("tong").value = sum;
    document.getElementById("trungbinh" ).value = tb.toFixed(2);
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
    document.getElementById("chuvi").value = p.toFixed(2);
    document.getElementById("dientich").value = s.toFixed(2);
}
function convertMoney() {
    let a = 23000;
    let b = 1;
    let c = document.getElementById("from").value;

    let mo = document.getElementById("money").value;
    let sum=0;
    if (c == "USD"){
         sum = a * parseInt(mo)
    } else
        sum = b * mo

    document.getElementById("Money").value=sum;
}
    // let e = document.getElementById("VN").value || let e = document.getElementById("American")