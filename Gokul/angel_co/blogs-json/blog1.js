var xhttp=new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(xhttp.readyState==4&&xhttp.status==200){
        var data=JSON.parse(xhttp.response);
        
        // var date=document.createElement("data");
        
        // date.innerHTML= data["date"];
        
        // var h1=document.createElement("h1");
        // h1.innerHTML=data["title"]
        // console.log(date);
        // var elements=document.getElementById("elements");
        // elements.insertBefore(date,elements.firstChild);
        // elements.insertBefore(h1,elements.firstChild);

        allContent=document.getElementById("allContent");

        var innerContent_div=document.createElement("div");
        innerContent_div.setAttribute("class","innerContents");
        var elements_div=document.createElement("div");
        elements_div.setAttribute("class","elements");
        innerContent_div.append(elements_div);

        var date=document.createElement('data');
        var date_text=document.createTextNode(data["date"]);
        date.append(date_text);
        elements_div.append(date);

        var h1=document.createElement("h1");
        var h1_text=document.createTextNode(data["title"]);
        h1.append(h1_text);
        elements_div.append(h1);

        var introduction_div=document.createElement("div");
        introduction_div.setAttribute("class","introduction");
        var p=document.createElement('p');
        var p_text=document.createTextNode(data["blogDescription"]);
        p.append(p_text);
        introduction_div.append(p);
        elements_div.append(introduction_div);
        

        allContent.append(innerContent_div);

        var innerContent_div=document.createElement("div");
        innerContent_div.setAttribute("class","innerContents");

        img=document.createElement("img");
        img.setAttribute("class","blogImage");
        img.setAttribute("src",data["blogImage"]);
        img.setAttribute("alt",data["blogImageName"]);
        innerContent_div.append(img);

        allContent.append(innerContent_div);
        


    }
};
xhttp.open("GET","blog1.json",true);
xhttp.send();
