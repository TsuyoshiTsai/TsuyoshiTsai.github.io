(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{111:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(11),i=t(1),o=t.n(i),s=t(0),c=t.n(s),l=t(14),u=t(24),d=t(2),m=t.n(d),f=t(27),p=t(203),b=t(207),v=t(26),_=t(28),E=t(206),g=t(4),y=t(39),h=t(8);c.a.object,c.a.func,v.b.task,c.a.func;var O={archiveTask:h.b.archiveTask},k=Object(y.b)(Object(u.b)(function(e,a){var t=a.match;return{task:null===t?null:h.c.getItemById(e,Object(g.a)({},a,{id:t.params.id}))}},O)(function(e){var a=e.match,t=e.onClose,n=e.task,r=e.archiveTask;return null===n||null===a?o.a.createElement(l.a,{exact:!0,strict:!0,sensitive:!0,replace:!0,to:"".concat("/project/front-end-challenge-2019/week-1-pomodoro","/task/list")}):o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a.Header,null,"Archive Task"),o.a.createElement(y.a.Body,null,"Are you sure you want to archive this task?"),o.a.createElement(y.a.Footer,{align:"space-between"},o.a.createElement(f.a,{type:"gray",shape:"rounded",width:150,onClick:t},"CANCEL"),o.a.createElement(f.a,{type:"primary",shape:"rounded",style:{flexGrow:1},onClick:function(e){r({id:n.id}),t()}},"ARCHIVE")))}),{isClosable:!1,shouldCloseOnOverlayClick:!0}),j=t(390),C=t.n(j),x=m.a.bind(C.a);c.a.object;var N=Object(l.g)(function(e){var a=e.history;return o.a.createElement("div",{className:x("task-list-empty")},o.a.createElement("p",{className:x("task-list-empty__description")},"No Tasks"),o.a.createElement(f.a,{type:"primary",shape:"rounded",size:"sm",onClick:function(e){return a.push("/task/add")}},"GO TO ADD"))}),T=t(391),w=t.n(T),P=t(6);t.d(a,"propTypes",function(){return L});var I=m.a.bind(w.a),R=Object(p.a)(v.a.Group),S={UNCOMPLETE:"UNCOMPLETE",COMPLETE:"COMPLETE",ARCHIVED:"ARCHIVED"},A=[{label:"TO DO",value:S.UNCOMPLETE},{label:"DONE",value:S.COMPLETE},{label:"ARCHIVE",value:S.ARCHIVED}],B=function(e,a){switch(a){case S.UNCOMPLETE:return Object(P.d)(Object(P.c)(e,!1),!1);case S.COMPLETE:return Object(P.d)(Object(P.c)(e,!1),!0);case S.ARCHIVED:return Object(P.c)(e,!0)}},L={match:c.a.object,history:c.a.object,tasks:c.a.arrayOf(v.b.task),currentTaskId:c.a.string,isCounting:c.a.bool,editTask:c.a.func,uncompleteTask:c.a.func,unarchiveTask:c.a.func,setCurrentId:c.a.func};var V={editTask:h.b.updateItemInList,uncompleteTask:h.b.uncompleteTask,unarchiveTask:h.b.unarchiveTask,setCurrentId:h.b.setCurrentId};a.default=Object(u.b)(function(e,a){return{tasks:h.c.getList(e,a),currentTaskId:h.c.getCurrentId(e,a),isCounting:h.c.getIsCounting(e,a)}},V)(function(e){var a=e.match,t=e.history,s=e.tasks,c=e.currentTaskId,u=e.isCounting,d=e.editTask,m=e.uncompleteTask,p=e.unarchiveTask,g=e.setCurrentId,y=a.path,h=a.url,O="".concat("/project/front-end-challenge-2019/week-1-pomodoro").concat(h),j=Object(i.useState)(A[0].value),C=Object(r.a)(j,2),x=C[0],T=C[1],w=Object(P.l)(B(s,x),"desc"),L=function(e){switch(x){case S.UNCOMPLETE:return o.a.createElement(b.a,{mode:"edit",initialValues:{id:e.id,title:e.title,estimateClocks:Object(P.f)(e.estimateSeconds)},onSubmit:function(a,t){return function(e,a,t){a.resetForm(e);var n={title:e.title.trim(),estimateSeconds:Object(P.k)(e.estimateClocks),updatedDateTime:(new Date).getTime()};d({keyName:"id",key:t.id,item:n})}(a,t,e)},onArchive:function(a){return t.push("".concat(O,"/").concat(e.id))}});case S.COMPLETE:return o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(f.a,{type:"gray",size:"sm",shape:"rounded",onClick:function(a){return t.push("".concat(O,"/").concat(e.id))},width:100},"ARCHIVE"),o.a.createElement(f.a,{type:"primary",size:"sm",shape:"rounded",onClick:function(a){return m({id:e.id})},style:{flexGrow:1,marginLeft:20}},"REDO"));case S.ARCHIVED:return o.a.createElement(f.a,{type:"gray",size:"sm",shape:"rounded",onClick:function(a){return p({id:e.id})},isBlock:!0},"UNARCHIVE")}};return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{strict:!0,sensetive:!0,exact:!0,path:"".concat(h,"/:id")},function(e){e.staticContext;var a=Object(n.a)(e,["staticContext"]);return o.a.createElement(k,Object.assign({isOpened:null!==a.match,afterClose:function(){return t.push(y)}},a))}),o.a.createElement(_.a.Title,{level:"h1",color:"white",marginBottom:0,letterSpacing:".1em"},"TASK LISTS"),o.a.createElement(_.a.Hr,{marginTop:25,marginBottom:25}),o.a.createElement(E.a.Group,{mode:"tab",value:x,onChange:function(e,a){return T(a)}},A.map(function(e,a){return o.a.createElement(E.a,{key:a,value:e.value},e.label)})),o.a.createElement(R,{source:w,emptyComponent:N},w.map(function(e,a){return o.a.createElement(v.a,{key:a,identify:e.id,task:e,isCurrent:c===e.id,onClick:u||x!==S.UNCOMPLETE?null:function(a){return g(e.id)}},o.a.createElement("div",{className:I("task-list__action-list")},L(e)))})))})},156:function(e,a,t){e.exports={"form-group":"style_form-group__3QGwB"}},157:function(e,a,t){e.exports={"form-help":"style_form-help__1NoLs"}},158:function(e,a,t){e.exports={"input-clear-indicator":"style_input-clear-indicator__1mh7y"}},159:function(e,a,t){e.exports={"input-control":"style_input-control__2crSa"}},160:function(e,a,t){e.exports={input:"style_input__3OC_-",input__affix:"style_input__affix__Q_Xd1","input__affix--prefix":"style_input__affix--prefix__3ErNF","input__affix--suffix":"style_input__affix--suffix__3YZ8T"}},161:function(e,a,t){e.exports={"form-label":"style_form-label__cKtlB"}},162:function(e,a,t){e.exports={form:"style_form__Y1hSp"}},168:function(e,a,t){"use strict";var n=t(3),r=t(1),i=t.n(r),o=t(0),s=t.n(o),c=t(144),l=t(2),u=t.n(l),d=t(156),m=t.n(d),f=u.a.bind(m.a);s.a.bool,s.a.bool,s.a.string;function p(e){var a=e.isFlexbox,t=e.withMarginBottom,r=e.className,o=Object(n.a)(e,["isFlexbox","withMarginBottom","className"]);return i.a.createElement("div",Object.assign({className:f("form-group",r),"data-is-flexbox":a,"data-with-margin-bottom":t},o))}p.defaultProps={};var b=p,v=t(4),_=t(12);var E=function(e){var a=Object(r.useRef)();return Object(r.useEffect)(function(){a.current=e},[e]),a.current},g=t(157),y=t.n(g),h=u.a.bind(y.a),O={ERROR:"error"};s.a.bool,s.a.oneOf(Object.values(O)),s.a.object,s.a.string,s.a.any;var k=function(e){var a=e.isShowed,t=e.validateStatus,r=e.style,o=e.className,s=e.children,c=Object(n.a)(e,["isShowed","validateStatus","style","className","children"]),l=E(s);return i.a.createElement(_.Transition,{items:a,from:{opacity:0,bottom:-8},enter:{opacity:1,bottom:-14},leave:{opacity:0,bottom:-8}},function(e){return e&&function(e){return i.a.createElement("div",Object.assign({className:h("form-help",o),style:Object(v.a)({},r,e),"data-status":t},c),s||l)}})},j=t(11),C=t(9),x=t(158),N=t.n(x),T=u.a.bind(N.a);s.a.string;function w(e){var a=e.className,t=Object(n.a)(e,["className"]);return i.a.createElement("button",Object.assign({type:"button",className:T("input-clear-indicator",a),"aria-hidden":!0},t),i.a.createElement(C.a,{name:"cross",mode:"01"}))}w.defaultProps={};var P=w,I=t(159),R=t.n(I),S=u.a.bind(R.a);s.a.bool,s.a.string;function A(e){var a=e.isBlock,t=e.className,r=Object(n.a)(e,["isBlock","className"]);return i.a.createElement("span",Object.assign({className:S("input-control",t),"data-is-block":a},r))}A.defaultProps={};var B=A,L=t(160),V=t.n(L),D=u.a.bind(V.a);s.a.any,s.a.object,s.a.any,s.a.object,s.a.object,s.a.bool.isRequired,s.a.object,s.a.bool,s.a.bool,s.a.bool,s.a.oneOfType([s.a.string,s.a.number]),s.a.oneOfType([s.a.string,s.a.number]),s.a.func,s.a.string,s.a.any;function M(e){var a=e.prefix,t=e.prefixProps,o=void 0===t?{}:t,s=e.suffix,c=e.suffixProps,l=void 0===c?{}:c,u=e.controlProps,d=void 0===u?{}:u,m=e.isClearable,f=e.clearIndicatorProps,p=void 0===f?{}:f,b=e.isBlock,v=e.isInvalid,_=e.disabled,E=e.defaultValue,g=e.value,y=e.onChange,h=e.className,O=e.forwardRef,k=Object(n.a)(e,["prefix","prefixProps","suffix","suffixProps","controlProps","isClearable","clearIndicatorProps","isBlock","isInvalid","disabled","defaultValue","value","onChange","className","forwardRef"]),C=Object(r.useRef)(O||null),x="string"===typeof E,N="string"===typeof g,T=Object(r.useState)(x?void 0:g||""),w=Object(j.a)(T,2),I=w[0],R=w[1],S="string"===typeof I&&I.length>0;Object(r.useEffect)(function(){N&&R(g)},[N,g]);var A=function(e){x||R(e.target.value),"function"===typeof y&&y(e)},L=a||null,V=s||m&&!_&&S&&i.a.createElement(P,Object.assign({onClick:function(e){var a=new Event("change",{bubbles:!0});C.current.dispatchEvent(a),a.target.value="",A(a),C.current.focus()}},p))||null;return i.a.createElement(B,Object.assign({isBlock:b},d),L&&i.a.createElement("span",Object.assign({},o,{className:D("input__affix","input__affix--prefix",o.className)}),L),i.a.createElement("input",Object.assign({ref:C,type:"text",className:D("input",h),"data-is-invalid":v,spellCheck:!1,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",defaultValue:E,value:I,onChange:A,disabled:_},k)),V&&i.a.createElement("span",Object.assign({},l,{className:D("input__affix","input__affix--suffix",l.className)}),V))}M.defaultProps={isClearable:!0,isBlock:!0,isInvalid:!1};var F=i.a.forwardRef(function(e,a){return i.a.createElement(M,Object.assign({forwardRef:a},e))}),H=t(161),G=t.n(H),z=u.a.bind(G.a);s.a.bool,s.a.string;function U(e){var a=e.isBlock,t=e.className,r=Object(n.a)(e,["isBlock","className"]);return i.a.createElement("label",Object.assign({className:z("form-label",t),"data-is-block":a},r))}U.defaultProps={isBlock:!0};var K=U;s.a.string,s.a.node,s.a.object,s.a.object,s.a.object;var Q=function(e){var a=e.name,t=e.label,r=e.fieldProps,o=void 0===r?{}:r,s=e.groupProps,l=void 0===s?{}:s,u=e.labelProps,d=void 0===u?{}:u,m=Object(n.a)(e,["name","label","fieldProps","groupProps","labelProps"]);return i.a.createElement(c.a,Object.assign({name:a},o),function(e){var a=e.field,n=e.form,r=Object(c.d)(n.touched,a.name),o=Object(c.d)(n.errors,a.name),s="string"===typeof o&&o.length>0,u=r&&s;return i.a.createElement(b,l,i.a.createElement(K,Object.assign({htmlFor:a.name},d),t),i.a.createElement(F,Object.assign({},a,m,{id:a.name,isInvalid:u})),i.a.createElement(k,{isShowed:u,validateStatus:O.ERROR},o))})},q=t(162),J=t.n(q),Z=u.a.bind(J.a);s.a.object,s.a.any,s.a.string;var Y=Object(c.c)(function(e){var a=e.formik,t=e.forwardRef,r=e.className,o=Object(n.a)(e,["formik","forwardRef","className"]);return i.a.createElement("form",Object.assign({ref:t,className:Z("form",r),onReset:a.handleReset,onSubmit:a.handleSubmit},o))}),$=i.a.forwardRef(function(e,a){return i.a.createElement(Y,Object.assign({},e,{forwardRef:a}))});$.Group=b,$.Help=k,$.InputField=Q,$.Label=K;a.a=$},179:function(e,a,t){e.exports={"radio-group":"style_radio-group__ugwmy"}},180:function(e,a,t){e.exports={"radio-content":"style_radio-content__1VRJ7"}},181:function(e,a,t){e.exports={"radio-icon":"style_radio-icon__2-BCv","radio-icon__circle":"style_radio-icon__circle__3DUsv","radio-icon__effect":"style_radio-icon__effect__3NH8a"}},182:function(e,a,t){e.exports={"radio-input":"style_radio-input__3ZPNi"}},183:function(e,a,t){e.exports={"radio-label":"style_radio-label__350Rn"}},203:function(e,a,t){"use strict";t.d(a,"a",function(){return p});var n=t(3),r=t(1),i=t.n(r),o=t(0),s=t.n(o),c=t(2),l=t.n(c),u=t(204),d=t.n(u),m=l.a.bind(d.a);s.a.node,s.a.any;function f(e){var a=e.description,t=e.children;return i.a.createElement("div",{className:m("empty")},i.a.createElement("p",{className:m("empty__description")},a),t)}function p(e){return function(a){var t=a.source,r=a.emptyComponent,o=void 0===r?f:r,s=a.emptyProps,c=void 0===s?{}:s,l=Object(n.a)(a,["source","emptyComponent","emptyProps"]);return null===t||0===t.length?i.a.createElement(o,c):i.a.createElement(e,l)}}f.defaultProps={description:"\u66ab\u7121\u8cc7\u6599"}},204:function(e,a,t){e.exports={empty__description:"style_empty__description__3q9DZ"}},205:function(e,a,t){e.exports={"task-modifier__rate-wrapper":"style_task-modifier__rate-wrapper__EfQKw","task-modifier__rate":"style_task-modifier__rate__3EjNu"}},206:function(e,a,t){"use strict";var n=t(11),r=t(3),i=t(1),o=t.n(i),s=t(0),c=t.n(s),l=t(2),u=t.n(l),d=o.a.createContext(),m=t(179),f=t.n(m),p={DEFAULT:"default",TAB:"tab"},b=u.a.bind(f.a),v=function(e){return(o.a.Children.toArray(e).find(function(e){return e.props&&e.props.checked})||{props:{}}).props.value},_=function(e){return o.a.Children.toArray(e).findIndex(function(e){return e.props&&e.props.checked})};c.a.oneOf(Object.values(p)),c.a.oneOf(["vertical","horizontal"]),c.a.string,c.a.bool,c.a.func,c.a.string,c.a.string,c.a.string,c.a.any;function E(e){var a=e.mode,t=e.direction,s=e.name,c=e.disabled,l=e.onChange,u=e.value,m=e.defaultValue,f=e.className,p=e.children,E=Object(r.a)(e,["mode","direction","name","disabled","onChange","value","defaultValue","className","children"]),g=Object(i.useRef)(null),y="function"===typeof l,h="undefined"!==typeof u,O=Object(i.useState)(m||u||v(p)),k=Object(n.a)(O,2),j=k[0],C=k[1],x=Object(i.useState)(_(p)),N=Object(n.a)(x,2),T=N[0],w=N[1];Object(i.useEffect)(function(){h&&C(u)},[h,u]),Object(i.useEffect)(function(){var e=o.a.Children.toArray(p).findIndex(function(e){return e.props.value===j});w(e)},[p,j]);var P={mode:a,name:s,disabled:c,onChange:function(e){!function(e,a){C(a),y&&l(e,a)}(e,e.target.value)},value:j,checkedIndex:T};return o.a.createElement(d.Provider,{value:P},o.a.createElement("div",Object.assign({className:b("radio-group",f),ref:g,"data-mode":a,"data-direction":t},E),p))}E.defaultProps={mode:"default",direction:"horizontal"};var g=E,y=t(4),h=t(180),O=t.n(h),k=u.a.bind(O.a);c.a.string;var j=function(e){var a=e.className,t=Object(r.a)(e,["className"]);return o.a.createElement("span",Object.assign({className:k("radio-content",a)},t))},C=t(12),x=t(181),N=t.n(x),T=u.a.bind(N.a);c.a.bool,c.a.bool,c.a.string;function w(e){var a=e.checked,t=e.disabled,n=e.className,i=Object(r.a)(e,["checked","disabled","className"]);return o.a.createElement("span",Object.assign({className:T("radio-icon",n),"data-is-checked":a,"data-is-disabled":t,role:"radio-icon"},i),o.a.createElement(C.Spring,{native:!0,to:{transform:a?"scale(1)":"scale(0)"},config:C.config.stiff},function(e){return o.a.createElement(C.animated.span,{className:T("radio-icon__circle"),style:e})}),o.a.createElement(C.Spring,{native:!0,to:{opacity:a?0:1,transform:a?"scale(1.75)":"scale(0)"}},function(e){return o.a.createElement(C.animated.span,{className:T("radio-icon__effect"),style:e})}))}w.defaultProps={checked:!1,disabled:!1};var P=w,I=t(182),R=t.n(I),S=u.a.bind(R.a);c.a.string,c.a.string;function A(e){var a=e.className,t=Object(r.a)(e,["className"]);return o.a.createElement("input",Object.assign({className:S("radio-input",a),role:"radio-input"},t))}A.defaultProps={type:"radio"};var B=A,L=t(183),V=t.n(L),D=u.a.bind(V.a);c.a.bool,c.a.bool,c.a.string;var M=function(e){var a=e.checked,t=e.disabled,n=e.className,i=Object(r.a)(e,["checked","disabled","className"]);return o.a.createElement("label",Object.assign({className:D("radio-label",n),role:"radio-label","data-is-checked":a,disabled:t},i))};c.a.object,c.a.object,c.a.object,c.a.object,c.a.func,c.a.any,c.a.any;function F(e){var a=e.labelProps,t=void 0===a?{}:a,n=e.contentProps,s=void 0===n?{}:n,c=e.iconProps,l=void 0===c?{}:c,u=e.children,m=e.forwardRef,f=Object(r.a)(e,["labelProps","contentProps","iconProps","children","forwardRef"]),b=Object(i.useContext)(d),v="undefined"!==typeof b,_=Object(y.a)({},f);v&&(_.name=b.name,_.onChange=function(a){"function"===typeof e.onChange&&e.onChange(a),"function"===typeof b.onChange&&b.onChange(a)},_.disabled=_.disabled||b.disabled,_.checked=_.value===b.value);var E=o.a.createElement(P,Object.assign({checked:_.checked,disabled:_.disabled},l));return o.a.createElement(M,Object.assign({checked:_.checked,disabled:_.disabled,ref:m},t),o.a.createElement(B,_),v?b.mode===p.DEFAULT&&E:E,u&&o.a.createElement(j,s,u))}var H=o.a.forwardRef(function(e,a){return o.a.createElement(F,Object.assign({},e,{forwardRef:a}))});H.Group=g;a.a=H},207:function(e,a,t){"use strict";var n=t(11),r=t(3),i=t(1),o=t.n(i),s=t(0),c=t.n(s),l=t(24),u=t(144),d=t(2),m=t.n(d),f=t(27),p=t(168),b=t(26),v=t(184),_=v.object().shape({title:v.string().max(50,"Can't enter over than ${max} characters").trim().required("Please enter task title."),estimateClocks:v.number().max(10,"Can't over than ${max} tomatos.")}),E=t(8),g=t(31),y=t.n(g),h=t(205),O=t.n(h),k=m.a.bind(O.a);c.a.oneOf(["add","edit"]),c.a.shape({id:c.a.string,title:c.a.string,estimateClocks:c.a.number}),c.a.func,c.a.func,b.b.task,c.a.bool;a.a=Object(l.b)(function(e,a){return{currentTask:E.c.getCurrentTask(e,a),isCounting:E.c.getIsCounting(e,a)}},{})(function(e){var a=e.mode,t=e.initialValues,s=e.onSubmit,c=e.onArchive,l=e.currentTask,d=e.isCounting,m=Object(r.a)(e,["mode","initialValues","onSubmit","onArchive","currentTask","isCounting"]),b="add"===a,v="edit"===a,E=Object(i.useState)(0),g=Object(n.a)(E,2),h=g[0],O=g[1];return o.a.createElement(u.b,{initialValues:t,validationSchema:_,onSubmit:s},function(e){var a=e.setFieldValue,t=e.values,n=e.isValid,r=e.isSubmitting;return o.a.createElement(p.a,m,o.a.createElement(p.a.InputField,{label:"TASK TITLE",name:"title",style:{height:v&&40},labelProps:{style:{marginBottom:v&&5,fontSize:v&&12}},groupProps:{style:{marginBottom:b?25:v&&20}}}),o.a.createElement(p.a.Group,{style:{marginBottom:b?50:v&&20}},o.a.createElement(p.a.Label,{style:{marginBottom:v&&5,fontSize:v&&12}},"ESTIMATE TOMATO"),o.a.createElement("div",{className:k("task-modifier__rate-wrapper"),onMouseLeave:function(e){return O(0)}},new Array(10).fill().map(function(e,n){return o.a.createElement("span",{key:n,className:k("task-modifier__rate"),style:{width:b?25:v&&20},"data-is-filled":n<=h||n<t.estimateClocks,onMouseEnter:function(e){return O(n)},onClick:function(e){return a("estimateClocks",n+1)}},o.a.createElement("img",{src:y.a,alt:"tomato"}))}))),b?o.a.createElement(f.a,{type:"primary",htmlType:"submit",isBlock:!0,shape:"rounded",disabled:!n||r},"ADD TASK"):v&&o.a.createElement(p.a.Group,{isFlexbox:!0},o.a.createElement(f.a,{type:"gray",htmlType:"button",size:"sm",shape:"rounded",disabled:l&&l.id===t.id&&d,onClick:c,width:100},"ARCHIVE"),o.a.createElement(f.a,{type:"primary",htmlType:"submit",size:"sm",shape:"rounded",style:{flexGrow:1,marginLeft:20},disabled:!n||r||l&&l.id===t.id&&d},"SAVE")))})})},390:function(e,a,t){e.exports={"task-list-empty":"style_task-list-empty__33x2Q","task-list-empty__description":"style_task-list-empty__description__SUiSn"}},391:function(e,a,t){e.exports={"task-list__action-list":"style_task-list__action-list__a-rwG"}}}]);
//# sourceMappingURL=4.0a9d875f.chunk.js.map