(this["webpackJsonpmy-first-app"]=this["webpackJsonpmy-first-app"]||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/user-1.537386ab.jpg"},18:function(e,a,t){e.exports=t.p+"static/media/girl-user.42a59a6b.jpg"},33:function(e,a,t){e.exports=t(55)},38:function(e,a,t){},42:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),s=t(20),l=t.n(s),c=(t(38),t(4)),i=t(5),m=t(7),o=t(6),v=t(11),d=t(3);v.b.add(d.i,d.a,d.g,d.j,d.n,d.o,d.h,d.f,d.d,d.l,d.c,d.k,d.e,d.p,d.b,d.m);t(42);var u=t(9),p=t(10),E=(t(45),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={navBarFold:"yes",classname:"bars"},n.resizeCount=0,n.toggleNavbar=n.toggleNavbar.bind(Object(u.a)(n)),n}return Object(i.a)(t,[{key:"toggleNavbar",value:function(){this.setState({navBarFold:"yes"===this.state.navBarFold?"no":"yes",classname:"bars hide"===this.state.classname?"bars":"bars hide"},(function(){this.props.toFoldNavbar(this.state.navBarFold)}))}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){window.addEventListener("resize",(function(){window.innerWidth>790&&1===e.resizeCount&&"no"===e.state.navBarFold&&(e.toggleNavbar(),e.resizeCount=0)})),window.innerWidth<=790&&"no"===e.state.navBarFold&&(e.resizeCount=1),window.innerWidth<=790&&"yes"===e.state.navBarFold&&(e.resizeCount=0)}),1e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"top-navbar"},r.a.createElement("div",{className:"navbar-title"},r.a.createElement(p.a,{icon:"arrow-left",className:"arrow-left"}),r.a.createElement("p",{className:"dashboard"},"Dashboard "),r.a.createElement(p.a,{icon:"chevron-right",className:"chevron-right"}),r.a.createElement("p",{className:"social-feed"},"Social Feed")),r.a.createElement("div",{className:"navbar-icons"},r.a.createElement("button",{type:"button",className:"icon",onClick:this.toggleNavbar},r.a.createElement("span",{className:"yes"===this.state.navBarFold?"icon-bar":"icon-bar active"}),r.a.createElement("span",{className:"yes"===this.state.navBarFold?"icon-bar":"icon-bar active"}),r.a.createElement("span",{className:"yes"===this.state.navBarFold?"icon-bar":"icon-bar active"}))))}}]),t}(n.Component)),b=(t(46),t(16)),N=t.n(b),h=t(24),g=t(12),f=t(21),w=t(22),y=t(23),k=t(26),O=t(25),j=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={details:{name:"Mamtha Patel",role:"Marketing Expert",image:N.a}},n.props.updateUser(n.state.details),n}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"yes"===this.props.navBarFold?"left-navbar":"left-navbar active"},r.a.createElement("div",{className:"user"},r.a.createElement("img",{src:N.a,alt:"",className:"user-image"}),r.a.createElement("h3",{className:"user-name"},this.state.details.name)),r.a.createElement("div",{className:"section-1"},r.a.createElement("div",{className:"options"},r.a.createElement("i",{className:"navbar-img"},r.a.createElement(f.a,{className:"navbar-img"})),r.a.createElement("p",{className:"navbar-title"},"Buzz home")),r.a.createElement("div",{className:"options"},r.a.createElement("i",{className:"navbar-img"},r.a.createElement(w.a,{className:"navbar-img"})),r.a.createElement("p",{className:"navbar-title"},"My Buzz Posts"),r.a.createElement("p",{className:"navbar-number"},"8")),r.a.createElement("div",{className:"options"},r.a.createElement("i",{className:"navbar-img"},r.a.createElement(g.b,{className:"navbar-img"})),r.a.createElement("p",{className:"navbar-title"},"Draft Posts"),r.a.createElement("p",{className:"navbar-number"},"2")),r.a.createElement("div",{className:"options"},r.a.createElement("i",{className:"navbar-img"},r.a.createElement(g.d,{className:"navbar-img"})),r.a.createElement("p",{className:"navbar-title"},"My Followers"),r.a.createElement("p",{className:"navbar-number"},"33")),r.a.createElement("div",{className:"options"},r.a.createElement("i",{className:"navbar-img"},r.a.createElement(g.c,{className:"navbar-img"})),r.a.createElement("p",{className:"navbar-title"},"I am Following"),r.a.createElement("p",{className:"navbar-number"},"33")),r.a.createElement("div",{className:"options"},r.a.createElement("i",{className:"navbar-img"},r.a.createElement(y.a,{className:"navbar-img"})),r.a.createElement("p",{className:"navbar-title"},"My Teams"),r.a.createElement("p",{className:"navbar-number"},"12")),r.a.createElement("div",{className:"options"},r.a.createElement("i",{className:"navbar-img"},r.a.createElement(h.a,{className:"navbar-img"})),r.a.createElement("p",{className:"navbar-title"},"My Reportees"),r.a.createElement("p",{className:"navbar-number"},"12")),r.a.createElement("div",{className:"see-more"},r.a.createElement("p",{className:"navbar-arrow"},"see more"),r.a.createElement("i",{className:"navbar-img"},r.a.createElement(p.a,{icon:"chevron-down"})))),r.a.createElement("div",{className:"section-2"},r.a.createElement("h2",{className:"topic"},"Recently added:"),r.a.createElement("div",{className:"options"},r.a.createElement("i",{className:"navbar-img"},r.a.createElement(g.a,{className:"navbar-img"})),r.a.createElement("p",{className:"navbar-title"},"New Artefatcs"),r.a.createElement("p",{className:"navbar-number"},"82")),r.a.createElement("div",{className:"options"},r.a.createElement("i",{className:"navbar-img"},r.a.createElement(O.a,{className:"navbar-img"})),r.a.createElement("p",{className:"navbar-title"},"New Module"),r.a.createElement("p",{className:"navbar-number"},"42")),r.a.createElement("div",{className:"options"},r.a.createElement("i",{className:"navbar-img"},r.a.createElement(k.a,{className:"navbar-img"})),r.a.createElement("p",{className:"navbar-title"},"New Skills"),r.a.createElement("p",{className:"navbar-number"},"23")),r.a.createElement("div",{className:"see-more"},r.a.createElement("p",{className:"navbar-arrow"},"see more"),r.a.createElement("i",{className:"navbar-img"},r.a.createElement(p.a,{icon:"chevron-down"})))))}}]),t}(n.Component),D=t(31),F=(t(47),t(48),t(17)),I=t.n(F),B=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={time:n.props.time,timeDiff:I()(n.props.time).fromNow()},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval((function(){e.setState({timeDiff:I()(e.props.time).fromNow()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.timeDiff)}}]),t}(n.Component);var S=function(e){var a=e.items.map((function(e,a){return r.a.createElement("div",{className:"show-card",key:a},r.a.createElement("div",{className:"top-show-card"},r.a.createElement("div",{className:"show-card-image"},r.a.createElement("img",{src:e.image,alt:"show-card-user"})),r.a.createElement("div",{className:"show-card-user-details"},r.a.createElement("h2",{className:"user-name"},e.name),r.a.createElement("p",{className:"user-role"},e.role),r.a.createElement("p",{className:"user-time"},r.a.createElement(B,{time:e.time}))),r.a.createElement("div",{className:"show-card-share"},r.a.createElement("p",{className:"share"},"..."))),r.a.createElement("div",{className:"bottom-show-card"},r.a.createElement("p",{className:"show-card-content"},e.text)))}));return r.a.createElement("div",{className:""},a)},x=t(18),M=t.n(x),R=t(27),C=t.n(R),z=t(29),J=t.n(z),W=t(30),P=t.n(W),U=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).onEnterPress=function(e){13===e.keyCode&&!1===e.shiftKey&&(e.preventDefault(),n.addItem())},n.submitRef=r.a.createRef(),n.state={items:[{name:"Oslo",role:"Marketing Expert",image:M.a,text:"Marketing tips are here : Reach influencers , Decision and l... Marketing tips are here : Reach influencers , Decision and l... Marketing tips are here : Reach influencers , Decision and l...",time:Date.now()},{name:"Oslo",role:"Marketing Expert",image:M.a,text:"Marketing tips are here : Reach influencers , Decision and l... Marketing tips are here : Reach influencers , Decision and l... Marketing tips are here : Reach influencers , Decision and l...",time:Date.now()}],currentItem:{name:"",role:"",image:"",text:"",key:"",time:""},rows:1,minRows:1,maxRows:4},n.handleInput=n.handleInput.bind(Object(u.a)(n)),n.addItem=n.addItem.bind(Object(u.a)(n)),n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){null==localStorage.getItem("items")&&localStorage.setItem("items",JSON.stringify(this.state.items)),this.setState({items:JSON.parse(localStorage.getItem("items"))})}},{key:"handleInput",value:function(e){var a=this.state,t=a.minRows,n=a.maxRows,r=e.target.rows;e.target.rows=t;var s=~~(e.target.scrollHeight/20);s===r&&(e.target.rows=s),s>=n&&(e.target.rows=n,e.target.scrollTop=e.target.scrollHeight),this.setState({value:e.target.value,rows:s<n?s:n,currentItem:{name:this.props.userDetails.name,role:this.props.userDetails.role,image:this.props.userDetails.image,text:e.target.value,time:Date.now()}})}},{key:"addItem",value:function(e){var a=this.state.currentItem,t=JSON.parse(localStorage.getItem("items"));if(""!==a.text){var n=[a].concat(Object(D.a)(t));localStorage.setItem("items",JSON.stringify(n)),this.setState({items:JSON.parse(localStorage.getItem("items")),currentItem:{text:"",key:"",time:""},rows:1,maxRows:4,minRows:1})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("div",{className:"yes"===this.props.navBarFold?"overlay":"overlay active"}),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"fill-card"},r.a.createElement("div",{className:"top-fill-card"},r.a.createElement("img",{alt:"use",src:this.props.userDetails.image,className:"fill-card-image"}),r.a.createElement("form",{id:"",onSubmit:this.addItem},r.a.createElement("textarea",{type:"text",rows:this.state.rows,placeholder:"share something here ....",className:"fill-card-box",value:this.state.currentItem.text,onKeyDown:this.onEnterPress,onChange:this.handleInput}))),r.a.createElement("div",{className:"bottom-fill-card"},r.a.createElement("div",{className:"fill-card-media"},r.a.createElement("i",{className:"media-icon"},r.a.createElement(C.a,null)),r.a.createElement("p",{className:"media-title"},"Any attachment")),r.a.createElement("div",{className:"fill-card-media"},r.a.createElement("i",{className:"media-icon"},r.a.createElement(J.a,null)),r.a.createElement("p",{className:"media-title"},"capture it")),r.a.createElement("div",{className:"fill-card-media"},r.a.createElement("i",{className:"media-icon"},r.a.createElement(P.a,null)),r.a.createElement("p",{className:"media-title"},"say it")))),r.a.createElement(S,{items:this.state.items})))}}]),t}(n.Component),A=(t(53),function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={userDetails:{name:"",role:"",image:""}},n}return Object(i.a)(t,[{key:"updateUser",value:function(e){this.setState({userDetails:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement(j,{navBarFold:this.props.navBarFold,updateUser:this.updateUser.bind(this)}),r.a.createElement(U,{navBarFold:this.props.navBarFold,userDetails:this.state.userDetails}))}}]),t}(n.Component)),H=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={navBarFold:"yes"},n}return Object(i.a)(t,[{key:"toFoldNavbar",value:function(e){this.setState({navBarFold:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{toFoldNavbar:this.toFoldNavbar.bind(this)}),r.a.createElement(A,{navBarFold:this.state.navBarFold}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.dcdbb467.chunk.js.map