import{n as M,r as e,j as s,x as y,aa as B,o as G,A as w,t as I,u as t,b as aa,L as sa}from"./index-2d8c782e.js";import{s as l}from"./Careers.module-975bd970.js";import{c as la}from"./career-api-91537005.js";function A({itemRef:d,ltid:i,tender:c,instituteTheme:n}){var j;const{t:h}=M(),[a,f]=e.useState(!1);return s.jsx(y,{state:{tid:`${c==null?void 0:c._id}`,ltid:`${i}`},to:"/tender/detail",children:s.jsxs("div",{className:l.insCareerCardInner,ref:d,children:[s.jsxs("div",{className:l.insCareerCard,children:[s.jsx("img",{src:"/images/tender/tender-icon.svg"}),s.jsxs("div",{className:l.insCareerCardtext,children:[s.jsx("h6",{className:l.insCareerCardsubject,style:{color:`${n??"#121212"}`},children:c==null?void 0:c.tender_requirement}),s.jsx("p",{className:l.insCareerCarddept,children:(j=c==null?void 0:c.department)==null?void 0:j.dName}),s.jsxs("p",{className:l.insCareerCarddesig,children:[" ",h("budget_"),": Rs. ",c==null?void 0:c.tender_budget]}),s.jsxs("p",{className:l.insCareerCarddesig,children:[" ",h("bids"),": ",c==null?void 0:c.bid_count]})]})]}),a&&s.jsx(B,{})]})})}function oa({ltid:d,index:i,setIndex:c,instituteTheme:n}){const{t:h}=M(),[a,f]=G(),[j,$]=e.useState(1),[u,E]=e.useState(""),[r,p]=e.useState([]),[N,v]=e.useState(!0),[k,J]=e.useState(!1),[D,O]=e.useState(!1),[b,R]=e.useState(!1),[F,x]=e.useState(!0),{getTenderlist:o,getTenderListRefetch:S}=la({data:{ltid:d,page:j,limit:10,status:"Open"},skip:!d});return e.useEffect(()=>{f&&N&&$(m=>m+1)},[f,N]),e.useEffect(()=>{d&&(x(!0),S())},[j,d,u,S]),e.useEffect(()=>{var m,_;u?(p(o==null?void 0:o.all_tender),x(!1)):D?(p(C=>[...new Set([...o==null?void 0:o.all_tender,...C].map(JSON.stringify))].map(JSON.parse)),x(!1),O(!1)):b?(p(C=>[...new Set([...o==null?void 0:o.all_tender].map(JSON.stringify))].map(JSON.parse)),x(!1),R(!1)):o!=null&&o.all_tender?(p(C=>[...new Set([...C,...o==null?void 0:o.all_tender].map(JSON.stringify))].map(JSON.parse)),x(!1)):((m=o==null?void 0:o.all_tender)==null?void 0:m.length)===0&&x(!1),((_=o==null?void 0:o.all_tender)==null?void 0:_.length)===10?v(!0):v(!1)},[o==null?void 0:o.all_tender]),s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:l.alumnimid,children:[s.jsx("div",{className:l.alumnimidheader,style:{color:`${n??"#010D31"}`,borderBottom:`3px solid ${n??"#010D31"}`},children:h("open_tenders")}),s.jsx("div",{className:l.eventlist,children:(r==null?void 0:r.length)===0&&k?s.jsx("div",{className:l.noData,children:s.jsx("img",{src:"/images/nodata.png",alt:""})}):s.jsx("div",{className:l.alumnilist,children:r==null?void 0:r.map((m,_)=>(r==null?void 0:r.length)===_+1?s.jsx(A,{ltid:d,itemRef:a,tender:m,instituteTheme:n}):s.jsx(A,{ltid:d,tender:m,instituteTheme:n}))})})]}),s.jsxs("div",{className:l.alumniabout,children:[s.jsxs("div",{className:l.alumnimidheader,style:{color:`${n??"#010D31"}`,borderBottom:`3px solid ${n??"#010D31"}`},children:[s.jsx("div",{className:l.arrowIconMid,children:s.jsx(w,{instituteTheme:n,handleClick:()=>c(10)})}),s.jsxs("p",{style:{color:`${n??"#121212"}`},children:[" ",h("vacancies")]})]}),(r==null?void 0:r.length)===0&&k?s.jsx("div",{className:l.noData,children:s.jsx("img",{src:"/images/nodata.png",alt:""})}):s.jsx("div",{className:l.alumnilist,children:r==null?void 0:r.map((m,_)=>(r==null?void 0:r.length)===_+1?s.jsx(A,{ltid:d,itemRef:a,tender:m,instituteTheme:n}):s.jsx(A,{ltid:d,tender:m,instituteTheme:n}))})]})]})}function da(){var j,$,u,E,r,p,N,v,k,J,D,O,b,R,F,x,o,S,m,_,C,V,W,q,P,z,H,K,Q,U,X,Y,Z,L,g;const{t:d}=M(),[i,c]=e.useState(10),n=I(),h=t(T=>T.domainCom.id),{getwebsiteInfoGetByInstitute:a,getwebsiteInfoGetByInstituteRefetch:f}=aa({id:h,skip:!h});return s.jsx(s.Fragment,{children:s.jsx(sa,{children:s.jsxs("div",{className:l.alumni,children:[s.jsxs("div",{className:l.alumnileft,children:[s.jsx("div",{className:i===0||i===10?`${l.alumnileftCard} ${l.alumnileftCardActive}`:l.alumnileftCard,style:i===0||i===10?{backgroundColor:($=(j=a==null?void 0:a.one_ins)==null?void 0:j.website_looks)==null?void 0:$.color}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:`${((E=(u=a==null?void 0:a.one_ins)==null?void 0:u.website_looks)==null?void 0:E.color)??"#010D31"}`},onClick:()=>c(0),children:d("tender_in_ins")}),s.jsx("div",{className:i===1?`${l.alumnileftCard} ${l.alumnileftCardActive}`:l.alumnileftCard,style:i===1?{backgroundColor:(p=(r=a==null?void 0:a.one_ins)==null?void 0:r.website_looks)==null?void 0:p.color}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:`${((v=(N=a==null?void 0:a.one_ins)==null?void 0:N.website_looks)==null?void 0:v.color)??"#010D31"}`},onClick:()=>c(1),children:d("open_tenders")})]}),i===10&&s.jsxs("div",{className:l.alumniresponsiveleft,children:[s.jsx("div",{className:i===0?`${l.alumnileftCard} ${l.alumnileftCardActive}`:l.alumnileftCard,style:i===0?{backgroundColor:(J=(k=a==null?void 0:a.one_ins)==null?void 0:k.website_looks)==null?void 0:J.color}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:`${((O=(D=a==null?void 0:a.one_ins)==null?void 0:D.website_looks)==null?void 0:O.color)??"#010D31"}`},onClick:()=>c(0),children:d("tender_in_ins")}),s.jsx("div",{className:i===1?`${l.alumnileftCard} ${l.alumnileftCardActive}`:l.alumnileftCard,style:i===1?{backgroundColor:(R=(b=a==null?void 0:a.one_ins)==null?void 0:b.website_looks)==null?void 0:R.color}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:`${((x=(F=a==null?void 0:a.one_ins)==null?void 0:F.website_looks)==null?void 0:x.color)??"#010D31"}`},onClick:()=>c(1),children:d("open_tenders")})]}),(i===0||i===10)&&s.jsxs("div",{className:l.alumnimid,children:[s.jsx("div",{className:l.alumnimidheader,style:{color:`${((S=(o=a==null?void 0:a.one_ins)==null?void 0:o.website_looks)==null?void 0:S.color)??"#010D31"}`,borderBottom:`3px solid ${((_=(m=a==null?void 0:a.one_ins)==null?void 0:m.website_looks)==null?void 0:_.color)??"#010D31"}`},children:d("tender_in_ins")}),s.jsx("p",{className:l.alumnimidp,style:{color:`${((V=(C=a==null?void 0:a.one_ins)==null?void 0:C.website_looks)==null?void 0:V.color)??"#010D31"}`},children:(W=a==null?void 0:a.one_ins)==null?void 0:W.tender_passage})]}),i===0&&s.jsxs("div",{className:l.alumniabout,children:[s.jsxs("div",{className:l.alumnimidheader,style:{color:`${((P=(q=a==null?void 0:a.one_ins)==null?void 0:q.website_looks)==null?void 0:P.color)??"#010D31"}`,borderBottom:`3px solid ${((H=(z=a==null?void 0:a.one_ins)==null?void 0:z.website_looks)==null?void 0:H.color)??"#010D31"}`},children:[s.jsx("div",{className:l.arrowIconMid,children:s.jsx(w,{instituteTheme:(Q=(K=a==null?void 0:a.one_ins)==null?void 0:K.website_looks)==null?void 0:Q.color,handleClick:()=>c(10)})}),d("tender_in_ins")]}),s.jsx("p",{className:l.alumnimidp,style:{color:`${((X=(U=a==null?void 0:a.one_ins)==null?void 0:U.website_looks)==null?void 0:X.color)??"#010D31"}`},children:(Y=a==null?void 0:a.one_ins)==null?void 0:Y.tender_passage})]}),i===1&&s.jsx(oa,{instituteTheme:((L=(Z=a==null?void 0:a.one_ins)==null?void 0:Z.website_looks)==null?void 0:L.color)??"",ltid:(g=n==null?void 0:n.state)==null?void 0:g.ltid,index:i,setIndex:c})]})})})}export{da as default};
