(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){e.exports=a(91)},87:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(27),o=a.n(c),s=a(95),l=a(2),i=a(3),u=a(5),m=a(4),p=a(6),d=a(97),h=a(46),v=a(94),b=a(18),f=a(11),g=a(29),O=a(7),y=a.n(O),j=a(9),E=a(17),w=a.n(E);var k={init:function(){},log:function(e){console.error(e)}};w.a.defaults.baseURL="https://fierce-fjord-35062.herokuapp.com/api",w.a.interceptors.response.use(null,function(e){return e.response&&e.response.status>=400&&e.response.status<500||(k.log(e),b.toast.error("An unexpected error occurrred.")),Promise.reject(e)});var N={get:w.a.get,post:w.a.post,put:w.a.put,delete:w.a.delete,setJwt:function(e){w.a.defaults.headers.common["x-auth-token"]=e}};a(40);function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var P="/movies";function C(e){return"".concat(P,"/").concat(e)}function x(){return N.get(P)}function I(e){return N.get(C(e))}function D(e){if(e._id){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e);return delete t._id,N.put(C(e._id),t)}return N.post(P,e)}var R=a(28);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var A=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).raiseSort=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a.props.sortColumn);t.path===e?t.order="asc"===t.order?"desc":"asc":(t.path=e,t.order="asc"),a.props.onSort(t)},a.renderSortIcon=function(e){var t=a.props.sortColumn;return e.path!==t.path?null:"asc"===t.order?n.a.createElement("i",{className:"fa fa-sort-asc"}):n.a.createElement("i",{className:"fa fa-sort-desc"})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("thead",null,n.a.createElement("tr",null,this.props.columns.map(function(t){return n.a.createElement("th",{className:"clickable",key:t.path||t.key,onClick:function(){return e.raiseSort(t.path)}},t.label," ",e.renderSortIcon(t))})))}}]),t}(r.Component),G=a(15),M=a.n(G),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).renderCell=function(e,t){return t.content?t.content(e):M.a.get(e,t.path)},a.createKey=function(e,t){return e._id+(t.path||t.key)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.data,r=t.columns;return n.a.createElement("tbody",null,a.map(function(t){return n.a.createElement("tr",{key:t._id},r.map(function(a){return n.a.createElement("td",{key:e.createKey(t,a)},e.renderCell(t,a))}))}))}}]),t}(r.Component),T=(a(41),function(e){var t=e.columns,a=e.sortColumn,r=e.onSort,c=e.data;return n.a.createElement("table",{className:"table table-responsive-sm",id:"table-border"},n.a.createElement(A,{columns:t,sortColumn:a,onSort:r}),n.a.createElement(L,{data:c,columns:t}))}),q=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),n.a.createElement("i",{onClick:e.onClick,className:t,"aria-hidden":"true",style:{cursor:"pointer"}})},U=a(45),B=a.n(U),z="/auth",F="token";function J(){return(J=Object(j.a)(y.a.mark(function e(t,a){var r,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.post(z,{email:t,password:a});case 2:r=e.sent,n=r.data,localStorage.setItem(F,n);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function W(){return localStorage.getItem(F)}N.setJwt(W());var Q={login:function(e,t){return J.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem(F,e)},logout:function(){localStorage.removeItem(F)},getCurrentUser:function(){try{var e=localStorage.getItem(F);return B()(e)}catch(t){return null}},getJwt:W},V=function(e){function t(){var e;Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).columns=[{path:"title",label:"Title",content:function(e){return n.a.createElement(R.a,{className:"black",to:"/movies/".concat(e._id)},e.title)}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return n.a.createElement(q,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.deleteColumn={key:"delete",content:function(t){return n.a.createElement("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm"},n.a.createElement("i",{class:"far fa-trash-alt"}))}};var a=Q.getCurrentUser();return a&&a.isAdmin&&e.columns.push(e.deleteColumn),e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.onSort,r=e.sortColumn;return n.a.createElement(T,{columns:this.columns,data:t,onSort:a,sortColumn:r})}}]),t}(r.Component),K=function(e){var t=e.items,a=e.textProperty,r=e.valueProperty,c=e.selectedItem,o=e.onItemSelect;return n.a.createElement("ul",{className:"list-group size"},t.map(function(e){return n.a.createElement("li",{onClick:function(){return o(e)},key:e[r],className:e===c?"list-group-item active":"list-group-item"},e[a])}))};K.defaultProps={textProperty:"name",valueProperty:"_id"};var $=K,H=function(e){var t=e.itemsCount,a=e.pageSize,r=e.currentPage,c=e.onPageChange,o=Math.ceil(t/a);if(1===o)return null;var s=M.a.range(1,o+1);return n.a.createElement("nav",null,n.a.createElement("div",{className:"center-page"},n.a.createElement("ul",{className:"pagination"},s.map(function(e){return n.a.createElement("li",{key:e,className:e===r?"page-item active":"page-item"},n.a.createElement("a",{onClick:function(){return c(e)},className:"page-link"},e))}))))};function X(){return N.get("/genres")}var Y=function(e){var t=e.value,a=e.onChange;return n.a.createElement("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return a(e.currentTarget.value)}})};function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={movies:[],genres:[],currentPage:1,pageSize:4,searchQuery:"",selectedGenre:null,sortColumn:{path:"title",order:"asc"}},a.handleDelete=function(){var e=Object(j.a)(y.a.mark(function e(t){var r,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.state.movies,n=r.filter(function(e){return e._id!==t._id}),a.setState({movies:n}),e.prev=3,e.next=6,c=t._id,N.delete(C(c));case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),e.t0.response&&404===e.t0.response.status&&(b.toast.error("This movie has already been deleted."),a.setState({movies:r}));case 11:case"end":return e.stop()}var c},e,null,[[3,8]])}));return function(t){return e.apply(this,arguments)}}(),a.handleLike=function(e){var t=Object(g.a)(a.state.movies),r=t.indexOf(e);t[r]=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t[r]),t[r].liked=!t[r].liked,a.setState({movies:t})},a.handlePageChange=function(e){a.setState({currentPage:e})},a.handleGenreSelect=function(e){a.setState({selectedGenre:e,searchQuery:"",currentPage:1})},a.handleSearch=function(e){a.setState({searchQuery:e,selectedGenre:null,currentPage:1})},a.handleSort=function(e){a.setState({sortColumn:e})},a.getPagedData=function(){var e=a.state,t=e.pageSize,r=e.currentPage,n=e.sortColumn,c=e.selectedGenre,o=e.searchQuery,s=e.movies,l=s;o?l=s.filter(function(e){return e.title.toLowerCase().startsWith(o.toLowerCase())}):c&&c._id&&(l=s.filter(function(e){return e.genre._id===c._id}));var i=function(e,t,a){var r=(t-1)*a;return M()(e).slice(r).take(a).value()}(M.a.orderBy(l,[n.path],[n.order]),r,t);return{totalCount:l.length,data:i}},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(y.a.mark(function e(){var t,a,r,n,c;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:return t=e.sent,a=t.data,r=[{_id:"",name:"All Genres"}].concat(Object(g.a)(a)),e.next=7,x();case 7:n=e.sent,c=n.data,this.setState({movies:c,genres:r});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.user,t=(this.state.movies.length,this.state),a=t.pageSize,r=t.currentPage,c=t.sortColumn,o=t.searchQuery,s=this.getPagedData(),l=s.totalCount,i=s.data;return n.a.createElement("div",{className:"row d-flex justify-content-center"},n.a.createElement("div",{className:"col-md-3 col-sm-12"},n.a.createElement("div",{className:"center"},n.a.createElement($,{items:this.state.genres,selectedItem:this.state.selectedGenre,onItemSelect:this.handleGenreSelect}))),n.a.createElement("div",{className:"col-md-9 col-sm-12"},n.a.createElement("div",{className:"center"},e&&n.a.createElement(R.a,{to:"/movies/new",className:"btn btn-primary btn-round px-4 my-3"},"New Movie")),n.a.createElement("div",{className:"center margin"},n.a.createElement("p",null,"Showing ",l," movies in the database."),n.a.createElement(Y,{value:o,onChange:this.handleSearch}),n.a.createElement(V,{movies:i,sortColumn:c,onLike:this.handleLike,onDelete:this.handleDelete,onSort:this.handleSort}),n.a.createElement(H,{itemsCount:l,pageSize:a,currentPage:r,onPageChange:this.handlePageChange}))))}}]),t}(r.Component),te=a(8),ae=a.n(te),re=a(19),ne=function(e){var t=e.name,a=e.label,r=e.error,c=Object(re.a)(e,["name","label","error"]);return n.a.createElement("span",{className:"bmd-form-group"},n.a.createElement("div",{className:"control-group my-4"},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("input",Object.assign({},c,{name:t,id:t,className:"form-control"})),r&&n.a.createElement("div",{className:"mt-2 alert alert-danger"},r)))},ce=function(e){var t=e.name,a=e.label,r=e.options,c=e.error,o=Object(re.a)(e,["name","label","options","error"]);return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:t},a),n.a.createElement("select",Object.assign({name:t,id:t},o,{className:"form-control"}),n.a.createElement("option",{value:""}),r.map(function(e){return n.a.createElement("option",{key:e._id,value:e._id},e.name)})),c&&n.a.createElement("div",{className:"alert alert-danger"},c))};a(42);function oe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?oe(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):oe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var le=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={data:{},errors:{}},a.validate=function(){var e=ae.a.validate(a.state.data,a.schema,{abortEarly:!1}).error;if(!e)return null;var t={},r=!0,n=!1,c=void 0;try{for(var o,s=e.details[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var l=o.value;t[l.path[0]]=l.message}}catch(i){n=!0,c=i}finally{try{r||null==s.return||s.return()}finally{if(n)throw c}}return t},a.validateProperty=function(e){var t=e.name,r=e.value,n=Object(f.a)({},t,r),c=Object(f.a)({},t,a.schema[t]),o=ae.a.validate(n,c).error;return o?o.details[0].message:null},a.handleSubmit=function(e){e.preventDefault();var t=a.validate();a.setState({errors:t||{}}),t||a.doSubmit()},a.handleChange=function(e){var t=e.currentTarget,r=se({},a.state.errors),n=a.validateProperty(t);n?r[t.name]=n:delete r[t.name];var c=se({},a.state.data);c[t.name]=t.value,a.setState({data:c,errors:r})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"renderButton",value:function(e){return n.a.createElement("button",{type:"submit",disabled:this.validate(),className:"btn btn-primary"},e)}},{key:"renderInput",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",r=this.state,c=r.data,o=r.errors;return n.a.createElement(ne,{type:a,name:e,value:c[e],label:t,onChange:this.handleChange,error:o[e]})}},{key:"renderSelect",value:function(e,t,a){var r=this.state,c=r.data,o=r.errors;return n.a.createElement(ce,{name:e,value:c[e],label:t,options:a,onChange:this.handleChange,error:o[e]})}}]),t}(r.Component),ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:"",movieImg:null},genres:[],errors:{}},a.schema={_id:ae.a.string(),title:ae.a.string().required().label("Title"),genreId:ae.a.string().required().label("Genre"),numberInStock:ae.a.number().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:ae.a.number().required().min(0).max(10).label("Daily Rental Rate"),movieImg:ae.a.string().allow("").optional()},a.doSubmit=Object(j.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(a.state.data);case 2:a.props.history.push("/movies");case 3:case"end":return e.stop()}},e)})),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"populateGenres",value:function(){var e=Object(j.a)(y.a.mark(function e(){var t,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:t=e.sent,a=t.data,this.setState({genres:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"populateMovie",value:function(){var e=Object(j.a)(y.a.mark(function e(){var t,a,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,I(t);case 6:a=e.sent,r=a.data,this.setState({data:this.mapToViewModel(r)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(j.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.populateGenres();case 2:return e.next=4,this.populateMovie();case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate,movieImg:e.movieImg}}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"height"}),n.a.createElement("div",{className:"card card-login card-hidden"},n.a.createElement("div",{className:"card-header card-header-primary text-center"},n.a.createElement("h4",null,"Movie Form")),n.a.createElement("form",{onSubmit:this.handleSubmit,className:"group-flex"},n.a.createElement("div",{className:"card-body text-center p-4"},this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("movieImg","Insert image link"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")))))}}]),t}(le),ue=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"height"}),n.a.createElement("h5",{className:"text-center"},"There are no customers in our database."))},me=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.props.user;return n.a.createElement("div",null,n.a.createElement("div",{className:"height"}),n.a.createElement("h5",{className:"text-center"},"Welcome to Vidly"))}}]),t}(r.Component),pe=(a(87),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.movieImg,r=e.genre;e._id;return n.a.createElement("article",null,n.a.createElement("div",{className:"card my-4"},""!==a?n.a.createElement("div",{className:"image-box"},n.a.createElement("img",{src:"".concat(a),alt:"",className:"img-fluid card-img-top"})):n.a.createElement("div",{className:"image-box"},n.a.createElement("img",{src:"./default-image.jpg",alt:"",className:"img-fluid card-img-top"})),n.a.createElement("div",{className:"card-body text-center"},n.a.createElement("h5",null,t),n.a.createElement("p",null,r.name))))}}]),t}(r.Component)),de=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={movies:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(y.a.mark(function e(){var t,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,a=t.data,this.setState({movies:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies;return n.a.createElement("section",null,n.a.createElement("div",{className:"row"},e.map(function(e){return n.a.createElement("div",{key:e._id,className:"col-md-4 col-sm-12"},n.a.createElement(pe,{key:e._id,movie:e}))})))}}]),t}(r.Component),he=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(de,null)}}]),t}(r.Component),ve=function(){return n.a.createElement("h5",null,"Not Found")},be=a(93),fe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={collapsed:!0,user:a.props.user},a.toggleNavbar=function(){a.setState({collapsed:!a.state.collapsed})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.collapsed,t=e?"collapse navbar-collapse":"collapse navbar-collapse show",a=e?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right",r=this.props.user;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("div",{className:"container"},n.a.createElement(R.a,{className:"navbar-brand",to:"/"},n.a.createElement("img",{src:"https://github.com/Ceci007/images/blob/master/img-vidly/logo.png?raw=true",alt:"logo",className:"logo"})),n.a.createElement("button",{onClick:this.toggleNavbar,className:"".concat(a," p-2"),type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"}),n.a.createElement("span",{className:"navbar-toggler-icon"}),n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"".concat(t),id:"navbarResponsive"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item mx-auto"},n.a.createElement(be.a,{className:"nav-link",to:"/movies"},"Movies")),n.a.createElement("li",{className:"nav-item mx-auto"},n.a.createElement(be.a,{className:"nav-link",to:"/customers"},"Customers")),n.a.createElement("li",{className:"nav-item mx-auto"},n.a.createElement(be.a,{className:"nav-link",to:"/rentals"},"Posters")),!r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"nav-item mx-auto"},n.a.createElement(be.a,{className:"nav-link",to:"/login"},"Login")),n.a.createElement("li",{className:"nav-item mx-auto"},n.a.createElement(be.a,{className:"nav-link",to:"/register"},"Register"))),r&&n.a.createElement(n.a.Fragment,null,n.a.createElement("li",{className:"nav-item mx-auto"},n.a.createElement(be.a,{className:"nav-link",to:"/profile"},r.name)),n.a.createElement("li",{className:"nav-item mx-auto"},n.a.createElement(be.a,{className:"nav-link",to:"/logout"},"Logout")))))))}}]),t}(r.Component),ge=a(96),Oe=(a(43),Object(ge.a)(function(e){var t=e.location;return t.pathname.match("/register")||t.pathname.match("/login")?null:n.a.createElement("footer",null,n.a.createElement("p",null,"\xa9 2019, made by ",n.a.createElement("i",{className:"fa fa-heart"})," Cecilia Ben\xedtez Casaccia, for a better web."))}));a(44);function ye(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function je(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ye(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ye(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Ee=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={data:{username:"",password:""},errors:{}},a.schema={username:ae.a.string().required().label("Username"),password:ae.a.string().required().label("Password")},a.doSubmit=Object(j.a)(y.a.mark(function e(){var t,r,n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=a.state.data,e.next=4,Q.login(t.username,t.password);case 4:r=a.props.location.state,window.location=r?r.from.pathname:"/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&((n=je({},a.state.errors)).username=e.t0.response.data,a.setState({errors:n}));case 11:case"end":return e.stop()}},e,null,[[0,8]])})),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return Q.getCurrentUser()?n.a.createElement(v.a,{to:"/"}):n.a.createElement("div",{className:"background-image"},n.a.createElement("img",{src:"https://github.com/Ceci007/images/blob/master/img-vidly/Avengers2.jpg?raw=true",alt:"background"}),n.a.createElement("div",{className:"container bg-overlap"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"card card-login card-hidden"},n.a.createElement("div",{className:"card-header card-header-primary text-center"},n.a.createElement("h4",null,"Login")),n.a.createElement("div",{className:"card-body text-center p-4"},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login"))))))))}}]),t}(le),we=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){Q.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),t}(r.Component),ke="/users";function Ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function Se(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ne(a,!0).forEach(function(t){Object(f.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ne(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Pe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={data:{username:"",password:"",name:""},errors:{}},a.schema={username:ae.a.string().required().email().label("Username"),password:ae.a.string().required().min(5).label("Password"),name:ae.a.string().required().label("Name")},a.doSubmit=Object(j.a)(y.a.mark(function e(){var t,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n=a.state.data,N.post(ke,{email:n.username,password:n.password,name:n.name});case 3:t=e.sent,Q.loginWithJwt(t.headers["x-auth-token"]),window.location="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0.response&&400===e.t0.response.status&&((r=Se({},a.state.errors)).username=e.t0.response.data,a.setState({errors:r}));case 11:case"end":return e.stop()}var n},e,null,[[0,8]])})),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"background-image"},n.a.createElement("img",{src:"https://github.com/Ceci007/images/blob/master/img-vidly/Avengers2.jpg?raw=true",alt:"background"}),n.a.createElement("div",{className:"container bg-overlap"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto"},n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("div",{className:"card card-login card-hidden"},n.a.createElement("div",{className:"card-header card-header-primary text-center"},n.a.createElement("h4",null,"Register")),n.a.createElement("div",{className:"card-body text-center p-4"},this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register"))))))))}}]),t}(le),Ce=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.component,r=t.render,c=Object(re.a)(t,["component","render"]);return n.a.createElement(h.a,Object.assign({},c,{render:function(t){return Q.getCurrentUser()?a?n.a.createElement(a,t):r(t):n.a.createElement(v.a,{to:{pathname:"/login",state:{from:e.props.location}}})}}))}}]),t}(r.Component),xe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Q.getCurrentUser();this.setState({user:e})}},{key:"render",value:function(){var e=this.state.user;return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.ToastContainer,null),n.a.createElement(fe,{user:e}),n.a.createElement("main",{className:"container"},n.a.createElement(d.a,null,n.a.createElement(h.a,{path:"/register",component:Pe}),n.a.createElement(h.a,{path:"/login",component:Ee}),n.a.createElement(h.a,{path:"/logout",component:we}),n.a.createElement(Ce,{path:"/movies/:id",component:ie}),n.a.createElement(h.a,{path:"/movies",render:function(t){return n.a.createElement(ee,Object.assign({},t,{user:e}))}}),n.a.createElement(h.a,{path:"/rentals",component:he}),n.a.createElement(h.a,{path:"/customers",component:ue}),n.a.createElement(h.a,{path:"/profile",component:me,user:e}),n.a.createElement(h.a,{path:"/not-found",component:ve}),n.a.createElement(v.a,{from:"/",exact:!0,to:"/movies"}),n.a.createElement(v.a,{to:"not-found"}))),n.a.createElement(Oe,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(89),a(90);o.a.render(n.a.createElement(s.a,null,n.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.2191b3e4.chunk.js.map