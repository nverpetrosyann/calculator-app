const input = document.getElementById("display")

function appendtodisplay (n) {
    input.value += n
    
}

function clearD () {
    input.value = ""

}

function calculate () {
    try {
        input.value = eval(input.value)
    } catch (err) {
        input.value = "Error";
    }
} 
