(function(t){function e(e){for(var n,l,r=e[0],o=e[1],c=e[2],u=0,h=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&h.push(i[l][0]),i[l]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},i={app:0},s=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=o;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"253a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("8bbf"),i=a.n(n),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-admin-table",class:{"vue-admin-table-padded":t.padded},attrs:{id:t.tableId}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showToolbar,expression:"showToolbar"}],staticClass:"toolbar"},[a("div",{staticClass:"flex"},[t._l(t.actions,(function(e,n){return a("div",{key:n},[a("admin-table-action-button",{attrs:{label:e.label,icon:e.icon,action:e.action,actions:e.actions,ids:t.checks,enabled:!!t.checks.length},on:{reload:t.reload}})],1)})),t.search&&!t.tableData.length?a("div",{staticClass:"flex-grow texticon search icon clearable"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchTerm,expression:"searchTerm"}],staticClass:"text fullwidth",attrs:{type:"text",autocomplete:"off",placeholder:t.searchPlaceholderText},domProps:{value:t.searchTerm},on:{input:[function(e){e.target.composing||(t.searchTerm=e.target.value)},t.handleSearch]}}),a("div",{staticClass:"clear hidden",attrs:{title:t.searchClearTitle}})]):t._e()],2)]),a("div",{class:{"content-pane":t.fullPage}},[this.isEmpty?a("div",{staticClass:"zilch"},[a("p",[t._v(t._s(t.emptyMessage))])]):t._e(),a("div",{staticClass:"tableview",class:{loading:t.isLoading,hidden:this.isEmpty}},[a("div",{staticClass:"tablepane vue-admin-tablepane"},[a("vuetable",{ref:"vuetable",attrs:{"append-params":t.appendParams,"api-mode":!!t.apiUrl,"api-url":t.apiUrl,css:t.tableCss,data:t.tableData,"detail-row-component":t.detailRow,fields:t.fields,"per-page":t.perPage,"pagination-path":"pagination"},on:{"vuetable:loaded":t.init,"vuetable:loading":t.loading,"vuetable:pagination-data":t.onPaginationData,"vuetable:load-success":t.onLoadSuccess},scopedSlots:t._u([{key:"checkbox",fn:function(e){return[a("admin-table-checkbox",{attrs:{id:e.rowData.id,checks:t.checks,status:t.checkboxStatus(e.rowData)},on:{addCheck:t.addCheck,removeCheck:t.removeCheck}})]}},{key:"title",fn:function(e){return[void 0!==e.rowData.status?a("span",{staticClass:"status",class:{enabled:e.rowData.status}}):t._e(),e.rowData.url?a("a",{staticClass:"cell-bold",attrs:{href:e.rowData.url}},[t._v(t._s(e.rowData.title))]):t._e(),e.rowData.url?t._e():a("span",{staticClass:"cell-bold"},[t._v(t._s(e.rowData.title))])]}},{key:"handle",fn:function(e){return[a("code",[t._v(t._s(e.rowData.handle))])]}},{key:"menu",fn:function(e){return[e.rowData.menu.showItems?[a("a",{attrs:{href:e.rowData.menu.url}},[t._v(t._s(e.rowData.menu.label)+" ("+t._s(e.rowData.menu.items.length)+")")]),a("a",{staticClass:"menubtn",attrs:{title:e.rowData.menu.label}}),a("div",{staticClass:"menu"},[a("ul",t._l(e.rowData.menu.items,(function(e,n){return a("li",{key:n},[a("a",{attrs:{href:e.url}},[t._v(t._s(e.label))])])})),0)])]:[a("a",{attrs:{href:e.rowData.menu.url}},[t._v(t._s(e.rowData.menu.label))])]]}},{key:"detail",fn:function(e){return[e.rowData.detail.content&&e.rowData.detail.handle?a("div",{staticClass:"detail-cursor-pointer",domProps:{innerHTML:t._s(e.rowData.detail.handle)},on:{click:function(a){return t.handleDetailRow(e.rowData.id)}}},[t._v("asd")]):t._e(),!e.rowData.detail.content||e.rowData.detail.handle&&void 0!=e.rowData.detail.handle||!Object.keys(e.rowData.detail.content).length&&!e.rowData.detail.content.length?t._e():a("div",{staticClass:"detail-cursor-pointer",attrs:{"data-icon":"info",title:e.rowData.detail.title},on:{click:function(a){return t.handleDetailRow(e.rowData.id)}}})]}},{key:"reorder",fn:function(e){return[a("i",{staticClass:"move icon vue-table-move-handle",class:{disabled:!t.canReorder},attrs:{"data-id":e.rowData.id}})]}},{key:"delete",fn:function(e){return[void 0==e.rowData._showDelete||1==e.rowData._showDelete?a("admin-table-delete-button",{attrs:{id:e.rowData.id,name:e.rowData.title,"success-message":t.deleteSuccessMessage,"confirmation-message":t.deleteConfirmationMessage,"fail-message":t.deleteFailMessage,"action-url":t.deleteAction,disabled:!t.canDelete},on:{reload:function(a){return t.remove(e.rowIndex,e.rowData.id)}}}):t._e()]}}])})],1),a("admin-table-pagination",{ref:"pagination",attrs:{itemLabels:t.itemLabels},on:{"vuetable-pagination:change-page":t.onChangePage}})],1)])])},l=[],r=(a("386d"),a("a481"),a("6b54"),a("ac6a"),a("75fc")),o=(a("c5f6"),a("c3d0")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.tablePagination?a("div",{staticClass:"vue-admin-table-pagination flex pagination"},[a("div",{staticClass:"page-link prev-page",class:[t.isOnFirstPage?"disabled":""],attrs:{title:"Previous Page"},on:{click:function(e){return t.loadPage("prev")}}}),a("div",{staticClass:"page-link next-page",class:[t.isOnLastPage?"disabled":""],attrs:{title:"Next Page"},on:{click:function(e){return t.loadPage("next")}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.tablePagination,expression:"tablePagination"}],staticClass:"page-info"},[t._v(t._s(t.paginationLabel))])]):t._e()},d=[],u=a("eb37"),h={name:"AdminTablePagination",mixins:[u["a"]],props:{itemLabels:{type:Object,default:function(){return{singular:Craft.t("app","Item"),plural:Craft.t("app","Items")}}}},computed:{paginationLabel:function(){return Craft.t("app","{first, number}-{last, number} of {total, number} {total, plural, =1{{item}} other{{items}}}",{first:this.tablePagination.from,last:this.tablePagination.to,total:this.tablePagination.total||0,item:this.itemLabels.singular,items:this.itemLabels.plural})}}},f=h,p=(a("5dba"),a("2877")),b=Object(p["a"])(f,c,d,!1,null,null,null),m=b.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"delete icon",class:{disabled:t.disabled},attrs:{title:t._f("t")("Delete","app"),role:"button",href:"#"},on:{click:function(e){return e.preventDefault(),t.handleClick(e)}}})},v=[],C=(a("7f7f"),a("cebe")),k=a.n(C),y={name:"AdminTableDeleteButton",props:{actionUrl:String,confirmationMessage:String,disabled:Boolean,failMessage:String,id:[Number,String],name:String,successMessage:String},data:function(){return{}},computed:{success:function(){var t=void 0!==this.successMessage?Craft.t("site",this.successMessage,{name:this.name}):Craft.t("app","“{name}” deleted.",{name:this.name});return Craft.escapeHtml(t)},confirm:function(){var t=void 0!==this.confirmationMessage?Craft.t("site",this.confirmationMessage,{name:this.name}):Craft.t("app","Are you sure you want to delete “{name}”?",{name:this.name});return Craft.escapeHtml(t)},failed:function(){var t=void 0!==this.failMessage?Craft.t("site",this.failMessage,{name:this.name}):Craft.t("app","Couldn’t delete “{name}”.",{name:this.name});return Craft.escapeHtml(t)}},methods:{confirmDelete:function(){return confirm(this.confirm)},handleClick:function(){var t=this;!this.disabled&&this.confirmDelete()&&k.a.post(Craft.getActionUrl(this.actionUrl),{id:this.id},{headers:{"X-CSRF-Token":Craft.csrfTokenValue}}).then((function(e){e.data&&void 0!==e.data.success&&e.data.success?(Craft.cp.displayNotice(t.success),t.$emit("reload")):Craft.cp.displayError(t.failed)}))}}},w=y,D=Object(p["a"])(w,g,v,!1,null,"17492936",null),S=D.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkbox",class:{checked:t.isChecked,"table-disabled-checkbox":!t.status},attrs:{title:t.title},on:{click:function(e){return e.preventDefault(),t.handleClick(e)}}})},x=[],P={name:"AdminTableCheckbox",props:{id:Number,selectAll:Boolean,checks:Array,status:{type:Boolean,default:!0}},data:function(){return{}},computed:{isChecked:function(){return-1!==this.checks.indexOf(this.id)},title:function(){return Craft.escapeHtml(Craft.t("app","Select"))}},methods:{handleClick:function(){this.status&&(this.isChecked?this.$emit("removeCheck",this.id):this.$emit("addCheck",this.id))}}},A=P,O=(a("bfb1"),Object(p["a"])(A,_,x,!1,null,"fcdcf3f0",null)),M=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{ref:"form",attrs:{method:"post"}},[a("input",{attrs:{type:"hidden",name:t.tokenName},domProps:{value:t.tokenValue}}),a("input",{attrs:{type:"hidden",name:"action"},domProps:{value:t.action}}),a("input",{attrs:{type:"hidden",name:t.param},domProps:{value:t.value}}),t._l(t.ids,(function(t,e){return a("input",{key:e,attrs:{type:"hidden",name:"ids[]"},domProps:{value:t}})})),a("div",{ref:"button",staticClass:"btn menubtn",attrs:{"data-icon":t.icon}},[t._v(t._s(t.label))]),t.actions.length?a("div",{staticClass:"menu"},[a("ul",{staticClass:"padded"},t._l(t.actions,(function(e,n){return a("li",{key:n},[a("a",{class:{error:void 0!==e.error&&e.error,disabled:void 0!==e.allowMultiple&&!e.allowMultiple&&t.hasMultipleSelected},attrs:{href:"#","data-param":e.param,"data-value":e.value,"data-ajax":e.ajax},on:{click:function(a){a.preventDefault(),(void 0===e.allowMultiple||e.allowMultiple||!t.hasMultipleSelected)&&t.handleClick(e.param,e.value,e.action,e.ajax)}}},[e.status?a("span",{class:"status "+e.status}):t._e(),t._v(t._s(e.label)+"\n        ")])])})),0)]):t._e()],2)},L=[],T={name:"AdminTableActionButton",props:{action:String,actions:Array,enabled:Boolean,ids:Array,label:String,icon:String},data:function(){return{button:null,tokenName:Craft.csrfTokenName,tokenValue:Craft.csrfTokenValue,param:"",value:""}},methods:{handleClick:function(t,e,a,n){var i=this;if(n){var s={ids:this.ids};s[t]=e,Craft.postActionRequest(a,s,(function(t){t.success&&Craft.cp.displayNotice(Craft.escapeHtml(Craft.t("app","Updated."))),i.$emit("reload")}))}else this.action=a,this.param=t,this.value=e,this.$nextTick((function(){i.$refs.form.submit()}))}},computed:{hasMultipleSelected:function(){return this.ids.length>1}},watch:{enabled:function(){this.enabled?(this.button.removeClass("disabled"),this.button.data("menubtn").enable()):(this.button.addClass("disabled"),this.button.data("menubtn").disable())}},mounted:function(){var t=this;this.$nextTick((function(){Craft.initUiElements(t.$refs.form),t.button=$(t.$refs.button),t.button.data("menubtn").disable(),t.button.addClass("disabled")}))}},E=T,F=Object(p["a"])(E,j,L,!1,null,"6e2d3578",null),B=F.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[!t.rowData.detail.content||t.rowData.detail.showAsList&&void 0!==t.rowData.detail.showAsList?t._e():a("div",{domProps:{innerHTML:t._s(t.rowData.detail.content)}}),t.rowData.detail.content&&t.rowData.detail.showAsList?a("div",t._l(t.listKeys,(function(e){return a("div",{key:e,staticClass:"order-flex detail-list",class:{"detail-list-bg":t.index%2}},[a("div",{staticClass:"detail-list-key"},[t._v(t._s(e)+":")]),a("div",{staticClass:"detail-list-value"},[t._v(t._s(t.list[e]))])])})),0):t._e()])},N=[],I=(a("456d"),a("55dd"),a("768b")),H=(a("ffc1"),a("7618")),U={name:"AdminTableDeleteButton",props:{rowData:{type:Object,required:!0},rowIndex:{type:Number},options:{type:Object},list:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{isObject:function(t){return"object"===Object(H["a"])(t)&&!Array.isArray(t)},addDelimiter:function(t,e){return t?"".concat(t,".").concat(e):e},paths:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!e)return[];Object.entries(e).forEach((function(e){var i=Object(I["a"])(e,2),s=i[0],l=i[1],r=t.addDelimiter(a,s);t.isObject(l)?t.paths(l,r,n+1):t.list[r]=l}))}},computed:{listKeys:function(){return Object.keys(this.list).sort()}},created:function(){this.paths(this.rowData.detail.content)}},V=U,q=(a("9e7f"),Object(p["a"])(V,R,N,!1,null,null,null)),J=q.exports,K=a("aa47"),z=a("2ef0"),G={components:{Vuetable:o["a"],AdminTablePagination:m,AdminTableCheckbox:M,AdminTableDeleteButton:S,AdminTableActionButton:B},props:{container:{type:String},actions:{type:Array,default:function(){return[]}},allowMultipleSelections:{type:Boolean,default:!0},checkboxes:{type:Boolean,default:!1},checkboxStatus:{type:Function,default:function(){return!0}},columns:{type:Array,default:function(){return[]}},deleteAction:{type:String,default:null},deleteCallback:{type:Function},deleteConfirmationMessage:{type:String},deleteFailMessage:{type:String},deleteSuccessMessage:{type:String},emptyMessage:{type:String,default:Craft.t("app","No data available.")},fullPage:{type:Boolean,default:!1},itemLabels:{type:Object,default:function(){return{singular:Craft.t("app","Item"),plural:Craft.t("app","Items")}}},minItems:{type:Number},padded:{type:Boolean,default:!1},perPage:{type:Number,default:40},reorderAction:{type:String},reorderSuccessMessage:{type:String,default:Craft.t("app","Items reordered.")},reorderFailMessage:{type:String,default:Craft.t("app","Couldn’t reorder items.")},search:{type:Boolean,default:!1},searchPlaceholder:{type:String,default:Craft.t("app","Search")},tableData:{type:Array,default:function(){return[]}},tableDataEndpoint:{type:String},onLoaded:{default:function(){}},onLoading:{default:function(){}},onData:{default:function(){}},onPagination:{default:function(){}},onSelect:{default:function(){}}},data:function(){return{checks:[],currentPage:1,detailRow:J,dragging:!1,isEmpty:!1,isLoading:!0,searchClearTitle:Craft.escapeHtml(Craft.t("app","Clear")),searchTerm:null,selectAll:null,sortable:null,tableBodySelector:".vuetable-body",tableClass:"data fullwidth"}},methods:{init:function(){var t=this,e=this.$el.querySelector(this.tableBodySelector);this.canReorder&&(this.sortable=K["a"].create(e,{animation:150,handle:".move.icon",ghostClass:"vue-admin-table-drag",onSort:this.handleReorder,onStart:this.startReorder,onEnd:this.endReorder})),this.isEmpty=!this.$refs.vuetable.tableData.length,this.$nextTick((function(){t.$refs.vuetable&&(t.selectAll=t.$refs.vuetable.$el.querySelector(".selectallcontainer"),t.selectAll&&t.allowMultipleSelections&&t.selectAll.addEventListener("click",t.handleSelectAll))})),this.tableData&&this.tableData.length&&!this.tableDataEndpoint&&this.$emit("data",this.tableData),this.isLoading=!1,this.onLoaded instanceof Function&&this.onLoaded(),!this.tableDataEndpoint&&this.onData instanceof Function&&this.onData(this.tableData)},loading:function(){this.isLoading=!0,this.onLoading instanceof Function&&this.onLoading()},startReorder:function(){this.dragging=!0},endReorder:function(){this.dragging=!1},handleReorder:function(t){var e=this,a=Object(r["a"])(t.target.querySelectorAll(".vue-table-move-handle"));if(a.length){var n=Object(z["map"])(a,(function(t){return t.dataset.id})),i={ids:JSON.stringify(n),startPosition:1+(this.currentPage>1?(this.currentPage-1)*this.perPage:0)};Craft.postActionRequest(this.reorderAction,i,(function(t){t&&t.success&&Craft.cp.displayNotice(Craft.escapeHtml(e.reorderSuccessMessage))}))}else Craft.cp.displayError(Craft.escapeHtml(this.reorderFailMessage))},addCheck:function(t){-1===this.checks.indexOf(t)&&(this.checks.length>=1&&!this.allowMultipleSelections&&(this.checks=[]),this.checks.push(t)),this.handleOnSelectCallback(this.checks)},removeCheck:function(t){var e=this.checks.indexOf(t);e>=0&&this.checks.splice(e,1),this.handleOnSelectCallback(this.checks)},handleSearch:Object(z["debounce"])((function(){this.$refs.vuetable&&this.$refs.vuetable.gotoPage(1),this.reload()}),350),handleSelectAll:function(){var t=this,e=this.$refs.vuetable.tableData,a=e.length-this.disabledCheckboxesCount;this.checks.length!=a?e.forEach((function(e){t.checkboxStatus instanceof Function&&t.checkboxStatus(e)&&t.addCheck(e.id)})):this.checks=[],this.handleOnSelectCallback(this.checks)},handleDetailRow:function(t){this.$refs.vuetable.toggleDetailRow(t)},deselectAll:function(){this.checks=[],this.handleOnSelectCallback(this.checks)},reload:function(){this.isLoading=!0,this.deselectAll(),this.$refs.vuetable.reload()},remove:function(t,e){this.isLoading=!0,this.apiUrl?(this.deselectAll(),this.$refs.vuetable.reload()):(Vue.delete(this.$refs.vuetable.tableData,t),this.removeCheck(e),this.$refs.vuetable.refresh()),this.deleteCallback&&"[object Function]"==={}.toString.call(this.deleteCallback)&&this.deleteCallback(),this.isLoading=!1},onLoadSuccess:function(t){if(t&&t.data&&t.data.data){var e=t.data.data;this.$emit("data",e),this.onData instanceof Function&&this.onData(e)}},onPaginationData:function(t){this.currentPage=t.current_page,this.$refs.pagination.setPaginationData(t),this.deselectAll(),this.onPagination instanceof Function&&this.onPagination(t)},onChangePage:function(t){this.$refs.vuetable.changePage(t),this.deselectAll()},handleOnSelectCallback:function(t){this.$emit("onSelect",t),this.onSelect instanceof Function&&this.onSelect(t)}},computed:{tableId:function(){return this.container?this.container.replace(/[#.]/g,""):""},apiUrl:function(){return this.tableDataEndpoint?Craft.getActionUrl(this.tableDataEndpoint):""},appendParams:function(){return this.searchTerm?{search:this.searchTerm}:{}},canDelete:function(){return!(this.minItems&&this.$refs.vuetable.tableData.length<=this.minItems)},canReorder:function(){return this.$refs.vuetable.tableData.length>1&&this.reorderAction&&this.$el.querySelector(this.tableBodySelector)&&!this.$refs.vuetable.tablePagination},disabledCheckboxesCount:function(){var t=this,e=0;if(this.$refs.vuetable.tableData.length){var a=this.$refs.vuetable.tableData.filter((function(e){return!t.checkboxStatus(e)}));e=a.length}return e},fields:function(){var t=this,e=[];if(this.checkboxes){var a="";this.allowMultipleSelections&&(a='<div class="checkbox-cell selectallcontainer" role="checkbox" tabindex="0" aria-checked="false"><div class="checkbox"></div></div>'),e.push({name:"__slot:checkbox",titleClass:"thin",title:a,dataClass:"checkbox-cell"})}var n=Object(z["map"])(this.columns,(function(e){return t.reorderAction&&e.hasOwnProperty("sortField")&&delete e.sortField,e.title=Craft.escapeHtml(e.title),e}));return e=[].concat(Object(r["a"])(e),Object(r["a"])(n)),this.reorderAction&&e.push({name:"__slot:reorder",title:"",titleClass:"thin"}),this.deleteAction&&e.push({name:"__slot:delete",titleClass:"thin"}),e},searchPlaceholderText:function(){return Craft.escapeHtml(this.searchPlaceholder)},showToolbar:function(){return this.actions.length||this.search&&!this.tableData.length},tableCss:function(){var t=this.tableClass;return this.dragging&&(t+=" vue-admin-table-dragging"),{ascendingClass:"ordered asc",descendingClass:"ordered desc",sortableIcon:"orderable",handleIcon:"move icon",loadingClass:"loading",tableClass:t}}},watch:{checks:function(){if(this.selectAll){var t=this.selectAll.querySelector(".checkbox");this.checks.length&&this.checks.length==this.$refs.vuetable.tableData.length?(t.classList.add("checked"),t.classList.remove("indeterminate")):this.checks.length&&this.checks.length!=this.$refs.vuetable.tableData.length?(t.classList.remove("checked"),t.classList.add("indeterminate")):(t.classList.remove("checked"),t.classList.remove("indeterminate"))}}}},X=G,Q=(a("5c0b"),Object(p["a"])(X,s,l,!1,null,null,null)),W=Q.exports;function Y(t,e,a){return Craft.t(e,t,a)}i.a.filter("t",Y),Craft.VueAdminTable=Garnish.Base.extend({init:function(t){this.setSettings(t,Craft.VueAdminTable.defaults);var e=this.settings;return new i.a({components:{App:W},data:function(){return{}},render:function(t){return t(W,{props:e})}}).$mount(this.settings.container)}},{defaults:{actions:[],checkboxes:!1,checkboxStatus:function(){return!0},columns:[],container:null,deleteAction:null,reorderAction:null,reorderSuccessMessage:Craft.t("app","Items reordered."),reorderFailMessage:Craft.t("app","Couldn’t reorder items."),search:!1,searchPlaceholder:Craft.t("app","Search"),tableData:[],tableDataEndpoint:null,onLoaded:$.noop,onLoading:$.noop,onData:$.noop,onPagination:$.noop,onSelect:$.noop}})},"5c0b":function(t,e,a){"use strict";a("e332")},"5dba":function(t,e,a){"use strict";a("bb1a")},"8bbf":function(t,e){t.exports=Vue},"9e7f":function(t,e,a){"use strict";a("253a")},bb1a:function(t,e,a){},bfb1:function(t,e,a){"use strict";a("f3ed")},cebe:function(t,e){t.exports=axios},e332:function(t,e,a){},f3ed:function(t,e,a){}});
//# sourceMappingURL=app.js.map