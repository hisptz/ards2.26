webpackJsonp([8],{1018:function(e,t,n){t=e.exports=n(271)(),t.push([e.i,'.paletteContainer {\n  position: fixed;\n  right: 16px;\n  top: 112px;\n  bottom: 16px; }\n  .paletteContainer:hover .resizeHandle:after {\n    border-color: rgba(0, 0, 0, 0.12); }\n  .paletteContainer .resizeHandle {\n    position: absolute;\n    top: -20px;\n    right: 0;\n    bottom: -16px;\n    left: -8px;\n    width: 12px;\n    cursor: col-resize; }\n    .paletteContainer .resizeHandle:after {\n      content: "";\n      display: block;\n      position: absolute;\n      bottom: 0;\n      top: 0;\n      border: 0 dashed transparent;\n      border-left-width: 1px;\n      margin-left: 5px;\n      transition: border 125ms linear; }\n    .paletteContainer .resizeHandle:hover:after {\n      border-color: rgba(0, 0, 0, 0.45); }\n  .paletteContainer .palette {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 8px;\n    background: white;\n    border-radius: 5px;\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.12); }\n    .paletteContainer .palette .elements {\n      position: absolute;\n      top: 48px;\n      bottom: 32px;\n      left: 0;\n      right: 0;\n      margin: 8px;\n      font-size: 13px;\n      font-weight: 300;\n      display: flex;\n      flex-direction: column;\n      overflow-x: auto; }\n      .paletteContainer .palette .elements .cell {\n        position: relative;\n        flex: 1 1;\n        transition: all 175ms ease-in-out; }\n        .paletteContainer .palette .elements .cell.expanded {\n          flex: 35; }\n          .paletteContainer .palette .elements .cell.expanded .header .arrow {\n            transform: rotate(90deg); }\n        .paletteContainer .palette .elements .cell .header {\n          font-weight: 700;\n          font-size: 16px;\n          padding-top: 8px;\n          cursor: pointer; }\n          .paletteContainer .palette .elements .cell .header .arrow {\n            display: inline-block;\n            margin: 0 2px;\n            transition: transform 175ms ease-out; }\n          .paletteContainer .palette .elements .cell .header .count {\n            display: inline-block;\n            font-weight: 400;\n            font-size: 14px;\n            margin-left: 4px; }\n        .paletteContainer .palette .elements .cell .items {\n          position: absolute;\n          padding-left: 16px;\n          top: 32px;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          overflow: auto; }\n          .paletteContainer .palette .elements .cell .items .item {\n            width: 100%;\n            padding-bottom: 1px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis; }\n\n.item.active a, .expand a {\n  cursor: pointer; }\n  .item.active a:hover, .expand a:hover {\n    text-decoration: underline; }\n\n.item.inactive a {\n  color: inherit;\n  opacity: 0.5;\n  cursor: default; }\n',""])},1231:function(e,t,n){var a=n(1018);"string"==typeof a&&(a=[[e.i,a,""]]);n(287)(a,{});a.locals&&(e.exports=a.locals)},575:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return Math.min(750,Math.max(e,250))}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),s=n.n(l),d=n(6),c=n.n(d),p=n(10),m=n.n(p),u=n(217),f=n.n(u),h=n(221),y=n.n(h),g=n(224),v=n.n(g),b=n(79),x=n.n(b),w=n(222),E=n.n(w),C=n(218),k=n.n(C),T=n(239),O=n.n(T),_=n(745),S=n(586),P=n(35),F=n(56),z=n(80),j=n(58),N=n(1231),R=(n.n(N),function(){function e(e,t){var n=[],a=!0,i=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){i=!0,r=e}finally{try{!a&&l.return&&l.return()}finally{if(i)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),A=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),H=/<input.*?\/>/gi,D=/id="(\w*?)-(\w*?)-val"/,L=/dataelementid="(\w{11})"/,I=/indicatorid="(\w{11})"/,M={heading:{paddingBottom:18},formContainer:{},formPaper:{width:"100%",margin:"0 auto 2rem",padding:"1px 4rem 4rem",position:"relative"},formSection:{marginTop:28},cancelButton:{marginLeft:"2rem"},deleteButton:{marginLeft:"2rem"},paletteHeader:{},paletteFilter:{position:"absolute",top:-16,width:"100%",padding:"8px 8px 16px"},paletteFilterField:{width:"100%"},greySwitch:{position:"absolute",bottom:8,left:8,right:8}},W=function(e){function t(e,n){a(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.state={usedIds:[],filter:"",paletteWidth:o(window.innerWidth/3),expand:"data_elements",insertGrey:!1},Promise.all([n.d2.models.dataSets.get(e.params.modelId,{fields:"id,displayName,dataEntryForm[id,style,htmlCode],indicators[id,displayName]"}),n.d2.Api.getApi().get("dataElementOperands",{paging:!1,totals:!0,fields:"id,displayName",dataSet:e.params.modelId}),n.d2.Api.getApi().get("system/flags")]).then(function(e){var t=R(e,3),n=t[0],a=t[1],i=t[2];r.operands=a.dataElementOperands.filter(function(e){return e.id.indexOf(".")!==-1}).reduce(function(e,t){var n=t.id.split(".").join("-")+"-val";return e[n]=t.displayName,e},{}),r.totals=a.dataElementOperands.filter(function(e){return e.id.indexOf(".")===-1}).reduce(function(e,t){return e[t.id]=t.displayName,e},{}),r.indicators=n.indicators.toArray().sort(function(e,t){return e.displayName.localeCompare(t.displayName)}).reduce(function(e,t){return e[t.id]=t.displayName,e},{}),r.flags=i.reduce(function(e,t){return e[t.path]=t.name,e},{}),r.insertFn={},Object.keys(r.operands).forEach(function(e){r.insertFn[e]=r.insertElement.bind(r,e)}),Object.keys(r.totals).forEach(function(e){r.insertFn[e]=r.insertElement.bind(r,e)}),Object.keys(r.indicators).forEach(function(e){r.insertFn[e]=r.insertElement.bind(r,e)}),Object.keys(r.flags).forEach(function(e){r.insertFn[e]=r.insertFlag.bind(r,e)}),r.filterAction=P.a.create("filter"),r.filterAction.map(function(e){var t=e.data,n=e.complete,a=e.error;return{data:t[1],complete:n,error:a}}).debounce(75).subscribe(function(e){var t=e.data.split(" ").filter(function(e){return e.length});r.setState({filter:t})});var o=n.dataEntryForm?r.processFormData(n.dataEntryForm):"";r.setState({formTitle:n.displayName,formHtml:o,formStyle:n.dataEntryForm&&n.dataEntryForm.style||"NORMAL"},function(){r._editor=window.CKEDITOR.replace("designTextarea",{plugins:["a11yhelp","basicstyles","bidi","blockquote","clipboard","colorbutton","colordialog","contextmenu","dialogadvtab","div","elementspath","enterkey","entities","filebrowser","find","floatingspace","font","format","horizontalrule","htmlwriter","image","indentlist","indentblock","justify","link","list","liststyle","magicline","maximize","forms","pastefromword","pastetext","preview","removeformat","resize","selectall","showblocks","showborders","sourcearea","specialchar","stylescombo","tab","table","tabletools","toolbar","undo","wsc","wysiwygarea"].join(","),removePlugins:"scayt,wsc,about",allowedContent:!0,extraPlugins:"div",height:500}),r._editor.setData(r.state.formHtml),c.a.Observable.fromEventPattern(function(e){r._editor.on("change",e)}).debounce(250).subscribe(function(){r.processFormData.call(r,r._editor.getData())})})}),r.getTranslation=r.context.d2.i18n.getTranslation.bind(r.context.d2.i18n),r.handleSaveClick=r.handleSaveClick.bind(r),r.handleCancelClick=r.handleCancelClick.bind(r),r.handleDeleteClick=r.handleDeleteClick.bind(r),r.handleStyleChange=r.handleStyleChange.bind(r),r.startResize=r.startResize.bind(r),r.doResize=r.doResize.bind(r),r.endResize=r.endResize.bind(r),r}return r(t,e),A(t,[{key:"componentWillUnmount",value:function(){this._editor&&this._editor.destroy()}},{key:"handleSaveClick",value:function(){var e=this,t={style:this.state.formStyle,htmlCode:this._editor.getData()};this.context.d2.Api.getApi().post(["dataSets",this.props.params.modelId,"form"].join("/"),t).then(function(){m.a.info("Form saved successfully"),F.a.show({message:e.getTranslation("form_saved")}),n.i(j.b)()}).catch(function(t){m.a.warn("Failed to save form:",t),F.a.show({message:""+e.getTranslation("failed_to_save_form")+(t.message?": "+t.message:""),action:e.context.d2.i18n.getTranslation("ok")})})}},{key:"handleCancelClick",value:function(){n.i(j.b)()}},{key:"handleDeleteClick",value:function(){var e=this;F.a.show({message:this.getTranslation("dataentryform_confirm_delete"),action:"confirm",onActionTouchTap:function(){e.context.d2.Api.getApi().delete(["dataEntryForms",z.a.state.dataEntryForm.id].join("/")).then(function(){F.a.show({message:e.getTranslation("form_deleted")}),n.i(j.b)()}).catch(function(t){m.a.error("Failed to delete form:",t),F.a.show({message:e.getTranslation("failed_to_delete_form"),action:"ok"})})}})}},{key:"handleStyleChange",value:function(e,t,n){this.setState({formStyle:n})}},{key:"startResize",value:function(e){this._startPos=e.clientX,this._startWidth=this.state.paletteWidth,window.addEventListener("mousemove",this.doResize),window.addEventListener("mouseup",this.endResize)}},{key:"doResize",value:function(e){var t=this;e.buttons||this.endResize(),e.preventDefault(),e.stopPropagation();var n=o(this._startWidth+(this._startPos-e.clientX));window.requestAnimationFrame(function(){t.setState({paletteWidth:n})})}},{key:"endResize",value:function(){window.removeEventListener("mousemove",this.doResize),window.removeEventListener("mouseup",this.endResize)}},{key:"generateHtml",value:function(e,t,n){var a=t?" style="+t:"",i=n||this.state.insertGrey?' disabled="disabled"':"";if(e.indexOf("-")!==-1){var r=this.operands&&this.operands[e],o=('name="entryfield" title="'+r+'" value="[ '+r+' ]"'+a+i).trim();return'<input id="'+e+'" '+o+"/>"}if(this.totals.hasOwnProperty(e)){var l=this.totals[e],s=('name="total" readonly title="'+l+'" value="[ '+l+' ]"'+a+i).trim();return'<input dataelementid="'+e+'" id="total'+e+'" name="total" '+s+"/>"}if(this.indicators.hasOwnProperty(e)){var d=this.indicators[e],c=('name="indicator" readonly title="'+d+'" value="[ '+d+' ]"'+a+i).trim();return'<input indicatorid="'+e+'" id="indicator'+e+'" '+c+"/>"}return m.a.warn("Failed to generate HTML for ID:",e),""}},{key:"processFormData",value:function(e){for(var t=e.hasOwnProperty("htmlCode")?e.htmlCode:e||"",n="",a=[],i=H.exec(t),r=0;null!==i;){n+=t.substr(r,i.index-r),r=H.lastIndex;var o=i[0],l=(/style="(.*?)"/.exec(o)||["",""])[1],s=null!==/disabled/.exec(o),d=D.exec(o),c=L.exec(o),p=I.exec(o);if(d){var m=d[1]+"-"+d[2]+"-val";a.push(m),n+=this.generateHtml(m,l,s)}else if(c){var u=c[1];a.push(u),n+=this.generateHtml(u,l,s)}else if(p){var f=p[1];a.push(f),n+=this.generateHtml(f,l,s)}else n+=o;i=H.exec(t)}return n+=t.substr(r),this.setState({usedIds:a}),n}},{key:"insertElement",value:function(e){if(this.state.usedIds.indexOf(e)===-1){this._editor.insertHtml(this.generateHtml(e),"unfiltered_html"),this.setState(function(t){return{usedIds:t.usedIds.concat(e)}});var t=this._editor.getSelection().getRanges()[0];t.moveToElementEditablePosition(t.endContainer,!0)}}},{key:"insertFlag",value:function(e){this._editor.insertHtml('<img src="../dhis-web-commons/flags/'+e+'" />',"unfiltered_html");var t=this._editor.getSelection().getRanges()[0];t.moveToElementEditablePosition(t.endContainer,!0)}},{key:"renderPaletteSection",value:function(e,t){var n=this,a=Object.keys(e).filter(function(t){return!n.state.filter.length||n.state.filter.every(function(n){return e[t].toLowerCase().indexOf(n.toLowerCase())!==-1})}),i=t===this.state.expand?"cell expanded":"cell",r=function(){n.setState({expand:t})};return s.a.createElement("div",{className:i},s.a.createElement("div",{style:M.paletteHeader,className:"header",onClick:r},s.a.createElement("div",{className:"arrow"},"▸"),this.getTranslation(t),":",s.a.createElement("div",{className:"count"},a.length)),s.a.createElement("div",{className:"items"},a.map(function(t){var a=n.state.usedIds.indexOf(t)===-1,i=a?"item active":"item inactive",r=e[t].name||e[t];return s.a.createElement("div",{key:t,className:i,title:r},s.a.createElement("a",{onClick:n.insertFn[t]},r))})))}},{key:"renderPalette",value:function(){var e=this,t=function(t,n){e.setState({insertGrey:n})};return s.a.createElement("div",{className:"paletteContainer",style:{width:this.state.paletteWidth}},s.a.createElement("div",{className:"resizeHandle",onMouseDown:this.startResize}),s.a.createElement("div",{className:"palette"},s.a.createElement("div",{style:M.paletteFilter},s.a.createElement(k.a,{floatingLabelText:this.getTranslation("filter_elements"),style:M.paletteFilterField,onChange:this.filterAction})),s.a.createElement("div",{className:"elements"},this.renderPaletteSection(this.operands,"data_elements"),this.renderPaletteSection(this.totals,"totals"),this.renderPaletteSection(this.indicators,"indicators"),this.renderPaletteSection(this.flags,"flags")),s.a.createElement(O.a,{label:this.getTranslation("insert_grey_fields"),labelPosition:"right",style:M.greySwitch,onCheck:t,checked:this.state.insertGrey})))}},{key:"render",value:function(){return void 0===this.state.formHtml?s.a.createElement(_.a,null):s.a.createElement("div",{style:Object.assign({},M.formContainer,{marginRight:this.state.paletteWidth})},s.a.createElement(S.a,{style:M.heading},this.state.formTitle," ",this.getTranslation("data_entry_form")),this.renderPalette(),s.a.createElement("textarea",{id:"designTextarea",name:"designTextarea"}),s.a.createElement(E.a,{style:M.formPaper},s.a.createElement("div",{style:M.formSection},s.a.createElement(v.a,{value:this.state.formStyle,floatingLabelText:"Form display style",onChange:this.handleStyleChange},s.a.createElement(x.a,{value:"NORMAL",primaryText:this.getTranslation("normal")}),s.a.createElement(x.a,{value:"COMFORTABLE",primaryText:this.getTranslation("comfortable")}),s.a.createElement(x.a,{value:"COMPACT",primaryText:this.getTranslation("compact")}),s.a.createElement(x.a,{value:"NONE",primaryText:this.getTranslation("none")}))),s.a.createElement("div",{style:M.formSection},s.a.createElement(f.a,{label:this.getTranslation("save"),primary:!0,onClick:this.handleSaveClick}),s.a.createElement(y.a,{label:this.getTranslation("cancel"),style:M.cancelButton,onClick:this.handleCancelClick}),z.a.state.dataEntryForm&&z.a.state.dataEntryForm.id?s.a.createElement(y.a,{primary:!0,label:this.getTranslation("delete"),style:M.deleteButton,onClick:this.handleDeleteClick}):void 0)))}}]),t}(s.a.Component);W.propTypes={params:s.a.PropTypes.object.isRequired},W.contextTypes={d2:s.a.PropTypes.any},t.default=W},586:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e){var t=e.level,n=e.text,i=e.style,r=e.children,s=a(e,["level","text","style","children"]),d={type:t<=6?"h"+t:"span"},c=l({fontSize:24,fontWeight:300,color:"rgba(0, 0, 0, 0.87)",padding:"16px 0 5px 0",margin:0},i);return o.a.createElement(d.type,l({},s,{style:c}),r||n)}var r=n(0),o=n.n(r),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};i.propTypes={level:r.PropTypes.oneOf([1,2,3,4,5,6]),text:r.PropTypes.string},i.defaultProps={level:1},t.a=i},745:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(226),o=n.n(r);t.a=i.a.createClass({displayName:"LoadingMask.component",propTypes:{style:i.a.PropTypes.object,size:i.a.PropTypes.number},getDefaultProps:function(){return{style:{},size:1.5}},render:function(){var e={left:"45%",position:"fixed",top:"45%"};return i.a.createElement(o.a,{mode:"indeterminate",size:this.props.size,style:Object.assign(e,this.props.style)})}})}});
//# sourceMappingURL=8-6f8a229cea364b1d8604.js.map