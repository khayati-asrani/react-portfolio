(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{373:function(e,t,a){"use strict";a.r(t);var i=a(40),n=a(41),r=a(43),o=a(42),c=a(44),s=a(96),d=a(12),p=a.n(d),h=a(52),l=a(6),u=a.n(l),m=a(374),g=a(381),b=a.n(g),w=a(375),x=a(31),f=a(371),y=a(372),j=a(389),v=Object(h.a)(function(){return a.e(0).then(a.bind(null,377)).then(function(e){return e.default})}),S=Object(h.a)(function(){return a.e(1).then(a.bind(null,378)).then(function(e){return e.default})}),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={index:0,project:function(){return w.default[this.index].project},details:function(){return w.default[this.index].details},description:function(){return w.default[this.index].description},src:function(){return m.default[this.index]},graph:function(){return w.default[this.index].graph},code:function(){return w.default[this.index].code},github:function(){return w.default[this.index].github}},a.handleNext=a.handleNext.bind(Object(s.a)(Object(s.a)(a))),a.handlePrev=a.handlePrev.bind(Object(s.a)(Object(s.a)(a))),a.animateChange=a.animateChange.bind(Object(s.a)(Object(s.a)(a))),a}return Object(c.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){u()(".fa-arrow-circle-left").css("opacity","0.1")}},{key:"animateChange",value:function(){var e;e=window.matchMedia("(max-width: 800px)").matches?"auto":"350px",new x.d({delay:.3,repeat:1,repeatDelay:.2,yoyo:!0,ease:x.c.easeOut}).fromTo(".arrow",.4,{visibility:"visible"},{visibility:"hidden"},"-=0.4").fromTo(".mask",.2,{boxShadow:"0px 0px 0px inset #CA7564"},{boxShadow:"0px -350px 0px inset #CA7564"}).fromTo(".graph",.2,{height:"45%"},{height:"0px"},"-=0.25").fromTo(".inner img, .inner .mask",.5,{height:e},{height:"175px",boxShadow:"0px -350px 0px inset #212121\t"})}},{key:"handleNext",value:function(){this.state.index<=7&&(this.animateChange(),this.setState({index:this.state.index+1}),u()(".inner #project").css("filter","blur(45px)"),setTimeout(function(){a(382)(""+this.state.src()).then(function(e){u()("#project").attr("src",e.default)}).then(function(){u()(".inner img").on("load",function(){u()("#project").css("filter","blur(0px)")})})}.bind(this),200))}},{key:"handlePrev",value:function(){this.state.index>=1&&(this.animateChange(),this.setState({index:this.state.index-1}),setTimeout(function(){a(382)(""+this.state.src()).then(function(e){u()("#project").attr("src",e.default)})}.bind(this),200))}},{key:"componentDidUpdate",value:function(){this.state.index<1?(u()(".fa-arrow-circle-left").css("opacity","0.1"),u()(".fa-arrow-circle-right").css("opacity","1")):this.state.index>7?(u()(".fa-arrow-circle-left").css("opacity","1"),u()(".fa-arrow-circle-right").css("opacity","0.1")):(u()(".fa-arrow-circle-left").css("opacity","1"),u()(".fa-arrow-circle-right").css("opacity","1"))}},{key:"render",value:function(){return p.a.createElement("div",null,p.a.createElement("h1",{class:"anim"},this.state.project()),p.a.createElement("div",{class:"small-icon"},p.a.createElement("div",{class:"holder",onClick:this.handlePrev},p.a.createElement(f.a,{className:"icon-s",icon:j.a})),p.a.createElement("p",{class:"anim"},"A ",this.state.details(),", designed and coded by following an iterative approach. The Project used ",p.a.createElement("span",{class:"highlight"},this.state.description()),". The design is responsive and cross-browser compatible."),p.a.createElement("div",{class:"holder",onClick:this.handleNext},p.a.createElement(f.a,{className:"icon-s",onClick:this.handleNext,icon:j.b}))),p.a.createElement("div",{class:"slider anim"},p.a.createElement(v,{id:"left",direction:j.a,onClick:this.handlePrev}),p.a.createElement("figure",{class:"inner"},p.a.createElement("div",{class:"mask"}),p.a.createElement("img",{id:"project",src:b.a,alt:"project-img"}),p.a.createElement(S,{src:this.state.graph()})),p.a.createElement(v,{id:"right",direction:j.b,onClick:this.handleNext})),p.a.createElement("div",{id:"buttons"},p.a.createElement("a",{href:this.state.code(),target:"_blank",rel:"noopener noreferrer"},p.a.createElement("button",{class:"code-pen button anim-butt "},"View the Code ",p.a.createElement(f.a,{icon:j.c}))),p.a.createElement("a",{href:this.state.github(),target:"_blank",rel:"noopener noreferrer"},p.a.createElement("button",{class:"git-hub button anim-butt"},"View the Demo ",p.a.createElement(f.a,{icon:y.e})))))}}]),t}(p.a.Component);t.default=k},374:function(e,t,a){"use strict";a.r(t);t.default=["./data/images/markdown.png","./data/images/pomodoro.png","./data/images/quote.png","./data/images/landing_page.png","./data/images/drums.png","./data/images/calculator.png","./data/images/documentation.png","./data/images/tribute.png","./data/images/survey.png"]},375:function(e,t,a){"use strict";a.r(t);var i=a(376),n=[{project:"Markdown Previewer",details:"Markdown Previewer for live markdown preview",description:"JavaScript, jQuery, Sass, Redux and React",graph:i.default[1],code:"https://github.com/1XWebbyX1/markdown-previewer-pwa",github:"https://1xwebbyx1.github.io/markdown-previewer-pwa/"},{project:"Pomodoro Clock",details:"Pomodoro Clock timer app",description:"JavaScript, jQuery, Redux, Sass and React",graph:i.default[7],code:"https://github.com/1XWebbyX1/pomodoro-clock-pwa",github:"https://1xwebbyx1.github.io/pomodoro-clock-pwa/"},{project:"Quote Machine",details:"Quote Machine packed with random quotes",description:"JavaScript, jQuery, Sass and React",graph:i.default[4],code:"https://github.com/1XWebbyX1/quote-machine-pwa",github:"https://1xwebbyx1.github.io/quote-machine-pwa/"},{project:"Product Landing Page",details:"Product Landing Page",description:"JavaScript, jQuery, mousewheel, Sass and React",graph:i.default[6],code:"https://github.com/1XWebbyX1/landing-page",github:"https://1xwebbyx1.github.io/landing-page/"},{project:"Drum Machine",details:"Drum Machine app to play electric drum kit",description:"JavaScript, jQuery, Sass and React",graph:i.default[2],code:"https://github.com/1XWebbyX1/drum-machine-pwa",github:"https://1xwebbyx1.github.io/electric-drums-pwa/"},{project:"Calculator",details:"Calculator web app",description:"JavaScript, jQuery, Redux, Sass and React",graph:i.default[8],code:"https://github.com/1XWebbyX1/calculator-pwa",github:"https://1xwebbyx1.github.io/calculator-pwa/"},{project:"Documentation Page",details:"Technical Documentation Page",description:"JavaScript, Sass, jQuery and React",graph:i.default[0],code:"https://github.com/1XWebbyX1/react-documentation-page",github:"https://1xwebbyx1.github.io/react-documentation-page/"},{project:"Tribute Page",details:"Tribute page to Dr.Norman Borlaug",description:"JavaScript, jQuery, HTML and Sass",graph:i.default[3],code:"https://github.com/1XWebbyX1/tribute-webpage",github:"https://1xwebbyx1.github.io/tribute-webpage/"},{project:"Survey Form",details:"Survey Form template",description:"JavaScript, jQuery, Sass and React",graph:i.default[5],code:"https://github.com/1XWebbyX1/survey-form",github:"https://codepen.io/1xwebbyx1/full/NEPymW"}];t.default=n},376:function(e,t,a){"use strict";a.r(t);t.default=[[{color:"#CD7635",name:"React",width:"350px"},{color:"#CD7635",name:"jQuery",width:"150px"},{color:"#CD7635",name:"Sass",width:"150px"}],[{color:"#CD7635",name:"React",width:"250px"},{color:"#CD7635",name:"jQuery",width:"30px"},{color:"#CD7635",name:"Sass",width:"380px"},{color:"#CD7635",name:"Redux",width:"50px"}],[{color:"#e68a00",name:"React",width:"150px"},{color:"white",name:"jQuery",width:"50px"},{color:"#330066",name:"Sass",width:"150px"}],[{color:"white",name:"jQuery",width:"80px"},{color:"#330066",name:"Sass",width:"200px"}],[{color:"#e68a00",name:"React",width:"60px"},{color:"white",name:"jQuery",width:"100px"},{color:"#330066",name:"Sass",width:"150px"}],[{color:"#e68a00",name:"React",width:"200px"},{color:"white",name:"jQuery",width:"30px"},{color:"#330066",name:"Sass",width:"350px"}],[{color:"#e68a00",name:"React",width:"120px"},{color:"white",name:"jQuery",width:"100px"},{color:"#330066",name:"Sass",width:"400px"}],[{color:"#e68a00",name:"React",width:"280px"},{color:"white",name:"jQuery",width:"100px"},{color:"#330066",name:"Sass",width:"200px"},{color:"#608000",name:"Redux",width:"100px"}],[{color:"#e68a00",name:"React",width:"300px"},{color:"white",name:"jQuery",width:"50px"},{color:"#330066",name:"Sass",width:"140px"},{color:"#608000",name:"Redux",width:"80px"}]]},381:function(e,t,a){e.exports=a.p+"static/media/markdown.f5a89c03.png"},382:function(e,t,a){var i={"./Arrow":[377,9,0],"./Arrow.js":[377,9,0],"./Article":[373,9],"./Article.js":[373,9],"./Bar":[379,9,2],"./Bar.js":[379,9,2],"./Graph":[378,9,1],"./Graph.js":[378,9,1],"./Projects":[380,9],"./Projects.js":[380,9],"./data/graphs":[376,9],"./data/graphs.js":[376,9],"./data/imageStrings":[374,9],"./data/imageStrings.js":[374,9],"./data/images/calculator.png":[391,7,13],"./data/images/documentation.png":[392,7,14],"./data/images/drums.png":[393,7,15],"./data/images/landing_page.png":[394,7,16],"./data/images/markdown.png":[381,7],"./data/images/pomodoro.png":[395,7,17],"./data/images/quote.png":[396,7,18],"./data/images/survey.png":[397,7,19],"./data/images/tribute.png":[398,7,20],"./data/projectsData":[375,9],"./data/projectsData.js":[375,9]};function n(e){var t=i[e];return t?Promise.all(t.slice(2).map(a.e)).then(function(){var e=t[0];return a.t(e,t[1])}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}n.keys=function(){return Object.keys(i)},n.id=382,e.exports=n}}]);
//# sourceMappingURL=11.e9124183.chunk.js.map