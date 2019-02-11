(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{305:function(e,t,a){"use strict";a.r(t);var i=a(18),n=a(19),r=a(21),o=a(20),c=a(22),s=a(93),d=a(1),p=a.n(d),h=a(306),l=a(313),u=a.n(l),m=a(307),g=a(303),b=a(304),f=a(309),w=a(385),x=a(310),y=a(311),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={index:0,project:function(){return m.default[this.index].project},details:function(){return m.default[this.index].details},description:function(){return m.default[this.index].description},src:function(){return h.default[this.index]},graph:function(){return m.default[this.index].graph},code:function(){return m.default[this.index].code},github:function(){return m.default[this.index].github},image:u.a,leftOpacity:"transparent",rightOpacity:"opaque"},a.handleNext=a.handleNext.bind(Object(s.a)(Object(s.a)(a))),a.handlePrev=a.handlePrev.bind(Object(s.a)(Object(s.a)(a))),a.handleLoad=a.handleLoad.bind(Object(s.a)(Object(s.a)(a))),a.animateChange=a.animateChange.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"animateChange",value:function(){var e;e=window.matchMedia("(max-width: 800px)").matches?"auto":"350px",new g.d({delay:.3,repeat:1,repeatDelay:.2,yoyo:!0,ease:g.c.easeOut}).fromTo(".arrow",.4,{visibility:"visible"},{visibility:"hidden"},"-=0.4").fromTo(".mask",.2,{boxShadow:"0px 0px 0px inset #CA7564"},{boxShadow:"0px -350px 0px inset #CA7564"}).fromTo(".graph",.2,{height:"45%"},{height:"0px"},"-=0.25").fromTo(".inner img, .inner .mask",.5,{height:e},{height:"175px",boxShadow:"0px -350px 0px inset #212121\t"})}},{key:"handleNext",value:function(){this.state.index<=8&&(this.animateChange(),this.setState({index:this.state.index+1,leftOpacity:"opaque",rightOpacity:"opaque"}),setTimeout(function(){var e=this;a(314)(""+this.state.src()).then(function(t){e.setState({image:t.default})})}.bind(this),200)),8===this.state.index&&this.setState({leftOpacity:"opaque",rightOpacity:"transparent"})}},{key:"handleLoad",value:function(){console.log("loaded"),(new g.d).fromTo("#project",.4,{filter:"blur(45px)"},{filter:"blur(0px)"})}},{key:"handlePrev",value:function(){this.state.index>=1&&(this.animateChange(),this.setState({index:this.state.index-1,leftOpacity:"opaque",rightOpacity:"opaque"}),setTimeout(function(){var e=this;a(314)(""+this.state.src()).then(function(t){e.setState({image:t.default})})}.bind(this),200)),1===this.state.index&&this.setState({leftOpacity:"transparent",rightOpacity:"opaque"})}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("h1",{className:"anim"},this.state.project()),p.a.createElement("div",{className:"small-icon"},p.a.createElement("div",{className:"holder",onClick:this.handlePrev},p.a.createElement(b.a,{className:"icon-s "+this.state.leftOpacity,icon:w.a})),p.a.createElement("p",{className:"anim"},"A ",this.state.details(),", designed and coded by following an iterative approach. The Project used ",p.a.createElement("span",{className:"highlight"},this.state.description()),". The design is responsive and has wide browser support."),p.a.createElement("div",{className:"holder",onClick:this.handleNext},p.a.createElement(b.a,{className:"icon-s "+this.state.rightOpacity,onClick:this.handleNext,icon:w.b}))),p.a.createElement("div",{className:"slider anim"},p.a.createElement(x.default,{id:"left",direction:w.a,onClick:this.handlePrev,opacity:this.state.leftOpacity}),p.a.createElement("figure",{className:"inner"},p.a.createElement("div",{className:"mask"}),p.a.createElement("img",{id:"project",src:this.state.image,onLoad:this.handleLoad,alt:"project-img"}),p.a.createElement(y.default,{src:this.state.graph()})),p.a.createElement(x.default,{id:"right",direction:w.b,onClick:this.handleNext,opacity:this.state.rightOpacity})),p.a.createElement("div",{id:"buttons"},p.a.createElement("a",{href:this.state.code(),target:"_blank",rel:"noopener noreferrer"},p.a.createElement("button",{className:"code-pen button anim-butt "},"View the Code ",p.a.createElement(b.a,{icon:w.c}))),p.a.createElement("a",{href:this.state.github(),target:"_blank",rel:"noopener noreferrer"},p.a.createElement("button",{className:"git-hub button anim-butt"},"View the Demo ",p.a.createElement(b.a,{icon:f.e})))))}}]),t}(p.a.Component);t.default=v},306:function(e,t,a){"use strict";a.r(t);t.default=["./data/images/markdown.png","./data/images/quote.png","./data/images/pomodoro.png","./data/images/shortener.png","./data/images/landing_page.png","./data/images/drums.png","./data/images/calculator.png","./data/images/documentation.png","./data/images/tribute.png","./data/images/survey.png"]},307:function(e,t,a){"use strict";a.r(t);var i=a(308),n=[{project:"Markdown Previewer",details:"Markdown Previewer for live markdown preview",description:"JavaScript, React, Sass, Redux, Jest and chai-enzyme",graph:i.default[1],code:"https://github.com/1XWebbyX1/markdown-previewer-pwa",github:"https://1xwebbyx1.github.io/markdown-previewer-pwa/"},{project:"Quote Machine",details:"Full Stack MERN app",description:"Node, React, Express, Sass, Redux, MongoDB, Mongoose,  Jest, Mocha and chai-enzyme",graph:i.default[4],code:"https://github.com/1XWebbyX1/quote-machine-pwa",github:"https://quote-machine-pwa.herokuapp.com/"},{project:"Pomodoro Clock",details:"Pomodoro Clock timer app",description:"JavaScript, React, Sass, Redux, Jest and chai-enzyme",graph:i.default[7],code:"https://github.com/1XWebbyX1/pomodoro-clock-pwa",github:"https://1xwebbyx1.github.io/pomodoro-clock-pwa/"},{project:"URL Shortener",details:"URL Shortener Microservice using RESTful API",description:"HTML, Node, Sass, Express, MongoDB, Mongoose, Chai and Mocha",graph:i.default[9],code:"https://github.com/1XWebbyX1/url-shortener",github:"https://my-miniurl.herokuapp.com/"},{project:"Product Landing Page",details:"Product Landing Page",description:"JavaScript, jQuery, mousewheel, Sass and React",graph:i.default[6],code:"https://github.com/1XWebbyX1/landing-page",github:"https://1xwebbyx1.github.io/landing-page/"},{project:"Drum Machine",details:"Drum Machine app, (currently not supported in safari), to play electric drum kit",description:"JavaScript, React, Sass, Jest and chai-enzyme",graph:i.default[2],code:"https://github.com/1XWebbyX1/drum-machine-pwa",github:"https://1xwebbyx1.github.io/electric-drums-pwa/"},{project:"Calculator",details:"Calculator web app",description:"JavaScript, jQuery, Redux, Sass and React",graph:i.default[8],code:"https://github.com/1XWebbyX1/calculator-pwa",github:"https://1xwebbyx1.github.io/calculator-pwa/"},{project:"Documentation Page",details:"Technical Documentation Page",description:"JavaScript, Sass, jQuery and React",graph:i.default[0],code:"https://github.com/1XWebbyX1/react-documentation-page",github:"https://1xwebbyx1.github.io/react-documentation-page/"},{project:"Tribute Page",details:"Tribute page to Dr.Norman Borlaug",description:"JavaScript, jQuery, HTML and Sass",graph:i.default[3],code:"https://github.com/1XWebbyX1/tribute-webpage",github:"https://1xwebbyx1.github.io/tribute-webpage/"},{project:"Survey Form",details:"Survey Form template",description:"JavaScript, jQuery, Sass and React",graph:i.default[5],code:"https://github.com/1XWebbyX1/survey-form",github:"https://codepen.io/1xwebbyx1/full/NEPymW"}];t.default=n},308:function(e,t,a){"use strict";a.r(t);t.default=[[{color:"#CD7635",name:"React",width:"350px"},{color:"#CD7635",name:"jQuery",width:"150px"},{color:"#CD7635",name:"Sass",width:"150px"}],[{color:"#CD7635",name:"React",width:"250px"},{color:"#CD7635",name:"Sass",width:"380px"},{color:"#CD7635",name:"Redux",width:"50px"}],[{color:"#e68a00",name:"React",width:"150px"},{color:"#330066",name:"Sass",width:"150px"}],[{color:"white",name:"jQuery",width:"80px"},{color:"#330066",name:"Sass",width:"200px"}],[{color:"#e68a00",name:"React",width:"360px"},{color:"#e68a00",name:"Redux",width:"160px"},{color:"#e68a00",name:"Express",width:"160px"},{color:"#e68a00",name:"Sass",width:"160px"}],[{color:"#e68a00",name:"React",width:"200px"},{color:"white",name:"jQuery",width:"30px"},{color:"#330066",name:"Sass",width:"350px"}],[{color:"#e68a00",name:"React",width:"120px"},{color:"white",name:"jQuery",width:"100px"},{color:"#330066",name:"Sass",width:"400px"}],[{color:"#e68a00",name:"React",width:"280px"},{color:"#330066",name:"Sass",width:"200px"},{color:"#608000",name:"Redux",width:"100px"}],[{color:"#e68a00",name:"React",width:"300px"},{color:"white",name:"jQuery",width:"50px"},{color:"#330066",name:"Sass",width:"140px"},{color:"#608000",name:"Redux",width:"80px"}],[{color:"#e68a00",name:"HTML",width:"150px"},{color:"white",name:"Node",width:"300px"},{color:"#330066",name:"Express",width:"300px"},{color:"#608000",name:"Sass",width:"150px"}]]},310:function(e,t,a){"use strict";a.r(t);var i=a(18),n=a(19),r=a(21),o=a(20),c=a(22),s=a(1),d=a.n(s),p=a(304),h=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{id:this.props.id,className:"arrow "+this.props.opacity,onClick:this.props.onClick},d.a.createElement("div",{className:"outer-circle "},d.a.createElement("div",{className:"inner-circle "},d.a.createElement(p.a,{icon:this.props.direction,className:"icon",onClick:this.props.onClick}))))}}]),t}(d.a.Component);t.default=h},311:function(e,t,a){"use strict";a.r(t);var i=a(18),n=a(19),r=a(21),o=a(20),c=a(22),s=a(1),d=a.n(s),p=a(312),h=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this.props.src,t=1,a=e.map(function(e){var a="bar-"+t;return t++,d.a.createElement(p.default,{id:a,name:e.name,width:e.width})});return d.a.createElement("div",{className:"graph"},a)}}]),t}(d.a.Component);t.default=h},312:function(e,t,a){"use strict";a.r(t);var i=a(18),n=a(19),r=a(21),o=a(20),c=a(22),s=a(93),d=a(1),p=a.n(d),h=a(303),l=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).animate=a.animate.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"animate",value:function(){var e=this.props.width+" 0px inset #CD7635",t="#"+this.props.id+" .shadow";new h.d({delay:1.6}).to(t,.8,{boxShadow:e}).repeat(0)}},{key:"componentDidMount",value:function(){this.animate()}},{key:"componentDidUpdate",value:function(){this.animate()}},{key:"render",value:function(){return p.a.createElement("div",{id:this.props.id,className:"bar"},p.a.createElement("p",null,this.props.name),p.a.createElement("div",{className:"shadow"}))}}]),t}(p.a.Component);t.default=l},313:function(e,t,a){e.exports=a.p+"static/media/markdown.f5a89c03.png"},314:function(e,t,a){var i={"./Arrow/Arrow":[310,9],"./Arrow/Arrow.js":[310,9],"./Article":[305,9],"./Article.js":[305,9],"./Graph/Bar/Bar":[312,9],"./Graph/Bar/Bar.js":[312,9],"./Graph/Graph":[311,9],"./Graph/Graph.js":[311,9],"./data/graphs":[308,9],"./data/graphs.js":[308,9],"./data/imageStrings":[306,9],"./data/imageStrings.js":[306,9],"./data/images/calculator.png":[387,7,10],"./data/images/documentation.png":[388,7,11],"./data/images/drums.png":[389,7,12],"./data/images/landing_page.png":[390,7,13],"./data/images/markdown.png":[313,7],"./data/images/pomodoro.png":[391,7,14],"./data/images/quote.png":[392,7,15],"./data/images/shortener.png":[393,7,16],"./data/images/survey.png":[394,7,17],"./data/images/tribute.png":[395,7,18],"./data/projectsData":[307,9],"./data/projectsData.js":[307,9]};function n(e){var t=i[e];return t?Promise.all(t.slice(2).map(a.e)).then(function(){var e=t[0];return a.t(e,t[1])}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return Object.keys(i)},n.id=314,e.exports=n},399:function(e,t,a){"use strict";a.r(t);var i=a(18),n=a(19),r=a(21),o=a(20),c=a(22),s=a(1),d=a.n(s),p=a(305),h=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return d.a.createElement("section",{id:"projects"},d.a.createElement("h3",null,"PROJECT"),d.a.createElement(p.default,null))}}]),t}(d.a.Component);t.default=h}}]);
//# sourceMappingURL=7.9577539f.chunk.js.map