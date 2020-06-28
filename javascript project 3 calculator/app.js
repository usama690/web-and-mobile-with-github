function getNumber(num){
    var result = document.getElementById("inp");
    result.value += num;
}

function clearresult(){
    var result = document.getElementById("inp");
    result.value = ""
}

function getresult(){
    var result = document.getElementById("inp");
    result.value = eval(result.value);
}