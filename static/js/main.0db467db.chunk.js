(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),s=n(4),o=n(5),i=n(8),d=n(7),l=n(1),r=(n(13),n(14),n(6)),m=n.n(r),u=n(0),b=[{name:"Dumplings",id:1},{name:"Carrot",id:2},{name:"Eggs",id:3},{name:"Ice cream",id:4},{name:"Apple",id:5},{name:"Bread",id:6},{name:"Fish",id:7},{name:"Honey",id:8},{name:"Jam",id:9},{name:"Garlic",id:10}],j=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={selectedGood:"Jam"},e.removeOnClick=function(){e.setState({selectedGood:""})},e.addOnClick=function(t,n){e.setState({selectedGood:n})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(u.jsxs)("main",{className:"section container",children:[t?Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:this.removeOnClick})]}):Object(u.jsx)("h1",{className:"title",children:"No goods selected"}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(n){var c=n.name,a=n.id,s=c===t;return Object(u.jsxs)("tr",{"data-cy":"Good",className:m()({"has-background-success-light":s}),children:[Object(u.jsx)("td",{children:s?Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:e.removeOnClick,children:"-"}):Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(t){e.addOnClick(t,c)},children:"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},a)}))})})]})}}]),n}(l.Component);a.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0db467db.chunk.js.map