(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=(c(10),c(5)),s=c(1),d=c(4),b=c.n(d),l=c(0),o=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected;return Object(l.jsxs)("div",{children:[Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{className:b()("",{"is-active":t.id===c.id}),children:Object(l.jsx)("a",{href:"#".concat(t.id),onClick:function(){n(t)},children:t.title})},t.id)}))}),Object(l.jsx)("div",{className:"block","data-cy":"tab-content",children:c.content})]})},r=(c(12),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),j=function(){var t=Object(s.useState)(r[0]),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"section",children:[Object(l.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"tabs is-boxed tab-container",children:Object(l.jsx)(o,{"data-cy":"tab-content",tabs:r,selectedTabId:c,onTabSelected:function(t){t.id!==c.id&&n(t)}})})})]})})};a.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.1072d1a7.chunk.js.map