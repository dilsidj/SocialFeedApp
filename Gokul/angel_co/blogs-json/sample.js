// var ourRequest=new XMLDocument();
// ourRequest.overrideMimeType('application/json');
// ourRequest.open('GET','blog1.json');
// ourRequest.onload=function(){
//     var ourData=JSON.parse(ourRequest.response);
//     console.log(ourData);
// }
// ourRequest.send();

console.log("jo")

// var myInit={
//     methdod:'GET',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     mode:'cors',
//     cache:'default'
// };

// var jsonFile=new Request("./blog1.json",myInit);
// // var data=JSON.parse(jsonFile);
// // console.log(data);

jsonFile="blog1.json";
fetch(jsonFile)
    .then(response=>
         response.json()
    )
    .then(data=>{
        console.log(data["author"]);
        console.log(data["title"]);
    })
    // .then(console.log(data))
    .catch(function(err){
        console.log(err);
    });


// var xhttp=new XMLHttpRequest();
// xhttp.onreadystatechange=function(){
//     if(xhttp.readyState==4&&xhttp.status==200){
//         var javaobj=JSON.parse(xhttp.response);
//         console.log(javaobj);

//     }
// };
// xhttp.open("GET","blog1.json",true);
// xhttp.send();
