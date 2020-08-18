jsonFile="blog1.json";
fetch(jsonFile)
    .then(response=>
         response.json()
    )
    .then(data=>{

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
        
        var innerContent_div=document.createElement("div");
        innerContent_div.setAttribute("class","innerContents");
        var authorContent_div=document.createElement("div");
        authorContent_div.setAttribute("class","authorContent");
        innerContent_div.append(authorContent_div);

        var author_div=document.createElement("div");
        author_div.setAttribute("class","author");
        authorContent_div.append(author_div);       

        var a = document.createElement("a");
        a.setAttribute("href",data["authorLink"]);
        var content=document.createTextNode(data["author"]);
        a.append(content);
        author_div.append(a);

        var p=document.createElement("p");
        var content=document.createTextNode(data["org"]);
        p.append(content);
        author_div.append(p);

        var p=document.createElement("p");
        var content=document.createTextNode("Illustration by ");
        p.append(content);
        authorContent_div.append(p);
        var a=document.createElement("a");
        var content=document.createTextNode(data["photo-credict"]);
        a.append(content);
        a.setAttribute("href",data["photo-credictLink"]);
        p.append(a);

        allContent.append(innerContent_div);

        


        
    })


    .catch(function(err){
        console.log(err);
    });