// data return from ajax query 
var data_query  
var final_commodity_value = 0

function convertButtonClick(){
    
    // text box value 
    var p1 = document.getElementById('p1')
    var q1 = document.getElementById('q1')
    var p2 = document.getElementById('p2')
    var q2 = document.getElementById('q2')

    var attribute = [
        p1.value, q1.value, p2.value, q2.value
    ]
    console.log(attribute)
    data_query = attribute
//    log output
    fetechCommodityJson(attribute)

}





function initActivity(){
    var convert_button = document.getElementById('predict_button')
    convert_button.addEventListener('click', convertButtonClick)
    
}


// Using the fetch API to request commodity data from Flask backend
function fetechCommodityJson(query) {

   // Example JavaScript code to send an array to Flask
    fetch('/get-pipe-leakage', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({data: query}) // Sending data as an object with a key
    })
    .then(response => response.json())
    .then(data => {
    console.log('Response from Flask:', data);
    var result_text = document.getElementById('result')
    var dat = data['data']
    text =  "Leak Loc: " +  dat[1]  + " (M)   "  + "Leak Size: " +  dat[3] + " (l/s)"; 
    // result_text.value = text
    document.getElementById("result").innerHTML = text;
    
    })
    .catch(error => {
    console.error('Error:', error);
    });



    }





document.addEventListener('DOMContentLoaded', initActivity)