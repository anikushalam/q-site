import{k as $,j as l,w as p,A as n,r as k,i as v,s as t,m as ss,n as ls,L as cs}from"./index-b01623f7.js";import{s as o}from"./Aboutt.module-2b664f6e.js";import"./Utils.module-5cada88c.js";const os=({instituteAbout:s,instituteBackgroudImage:c,instituteTheme:m,setIndex:i})=>{const{t:a}=$();return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:o.alumnimid,children:[l.jsx("div",{className:o.alumnimidheader,style:{color:`${m??"#010D31"}`,borderBottom:`3px solid ${m??"#010D31"}`},children:a("about_us")}),l.jsx("p",{className:o.alumnimidp,style:{color:`${m??"#010D31"}`},children:s})]}),l.jsxs("div",{className:o.alumniabout,children:[l.jsxs("div",{className:o.alumnimidheader,style:{color:`${m??"#010D31"}`,borderBottom:`3px solid ${m??"#010D31"}`},children:[l.jsx(p,{to:"/about",children:l.jsx(n,{instituteTheme:m,handleClick:()=>i(10)})}),l.jsx("p",{style:{color:`${m??"#010d31"}`},children:a("about_us")})]}),l.jsx("p",{style:{color:`${m??"#010D31"}`},className:o.alumnimidp,children:s})]})]})},j=[{name:"vission",id:0,url:""},{name:"mission",id:1,url:"mission"},{name:"pricipal_desk",id:2,url:"desk"},{name:"about_institute",id:3,url:"institute"},{name:"org_structure",id:4,url:"structure"}],rs=({getQuery:s,instituteTheme:c,setIndex:m,index:i})=>{const{t:a}=$(),h=r=>{r.name==="vission"&&i!==0?m(0):r.name==="mission"?m(1):r.name==="pricipal_desk"?m(2):r.name==="about_institute"?m(3):r.name==="org_structure"&&m(4)};return l.jsxs(l.Fragment,{children:[l.jsx("div",{className:o.alumnileft,children:j==null?void 0:j.map(r=>{var d,x;return l.jsx(p,{to:r!=null&&r.url?`/about?a=${r==null?void 0:r.url}`:"",state:{index:i},style:{textDecoration:"none"},children:l.jsx("div",{className:!(s!=null&&s.search)&&(s==null?void 0:s.search)===(r==null?void 0:r.url)?`${o.alumnileftCard} ${o.alumnileftCardActive}`:((d=s==null?void 0:s.search)==null?void 0:d.substring(3))===(r==null?void 0:r.url)?`${o.alumnileftCard} ${o.alumnileftCardActive}`:o.alumnileftCard,style:!(s!=null&&s.search)&&(s==null?void 0:s.search)===(r==null?void 0:r.url)?{backgroundColor:c,color:"#fff"}:((x=s==null?void 0:s.search)==null?void 0:x.substring(3))===(r==null?void 0:r.url)?{backgroundColor:c,color:"#fff"}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:c},onClick:()=>h(r),children:a(r==null?void 0:r.name)})},r==null?void 0:r.id)})}),i===10&&l.jsx("div",{className:o.alumniresponsiveleft,children:j==null?void 0:j.map(r=>{var d,x;return l.jsx(p,{state:{index:i},to:r!=null&&r.url?`/about?a=${r==null?void 0:r.url}`:"",style:{textDecoration:"none"},children:l.jsx("div",{className:!(s!=null&&s.search)&&(s==null?void 0:s.search)===(r==null?void 0:r.url)?`${o.alumnileftCard} ${o.alumnileftCardActive}`:((d=s==null?void 0:s.search)==null?void 0:d.substring(3))===(r==null?void 0:r.url)?`${o.alumnileftCard} ${o.alumnileftCardActive}`:o.alumnileftCard,style:!(s!=null&&s.search)&&(s==null?void 0:s.search)===(r==null?void 0:r.url)?{backgroundColor:c,color:"#fff"}:((x=s==null?void 0:s.search)==null?void 0:x.substring(3))===(r==null?void 0:r.url)?{backgroundColor:c,color:"#fff"}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:c},onClick:()=>h(r),children:a(r==null?void 0:r.name)})},r==null?void 0:r.id)})})]})},as=({instituteMission:s,instituteTheme:c,setIndex:m})=>{const{t:i}=$();return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:o.alumnimid,children:[l.jsx("div",{className:o.alumnimidheader,style:{color:`${c??"#010D31"}`,borderBottom:`3px solid ${c??"#010D31"}`},children:i("mission")}),l.jsx("p",{className:o.alumnimidp,style:{color:`${c??"#010D31"}`},children:s})]}),l.jsxs("div",{className:o.alumniabout,children:[l.jsxs("div",{className:o.alumnimidheader,style:{color:`${c??"#010D31"}`,borderBottom:`3px solid ${c??"#010D31"}`},children:[l.jsx(p,{to:"/about",children:l.jsx(n,{instituteTheme:c,handleClick:()=>m(10)})}),l.jsx("p",{style:{color:`${c??"#010d31"}`},children:i("mission")})]}),l.jsx("p",{style:{color:`${c??"#010D31"}`},className:o.alumnimidp,children:s})]})]})},is=({leadingMessage:s,leadingPerson:c,leadingPosition:m,instituteTheme:i,setIndex:a})=>{var x,N,_;const{t:h}=$(),[r,d]=k.useState(!1);return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:o.alumnimid,children:[l.jsx("div",{className:o.alumnimidheader,style:{color:`${i??"#010D31"}`,borderBottom:`3px solid ${i??"#010D31"}`},children:h("pricipal_desk")}),l.jsx("p",{style:{color:`${i??"#010D31"}`},className:o.alumnimidp,children:s}),l.jsx("div",{className:` ${o.cellInchargeheader}`,style:{color:`${i??"#010D31"}`,borderBottom:`3px solid ${i??"#010D31"}`},children:m}),l.jsxs("div",{className:`${o.cellbox} ${o.cellIncharge}`,children:[l.jsx("img",{className:o.cellboximg,src:c!=null&&c.profilePhoto?`${v}/${c==null?void 0:c.profilePhoto}`:"/images/admission/avatar.png"}),l.jsx("h6",{className:o.alumnirightboxh6,style:{color:`${i??"#010D31"}`},children:(c==null?void 0:c.userLegalName)??""})]}),l.jsx("p",{className:`${o.cellboxdp} ${o.cellIncharge}`,style:{color:`${i??"#010D31"}`},children:(c==null?void 0:c.userAbout)??""})]}),l.jsx("div",{className:o.alumniright,children:l.jsxs("div",{className:o.alumnirightbox,style:{borderBottom:`0.5px solid ${i??"#010D31"}`},children:[l.jsx("img",{className:o.alumnirightboximg,src:c!=null&&c.profilePhoto?`${v}/${c==null?void 0:c.profilePhoto}`:"/images/admission/avatar.png"}),l.jsx("h6",{className:o.alumnirightboxh6,style:{color:`${i??"#010D31"}`},children:(c==null?void 0:c.userLegalName)??""}),l.jsx("p",{className:o.alumnirightboxp,style:{color:`${i??"#010D31"}`},children:m}),!r&&((x=c==null?void 0:c.userAbout)==null?void 0:x.length)>95?l.jsxs("p",{className:o.alumnirightboxp,style:{color:`${i??"#010D31"}`},children:[(N=c==null?void 0:c.userAbout)==null?void 0:N.substring(0,95),l.jsxs("span",{className:o.alumnirightboxspan,onClick:()=>d(!0),style:{color:`${i??"#010D31"}`},children:["    ","read more ..."]})]}):r&&((_=c==null?void 0:c.userAbout)==null?void 0:_.length)>95?l.jsxs("p",{className:o.alumnirightboxp,style:{color:`${i??"#010D31"}`},children:[c==null?void 0:c.userAbout,l.jsxs("span",{className:o.alumnirightboxspan,onClick:()=>d(!1),style:{color:`${i??"#010D31"}`},children:["    "," read less ..."]})]}):l.jsx("p",{className:o.alumnirightboxp,style:{color:`${i??"#010D31"}`},children:c==null?void 0:c.userAbout})]})}),l.jsxs("div",{className:o.alumniabout,children:[l.jsxs("div",{className:o.alumnimidheader,style:{color:`${i??"#010d31"}`,borderBottom:`3px solid ${i??"#010d31"}`},children:[l.jsx(p,{to:"/about",children:l.jsx(n,{instituteTheme:i,handleClick:()=>a(10)})}),l.jsx("p",{style:{color:`${i??"#010d31"}`},children:h("pricipal_desk")})]}),l.jsx("p",{className:o.alumnimidp,style:{color:`${i??"#010D31"}`},children:s}),l.jsx("div",{className:` ${o.cellInchargeheader}`,style:{color:`${i??"#010D31"}`,borderBottom:`3px solid ${i??"#010D31"}`},children:m}),l.jsxs("div",{className:`${o.cellbox} ${o.cellIncharge}`,children:[l.jsx("img",{className:o.cellboximg,src:c!=null&&c.profilePhoto?`${v}/${c==null?void 0:c.profilePhoto}`:"/images/admission/avatar.png"}),l.jsx("h6",{className:o.alumnirightboxh6,style:{color:`${i??"#010D31"}`},children:(c==null?void 0:c.userLegalName)??""})]}),l.jsx("p",{className:`${o.cellboxdp} ${o.cellIncharge}`,style:{color:`${i??"#010D31"}`},children:(c==null?void 0:c.userAbout)??""})]})]})},ms=({instituteVision:s,instituteTheme:c,setIndex:m,index:i})=>{const{t:a}=$();return l.jsxs(l.Fragment,{children:[(i===0||i===10)&&l.jsxs("div",{className:o.alumnimid,children:[l.jsx("div",{className:o.alumnimidheader,style:{color:`${c??"#010D31"}`,borderBottom:`3px solid ${c??"#010D31"}`},children:a("vission")}),l.jsx("p",{className:o.alumnimidp,style:{color:`${c??"#010D31"}`},children:s})]}),i===0&&l.jsxs("div",{className:o.alumniabout,children:[l.jsxs("div",{className:o.alumnimidheader,style:{color:`${c??"#010D31"}`,borderBottom:`3px solid ${c??"#010D31"}`},children:[l.jsx(n,{instituteTheme:c,handleClick:()=>m(10)}),l.jsx("p",{style:{color:`${c??"#010d31"}`},children:a("vission")})]}),l.jsx("p",{style:{color:`${c??"#010D31"}`},className:o.alumnimidp,children:s})]})]})};function ds({instituteMission:s,instituteTheme:c,setIndex:m}){const{t:i}=$();return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:o.alumnimid,children:[l.jsx("div",{className:o.alumnimidheader,style:{color:`${c??"#010D31"}`,borderBottom:`3px solid ${c??"#010D31"}`},children:i("org_structure")}),l.jsx("div",{className:o.organizationStructurediv,children:l.jsx("img",{src:"/images/org/1.jpeg",alt:"organizational structure"})})]}),l.jsxs("div",{className:o.alumniabout,children:[l.jsxs("div",{className:o.alumnimidheader,style:{color:`${c??"#010D31"}`,borderBottom:`3px solid ${c??"#010D31"}`},children:[l.jsx(p,{to:"/about",children:l.jsx(n,{instituteTheme:c,handleClick:()=>m(10)})}),l.jsx("p",{style:{color:`${c??"#010d31"}`},children:i("org_structure")})]}),l.jsx("div",{className:o.organizationStructurediv,children:l.jsx("img",{src:"https://sndcoe.ac.in/wp-content/uploads/2022/04/Organogram.png",alt:"organizational structure"})})]})]})}const ps=()=>{var r,d,x,N,_,D,C,u,f,A,S,F,z,L,M,E,O,R,W,U,V,q,H,J,K,X,Y,Z,w,B,b,G,T,I,P,y,Q,g;const s=t(),[c,m]=k.useState(((r=s==null?void 0:s.search)==null?void 0:r.substring(3))==="mission"?1:s!=null&&s.search&&((d=s==null?void 0:s.search)==null?void 0:d.substring(3))==="desk"?2:s!=null&&s.search&&((x=s==null?void 0:s.search)==null?void 0:x.substring(3))==="institute"?3:s!=null&&s.search&&((N=s==null?void 0:s.search)==null?void 0:N.substring(3))==="structure"?4:10),i=ss(e=>e.domainCom.id),{getwebsiteInfoGetByInstitute:a,getwebsiteInfoGetByInstituteRefetch:h}=ls({id:i,skip:!i});return k.useEffect(()=>{i&&h()},[i,h]),l.jsx(cs,{children:l.jsxs("div",{className:o.alumni,children:[l.jsx(rs,{getQuery:s,instituteTheme:((D=(_=a==null?void 0:a.one_ins)==null?void 0:_.website_looks)==null?void 0:D.color)??"",setIndex:m,index:c}),!(s!=null&&s.search)&&l.jsx(ms,{instituteVision:((u=(C=a==null?void 0:a.one_ins)==null?void 0:C.website_looks)==null?void 0:u.vision)??"",instituteTheme:((A=(f=a==null?void 0:a.one_ins)==null?void 0:f.website_looks)==null?void 0:A.color)??"",setIndex:m,index:c}),(s==null?void 0:s.search)&&((S=s==null?void 0:s.search)==null?void 0:S.substring(3))==="mission"&&l.jsx(as,{setIndex:m,instituteMission:((z=(F=a==null?void 0:a.one_ins)==null?void 0:F.website_looks)==null?void 0:z.mission)??"",instituteTheme:((M=(L=a==null?void 0:a.one_ins)==null?void 0:L.website_looks)==null?void 0:M.color)??""}),(s==null?void 0:s.search)&&((E=s==null?void 0:s.search)==null?void 0:E.substring(3))==="desk"&&l.jsx(is,{leadingMessage:((R=(O=a==null?void 0:a.one_ins)==null?void 0:O.website_looks)==null?void 0:R.leading_person_message)??"",setIndex:m,leadingPerson:((U=(W=a==null?void 0:a.one_ins)==null?void 0:W.website_looks)==null?void 0:U.leading_person)??"",leadingPosition:((q=(V=a==null?void 0:a.one_ins)==null?void 0:V.website_looks)==null?void 0:q.leading_person_position)??"",instituteTheme:((J=(H=a==null?void 0:a.one_ins)==null?void 0:H.website_looks)==null?void 0:J.color)??""}),(s==null?void 0:s.search)&&((K=s==null?void 0:s.search)==null?void 0:K.substring(3))==="institute"&&l.jsx(os,{setIndex:m,instituteAbout:((Y=(X=a==null?void 0:a.one_ins)==null?void 0:X.website_looks)==null?void 0:Y.about)??"",instituteBackgroudImage:((w=(Z=a==null?void 0:a.one_ins)==null?void 0:Z.website_looks)==null?void 0:w.background_image)??"",instituteTheme:((b=(B=a==null?void 0:a.one_ins)==null?void 0:B.website_looks)==null?void 0:b.color)??""}),(s==null?void 0:s.search)&&((G=s==null?void 0:s.search)==null?void 0:G.substring(3))==="structure"&&l.jsx(ds,{setIndex:m,instituteAbout:((I=(T=a==null?void 0:a.one_ins)==null?void 0:T.website_looks)==null?void 0:I.about)??"",instituteBackgroudImage:((y=(P=a==null?void 0:a.one_ins)==null?void 0:P.website_looks)==null?void 0:y.background_image)??"",instituteTheme:((g=(Q=a==null?void 0:a.one_ins)==null?void 0:Q.website_looks)==null?void 0:g.color)??""})]})})};export{ps as default};
