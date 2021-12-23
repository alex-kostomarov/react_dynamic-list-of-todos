(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(7),c=s.n(n),r=s(2),a=s(3),o=s(5),i=s(4),l=s(1),u=s.n(l),d=(s(13),s(14),s(15),s(0)),h=function(e){var t=e.todos,s=e.onSelectUser,n=e.selectedUserId;return Object(d.jsxs)("div",{className:"TodoList",children:[Object(d.jsx)("h2",{children:"Todos:"}),Object(d.jsx)("div",{className:"TodoList__list-container",children:Object(d.jsx)("ul",{className:"TodoList__list",children:t.map((function(e){var t=["TodoList__item"];e.completed?t.push("TodoList__item--checked"):t.push("TodoList__item--unchecked");var c=["TodoList__user-button","button"];return n===e.userId&&c.push("TodoList__user-button--selected"),Object(d.jsxs)("li",{className:t.join(" "),children:[Object(d.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(d.jsx)("p",{children:e.title}),Object(d.jsxs)("button",{className:c.join(" "),type:"button",onClick:function(){return s(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})})]})},j=(s(17),function(e){Object(o.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={user:null},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mate.academy/students-api/users/".concat(this.props.userId)).then((function(e){return e.json()})).then((function(t){return e.setState({user:t})}))}},{key:"componentDidUpdate",value:function(e){var t=this;e.userId!==this.props.userId&&fetch("https://mate.academy/students-api/users/".concat(this.props.userId)).then((function(e){return e.json()})).then((function(e){return t.setState({user:e})}))}},{key:"render",value:function(){var e=this.state.user;return e&&Object(d.jsxs)("div",{className:"CurrentUser",children:[Object(d.jsx)("h2",{className:"CurrentUser__title",children:Object(d.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(d.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(d.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(d.jsx)("p",{className:"CurrentUser__phone",children:e.phone}),Object(d.jsx)("button",{className:"CurrentUser__button button",type:"button",onClick:this.props.onClearUser,children:"Clear"})]})}}]),s}(u.a.Component)),p=function(e){Object(o.a)(s,e);var t=Object(i.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={selectedUserId:0,todos:[],searchQuery:"",selectedStatus:"all"},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearUser=function(){e.setState({selectedUserId:0})},e.getTodosList=function(t){return e.state.todos.filter((function(s){return s.title.toLocaleLowerCase().includes(t)&&("all"===e.state.selectedStatus||s.completed===("completed"===e.state.selectedStatus))}))},e.handleSearchQuery=function(t){e.setState({searchQuery:t})},e.handleSelectedStatus=function(t){var s=t.target.value;"all"!==s&&"completed"!==s&&"active"!==s||e.setState({selectedStatus:s})},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mate.academy/students-api/todos").then((function(e){return e.json()})).then((function(t){return e.setState({todos:t})}))}},{key:"render",value:function(){var e=this,t=this.state,s=t.selectedUserId,n=t.searchQuery,c=t.selectedStatus,r=n.toLocaleLowerCase(),a=this.getTodosList(r);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"App__sidebar",children:[Object(d.jsx)("input",{type:"text",id:"search-query",placeholder:"Type search word",value:n,onChange:function(t){return e.handleSearchQuery(t.target.value)}}),Object(d.jsxs)("select",{value:c,onChange:this.handleSelectedStatus,children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"active",children:"Active"}),Object(d.jsx)("option",{value:"completed",children:"Completed"})]}),Object(d.jsx)(h,{todos:a,selectedUserId:s,onSelectUser:this.selectUser})]}),Object(d.jsx)("div",{className:"App__content",children:Object(d.jsx)("div",{className:"App__content-container",children:s?Object(d.jsx)(j,{userId:s,onClearUser:this.clearUser}):"No user selected"})})]})}}]),s}(u.a.Component),b=p;c.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.c6f050ae.chunk.js.map