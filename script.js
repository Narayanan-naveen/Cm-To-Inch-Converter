function convert() {
    var cmval = Number(document.getElementById('input-num').value)
    let inchval = cmval / 2.56
    let inch = document.getElementById('inch')
    inch.innerHTML = inchval.toFixed(2) + " Inches"
}
reset.onclick = () => {
    let input = document.getElementById('input-num')
    let Inches = document.getElementById('inch')
    input.value = " "
    Inches.innerHTML = ""
}