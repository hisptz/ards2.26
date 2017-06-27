webpackJsonp([5],{1028:function(e,t,n){"use strict";function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,i){try{var o=t[r](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}return a("next")})}}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e){var t=e.options,n=r(e,["options"]),a=[{value:void 0,text:"Default",label:" "}].concat(t.map(function(e){return{value:e,text:e,label:e}})).map(function(e,t){return p.a.createElement(S.a,{key:t,primaryText:e.text,value:e.value,label:e.label})});return p.a.createElement(b.a,L({},n,{onChange:function(t,n,a){return e.onChange({target:{value:a}})}}),a)}function o(e){return m.a.state.fieldsForOrganisationUnitLevel.map(function(t){return t.filter(function(e){return"name"===e.name}).some(function(t){return t.value===e})}).every(function(e){return e===!1})}function s(e,t){return e.map(function(e){var n=t.map(function(t){return Object.assign({},t,{value:e[t.name]})});return n.organisationUnitLevel=e,n})}function l(e){var t=e.data;return m.a.getState().formStatus.map(function(e,n){return n===t.levelIndex?t.formStatus.valid:e})}function u(e){var t=e.organisationUnitLevels,a=e.complete,r=e.error;return n.i(v.getInstance)().then(function(e){return e.Api.getApi()}).then(function(e){return e.post("filledOrganisationUnitLevels",{organisationUnitLevels:t},{dataType:"text"})}).then(function(){return a}).catch(function(){return r})}var c=n(0),p=n.n(c),d=n(35),f=n(6),v=(n.n(f),n(8)),m=(n.n(v),n(946)),g=n(218),y=n.n(g),h=n(224),b=n.n(h),T=n(79),S=n.n(T),O=n(716),P=n(78),E=n.n(P),L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U=function(){var e=a(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(v.getInstance)();case 2:return t=e.sent,a=t.Api.getApi(),e.next=6,a.get("filledOrganisationUnitLevels");case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),j=function(){var e=a(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(v.getInstance)();case 2:return t=e.sent,e.abrupt("return",F.map(function(e){var n=C.get(e)||{};return{name:e,component:n.component||y.a,props:Object.assign({floatingLabelText:t.i18n.getTranslation(E()(e))},n.props),validators:[{validator:o,message:t.i18n.getTranslation("value_not_unique")}]}}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),F=O.a.for("organisationUnitLevel"),_=d.a.createActionsFromNames(["initOrgUnitLevels","fieldUpdate","updateFormStatus","saveOrganisationUnitLevels"]);i.propTypes={options:c.PropTypes.array};var C=new Map([["name",{component:y.a}],["offlineLevels",{component:i,props:{options:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}}]]),k=f.Observable.fromPromise(j());_.updateFormStatus.map(l).subscribe(function(e){m.a.setState(Object.assign({},m.a.getState(),{formStatus:e}))}),_.initOrgUnitLevels.flatMap(function(){return f.Observable.combineLatest(f.Observable.fromPromise(U()),k,function(e,t){return{organisationUnitLevels:e,organisationUnitLevelFormFields:t}})}).map(function(e){var t=e.organisationUnitLevels;return{fieldConfigsForAllLevels:s(t,e.organisationUnitLevelFormFields),organisationUnitLevels:t}}).subscribe(function(e){var t=e.fieldConfigsForAllLevels,n=e.organisationUnitLevels;m.a.setState({isSaving:!1,isLoading:!1,fieldsForOrganisationUnitLevel:t,formStatus:t.map(function(){return!0}),organisationUnitLevels:n})}),f.Observable.combineLatest(_.fieldUpdate,k,function(e,t){return{action:e,organisationUnitLevelFormFields:t}}).map(function(e){var t=e.action,n=e.organisationUnitLevelFormFields;return L({},t.data,{storeState:m.a.getState(),organisationUnitLevelFormFields:n})}).subscribe(function(e){var t=e.storeState,n=e.fieldName,a=e.fieldValue,r=e.organisationUnitLevel,i=e.organisationUnitLevelFormFields,o=t.organisationUnitLevels.find(function(e){return e===r});o&&n&&(o[n]=a),m.a.setState(Object.assign({},t,{organisationUnitLevels:t.organisationUnitLevels,fieldsForOrganisationUnitLevel:s(t.organisationUnitLevels,i)}))}),_.saveOrganisationUnitLevels.map(function(e){return L({organisationUnitLevels:m.a.getState().organisationUnitLevels.map(function(e){return{name:e.name,level:e.level,offlineLevels:e.offlineLevels}})},e)}).do(function(){m.a.setState(L({},m.a.getState(),{isSaving:!0}))}).flatMap(function(e){return f.Observable.fromPromise(u(e))}).subscribe(function(e){e.call(),_.initOrgUnitLevels()}),t.a=_},583:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){g.a.saveOrganisationUnitLevels().subscribe(function(){return P.a.show({message:e.getTranslation("organisation_unit_levels_save_success")})},function(){return P.a.show({message:e.getTranslation("organisation_unit_levels_save_failed"),action:"ok"})})}function s(e,t){var n=t.d2.currentUser.canUpdate(t.d2.models.organisationUnitLevel);if(e.isLoading)return u.a.createElement(v.a,null);var a={paperWrap:{padding:"4rem 5rem",maxWidth:700,marginTop:"2rem"},rowStyle:{display:"flex",flexDirection:"row",height:"5rem"},formWrapStyle:{flex:1,display:"flex",flexDirection:"row"},fieldWrapStyle:{flex:1,paddingRight:"1rem"},translateButtonWrap:{alignItems:"flex-end",display:"flex",flex:"5rem",height:"5rem",verticalAlign:"middle"}},r=e.fieldsForOrganisationUnitLevel.map(function(t,r){var i=null;return t.organisationUnitLevel.id&&n&&(i=u.a.createElement("div",{style:a.translateButtonWrap},u.a.createElement(h.a,{iconClassName:"material-icons",onClick:function(){return e.onTranslateClick(t.organisationUnitLevel)}},"translate"))),u.a.createElement("div",{key:r,style:a.rowStyle},u.a.createElement(m.a,{style:a.formWrapStyle,fieldWrapStyle:a.fieldWrapStyle,fields:t.map(function(e){return j({},e,{props:j({},e.props,{disabled:!n})})}),onUpdateField:function(e,n){return g.a.fieldUpdate({organisationUnitLevel:t.organisationUnitLevel,fieldName:e,fieldValue:n})},onUpdateFormStatus:function(e){return g.a.updateFormStatus({levelIndex:r,formStatus:e})}}),i)});return u.a.createElement("div",null,u.a.createElement(E.a,null,t.d2.i18n.getTranslation("organisation_unit_level_management")),u.a.createElement(T.a,{style:a.paperWrap},r,u.a.createElement(O.a,null,n?u.a.createElement(S.a,{onClick:function(){return o(t.d2.i18n)},isValid:e.formStatus.every(function(e){return e}),isSaving:e.isSaving}):[])))}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=n.n(l),c=n(34),p=n(946),d=n(82),f=n(123),v=n.n(f),m=n(749),g=n(1028),y=n(124),h=n.n(y),b=n(222),T=n.n(b),S=n(787),O=n(786),P=n(56),E=n(586),L=n(732),U=(n(833),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};s.defaultProps={fieldsForOrganisationUnitLevel:[],formStatus:[!1],isLoading:!0,isSaving:!1},s.propTypes={fieldsForOrganisationUnitLevel:l.PropTypes.array,formStatus:l.PropTypes.array,isLoading:l.PropTypes.bool,isSaving:l.PropTypes.bool};var F=p.a,_=n.i(d.a)(F,n.i(c.a)(s));t.default=n.i(c.a)(function(e){function t(){var e;a(this,t);for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];var s=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return s.state={translation:{open:!1}},s._onTranslateClick=s._onTranslateClick.bind(s),s._closeTranslationDialog=s._closeTranslationDialog.bind(s),s._translationSaved=s._translationSaved.bind(s),s._translationErrored=s._translationErrored.bind(s),s}return i(t,e),U(t,[{key:"componentDidMount",value:function(){g.a.initOrgUnitLevels()}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(_,{onTranslateClick:this._onTranslateClick}),this.state.translation.model?u.a.createElement(L.a,{objectToTranslate:this.state.translation.model,objectTypeToTranslate:this.state.translation.model&&this.state.translation.model.modelDefinition,open:this.state.translation.open,onTranslationSaved:this._translationSaved,onTranslationError:this._translationErrored,onRequestClose:this._closeTranslationDialog,fieldsToTranslate:["name"]}):null)}},{key:"_onTranslateClick",value:function(e){var t=this.context.d2.models.organisationUnitLevel.create(e);this.setState({translation:{open:!0,model:t}})}},{key:"_translationSaved",value:function(){P.a.show({message:this.context.d2.i18n.getTranslation("translation_saved")})}},{key:"_translationErrored",value:function(){P.a.show({message:this.context.d2.i18n.getTranslation("translation_save_error"),action:"ok"})}},{key:"_closeTranslationDialog",value:function(){this.setState({translation:{open:!1,model:void 0}})}}]),t}(u.a.Component))},585:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i={contextTypes:{d2:r.a.PropTypes.object.isRequired},getTranslation:function(e){return this.context.d2.i18n.getTranslation(e)}};t.a=i},586:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e){var t=e.level,n=e.text,r=e.style,i=e.children,l=a(e,["level","text","style","children"]),u={type:t<=6?"h"+t:"span"},c=s({fontSize:24,fontWeight:300,color:"rgba(0, 0, 0, 0.87)",padding:"16px 0 5px 0",margin:0},r);return o.a.createElement(u.type,s({},l,{style:c}),i||n)}var i=n(0),o=n.n(i),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};r.propTypes={level:i.PropTypes.oneOf([1,2,3,4,5,6]),text:i.PropTypes.string},r.defaultProps={level:1},t.a=r},716:function(e,t,n){"use strict";var a=new Map([["dataElement",["name","shortName","code","description","formName","domainType","valueType","aggregationType","zeroIsSignificant","url","categoryCombo","optionSet","commentOptionSet","legendSets","aggregationLevels"]],["dataElementGroup",["name","shortName","code","description","dataElements"]],["dataElementGroupSet",["name","shortName","code","description","compulsory","dataDimension","dataElementGroups"]],["category",["name","shortName","code","description","dataDimensionType","dataDimension","categoryOptions"]],["categoryOption",["name","shortName","code","description","startDate","endDate","organisationUnits"]],["categoryCombo",["name","shortName","code","dataDimensionType","skipTotal","categories"]],["categoryOptionGroup",["name","shortName","code","description","dataDimensionType","categoryOptions"]],["categoryOptionGroupSet",["name","description","dataDimension","dataDimensionType","categoryOptionGroups"]],["indicator",["name","shortName","code","description","annualized","decimals","indicatorType","legendSets","url","aggregateExportCategoryOptionCombo","aggregateExportAttributeOptionCombo"]],["indicatorGroup",["name","indicators"]],["indicatorType",["name","factor"]],["indicatorGroupSet",["name","description","compulsory","indicatorGroups"]],["dataSet",["name","shortName","code","description","expiryDays","openFuturePeriods","timelyDays","periodType","dataInputPeriods","categoryCombo","notificationRecipients","notifyCompletingUser","workflow","mobile","fieldCombinationRequired","validCompleteOnly","noValueRequiresComment","legendSets","skipOffline","dataElementDecoration","renderAsTabs","renderHorizontally","dataSetElements","indicators","organisationUnits"]],["organisationUnit",["parent","name","shortName","code","description","openingDate","closedDate","comment","url","contactPerson","address","email","phoneNumber","coordinates","dataSets"]],["organisationUnitGroup",["name","shortName","code","description","symbol","organisationUnits"]],["organisationUnitGroupSet",["name","shortName","code","description","compulsory","dataDimension","includeSubhierarchyInAnalytics","organisationUnitGroups"]],["organisationUnitLevel",["name","offlineLevels"]],["constant",["name","shortName","code","description","value"]],["attribute",["name","code","valueType","optionSet","mandatory","unique","dataElementAttribute","dataElementGroupAttribute","dataElementGroupSetAttribute","indicatorAttribute","indicatorGroupAttribute","dataSetAttribute","organisationUnitAttribute","organisationUnitGroupAttribute","organisationUnitGroupSetAttribute","userAttribute","userGroupAttribute","programAttribute","programIndicatorAttribute","programStageAttribute","trackedEntityAttribute","trackedEntityAttributeAttribute","categoryAttribute","categoryOptionAttribute","categoryOptionComboAttribute","categoryOptionGroupAttribute","documentAttribute","optionAttribute","optionSetAttribute","constantAttribute","legendSetAttribute","validationRuleAttribute"]],["optionSet",["name","code","description","valueType"]],["legendSet",["name","code","legends"]],["trackedEntityAttribute",["name","shortName","code","description","optionSet","valueType","aggregationType","unique","inherit","confidential","displayInListNoProgram","legendSets"]],["trackedEntityAttributeGroup",["name","shortName","code","description","trackedEntityAttributes"]],["relationshipType",["name","code","aIsToB","bIsToA"]],["trackedEntity",["name","description"]],["validationRule",["name","shortName","code","description","importance","ruleType","importance","ruleType","periodType","operator","leftSide","rightSide"]],["validationRuleGroup",["name","shortName","code","description","validationRules"]],["predictor",["name","shortName","code","description","output","periodType","organisationUnitLevels","generator","sampleSkipTest","sequentialSampleCount","annualSampleCount","sequentialSkipCount"]],["pushAnalysis",["name","code","title","message","dashboard","recipientUserGroups","schedulingFrequency","enabled"]],["externalMapLayer",["name","code","mapService","imageFormat","url","attribution","mapLayerPosition","legendSet","legendSetUrl"]],["validationNotificationTemplate",["name","code","validationRules","recipientUserGroups","notifyUsersInHierarchyOnly","messageTemplate"]]]);t.a={for:function(e){return e&&a.has(e)?a.get(e):["name","shortName","code"]}}},731:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(224),o=n.n(i),s=n(79),l=n.n(s),u=n(585),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.a=r.a.createClass({displayName:"LocaleSelector.component",propTypes:{value:r.a.PropTypes.string,locales:r.a.PropTypes.arrayOf(r.a.PropTypes.shape({name:r.a.PropTypes.string.isRequired,locale:r.a.PropTypes.string.isRequired})).isRequired,onChange:r.a.PropTypes.func.isRequired},mixins:[u.a],render:function(){var e=[{payload:"",text:""}].concat(this.props.locales).map(function(e,t){return r.a.createElement(l.a,{key:t,primaryText:e.name,value:e.locale})});return r.a.createElement(o.a,c({fullWidth:!0},this.props,{value:this.state&&this.state.locale,hintText:this.getTranslation("select_locale"),onChange:this._localeChange}),e)},_localeChange:function(e,t,n){this.setState({locale:n}),this.props.onChange(n,e)}})},732:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(8),s=(n.n(o),n(223)),l=n.n(s),u=n(0),c=n.n(u),p=n(733),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();o.config.i18n.strings.add("close"),o.config.i18n.strings.add("sharing_settings");var v=function(e){function t(e,i){a(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return o.i18n=i.d2.i18n,o.state={TranslationForm:n.i(p.a)(o.props.objectToTranslate)},o.translationSaved=o.translationSaved.bind(o),o.translationError=o.translationError.bind(o),o.closeSharingDialog=o.closeSharingDialog.bind(o),o}return i(t,e),f(t,[{key:"render",value:function(){return c.a.createElement(l.a,d({title:this.i18n.getTranslation("translation_dialog_title"),autoDetectWindowHeight:!0,autoScrollBodyContent:!0},this.props),c.a.createElement(this.state.TranslationForm,{onTranslationSaved:this.translationSaved,onTranslationError:this.translationError,onCancel:this.closeSharingDialog,fieldsToTranslate:this.props.fieldsToTranslate}))}},{key:"componentWillReceiveProps",value:function(e){e.objectToTranslate&&this.setState({TranslationForm:n.i(p.a)(e.objectToTranslate)})}},{key:"closeSharingDialog",value:function(){this.props.onRequestClose()}},{key:"translationSaved",value:function(){this.props.onTranslationSaved(),this.closeSharingDialog()}},{key:"translationError",value:function(){this.props.onTranslationError()}}]),t}(u.Component);t.a=v,v.propTypes={objectToTranslate:c.a.PropTypes.shape({id:c.a.PropTypes.string.isRequired}).isRequired,onTranslationSaved:c.a.PropTypes.func.isRequired,onTranslationError:c.a.PropTypes.func.isRequired,open:c.a.PropTypes.bool,onRequestClose:c.a.PropTypes.func.isRequired,fieldsToTranslate:c.a.PropTypes.array},v.contextTypes={d2:u.PropTypes.object}},733:function(e,t,n){"use strict";function a(e){var t=T.a.create();return n.i(f.a)(e).subscribe(function(e){t.setState(e)}),b.Observable.combineLatest(n.i(f.b)(),t,function(){for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];return Object.assign.apply(Object,[{objectToTranslate:e,setTranslations:function(e){t.setState({translations:e})}}].concat(a))})}function r(e){return n.i(g.a)(a(e),S)}var i=n(0),o=n.n(i),s=n(226),l=n.n(s),u=n(218),c=n.n(u),p=n(585),d=n(731),f=n(734),v=n(78),m=n.n(v),g=n(82),y=n(217),h=n.n(y),b=n(6),T=(n.n(b),n(14));t.a=r;var S=o.a.createClass({displayName:"TranslationForm",propTypes:{onTranslationSaved:o.a.PropTypes.func.isRequired,onTranslationError:o.a.PropTypes.func.isRequired,objectToTranslate:o.a.PropTypes.shape({id:o.a.PropTypes.string.isRequired}),fieldsToTranslate:o.a.PropTypes.arrayOf(o.a.PropTypes.string)},mixins:[p.a],getInitialState:function(){return{loading:!0,translations:{},translationValues:{},currentSelectedLocale:""}},getDefaultProps:function(){return{fieldsToTranslate:["name","shortName","description"]}},getLoadingdataElement:function(){return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(l.a,{mode:"indeterminate"}))},renderFieldsToTranslate:function(){var e=this;return this.props.fieldsToTranslate.filter(function(e){return e}).map(function(t){return o.a.createElement("div",{key:t},o.a.createElement(c.a,{floatingLabelText:e.getTranslation(m()(t)),value:e.getTranslationValueFor(t),fullWidth:!0,onChange:e._setValue.bind(e,t)}),o.a.createElement("div",null,e.props.objectToTranslate[t]))})},renderForm:function(){return o.a.createElement("div",null,this.renderFieldsToTranslate(),o.a.createElement(h.a,{label:this.getTranslation("save"),primary:!0,onClick:this._saveTranslations}),o.a.createElement(h.a,{style:{marginLeft:"1rem"},label:this.getTranslation("cancel"),onClick:this.props.onCancel}))},renderHelpText:function(){return o.a.createElement("div",null,o.a.createElement("p",null,this.getTranslation("select_a_locale_to_enter_translations_for_that_language")))},render:function(){return this.props.locales||this.props.translations?o.a.createElement("div",{style:{minHeight:250}},o.a.createElement(d.a,{locales:this.props.locales,onChange:this.setCurrentLocale}),Boolean(this.state.currentSelectedLocale)?this.renderForm():this.renderHelpText()):this.getLoadingdataElement()},getTranslationValueFor:function(e){var t=this,n=this.props.translations.find(function(n){return n.locale===t.state.currentSelectedLocale&&n.property.toLowerCase()===m()(e)});if(n)return n.value},setCurrentLocale:function(e){this.setState({currentSelectedLocale:e})},_setValue:function(e,t){var n=this,a=[].concat(this.props.translations),r=a.find(function(t){return t.locale===n.state.currentSelectedLocale&&t.property.toLowerCase()===m()(e)});r?t.target.value?r.value=t.target.value:a=a.filter(function(e){return e!==r}):(r={property:m()(e).toUpperCase(),locale:this.state.currentSelectedLocale,value:t.target.value},a.push(r)),this.props.setTranslations(a)},_saveTranslations:function(){n.i(f.c)(this.props.objectToTranslate,this.props.translations).subscribe(this.props.onTranslationSaved,this.props.onTranslationError)}})},734:function(e,t,n){"use strict";function a(){return a.localePromise||(a.localePromise=n.i(s.getInstance)().then(function(e){return e.Api.getApi().get("locales/db")}).then(function(e){return{locales:e}})),l.Observable.fromPromise(a.localePromise)}function r(e){return e.href?e.href:e.modelDefinition.apiEndpoint+"/"+e.id}function i(e){return l.Observable.just(e).flatMap(function(e){var t=e.modelDefinition;return t||t.name?n.i(s.getInstance)().then(function(t){return t.Api.getApi().get(r(e)+"/translations")}):Promise.reject(new Error("Can not find modelDefinition for "+e.id))})}var o=n(35),s=n(8),l=(n.n(s),n(6));n.n(l);t.b=a,t.a=i,n.d(t,"c",function(){return c});var u=function(){function e(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=o.a.create("saveTranslations");c.subscribe(function(e){var t=u(e.data,2),a=t[0],i=t[1],o=e.complete,l=e.error,c=r(a)+"/translations";n.i(s.getInstance)().then(function(e){e.Api.getApi().update(c,{translations:i},{dataType:"text"}).then(o).catch(l)})})},749:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),u=n.n(l),c=n(804),p=n(790),d=(n.n(p),n(226)),f=n.n(d),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),g=function(){},y=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state=n.initState(e),n.asyncValidators=n.createAsyncValidators(e),n.asyncValidationRunner=e.asyncValidationRunner||new c.a,n.getFieldProp=n.getFieldProp.bind(n),n.getStateClone=n.getStateClone.bind(n),n}return s(t,e),m(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;this.asyncValidators=this.createAsyncValidators(e);var n=this.getStateClone();e.fields.filter(function(e){return t.state&&t.state.fields&&t.state.fields[e.name]}).filter(function(e){return e.value!==t.state.fields[e.name].value}).forEach(function(e){n.fields[e.name].value=e.value,t.validateField(n,e.name,e.value)}),this.setState(n)}},{key:"getStateClone",value:function(){var e=this;return{form:{pristine:this.state.form.pristine,valid:this.state.form.valid,validating:this.state.form.validating},fields:Object.keys(this.state.fields).reduce(function(t,n){return t[n]={pristine:e.state.fields[n].pristine,validating:e.state.fields[n].validating,valid:e.state.fields[n].valid,value:e.state.fields[n].value,error:e.state.fields[n].error},t},{})}}},{key:"renderFields",value:function(){var e=this,t={field:{position:"relative"},progress:this.props.validatingProgressStyle,validatingErrorStyle:{color:"orange"}};return this.props.fields.map(function(n){var a=n.props||{},i=a.errorTextProp,o=r(a,["errorTextProp"]),s=e.state.fields[n.name]||{},l=e.handleFieldChange.bind(e,n.name),c="onBlur"===o.changeEvent?function(t){var a=e.updateFieldState(e.getStateClone(),n.name,{value:t.target.value});e.validateField(a,n.name,t.target.value),e.setState(a)}:void 0,p=s&&s.validating?n.validatingLabelText||e.props.validatingLabelText:i;return u.a.createElement("div",{key:n.name,style:Object.assign({},t.field,e.props.fieldWrapStyle)},s.validating?u.a.createElement(f.a,{mode:"indeterminate",size:.33,style:t.progress}):void 0,u.a.createElement(n.component,v({value:s.value,onChange:o.changeEvent&&"onBlur"===o.changeEvent?c:l,onBlur:o.changeEvent&&"onBlur"===o.changeEvent?l:void 0,errorStyle:s.validating?t.validatingErrorStyle:void 0,errorText:s.valid?p:s.error},o)))})}},{key:"render",value:function(){return u.a.createElement("div",{style:this.props.style},this.renderFields())}},{key:"initState",value:function(e){var t=this,n={fields:e.fields.reduce(function(e,n){var r=t.state&&t.state.fields&&t.state.fields[n.name];return Object.assign(e,a({},n.name,{value:void 0===r||r.pristine?n.value:r.value,pristine:void 0===r||r.value===n.value,validating:void 0!==r&&r.validating,valid:void 0===r||r.valid,error:r&&r.error||void 0}))},{})};return n.form={pristine:Object.keys(n.fields).reduce(function(e,t){return e&&n.fields[t].pristine},!0),validating:Object.keys(n.fields).reduce(function(e,t){return e||n.fields[t].validating},!1),valid:Object.keys(n.fields).reduce(function(e,t){return e&&n.fields[t].valid},!0)},n}},{key:"createAsyncValidators",value:function(e){var t=this;return e.fields.filter(function(e){return Array.isArray(e.asyncValidators)&&e.asyncValidators.length}).reduce(function(e,n){return e[n.name]=t.asyncValidators&&t.asyncValidators[n.name]||void 0,e},{})}},{key:"cancelAsyncValidators",value:function(e){this.asyncValidators[e]&&(this.asyncValidators[e].dispose(),this.asyncValidators[e]=void 0)}},{key:"updateFieldState",value:function(e,t,n){var a=this.getFieldProp(t);e.fields[t]={pristine:void 0!==n.pristine?!!n.pristine:e.fields[t].value===a.value,validating:void 0!==n.validating?!!n.validating:e.fields[t].validating,valid:void 0!==n.valid?!!n.valid:e.fields[t].valid,error:n.error,value:void 0!==n.value?n.value:e.fields[t].value};var r=Object.keys(e.fields);return e.form={pristine:r.reduce(function(t,n){return t&&e.fields[n].pristine},!0),validating:r.reduce(function(t,n){return t||e.fields[n].validating},!1),valid:r.reduce(function(t,n){return t&&e.fields[n].valid},!0)},e}},{key:"handleFieldChange",value:function(e,t){var a=this,r=t.target.value,i=this.getFieldProp(e);if(!i.props||"onBlur"!==i.props.changeEvent||r!==i.value){var o=this.getStateClone();this.setState(this.updateFieldState(o,e,{pristine:!1,value:r}),function(){if(!n.i(p.isObject)(r)&&r===(i.value?i.value:""))return void a.props.onUpdateField(e,r);a.asyncValidators[e]&&(a.cancelAsyncValidators(e),a.setState(a.updateFieldState(o,e,{validating:!1})));var t=a.validateField(o,e,r);t===!0?a.runAsyncValidators(i,o,e,r):a.setState(a.updateFieldState(o,e,{valid:!1,error:t}),function(){a.props.onUpdateFormStatus(a.state.form),a.props.onUpdateField(e,r)})})}}},{key:"runAsyncValidators",value:function(e,t,n,a){var r=this;(e.asyncValidators||[]).length>0?this.setState(this.updateFieldState(t,n,{validating:!0}),function(){r.props.onUpdateFormStatus(r.state.form),r.props.onUpdateField(n,a),r.asyncValidators[n]=r.asyncValidationRunner.listenToValidatorsFor(n).subscribe(function(e){r.setState(r.updateFieldState(r.getStateClone(),e.fieldName,{validating:!1,valid:e.isValid,error:e.message}),function(){r.cancelAsyncValidators(e.fieldName),r.props.onUpdateFormStatus(r.state.form)})}),r.asyncValidationRunner.run(n,e.asyncValidators,a)}):this.setState(this.updateFieldState(t,n,{valid:!0}),function(){r.props.onUpdateFormStatus(r.state.form),r.props.onUpdateField(n,a)})}},{key:"validateField",value:function(e,t,n){var a=this.getFieldProp(t),r=(a.validators||[]).reduce(function(e,t){return e===!0?t.validator(n)===!0||t.message:e},!0);return this.updateFieldState(e,t,{valid:r===!0,error:r===!0?void 0:r}),r}},{key:"getFieldProp",value:function(e){return this.props.fields.filter(function(t){return t.name===e})[0]}}]),t}(u.a.Component);y.propTypes={fields:u.a.PropTypes.arrayOf(u.a.PropTypes.shape({name:u.a.PropTypes.string.isRequired,value:u.a.PropTypes.any,component:u.a.PropTypes.func.isRequired,props:u.a.PropTypes.shape({changeEvent:u.a.PropTypes.oneOf(["onChange","onBlur"])}),validators:u.a.PropTypes.arrayOf(u.a.PropTypes.shape({validator:u.a.PropTypes.func.isRequired,message:u.a.PropTypes.string.isRequired})),asyncValidators:u.a.PropTypes.arrayOf(u.a.PropTypes.func.isRequired),validatingLabelText:u.a.PropTypes.string})).isRequired,validatingLabelText:u.a.PropTypes.string,validatingProgressStyle:u.a.PropTypes.object,onUpdateField:u.a.PropTypes.func.isRequired,onUpdateFormStatus:u.a.PropTypes.func,style:u.a.PropTypes.object,fieldWrapStyle:u.a.PropTypes.object},y.defaultProps={validatingLabelText:"Validating...",validatingProgressStyle:{position:"absolute",right:-12,top:16},onUpdateFormStatus:g},t.a=y},786:function(e,t,n){"use strict";function a(e){var t={marginTop:"1rem"},n={marginRight:"1rem",width:"10rem"},a=s()(e.children)?e.children:[e.children];return i.a.createElement("div",{style:Object.assign(t,e.style)},a.map(function(e,t){return i.a.cloneElement(e,{style:n,key:t})}))}var r=n(0),i=n.n(r),o=n(219),s=n.n(o);t.a=a,a.propTypes={style:i.a.PropTypes.object,children:i.a.PropTypes.oneOfType([i.a.PropTypes.array,i.a.PropTypes.object]).isRequired,isFormValid:i.a.PropTypes.func}},787:function(e,t,n){"use strict";function a(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}function r(e,t){var n=t.d2,r=e.isValid,i=e.isSaving,s=e.onClick,u=a(e,["isValid","isSaving","onClick"]),c=i?n.i18n.getTranslation("saving"):n.i18n.getTranslation("save");return o.a.createElement(l.a,p({},u,{primary:!0,onClick:s,label:c,disabled:i||!r}))}var i=n(0),o=n.n(i),s=n(217),l=n.n(s),u=n(34),c=n(8),p=(n.n(c),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e});r.propTypes={isSaving:o.a.PropTypes.bool,isValid:o.a.PropTypes.bool,onClick:o.a.PropTypes.func.isRequired},t.a=n.i(u.a)(r)},804:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return Promise.all(e.map(function(e){return e.call(null,t)})).then(function(){return{isValid:!0}}).catch(function(e){return{isValid:!1,message:e}})}var i=n(6),o=(n.n(i),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),s=function(){function e(t){a(this,e),this.scheduler=t,this.validatorPipeline=new i.Subject,this.debounceTimeInMs=400}return o(e,[{key:"run",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments[2];return this.validatorPipeline.onNext({fieldName:e,asyncValidators:t,value:n}),this}},{key:"listenToValidatorsFor",value:function(e){return this.validatorPipeline.filter(function(t){return t.fieldName===e}).debounce(this.debounceTimeInMs,this.scheduler).map(function(e){return i.Observable.fromPromise(r(e.asyncValidators,e.value)).map(function(t){return Object.assign(t,{fieldName:e.fieldName,value:e.value})})}).concatAll()}}],[{key:"create",value:function(t){return new e(t)}}]),e}();t.a=s},833:function(e,t,n){"use strict";function a(){return i.a.createElement("div",null,i.a.createElement(o.a,null,"Access denied!"),i.a.createElement("p",null,"Unfortunately you do not have access to this functionality."))}var r=n(0),i=n.n(r),o=n(586);t.a=a},946:function(e,t,n){"use strict";var a=n(14);t.a=a.a.create()}});
//# sourceMappingURL=5-1ca1c6ea03e38d01c7de.js.map