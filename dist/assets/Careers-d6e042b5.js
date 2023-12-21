import{n as t,r as d,j as l,y as $s,ab as Ds,o as us,A as Cs,t as Os,u as Js,b as Rs,L as Es,Q as bs}from"./index-bc15d1b2.js";import{s as a}from"./Careers.module-9cc457d6.js";import{f as Ns,g as vs}from"./career-api-6f39f1ed.js";import"./ApplicationForm.module-128fad79.js";import"./InputDateField.module-fcef49b4.js";function b({vacancy:o,itemRef:n,lcid:c,instituteTheme:r}){var x;const{t:N}=t(),[f,C]=d.useState(!1);return l.jsxs("div",{className:a.insCareerCardInner,ref:n,children:[l.jsx($s,{state:{vid:`${o==null?void 0:o._id}`,lcid:`${c}`},to:"/career/detail",children:l.jsxs("div",{className:a.insCareerCard,children:[l.jsx("img",{src:"/images/career/insCareer/career_job.svg"}),l.jsxs("div",{className:a.insCareerCardtext,children:[l.jsx("h6",{className:a.insCareerCardsubject,style:{color:`${r??"#121212"}`},children:o==null?void 0:o.vacancy_position}),l.jsx("p",{className:a.insCareerCarddept,children:(x=o==null?void 0:o.department)==null?void 0:x.dName}),l.jsx("p",{className:a.insCareerCarddesig,children:o==null?void 0:o.vacancy_job_type}),l.jsxs("p",{className:a.insCareerCarddesig,children:[N("applications"),": ",o==null?void 0:o.application_count," "]})]})]})}),f&&l.jsx(Ds,{})]})}function As({lcid:o,index:n,setIndex:c,instituteTheme:r}){const{t:N}=t(),[f,C]=us(),[x,D]=d.useState(1),[v,ks]=d.useState(""),[m,j]=d.useState([]),[k,O]=d.useState(!0),[J,F]=d.useState(!1),[A,L]=d.useState(!1),[h,R]=d.useState(!1),[s,S]=d.useState(!0),{getVacancylist:e,getVacancyListRefetch:$}=Ns({data:{lcid:o,page:x,limit:10,status:"Ongoing"},skip:!o});return d.useEffect(()=>{C&&k&&D(i=>i+1)},[C,k]),d.useEffect(()=>{o&&(S(!0),$())},[x,o,v,$]),d.useEffect(()=>{var i,_;v?(j(e==null?void 0:e.all_vacancy),S(!1)):A?(j(u=>[...new Set([...e==null?void 0:e.all_vacancy,...u].map(JSON.stringify))].map(JSON.parse)),S(!1),L(!1)):h?(j(u=>[...new Set([...e==null?void 0:e.all_vacancy].map(JSON.stringify))].map(JSON.parse)),S(!1),R(!1)):e!=null&&e.all_vacancy?(j(u=>[...new Set([...u,...e==null?void 0:e.all_vacancy].map(JSON.stringify))].map(JSON.parse)),S(!1)):((i=e==null?void 0:e.all_vacancy)==null?void 0:i.length)===0&&S(!1),((_=e==null?void 0:e.all_vacancy)==null?void 0:_.length)===10?O(!0):O(!1)},[e==null?void 0:e.all_vacancy]),l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:a.alumnimid,children:[l.jsx("div",{className:a.alumnimidheader,style:{color:`${r??"#010D31"}`,borderBottom:`3px solid ${r??"#010D31"}`},children:N("vacancies")}),l.jsx("div",{className:a.eventlist,children:(m==null?void 0:m.length)===0&&J?l.jsx("div",{className:a.noData,children:l.jsx("img",{src:"/images/nodata.png",alt:""})}):l.jsx("div",{className:a.alumnilist,children:m==null?void 0:m.map((i,_)=>(m==null?void 0:m.length)===_+1?l.jsx(b,{vacancy:i,vid:i==null?void 0:i._id,lcid:o,itemRef:f,instituteTheme:r}):l.jsx(b,{vacancy:i,vid:i==null?void 0:i._id,lcid:o,instituteTheme:r}))})})]}),l.jsxs("div",{className:a.alumniabout,children:[l.jsxs("div",{className:a.alumnimidheader,style:{color:`${r??"#010D31"}`,borderBottom:`3px solid ${r??"#010D31"}`},children:[l.jsx("div",{className:a.arrowIconMid,children:l.jsx(Cs,{instituteTheme:r,handleClick:()=>c(10)})}),l.jsx("p",{style:{color:`${r??"#121212"}`},children:N("vacancies")})]}),(m==null?void 0:m.length)===0&&J?l.jsx("div",{className:a.noData,children:l.jsx("img",{src:"/images/nodata.png",alt:""})}):l.jsx("div",{className:a.alumnilist,children:m==null?void 0:m.map((i,_)=>(m==null?void 0:m.length)===_+1?l.jsx(b,{itemRef:f,vacancy:i,vid:i==null?void 0:i._id,lcid:o,instituteTheme:r}):l.jsx(b,{vacancy:i,vid:i==null?void 0:i._id,lcid:o,instituteTheme:r}))})]})]})}function Ws(){var i,_,u,M,P,W,q,z,H,K,U,X,Y,Z,w,T,Q,g,V,B,G,I,y,ss,ls,es,as,rs,os,is,ds,ms,ns,cs,_s,ps,hs,fs,xs,js;const{t:o}=t(),[n,c]=d.useState(10);d.useState("");const r=Os(),[N,f]=us(),[C,x]=d.useState(1),[D,v]=d.useState(""),[ks,m]=d.useState([]),[j,k]=d.useState(!0),[O,J]=d.useState(!1),[F,A]=d.useState(!1),[L,h]=d.useState(!0),R=Js(p=>p.domainCom.id);vs({lcid:(i=r==null?void 0:r.state)==null?void 0:i.lcid,skip:!((_=r==null?void 0:r.state)!=null&&_.lcid)});const{getwebsiteInfoGetByInstitute:s,getwebsiteInfoGetByInstituteRefetch:S}=Rs({id:R,skip:!R}),{getVacancylist:e,getVacancyListRefetch:$}=Ns({data:{lcid:(u=r==null?void 0:r.state)==null?void 0:u.lcid,page:C,limit:10,status:"Ongoing"},skip:!((M=r==null?void 0:r.state)!=null&&M.lcid)});return d.useEffect(()=>{f&&j&&x(p=>p+1)},[f,j]),d.useEffect(()=>{var p;(p=r==null?void 0:r.state)!=null&&p.lcid&&(h(!0),$())},[C,(P=r==null?void 0:r.state)==null?void 0:P.lcid,D,$]),d.useEffect(()=>{var p,Ss;D?(m(e==null?void 0:e.all_vacancy),h(!1)):O?(m(E=>[...new Set([...e==null?void 0:e.all_vacancy,...E].map(JSON.stringify))].map(JSON.parse)),h(!1),J(!1)):F?(m(E=>[...new Set([...e==null?void 0:e.all_vacancy].map(JSON.stringify))].map(JSON.parse)),h(!1),A(!1)):e!=null&&e.all_vacancy?(m(E=>[...new Set([...E,...e==null?void 0:e.all_vacancy].map(JSON.stringify))].map(JSON.parse)),h(!1)):((p=e==null?void 0:e.all_vacancy)==null?void 0:p.length)===0&&h(!1),((Ss=e==null?void 0:e.all_vacancy)==null?void 0:Ss.length)===10?k(!0):k(!1)},[e==null?void 0:e.all_vacancy]),l.jsxs(l.Fragment,{children:[l.jsx(Es,{children:l.jsxs("div",{className:a.alumni,children:[l.jsxs("div",{className:a.alumnileft,children:[l.jsx("div",{className:n===0||n===10?`${a.alumnileftCard} ${a.alumnileftCardActive}`:a.alumnileftCard,style:n===0||n===10?{backgroundColor:(q=(W=s==null?void 0:s.one_ins)==null?void 0:W.website_looks)==null?void 0:q.color}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:`${((H=(z=s==null?void 0:s.one_ins)==null?void 0:z.website_looks)==null?void 0:H.color)??"#010D31"}`},onClick:()=>c(0),children:o("career_in_ins")}),l.jsx("div",{className:n===1?`${a.alumnileftCard} ${a.alumnileftCardActive}`:a.alumnileftCard,style:n===1?{backgroundColor:(U=(K=s==null?void 0:s.one_ins)==null?void 0:K.website_looks)==null?void 0:U.color}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:`${((Y=(X=s==null?void 0:s.one_ins)==null?void 0:X.website_looks)==null?void 0:Y.color)??"#010D31"}`},onClick:()=>c(1),children:o("vacancies")})]}),n===10&&l.jsxs("div",{className:a.alumniresponsiveleft,children:[l.jsx("div",{className:n===0?`${a.alumnileftCard} ${a.alumnileftCardActive}`:a.alumnileftCard,style:n===0?{backgroundColor:(w=(Z=s==null?void 0:s.one_ins)==null?void 0:Z.website_looks)==null?void 0:w.color}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:`${((Q=(T=s==null?void 0:s.one_ins)==null?void 0:T.website_looks)==null?void 0:Q.color)??"#010D31"}`},onClick:()=>c(0),children:o("career_in_ins")}),l.jsx("div",{className:n===1?`${a.alumnileftCard} ${a.alumnileftCardActive}`:a.alumnileftCard,style:n===1?{backgroundColor:(V=(g=s==null?void 0:s.one_ins)==null?void 0:g.website_looks)==null?void 0:V.color}:{backgroundColor:"rgba(1, 13, 49, 0.05)",color:`${((G=(B=s==null?void 0:s.one_ins)==null?void 0:B.website_looks)==null?void 0:G.color)??"#010D31"}`},onClick:()=>c(1),children:o("vacancies")})]}),(n===0||n===10)&&l.jsxs("div",{className:a.alumnimid,children:[l.jsx("div",{className:a.alumnimidheader,style:{color:`${((y=(I=s==null?void 0:s.one_ins)==null?void 0:I.website_looks)==null?void 0:y.color)??"#010D31"}`,borderBottom:`3px solid ${((ls=(ss=s==null?void 0:s.one_ins)==null?void 0:ss.website_looks)==null?void 0:ls.color)??"#010D31"}`},children:o("career_in_ins")}),l.jsx("p",{className:a.alumnimidp,style:{color:`${((as=(es=s==null?void 0:s.one_ins)==null?void 0:es.website_looks)==null?void 0:as.color)??"#010D31"}`},children:(rs=s==null?void 0:s.one_ins)==null?void 0:rs.career_passage})]}),n===0&&l.jsxs("div",{className:a.alumniabout,children:[l.jsxs("div",{className:a.alumnimidheader,style:{color:`${((is=(os=s==null?void 0:s.one_ins)==null?void 0:os.website_looks)==null?void 0:is.color)??"#010D31"}`,borderBottom:`3px solid ${((ms=(ds=s==null?void 0:s.one_ins)==null?void 0:ds.website_looks)==null?void 0:ms.color)??"#010D31"}`},children:[l.jsx("div",{className:a.arrowIconMid,children:l.jsx(Cs,{instituteTheme:(cs=(ns=s==null?void 0:s.one_ins)==null?void 0:ns.website_looks)==null?void 0:cs.color,handleClick:()=>c(10)})}),o("career_in_ins")]}),l.jsx("p",{className:a.alumnimidp,style:{color:`${((ps=(_s=s==null?void 0:s.one_ins)==null?void 0:_s.website_looks)==null?void 0:ps.color)??"#010D31"}`},children:(hs=s==null?void 0:s.one_ins)==null?void 0:hs.career_passage})]}),n===1&&l.jsx(As,{instituteTheme:((xs=(fs=s==null?void 0:s.one_ins)==null?void 0:fs.website_looks)==null?void 0:xs.color)??"",lcid:(js=r==null?void 0:r.state)==null?void 0:js.lcid,index:n,setIndex:c})]})}),L&&l.jsx(bs,{})]})}export{Ws as default};
