(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{F4WH:function(n,e,l){"use strict";l.r(e);var t=l("8Y7J");class o{}var a=l("pMnS"),i=l("MKJQ"),r=l("sZkV"),u=l("SVse"),s=l("MWB6"),c=l("iBYA"),d=l("9ans"),b=l("r+JB");class h{constructor(n,e,l,t,o){this.authService=n,this.uploadFileService=e,this.navigationService=l,this.sharedService=t,this.router=o,this.hideBackButton=!1;const a=this.router.getCurrentNavigation();if(a&&a.extras&&a.extras.state){const n=a.extras.state;n.hideBackButton&&(this.hideBackButton=n.hideBackButton)}}ngOnInit(){this.image=this.authService.user.picture}takePhoto(){this.uploadFileService.takePhoto("profile",!1).then(n=>{console.log("data",n),this.image=n}).catch(n=>{switch(n.type){case"upload_file_s3":this.sharedService.presentAlert("Aviso","No se pudo subir la foto, vuelva a intentar").finally(()=>{});break;case"sign_file_s3":this.sharedService.presentAlert("Aviso","No se pudo firmar la foto, vuelva a intentar").finally(()=>{});break;case"no_faces":this.sharedService.presentAlert("Aviso","No se han encontrado caras en la foto, vuelva a intentar").finally(()=>{});break;case"max_faces_reached":this.sharedService.presentAlert("Aviso","Se ha encontrado mas de una cara en la foto, vuelva a intentar").finally(()=>{});break;case"detect_error":this.sharedService.presentAlert("Aviso","Error al procesar la foto, vuelva a intentar").finally(()=>{});break;case"file_not_found":this.sharedService.presentAlert("Aviso","No se ha encontrado la foto, vuelva a intentar").finally(()=>{});break;case"take_picture":default:this.sharedService.presentAlert("Aviso","Error al tomar la foto, vuelva a intentar").finally(()=>{})}})}enviar(){let n=this.authService.user;n.picture=this.image,this.sharedService.presentLoading("Actualizando").finally(()=>{this.authService.update(n).then(()=>{this.navigationService.navigate("root",["/home"]),this.sharedService.presentAlert("Aviso","Informaci\xf3n actualizada").finally(()=>{})}).catch(n=>{this.sharedService.presentAlert("Aviso",n.statusText).finally(()=>{})}).finally(()=>{this.sharedService.dismissLoading().finally(()=>{})})})}loadPlaceholder(n){return this.sharedService.loadPlaceholder(n)}back(){this.navigationService.navigate("back",["/home"])}}var p=l("iInd"),g=t.mb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background-size:cover;--background:none;background-color:#fff;background-image:url(/assets/imgs/fondos/circulo1.svg),url(/assets/imgs/fondos/circulo2.svg);background-position:155% 150%,-127% -119%;background-repeat:no-repeat;transition:background-position 2s ease}ion-content[_ngcontent-%COMP%]   .back-arrow[_ngcontent-%COMP%]{float:left;color:#000;font-size:1.5em;padding:5px}ion-content[_ngcontent-%COMP%]   .captura-foto[_ngcontent-%COMP%]   .logo-wrap[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   .captura-foto[_ngcontent-%COMP%]   .logo-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:auto}ion-content[_ngcontent-%COMP%]   .captura-foto[_ngcontent-%COMP%]   .contenedor-texto[_ngcontent-%COMP%]{font-size:.8em;background:#fff;padding:5px;border-radius:5px}ion-content[_ngcontent-%COMP%]   .captura-foto[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%]{width:300px;color:#000;margin:0 auto;font-weight:600;text-align:justify}ion-content[_ngcontent-%COMP%]   .captura-foto[_ngcontent-%COMP%]   .wrap-foto[_ngcontent-%COMP%]{width:250px;height:250px;border-radius:50%;border:4px solid #794691;margin:0 auto;overflow:hidden}"]],data:{}});function f(n){return t.Jb(0,[(n()(),t.ob(0,0,null,null,30,"ion-content",[],null,null,null,i.E,i.f)),t.nb(1,49152,null,0,r.t,[t.h,t.k,t.x],null,null),(n()(),t.ob(2,0,null,0,28,"ion-grid",[["class","captura-foto"]],null,null,null,i.H,i.i)),t.nb(3,49152,null,0,r.z,[t.h,t.k,t.x],null,null),(n()(),t.ob(4,0,null,0,26,"ion-row",[["class","ion-justify-content-center"]],null,null,null,i.P,i.q)),t.nb(5,49152,null,0,r.fb,[t.h,t.k,t.x],null,null),(n()(),t.ob(6,0,null,0,3,"ion-col",[["size","12"]],null,null,null,i.D,i.e)),t.nb(7,49152,null,0,r.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.ob(8,0,null,0,1,"ion-icon",[["class","back-arrow"],["name","arrow-back-outline"]],[[8,"hidden",0]],[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.back()&&t),t}),i.I,i.j)),t.nb(9,49152,null,0,r.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.ob(10,0,null,0,2,"ion-col",[["class","logo-wrap"],["size","12"]],null,null,null,i.D,i.e)),t.nb(11,49152,null,0,r.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.ob(12,0,null,0,0,"img",[["class","logo-small"],["src","assets/imgs/logo.svg"],["width","120"]],null,null,null,null,null)),(n()(),t.ob(13,0,null,0,6,"ion-col",[["size","12"]],null,null,null,i.D,i.e)),t.nb(14,49152,null,0,r.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.ob(15,0,null,0,4,"div",[["class","contenedor-texto"]],null,null,null,null,null)),(n()(),t.ob(16,0,null,null,1,"p",[["class","texto"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" Antes de continuar es necesario que registre su foto, para esto utilice el icono de la parte inferior y utilice la c\xe1mara frontal, esta foto podr\xe1 ser modificada luego si lo requiere. "])),(n()(),t.ob(18,0,null,null,1,"p",[["class","texto"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" Tenga en cuenta que esta foto deber\xe1 ser un primer plano de su rostro y deber\xe1 tener una iluminaci\xf3n adecuada para evitar que la foto quede oscura. "])),(n()(),t.ob(20,0,null,0,5,"ion-col",[["size","auto"]],null,null,null,i.D,i.e)),t.nb(21,49152,null,0,r.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.ob(22,0,null,0,3,"div",[["class","photos_profile"]],null,[[null,"click"]],(function(n,e,l){var t=!0;return"click"===e&&(t=!1!==n.component.takePhoto()&&t),t}),null,null)),t.Eb(512,null,u.y,u.z,[t.k,t.r,t.B]),t.nb(24,278528,null,0,u.n,[u.y],{ngStyle:[0,"ngStyle"]},null),t.Cb(25,{"background-image":0}),(n()(),t.ob(26,0,null,0,4,"ion-col",[["size","12"]],null,null,null,i.D,i.e)),t.nb(27,49152,null,0,r.s,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.ob(28,0,null,0,2,"ion-button",[["color","tertiary"],["expand","block"],["shape","round"]],null,[[null,"click"]],(function(n,e,l){var t=!0,o=n.component;return"click"===e&&(t=!1!==(o.image?o.enviar():o.takePhoto())&&t),t}),i.B,i.c)),t.nb(29,49152,null,0,r.j,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(n()(),t.Hb(30,0,[" ",""]))],(function(n,e){var l=e.component;n(e,7,0,"12"),n(e,9,0,"arrow-back-outline"),n(e,11,0,"12"),n(e,14,0,"12"),n(e,21,0,"auto");var t=n(e,25,0,l.image?"url("+l.image+")":null);n(e,24,0,t),n(e,27,0,"12"),n(e,29,0,"tertiary","block","round")}),(function(n,e){var l=e.component;n(e,8,0,l.hideBackButton),n(e,30,0,l.image?"Enviar":"Tomar foto")}))}function v(n){return t.Jb(0,[(n()(),t.ob(0,0,null,null,1,"app-update-data",[],null,null,null,f,g)),t.nb(1,114688,null,0,h,[d.a,s.a,b.a,c.a,p.m],null,null)],(function(n,e){n(e,1,0)}),null)}var k=t.kb("app-update-data",h,v,{},{},[]),x=l("s7LF");class m{}l.d(e,"UpdateDataPageModuleNgFactory",(function(){return _}));var _=t.lb(o,[],(function(n){return t.wb([t.xb(512,t.j,t.X,[[8,[a.a,k]],[3,t.j],t.v]),t.xb(4608,u.m,u.l,[t.s,[2,u.B]]),t.xb(4608,x.q,x.q,[]),t.xb(4608,r.b,r.b,[t.x,t.g]),t.xb(4608,r.Eb,r.Eb,[r.b,t.j,t.p]),t.xb(4608,r.Hb,r.Hb,[r.b,t.j,t.p]),t.xb(1073742336,u.b,u.b,[]),t.xb(1073742336,x.p,x.p,[]),t.xb(1073742336,x.e,x.e,[]),t.xb(1073742336,r.Ab,r.Ab,[]),t.xb(1073742336,p.n,p.n,[[2,p.s],[2,p.m]]),t.xb(1073742336,m,m,[]),t.xb(1073742336,o,o,[]),t.xb(1024,p.k,(function(){return[[{path:"",component:h}]]}),[])])}))}}]);