(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports={ZoneBox:"Zone_ZoneBox__tk_rw",ZoneCard:"Zone_ZoneCard__35e0c"}},26:function(e,t,a){e.exports={AuthenticationBox:"Landing_AuthenticationBox__1g5po",LandingTitle:"Landing_LandingTitle__1yVRl"}},34:function(e,t,a){e.exports={App:"App_App__1Uz2B","App-logo":"App_App-logo__22JAC","App-logo-spin":"App_App-logo-spin__1E4SE","App-header":"App_App-header__tMrOO","App-link":"App_App-link__12ySl"}},38:function(e,t,a){e.exports={SummarySection:"Summary_SummarySection__gESeu","btn-group":"Summary_btn-group__2TG7Z"}},39:function(e,t,a){e.exports={Header:"Header_Header__1V5oL"}},40:function(e,t,a){e.exports={centered:"Tracking_centered__2R184"}},41:function(e,t,a){e.exports=a(65)},46:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),r=a.n(c),m=(a(46),a(8)),i=a(9),o=a(11),u=a(10),s=a(12),E=a(34),p=a.n(E),d=a(20),h=a(16),b=a(18),f=a(66),g=a(67),O=a(68),_=a(87),y=a(69),v=a(70),j=a(71),C=[{id:2,name:"Summary",path:"/zones"},{id:3,name:"Zones",path:"/summary"},{id:4,name:"Tracking",path:"/tracking"}],k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(b.a)(a)),a.showTime=a.showTime.bind(Object(b.a)(a)),a.state={isOpen:!1,time:"",date:""},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"showTime",value:function(){var e=new Date;this.setState({time:e.toLocaleTimeString(),date:e.toString()}),setTimeout(this.showTime,1e3)}},{key:"componentWillMount",value:function(){this.showTime()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f.a,{color:"light",light:!0,expand:"md"},l.a.createElement(g.a,{href:"/"},"Kirtland Airshow Logistics"),l.a.createElement(O.a,{onClick:this.toggle}),l.a.createElement(_.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(y.a,{className:"ml-auto",navbar:!0},l.a.createElement(v.a,null,l.a.createElement(j.a,{"data-toggle":"tooltip","data-placement":"bottom",title:this.state.date},this.state.time)),C.map(function(e){return l.a.createElement(v.a,null,l.a.createElement(d.b,{to:e.path},l.a.createElement(j.a,null,e.name)))})))))}}]),t}(l.a.Component),A=a(26),S=a.n(A),w=a(72),x=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(w.a,{className:S.a.LandingTitle},l.a.createElement("h2",null,e.title)),l.a.createElement("div",{className:S.a.AuthenticationBox}))},N=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={title:"Welcome to the Logistics System for the Kirtland Airshow"},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(x,{title:this.state.title}))}}]),t}(n.Component),T=a(38),L=a.n(T),B=a(39),Z=a.n(B),V=function(e){return l.a.createElement("header",{className:Z.a.Header},l.a.createElement("h3",null,e.header),l.a.createElement("hr",null))},z=a(73),F=a(74),D=a(75),R=a(76),H=a(77),W=a(78),J=function(e){return l.a.createElement(z.a,null,l.a.createElement(V,{header:"Zones"}),l.a.createElement("section",{className:L.a.SummarySection},l.a.createElement(F.a,null,l.a.createElement(D.a,null,l.a.createElement(R.a,null,l.a.createElement(H.a,null,"Red"),l.a.createElement(H.a,null,"Blue")))),l.a.createElement(F.a,{className:"mt-4"},l.a.createElement(D.a,{"md-12":!0},l.a.createElement(W.a,{size:"sm",bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Lot"),l.a.createElement("th",null,"Vehicle Capacity"),l.a.createElement("th",null,"Current Vehicle Count"),l.a.createElement("th",null,"Estimated Distance to Show"),l.a.createElement("th",null,"Estimated Travel Time"),l.a.createElement("th",{colSpan:"2"}))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,"A"),l.a.createElement("td",null,"20"),l.a.createElement("td",null,"12"),l.a.createElement("td",null,"3 miles"),l.a.createElement("td",null,"4 mins"),l.a.createElement("td",null,"Edit"),l.a.createElement("td",null,"Delete")),l.a.createElement("tr",null,l.a.createElement("th",null,"B"),l.a.createElement("td",null,"25"),l.a.createElement("td",null,"10"),l.a.createElement("td",null,"3.3 miles"),l.a.createElement("td",null,"4 mins"),l.a.createElement("td",null,"Edit"),l.a.createElement("td",null,"Delete")),l.a.createElement("tr",null,l.a.createElement("th",null,"G"),l.a.createElement("td",null,"65"),l.a.createElement("td",null,"0"),l.a.createElement("td",null,"6 miles"),l.a.createElement("td",null,"6 mins"),l.a.createElement("td",null,"Edit"),l.a.createElement("td",null,"Delete")),l.a.createElement("tr",null,l.a.createElement("td",{colSpan:"7"},"Add Row"))))))))},M=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement(J,null))}}]),t}(n.Component),G=a(79),K=a(80),P=a(81),q=a(22),I=a.n(q),U=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(G.a,{className:I.a.ZoneCard},l.a.createElement(K.a,null,e.name),l.a.createElement(P.a,null,l.a.createElement("ul",null,l.a.createElement("li",null,"Name: ",e.name),l.a.createElement("li",null,"Vehicle Capacity: ",e.vehicleCapacity),l.a.createElement("li",null,"Number Of Lots: ",e.numberOfLots)))))},$=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement(V,{header:"Summary"}),l.a.createElement(z.a,null,l.a.createElement(F.a,{className:I.a.ZoneBox},e.zones.map(function(e){return l.a.createElement(D.a,{className:"col-md-6"},l.a.createElement(U,{name:e.name,vehicleCapacity:e.vehicleCapacity}))}))))},Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={zones:[{id:1,name:"Red",vehicleCapacity:100,numberOfLots:10},{id:2,name:"Blue",vehicleCapacity:20,numberOfLots:3}]},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement($,{zones:this.state.zones}))}}]),t}(n.Component),X=a(40),Y=a.n(X),ee=a(82),te=a(83),ae=a(88),ne=a(84),le=a(85),ce=a(86),re=function(e){return l.a.createElement(z.a,null,l.a.createElement(V,{header:"Tracking"}),l.a.createElement(F.a,null,l.a.createElement(ee.a,{className:"mx-auto",style:{width:"70vh"}},l.a.createElement(te.a,{type:"time",name:"select",id:"selectTime",min:"9:00",max:"18:00",step:"600",required:!0}),l.a.createElement(te.a,{type:"select",name:"select",id:"selectLot",placeholder:"Select Lot"},l.a.createElement("option",null,"Select Parking"),l.a.createElement("option",null,"A"),l.a.createElement("option",null,"B"),l.a.createElement("option",null,"C"),l.a.createElement("option",null,"D"),l.a.createElement("option",null,"E"),l.a.createElement("option",null,"F")),l.a.createElement(ae.a,{addonType:"append"},l.a.createElement(H.a,null,"Submit")))),l.a.createElement(F.a,{className:"mt-4"},l.a.createElement(D.a,{className:"col-md-8"},l.a.createElement(ne.a,null,l.a.createElement(le.a,null,l.a.createElement(ce.a,{for:"trackingVehicleCount"},"Vehicle Count"),l.a.createElement(te.a,{id:"trackingVehicleCount",type:"number",name:"vehicleCount",min:"1",max:"100"})),l.a.createElement(le.a,null,l.a.createElement(ce.a,{for:"trackingVehicleCount"},"People Count"),l.a.createElement(te.a,{id:"trackingVehicleCount",type:"number",name:"vehicleCount",min:"1",max:"100"})),l.a.createElement(H.a,{className:"btn btn-block"},"Enter"))),l.a.createElement(D.a,{className:"col-md-4"},l.a.createElement("h5",{className:Y.a.centered},"Lot A"),l.a.createElement("hr",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Countdown To Close: 30mins 20s"),l.a.createElement("li",null,"Maximum Capacity: 40"),l.a.createElement("li",null,"Number of Spots Taken: 10"),l.a.createElement("li",null,"Number of Spots Left: 30")))))},me=function(e){function t(e){return Object(m.a)(this,t),Object(o.a)(this,Object(u.a)(t).call(this,e))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(re,null)}}]),t}(n.Component),ie=function(e){function t(){return Object(m.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:p.a.App},l.a.createElement(k,null)),l.a.createElement(h.c,null,l.a.createElement(h.a,{exact:!0,path:"/",component:N}),l.a.createElement(h.a,{exact:!0,path:"/summary",component:M}),l.a.createElement(h.a,{exact:!0,path:"/zones",component:Q}),l.a.createElement(h.a,{exact:!0,path:"/tracking",component:me})))}}]),t}(n.Component);a(64),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.4929b6d0.chunk.js.map