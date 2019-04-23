(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,a,t){e.exports=t(45)},45:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),l=t(24),r=t.n(l),i=(t(46),t(2)),o=t(3),s=t(8),m=t(7),u=t(9),v=t(48),d=t(13),b=t(15),E=t(25),p=(t(35),t(4)),g={},h=Object(b.d)(Object(b.c)({statistics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;return e=Object(p.a)({},e),"CHANGE_ROUTE"===t&&console.log(n),e}}),Object(b.a)(E.a)),f=function(){return h},N=function(){function e(){Object(i.a)(this,e),this.store=f()}return Object(o.a)(e,[{key:"changeRoute",value:function(e){this.store.dispatch({type:"CHANGE_ROUTE",payload:{path:e}})}}]),e}(),w=null;N.getInstance=function(){return null===w&&(w=new N),w};var y=function(){function e(){Object(i.a)(this,e),this.api=Object(d.a)({basename:"",forceRefresh:!1,keyLength:6}),this.reduxUtil=N.getInstance()}return Object(o.a)(e,[{key:"forward",value:function(e){this.api.push(e),this.reduxUtil.changeRoute(e)}},{key:"back",value:function(){this.api.goBack()}}]),e}(),k=null;y.getInstance=function(){return null===k&&(k=new y),k};var j=t(28),O=function(e){e.title;var a=e.onClick,t=e.children;return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light navbar-disgraded"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{className:"navbar-brand",href:"#brand",onClick:function(e){e.preventDefault(),"function"===typeof a&&a()}},c.a.createElement("img",{height:"80",src:"/img/logo.png",alt:"DisGraded Logo"})),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},t))))};O.Item=function(e){var a=e.label,t=e.name,n=void 0===t?a:t,l=e.active,r=void 0!==l&&l,i=e.onClick,o=void 0===i?null:i;if(null!==o&&"function"!==typeof o)throw Error("[Navbar.Item] onClick prop must be function");return c.a.createElement("li",{onClick:function(e){e.preventDefault(),null!==o&&o({name:n,label:a,active:r})},className:r?"nav-item active":"nav-item"},c.a.createElement("a",{className:"nav-link",href:"#"+n},a))};var C=O,I=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={activeItem:null},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"itemClicked",value:function(e){this.setState({activeItem:e})}},{key:"render",value:function(){var e=this,a=this.state.activeItem;return c.a.createElement("div",{className:"container-natigation"},c.a.createElement(C,{title:"DisGraded",onClick:function(){return e.itemClicked(null)}},c.a.createElement(C.Item,{active:"news"===a,name:"news",label:"News",onClick:function(a){return e.itemClicked(a.name)}}),c.a.createElement(C.Item,{active:"games"===a,name:"games",label:"Games",onClick:function(a){return e.itemClicked(a.name)}}),c.a.createElement(C.Item,{active:"products"===a,name:"products",label:"Products",onClick:function(a){return e.itemClicked(a.name)}})))}}]),a}(n.Component),x=function(){return c.a.createElement("div",{className:"decoration wave-animation"},c.a.createElement("div",{className:"wave wave-top"},c.a.createElement("div",{className:"wave-bg wave-bg-top"})," "),c.a.createElement("div",{className:"wave wave-middle"},c.a.createElement("div",{className:"wave-bg wave-bg-middle"})),c.a.createElement("div",{className:"wave wave-bottom"},c.a.createElement("div",{className:"wave-bg wave-bg-bottom"})))},D=function(e){var a=e.children,t=e.bg,n=void 0===t?"black":t,l=e.decoration,r="";return"wave"===(void 0===l?"wave":l)&&(r=c.a.createElement(x,null)),c.a.createElement("div",{className:"carousel"},c.a.createElement("div",{className:"carousel-content carousel-content-color-"+n},a),c.a.createElement("div",{className:"carousel-decoration"},r))},_=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h2",null,"QuariQ"),c.a.createElement("p",null,"Lightweight jvm based game engine for developing 2D games on Android, Widnows, Linux"),c.a.createElement("button",{type:"button",class:"btn btn-primary"},"Download"),c.a.createElement("button",{type:"button",class:"btn btn-secondary"},"Docs"),c.a.createElement("button",{type:"button",class:"btn btn-secondary"},"Dev Log")),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"quariq-layers-illustration"},c.a.createElement("img",{alt:"QuariQ Layers",src:"/img/quariq-layer.png"})))))},L=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container-landing-pane"},c.a.createElement(D,{bg:"primary"},c.a.createElement(_,null)))}}]),a}(n.Component),A=function(e){var a=e.dark,t=e.title,n=e.description,l=e.teammates,r=e.projects,i=e.commits,o=a?"dark":"light";return t=t?c.a.createElement("h2",{className:"infoarea-header"},t):"",n=n?c.a.createElement("p",{className:"infoarea-text"},n):"",c.a.createElement("div",{className:"infoarea infoarea-".concat(o)},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},t,n)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},l),c.a.createElement("div",{className:"col-md-4"},r),c.a.createElement("div",{className:"col-md-4"},i))))},G=function(e){var a=e.icon,t=void 0===a?"face":a,n=e.color,l=void 0===n?"primary":n,r=e.hover,i=void 0===r?"disable":r;return c.a.createElement("i",{class:"material-icons material-color-".concat(l," material-color-hover-").concat(i)},t)},R=function(e){var a=e.value,t=e.icon,n=e.label,l=void 0===n?"label_prop":n;return c.a.createElement("div",{className:"githubstats-block"},c.a.createElement("div",{className:"block-icon"},c.a.createElement(G,{color:"light",hover:"dark",icon:t})),c.a.createElement("div",{className:"block-label"},l),c.a.createElement("div",{className:"block-value"},a))},q=function(e){var a=e.dark,t=e.title,n=e.description,l=e.teammates,r=e.projects,i=e.commits,o=e.issues,s=a?"dark":"light";return t=t?c.a.createElement("h2",{className:"githubstats-header"},t):"",n=n?c.a.createElement("p",{className:"infoarea-text"},n):"",c.a.createElement("div",{className:"githubstats githubstats-".concat(s)},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},t)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12"},c.a.createElement(R,{label:"Maintainers",icon:"supervised_user_circle",value:l})),c.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12"},c.a.createElement(R,{label:"Projects",icon:"library_books",value:r})),c.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12"},c.a.createElement(R,{label:"Contributions",icon:"call_split",value:i})),c.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12"},c.a.createElement(R,{label:"Issues",icon:"table_chart",value:o})))))},Q=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container-landing-info"},c.a.createElement(A,{title:"Who are we ?",description:"We are team of young enthusiasts with goal to contribute to open source game development community with building tools for solving most common problems in game development industry and proving efficinecy of that tools with developing open source games."}),c.a.createElement(q,{dark:!0,title:"Stats",teammates:"1",projects:"3",commits:"106",issues:"22"}))}}]),a}(n.Component),U=function(){return c.a.createElement("div",{className:"page"},c.a.createElement(I,null),c.a.createElement(L,null),c.a.createElement(Q,null))},T=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(s.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).history=y.getInstance(),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=f();return c.a.createElement(j.a,{store:e},c.a.createElement(v.b,{history:this.history.api},c.a.createElement(v.c,null,c.a.createElement(v.a,{exact:!0,path:"/",component:U}))))}}]),a}(n.Component);r.a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a665b4d6.chunk.js.map