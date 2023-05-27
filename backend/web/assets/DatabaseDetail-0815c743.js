import{c as t,A,u as ne,r as x,d as re,x as $,D as le,p as w,B as se,f as i,o as c,g as O,h as a,j as d,k as f,t as m,F as D,i as k,v,aq as de,as as ie}from"./index-bf16394a.js";import{_ as ce}from"./UploaderFieldUse-28ad07dc.js";import{a as z,d as ue}from"./database-07243708.js";var pe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M842 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1zM512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm-94-392c0-50.6 41.9-92 94-92s94 41.4 94 92v224c0 50.6-41.9 92-94 92s-94-41.4-94-92V232z"}}]},name:"audio",theme:"outlined"};const _e=pe;function N(r){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},u=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(o).filter(function(p){return Object.getOwnPropertyDescriptor(o,p).enumerable}))),u.forEach(function(p){fe(r,p,o[p])})}return r}function fe(r,e,o){return e in r?Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[e]=o,r}var U=function(e,o){var u=N({},e,o.attrs);return t(A,N({},u,{icon:_e}),null)};U.displayName="AudioOutlined";U.inheritAttrs=!1;const me=U;var be={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"database",theme:"outlined"};const ge=be;function T(r){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},u=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(o).filter(function(p){return Object.getOwnPropertyDescriptor(o,p).enumerable}))),u.forEach(function(p){ye(r,p,o[p])})}return r}function ye(r,e,o){return e in r?Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[e]=o,r}var I=function(e,o){var u=T({},e,o.attrs);return t(A,T({},u,{icon:ge}),null)};I.displayName="DatabaseOutlined";I.inheritAttrs=!1;const ve=I;var ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"}}]},name:"picture",theme:"outlined"};const Oe=ke;function R(r){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},u=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(o).filter(function(p){return Object.getOwnPropertyDescriptor(o,p).enumerable}))),u.forEach(function(p){he(r,p,o[p])})}return r}function he(r,e,o){return e in r?Object.defineProperty(r,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[e]=o,r}var M=function(e,o){var u=R({},e,o.attrs);return t(A,R({},u,{icon:Oe}),null)};M.displayName="PictureOutlined";M.inheritAttrs=!1;const we=M,De={class:"dataspace-container"},je={key:1},Ce={__name:"DatabaseDetail",setup(r){const{t:e}=ne(),o=x(!0),p=re().params.databaseId,B=x({}),_=$({columns:[{name:e("workspace.databaseDetail.object_title"),dataIndex:"title",key:"title"},{title:e("workspace.databaseDetail.data_type"),key:"data_type",dataIndex:"data_type"},{title:e("workspace.databaseDetail.source_url"),key:"source_url",dataIndex:"source_url"},{title:e("common.create_time"),key:"create_time",dataIndex:"create_time",sorter:!0,sortDirections:["descend","ascend"]},{title:e("common.action"),key:"action"}],data:[],loading:!1,current:1,pageSize:10,total:0,pagination:le(()=>({total:_.total,current:_.current,pageSize:_.pageSize})),handleTableChange:(g,n,h)=>{_.load({page_size:g.pageSize,page:g.current,sort_field:h.field,sort_order:h.order})},load:async g=>{_.loading=!0;const n=await z("list",{vid:p,...g});n.status==200?_.data=n.data.objects.map(h=>(h.create_time=new Date(h.create_time).toLocaleString(),h)):w.error(n.msg),_.total=n.data.total,_.pageSize=n.data.page_size,_.current=n.data.page,_.loading=!1}}),F=async()=>{_.load({});const g=await ue("get",{vid:p});g.status==200?(B.value=g.data,o.value=!1):w.error(g.msg)};se(async()=>{await F()});const l=$({open:x(!1),creating:x(!1),data:{add_method:"url",title:"",source_url:"",use_oversea_crawler:!1,files:[],content:""},create:async()=>{if(l.data.add_method=="text"&&l.data.content.length==0){w.error(e("workspace.databaseDetail.content_empty"));return}l.creating=!0,(await z("create",{vid:p,...l.data})).status===200?w.success(e("workspace.databaseDetail.create_success")):w.error(e("workspace.databaseDetail.create_failed")),_.load({}),l.creating=!1,l.open=!1}}),y=$({open:!1,loading:!1,data:{},load:async g=>{y.loading=!0,y.open=!0;const n=await z("get",{oid:g});n.status===200?y.data=n.data:w.error(e("workspace.databaseDetail.get_object_failed")),y.loading=!1}}),q=g=>{z("delete",{oid:g}).then(n=>{n.status===200?w.success(e("workspace.databaseDetail.delete_success")):w.error(e("workspace.databaseDetail.delete_failed")),_.load({})})};return(g,n)=>{const h=i("a-button"),C=i("a-radio-button"),G=i("a-radio-group"),j=i("a-form-item"),X=i("a-checkbox"),H=i("a-input"),J=i("a-textarea"),L=i("a-modal"),S=i("a-typography-text"),V=i("a-tag"),P=i("a-typography-link"),Q=i("a-divider"),W=i("a-popconfirm"),Y=i("a-table"),Z=i("a-typography-paragraph"),K=i("a-spin"),ee=i("a-card"),ae=i("a-col"),te=i("a-row");return c(),O("div",De,[t(te,{gutter:[16,16]},{default:a(()=>[t(ae,{span:24},{default:a(()=>[t(ee,{loading:o.value},{title:a(()=>[t(d(ve)),f(" "+m(B.value.name),1)]),extra:a(()=>[t(h,{type:"primary",onClick:n[0]||(n[0]=s=>l.open=!0)},{default:a(()=>[f(m(d(e)("workspace.databaseDetail.add_object")),1)]),_:1}),t(L,{open:l.open,"onUpdate:open":n[7]||(n[7]=s=>l.open=s),title:d(e)("workspace.databaseDetail.add_object"),onOk:l.create,confirmLoading:l.creating},{default:a(()=>[t(j,{label:d(e)("workspace.databaseDetail.add_method")},{default:a(()=>[t(G,{value:l.data.add_method,"onUpdate:value":n[1]||(n[1]=s=>l.data.add_method=s)},{default:a(()=>[t(C,{value:"url"},{default:a(()=>[f(m(d(e)("workspace.databaseDetail.add_method_url")),1)]),_:1}),t(C,{value:"files"},{default:a(()=>[f(m(d(e)("workspace.databaseDetail.add_method_files")),1)]),_:1}),t(C,{value:"text"},{default:a(()=>[f(m(d(e)("workspace.databaseDetail.add_method_text")),1)]),_:1})]),_:1},8,["value"])]),_:1},8,["label"]),l.data.add_method=="url"?(c(),O(D,{key:0},[l.data.crawl_data_from_url?(c(),k(j,{key:0,label:d(e)("workspace.databaseDetail.use_oversea_crawler")},{default:a(()=>[t(X,{checked:l.data.use_oversea_crawler,"onUpdate:checked":n[2]||(n[2]=s=>l.data.use_oversea_crawler=s)},null,8,["checked"])]),_:1},8,["label"])):v("",!0),t(j,{label:d(e)("workspace.databaseDetail.object_source_url")},{default:a(()=>[t(H,{value:l.data.source_url,"onUpdate:value":n[3]||(n[3]=s=>l.data.source_url=s)},null,8,["value"])]),_:1},8,["label"])],64)):v("",!0),l.data.add_method=="files"?(c(),k(ce,{key:1,modelValue:l.data.files,"onUpdate:modelValue":n[4]||(n[4]=s=>l.data.files=s),multiple:!0},null,8,["modelValue"])):v("",!0),l.data.add_method=="text"?(c(),O(D,{key:2},[t(j,{label:d(e)("workspace.databaseDetail.object_title")},{default:a(()=>[t(H,{value:l.data.title,"onUpdate:value":n[5]||(n[5]=s=>l.data.title=s)},null,8,["value"])]),_:1},8,["label"]),t(j,{label:d(e)("workspace.databaseDetail.object_content")},{default:a(()=>[t(J,{value:l.data.content,"onUpdate:value":n[6]||(n[6]=s=>l.data.content=s),"auto-size":!0},null,8,["value"])]),_:1},8,["label"])],64)):v("",!0)]),_:1},8,["open","title","onOk","confirmLoading"])]),default:a(()=>[t(Y,{loading:_.loading,columns:_.columns,"data-source":_.data,pagination:_.pagination,onChange:_.handleTableChange},{headerCell:a(({column:s})=>[s.key==="title"?(c(),O(D,{key:0},[f(m(d(e)("workspace.databaseDetail.object_title")),1)],64)):v("",!0)]),bodyCell:a(({column:s,record:b})=>{var E;return[s.key==="title"?(c(),O(D,{key:0},[b.status=="PR"?(c(),k(S,{key:0,disabled:""},{default:a(()=>[f(m(b.title)+" ",1),t(d(de))]),_:2},1024)):(c(),k(S,{key:1},{default:a(()=>[f(m(b.title),1)]),_:2},1024))],64)):s.key==="data_type"?(c(),O("span",je,[b.data_type.toUpperCase()=="TEXT"?(c(),k(V,{key:0,color:"blue"},{default:a(()=>[t(d(ie)),f(" "+m(d(e)(`workspace.databaseDetail.data_type_${b.data_type.toUpperCase()}`)),1)]),_:2},1024)):v("",!0),b.data_type.toUpperCase()=="IMAGE"?(c(),k(V,{key:1,color:"green"},{default:a(()=>[t(d(we)),f(" "+m(d(e)(`workspace.databaseDetail.data_type_${b.data_type.toUpperCase()}`)),1)]),_:2},1024)):v("",!0),b.data_type.toUpperCase()=="AUDIO"?(c(),k(V,{key:2,color:"purple"},{default:a(()=>[t(d(me)),f(" "+m(d(e)(`workspace.databaseDetail.data_type_${b.data_type.toUpperCase()}`)),1)]),_:2},1024)):v("",!0)])):s.key==="source_url"?(c(),O(D,{key:2},[((E=b.source_url)==null?void 0:E.length)>0?(c(),k(P,{key:0,href:b.source_url,target:"_blank"},{default:a(()=>[f(m(d(e)("workspace.databaseDetail.source_url")),1)]),_:2},1032,["href"])):(c(),k(S,{key:1,disabled:""},{default:a(()=>[f(m(d(e)("workspace.databaseDetail.source_url")),1)]),_:1}))],64)):s.key==="action"?(c(),O(D,{key:3},[b.status!="PR"?(c(),O(D,{key:0},[t(P,{onClick:oe=>y.load(b.oid)},{default:a(()=>[f(m(d(e)("workspace.databaseDetail.check_detail_data")),1)]),_:2},1032,["onClick"]),t(Q,{type:"vertical"}),t(W,{placement:"leftTop",title:d(e)("workspace.databaseDetail.delete_confirm"),onConfirm:oe=>q(b.oid)},{default:a(()=>[t(P,{type:"danger"},{default:a(()=>[f(m(d(e)("workspace.databaseDetail.delete")),1)]),_:1})]),_:2},1032,["title","onConfirm"])],64)):v("",!0)],64)):v("",!0)]}),_:1},8,["loading","columns","data-source","pagination","onChange"]),t(L,{open:y.open,"onUpdate:open":n[8]||(n[8]=s=>y.open=s),onOk:y.create,footer:null},{title:a(()=>[f(m(y.data.title),1)]),default:a(()=>[t(K,{spinning:y.loading},{default:a(()=>{var s;return[((s=y.data.source_url)==null?void 0:s.length)>0?(c(),k(P,{key:0,href:y.data.source_url,target:"_blank"},{default:a(()=>[f(m(d(e)("workspace.databaseDetail.source_url")),1)]),_:1},8,["href"])):v("",!0),t(Z,null,{default:a(()=>{var b;return[f(m((b=y.data.raw_data)==null?void 0:b.text),1)]}),_:1})]}),_:1},8,["spinning"])]),_:1},8,["open","onOk"])]),_:1},8,["loading"])]),_:1})]),_:1})])}}};export{Ce as default};