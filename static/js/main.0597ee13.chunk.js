(this.webpackJsonpmealificator=this.webpackJsonpmealificator||[]).push([[0],{26:function(n,e,t){n.exports=t(49)},49:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(20),l=t.n(i),o=t(4),c=t(5),u=t.n(c),p=t(7),d=t(2),s=t(3),m={normal:"#FEFAE0",lighter:"#FFFFFF",darker:"#FDF5C4"},x={normal:"#202A25",lighter:"#2C3A33",darker:"#060D0E"};function g(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10%;\n  background: ",";\n  padding: 12px;\n\n  > div {\n    display: flex;\n    width: 30%;\n    align-items: center;\n    justify-content: flex-end;\n    position: relative;\n\n    input {\n      padding: 6px;\n      background: ",";\n      border: 0px solid transparent;\n      width: 60%;\n      transition: .4s;\n\n      &:focus {\n        outline: 0;\n        width: 100%;\n      }\n\n      &:focus + ul {\n        width: 100%;\n        display: flex;\n        opacity: 1;\n        animation: showlist .4s;\n      }\n    }\n\n    ul {\n      list-style: none;\n      position: absolute;\n      top: 101%;\n      background: ",";\n      width: 60%;\n      overflow: auto;\n      max-height: 500px;\n      flex-direction: column;\n      opacity: 0;\n      box-shadow: 0 4px 4px 4px rgba(0,0,0,0.3);\n      transition: .4s;\n\n      li {\n        padding: 6px 10px;\n        transition: .6s;\n\n        &:hover {\n          background: rgba(119,135,69,0.7);\n        }\n      }\n\n      @keyframes showlist {\n        from {\n          opacity: 0;\n          transform: translateY(-40px);\n        }\n        to {\n          opacity: 1;\n          transform: translateY(0);\n        }\n      }\n    }\n  }\n\n  svg {\n    margin-left: 12px;\n    color: ",";\n  }\n\n  span{\n    margin: 0 50px;\n    color: ",";\n  }\n\n  button {\n    background: #0B4F6C;\n    color: ",";\n    padding: 12px;\n    border-radius: 8px;\n    border: 0;\n    font-weight: bold;\n    transition: .4s;\n\n    &:hover {\n      cursor: pointer;\n      background: #0F6C95;\n    }\n\n    &:focus {\n      outline: 0;\n    }\n\n  }\n\n  @media(max-width: 600px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 0px;\n    padding: 12px;\n    box-shadow: 4px 0 4px 4px rgba(0,0,0,0.4);\n\n    svg {\n      display: none;\n    }  \n\n    div, button {\n      margin: 5px 0;\n      width: 90%;\n    }\n\n    span {\n      margin: 10px 0;\n    }\n\n    > div {\n      input {\n        width: 100%;\n        animation: none;\n      }\n    }\n  }\n"]);return g=function(){return n},n}var f=s.b.div(g(),x.normal,m.normal,m.normal,m.normal,m.normal,m.normal),h=t(25),b=t(24),v=t.n(b).a.create({baseURL:"https://www.themealdb.com/api/json/v1/1/"}),w=function(n){var e=n.setMeal,t=Object(a.useState)(0),i=Object(o.a)(t,2),l=i[0],c=i[1],d=Object(a.useState)([]),s=Object(o.a)(d,2),m=s[0],x=s[1];Object(a.useEffect)((function(){v.get("/random.php").then((function(n){return e(n.data.meals[0])}))}),[e]);var g=Object(a.useCallback)(Object(p.a)(u.a.mark((function n(){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.get("/random.php");case 2:t=n.sent,e(t.data.meals[0]);case 4:case"end":return n.stop()}}),n)}))),[e]),b=Object(a.useCallback)(function(){var n=Object(p.a)(u.a.mark((function n(t){var a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x([]),n.next=3,v.get("/search.php?s=".concat(t));case 3:a=n.sent,e(a.data.meals[0]);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[e]),w=Object(a.useCallback)(function(){var n=Object(p.a)(u.a.mark((function n(e){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:clearInterval(l),x([]),t=setTimeout((function(){var n=[];v.get("/search.php?s=".concat(e)).then((function(t){t.data.meals&&""!==e&&t.data.meals.map((function(e){return n.push(e.strMeal)}))})).then((function(){return x(n)}))}),400),c(t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[l]);return r.a.createElement(f,null,r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Sarch a meal...",onChange:function(n){return w(n.target.value)},onBlur:function(n){n.target.value=""},onFocus:function(){return x([])}}),m.length>0&&r.a.createElement("ul",null,m.map((function(n){return r.a.createElement("li",{onClick:function(){return b(n)},key:n},n)})))),r.a.createElement(h.a,{size:24}),r.a.createElement("span",null,"OR"),r.a.createElement("button",{onClick:g},"Find me a random meal!"))};function E(){var n=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n\n  h2 {\n    margin-bottom: 20px;\n  }\n\n  &:before {\n    content: '';\n    height: 2px;\n    width: 60%;\n    background: ",";\n    margin: 20px;\n  }\n\n  @media(min-width: 820px) and (max-width:1099px) {\n    margin: 0;\n\n    &:before {\n    content: '';\n    height: 260px;\n    width: 2px;\n    background: black;\n    margin: 20px;\n    position: absolute;\n    left: -40px;\n    }\n  }\n\n"]);return E=function(){return n},n}function y(){var n=Object(d.a)(["\n  \n  margin: 10px;\n  border-radius: 12px;\n  box-shadow: 0 0 4px 4px rgba(0,0,0,0.4);\n  display: flex;\n  flex-direction: column;\n  padding: 40px 80px;\n  background: ",";\n\n  iframe { \n    order: 2;\n    height: 400px;\n    width: 70%;\n    align-self: center;\n    justify-self: center;\n    margin: 40px 0;\n    border: 0;\n\n\n    @media(max-width: 1100px) {\n      width: 90%;\n    } \n  }\n\n  span {\n    font-size: 20px;\n    font-weight: bold;\n  }\n\n  ul, li {\n    font-weight: bold;\n    text-align: justify;\n  }\n\n  ul {\n    margin-top: 20px;\n    list-style: decimal;\n  }\n\n  li {\n    margin-top: 5px;\n    padding: 3px;\n\n    span {\n      font-weight: normal;\n    }\n    &:after {\n      content: '.';\n    }\n  }\n\n  @media(max-width: 550px) {      \n    padding: 2px;\n    border: 0;\n    box-shadow: none;\n\n    iframe {\n      height: 300px;\n    }\n\n    &:before {\n      content: '';\n      height: 2px;\n      width: 60%;\n      background: ",";\n      margin: 20px 0;\n    }\n\n    ul {\n      li {\n        margin: 8px;\n      }\n    }\n  }\n"]);return y=function(){return n},n}function j(){var n=Object(d.a)(["\n\n  font-size: 14px;\n  background: ",";\n  color: white;\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 10px;\n  width: 150px;\n  margin: 5px 0;\n  font-weight: bold;\n\n  &:hover {\n    cursor: default;\n  }\n"]);return j=function(){return n},n}function k(){var n=Object(d.a)(["\n  margin: 10px;\n  height: 100%;\n  border-radius: 12px;\n  box-shadow: 0 0 4px 4px rgba(0,0,0,0.4);\n  display: flex;\n  padding: 20px;\n  background: ",";\n\n  @media(max-width: 1100px) {\n    flex-direction: column;\n  }\n  \n  @media(max-width: 400px) {      \n    padding: 5px;\n  }\n\n  > div {\n    margin-left: 30px;\n\n    img {\n      height: 300px;\n      width: 300px;\n      border-radius: 12px;\n    }\n\n    div {\n      h1 {\n        margin: 20px 0;\n      }\n\n      span {\n        font-weight: bold;\n        margin-right: 8px;  \n      }\n    }\n    \n    @media(max-width: 1100px) {\n      display: flex;\n      margin-bottom: 30px;\n\n      div {\n\n        h1 {\n          margin: 0;\n        }\n        display: flex;\n        flex-direction: column;\n        margin: 0 20px;\n      }\n    }\n\n    @media(max-width: 820px) {\n      display:flex;\n      flex-direction: column;\n      align-items: center;\n\n      img {\n        border-radius: 50%;\n        box-shadow: 0 0 5px 5px rgba(0,0,0,0.4);\n        margin-bottom: 20px;\n      }\n\n      div {\n\n        h1{\n          margin: 10px 0;\n          text-align: center;\n        }\n        \n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n      }\n    }\n\n    @media(max-width: 500px) {  \n      margin: 0;\n      margin-top: 20px;\n\n      img {\n        height: 75%;\n        width: 75%;\n      }\n      \n      div {\n        h1{\n          text-align: center;\n        }\n      }\n\n    }\n  } \n\n  @media(max-width: 550px) {      \n    margin: 15px 6px;\n\n    div {\n      h1{\n        text-align: center;\n      }\n    }\n  }\n"]);return k=function(){return n},n}function O(){var n=Object(d.a)(["\n"]);return O=function(){return n},n}var F=s.b.div(O()),C=s.b.div(k(),m.darker),M=s.b.p(j(),x.normal),I=s.b.div(y(),m.darker,x.normal),S=s.b.div(E(),x.normal),z=function(n){var e=n.meal,t=Object(a.useState)([]),i=Object(o.a)(t,2),l=i[0],c=i[1],u=Object(a.useState)([]),p=Object(o.a)(u,2),d=p[0],s=p[1],m=Object(a.useState)([]),x=Object(o.a)(m,2),g=x[0],f=x[1];return Object(a.useEffect)((function(){for(var n=[],t=1;t<21&&(""!==e["strIngredient".concat(t)]&&null!==e["strIngredient".concat(t)]);t++){var a=e["strIngredient".concat(t)],r=e["strMeasure".concat(t)],i=t;n.push({id:i,name:a,quantity:r})}if(e.strTags){var l=e.strTags.split(",");s(l)}f(e.strInstructions.split(". ")),c(n)}),[e]),r.a.createElement(F,null,r.a.createElement(C,null,r.a.createElement("div",null,r.a.createElement("img",{src:e.strMealThumb,alt:e.strMeal}),r.a.createElement("div",null,r.a.createElement("h1",null,e.strMeal),r.a.createElement("p",null,r.a.createElement("span",null,"Category:"),e.strCategory),r.a.createElement("p",null,r.a.createElement("span",null,"Culture:"),e.strArea),d.map((function(n){return r.a.createElement(M,{key:n},n)}))),r.a.createElement(S,null,r.a.createElement("h2",null,"Ingredients:"),l.map((function(n){if(""!==n.name)return""!==n.quantity?r.a.createElement("p",{key:n.id},r.a.createElement("span",null,n.name,":"),n.quantity):r.a.createElement("p",{key:n.id},r.a.createElement("span",null,n.name))})))),r.a.createElement(I,null,r.a.createElement("h2",null,"How to prepare:"),r.a.createElement("ul",null,g.map((function(n){if(""!==n&&n.length>3)return r.a.createElement("li",null,r.a.createElement("span",null,n))}))),r.a.createElement("iframe",{title:"Recipe video",allow:"autoplay",src:e.strYoutube.replace("watch?v=","embed/")+"?autoplay=1&modestbranding=1&rel=0"}))))};function A(){var n=Object(d.a)(["\n"]);return A=function(){return n},n}function T(){var n=Object(d.a)(["\n  \n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Mulish', sans-serif;\n  }\n\n  body {\n    background: ",";\n  }\n\n"]);return T=function(){return n},n}var q=Object(s.a)(T(),m.normal),B=s.b.div(A());var R=function(){var n=Object(a.useState)({}),e=Object(o.a)(n,2),t=e[0],i=e[1];return r.a.createElement(B,null,r.a.createElement(w,{setMeal:i}),t.strMeal&&r.a.createElement(z,{meal:t}))};l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(R,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.0597ee13.chunk.js.map