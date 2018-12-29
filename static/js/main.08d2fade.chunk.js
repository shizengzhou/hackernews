(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,n){e.exports=n(58)},32:function(e,t,n){},53:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(22),o=n.n(s),i=(n(32),n(4)),c=n(5),u=n(8),l=n(6),h=n(7),m=n(2),S=n(9),b=n(14),p=n(15),v=n(23),d=n.n(v),f=(n(53),n(11)),y="redux",O={NONE:function(e){return e},TITLE:function(e){return Object(f.sortBy)(e,"title")},AUTHOR:function(e){return Object(f.sortBy)(e,"author")},COMMENTS:function(e){return Object(f.sortBy)(e,"num_comments").reverse()},POINTS:function(e){return Object(f.sortBy)(e,"points").reverse()}},E=function(e){var t=e.onClick,n=e.className,a=e.children;return r.a.createElement("button",{type:"button",className:n,onClick:t},a)};E.defaultProps={className:""};var j=E,T=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.input&&this.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,a=t.onChange,s=t.onSubmit,o=t.children;return r.a.createElement("form",{onSubmit:s},r.a.createElement("input",{type:"text",value:n,onChange:a,ref:function(t){return e.input=t}}),r.a.createElement("button",{type:"submit"},o))}}]),t}(a.Component),g=n(24),w=n.n(g),k=function(e){var t=e.sortKey,n=e.onSort,a=e.activeSortKey,s=e.children,o=w()("button-inline",{"button-active":t===a});return r.a.createElement(j,{className:o,onClick:function(){return n(t)}},s)},N=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={sortKey:"NONE",isSortReverse:!1},n.onSort=n.onSort.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onSort",value:function(e){var t=this.state.sortKey===e&&!this.state.isSortReverse;this.setState({sortKey:e,isSortReverse:t})}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.onDismiss,a=this.state,s=a.sortKey,o=a.isSortReverse,i=O[s](t),c=o?i.reverse():i;return r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table-header"},r.a.createElement("span",{style:{width:"40%"}},r.a.createElement(k,{sortKey:"TITLE",onSort:this.onSort,activeSortKey:s},"Titel")),r.a.createElement("span",{style:{width:"30%"}},r.a.createElement(k,{sortKey:"AUTHOR",onSort:this.onSort,activeSortKey:s},"Author")),r.a.createElement("span",{style:{width:"10%"}},r.a.createElement(k,{sortKey:"COMMENTS",onSort:this.onSort,activeSortKey:s},"Comments")),r.a.createElement("span",{style:{width:"10%"}},r.a.createElement(k,{sortKey:"POINTS",onSort:this.onSort,activeSortKey:s},"Points")),r.a.createElement("span",{style:{width:"10%"}},"Archive")),c.map(function(e){return r.a.createElement("div",{className:"table-row",key:e.objectID},r.a.createElement("span",{style:{width:"40%"}},r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("span",{style:{width:"30%"}},e.author),r.a.createElement("span",{style:{width:"10%"}},e.num_comments),r.a.createElement("span",{style:{width:"10%"}},e.points),r.a.createElement("span",{style:{width:"10%"}},r.a.createElement(j,{className:"button-inline",onClick:function(){return n(e.objectID)}},"Dismiss")))}))}}]),t}(a.Component),K=n(10),C=n(25),D=n(26);K.b.add(C.a);var M=function(){return r.a.createElement("div",{style:{textAlign:"center",margin:"40px 0"}},r.a.createElement(D.a,{className:"fa-spin fa-3x",icon:"spinner"}))},I=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e)))._isMounted=!1,n.state={results:null,searchKey:"",searchTerm:y,error:null,isLoading:!1},n.needsToSearchTopStories=n.needsToSearchTopStories.bind(Object(m.a)(Object(m.a)(n))),n.setSearchTopStories=n.setSearchTopStories.bind(Object(m.a)(Object(m.a)(n))),n.fetchSearchTopStories=n.fetchSearchTopStories.bind(Object(m.a)(Object(m.a)(n))),n.onDismiss=n.onDismiss.bind(Object(m.a)(Object(m.a)(n))),n.onSearchChange=n.onSearchChange.bind(Object(m.a)(Object(m.a)(n))),n.onSearchSubmit=n.onSearchSubmit.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"setSearchTopStories",value:function(e){var t=e.hits,n=e.page;this.setState(function(e,t){return function(n){var a=n.searchKey,r=n.results,s=r&&r[a]?r[a].hits:[],o=Object(p.a)(s).concat(Object(p.a)(e));return{results:Object(b.a)({},r,Object(S.a)({},a,{hits:o,page:t})),isLoading:!1}}}(t,n))}},{key:"fetchSearchTopStories",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.setState({isLoading:!0}),d()("".concat("https://hn.algolia.com/api/v1").concat("/search","?").concat("query=").concat(e,"&").concat("page=").concat(n,"&").concat("hitsPerPage=").concat("30")).then(function(e){return t._isMounted&&t.setSearchTopStories(e.data)}).catch(function(e){return t._isMounted&&t.setState({error:e})})}},{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchSearchTopStories(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"onDismiss",value:function(e){var t=this.state,n=t.searchKey,a=t.results,r=a[n],s=r.hits,o=r.page,i=s.filter(function(t){return t.objectID!==e});this.setState({results:Object(b.a)({},a,Object(S.a)({},n,{hits:i,page:o}))})}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"needsToSearchTopStories",value:function(e){return!this.state.results[e]}},{key:"onSearchSubmit",value:function(e){var t=this.state.searchTerm;this.setState({searchKey:t}),this.needsToSearchTopStories(t)&&this.fetchSearchTopStories(t),e.preventDefault()}},{key:"render",value:function(){var e=this,t=this.state,n=t.results,a=t.searchTerm,s=t.searchKey,o=t.error,i=t.isLoading,c=n&&n[s]&&n[s].page||0,u=n&&n[s]&&n[s].hits||[];return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"interactions"},r.a.createElement(T,{value:a,onChange:this.onSearchChange,onSubmit:this.onSearchSubmit},"Search")),i?r.a.createElement(M,null):o?r.a.createElement("div",{className:"interactions"},r.a.createElement("p",null,"Something went wrong.")):r.a.createElement(N,{list:u,onDismiss:this.onDismiss}),r.a.createElement("div",{className:"interactions"},r.a.createElement(j,{onClick:function(){return e.fetchSearchTopStories(s,c+1)}},"More")))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.08d2fade.chunk.js.map