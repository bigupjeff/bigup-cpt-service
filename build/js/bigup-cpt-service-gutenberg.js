(()=>{var e={703:(e,t,i)=>{"use strict";var r=i(414);function a(){}function n(){}n.resetWarningCache=a,e.exports=function(){function e(e,t,i,a,n,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:a};return i.PropTypes=i,i}},697:(e,t,i)=>{e.exports=i(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function i(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.plugins,t=window.React,r=window.wp.i18n;var a=i(697),n=i.n(a);const o=window.wp.compose,l=window.wp.data,p=window.wp.editPost,c=window.wp.components,s=window.wp.blockEditor,u=JSON.parse('{"key":"service","prefix":"_bigup_","customFields":[{"block_name":"bigupweb/service-price","suffix":"_price","label":"Price","description":"The cost of this service","type":"number","input_type":"number","placeholder":"Add a price","required":"","number_min":0,"number_max":"","number_step":0.01,"show_in_rest":"true","single":"true","user_capabilities":"edit_posts"},{"block_name":"bigupweb/service-icon","suffix":"_icon","label":"Icon","description":"A service icon","type":"integer","input_type":"image-upload","placeholder":"Add an icon","required":"","show_in_rest":"true","single":"true","user_capabilities":"edit_posts"}]}'),{prefix:d,key:m,customFields:g}=u;console.log("bigup-cpt-service-metabox PLUGIN LOADED");const _=({postType:e,metaFields:i,setMetaFields:a})=>{if(e!==m)return null;let n=[];return g.forEach((e=>{const t=d+m+e.suffix,r=i[t]||"",o=e.input_type;n.push({metaKey:t,value:r,updateValue:e=>a({[t]:e}),label:e.label,description:e.description,type:o,placeholder:e?.placeholder||"",required:e?.required||"",maxlength:e?.length_limit||"",media:"image-upload"===o&&(0,l.useSelect)((e=>e("core").getMedia(r)))})})),(0,t.createElement)(t.Fragment,null,n.map((e=>(0,t.createElement)(p.PluginDocumentSettingPanel,{key:e.metaKey,name:e.metaKey+"-panel",title:e.label,initialOpen:!0},"number"===e.type&&(0,t.createElement)(c.PanelRow,null,(0,t.createElement)(c.TextControl,{label:e.description,value:e.value,onChange:e.updateValue,type:e.type,placeholder:e.placeholder,required:e.required,maxLength:e.maxlength})),"image-upload"===e.type&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(c.PanelRow,null,(0,t.createElement)(s.MediaUploadCheck,null,(0,t.createElement)(s.MediaUpload,{onSelect:t=>e.updateValue(t.id),value:e.value,allowedTypes:["image"],render:({open:i})=>(0,t.createElement)(c.Button,{className:e.value?"editor-post-featured-image__preview":"editor-post-featured-image__toggle",onClick:i},!e.value&&(0,r.__)("Set an icon","bigup-cpt-service"),void 0!==e.media&&(0,t.createElement)(c.ResponsiveWrapper,{naturalWidth:e.media.media_details.width,naturalHeight:e.media.media_details.height},(0,t.createElement)("img",{src:e.media.source_url})))}))),e.value&&(0,t.createElement)(c.PanelRow,null,(0,t.createElement)(s.MediaUploadCheck,null,(0,t.createElement)(s.MediaUpload,{title:(0,r.__)("Replace image","bigup-cpt-service"),value:e.value,onSelect:t=>e.updateValue(t.id),allowedTypes:["image"],render:({open:e})=>(0,t.createElement)(c.Button,{onClick:e,variant:"secondary",isLarge:!0},(0,r.__)("Replace icon","bigup-cpt-service"))})),(0,t.createElement)(s.MediaUploadCheck,null,(0,t.createElement)(c.Button,{onClick:()=>e.updateValue(0),variant:"secondary",isLarge:!0},(0,r.__)("Remove icon","bigup-cpt-service")))))))))},b=(0,l.withSelect)((e=>({metaFields:e("core/editor").getEditedPostAttribute("meta"),postType:e("core/editor").getCurrentPostType()}))),y=(0,l.withDispatch)((e=>({setMetaFields(t){e("core/editor").editPost({meta:t})}}))),h=(0,o.compose)([b,y])(_);_.propTypes={postType:n().string,metaFields:n().object,setMetaFields:n().func},(0,e.registerPlugin)("bigup-cpt-service-metabox",{render:h})})()})();