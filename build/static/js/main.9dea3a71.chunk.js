(this["webpackJsonpstrength-calculator"]=this["webpackJsonpstrength-calculator"]||[]).push([[0],{405:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(20),c=a.n(r),o=a(12),l=a(39);l.a.initializeApp({apiKey:"AIzaSyDUjwvT9xWVBX00pjVeYNFtRXi1be__xAQ",authDomain:"strength-calculator.firebaseapp.com",projectId:"strength-calculator",storageBucket:"strength-calculator.appspot.com",messagingSenderId:"373836812423",appId:"1:373836812423:web:bdbb73c3993dff41042822",measurementId:"G-04HVJZXRTS"});var s=l.a.firestore(),u=l.a.auth();l.a.database();l.a;var j=a(450),d=a(438),b=a(19),O=a.n(b);var h=function(e){u.useDeviceLanguage(),u.sendPasswordResetEmail(e).then((function(){O.a.fire({title:"Wys\u0142ali\u015bmy ci przypomnienie has\u0142a na email "+e,showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})})).catch((function(e){"auth/user-not-found"===e.code?O.a.fire({icon:"error",title:"Ups...",text:"podany email nie istnieje w zbiorze emaili"}):"auth/invalid-email"===e.code?O.a.fire({icon:"error",title:"Ups...",text:"Podano \u017ale sformatowany email"}):O.a.fire({icon:"error",title:e.code,text:e.message})}))},x=a(66),g=a.n(x);var f=function(e,t){return!1!==function(e){if(!g.a.isEmail(e))return O.a.fire({icon:"error",title:"Ups...",text:"Niestety to nie jest poprawny email!"}),!1}(e)&&(!1!==function(e){if(e.length<6)return O.a.fire({icon:"error",title:"Ups...",text:"Has\u0142o jest za kr\xf3tkie!"}),!1}(t)&&void 0)};var p=function(e,t,a){!1!==f(e,t)&&u.signInWithEmailAndPassword(e,t).then((function(){var e=u.currentUser,t={lastLogin:Date.now()};s.collection("users").doc(e.uid).update(t),O.a.fire({title:"Zalogowa\u0142e\u015b si\u0119 na konto",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),a(!0,e.uid)})).catch((function(e){"auth/user-not-found"===e.code?O.a.fire({icon:"error",title:"Ups...",text:"Nie znaleziono u\u017cytkownika z takim emailem!"}):"auth/wrong-password"===e.code?O.a.fire({icon:"error",title:"Ups...",text:"Poda\u0142e\u015b z\u0142e has\u0142o!"}):O.a.fire({icon:"error",title:e.code,text:e.message}),a(!1)}))},m={paddingTop:20,paddingBottom:20,paddingLeft:"5%",paddingRight:"5%",display:"flex",flexDirection:"column",width:"90%",gap:"1rem",border:"1px solid lightgray",borderRadius:50,justifyContent:"center"},v=a(4);var y=function(e){var t=e.setLogin,a=Object(n.useState)(""),i=Object(o.a)(a,2),r=i[0],c=i[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),u=s[0],b=s[1];return Object(v.jsxs)("form",{style:m,children:[Object(v.jsx)(j.a,{id:"outlined-basic",label:"Email",variant:"outlined",value:r,onChange:function(e){return c(e.target.value)},type:"email"}),Object(v.jsx)(j.a,{id:"outlined-basic",label:"Has\u0142o",variant:"outlined",value:u,onChange:function(e){return b(e.target.value)},type:"password"}),Object(v.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){p(r,u,t)},children:"Zaloguj si\u0119"}),Object(v.jsx)(d.a,{variant:"contained",onClick:function(){h(r)},children:"Zresetuj Has\u0142o"})]})};var w=function(e,t,a,n){return!1!==function(e,t){return g.a.isEmail(e)?g.a.equals(e,t)?void 0:(O.a.fire({icon:"error",title:"Ups...",text:"Emaile nie s\u0105 takie same!"}),!1):(O.a.fire({icon:"error",title:"Ups...",text:"Niestety to nie jest poprawny email!"}),!1)}(e,t)&&(!1!==function(e,t){return e.length<6?(O.a.fire({icon:"error",title:"Ups...",text:"Has\u0142o jest za kr\xf3tkie!"}),!1):g.a.equals(e,t)?void 0:(O.a.fire({icon:"error",title:"Ups...",text:"Has\u0142a nie s\u0105 takie same!"}),!1)}(a,n)&&void 0)};var z=function(e,t){var a=e.email,n=e.email2,i=e.password,r=e.password2,c=e.sex,o=e.birthDate;w(a,n,i,r)&&window.location.reload(),u.createUserWithEmailAndPassword(a,i).then((function(){var e=u.currentUser,n={email:a,sex:c,birthDate:Date.parse(o),lastLogin:Date.now(),bench:[],deadlift:[],squat:[]};s.collection("users").doc(e.uid).set(n),O.a.fire({title:"Utworzy\u0142e\u015b konto",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}}),t(!0,e.uid)})).catch((function(e){"auth/email-already-in-use"===e.code?O.a.fire({icon:"error",title:"Ups...",text:"Podany email jest ju\u017c u\u017cywany przez kogo\u015b innego!"}):"auth/weak-password"===e.code?O.a.fire({icon:"error",title:"Ups...",text:"Has\u0142o musi mie\u0107 co najmniej 6 liter!"}):O.a.fire({icon:"error",title:e.code,text:e.message}),t(!1)}))},k=a(448),C=a(451),M=a(167),F=a(28),S=a(446);var _=function(e){var t=e.setLogin,a=Object(n.useState)(""),i=Object(o.a)(a,2),r=i[0],c=i[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),u=s[0],b=s[1],O=Object(n.useState)(""),h=Object(o.a)(O,2),x=h[0],g=h[1],f=Object(n.useState)(""),p=Object(o.a)(f,2),y=p[0],w=p[1],_=Object(n.useState)("Men"),P=Object(o.a)(_,2),I=P[0],D=P[1],W=Object(n.useState)(Date.now()),U=Object(o.a)(W,2),R=U[0],E=U[1];return Object(v.jsxs)("form",{style:m,children:[Object(v.jsx)(j.a,{id:"outlined-basic",label:"Email",variant:"outlined",value:r,onChange:function(e){return c(e.target.value)},type:"email"}),Object(v.jsx)(j.a,{id:"outlined-basic",label:"Powt\xf3rz Email",variant:"outlined",value:u,onChange:function(e){return b(e.target.value)},type:"email"}),Object(v.jsx)(j.a,{id:"outlined-basic",label:"Has\u0142o",variant:"outlined",value:x,onChange:function(e){return g(e.target.value)},type:"password"}),Object(v.jsx)(j.a,{id:"outlined-basic",label:"Powt\xf3rz Has\u0142o",variant:"outlined",value:y,onChange:function(e){return w(e.target.value)},type:"password"}),Object(v.jsx)(F.a,{utils:M.a,children:Object(v.jsx)(S.a,{margin:"normal",id:"date-picker-dialog",label:"Data Urodzenia",format:"MM/dd/yyyy",value:R,onChange:function(e){E(e)},KeyboardButtonProps:{"aria-label":"change date"}})}),Object(v.jsxs)(k.a,{labelId:"demo-customized-select-label",id:"demo-customized-select",value:I,onChange:function(e){return D(e.target.value)},children:[Object(v.jsx)(C.a,{value:"Men",children:"M\u0119\u017cczyzna"}),Object(v.jsx)(C.a,{value:"Women",children:"Kobieta"})]}),Object(v.jsx)(d.a,{variant:"contained",color:"secondary",onClick:function(){return z({email:r,email2:u,password:x,password2:y,sex:I,birthDate:R},t)},children:"Zarejestruj si\u0119"})]})};var P=function(e){var t=e.setLogin;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{style:{color:"#3f51b5",textAlign:"center"},children:"Zaloguj si\u0119, je\u017celi nie masz konta zarejestruj si\u0119!"}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[Object(v.jsx)(y,{setLogin:t}),Object(v.jsx)(_,{setLogin:t})]})]})},I=a(439),D=a(169),W=a(164),U=a.n(W);function R(e){var t=e.setCurrOption,a=i.a.useState(null),n=Object(o.a)(a,2),r=n[0],c=n[1],l=Boolean(r);var s=function(){c(null)};return Object(v.jsxs)("div",{style:{float:"left",width:"50%"},children:[Object(v.jsx)(I.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){c(e.currentTarget)},children:Object(v.jsx)(U.a,{})}),Object(v.jsx)(D.a,{id:"long-menu",anchorEl:r,keepMounted:!0,open:l,onClose:s,PaperProps:{style:{maxHeight:216,width:300}},children:["Kalkulator maksymalnego ci\u0119\u017caru","Kalkulator BMR","Kalkulator FFMI","Wyniki w tr\xf3jboju"].map((function(e){return Object(v.jsx)(C.a,{onClick:function(e){!function(e,t){"Kalkulator maksymalnego ci\u0119\u017caru"===e?t("OneRepMaxCalc"):"Kalkulator BMR"===e?t("BMRCalc"):"Kalkulator FFMI"===e?t("FFMICalc"):"Wyniki w tr\xf3jboju"===e&&t("PowerliftingResults")}(e.target.innerText,t),s()},children:e},e)}))})]})}var E=function(e,t){var a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(a=e<8?Math.round(t*(36/(37-e))*10)/10:e<=10&&e>=8?Math.round((t*(1+e/30)+t*(36/(37-e)))/2*10)/10:Math.round(t*(1+e/30)*10)/10,null==n)return a;n(a)},B=a(440),A=a(441),T=a(444),K=a(442),L=a(443);var H=function(e){var t=e.max;return Object(v.jsxs)(B.a,{style:{marginTop:50},children:[Object(v.jsx)(A.a,{children:Object(v.jsxs)(K.a,{children:[Object(v.jsx)(L.a,{children:"Ilo\u015b\u0107 Powt\xf3rze\u0144"}),Object(v.jsx)(L.a,{children:"Ci\u0119\u017car"})]})}),Object(v.jsx)(T.a,{children:[1,.97,.94,.92,.89,.86,.83,.81,.78,.75,.73,.71,.7,.68,.67,.65,.64,.63,.61,.6,.59,.58,.57,.56,.55,.54,.53,.52,.51,.5].map((function(e,a){return Object(v.jsxs)(K.a,{children:[Object(v.jsx)(L.a,{children:a+1}),Object(v.jsxs)(L.a,{children:[Math.round(t*e*10)/10," kg"]})]},a)}))})]})};var Z=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),c=Object(o.a)(r,2),l=c[0],s=c[1],u=Object(n.useState)(""),b=Object(o.a)(u,2),O=b[0],h=b[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{style:{color:"#3f51b5",textAlign:"center"},children:"Kalkulator One Rep Max"}),Object(v.jsxs)("form",{style:m,children:[Object(v.jsx)(j.a,{id:"outlined-basic",label:"Podniesiona waga",variant:"outlined",value:a,onChange:function(e){return i(e.target.value)},type:"number"}),Object(v.jsx)(j.a,{id:"outlined-basic",label:"Ilo\u015b\u0107 powt\xf3rze\u0144",variant:"outlined",value:l,onChange:function(e){return s(e.target.value)},type:"number"}),Object(v.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return E(l,a,h)},children:"Oblicz sw\xf3j One Rep Max"})]}),""===O?null:Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h3",{style:{color:"#3f51b5"},children:["Tw\xf3j one rep max wynosi: ",O,"kg"]}),Object(v.jsx)(H,{max:O})]})]})};var q=function(e,t,a,n,i){console.log(a),i("Men"===n?10*+e+6.25*+t-5*a+5:10*+e+6.25*+t-5*a-161)};var N=function(e){var t=e.data,a=Object(n.useState)(""),i=Object(o.a)(a,2),r=i[0],c=i[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),u=s[0],b=s[1],O=Object(n.useState)(""),h=Object(o.a)(O,2),x=h[0],g=h[1],f=(new Date).getFullYear()-new Date(t.birthDate).getFullYear();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{style:{color:"#3f51b5",textAlign:"center"},children:"Kalkulator BMR"}),Object(v.jsxs)("form",{style:m,children:[Object(v.jsx)(j.a,{id:"outlined-basic",label:"Waga",variant:"outlined",value:r,onChange:function(e){return c(e.target.value)},type:"number"}),Object(v.jsx)(j.a,{id:"outlined-basic",label:"Wzrost w centymetrach",variant:"outlined",value:u,onChange:function(e){return b(e.target.value)},type:"number"}),Object(v.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return q(r,u,f,t.sex,g)},children:"Oblicz swoje BMR"})]}),""!==x?Object(v.jsxs)("p",{children:["Twoje BMR wynosi ",x,"kcal"]}):null]})};var Y=function(e,t,a,n,i){var r=t/100,c=e*(1-a/100),o=Math.round(c/(r*r)*10)/10;n(o),i(Math.round(10*(o+6.1*(1.8-r)))/10)};var J=function(){return Object(v.jsxs)(B.a,{style:{marginTop:20,marginBottom:20},children:[Object(v.jsx)(A.a,{children:Object(v.jsxs)(K.a,{children:[Object(v.jsx)(L.a,{children:"Zakres FFMI"}),Object(v.jsx)(L.a,{children:"Opis"})]})}),Object(v.jsxs)(T.a,{children:[Object(v.jsxs)(K.a,{children:[Object(v.jsx)(L.a,{children:"Poni\u017cej 18"}),Object(v.jsx)(L.a,{children:"Poni\u017cej \u015bredniej"})]}),Object(v.jsxs)(K.a,{children:[Object(v.jsx)(L.a,{children:"18-20"}),Object(v.jsx)(L.a,{children:"\u015arednia"})]}),Object(v.jsxs)(K.a,{children:[Object(v.jsx)(L.a,{children:"20-22"}),Object(v.jsx)(L.a,{children:"Powy\u017cej \u015bredniej"})]}),Object(v.jsxs)(K.a,{children:[Object(v.jsx)(L.a,{children:"22-23"}),Object(v.jsx)(L.a,{children:"\u015awietne"})]}),Object(v.jsxs)(K.a,{children:[Object(v.jsx)(L.a,{children:"23-26"}),Object(v.jsx)(L.a,{children:"Elitarne"})]}),Object(v.jsxs)(K.a,{children:[Object(v.jsx)(L.a,{children:"26-28"}),Object(v.jsx)(L.a,{children:"Podejrzenie za\u017cywania steryd\xf3w"})]}),Object(v.jsxs)(K.a,{children:[Object(v.jsx)(L.a,{children:"Powy\u017cej 28"}),Object(v.jsx)(L.a,{children:"Praktycznie pewne u\u017cycie steryd\xf3w"})]})]})]})};var V=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(""),c=Object(o.a)(r,2),l=c[0],s=c[1],u=Object(n.useState)(""),b=Object(o.a)(u,2),O=b[0],h=b[1],x=Object(n.useState)(""),g=Object(o.a)(x,2),f=g[0],p=g[1],y=Object(n.useState)(""),w=Object(o.a)(y,2),z=w[0],k=w[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{style:{color:"#3f51b5",textAlign:"center"},children:"Kalkulator FFMI"}),Object(v.jsxs)("form",{style:m,children:[Object(v.jsx)(j.a,{id:"outlined-basic",label:"Waga",variant:"outlined",value:a,onChange:function(e){return i(e.target.value)},type:"number"}),Object(v.jsx)(j.a,{id:"outlined-basic",label:"Wzrost w centymetrach",variant:"outlined",value:l,onChange:function(e){return s(e.target.value)},type:"number"}),Object(v.jsx)(j.a,{id:"outlined-basic",label:"Procent tkanki t\u0142uszczowej w organizmie",variant:"outlined",value:O,onChange:function(e){return h(e.target.value)},type:"number"}),Object(v.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return Y(a,l,O,p,k)},children:"Oblicz swoje FFMI"})]}),""!==f?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:["Twoje FFMI wynosi ",f]}),Object(v.jsxs)("p",{children:["Po normalizacji FFMI wynosi ",z]}),Object(v.jsx)(J,{})]}):null]})},X=a(453),G=a(24),Q=a(23);var $=function(e){var t=e.weight,a=e.reps,n=e.option;if(""!==t)if(""!==a){var i="Przysiad ze sztang\u0105"===n?"squat":"Martwy ci\u0105g"===n?"deadlift":"Wyciskanie le\u017c\u0105c"===n?"bench":null;if(null===n)return"B\u0142\u0105d!";var r=new Date,c=l.a.auth().currentUser.uid,o=E(a,t);l.a.firestore().collection("users").doc("".concat(c)).get().then((function(e){if(e.exists){var n=e.data()[i];l.a.firestore().collection("users").doc("".concat(c)).update(Object(G.a)({},i,[].concat(Object(Q.a)(n),[{weight:t,reps:a,estimatedMax:o,date:Date.parse(r)}]))).then((function(){O.a.fire({title:"Doda\u0142e\u015b wynik w boju :)",showClass:{popup:"animate__animated animate__fadeInDown"},hideClass:{popup:"animate__animated animate__fadeOutUp"}})})).catch((function(e){console.error("Error updating document: ",e)}))}else console.log("data don't exists")})).catch((function(e){console.log("Error getting document:",e)}))}else O.a.fire({icon:"error",title:"Puste pole!",text:"Wprowad\u017a ilo\u015b\u0107 powt\xf3rze\u0144!"});else O.a.fire({icon:"error",title:"Puste pole!",text:"Wprowad\u017a wage sztangi!"})},ee=a(168);var te=function(e,t,a){a(("Przysiad ze sztang\u0105"===t?e.squat:"Martwy ci\u0105g"===t?e.deadlift:"Wyciskanie le\u017c\u0105c"===t?e.bench:null).sort((function(e,t){return e.date>t.date?1:t.date>e.date?-1:0})))};var ae=function(e,t,a){var n=[];s.collection("users").doc("".concat(e)).get().then((function(e){e.exists?(a(e.data()),n=e.data(),te(n,t,a)):console.log("data don't exists")})).catch((function(e){console.log("Error getting document:",e)}))};var ne=function(e,t){var a,n,i=e.data,r=e.option;a=i.map((function(e){var t=new Date(e.date);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())})),n=i.map((function(e){return e.estimatedMax})),t({labels:Object(Q.a)(a),datasets:[{label:r,fill:!1,lineTension:.5,backgroundColor:"rgba(255,100,0,1)",borderColor:"rgba(0,0,255,1)",borderWidth:1,data:Object(Q.a)(n)}]}),console.log(n,a)};var ie=function(){var e={labels:[].concat([]),datasets:[{label:"Przysiad ze sztang\u0105",fill:!1,lineTension:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:1,data:[].concat([])}]},t=u.currentUser.uid,a=["Przysiad ze sztang\u0105","Martwy ci\u0105g","Wyciskanie le\u017c\u0105c"],i=Object(n.useState)([]),r=Object(o.a)(i,2),c=r[0],l=r[1],s=Object(n.useState)(e),j=Object(o.a)(s,2),d=j[0],b=j[1],O=Object(n.useState)("".concat(a[1])),h=Object(o.a)(O,2),x=h[0],g=h[1];return Object(n.useEffect)((function(){ae(t,x,l),ne({data:c,option:x},b)}),[x]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{style:{width:"100%",marginTop:20,marginBottom:20},children:[Object(v.jsx)(X.a,{id:"label",style:{textAlign:"center"},children:"Wybierz b\xf3j"}),Object(v.jsx)(k.a,{style:{width:"100%",marginTop:20,marginBottom:20,textAlign:"center"},labelId:"label",id:"select",value:x,onChange:function(e){g(e.target.value)},children:a.map((function(e,t){return Object(v.jsx)(C.a,{value:e,children:e},t)}))})]}),d!==e?Object(v.jsx)("div",{children:Object(v.jsx)(ee.a,{data:d,options:{title:{display:!0,text:"Przewidywany One Rep Max",fontSize:20},legend:{display:!0,position:"right"}}})}):null]})};var re=function(){var e=["Przysiad ze sztang\u0105","Martwy ci\u0105g","Wyciskanie le\u017c\u0105c"],t=Object(n.useState)(""),a=Object(o.a)(t,2),i=a[0],r=a[1],c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],u=l[1],b=Object(n.useState)("".concat(e[0])),O=Object(o.a)(b,2),h=O[0],x=O[1];return Object(n.useEffect)((function(){}),[h]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{style:{color:"#3f51b5",textAlign:"center"},children:"Zapisz sw\xf3j ostatni wynik w danym boju"}),Object(v.jsxs)("form",{style:m,children:[Object(v.jsx)(X.a,{id:"label",style:{textAlign:"center"},children:"Wybierz b\xf3j"}),Object(v.jsx)(k.a,{labelId:"label",id:"select",value:h,style:{textAlign:"center"},onChange:function(e){return x(e.target.value)},children:e.map((function(e,t){return Object(v.jsx)(C.a,{value:e,children:e},t)}))}),Object(v.jsx)(j.a,{id:"outlined-basic",label:"Waga",variant:"outlined",value:i,onChange:function(e){return r(e.target.value)},type:"number"}),Object(v.jsx)(j.a,{id:"outlined-basic",label:"Ilo\u015b\u0107 powt\xf3rze\u0144",variant:"outlined",value:s,onChange:function(e){return u(e.target.value)},type:"number"}),Object(v.jsx)(d.a,{variant:"contained",color:"primary",onClick:function(){return $({weight:i,reps:s,option:h})},children:"Zapisz sw\xf3j wynik"})]}),Object(v.jsx)(ie,{})]})};var ce=function(e){var t=e.data,a=e.setIsLoggedIn,i=Object(n.useState)("OneRepMaxCalc"),r=Object(o.a)(i,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){}),[c]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{style:{width:"100%",marginBottom:20,display:"flex"},children:[Object(v.jsx)(R,{setCurrOption:l}),Object(v.jsx)("a",{style:{display:"block",float:"right",paddingRight:"5%",textAlign:"right",width:"50%",fontWeight:"600",color:"#3f51b5",paddingTop:"2%",textDecoration:"none"},href:"./index.html",onClick:function(e){e.preventDefault(),function(e){u.signOut().then((function(){e(!1)}))}(a)},children:"Wyloguj"})]}),"OneRepMaxCalc"===c?Object(v.jsx)(Z,{}):null,"BMRCalc"===c?Object(v.jsx)(N,{data:t}):null,"FFMICalc"===c?Object(v.jsx)(V,{}):null,"PowerliftingResults"===c?Object(v.jsx)(re,{}):null]})};var oe=function(){return Object(v.jsx)("h6",{style:{textAlign:"center",color:"#3f51b5"},children:"\xa9 Alan Rutyna 2021"})};var le=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(0),c=Object(o.a)(r,2),l=c[0],u=c[1],j=Object(n.useState)(!1),d=Object(o.a)(j,2),b=d[0],O=d[1];return Object(n.useEffect)((function(){!function(e,t){s.collection("users").doc("".concat(e)).get().then((function(e){e.exists?t(e.data()):console.log("data don't exists")})).catch((function(e){console.log("Error getting document:",e)}))}(l,O)}),[l]),a?0===l?Object(v.jsxs)(v.Fragment,{children:["\u0141adowanie...",Object(v.jsx)(oe,{})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ce,{data:b,setIsLoggedIn:i}),Object(v.jsx)(oe,{})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(P,{setLogin:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i(e),u(t)}}),Object(v.jsx)(oe,{})]})},se=a(445);var ue=function(){return Object(v.jsx)(se.a,{maxWidth:"sm",style:{padding:10,backgroundColor:"white"},children:Object(v.jsx)(le,{})})};c.a.render(Object(v.jsx)(ue,{}),document.getElementById("root"))}},[[405,1,2]]]);
//# sourceMappingURL=main.9dea3a71.chunk.js.map