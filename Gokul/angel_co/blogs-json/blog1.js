console.log("Hello");
jsonFile="blog1.json";
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
        
        // for(i=0;i<data["main_content"].length;i++){
        //     if(data["main_content"][i]==="intro"){
        //     content_elements=document.createElement("div");
        //     content_elements.setAttribute("class","elements");

        //     if(Array.isArray(data["main_content"]["intro"][i])){
        //         // unOrderList=document.createElement("ul");

        //         element_ul(main_content,data["main_content"]["intro"][i]);

        //         // for(j=0;j<data["main_content"]["intro"][i].length;j++){
        //         // List=document.createElement("li");
        //         // List_content=document.createTextNode(data["main_content"]["intro"][i][j]);
        //         // List.append(List_content);
        //         // unOrderList.append(List);
        //         // }
        //         // content_elements.append(unOrderList);
        //         // main_content.append(content_elements);
        //         continue;
        //     }
        //     element_p(main_content,data["main_content"]["intro"][i])
        //     // content_p=document.createElement("p");
        //     // content=document.createTextNode(data["main_content"]["intro"][i]);
        //     // content_p.append(content);
        //     // content_elements.append(content_p);
        //     // main_content.append(content_elements);
        //     }
        // }
        
        Object.entries(data["main_content"]).forEach(([innerContents,values]) => {
            
            if(innerContents==="intro"){
                
                values.forEach(introContent=>{
                    content_elements=document.createElement("div");
                    content_elements.setAttribute("class","elements");
                    if(Array.isArray(introContent)){
                        element_ul(introContent);
                        
                    }
                    else{
                    element_p(introContent);
                    }

                });
            }

            if(innerContents.startsWith("blockElement")){
                if(innerContents==="blockElement2"){
                    create_subscriberContent();
                }
                Object.entries(values).forEach(([key,value])=>{
                    content_elements=document.createElement("div");
                    content_elements.setAttribute("class","elements");

                    if(key==="title"){
                        element_heading(value,innerContents.slice(-1));
                    }

                    else{
                        // if(value instanceof Object == true){
                        if(typeof(value)==="object"){
                            value.forEach(subContent=>{
                                if(subContent instanceof Object ==true){

                                    Object.entries(subContent).forEach(([title,innerSubContent])=>{
                                        // console.log(title,subContent);
                                        if(title==="heading"){
                                            element_h3(innerSubContent);
                                        }
                                        else if(title==="subcontent"){
                                            innerSubContent.forEach(subContentText=>{
                                                if(Array.isArray(subContentText)){
                                                    element_ul(subContentText);
                                                }
                                                else{
                                                    element_p(subContentText);
                                                }
                                            })
                                        }
                                    });
                                }
                                else{
                                    element_p(subContent); 
                                }
                                
                            })   
                        }                        
                    }
                });
            }

            if(innerContents==="signIn"){
                hr=document.createElement('hr');
                content_elements.append(hr);
                main_content.append(content_elements);
                element_p(values);
            }

            if(innerContents==="table-of-content"){
                tableContent=document.getElementById("tableContent").getElementsByTagName("nav")[0].getElementsByTagName("ol")[0];
                values.forEach(tableValue=>{
                    element_table_content(tableValue);
                })
            }
        });        
    })


    .catch(function(err){
        console.log(err);
    });


function element_p(ele_content){
    content_p=document.createElement("p");
    content=document.createTextNode(ele_content);
    content_p.append(content);
    content_elements.append(content_p);
    main_content.append(content_elements);

}

function element_ul(ele_array){
    unOrderList=document.createElement("ul");
    for(j=0;j<ele_array.length;j++){
        List=document.createElement("li");
        List_content=document.createTextNode(ele_array[j]);
        List.append(List_content);
        unOrderList.append(List);
        }
        content_elements.append(unOrderList);
        main_content.append(content_elements);

}

function element_heading(ele_content,id){
    h2=document.createElement("h2");
    content=document.createTextNode(ele_content);
    h2.setAttribute("id","heading".concat(id));
    h2.append(content);
    content_elements.append(h2);
    main_content.append(content_elements);
}

function element_h3(ele_content){
    h3=document.createElement("h3");
    content=document.createTextNode(ele_content);
    h3.append(content);
    content_elements.append(h3);
    main_content.append(content_elements);
}

function element_table_content(ele_array){
    List=document.createElement("li");
    List_content=document.createTextNode(ele_array);
    List.append(List_content);
    tableContent.append(List);
}

function create_subscriberContent(){
    // <div class="newsSubscribe">
    //                 <div class="newsSubscribeContent">
    //                     <div class="newsSubscribeHead">
    //                         <h4>The Weekly NewsLetter</h4>
    //                         <p>Top jobs & tech news—delivered</p>
    //                     </div>
    //                     <div class="newsSubcribeMail">
    //                         <input type="search" placeholder="you@example.com">
    //                         <a href="#">Subscribe</a>
    //                     </div>
    //                 </div>
    // </div>
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