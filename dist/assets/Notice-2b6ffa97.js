import{j as a,U as V,r as c,i as K,u as y,o as L,V as F,n as J,b as U,L as W,A as q}from"./index-2d8c782e.js";import"./Utils.module-5cada88c.js";import{h as E}from"./moment-fbc5633a.js";const O="_alumni_jf3pj_1",P="_alumniresponsive_jf3pj_9",z="_alumniresponsiveleft_jf3pj_13",H="_alumnileftCard_jf3pj_17",Q="_alumnileftCardActive_jf3pj_32",X="_alumnimid_jf3pj_37",Y="_backImg_jf3pj_42",Z="_alumnimidheader_jf3pj_48",B="_cellInchargeheader_jf3pj_72",N="_alumnimidp_jf3pj_83",G="_alumniright_jf3pj_93",I="_alumnirightbox_jf3pj_99",aa="_boxArrowImg_jf3pj_113",sa="_alumnirightboximg_jf3pj_120",na="_alumnirightboxh6_jf3pj_126",ia="_alumnirightboxp_jf3pj_137",la="_alumnirightboxspan_jf3pj_149",_a="_cellbox_jf3pj_158",ra="_cellboximg_jf3pj_167",ea="_cellboxdp_jf3pj_173",oa="_alumniabout_jf3pj_184",ma="_alumnilist_jf3pj_190",da="_alumnicard_jf3pj_197",ca="_alumnicardtext_jf3pj_211",ja="_alumnimidheaderresponse_jf3pj_233",ta="_backImgg_jf3pj_234",pa="_alumnilistcontainer_jf3pj_238",ga="_alumniregheader_jf3pj_242",ha="_alumnimidheaderresponsereverse_jf3pj_243",fa="_alumniregheaderresponsive_jf3pj_246",va="_alumnireg_jf3pj_242",xa="_fillbtn_jf3pj_254",ua="_reginsh6_jf3pj_278",ba="_reginsp_jf3pj_289",ka="_noData_jf3pj_300",Da="_eventlist_jf3pj_316",Aa="_eventlistresponsive_jf3pj_327",Sa="_eventDetailsresponsive_jf3pj_328",$a="_eventDetails_jf3pj_328",wa="_contactList_jf3pj_336",Ca="_arrowIconMid_jf3pj_342",Ea="_alumnileft_jf3pj_17",Ma="_vission_jf3pj_463",d={alumni:O,alumniresponsive:P,alumniresponsiveleft:z,alumnileftCard:H,alumnileftCardActive:Q,alumnimid:X,backImg:Y,alumnimidheader:Z,cellInchargeheader:B,alumnimidp:N,alumniright:G,alumnirightbox:I,boxArrowImg:aa,alumnirightboximg:sa,alumnirightboxh6:na,alumnirightboxp:ia,alumnirightboxspan:la,cellbox:_a,cellboximg:ra,cellboxdp:ea,alumniabout:oa,alumnilist:ma,alumnicard:da,alumnicardtext:ca,alumnimidheaderresponse:ja,backImgg:ta,alumnilistcontainer:pa,alumniregheader:ga,alumnimidheaderresponsereverse:ha,alumniregheaderresponsive:fa,alumnireg:va,fillbtn:xa,reginsh6:ua,reginsp:ba,noData:ka,eventlist:Da,eventlistresponsive:Aa,eventDetailsresponsive:Sa,eventDetails:$a,contactList:wa,arrowIconMid:Ca,alumnileft:Ea,vission:Ma},Ta="_admission_container_1gvek_1",ya="_admission_container_content_1gvek_14",Ra="_admission_info_1gvek_18",Va="_ongoing_card_1gvek_29",Ka="_ongoing_card_active_1gvek_44",La="_ongoing_card_color_1gvek_48",Fa="_ongoing_card_text_1gvek_54",Ja="_ongoing_list_1gvek_76",Ua="_ongoing_list_detail_1gvek_84",Wa="_application_detail_position_1gvek_91",qa="_application_detail_1gvek_91",Oa="_application_name_1gvek_109",Pa="_application_detail_pdf_1gvek_128",j={admission_container:Ta,admission_container_content:ya,admission_info:Ra,ongoing_card:Va,ongoing_card_active:Ka,ongoing_card_color:La,ongoing_card_text:Fa,ongoing_list:Ja,ongoing_list_detail:Ua,application_detail_position:Wa,application_detail:qa,application_name:Oa,application_detail_pdf:Pa},b=({setOpenNotice:r,instituteTheme:l,notice:_,openNotice:e})=>a.jsxs("div",{className:(e==null?void 0:e._id)===(_==null?void 0:_._id)?`${j.ongoing_card} ${j.ongoing_card_active}`:j.ongoing_card,title:"View Notice",onClick:()=>r(_),children:[a.jsx("div",{className:j.ongoing_card_color,style:{backgroundColor:`${l??"#010D31"}`}}),a.jsxs("div",{className:j.ongoing_card_text,children:[a.jsx("h6",{children:_==null?void 0:_.insAnnTitle}),a.jsxs("p",{children:[E(_==null?void 0:_.createdAt).format("DD MMM yyyy"),","," ",E(_==null?void 0:_.createdAt).format("LT")]})]})]}),M=({openNotice:r})=>{var e,s,t,p;const{oneNoticeDetail:l,oneNoticeDetailRefetch:_}=V({annId:r==null?void 0:r._id,skip:!(r!=null&&r._id)});return c.useEffect(()=>{r!=null&&r._id&&_()},[r==null?void 0:r._id]),a.jsx("div",{className:j.application_detail_position,children:a.jsxs("div",{className:j.application_detail,children:[a.jsx("h6",{className:j.application_name,children:((e=l==null?void 0:l.announcement)==null?void 0:e.insAnnTitle)??""}),a.jsx("p",{style:{whiteSpace:"break-spaces"},children:((s=l==null?void 0:l.announcement)==null?void 0:s.insAnnDescription)??""}),(p=(t=l==null?void 0:l.announcement)==null?void 0:t.announcementDocument)==null?void 0:p.map(i=>(i==null?void 0:i.documentType)==="image/png"||(i==null?void 0:i.documentType)==="image/jpeg"?a.jsx("img",{src:i!=null&&i.documentKey?`${K}/${i==null?void 0:i.documentKey}`:"/images/notice/notice-preview-icon.svg",alt:"notice icon preview",style:{marginBottom:"0.5rem"}}):a.jsx("a",{title:"Download File",href:`https://d3dqpu54js2vfl.cloudfront.net/${i==null?void 0:i.documentKey}`,target:"_blank",rel:"noopener noreferrer",children:a.jsxs("div",{className:j.application_detail_pdf,children:[a.jsx("img",{src:"/images/pdf-icon.svg",alt:i==null?void 0:i.documentName}),a.jsx("h6",{children:(i==null?void 0:i.documentName)??""})]})}))]})})},T=({instituteTheme:r,openNotice:l,setOpenNotice:_})=>{const e=y(n=>n.domainCom.id),[s,t]=c.useState(!0),[p,i]=c.useState(1),[h,f]=L(),[o,u]=c.useState([]),[k,v]=c.useState(!0),{getNoticeInstitute:m,getNoticeInstituteRefetch:x}=F({data:{id:e,page:p,limit:10},skip:!e});return c.useEffect(()=>{f&&s&&i(n=>n+1)},[f,s]),c.useEffect(()=>{e&&(v(!0),x())},[e,p,x]),c.useEffect(()=>{var n;m!=null&&m.announcement&&(u(g=>[...new Set([...g,...m==null?void 0:m.announcement].map(JSON.stringify))].map(JSON.parse)),v(!1)),((n=m==null?void 0:m.announcement)==null?void 0:n.length)===10?t(!0):t(!1)},[m==null?void 0:m.announcement]),a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:d.eventlist,children:[a.jsx("div",{className:d.alumnilist,children:o==null?void 0:o.map((n,g)=>(o==null?void 0:o.length)===g+1?a.jsx("div",{ref:h,children:a.jsx(b,{setOpenNotice:_,notice:n,instituteTheme:r,openNotice:l})},n==null?void 0:n._id):a.jsx(b,{setOpenNotice:_,notice:n,instituteTheme:r,openNotice:l},n==null?void 0:n._id))}),l!==""&&a.jsx("div",{className:d.eventDetails,children:a.jsx(M,{openNotice:l})})]}),l===""&&a.jsx("div",{className:d.eventlistresponsive,children:o==null?void 0:o.map((n,g)=>(o==null?void 0:o.length)===g+1?a.jsx("div",{ref:h,children:a.jsx(b,{setOpenNotice:_,notice:n,instituteTheme:r,openNotice:l})},n==null?void 0:n._id):a.jsx(b,{setOpenNotice:_,notice:n,instituteTheme:r,openNotice:l},n==null?void 0:n._id))}),l!==""&&a.jsx("div",{className:d.eventDetailsresponsive,children:a.jsx(M,{openNotice:l})})]})},Xa=()=>{var p,i,h,f,o,u,k,v,m,x,n,g,D,A,S,$,w,C;const{t:r}=J(),[l,_]=c.useState(""),e=y(R=>R.domainCom.id),{getwebsiteInfoGetByInstitute:s,getwebsiteInfoGetByInstituteRefetch:t}=U({id:e,skip:!e});return c.useEffect(()=>{e&&t()},[e,t]),a.jsx(W,{children:a.jsxs("div",{className:d.alumni,children:[a.jsxs("div",{className:d.alumnimid,children:[a.jsx("div",{className:d.alumnimidheader,style:{color:`${((i=(p=s==null?void 0:s.one_ins)==null?void 0:p.website_looks)==null?void 0:i.color)??"#010D31"}`,borderBottom:`3px solid ${((f=(h=s==null?void 0:s.one_ins)==null?void 0:h.website_looks)==null?void 0:f.color)??"#010D31"}`},children:a.jsx("p",{style:{color:`${((u=(o=s==null?void 0:s.one_ins)==null?void 0:o.website_looks)==null?void 0:u.color)??"#010d31"}`},children:r("notice_announcement")})}),a.jsx(T,{openNotice:l,setOpenNotice:_,instituteTheme:((v=(k=s==null?void 0:s.one_ins)==null?void 0:k.website_looks)==null?void 0:v.color)??""})]}),a.jsxs("div",{className:d.alumniabout,children:[a.jsxs("div",{className:d.alumnimidheader,style:{color:`${((x=(m=s==null?void 0:s.one_ins)==null?void 0:m.website_looks)==null?void 0:x.color)??"#010D31"}`,borderBottom:`3px solid ${((g=(n=s==null?void 0:s.one_ins)==null?void 0:n.website_looks)==null?void 0:g.color)??"#010D31"}`},children:[a.jsx("div",{className:d.arrowIconMid,children:l!==""&&a.jsx(q,{instituteTheme:(A=(D=s==null?void 0:s.one_ins)==null?void 0:D.website_looks)==null?void 0:A.color,handleClick:()=>_("")})}),a.jsx("p",{style:{color:`${(($=(S=s==null?void 0:s.one_ins)==null?void 0:S.website_looks)==null?void 0:$.color)??"#010d31"}`},children:r("notice_announcement")})]}),a.jsx(T,{openNotice:l,setOpenNotice:_,instituteTheme:((C=(w=s==null?void 0:s.one_ins)==null?void 0:w.website_looks)==null?void 0:C.color)??""})]})]})})};export{Xa as default};
