function getParagraph1(){
    var inputs = [];
    for(i=1; i<=6; i++){
        inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
    console.log(inputs);
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
} 
function getParagraph2(){
    var input = [];
    for(i=1; i<=6; i++){
        input.push(document.getElementById("para2_input_box_" + i).value);
    }
    console.log(input);
    document.getElementById("showParagraph2").innerHTML = input.join(". ");
}   