(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{15:function(e,t,a){e.exports={recipe:"card_recipe__20KL8",btn:"card_btn__23xBa",mainImg:"card_mainImg__6_x4z",onImg:"card_onImg__2uAH-",timeToPrepare:"card_timeToPrepare__1jgQU",clockIcon:"card_clockIcon__2ojRX",main:"card_main__3hSpQ"}},17:function(e,t,a){e.exports={paginationBox:"pagination_paginationBox__3pTi6",disactive:"pagination_disactive__3d8vz",arrow:"pagination_arrow__2Zgj7",active:"pagination_active__PsFhf"}},25:function(e,t,a){e.exports={logo:"logo_logo__J-Pf4",second:"logo_second__1dpMj"}},26:function(e,t,a){e.exports={img:"recipe_img__qZVDB",main:"recipe_main__sB9qQ"}},33:function(e,t,a){e.exports={recipes:"recipes_recipes__19gtW"}},34:function(e,t,a){e.exports={topic:"resultsFor_topic__TBLc9"}},35:function(e,t,a){},36:function(e,t,a){e.exports=a(50)},41:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),i=a.n(r),s=(a(41),a(16)),o=a(12),l=a(21),p=a.n(l),u=a(18),h=a(30),m=a(3),g=a(4),f=a(6),d=a(5),b=a(15),v=a.n(b),_=a(7),E=a(13),P=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props,t=e.all,a=e.currentSearch;return c.a.createElement(s.b,{className:v.a.main,to:{pathname:"/recipe/".concat(t.url),state:{recipe:t,currentSearch:a}}},c.a.createElement("div",{className:v.a.recipe},0===t.totalTime?"":c.a.createElement("div",{className:v.a.timeToPrepare},c.a.createElement("span",null,c.a.createElement(E.a,{className:v.a.clockIcon,icon:_.d})," ",t.totalTime>0&&t.totalTime<61?t.totalTime+"min":Math.floor(t.totalTime/60)+"h "+t.totalTime%60+"min")),c.a.createElement("img",{className:v.a.mainImg,src:t.image,alt:""}),c.a.createElement("div",{className:v.a.onImg},c.a.createElement("h3",null,t.label.length>15?t.label.substring(0,15)+"...":t.label))))}}]),a}(c.a.Component),y=a(33),j=a.n(y),O=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props,t=e.recipes,a=e.currentSearch;return c.a.createElement("div",{className:j.a.recipes},t.map((function(e){return c.a.createElement(P,{all:e.recipe,key:e.recipe.url,currentSearch:a})})))}}]),a}(c.a.Component),S=a(25),N=a.n(S),x=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:N.a.logo},this.props.logoText1,c.a.createElement("span",{className:N.a.second},this.props.logoText2))}}]),a}(c.a.Component),F=a(17),L=a.n(F),k=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pageNumbers:[]},e.componentWillMount=function(){for(var t=[],a=1;a<=Math.ceil(e.props.totalRecipes/e.props.recipesPerPage);a++)t.push(a);e.setState({pageNumbers:t})},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:L.a.paginationBox},c.a.createElement("span",{onClick:function(){return e.props.prevPaginate()},className:L.a.arrow}," ",c.a.createElement(E.a,{icon:_.a})," "),this.state.pageNumbers.map((function(t){return c.a.createElement("span",{className:e.props.currentPage===t?L.a.active:L.a.disactive,onClick:function(){return e.props.paginate(t)},key:t},t)})),c.a.createElement("span",{onClick:function(){return e.props.nextPaginate()},className:L.a.arrow}," ",c.a.createElement(E.a,{icon:_.b})," "))}}]),a}(c.a.Component),R=a(34),A=a.n(R),T=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){return c.a.createElement("h2",{className:A.a.topic},"Results for: ",c.a.createElement("span",null,this.props.search))}}]),a}(c.a.Component),B=a(9),I=a.n(B),w=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={search:"",query:"",healthLabels:[{id:1,label:"Vege",icon:_.e,apiName:"Vegetarian",active:!1},{id:2,label:"Vegan",icon:_.i,apiName:"Vegan",active:!1},{id:3,label:"Low Sugar",icon:_.h,apiName:"Low-Sugar",active:!1},{id:4,label:"Fish Free",icon:_.g,apiName:"Fish-Free",active:!1},{id:5,label:"Alcohol Free",icon:_.k,apiName:"Alcohol-Free",active:!1},{id:6,label:"Gluten Free",icon:_.j,apiName:"Gluten-Free",active:!1},{id:7,label:"Egg Free",icon:_.f,apiName:"Egg-Free",active:!1},{id:8,label:"Dairy Free",icon:_.c,apiName:"Dairy-Free",active:!1}]},e.setSearch=function(t){e.setState({search:t.target.value})},e.getSearchForm=function(t){t.preventDefault(),e.setState({query:e.state.search},(function(){e.props.getSearch(e.state.query)}))},e.setActive=function(t){e.state.healthLabels[t-1].active?e.state.healthLabels[t-1].active=!1:e.state.healthLabels[t-1].active=!0,e.forceUpdate()},e.chooseHealtyLabel=function(t,a){e.state.healthLabels[t-1].active?e.props.chooseHealtyLabel(a):e.props.deleteHealtyLabel(a)},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("form",{className:I.a.searchForm,onSubmit:this.getSearchForm},c.a.createElement("div",{className:I.a.mainSearch},c.a.createElement("input",{className:I.a.searchBar,value:this.state.search,onChange:this.setSearch,type:"text",placeholder:"np. chicken"}),c.a.createElement("button",{className:I.a.searchButton,type:"submit"},"Search"),c.a.createElement("div",{className:I.a.calories})),c.a.createElement("div",{className:I.a.filters},this.state.healthLabels.map((function(t){return c.a.createElement("div",{className:I.a.boxFilter,key:t.id,onClick:function(){e.setActive(t.id),e.chooseHealtyLabel(t.id,t.apiName)}},c.a.createElement("div",{className:[I.a.filter,t.active?I.a.dietActive:I.a.dietDisactive].join(" ")},c.a.createElement(E.a,{icon:t.icon})),c.a.createElement("span",{className:t.active?I.a.activeSpan:I.a.disactiveSpan},t.label))}))))}}]),a}(c.a.Component),C=a(35),H=a.n(C),D=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={APP_ID:"1107b38c",APP_KEY:"9d1be84bb7db421688f0fac4c1451706",search:"chicken",recipes:[],loading:!1,currentPage:1,recipesPerPage:12,indexOfLastRecipe:null,indexOfFirstRecipe:null,currentRecipes:[],totalAmoutOfSearchedRecipes:100,filteredRecipes:[],healtyLabels:[]},e.componentDidMount=function(){e.getRecipes()},e.updatePagination=function(){e.setState({indexOfLastRecipe:e.state.currentPage*e.state.recipesPerPage},(function(){e.setState({indexOfFirstRecipe:e.state.indexOfLastRecipe-e.state.recipesPerPage},(function(){e.setState({currentRecipes:e.state.recipes.slice(e.state.indexOfFirstRecipe,e.state.indexOfLastRecipe)})}))}))},e.getSearch=function(t){e.setState({search:t},(function(){e.getRecipes()}))},e.getRecipes=Object(h.a)(p.a.mark((function t(){var a,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,currentPage:1}),t.next=3,fetch("https://api.edamam.com/search?q=".concat(e.state.search,"&app_id=").concat(e.state.APP_ID,"&app_key=").concat(e.state.APP_KEY,"&to=").concat(e.state.totalAmoutOfSearchedRecipes));case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,e.setState({recipes:n.hits},(function(){var t=e.state.recipes.filter((function(e){return console.log(e.recipe.healthLabels),0!==e.recipe.totalTime}));if(e.state.healtyLabels.length>0){var a=Object(u.a)(e.state.healtyLabels),n=a.length;t=t.filter((function(e){var t=0,c=Object(u.a)(e.recipe.healthLabels);return a.map((function(e){c.map((function(a){e==a&&(t+=1)}))})),t===n}))}console.log(t),e.setState({loading:!1,recipes:t},e.updatePagination())}));case 8:case"end":return t.stop()}}),t)}))),e.paginate=function(t){e.setState({currentPage:t},(function(){e.updatePagination()}))},e.prevPaginate=function(){e.state.currentPage>1&&e.setState({currentPage:e.state.currentPage-1},(function(){e.updatePagination()}))},e.nextPaginate=function(){e.state.currentPage<Math.ceil(e.state.recipes.length/e.state.recipesPerPage)&&e.setState({currentPage:e.state.currentPage+1},(function(){e.updatePagination()}))},e.chooseHealtyLabel=function(t){var a=Object(u.a)(e.state.healtyLabels);a.push(t),e.setState({healtyLabels:a},(function(){console.log("choosed: "+e.state.healtyLabels),e.getRecipes()}))},e.deleteHealtyLabel=function(t){console.log("to del: "+t);var a=Object(u.a)(e.state.healtyLabels);a=a.filter((function(e){return e!==t})),e.setState({healtyLabels:a},(function(){console.log("choosed: "+e.state.healtyLabels),e.getRecipes()}))},e}return Object(g.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:H.a.App},c.a.createElement(x,{logoText1:"Recipe",logoText2:"Me"}),c.a.createElement(w,{searchValue:this.state.search,getSearch:this.getSearch,chooseHealtyLabel:this.chooseHealtyLabel,deleteHealtyLabel:this.deleteHealtyLabel}),this.state.loading?c.a.createElement("h3",null,"Loading..."):c.a.createElement("div",null,c.a.createElement(T,{search:this.state.search}),c.a.createElement(O,{currentSearch:this.state.search,loading:this.state.loading,recipes:this.state.currentRecipes}),c.a.createElement(k,{currentPage:this.state.currentPage,recipesPerPage:this.state.recipesPerPage,totalRecipes:this.state.recipes.length,paginate:this.paginate,prevPaginate:this.prevPaginate,nextPaginate:this.nextPaginate})))}}]),a}(c.a.Component),q=a(26),M=a.n(q),V=function(e){Object(f.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"render",value:function(){var e=this.props.location.state,t=e.recipe,a=e.currentSearch;return console.log(t),c.a.createElement("div",{className:M.a.main},c.a.createElement(s.b,{to:{pathname:"/",state:{currentSearch:a}}},"Back to home"),c.a.createElement("h1",null,t.label),c.a.createElement("p",null,parseFloat(t.calories.toFixed(0))," kcal"),c.a.createElement("p",null,"Ilo\u015b\u0107 porcji: ",t.yield),c.a.createElement("p",null,"Kalorie na osob\u0119: ",parseFloat((t.calories/t.yield).toFixed(0))," kcal"),c.a.createElement("img",{className:M.a.img,src:t.image,alt:""}))}}]),a}(c.a.Component),K=function(){return c.a.createElement(s.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",component:D,exact:!0}),c.a.createElement(o.a,{path:"/recipe/:url",component:V})))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(K,null)),document.getElementById("root"))},9:function(e,t,a){e.exports={searchForm:"searchForm_searchForm__25Equ",mainSearch:"searchForm_mainSearch__1-hXZ",searchBar:"searchForm_searchBar__1f5fA",searchButton:"searchForm_searchButton__1Nc3H",filters:"searchForm_filters__1NdQu",filter:"searchForm_filter__2xoUp",dietActive:"searchForm_dietActive__1gj-u",dietDisactive:"searchForm_dietDisactive__39qXg",boxFilter:"searchForm_boxFilter__3dTLI",activeSpan:"searchForm_activeSpan__375hZ"}}},[[36,1,2]]]);
//# sourceMappingURL=main.64fe869e.chunk.js.map