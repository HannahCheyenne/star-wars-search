(this["webpackJsonpstar-wars-search"]=this["webpackJsonpstar-wars-search"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),s=a(1),u=a(2),i=a(4),o=a(3),m=r.a.createContext({results:[],addNote:function(){}}),p=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"searchBy-bar"},r.a.createElement("label",{htmlFor:"searchBy"},"Search By "),r.a.createElement("select",{className:"searchBy",name:"searchBy",onChange:this.context.updateSelect},r.a.createElement("option",null,"Choose"),r.a.createElement("option",{value:"people"},"Characters"),r.a.createElement("option",{value:"starships"},"Spaceships"),r.a.createElement("option",{value:"vehicles"},"Vehicles"),r.a.createElement("option",{value:"planets"},"Planets"),r.a.createElement("option",{value:"films"},"Films"),r.a.createElement("option",{value:"species"},"Species")))}}]),a}(n.Component);p.contextType=m;var h=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"searchBar",onSubmit:this.context.handleSearchSubmit},r.a.createElement("label",{htmlFor:"searchInput"},"Search: "),r.a.createElement("input",{type:"text",id:"searchInput",name:"searchInput"}),r.a.createElement(p,{updateSelect:this.updateSelect}),r.a.createElement("button",{type:"submit",className:"submit"},"Search"))}}]),a}(n.Component);h.contextType=m;var f=a(16),E=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e="",t=this.context,a=t.results,n=t.filter;return"people"===n?e=a.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("p",{className:"result-name"},e.name),r.a.createElement("p",null,"Height: ",e.height),r.a.createElement("p",null,"Weight: ",e.mass),r.a.createElement("p",null,"Gender: ",e.gender),r.a.createElement("p",null,"Birth Year: ",e.birth_year))})):"starships"===n||"vehicles"===n?e=a.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("p",{className:"result-name"},e.name),r.a.createElement("p",null,"Manufacturer: ",e.manufacturer),r.a.createElement("p",null,"Crew size: ",e.crew," Passengers: ",e.passengers),r.a.createElement("p",null,"Cargo Capacity: ",e.cargo_capacity,"kg"),r.a.createElement("p",null,"Vehicle class: ",e.vehicle_class))})):"planets"===n?e=a.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("p",{className:"result-name"},e.name),r.a.createElement("p",null,"Climate: ",e.climate),r.a.createElement("p",null,"Terrain: ",e.terrain),r.a.createElement("p",null,"Gravity: ",e.gravity),r.a.createElement("p",null,"Population: ",e.population))})):"films"===n?e=a.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("p",{className:"result-name"},e.title),r.a.createElement("p",null,"Episode: ",e.episode_id),r.a.createElement("p",null,"Director: ",e.director),r.a.createElement("p",null,"Release date: ",Object(f.a)(new Date(e.release_date),"MMMM do, yyy")))})):"species"===n&&(e=a.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("p",{className:"result-name"},e.name),r.a.createElement("p",null,"Classification: ",e.classification),r.a.createElement("p",null,"Designation: ",e.designation),r.a.createElement("p",null,"Avg Lifespan: ",e.average_lifespan))}))),r.a.createElement("div",{className:"results"},r.a.createElement("ul",{className:"resultsList"},e))}}]),a}(n.Component);E.contextType=m;a(12);var v=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Star Wars Database"))}}]),a}(n.Component),y="https://swapi-thinkful.herokuapp.com/api/",d=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={query:"",filter:"",results:[]},e.handleSearchSubmit=function(t){t.preventDefault(),void 0===e.state.query&&e.setState({query:e.state.filter}),fetch("".concat(y).concat(e.state.filter.value,"/?search=").concat(t.target.searchInput.value)).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))})).then((function(t){e.setState({results:t.results})})).catch((function(e){console.error(e)}))},e.updateSelect=function(t){t.preventDefault(),e.setState({filter:{value:t.target.value}})},e}return Object(u.a)(a,[{key:"render",value:function(){var e={results:this.state.results,filter:this.state.filter.value,handleSearchSubmit:this.handleSearchSubmit,updateSelect:this.updateSelect};return console.log(this.state.filter.value,"from App.js"),r.a.createElement(m.Provider,{value:e},r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement(E,{results:this.state.results,filter:this.state.filter})))}}]),a}(n.Component);a(13);c.a.render(r.a.createElement(d,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.4b7794e2.chunk.js.map