jsonFile="blog2.json";
fetch(jsonFile)
    .then(response=>
        response.json()       
    )
    .then(data=>{

        allContent=document.getElementById("allContent");

        elements=document.getElementsByClassName("elements")[0];
        elements.getElementsByTagName("date")[0].innerHTML=data["date"];
        elements.getElementsByTagName("h1")[0].innerHTML=data["title"];

        introduction=document.getElementById("introduction");
        introduction.getElementsByTagName("p")[0].innerHTML=data["blogDescription"];

        blogImage=document.getElementById("blogImage");
        blogImage.setAttribute("src",data["blogImage"]);
        blogImage.setAttribute("alt",data["blogImageName"]);

        author = document.getElementsByClassName("author")[0];
        author.getElementsByTagName("a")[0].innerHTML=data["author"];
        author.getElementsByTagName("a")[0].setAttribute("href",data["authorLink"]);
        author.getElementsByTagName("p")[0].innerHTML=data["org"];

        photo_credits=document.getElementById("photo-credits");
        photo_credits.getElementsByTagName("a")[0].innerHTML=data["photo_credits"];
        photo_credits.getElementsByTagName("a")[0].setAttribute("href",data["photo_creditsLink"]);



        main_content=document.getElementsByClassName("body")[0];

        var SubscribeMail=false;
        var id=1;

        Object.entries(data["main_content"]).forEach(([innerContents,values]) => {
            
            if(innerContents==="intro"){
                
                values.forEach(introContent=>{
                    
                    if(Array.isArray(introContent)){
                        element_ul(introContent);
                        
                    }
                    else{
                    element_p(introContent);
                    }

                });
            }

            if(innerContents==="blockElement"){
                values.forEach((blockContent)=>{
                    Object.entries(blockContent).forEach(([key,value])=>{

                        if(key==="title"){
                            element_heading(value,id);
                            id+=1;
                        }

                        else{
                            
                            value.forEach(subContent=>{
                                if(Array.isArray(subContent)){
                                    element_ul(subContent);
                                }
                                else if(subContent instanceof Object ==true){
                                        
                                    element_head_content(subContent);
                                }
                                else{
                                    element_p(subContent); 
                                }
                                
                            })
                            if(SubscribeMail==false){
                                SubscribeMail=true;
                                create_subscriberContent();
                            }                       
                        }
                    });
                })
            }

            if(innerContents==="table-of-content"){
                tableContent=document.getElementById("tableContent").getElementsByTagName("nav")[0].getElementsByTagName("ol")[0];
                Object.entries(values).forEach(([index,tableValue])=>{
                    element_table_content((parseInt(index)+1).toString(),tableValue);
                })
            }
        });        
    })


    .catch(function(err){
        console.log(err);
    });


function element_p(ele_content){
    content_elements=document.createElement("div");
    content_elements.setAttribute("class","elements");
    content_p=document.createElement("p");
    // content=document.createTextNode(ele_content);
    content_p.innerHTML=ele_content;
    // content_p.append(content);
    content_elements.append(content_p);
    main_content.append(content_elements);

}

function element_ul(ele_array){
    content_elements=document.createElement("div");
    content_elements.setAttribute("class","elements");
    unOrderList=document.createElement("ul");
    for(j=0;j<ele_array.length;j++){
        List=document.createElement("li");
        // List_content=document.createTextNode(ele_array[j]);
        List.innerHTML=ele_array[j];
        // List.append(List_content);
        unOrderList.append(List);
        }
        content_elements.append(unOrderList);
        main_content.append(content_elements);

}

function element_heading(ele_content,id){
    content_elements=document.createElement("div");
    content_elements.setAttribute("class","elements");
    h2=document.createElement("h2");
    // content=document.createTextNode(ele_content);
    h2.setAttribute("id","heading".concat(id));
    // h2.append(content);
    h2.innerHTML=ele_content;
    content_elements.append(h2);
    main_content.append(content_elements);
}

function element_h3(ele_content){
    content_elements=document.createElement("div");
    content_elements.setAttribute("class","elements");
    h3=document.createElement("h3");
    // content=document.createTextNode(ele_content);
    h3.innerHTML=ele_content;
    content_elements.append(h3);
    main_content.append(content_elements);
}

function element_table_content(index,ele_array){
    List=document.createElement("li");
    a=document.createElement("a");
    a.setAttribute("href","#heading".concat(index))
    // List_content=document.createTextNode(ele_array);
    a.innerHTML=ele_array;
    List.append(a);
    tableContent.append(List);
}

function element_head_content(ele_obj){
    content_elements=document.createElement("div");
    content_elements.setAttribute("class","elements");
    p=content_p=document.createElement("p");
    b=document.createElement("b");
    content_head=document.createTextNode(ele_obj["heading"]);
    b.append(content_head);
    p.append(b);
    content=document.createTextNode(ele_obj["subcontent"]);
    p.append(content);
    content_elements.append(p);
    main_content.append(content_elements);

}


function create_subscriberContent(){
    newsSubscribe_div=document.createElement("div");
    newsSubscribe_div.setAttribute("class","newsSubscribe");
    main_content.append(newsSubscribe_div);
    newsSubscribeContent_div=document.createElement("div");
    newsSubscribeContent_div.setAttribute("class","newsSubscribeContent");
    newsSubscribe_div.append(newsSubscribeContent_div);
    newsSubscribeHead_div=document.createElement("div");
    newsSubscribeHead_div.setAttribute("class","newsSubscribeHead");
    newsSubscribeContent_div.append(newsSubscribeHead_div);
    h4=document.createElement("h4");
    content=document.createTextNode("The Weekly NewsLetter");
    h4.append(content);
    newsSubscribeHead_div.append(h4);
    p=document.createElement("p");
    content=document.createTextNode("Top jobs & tech news—delivered");
    p.append(content);
    newsSubscribeHead_div.append(p);
    newsSubcribeMail_div=document.createElement("div");
    newsSubcribeMail_div.setAttribute("class","newsSubcribeMail");
    newsSubscribeContent_div.append(newsSubcribeMail_div);
    input=document.createElement("input");
    input.setAttribute("type","search");
    input.setAttribute("placeholder","you@example.com");
    newsSubcribeMail_div.append(input);
    a=document.createElement("a");
    a.setAttribute("href","#");
    content=document.createTextNode("Subscribe");
    a.append(content);
    newsSubcribeMail_div.append(a);
}