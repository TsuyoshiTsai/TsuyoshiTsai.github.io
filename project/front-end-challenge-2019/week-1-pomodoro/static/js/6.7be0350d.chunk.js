(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"propTypes",function(){return y});var n=a(1),r=a.n(n),i=a(0),o=a.n(i),s=a(24),l=a(384),c=a.n(l),u=a(203),m=a(26),f=a(207),d=a(28),p=a(8),b=a(6),g=Object(u.a)(m.a.Group),v=5,y={tasks:o.a.arrayOf(m.b.task),addTaskItem:o.a.func};var _={addTaskItem:p.b.addItemToList};t.default=Object(s.b)(function(e,t){return{tasks:Object(b.l)(p.c.getList(e,t),"desc").slice(0,v)}},_)(function(e){var t=e.tasks,a=e.addTaskItem,n={title:"",estimateClocks:1};return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a.Title,{level:"h1",color:"white",marginBottom:0,letterSpacing:".1em"},"ADD NEW TASK"),r.a.createElement(d.a.Hr,{marginTop:25,marginBottom:25}),r.a.createElement(f.a,{mode:"add",initialValues:n,onSubmit:function(e,t){var r=e.title,i=e.estimateClocks;t.resetForm(n);var o=c()(),s=(new Date).getTime(),l={id:o,title:r.trim(),isArchived:!1,isComplete:!1,isBreaking:!1,estimateSeconds:Object(b.k)(i),workSeconds:0,breakSeconds:0,workHistory:[],createdDateTime:s,updatedDateTime:s};a({item:l})}}),r.a.createElement(d.a.Hr,{marginTop:30,marginBottom:20}),r.a.createElement(d.a.Title,{level:"h5",color:"gray-light",fontWeight:700,marginBottom:10},"RECENTTLY ADDED ",v," TASKS"),r.a.createElement(g,{source:t,emptyProps:{description:"No Tasks"}},t.map(function(e,t){return r.a.createElement(m.a,{key:t,task:e,isCollapsible:!1},e.title)})))})},156:function(e,t,a){e.exports={"form-group":"style_form-group__3QGwB"}},157:function(e,t,a){e.exports={"form-help":"style_form-help__1NoLs"}},158:function(e,t,a){e.exports={"input-clear-indicator":"style_input-clear-indicator__1mh7y"}},159:function(e,t,a){e.exports={"input-control":"style_input-control__2crSa"}},160:function(e,t,a){e.exports={input:"style_input__3OC_-",input__affix:"style_input__affix__Q_Xd1","input__affix--prefix":"style_input__affix--prefix__3ErNF","input__affix--suffix":"style_input__affix--suffix__3YZ8T"}},161:function(e,t,a){e.exports={"form-label":"style_form-label__cKtlB"}},162:function(e,t,a){e.exports={form:"style_form__Y1hSp"}},168:function(e,t,a){"use strict";var n=a(3),r=a(1),i=a.n(r),o=a(0),s=a.n(o),l=a(144),c=a(2),u=a.n(c),m=a(156),f=a.n(m),d=u.a.bind(f.a);s.a.bool,s.a.bool,s.a.string;function p(e){var t=e.isFlexbox,a=e.withMarginBottom,r=e.className,o=Object(n.a)(e,["isFlexbox","withMarginBottom","className"]);return i.a.createElement("div",Object.assign({className:d("form-group",r),"data-is-flexbox":t,"data-with-margin-bottom":a},o))}p.defaultProps={};var b=p,g=a(4),v=a(12);var y=function(e){var t=Object(r.useRef)();return Object(r.useEffect)(function(){t.current=e},[e]),t.current},_=a(157),E=a.n(_),j=u.a.bind(E.a),h={ERROR:"error"};s.a.bool,s.a.oneOf(Object.values(h)),s.a.object,s.a.string,s.a.any;var k=function(e){var t=e.isShowed,a=e.validateStatus,r=e.style,o=e.className,s=e.children,l=Object(n.a)(e,["isShowed","validateStatus","style","className","children"]),c=y(s);return i.a.createElement(v.Transition,{items:t,from:{opacity:0,bottom:-8},enter:{opacity:1,bottom:-14},leave:{opacity:0,bottom:-8}},function(e){return e&&function(e){return i.a.createElement("div",Object.assign({className:j("form-help",o),style:Object(g.a)({},r,e),"data-status":a},l),s||c)}})},O=a(11),x=a(9),w=a(158),C=a.n(w),T=u.a.bind(C.a);s.a.string;function N(e){var t=e.className,a=Object(n.a)(e,["className"]);return i.a.createElement("button",Object.assign({type:"button",className:T("input-clear-indicator",t),"aria-hidden":!0},a),i.a.createElement(x.a,{name:"cross",mode:"01"}))}N.defaultProps={};var S=N,P=a(159),R=a.n(P),B=u.a.bind(R.a);s.a.bool,s.a.string;function A(e){var t=e.isBlock,a=e.className,r=Object(n.a)(e,["isBlock","className"]);return i.a.createElement("span",Object.assign({className:B("input-control",a),"data-is-block":t},r))}A.defaultProps={};var I=A,V=a(160),D=a.n(V),F=u.a.bind(D.a);s.a.any,s.a.object,s.a.any,s.a.object,s.a.object,s.a.bool.isRequired,s.a.object,s.a.bool,s.a.bool,s.a.bool,s.a.oneOfType([s.a.string,s.a.number]),s.a.oneOfType([s.a.string,s.a.number]),s.a.func,s.a.string,s.a.any;function L(e){var t=e.prefix,a=e.prefixProps,o=void 0===a?{}:a,s=e.suffix,l=e.suffixProps,c=void 0===l?{}:l,u=e.controlProps,m=void 0===u?{}:u,f=e.isClearable,d=e.clearIndicatorProps,p=void 0===d?{}:d,b=e.isBlock,g=e.isInvalid,v=e.disabled,y=e.defaultValue,_=e.value,E=e.onChange,j=e.className,h=e.forwardRef,k=Object(n.a)(e,["prefix","prefixProps","suffix","suffixProps","controlProps","isClearable","clearIndicatorProps","isBlock","isInvalid","disabled","defaultValue","value","onChange","className","forwardRef"]),x=Object(r.useRef)(h||null),w="string"===typeof y,C="string"===typeof _,T=Object(r.useState)(w?void 0:_||""),N=Object(O.a)(T,2),P=N[0],R=N[1],B="string"===typeof P&&P.length>0;Object(r.useEffect)(function(){C&&R(_)},[C,_]);var A=function(e){w||R(e.target.value),"function"===typeof E&&E(e)},V=t||null,D=s||f&&!v&&B&&i.a.createElement(S,Object.assign({onClick:function(e){var t=new Event("change",{bubbles:!0});x.current.dispatchEvent(t),t.target.value="",A(t),x.current.focus()}},p))||null;return i.a.createElement(I,Object.assign({isBlock:b},m),V&&i.a.createElement("span",Object.assign({},o,{className:F("input__affix","input__affix--prefix",o.className)}),V),i.a.createElement("input",Object.assign({ref:x,type:"text",className:F("input",j),"data-is-invalid":g,spellCheck:!1,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",defaultValue:y,value:P,onChange:A,disabled:v},k)),D&&i.a.createElement("span",Object.assign({},c,{className:F("input__affix","input__affix--suffix",c.className)}),D))}L.defaultProps={isClearable:!0,isBlock:!0,isInvalid:!1};var M=i.a.forwardRef(function(e,t){return i.a.createElement(L,Object.assign({forwardRef:t},e))}),G=a(161),K=a.n(G),z=u.a.bind(K.a);s.a.bool,s.a.string;function H(e){var t=e.isBlock,a=e.className,r=Object(n.a)(e,["isBlock","className"]);return i.a.createElement("label",Object.assign({className:z("form-label",a),"data-is-block":t},r))}H.defaultProps={isBlock:!0};var q=H;s.a.string,s.a.node,s.a.object,s.a.object,s.a.object;var Q=function(e){var t=e.name,a=e.label,r=e.fieldProps,o=void 0===r?{}:r,s=e.groupProps,c=void 0===s?{}:s,u=e.labelProps,m=void 0===u?{}:u,f=Object(n.a)(e,["name","label","fieldProps","groupProps","labelProps"]);return i.a.createElement(l.a,Object.assign({name:t},o),function(e){var t=e.field,n=e.form,r=Object(l.d)(n.touched,t.name),o=Object(l.d)(n.errors,t.name),s="string"===typeof o&&o.length>0,u=r&&s;return i.a.createElement(b,c,i.a.createElement(q,Object.assign({htmlFor:t.name},m),a),i.a.createElement(M,Object.assign({},t,f,{id:t.name,isInvalid:u})),i.a.createElement(k,{isShowed:u,validateStatus:h.ERROR},o))})},Y=a(162),J=a.n(Y),W=u.a.bind(J.a);s.a.object,s.a.any,s.a.string;var Z=Object(l.c)(function(e){var t=e.formik,a=e.forwardRef,r=e.className,o=Object(n.a)(e,["formik","forwardRef","className"]);return i.a.createElement("form",Object.assign({ref:a,className:W("form",r),onReset:t.handleReset,onSubmit:t.handleSubmit},o))}),$=i.a.forwardRef(function(e,t){return i.a.createElement(Z,Object.assign({},e,{forwardRef:t}))});$.Group=b,$.Help=k,$.InputField=Q,$.Label=q;t.a=$},203:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(3),r=a(1),i=a.n(r),o=a(0),s=a.n(o),l=a(2),c=a.n(l),u=a(204),m=a.n(u),f=c.a.bind(m.a);s.a.node,s.a.any;function d(e){var t=e.description,a=e.children;return i.a.createElement("div",{className:f("empty")},i.a.createElement("p",{className:f("empty__description")},t),a)}function p(e){return function(t){var a=t.source,r=t.emptyComponent,o=void 0===r?d:r,s=t.emptyProps,l=void 0===s?{}:s,c=Object(n.a)(t,["source","emptyComponent","emptyProps"]);return null===a||0===a.length?i.a.createElement(o,l):i.a.createElement(e,c)}}d.defaultProps={description:"\u66ab\u7121\u8cc7\u6599"}},204:function(e,t,a){e.exports={empty__description:"style_empty__description__3q9DZ"}},205:function(e,t,a){e.exports={"task-modifier__rate-wrapper":"style_task-modifier__rate-wrapper__EfQKw","task-modifier__rate":"style_task-modifier__rate__3EjNu"}},207:function(e,t,a){"use strict";var n=a(11),r=a(3),i=a(1),o=a.n(i),s=a(0),l=a.n(s),c=a(24),u=a(144),m=a(2),f=a.n(m),d=a(27),p=a(168),b=a(26),g=a(184),v=g.object().shape({title:g.string().max(50,"Can't enter over than ${max} characters").trim().required("Please enter task title."),estimateClocks:g.number().max(10,"Can't over than ${max} tomatos.")}),y=a(8),_=a(31),E=a.n(_),j=a(205),h=a.n(j),k=f.a.bind(h.a);l.a.oneOf(["add","edit"]),l.a.shape({id:l.a.string,title:l.a.string,estimateClocks:l.a.number}),l.a.func,l.a.func,b.b.task,l.a.bool;t.a=Object(c.b)(function(e,t){return{currentTask:y.c.getCurrentTask(e,t),isCounting:y.c.getIsCounting(e,t)}},{})(function(e){var t=e.mode,a=e.initialValues,s=e.onSubmit,l=e.onArchive,c=e.currentTask,m=e.isCounting,f=Object(r.a)(e,["mode","initialValues","onSubmit","onArchive","currentTask","isCounting"]),b="add"===t,g="edit"===t,y=Object(i.useState)(0),_=Object(n.a)(y,2),j=_[0],h=_[1];return o.a.createElement(u.b,{initialValues:a,validationSchema:v,onSubmit:s},function(e){var t=e.setFieldValue,a=e.values,n=e.isValid,r=e.isSubmitting;return o.a.createElement(p.a,f,o.a.createElement(p.a.InputField,{label:"TASK TITLE",name:"title",style:{height:g&&40},labelProps:{style:{marginBottom:g&&5,fontSize:g&&12}},groupProps:{style:{marginBottom:b?25:g&&20}}}),o.a.createElement(p.a.Group,{style:{marginBottom:b?50:g&&20}},o.a.createElement(p.a.Label,{style:{marginBottom:g&&5,fontSize:g&&12}},"ESTIMATE TOMATO"),o.a.createElement("div",{className:k("task-modifier__rate-wrapper"),onMouseLeave:function(e){return h(0)}},new Array(10).fill().map(function(e,n){return o.a.createElement("span",{key:n,className:k("task-modifier__rate"),style:{width:b?25:g&&20},"data-is-filled":n<=j||n<a.estimateClocks,onMouseEnter:function(e){return h(n)},onClick:function(e){return t("estimateClocks",n+1)}},o.a.createElement("img",{src:E.a,alt:"tomato"}))}))),b?o.a.createElement(d.a,{type:"primary",htmlType:"submit",isBlock:!0,shape:"rounded",disabled:!n||r},"ADD TASK"):g&&o.a.createElement(p.a.Group,{isFlexbox:!0},o.a.createElement(d.a,{type:"gray",htmlType:"button",size:"sm",shape:"rounded",disabled:c&&c.id===a.id&&m,onClick:l,width:100},"ARCHIVE"),o.a.createElement(d.a,{type:"primary",htmlType:"submit",size:"sm",shape:"rounded",style:{flexGrow:1,marginLeft:20},disabled:!n||r||c&&c.id===a.id&&m},"SAVE")))})})},384:function(e,t,a){var n=a(385),r=a(386);e.exports=function(e,t,a){var i=t&&a||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||n)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var s=0;s<16;++s)t[i+s]=o[s];return t||r(o)}},385:function(e,t){var a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(a){var n=new Uint8Array(16);e.exports=function(){return a(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},386:function(e,t){for(var a=[],n=0;n<256;++n)a[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,r=a;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}}}]);
//# sourceMappingURL=6.7be0350d.chunk.js.map