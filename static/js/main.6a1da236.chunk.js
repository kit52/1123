(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,n){},8:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n(4),r=n(7),s=n(6),i=n(1),o=n.n(i),u=n(5),l=n.n(u),h=(n(13),n(0)),j=100,p=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={value:0},a}return Object(a.a)(n,[{key:"increment",value:function(){this.setState({value:this.state.value+1})}},{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval((function(){return t.increment()}),10)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var t=this.state.value;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"\u0422\u0430\u0439\u043c\u0435\u0440:"}),Object(h.jsxs)("p",{children:[Object(h.jsxs)("span",{children:["".concat(Math.round(t/j/60/60))," : "]}),Object(h.jsxs)("span",{children:["".concat(Math.round(t/j/60))," : "]}),Object(h.jsxs)("span",{children:["".concat(Math.round(t/j))," . "]}),Object(h.jsx)("span",{children:"".concat(t%j)})]})]})}}]),n}(o.a.Component);l.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.6a1da236.chunk.js.map