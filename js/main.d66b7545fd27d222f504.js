(()=>{"use strict";var e={7497:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n='<main class="app-page"> <div class="content-wrapper"> <div class="app-page__wrapper"> <header></header> <div class="app-page__container"> <aside class="app-page__row app-page__aside"></aside> <article class="app-page__row app-page__article"></article> </div> </div> </div> <span id="prev-nav-anchor" class="app-page__nav-anchor app-page__nav-anchor--left link">{{prevPage}}</span> <span id="next-nav-anchor" class="app-page__nav-anchor app-page__nav-anchor--right link">{{nextPage}}</span> </main> '},1176:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n='<div class="binary-block"> <span class="binary-block__name">{{ name }}</span> <span>{{ value }}</span> </div> '},7974:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n='<a href="{{ link }}" target="_blank"> <div class="certificate-block"> <p class="certificate-block__date">{{ date }}</p> <p class="certificate-block__organization">{{ organization }}</p> <p class="certificate-block__name">{{ name }}</p> </div> </a> '},4235:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n='<a href="{{ link }}" target="_blank"> <div class="contact-block"> <i class="{{ iconClass }} contact-block__icon"></i> <div class="contact-block__info"> <p class="contact-block__name">{{ name }}</p> <p class="contact-block__value">{{ value }}</p> </div> </div> </a> '},9468:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n='<div class="education-block"> <div class="education-block__info"> <p class="education-block__title">{{ title }}</p> <p class="education-block__place">{{ place }}</p> <p class="education-block__location"> <span class="material-symbols-outlined inherit">location_on</span>{{ location }} </p> </div> <div class="education-block__date"> <span class="material-symbols-outlined inherit education-block__date__icon">calendar_today</span> <span>{{ dates }}</span> </div> </div> '},5046:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n='<div class="experience-block"> <div class="experience-block__info"> <div> <h4 class="experience-block__position">{{ position }}</h4> <p class="experience-block__company">{{ company }}</p> </div> <div class="experience-block__date"> <span class="material-symbols-outlined inherit experience-block__date__icon">calendar_today</span> <span>{{ dates }}</span> </div> </div> <ul class="experience-block__summary"></ul> </div> '},5078:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n='<div class="skill-block"> <p class="skill-block__group">{{ group }}:</p> <p class="skill-block__values">{{ values }}</p> </div> '},6860:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n='<p class="text-block">{{ text }}</p> '},2442:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n='<div class="header"> <h2 class="header__title">{{ title }}</h2> <h5 class="header__job">{{ job }}</h5> <p class="header__location"> <span class="material-symbols-outlined inherit"> location_on </span>{{ location }} </p> </div> '},1339:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n='<section class="section"> <h3 class="section__header">{{ header }}</h3> <div class="section__content"></div> </section> '},39:(e,t,o)=>{o.r(t)},7936:(e,t,o)=>{o.r(t)},2620:(e,t,o)=>{o.r(t)},2256:(e,t,o)=>{o.r(t)},4005:(e,t,o)=>{o.r(t)},7725:(e,t,o)=>{o.r(t)},8202:(e,t,o)=>{o.r(t)},824:(e,t,o)=>{o.r(t)},9491:(e,t,o)=>{o.r(t)},9547:(e,t,o)=>{o.r(t)},2966:(e,t,o)=>{o.r(t)},2866:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BASE_DELAY=void 0,t.BASE_DELAY=100},8682:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.component=void 0;t.component=e=>function(t){return class extends t{constructor(...t){super(...t),this.template=e.template}}}},7283:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.log=void 0;t.log=e=>(t,o,n)=>{const r=n.value;n.value=function(...t){return console.log(e||o),r.apply(this,t)}}},7293:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Application=void 0;const n=o(3464),r=o(1885),a=o(2866);t.Application=class{context;rootContainer;pages;modals;router;currentPage;prevPage;currentModal;constructor(e,t){this.context=t,this.rootContainer=e.root,this.pages=e.pages,this.modals=e.modals,this.router=new n.Router((e=>this.openPage(e)),(e=>this.openModal(e)),e.root),this.currentPage=this.initComponent(e.entry),this.prevPage=null,this.currentModal=null,this.onInit()}onInit(){}initComponent(e){return new e(this.router,this.context)}bootstrap(){this.rootContainer.append((0,r.render)(this.currentPage))}openPage(e){-1!==Object.keys(this.pages).indexOf(e)&&(window.scrollTo({top:0}),this.prevPage=this.currentPage,this.currentPage=this.initComponent(this.pages[e]),this.bootstrap(),this.prevPage.close(),this.currentPage.open())}openModal(e){-1!==Object.keys(this.modals).indexOf(e)&&(this.currentModal=this.initComponent(this.modals[e]),this.rootContainer.append((0,r.render)(this.currentModal)),setTimeout((()=>this.currentModal?.open()),a.BASE_DELAY))}}},1815:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Component=void 0;const n=o(7874);t.Component=class{template="<div></div>";node=document.createElement("div");vars(){return{}}compile(){this.node=(0,n.useHtml)(this.template,this.vars())}onInit(){}bindElements(){}inject(){}handleEvents(){}render(){return this.compile(),this.onInit(),this.bindElements(),this.inject(),this.handleEvents(),this.node}}},9506:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;const n=o(9003),r=o(2866);class a extends n.Page{open(){this.node.classList.add(this.activeClass)}close(){this.node.classList.remove(this.activeClass),setTimeout((()=>this.node.remove()),r.BASE_DELAY)}}t.Modal=a},9003:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Page=void 0;const n=o(1815);class r extends n.Component{router;context;activeClass="active";prevClass="anim-prev";nextClass="anim-next";constructor(e,t){super(),this.router=e,this.context=t}open(){const{node:e,activeClass:t,prevClass:o}=this;e.classList.add(t,o),e.addEventListener("animationend",(()=>{e.classList.remove(o)}))}close(){const{node:e,nextClass:t}=this;e.classList.add(t),e.addEventListener("animationend",(()=>{this.onDestroy(),e.remove()}))}onDestroy(){}}t.Page=r},3464:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;t.Router=class{openPage;openModal;rootContainer;constructor(e,t,o){this.openPage=e,this.openModal=t,this.rootContainer=o,this.openPage=e,this.openModal=t,this.rootContainer=o}getRootContainer(){return this.rootContainer}}},6947:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Store=void 0;t.Store=class{constructor(){this.onInit()}onInit(){}}},2784:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Stream=void 0;t.Stream=class{_value;storeKey;actions=[];constructor(e,t){this._value=e,this.storeKey=t,this.storeKey=t,this._value=this.load()||e}get value(){return this._value}set value(e){this._value=e,this.actions.forEach((e=>e(this._value))),this.storeKey&&localStorage.setItem(this.storeKey,JSON.stringify(this._value))}subscribe(e){this.actions.push(e)}unsubscribe(e){this.actions=this.actions.filter((t=>t!==e))}load(){return this.storeKey&&localStorage.getItem(this.storeKey)?JSON.parse(localStorage.getItem(this.storeKey)):null}}},5230:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useBackground=void 0;t.useBackground=(e,t)=>{const o=new Image,n=e;o.src=t,o.onload=()=>{n.style.backgroundImage=`url("${t}")`}}},7874:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useHtml=void 0;t.useHtml=(e,t={})=>{const o=document.createElement("template");return o.innerHTML=Object.keys(t).reduce(((e,o)=>e.replace(new RegExp(`{{( ?| +)${o}( ?| +)}}`,"gi"),t[o].toString())),e),o.content.firstChild}},2680:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useVars=void 0;t.useVars=(e={})=>{Object.keys(e).forEach((t=>{document.documentElement.style.setProperty(t,e[t])}))}},1885:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.bootstrap=void 0,t.bootstrap=function(e){e.bootstrap()},t.render=function(e){return e.render()}},2624:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.render=t.bootstrap=t.useVars=t.useHtml=t.useBackground=t.Stream=t.Store=t.Router=t.Page=t.Modal=t.Component=t.Application=t.log=t.component=void 0;const n=o(8682);Object.defineProperty(t,"component",{enumerable:!0,get:function(){return n.component}});const r=o(7283);Object.defineProperty(t,"log",{enumerable:!0,get:function(){return r.log}});const a=o(7293);Object.defineProperty(t,"Application",{enumerable:!0,get:function(){return a.Application}});const i=o(1815);Object.defineProperty(t,"Component",{enumerable:!0,get:function(){return i.Component}});const s=o(9506);Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return s.Modal}});const c=o(9003);Object.defineProperty(t,"Page",{enumerable:!0,get:function(){return c.Page}});const l=o(3464);Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return l.Router}});const p=o(6947);Object.defineProperty(t,"Store",{enumerable:!0,get:function(){return p.Store}});const d=o(2784);Object.defineProperty(t,"Stream",{enumerable:!0,get:function(){return d.Stream}});const u=o(5230);Object.defineProperty(t,"useBackground",{enumerable:!0,get:function(){return u.useBackground}});const f=o(7874);Object.defineProperty(t,"useHtml",{enumerable:!0,get:function(){return f.useHtml}});const m=o(2680);Object.defineProperty(t,"useVars",{enumerable:!0,get:function(){return m.useVars}});const h=o(1885);Object.defineProperty(t,"bootstrap",{enumerable:!0,get:function(){return h.bootstrap}}),Object.defineProperty(t,"render",{enumerable:!0,get:function(){return h.render}})},206:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AppComponent=void 0;const n=o(2624);class r extends n.Component{}t.AppComponent=r},1412:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getAppConfig=void 0;const n=o(9905),r=o(3615);t.getAppConfig=e=>({entry:(/[&?]page=([^&]+)/.exec(e)?.[0]??"").replace(/[&?]page=/gi,"")===r.PageQuery.MOBILE.toString()?n.MobilePage:n.FullstackPage,modals:{},pages:{[r.PageQuery.FULLSTACK]:n.FullstackPage,[r.PageQuery.MOBILE]:n.MobilePage},root:document.body})},6269:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.appContext=void 0;const n=o(8527);t.appContext={lifecycle:n.lifecycleStore,data:n.dataStore}},9517:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AppModal=void 0;const n=o(2624);class r extends n.Modal{}t.AppModal=r},9962:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const n=o(2624);class r extends n.Application{}t.App=r},1495:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.appContext=t.getAppConfig=t.App=t.AppModal=t.AppPage=t.AppComponent=void 0;const n=o(206);Object.defineProperty(t,"AppComponent",{enumerable:!0,get:function(){return n.AppComponent}});const r=o(8876);Object.defineProperty(t,"AppPage",{enumerable:!0,get:function(){return r.AppPage}});const a=o(9517);Object.defineProperty(t,"AppModal",{enumerable:!0,get:function(){return a.AppModal}});const i=o(9962);Object.defineProperty(t,"App",{enumerable:!0,get:function(){return i.App}});const s=o(1412);Object.defineProperty(t,"getAppConfig",{enumerable:!0,get:function(){return s.getAppConfig}});const c=o(6269);Object.defineProperty(t,"appContext",{enumerable:!0,get:function(){return c.appContext}})},8876:function(e,t,o){var n,r=this&&this.__decorate||function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AppPage=void 0;const i=o(2624),s=a(o(7497));o(39);const c=o(2740);let l=t.AppPage=class extends i.Page{static{n=this}prevPage;nextPage;header=null;asideSections=[];contentSections=[];constructor(e,t,o,n){super(e,t),this.prevPage=o,this.nextPage=n}static SECTION_STRATEGY={binaryBlocks:c.BinaryBlockComponent,skillBlocks:c.SkillBlockComponent,certificateBlocks:c.CertificateBlockComponent,contactBlocks:c.ContactBlockComponent,texts:c.TextBlockComponent,educationBlocks:c.EducationBlockComponent,experienceBlocks:c.ExperienceBlockComponent};static getSectionContent(e){for(const t in this.SECTION_STRATEGY){const o=t;if(e[o])return e[o].map((e=>new this.SECTION_STRATEGY[o](e).render()))}return[]}onInit(){this.context.lifecycle.appInit.value&&(this.node.classList.add(this.activeClass),this.context.lifecycle.toggleAppInit());const e=this.context.data.data.value;this.header=new c.HeaderComponent(e.title,e.job,e.location),this.asideSections.push(...e.aside.map((e=>new c.SectionComponent(e.header,n.getSectionContent(e.content))))),this.contentSections.push(...e.content.map((e=>new c.SectionComponent(e.header,n.getSectionContent(e.content)))))}inject(){this.header&&this.node.querySelector("header")?.append(this.header.render()),this.asideSections.forEach((e=>{this.node.querySelector("aside")?.append(e.render())})),this.contentSections.forEach((e=>{this.node.querySelector("article")?.append(e.render())}))}vars(){return{prevPage:this.prevPage,nextPage:this.nextPage}}get nextNavAnchorListener(){return()=>this.router.openPage(this.nextPage)}get prevNavAnchorListener(){return()=>this.router.openPage(this.prevPage)}handleEvents(){this.node.querySelector("#prev-nav-anchor")?.addEventListener("click",this.prevNavAnchorListener.bind(this)),this.node.querySelector("#next-nav-anchor")?.addEventListener("click",this.nextNavAnchorListener.bind(this))}onDestroy(){this.node.querySelector("#prev-nav-anchor")?.removeEventListener("click",this.prevNavAnchorListener.bind(this)),this.node.querySelector("#next-nav-anchor")?.removeEventListener("click",this.nextNavAnchorListener.bind(this))}};t.AppPage=l=n=r([(0,i.component)({template:s.default})],l)},9188:function(e,t,o){var n=this&&this.__decorate||function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BinaryBlockComponent=void 0;const a=o(2624),i=o(1495),s=r(o(1176));o(7936);let c=t.BinaryBlockComponent=class extends i.AppComponent{props;constructor(e){super(),this.props=e}vars(){return this.props}};t.BinaryBlockComponent=c=n([(0,a.component)({template:s.default})],c)},4542:function(e,t,o){var n=this&&this.__decorate||function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CertificateBlockComponent=void 0;const a=o(2624),i=o(1495),s=r(o(7974));o(2620);let c=t.CertificateBlockComponent=class extends i.AppComponent{props;constructor(e){super(),this.props=e}vars(){return this.props}};t.CertificateBlockComponent=c=n([(0,a.component)({template:s.default})],c)},5485:function(e,t,o){var n=this&&this.__decorate||function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ContactBlockComponent=void 0;const a=o(2624),i=o(1495),s=r(o(4235));o(2256);let c=t.ContactBlockComponent=class extends i.AppComponent{props;constructor(e){super(),this.props=e}vars(){return this.props}};t.ContactBlockComponent=c=n([(0,a.component)({template:s.default})],c)},177:function(e,t,o){var n=this&&this.__decorate||function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.EducationBlockComponent=void 0;const a=o(2624),i=o(1495),s=r(o(9468));o(4005);let c=t.EducationBlockComponent=class extends i.AppComponent{props;constructor(e){super(),this.props=e}vars(){return this.props}};t.EducationBlockComponent=c=n([(0,a.component)({template:s.default})],c)},7846:function(e,t,o){var n=this&&this.__decorate||function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ExperienceBlockComponent=void 0;const a=o(2624),i=o(1495),s=r(o(5046));o(7725);let c=t.ExperienceBlockComponent=class extends i.AppComponent{props;constructor(e){super(),this.props=e}vars(){return{company:this.props.company,position:this.props.position,dates:this.props.dates}}inject(){this.node.querySelector("ul")?.append(...this.props.summary.map((e=>(0,a.useHtml)("<li>{{text}}</li>",{text:e}))))}};t.ExperienceBlockComponent=c=n([(0,a.component)({template:s.default})],c)},183:function(e,t,o){var n=this&&this.__decorate||function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SkillBlockComponent=void 0;const a=o(2624),i=o(1495),s=r(o(5078));o(8202);let c=t.SkillBlockComponent=class extends i.AppComponent{props;constructor(e){super(),this.props=e}vars(){return{group:this.props.group,values:this.props.values.join(", ")}}};t.SkillBlockComponent=c=n([(0,a.component)({template:s.default})],c)},8965:function(e,t,o){var n=this&&this.__decorate||function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TextBlockComponent=void 0;const a=o(2624),i=o(1495),s=r(o(6860));o(824);let c=t.TextBlockComponent=class extends i.AppComponent{text;constructor(e){super(),this.text=e}vars(){return{text:this.text}}};t.TextBlockComponent=c=n([(0,a.component)({template:s.default})],c)},7552:function(e,t,o){var n=this&&this.__decorate||function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderComponent=void 0;const a=o(2624),i=o(1495),s=r(o(2442));o(9491);let c=t.HeaderComponent=class extends i.AppComponent{title;job;location;constructor(e,t,o){super(),this.title=e,this.job=t,this.location=o}vars(){return{title:this.title,job:this.job,location:this.location}}};t.HeaderComponent=c=n([(0,a.component)({template:s.default})],c)},2740:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ExperienceBlockComponent=t.EducationBlockComponent=t.TextBlockComponent=t.ContactBlockComponent=t.CertificateBlockComponent=t.SkillBlockComponent=t.BinaryBlockComponent=t.SectionComponent=t.HeaderComponent=void 0;const n=o(7552);Object.defineProperty(t,"HeaderComponent",{enumerable:!0,get:function(){return n.HeaderComponent}});const r=o(2955);Object.defineProperty(t,"SectionComponent",{enumerable:!0,get:function(){return r.SectionComponent}});const a=o(9188);Object.defineProperty(t,"BinaryBlockComponent",{enumerable:!0,get:function(){return a.BinaryBlockComponent}});const i=o(183);Object.defineProperty(t,"SkillBlockComponent",{enumerable:!0,get:function(){return i.SkillBlockComponent}});const s=o(4542);Object.defineProperty(t,"CertificateBlockComponent",{enumerable:!0,get:function(){return s.CertificateBlockComponent}});const c=o(5485);Object.defineProperty(t,"ContactBlockComponent",{enumerable:!0,get:function(){return c.ContactBlockComponent}});const l=o(8965);Object.defineProperty(t,"TextBlockComponent",{enumerable:!0,get:function(){return l.TextBlockComponent}});const p=o(177);Object.defineProperty(t,"EducationBlockComponent",{enumerable:!0,get:function(){return p.EducationBlockComponent}});const d=o(7846);Object.defineProperty(t,"ExperienceBlockComponent",{enumerable:!0,get:function(){return d.ExperienceBlockComponent}})},2955:function(e,t,o){var n=this&&this.__decorate||function(e,t,o,n){var r,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,o,i):r(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SectionComponent=void 0;const a=o(2624),i=o(1495),s=r(o(1339));o(9547);let c=t.SectionComponent=class extends i.AppComponent{header;content;constructor(e,t){super(),this.header=e,this.content=t}vars(){return{header:this.header}}inject(){this.node.querySelector(".section__content")?.append(...this.content)}};t.SectionComponent=c=n([(0,a.component)({template:s.default})],c)},7106:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MOBILE_DATA=t.FULLSTACK_DATA=void 0;const o={header:"languages",content:{binaryBlocks:[{name:"English",value:"A2"},{name:"Russian",value:"native"}]}},n={header:"contacts",content:{contactBlocks:[{name:"GitHub",link:"https://www.github.com/evgenii-shcherbakov",iconClass:"fa-brands fa-github",value:"evgenii-shcherbakov"},{name:"LinkedIn",link:"https://www.linkedin.com/in/iipekolict",iconClass:"fa-brands fa-linkedin",value:"https://www.linkedin.com/in/iipekolict"},{name:"GMail",link:"mailto:iipekolict@gmail.com",iconClass:"fa-solid fa-envelope",value:"iipekolict@gmail.com"}]}},r={header:"education",content:{educationBlocks:[{title:"Programmable mobile systems",place:"Belarusian State University of Informatics and Radioelectronics",location:"Minsk",dates:"Sep 2019 - Fed 2023"},{title:"Electronic computing fascilities",place:"Minsk Radio Engineering College",location:"Minsk",dates:"Sep 2015 - Jun 2019"}]}},a={title:"Evgenii Shcherbakov",location:"Tbilisi, Georgia"};t.FULLSTACK_DATA={...a,job:"Full-Stack developer",aside:[{header:"skills",content:{skillBlocks:[{group:"programming languages",values:["Typescript","Kotlin"]},{group:"frameworks",values:["Express","Nest.js","Angular","Next.js","Spring Boot","Ktor"]},{group:"databases",values:["MongoDB","PostgreSQL","Firebase","TypeORM","Hibernate ORM","KMongo ODM"]},{group:"UI",values:["Material UI","Bootstrap","Styled components"]},{group:"state management",values:["MobX","RTK Query","RxJs"]},{group:"other",values:["OpenSearch","Docker","Socket.io","Jest","JUnit","Bash","Swagger"]}]}},{header:"certifications",content:{certificateBlocks:[{organization:"The Rolling Scopes School",name:"JAVASCRIPT/FRONTEND 2021Q3",date:"Mar 2022",link:"https://app.rs.school/certificate/jzy3ax0c"}]}},o,n],content:[{header:"summary",content:{texts:["Full-stack software engineer with 2+ years of experience in developing and delivering \n          high-quality software applications. Proven ability to work independently and as part of a \n          team to meet deadlines and deliver projects on time and within budget. Strong problem-solving \n          and analytical skills."]}},r,{header:"experience",content:{experienceBlocks:[{company:"yumasoft inc.",position:"Node.js developer",summary:["improved backend performance and stability using Promise.all-based emulation of \n                multithreading with clever type inference via generics","implemented more useful and declarative custom send email system using reflect-metadata \n                and strategy design pattern with custom like-handlebars render template system","migrated project persistence layer to repository pattern and improved it using \n                mongoose-based custom abstract ODM with elements from Hibernate and TypeORM","worked with Socket.io and OpenSearch","implemented custom mockingoose-based testing flow for allow persistence layer testing","implemented custom backend state system using request express object for caching most \n                used database entities (user, company, etc.) across middlewares for reduce extra \n                database requests","worked with Moongoose and MongoDB aggregation","worked with AWS infrastructure for manage logs, control deployment pipelines and manage\n                environment data"],dates:"Fed 2022 - current"},{company:"freelance",position:"Full-Stack developer",summary:["worked with Nest.js, Express, Spring Boot and Ktor for build server REST-applications","used Swagger for define API structure and endpoints params","worked with React library and Angular for build effective and fast frontend applications","used Next.js framework for implement SSR and SSG in some applications, and also Next.js \n                API helpers for define simple server-side application endpoints","used Bootstrap, Material UI and Styled Components for make applications UI more \n                user-friendly","worked with Docker, Bash scripts and Github Actions for build web applications CI/CD and \n                for npm / Maven Central package publishing","worked with MobX, RTK Query and RxJs for manage application state, also used RxJs library \n                in Nest.js applications","used Firebase services in web applications (Firebase Storage, FireStore, etc.)","used PostgreSQL database and Hibernate / TypeORM for build applications persistence layers","used Webpack bundler and have knowledge of how configure and use it","used reflect-metadata, TypeScript decorators and Kotlin reflection for create my own \n                declarative frameworks and npm / Maven Central libraries"],dates:"2021 - Fed 2022"}]}}]},t.MOBILE_DATA={...a,job:"Mobile developer",aside:[{header:"skills",content:{skillBlocks:[{group:"programming languages",values:["Typescript","Kotlin","Dart"]},{group:"frameworks",values:["Ionic","Android framework","Flutter","Jetpack Compose"]},{group:"databases",values:["MongoDB","Firebase","SQLite"]},{group:"state management",values:["ViewModel","Provider","RxJs"]},{group:"DI",values:["Koin","Dagger","Injectable"]},{group:"other",values:["Retrofit","Coroutines","Dio","JUnit","Bash"]}]}},o,n],content:[{header:"summary",content:{texts:["Software Engineer with 2+ years of experience in developing mobile applications using Flutter, \n            Android, and Jetpack Compose. Proven ability to work independently and as part of a team \n            to meet deadlines and deliver high-quality products. Strong problem-solving and analytical skills."]}},r,{header:"experience",content:{experienceBlocks:[{company:"freelance",position:"Mobile developer",summary:["worked with Android framework for build Android applications using MVVM and Clean \n                Architecture","worked with Jetpack Compose for build application UI using declarative way","worked with Flutter and Ionic for build cross-platform mobile applications","used Koin and Dagger in Kotlin, and Injectable in Dart for implement DI in mobile \n                applications","used Provider for state management in Flutter applications and RxJs in Ionic applications","worked with Bash scripts and Github Actions for build web applications CI/CD and for \n                npm / Maven Central package publishing","used Firebase services in mobile applications (Firebase Storage, FireStore, etc.)","worked with SQLite database in Android applications","worked with ViewBinding, ViewPager (both 1 and 2 version), DiffUtils, AndroidViewModel, \n                Coroutines, Retrofit during Android applications development"],dates:"2021 - current"}]}}]}},3615:(e,t)=>{var o;Object.defineProperty(t,"__esModule",{value:!0}),t.PageQuery=void 0,function(e){e.FULLSTACK="fullstack",e.MOBILE="mobile"}(o||(t.PageQuery=o={}))},9156:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FullstackPage=void 0;const n=o(1495),r=o(3615);class a extends n.AppPage{constructor(e,t){super(e,t,r.PageQuery.MOBILE,r.PageQuery.MOBILE)}onInit(){this.context.data.load(r.PageQuery.FULLSTACK),super.onInit()}}t.FullstackPage=a},9905:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MobilePage=t.FullstackPage=void 0;const n=o(9156);Object.defineProperty(t,"FullstackPage",{enumerable:!0,get:function(){return n.FullstackPage}});const r=o(5635);Object.defineProperty(t,"MobilePage",{enumerable:!0,get:function(){return r.MobilePage}})},5635:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MobilePage=void 0;const n=o(1495),r=o(3615);class a extends n.AppPage{constructor(e,t){super(e,t,r.PageQuery.FULLSTACK,r.PageQuery.FULLSTACK)}onInit(){this.context.data.load(r.PageQuery.MOBILE),super.onInit()}}t.MobilePage=a},6446:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DataStore=void 0;const n=o(2624),r=o(3615),a=o(7106);class i extends n.Store{defaultState=a.FULLSTACK_DATA;data=new n.Stream(this.defaultState);load(e){this.data.value=e===r.PageQuery.MOBILE?a.MOBILE_DATA:a.FULLSTACK_DATA}}t.DataStore=i},8527:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.dataStore=t.lifecycleStore=void 0;const n=o(1656),r=o(6446);t.lifecycleStore=new n.LifecycleStore,t.dataStore=new r.DataStore},1656:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LifecycleStore=void 0;const n=o(2624);class r extends n.Store{defaultState;appInit=new n.Stream(!0);toggleAppInit(){this.appInit.value=!this.appInit.value}}t.LifecycleStore=r}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};(()=>{const e=o(2624),t=o(1495);o(2966),(0,e.bootstrap)(new t.App((0,t.getAppConfig)(location.search),t.appContext))})()})();