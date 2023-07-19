let result = document.getElementById("inputBox");

let caluculate=(number)=>{
    result.value += number;
}

let Result=()=>{
    try{
        //evaluate result
        result.value = eval(result.value);
    }
    catch(err){
        alert("Enter the valid result");
    }
}

function crl(){
    result.value = " ";
}

function del(){
    result.value = result.value.slice(0, -1);
}