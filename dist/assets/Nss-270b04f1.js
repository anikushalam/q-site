import{n as f,j as c,X as h,x as p,r as Y,i as D,A as N,y as $,t as S,u as G,b as I,aA as b,L as g}from"./index-9e136078.js";import"./Utils.module-5cada88c.js";import{s as r}from"./Aboutt.module-e104e63a.js";function T({getQuery:l,instituteTheme:s,index:i,setIndex:d}){const{t:a}=f(),m=[{name:"what_is_nss",id:0,url:""},{name:"objectives",id:1,url:"objectives"},{name:"roles",id:2,url:"roles"},{name:"nss_commitee",id:3,url:"comittee"}],n=o=>{o.name==="what_is_nss"&&i!==0?d(0):o.name==="objectives"?d(1):o.name==="roles"?d(2):o.name==="nss_commitee"?d(3):o.name==="nss_program"&&d(4)};return c.jsxs(c.Fragment,{children:[c.jsx("div",{className:h.alumnileft,children:m==null?void 0:m.map(o=>{var x,j;return c.jsx(p,{to:o!=null&&o.url?`/nss?a=${o==null?void 0:o.url}`:"",style:{textDecoration:"none"},children:c.jsx("div",{className:!(l!=null&&l.search)&&(l==null?void 0:l.search)===(o==null?void 0:o.url)?`${h.alumnileftCard} ${h.alumnileftCardActive}`:((x=l==null?void 0:l.search)==null?void 0:x.substring(3))===(o==null?void 0:o.url)?`${h.alumnileftCard} ${h.alumnileftCardActive}`:h.alumnileftCard,style:!(l!=null&&l.search)&&(l==null?void 0:l.search)===(o==null?void 0:o.url)?{backgroundColor:s}:((j=l==null?void 0:l.search)==null?void 0:j.substring(3))===(o==null?void 0:o.url)?{backgroundColor:s}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:`${s??"#010D31"}`},onClick:()=>n(o),children:a(o==null?void 0:o.name)})},o==null?void 0:o.id)})}),i===10&&c.jsx("div",{className:h.alumniresponsiveleft,children:m==null?void 0:m.map(o=>{var x,j;return c.jsx(p,{to:o!=null&&o.url?`/nss?a=${o==null?void 0:o.url}`:"",style:{textDecoration:"none"},children:c.jsx("div",{className:!(l!=null&&l.search)&&(l==null?void 0:l.search)===(o==null?void 0:o.url)?`${h.alumnileftCard} ${h.alumnileftCardActive}`:((x=l==null?void 0:l.search)==null?void 0:x.substring(3))===(o==null?void 0:o.url)?`${h.alumnileftCard} ${h.alumnileftCardActive}`:h.alumnileftCard,style:!(l!=null&&l.search)&&(l==null?void 0:l.search)===(o==null?void 0:o.url)?{backgroundColor:s}:((j=l==null?void 0:l.search)==null?void 0:j.substring(3))===(o==null?void 0:o.url)?{backgroundColor:s}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:`${s??"#010D31"}`},onClick:()=>n(o),children:a(o==null?void 0:o.name)})},o==null?void 0:o.id)})})]})}function u({nssHead:l,aboutNss:s,instituteTheme:i,index:d,setIndex:a}){const{t:m}=f(),[n,o]=Y.useState(!1);return c.jsxs(c.Fragment,{children:[(d===0||d===10)&&c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:r.alumnimid,children:[c.jsx("div",{className:r.alumnimidheader,style:{color:`${i??"#010D31"}`,borderBottom:`3px solid ${i??"#010D31"}`},children:m("what_is_nss")}),c.jsx("p",{style:{color:`${i??"#010D31"}`},className:r.alumnimidp,children:s}),c.jsx("div",{className:` ${r.cellInchargeheader}`,style:{color:`${i??"#010D31"}`,borderBottom:`3px solid ${i??"#010D31"}`},children:"Nss Head"}),c.jsxs("div",{className:`${r.cellbox} ${r.cellIncharge}`,children:[c.jsx("img",{className:r.cellboximg,src:l!=null&&l.staffProfilePhoto?`${D}/${l==null?void 0:l.staffProfilePhoto}`:"/images/admission/avatar.png"}),c.jsx("h6",{className:r.alumnirightboxh6,style:{color:`${i??"#010D31"}`},children:l!=null&&l.staffFirstName?`${(l==null?void 0:l.staffFirstName)??""} ${(l==null?void 0:l.staffMiddleName)??""} ${(l==null?void 0:l.staffLastName)??""}`:m("staff_name")})]}),c.jsx("p",{className:`${r.cellboxdp} ${r.cellIncharge}`,style:{color:`${i??"#010D31"}`},children:s})]}),c.jsx("div",{className:r.alumniright,children:c.jsxs("div",{className:r.alumnirightbox,style:{borderBottom:`0.5px solid ${i??"#010D31"}`},children:[c.jsx("img",{className:r.alumnirightboximg,src:l!=null&&l.staffProfilePhoto?`${D}/${l==null?void 0:l.staffProfilePhoto}`:"/images/admission/avatar.png"}),c.jsx("h6",{className:r.alumnirightboxh6,style:{color:`${i??"#010D31"}`},children:l!=null&&l.staffFirstName?`${(l==null?void 0:l.staffFirstName)??""} ${(l==null?void 0:l.staffMiddleName)??""} ${(l==null?void 0:l.staffLastName)??""}`:m("staff_name")}),c.jsx("p",{className:r.alumnirightboxp,style:{color:`${i??"#010D31"}`},children:"Nss Head"}),!n&&(s==null?void 0:s.length)>95?c.jsxs("p",{className:r.alumnirightboxp,style:{color:`${i??"#010D31"}`},children:[s==null?void 0:s.substring(0,95),c.jsxs("span",{className:r.alumnirightboxspan,onClick:()=>o(!0),style:{color:`${i??"#010D31"}`},children:["    ","read more ..."]})]}):n&&(s==null?void 0:s.length)>95?c.jsxs("p",{className:r.alumnirightboxp,style:{color:`${i??"#010D31"}`},children:[s,c.jsxs("span",{className:r.alumnirightboxspan,onClick:()=>o(!1),style:{color:`${i??"#010D31"}`},children:["    "," read less ..."]})]}):c.jsx("p",{className:r.alumnirightboxp,style:{color:`${i??"#010D31"}`},children:s})]})})]}),d===0&&c.jsxs("div",{className:r.alumniabout,children:[c.jsxs("div",{className:r.alumnimidheader,style:{color:`${i??"#010d31"}`,borderBottom:`3px solid ${i??"#010d31"}`},children:[c.jsx(N,{instituteTheme:i,handleClick:()=>a(10)}),c.jsx("p",{style:{color:`${i??"#010d31"}`},children:m("what_is_nss")})]}),c.jsx("p",{className:r.alumnimidp,style:{color:`${i??"#010D31"}`},children:s}),c.jsx("div",{className:` ${r.cellInchargeheader}`,style:{color:`${i??"#010D31"}`,borderBottom:`3px solid ${i??"#010D31"}`},children:m("nss_head")}),c.jsxs("div",{className:`${r.cellbox} ${r.cellIncharge}`,children:[c.jsx("img",{className:r.cellboximg,src:l!=null&&l.staffProfilePhoto?`${D}/${l==null?void 0:l.staffProfilePhoto}`:"/images/admission/avatar.png"}),c.jsx("h6",{className:r.alumnirightboxh6,style:{color:`${i??"#010D31"}`},children:l!=null&&l.staffFirstName?`${(l==null?void 0:l.staffFirstName)??""} ${(l==null?void 0:l.staffMiddleName)??""} ${(l==null?void 0:l.staffLastName)??""}`:m("staff_name")})]}),c.jsx("p",{className:`${r.cellboxdp} ${r.cellIncharge}`,style:{color:`${i??"#010D31"}`},children:s??""})]})]})}function e({objective:l,instituteTheme:s,setIndex:i}){const{t:d}=f();return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:r.alumnimid,children:[c.jsx("div",{className:r.alumnimidheader,style:{color:`${s??"#010D31"}`,borderBottom:`3px solid ${s??"#010D31"}`},children:d("nss_objectives")}),c.jsx("p",{className:r.alumnimidp,style:{color:`${s??"#010D31"}`},children:l})]}),c.jsxs("div",{className:r.alumniabout,children:[c.jsxs("div",{className:r.alumnimidheader,style:{color:`${s??"#010D31"}`,borderBottom:`3px solid ${s??"#010D31"}`},children:[c.jsx(p,{to:"/nss",children:c.jsx(N,{instituteTheme:s,handleClick:()=>i(10)})}),c.jsx("p",{style:{color:`${s??"#010d31"}`},children:d("nss_objectives")})]}),c.jsx("p",{style:{color:`${s??"#010D31"}`},className:r.alumnimidp,children:l})]})]})}function y({roles:l,instituteTheme:s,setIndex:i}){const{t:d}=f();return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:r.alumnimid,children:[c.jsx("div",{className:r.alumnimidheader,style:{color:`${s??"#010D31"}`,borderBottom:`3px solid ${s??"#010D31"}`},children:d("nss_roles")}),c.jsx("p",{className:r.alumnimidp,style:{color:`${s??"#010D31"}`},children:l})]}),c.jsxs("div",{className:r.alumniabout,children:[c.jsxs("div",{className:r.alumnimidheader,style:{color:`${s??"#010D31"}`,borderBottom:`3px solid ${s??"#010D31"}`},children:[c.jsx(p,{to:"/nss",children:c.jsx(N,{instituteTheme:s,handleClick:()=>i(10)})}),c.jsx("p",{style:{color:`${s??"#010d31"}`},children:d("nss_roles")})]}),c.jsx("p",{style:{color:`${s??"#010D31"}`},className:r.alumnimidp,children:l})]})]})}function H({commitee:l,instituteTheme:s,setIndex:i}){const{t:d}=f();return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:$.alumnimid,children:[c.jsx("div",{className:$.alumnimidheader,style:{color:`${s??"#010D31"}`,borderBottom:`3px solid ${s??"#010D31"}`},children:c.jsx("p",{style:{color:`${s??"#010d31"}`},children:d("nss_commitee")})}),c.jsxs("table",{className:`${$.table} ${$.tablee}`,children:[c.jsxs("tr",{style:{backgroundColor:`${s??"#010D31"}`,borderBottom:`3px solid ${s??"#010D31"}`},children:[c.jsx("th",{children:"Sr. No"}),c.jsx("th",{children:"Name"}),c.jsx("th",{children:"Designation"})]}),l==null?void 0:l.map((a,m)=>c.jsxs("tr",{children:[c.jsx("td",{children:m+1}),c.jsx("td",{children:a==null?void 0:a.name}),c.jsx("td",{children:a==null?void 0:a.designation})]},m))]})]}),c.jsxs("div",{className:$.alumniabout,children:[c.jsxs("div",{className:$.alumnimidheader,style:{color:`${s??"#010D31"}`,borderBottom:`3px solid ${s??"#010D31"}`},children:[c.jsx(p,{to:"/nss",children:c.jsx(N,{instituteTheme:s,handleClick:()=>i(10)})}),c.jsx("p",{style:{color:`${s??"#010d31"}`},children:d("nss_commitee")})]}),c.jsxs("table",{className:`${$.table} ${$.tablee}`,children:[c.jsxs("tr",{style:{backgroundColor:`${s??"#010D31"}`,borderBottom:`3px solid ${s??"#010D31"}`},children:[c.jsx("th",{children:"Sr. No"}),c.jsx("th",{children:"Name"}),c.jsx("th",{children:"Designation"})]}),l==null?void 0:l.map((a,m)=>c.jsxs("tr",{children:[c.jsx("td",{children:m+1}),c.jsx("td",{children:a==null?void 0:a.name}),c.jsx("td",{children:a==null?void 0:a.designation})]},m))]})]})]})}function cl(){var x,j,v,_,C,k,F,P,A,B,L,M,R,w,E,W,O,U,X,q,z,J,K,V;const l=S(),s=G(Z=>Z.domainCom.id),[i,d]=Y.useState(l!=null&&l.search&&((x=l==null?void 0:l.search)==null?void 0:x.substring(3))==="objectives"?1:l!=null&&l.search&&((j=l==null?void 0:l.search)==null?void 0:j.substring(3))==="roles"?2:l!=null&&l.search&&((v=l==null?void 0:l.search)==null?void 0:v.substring(3))==="nss_commitee"?3:l!=null&&l.search&&((_=l==null?void 0:l.search)==null?void 0:_.substring(3))==="nss_program"?4:10),{getwebsiteInfoGetByInstitute:a,getwebsiteInfoGetByInstituteRefetch:m}=I({id:s,skip:!s}),{getNssSiteInfo:n,getNssSiteInfoRefetch:o}=b({aid:(C=l==null?void 0:l.state)==null?void 0:C.nid,skip:!((k=l==null?void 0:l.state)!=null&&k.nid)});return c.jsx(g,{children:c.jsxs("div",{className:h.alumni,children:[c.jsx(T,{getQuery:l,instituteTheme:((P=(F=a==null?void 0:a.one_ins)==null?void 0:F.website_looks)==null?void 0:P.color)??"",index:i,setIndex:d}),!(l!=null&&l.search)&&c.jsx(u,{aboutNss:(A=n==null?void 0:n.nss)==null?void 0:A.nss_about,nssHead:(B=n==null?void 0:n.nss)==null?void 0:B.nss_head,index:i,setIndex:d,instituteTheme:((M=(L=a==null?void 0:a.one_ins)==null?void 0:L.website_looks)==null?void 0:M.color)??""}),(l==null?void 0:l.search)&&((R=l==null?void 0:l.search)==null?void 0:R.substring(3))==="objectives"&&c.jsx(e,{objective:(w=n==null?void 0:n.nss)==null?void 0:w.nss_objective,index:i,setIndex:d,instituteTheme:((W=(E=a==null?void 0:a.one_ins)==null?void 0:E.website_looks)==null?void 0:W.color)??""}),(l==null?void 0:l.search)&&((O=l==null?void 0:l.search)==null?void 0:O.substring(3))==="roles"&&c.jsx(y,{academicRules:(U=n==null?void 0:n.nss)==null?void 0:U.nss_roles,index:i,setIndex:d,instituteTheme:((q=(X=a==null?void 0:a.one_ins)==null?void 0:X.website_looks)==null?void 0:q.color)??""}),(l==null?void 0:l.search)&&((z=l==null?void 0:l.search)==null?void 0:z.substring(3))==="comittee"&&c.jsx(H,{commitee:(J=n==null?void 0:n.nss)==null?void 0:J.nss_commitee,index:i,setIndex:d,instituteTheme:((V=(K=a==null?void 0:a.one_ins)==null?void 0:K.website_looks)==null?void 0:V.color)??""})]})})}export{cl as default};
