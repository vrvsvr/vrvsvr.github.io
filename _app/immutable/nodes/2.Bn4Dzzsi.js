var UF=Object.defineProperty;var NF=(e,A,I)=>A in e?UF(e,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):e[A]=I;var LI=(e,A,I)=>(NF(e,typeof A!="symbol"?A+"":A,I),I);import{n as XI,P as RF,Q as eo,J as ss,E as FF,r as mF,R as $g,S as ng,T as _g,s as TI,c as NI,u as RI,g as FI,b as mI,q as WI,C as Hr,e as xg,f as Tg,h as wt,k as zA,y as ZI,m as CI,U as KF,x as se,A as _B,d as lI,v as zI,l as DI,V as uC,W as mi,X as Ut,Y as JF,Z as un,_ as qF,$ as Ow,a0 as LF,t as vB,j as OB,p as dr,a1 as Pw,a as YE,a2 as UG,a3 as wr,a4 as Pt,o as lg,a5 as YF}from"../chunks/scheduler.BBAaKyga.js";import{g as dg,a as sA,c as wg,t as BA,S as bI,i as _I,b as YA,d as HA,m as xA,e as TA,f as pr}from"../chunks/index.BzWmcInT.js";import{d as xr,w as vg,r as MS}from"../chunks/index.xnTPd6Nm.js";const NG=typeof window<"u";let Zw=NG?()=>window.performance.now():()=>Date.now(),kS=NG?e=>requestAnimationFrame(e):XI;function HF(e){kS=e}const hQ=new Set;function RG(e){hQ.forEach(A=>{A.c(e)||(hQ.delete(A),A.f())}),hQ.size!==0&&kS(RG)}function xF(e){let A;return hQ.size===0&&kS(RG),{promise:new Promise(I=>{hQ.add(A={c:e,f:I})}),abort(){hQ.delete(A)}}}function Ww(e,A){const I=A.token={};function g(i,C,t,B){if(A.token!==I)return;A.resolved=B;let o=A.ctx;t!==void 0&&(o=o.slice(),o[t]=B);const Q=i&&(A.current=i)(o);let n=!1;A.block&&(A.blocks?A.blocks.forEach((E,s)=>{s!==C&&E&&(dg(),sA(E,1,1,()=>{A.blocks[s]===E&&(A.blocks[s]=null)}),wg())}):A.block.d(1),Q.c(),BA(Q,1),Q.m(A.mount(),A.anchor),n=!0),A.block=Q,A.blocks&&(A.blocks[C]=Q),n&&FF()}if(RF(e)){const i=eo();if(e.then(C=>{ss(i),g(A.then,1,A.value,C),ss(null)},C=>{if(ss(i),g(A.catch,2,A.error,C),ss(null),!A.hasCatch)throw C}),A.current!==A.pending)return g(A.pending,0),!0}else{if(A.current!==A.then)return g(A.then,1,A.value,e),!0;A.resolved=e}}function TF(e,A,I){const g=A.slice(),{resolved:i}=e;e.current===e.then&&(g[e.value]=i),e.current===e.catch&&(g[e.error]=i),e.block.p(g,I)}function Vw(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function bF(e,A){sA(e,1,1,()=>{A.delete(e.key)})}function _F(e,A,I,g,i,C,t,B,o,Q,n,E){let s=e.length,a=C.length,r=s;const l={};for(;r--;)l[e[r].key]=r;const c=[],h=new Map,S=new Map,D=[];for(r=a;r--;){const y=E(i,C,r),M=I(y);let w=t.get(M);w?g&&D.push(()=>w.p(y,A)):(w=Q(M,y),w.c()),h.set(M,c[r]=w),M in l&&S.set(M,Math.abs(r-l[M]))}const d=new Set,f=new Set;function u(y){BA(y,1),y.m(B,n),t.set(y.key,y),n=y.first,a--}for(;s&&a;){const y=c[a-1],M=e[s-1],w=y.key,p=M.key;y===M?(n=y.first,s--,a--):h.has(p)?!t.has(w)||d.has(w)?u(y):f.has(p)?s--:S.get(w)>S.get(p)?(f.add(w),u(y)):(d.add(p),s--):(o(M,t),s--)}for(;s--;){const y=e[s];h.has(y.key)||o(y,t)}for(;a;)u(c[a-1]);return mF(D),c}function Tr(e,A){const I={},g={},i={$$scope:1};let C=e.length;for(;C--;){const t=e[C],B=A[C];if(B){for(const o in t)o in B||(g[o]=1);for(const o in B)i[o]||(I[o]=B[o],i[o]=1);e[C]=B}else for(const o in t)i[o]=1}for(const t in g)t in I||(I[t]=void 0);return I}function US(e){return typeof e=="object"&&e!==null?e:{}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const HE="163",vF={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},OF={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FG=0,Nl=1,mG=2,PF=3,ZF=0,NS=1,br=2,$C=3,oe=0,_i=1,ie=2,Je=0,KB=1,Rl=2,Fl=3,ml=4,KG=5,St=100,JG=101,qG=102,LG=103,YG=104,HG=200,xG=201,TG=202,bG=203,ur=204,yr=205,_G=206,vG=207,OG=208,PG=209,ZG=210,WG=211,VG=212,zG=213,jG=214,XG=0,$G=1,AM=2,bn=3,IM=4,gM=5,iM=6,CM=7,xE=0,eM=1,tM=2,qe=0,BM=1,oM=2,QM=3,RS=4,nM=5,EM=6,sM=7,Kl="attached",aM="detached",_r=300,be=301,Nt=302,_n=303,vn=304,LQ=306,On=1e3,dC=1001,Pn=1002,hi=1003,FS=1004,WF=1004,tQ=1005,VF=1005,Vg=1006,mn=1007,zF=1007,ee=1008,jF=1008,Le=1009,rM=1010,hM=1011,mS=1012,KS=1013,PB=1014,wC=1015,Zn=1016,JS=1017,qS=1018,YQ=1020,cM=35902,lM=1021,DM=1022,nC=1023,SM=1024,dM=1025,JB=1026,wQ=1027,LS=1028,YS=1029,wM=1030,HS=1031,xS=1033,Cr=33776,er=33777,tr=33778,Br=33779,Jl=35840,ql=35841,Ll=35842,Yl=35843,TS=36196,Hl=37492,xl=37496,Tl=37808,bl=37809,_l=37810,vl=37811,Ol=37812,Pl=37813,Zl=37814,Wl=37815,Vl=37816,zl=37817,jl=37818,Xl=37819,$l=37820,AD=37821,or=36492,ID=36494,gD=36495,pM=36283,iD=36284,CD=36285,eD=36286,uM=2200,yM=2201,fM=2202,Wn=2300,Vn=2301,Qr=2302,uB=2400,yB=2401,zn=2402,vr=2500,bS=2501,XF=0,$F=1,Am=2,GM=3200,MM=3201,qt=0,kM=1,Ue="",DC="srgb",We="srgb-linear",Or="display-p3",TE="display-p3-linear",jn="linear",sg="srgb",Xn="rec709",$n="p3",Im=0,lB=7680,gm=7681,im=7682,Cm=7683,em=34055,tm=34056,Bm=5386,om=512,Qm=513,nm=514,Em=515,sm=516,am=517,rm=518,tD=519,UM=512,NM=513,RM=514,_S=515,FM=516,mM=517,KM=518,JM=519,AE=35044,BD=35048,hm=35040,cm=35045,lm=35049,Dm=35041,Sm=35046,dm=35050,wm=35042,pm="100",oD="300 es",te=2e3,IE=2001;let Ve=class{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const i=this._listeners[A];if(i!==void 0){const C=i.indexOf(I);C!==-1&&i.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const i=g.slice(0);for(let C=0,t=i.length;C<t;C++)i[C].call(this,A);A.target=null}}};const fi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zw=1234567;const qB=Math.PI/180,pQ=180/Math.PI;function EC(){const e=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(fi[e&255]+fi[e>>8&255]+fi[e>>16&255]+fi[e>>24&255]+"-"+fi[A&255]+fi[A>>8&255]+"-"+fi[A>>16&15|64]+fi[A>>24&255]+"-"+fi[I&63|128]+fi[I>>8&255]+"-"+fi[I>>16&255]+fi[I>>24&255]+fi[g&255]+fi[g>>8&255]+fi[g>>16&255]+fi[g>>24&255]).toLowerCase()}function mg(e,A,I){return Math.max(A,Math.min(I,e))}function vS(e,A){return(e%A+A)%A}function um(e,A,I,g,i){return g+(e-A)*(i-g)/(I-A)}function ym(e,A,I){return e!==A?(I-e)/(A-e):0}function Kn(e,A,I){return(1-I)*e+I*A}function fm(e,A,I,g){return Kn(e,A,1-Math.exp(-I*g))}function Gm(e,A=1){return A-Math.abs(vS(e,A*2)-A)}function Mm(e,A,I){return e<=A?0:e>=I?1:(e=(e-A)/(I-A),e*e*(3-2*e))}function km(e,A,I){return e<=A?0:e>=I?1:(e=(e-A)/(I-A),e*e*e*(e*(e*6-15)+10))}function Um(e,A){return e+Math.floor(Math.random()*(A-e+1))}function Nm(e,A){return e+Math.random()*(A-e)}function Rm(e){return e*(.5-Math.random())}function Fm(e){e!==void 0&&(zw=e);let A=zw+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function mm(e){return e*qB}function Km(e){return e*pQ}function Jm(e){return(e&e-1)===0&&e!==0}function qm(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Lm(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Ym(e,A,I,g,i){const C=Math.cos,t=Math.sin,B=C(I/2),o=t(I/2),Q=C((A+g)/2),n=t((A+g)/2),E=C((A-g)/2),s=t((A-g)/2),a=C((g-A)/2),r=t((g-A)/2);switch(i){case"XYX":e.set(B*n,o*E,o*s,B*Q);break;case"YZY":e.set(o*s,B*n,o*E,B*Q);break;case"ZXZ":e.set(o*E,o*s,B*n,B*Q);break;case"XZX":e.set(B*n,o*r,o*a,B*Q);break;case"YXY":e.set(o*a,B*n,o*r,B*Q);break;case"ZYZ":e.set(o*r,o*a,B*n,B*Q);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function bi(e,A){switch(A.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function pI(e,A){switch(A.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const Hm={DEG2RAD:qB,RAD2DEG:pQ,generateUUID:EC,clamp:mg,euclideanModulo:vS,mapLinear:um,inverseLerp:ym,lerp:Kn,damp:fm,pingpong:Gm,smoothstep:Mm,smootherstep:km,randInt:Um,randFloat:Nm,randFloatSpread:Rm,seededRandom:Fm,degToRad:mm,radToDeg:Km,isPowerOfTwo:Jm,ceilPowerOfTwo:qm,floorPowerOfTwo:Lm,setQuaternionFromProperEuler:Ym,normalize:pI,denormalize:bi};let NA=class qM{constructor(A=0,I=0){qM.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,i=A.elements;return this.x=i[0]*I+i[3]*g+i[6],this.y=i[1]*I+i[4]*g+i[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(mg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),i=Math.sin(I),C=this.x-A.x,t=this.y-A.y;return this.x=C*g-t*i+A.x,this.y=C*i+t*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},GI=class LM{constructor(A,I,g,i,C,t,B,o,Q){LM.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,i,C,t,B,o,Q)}set(A,I,g,i,C,t,B,o,Q){const n=this.elements;return n[0]=A,n[1]=i,n[2]=B,n[3]=I,n[4]=C,n[5]=o,n[6]=g,n[7]=t,n[8]=Q,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,i=I.elements,C=this.elements,t=g[0],B=g[3],o=g[6],Q=g[1],n=g[4],E=g[7],s=g[2],a=g[5],r=g[8],l=i[0],c=i[3],h=i[6],S=i[1],D=i[4],d=i[7],f=i[2],u=i[5],y=i[8];return C[0]=t*l+B*S+o*f,C[3]=t*c+B*D+o*u,C[6]=t*h+B*d+o*y,C[1]=Q*l+n*S+E*f,C[4]=Q*c+n*D+E*u,C[7]=Q*h+n*d+E*y,C[2]=s*l+a*S+r*f,C[5]=s*c+a*D+r*u,C[8]=s*h+a*d+r*y,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],i=A[2],C=A[3],t=A[4],B=A[5],o=A[6],Q=A[7],n=A[8];return I*t*n-I*B*Q-g*C*n+g*B*o+i*C*Q-i*t*o}invert(){const A=this.elements,I=A[0],g=A[1],i=A[2],C=A[3],t=A[4],B=A[5],o=A[6],Q=A[7],n=A[8],E=n*t-B*Q,s=B*o-n*C,a=Q*C-t*o,r=I*E+g*s+i*a;if(r===0)return this.set(0,0,0,0,0,0,0,0,0);const l=1/r;return A[0]=E*l,A[1]=(i*Q-n*g)*l,A[2]=(B*g-i*t)*l,A[3]=s*l,A[4]=(n*I-i*o)*l,A[5]=(i*C-B*I)*l,A[6]=a*l,A[7]=(g*o-Q*I)*l,A[8]=(t*I-g*C)*l,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,i,C,t,B){const o=Math.cos(C),Q=Math.sin(C);return this.set(g*o,g*Q,-g*(o*t+Q*B)+t+A,-i*Q,i*o,-i*(-Q*t+o*B)+B+I,0,0,1),this}scale(A,I){return this.premultiply(Xh.makeScale(A,I)),this}rotate(A){return this.premultiply(Xh.makeRotation(-A)),this}translate(A,I){return this.premultiply(Xh.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let i=0;i<9;i++)if(I[i]!==g[i])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}};const Xh=new GI;function YM(e){for(let A=e.length-1;A>=0;--A)if(e[A]>=65535)return!0;return!1}const xm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function BQ(e,A){return new xm[e](A)}function gE(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function HM(){const e=gE("canvas");return e.style.display="block",e}const jw={};function xM(e){e in jw||(jw[e]=!0,console.warn(e))}const Xw=new GI().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$w=new GI().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),as={[We]:{transfer:jn,primaries:Xn,toReference:e=>e,fromReference:e=>e},[DC]:{transfer:sg,primaries:Xn,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[TE]:{transfer:jn,primaries:$n,toReference:e=>e.applyMatrix3($w),fromReference:e=>e.applyMatrix3(Xw)},[Or]:{transfer:sg,primaries:$n,toReference:e=>e.convertSRGBToLinear().applyMatrix3($w),fromReference:e=>e.applyMatrix3(Xw).convertLinearToSRGB()}},Tm=new Set([We,TE]),gg={enabled:!0,_workingColorSpace:We,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!Tm.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,A,I){if(this.enabled===!1||A===I||!A||!I)return e;const g=as[A].toReference,i=as[I].fromReference;return i(g(e))},fromWorkingColorSpace:function(e,A){return this.convert(e,this._workingColorSpace,A)},toWorkingColorSpace:function(e,A){return this.convert(e,A,this._workingColorSpace)},getPrimaries:function(e){return as[e].primaries},getTransfer:function(e){return e===Ue?jn:as[e].transfer}};function cQ(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function $h(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let so,TM=class{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{so===void 0&&(so=gE("canvas")),so.width=A.width,so.height=A.height;const g=so.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=so}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=gE("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const i=g.getImageData(0,0,A.width,A.height),C=i.data;for(let t=0;t<C.length;t++)C[t]=cQ(C[t]/255)*255;return g.putImageData(i,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(cQ(I[g]/255)*255):I[g]=cQ(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}},bm=0,fB=class{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=EC(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},i=this.data;if(i!==null){let C;if(Array.isArray(i)){C=[];for(let t=0,B=i.length;t<B;t++)i[t].isDataTexture?C.push(Ac(i[t].image)):C.push(Ac(i[t]))}else C=Ac(i);g.url=C}return I||(A.images[this.uuid]=g),g}};function Ac(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?TM.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _m=0,ci=class nr extends Ve{constructor(A=nr.DEFAULT_IMAGE,I=nr.DEFAULT_MAPPING,g=dC,i=dC,C=Vg,t=ee,B=nC,o=Le,Q=nr.DEFAULT_ANISOTROPY,n=Ue){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=EC(),this.name="",this.source=new fB(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=i,this.magFilter=C,this.minFilter=t,this.anisotropy=Q,this.format=B,this.internalFormat=null,this.type=o,this.offset=new NA(0,0),this.repeat=new NA(1,1),this.center=new NA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new GI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=n,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==_r)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case On:A.x=A.x-Math.floor(A.x);break;case dC:A.x=A.x<0?0:1;break;case Pn:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case On:A.y=A.y-Math.floor(A.y);break;case dC:A.y=A.y<0?0:1;break;case Pn:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}};ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=_r;ci.DEFAULT_ANISOTROPY=1;let Qg=class bM{constructor(A=0,I=0,g=0,i=1){bM.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=i}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,i){return this.x=A,this.y=I,this.z=g,this.w=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,i=this.z,C=this.w,t=A.elements;return this.x=t[0]*I+t[4]*g+t[8]*i+t[12]*C,this.y=t[1]*I+t[5]*g+t[9]*i+t[13]*C,this.z=t[2]*I+t[6]*g+t[10]*i+t[14]*C,this.w=t[3]*I+t[7]*g+t[11]*i+t[15]*C,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,i,C;const o=A.elements,Q=o[0],n=o[4],E=o[8],s=o[1],a=o[5],r=o[9],l=o[2],c=o[6],h=o[10];if(Math.abs(n-s)<.01&&Math.abs(E-l)<.01&&Math.abs(r-c)<.01){if(Math.abs(n+s)<.1&&Math.abs(E+l)<.1&&Math.abs(r+c)<.1&&Math.abs(Q+a+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const D=(Q+1)/2,d=(a+1)/2,f=(h+1)/2,u=(n+s)/4,y=(E+l)/4,M=(r+c)/4;return D>d&&D>f?D<.01?(g=0,i=.707106781,C=.707106781):(g=Math.sqrt(D),i=u/g,C=y/g):d>f?d<.01?(g=.707106781,i=0,C=.707106781):(i=Math.sqrt(d),g=u/i,C=M/i):f<.01?(g=.707106781,i=.707106781,C=0):(C=Math.sqrt(f),g=y/C,i=M/C),this.set(g,i,C,I),this}let S=Math.sqrt((c-r)*(c-r)+(E-l)*(E-l)+(s-n)*(s-n));return Math.abs(S)<.001&&(S=1),this.x=(c-r)/S,this.y=(E-l)/S,this.z=(s-n)/S,this.w=Math.acos((Q+a+h-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_M=class extends Ve{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new Qg(0,0,A,I),this.scissorTest=!1,this.viewport=new Qg(0,0,A,I);const i={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vg,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},g);const C=new ci(i,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);C.flipY=!1,C.generateMipmaps=g.generateMipmaps,C.internalFormat=g.internalFormat,this.textures=[];const t=g.count;for(let B=0;B<t;B++)this.textures[B]=C.clone(),this.textures[B].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let i=0,C=this.textures.length;i<C;i++)this.textures[i].image.width=A,this.textures[i].image.height=I,this.textures[i].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,i=A.textures.length;g<i;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new fB(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},LC=class extends _M{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}},Pr=class extends ci{constructor(A=null,I=1,g=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=dC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vm=class extends LC{constructor(A=1,I=1,g=1,i={}){super(A,I,i),this.isWebGLArrayRenderTarget=!0,this.depth=g,this.texture=new Pr(null,A,I,g),this.texture.isRenderTargetTexture=!0}},OS=class extends ci{constructor(A=null,I=1,g=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:i},this.magFilter=hi,this.minFilter=hi,this.wrapR=dC,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Om=class extends LC{constructor(A=1,I=1,g=1,i={}){super(A,I,i),this.isWebGL3DRenderTarget=!0,this.depth=g,this.texture=new OS(null,A,I,g),this.texture.isRenderTargetTexture=!0}},qg=class{constructor(A=0,I=0,g=0,i=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=i}static slerpFlat(A,I,g,i,C,t,B){let o=g[i+0],Q=g[i+1],n=g[i+2],E=g[i+3];const s=C[t+0],a=C[t+1],r=C[t+2],l=C[t+3];if(B===0){A[I+0]=o,A[I+1]=Q,A[I+2]=n,A[I+3]=E;return}if(B===1){A[I+0]=s,A[I+1]=a,A[I+2]=r,A[I+3]=l;return}if(E!==l||o!==s||Q!==a||n!==r){let c=1-B;const h=o*s+Q*a+n*r+E*l,S=h>=0?1:-1,D=1-h*h;if(D>Number.EPSILON){const f=Math.sqrt(D),u=Math.atan2(f,h*S);c=Math.sin(c*u)/f,B=Math.sin(B*u)/f}const d=B*S;if(o=o*c+s*d,Q=Q*c+a*d,n=n*c+r*d,E=E*c+l*d,c===1-B){const f=1/Math.sqrt(o*o+Q*Q+n*n+E*E);o*=f,Q*=f,n*=f,E*=f}}A[I]=o,A[I+1]=Q,A[I+2]=n,A[I+3]=E}static multiplyQuaternionsFlat(A,I,g,i,C,t){const B=g[i],o=g[i+1],Q=g[i+2],n=g[i+3],E=C[t],s=C[t+1],a=C[t+2],r=C[t+3];return A[I]=B*r+n*E+o*a-Q*s,A[I+1]=o*r+n*s+Q*E-B*a,A[I+2]=Q*r+n*a+B*s-o*E,A[I+3]=n*r-B*E-o*s-Q*a,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,i){return this._x=A,this._y=I,this._z=g,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,i=A._y,C=A._z,t=A._order,B=Math.cos,o=Math.sin,Q=B(g/2),n=B(i/2),E=B(C/2),s=o(g/2),a=o(i/2),r=o(C/2);switch(t){case"XYZ":this._x=s*n*E+Q*a*r,this._y=Q*a*E-s*n*r,this._z=Q*n*r+s*a*E,this._w=Q*n*E-s*a*r;break;case"YXZ":this._x=s*n*E+Q*a*r,this._y=Q*a*E-s*n*r,this._z=Q*n*r-s*a*E,this._w=Q*n*E+s*a*r;break;case"ZXY":this._x=s*n*E-Q*a*r,this._y=Q*a*E+s*n*r,this._z=Q*n*r+s*a*E,this._w=Q*n*E-s*a*r;break;case"ZYX":this._x=s*n*E-Q*a*r,this._y=Q*a*E+s*n*r,this._z=Q*n*r-s*a*E,this._w=Q*n*E+s*a*r;break;case"YZX":this._x=s*n*E+Q*a*r,this._y=Q*a*E+s*n*r,this._z=Q*n*r-s*a*E,this._w=Q*n*E-s*a*r;break;case"XZY":this._x=s*n*E-Q*a*r,this._y=Q*a*E-s*n*r,this._z=Q*n*r+s*a*E,this._w=Q*n*E+s*a*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+t)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,i=Math.sin(g);return this._x=A.x*i,this._y=A.y*i,this._z=A.z*i,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],i=I[4],C=I[8],t=I[1],B=I[5],o=I[9],Q=I[2],n=I[6],E=I[10],s=g+B+E;if(s>0){const a=.5/Math.sqrt(s+1);this._w=.25/a,this._x=(n-o)*a,this._y=(C-Q)*a,this._z=(t-i)*a}else if(g>B&&g>E){const a=2*Math.sqrt(1+g-B-E);this._w=(n-o)/a,this._x=.25*a,this._y=(i+t)/a,this._z=(C+Q)/a}else if(B>E){const a=2*Math.sqrt(1+B-g-E);this._w=(C-Q)/a,this._x=(i+t)/a,this._y=.25*a,this._z=(o+n)/a}else{const a=2*Math.sqrt(1+E-g-B);this._w=(t-i)/a,this._x=(C+Q)/a,this._y=(o+n)/a,this._z=.25*a}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(mg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const i=Math.min(1,I/g);return this.slerp(A,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,i=A._y,C=A._z,t=A._w,B=I._x,o=I._y,Q=I._z,n=I._w;return this._x=g*n+t*B+i*Q-C*o,this._y=i*n+t*o+C*B-g*Q,this._z=C*n+t*Q+g*o-i*B,this._w=t*n-g*B-i*o-C*Q,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,i=this._y,C=this._z,t=this._w;let B=t*A._w+g*A._x+i*A._y+C*A._z;if(B<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,B=-B):this.copy(A),B>=1)return this._w=t,this._x=g,this._y=i,this._z=C,this;const o=1-B*B;if(o<=Number.EPSILON){const a=1-I;return this._w=a*t+I*this._w,this._x=a*g+I*this._x,this._y=a*i+I*this._y,this._z=a*C+I*this._z,this.normalize(),this}const Q=Math.sqrt(o),n=Math.atan2(Q,B),E=Math.sin((1-I)*n)/Q,s=Math.sin(I*n)/Q;return this._w=t*E+this._w*s,this._x=g*E+this._x*s,this._y=i*E+this._y*s,this._z=C*E+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),i=Math.sqrt(1-g),C=Math.sqrt(g);return this.set(i*Math.sin(A),i*Math.cos(A),C*Math.sin(I),C*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class vM{constructor(A=0,I=0,g=0){vM.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Ap.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Ap.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,i=this.z,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6]*i,this.y=C[1]*I+C[4]*g+C[7]*i,this.z=C[2]*I+C[5]*g+C[8]*i,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,i=this.z,C=A.elements,t=1/(C[3]*I+C[7]*g+C[11]*i+C[15]);return this.x=(C[0]*I+C[4]*g+C[8]*i+C[12])*t,this.y=(C[1]*I+C[5]*g+C[9]*i+C[13])*t,this.z=(C[2]*I+C[6]*g+C[10]*i+C[14])*t,this}applyQuaternion(A){const I=this.x,g=this.y,i=this.z,C=A.x,t=A.y,B=A.z,o=A.w,Q=2*(t*i-B*g),n=2*(B*I-C*i),E=2*(C*g-t*I);return this.x=I+o*Q+t*E-B*n,this.y=g+o*n+B*Q-C*E,this.z=i+o*E+C*n-t*Q,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,i=this.z,C=A.elements;return this.x=C[0]*I+C[4]*g+C[8]*i,this.y=C[1]*I+C[5]*g+C[9]*i,this.z=C[2]*I+C[6]*g+C[10]*i,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,i=A.y,C=A.z,t=I.x,B=I.y,o=I.z;return this.x=i*o-C*B,this.y=C*t-g*o,this.z=g*B-i*t,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Ic.copy(this).projectOnVector(A),this.sub(Ic)}reflect(A){return this.sub(Ic.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(mg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,i=this.z-A.z;return I*I+g*g+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const i=Math.sin(I)*A;return this.x=i*Math.sin(g),this.y=Math.cos(I)*A,this.z=i*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),i=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=i,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Ic=new H,Ap=new qg;let vi=class{constructor(A=new H(1/0,1/0,1/0),I=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(GC.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(GC.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=GC.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const C=g.getAttribute("position");if(I===!0&&C!==void 0&&A.isInstancedMesh!==!0)for(let t=0,B=C.count;t<B;t++)A.isMesh===!0?A.getVertexPosition(t,GC):GC.fromBufferAttribute(C,t),GC.applyMatrix4(A.matrixWorld),this.expandByPoint(GC);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),rs.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),rs.copy(g.boundingBox)),rs.applyMatrix4(A.matrixWorld),this.union(rs)}const i=A.children;for(let C=0,t=i.length;C<t;C++)this.expandByObject(i[C],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,GC),GC.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(XQ),hs.subVectors(this.max,XQ),ao.subVectors(A.a,XQ),ro.subVectors(A.b,XQ),ho.subVectors(A.c,XQ),Xe.subVectors(ro,ao),$e.subVectors(ho,ro),Zt.subVectors(ao,ho);let I=[0,-Xe.z,Xe.y,0,-$e.z,$e.y,0,-Zt.z,Zt.y,Xe.z,0,-Xe.x,$e.z,0,-$e.x,Zt.z,0,-Zt.x,-Xe.y,Xe.x,0,-$e.y,$e.x,0,-Zt.y,Zt.x,0];return!gc(I,ao,ro,ho,hs)||(I=[1,0,0,0,1,0,0,0,1],!gc(I,ao,ro,ho,hs))?!1:(cs.crossVectors(Xe,$e),I=[cs.x,cs.y,cs.z],gc(I,ao,ro,ho,hs))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,GC).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(GC).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(ce[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),ce[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),ce[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),ce[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),ce[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),ce[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),ce[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),ce[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(ce),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}};const ce=[new H,new H,new H,new H,new H,new H,new H,new H],GC=new H,rs=new vi,ao=new H,ro=new H,ho=new H,Xe=new H,$e=new H,Zt=new H,XQ=new H,hs=new H,cs=new H,Wt=new H;function gc(e,A,I,g,i){for(let C=0,t=e.length-3;C<=t;C+=3){Wt.fromArray(e,C);const B=i.x*Math.abs(Wt.x)+i.y*Math.abs(Wt.y)+i.z*Math.abs(Wt.z),o=A.dot(Wt),Q=I.dot(Wt),n=g.dot(Wt);if(Math.max(-Math.max(o,Q,n),Math.min(o,Q,n))>B)return!1}return!0}const Pm=new vi,$Q=new H,ic=new H;let Ri=class{constructor(A=new H,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Pm.setFromPoints(A).getCenter(g);let i=0;for(let C=0,t=A.length;C<t;C++)i=Math.max(i,g.distanceToSquared(A[C]));return this.radius=Math.sqrt(i),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;$Q.subVectors(A,this.center);const I=$Q.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),i=(g-this.radius)*.5;this.center.addScaledVector($Q,i/g),this.radius+=i}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(ic.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint($Q.copy(A.center).add(ic)),this.expandByPoint($Q.copy(A.center).sub(ic))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}};const le=new H,Cc=new H,ls=new H,At=new H,ec=new H,Ds=new H,tc=new H;let HQ=class{constructor(A=new H,I=new H(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,le)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=le.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(le.copy(this.origin).addScaledVector(this.direction,I),le.distanceToSquared(A))}distanceSqToSegment(A,I,g,i){Cc.copy(A).add(I).multiplyScalar(.5),ls.copy(I).sub(A).normalize(),At.copy(this.origin).sub(Cc);const C=A.distanceTo(I)*.5,t=-this.direction.dot(ls),B=At.dot(this.direction),o=-At.dot(ls),Q=At.lengthSq(),n=Math.abs(1-t*t);let E,s,a,r;if(n>0)if(E=t*o-B,s=t*B-o,r=C*n,E>=0)if(s>=-r)if(s<=r){const l=1/n;E*=l,s*=l,a=E*(E+t*s+2*B)+s*(t*E+s+2*o)+Q}else s=C,E=Math.max(0,-(t*s+B)),a=-E*E+s*(s+2*o)+Q;else s=-C,E=Math.max(0,-(t*s+B)),a=-E*E+s*(s+2*o)+Q;else s<=-r?(E=Math.max(0,-(-t*C+B)),s=E>0?-C:Math.min(Math.max(-C,-o),C),a=-E*E+s*(s+2*o)+Q):s<=r?(E=0,s=Math.min(Math.max(-C,-o),C),a=s*(s+2*o)+Q):(E=Math.max(0,-(t*C+B)),s=E>0?C:Math.min(Math.max(-C,-o),C),a=-E*E+s*(s+2*o)+Q);else s=t>0?-C:C,E=Math.max(0,-(t*s+B)),a=-E*E+s*(s+2*o)+Q;return g&&g.copy(this.origin).addScaledVector(this.direction,E),i&&i.copy(Cc).addScaledVector(ls,s),a}intersectSphere(A,I){le.subVectors(A.center,this.origin);const g=le.dot(this.direction),i=le.dot(le)-g*g,C=A.radius*A.radius;if(i>C)return null;const t=Math.sqrt(C-i),B=g-t,o=g+t;return o<0?null:B<0?this.at(o,I):this.at(B,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,i,C,t,B,o;const Q=1/this.direction.x,n=1/this.direction.y,E=1/this.direction.z,s=this.origin;return Q>=0?(g=(A.min.x-s.x)*Q,i=(A.max.x-s.x)*Q):(g=(A.max.x-s.x)*Q,i=(A.min.x-s.x)*Q),n>=0?(C=(A.min.y-s.y)*n,t=(A.max.y-s.y)*n):(C=(A.max.y-s.y)*n,t=(A.min.y-s.y)*n),g>t||C>i||((C>g||isNaN(g))&&(g=C),(t<i||isNaN(i))&&(i=t),E>=0?(B=(A.min.z-s.z)*E,o=(A.max.z-s.z)*E):(B=(A.max.z-s.z)*E,o=(A.min.z-s.z)*E),g>o||B>i)||((B>g||g!==g)&&(g=B),(o<i||i!==i)&&(i=o),i<0)?null:this.at(g>=0?g:i,I)}intersectsBox(A){return this.intersectBox(A,le)!==null}intersectTriangle(A,I,g,i,C){ec.subVectors(I,A),Ds.subVectors(g,A),tc.crossVectors(ec,Ds);let t=this.direction.dot(tc),B;if(t>0){if(i)return null;B=1}else if(t<0)B=-1,t=-t;else return null;At.subVectors(this.origin,A);const o=B*this.direction.dot(Ds.crossVectors(At,Ds));if(o<0)return null;const Q=B*this.direction.dot(ec.cross(At));if(Q<0||o+Q>t)return null;const n=-B*At.dot(tc);return n<0?null:this.at(n/t,C)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},aI=class QD{constructor(A,I,g,i,C,t,B,o,Q,n,E,s,a,r,l,c){QD.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,i,C,t,B,o,Q,n,E,s,a,r,l,c)}set(A,I,g,i,C,t,B,o,Q,n,E,s,a,r,l,c){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=i,h[1]=C,h[5]=t,h[9]=B,h[13]=o,h[2]=Q,h[6]=n,h[10]=E,h[14]=s,h[3]=a,h[7]=r,h[11]=l,h[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new QD().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,i=1/co.setFromMatrixColumn(A,0).length(),C=1/co.setFromMatrixColumn(A,1).length(),t=1/co.setFromMatrixColumn(A,2).length();return I[0]=g[0]*i,I[1]=g[1]*i,I[2]=g[2]*i,I[3]=0,I[4]=g[4]*C,I[5]=g[5]*C,I[6]=g[6]*C,I[7]=0,I[8]=g[8]*t,I[9]=g[9]*t,I[10]=g[10]*t,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,i=A.y,C=A.z,t=Math.cos(g),B=Math.sin(g),o=Math.cos(i),Q=Math.sin(i),n=Math.cos(C),E=Math.sin(C);if(A.order==="XYZ"){const s=t*n,a=t*E,r=B*n,l=B*E;I[0]=o*n,I[4]=-o*E,I[8]=Q,I[1]=a+r*Q,I[5]=s-l*Q,I[9]=-B*o,I[2]=l-s*Q,I[6]=r+a*Q,I[10]=t*o}else if(A.order==="YXZ"){const s=o*n,a=o*E,r=Q*n,l=Q*E;I[0]=s+l*B,I[4]=r*B-a,I[8]=t*Q,I[1]=t*E,I[5]=t*n,I[9]=-B,I[2]=a*B-r,I[6]=l+s*B,I[10]=t*o}else if(A.order==="ZXY"){const s=o*n,a=o*E,r=Q*n,l=Q*E;I[0]=s-l*B,I[4]=-t*E,I[8]=r+a*B,I[1]=a+r*B,I[5]=t*n,I[9]=l-s*B,I[2]=-t*Q,I[6]=B,I[10]=t*o}else if(A.order==="ZYX"){const s=t*n,a=t*E,r=B*n,l=B*E;I[0]=o*n,I[4]=r*Q-a,I[8]=s*Q+l,I[1]=o*E,I[5]=l*Q+s,I[9]=a*Q-r,I[2]=-Q,I[6]=B*o,I[10]=t*o}else if(A.order==="YZX"){const s=t*o,a=t*Q,r=B*o,l=B*Q;I[0]=o*n,I[4]=l-s*E,I[8]=r*E+a,I[1]=E,I[5]=t*n,I[9]=-B*n,I[2]=-Q*n,I[6]=a*E+r,I[10]=s-l*E}else if(A.order==="XZY"){const s=t*o,a=t*Q,r=B*o,l=B*Q;I[0]=o*n,I[4]=-E,I[8]=Q*n,I[1]=s*E+l,I[5]=t*n,I[9]=a*E-r,I[2]=r*E-a,I[6]=B*n,I[10]=l*E+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Zm,A,Wm)}lookAt(A,I,g){const i=this.elements;return iC.subVectors(A,I),iC.lengthSq()===0&&(iC.z=1),iC.normalize(),It.crossVectors(g,iC),It.lengthSq()===0&&(Math.abs(g.z)===1?iC.x+=1e-4:iC.z+=1e-4,iC.normalize(),It.crossVectors(g,iC)),It.normalize(),Ss.crossVectors(iC,It),i[0]=It.x,i[4]=Ss.x,i[8]=iC.x,i[1]=It.y,i[5]=Ss.y,i[9]=iC.y,i[2]=It.z,i[6]=Ss.z,i[10]=iC.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,i=I.elements,C=this.elements,t=g[0],B=g[4],o=g[8],Q=g[12],n=g[1],E=g[5],s=g[9],a=g[13],r=g[2],l=g[6],c=g[10],h=g[14],S=g[3],D=g[7],d=g[11],f=g[15],u=i[0],y=i[4],M=i[8],w=i[12],p=i[1],F=i[5],T=i[9],J=i[13],m=i[2],b=i[6],O=i[10],z=i[14],V=i[3],AA=i[7],oA=i[11],aA=i[15];return C[0]=t*u+B*p+o*m+Q*V,C[4]=t*y+B*F+o*b+Q*AA,C[8]=t*M+B*T+o*O+Q*oA,C[12]=t*w+B*J+o*z+Q*aA,C[1]=n*u+E*p+s*m+a*V,C[5]=n*y+E*F+s*b+a*AA,C[9]=n*M+E*T+s*O+a*oA,C[13]=n*w+E*J+s*z+a*aA,C[2]=r*u+l*p+c*m+h*V,C[6]=r*y+l*F+c*b+h*AA,C[10]=r*M+l*T+c*O+h*oA,C[14]=r*w+l*J+c*z+h*aA,C[3]=S*u+D*p+d*m+f*V,C[7]=S*y+D*F+d*b+f*AA,C[11]=S*M+D*T+d*O+f*oA,C[15]=S*w+D*J+d*z+f*aA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],i=A[8],C=A[12],t=A[1],B=A[5],o=A[9],Q=A[13],n=A[2],E=A[6],s=A[10],a=A[14],r=A[3],l=A[7],c=A[11],h=A[15];return r*(+C*o*E-i*Q*E-C*B*s+g*Q*s+i*B*a-g*o*a)+l*(+I*o*a-I*Q*s+C*t*s-i*t*a+i*Q*n-C*o*n)+c*(+I*Q*E-I*B*a-C*t*E+g*t*a+C*B*n-g*Q*n)+h*(-i*B*n-I*o*E+I*B*s+i*t*E-g*t*s+g*o*n)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const i=this.elements;return A.isVector3?(i[12]=A.x,i[13]=A.y,i[14]=A.z):(i[12]=A,i[13]=I,i[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],i=A[2],C=A[3],t=A[4],B=A[5],o=A[6],Q=A[7],n=A[8],E=A[9],s=A[10],a=A[11],r=A[12],l=A[13],c=A[14],h=A[15],S=E*c*Q-l*s*Q+l*o*a-B*c*a-E*o*h+B*s*h,D=r*s*Q-n*c*Q-r*o*a+t*c*a+n*o*h-t*s*h,d=n*l*Q-r*E*Q+r*B*a-t*l*a-n*B*h+t*E*h,f=r*E*o-n*l*o-r*B*s+t*l*s+n*B*c-t*E*c,u=I*S+g*D+i*d+C*f;if(u===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/u;return A[0]=S*y,A[1]=(l*s*C-E*c*C-l*i*a+g*c*a+E*i*h-g*s*h)*y,A[2]=(B*c*C-l*o*C+l*i*Q-g*c*Q-B*i*h+g*o*h)*y,A[3]=(E*o*C-B*s*C-E*i*Q+g*s*Q+B*i*a-g*o*a)*y,A[4]=D*y,A[5]=(n*c*C-r*s*C+r*i*a-I*c*a-n*i*h+I*s*h)*y,A[6]=(r*o*C-t*c*C-r*i*Q+I*c*Q+t*i*h-I*o*h)*y,A[7]=(t*s*C-n*o*C+n*i*Q-I*s*Q-t*i*a+I*o*a)*y,A[8]=d*y,A[9]=(r*E*C-n*l*C-r*g*a+I*l*a+n*g*h-I*E*h)*y,A[10]=(t*l*C-r*B*C+r*g*Q-I*l*Q-t*g*h+I*B*h)*y,A[11]=(n*B*C-t*E*C-n*g*Q+I*E*Q+t*g*a-I*B*a)*y,A[12]=f*y,A[13]=(n*l*i-r*E*i+r*g*s-I*l*s-n*g*c+I*E*c)*y,A[14]=(r*B*i-t*l*i-r*g*o+I*l*o+t*g*c-I*B*c)*y,A[15]=(t*E*i-n*B*i+n*g*o-I*E*o-t*g*s+I*B*s)*y,this}scale(A){const I=this.elements,g=A.x,i=A.y,C=A.z;return I[0]*=g,I[4]*=i,I[8]*=C,I[1]*=g,I[5]*=i,I[9]*=C,I[2]*=g,I[6]*=i,I[10]*=C,I[3]*=g,I[7]*=i,I[11]*=C,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],i=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,i))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),i=Math.sin(I),C=1-g,t=A.x,B=A.y,o=A.z,Q=C*t,n=C*B;return this.set(Q*t+g,Q*B-i*o,Q*o+i*B,0,Q*B+i*o,n*B+g,n*o-i*t,0,Q*o-i*B,n*o+i*t,C*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,i,C,t){return this.set(1,g,C,0,A,1,t,0,I,i,1,0,0,0,0,1),this}compose(A,I,g){const i=this.elements,C=I._x,t=I._y,B=I._z,o=I._w,Q=C+C,n=t+t,E=B+B,s=C*Q,a=C*n,r=C*E,l=t*n,c=t*E,h=B*E,S=o*Q,D=o*n,d=o*E,f=g.x,u=g.y,y=g.z;return i[0]=(1-(l+h))*f,i[1]=(a+d)*f,i[2]=(r-D)*f,i[3]=0,i[4]=(a-d)*u,i[5]=(1-(s+h))*u,i[6]=(c+S)*u,i[7]=0,i[8]=(r+D)*y,i[9]=(c-S)*y,i[10]=(1-(s+l))*y,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1,this}decompose(A,I,g){const i=this.elements;let C=co.set(i[0],i[1],i[2]).length();const t=co.set(i[4],i[5],i[6]).length(),B=co.set(i[8],i[9],i[10]).length();this.determinant()<0&&(C=-C),A.x=i[12],A.y=i[13],A.z=i[14],MC.copy(this);const Q=1/C,n=1/t,E=1/B;return MC.elements[0]*=Q,MC.elements[1]*=Q,MC.elements[2]*=Q,MC.elements[4]*=n,MC.elements[5]*=n,MC.elements[6]*=n,MC.elements[8]*=E,MC.elements[9]*=E,MC.elements[10]*=E,I.setFromRotationMatrix(MC),g.x=C,g.y=t,g.z=B,this}makePerspective(A,I,g,i,C,t,B=te){const o=this.elements,Q=2*C/(I-A),n=2*C/(g-i),E=(I+A)/(I-A),s=(g+i)/(g-i);let a,r;if(B===te)a=-(t+C)/(t-C),r=-2*t*C/(t-C);else if(B===IE)a=-t/(t-C),r=-t*C/(t-C);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+B);return o[0]=Q,o[4]=0,o[8]=E,o[12]=0,o[1]=0,o[5]=n,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=a,o[14]=r,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,i,C,t,B=te){const o=this.elements,Q=1/(I-A),n=1/(g-i),E=1/(t-C),s=(I+A)*Q,a=(g+i)*n;let r,l;if(B===te)r=(t+C)*E,l=-2*E;else if(B===IE)r=C*E,l=-1*E;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+B);return o[0]=2*Q,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*n,o[9]=0,o[13]=-a,o[2]=0,o[6]=0,o[10]=l,o[14]=-r,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let i=0;i<16;i++)if(I[i]!==g[i])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}};const co=new H,MC=new aI,Zm=new H(0,0,0),Wm=new H(1,1,1),It=new H,Ss=new H,iC=new H,Ip=new aI,gp=new qg;let aC=class OM{constructor(A=0,I=0,g=0,i=OM.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=i}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,i=this._order){return this._x=A,this._y=I,this._z=g,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const i=A.elements,C=i[0],t=i[4],B=i[8],o=i[1],Q=i[5],n=i[9],E=i[2],s=i[6],a=i[10];switch(I){case"XYZ":this._y=Math.asin(mg(B,-1,1)),Math.abs(B)<.9999999?(this._x=Math.atan2(-n,a),this._z=Math.atan2(-t,C)):(this._x=Math.atan2(s,Q),this._z=0);break;case"YXZ":this._x=Math.asin(-mg(n,-1,1)),Math.abs(n)<.9999999?(this._y=Math.atan2(B,a),this._z=Math.atan2(o,Q)):(this._y=Math.atan2(-E,C),this._z=0);break;case"ZXY":this._x=Math.asin(mg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-E,a),this._z=Math.atan2(-t,Q)):(this._y=0,this._z=Math.atan2(o,C));break;case"ZYX":this._y=Math.asin(-mg(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,a),this._z=Math.atan2(o,C)):(this._x=0,this._z=Math.atan2(-t,Q));break;case"YZX":this._z=Math.asin(mg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-n,Q),this._y=Math.atan2(-E,C)):(this._x=0,this._y=Math.atan2(B,a));break;case"XZY":this._z=Math.asin(-mg(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(s,Q),this._y=Math.atan2(B,C)):(this._x=Math.atan2(-n,a),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Ip.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Ip,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return gp.setFromEuler(this),this.setFromQuaternion(gp,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};aC.DEFAULT_ORDER="XYZ";let Zr=class{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}},Vm=0;const ip=new H,lo=new qg,De=new aI,ds=new H,An=new H,zm=new H,jm=new qg,Cp=new H(1,0,0),ep=new H(0,1,0),tp=new H(0,0,1),Bp={type:"added"},Xm={type:"removed"},Do={type:"childadded",child:null},Bc={type:"childremoved",child:null};let $I=class Er extends Ve{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=EC(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Er.DEFAULT_UP.clone();const A=new H,I=new aC,g=new qg,i=new H(1,1,1);function C(){g.setFromEuler(I,!1)}function t(){I.setFromQuaternion(g,void 0,!1)}I._onChange(C),g._onChange(t),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new aI},normalMatrix:{value:new GI}}),this.matrix=new aI,this.matrixWorld=new aI,this.matrixAutoUpdate=Er.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return lo.setFromAxisAngle(A,I),this.quaternion.multiply(lo),this}rotateOnWorldAxis(A,I){return lo.setFromAxisAngle(A,I),this.quaternion.premultiply(lo),this}rotateX(A){return this.rotateOnAxis(Cp,A)}rotateY(A){return this.rotateOnAxis(ep,A)}rotateZ(A){return this.rotateOnAxis(tp,A)}translateOnAxis(A,I){return ip.copy(A).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Cp,A)}translateY(A){return this.translateOnAxis(ep,A)}translateZ(A){return this.translateOnAxis(tp,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(De.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?ds.copy(A):ds.set(A,I,g);const i=this.parent;this.updateWorldMatrix(!0,!1),An.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?De.lookAt(An,ds,this.up):De.lookAt(ds,An,this.up),this.quaternion.setFromRotationMatrix(De),i&&(De.extractRotation(i.matrixWorld),lo.setFromRotationMatrix(De),this.quaternion.premultiply(lo.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(Bp),Do.child=A,this.dispatchEvent(Do),Do.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(Xm),Bc.child=A,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),De.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),De.multiply(A.parent.matrixWorld)),A.applyMatrix4(De),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(Bp),Do.child=A,this.dispatchEvent(Do),Do.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,i=this.children.length;g<i;g++){const t=this.children[g].getObjectByProperty(A,I);if(t!==void 0)return t}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const i=this.children;for(let C=0,t=i.length;C<t;C++)i[C].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,A,zm),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(An,jm,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,i=I.length;g<i;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,i=I.length;g<i;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,i=I.length;g<i;g++){const C=I[g];(C.matrixWorldAutoUpdate===!0||A===!0)&&C.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const i=this.children;for(let C=0,t=i.length;C<t;C++){const B=i[C];B.matrixWorldAutoUpdate===!0&&B.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(B=>({boxInitialized:B.boxInitialized,boxMin:B.box.min.toArray(),boxMax:B.box.max.toArray(),sphereInitialized:B.sphereInitialized,sphereRadius:B.sphere.radius,sphereCenter:B.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function C(B,o){return B[o.uuid]===void 0&&(B[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=C(A.geometries,this.geometry);const B=this.geometry.parameters;if(B!==void 0&&B.shapes!==void 0){const o=B.shapes;if(Array.isArray(o))for(let Q=0,n=o.length;Q<n;Q++){const E=o[Q];C(A.shapes,E)}else C(A.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(C(A.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const B=[];for(let o=0,Q=this.material.length;o<Q;o++)B.push(C(A.materials,this.material[o]));i.material=B}else i.material=C(A.materials,this.material);if(this.children.length>0){i.children=[];for(let B=0;B<this.children.length;B++)i.children.push(this.children[B].toJSON(A).object)}if(this.animations.length>0){i.animations=[];for(let B=0;B<this.animations.length;B++){const o=this.animations[B];i.animations.push(C(A.animations,o))}}if(I){const B=t(A.geometries),o=t(A.materials),Q=t(A.textures),n=t(A.images),E=t(A.shapes),s=t(A.skeletons),a=t(A.animations),r=t(A.nodes);B.length>0&&(g.geometries=B),o.length>0&&(g.materials=o),Q.length>0&&(g.textures=Q),n.length>0&&(g.images=n),E.length>0&&(g.shapes=E),s.length>0&&(g.skeletons=s),a.length>0&&(g.animations=a),r.length>0&&(g.nodes=r)}return g.object=i,g;function t(B){const o=[];for(const Q in B){const n=B[Q];delete n.metadata,o.push(n)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const i=A.children[g];this.add(i.clone())}return this}};$I.DEFAULT_UP=new H(0,1,0);$I.DEFAULT_MATRIX_AUTO_UPDATE=!0;$I.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kC=new H,Se=new H,oc=new H,de=new H,So=new H,wo=new H,op=new H,Qc=new H,nc=new H,Ec=new H;let GB=class CQ{constructor(A=new H,I=new H,g=new H){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,i){i.subVectors(g,I),kC.subVectors(A,I),i.cross(kC);const C=i.lengthSq();return C>0?i.multiplyScalar(1/Math.sqrt(C)):i.set(0,0,0)}static getBarycoord(A,I,g,i,C){kC.subVectors(i,I),Se.subVectors(g,I),oc.subVectors(A,I);const t=kC.dot(kC),B=kC.dot(Se),o=kC.dot(oc),Q=Se.dot(Se),n=Se.dot(oc),E=t*Q-B*B;if(E===0)return C.set(0,0,0),null;const s=1/E,a=(Q*o-B*n)*s,r=(t*n-B*o)*s;return C.set(1-a-r,r,a)}static containsPoint(A,I,g,i){return this.getBarycoord(A,I,g,i,de)===null?!1:de.x>=0&&de.y>=0&&de.x+de.y<=1}static getInterpolation(A,I,g,i,C,t,B,o){return this.getBarycoord(A,I,g,i,de)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(C,de.x),o.addScaledVector(t,de.y),o.addScaledVector(B,de.z),o)}static isFrontFacing(A,I,g,i){return kC.subVectors(g,I),Se.subVectors(A,I),kC.cross(Se).dot(i)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,i){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[i]),this}setFromAttributeAndIndices(A,I,g,i){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,i),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return kC.subVectors(this.c,this.b),Se.subVectors(this.a,this.b),kC.cross(Se).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return CQ.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return CQ.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,i,C){return CQ.getInterpolation(A,this.a,this.b,this.c,I,g,i,C)}containsPoint(A){return CQ.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return CQ.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,i=this.b,C=this.c;let t,B;So.subVectors(i,g),wo.subVectors(C,g),Qc.subVectors(A,g);const o=So.dot(Qc),Q=wo.dot(Qc);if(o<=0&&Q<=0)return I.copy(g);nc.subVectors(A,i);const n=So.dot(nc),E=wo.dot(nc);if(n>=0&&E<=n)return I.copy(i);const s=o*E-n*Q;if(s<=0&&o>=0&&n<=0)return t=o/(o-n),I.copy(g).addScaledVector(So,t);Ec.subVectors(A,C);const a=So.dot(Ec),r=wo.dot(Ec);if(r>=0&&a<=r)return I.copy(C);const l=a*Q-o*r;if(l<=0&&Q>=0&&r<=0)return B=Q/(Q-r),I.copy(g).addScaledVector(wo,B);const c=n*r-a*E;if(c<=0&&E-n>=0&&a-r>=0)return op.subVectors(C,i),B=(E-n)/(E-n+(a-r)),I.copy(i).addScaledVector(op,B);const h=1/(c+l+s);return t=l*h,B=s*h,I.copy(g).addScaledVector(So,t).addScaledVector(wo,B)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}};const PM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gt={h:0,s:0,l:0},ws={h:0,s:0,l:0};function sc(e,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?e+(A-e)*6*I:I<1/2?A:I<2/3?e+(A-e)*6*(2/3-I):e}let iI=class{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const i=A;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=DC){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,gg.toWorkingColorSpace(this,I),this}setRGB(A,I,g,i=gg.workingColorSpace){return this.r=A,this.g=I,this.b=g,gg.toWorkingColorSpace(this,i),this}setHSL(A,I,g,i=gg.workingColorSpace){if(A=vS(A,1),I=mg(I,0,1),g=mg(g,0,1),I===0)this.r=this.g=this.b=g;else{const C=g<=.5?g*(1+I):g+I-g*I,t=2*g-C;this.r=sc(t,C,A+1/3),this.g=sc(t,C,A),this.b=sc(t,C,A-1/3)}return gg.toWorkingColorSpace(this,i),this}setStyle(A,I=DC){function g(C){C!==void 0&&parseFloat(C)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(A)){let C;const t=i[1],B=i[2];switch(t){case"rgb":case"rgba":if(C=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(B))return g(C[4]),this.setRGB(Math.min(255,parseInt(C[1],10))/255,Math.min(255,parseInt(C[2],10))/255,Math.min(255,parseInt(C[3],10))/255,I);if(C=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(B))return g(C[4]),this.setRGB(Math.min(100,parseInt(C[1],10))/100,Math.min(100,parseInt(C[2],10))/100,Math.min(100,parseInt(C[3],10))/100,I);break;case"hsl":case"hsla":if(C=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(B))return g(C[4]),this.setHSL(parseFloat(C[1])/360,parseFloat(C[2])/100,parseFloat(C[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(A)){const C=i[1],t=C.length;if(t===3)return this.setRGB(parseInt(C.charAt(0),16)/15,parseInt(C.charAt(1),16)/15,parseInt(C.charAt(2),16)/15,I);if(t===6)return this.setHex(parseInt(C,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=DC){const g=PM[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=cQ(A.r),this.g=cQ(A.g),this.b=cQ(A.b),this}copyLinearToSRGB(A){return this.r=$h(A.r),this.g=$h(A.g),this.b=$h(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=DC){return gg.fromWorkingColorSpace(Gi.copy(this),A),Math.round(mg(Gi.r*255,0,255))*65536+Math.round(mg(Gi.g*255,0,255))*256+Math.round(mg(Gi.b*255,0,255))}getHexString(A=DC){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=gg.workingColorSpace){gg.fromWorkingColorSpace(Gi.copy(this),I);const g=Gi.r,i=Gi.g,C=Gi.b,t=Math.max(g,i,C),B=Math.min(g,i,C);let o,Q;const n=(B+t)/2;if(B===t)o=0,Q=0;else{const E=t-B;switch(Q=n<=.5?E/(t+B):E/(2-t-B),t){case g:o=(i-C)/E+(i<C?6:0);break;case i:o=(C-g)/E+2;break;case C:o=(g-i)/E+4;break}o/=6}return A.h=o,A.s=Q,A.l=n,A}getRGB(A,I=gg.workingColorSpace){return gg.fromWorkingColorSpace(Gi.copy(this),I),A.r=Gi.r,A.g=Gi.g,A.b=Gi.b,A}getStyle(A=DC){gg.fromWorkingColorSpace(Gi.copy(this),A);const I=Gi.r,g=Gi.g,i=Gi.b;return A!==DC?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(i*255)})`}offsetHSL(A,I,g){return this.getHSL(gt),this.setHSL(gt.h+A,gt.s+I,gt.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(gt),A.getHSL(ws);const g=Kn(gt.h,ws.h,I),i=Kn(gt.s,ws.s,I),C=Kn(gt.l,ws.l,I);return this.setHSL(g,i,C),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,i=this.b,C=A.elements;return this.r=C[0]*I+C[3]*g+C[6]*i,this.g=C[1]*I+C[4]*g+C[7]*i,this.b=C[2]*I+C[5]*g+C[8]*i,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Gi=new iI;iI.NAMES=PM;let $m=0,Ki=class extends Ve{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=EC(),this.name="",this.type="Material",this.blending=KB,this.side=oe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ur,this.blendDst=yr,this.blendEquation=St,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new iI(0,0,0),this.blendAlpha=0,this.depthFunc=bn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tD,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lB,this.stencilZFail=lB,this.stencilZPass=lB,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const i=this[I];if(i===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(g):i&&i.isVector3&&g&&g.isVector3?i.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==KB&&(g.blending=this.blending),this.side!==oe&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==ur&&(g.blendSrc=this.blendSrc),this.blendDst!==yr&&(g.blendDst=this.blendDst),this.blendEquation!==St&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==bn&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tD&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lB&&(g.stencilFail=this.stencilFail),this.stencilZFail!==lB&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==lB&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function i(C){const t=[];for(const B in C){const o=C[B];delete o.metadata,t.push(o)}return t}if(I){const C=i(A.textures),t=i(A.images);C.length>0&&(g.textures=C),t.length>0&&(g.images=t)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const i=I.length;g=new Array(i);for(let C=0;C!==i;++C)g[C]=I[C].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}},Lt=class extends Ki{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new iI(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aC,this.combine=xE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}};const Ne=AK();function AK(){const e=new ArrayBuffer(4),A=new Float32Array(e),I=new Uint32Array(e),g=new Uint32Array(512),i=new Uint32Array(512);for(let o=0;o<256;++o){const Q=o-127;Q<-27?(g[o]=0,g[o|256]=32768,i[o]=24,i[o|256]=24):Q<-14?(g[o]=1024>>-Q-14,g[o|256]=1024>>-Q-14|32768,i[o]=-Q-1,i[o|256]=-Q-1):Q<=15?(g[o]=Q+15<<10,g[o|256]=Q+15<<10|32768,i[o]=13,i[o|256]=13):Q<128?(g[o]=31744,g[o|256]=64512,i[o]=24,i[o|256]=24):(g[o]=31744,g[o|256]=64512,i[o]=13,i[o|256]=13)}const C=new Uint32Array(2048),t=new Uint32Array(64),B=new Uint32Array(64);for(let o=1;o<1024;++o){let Q=o<<13,n=0;for(;!(Q&8388608);)Q<<=1,n-=8388608;Q&=-8388609,n+=947912704,C[o]=Q|n}for(let o=1024;o<2048;++o)C[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)t[o]=o<<23;t[31]=1199570944,t[32]=2147483648;for(let o=33;o<63;++o)t[o]=2147483648+(o-32<<23);t[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(B[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:i,mantissaTable:C,exponentTable:t,offsetTable:B}}function Wi(e){Math.abs(e)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),e=mg(e,-65504,65504),Ne.floatView[0]=e;const A=Ne.uint32View[0],I=A>>23&511;return Ne.baseTable[I]+((A&8388607)>>Ne.shiftTable[I])}function yn(e){const A=e>>10;return Ne.uint32View[0]=Ne.mantissaTable[Ne.offsetTable[A]+(e&1023)]+Ne.exponentTable[A],Ne.floatView[0]}const IK={toHalfFloat:Wi,fromHalfFloat:yn},Pg=new H,ps=new NA;let ig=class{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=AE,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=wC,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return xM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let i=0,C=this.itemSize;i<C;i++)this.array[A+i]=I.array[g+i];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)ps.fromBufferAttribute(this,I),ps.applyMatrix3(A),this.setXY(I,ps.x,ps.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)Pg.fromBufferAttribute(this,I),Pg.applyMatrix3(A),this.setXYZ(I,Pg.x,Pg.y,Pg.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)Pg.fromBufferAttribute(this,I),Pg.applyMatrix4(A),this.setXYZ(I,Pg.x,Pg.y,Pg.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)Pg.fromBufferAttribute(this,I),Pg.applyNormalMatrix(A),this.setXYZ(I,Pg.x,Pg.y,Pg.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)Pg.fromBufferAttribute(this,I),Pg.transformDirection(A),this.setXYZ(I,Pg.x,Pg.y,Pg.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=bi(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=pI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=bi(I,this.array)),I}setX(A,I){return this.normalized&&(I=pI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=bi(I,this.array)),I}setY(A,I){return this.normalized&&(I=pI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=bi(I,this.array)),I}setZ(A,I){return this.normalized&&(I=pI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=bi(I,this.array)),I}setW(A,I){return this.normalized&&(I=pI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=pI(I,this.array),g=pI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,i){return A*=this.itemSize,this.normalized&&(I=pI(I,this.array),g=pI(g,this.array),i=pI(i,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=i,this}setXYZW(A,I,g,i,C){return A*=this.itemSize,this.normalized&&(I=pI(I,this.array),g=pI(g,this.array),i=pI(i,this.array),C=pI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=i,this.array[A+3]=C,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==AE&&(A.usage=this.usage),A}},gK=class extends ig{constructor(A,I,g){super(new Int8Array(A),I,g)}},iK=class extends ig{constructor(A,I,g){super(new Uint8Array(A),I,g)}},CK=class extends ig{constructor(A,I,g){super(new Uint8ClampedArray(A),I,g)}},eK=class extends ig{constructor(A,I,g){super(new Int16Array(A),I,g)}},PS=class extends ig{constructor(A,I,g){super(new Uint16Array(A),I,g)}},tK=class extends ig{constructor(A,I,g){super(new Int32Array(A),I,g)}},ZS=class extends ig{constructor(A,I,g){super(new Uint32Array(A),I,g)}},BK=class extends ig{constructor(A,I,g){super(new Uint16Array(A),I,g),this.isFloat16BufferAttribute=!0}getX(A){let I=yn(this.array[A*this.itemSize]);return this.normalized&&(I=bi(I,this.array)),I}setX(A,I){return this.normalized&&(I=pI(I,this.array)),this.array[A*this.itemSize]=Wi(I),this}getY(A){let I=yn(this.array[A*this.itemSize+1]);return this.normalized&&(I=bi(I,this.array)),I}setY(A,I){return this.normalized&&(I=pI(I,this.array)),this.array[A*this.itemSize+1]=Wi(I),this}getZ(A){let I=yn(this.array[A*this.itemSize+2]);return this.normalized&&(I=bi(I,this.array)),I}setZ(A,I){return this.normalized&&(I=pI(I,this.array)),this.array[A*this.itemSize+2]=Wi(I),this}getW(A){let I=yn(this.array[A*this.itemSize+3]);return this.normalized&&(I=bi(I,this.array)),I}setW(A,I){return this.normalized&&(I=pI(I,this.array)),this.array[A*this.itemSize+3]=Wi(I),this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=pI(I,this.array),g=pI(g,this.array)),this.array[A+0]=Wi(I),this.array[A+1]=Wi(g),this}setXYZ(A,I,g,i){return A*=this.itemSize,this.normalized&&(I=pI(I,this.array),g=pI(g,this.array),i=pI(i,this.array)),this.array[A+0]=Wi(I),this.array[A+1]=Wi(g),this.array[A+2]=Wi(i),this}setXYZW(A,I,g,i,C){return A*=this.itemSize,this.normalized&&(I=pI(I,this.array),g=pI(g,this.array),i=pI(i,this.array),C=pI(C,this.array)),this.array[A+0]=Wi(I),this.array[A+1]=Wi(g),this.array[A+2]=Wi(i),this.array[A+3]=Wi(C),this}},nI=class extends ig{constructor(A,I,g){super(new Float32Array(A),I,g)}},oK=0;const rC=new aI,ac=new $I,po=new H,CC=new vi,In=new vi,Ei=new H;let kI=class ZM extends Ve{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oK++}),this.uuid=EC(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(YM(A)?ZS:PS)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const C=new GI().getNormalMatrix(A);g.applyNormalMatrix(C),g.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(A),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return rC.makeRotationFromQuaternion(A),this.applyMatrix4(rC),this}rotateX(A){return rC.makeRotationX(A),this.applyMatrix4(rC),this}rotateY(A){return rC.makeRotationY(A),this.applyMatrix4(rC),this}rotateZ(A){return rC.makeRotationZ(A),this.applyMatrix4(rC),this}translate(A,I,g){return rC.makeTranslation(A,I,g),this.applyMatrix4(rC),this}scale(A,I,g){return rC.makeScale(A,I,g),this.applyMatrix4(rC),this}lookAt(A){return ac.lookAt(A),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(po).negate(),this.translate(po.x,po.y,po.z),this}setFromPoints(A){const I=[];for(let g=0,i=A.length;g<i;g++){const C=A[g];I.push(C.x,C.y,C.z||0)}return this.setAttribute("position",new nI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,i=I.length;g<i;g++){const C=I[g];CC.setFromBufferAttribute(C),this.morphTargetsRelative?(Ei.addVectors(this.boundingBox.min,CC.min),this.boundingBox.expandByPoint(Ei),Ei.addVectors(this.boundingBox.max,CC.max),this.boundingBox.expandByPoint(Ei)):(this.boundingBox.expandByPoint(CC.min),this.boundingBox.expandByPoint(CC.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(A){const g=this.boundingSphere.center;if(CC.setFromBufferAttribute(A),I)for(let C=0,t=I.length;C<t;C++){const B=I[C];In.setFromBufferAttribute(B),this.morphTargetsRelative?(Ei.addVectors(CC.min,In.min),CC.expandByPoint(Ei),Ei.addVectors(CC.max,In.max),CC.expandByPoint(Ei)):(CC.expandByPoint(In.min),CC.expandByPoint(In.max))}CC.getCenter(g);let i=0;for(let C=0,t=A.count;C<t;C++)Ei.fromBufferAttribute(A,C),i=Math.max(i,g.distanceToSquared(Ei));if(I)for(let C=0,t=I.length;C<t;C++){const B=I[C],o=this.morphTargetsRelative;for(let Q=0,n=B.count;Q<n;Q++)Ei.fromBufferAttribute(B,Q),o&&(po.fromBufferAttribute(A,Q),Ei.add(po)),i=Math.max(i,g.distanceToSquared(Ei))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,i=I.normal,C=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ig(new Float32Array(4*g.count),4));const t=this.getAttribute("tangent"),B=[],o=[];for(let M=0;M<g.count;M++)B[M]=new H,o[M]=new H;const Q=new H,n=new H,E=new H,s=new NA,a=new NA,r=new NA,l=new H,c=new H;function h(M,w,p){Q.fromBufferAttribute(g,M),n.fromBufferAttribute(g,w),E.fromBufferAttribute(g,p),s.fromBufferAttribute(C,M),a.fromBufferAttribute(C,w),r.fromBufferAttribute(C,p),n.sub(Q),E.sub(Q),a.sub(s),r.sub(s);const F=1/(a.x*r.y-r.x*a.y);isFinite(F)&&(l.copy(n).multiplyScalar(r.y).addScaledVector(E,-a.y).multiplyScalar(F),c.copy(E).multiplyScalar(a.x).addScaledVector(n,-r.x).multiplyScalar(F),B[M].add(l),B[w].add(l),B[p].add(l),o[M].add(c),o[w].add(c),o[p].add(c))}let S=this.groups;S.length===0&&(S=[{start:0,count:A.count}]);for(let M=0,w=S.length;M<w;++M){const p=S[M],F=p.start,T=p.count;for(let J=F,m=F+T;J<m;J+=3)h(A.getX(J+0),A.getX(J+1),A.getX(J+2))}const D=new H,d=new H,f=new H,u=new H;function y(M){f.fromBufferAttribute(i,M),u.copy(f);const w=B[M];D.copy(w),D.sub(f.multiplyScalar(f.dot(w))).normalize(),d.crossVectors(u,w);const F=d.dot(o[M])<0?-1:1;t.setXYZW(M,D.x,D.y,D.z,F)}for(let M=0,w=S.length;M<w;++M){const p=S[M],F=p.start,T=p.count;for(let J=F,m=F+T;J<m;J+=3)y(A.getX(J+0)),y(A.getX(J+1)),y(A.getX(J+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new ig(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,a=g.count;s<a;s++)g.setXYZ(s,0,0,0);const i=new H,C=new H,t=new H,B=new H,o=new H,Q=new H,n=new H,E=new H;if(A)for(let s=0,a=A.count;s<a;s+=3){const r=A.getX(s+0),l=A.getX(s+1),c=A.getX(s+2);i.fromBufferAttribute(I,r),C.fromBufferAttribute(I,l),t.fromBufferAttribute(I,c),n.subVectors(t,C),E.subVectors(i,C),n.cross(E),B.fromBufferAttribute(g,r),o.fromBufferAttribute(g,l),Q.fromBufferAttribute(g,c),B.add(n),o.add(n),Q.add(n),g.setXYZ(r,B.x,B.y,B.z),g.setXYZ(l,o.x,o.y,o.z),g.setXYZ(c,Q.x,Q.y,Q.z)}else for(let s=0,a=I.count;s<a;s+=3)i.fromBufferAttribute(I,s+0),C.fromBufferAttribute(I,s+1),t.fromBufferAttribute(I,s+2),n.subVectors(t,C),E.subVectors(i,C),n.cross(E),g.setXYZ(s+0,n.x,n.y,n.z),g.setXYZ(s+1,n.x,n.y,n.z),g.setXYZ(s+2,n.x,n.y,n.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)Ei.fromBufferAttribute(A,I),Ei.normalize(),A.setXYZ(I,Ei.x,Ei.y,Ei.z)}toNonIndexed(){function A(B,o){const Q=B.array,n=B.itemSize,E=B.normalized,s=new Q.constructor(o.length*n);let a=0,r=0;for(let l=0,c=o.length;l<c;l++){B.isInterleavedBufferAttribute?a=o[l]*B.data.stride+B.offset:a=o[l]*n;for(let h=0;h<n;h++)s[r++]=Q[a++]}return new ig(s,n,E)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new ZM,g=this.index.array,i=this.attributes;for(const B in i){const o=i[B],Q=A(o,g);I.setAttribute(B,Q)}const C=this.morphAttributes;for(const B in C){const o=[],Q=C[B];for(let n=0,E=Q.length;n<E;n++){const s=Q[n],a=A(s,g);o.push(a)}I.morphAttributes[B]=o}I.morphTargetsRelative=this.morphTargetsRelative;const t=this.groups;for(let B=0,o=t.length;B<o;B++){const Q=t[B];I.addGroup(Q.start,Q.count,Q.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const Q in o)o[Q]!==void 0&&(A[Q]=o[Q]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const Q=g[o];A.data.attributes[o]=Q.toJSON(A.data)}const i={};let C=!1;for(const o in this.morphAttributes){const Q=this.morphAttributes[o],n=[];for(let E=0,s=Q.length;E<s;E++){const a=Q[E];n.push(a.toJSON(A.data))}n.length>0&&(i[o]=n,C=!0)}C&&(A.data.morphAttributes=i,A.data.morphTargetsRelative=this.morphTargetsRelative);const t=this.groups;t.length>0&&(A.data.groups=JSON.parse(JSON.stringify(t)));const B=this.boundingSphere;return B!==null&&(A.data.boundingSphere={center:B.center.toArray(),radius:B.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const i=A.attributes;for(const Q in i){const n=i[Q];this.setAttribute(Q,n.clone(I))}const C=A.morphAttributes;for(const Q in C){const n=[],E=C[Q];for(let s=0,a=E.length;s<a;s++)n.push(E[s].clone(I));this.morphAttributes[Q]=n}this.morphTargetsRelative=A.morphTargetsRelative;const t=A.groups;for(let Q=0,n=t.length;Q<n;Q++){const E=t[Q];this.addGroup(E.start,E.count,E.materialIndex)}const B=A.boundingBox;B!==null&&(this.boundingBox=B.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};const Qp=new aI,Vt=new HQ,us=new Ri,np=new H,uo=new H,yo=new H,fo=new H,rc=new H,ys=new H,fs=new NA,Gs=new NA,Ms=new NA,Ep=new H,sp=new H,ap=new H,ks=new H,Us=new H;let bg=class extends $I{constructor(A=new kI,I=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const i=I[g[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,t=i.length;C<t;C++){const B=i[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[B]=C}}}}getVertexPosition(A,I){const g=this.geometry,i=g.attributes.position,C=g.morphAttributes.position,t=g.morphTargetsRelative;I.fromBufferAttribute(i,A);const B=this.morphTargetInfluences;if(C&&B){ys.set(0,0,0);for(let o=0,Q=C.length;o<Q;o++){const n=B[o],E=C[o];n!==0&&(rc.fromBufferAttribute(E,A),t?ys.addScaledVector(rc,n):ys.addScaledVector(rc.sub(I),n))}I.add(ys)}return I}raycast(A,I){const g=this.geometry,i=this.material,C=this.matrixWorld;i!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),us.copy(g.boundingSphere),us.applyMatrix4(C),Vt.copy(A.ray).recast(A.near),!(us.containsPoint(Vt.origin)===!1&&(Vt.intersectSphere(us,np)===null||Vt.origin.distanceToSquared(np)>(A.far-A.near)**2))&&(Qp.copy(C).invert(),Vt.copy(A.ray).applyMatrix4(Qp),!(g.boundingBox!==null&&Vt.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,Vt)))}_computeIntersections(A,I,g){let i;const C=this.geometry,t=this.material,B=C.index,o=C.attributes.position,Q=C.attributes.uv,n=C.attributes.uv1,E=C.attributes.normal,s=C.groups,a=C.drawRange;if(B!==null)if(Array.isArray(t))for(let r=0,l=s.length;r<l;r++){const c=s[r],h=t[c.materialIndex],S=Math.max(c.start,a.start),D=Math.min(B.count,Math.min(c.start+c.count,a.start+a.count));for(let d=S,f=D;d<f;d+=3){const u=B.getX(d),y=B.getX(d+1),M=B.getX(d+2);i=Ns(this,h,A,g,Q,n,E,u,y,M),i&&(i.faceIndex=Math.floor(d/3),i.face.materialIndex=c.materialIndex,I.push(i))}}else{const r=Math.max(0,a.start),l=Math.min(B.count,a.start+a.count);for(let c=r,h=l;c<h;c+=3){const S=B.getX(c),D=B.getX(c+1),d=B.getX(c+2);i=Ns(this,t,A,g,Q,n,E,S,D,d),i&&(i.faceIndex=Math.floor(c/3),I.push(i))}}else if(o!==void 0)if(Array.isArray(t))for(let r=0,l=s.length;r<l;r++){const c=s[r],h=t[c.materialIndex],S=Math.max(c.start,a.start),D=Math.min(o.count,Math.min(c.start+c.count,a.start+a.count));for(let d=S,f=D;d<f;d+=3){const u=d,y=d+1,M=d+2;i=Ns(this,h,A,g,Q,n,E,u,y,M),i&&(i.faceIndex=Math.floor(d/3),i.face.materialIndex=c.materialIndex,I.push(i))}}else{const r=Math.max(0,a.start),l=Math.min(o.count,a.start+a.count);for(let c=r,h=l;c<h;c+=3){const S=c,D=c+1,d=c+2;i=Ns(this,t,A,g,Q,n,E,S,D,d),i&&(i.faceIndex=Math.floor(c/3),I.push(i))}}}};function QK(e,A,I,g,i,C,t,B){let o;if(A.side===_i?o=g.intersectTriangle(t,C,i,!0,B):o=g.intersectTriangle(i,C,t,A.side===oe,B),o===null)return null;Us.copy(B),Us.applyMatrix4(e.matrixWorld);const Q=I.ray.origin.distanceTo(Us);return Q<I.near||Q>I.far?null:{distance:Q,point:Us.clone(),object:e}}function Ns(e,A,I,g,i,C,t,B,o,Q){e.getVertexPosition(B,uo),e.getVertexPosition(o,yo),e.getVertexPosition(Q,fo);const n=QK(e,A,I,g,uo,yo,fo,ks);if(n){i&&(fs.fromBufferAttribute(i,B),Gs.fromBufferAttribute(i,o),Ms.fromBufferAttribute(i,Q),n.uv=GB.getInterpolation(ks,uo,yo,fo,fs,Gs,Ms,new NA)),C&&(fs.fromBufferAttribute(C,B),Gs.fromBufferAttribute(C,o),Ms.fromBufferAttribute(C,Q),n.uv1=GB.getInterpolation(ks,uo,yo,fo,fs,Gs,Ms,new NA)),t&&(Ep.fromBufferAttribute(t,B),sp.fromBufferAttribute(t,o),ap.fromBufferAttribute(t,Q),n.normal=GB.getInterpolation(ks,uo,yo,fo,Ep,sp,ap,new H),n.normal.dot(g.direction)>0&&n.normal.multiplyScalar(-1));const E={a:B,b:o,c:Q,normal:new H,materialIndex:0};GB.getNormal(uo,yo,fo,E.normal),n.face=E}return n}let bE=class WM extends kI{constructor(A=1,I=1,g=1,i=1,C=1,t=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:i,heightSegments:C,depthSegments:t};const B=this;i=Math.floor(i),C=Math.floor(C),t=Math.floor(t);const o=[],Q=[],n=[],E=[];let s=0,a=0;r("z","y","x",-1,-1,g,I,A,t,C,0),r("z","y","x",1,-1,g,I,-A,t,C,1),r("x","z","y",1,1,A,g,I,i,t,2),r("x","z","y",1,-1,A,g,-I,i,t,3),r("x","y","z",1,-1,A,I,g,i,C,4),r("x","y","z",-1,-1,A,I,-g,i,C,5),this.setIndex(o),this.setAttribute("position",new nI(Q,3)),this.setAttribute("normal",new nI(n,3)),this.setAttribute("uv",new nI(E,2));function r(l,c,h,S,D,d,f,u,y,M,w){const p=d/y,F=f/M,T=d/2,J=f/2,m=u/2,b=y+1,O=M+1;let z=0,V=0;const AA=new H;for(let oA=0;oA<O;oA++){const aA=oA*F-J;for(let GA=0;GA<b;GA++){const rA=GA*p-T;AA[l]=rA*S,AA[c]=aA*D,AA[h]=m,Q.push(AA.x,AA.y,AA.z),AA[l]=0,AA[c]=0,AA[h]=u>0?1:-1,n.push(AA.x,AA.y,AA.z),E.push(GA/y),E.push(1-oA/M),z+=1}}for(let oA=0;oA<M;oA++)for(let aA=0;aA<y;aA++){const GA=s+aA+b*oA,rA=s+aA+b*(oA+1),X=s+(aA+1)+b*(oA+1),lA=s+(aA+1)+b*oA;o.push(GA,rA,lA),o.push(rA,X,lA),V+=6}B.addGroup(a,V,w),a+=V,s+=z}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new WM(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}};function uQ(e){const A={};for(const I in e){A[I]={};for(const g in e[I]){const i=e[I][g];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=i.clone():Array.isArray(i)?A[I][g]=i.slice():A[I][g]=i}}return A}function Yi(e){const A={};for(let I=0;I<e.length;I++){const g=uQ(e[I]);for(const i in g)A[i]=g[i]}return A}function nK(e){const A=[];for(let I=0;I<e.length;I++)A.push(e[I].clone());return A}function VM(e){const A=e.getRenderTarget();return A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gg.workingColorSpace}const zM={clone:uQ,merge:Yi};var EK=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sK=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let YC=class extends Ki{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EK,this.fragmentShader=sK,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=uQ(A.uniforms),this.uniformsGroups=nK(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const i in this.uniforms){const t=this.uniforms[i].value;t&&t.isTexture?I.uniforms[i]={type:"t",value:t.toJSON(A).uuid}:t&&t.isColor?I.uniforms[i]={type:"c",value:t.getHex()}:t&&t.isVector2?I.uniforms[i]={type:"v2",value:t.toArray()}:t&&t.isVector3?I.uniforms[i]={type:"v3",value:t.toArray()}:t&&t.isVector4?I.uniforms[i]={type:"v4",value:t.toArray()}:t&&t.isMatrix3?I.uniforms[i]={type:"m3",value:t.toArray()}:t&&t.isMatrix4?I.uniforms[i]={type:"m4",value:t.toArray()}:I.uniforms[i]={value:t}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const i in this.extensions)this.extensions[i]===!0&&(g[i]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}},Wr=class extends $I{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new aI,this.projectionMatrix=new aI,this.projectionMatrixInverse=new aI,this.coordinateSystem=te}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const it=new H,rp=new NA,hp=new NA;let ri=class extends Wr{constructor(A=50,I=1,g=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=i,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=pQ*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(qB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return pQ*2*Math.atan(Math.tan(qB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){it.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(it.x,it.y).multiplyScalar(-A/it.z),it.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(it.x,it.y).multiplyScalar(-A/it.z)}getViewSize(A,I){return this.getViewBounds(A,rp,hp),I.subVectors(hp,rp)}setViewOffset(A,I,g,i,C,t){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=i,this.view.width=C,this.view.height=t,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(qB*.5*this.fov)/this.zoom,g=2*I,i=this.aspect*g,C=-.5*i;const t=this.view;if(this.view!==null&&this.view.enabled){const o=t.fullWidth,Q=t.fullHeight;C+=t.offsetX*i/o,I-=t.offsetY*g/Q,i*=t.width/o,g*=t.height/Q}const B=this.filmOffset;B!==0&&(C+=A*B/this.getFilmWidth()),this.projectionMatrix.makePerspective(C,C+i,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}};const Go=-90,Mo=1;let jM=class extends $I{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ri(Go,Mo,A,I);i.layers=this.layers,this.add(i);const C=new ri(Go,Mo,A,I);C.layers=this.layers,this.add(C);const t=new ri(Go,Mo,A,I);t.layers=this.layers,this.add(t);const B=new ri(Go,Mo,A,I);B.layers=this.layers,this.add(B);const o=new ri(Go,Mo,A,I);o.layers=this.layers,this.add(o);const Q=new ri(Go,Mo,A,I);Q.layers=this.layers,this.add(Q)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,i,C,t,B,o]=I;for(const Q of I)this.remove(Q);if(A===te)g.up.set(0,1,0),g.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),C.up.set(0,0,-1),C.lookAt(0,1,0),t.up.set(0,0,1),t.lookAt(0,-1,0),B.up.set(0,1,0),B.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===IE)g.up.set(0,-1,0),g.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),C.up.set(0,0,1),C.lookAt(0,1,0),t.up.set(0,0,-1),t.lookAt(0,-1,0),B.up.set(0,-1,0),B.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const Q of I)this.add(Q),Q.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:i}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[C,t,B,o,Q,n]=this.children,E=A.getRenderTarget(),s=A.getActiveCubeFace(),a=A.getActiveMipmapLevel(),r=A.xr.enabled;A.xr.enabled=!1;const l=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,i),A.render(I,C),A.setRenderTarget(g,1,i),A.render(I,t),A.setRenderTarget(g,2,i),A.render(I,B),A.setRenderTarget(g,3,i),A.render(I,o),A.setRenderTarget(g,4,i),A.render(I,Q),g.texture.generateMipmaps=l,A.setRenderTarget(g,5,i),A.render(I,n),A.setRenderTarget(E,s,a),A.xr.enabled=r,g.texture.needsPMREMUpdate=!0}},_E=class extends ci{constructor(A,I,g,i,C,t,B,o,Q,n){A=A!==void 0?A:[],I=I!==void 0?I:be,super(A,I,g,i,C,t,B,o,Q,n),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}},XM=class extends LC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},i=[g,g,g,g,g,g];this.texture=new _E(i,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:Vg}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bE(5,5,5),C=new YC({name:"CubemapFromEquirect",uniforms:uQ(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:_i,blending:Je});C.uniforms.tEquirect.value=I;const t=new bg(i,C),B=I.minFilter;return I.minFilter===ee&&(I.minFilter=Vg),new jM(1,10,this).update(A,t),I.minFilter=B,t.geometry.dispose(),t.material.dispose(),this}clear(A,I,g,i){const C=A.getRenderTarget();for(let t=0;t<6;t++)A.setRenderTarget(this,t),A.clear(I,g,i);A.setRenderTarget(C)}};const hc=new H,aK=new H,rK=new GI;let ht=class{constructor(A=new H(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,i){return this.normal.set(A,I,g),this.constant=i,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const i=hc.subVectors(g,I).cross(aK.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(i,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(hc),i=this.normal.dot(g);if(i===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const C=-(A.start.dot(this.normal)+this.constant)/i;return C<0||C>1?null:I.copy(A.start).addScaledVector(g,C)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||rK.getNormalMatrix(A),i=this.coplanarPoint(hc).applyMatrix4(A),C=this.normal.applyMatrix3(g).normalize();return this.constant=-i.dot(C),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}};const zt=new Ri,Rs=new H;let vE=class{constructor(A=new ht,I=new ht,g=new ht,i=new ht,C=new ht,t=new ht){this.planes=[A,I,g,i,C,t]}set(A,I,g,i,C,t){const B=this.planes;return B[0].copy(A),B[1].copy(I),B[2].copy(g),B[3].copy(i),B[4].copy(C),B[5].copy(t),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=te){const g=this.planes,i=A.elements,C=i[0],t=i[1],B=i[2],o=i[3],Q=i[4],n=i[5],E=i[6],s=i[7],a=i[8],r=i[9],l=i[10],c=i[11],h=i[12],S=i[13],D=i[14],d=i[15];if(g[0].setComponents(o-C,s-Q,c-a,d-h).normalize(),g[1].setComponents(o+C,s+Q,c+a,d+h).normalize(),g[2].setComponents(o+t,s+n,c+r,d+S).normalize(),g[3].setComponents(o-t,s-n,c-r,d-S).normalize(),g[4].setComponents(o-B,s-E,c-l,d-D).normalize(),I===te)g[5].setComponents(o+B,s+E,c+l,d+D).normalize();else if(I===IE)g[5].setComponents(B,E,l,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),zt.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),zt.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(zt)}intersectsSprite(A){return zt.center.set(0,0,0),zt.radius=.7071067811865476,zt.applyMatrix4(A.matrixWorld),this.intersectsSphere(zt)}intersectsSphere(A){const I=this.planes,g=A.center,i=-A.radius;for(let C=0;C<6;C++)if(I[C].distanceToPoint(g)<i)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const i=I[g];if(Rs.x=i.normal.x>0?A.max.x:A.min.x,Rs.y=i.normal.y>0?A.max.y:A.min.y,Rs.z=i.normal.z>0?A.max.z:A.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function $M(){let e=null,A=!1,I=null,g=null;function i(C,t){I(C,t),g=e.requestAnimationFrame(i)}return{start:function(){A!==!0&&I!==null&&(g=e.requestAnimationFrame(i),A=!0)},stop:function(){e.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(C){I=C},setContext:function(C){e=C}}}function hK(e){const A=new WeakMap;function I(B,o){const Q=B.array,n=B.usage,E=Q.byteLength,s=e.createBuffer();e.bindBuffer(o,s),e.bufferData(o,Q,n),B.onUploadCallback();let a;if(Q instanceof Float32Array)a=e.FLOAT;else if(Q instanceof Uint16Array)B.isFloat16BufferAttribute?a=e.HALF_FLOAT:a=e.UNSIGNED_SHORT;else if(Q instanceof Int16Array)a=e.SHORT;else if(Q instanceof Uint32Array)a=e.UNSIGNED_INT;else if(Q instanceof Int32Array)a=e.INT;else if(Q instanceof Int8Array)a=e.BYTE;else if(Q instanceof Uint8Array)a=e.UNSIGNED_BYTE;else if(Q instanceof Uint8ClampedArray)a=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+Q);return{buffer:s,type:a,bytesPerElement:Q.BYTES_PER_ELEMENT,version:B.version,size:E}}function g(B,o,Q){const n=o.array,E=o._updateRange,s=o.updateRanges;if(e.bindBuffer(Q,B),E.count===-1&&s.length===0&&e.bufferSubData(Q,0,n),s.length!==0){for(let a=0,r=s.length;a<r;a++){const l=s[a];e.bufferSubData(Q,l.start*n.BYTES_PER_ELEMENT,n,l.start,l.count)}o.clearUpdateRanges()}E.count!==-1&&(e.bufferSubData(Q,E.offset*n.BYTES_PER_ELEMENT,n,E.offset,E.count),E.count=-1),o.onUploadCallback()}function i(B){return B.isInterleavedBufferAttribute&&(B=B.data),A.get(B)}function C(B){B.isInterleavedBufferAttribute&&(B=B.data);const o=A.get(B);o&&(e.deleteBuffer(o.buffer),A.delete(B))}function t(B,o){if(B.isGLBufferAttribute){const n=A.get(B);(!n||n.version<B.version)&&A.set(B,{buffer:B.buffer,type:B.type,bytesPerElement:B.elementSize,version:B.version});return}B.isInterleavedBufferAttribute&&(B=B.data);const Q=A.get(B);if(Q===void 0)A.set(B,I(B,o));else if(Q.version<B.version){if(Q.size!==B.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(Q.buffer,B,o),Q.version=B.version}}return{get:i,remove:C,update:t}}let Vr=class A0 extends kI{constructor(A=1,I=1,g=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:i};const C=A/2,t=I/2,B=Math.floor(g),o=Math.floor(i),Q=B+1,n=o+1,E=A/B,s=I/o,a=[],r=[],l=[],c=[];for(let h=0;h<n;h++){const S=h*s-t;for(let D=0;D<Q;D++){const d=D*E-C;r.push(d,-S,0),l.push(0,0,1),c.push(D/B),c.push(1-h/o)}}for(let h=0;h<o;h++)for(let S=0;S<B;S++){const D=S+Q*h,d=S+Q*(h+1),f=S+1+Q*(h+1),u=S+1+Q*h;a.push(D,d,u),a.push(d,f,u)}this.setIndex(a),this.setAttribute("position",new nI(r,3)),this.setAttribute("normal",new nI(l,3)),this.setAttribute("uv",new nI(c,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new A0(A.width,A.height,A.widthSegments,A.heightSegments)}};var cK=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lK=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DK=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SK=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dK=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wK=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pK=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uK=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yK=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fK=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,GK=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MK=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kK=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UK=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NK=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RK=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,FK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mK=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KK=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JK=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LK=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,YK=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,HK=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xK=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TK=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bK=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_K=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vK=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OK=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PK="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZK=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,WK=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VK=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zK=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jK=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XK=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$K=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AJ=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IJ=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gJ=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iJ=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CJ=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eJ=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tJ=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BJ=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oJ=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,QJ=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nJ=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,EJ=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sJ=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aJ=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rJ=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hJ=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cJ=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lJ=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DJ=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SJ=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dJ=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wJ=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pJ=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uJ=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yJ=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fJ=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GJ=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MJ=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kJ=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UJ=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NJ=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RJ=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,FJ=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mJ=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,KJ=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JJ=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qJ=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LJ=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YJ=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HJ=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xJ=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TJ=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bJ=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_J=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vJ=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OJ=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,PJ=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZJ=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WJ=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VJ=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zJ=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jJ=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XJ=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,$J=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Aq=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Iq=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gq=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iq=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cq=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eq=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tq=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bq=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oq=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qq=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nq=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eq=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rq=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hq=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cq=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lq=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sq=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wq=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pq=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uq=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yq=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fq=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gq=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mq=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kq=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uq=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nq=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rq=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fq=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mq=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kq=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jq=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qq=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lq=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yq=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hq=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xq=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tq=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bq=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_q=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vq=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Oq=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pq=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zq=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wq=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vq=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rI={alphahash_fragment:cK,alphahash_pars_fragment:lK,alphamap_fragment:DK,alphamap_pars_fragment:SK,alphatest_fragment:dK,alphatest_pars_fragment:wK,aomap_fragment:pK,aomap_pars_fragment:uK,batching_pars_vertex:yK,batching_vertex:fK,begin_vertex:GK,beginnormal_vertex:MK,bsdfs:kK,iridescence_fragment:UK,bumpmap_pars_fragment:NK,clipping_planes_fragment:RK,clipping_planes_pars_fragment:FK,clipping_planes_pars_vertex:mK,clipping_planes_vertex:KK,color_fragment:JK,color_pars_fragment:qK,color_pars_vertex:LK,color_vertex:YK,common:HK,cube_uv_reflection_fragment:xK,defaultnormal_vertex:TK,displacementmap_pars_vertex:bK,displacementmap_vertex:_K,emissivemap_fragment:vK,emissivemap_pars_fragment:OK,colorspace_fragment:PK,colorspace_pars_fragment:ZK,envmap_fragment:WK,envmap_common_pars_fragment:VK,envmap_pars_fragment:zK,envmap_pars_vertex:jK,envmap_physical_pars_fragment:QJ,envmap_vertex:XK,fog_vertex:$K,fog_pars_vertex:AJ,fog_fragment:IJ,fog_pars_fragment:gJ,gradientmap_pars_fragment:iJ,lightmap_fragment:CJ,lightmap_pars_fragment:eJ,lights_lambert_fragment:tJ,lights_lambert_pars_fragment:BJ,lights_pars_begin:oJ,lights_toon_fragment:nJ,lights_toon_pars_fragment:EJ,lights_phong_fragment:sJ,lights_phong_pars_fragment:aJ,lights_physical_fragment:rJ,lights_physical_pars_fragment:hJ,lights_fragment_begin:cJ,lights_fragment_maps:lJ,lights_fragment_end:DJ,logdepthbuf_fragment:SJ,logdepthbuf_pars_fragment:dJ,logdepthbuf_pars_vertex:wJ,logdepthbuf_vertex:pJ,map_fragment:uJ,map_pars_fragment:yJ,map_particle_fragment:fJ,map_particle_pars_fragment:GJ,metalnessmap_fragment:MJ,metalnessmap_pars_fragment:kJ,morphinstance_vertex:UJ,morphcolor_vertex:NJ,morphnormal_vertex:RJ,morphtarget_pars_vertex:FJ,morphtarget_vertex:mJ,normal_fragment_begin:KJ,normal_fragment_maps:JJ,normal_pars_fragment:qJ,normal_pars_vertex:LJ,normal_vertex:YJ,normalmap_pars_fragment:HJ,clearcoat_normal_fragment_begin:xJ,clearcoat_normal_fragment_maps:TJ,clearcoat_pars_fragment:bJ,iridescence_pars_fragment:_J,opaque_fragment:vJ,packing:OJ,premultiplied_alpha_fragment:PJ,project_vertex:ZJ,dithering_fragment:WJ,dithering_pars_fragment:VJ,roughnessmap_fragment:zJ,roughnessmap_pars_fragment:jJ,shadowmap_pars_fragment:XJ,shadowmap_pars_vertex:$J,shadowmap_vertex:Aq,shadowmask_pars_fragment:Iq,skinbase_vertex:gq,skinning_pars_vertex:iq,skinning_vertex:Cq,skinnormal_vertex:eq,specularmap_fragment:tq,specularmap_pars_fragment:Bq,tonemapping_fragment:oq,tonemapping_pars_fragment:Qq,transmission_fragment:nq,transmission_pars_fragment:Eq,uv_pars_fragment:sq,uv_pars_vertex:aq,uv_vertex:rq,worldpos_vertex:hq,background_vert:cq,background_frag:lq,backgroundCube_vert:Dq,backgroundCube_frag:Sq,cube_vert:dq,cube_frag:wq,depth_vert:pq,depth_frag:uq,distanceRGBA_vert:yq,distanceRGBA_frag:fq,equirect_vert:Gq,equirect_frag:Mq,linedashed_vert:kq,linedashed_frag:Uq,meshbasic_vert:Nq,meshbasic_frag:Rq,meshlambert_vert:Fq,meshlambert_frag:mq,meshmatcap_vert:Kq,meshmatcap_frag:Jq,meshnormal_vert:qq,meshnormal_frag:Lq,meshphong_vert:Yq,meshphong_frag:Hq,meshphysical_vert:xq,meshphysical_frag:Tq,meshtoon_vert:bq,meshtoon_frag:_q,points_vert:vq,points_frag:Oq,shadow_vert:Pq,shadow_frag:Zq,sprite_vert:Wq,sprite_frag:Vq},XA={common:{diffuse:{value:new iI(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new GI},alphaMap:{value:null},alphaMapTransform:{value:new GI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new GI}},envmap:{envMap:{value:null},envMapRotation:{value:new GI},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new GI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new GI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new GI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new GI},normalScale:{value:new NA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new GI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new GI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new GI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new GI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new iI(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new iI(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new GI},alphaTest:{value:0},uvTransform:{value:new GI}},sprite:{diffuse:{value:new iI(16777215)},opacity:{value:1},center:{value:new NA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new GI},alphaMap:{value:null},alphaMapTransform:{value:new GI},alphaTest:{value:0}}},KC={basic:{uniforms:Yi([XA.common,XA.specularmap,XA.envmap,XA.aomap,XA.lightmap,XA.fog]),vertexShader:rI.meshbasic_vert,fragmentShader:rI.meshbasic_frag},lambert:{uniforms:Yi([XA.common,XA.specularmap,XA.envmap,XA.aomap,XA.lightmap,XA.emissivemap,XA.bumpmap,XA.normalmap,XA.displacementmap,XA.fog,XA.lights,{emissive:{value:new iI(0)}}]),vertexShader:rI.meshlambert_vert,fragmentShader:rI.meshlambert_frag},phong:{uniforms:Yi([XA.common,XA.specularmap,XA.envmap,XA.aomap,XA.lightmap,XA.emissivemap,XA.bumpmap,XA.normalmap,XA.displacementmap,XA.fog,XA.lights,{emissive:{value:new iI(0)},specular:{value:new iI(1118481)},shininess:{value:30}}]),vertexShader:rI.meshphong_vert,fragmentShader:rI.meshphong_frag},standard:{uniforms:Yi([XA.common,XA.envmap,XA.aomap,XA.lightmap,XA.emissivemap,XA.bumpmap,XA.normalmap,XA.displacementmap,XA.roughnessmap,XA.metalnessmap,XA.fog,XA.lights,{emissive:{value:new iI(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rI.meshphysical_vert,fragmentShader:rI.meshphysical_frag},toon:{uniforms:Yi([XA.common,XA.aomap,XA.lightmap,XA.emissivemap,XA.bumpmap,XA.normalmap,XA.displacementmap,XA.gradientmap,XA.fog,XA.lights,{emissive:{value:new iI(0)}}]),vertexShader:rI.meshtoon_vert,fragmentShader:rI.meshtoon_frag},matcap:{uniforms:Yi([XA.common,XA.bumpmap,XA.normalmap,XA.displacementmap,XA.fog,{matcap:{value:null}}]),vertexShader:rI.meshmatcap_vert,fragmentShader:rI.meshmatcap_frag},points:{uniforms:Yi([XA.points,XA.fog]),vertexShader:rI.points_vert,fragmentShader:rI.points_frag},dashed:{uniforms:Yi([XA.common,XA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rI.linedashed_vert,fragmentShader:rI.linedashed_frag},depth:{uniforms:Yi([XA.common,XA.displacementmap]),vertexShader:rI.depth_vert,fragmentShader:rI.depth_frag},normal:{uniforms:Yi([XA.common,XA.bumpmap,XA.normalmap,XA.displacementmap,{opacity:{value:1}}]),vertexShader:rI.meshnormal_vert,fragmentShader:rI.meshnormal_frag},sprite:{uniforms:Yi([XA.sprite,XA.fog]),vertexShader:rI.sprite_vert,fragmentShader:rI.sprite_frag},background:{uniforms:{uvTransform:{value:new GI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rI.background_vert,fragmentShader:rI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new GI}},vertexShader:rI.backgroundCube_vert,fragmentShader:rI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rI.cube_vert,fragmentShader:rI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rI.equirect_vert,fragmentShader:rI.equirect_frag},distanceRGBA:{uniforms:Yi([XA.common,XA.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rI.distanceRGBA_vert,fragmentShader:rI.distanceRGBA_frag},shadow:{uniforms:Yi([XA.lights,XA.fog,{color:{value:new iI(0)},opacity:{value:1}}]),vertexShader:rI.shadow_vert,fragmentShader:rI.shadow_frag}};KC.physical={uniforms:Yi([KC.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new GI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new GI},clearcoatNormalScale:{value:new NA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new GI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new GI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new GI},sheen:{value:0},sheenColor:{value:new iI(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new GI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new GI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new GI},transmissionSamplerSize:{value:new NA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new GI},attenuationDistance:{value:0},attenuationColor:{value:new iI(0)},specularColor:{value:new iI(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new GI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new GI},anisotropyVector:{value:new NA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new GI}}]),vertexShader:rI.meshphysical_vert,fragmentShader:rI.meshphysical_frag};const Fs={r:0,b:0,g:0},jt=new aC,zq=new aI;function jq(e,A,I,g,i,C,t){const B=new iI(0);let o=C===!0?0:1,Q,n,E=null,s=0,a=null;function r(c,h){let S=!1,D=h.isScene===!0?h.background:null;D&&D.isTexture&&(D=(h.backgroundBlurriness>0?I:A).get(D)),D===null?l(B,o):D&&D.isColor&&(l(D,1),S=!0);const d=e.xr.getEnvironmentBlendMode();d==="additive"?g.buffers.color.setClear(0,0,0,1,t):d==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,t),(e.autoClear||S)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),D&&(D.isCubeTexture||D.mapping===LQ)?(n===void 0&&(n=new bg(new bE(1,1,1),new YC({name:"BackgroundCubeMaterial",uniforms:uQ(KC.backgroundCube.uniforms),vertexShader:KC.backgroundCube.vertexShader,fragmentShader:KC.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),n.geometry.deleteAttribute("normal"),n.geometry.deleteAttribute("uv"),n.onBeforeRender=function(f,u,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(n.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(n)),jt.copy(h.backgroundRotation),jt.x*=-1,jt.y*=-1,jt.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(jt.y*=-1,jt.z*=-1),n.material.uniforms.envMap.value=D,n.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,n.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,n.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,n.material.uniforms.backgroundRotation.value.setFromMatrix4(zq.makeRotationFromEuler(jt)),n.material.toneMapped=gg.getTransfer(D.colorSpace)!==sg,(E!==D||s!==D.version||a!==e.toneMapping)&&(n.material.needsUpdate=!0,E=D,s=D.version,a=e.toneMapping),n.layers.enableAll(),c.unshift(n,n.geometry,n.material,0,0,null)):D&&D.isTexture&&(Q===void 0&&(Q=new bg(new Vr(2,2),new YC({name:"BackgroundMaterial",uniforms:uQ(KC.background.uniforms),vertexShader:KC.background.vertexShader,fragmentShader:KC.background.fragmentShader,side:oe,depthTest:!1,depthWrite:!1,fog:!1})),Q.geometry.deleteAttribute("normal"),Object.defineProperty(Q.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(Q)),Q.material.uniforms.t2D.value=D,Q.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,Q.material.toneMapped=gg.getTransfer(D.colorSpace)!==sg,D.matrixAutoUpdate===!0&&D.updateMatrix(),Q.material.uniforms.uvTransform.value.copy(D.matrix),(E!==D||s!==D.version||a!==e.toneMapping)&&(Q.material.needsUpdate=!0,E=D,s=D.version,a=e.toneMapping),Q.layers.enableAll(),c.unshift(Q,Q.geometry,Q.material,0,0,null))}function l(c,h){c.getRGB(Fs,VM(e)),g.buffers.color.setClear(Fs.r,Fs.g,Fs.b,h,t)}return{getClearColor:function(){return B},setClearColor:function(c,h=1){B.set(c),o=h,l(B,o)},getClearAlpha:function(){return o},setClearAlpha:function(c){o=c,l(B,o)},render:r}}function Xq(e,A){const I=e.getParameter(e.MAX_VERTEX_ATTRIBS),g={},i=s(null);let C=i,t=!1;function B(p,F,T,J,m){let b=!1;const O=E(J,T,F);C!==O&&(C=O,Q(C.object)),b=a(p,J,T,m),b&&r(p,J,T,m),m!==null&&A.update(m,e.ELEMENT_ARRAY_BUFFER),(b||t)&&(t=!1,d(p,F,T,J),m!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,A.get(m).buffer))}function o(){return e.createVertexArray()}function Q(p){return e.bindVertexArray(p)}function n(p){return e.deleteVertexArray(p)}function E(p,F,T){const J=T.wireframe===!0;let m=g[p.id];m===void 0&&(m={},g[p.id]=m);let b=m[F.id];b===void 0&&(b={},m[F.id]=b);let O=b[J];return O===void 0&&(O=s(o()),b[J]=O),O}function s(p){const F=[],T=[],J=[];for(let m=0;m<I;m++)F[m]=0,T[m]=0,J[m]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:T,attributeDivisors:J,object:p,attributes:{},index:null}}function a(p,F,T,J){const m=C.attributes,b=F.attributes;let O=0;const z=T.getAttributes();for(const V in z)if(z[V].location>=0){const oA=m[V];let aA=b[V];if(aA===void 0&&(V==="instanceMatrix"&&p.instanceMatrix&&(aA=p.instanceMatrix),V==="instanceColor"&&p.instanceColor&&(aA=p.instanceColor)),oA===void 0||oA.attribute!==aA||aA&&oA.data!==aA.data)return!0;O++}return C.attributesNum!==O||C.index!==J}function r(p,F,T,J){const m={},b=F.attributes;let O=0;const z=T.getAttributes();for(const V in z)if(z[V].location>=0){let oA=b[V];oA===void 0&&(V==="instanceMatrix"&&p.instanceMatrix&&(oA=p.instanceMatrix),V==="instanceColor"&&p.instanceColor&&(oA=p.instanceColor));const aA={};aA.attribute=oA,oA&&oA.data&&(aA.data=oA.data),m[V]=aA,O++}C.attributes=m,C.attributesNum=O,C.index=J}function l(){const p=C.newAttributes;for(let F=0,T=p.length;F<T;F++)p[F]=0}function c(p){h(p,0)}function h(p,F){const T=C.newAttributes,J=C.enabledAttributes,m=C.attributeDivisors;T[p]=1,J[p]===0&&(e.enableVertexAttribArray(p),J[p]=1),m[p]!==F&&(e.vertexAttribDivisor(p,F),m[p]=F)}function S(){const p=C.newAttributes,F=C.enabledAttributes;for(let T=0,J=F.length;T<J;T++)F[T]!==p[T]&&(e.disableVertexAttribArray(T),F[T]=0)}function D(p,F,T,J,m,b,O){O===!0?e.vertexAttribIPointer(p,F,T,m,b):e.vertexAttribPointer(p,F,T,J,m,b)}function d(p,F,T,J){l();const m=J.attributes,b=T.getAttributes(),O=F.defaultAttributeValues;for(const z in b){const V=b[z];if(V.location>=0){let AA=m[z];if(AA===void 0&&(z==="instanceMatrix"&&p.instanceMatrix&&(AA=p.instanceMatrix),z==="instanceColor"&&p.instanceColor&&(AA=p.instanceColor)),AA!==void 0){const oA=AA.normalized,aA=AA.itemSize,GA=A.get(AA);if(GA===void 0)continue;const rA=GA.buffer,X=GA.type,lA=GA.bytesPerElement,yA=X===e.INT||X===e.UNSIGNED_INT||AA.gpuType===KS;if(AA.isInterleavedBufferAttribute){const SA=AA.data,JA=SA.stride,ZA=AA.offset;if(SA.isInstancedInterleavedBuffer){for(let FA=0;FA<V.locationSize;FA++)h(V.location+FA,SA.meshPerAttribute);p.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=SA.meshPerAttribute*SA.count)}else for(let FA=0;FA<V.locationSize;FA++)c(V.location+FA);e.bindBuffer(e.ARRAY_BUFFER,rA);for(let FA=0;FA<V.locationSize;FA++)D(V.location+FA,aA/V.locationSize,X,oA,JA*lA,(ZA+aA/V.locationSize*FA)*lA,yA)}else{if(AA.isInstancedBufferAttribute){for(let SA=0;SA<V.locationSize;SA++)h(V.location+SA,AA.meshPerAttribute);p.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=AA.meshPerAttribute*AA.count)}else for(let SA=0;SA<V.locationSize;SA++)c(V.location+SA);e.bindBuffer(e.ARRAY_BUFFER,rA);for(let SA=0;SA<V.locationSize;SA++)D(V.location+SA,aA/V.locationSize,X,oA,aA*lA,aA/V.locationSize*SA*lA,yA)}}else if(O!==void 0){const oA=O[z];if(oA!==void 0)switch(oA.length){case 2:e.vertexAttrib2fv(V.location,oA);break;case 3:e.vertexAttrib3fv(V.location,oA);break;case 4:e.vertexAttrib4fv(V.location,oA);break;default:e.vertexAttrib1fv(V.location,oA)}}}}S()}function f(){M();for(const p in g){const F=g[p];for(const T in F){const J=F[T];for(const m in J)n(J[m].object),delete J[m];delete F[T]}delete g[p]}}function u(p){if(g[p.id]===void 0)return;const F=g[p.id];for(const T in F){const J=F[T];for(const m in J)n(J[m].object),delete J[m];delete F[T]}delete g[p.id]}function y(p){for(const F in g){const T=g[F];if(T[p.id]===void 0)continue;const J=T[p.id];for(const m in J)n(J[m].object),delete J[m];delete T[p.id]}}function M(){w(),t=!0,C!==i&&(C=i,Q(C.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:B,reset:M,resetDefaultState:w,dispose:f,releaseStatesOfGeometry:u,releaseStatesOfProgram:y,initAttributes:l,enableAttribute:c,disableUnusedAttributes:S}}function $q(e,A,I){let g;function i(o){g=o}function C(o,Q){e.drawArrays(g,o,Q),I.update(Q,g,1)}function t(o,Q,n){n!==0&&(e.drawArraysInstanced(g,o,Q,n),I.update(Q,g,n))}function B(o,Q,n){if(n===0)return;const E=A.get("WEBGL_multi_draw");if(E===null)for(let s=0;s<n;s++)this.render(o[s],Q[s]);else{E.multiDrawArraysWEBGL(g,o,0,Q,0,n);let s=0;for(let a=0;a<n;a++)s+=Q[a];I.update(s,g,1)}}this.setMode=i,this.render=C,this.renderInstances=t,this.renderMultiDraw=B}function AL(e,A,I){let g;function i(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const D=A.get("EXT_texture_filter_anisotropic");g=e.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function C(D){if(D==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let t=I.precision!==void 0?I.precision:"highp";const B=C(t);B!==t&&(console.warn("THREE.WebGLRenderer:",t,"not supported, using",B,"instead."),t=B);const o=I.logarithmicDepthBuffer===!0,Q=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),n=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),s=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),a=e.getParameter(e.MAX_VERTEX_ATTRIBS),r=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),l=e.getParameter(e.MAX_VARYING_VECTORS),c=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),h=n>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:C,precision:t,logarithmicDepthBuffer:o,maxTextures:Q,maxVertexTextures:n,maxTextureSize:E,maxCubemapSize:s,maxAttributes:a,maxVertexUniforms:r,maxVaryings:l,maxFragmentUniforms:c,vertexTextures:h,maxSamples:S}}function IL(e){const A=this;let I=null,g=0,i=!1,C=!1;const t=new ht,B=new GI,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(E,s){const a=E.length!==0||s||g!==0||i;return i=s,g=E.length,a},this.beginShadows=function(){C=!0,n(null)},this.endShadows=function(){C=!1},this.setGlobalState=function(E,s){I=n(E,s,0)},this.setState=function(E,s,a){const r=E.clippingPlanes,l=E.clipIntersection,c=E.clipShadows,h=e.get(E);if(!i||r===null||r.length===0||C&&!c)C?n(null):Q();else{const S=C?0:g,D=S*4;let d=h.clippingState||null;o.value=d,d=n(r,s,D,a);for(let f=0;f!==D;++f)d[f]=I[f];h.clippingState=d,this.numIntersection=l?this.numPlanes:0,this.numPlanes+=S}};function Q(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function n(E,s,a,r){const l=E!==null?E.length:0;let c=null;if(l!==0){if(c=o.value,r!==!0||c===null){const h=a+l*4,S=s.matrixWorldInverse;B.getNormalMatrix(S),(c===null||c.length<h)&&(c=new Float32Array(h));for(let D=0,d=a;D!==l;++D,d+=4)t.copy(E[D]).applyMatrix4(S,B),t.normal.toArray(c,d),c[d+3]=t.constant}o.value=c,o.needsUpdate=!0}return A.numPlanes=l,A.numIntersection=0,c}}function gL(e){let A=new WeakMap;function I(t,B){return B===_n?t.mapping=be:B===vn&&(t.mapping=Nt),t}function g(t){if(t&&t.isTexture){const B=t.mapping;if(B===_n||B===vn)if(A.has(t)){const o=A.get(t).texture;return I(o,t.mapping)}else{const o=t.image;if(o&&o.height>0){const Q=new XM(o.height);return Q.fromEquirectangularTexture(e,t),A.set(t,Q),t.addEventListener("dispose",i),I(Q.texture,t.mapping)}else return null}}return t}function i(t){const B=t.target;B.removeEventListener("dispose",i);const o=A.get(B);o!==void 0&&(A.delete(B),o.dispose())}function C(){A=new WeakMap}return{get:g,dispose:C}}let zr=class extends Wr{constructor(A=-1,I=1,g=1,i=-1,C=.1,t=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=i,this.near=C,this.far=t,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,i,C,t){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=i,this.view.width=C,this.view.height=t,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let C=g-A,t=g+A,B=i+I,o=i-I;if(this.view!==null&&this.view.enabled){const Q=(this.right-this.left)/this.view.fullWidth/this.zoom,n=(this.top-this.bottom)/this.view.fullHeight/this.zoom;C+=Q*this.view.offsetX,t=C+Q*this.view.width,B-=n*this.view.offsetY,o=B-n*this.view.height}this.projectionMatrix.makeOrthographic(C,t,B,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}};const oQ=4,cp=[.125,.215,.35,.446,.526,.582],wB=20,cc=new zr,lp=new iI;let lc=null,Dc=0,Sc=0,dc=!1;const DB=(1+Math.sqrt(5))/2,ko=1/DB,Dp=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,DB,ko),new H(0,DB,-ko),new H(ko,0,DB),new H(-ko,0,DB),new H(DB,ko,0),new H(-DB,ko,0)];let nD=class{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,i=100){lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const C=this._allocateTargets();return C.depthBuffer=!0,this._sceneToCubeUV(A,g,i,C),I>0&&this._blur(C,0,0,I),this._applyPMREM(C),this._cleanup(C),C}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(lc,Dc,Sc),this._renderer.xr.enabled=dc,A.scissorTest=!1,ms(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===be||A.mapping===Nt?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:Vg,minFilter:Vg,generateMipmaps:!1,type:Zn,format:nC,colorSpace:We,depthBuffer:!1},i=Sp(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(A,I,g);const{_lodMax:C}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iL(C)),this._blurMaterial=CL(C,A,I)}return i}_compileMaterial(A){const I=new bg(this._lodPlanes[0],A);this._renderer.compile(I,cc)}_sceneToCubeUV(A,I,g,i){const B=new ri(90,1,I,g),o=[1,-1,1,1,1,1],Q=[1,1,1,-1,-1,-1],n=this._renderer,E=n.autoClear,s=n.toneMapping;n.getClearColor(lp),n.toneMapping=qe,n.autoClear=!1;const a=new Lt({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1}),r=new bg(new bE,a);let l=!1;const c=A.background;c?c.isColor&&(a.color.copy(c),A.background=null,l=!0):(a.color.copy(lp),l=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(B.up.set(0,o[h],0),B.lookAt(Q[h],0,0)):S===1?(B.up.set(0,0,o[h]),B.lookAt(0,Q[h],0)):(B.up.set(0,o[h],0),B.lookAt(0,0,Q[h]));const D=this._cubeSize;ms(i,S*D,h>2?D:0,D,D),n.setRenderTarget(i),l&&n.render(r,B),n.render(A,B)}r.geometry.dispose(),r.material.dispose(),n.toneMapping=s,n.autoClear=E,A.background=c}_textureToCubeUV(A,I){const g=this._renderer,i=A.mapping===be||A.mapping===Nt;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dp());const C=i?this._cubemapMaterial:this._equirectMaterial,t=new bg(this._lodPlanes[0],C),B=C.uniforms;B.envMap.value=A;const o=this._cubeSize;ms(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(t,cc)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const C=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),t=Dp[(i-1)%Dp.length];this._blur(A,i-1,i,C,t)}I.autoClear=g}_blur(A,I,g,i,C){const t=this._pingPongRenderTarget;this._halfBlur(A,t,I,g,i,"latitudinal",C),this._halfBlur(t,A,g,g,i,"longitudinal",C)}_halfBlur(A,I,g,i,C,t,B){const o=this._renderer,Q=this._blurMaterial;t!=="latitudinal"&&t!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const n=3,E=new bg(this._lodPlanes[i],Q),s=Q.uniforms,a=this._sizeLods[g]-1,r=isFinite(C)?Math.PI/(2*a):2*Math.PI/(2*wB-1),l=C/r,c=isFinite(C)?1+Math.floor(n*l):wB;c>wB&&console.warn(`sigmaRadians, ${C}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${wB}`);const h=[];let S=0;for(let y=0;y<wB;++y){const M=y/l,w=Math.exp(-M*M/2);h.push(w),y===0?S+=w:y<c&&(S+=2*w)}for(let y=0;y<h.length;y++)h[y]=h[y]/S;s.envMap.value=A.texture,s.samples.value=c,s.weights.value=h,s.latitudinal.value=t==="latitudinal",B&&(s.poleAxis.value=B);const{_lodMax:D}=this;s.dTheta.value=r,s.mipInt.value=D-g;const d=this._sizeLods[i],f=3*d*(i>D-oQ?i-D+oQ:0),u=4*(this._cubeSize-d);ms(I,f,u,3*d,2*d),o.setRenderTarget(I),o.render(E,cc)}};function iL(e){const A=[],I=[],g=[];let i=e;const C=e-oQ+1+cp.length;for(let t=0;t<C;t++){const B=Math.pow(2,i);I.push(B);let o=1/B;t>e-oQ?o=cp[t-e+oQ-1]:t===0&&(o=0),g.push(o);const Q=1/(B-2),n=-Q,E=1+Q,s=[n,n,E,n,E,E,n,n,E,E,n,E],a=6,r=6,l=3,c=2,h=1,S=new Float32Array(l*r*a),D=new Float32Array(c*r*a),d=new Float32Array(h*r*a);for(let u=0;u<a;u++){const y=u%3*2/3-1,M=u>2?0:-1,w=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];S.set(w,l*r*u),D.set(s,c*r*u);const p=[u,u,u,u,u,u];d.set(p,h*r*u)}const f=new kI;f.setAttribute("position",new ig(S,l)),f.setAttribute("uv",new ig(D,c)),f.setAttribute("faceIndex",new ig(d,h)),A.push(f),i>oQ&&i--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function Sp(e,A,I){const g=new LC(e,A,I);return g.texture.mapping=LQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function ms(e,A,I,g,i){e.viewport.set(A,I,g,i),e.scissor.set(A,I,g,i)}function CL(e,A,I){const g=new Float32Array(wB),i=new H(0,1,0);return new YC({name:"SphericalGaussianBlur",defines:{n:wB,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:WS(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Je,depthTest:!1,depthWrite:!1})}function dp(){return new YC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:WS(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Je,depthTest:!1,depthWrite:!1})}function wp(){return new YC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:WS(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Je,depthTest:!1,depthWrite:!1})}function WS(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eL(e){let A=new WeakMap,I=null;function g(B){if(B&&B.isTexture){const o=B.mapping,Q=o===_n||o===vn,n=o===be||o===Nt;if(Q||n){let E=A.get(B);const s=E!==void 0?E.texture.pmremVersion:0;if(B.isRenderTargetTexture&&B.pmremVersion!==s)return I===null&&(I=new nD(e)),E=Q?I.fromEquirectangular(B,E):I.fromCubemap(B,E),E.texture.pmremVersion=B.pmremVersion,A.set(B,E),E.texture;if(E!==void 0)return E.texture;{const a=B.image;return Q&&a&&a.height>0||n&&a&&i(a)?(I===null&&(I=new nD(e)),E=Q?I.fromEquirectangular(B):I.fromCubemap(B),E.texture.pmremVersion=B.pmremVersion,A.set(B,E),B.addEventListener("dispose",C),E.texture):null}}}return B}function i(B){let o=0;const Q=6;for(let n=0;n<Q;n++)B[n]!==void 0&&o++;return o===Q}function C(B){const o=B.target;o.removeEventListener("dispose",C);const Q=A.get(o);Q!==void 0&&(A.delete(o),Q.dispose())}function t(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:t}}function tL(e){const A={};function I(g){if(A[g]!==void 0)return A[g];let i;switch(g){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(g)}return A[g]=i,i}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const i=I(g);return i===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),i}}}function BL(e,A,I,g){const i={},C=new WeakMap;function t(E){const s=E.target;s.index!==null&&A.remove(s.index);for(const r in s.attributes)A.remove(s.attributes[r]);for(const r in s.morphAttributes){const l=s.morphAttributes[r];for(let c=0,h=l.length;c<h;c++)A.remove(l[c])}s.removeEventListener("dispose",t),delete i[s.id];const a=C.get(s);a&&(A.remove(a),C.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function B(E,s){return i[s.id]===!0||(s.addEventListener("dispose",t),i[s.id]=!0,I.memory.geometries++),s}function o(E){const s=E.attributes;for(const r in s)A.update(s[r],e.ARRAY_BUFFER);const a=E.morphAttributes;for(const r in a){const l=a[r];for(let c=0,h=l.length;c<h;c++)A.update(l[c],e.ARRAY_BUFFER)}}function Q(E){const s=[],a=E.index,r=E.attributes.position;let l=0;if(a!==null){const S=a.array;l=a.version;for(let D=0,d=S.length;D<d;D+=3){const f=S[D+0],u=S[D+1],y=S[D+2];s.push(f,u,u,y,y,f)}}else if(r!==void 0){const S=r.array;l=r.version;for(let D=0,d=S.length/3-1;D<d;D+=3){const f=D+0,u=D+1,y=D+2;s.push(f,u,u,y,y,f)}}else return;const c=new(YM(s)?ZS:PS)(s,1);c.version=l;const h=C.get(E);h&&A.remove(h),C.set(E,c)}function n(E){const s=C.get(E);if(s){const a=E.index;a!==null&&s.version<a.version&&Q(E)}else Q(E);return C.get(E)}return{get:B,update:o,getWireframeAttribute:n}}function oL(e,A,I){let g;function i(E){g=E}let C,t;function B(E){C=E.type,t=E.bytesPerElement}function o(E,s){e.drawElements(g,s,C,E*t),I.update(s,g,1)}function Q(E,s,a){a!==0&&(e.drawElementsInstanced(g,s,C,E*t,a),I.update(s,g,a))}function n(E,s,a){if(a===0)return;const r=A.get("WEBGL_multi_draw");if(r===null)for(let l=0;l<a;l++)this.render(E[l]/t,s[l]);else{r.multiDrawElementsWEBGL(g,s,0,C,E,0,a);let l=0;for(let c=0;c<a;c++)l+=s[c];I.update(l,g,1)}}this.setMode=i,this.setIndex=B,this.render=o,this.renderInstances=Q,this.renderMultiDraw=n}function QL(e){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(C,t,B){switch(I.calls++,t){case e.TRIANGLES:I.triangles+=B*(C/3);break;case e.LINES:I.lines+=B*(C/2);break;case e.LINE_STRIP:I.lines+=B*(C-1);break;case e.LINE_LOOP:I.lines+=B*C;break;case e.POINTS:I.points+=B*C;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",t);break}}function i(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:i,update:g}}function nL(e,A,I){const g=new WeakMap,i=new Qg;function C(t,B,o){const Q=t.morphTargetInfluences,n=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,E=n!==void 0?n.length:0;let s=g.get(B);if(s===void 0||s.count!==E){let w=function(){y.dispose(),g.delete(B),B.removeEventListener("dispose",w)};s!==void 0&&s.texture.dispose();const a=B.morphAttributes.position!==void 0,r=B.morphAttributes.normal!==void 0,l=B.morphAttributes.color!==void 0,c=B.morphAttributes.position||[],h=B.morphAttributes.normal||[],S=B.morphAttributes.color||[];let D=0;a===!0&&(D=1),r===!0&&(D=2),l===!0&&(D=3);let d=B.attributes.position.count*D,f=1;d>A.maxTextureSize&&(f=Math.ceil(d/A.maxTextureSize),d=A.maxTextureSize);const u=new Float32Array(d*f*4*E),y=new Pr(u,d,f,E);y.type=wC,y.needsUpdate=!0;const M=D*4;for(let p=0;p<E;p++){const F=c[p],T=h[p],J=S[p],m=d*f*4*p;for(let b=0;b<F.count;b++){const O=b*M;a===!0&&(i.fromBufferAttribute(F,b),u[m+O+0]=i.x,u[m+O+1]=i.y,u[m+O+2]=i.z,u[m+O+3]=0),r===!0&&(i.fromBufferAttribute(T,b),u[m+O+4]=i.x,u[m+O+5]=i.y,u[m+O+6]=i.z,u[m+O+7]=0),l===!0&&(i.fromBufferAttribute(J,b),u[m+O+8]=i.x,u[m+O+9]=i.y,u[m+O+10]=i.z,u[m+O+11]=J.itemSize===4?i.w:1)}}s={count:E,texture:y,size:new NA(d,f)},g.set(B,s),B.addEventListener("dispose",w)}if(t.isInstancedMesh===!0&&t.morphTexture!==null)o.getUniforms().setValue(e,"morphTexture",t.morphTexture,I);else{let a=0;for(let l=0;l<Q.length;l++)a+=Q[l];const r=B.morphTargetsRelative?1:1-a;o.getUniforms().setValue(e,"morphTargetBaseInfluence",r),o.getUniforms().setValue(e,"morphTargetInfluences",Q)}o.getUniforms().setValue(e,"morphTargetsTexture",s.texture,I),o.getUniforms().setValue(e,"morphTargetsTextureSize",s.size)}return{update:C}}function EL(e,A,I,g){let i=new WeakMap;function C(o){const Q=g.render.frame,n=o.geometry,E=A.get(o,n);if(i.get(E)!==Q&&(A.update(E),i.set(E,Q)),o.isInstancedMesh&&(o.hasEventListener("dispose",B)===!1&&o.addEventListener("dispose",B),i.get(o)!==Q&&(I.update(o.instanceMatrix,e.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,e.ARRAY_BUFFER),i.set(o,Q))),o.isSkinnedMesh){const s=o.skeleton;i.get(s)!==Q&&(s.update(),i.set(s,Q))}return E}function t(){i=new WeakMap}function B(o){const Q=o.target;Q.removeEventListener("dispose",B),I.remove(Q.instanceMatrix),Q.instanceColor!==null&&I.remove(Q.instanceColor)}return{update:C,dispose:t}}let VS=class extends ci{constructor(A,I,g,i,C,t,B,o,Q,n){if(n=n!==void 0?n:JB,n!==JB&&n!==wQ)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&n===JB&&(g=PB),g===void 0&&n===wQ&&(g=YQ),super(null,i,C,t,B,o,n,g,Q),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=B!==void 0?B:hi,this.minFilter=o!==void 0?o:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}};const I0=new ci,g0=new VS(1,1);g0.compareFunction=_S;const i0=new Pr,C0=new OS,e0=new _E,pp=[],up=[],yp=new Float32Array(16),fp=new Float32Array(9),Gp=new Float32Array(4);function xQ(e,A,I){const g=e[0];if(g<=0||g>0)return e;const i=A*I;let C=pp[i];if(C===void 0&&(C=new Float32Array(i),pp[i]=C),A!==0){g.toArray(C,0);for(let t=1,B=0;t!==A;++t)B+=I,e[t].toArray(C,B)}return C}function ii(e,A){if(e.length!==A.length)return!1;for(let I=0,g=e.length;I<g;I++)if(e[I]!==A[I])return!1;return!0}function Ci(e,A){for(let I=0,g=A.length;I<g;I++)e[I]=A[I]}function jr(e,A){let I=up[A];I===void 0&&(I=new Int32Array(A),up[A]=I);for(let g=0;g!==A;++g)I[g]=e.allocateTextureUnit();return I}function sL(e,A){const I=this.cache;I[0]!==A&&(e.uniform1f(this.addr,A),I[0]=A)}function aL(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(e.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(ii(I,A))return;e.uniform2fv(this.addr,A),Ci(I,A)}}function rL(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(e.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(e.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(ii(I,A))return;e.uniform3fv(this.addr,A),Ci(I,A)}}function hL(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(e.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(ii(I,A))return;e.uniform4fv(this.addr,A),Ci(I,A)}}function cL(e,A){const I=this.cache,g=A.elements;if(g===void 0){if(ii(I,A))return;e.uniformMatrix2fv(this.addr,!1,A),Ci(I,A)}else{if(ii(I,g))return;Gp.set(g),e.uniformMatrix2fv(this.addr,!1,Gp),Ci(I,g)}}function lL(e,A){const I=this.cache,g=A.elements;if(g===void 0){if(ii(I,A))return;e.uniformMatrix3fv(this.addr,!1,A),Ci(I,A)}else{if(ii(I,g))return;fp.set(g),e.uniformMatrix3fv(this.addr,!1,fp),Ci(I,g)}}function DL(e,A){const I=this.cache,g=A.elements;if(g===void 0){if(ii(I,A))return;e.uniformMatrix4fv(this.addr,!1,A),Ci(I,A)}else{if(ii(I,g))return;yp.set(g),e.uniformMatrix4fv(this.addr,!1,yp),Ci(I,g)}}function SL(e,A){const I=this.cache;I[0]!==A&&(e.uniform1i(this.addr,A),I[0]=A)}function dL(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(e.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(ii(I,A))return;e.uniform2iv(this.addr,A),Ci(I,A)}}function wL(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(e.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(ii(I,A))return;e.uniform3iv(this.addr,A),Ci(I,A)}}function pL(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(e.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(ii(I,A))return;e.uniform4iv(this.addr,A),Ci(I,A)}}function uL(e,A){const I=this.cache;I[0]!==A&&(e.uniform1ui(this.addr,A),I[0]=A)}function yL(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(e.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(ii(I,A))return;e.uniform2uiv(this.addr,A),Ci(I,A)}}function fL(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(e.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(ii(I,A))return;e.uniform3uiv(this.addr,A),Ci(I,A)}}function GL(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(e.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(ii(I,A))return;e.uniform4uiv(this.addr,A),Ci(I,A)}}function ML(e,A,I){const g=this.cache,i=I.allocateTextureUnit();g[0]!==i&&(e.uniform1i(this.addr,i),g[0]=i);const C=this.type===e.SAMPLER_2D_SHADOW?g0:I0;I.setTexture2D(A||C,i)}function kL(e,A,I){const g=this.cache,i=I.allocateTextureUnit();g[0]!==i&&(e.uniform1i(this.addr,i),g[0]=i),I.setTexture3D(A||C0,i)}function UL(e,A,I){const g=this.cache,i=I.allocateTextureUnit();g[0]!==i&&(e.uniform1i(this.addr,i),g[0]=i),I.setTextureCube(A||e0,i)}function NL(e,A,I){const g=this.cache,i=I.allocateTextureUnit();g[0]!==i&&(e.uniform1i(this.addr,i),g[0]=i),I.setTexture2DArray(A||i0,i)}function RL(e){switch(e){case 5126:return sL;case 35664:return aL;case 35665:return rL;case 35666:return hL;case 35674:return cL;case 35675:return lL;case 35676:return DL;case 5124:case 35670:return SL;case 35667:case 35671:return dL;case 35668:case 35672:return wL;case 35669:case 35673:return pL;case 5125:return uL;case 36294:return yL;case 36295:return fL;case 36296:return GL;case 35678:case 36198:case 36298:case 36306:case 35682:return ML;case 35679:case 36299:case 36307:return kL;case 35680:case 36300:case 36308:case 36293:return UL;case 36289:case 36303:case 36311:case 36292:return NL}}function FL(e,A){e.uniform1fv(this.addr,A)}function mL(e,A){const I=xQ(A,this.size,2);e.uniform2fv(this.addr,I)}function KL(e,A){const I=xQ(A,this.size,3);e.uniform3fv(this.addr,I)}function JL(e,A){const I=xQ(A,this.size,4);e.uniform4fv(this.addr,I)}function qL(e,A){const I=xQ(A,this.size,4);e.uniformMatrix2fv(this.addr,!1,I)}function LL(e,A){const I=xQ(A,this.size,9);e.uniformMatrix3fv(this.addr,!1,I)}function YL(e,A){const I=xQ(A,this.size,16);e.uniformMatrix4fv(this.addr,!1,I)}function HL(e,A){e.uniform1iv(this.addr,A)}function xL(e,A){e.uniform2iv(this.addr,A)}function TL(e,A){e.uniform3iv(this.addr,A)}function bL(e,A){e.uniform4iv(this.addr,A)}function _L(e,A){e.uniform1uiv(this.addr,A)}function vL(e,A){e.uniform2uiv(this.addr,A)}function OL(e,A){e.uniform3uiv(this.addr,A)}function PL(e,A){e.uniform4uiv(this.addr,A)}function ZL(e,A,I){const g=this.cache,i=A.length,C=jr(I,i);ii(g,C)||(e.uniform1iv(this.addr,C),Ci(g,C));for(let t=0;t!==i;++t)I.setTexture2D(A[t]||I0,C[t])}function WL(e,A,I){const g=this.cache,i=A.length,C=jr(I,i);ii(g,C)||(e.uniform1iv(this.addr,C),Ci(g,C));for(let t=0;t!==i;++t)I.setTexture3D(A[t]||C0,C[t])}function VL(e,A,I){const g=this.cache,i=A.length,C=jr(I,i);ii(g,C)||(e.uniform1iv(this.addr,C),Ci(g,C));for(let t=0;t!==i;++t)I.setTextureCube(A[t]||e0,C[t])}function zL(e,A,I){const g=this.cache,i=A.length,C=jr(I,i);ii(g,C)||(e.uniform1iv(this.addr,C),Ci(g,C));for(let t=0;t!==i;++t)I.setTexture2DArray(A[t]||i0,C[t])}function jL(e){switch(e){case 5126:return FL;case 35664:return mL;case 35665:return KL;case 35666:return JL;case 35674:return qL;case 35675:return LL;case 35676:return YL;case 5124:case 35670:return HL;case 35667:case 35671:return xL;case 35668:case 35672:return TL;case 35669:case 35673:return bL;case 5125:return _L;case 36294:return vL;case 36295:return OL;case 36296:return PL;case 35678:case 36198:case 36298:case 36306:case 35682:return ZL;case 35679:case 36299:case 36307:return WL;case 35680:case 36300:case 36308:case 36293:return VL;case 36289:case 36303:case 36311:case 36292:return zL}}let XL=class{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=RL(I.type)}},$L=class{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=jL(I.type)}},AY=class{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const i=this.seq;for(let C=0,t=i.length;C!==t;++C){const B=i[C];B.setValue(A,I[B.id],g)}}};const wc=/(\w+)(\])?(\[|\.)?/g;function Mp(e,A){e.seq.push(A),e.map[A.id]=A}function IY(e,A,I){const g=e.name,i=g.length;for(wc.lastIndex=0;;){const C=wc.exec(g),t=wc.lastIndex;let B=C[1];const o=C[2]==="]",Q=C[3];if(o&&(B=B|0),Q===void 0||Q==="["&&t+2===i){Mp(I,Q===void 0?new XL(B,e,A):new $L(B,e,A));break}else{let E=I.map[B];E===void 0&&(E=new AY(B),Mp(I,E)),I=E}}}let sr=class{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let i=0;i<g;++i){const C=A.getActiveUniform(I,i),t=A.getUniformLocation(I,C.name);IY(C,t,this)}}setValue(A,I,g,i){const C=this.map[I];C!==void 0&&C.setValue(A,g,i)}setOptional(A,I,g){const i=I[g];i!==void 0&&this.setValue(A,g,i)}static upload(A,I,g,i){for(let C=0,t=I.length;C!==t;++C){const B=I[C],o=g[B.id];o.needsUpdate!==!1&&B.setValue(A,o.value,i)}}static seqWithValue(A,I){const g=[];for(let i=0,C=A.length;i!==C;++i){const t=A[i];t.id in I&&g.push(t)}return g}};function kp(e,A,I){const g=e.createShader(A);return e.shaderSource(g,I),e.compileShader(g),g}const gY=37297;let iY=0;function CY(e,A){const I=e.split(`
`),g=[],i=Math.max(A-6,0),C=Math.min(A+6,I.length);for(let t=i;t<C;t++){const B=t+1;g.push(`${B===A?">":" "} ${B}: ${I[t]}`)}return g.join(`
`)}function eY(e){const A=gg.getPrimaries(gg.workingColorSpace),I=gg.getPrimaries(e);let g;switch(A===I?g="":A===$n&&I===Xn?g="LinearDisplayP3ToLinearSRGB":A===Xn&&I===$n&&(g="LinearSRGBToLinearDisplayP3"),e){case We:case TE:return[g,"LinearTransferOETF"];case DC:case Or:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[g,"LinearTransferOETF"]}}function Up(e,A,I){const g=e.getShaderParameter(A,e.COMPILE_STATUS),i=e.getShaderInfoLog(A).trim();if(g&&i==="")return"";const C=/ERROR: 0:(\d+)/.exec(i);if(C){const t=parseInt(C[1]);return I.toUpperCase()+`

`+i+`

`+CY(e.getShaderSource(A),t)}else return i}function tY(e,A){const I=eY(A);return`vec4 ${e}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function BY(e,A){let I;switch(A){case BM:I="Linear";break;case oM:I="Reinhard";break;case QM:I="OptimizedCineon";break;case RS:I="ACESFilmic";break;case EM:I="AgX";break;case sM:I="Neutral";break;case nM:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+e+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function oY(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fn).join(`
`)}function QY(e){const A=[];for(const I in e){const g=e[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function nY(e,A){const I={},g=e.getProgramParameter(A,e.ACTIVE_ATTRIBUTES);for(let i=0;i<g;i++){const C=e.getActiveAttrib(A,i),t=C.name;let B=1;C.type===e.FLOAT_MAT2&&(B=2),C.type===e.FLOAT_MAT3&&(B=3),C.type===e.FLOAT_MAT4&&(B=4),I[t]={type:C.type,location:e.getAttribLocation(A,t),locationSize:B}}return I}function fn(e){return e!==""}function Np(e,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Rp(e,A){return e.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const EY=/^[ \t]*#include +<([\w\d./]+)>/gm;function ED(e){return e.replace(EY,aY)}const sY=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function aY(e,A){let I=rI[A];if(I===void 0){const g=sY.get(A);if(g!==void 0)I=rI[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return ED(I)}const rY=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(e){return e.replace(rY,hY)}function hY(e,A,I,g){let i="";for(let C=parseInt(A);C<parseInt(I);C++)i+=g.replace(/\[\s*i\s*\]/g,"[ "+C+" ]").replace(/UNROLLED_LOOP_INDEX/g,C);return i}function mp(e){let A=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?A+=`
#define HIGH_PRECISION`:e.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function cY(e){let A="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===NS?A="SHADOWMAP_TYPE_PCF":e.shadowMapType===br?A="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===$C&&(A="SHADOWMAP_TYPE_VSM"),A}function lY(e){let A="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case be:case Nt:A="ENVMAP_TYPE_CUBE";break;case LQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function DY(e){let A="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Nt:A="ENVMAP_MODE_REFRACTION";break}return A}function SY(e){let A="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case xE:A="ENVMAP_BLENDING_MULTIPLY";break;case eM:A="ENVMAP_BLENDING_MIX";break;case tM:A="ENVMAP_BLENDING_ADD";break}return A}function dY(e){const A=e.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function wY(e,A,I,g){const i=e.getContext(),C=I.defines;let t=I.vertexShader,B=I.fragmentShader;const o=cY(I),Q=lY(I),n=DY(I),E=SY(I),s=dY(I),a=oY(I),r=QY(C),l=i.createProgram();let c,h,S=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(c=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r].filter(fn).join(`
`),c.length>0&&(c+=`
`),h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r].filter(fn).join(`
`),h.length>0&&(h+=`
`)):(c=[mp(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+n:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fn).join(`
`),h=[mp(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,r,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+Q:"",I.envMap?"#define "+n:"",I.envMap?"#define "+E:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==qe?"#define TONE_MAPPING":"",I.toneMapping!==qe?rI.tonemapping_pars_fragment:"",I.toneMapping!==qe?BY("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",rI.colorspace_pars_fragment,tY("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(fn).join(`
`)),t=ED(t),t=Np(t,I),t=Rp(t,I),B=ED(B),B=Np(B,I),B=Rp(B,I),t=Fp(t),B=Fp(B),I.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,c=[a,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,h=["#define varying in",I.glslVersion===oD?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===oD?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const D=S+c+t,d=S+h+B,f=kp(i,i.VERTEX_SHADER,D),u=kp(i,i.FRAGMENT_SHADER,d);i.attachShader(l,f),i.attachShader(l,u),I.index0AttributeName!==void 0?i.bindAttribLocation(l,0,I.index0AttributeName):I.morphTargets===!0&&i.bindAttribLocation(l,0,"position"),i.linkProgram(l);function y(F){if(e.debug.checkShaderErrors){const T=i.getProgramInfoLog(l).trim(),J=i.getShaderInfoLog(f).trim(),m=i.getShaderInfoLog(u).trim();let b=!0,O=!0;if(i.getProgramParameter(l,i.LINK_STATUS)===!1)if(b=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(i,l,f,u);else{const z=Up(i,f,"vertex"),V=Up(i,u,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(l,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+T+`
`+z+`
`+V)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(J===""||m==="")&&(O=!1);O&&(F.diagnostics={runnable:b,programLog:T,vertexShader:{log:J,prefix:c},fragmentShader:{log:m,prefix:h}})}i.deleteShader(f),i.deleteShader(u),M=new sr(i,l),w=nY(i,l)}let M;this.getUniforms=function(){return M===void 0&&y(this),M};let w;this.getAttributes=function(){return w===void 0&&y(this),w};let p=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return p===!1&&(p=i.getProgramParameter(l,gY)),p},this.destroy=function(){g.releaseStatesOfProgram(this),i.deleteProgram(l),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=iY++,this.cacheKey=A,this.usedTimes=1,this.program=l,this.vertexShader=f,this.fragmentShader=u,this}let pY=0,uY=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,i=this._getShaderStage(I),C=this._getShaderStage(g),t=this._getShaderCacheForMaterial(A);return t.has(i)===!1&&(t.add(i),i.usedTimes++),t.has(C)===!1&&(t.add(C),C.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new yY(A),I.set(A,g)),g}},yY=class{constructor(A){this.id=pY++,this.code=A,this.usedTimes=0}};function fY(e,A,I,g,i,C,t){const B=new Zr,o=new uY,Q=new Set,n=[],E=i.logarithmicDepthBuffer,s=i.vertexTextures;let a=i.precision;const r={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function l(w){return Q.add(w),w===0?"uv":`uv${w}`}function c(w,p,F,T,J){const m=T.fog,b=J.geometry,O=w.isMeshStandardMaterial?T.environment:null,z=(w.isMeshStandardMaterial?I:A).get(w.envMap||O),V=z&&z.mapping===LQ?z.image.height:null,AA=r[w.type];w.precision!==null&&(a=i.getMaxPrecision(w.precision),a!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",a,"instead."));const oA=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,aA=oA!==void 0?oA.length:0;let GA=0;b.morphAttributes.position!==void 0&&(GA=1),b.morphAttributes.normal!==void 0&&(GA=2),b.morphAttributes.color!==void 0&&(GA=3);let rA,X,lA,yA;if(AA){const SI=KC[AA];rA=SI.vertexShader,X=SI.fragmentShader}else rA=w.vertexShader,X=w.fragmentShader,o.update(w),lA=o.getVertexShaderID(w),yA=o.getFragmentShaderID(w);const SA=e.getRenderTarget(),JA=J.isInstancedMesh===!0,ZA=J.isBatchedMesh===!0,FA=!!w.map,IA=!!w.matcap,q=!!z,tA=!!w.aoMap,iA=!!w.lightMap,EA=!!w.bumpMap,gA=!!w.normalMap,K=!!w.displacementMap,R=!!w.emissiveMap,N=!!w.metalnessMap,k=!!w.roughnessMap,P=w.anisotropy>0,CA=w.clearcoat>0,DA=w.iridescence>0,eA=w.sheen>0,MA=w.transmission>0,wA=P&&!!w.anisotropyMap,dA=CA&&!!w.clearcoatMap,kA=CA&&!!w.clearcoatNormalMap,_A=CA&&!!w.clearcoatRoughnessMap,hA=DA&&!!w.iridescenceMap,LA=DA&&!!w.iridescenceThicknessMap,II=eA&&!!w.sheenColorMap,jA=eA&&!!w.sheenRoughnessMap,VA=!!w.specularMap,qA=!!w.specularColorMap,eI=!!w.specularIntensityMap,vA=MA&&!!w.transmissionMap,Z=MA&&!!w.thicknessMap,fA=!!w.gradientMap,cA=!!w.alphaMap,W=w.alphaTest>0,pA=!!w.alphaHash,mA=!!w.extensions;let gI=qe;w.toneMapped&&(SA===null||SA.isXRRenderTarget===!0)&&(gI=e.toneMapping);const AI={shaderID:AA,shaderType:w.type,shaderName:w.name,vertexShader:rA,fragmentShader:X,defines:w.defines,customVertexShaderID:lA,customFragmentShaderID:yA,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:a,batching:ZA,instancing:JA,instancingColor:JA&&J.instanceColor!==null,instancingMorph:JA&&J.morphTexture!==null,supportsVertexTextures:s,outputColorSpace:SA===null?e.outputColorSpace:SA.isXRRenderTarget===!0?SA.texture.colorSpace:We,alphaToCoverage:!!w.alphaToCoverage,map:FA,matcap:IA,envMap:q,envMapMode:q&&z.mapping,envMapCubeUVHeight:V,aoMap:tA,lightMap:iA,bumpMap:EA,normalMap:gA,displacementMap:s&&K,emissiveMap:R,normalMapObjectSpace:gA&&w.normalMapType===kM,normalMapTangentSpace:gA&&w.normalMapType===qt,metalnessMap:N,roughnessMap:k,anisotropy:P,anisotropyMap:wA,clearcoat:CA,clearcoatMap:dA,clearcoatNormalMap:kA,clearcoatRoughnessMap:_A,iridescence:DA,iridescenceMap:hA,iridescenceThicknessMap:LA,sheen:eA,sheenColorMap:II,sheenRoughnessMap:jA,specularMap:VA,specularColorMap:qA,specularIntensityMap:eI,transmission:MA,transmissionMap:vA,thicknessMap:Z,gradientMap:fA,opaque:w.transparent===!1&&w.blending===KB&&w.alphaToCoverage===!1,alphaMap:cA,alphaTest:W,alphaHash:pA,combine:w.combine,mapUv:FA&&l(w.map.channel),aoMapUv:tA&&l(w.aoMap.channel),lightMapUv:iA&&l(w.lightMap.channel),bumpMapUv:EA&&l(w.bumpMap.channel),normalMapUv:gA&&l(w.normalMap.channel),displacementMapUv:K&&l(w.displacementMap.channel),emissiveMapUv:R&&l(w.emissiveMap.channel),metalnessMapUv:N&&l(w.metalnessMap.channel),roughnessMapUv:k&&l(w.roughnessMap.channel),anisotropyMapUv:wA&&l(w.anisotropyMap.channel),clearcoatMapUv:dA&&l(w.clearcoatMap.channel),clearcoatNormalMapUv:kA&&l(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_A&&l(w.clearcoatRoughnessMap.channel),iridescenceMapUv:hA&&l(w.iridescenceMap.channel),iridescenceThicknessMapUv:LA&&l(w.iridescenceThicknessMap.channel),sheenColorMapUv:II&&l(w.sheenColorMap.channel),sheenRoughnessMapUv:jA&&l(w.sheenRoughnessMap.channel),specularMapUv:VA&&l(w.specularMap.channel),specularColorMapUv:qA&&l(w.specularColorMap.channel),specularIntensityMapUv:eI&&l(w.specularIntensityMap.channel),transmissionMapUv:vA&&l(w.transmissionMap.channel),thicknessMapUv:Z&&l(w.thicknessMap.channel),alphaMapUv:cA&&l(w.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(gA||P),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!b.attributes.uv&&(FA||cA),fog:!!m,useFog:w.fog===!0,fogExp2:!!m&&m.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:E,skinning:J.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:aA,morphTextureStride:GA,numDirLights:p.directional.length,numPointLights:p.point.length,numSpotLights:p.spot.length,numSpotLightMaps:p.spotLightMap.length,numRectAreaLights:p.rectArea.length,numHemiLights:p.hemi.length,numDirLightShadows:p.directionalShadowMap.length,numPointLightShadows:p.pointShadowMap.length,numSpotLightShadows:p.spotShadowMap.length,numSpotLightShadowsWithMaps:p.numSpotLightShadowsWithMaps,numLightProbes:p.numLightProbes,numClippingPlanes:t.numPlanes,numClipIntersection:t.numIntersection,dithering:w.dithering,shadowMapEnabled:e.shadowMap.enabled&&F.length>0,shadowMapType:e.shadowMap.type,toneMapping:gI,useLegacyLights:e._useLegacyLights,decodeVideoTexture:FA&&w.map.isVideoTexture===!0&&gg.getTransfer(w.map.colorSpace)===sg,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ie,flipSided:w.side===_i,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:mA&&w.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:mA&&w.extensions.multiDraw===!0&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return AI.vertexUv1s=Q.has(1),AI.vertexUv2s=Q.has(2),AI.vertexUv3s=Q.has(3),Q.clear(),AI}function h(w){const p=[];if(w.shaderID?p.push(w.shaderID):(p.push(w.customVertexShaderID),p.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)p.push(F),p.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(S(p,w),D(p,w),p.push(e.outputColorSpace)),p.push(w.customProgramCacheKey),p.join()}function S(w,p){w.push(p.precision),w.push(p.outputColorSpace),w.push(p.envMapMode),w.push(p.envMapCubeUVHeight),w.push(p.mapUv),w.push(p.alphaMapUv),w.push(p.lightMapUv),w.push(p.aoMapUv),w.push(p.bumpMapUv),w.push(p.normalMapUv),w.push(p.displacementMapUv),w.push(p.emissiveMapUv),w.push(p.metalnessMapUv),w.push(p.roughnessMapUv),w.push(p.anisotropyMapUv),w.push(p.clearcoatMapUv),w.push(p.clearcoatNormalMapUv),w.push(p.clearcoatRoughnessMapUv),w.push(p.iridescenceMapUv),w.push(p.iridescenceThicknessMapUv),w.push(p.sheenColorMapUv),w.push(p.sheenRoughnessMapUv),w.push(p.specularMapUv),w.push(p.specularColorMapUv),w.push(p.specularIntensityMapUv),w.push(p.transmissionMapUv),w.push(p.thicknessMapUv),w.push(p.combine),w.push(p.fogExp2),w.push(p.sizeAttenuation),w.push(p.morphTargetsCount),w.push(p.morphAttributeCount),w.push(p.numDirLights),w.push(p.numPointLights),w.push(p.numSpotLights),w.push(p.numSpotLightMaps),w.push(p.numHemiLights),w.push(p.numRectAreaLights),w.push(p.numDirLightShadows),w.push(p.numPointLightShadows),w.push(p.numSpotLightShadows),w.push(p.numSpotLightShadowsWithMaps),w.push(p.numLightProbes),w.push(p.shadowMapType),w.push(p.toneMapping),w.push(p.numClippingPlanes),w.push(p.numClipIntersection),w.push(p.depthPacking)}function D(w,p){B.disableAll(),p.supportsVertexTextures&&B.enable(0),p.instancing&&B.enable(1),p.instancingColor&&B.enable(2),p.instancingMorph&&B.enable(3),p.matcap&&B.enable(4),p.envMap&&B.enable(5),p.normalMapObjectSpace&&B.enable(6),p.normalMapTangentSpace&&B.enable(7),p.clearcoat&&B.enable(8),p.iridescence&&B.enable(9),p.alphaTest&&B.enable(10),p.vertexColors&&B.enable(11),p.vertexAlphas&&B.enable(12),p.vertexUv1s&&B.enable(13),p.vertexUv2s&&B.enable(14),p.vertexUv3s&&B.enable(15),p.vertexTangents&&B.enable(16),p.anisotropy&&B.enable(17),p.alphaHash&&B.enable(18),p.batching&&B.enable(19),w.push(B.mask),B.disableAll(),p.fog&&B.enable(0),p.useFog&&B.enable(1),p.flatShading&&B.enable(2),p.logarithmicDepthBuffer&&B.enable(3),p.skinning&&B.enable(4),p.morphTargets&&B.enable(5),p.morphNormals&&B.enable(6),p.morphColors&&B.enable(7),p.premultipliedAlpha&&B.enable(8),p.shadowMapEnabled&&B.enable(9),p.useLegacyLights&&B.enable(10),p.doubleSided&&B.enable(11),p.flipSided&&B.enable(12),p.useDepthPacking&&B.enable(13),p.dithering&&B.enable(14),p.transmission&&B.enable(15),p.sheen&&B.enable(16),p.opaque&&B.enable(17),p.pointsUvs&&B.enable(18),p.decodeVideoTexture&&B.enable(19),p.alphaToCoverage&&B.enable(20),w.push(B.mask)}function d(w){const p=r[w.type];let F;if(p){const T=KC[p];F=zM.clone(T.uniforms)}else F=w.uniforms;return F}function f(w,p){let F;for(let T=0,J=n.length;T<J;T++){const m=n[T];if(m.cacheKey===p){F=m,++F.usedTimes;break}}return F===void 0&&(F=new wY(e,p,w,C),n.push(F)),F}function u(w){if(--w.usedTimes===0){const p=n.indexOf(w);n[p]=n[n.length-1],n.pop(),w.destroy()}}function y(w){o.remove(w)}function M(){o.dispose()}return{getParameters:c,getProgramCacheKey:h,getUniforms:d,acquireProgram:f,releaseProgram:u,releaseShaderCache:y,programs:n,dispose:M}}function GY(){let e=new WeakMap;function A(C){let t=e.get(C);return t===void 0&&(t={},e.set(C,t)),t}function I(C){e.delete(C)}function g(C,t,B){e.get(C)[t]=B}function i(){e=new WeakMap}return{get:A,remove:I,update:g,dispose:i}}function MY(e,A){return e.groupOrder!==A.groupOrder?e.groupOrder-A.groupOrder:e.renderOrder!==A.renderOrder?e.renderOrder-A.renderOrder:e.material.id!==A.material.id?e.material.id-A.material.id:e.z!==A.z?e.z-A.z:e.id-A.id}function Kp(e,A){return e.groupOrder!==A.groupOrder?e.groupOrder-A.groupOrder:e.renderOrder!==A.renderOrder?e.renderOrder-A.renderOrder:e.z!==A.z?A.z-e.z:e.id-A.id}function Jp(){const e=[];let A=0;const I=[],g=[],i=[];function C(){A=0,I.length=0,g.length=0,i.length=0}function t(E,s,a,r,l,c){let h=e[A];return h===void 0?(h={id:E.id,object:E,geometry:s,material:a,groupOrder:r,renderOrder:E.renderOrder,z:l,group:c},e[A]=h):(h.id=E.id,h.object=E,h.geometry=s,h.material=a,h.groupOrder=r,h.renderOrder=E.renderOrder,h.z=l,h.group=c),A++,h}function B(E,s,a,r,l,c){const h=t(E,s,a,r,l,c);a.transmission>0?g.push(h):a.transparent===!0?i.push(h):I.push(h)}function o(E,s,a,r,l,c){const h=t(E,s,a,r,l,c);a.transmission>0?g.unshift(h):a.transparent===!0?i.unshift(h):I.unshift(h)}function Q(E,s){I.length>1&&I.sort(E||MY),g.length>1&&g.sort(s||Kp),i.length>1&&i.sort(s||Kp)}function n(){for(let E=A,s=e.length;E<s;E++){const a=e[E];if(a.id===null)break;a.id=null,a.object=null,a.geometry=null,a.material=null,a.group=null}}return{opaque:I,transmissive:g,transparent:i,init:C,push:B,unshift:o,finish:n,sort:Q}}function kY(){let e=new WeakMap;function A(g,i){const C=e.get(g);let t;return C===void 0?(t=new Jp,e.set(g,[t])):i>=C.length?(t=new Jp,C.push(t)):t=C[i],t}function I(){e=new WeakMap}return{get:A,dispose:I}}function UY(){const e={};return{get:function(A){if(e[A.id]!==void 0)return e[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new H,color:new iI};break;case"SpotLight":I={position:new H,direction:new H,color:new iI,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new H,color:new iI,distance:0,decay:0};break;case"HemisphereLight":I={direction:new H,skyColor:new iI,groundColor:new iI};break;case"RectAreaLight":I={color:new iI,position:new H,halfWidth:new H,halfHeight:new H};break}return e[A.id]=I,I}}}function NY(){const e={};return{get:function(A){if(e[A.id]!==void 0)return e[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new NA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new NA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new NA,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[A.id]=I,I}}}let RY=0;function FY(e,A){return(A.castShadow?2:0)-(e.castShadow?2:0)+(A.map?1:0)-(e.map?1:0)}function mY(e){const A=new UY,I=NY(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let Q=0;Q<9;Q++)g.probe.push(new H);const i=new H,C=new aI,t=new aI;function B(Q,n){let E=0,s=0,a=0;for(let F=0;F<9;F++)g.probe[F].set(0,0,0);let r=0,l=0,c=0,h=0,S=0,D=0,d=0,f=0,u=0,y=0,M=0;Q.sort(FY);const w=n===!0?Math.PI:1;for(let F=0,T=Q.length;F<T;F++){const J=Q[F],m=J.color,b=J.intensity,O=J.distance,z=J.shadow&&J.shadow.map?J.shadow.map.texture:null;if(J.isAmbientLight)E+=m.r*b*w,s+=m.g*b*w,a+=m.b*b*w;else if(J.isLightProbe){for(let V=0;V<9;V++)g.probe[V].addScaledVector(J.sh.coefficients[V],b);M++}else if(J.isDirectionalLight){const V=A.get(J);if(V.color.copy(J.color).multiplyScalar(J.intensity*w),J.castShadow){const AA=J.shadow,oA=I.get(J);oA.shadowBias=AA.bias,oA.shadowNormalBias=AA.normalBias,oA.shadowRadius=AA.radius,oA.shadowMapSize=AA.mapSize,g.directionalShadow[r]=oA,g.directionalShadowMap[r]=z,g.directionalShadowMatrix[r]=J.shadow.matrix,D++}g.directional[r]=V,r++}else if(J.isSpotLight){const V=A.get(J);V.position.setFromMatrixPosition(J.matrixWorld),V.color.copy(m).multiplyScalar(b*w),V.distance=O,V.coneCos=Math.cos(J.angle),V.penumbraCos=Math.cos(J.angle*(1-J.penumbra)),V.decay=J.decay,g.spot[c]=V;const AA=J.shadow;if(J.map&&(g.spotLightMap[u]=J.map,u++,AA.updateMatrices(J),J.castShadow&&y++),g.spotLightMatrix[c]=AA.matrix,J.castShadow){const oA=I.get(J);oA.shadowBias=AA.bias,oA.shadowNormalBias=AA.normalBias,oA.shadowRadius=AA.radius,oA.shadowMapSize=AA.mapSize,g.spotShadow[c]=oA,g.spotShadowMap[c]=z,f++}c++}else if(J.isRectAreaLight){const V=A.get(J);V.color.copy(m).multiplyScalar(b),V.halfWidth.set(J.width*.5,0,0),V.halfHeight.set(0,J.height*.5,0),g.rectArea[h]=V,h++}else if(J.isPointLight){const V=A.get(J);if(V.color.copy(J.color).multiplyScalar(J.intensity*w),V.distance=J.distance,V.decay=J.decay,J.castShadow){const AA=J.shadow,oA=I.get(J);oA.shadowBias=AA.bias,oA.shadowNormalBias=AA.normalBias,oA.shadowRadius=AA.radius,oA.shadowMapSize=AA.mapSize,oA.shadowCameraNear=AA.camera.near,oA.shadowCameraFar=AA.camera.far,g.pointShadow[l]=oA,g.pointShadowMap[l]=z,g.pointShadowMatrix[l]=J.shadow.matrix,d++}g.point[l]=V,l++}else if(J.isHemisphereLight){const V=A.get(J);V.skyColor.copy(J.color).multiplyScalar(b*w),V.groundColor.copy(J.groundColor).multiplyScalar(b*w),g.hemi[S]=V,S++}}h>0&&(e.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=XA.LTC_FLOAT_1,g.rectAreaLTC2=XA.LTC_FLOAT_2):(g.rectAreaLTC1=XA.LTC_HALF_1,g.rectAreaLTC2=XA.LTC_HALF_2)),g.ambient[0]=E,g.ambient[1]=s,g.ambient[2]=a;const p=g.hash;(p.directionalLength!==r||p.pointLength!==l||p.spotLength!==c||p.rectAreaLength!==h||p.hemiLength!==S||p.numDirectionalShadows!==D||p.numPointShadows!==d||p.numSpotShadows!==f||p.numSpotMaps!==u||p.numLightProbes!==M)&&(g.directional.length=r,g.spot.length=c,g.rectArea.length=h,g.point.length=l,g.hemi.length=S,g.directionalShadow.length=D,g.directionalShadowMap.length=D,g.pointShadow.length=d,g.pointShadowMap.length=d,g.spotShadow.length=f,g.spotShadowMap.length=f,g.directionalShadowMatrix.length=D,g.pointShadowMatrix.length=d,g.spotLightMatrix.length=f+u-y,g.spotLightMap.length=u,g.numSpotLightShadowsWithMaps=y,g.numLightProbes=M,p.directionalLength=r,p.pointLength=l,p.spotLength=c,p.rectAreaLength=h,p.hemiLength=S,p.numDirectionalShadows=D,p.numPointShadows=d,p.numSpotShadows=f,p.numSpotMaps=u,p.numLightProbes=M,g.version=RY++)}function o(Q,n){let E=0,s=0,a=0,r=0,l=0;const c=n.matrixWorldInverse;for(let h=0,S=Q.length;h<S;h++){const D=Q[h];if(D.isDirectionalLight){const d=g.directional[E];d.direction.setFromMatrixPosition(D.matrixWorld),i.setFromMatrixPosition(D.target.matrixWorld),d.direction.sub(i),d.direction.transformDirection(c),E++}else if(D.isSpotLight){const d=g.spot[a];d.position.setFromMatrixPosition(D.matrixWorld),d.position.applyMatrix4(c),d.direction.setFromMatrixPosition(D.matrixWorld),i.setFromMatrixPosition(D.target.matrixWorld),d.direction.sub(i),d.direction.transformDirection(c),a++}else if(D.isRectAreaLight){const d=g.rectArea[r];d.position.setFromMatrixPosition(D.matrixWorld),d.position.applyMatrix4(c),t.identity(),C.copy(D.matrixWorld),C.premultiply(c),t.extractRotation(C),d.halfWidth.set(D.width*.5,0,0),d.halfHeight.set(0,D.height*.5,0),d.halfWidth.applyMatrix4(t),d.halfHeight.applyMatrix4(t),r++}else if(D.isPointLight){const d=g.point[s];d.position.setFromMatrixPosition(D.matrixWorld),d.position.applyMatrix4(c),s++}else if(D.isHemisphereLight){const d=g.hemi[l];d.direction.setFromMatrixPosition(D.matrixWorld),d.direction.transformDirection(c),l++}}}return{setup:B,setupView:o,state:g}}function qp(e){const A=new mY(e),I=[],g=[];function i(){I.length=0,g.length=0}function C(n){I.push(n)}function t(n){g.push(n)}function B(n){A.setup(I,n)}function o(n){A.setupView(I,n)}return{init:i,state:{lightsArray:I,shadowsArray:g,lights:A,transmissionRenderTarget:null},setupLights:B,setupLightsView:o,pushLight:C,pushShadow:t}}function KY(e){let A=new WeakMap;function I(i,C=0){const t=A.get(i);let B;return t===void 0?(B=new qp(e),A.set(i,[B])):C>=t.length?(B=new qp(e),t.push(B)):B=t[C],B}function g(){A=new WeakMap}return{get:I,dispose:g}}let zS=class extends Ki{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}},jS=class extends Ki{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}};const JY=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qY=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function LY(e,A,I){let g=new vE;const i=new NA,C=new NA,t=new Qg,B=new zS({depthPacking:MM}),o=new jS,Q={},n=I.maxTextureSize,E={[oe]:_i,[_i]:oe,[ie]:ie},s=new YC({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new NA},radius:{value:4}},vertexShader:JY,fragmentShader:qY}),a=s.clone();a.defines.HORIZONTAL_PASS=1;const r=new kI;r.setAttribute("position",new ig(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const l=new bg(r,s),c=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=NS;let h=this.type;this.render=function(u,y,M){if(c.enabled===!1||c.autoUpdate===!1&&c.needsUpdate===!1||u.length===0)return;const w=e.getRenderTarget(),p=e.getActiveCubeFace(),F=e.getActiveMipmapLevel(),T=e.state;T.setBlending(Je),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const J=h!==$C&&this.type===$C,m=h===$C&&this.type!==$C;for(let b=0,O=u.length;b<O;b++){const z=u[b],V=z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const AA=V.getFrameExtents();if(i.multiply(AA),C.copy(V.mapSize),(i.x>n||i.y>n)&&(i.x>n&&(C.x=Math.floor(n/AA.x),i.x=C.x*AA.x,V.mapSize.x=C.x),i.y>n&&(C.y=Math.floor(n/AA.y),i.y=C.y*AA.y,V.mapSize.y=C.y)),V.map===null||J===!0||m===!0){const aA=this.type!==$C?{minFilter:hi,magFilter:hi}:{};V.map!==null&&V.map.dispose(),V.map=new LC(i.x,i.y,aA),V.map.texture.name=z.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();const oA=V.getViewportCount();for(let aA=0;aA<oA;aA++){const GA=V.getViewport(aA);t.set(C.x*GA.x,C.y*GA.y,C.x*GA.z,C.y*GA.w),T.viewport(t),V.updateMatrices(z,aA),g=V.getFrustum(),d(y,M,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===$C&&S(V,M),V.needsUpdate=!1}h=this.type,c.needsUpdate=!1,e.setRenderTarget(w,p,F)};function S(u,y){const M=A.update(l);s.defines.VSM_SAMPLES!==u.blurSamples&&(s.defines.VSM_SAMPLES=u.blurSamples,a.defines.VSM_SAMPLES=u.blurSamples,s.needsUpdate=!0,a.needsUpdate=!0),u.mapPass===null&&(u.mapPass=new LC(i.x,i.y)),s.uniforms.shadow_pass.value=u.map.texture,s.uniforms.resolution.value=u.mapSize,s.uniforms.radius.value=u.radius,e.setRenderTarget(u.mapPass),e.clear(),e.renderBufferDirect(y,null,M,s,l,null),a.uniforms.shadow_pass.value=u.mapPass.texture,a.uniforms.resolution.value=u.mapSize,a.uniforms.radius.value=u.radius,e.setRenderTarget(u.map),e.clear(),e.renderBufferDirect(y,null,M,a,l,null)}function D(u,y,M,w){let p=null;const F=M.isPointLight===!0?u.customDistanceMaterial:u.customDepthMaterial;if(F!==void 0)p=F;else if(p=M.isPointLight===!0?o:B,e.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const T=p.uuid,J=y.uuid;let m=Q[T];m===void 0&&(m={},Q[T]=m);let b=m[J];b===void 0&&(b=p.clone(),m[J]=b,y.addEventListener("dispose",f)),p=b}if(p.visible=y.visible,p.wireframe=y.wireframe,w===$C?p.side=y.shadowSide!==null?y.shadowSide:y.side:p.side=y.shadowSide!==null?y.shadowSide:E[y.side],p.alphaMap=y.alphaMap,p.alphaTest=y.alphaTest,p.map=y.map,p.clipShadows=y.clipShadows,p.clippingPlanes=y.clippingPlanes,p.clipIntersection=y.clipIntersection,p.displacementMap=y.displacementMap,p.displacementScale=y.displacementScale,p.displacementBias=y.displacementBias,p.wireframeLinewidth=y.wireframeLinewidth,p.linewidth=y.linewidth,M.isPointLight===!0&&p.isMeshDistanceMaterial===!0){const T=e.properties.get(p);T.light=M}return p}function d(u,y,M,w,p){if(u.visible===!1)return;if(u.layers.test(y.layers)&&(u.isMesh||u.isLine||u.isPoints)&&(u.castShadow||u.receiveShadow&&p===$C)&&(!u.frustumCulled||g.intersectsObject(u))){u.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,u.matrixWorld);const J=A.update(u),m=u.material;if(Array.isArray(m)){const b=J.groups;for(let O=0,z=b.length;O<z;O++){const V=b[O],AA=m[V.materialIndex];if(AA&&AA.visible){const oA=D(u,AA,w,p);u.onBeforeShadow(e,u,y,M,J,oA,V),e.renderBufferDirect(M,null,J,oA,u,V),u.onAfterShadow(e,u,y,M,J,oA,V)}}}else if(m.visible){const b=D(u,m,w,p);u.onBeforeShadow(e,u,y,M,J,b,null),e.renderBufferDirect(M,null,J,b,u,null),u.onAfterShadow(e,u,y,M,J,b,null)}}const T=u.children;for(let J=0,m=T.length;J<m;J++)d(T[J],y,M,w,p)}function f(u){u.target.removeEventListener("dispose",f);for(const M in Q){const w=Q[M],p=u.target.uuid;p in w&&(w[p].dispose(),delete w[p])}}}function YY(e){function A(){let Z=!1;const fA=new Qg;let cA=null;const W=new Qg(0,0,0,0);return{setMask:function(pA){cA!==pA&&!Z&&(e.colorMask(pA,pA,pA,pA),cA=pA)},setLocked:function(pA){Z=pA},setClear:function(pA,mA,gI,AI,SI){SI===!0&&(pA*=AI,mA*=AI,gI*=AI),fA.set(pA,mA,gI,AI),W.equals(fA)===!1&&(e.clearColor(pA,mA,gI,AI),W.copy(fA))},reset:function(){Z=!1,cA=null,W.set(-1,0,0,0)}}}function I(){let Z=!1,fA=null,cA=null,W=null;return{setTest:function(pA){pA?yA(e.DEPTH_TEST):SA(e.DEPTH_TEST)},setMask:function(pA){fA!==pA&&!Z&&(e.depthMask(pA),fA=pA)},setFunc:function(pA){if(cA!==pA){switch(pA){case XG:e.depthFunc(e.NEVER);break;case $G:e.depthFunc(e.ALWAYS);break;case AM:e.depthFunc(e.LESS);break;case bn:e.depthFunc(e.LEQUAL);break;case IM:e.depthFunc(e.EQUAL);break;case gM:e.depthFunc(e.GEQUAL);break;case iM:e.depthFunc(e.GREATER);break;case CM:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}cA=pA}},setLocked:function(pA){Z=pA},setClear:function(pA){W!==pA&&(e.clearDepth(pA),W=pA)},reset:function(){Z=!1,fA=null,cA=null,W=null}}}function g(){let Z=!1,fA=null,cA=null,W=null,pA=null,mA=null,gI=null,AI=null,SI=null;return{setTest:function(sI){Z||(sI?yA(e.STENCIL_TEST):SA(e.STENCIL_TEST))},setMask:function(sI){fA!==sI&&!Z&&(e.stencilMask(sI),fA=sI)},setFunc:function(sI,Cg,Eg){(cA!==sI||W!==Cg||pA!==Eg)&&(e.stencilFunc(sI,Cg,Eg),cA=sI,W=Cg,pA=Eg)},setOp:function(sI,Cg,Eg){(mA!==sI||gI!==Cg||AI!==Eg)&&(e.stencilOp(sI,Cg,Eg),mA=sI,gI=Cg,AI=Eg)},setLocked:function(sI){Z=sI},setClear:function(sI){SI!==sI&&(e.clearStencil(sI),SI=sI)},reset:function(){Z=!1,fA=null,cA=null,W=null,pA=null,mA=null,gI=null,AI=null,SI=null}}}const i=new A,C=new I,t=new g,B=new WeakMap,o=new WeakMap;let Q={},n={},E=new WeakMap,s=[],a=null,r=!1,l=null,c=null,h=null,S=null,D=null,d=null,f=null,u=new iI(0,0,0),y=0,M=!1,w=null,p=null,F=null,T=null,J=null;const m=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let b=!1,O=0;const z=e.getParameter(e.VERSION);z.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(z)[1]),b=O>=1):z.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),b=O>=2);let V=null,AA={};const oA=e.getParameter(e.SCISSOR_BOX),aA=e.getParameter(e.VIEWPORT),GA=new Qg().fromArray(oA),rA=new Qg().fromArray(aA);function X(Z,fA,cA,W){const pA=new Uint8Array(4),mA=e.createTexture();e.bindTexture(Z,mA),e.texParameteri(Z,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(Z,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gI=0;gI<cA;gI++)Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?e.texImage3D(fA,0,e.RGBA,1,1,W,0,e.RGBA,e.UNSIGNED_BYTE,pA):e.texImage2D(fA+gI,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,pA);return mA}const lA={};lA[e.TEXTURE_2D]=X(e.TEXTURE_2D,e.TEXTURE_2D,1),lA[e.TEXTURE_CUBE_MAP]=X(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),lA[e.TEXTURE_2D_ARRAY]=X(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),lA[e.TEXTURE_3D]=X(e.TEXTURE_3D,e.TEXTURE_3D,1,1),i.setClear(0,0,0,1),C.setClear(1),t.setClear(0),yA(e.DEPTH_TEST),C.setFunc(bn),EA(!1),gA(Nl),yA(e.CULL_FACE),tA(Je);function yA(Z){Q[Z]!==!0&&(e.enable(Z),Q[Z]=!0)}function SA(Z){Q[Z]!==!1&&(e.disable(Z),Q[Z]=!1)}function JA(Z,fA){return n[Z]!==fA?(e.bindFramebuffer(Z,fA),n[Z]=fA,Z===e.DRAW_FRAMEBUFFER&&(n[e.FRAMEBUFFER]=fA),Z===e.FRAMEBUFFER&&(n[e.DRAW_FRAMEBUFFER]=fA),!0):!1}function ZA(Z,fA){let cA=s,W=!1;if(Z){cA=E.get(fA),cA===void 0&&(cA=[],E.set(fA,cA));const pA=Z.textures;if(cA.length!==pA.length||cA[0]!==e.COLOR_ATTACHMENT0){for(let mA=0,gI=pA.length;mA<gI;mA++)cA[mA]=e.COLOR_ATTACHMENT0+mA;cA.length=pA.length,W=!0}}else cA[0]!==e.BACK&&(cA[0]=e.BACK,W=!0);W&&e.drawBuffers(cA)}function FA(Z){return a!==Z?(e.useProgram(Z),a=Z,!0):!1}const IA={[St]:e.FUNC_ADD,[JG]:e.FUNC_SUBTRACT,[qG]:e.FUNC_REVERSE_SUBTRACT};IA[LG]=e.MIN,IA[YG]=e.MAX;const q={[HG]:e.ZERO,[xG]:e.ONE,[TG]:e.SRC_COLOR,[ur]:e.SRC_ALPHA,[ZG]:e.SRC_ALPHA_SATURATE,[OG]:e.DST_COLOR,[_G]:e.DST_ALPHA,[bG]:e.ONE_MINUS_SRC_COLOR,[yr]:e.ONE_MINUS_SRC_ALPHA,[PG]:e.ONE_MINUS_DST_COLOR,[vG]:e.ONE_MINUS_DST_ALPHA,[WG]:e.CONSTANT_COLOR,[VG]:e.ONE_MINUS_CONSTANT_COLOR,[zG]:e.CONSTANT_ALPHA,[jG]:e.ONE_MINUS_CONSTANT_ALPHA};function tA(Z,fA,cA,W,pA,mA,gI,AI,SI,sI){if(Z===Je){r===!0&&(SA(e.BLEND),r=!1);return}if(r===!1&&(yA(e.BLEND),r=!0),Z!==KG){if(Z!==l||sI!==M){if((c!==St||D!==St)&&(e.blendEquation(e.FUNC_ADD),c=St,D=St),sI)switch(Z){case KB:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Rl:e.blendFunc(e.ONE,e.ONE);break;case Fl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ml:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case KB:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Rl:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Fl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case ml:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}h=null,S=null,d=null,f=null,u.set(0,0,0),y=0,l=Z,M=sI}return}pA=pA||fA,mA=mA||cA,gI=gI||W,(fA!==c||pA!==D)&&(e.blendEquationSeparate(IA[fA],IA[pA]),c=fA,D=pA),(cA!==h||W!==S||mA!==d||gI!==f)&&(e.blendFuncSeparate(q[cA],q[W],q[mA],q[gI]),h=cA,S=W,d=mA,f=gI),(AI.equals(u)===!1||SI!==y)&&(e.blendColor(AI.r,AI.g,AI.b,SI),u.copy(AI),y=SI),l=Z,M=!1}function iA(Z,fA){Z.side===ie?SA(e.CULL_FACE):yA(e.CULL_FACE);let cA=Z.side===_i;fA&&(cA=!cA),EA(cA),Z.blending===KB&&Z.transparent===!1?tA(Je):tA(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),C.setFunc(Z.depthFunc),C.setTest(Z.depthTest),C.setMask(Z.depthWrite),i.setMask(Z.colorWrite);const W=Z.stencilWrite;t.setTest(W),W&&(t.setMask(Z.stencilWriteMask),t.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),t.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),R(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?yA(e.SAMPLE_ALPHA_TO_COVERAGE):SA(e.SAMPLE_ALPHA_TO_COVERAGE)}function EA(Z){w!==Z&&(Z?e.frontFace(e.CW):e.frontFace(e.CCW),w=Z)}function gA(Z){Z!==FG?(yA(e.CULL_FACE),Z!==p&&(Z===Nl?e.cullFace(e.BACK):Z===mG?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):SA(e.CULL_FACE),p=Z}function K(Z){Z!==F&&(b&&e.lineWidth(Z),F=Z)}function R(Z,fA,cA){Z?(yA(e.POLYGON_OFFSET_FILL),(T!==fA||J!==cA)&&(e.polygonOffset(fA,cA),T=fA,J=cA)):SA(e.POLYGON_OFFSET_FILL)}function N(Z){Z?yA(e.SCISSOR_TEST):SA(e.SCISSOR_TEST)}function k(Z){Z===void 0&&(Z=e.TEXTURE0+m-1),V!==Z&&(e.activeTexture(Z),V=Z)}function P(Z,fA,cA){cA===void 0&&(V===null?cA=e.TEXTURE0+m-1:cA=V);let W=AA[cA];W===void 0&&(W={type:void 0,texture:void 0},AA[cA]=W),(W.type!==Z||W.texture!==fA)&&(V!==cA&&(e.activeTexture(cA),V=cA),e.bindTexture(Z,fA||lA[Z]),W.type=Z,W.texture=fA)}function CA(){const Z=AA[V];Z!==void 0&&Z.type!==void 0&&(e.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function DA(){try{e.compressedTexImage2D.apply(e,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function eA(){try{e.compressedTexImage3D.apply(e,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function MA(){try{e.texSubImage2D.apply(e,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function wA(){try{e.texSubImage3D.apply(e,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function dA(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function kA(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function _A(){try{e.texStorage2D.apply(e,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function hA(){try{e.texStorage3D.apply(e,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function LA(){try{e.texImage2D.apply(e,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function II(){try{e.texImage3D.apply(e,arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function jA(Z){GA.equals(Z)===!1&&(e.scissor(Z.x,Z.y,Z.z,Z.w),GA.copy(Z))}function VA(Z){rA.equals(Z)===!1&&(e.viewport(Z.x,Z.y,Z.z,Z.w),rA.copy(Z))}function qA(Z,fA){let cA=o.get(fA);cA===void 0&&(cA=new WeakMap,o.set(fA,cA));let W=cA.get(Z);W===void 0&&(W=e.getUniformBlockIndex(fA,Z.name),cA.set(Z,W))}function eI(Z,fA){const W=o.get(fA).get(Z);B.get(fA)!==W&&(e.uniformBlockBinding(fA,W,Z.__bindingPointIndex),B.set(fA,W))}function vA(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),Q={},V=null,AA={},n={},E=new WeakMap,s=[],a=null,r=!1,l=null,c=null,h=null,S=null,D=null,d=null,f=null,u=new iI(0,0,0),y=0,M=!1,w=null,p=null,F=null,T=null,J=null,GA.set(0,0,e.canvas.width,e.canvas.height),rA.set(0,0,e.canvas.width,e.canvas.height),i.reset(),C.reset(),t.reset()}return{buffers:{color:i,depth:C,stencil:t},enable:yA,disable:SA,bindFramebuffer:JA,drawBuffers:ZA,useProgram:FA,setBlending:tA,setMaterial:iA,setFlipSided:EA,setCullFace:gA,setLineWidth:K,setPolygonOffset:R,setScissorTest:N,activeTexture:k,bindTexture:P,unbindTexture:CA,compressedTexImage2D:DA,compressedTexImage3D:eA,texImage2D:LA,texImage3D:II,updateUBOMapping:qA,uniformBlockBinding:eI,texStorage2D:_A,texStorage3D:hA,texSubImage2D:MA,texSubImage3D:wA,compressedTexSubImage2D:dA,compressedTexSubImage3D:kA,scissor:jA,viewport:VA,reset:vA}}function HY(e,A,I,g,i,C,t){const B=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),Q=new NA,n=new WeakMap;let E;const s=new WeakMap;let a=!1;try{a=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function r(K,R){return a?new OffscreenCanvas(K,R):gE("canvas")}function l(K,R,N){let k=1;const P=gA(K);if((P.width>N||P.height>N)&&(k=N/Math.max(P.width,P.height)),k<1)if(typeof HTMLImageElement<"u"&&K instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&K instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&K instanceof ImageBitmap||typeof VideoFrame<"u"&&K instanceof VideoFrame){const CA=Math.floor(k*P.width),DA=Math.floor(k*P.height);E===void 0&&(E=r(CA,DA));const eA=R?r(CA,DA):E;return eA.width=CA,eA.height=DA,eA.getContext("2d").drawImage(K,0,0,CA,DA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+CA+"x"+DA+")."),eA}else return"data"in K&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),K;return K}function c(K){return K.generateMipmaps&&K.minFilter!==hi&&K.minFilter!==Vg}function h(K){e.generateMipmap(K)}function S(K,R,N,k,P=!1){if(K!==null){if(e[K]!==void 0)return e[K];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+K+"'")}let CA=R;if(R===e.RED&&(N===e.FLOAT&&(CA=e.R32F),N===e.HALF_FLOAT&&(CA=e.R16F),N===e.UNSIGNED_BYTE&&(CA=e.R8)),R===e.RED_INTEGER&&(N===e.UNSIGNED_BYTE&&(CA=e.R8UI),N===e.UNSIGNED_SHORT&&(CA=e.R16UI),N===e.UNSIGNED_INT&&(CA=e.R32UI),N===e.BYTE&&(CA=e.R8I),N===e.SHORT&&(CA=e.R16I),N===e.INT&&(CA=e.R32I)),R===e.RG&&(N===e.FLOAT&&(CA=e.RG32F),N===e.HALF_FLOAT&&(CA=e.RG16F),N===e.UNSIGNED_BYTE&&(CA=e.RG8)),R===e.RG_INTEGER&&(N===e.UNSIGNED_BYTE&&(CA=e.RG8UI),N===e.UNSIGNED_SHORT&&(CA=e.RG16UI),N===e.UNSIGNED_INT&&(CA=e.RG32UI),N===e.BYTE&&(CA=e.RG8I),N===e.SHORT&&(CA=e.RG16I),N===e.INT&&(CA=e.RG32I)),R===e.RGB&&N===e.UNSIGNED_INT_5_9_9_9_REV&&(CA=e.RGB9_E5),R===e.RGBA){const DA=P?jn:gg.getTransfer(k);N===e.FLOAT&&(CA=e.RGBA32F),N===e.HALF_FLOAT&&(CA=e.RGBA16F),N===e.UNSIGNED_BYTE&&(CA=DA===sg?e.SRGB8_ALPHA8:e.RGBA8),N===e.UNSIGNED_SHORT_4_4_4_4&&(CA=e.RGBA4),N===e.UNSIGNED_SHORT_5_5_5_1&&(CA=e.RGB5_A1)}return(CA===e.R16F||CA===e.R32F||CA===e.RG16F||CA===e.RG32F||CA===e.RGBA16F||CA===e.RGBA32F)&&A.get("EXT_color_buffer_float"),CA}function D(K,R){return c(K)===!0||K.isFramebufferTexture&&K.minFilter!==hi&&K.minFilter!==Vg?Math.log2(Math.max(R.width,R.height))+1:K.mipmaps!==void 0&&K.mipmaps.length>0?K.mipmaps.length:K.isCompressedTexture&&Array.isArray(K.image)?R.mipmaps.length:1}function d(K){const R=K.target;R.removeEventListener("dispose",d),u(R),R.isVideoTexture&&n.delete(R)}function f(K){const R=K.target;R.removeEventListener("dispose",f),M(R)}function u(K){const R=g.get(K);if(R.__webglInit===void 0)return;const N=K.source,k=s.get(N);if(k){const P=k[R.__cacheKey];P.usedTimes--,P.usedTimes===0&&y(K),Object.keys(k).length===0&&s.delete(N)}g.remove(K)}function y(K){const R=g.get(K);e.deleteTexture(R.__webglTexture);const N=K.source,k=s.get(N);delete k[R.__cacheKey],t.memory.textures--}function M(K){const R=g.get(K);if(K.depthTexture&&K.depthTexture.dispose(),K.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(R.__webglFramebuffer[k]))for(let P=0;P<R.__webglFramebuffer[k].length;P++)e.deleteFramebuffer(R.__webglFramebuffer[k][P]);else e.deleteFramebuffer(R.__webglFramebuffer[k]);R.__webglDepthbuffer&&e.deleteRenderbuffer(R.__webglDepthbuffer[k])}else{if(Array.isArray(R.__webglFramebuffer))for(let k=0;k<R.__webglFramebuffer.length;k++)e.deleteFramebuffer(R.__webglFramebuffer[k]);else e.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&e.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&e.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let k=0;k<R.__webglColorRenderbuffer.length;k++)R.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(R.__webglColorRenderbuffer[k]);R.__webglDepthRenderbuffer&&e.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const N=K.textures;for(let k=0,P=N.length;k<P;k++){const CA=g.get(N[k]);CA.__webglTexture&&(e.deleteTexture(CA.__webglTexture),t.memory.textures--),g.remove(N[k])}g.remove(K)}let w=0;function p(){w=0}function F(){const K=w;return K>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+K+" texture units while this GPU supports only "+i.maxTextures),w+=1,K}function T(K){const R=[];return R.push(K.wrapS),R.push(K.wrapT),R.push(K.wrapR||0),R.push(K.magFilter),R.push(K.minFilter),R.push(K.anisotropy),R.push(K.internalFormat),R.push(K.format),R.push(K.type),R.push(K.generateMipmaps),R.push(K.premultiplyAlpha),R.push(K.flipY),R.push(K.unpackAlignment),R.push(K.colorSpace),R.join()}function J(K,R){const N=g.get(K);if(K.isVideoTexture&&iA(K),K.isRenderTargetTexture===!1&&K.version>0&&N.__version!==K.version){const k=K.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{GA(N,K,R);return}}I.bindTexture(e.TEXTURE_2D,N.__webglTexture,e.TEXTURE0+R)}function m(K,R){const N=g.get(K);if(K.version>0&&N.__version!==K.version){GA(N,K,R);return}I.bindTexture(e.TEXTURE_2D_ARRAY,N.__webglTexture,e.TEXTURE0+R)}function b(K,R){const N=g.get(K);if(K.version>0&&N.__version!==K.version){GA(N,K,R);return}I.bindTexture(e.TEXTURE_3D,N.__webglTexture,e.TEXTURE0+R)}function O(K,R){const N=g.get(K);if(K.version>0&&N.__version!==K.version){rA(N,K,R);return}I.bindTexture(e.TEXTURE_CUBE_MAP,N.__webglTexture,e.TEXTURE0+R)}const z={[On]:e.REPEAT,[dC]:e.CLAMP_TO_EDGE,[Pn]:e.MIRRORED_REPEAT},V={[hi]:e.NEAREST,[FS]:e.NEAREST_MIPMAP_NEAREST,[tQ]:e.NEAREST_MIPMAP_LINEAR,[Vg]:e.LINEAR,[mn]:e.LINEAR_MIPMAP_NEAREST,[ee]:e.LINEAR_MIPMAP_LINEAR},AA={[UM]:e.NEVER,[JM]:e.ALWAYS,[NM]:e.LESS,[_S]:e.LEQUAL,[RM]:e.EQUAL,[KM]:e.GEQUAL,[FM]:e.GREATER,[mM]:e.NOTEQUAL};function oA(K,R){if(R.type===wC&&A.has("OES_texture_float_linear")===!1&&(R.magFilter===Vg||R.magFilter===mn||R.magFilter===tQ||R.magFilter===ee||R.minFilter===Vg||R.minFilter===mn||R.minFilter===tQ||R.minFilter===ee)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(K,e.TEXTURE_WRAP_S,z[R.wrapS]),e.texParameteri(K,e.TEXTURE_WRAP_T,z[R.wrapT]),(K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY)&&e.texParameteri(K,e.TEXTURE_WRAP_R,z[R.wrapR]),e.texParameteri(K,e.TEXTURE_MAG_FILTER,V[R.magFilter]),e.texParameteri(K,e.TEXTURE_MIN_FILTER,V[R.minFilter]),R.compareFunction&&(e.texParameteri(K,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(K,e.TEXTURE_COMPARE_FUNC,AA[R.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===hi||R.minFilter!==tQ&&R.minFilter!==ee||R.type===wC&&A.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||g.get(R).__currentAnisotropy){const N=A.get("EXT_texture_filter_anisotropic");e.texParameterf(K,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),g.get(R).__currentAnisotropy=R.anisotropy}}}function aA(K,R){let N=!1;K.__webglInit===void 0&&(K.__webglInit=!0,R.addEventListener("dispose",d));const k=R.source;let P=s.get(k);P===void 0&&(P={},s.set(k,P));const CA=T(R);if(CA!==K.__cacheKey){P[CA]===void 0&&(P[CA]={texture:e.createTexture(),usedTimes:0},t.memory.textures++,N=!0),P[CA].usedTimes++;const DA=P[K.__cacheKey];DA!==void 0&&(P[K.__cacheKey].usedTimes--,DA.usedTimes===0&&y(R)),K.__cacheKey=CA,K.__webglTexture=P[CA].texture}return N}function GA(K,R,N){let k=e.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),R.isData3DTexture&&(k=e.TEXTURE_3D);const P=aA(K,R),CA=R.source;I.bindTexture(k,K.__webglTexture,e.TEXTURE0+N);const DA=g.get(CA);if(CA.version!==DA.__version||P===!0){I.activeTexture(e.TEXTURE0+N);const eA=gg.getPrimaries(gg.workingColorSpace),MA=R.colorSpace===Ue?null:gg.getPrimaries(R.colorSpace),wA=R.colorSpace===Ue||eA===MA?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,wA);let dA=l(R.image,!1,i.maxTextureSize);dA=EA(R,dA);const kA=C.convert(R.format,R.colorSpace),_A=C.convert(R.type);let hA=S(R.internalFormat,kA,_A,R.colorSpace,R.isVideoTexture);oA(k,R);let LA;const II=R.mipmaps,jA=R.isVideoTexture!==!0&&hA!==TS,VA=DA.__version===void 0||P===!0,qA=CA.dataReady,eI=D(R,dA);if(R.isDepthTexture)hA=e.DEPTH_COMPONENT16,R.type===wC?hA=e.DEPTH_COMPONENT32F:R.type===PB?hA=e.DEPTH_COMPONENT24:R.type===YQ&&(hA=e.DEPTH24_STENCIL8),VA&&(jA?I.texStorage2D(e.TEXTURE_2D,1,hA,dA.width,dA.height):I.texImage2D(e.TEXTURE_2D,0,hA,dA.width,dA.height,0,kA,_A,null));else if(R.isDataTexture)if(II.length>0){jA&&VA&&I.texStorage2D(e.TEXTURE_2D,eI,hA,II[0].width,II[0].height);for(let vA=0,Z=II.length;vA<Z;vA++)LA=II[vA],jA?qA&&I.texSubImage2D(e.TEXTURE_2D,vA,0,0,LA.width,LA.height,kA,_A,LA.data):I.texImage2D(e.TEXTURE_2D,vA,hA,LA.width,LA.height,0,kA,_A,LA.data);R.generateMipmaps=!1}else jA?(VA&&I.texStorage2D(e.TEXTURE_2D,eI,hA,dA.width,dA.height),qA&&I.texSubImage2D(e.TEXTURE_2D,0,0,0,dA.width,dA.height,kA,_A,dA.data)):I.texImage2D(e.TEXTURE_2D,0,hA,dA.width,dA.height,0,kA,_A,dA.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){jA&&VA&&I.texStorage3D(e.TEXTURE_2D_ARRAY,eI,hA,II[0].width,II[0].height,dA.depth);for(let vA=0,Z=II.length;vA<Z;vA++)LA=II[vA],R.format!==nC?kA!==null?jA?qA&&I.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,vA,0,0,0,LA.width,LA.height,dA.depth,kA,LA.data,0,0):I.compressedTexImage3D(e.TEXTURE_2D_ARRAY,vA,hA,LA.width,LA.height,dA.depth,0,LA.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jA?qA&&I.texSubImage3D(e.TEXTURE_2D_ARRAY,vA,0,0,0,LA.width,LA.height,dA.depth,kA,_A,LA.data):I.texImage3D(e.TEXTURE_2D_ARRAY,vA,hA,LA.width,LA.height,dA.depth,0,kA,_A,LA.data)}else{jA&&VA&&I.texStorage2D(e.TEXTURE_2D,eI,hA,II[0].width,II[0].height);for(let vA=0,Z=II.length;vA<Z;vA++)LA=II[vA],R.format!==nC?kA!==null?jA?qA&&I.compressedTexSubImage2D(e.TEXTURE_2D,vA,0,0,LA.width,LA.height,kA,LA.data):I.compressedTexImage2D(e.TEXTURE_2D,vA,hA,LA.width,LA.height,0,LA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jA?qA&&I.texSubImage2D(e.TEXTURE_2D,vA,0,0,LA.width,LA.height,kA,_A,LA.data):I.texImage2D(e.TEXTURE_2D,vA,hA,LA.width,LA.height,0,kA,_A,LA.data)}else if(R.isDataArrayTexture)jA?(VA&&I.texStorage3D(e.TEXTURE_2D_ARRAY,eI,hA,dA.width,dA.height,dA.depth),qA&&I.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,dA.width,dA.height,dA.depth,kA,_A,dA.data)):I.texImage3D(e.TEXTURE_2D_ARRAY,0,hA,dA.width,dA.height,dA.depth,0,kA,_A,dA.data);else if(R.isData3DTexture)jA?(VA&&I.texStorage3D(e.TEXTURE_3D,eI,hA,dA.width,dA.height,dA.depth),qA&&I.texSubImage3D(e.TEXTURE_3D,0,0,0,0,dA.width,dA.height,dA.depth,kA,_A,dA.data)):I.texImage3D(e.TEXTURE_3D,0,hA,dA.width,dA.height,dA.depth,0,kA,_A,dA.data);else if(R.isFramebufferTexture){if(VA)if(jA)I.texStorage2D(e.TEXTURE_2D,eI,hA,dA.width,dA.height);else{let vA=dA.width,Z=dA.height;for(let fA=0;fA<eI;fA++)I.texImage2D(e.TEXTURE_2D,fA,hA,vA,Z,0,kA,_A,null),vA>>=1,Z>>=1}}else if(II.length>0){if(jA&&VA){const vA=gA(II[0]);I.texStorage2D(e.TEXTURE_2D,eI,hA,vA.width,vA.height)}for(let vA=0,Z=II.length;vA<Z;vA++)LA=II[vA],jA?qA&&I.texSubImage2D(e.TEXTURE_2D,vA,0,0,kA,_A,LA):I.texImage2D(e.TEXTURE_2D,vA,hA,kA,_A,LA);R.generateMipmaps=!1}else if(jA){if(VA){const vA=gA(dA);I.texStorage2D(e.TEXTURE_2D,eI,hA,vA.width,vA.height)}qA&&I.texSubImage2D(e.TEXTURE_2D,0,0,0,kA,_A,dA)}else I.texImage2D(e.TEXTURE_2D,0,hA,kA,_A,dA);c(R)&&h(k),DA.__version=CA.version,R.onUpdate&&R.onUpdate(R)}K.__version=R.version}function rA(K,R,N){if(R.image.length!==6)return;const k=aA(K,R),P=R.source;I.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture,e.TEXTURE0+N);const CA=g.get(P);if(P.version!==CA.__version||k===!0){I.activeTexture(e.TEXTURE0+N);const DA=gg.getPrimaries(gg.workingColorSpace),eA=R.colorSpace===Ue?null:gg.getPrimaries(R.colorSpace),MA=R.colorSpace===Ue||DA===eA?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,MA);const wA=R.isCompressedTexture||R.image[0].isCompressedTexture,dA=R.image[0]&&R.image[0].isDataTexture,kA=[];for(let Z=0;Z<6;Z++)!wA&&!dA?kA[Z]=l(R.image[Z],!0,i.maxCubemapSize):kA[Z]=dA?R.image[Z].image:R.image[Z],kA[Z]=EA(R,kA[Z]);const _A=kA[0],hA=C.convert(R.format,R.colorSpace),LA=C.convert(R.type),II=S(R.internalFormat,hA,LA,R.colorSpace),jA=R.isVideoTexture!==!0,VA=CA.__version===void 0||k===!0,qA=P.dataReady;let eI=D(R,_A);oA(e.TEXTURE_CUBE_MAP,R);let vA;if(wA){jA&&VA&&I.texStorage2D(e.TEXTURE_CUBE_MAP,eI,II,_A.width,_A.height);for(let Z=0;Z<6;Z++){vA=kA[Z].mipmaps;for(let fA=0;fA<vA.length;fA++){const cA=vA[fA];R.format!==nC?hA!==null?jA?qA&&I.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fA,0,0,cA.width,cA.height,hA,cA.data):I.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fA,II,cA.width,cA.height,0,cA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jA?qA&&I.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fA,0,0,cA.width,cA.height,hA,LA,cA.data):I.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fA,II,cA.width,cA.height,0,hA,LA,cA.data)}}}else{if(vA=R.mipmaps,jA&&VA){vA.length>0&&eI++;const Z=gA(kA[0]);I.texStorage2D(e.TEXTURE_CUBE_MAP,eI,II,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(dA){jA?qA&&I.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,kA[Z].width,kA[Z].height,hA,LA,kA[Z].data):I.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,II,kA[Z].width,kA[Z].height,0,hA,LA,kA[Z].data);for(let fA=0;fA<vA.length;fA++){const W=vA[fA].image[Z].image;jA?qA&&I.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fA+1,0,0,W.width,W.height,hA,LA,W.data):I.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fA+1,II,W.width,W.height,0,hA,LA,W.data)}}else{jA?qA&&I.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,hA,LA,kA[Z]):I.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,II,hA,LA,kA[Z]);for(let fA=0;fA<vA.length;fA++){const cA=vA[fA];jA?qA&&I.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fA+1,0,0,hA,LA,cA.image[Z]):I.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fA+1,II,hA,LA,cA.image[Z])}}}c(R)&&h(e.TEXTURE_CUBE_MAP),CA.__version=P.version,R.onUpdate&&R.onUpdate(R)}K.__version=R.version}function X(K,R,N,k,P,CA){const DA=C.convert(N.format,N.colorSpace),eA=C.convert(N.type),MA=S(N.internalFormat,DA,eA,N.colorSpace);if(!g.get(R).__hasExternalTextures){const dA=Math.max(1,R.width>>CA),kA=Math.max(1,R.height>>CA);P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?I.texImage3D(P,CA,MA,dA,kA,R.depth,0,DA,eA,null):I.texImage2D(P,CA,MA,dA,kA,0,DA,eA,null)}I.bindFramebuffer(e.FRAMEBUFFER,K),tA(R)?B.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,P,g.get(N).__webglTexture,0,q(R)):(P===e.TEXTURE_2D||P>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,P,g.get(N).__webglTexture,CA),I.bindFramebuffer(e.FRAMEBUFFER,null)}function lA(K,R,N){if(e.bindRenderbuffer(e.RENDERBUFFER,K),R.depthBuffer&&!R.stencilBuffer){let k=e.DEPTH_COMPONENT24;if(N||tA(R)){const P=R.depthTexture;P&&P.isDepthTexture&&(P.type===wC?k=e.DEPTH_COMPONENT32F:P.type===PB&&(k=e.DEPTH_COMPONENT24));const CA=q(R);tA(R)?B.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,CA,k,R.width,R.height):e.renderbufferStorageMultisample(e.RENDERBUFFER,CA,k,R.width,R.height)}else e.renderbufferStorage(e.RENDERBUFFER,k,R.width,R.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,K)}else if(R.depthBuffer&&R.stencilBuffer){const k=q(R);N&&tA(R)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,k,e.DEPTH24_STENCIL8,R.width,R.height):tA(R)?B.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,k,e.DEPTH24_STENCIL8,R.width,R.height):e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_STENCIL,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.RENDERBUFFER,K)}else{const k=R.textures;for(let P=0;P<k.length;P++){const CA=k[P],DA=C.convert(CA.format,CA.colorSpace),eA=C.convert(CA.type),MA=S(CA.internalFormat,DA,eA,CA.colorSpace),wA=q(R);N&&tA(R)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,wA,MA,R.width,R.height):tA(R)?B.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,wA,MA,R.width,R.height):e.renderbufferStorage(e.RENDERBUFFER,MA,R.width,R.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function yA(K,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(e.FRAMEBUFFER,K),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),J(R.depthTexture,0);const k=g.get(R.depthTexture).__webglTexture,P=q(R);if(R.depthTexture.format===JB)tA(R)?B.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,k,0,P):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,k,0);else if(R.depthTexture.format===wQ)tA(R)?B.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,k,0,P):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function SA(K){const R=g.get(K),N=K.isWebGLCubeRenderTarget===!0;if(K.depthTexture&&!R.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");yA(R.__webglFramebuffer,K)}else if(N){R.__webglDepthbuffer=[];for(let k=0;k<6;k++)I.bindFramebuffer(e.FRAMEBUFFER,R.__webglFramebuffer[k]),R.__webglDepthbuffer[k]=e.createRenderbuffer(),lA(R.__webglDepthbuffer[k],K,!1)}else I.bindFramebuffer(e.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=e.createRenderbuffer(),lA(R.__webglDepthbuffer,K,!1);I.bindFramebuffer(e.FRAMEBUFFER,null)}function JA(K,R,N){const k=g.get(K);R!==void 0&&X(k.__webglFramebuffer,K,K.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),N!==void 0&&SA(K)}function ZA(K){const R=K.texture,N=g.get(K),k=g.get(R);K.addEventListener("dispose",f);const P=K.textures,CA=K.isWebGLCubeRenderTarget===!0,DA=P.length>1;if(DA||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=R.version,t.memory.textures++),CA){N.__webglFramebuffer=[];for(let eA=0;eA<6;eA++)if(R.mipmaps&&R.mipmaps.length>0){N.__webglFramebuffer[eA]=[];for(let MA=0;MA<R.mipmaps.length;MA++)N.__webglFramebuffer[eA][MA]=e.createFramebuffer()}else N.__webglFramebuffer[eA]=e.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){N.__webglFramebuffer=[];for(let eA=0;eA<R.mipmaps.length;eA++)N.__webglFramebuffer[eA]=e.createFramebuffer()}else N.__webglFramebuffer=e.createFramebuffer();if(DA)for(let eA=0,MA=P.length;eA<MA;eA++){const wA=g.get(P[eA]);wA.__webglTexture===void 0&&(wA.__webglTexture=e.createTexture(),t.memory.textures++)}if(K.samples>0&&tA(K)===!1){N.__webglMultisampledFramebuffer=e.createFramebuffer(),N.__webglColorRenderbuffer=[],I.bindFramebuffer(e.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let eA=0;eA<P.length;eA++){const MA=P[eA];N.__webglColorRenderbuffer[eA]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,N.__webglColorRenderbuffer[eA]);const wA=C.convert(MA.format,MA.colorSpace),dA=C.convert(MA.type),kA=S(MA.internalFormat,wA,dA,MA.colorSpace,K.isXRRenderTarget===!0),_A=q(K);e.renderbufferStorageMultisample(e.RENDERBUFFER,_A,kA,K.width,K.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+eA,e.RENDERBUFFER,N.__webglColorRenderbuffer[eA])}e.bindRenderbuffer(e.RENDERBUFFER,null),K.depthBuffer&&(N.__webglDepthRenderbuffer=e.createRenderbuffer(),lA(N.__webglDepthRenderbuffer,K,!0)),I.bindFramebuffer(e.FRAMEBUFFER,null)}}if(CA){I.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),oA(e.TEXTURE_CUBE_MAP,R);for(let eA=0;eA<6;eA++)if(R.mipmaps&&R.mipmaps.length>0)for(let MA=0;MA<R.mipmaps.length;MA++)X(N.__webglFramebuffer[eA][MA],K,R,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+eA,MA);else X(N.__webglFramebuffer[eA],K,R,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+eA,0);c(R)&&h(e.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(DA){for(let eA=0,MA=P.length;eA<MA;eA++){const wA=P[eA],dA=g.get(wA);I.bindTexture(e.TEXTURE_2D,dA.__webglTexture),oA(e.TEXTURE_2D,wA),X(N.__webglFramebuffer,K,wA,e.COLOR_ATTACHMENT0+eA,e.TEXTURE_2D,0),c(wA)&&h(e.TEXTURE_2D)}I.unbindTexture()}else{let eA=e.TEXTURE_2D;if((K.isWebGL3DRenderTarget||K.isWebGLArrayRenderTarget)&&(eA=K.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),I.bindTexture(eA,k.__webglTexture),oA(eA,R),R.mipmaps&&R.mipmaps.length>0)for(let MA=0;MA<R.mipmaps.length;MA++)X(N.__webglFramebuffer[MA],K,R,e.COLOR_ATTACHMENT0,eA,MA);else X(N.__webglFramebuffer,K,R,e.COLOR_ATTACHMENT0,eA,0);c(R)&&h(eA),I.unbindTexture()}K.depthBuffer&&SA(K)}function FA(K){const R=K.textures;for(let N=0,k=R.length;N<k;N++){const P=R[N];if(c(P)){const CA=K.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,DA=g.get(P).__webglTexture;I.bindTexture(CA,DA),h(CA),I.unbindTexture()}}}function IA(K){if(K.samples>0&&tA(K)===!1){const R=K.textures,N=K.width,k=K.height;let P=e.COLOR_BUFFER_BIT;const CA=[],DA=K.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,eA=g.get(K),MA=R.length>1;if(MA)for(let wA=0;wA<R.length;wA++)I.bindFramebuffer(e.FRAMEBUFFER,eA.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+wA,e.RENDERBUFFER,null),I.bindFramebuffer(e.FRAMEBUFFER,eA.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+wA,e.TEXTURE_2D,null,0);I.bindFramebuffer(e.READ_FRAMEBUFFER,eA.__webglMultisampledFramebuffer),I.bindFramebuffer(e.DRAW_FRAMEBUFFER,eA.__webglFramebuffer);for(let wA=0;wA<R.length;wA++){CA.push(e.COLOR_ATTACHMENT0+wA),K.depthBuffer&&CA.push(DA);const dA=eA.__ignoreDepthValues!==void 0?eA.__ignoreDepthValues:!1;if(dA===!1&&(K.depthBuffer&&(P|=e.DEPTH_BUFFER_BIT),K.stencilBuffer&&eA.__isTransmissionRenderTarget!==!0&&(P|=e.STENCIL_BUFFER_BIT)),MA&&e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,eA.__webglColorRenderbuffer[wA]),dA===!0&&(e.invalidateFramebuffer(e.READ_FRAMEBUFFER,[DA]),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[DA])),MA){const kA=g.get(R[wA]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,kA,0)}e.blitFramebuffer(0,0,N,k,0,0,N,k,P,e.NEAREST),o&&e.invalidateFramebuffer(e.READ_FRAMEBUFFER,CA)}if(I.bindFramebuffer(e.READ_FRAMEBUFFER,null),I.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),MA)for(let wA=0;wA<R.length;wA++){I.bindFramebuffer(e.FRAMEBUFFER,eA.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+wA,e.RENDERBUFFER,eA.__webglColorRenderbuffer[wA]);const dA=g.get(R[wA]).__webglTexture;I.bindFramebuffer(e.FRAMEBUFFER,eA.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+wA,e.TEXTURE_2D,dA,0)}I.bindFramebuffer(e.DRAW_FRAMEBUFFER,eA.__webglMultisampledFramebuffer)}}function q(K){return Math.min(i.maxSamples,K.samples)}function tA(K){const R=g.get(K);return K.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function iA(K){const R=t.render.frame;n.get(K)!==R&&(n.set(K,R),K.update())}function EA(K,R){const N=K.colorSpace,k=K.format,P=K.type;return K.isCompressedTexture===!0||K.isVideoTexture===!0||N!==We&&N!==Ue&&(gg.getTransfer(N)===sg?(k!==nC||P!==Le)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),R}function gA(K){return typeof HTMLImageElement<"u"&&K instanceof HTMLImageElement?(Q.width=K.naturalWidth||K.width,Q.height=K.naturalHeight||K.height):typeof VideoFrame<"u"&&K instanceof VideoFrame?(Q.width=K.displayWidth,Q.height=K.displayHeight):(Q.width=K.width,Q.height=K.height),Q}this.allocateTextureUnit=F,this.resetTextureUnits=p,this.setTexture2D=J,this.setTexture2DArray=m,this.setTexture3D=b,this.setTextureCube=O,this.rebindTextures=JA,this.setupRenderTarget=ZA,this.updateRenderTargetMipmap=FA,this.updateMultisampleRenderTarget=IA,this.setupDepthRenderbuffer=SA,this.setupFrameBufferTexture=X,this.useMultisampledRTT=tA}function t0(e,A){function I(g,i=Ue){let C;const t=gg.getTransfer(i);if(g===Le)return e.UNSIGNED_BYTE;if(g===JS)return e.UNSIGNED_SHORT_4_4_4_4;if(g===qS)return e.UNSIGNED_SHORT_5_5_5_1;if(g===cM)return e.UNSIGNED_INT_5_9_9_9_REV;if(g===rM)return e.BYTE;if(g===hM)return e.SHORT;if(g===mS)return e.UNSIGNED_SHORT;if(g===KS)return e.INT;if(g===PB)return e.UNSIGNED_INT;if(g===wC)return e.FLOAT;if(g===Zn)return e.HALF_FLOAT;if(g===lM)return e.ALPHA;if(g===DM)return e.RGB;if(g===nC)return e.RGBA;if(g===SM)return e.LUMINANCE;if(g===dM)return e.LUMINANCE_ALPHA;if(g===JB)return e.DEPTH_COMPONENT;if(g===wQ)return e.DEPTH_STENCIL;if(g===LS)return e.RED;if(g===YS)return e.RED_INTEGER;if(g===wM)return e.RG;if(g===HS)return e.RG_INTEGER;if(g===xS)return e.RGBA_INTEGER;if(g===Cr||g===er||g===tr||g===Br)if(t===sg)if(C=A.get("WEBGL_compressed_texture_s3tc_srgb"),C!==null){if(g===Cr)return C.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===er)return C.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===tr)return C.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===Br)return C.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(C=A.get("WEBGL_compressed_texture_s3tc"),C!==null){if(g===Cr)return C.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===er)return C.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===tr)return C.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===Br)return C.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===Jl||g===ql||g===Ll||g===Yl)if(C=A.get("WEBGL_compressed_texture_pvrtc"),C!==null){if(g===Jl)return C.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===ql)return C.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===Ll)return C.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===Yl)return C.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===TS)return C=A.get("WEBGL_compressed_texture_etc1"),C!==null?C.COMPRESSED_RGB_ETC1_WEBGL:null;if(g===Hl||g===xl)if(C=A.get("WEBGL_compressed_texture_etc"),C!==null){if(g===Hl)return t===sg?C.COMPRESSED_SRGB8_ETC2:C.COMPRESSED_RGB8_ETC2;if(g===xl)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:C.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===Tl||g===bl||g===_l||g===vl||g===Ol||g===Pl||g===Zl||g===Wl||g===Vl||g===zl||g===jl||g===Xl||g===$l||g===AD)if(C=A.get("WEBGL_compressed_texture_astc"),C!==null){if(g===Tl)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:C.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===bl)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:C.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===_l)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:C.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===vl)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:C.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===Ol)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:C.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===Pl)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:C.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===Zl)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:C.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===Wl)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:C.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===Vl)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:C.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===zl)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:C.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===jl)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:C.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===Xl)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:C.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===$l)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:C.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===AD)return t===sg?C.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:C.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===or||g===ID||g===gD)if(C=A.get("EXT_texture_compression_bptc"),C!==null){if(g===or)return t===sg?C.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:C.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===ID)return C.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===gD)return C.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===pM||g===iD||g===CD||g===eD)if(C=A.get("EXT_texture_compression_rgtc"),C!==null){if(g===or)return C.COMPRESSED_RED_RGTC1_EXT;if(g===iD)return C.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===CD)return C.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===eD)return C.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===YQ?e.UNSIGNED_INT_24_8:e[g]!==void 0?e[g]:null}return{convert:I}}let B0=class extends ri{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}},MB=class extends $I{constructor(){super(),this.isGroup=!0,this.type="Group"}};const xY={type:"move"};let pc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new MB,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new MB,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new MB,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let i=null,C=null,t=null;const B=this._targetRay,o=this._grip,Q=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(Q&&A.hand){t=!0;for(const l of A.hand.values()){const c=I.getJointPose(l,g),h=this._getHandJoint(Q,l);c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=c.radius),h.visible=c!==null}const n=Q.joints["index-finger-tip"],E=Q.joints["thumb-tip"],s=n.position.distanceTo(E.position),a=.02,r=.005;Q.inputState.pinching&&s>a+r?(Q.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!Q.inputState.pinching&&s<=a-r&&(Q.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(C=I.getPose(A.gripSpace,g),C!==null&&(o.matrix.fromArray(C.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,C.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(C.linearVelocity)):o.hasLinearVelocity=!1,C.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(C.angularVelocity)):o.hasAngularVelocity=!1));B!==null&&(i=I.getPose(A.targetRaySpace,g),i===null&&C!==null&&(i=C),i!==null&&(B.matrix.fromArray(i.transform.matrix),B.matrix.decompose(B.position,B.rotation,B.scale),B.matrixWorldNeedsUpdate=!0,i.linearVelocity?(B.hasLinearVelocity=!0,B.linearVelocity.copy(i.linearVelocity)):B.hasLinearVelocity=!1,i.angularVelocity?(B.hasAngularVelocity=!0,B.angularVelocity.copy(i.angularVelocity)):B.hasAngularVelocity=!1,this.dispatchEvent(xY)))}return B!==null&&(B.visible=i!==null),o!==null&&(o.visible=C!==null),Q!==null&&(Q.visible=t!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new MB;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}};const TY=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bY=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="160",qb={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Lb={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bU=0,RD=1,_U=2,Yb=3,Hb=0,Pd=1,vU=2,Ie=3,Qe=0,Oi=1,SC=2,xb=2,Ye=0,LB=1,FD=2,mD=3,KD=4,OU=5,dt=100,PU=101,ZU=102,JD=103,qD=104,WU=200,VU=201,zU=202,jU=203,Rr=204,Fr=205,XU=206,$U=207,AN=208,IN=209,gN=210,iN=211,CN=212,eN=213,tN=214,BN=0,oN=1,QN=2,DE=3,nN=4,EN=5,sN=6,aN=7,jE=0,rN=1,hN=2,He=0,cN=1,lN=2,DN=3,SN=4,dN=5,wN=6,LD="attached",pN="detached",ch=300,Pe=301,mt=302,SE=303,dE=304,vQ=306,Kt=1e3,pi=1001,UQ=1002,Fg=1003,wE=1004,Tb=1004,lQ=1005,bb=1005,ug=1006,lh=1007,_b=1007,ne=1008,vb=1008,xe=1009,uN=1010,yN=1011,Dh=1012,Zd=1013,me=1014,JC=1015,NQ=1016,Wd=1017,Vd=1018,ft=1020,fN=1021,ji=1023,GN=1024,MN=1025,Gt=1026,XB=1027,kN=1028,zd=1029,UN=1030,jd=1031,Xd=1033,ar=33776,rr=33777,hr=33778,cr=33779,YD=35840,HD=35841,xD=35842,TD=35843,$d=36196,bD=37492,_D=37496,vD=37808,OD=37809,PD=37810,ZD=37811,WD=37812,VD=37813,zD=37814,jD=37815,XD=37816,$D=37817,AS=37818,IS=37819,gS=37820,iS=37821,lr=36492,CS=36494,eS=36495,NN=36283,tS=36284,BS=36285,oS=36286,RN=2200,FN=2201,mN=2202,RQ=2300,$B=2301,Dr=2302,NB=2400,RB=2401,pE=2402,Sh=2500,Aw=2501,KN=0,Iw=1,mr=2,gw=3e3,Mt=3001,JN=3200,qN=3201,Ht=0,LN=1,QC="",Sg="srgb",ei="srgb-linear",dh="display-p3",XE="display-p3-linear",uE="linear",ag="srgb",yE="rec709",fE="p3",Ob=0,SB=7680,Pb=7681,Zb=7682,Wb=7683,Vb=34055,zb=34056,jb=5386,Xb=512,$b=513,A_=514,I_=515,g_=516,i_=517,C_=518,QS=519,YN=512,HN=513,xN=514,iw=515,TN=516,bN=517,_N=518,vN=519,GE=35044,ON=35048,e_=35040,t_=35045,B_=35049,o_=35041,Q_=35046,n_=35050,E_=35042,s_="100",nS="300 es",Kr=1035,qC=2e3,FQ=2001;class ze{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const i=this._listeners[A];if(i!==void 0){const C=i.indexOf(I);C!==-1&&i.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const i=g.slice(0);for(let C=0,t=i.length;C<t;C++)i[C].call(this,A);A.target=null}}}const ki=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $u=1234567;const YB=Math.PI/180,mQ=180/Math.PI;function sC(){const e=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(ki[e&255]+ki[e>>8&255]+ki[e>>16&255]+ki[e>>24&255]+"-"+ki[A&255]+ki[A>>8&255]+"-"+ki[A>>16&15|64]+ki[A>>24&255]+"-"+ki[I&63|128]+ki[I>>8&255]+"-"+ki[I>>16&255]+ki[I>>24&255]+ki[g&255]+ki[g>>8&255]+ki[g>>16&255]+ki[g>>24&255]).toLowerCase()}function Kg(e,A,I){return Math.max(A,Math.min(I,e))}function Cw(e,A){return(e%A+A)%A}function a_(e,A,I,g,i){return g+(e-A)*(i-g)/(I-A)}function r_(e,A,I){return e!==A?(I-e)/(A-e):0}function Yn(e,A,I){return(1-I)*e+I*A}function h_(e,A,I,g){return Yn(e,A,1-Math.exp(-I*g))}function c_(e,A=1){return A-Math.abs(Cw(e,A*2)-A)}function l_(e,A,I){return e<=A?0:e>=I?1:(e=(e-A)/(I-A),e*e*(3-2*e))}function D_(e,A,I){return e<=A?0:e>=I?1:(e=(e-A)/(I-A),e*e*e*(e*(e*6-15)+10))}function S_(e,A){return e+Math.floor(Math.random()*(A-e+1))}function d_(e,A){return e+Math.random()*(A-e)}function w_(e){return e*(.5-Math.random())}function p_(e){e!==void 0&&($u=e);let A=$u+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function u_(e){return e*YB}function y_(e){return e*mQ}function ES(e){return(e&e-1)===0&&e!==0}function f_(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Jr(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function G_(e,A,I,g,i){const C=Math.cos,t=Math.sin,B=C(I/2),o=t(I/2),Q=C((A+g)/2),n=t((A+g)/2),E=C((A-g)/2),s=t((A-g)/2),a=C((g-A)/2),r=t((g-A)/2);switch(i){case"XYX":e.set(B*n,o*E,o*s,B*Q);break;case"YZY":e.set(o*s,B*n,o*E,B*Q);break;case"ZXZ":e.set(o*E,o*s,B*n,B*Q);break;case"XZX":e.set(B*n,o*r,o*a,B*Q);break;case"YXY":e.set(o*a,B*n,o*r,B*Q);break;case"ZYZ":e.set(o*r,o*a,B*n,B*Q);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Xi(e,A){switch(A.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function yI(e,A){switch(A.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const ew={DEG2RAD:YB,RAD2DEG:mQ,generateUUID:sC,clamp:Kg,euclideanModulo:Cw,mapLinear:a_,inverseLerp:r_,lerp:Yn,damp:h_,pingpong:c_,smoothstep:l_,smootherstep:D_,randInt:S_,randFloat:d_,randFloatSpread:w_,seededRandom:p_,degToRad:u_,radToDeg:y_,isPowerOfTwo:ES,ceilPowerOfTwo:f_,floorPowerOfTwo:Jr,setQuaternionFromProperEuler:G_,normalize:yI,denormalize:Xi};class UA{constructor(A=0,I=0){UA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,i=A.elements;return this.x=i[0]*I+i[3]*g+i[6],this.y=i[1]*I+i[4]*g+i[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Kg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),i=Math.sin(I),C=this.x-A.x,t=this.y-A.y;return this.x=C*g-t*i+A.x,this.y=C*i+t*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wI{constructor(A,I,g,i,C,t,B,o,Q){wI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,i,C,t,B,o,Q)}set(A,I,g,i,C,t,B,o,Q){const n=this.elements;return n[0]=A,n[1]=i,n[2]=B,n[3]=I,n[4]=C,n[5]=o,n[6]=g,n[7]=t,n[8]=Q,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,i=I.elements,C=this.elements,t=g[0],B=g[3],o=g[6],Q=g[1],n=g[4],E=g[7],s=g[2],a=g[5],r=g[8],l=i[0],c=i[3],h=i[6],S=i[1],D=i[4],d=i[7],f=i[2],u=i[5],y=i[8];return C[0]=t*l+B*S+o*f,C[3]=t*c+B*D+o*u,C[6]=t*h+B*d+o*y,C[1]=Q*l+n*S+E*f,C[4]=Q*c+n*D+E*u,C[7]=Q*h+n*d+E*y,C[2]=s*l+a*S+r*f,C[5]=s*c+a*D+r*u,C[8]=s*h+a*d+r*y,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],i=A[2],C=A[3],t=A[4],B=A[5],o=A[6],Q=A[7],n=A[8];return I*t*n-I*B*Q-g*C*n+g*B*o+i*C*Q-i*t*o}invert(){const A=this.elements,I=A[0],g=A[1],i=A[2],C=A[3],t=A[4],B=A[5],o=A[6],Q=A[7],n=A[8],E=n*t-B*Q,s=B*o-n*C,a=Q*C-t*o,r=I*E+g*s+i*a;if(r===0)return this.set(0,0,0,0,0,0,0,0,0);const l=1/r;return A[0]=E*l,A[1]=(i*Q-n*g)*l,A[2]=(B*g-i*t)*l,A[3]=s*l,A[4]=(n*I-i*o)*l,A[5]=(i*C-B*I)*l,A[6]=a*l,A[7]=(g*o-Q*I)*l,A[8]=(t*I-g*C)*l,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,i,C,t,B){const o=Math.cos(C),Q=Math.sin(C);return this.set(g*o,g*Q,-g*(o*t+Q*B)+t+A,-i*Q,i*o,-i*(-Q*t+o*B)+B+I,0,0,1),this}scale(A,I){return this.premultiply(xc.makeScale(A,I)),this}rotate(A){return this.premultiply(xc.makeRotation(-A)),this}translate(A,I){return this.premultiply(xc.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let i=0;i<9;i++)if(I[i]!==g[i])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new wI;function PN(e){for(let A=e.length-1;A>=0;--A)if(e[A]>=65535)return!0;return!1}const M_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function nQ(e,A){return new M_[e](A)}function ME(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function ZN(){const e=ME("canvas");return e.style.display="block",e}const Ay={};function Hn(e){e in Ay||(Ay[e]=!0,console.warn(e))}const Iy=new wI().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gy=new wI().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[ei]:{transfer:uE,primaries:yE,toReference:e=>e,fromReference:e=>e},[Sg]:{transfer:ag,primaries:yE,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[XE]:{transfer:uE,primaries:fE,toReference:e=>e.applyMatrix3(gy),fromReference:e=>e.applyMatrix3(Iy)},[dh]:{transfer:ag,primaries:fE,toReference:e=>e.convertSRGBToLinear().applyMatrix3(gy),fromReference:e=>e.applyMatrix3(Iy).convertLinearToSRGB()}},k_=new Set([ei,XE]),jI={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!k_.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,A,I){if(this.enabled===!1||A===I||!A||!I)return e;const g=ea[A].toReference,i=ea[I].fromReference;return i(g(e))},fromWorkingColorSpace:function(e,A){return this.convert(e,this._workingColorSpace,A)},toWorkingColorSpace:function(e,A){return this.convert(e,A,this._workingColorSpace)},getPrimaries:function(e){return ea[e].primaries},getTransfer:function(e){return e===QC?uE:ea[e].transfer}};function DQ(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Tc(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let qo;class tw{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{qo===void 0&&(qo=ME("canvas")),qo.width=A.width,qo.height=A.height;const g=qo.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=qo}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=ME("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const i=g.getImageData(0,0,A.width,A.height),C=i.data;for(let t=0;t<C.length;t++)C[t]=DQ(C[t]/255)*255;return g.putImageData(i,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(DQ(I[g]/255)*255):I[g]=DQ(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let U_=0;class FB{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=sC(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},i=this.data;if(i!==null){let C;if(Array.isArray(i)){C=[];for(let t=0,B=i.length;t<B;t++)i[t].isDataTexture?C.push(bc(i[t].image)):C.push(bc(i[t]))}else C=bc(i);g.url=C}return I||(A.images[this.uuid]=g),g}}function bc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?tw.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N_=0;class Mg extends ze{constructor(A=Mg.DEFAULT_IMAGE,I=Mg.DEFAULT_MAPPING,g=pi,i=pi,C=ug,t=ne,B=ji,o=xe,Q=Mg.DEFAULT_ANISOTROPY,n=QC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=sC(),this.name="",this.source=new FB(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=i,this.magFilter=C,this.minFilter=t,this.anisotropy=Q,this.format=B,this.internalFormat=null,this.type=o,this.offset=new UA(0,0),this.repeat=new UA(1,1),this.center=new UA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof n=="string"?this.colorSpace=n:(Hn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=n===Mt?Sg:QC),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==ch)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Kt:A.x=A.x-Math.floor(A.x);break;case pi:A.x=A.x<0?0:1;break;case UQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Kt:A.y=A.y-Math.floor(A.y);break;case pi:A.y=A.y<0?0:1;break;case UQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Sg?Mt:gw}set encoding(A){Hn("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=A===Mt?Sg:QC}}Mg.DEFAULT_IMAGE=null;Mg.DEFAULT_MAPPING=ch;Mg.DEFAULT_ANISOTROPY=1;class OI{constructor(A=0,I=0,g=0,i=1){OI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=i}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,i){return this.x=A,this.y=I,this.z=g,this.w=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,i=this.z,C=this.w,t=A.elements;return this.x=t[0]*I+t[4]*g+t[8]*i+t[12]*C,this.y=t[1]*I+t[5]*g+t[9]*i+t[13]*C,this.z=t[2]*I+t[6]*g+t[10]*i+t[14]*C,this.w=t[3]*I+t[7]*g+t[11]*i+t[15]*C,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,i,C;const o=A.elements,Q=o[0],n=o[4],E=o[8],s=o[1],a=o[5],r=o[9],l=o[2],c=o[6],h=o[10];if(Math.abs(n-s)<.01&&Math.abs(E-l)<.01&&Math.abs(r-c)<.01){if(Math.abs(n+s)<.1&&Math.abs(E+l)<.1&&Math.abs(r+c)<.1&&Math.abs(Q+a+h-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const D=(Q+1)/2,d=(a+1)/2,f=(h+1)/2,u=(n+s)/4,y=(E+l)/4,M=(r+c)/4;return D>d&&D>f?D<.01?(g=0,i=.707106781,C=.707106781):(g=Math.sqrt(D),i=u/g,C=y/g):d>f?d<.01?(g=.707106781,i=0,C=.707106781):(i=Math.sqrt(d),g=u/i,C=M/i):f<.01?(g=.707106781,i=.707106781,C=0):(C=Math.sqrt(f),g=y/C,i=M/C),this.set(g,i,C,I),this}let S=Math.sqrt((c-r)*(c-r)+(E-l)*(E-l)+(s-n)*(s-n));return Math.abs(S)<.001&&(S=1),this.x=(c-r)/S,this.y=(E-l)/S,this.z=(s-n)/S,this.w=Math.acos((Q+a+h-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WN extends ze{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new OI(0,0,A,I),this.scissorTest=!1,this.viewport=new OI(0,0,A,I);const i={width:A,height:I,depth:1};g.encoding!==void 0&&(Hn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),g.colorSpace=g.encoding===Mt?Sg:QC),g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ug,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},g),this.texture=new Mg(i,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps,this.texture.internalFormat=g.internalFormat,this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new FB(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xC extends WN{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class wh extends Mg{constructor(A=null,I=1,g=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:i},this.magFilter=Fg,this.minFilter=Fg,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class R_ extends xC{constructor(A=1,I=1,g=1,i={}){super(A,I,i),this.isWebGLArrayRenderTarget=!0,this.depth=g,this.texture=new wh(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class Bw extends Mg{constructor(A=null,I=1,g=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:i},this.magFilter=Fg,this.minFilter=Fg,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class F_ extends xC{constructor(A=1,I=1,g=1,i={}){super(A,I,i),this.isWebGL3DRenderTarget=!0,this.depth=g,this.texture=new Bw(null,A,I,g),this.texture.isRenderTargetTexture=!0}}class m_ extends xC{constructor(A=1,I=1,g=1,i={}){super(A,I,i),this.isWebGLMultipleRenderTargets=!0;const C=this.texture;this.texture=[];for(let t=0;t<g;t++)this.texture[t]=C.clone(),this.texture[t].isRenderTargetTexture=!0}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let i=0,C=this.texture.length;i<C;i++)this.texture[i].image.width=A,this.texture[i].image.height=I,this.texture[i].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}copy(A){this.dispose(),this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.texture.length=0;for(let I=0,g=A.texture.length;I<g;I++)this.texture[I]=A.texture[I].clone(),this.texture[I].isRenderTargetTexture=!0;return this}}class Fi{constructor(A=0,I=0,g=0,i=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=i}static slerpFlat(A,I,g,i,C,t,B){let o=g[i+0],Q=g[i+1],n=g[i+2],E=g[i+3];const s=C[t+0],a=C[t+1],r=C[t+2],l=C[t+3];if(B===0){A[I+0]=o,A[I+1]=Q,A[I+2]=n,A[I+3]=E;return}if(B===1){A[I+0]=s,A[I+1]=a,A[I+2]=r,A[I+3]=l;return}if(E!==l||o!==s||Q!==a||n!==r){let c=1-B;const h=o*s+Q*a+n*r+E*l,S=h>=0?1:-1,D=1-h*h;if(D>Number.EPSILON){const f=Math.sqrt(D),u=Math.atan2(f,h*S);c=Math.sin(c*u)/f,B=Math.sin(B*u)/f}const d=B*S;if(o=o*c+s*d,Q=Q*c+a*d,n=n*c+r*d,E=E*c+l*d,c===1-B){const f=1/Math.sqrt(o*o+Q*Q+n*n+E*E);o*=f,Q*=f,n*=f,E*=f}}A[I]=o,A[I+1]=Q,A[I+2]=n,A[I+3]=E}static multiplyQuaternionsFlat(A,I,g,i,C,t){const B=g[i],o=g[i+1],Q=g[i+2],n=g[i+3],E=C[t],s=C[t+1],a=C[t+2],r=C[t+3];return A[I]=B*r+n*E+o*a-Q*s,A[I+1]=o*r+n*s+Q*E-B*a,A[I+2]=Q*r+n*a+B*s-o*E,A[I+3]=n*r-B*E-o*s-Q*a,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,i){return this._x=A,this._y=I,this._z=g,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,i=A._y,C=A._z,t=A._order,B=Math.cos,o=Math.sin,Q=B(g/2),n=B(i/2),E=B(C/2),s=o(g/2),a=o(i/2),r=o(C/2);switch(t){case"XYZ":this._x=s*n*E+Q*a*r,this._y=Q*a*E-s*n*r,this._z=Q*n*r+s*a*E,this._w=Q*n*E-s*a*r;break;case"YXZ":this._x=s*n*E+Q*a*r,this._y=Q*a*E-s*n*r,this._z=Q*n*r-s*a*E,this._w=Q*n*E+s*a*r;break;case"ZXY":this._x=s*n*E-Q*a*r,this._y=Q*a*E+s*n*r,this._z=Q*n*r+s*a*E,this._w=Q*n*E-s*a*r;break;case"ZYX":this._x=s*n*E-Q*a*r,this._y=Q*a*E+s*n*r,this._z=Q*n*r-s*a*E,this._w=Q*n*E+s*a*r;break;case"YZX":this._x=s*n*E+Q*a*r,this._y=Q*a*E+s*n*r,this._z=Q*n*r-s*a*E,this._w=Q*n*E-s*a*r;break;case"XZY":this._x=s*n*E-Q*a*r,this._y=Q*a*E-s*n*r,this._z=Q*n*r+s*a*E,this._w=Q*n*E+s*a*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+t)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,i=Math.sin(g);return this._x=A.x*i,this._y=A.y*i,this._z=A.z*i,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],i=I[4],C=I[8],t=I[1],B=I[5],o=I[9],Q=I[2],n=I[6],E=I[10],s=g+B+E;if(s>0){const a=.5/Math.sqrt(s+1);this._w=.25/a,this._x=(n-o)*a,this._y=(C-Q)*a,this._z=(t-i)*a}else if(g>B&&g>E){const a=2*Math.sqrt(1+g-B-E);this._w=(n-o)/a,this._x=.25*a,this._y=(i+t)/a,this._z=(C+Q)/a}else if(B>E){const a=2*Math.sqrt(1+B-g-E);this._w=(C-Q)/a,this._x=(i+t)/a,this._y=.25*a,this._z=(o+n)/a}else{const a=2*Math.sqrt(1+E-g-B);this._w=(t-i)/a,this._x=(C+Q)/a,this._y=(o+n)/a,this._z=.25*a}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(Kg(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const i=Math.min(1,I/g);return this.slerp(A,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,i=A._y,C=A._z,t=A._w,B=I._x,o=I._y,Q=I._z,n=I._w;return this._x=g*n+t*B+i*Q-C*o,this._y=i*n+t*o+C*B-g*Q,this._z=C*n+t*Q+g*o-i*B,this._w=t*n-g*B-i*o-C*Q,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,i=this._y,C=this._z,t=this._w;let B=t*A._w+g*A._x+i*A._y+C*A._z;if(B<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,B=-B):this.copy(A),B>=1)return this._w=t,this._x=g,this._y=i,this._z=C,this;const o=1-B*B;if(o<=Number.EPSILON){const a=1-I;return this._w=a*t+I*this._w,this._x=a*g+I*this._x,this._y=a*i+I*this._y,this._z=a*C+I*this._z,this.normalize(),this}const Q=Math.sqrt(o),n=Math.atan2(Q,B),E=Math.sin((1-I)*n)/Q,s=Math.sin(I*n)/Q;return this._w=t*E+this._w*s,this._x=g*E+this._x*s,this._y=i*E+this._y*s,this._z=C*E+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),i=2*Math.PI*Math.random(),C=2*Math.PI*Math.random();return this.set(I*Math.cos(i),g*Math.sin(C),g*Math.cos(C),I*Math.sin(i))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{constructor(A=0,I=0,g=0){x.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(iy.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(iy.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,i=this.z,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6]*i,this.y=C[1]*I+C[4]*g+C[7]*i,this.z=C[2]*I+C[5]*g+C[8]*i,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,i=this.z,C=A.elements,t=1/(C[3]*I+C[7]*g+C[11]*i+C[15]);return this.x=(C[0]*I+C[4]*g+C[8]*i+C[12])*t,this.y=(C[1]*I+C[5]*g+C[9]*i+C[13])*t,this.z=(C[2]*I+C[6]*g+C[10]*i+C[14])*t,this}applyQuaternion(A){const I=this.x,g=this.y,i=this.z,C=A.x,t=A.y,B=A.z,o=A.w,Q=2*(t*i-B*g),n=2*(B*I-C*i),E=2*(C*g-t*I);return this.x=I+o*Q+t*E-B*n,this.y=g+o*n+B*Q-C*E,this.z=i+o*E+C*n-t*Q,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,i=this.z,C=A.elements;return this.x=C[0]*I+C[4]*g+C[8]*i,this.y=C[1]*I+C[5]*g+C[9]*i,this.z=C[2]*I+C[6]*g+C[10]*i,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,i=A.y,C=A.z,t=I.x,B=I.y,o=I.z;return this.x=i*o-C*B,this.y=C*t-g*o,this.z=g*B-i*t,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return _c.copy(this).projectOnVector(A),this.sub(_c)}reflect(A){return this.sub(_c.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(Kg(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,i=this.z-A.z;return I*I+g*g+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const i=Math.sin(I)*A;return this.x=i*Math.sin(g),this.y=Math.cos(I)*A,this.z=i*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),i=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=i,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _c=new x,iy=new Fi;class Ai{constructor(A=new x(1/0,1/0,1/0),I=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(UC.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(UC.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=UC.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const C=g.getAttribute("position");if(I===!0&&C!==void 0&&A.isInstancedMesh!==!0)for(let t=0,B=C.count;t<B;t++)A.isMesh===!0?A.getVertexPosition(t,UC):UC.fromBufferAttribute(C,t),UC.applyMatrix4(A.matrixWorld),this.expandByPoint(UC);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),ta.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),ta.copy(g.boundingBox)),ta.applyMatrix4(A.matrixWorld),this.union(ta)}const i=A.children;for(let C=0,t=i.length;C<t;C++)this.expandByObject(i[C],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,UC),UC.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(nn),Ba.subVectors(this.max,nn),Lo.subVectors(A.a,nn),Yo.subVectors(A.b,nn),Ho.subVectors(A.c,nn),Bt.subVectors(Yo,Lo),ot.subVectors(Ho,Yo),tB.subVectors(Lo,Ho);let I=[0,-Bt.z,Bt.y,0,-ot.z,ot.y,0,-tB.z,tB.y,Bt.z,0,-Bt.x,ot.z,0,-ot.x,tB.z,0,-tB.x,-Bt.y,Bt.x,0,-ot.y,ot.x,0,-tB.y,tB.x,0];return!vc(I,Lo,Yo,Ho,Ba)||(I=[1,0,0,0,1,0,0,0,1],!vc(I,Lo,Yo,Ho,Ba))?!1:(oa.crossVectors(Bt,ot),I=[oa.x,oa.y,oa.z],vc(I,Lo,Yo,Ho,Ba))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,UC).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(UC).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(pe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),pe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),pe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),pe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),pe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),pe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),pe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),pe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(pe),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const pe=[new x,new x,new x,new x,new x,new x,new x,new x],UC=new x,ta=new Ai,Lo=new x,Yo=new x,Ho=new x,Bt=new x,ot=new x,tB=new x,nn=new x,Ba=new x,oa=new x,BB=new x;function vc(e,A,I,g,i){for(let C=0,t=e.length-3;C<=t;C+=3){BB.fromArray(e,C);const B=i.x*Math.abs(BB.x)+i.y*Math.abs(BB.y)+i.z*Math.abs(BB.z),o=A.dot(BB),Q=I.dot(BB),n=g.dot(BB);if(Math.max(-Math.max(o,Q,n),Math.min(o,Q,n))>B)return!1}return!0}const K_=new Ai,En=new x,Oc=new x;class Ii{constructor(A=new x,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):K_.setFromPoints(A).getCenter(g);let i=0;for(let C=0,t=A.length;C<t;C++)i=Math.max(i,g.distanceToSquared(A[C]));return this.radius=Math.sqrt(i),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;En.subVectors(A,this.center);const I=En.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),i=(g-this.radius)*.5;this.center.addScaledVector(En,i/g),this.radius+=i}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Oc.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(En.copy(A.center).add(Oc)),this.expandByPoint(En.copy(A.center).sub(Oc))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ue=new x,Pc=new x,Qa=new x,Qt=new x,Zc=new x,na=new x,Wc=new x;class OQ{constructor(A=new x,I=new x(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,ue)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=ue.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(ue.copy(this.origin).addScaledVector(this.direction,I),ue.distanceToSquared(A))}distanceSqToSegment(A,I,g,i){Pc.copy(A).add(I).multiplyScalar(.5),Qa.copy(I).sub(A).normalize(),Qt.copy(this.origin).sub(Pc);const C=A.distanceTo(I)*.5,t=-this.direction.dot(Qa),B=Qt.dot(this.direction),o=-Qt.dot(Qa),Q=Qt.lengthSq(),n=Math.abs(1-t*t);let E,s,a,r;if(n>0)if(E=t*o-B,s=t*B-o,r=C*n,E>=0)if(s>=-r)if(s<=r){const l=1/n;E*=l,s*=l,a=E*(E+t*s+2*B)+s*(t*E+s+2*o)+Q}else s=C,E=Math.max(0,-(t*s+B)),a=-E*E+s*(s+2*o)+Q;else s=-C,E=Math.max(0,-(t*s+B)),a=-E*E+s*(s+2*o)+Q;else s<=-r?(E=Math.max(0,-(-t*C+B)),s=E>0?-C:Math.min(Math.max(-C,-o),C),a=-E*E+s*(s+2*o)+Q):s<=r?(E=0,s=Math.min(Math.max(-C,-o),C),a=s*(s+2*o)+Q):(E=Math.max(0,-(t*C+B)),s=E>0?C:Math.min(Math.max(-C,-o),C),a=-E*E+s*(s+2*o)+Q);else s=t>0?-C:C,E=Math.max(0,-(t*s+B)),a=-E*E+s*(s+2*o)+Q;return g&&g.copy(this.origin).addScaledVector(this.direction,E),i&&i.copy(Pc).addScaledVector(Qa,s),a}intersectSphere(A,I){ue.subVectors(A.center,this.origin);const g=ue.dot(this.direction),i=ue.dot(ue)-g*g,C=A.radius*A.radius;if(i>C)return null;const t=Math.sqrt(C-i),B=g-t,o=g+t;return o<0?null:B<0?this.at(o,I):this.at(B,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,i,C,t,B,o;const Q=1/this.direction.x,n=1/this.direction.y,E=1/this.direction.z,s=this.origin;return Q>=0?(g=(A.min.x-s.x)*Q,i=(A.max.x-s.x)*Q):(g=(A.max.x-s.x)*Q,i=(A.min.x-s.x)*Q),n>=0?(C=(A.min.y-s.y)*n,t=(A.max.y-s.y)*n):(C=(A.max.y-s.y)*n,t=(A.min.y-s.y)*n),g>t||C>i||((C>g||isNaN(g))&&(g=C),(t<i||isNaN(i))&&(i=t),E>=0?(B=(A.min.z-s.z)*E,o=(A.max.z-s.z)*E):(B=(A.max.z-s.z)*E,o=(A.min.z-s.z)*E),g>o||B>i)||((B>g||g!==g)&&(g=B),(o<i||i!==i)&&(i=o),i<0)?null:this.at(g>=0?g:i,I)}intersectsBox(A){return this.intersectBox(A,ue)!==null}intersectTriangle(A,I,g,i,C){Zc.subVectors(I,A),na.subVectors(g,A),Wc.crossVectors(Zc,na);let t=this.direction.dot(Wc),B;if(t>0){if(i)return null;B=1}else if(t<0)B=-1,t=-t;else return null;Qt.subVectors(this.origin,A);const o=B*this.direction.dot(na.crossVectors(Qt,na));if(o<0)return null;const Q=B*this.direction.dot(Zc.cross(Qt));if(Q<0||o+Q>t)return null;const n=-B*Qt.dot(Wc);return n<0?null:this.at(n/t,C)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class EI{constructor(A,I,g,i,C,t,B,o,Q,n,E,s,a,r,l,c){EI.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,i,C,t,B,o,Q,n,E,s,a,r,l,c)}set(A,I,g,i,C,t,B,o,Q,n,E,s,a,r,l,c){const h=this.elements;return h[0]=A,h[4]=I,h[8]=g,h[12]=i,h[1]=C,h[5]=t,h[9]=B,h[13]=o,h[2]=Q,h[6]=n,h[10]=E,h[14]=s,h[3]=a,h[7]=r,h[11]=l,h[15]=c,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new EI().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,i=1/xo.setFromMatrixColumn(A,0).length(),C=1/xo.setFromMatrixColumn(A,1).length(),t=1/xo.setFromMatrixColumn(A,2).length();return I[0]=g[0]*i,I[1]=g[1]*i,I[2]=g[2]*i,I[3]=0,I[4]=g[4]*C,I[5]=g[5]*C,I[6]=g[6]*C,I[7]=0,I[8]=g[8]*t,I[9]=g[9]*t,I[10]=g[10]*t,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,i=A.y,C=A.z,t=Math.cos(g),B=Math.sin(g),o=Math.cos(i),Q=Math.sin(i),n=Math.cos(C),E=Math.sin(C);if(A.order==="XYZ"){const s=t*n,a=t*E,r=B*n,l=B*E;I[0]=o*n,I[4]=-o*E,I[8]=Q,I[1]=a+r*Q,I[5]=s-l*Q,I[9]=-B*o,I[2]=l-s*Q,I[6]=r+a*Q,I[10]=t*o}else if(A.order==="YXZ"){const s=o*n,a=o*E,r=Q*n,l=Q*E;I[0]=s+l*B,I[4]=r*B-a,I[8]=t*Q,I[1]=t*E,I[5]=t*n,I[9]=-B,I[2]=a*B-r,I[6]=l+s*B,I[10]=t*o}else if(A.order==="ZXY"){const s=o*n,a=o*E,r=Q*n,l=Q*E;I[0]=s-l*B,I[4]=-t*E,I[8]=r+a*B,I[1]=a+r*B,I[5]=t*n,I[9]=l-s*B,I[2]=-t*Q,I[6]=B,I[10]=t*o}else if(A.order==="ZYX"){const s=t*n,a=t*E,r=B*n,l=B*E;I[0]=o*n,I[4]=r*Q-a,I[8]=s*Q+l,I[1]=o*E,I[5]=l*Q+s,I[9]=a*Q-r,I[2]=-Q,I[6]=B*o,I[10]=t*o}else if(A.order==="YZX"){const s=t*o,a=t*Q,r=B*o,l=B*Q;I[0]=o*n,I[4]=l-s*E,I[8]=r*E+a,I[1]=E,I[5]=t*n,I[9]=-B*n,I[2]=-Q*n,I[6]=a*E+r,I[10]=s-l*E}else if(A.order==="XZY"){const s=t*o,a=t*Q,r=B*o,l=B*Q;I[0]=o*n,I[4]=-E,I[8]=Q*n,I[1]=s*E+l,I[5]=t*n,I[9]=a*E-r,I[2]=r*E-a,I[6]=B*n,I[10]=l*E+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(J_,A,q_)}lookAt(A,I,g){const i=this.elements;return eC.subVectors(A,I),eC.lengthSq()===0&&(eC.z=1),eC.normalize(),nt.crossVectors(g,eC),nt.lengthSq()===0&&(Math.abs(g.z)===1?eC.x+=1e-4:eC.z+=1e-4,eC.normalize(),nt.crossVectors(g,eC)),nt.normalize(),Ea.crossVectors(eC,nt),i[0]=nt.x,i[4]=Ea.x,i[8]=eC.x,i[1]=nt.y,i[5]=Ea.y,i[9]=eC.y,i[2]=nt.z,i[6]=Ea.z,i[10]=eC.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,i=I.elements,C=this.elements,t=g[0],B=g[4],o=g[8],Q=g[12],n=g[1],E=g[5],s=g[9],a=g[13],r=g[2],l=g[6],c=g[10],h=g[14],S=g[3],D=g[7],d=g[11],f=g[15],u=i[0],y=i[4],M=i[8],w=i[12],p=i[1],F=i[5],T=i[9],J=i[13],m=i[2],b=i[6],O=i[10],z=i[14],V=i[3],AA=i[7],oA=i[11],aA=i[15];return C[0]=t*u+B*p+o*m+Q*V,C[4]=t*y+B*F+o*b+Q*AA,C[8]=t*M+B*T+o*O+Q*oA,C[12]=t*w+B*J+o*z+Q*aA,C[1]=n*u+E*p+s*m+a*V,C[5]=n*y+E*F+s*b+a*AA,C[9]=n*M+E*T+s*O+a*oA,C[13]=n*w+E*J+s*z+a*aA,C[2]=r*u+l*p+c*m+h*V,C[6]=r*y+l*F+c*b+h*AA,C[10]=r*M+l*T+c*O+h*oA,C[14]=r*w+l*J+c*z+h*aA,C[3]=S*u+D*p+d*m+f*V,C[7]=S*y+D*F+d*b+f*AA,C[11]=S*M+D*T+d*O+f*oA,C[15]=S*w+D*J+d*z+f*aA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],i=A[8],C=A[12],t=A[1],B=A[5],o=A[9],Q=A[13],n=A[2],E=A[6],s=A[10],a=A[14],r=A[3],l=A[7],c=A[11],h=A[15];return r*(+C*o*E-i*Q*E-C*B*s+g*Q*s+i*B*a-g*o*a)+l*(+I*o*a-I*Q*s+C*t*s-i*t*a+i*Q*n-C*o*n)+c*(+I*Q*E-I*B*a-C*t*E+g*t*a+C*B*n-g*Q*n)+h*(-i*B*n-I*o*E+I*B*s+i*t*E-g*t*s+g*o*n)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const i=this.elements;return A.isVector3?(i[12]=A.x,i[13]=A.y,i[14]=A.z):(i[12]=A,i[13]=I,i[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],i=A[2],C=A[3],t=A[4],B=A[5],o=A[6],Q=A[7],n=A[8],E=A[9],s=A[10],a=A[11],r=A[12],l=A[13],c=A[14],h=A[15],S=E*c*Q-l*s*Q+l*o*a-B*c*a-E*o*h+B*s*h,D=r*s*Q-n*c*Q-r*o*a+t*c*a+n*o*h-t*s*h,d=n*l*Q-r*E*Q+r*B*a-t*l*a-n*B*h+t*E*h,f=r*E*o-n*l*o-r*B*s+t*l*s+n*B*c-t*E*c,u=I*S+g*D+i*d+C*f;if(u===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/u;return A[0]=S*y,A[1]=(l*s*C-E*c*C-l*i*a+g*c*a+E*i*h-g*s*h)*y,A[2]=(B*c*C-l*o*C+l*i*Q-g*c*Q-B*i*h+g*o*h)*y,A[3]=(E*o*C-B*s*C-E*i*Q+g*s*Q+B*i*a-g*o*a)*y,A[4]=D*y,A[5]=(n*c*C-r*s*C+r*i*a-I*c*a-n*i*h+I*s*h)*y,A[6]=(r*o*C-t*c*C-r*i*Q+I*c*Q+t*i*h-I*o*h)*y,A[7]=(t*s*C-n*o*C+n*i*Q-I*s*Q-t*i*a+I*o*a)*y,A[8]=d*y,A[9]=(r*E*C-n*l*C-r*g*a+I*l*a+n*g*h-I*E*h)*y,A[10]=(t*l*C-r*B*C+r*g*Q-I*l*Q-t*g*h+I*B*h)*y,A[11]=(n*B*C-t*E*C-n*g*Q+I*E*Q+t*g*a-I*B*a)*y,A[12]=f*y,A[13]=(n*l*i-r*E*i+r*g*s-I*l*s-n*g*c+I*E*c)*y,A[14]=(r*B*i-t*l*i-r*g*o+I*l*o+t*g*c-I*B*c)*y,A[15]=(t*E*i-n*B*i+n*g*o-I*E*o-t*g*s+I*B*s)*y,this}scale(A){const I=this.elements,g=A.x,i=A.y,C=A.z;return I[0]*=g,I[4]*=i,I[8]*=C,I[1]*=g,I[5]*=i,I[9]*=C,I[2]*=g,I[6]*=i,I[10]*=C,I[3]*=g,I[7]*=i,I[11]*=C,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],i=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,i))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),i=Math.sin(I),C=1-g,t=A.x,B=A.y,o=A.z,Q=C*t,n=C*B;return this.set(Q*t+g,Q*B-i*o,Q*o+i*B,0,Q*B+i*o,n*B+g,n*o-i*t,0,Q*o-i*B,n*o+i*t,C*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,i,C,t){return this.set(1,g,C,0,A,1,t,0,I,i,1,0,0,0,0,1),this}compose(A,I,g){const i=this.elements,C=I._x,t=I._y,B=I._z,o=I._w,Q=C+C,n=t+t,E=B+B,s=C*Q,a=C*n,r=C*E,l=t*n,c=t*E,h=B*E,S=o*Q,D=o*n,d=o*E,f=g.x,u=g.y,y=g.z;return i[0]=(1-(l+h))*f,i[1]=(a+d)*f,i[2]=(r-D)*f,i[3]=0,i[4]=(a-d)*u,i[5]=(1-(s+h))*u,i[6]=(c+S)*u,i[7]=0,i[8]=(r+D)*y,i[9]=(c-S)*y,i[10]=(1-(s+l))*y,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1,this}decompose(A,I,g){const i=this.elements;let C=xo.set(i[0],i[1],i[2]).length();const t=xo.set(i[4],i[5],i[6]).length(),B=xo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(C=-C),A.x=i[12],A.y=i[13],A.z=i[14],NC.copy(this);const Q=1/C,n=1/t,E=1/B;return NC.elements[0]*=Q,NC.elements[1]*=Q,NC.elements[2]*=Q,NC.elements[4]*=n,NC.elements[5]*=n,NC.elements[6]*=n,NC.elements[8]*=E,NC.elements[9]*=E,NC.elements[10]*=E,I.setFromRotationMatrix(NC),g.x=C,g.y=t,g.z=B,this}makePerspective(A,I,g,i,C,t,B=qC){const o=this.elements,Q=2*C/(I-A),n=2*C/(g-i),E=(I+A)/(I-A),s=(g+i)/(g-i);let a,r;if(B===qC)a=-(t+C)/(t-C),r=-2*t*C/(t-C);else if(B===FQ)a=-t/(t-C),r=-t*C/(t-C);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+B);return o[0]=Q,o[4]=0,o[8]=E,o[12]=0,o[1]=0,o[5]=n,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=a,o[14]=r,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,i,C,t,B=qC){const o=this.elements,Q=1/(I-A),n=1/(g-i),E=1/(t-C),s=(I+A)*Q,a=(g+i)*n;let r,l;if(B===qC)r=(t+C)*E,l=-2*E;else if(B===FQ)r=C*E,l=-1*E;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+B);return o[0]=2*Q,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*n,o[9]=0,o[13]=-a,o[2]=0,o[6]=0,o[10]=l,o[14]=-r,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let i=0;i<16;i++)if(I[i]!==g[i])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const xo=new x,NC=new EI,J_=new x(0,0,0),q_=new x(1,1,1),nt=new x,Ea=new x,eC=new x,Cy=new EI,ey=new Fi;class $E{constructor(A=0,I=0,g=0,i=$E.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=i}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,i=this._order){return this._x=A,this._y=I,this._z=g,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const i=A.elements,C=i[0],t=i[4],B=i[8],o=i[1],Q=i[5],n=i[9],E=i[2],s=i[6],a=i[10];switch(I){case"XYZ":this._y=Math.asin(Kg(B,-1,1)),Math.abs(B)<.9999999?(this._x=Math.atan2(-n,a),this._z=Math.atan2(-t,C)):(this._x=Math.atan2(s,Q),this._z=0);break;case"YXZ":this._x=Math.asin(-Kg(n,-1,1)),Math.abs(n)<.9999999?(this._y=Math.atan2(B,a),this._z=Math.atan2(o,Q)):(this._y=Math.atan2(-E,C),this._z=0);break;case"ZXY":this._x=Math.asin(Kg(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-E,a),this._z=Math.atan2(-t,Q)):(this._y=0,this._z=Math.atan2(o,C));break;case"ZYX":this._y=Math.asin(-Kg(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,a),this._z=Math.atan2(o,C)):(this._x=0,this._z=Math.atan2(-t,Q));break;case"YZX":this._z=Math.asin(Kg(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-n,Q),this._y=Math.atan2(-E,C)):(this._x=0,this._y=Math.atan2(B,a));break;case"XZY":this._z=Math.asin(-Kg(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(s,Q),this._y=Math.atan2(B,C)):(this._x=Math.atan2(-n,a),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return Cy.makeRotationFromQuaternion(A),this.setFromRotationMatrix(Cy,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return ey.setFromEuler(this),this.setFromQuaternion(ey,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$E.DEFAULT_ORDER="XYZ";class ph{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let L_=0;const ty=new x,To=new Fi,ye=new EI,sa=new x,sn=new x,Y_=new x,H_=new Fi,By=new x(1,0,0),oy=new x(0,1,0),Qy=new x(0,0,1),x_={type:"added"},T_={type:"removed"};class JI extends ze{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=sC(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=JI.DEFAULT_UP.clone();const A=new x,I=new $E,g=new Fi,i=new x(1,1,1);function C(){g.setFromEuler(I,!1)}function t(){I.setFromQuaternion(g,void 0,!1)}I._onChange(C),g._onChange(t),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new EI},normalMatrix:{value:new wI}}),this.matrix=new EI,this.matrixWorld=new EI,this.matrixAutoUpdate=JI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=JI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return To.setFromAxisAngle(A,I),this.quaternion.multiply(To),this}rotateOnWorldAxis(A,I){return To.setFromAxisAngle(A,I),this.quaternion.premultiply(To),this}rotateX(A){return this.rotateOnAxis(By,A)}rotateY(A){return this.rotateOnAxis(oy,A)}rotateZ(A){return this.rotateOnAxis(Qy,A)}translateOnAxis(A,I){return ty.copy(A).applyQuaternion(this.quaternion),this.position.add(ty.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(By,A)}translateY(A){return this.translateOnAxis(oy,A)}translateZ(A){return this.translateOnAxis(Qy,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(ye.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?sa.copy(A):sa.set(A,I,g);const i=this.parent;this.updateWorldMatrix(!0,!1),sn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ye.lookAt(sn,sa,this.up):ye.lookAt(sa,sn,this.up),this.quaternion.setFromRotationMatrix(ye),i&&(ye.extractRotation(i.matrixWorld),To.setFromRotationMatrix(ye),this.quaternion.premultiply(To.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(x_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(T_)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),ye.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),ye.multiply(A.parent.matrixWorld)),A.applyMatrix4(ye),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,i=this.children.length;g<i;g++){const t=this.children[g].getObjectByProperty(A,I);if(t!==void 0)return t}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const i=this.children;for(let C=0,t=i.length;C<t;C++)i[C].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sn,A,Y_),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sn,H_,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,i=I.length;g<i;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,i=I.length;g<i;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,i=I.length;g<i;g++){const C=I[g];(C.matrixWorldAutoUpdate===!0||A===!0)&&C.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const i=this.children;for(let C=0,t=i.length;C<t;C++){const B=i[C];B.matrixWorldAutoUpdate===!0&&B.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(B=>({boxInitialized:B.boxInitialized,boxMin:B.box.min.toArray(),boxMax:B.box.max.toArray(),sphereInitialized:B.sphereInitialized,sphereRadius:B.sphere.radius,sphereCenter:B.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(A),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function C(B,o){return B[o.uuid]===void 0&&(B[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=C(A.geometries,this.geometry);const B=this.geometry.parameters;if(B!==void 0&&B.shapes!==void 0){const o=B.shapes;if(Array.isArray(o))for(let Q=0,n=o.length;Q<n;Q++){const E=o[Q];C(A.shapes,E)}else C(A.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(C(A.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const B=[];for(let o=0,Q=this.material.length;o<Q;o++)B.push(C(A.materials,this.material[o]));i.material=B}else i.material=C(A.materials,this.material);if(this.children.length>0){i.children=[];for(let B=0;B<this.children.length;B++)i.children.push(this.children[B].toJSON(A).object)}if(this.animations.length>0){i.animations=[];for(let B=0;B<this.animations.length;B++){const o=this.animations[B];i.animations.push(C(A.animations,o))}}if(I){const B=t(A.geometries),o=t(A.materials),Q=t(A.textures),n=t(A.images),E=t(A.shapes),s=t(A.skeletons),a=t(A.animations),r=t(A.nodes);B.length>0&&(g.geometries=B),o.length>0&&(g.materials=o),Q.length>0&&(g.textures=Q),n.length>0&&(g.images=n),E.length>0&&(g.shapes=E),s.length>0&&(g.skeletons=s),a.length>0&&(g.animations=a),r.length>0&&(g.nodes=r)}return g.object=i,g;function t(B){const o=[];for(const Q in B){const n=B[Q];delete n.metadata,o.push(n)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const i=A.children[g];this.add(i.clone())}return this}}JI.DEFAULT_UP=new x(0,1,0);JI.DEFAULT_MATRIX_AUTO_UPDATE=!0;JI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const RC=new x,fe=new x,Vc=new x,Ge=new x,bo=new x,_o=new x,ny=new x,zc=new x,jc=new x,Xc=new x;let aa=!1;class zi{constructor(A=new x,I=new x,g=new x){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,i){i.subVectors(g,I),RC.subVectors(A,I),i.cross(RC);const C=i.lengthSq();return C>0?i.multiplyScalar(1/Math.sqrt(C)):i.set(0,0,0)}static getBarycoord(A,I,g,i,C){RC.subVectors(i,I),fe.subVectors(g,I),Vc.subVectors(A,I);const t=RC.dot(RC),B=RC.dot(fe),o=RC.dot(Vc),Q=fe.dot(fe),n=fe.dot(Vc),E=t*Q-B*B;if(E===0)return C.set(0,0,0),null;const s=1/E,a=(Q*o-B*n)*s,r=(t*n-B*o)*s;return C.set(1-a-r,r,a)}static containsPoint(A,I,g,i){return this.getBarycoord(A,I,g,i,Ge)===null?!1:Ge.x>=0&&Ge.y>=0&&Ge.x+Ge.y<=1}static getUV(A,I,g,i,C,t,B,o){return aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),aa=!0),this.getInterpolation(A,I,g,i,C,t,B,o)}static getInterpolation(A,I,g,i,C,t,B,o){return this.getBarycoord(A,I,g,i,Ge)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(C,Ge.x),o.addScaledVector(t,Ge.y),o.addScaledVector(B,Ge.z),o)}static isFrontFacing(A,I,g,i){return RC.subVectors(g,I),fe.subVectors(A,I),RC.cross(fe).dot(i)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,i){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[i]),this}setFromAttributeAndIndices(A,I,g,i){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,i),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return RC.subVectors(this.c,this.b),fe.subVectors(this.a,this.b),RC.cross(fe).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return zi.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return zi.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,i,C){return aa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),aa=!0),zi.getInterpolation(A,this.a,this.b,this.c,I,g,i,C)}getInterpolation(A,I,g,i,C){return zi.getInterpolation(A,this.a,this.b,this.c,I,g,i,C)}containsPoint(A){return zi.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return zi.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,i=this.b,C=this.c;let t,B;bo.subVectors(i,g),_o.subVectors(C,g),zc.subVectors(A,g);const o=bo.dot(zc),Q=_o.dot(zc);if(o<=0&&Q<=0)return I.copy(g);jc.subVectors(A,i);const n=bo.dot(jc),E=_o.dot(jc);if(n>=0&&E<=n)return I.copy(i);const s=o*E-n*Q;if(s<=0&&o>=0&&n<=0)return t=o/(o-n),I.copy(g).addScaledVector(bo,t);Xc.subVectors(A,C);const a=bo.dot(Xc),r=_o.dot(Xc);if(r>=0&&a<=r)return I.copy(C);const l=a*Q-o*r;if(l<=0&&Q>=0&&r<=0)return B=Q/(Q-r),I.copy(g).addScaledVector(_o,B);const c=n*r-a*E;if(c<=0&&E-n>=0&&a-r>=0)return ny.subVectors(C,i),B=(E-n)/(E-n+(a-r)),I.copy(i).addScaledVector(ny,B);const h=1/(c+l+s);return t=l*h,B=s*h,I.copy(g).addScaledVector(bo,t).addScaledVector(_o,B)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const VN={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Et={h:0,s:0,l:0},ra={h:0,s:0,l:0};function $c(e,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?e+(A-e)*6*I:I<1/2?A:I<2/3?e+(A-e)*6*(2/3-I):e}class $A{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const i=A;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=Sg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,jI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,i=jI.workingColorSpace){return this.r=A,this.g=I,this.b=g,jI.toWorkingColorSpace(this,i),this}setHSL(A,I,g,i=jI.workingColorSpace){if(A=Cw(A,1),I=Kg(I,0,1),g=Kg(g,0,1),I===0)this.r=this.g=this.b=g;else{const C=g<=.5?g*(1+I):g+I-g*I,t=2*g-C;this.r=$c(t,C,A+1/3),this.g=$c(t,C,A),this.b=$c(t,C,A-1/3)}return jI.toWorkingColorSpace(this,i),this}setStyle(A,I=Sg){function g(C){C!==void 0&&parseFloat(C)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(A)){let C;const t=i[1],B=i[2];switch(t){case"rgb":case"rgba":if(C=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(B))return g(C[4]),this.setRGB(Math.min(255,parseInt(C[1],10))/255,Math.min(255,parseInt(C[2],10))/255,Math.min(255,parseInt(C[3],10))/255,I);if(C=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(B))return g(C[4]),this.setRGB(Math.min(100,parseInt(C[1],10))/100,Math.min(100,parseInt(C[2],10))/100,Math.min(100,parseInt(C[3],10))/100,I);break;case"hsl":case"hsla":if(C=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(B))return g(C[4]),this.setHSL(parseFloat(C[1])/360,parseFloat(C[2])/100,parseFloat(C[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(A)){const C=i[1],t=C.length;if(t===3)return this.setRGB(parseInt(C.charAt(0),16)/15,parseInt(C.charAt(1),16)/15,parseInt(C.charAt(2),16)/15,I);if(t===6)return this.setHex(parseInt(C,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=Sg){const g=VN[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=DQ(A.r),this.g=DQ(A.g),this.b=DQ(A.b),this}copyLinearToSRGB(A){return this.r=Tc(A.r),this.g=Tc(A.g),this.b=Tc(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=Sg){return jI.fromWorkingColorSpace(Ui.copy(this),A),Math.round(Kg(Ui.r*255,0,255))*65536+Math.round(Kg(Ui.g*255,0,255))*256+Math.round(Kg(Ui.b*255,0,255))}getHexString(A=Sg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=jI.workingColorSpace){jI.fromWorkingColorSpace(Ui.copy(this),I);const g=Ui.r,i=Ui.g,C=Ui.b,t=Math.max(g,i,C),B=Math.min(g,i,C);let o,Q;const n=(B+t)/2;if(B===t)o=0,Q=0;else{const E=t-B;switch(Q=n<=.5?E/(t+B):E/(2-t-B),t){case g:o=(i-C)/E+(i<C?6:0);break;case i:o=(C-g)/E+2;break;case C:o=(g-i)/E+4;break}o/=6}return A.h=o,A.s=Q,A.l=n,A}getRGB(A,I=jI.workingColorSpace){return jI.fromWorkingColorSpace(Ui.copy(this),I),A.r=Ui.r,A.g=Ui.g,A.b=Ui.b,A}getStyle(A=Sg){jI.fromWorkingColorSpace(Ui.copy(this),A);const I=Ui.r,g=Ui.g,i=Ui.b;return A!==Sg?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(i*255)})`}offsetHSL(A,I,g){return this.getHSL(Et),this.setHSL(Et.h+A,Et.s+I,Et.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(Et),A.getHSL(ra);const g=Yn(Et.h,ra.h,I),i=Yn(Et.s,ra.s,I),C=Yn(Et.l,ra.l,I);return this.setHSL(g,i,C),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,i=this.b,C=A.elements;return this.r=C[0]*I+C[3]*g+C[6]*i,this.g=C[1]*I+C[4]*g+C[7]*i,this.b=C[2]*I+C[5]*g+C[8]*i,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ui=new $A;$A.NAMES=VN;let b_=0;class gi extends ze{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=sC(),this.name="",this.type="Material",this.blending=LB,this.side=Qe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rr,this.blendDst=Fr,this.blendEquation=dt,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $A(0,0,0),this.blendAlpha=0,this.depthFunc=DE,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=QS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=SB,this.stencilZFail=SB,this.stencilZPass=SB,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const i=this[I];if(i===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(g):i&&i.isVector3&&g&&g.isVector3?i.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==LB&&(g.blending=this.blending),this.side!==Qe&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==Rr&&(g.blendSrc=this.blendSrc),this.blendDst!==Fr&&(g.blendDst=this.blendDst),this.blendEquation!==dt&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==DE&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==QS&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==SB&&(g.stencilFail=this.stencilFail),this.stencilZFail!==SB&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==SB&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function i(C){const t=[];for(const B in C){const o=C[B];delete o.metadata,t.push(o)}return t}if(I){const C=i(A.textures),t=i(A.images);C.length>0&&(g.textures=C),t.length>0&&(g.images=t)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const i=I.length;g=new Array(i);for(let C=0;C!==i;++C)g[C]=I[C].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}class $i extends gi{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $A(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const Re=__();function __(){const e=new ArrayBuffer(4),A=new Float32Array(e),I=new Uint32Array(e),g=new Uint32Array(512),i=new Uint32Array(512);for(let o=0;o<256;++o){const Q=o-127;Q<-27?(g[o]=0,g[o|256]=32768,i[o]=24,i[o|256]=24):Q<-14?(g[o]=1024>>-Q-14,g[o|256]=1024>>-Q-14|32768,i[o]=-Q-1,i[o|256]=-Q-1):Q<=15?(g[o]=Q+15<<10,g[o|256]=Q+15<<10|32768,i[o]=13,i[o|256]=13):Q<128?(g[o]=31744,g[o|256]=64512,i[o]=24,i[o|256]=24):(g[o]=31744,g[o|256]=64512,i[o]=13,i[o|256]=13)}const C=new Uint32Array(2048),t=new Uint32Array(64),B=new Uint32Array(64);for(let o=1;o<1024;++o){let Q=o<<13,n=0;for(;!(Q&8388608);)Q<<=1,n-=8388608;Q&=-8388609,n+=947912704,C[o]=Q|n}for(let o=1024;o<2048;++o)C[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)t[o]=o<<23;t[31]=1199570944,t[32]=2147483648;for(let o=33;o<63;++o)t[o]=2147483648+(o-32<<23);t[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(B[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:i,mantissaTable:C,exponentTable:t,offsetTable:B}}function Vi(e){Math.abs(e)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),e=Kg(e,-65504,65504),Re.floatView[0]=e;const A=Re.uint32View[0],I=A>>23&511;return Re.baseTable[I]+((A&8388607)>>Re.shiftTable[I])}function Rn(e){const A=e>>10;return Re.uint32View[0]=Re.mantissaTable[Re.offsetTable[A]+(e&1023)]+Re.exponentTable[A],Re.floatView[0]}const v_={toHalfFloat:Vi,fromHalfFloat:Rn},Zg=new x,ha=new UA;class VI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=GE,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=JC,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let i=0,C=this.itemSize;i<C;i++)this.array[A+i]=I.array[g+i];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)ha.fromBufferAttribute(this,I),ha.applyMatrix3(A),this.setXY(I,ha.x,ha.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)Zg.fromBufferAttribute(this,I),Zg.applyMatrix3(A),this.setXYZ(I,Zg.x,Zg.y,Zg.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)Zg.fromBufferAttribute(this,I),Zg.applyMatrix4(A),this.setXYZ(I,Zg.x,Zg.y,Zg.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)Zg.fromBufferAttribute(this,I),Zg.applyNormalMatrix(A),this.setXYZ(I,Zg.x,Zg.y,Zg.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)Zg.fromBufferAttribute(this,I),Zg.transformDirection(A),this.setXYZ(I,Zg.x,Zg.y,Zg.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=Xi(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=yI(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=Xi(I,this.array)),I}setX(A,I){return this.normalized&&(I=yI(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=Xi(I,this.array)),I}setY(A,I){return this.normalized&&(I=yI(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=Xi(I,this.array)),I}setZ(A,I){return this.normalized&&(I=yI(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=Xi(I,this.array)),I}setW(A,I){return this.normalized&&(I=yI(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=yI(I,this.array),g=yI(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,i){return A*=this.itemSize,this.normalized&&(I=yI(I,this.array),g=yI(g,this.array),i=yI(i,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=i,this}setXYZW(A,I,g,i,C){return A*=this.itemSize,this.normalized&&(I=yI(I,this.array),g=yI(g,this.array),i=yI(i,this.array),C=yI(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=i,this.array[A+3]=C,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==GE&&(A.usage=this.usage),A}}class O_ extends VI{constructor(A,I,g){super(new Int8Array(A),I,g)}}class P_ extends VI{constructor(A,I,g){super(new Uint8Array(A),I,g)}}class Z_ extends VI{constructor(A,I,g){super(new Uint8ClampedArray(A),I,g)}}class W_ extends VI{constructor(A,I,g){super(new Int16Array(A),I,g)}}class ow extends VI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class V_ extends VI{constructor(A,I,g){super(new Int32Array(A),I,g)}}class Qw extends VI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class z_ extends VI{constructor(A,I,g){super(new Uint16Array(A),I,g),this.isFloat16BufferAttribute=!0}getX(A){let I=Rn(this.array[A*this.itemSize]);return this.normalized&&(I=Xi(I,this.array)),I}setX(A,I){return this.normalized&&(I=yI(I,this.array)),this.array[A*this.itemSize]=Vi(I),this}getY(A){let I=Rn(this.array[A*this.itemSize+1]);return this.normalized&&(I=Xi(I,this.array)),I}setY(A,I){return this.normalized&&(I=yI(I,this.array)),this.array[A*this.itemSize+1]=Vi(I),this}getZ(A){let I=Rn(this.array[A*this.itemSize+2]);return this.normalized&&(I=Xi(I,this.array)),I}setZ(A,I){return this.normalized&&(I=yI(I,this.array)),this.array[A*this.itemSize+2]=Vi(I),this}getW(A){let I=Rn(this.array[A*this.itemSize+3]);return this.normalized&&(I=Xi(I,this.array)),I}setW(A,I){return this.normalized&&(I=yI(I,this.array)),this.array[A*this.itemSize+3]=Vi(I),this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=yI(I,this.array),g=yI(g,this.array)),this.array[A+0]=Vi(I),this.array[A+1]=Vi(g),this}setXYZ(A,I,g,i){return A*=this.itemSize,this.normalized&&(I=yI(I,this.array),g=yI(g,this.array),i=yI(i,this.array)),this.array[A+0]=Vi(I),this.array[A+1]=Vi(g),this.array[A+2]=Vi(i),this}setXYZW(A,I,g,i,C){return A*=this.itemSize,this.normalized&&(I=yI(I,this.array),g=yI(g,this.array),i=yI(i,this.array),C=yI(C,this.array)),this.array[A+0]=Vi(I),this.array[A+1]=Vi(g),this.array[A+2]=Vi(i),this.array[A+3]=Vi(C),this}}class oI extends VI{constructor(A,I,g){super(new Float32Array(A),I,g)}}class j_ extends VI{constructor(A,I,g){super(new Float64Array(A),I,g)}}let X_=0;const hC=new EI,Al=new JI,vo=new x,tC=new Ai,an=new Ai,si=new x;class fI extends ze{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=sC(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(PN(A)?Qw:ow)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const C=new wI().getNormalMatrix(A);g.applyNormalMatrix(C),g.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(A),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return hC.makeRotationFromQuaternion(A),this.applyMatrix4(hC),this}rotateX(A){return hC.makeRotationX(A),this.applyMatrix4(hC),this}rotateY(A){return hC.makeRotationY(A),this.applyMatrix4(hC),this}rotateZ(A){return hC.makeRotationZ(A),this.applyMatrix4(hC),this}translate(A,I,g){return hC.makeTranslation(A,I,g),this.applyMatrix4(hC),this}scale(A,I,g){return hC.makeScale(A,I,g),this.applyMatrix4(hC),this}lookAt(A){return Al.lookAt(A),Al.updateMatrix(),this.applyMatrix4(Al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(A){const I=[];for(let g=0,i=A.length;g<i;g++){const C=A[g];I.push(C.x,C.y,C.z||0)}return this.setAttribute("position",new oI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,i=I.length;g<i;g++){const C=I[g];tC.setFromBufferAttribute(C),this.morphTargetsRelative?(si.addVectors(this.boundingBox.min,tC.min),this.boundingBox.expandByPoint(si),si.addVectors(this.boundingBox.max,tC.max),this.boundingBox.expandByPoint(si)):(this.boundingBox.expandByPoint(tC.min),this.boundingBox.expandByPoint(tC.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new x,1/0);return}if(A){const g=this.boundingSphere.center;if(tC.setFromBufferAttribute(A),I)for(let C=0,t=I.length;C<t;C++){const B=I[C];an.setFromBufferAttribute(B),this.morphTargetsRelative?(si.addVectors(tC.min,an.min),tC.expandByPoint(si),si.addVectors(tC.max,an.max),tC.expandByPoint(si)):(tC.expandByPoint(an.min),tC.expandByPoint(an.max))}tC.getCenter(g);let i=0;for(let C=0,t=A.count;C<t;C++)si.fromBufferAttribute(A,C),i=Math.max(i,g.distanceToSquared(si));if(I)for(let C=0,t=I.length;C<t;C++){const B=I[C],o=this.morphTargetsRelative;for(let Q=0,n=B.count;Q<n;Q++)si.fromBufferAttribute(B,Q),o&&(vo.fromBufferAttribute(A,Q),si.add(vo)),i=Math.max(i,g.distanceToSquared(si))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,i=I.position.array,C=I.normal.array,t=I.uv.array,B=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new VI(new Float32Array(4*B),4));const o=this.getAttribute("tangent").array,Q=[],n=[];for(let p=0;p<B;p++)Q[p]=new x,n[p]=new x;const E=new x,s=new x,a=new x,r=new UA,l=new UA,c=new UA,h=new x,S=new x;function D(p,F,T){E.fromArray(i,p*3),s.fromArray(i,F*3),a.fromArray(i,T*3),r.fromArray(t,p*2),l.fromArray(t,F*2),c.fromArray(t,T*2),s.sub(E),a.sub(E),l.sub(r),c.sub(r);const J=1/(l.x*c.y-c.x*l.y);isFinite(J)&&(h.copy(s).multiplyScalar(c.y).addScaledVector(a,-l.y).multiplyScalar(J),S.copy(a).multiplyScalar(l.x).addScaledVector(s,-c.x).multiplyScalar(J),Q[p].add(h),Q[F].add(h),Q[T].add(h),n[p].add(S),n[F].add(S),n[T].add(S))}let d=this.groups;d.length===0&&(d=[{start:0,count:g.length}]);for(let p=0,F=d.length;p<F;++p){const T=d[p],J=T.start,m=T.count;for(let b=J,O=J+m;b<O;b+=3)D(g[b+0],g[b+1],g[b+2])}const f=new x,u=new x,y=new x,M=new x;function w(p){y.fromArray(C,p*3),M.copy(y);const F=Q[p];f.copy(F),f.sub(y.multiplyScalar(y.dot(F))).normalize(),u.crossVectors(M,F);const J=u.dot(n[p])<0?-1:1;o[p*4]=f.x,o[p*4+1]=f.y,o[p*4+2]=f.z,o[p*4+3]=J}for(let p=0,F=d.length;p<F;++p){const T=d[p],J=T.start,m=T.count;for(let b=J,O=J+m;b<O;b+=3)w(g[b+0]),w(g[b+1]),w(g[b+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new VI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,a=g.count;s<a;s++)g.setXYZ(s,0,0,0);const i=new x,C=new x,t=new x,B=new x,o=new x,Q=new x,n=new x,E=new x;if(A)for(let s=0,a=A.count;s<a;s+=3){const r=A.getX(s+0),l=A.getX(s+1),c=A.getX(s+2);i.fromBufferAttribute(I,r),C.fromBufferAttribute(I,l),t.fromBufferAttribute(I,c),n.subVectors(t,C),E.subVectors(i,C),n.cross(E),B.fromBufferAttribute(g,r),o.fromBufferAttribute(g,l),Q.fromBufferAttribute(g,c),B.add(n),o.add(n),Q.add(n),g.setXYZ(r,B.x,B.y,B.z),g.setXYZ(l,o.x,o.y,o.z),g.setXYZ(c,Q.x,Q.y,Q.z)}else for(let s=0,a=I.count;s<a;s+=3)i.fromBufferAttribute(I,s+0),C.fromBufferAttribute(I,s+1),t.fromBufferAttribute(I,s+2),n.subVectors(t,C),E.subVectors(i,C),n.cross(E),g.setXYZ(s+0,n.x,n.y,n.z),g.setXYZ(s+1,n.x,n.y,n.z),g.setXYZ(s+2,n.x,n.y,n.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)si.fromBufferAttribute(A,I),si.normalize(),A.setXYZ(I,si.x,si.y,si.z)}toNonIndexed(){function A(B,o){const Q=B.array,n=B.itemSize,E=B.normalized,s=new Q.constructor(o.length*n);let a=0,r=0;for(let l=0,c=o.length;l<c;l++){B.isInterleavedBufferAttribute?a=o[l]*B.data.stride+B.offset:a=o[l]*n;for(let h=0;h<n;h++)s[r++]=Q[a++]}return new VI(s,n,E)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new fI,g=this.index.array,i=this.attributes;for(const B in i){const o=i[B],Q=A(o,g);I.setAttribute(B,Q)}const C=this.morphAttributes;for(const B in C){const o=[],Q=C[B];for(let n=0,E=Q.length;n<E;n++){const s=Q[n],a=A(s,g);o.push(a)}I.morphAttributes[B]=o}I.morphTargetsRelative=this.morphTargetsRelative;const t=this.groups;for(let B=0,o=t.length;B<o;B++){const Q=t[B];I.addGroup(Q.start,Q.count,Q.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const Q in o)o[Q]!==void 0&&(A[Q]=o[Q]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const Q=g[o];A.data.attributes[o]=Q.toJSON(A.data)}const i={};let C=!1;for(const o in this.morphAttributes){const Q=this.morphAttributes[o],n=[];for(let E=0,s=Q.length;E<s;E++){const a=Q[E];n.push(a.toJSON(A.data))}n.length>0&&(i[o]=n,C=!0)}C&&(A.data.morphAttributes=i,A.data.morphTargetsRelative=this.morphTargetsRelative);const t=this.groups;t.length>0&&(A.data.groups=JSON.parse(JSON.stringify(t)));const B=this.boundingSphere;return B!==null&&(A.data.boundingSphere={center:B.center.toArray(),radius:B.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const i=A.attributes;for(const Q in i){const n=i[Q];this.setAttribute(Q,n.clone(I))}const C=A.morphAttributes;for(const Q in C){const n=[],E=C[Q];for(let s=0,a=E.length;s<a;s++)n.push(E[s].clone(I));this.morphAttributes[Q]=n}this.morphTargetsRelative=A.morphTargetsRelative;const t=A.groups;for(let Q=0,n=t.length;Q<n;Q++){const E=t[Q];this.addGroup(E.start,E.count,E.materialIndex)}const B=A.boundingBox;B!==null&&(this.boundingBox=B.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ey=new EI,oB=new OQ,ca=new Ii,sy=new x,Oo=new x,Po=new x,Zo=new x,Il=new x,la=new x,Da=new UA,Sa=new UA,da=new UA,ay=new x,ry=new x,hy=new x,wa=new x,pa=new x;class Jg extends JI{constructor(A=new fI,I=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const i=I[g[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,t=i.length;C<t;C++){const B=i[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[B]=C}}}}getVertexPosition(A,I){const g=this.geometry,i=g.attributes.position,C=g.morphAttributes.position,t=g.morphTargetsRelative;I.fromBufferAttribute(i,A);const B=this.morphTargetInfluences;if(C&&B){la.set(0,0,0);for(let o=0,Q=C.length;o<Q;o++){const n=B[o],E=C[o];n!==0&&(Il.fromBufferAttribute(E,A),t?la.addScaledVector(Il,n):la.addScaledVector(Il.sub(I),n))}I.add(la)}return I}raycast(A,I){const g=this.geometry,i=this.material,C=this.matrixWorld;i!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),ca.copy(g.boundingSphere),ca.applyMatrix4(C),oB.copy(A.ray).recast(A.near),!(ca.containsPoint(oB.origin)===!1&&(oB.intersectSphere(ca,sy)===null||oB.origin.distanceToSquared(sy)>(A.far-A.near)**2))&&(Ey.copy(C).invert(),oB.copy(A.ray).applyMatrix4(Ey),!(g.boundingBox!==null&&oB.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,oB)))}_computeIntersections(A,I,g){let i;const C=this.geometry,t=this.material,B=C.index,o=C.attributes.position,Q=C.attributes.uv,n=C.attributes.uv1,E=C.attributes.normal,s=C.groups,a=C.drawRange;if(B!==null)if(Array.isArray(t))for(let r=0,l=s.length;r<l;r++){const c=s[r],h=t[c.materialIndex],S=Math.max(c.start,a.start),D=Math.min(B.count,Math.min(c.start+c.count,a.start+a.count));for(let d=S,f=D;d<f;d+=3){const u=B.getX(d),y=B.getX(d+1),M=B.getX(d+2);i=ua(this,h,A,g,Q,n,E,u,y,M),i&&(i.faceIndex=Math.floor(d/3),i.face.materialIndex=c.materialIndex,I.push(i))}}else{const r=Math.max(0,a.start),l=Math.min(B.count,a.start+a.count);for(let c=r,h=l;c<h;c+=3){const S=B.getX(c),D=B.getX(c+1),d=B.getX(c+2);i=ua(this,t,A,g,Q,n,E,S,D,d),i&&(i.faceIndex=Math.floor(c/3),I.push(i))}}else if(o!==void 0)if(Array.isArray(t))for(let r=0,l=s.length;r<l;r++){const c=s[r],h=t[c.materialIndex],S=Math.max(c.start,a.start),D=Math.min(o.count,Math.min(c.start+c.count,a.start+a.count));for(let d=S,f=D;d<f;d+=3){const u=d,y=d+1,M=d+2;i=ua(this,h,A,g,Q,n,E,u,y,M),i&&(i.faceIndex=Math.floor(d/3),i.face.materialIndex=c.materialIndex,I.push(i))}}else{const r=Math.max(0,a.start),l=Math.min(o.count,a.start+a.count);for(let c=r,h=l;c<h;c+=3){const S=c,D=c+1,d=c+2;i=ua(this,t,A,g,Q,n,E,S,D,d),i&&(i.faceIndex=Math.floor(c/3),I.push(i))}}}}function $_(e,A,I,g,i,C,t,B){let o;if(A.side===Oi?o=g.intersectTriangle(t,C,i,!0,B):o=g.intersectTriangle(i,C,t,A.side===Qe,B),o===null)return null;pa.copy(B),pa.applyMatrix4(e.matrixWorld);const Q=I.ray.origin.distanceTo(pa);return Q<I.near||Q>I.far?null:{distance:Q,point:pa.clone(),object:e}}function ua(e,A,I,g,i,C,t,B,o,Q){e.getVertexPosition(B,Oo),e.getVertexPosition(o,Po),e.getVertexPosition(Q,Zo);const n=$_(e,A,I,g,Oo,Po,Zo,wa);if(n){i&&(Da.fromBufferAttribute(i,B),Sa.fromBufferAttribute(i,o),da.fromBufferAttribute(i,Q),n.uv=zi.getInterpolation(wa,Oo,Po,Zo,Da,Sa,da,new UA)),C&&(Da.fromBufferAttribute(C,B),Sa.fromBufferAttribute(C,o),da.fromBufferAttribute(C,Q),n.uv1=zi.getInterpolation(wa,Oo,Po,Zo,Da,Sa,da,new UA),n.uv2=n.uv1),t&&(ay.fromBufferAttribute(t,B),ry.fromBufferAttribute(t,o),hy.fromBufferAttribute(t,Q),n.normal=zi.getInterpolation(wa,Oo,Po,Zo,ay,ry,hy,new x),n.normal.dot(g.direction)>0&&n.normal.multiplyScalar(-1));const E={a:B,b:o,c:Q,normal:new x,materialIndex:0};zi.getNormal(Oo,Po,Zo,E.normal),n.face=E}return n}class xt extends fI{constructor(A=1,I=1,g=1,i=1,C=1,t=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:i,heightSegments:C,depthSegments:t};const B=this;i=Math.floor(i),C=Math.floor(C),t=Math.floor(t);const o=[],Q=[],n=[],E=[];let s=0,a=0;r("z","y","x",-1,-1,g,I,A,t,C,0),r("z","y","x",1,-1,g,I,-A,t,C,1),r("x","z","y",1,1,A,g,I,i,t,2),r("x","z","y",1,-1,A,g,-I,i,t,3),r("x","y","z",1,-1,A,I,g,i,C,4),r("x","y","z",-1,-1,A,I,-g,i,C,5),this.setIndex(o),this.setAttribute("position",new oI(Q,3)),this.setAttribute("normal",new oI(n,3)),this.setAttribute("uv",new oI(E,2));function r(l,c,h,S,D,d,f,u,y,M,w){const p=d/y,F=f/M,T=d/2,J=f/2,m=u/2,b=y+1,O=M+1;let z=0,V=0;const AA=new x;for(let oA=0;oA<O;oA++){const aA=oA*F-J;for(let GA=0;GA<b;GA++){const rA=GA*p-T;AA[l]=rA*S,AA[c]=aA*D,AA[h]=m,Q.push(AA.x,AA.y,AA.z),AA[l]=0,AA[c]=0,AA[h]=u>0?1:-1,n.push(AA.x,AA.y,AA.z),E.push(GA/y),E.push(1-oA/M),z+=1}}for(let oA=0;oA<M;oA++)for(let aA=0;aA<y;aA++){const GA=s+aA+b*oA,rA=s+aA+b*(oA+1),X=s+(aA+1)+b*(oA+1),lA=s+(aA+1)+b*oA;o.push(GA,rA,lA),o.push(rA,X,lA),V+=6}B.addGroup(a,V,w),a+=V,s+=z}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new xt(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function KQ(e){const A={};for(const I in e){A[I]={};for(const g in e[I]){const i=e[I][g];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=i.clone():Array.isArray(i)?A[I][g]=i.slice():A[I][g]=i}}return A}function Hi(e){const A={};for(let I=0;I<e.length;I++){const g=KQ(e[I]);for(const i in g)A[i]=g[i]}return A}function A2(e){const A=[];for(let I=0;I<e.length;I++)A.push(e[I].clone());return A}function zN(e){return e.getRenderTarget()===null?e.outputColorSpace:jI.workingColorSpace}const uh={clone:KQ,merge:Hi};var I2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,g2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class TC extends gi{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I2,this.fragmentShader=g2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=KQ(A.uniforms),this.uniformsGroups=A2(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const i in this.uniforms){const t=this.uniforms[i].value;t&&t.isTexture?I.uniforms[i]={type:"t",value:t.toJSON(A).uuid}:t&&t.isColor?I.uniforms[i]={type:"c",value:t.getHex()}:t&&t.isVector2?I.uniforms[i]={type:"v2",value:t.toArray()}:t&&t.isVector3?I.uniforms[i]={type:"v3",value:t.toArray()}:t&&t.isVector4?I.uniforms[i]={type:"v4",value:t.toArray()}:t&&t.isMatrix3?I.uniforms[i]={type:"m3",value:t.toArray()}:t&&t.isMatrix4?I.uniforms[i]={type:"m4",value:t.toArray()}:I.uniforms[i]={value:t}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const i in this.extensions)this.extensions[i]===!0&&(g[i]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class yh extends JI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new EI,this.projectionMatrix=new EI,this.projectionMatrixInverse=new EI,this.coordinateSystem=qC}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Xg extends yh{constructor(A=50,I=1,g=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=i,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=mQ*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(YB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return mQ*2*Math.atan(Math.tan(YB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,i,C,t){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=i,this.view.width=C,this.view.height=t,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(YB*.5*this.fov)/this.zoom,g=2*I,i=this.aspect*g,C=-.5*i;const t=this.view;if(this.view!==null&&this.view.enabled){const o=t.fullWidth,Q=t.fullHeight;C+=t.offsetX*i/o,I-=t.offsetY*g/Q,i*=t.width/o,g*=t.height/Q}const B=this.filmOffset;B!==0&&(C+=A*B/this.getFilmWidth()),this.projectionMatrix.makePerspective(C,C+i,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const Wo=-90,Vo=1;class jN extends JI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xg(Wo,Vo,A,I);i.layers=this.layers,this.add(i);const C=new Xg(Wo,Vo,A,I);C.layers=this.layers,this.add(C);const t=new Xg(Wo,Vo,A,I);t.layers=this.layers,this.add(t);const B=new Xg(Wo,Vo,A,I);B.layers=this.layers,this.add(B);const o=new Xg(Wo,Vo,A,I);o.layers=this.layers,this.add(o);const Q=new Xg(Wo,Vo,A,I);Q.layers=this.layers,this.add(Q)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,i,C,t,B,o]=I;for(const Q of I)this.remove(Q);if(A===qC)g.up.set(0,1,0),g.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),C.up.set(0,0,-1),C.lookAt(0,1,0),t.up.set(0,0,1),t.lookAt(0,-1,0),B.up.set(0,1,0),B.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===FQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),C.up.set(0,0,1),C.lookAt(0,1,0),t.up.set(0,0,-1),t.lookAt(0,-1,0),B.up.set(0,-1,0),B.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const Q of I)this.add(Q),Q.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:i}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[C,t,B,o,Q,n]=this.children,E=A.getRenderTarget(),s=A.getActiveCubeFace(),a=A.getActiveMipmapLevel(),r=A.xr.enabled;A.xr.enabled=!1;const l=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,i),A.render(I,C),A.setRenderTarget(g,1,i),A.render(I,t),A.setRenderTarget(g,2,i),A.render(I,B),A.setRenderTarget(g,3,i),A.render(I,o),A.setRenderTarget(g,4,i),A.render(I,Q),g.texture.generateMipmaps=l,A.setRenderTarget(g,5,i),A.render(I,n),A.setRenderTarget(E,s,a),A.xr.enabled=r,g.texture.needsPMREMUpdate=!0}}class As extends Mg{constructor(A,I,g,i,C,t,B,o,Q,n){A=A!==void 0?A:[],I=I!==void 0?I:Pe,super(A,I,g,i,C,t,B,o,Q,n),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class XN extends xC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},i=[g,g,g,g,g,g];I.encoding!==void 0&&(Hn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),I.colorSpace=I.encoding===Mt?Sg:QC),this.texture=new As(i,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:ug}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new xt(5,5,5),C=new TC({name:"CubemapFromEquirect",uniforms:KQ(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:Oi,blending:Ye});C.uniforms.tEquirect.value=I;const t=new Jg(i,C),B=I.minFilter;return I.minFilter===ne&&(I.minFilter=ug),new jN(1,10,this).update(A,t),I.minFilter=B,t.geometry.dispose(),t.material.dispose(),this}clear(A,I,g,i){const C=A.getRenderTarget();for(let t=0;t<6;t++)A.setRenderTarget(this,t),A.clear(I,g,i);A.setRenderTarget(C)}}const gl=new x,i2=new x,C2=new wI;class lt{constructor(A=new x(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,i){return this.normal.set(A,I,g),this.constant=i,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const i=gl.subVectors(g,I).cross(i2.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(i,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(gl),i=this.normal.dot(g);if(i===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const C=-(A.start.dot(this.normal)+this.constant)/i;return C<0||C>1?null:I.copy(A.start).addScaledVector(g,C)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||C2.getNormalMatrix(A),i=this.coplanarPoint(gl).applyMatrix4(A),C=this.normal.applyMatrix3(g).normalize();return this.constant=-i.dot(C),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const QB=new Ii,ya=new x;class Is{constructor(A=new lt,I=new lt,g=new lt,i=new lt,C=new lt,t=new lt){this.planes=[A,I,g,i,C,t]}set(A,I,g,i,C,t){const B=this.planes;return B[0].copy(A),B[1].copy(I),B[2].copy(g),B[3].copy(i),B[4].copy(C),B[5].copy(t),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=qC){const g=this.planes,i=A.elements,C=i[0],t=i[1],B=i[2],o=i[3],Q=i[4],n=i[5],E=i[6],s=i[7],a=i[8],r=i[9],l=i[10],c=i[11],h=i[12],S=i[13],D=i[14],d=i[15];if(g[0].setComponents(o-C,s-Q,c-a,d-h).normalize(),g[1].setComponents(o+C,s+Q,c+a,d+h).normalize(),g[2].setComponents(o+t,s+n,c+r,d+S).normalize(),g[3].setComponents(o-t,s-n,c-r,d-S).normalize(),g[4].setComponents(o-B,s-E,c-l,d-D).normalize(),I===qC)g[5].setComponents(o+B,s+E,c+l,d+D).normalize();else if(I===FQ)g[5].setComponents(B,E,l,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),QB.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),QB.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(QB)}intersectsSprite(A){return QB.center.set(0,0,0),QB.radius=.7071067811865476,QB.applyMatrix4(A.matrixWorld),this.intersectsSphere(QB)}intersectsSphere(A){const I=this.planes,g=A.center,i=-A.radius;for(let C=0;C<6;C++)if(I[C].distanceToPoint(g)<i)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const i=I[g];if(ya.x=i.normal.x>0?A.max.x:A.min.x,ya.y=i.normal.y>0?A.max.y:A.min.y,ya.z=i.normal.z>0?A.max.z:A.min.z,i.distanceToPoint(ya)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $N(){let e=null,A=!1,I=null,g=null;function i(C,t){I(C,t),g=e.requestAnimationFrame(i)}return{start:function(){A!==!0&&I!==null&&(g=e.requestAnimationFrame(i),A=!0)},stop:function(){e.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(C){I=C},setContext:function(C){e=C}}}function e2(e,A){const I=A.isWebGL2,g=new WeakMap;function i(Q,n){const E=Q.array,s=Q.usage,a=E.byteLength,r=e.createBuffer();e.bindBuffer(n,r),e.bufferData(n,E,s),Q.onUploadCallback();let l;if(E instanceof Float32Array)l=e.FLOAT;else if(E instanceof Uint16Array)if(Q.isFloat16BufferAttribute)if(I)l=e.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else l=e.UNSIGNED_SHORT;else if(E instanceof Int16Array)l=e.SHORT;else if(E instanceof Uint32Array)l=e.UNSIGNED_INT;else if(E instanceof Int32Array)l=e.INT;else if(E instanceof Int8Array)l=e.BYTE;else if(E instanceof Uint8Array)l=e.UNSIGNED_BYTE;else if(E instanceof Uint8ClampedArray)l=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+E);return{buffer:r,type:l,bytesPerElement:E.BYTES_PER_ELEMENT,version:Q.version,size:a}}function C(Q,n,E){const s=n.array,a=n._updateRange,r=n.updateRanges;if(e.bindBuffer(E,Q),a.count===-1&&r.length===0&&e.bufferSubData(E,0,s),r.length!==0){for(let l=0,c=r.length;l<c;l++){const h=r[l];I?e.bufferSubData(E,h.start*s.BYTES_PER_ELEMENT,s,h.start,h.count):e.bufferSubData(E,h.start*s.BYTES_PER_ELEMENT,s.subarray(h.start,h.start+h.count))}n.clearUpdateRanges()}a.count!==-1&&(I?e.bufferSubData(E,a.offset*s.BYTES_PER_ELEMENT,s,a.offset,a.count):e.bufferSubData(E,a.offset*s.BYTES_PER_ELEMENT,s.subarray(a.offset,a.offset+a.count)),a.count=-1),n.onUploadCallback()}function t(Q){return Q.isInterleavedBufferAttribute&&(Q=Q.data),g.get(Q)}function B(Q){Q.isInterleavedBufferAttribute&&(Q=Q.data);const n=g.get(Q);n&&(e.deleteBuffer(n.buffer),g.delete(Q))}function o(Q,n){if(Q.isGLBufferAttribute){const s=g.get(Q);(!s||s.version<Q.version)&&g.set(Q,{buffer:Q.buffer,type:Q.type,bytesPerElement:Q.elementSize,version:Q.version});return}Q.isInterleavedBufferAttribute&&(Q=Q.data);const E=g.get(Q);if(E===void 0)g.set(Q,i(Q,n));else if(E.version<Q.version){if(E.size!==Q.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");C(E.buffer,Q,n),E.version=Q.version}}return{get:t,remove:B,update:o}}class gs extends fI{constructor(A=1,I=1,g=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:i};const C=A/2,t=I/2,B=Math.floor(g),o=Math.floor(i),Q=B+1,n=o+1,E=A/B,s=I/o,a=[],r=[],l=[],c=[];for(let h=0;h<n;h++){const S=h*s-t;for(let D=0;D<Q;D++){const d=D*E-C;r.push(d,-S,0),l.push(0,0,1),c.push(D/B),c.push(1-h/o)}}for(let h=0;h<o;h++)for(let S=0;S<B;S++){const D=S+Q*h,d=S+Q*(h+1),f=S+1+Q*(h+1),u=S+1+Q*h;a.push(D,d,u),a.push(d,f,u)}this.setIndex(a),this.setAttribute("position",new oI(r,3)),this.setAttribute("normal",new oI(l,3)),this.setAttribute("uv",new oI(c,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new gs(A.width,A.height,A.widthSegments,A.heightSegments)}}var t2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Q2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n2=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,E2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,h2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,c2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,S2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,p2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,M2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,k2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,U2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,R2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,F2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q2="gl_FragColor = linearToOutputTexel( gl_FragColor );",L2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Y2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,H2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,T2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,V2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ev=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ov=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ov=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$v=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AO=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iO=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CO=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eO=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tO=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oO=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nO=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EO=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sO=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,aO=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rO=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hO=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cO=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lO=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DO=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SO=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dO=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wO=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pO=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uO=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yO=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fO=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GO=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MO=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kO=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UO=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NO=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RO=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FO=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mO=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JO=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qO=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LO=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uI={alphahash_fragment:t2,alphahash_pars_fragment:B2,alphamap_fragment:o2,alphamap_pars_fragment:Q2,alphatest_fragment:n2,alphatest_pars_fragment:E2,aomap_fragment:s2,aomap_pars_fragment:a2,batching_pars_vertex:r2,batching_vertex:h2,begin_vertex:c2,beginnormal_vertex:l2,bsdfs:D2,iridescence_fragment:S2,bumpmap_pars_fragment:d2,clipping_planes_fragment:w2,clipping_planes_pars_fragment:p2,clipping_planes_pars_vertex:u2,clipping_planes_vertex:y2,color_fragment:f2,color_pars_fragment:G2,color_pars_vertex:M2,color_vertex:k2,common:U2,cube_uv_reflection_fragment:N2,defaultnormal_vertex:R2,displacementmap_pars_vertex:F2,displacementmap_vertex:m2,emissivemap_fragment:K2,emissivemap_pars_fragment:J2,colorspace_fragment:q2,colorspace_pars_fragment:L2,envmap_fragment:Y2,envmap_common_pars_fragment:H2,envmap_pars_fragment:x2,envmap_pars_vertex:T2,envmap_physical_pars_fragment:$2,envmap_vertex:b2,fog_vertex:_2,fog_pars_vertex:v2,fog_fragment:O2,fog_pars_fragment:P2,gradientmap_pars_fragment:Z2,lightmap_fragment:W2,lightmap_pars_fragment:V2,lights_lambert_fragment:z2,lights_lambert_pars_fragment:j2,lights_pars_begin:X2,lights_toon_fragment:Av,lights_toon_pars_fragment:Iv,lights_phong_fragment:gv,lights_phong_pars_fragment:iv,lights_physical_fragment:Cv,lights_physical_pars_fragment:ev,lights_fragment_begin:tv,lights_fragment_maps:Bv,lights_fragment_end:ov,logdepthbuf_fragment:Qv,logdepthbuf_pars_fragment:nv,logdepthbuf_pars_vertex:Ev,logdepthbuf_vertex:sv,map_fragment:av,map_pars_fragment:rv,map_particle_fragment:hv,map_particle_pars_fragment:cv,metalnessmap_fragment:lv,metalnessmap_pars_fragment:Dv,morphcolor_vertex:Sv,morphnormal_vertex:dv,morphtarget_pars_vertex:wv,morphtarget_vertex:pv,normal_fragment_begin:uv,normal_fragment_maps:yv,normal_pars_fragment:fv,normal_pars_vertex:Gv,normal_vertex:Mv,normalmap_pars_fragment:kv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Nv,clearcoat_pars_fragment:Rv,iridescence_pars_fragment:Fv,opaque_fragment:mv,packing:Kv,premultiplied_alpha_fragment:Jv,project_vertex:qv,dithering_fragment:Lv,dithering_pars_fragment:Yv,roughnessmap_fragment:Hv,roughnessmap_pars_fragment:xv,shadowmap_pars_fragment:Tv,shadowmap_pars_vertex:bv,shadowmap_vertex:_v,shadowmask_pars_fragment:vv,skinbase_vertex:Ov,skinning_pars_vertex:Pv,skinning_vertex:Zv,skinnormal_vertex:Wv,specularmap_fragment:Vv,specularmap_pars_fragment:zv,tonemapping_fragment:jv,tonemapping_pars_fragment:Xv,transmission_fragment:$v,transmission_pars_fragment:AO,uv_pars_fragment:IO,uv_pars_vertex:gO,uv_vertex:iO,worldpos_vertex:CO,background_vert:eO,background_frag:tO,backgroundCube_vert:BO,backgroundCube_frag:oO,cube_vert:QO,cube_frag:nO,depth_vert:EO,depth_frag:sO,distanceRGBA_vert:aO,distanceRGBA_frag:rO,equirect_vert:hO,equirect_frag:cO,linedashed_vert:lO,linedashed_frag:DO,meshbasic_vert:SO,meshbasic_frag:dO,meshlambert_vert:wO,meshlambert_frag:pO,meshmatcap_vert:uO,meshmatcap_frag:yO,meshnormal_vert:fO,meshnormal_frag:GO,meshphong_vert:MO,meshphong_frag:kO,meshphysical_vert:UO,meshphysical_frag:NO,meshtoon_vert:RO,meshtoon_frag:FO,points_vert:mO,points_frag:KO,shadow_vert:JO,shadow_frag:qO,sprite_vert:LO,sprite_frag:YO},PA={common:{diffuse:{value:new $A(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wI},alphaMap:{value:null},alphaMapTransform:{value:new wI},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wI}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wI}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wI}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wI},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wI},normalScale:{value:new UA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wI},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wI}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wI}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wI}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $A(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $A(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wI},alphaTest:{value:0},uvTransform:{value:new wI}},sprite:{diffuse:{value:new $A(16777215)},opacity:{value:1},center:{value:new UA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wI},alphaMap:{value:null},alphaMapTransform:{value:new wI},alphaTest:{value:0}}},Ti={basic:{uniforms:Hi([PA.common,PA.specularmap,PA.envmap,PA.aomap,PA.lightmap,PA.fog]),vertexShader:uI.meshbasic_vert,fragmentShader:uI.meshbasic_frag},lambert:{uniforms:Hi([PA.common,PA.specularmap,PA.envmap,PA.aomap,PA.lightmap,PA.emissivemap,PA.bumpmap,PA.normalmap,PA.displacementmap,PA.fog,PA.lights,{emissive:{value:new $A(0)}}]),vertexShader:uI.meshlambert_vert,fragmentShader:uI.meshlambert_frag},phong:{uniforms:Hi([PA.common,PA.specularmap,PA.envmap,PA.aomap,PA.lightmap,PA.emissivemap,PA.bumpmap,PA.normalmap,PA.displacementmap,PA.fog,PA.lights,{emissive:{value:new $A(0)},specular:{value:new $A(1118481)},shininess:{value:30}}]),vertexShader:uI.meshphong_vert,fragmentShader:uI.meshphong_frag},standard:{uniforms:Hi([PA.common,PA.envmap,PA.aomap,PA.lightmap,PA.emissivemap,PA.bumpmap,PA.normalmap,PA.displacementmap,PA.roughnessmap,PA.metalnessmap,PA.fog,PA.lights,{emissive:{value:new $A(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:uI.meshphysical_vert,fragmentShader:uI.meshphysical_frag},toon:{uniforms:Hi([PA.common,PA.aomap,PA.lightmap,PA.emissivemap,PA.bumpmap,PA.normalmap,PA.displacementmap,PA.gradientmap,PA.fog,PA.lights,{emissive:{value:new $A(0)}}]),vertexShader:uI.meshtoon_vert,fragmentShader:uI.meshtoon_frag},matcap:{uniforms:Hi([PA.common,PA.bumpmap,PA.normalmap,PA.displacementmap,PA.fog,{matcap:{value:null}}]),vertexShader:uI.meshmatcap_vert,fragmentShader:uI.meshmatcap_frag},points:{uniforms:Hi([PA.points,PA.fog]),vertexShader:uI.points_vert,fragmentShader:uI.points_frag},dashed:{uniforms:Hi([PA.common,PA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:uI.linedashed_vert,fragmentShader:uI.linedashed_frag},depth:{uniforms:Hi([PA.common,PA.displacementmap]),vertexShader:uI.depth_vert,fragmentShader:uI.depth_frag},normal:{uniforms:Hi([PA.common,PA.bumpmap,PA.normalmap,PA.displacementmap,{opacity:{value:1}}]),vertexShader:uI.meshnormal_vert,fragmentShader:uI.meshnormal_frag},sprite:{uniforms:Hi([PA.sprite,PA.fog]),vertexShader:uI.sprite_vert,fragmentShader:uI.sprite_frag},background:{uniforms:{uvTransform:{value:new wI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:uI.background_vert,fragmentShader:uI.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:uI.backgroundCube_vert,fragmentShader:uI.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:uI.cube_vert,fragmentShader:uI.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:uI.equirect_vert,fragmentShader:uI.equirect_frag},distanceRGBA:{uniforms:Hi([PA.common,PA.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:uI.distanceRGBA_vert,fragmentShader:uI.distanceRGBA_frag},shadow:{uniforms:Hi([PA.lights,PA.fog,{color:{value:new $A(0)},opacity:{value:1}}]),vertexShader:uI.shadow_vert,fragmentShader:uI.shadow_frag}};Ti.physical={uniforms:Hi([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wI},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wI},clearcoatNormalScale:{value:new UA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wI},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wI},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wI},sheen:{value:0},sheenColor:{value:new $A(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wI},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wI},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wI},transmissionSamplerSize:{value:new UA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wI},attenuationDistance:{value:0},attenuationColor:{value:new $A(0)},specularColor:{value:new $A(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wI},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wI},anisotropyVector:{value:new UA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wI}}]),vertexShader:uI.meshphysical_vert,fragmentShader:uI.meshphysical_frag};const fa={r:0,b:0,g:0};function HO(e,A,I,g,i,C,t){const B=new $A(0);let o=C===!0?0:1,Q,n,E=null,s=0,a=null;function r(c,h){let S=!1,D=h.isScene===!0?h.background:null;D&&D.isTexture&&(D=(h.backgroundBlurriness>0?I:A).get(D)),D===null?l(B,o):D&&D.isColor&&(l(D,1),S=!0);const d=e.xr.getEnvironmentBlendMode();d==="additive"?g.buffers.color.setClear(0,0,0,1,t):d==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,t),(e.autoClear||S)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),D&&(D.isCubeTexture||D.mapping===vQ)?(n===void 0&&(n=new Jg(new xt(1,1,1),new TC({name:"BackgroundCubeMaterial",uniforms:KQ(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),n.geometry.deleteAttribute("normal"),n.geometry.deleteAttribute("uv"),n.onBeforeRender=function(f,u,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(n.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(n)),n.material.uniforms.envMap.value=D,n.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,n.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,n.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,n.material.toneMapped=jI.getTransfer(D.colorSpace)!==ag,(E!==D||s!==D.version||a!==e.toneMapping)&&(n.material.needsUpdate=!0,E=D,s=D.version,a=e.toneMapping),n.layers.enableAll(),c.unshift(n,n.geometry,n.material,0,0,null)):D&&D.isTexture&&(Q===void 0&&(Q=new Jg(new gs(2,2),new TC({name:"BackgroundMaterial",uniforms:KQ(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),Q.geometry.deleteAttribute("normal"),Object.defineProperty(Q.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(Q)),Q.material.uniforms.t2D.value=D,Q.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,Q.material.toneMapped=jI.getTransfer(D.colorSpace)!==ag,D.matrixAutoUpdate===!0&&D.updateMatrix(),Q.material.uniforms.uvTransform.value.copy(D.matrix),(E!==D||s!==D.version||a!==e.toneMapping)&&(Q.material.needsUpdate=!0,E=D,s=D.version,a=e.toneMapping),Q.layers.enableAll(),c.unshift(Q,Q.geometry,Q.material,0,0,null))}function l(c,h){c.getRGB(fa,zN(e)),g.buffers.color.setClear(fa.r,fa.g,fa.b,h,t)}return{getClearColor:function(){return B},setClearColor:function(c,h=1){B.set(c),o=h,l(B,o)},getClearAlpha:function(){return o},setClearAlpha:function(c){o=c,l(B,o)},render:r}}function xO(e,A,I,g){const i=e.getParameter(e.MAX_VERTEX_ATTRIBS),C=g.isWebGL2?null:A.get("OES_vertex_array_object"),t=g.isWebGL2||C!==null,B={},o=c(null);let Q=o,n=!1;function E(m,b,O,z,V){let AA=!1;if(t){const oA=l(z,O,b);Q!==oA&&(Q=oA,a(Q.object)),AA=h(m,z,O,V),AA&&S(m,z,O,V)}else{const oA=b.wireframe===!0;(Q.geometry!==z.id||Q.program!==O.id||Q.wireframe!==oA)&&(Q.geometry=z.id,Q.program=O.id,Q.wireframe=oA,AA=!0)}V!==null&&I.update(V,e.ELEMENT_ARRAY_BUFFER),(AA||n)&&(n=!1,M(m,b,O,z),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,I.get(V).buffer))}function s(){return g.isWebGL2?e.createVertexArray():C.createVertexArrayOES()}function a(m){return g.isWebGL2?e.bindVertexArray(m):C.bindVertexArrayOES(m)}function r(m){return g.isWebGL2?e.deleteVertexArray(m):C.deleteVertexArrayOES(m)}function l(m,b,O){const z=O.wireframe===!0;let V=B[m.id];V===void 0&&(V={},B[m.id]=V);let AA=V[b.id];AA===void 0&&(AA={},V[b.id]=AA);let oA=AA[z];return oA===void 0&&(oA=c(s()),AA[z]=oA),oA}function c(m){const b=[],O=[],z=[];for(let V=0;V<i;V++)b[V]=0,O[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:O,attributeDivisors:z,object:m,attributes:{},index:null}}function h(m,b,O,z){const V=Q.attributes,AA=b.attributes;let oA=0;const aA=O.getAttributes();for(const GA in aA)if(aA[GA].location>=0){const X=V[GA];let lA=AA[GA];if(lA===void 0&&(GA==="instanceMatrix"&&m.instanceMatrix&&(lA=m.instanceMatrix),GA==="instanceColor"&&m.instanceColor&&(lA=m.instanceColor)),X===void 0||X.attribute!==lA||lA&&X.data!==lA.data)return!0;oA++}return Q.attributesNum!==oA||Q.index!==z}function S(m,b,O,z){const V={},AA=b.attributes;let oA=0;const aA=O.getAttributes();for(const GA in aA)if(aA[GA].location>=0){let X=AA[GA];X===void 0&&(GA==="instanceMatrix"&&m.instanceMatrix&&(X=m.instanceMatrix),GA==="instanceColor"&&m.instanceColor&&(X=m.instanceColor));const lA={};lA.attribute=X,X&&X.data&&(lA.data=X.data),V[GA]=lA,oA++}Q.attributes=V,Q.attributesNum=oA,Q.index=z}function D(){const m=Q.newAttributes;for(let b=0,O=m.length;b<O;b++)m[b]=0}function d(m){f(m,0)}function f(m,b){const O=Q.newAttributes,z=Q.enabledAttributes,V=Q.attributeDivisors;O[m]=1,z[m]===0&&(e.enableVertexAttribArray(m),z[m]=1),V[m]!==b&&((g.isWebGL2?e:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](m,b),V[m]=b)}function u(){const m=Q.newAttributes,b=Q.enabledAttributes;for(let O=0,z=b.length;O<z;O++)b[O]!==m[O]&&(e.disableVertexAttribArray(O),b[O]=0)}function y(m,b,O,z,V,AA,oA){oA===!0?e.vertexAttribIPointer(m,b,O,V,AA):e.vertexAttribPointer(m,b,O,z,V,AA)}function M(m,b,O,z){if(g.isWebGL2===!1&&(m.isInstancedMesh||z.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;D();const V=z.attributes,AA=O.getAttributes(),oA=b.defaultAttributeValues;for(const aA in AA){const GA=AA[aA];if(GA.location>=0){let rA=V[aA];if(rA===void 0&&(aA==="instanceMatrix"&&m.instanceMatrix&&(rA=m.instanceMatrix),aA==="instanceColor"&&m.instanceColor&&(rA=m.instanceColor)),rA!==void 0){const X=rA.normalized,lA=rA.itemSize,yA=I.get(rA);if(yA===void 0)continue;const SA=yA.buffer,JA=yA.type,ZA=yA.bytesPerElement,FA=g.isWebGL2===!0&&(JA===e.INT||JA===e.UNSIGNED_INT||rA.gpuType===Zd);if(rA.isInterleavedBufferAttribute){const IA=rA.data,q=IA.stride,tA=rA.offset;if(IA.isInstancedInterleavedBuffer){for(let iA=0;iA<GA.locationSize;iA++)f(GA.location+iA,IA.meshPerAttribute);m.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=IA.meshPerAttribute*IA.count)}else for(let iA=0;iA<GA.locationSize;iA++)d(GA.location+iA);e.bindBuffer(e.ARRAY_BUFFER,SA);for(let iA=0;iA<GA.locationSize;iA++)y(GA.location+iA,lA/GA.locationSize,JA,X,q*ZA,(tA+lA/GA.locationSize*iA)*ZA,FA)}else{if(rA.isInstancedBufferAttribute){for(let IA=0;IA<GA.locationSize;IA++)f(GA.location+IA,rA.meshPerAttribute);m.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rA.meshPerAttribute*rA.count)}else for(let IA=0;IA<GA.locationSize;IA++)d(GA.location+IA);e.bindBuffer(e.ARRAY_BUFFER,SA);for(let IA=0;IA<GA.locationSize;IA++)y(GA.location+IA,lA/GA.locationSize,JA,X,lA*ZA,lA/GA.locationSize*IA*ZA,FA)}}else if(oA!==void 0){const X=oA[aA];if(X!==void 0)switch(X.length){case 2:e.vertexAttrib2fv(GA.location,X);break;case 3:e.vertexAttrib3fv(GA.location,X);break;case 4:e.vertexAttrib4fv(GA.location,X);break;default:e.vertexAttrib1fv(GA.location,X)}}}}u()}function w(){T();for(const m in B){const b=B[m];for(const O in b){const z=b[O];for(const V in z)r(z[V].object),delete z[V];delete b[O]}delete B[m]}}function p(m){if(B[m.id]===void 0)return;const b=B[m.id];for(const O in b){const z=b[O];for(const V in z)r(z[V].object),delete z[V];delete b[O]}delete B[m.id]}function F(m){for(const b in B){const O=B[b];if(O[m.id]===void 0)continue;const z=O[m.id];for(const V in z)r(z[V].object),delete z[V];delete O[m.id]}}function T(){J(),n=!0,Q!==o&&(Q=o,a(Q.object))}function J(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:E,reset:T,resetDefaultState:J,dispose:w,releaseStatesOfGeometry:p,releaseStatesOfProgram:F,initAttributes:D,enableAttribute:d,disableUnusedAttributes:u}}function TO(e,A,I,g){const i=g.isWebGL2;let C;function t(n){C=n}function B(n,E){e.drawArrays(C,n,E),I.update(E,C,1)}function o(n,E,s){if(s===0)return;let a,r;if(i)a=e,r="drawArraysInstanced";else if(a=A.get("ANGLE_instanced_arrays"),r="drawArraysInstancedANGLE",a===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}a[r](C,n,E,s),I.update(E,C,s)}function Q(n,E,s){if(s===0)return;const a=A.get("WEBGL_multi_draw");if(a===null)for(let r=0;r<s;r++)this.render(n[r],E[r]);else{a.multiDrawArraysWEBGL(C,n,0,E,0,s);let r=0;for(let l=0;l<s;l++)r+=E[l];I.update(r,C,1)}}this.setMode=t,this.render=B,this.renderInstances=o,this.renderMultiDraw=Q}function bO(e,A,I){let g;function i(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const y=A.get("EXT_texture_filter_anisotropic");g=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function C(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const t=typeof WebGL2RenderingContext<"u"&&e.constructor.name==="WebGL2RenderingContext";let B=I.precision!==void 0?I.precision:"highp";const o=C(B);o!==B&&(console.warn("THREE.WebGLRenderer:",B,"not supported, using",o,"instead."),B=o);const Q=t||A.has("WEBGL_draw_buffers"),n=I.logarithmicDepthBuffer===!0,E=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),s=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),a=e.getParameter(e.MAX_TEXTURE_SIZE),r=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),c=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),h=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),D=s>0,d=t||A.has("OES_texture_float"),f=D&&d,u=t?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:t,drawBuffers:Q,getMaxAnisotropy:i,getMaxPrecision:C,precision:B,logarithmicDepthBuffer:n,maxTextures:E,maxVertexTextures:s,maxTextureSize:a,maxCubemapSize:r,maxAttributes:l,maxVertexUniforms:c,maxVaryings:h,maxFragmentUniforms:S,vertexTextures:D,floatFragmentTextures:d,floatVertexTextures:f,maxSamples:u}}function _O(e){const A=this;let I=null,g=0,i=!1,C=!1;const t=new lt,B=new wI,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(E,s){const a=E.length!==0||s||g!==0||i;return i=s,g=E.length,a},this.beginShadows=function(){C=!0,n(null)},this.endShadows=function(){C=!1},this.setGlobalState=function(E,s){I=n(E,s,0)},this.setState=function(E,s,a){const r=E.clippingPlanes,l=E.clipIntersection,c=E.clipShadows,h=e.get(E);if(!i||r===null||r.length===0||C&&!c)C?n(null):Q();else{const S=C?0:g,D=S*4;let d=h.clippingState||null;o.value=d,d=n(r,s,D,a);for(let f=0;f!==D;++f)d[f]=I[f];h.clippingState=d,this.numIntersection=l?this.numPlanes:0,this.numPlanes+=S}};function Q(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function n(E,s,a,r){const l=E!==null?E.length:0;let c=null;if(l!==0){if(c=o.value,r!==!0||c===null){const h=a+l*4,S=s.matrixWorldInverse;B.getNormalMatrix(S),(c===null||c.length<h)&&(c=new Float32Array(h));for(let D=0,d=a;D!==l;++D,d+=4)t.copy(E[D]).applyMatrix4(S,B),t.normal.toArray(c,d),c[d+3]=t.constant}o.value=c,o.needsUpdate=!0}return A.numPlanes=l,A.numIntersection=0,c}}function vO(e){let A=new WeakMap;function I(t,B){return B===SE?t.mapping=Pe:B===dE&&(t.mapping=mt),t}function g(t){if(t&&t.isTexture){const B=t.mapping;if(B===SE||B===dE)if(A.has(t)){const o=A.get(t).texture;return I(o,t.mapping)}else{const o=t.image;if(o&&o.height>0){const Q=new XN(o.height/2);return Q.fromEquirectangularTexture(e,t),A.set(t,Q),t.addEventListener("dispose",i),I(Q.texture,t.mapping)}else return null}}return t}function i(t){const B=t.target;B.removeEventListener("dispose",i);const o=A.get(B);o!==void 0&&(A.delete(B),o.dispose())}function C(){A=new WeakMap}return{get:g,dispose:C}}class is extends yh{constructor(A=-1,I=1,g=1,i=-1,C=.1,t=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=i,this.near=C,this.far=t,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,i,C,t){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=i,this.view.width=C,this.view.height=t,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let C=g-A,t=g+A,B=i+I,o=i-I;if(this.view!==null&&this.view.enabled){const Q=(this.right-this.left)/this.view.fullWidth/this.zoom,n=(this.top-this.bottom)/this.view.fullHeight/this.zoom;C+=Q*this.view.offsetX,t=C+Q*this.view.width,B-=n*this.view.offsetY,o=B-n*this.view.height}this.projectionMatrix.makeOrthographic(C,t,B,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const EQ=4,cy=[.125,.215,.35,.446,.526,.582],pB=20,il=new is,ly=new $A;let Cl=null,el=0,tl=0;const dB=(1+Math.sqrt(5))/2,zo=1/dB,Dy=[new x(1,1,1),new x(-1,1,1),new x(1,1,-1),new x(-1,1,-1),new x(0,dB,zo),new x(0,dB,-zo),new x(zo,0,dB),new x(-zo,0,dB),new x(dB,zo,0),new x(-dB,zo,0)];class sS{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,i=100){Cl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const C=this._allocateTargets();return C.depthBuffer=!0,this._sceneToCubeUV(A,g,i,C),I>0&&this._blur(C,0,0,I),this._applyPMREM(C),this._cleanup(C),C}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dy(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(Cl,el,tl),A.scissorTest=!1,Ga(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===Pe||A.mapping===mt?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),Cl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:ug,minFilter:ug,generateMipmaps:!1,type:NQ,format:ji,colorSpace:ei,depthBuffer:!1},i=Sy(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sy(A,I,g);const{_lodMax:C}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=OO(C)),this._blurMaterial=PO(C,A,I)}return i}_compileMaterial(A){const I=new Jg(this._lodPlanes[0],A);this._renderer.compile(I,il)}_sceneToCubeUV(A,I,g,i){const B=new Xg(90,1,I,g),o=[1,-1,1,1,1,1],Q=[1,1,1,-1,-1,-1],n=this._renderer,E=n.autoClear,s=n.toneMapping;n.getClearColor(ly),n.toneMapping=He,n.autoClear=!1;const a=new $i({name:"PMREM.Background",side:Oi,depthWrite:!1,depthTest:!1}),r=new Jg(new xt,a);let l=!1;const c=A.background;c?c.isColor&&(a.color.copy(c),A.background=null,l=!0):(a.color.copy(ly),l=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(B.up.set(0,o[h],0),B.lookAt(Q[h],0,0)):S===1?(B.up.set(0,0,o[h]),B.lookAt(0,Q[h],0)):(B.up.set(0,o[h],0),B.lookAt(0,0,Q[h]));const D=this._cubeSize;Ga(i,S*D,h>2?D:0,D,D),n.setRenderTarget(i),l&&n.render(r,B),n.render(A,B)}r.geometry.dispose(),r.material.dispose(),n.toneMapping=s,n.autoClear=E,A.background=c}_textureToCubeUV(A,I){const g=this._renderer,i=A.mapping===Pe||A.mapping===mt;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wy()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dy());const C=i?this._cubemapMaterial:this._equirectMaterial,t=new Jg(this._lodPlanes[0],C),B=C.uniforms;B.envMap.value=A;const o=this._cubeSize;Ga(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(t,il)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const C=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),t=Dy[(i-1)%Dy.length];this._blur(A,i-1,i,C,t)}I.autoClear=g}_blur(A,I,g,i,C){const t=this._pingPongRenderTarget;this._halfBlur(A,t,I,g,i,"latitudinal",C),this._halfBlur(t,A,g,g,i,"longitudinal",C)}_halfBlur(A,I,g,i,C,t,B){const o=this._renderer,Q=this._blurMaterial;t!=="latitudinal"&&t!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const n=3,E=new Jg(this._lodPlanes[i],Q),s=Q.uniforms,a=this._sizeLods[g]-1,r=isFinite(C)?Math.PI/(2*a):2*Math.PI/(2*pB-1),l=C/r,c=isFinite(C)?1+Math.floor(n*l):pB;c>pB&&console.warn(`sigmaRadians, ${C}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${pB}`);const h=[];let S=0;for(let y=0;y<pB;++y){const M=y/l,w=Math.exp(-M*M/2);h.push(w),y===0?S+=w:y<c&&(S+=2*w)}for(let y=0;y<h.length;y++)h[y]=h[y]/S;s.envMap.value=A.texture,s.samples.value=c,s.weights.value=h,s.latitudinal.value=t==="latitudinal",B&&(s.poleAxis.value=B);const{_lodMax:D}=this;s.dTheta.value=r,s.mipInt.value=D-g;const d=this._sizeLods[i],f=3*d*(i>D-EQ?i-D+EQ:0),u=4*(this._cubeSize-d);Ga(I,f,u,3*d,2*d),o.setRenderTarget(I),o.render(E,il)}}function OO(e){const A=[],I=[],g=[];let i=e;const C=e-EQ+1+cy.length;for(let t=0;t<C;t++){const B=Math.pow(2,i);I.push(B);let o=1/B;t>e-EQ?o=cy[t-e+EQ-1]:t===0&&(o=0),g.push(o);const Q=1/(B-2),n=-Q,E=1+Q,s=[n,n,E,n,E,E,n,n,E,E,n,E],a=6,r=6,l=3,c=2,h=1,S=new Float32Array(l*r*a),D=new Float32Array(c*r*a),d=new Float32Array(h*r*a);for(let u=0;u<a;u++){const y=u%3*2/3-1,M=u>2?0:-1,w=[y,M,0,y+2/3,M,0,y+2/3,M+1,0,y,M,0,y+2/3,M+1,0,y,M+1,0];S.set(w,l*r*u),D.set(s,c*r*u);const p=[u,u,u,u,u,u];d.set(p,h*r*u)}const f=new fI;f.setAttribute("position",new VI(S,l)),f.setAttribute("uv",new VI(D,c)),f.setAttribute("faceIndex",new VI(d,h)),A.push(f),i>EQ&&i--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function Sy(e,A,I){const g=new xC(e,A,I);return g.texture.mapping=vQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function Ga(e,A,I,g,i){e.viewport.set(A,I,g,i),e.scissor.set(A,I,g,i)}function PO(e,A,I){const g=new Float32Array(pB),i=new x(0,1,0);return new TC({name:"SphericalGaussianBlur",defines:{n:pB,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:nw(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function dy(){return new TC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nw(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function wy(){return new TC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nw(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ye,depthTest:!1,depthWrite:!1})}function nw(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ZO(e){let A=new WeakMap,I=null;function g(B){if(B&&B.isTexture){const o=B.mapping,Q=o===SE||o===dE,n=o===Pe||o===mt;if(Q||n)if(B.isRenderTargetTexture&&B.needsPMREMUpdate===!0){B.needsPMREMUpdate=!1;let E=A.get(B);return I===null&&(I=new sS(e)),E=Q?I.fromEquirectangular(B,E):I.fromCubemap(B,E),A.set(B,E),E.texture}else{if(A.has(B))return A.get(B).texture;{const E=B.image;if(Q&&E&&E.height>0||n&&E&&i(E)){I===null&&(I=new sS(e));const s=Q?I.fromEquirectangular(B):I.fromCubemap(B);return A.set(B,s),B.addEventListener("dispose",C),s.texture}else return null}}}return B}function i(B){let o=0;const Q=6;for(let n=0;n<Q;n++)B[n]!==void 0&&o++;return o===Q}function C(B){const o=B.target;o.removeEventListener("dispose",C);const Q=A.get(o);Q!==void 0&&(A.delete(o),Q.dispose())}function t(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:t}}function WO(e){const A={};function I(g){if(A[g]!==void 0)return A[g];let i;switch(g){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(g)}return A[g]=i,i}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?(I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance")):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const i=I(g);return i===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),i}}}function VO(e,A,I,g){const i={},C=new WeakMap;function t(E){const s=E.target;s.index!==null&&A.remove(s.index);for(const r in s.attributes)A.remove(s.attributes[r]);for(const r in s.morphAttributes){const l=s.morphAttributes[r];for(let c=0,h=l.length;c<h;c++)A.remove(l[c])}s.removeEventListener("dispose",t),delete i[s.id];const a=C.get(s);a&&(A.remove(a),C.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function B(E,s){return i[s.id]===!0||(s.addEventListener("dispose",t),i[s.id]=!0,I.memory.geometries++),s}function o(E){const s=E.attributes;for(const r in s)A.update(s[r],e.ARRAY_BUFFER);const a=E.morphAttributes;for(const r in a){const l=a[r];for(let c=0,h=l.length;c<h;c++)A.update(l[c],e.ARRAY_BUFFER)}}function Q(E){const s=[],a=E.index,r=E.attributes.position;let l=0;if(a!==null){const S=a.array;l=a.version;for(let D=0,d=S.length;D<d;D+=3){const f=S[D+0],u=S[D+1],y=S[D+2];s.push(f,u,u,y,y,f)}}else if(r!==void 0){const S=r.array;l=r.version;for(let D=0,d=S.length/3-1;D<d;D+=3){const f=D+0,u=D+1,y=D+2;s.push(f,u,u,y,y,f)}}else return;const c=new(PN(s)?Qw:ow)(s,1);c.version=l;const h=C.get(E);h&&A.remove(h),C.set(E,c)}function n(E){const s=C.get(E);if(s){const a=E.index;a!==null&&s.version<a.version&&Q(E)}else Q(E);return C.get(E)}return{get:B,update:o,getWireframeAttribute:n}}function zO(e,A,I,g){const i=g.isWebGL2;let C;function t(a){C=a}let B,o;function Q(a){B=a.type,o=a.bytesPerElement}function n(a,r){e.drawElements(C,r,B,a*o),I.update(r,C,1)}function E(a,r,l){if(l===0)return;let c,h;if(i)c=e,h="drawElementsInstanced";else if(c=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",c===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[h](C,r,B,a*o,l),I.update(r,C,l)}function s(a,r,l){if(l===0)return;const c=A.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<l;h++)this.render(a[h]/o,r[h]);else{c.multiDrawElementsWEBGL(C,r,0,B,a,0,l);let h=0;for(let S=0;S<l;S++)h+=r[S];I.update(h,C,1)}}this.setMode=t,this.setIndex=Q,this.render=n,this.renderInstances=E,this.renderMultiDraw=s}function jO(e){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(C,t,B){switch(I.calls++,t){case e.TRIANGLES:I.triangles+=B*(C/3);break;case e.LINES:I.lines+=B*(C/2);break;case e.LINE_STRIP:I.lines+=B*(C-1);break;case e.LINE_LOOP:I.lines+=B*C;break;case e.POINTS:I.points+=B*C;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",t);break}}function i(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:i,update:g}}function XO(e,A){return e[0]-A[0]}function $O(e,A){return Math.abs(A[1])-Math.abs(e[1])}function A3(e,A,I){const g={},i=new Float32Array(8),C=new WeakMap,t=new OI,B=[];for(let Q=0;Q<8;Q++)B[Q]=[Q,0];function o(Q,n,E){const s=Q.morphTargetInfluences;if(A.isWebGL2===!0){const a=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,r=a!==void 0?a.length:0;let l=C.get(n);if(l===void 0||l.count!==r){let m=function(){T.dispose(),C.delete(n),n.removeEventListener("dispose",m)};l!==void 0&&l.texture.dispose();const S=n.morphAttributes.position!==void 0,D=n.morphAttributes.normal!==void 0,d=n.morphAttributes.color!==void 0,f=n.morphAttributes.position||[],u=n.morphAttributes.normal||[],y=n.morphAttributes.color||[];let M=0;S===!0&&(M=1),D===!0&&(M=2),d===!0&&(M=3);let w=n.attributes.position.count*M,p=1;w>A.maxTextureSize&&(p=Math.ceil(w/A.maxTextureSize),w=A.maxTextureSize);const F=new Float32Array(w*p*4*r),T=new wh(F,w,p,r);T.type=JC,T.needsUpdate=!0;const J=M*4;for(let b=0;b<r;b++){const O=f[b],z=u[b],V=y[b],AA=w*p*4*b;for(let oA=0;oA<O.count;oA++){const aA=oA*J;S===!0&&(t.fromBufferAttribute(O,oA),F[AA+aA+0]=t.x,F[AA+aA+1]=t.y,F[AA+aA+2]=t.z,F[AA+aA+3]=0),D===!0&&(t.fromBufferAttribute(z,oA),F[AA+aA+4]=t.x,F[AA+aA+5]=t.y,F[AA+aA+6]=t.z,F[AA+aA+7]=0),d===!0&&(t.fromBufferAttribute(V,oA),F[AA+aA+8]=t.x,F[AA+aA+9]=t.y,F[AA+aA+10]=t.z,F[AA+aA+11]=V.itemSize===4?t.w:1)}}l={count:r,texture:T,size:new UA(w,p)},C.set(n,l),n.addEventListener("dispose",m)}let c=0;for(let S=0;S<s.length;S++)c+=s[S];const h=n.morphTargetsRelative?1:1-c;E.getUniforms().setValue(e,"morphTargetBaseInfluence",h),E.getUniforms().setValue(e,"morphTargetInfluences",s),E.getUniforms().setValue(e,"morphTargetsTexture",l.texture,I),E.getUniforms().setValue(e,"morphTargetsTextureSize",l.size)}else{const a=s===void 0?0:s.length;let r=g[n.id];if(r===void 0||r.length!==a){r=[];for(let D=0;D<a;D++)r[D]=[D,0];g[n.id]=r}for(let D=0;D<a;D++){const d=r[D];d[0]=D,d[1]=s[D]}r.sort($O);for(let D=0;D<8;D++)D<a&&r[D][1]?(B[D][0]=r[D][0],B[D][1]=r[D][1]):(B[D][0]=Number.MAX_SAFE_INTEGER,B[D][1]=0);B.sort(XO);const l=n.morphAttributes.position,c=n.morphAttributes.normal;let h=0;for(let D=0;D<8;D++){const d=B[D],f=d[0],u=d[1];f!==Number.MAX_SAFE_INTEGER&&u?(l&&n.getAttribute("morphTarget"+D)!==l[f]&&n.setAttribute("morphTarget"+D,l[f]),c&&n.getAttribute("morphNormal"+D)!==c[f]&&n.setAttribute("morphNormal"+D,c[f]),i[D]=u,h+=u):(l&&n.hasAttribute("morphTarget"+D)===!0&&n.deleteAttribute("morphTarget"+D),c&&n.hasAttribute("morphNormal"+D)===!0&&n.deleteAttribute("morphNormal"+D),i[D]=0)}const S=n.morphTargetsRelative?1:1-h;E.getUniforms().setValue(e,"morphTargetBaseInfluence",S),E.getUniforms().setValue(e,"morphTargetInfluences",i)}}return{update:o}}function I3(e,A,I,g){let i=new WeakMap;function C(o){const Q=g.render.frame,n=o.geometry,E=A.get(o,n);if(i.get(E)!==Q&&(A.update(E),i.set(E,Q)),o.isInstancedMesh&&(o.hasEventListener("dispose",B)===!1&&o.addEventListener("dispose",B),i.get(o)!==Q&&(I.update(o.instanceMatrix,e.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,e.ARRAY_BUFFER),i.set(o,Q))),o.isSkinnedMesh){const s=o.skeleton;i.get(s)!==Q&&(s.update(),i.set(s,Q))}return E}function t(){i=new WeakMap}function B(o){const Q=o.target;Q.removeEventListener("dispose",B),I.remove(Q.instanceMatrix),Q.instanceColor!==null&&I.remove(Q.instanceColor)}return{update:C,dispose:t}}class Ew extends Mg{constructor(A,I,g,i,C,t,B,o,Q,n){if(n=n!==void 0?n:Gt,n!==Gt&&n!==XB)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&n===Gt&&(g=me),g===void 0&&n===XB&&(g=ft),super(null,i,C,t,B,o,n,g,Q),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=B!==void 0?B:Fg,this.minFilter=o!==void 0?o:Fg,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const AR=new Mg,IR=new Ew(1,1);IR.compareFunction=iw;const gR=new wh,iR=new Bw,CR=new As,py=[],uy=[],yy=new Float32Array(16),fy=new Float32Array(9),Gy=new Float32Array(4);function PQ(e,A,I){const g=e[0];if(g<=0||g>0)return e;const i=A*I;let C=py[i];if(C===void 0&&(C=new Float32Array(i),py[i]=C),A!==0){g.toArray(C,0);for(let t=1,B=0;t!==A;++t)B+=I,e[t].toArray(C,B)}return C}function ti(e,A){if(e.length!==A.length)return!1;for(let I=0,g=e.length;I<g;I++)if(e[I]!==A[I])return!1;return!0}function Bi(e,A){for(let I=0,g=A.length;I<g;I++)e[I]=A[I]}function fh(e,A){let I=uy[A];I===void 0&&(I=new Int32Array(A),uy[A]=I);for(let g=0;g!==A;++g)I[g]=e.allocateTextureUnit();return I}function g3(e,A){const I=this.cache;I[0]!==A&&(e.uniform1f(this.addr,A),I[0]=A)}function i3(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(e.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(ti(I,A))return;e.uniform2fv(this.addr,A),Bi(I,A)}}function C3(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(e.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(e.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(ti(I,A))return;e.uniform3fv(this.addr,A),Bi(I,A)}}function e3(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(e.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(ti(I,A))return;e.uniform4fv(this.addr,A),Bi(I,A)}}function t3(e,A){const I=this.cache,g=A.elements;if(g===void 0){if(ti(I,A))return;e.uniformMatrix2fv(this.addr,!1,A),Bi(I,A)}else{if(ti(I,g))return;Gy.set(g),e.uniformMatrix2fv(this.addr,!1,Gy),Bi(I,g)}}function B3(e,A){const I=this.cache,g=A.elements;if(g===void 0){if(ti(I,A))return;e.uniformMatrix3fv(this.addr,!1,A),Bi(I,A)}else{if(ti(I,g))return;fy.set(g),e.uniformMatrix3fv(this.addr,!1,fy),Bi(I,g)}}function o3(e,A){const I=this.cache,g=A.elements;if(g===void 0){if(ti(I,A))return;e.uniformMatrix4fv(this.addr,!1,A),Bi(I,A)}else{if(ti(I,g))return;yy.set(g),e.uniformMatrix4fv(this.addr,!1,yy),Bi(I,g)}}function Q3(e,A){const I=this.cache;I[0]!==A&&(e.uniform1i(this.addr,A),I[0]=A)}function n3(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(e.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(ti(I,A))return;e.uniform2iv(this.addr,A),Bi(I,A)}}function E3(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(e.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(ti(I,A))return;e.uniform3iv(this.addr,A),Bi(I,A)}}function s3(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(e.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(ti(I,A))return;e.uniform4iv(this.addr,A),Bi(I,A)}}function a3(e,A){const I=this.cache;I[0]!==A&&(e.uniform1ui(this.addr,A),I[0]=A)}function r3(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(e.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(ti(I,A))return;e.uniform2uiv(this.addr,A),Bi(I,A)}}function h3(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(e.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(ti(I,A))return;e.uniform3uiv(this.addr,A),Bi(I,A)}}function c3(e,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(e.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(ti(I,A))return;e.uniform4uiv(this.addr,A),Bi(I,A)}}function l3(e,A,I){const g=this.cache,i=I.allocateTextureUnit();g[0]!==i&&(e.uniform1i(this.addr,i),g[0]=i);const C=this.type===e.SAMPLER_2D_SHADOW?IR:AR;I.setTexture2D(A||C,i)}function D3(e,A,I){const g=this.cache,i=I.allocateTextureUnit();g[0]!==i&&(e.uniform1i(this.addr,i),g[0]=i),I.setTexture3D(A||iR,i)}function S3(e,A,I){const g=this.cache,i=I.allocateTextureUnit();g[0]!==i&&(e.uniform1i(this.addr,i),g[0]=i),I.setTextureCube(A||CR,i)}function d3(e,A,I){const g=this.cache,i=I.allocateTextureUnit();g[0]!==i&&(e.uniform1i(this.addr,i),g[0]=i),I.setTexture2DArray(A||gR,i)}function w3(e){switch(e){case 5126:return g3;case 35664:return i3;case 35665:return C3;case 35666:return e3;case 35674:return t3;case 35675:return B3;case 35676:return o3;case 5124:case 35670:return Q3;case 35667:case 35671:return n3;case 35668:case 35672:return E3;case 35669:case 35673:return s3;case 5125:return a3;case 36294:return r3;case 36295:return h3;case 36296:return c3;case 35678:case 36198:case 36298:case 36306:case 35682:return l3;case 35679:case 36299:case 36307:return D3;case 35680:case 36300:case 36308:case 36293:return S3;case 36289:case 36303:case 36311:case 36292:return d3}}function p3(e,A){e.uniform1fv(this.addr,A)}function u3(e,A){const I=PQ(A,this.size,2);e.uniform2fv(this.addr,I)}function y3(e,A){const I=PQ(A,this.size,3);e.uniform3fv(this.addr,I)}function f3(e,A){const I=PQ(A,this.size,4);e.uniform4fv(this.addr,I)}function G3(e,A){const I=PQ(A,this.size,4);e.uniformMatrix2fv(this.addr,!1,I)}function M3(e,A){const I=PQ(A,this.size,9);e.uniformMatrix3fv(this.addr,!1,I)}function k3(e,A){const I=PQ(A,this.size,16);e.uniformMatrix4fv(this.addr,!1,I)}function U3(e,A){e.uniform1iv(this.addr,A)}function N3(e,A){e.uniform2iv(this.addr,A)}function R3(e,A){e.uniform3iv(this.addr,A)}function F3(e,A){e.uniform4iv(this.addr,A)}function m3(e,A){e.uniform1uiv(this.addr,A)}function K3(e,A){e.uniform2uiv(this.addr,A)}function J3(e,A){e.uniform3uiv(this.addr,A)}function q3(e,A){e.uniform4uiv(this.addr,A)}function L3(e,A,I){const g=this.cache,i=A.length,C=fh(I,i);ti(g,C)||(e.uniform1iv(this.addr,C),Bi(g,C));for(let t=0;t!==i;++t)I.setTexture2D(A[t]||AR,C[t])}function Y3(e,A,I){const g=this.cache,i=A.length,C=fh(I,i);ti(g,C)||(e.uniform1iv(this.addr,C),Bi(g,C));for(let t=0;t!==i;++t)I.setTexture3D(A[t]||iR,C[t])}function H3(e,A,I){const g=this.cache,i=A.length,C=fh(I,i);ti(g,C)||(e.uniform1iv(this.addr,C),Bi(g,C));for(let t=0;t!==i;++t)I.setTextureCube(A[t]||CR,C[t])}function x3(e,A,I){const g=this.cache,i=A.length,C=fh(I,i);ti(g,C)||(e.uniform1iv(this.addr,C),Bi(g,C));for(let t=0;t!==i;++t)I.setTexture2DArray(A[t]||gR,C[t])}function T3(e){switch(e){case 5126:return p3;case 35664:return u3;case 35665:return y3;case 35666:return f3;case 35674:return G3;case 35675:return M3;case 35676:return k3;case 5124:case 35670:return U3;case 35667:case 35671:return N3;case 35668:case 35672:return R3;case 35669:case 35673:return F3;case 5125:return m3;case 36294:return K3;case 36295:return J3;case 36296:return q3;case 35678:case 36198:case 36298:case 36306:case 35682:return L3;case 35679:case 36299:case 36307:return Y3;case 35680:case 36300:case 36308:case 36293:return H3;case 36289:case 36303:case 36311:case 36292:return x3}}class b3{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=w3(I.type)}}class _3{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=T3(I.type)}}class v3{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const i=this.seq;for(let C=0,t=i.length;C!==t;++C){const B=i[C];B.setValue(A,I[B.id],g)}}}const Bl=/(\w+)(\])?(\[|\.)?/g;function My(e,A){e.seq.push(A),e.map[A.id]=A}function O3(e,A,I){const g=e.name,i=g.length;for(Bl.lastIndex=0;;){const C=Bl.exec(g),t=Bl.lastIndex;let B=C[1];const o=C[2]==="]",Q=C[3];if(o&&(B=B|0),Q===void 0||Q==="["&&t+2===i){My(I,Q===void 0?new b3(B,e,A):new _3(B,e,A));break}else{let E=I.map[B];E===void 0&&(E=new v3(B),My(I,E)),I=E}}}class Sr{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let i=0;i<g;++i){const C=A.getActiveUniform(I,i),t=A.getUniformLocation(I,C.name);O3(C,t,this)}}setValue(A,I,g,i){const C=this.map[I];C!==void 0&&C.setValue(A,g,i)}setOptional(A,I,g){const i=I[g];i!==void 0&&this.setValue(A,g,i)}static upload(A,I,g,i){for(let C=0,t=I.length;C!==t;++C){const B=I[C],o=g[B.id];o.needsUpdate!==!1&&B.setValue(A,o.value,i)}}static seqWithValue(A,I){const g=[];for(let i=0,C=A.length;i!==C;++i){const t=A[i];t.id in I&&g.push(t)}return g}}function ky(e,A,I){const g=e.createShader(A);return e.shaderSource(g,I),e.compileShader(g),g}const P3=37297;let Z3=0;function W3(e,A){const I=e.split(`
`),g=[],i=Math.max(A-6,0),C=Math.min(A+6,I.length);for(let t=i;t<C;t++){const B=t+1;g.push(`${B===A?">":" "} ${B}: ${I[t]}`)}return g.join(`
`)}function V3(e){const A=jI.getPrimaries(jI.workingColorSpace),I=jI.getPrimaries(e);let g;switch(A===I?g="":A===fE&&I===yE?g="LinearDisplayP3ToLinearSRGB":A===yE&&I===fE&&(g="LinearSRGBToLinearDisplayP3"),e){case ei:case XE:return[g,"LinearTransferOETF"];case Sg:case dh:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[g,"LinearTransferOETF"]}}function Uy(e,A,I){const g=e.getShaderParameter(A,e.COMPILE_STATUS),i=e.getShaderInfoLog(A).trim();if(g&&i==="")return"";const C=/ERROR: 0:(\d+)/.exec(i);if(C){const t=parseInt(C[1]);return I.toUpperCase()+`

`+i+`

`+W3(e.getShaderSource(A),t)}else return i}function z3(e,A){const I=V3(A);return`vec4 ${e}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function j3(e,A){let I;switch(A){case cN:I="Linear";break;case lN:I="Reinhard";break;case DN:I="OptimizedCineon";break;case SN:I="ACESFilmic";break;case wN:I="AgX";break;case dN:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+e+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function X3(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sQ).join(`
`)}function $3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sQ).join(`
`)}function A1(e){const A=[];for(const I in e){const g=e[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function I1(e,A){const I={},g=e.getProgramParameter(A,e.ACTIVE_ATTRIBUTES);for(let i=0;i<g;i++){const C=e.getActiveAttrib(A,i),t=C.name;let B=1;C.type===e.FLOAT_MAT2&&(B=2),C.type===e.FLOAT_MAT3&&(B=3),C.type===e.FLOAT_MAT4&&(B=4),I[t]={type:C.type,location:e.getAttribLocation(A,t),locationSize:B}}return I}function sQ(e){return e!==""}function Ny(e,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function Ry(e,A){return e.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const g1=/^[ \t]*#include +<([\w\d./]+)>/gm;function aS(e){return e.replace(g1,C1)}const i1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function C1(e,A){let I=uI[A];if(I===void 0){const g=i1.get(A);if(g!==void 0)I=uI[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return aS(I)}const e1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fy(e){return e.replace(e1,t1)}function t1(e,A,I,g){let i="";for(let C=parseInt(A);C<parseInt(I);C++)i+=g.replace(/\[\s*i\s*\]/g,"[ "+C+" ]").replace(/UNROLLED_LOOP_INDEX/g,C);return i}function my(e){let A="precision "+e.precision+` float;
precision `+e.precision+" int;";return e.precision==="highp"?A+=`
#define HIGH_PRECISION`:e.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function B1(e){let A="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Pd?A="SHADOWMAP_TYPE_PCF":e.shadowMapType===vU?A="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ie&&(A="SHADOWMAP_TYPE_VSM"),A}function o1(e){let A="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Pe:case mt:A="ENVMAP_TYPE_CUBE";break;case vQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function Q1(e){let A="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case mt:A="ENVMAP_MODE_REFRACTION";break}return A}function n1(e){let A="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case jE:A="ENVMAP_BLENDING_MULTIPLY";break;case rN:A="ENVMAP_BLENDING_MIX";break;case hN:A="ENVMAP_BLENDING_ADD";break}return A}function E1(e){const A=e.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function s1(e,A,I,g){const i=e.getContext(),C=I.defines;let t=I.vertexShader,B=I.fragmentShader;const o=B1(I),Q=o1(I),n=Q1(I),E=n1(I),s=E1(I),a=I.isWebGL2?"":X3(I),r=$3(I),l=A1(C),c=i.createProgram();let h,S,D=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,l].filter(sQ).join(`
`),h.length>0&&(h+=`
`),S=[a,"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,l].filter(sQ).join(`
`),S.length>0&&(S+=`
`)):(h=[my(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,l,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+n:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sQ).join(`
`),S=[a,my(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,l,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+Q:"",I.envMap?"#define "+n:"",I.envMap?"#define "+E:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==He?"#define TONE_MAPPING":"",I.toneMapping!==He?uI.tonemapping_pars_fragment:"",I.toneMapping!==He?j3("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",uI.colorspace_pars_fragment,z3("linearToOutputTexel",I.outputColorSpace),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(sQ).join(`
`)),t=aS(t),t=Ny(t,I),t=Ry(t,I),B=aS(B),B=Ny(B,I),B=Ry(B,I),t=Fy(t),B=Fy(B),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,h=[r,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,S=["precision mediump sampler2DArray;","#define varying in",I.glslVersion===nS?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===nS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const d=D+h+t,f=D+S+B,u=ky(i,i.VERTEX_SHADER,d),y=ky(i,i.FRAGMENT_SHADER,f);i.attachShader(c,u),i.attachShader(c,y),I.index0AttributeName!==void 0?i.bindAttribLocation(c,0,I.index0AttributeName):I.morphTargets===!0&&i.bindAttribLocation(c,0,"position"),i.linkProgram(c);function M(T){if(e.debug.checkShaderErrors){const J=i.getProgramInfoLog(c).trim(),m=i.getShaderInfoLog(u).trim(),b=i.getShaderInfoLog(y).trim();let O=!0,z=!0;if(i.getProgramParameter(c,i.LINK_STATUS)===!1)if(O=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(i,c,u,y);else{const V=Uy(i,u,"vertex"),AA=Uy(i,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(c,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+V+`
`+AA)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(m===""||b==="")&&(z=!1);z&&(T.diagnostics={runnable:O,programLog:J,vertexShader:{log:m,prefix:h},fragmentShader:{log:b,prefix:S}})}i.deleteShader(u),i.deleteShader(y),w=new Sr(i,c),p=I1(i,c)}let w;this.getUniforms=function(){return w===void 0&&M(this),w};let p;this.getAttributes=function(){return p===void 0&&M(this),p};let F=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=i.getProgramParameter(c,P3)),F},this.destroy=function(){g.releaseStatesOfProgram(this),i.deleteProgram(c),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=Z3++,this.cacheKey=A,this.usedTimes=1,this.program=c,this.vertexShader=u,this.fragmentShader=y,this}let a1=0;class r1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,i=this._getShaderStage(I),C=this._getShaderStage(g),t=this._getShaderCacheForMaterial(A);return t.has(i)===!1&&(t.add(i),i.usedTimes++),t.has(C)===!1&&(t.add(C),C.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new h1(A),I.set(A,g)),g}}class h1{constructor(A){this.id=a1++,this.code=A,this.usedTimes=0}}function c1(e,A,I,g,i,C,t){const B=new ph,o=new r1,Q=[],n=i.isWebGL2,E=i.logarithmicDepthBuffer,s=i.vertexTextures;let a=i.precision;const r={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function l(w){return w===0?"uv":`uv${w}`}function c(w,p,F,T,J){const m=T.fog,b=J.geometry,O=w.isMeshStandardMaterial?T.environment:null,z=(w.isMeshStandardMaterial?I:A).get(w.envMap||O),V=z&&z.mapping===vQ?z.image.height:null,AA=r[w.type];w.precision!==null&&(a=i.getMaxPrecision(w.precision),a!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",a,"instead."));const oA=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,aA=oA!==void 0?oA.length:0;let GA=0;b.morphAttributes.position!==void 0&&(GA=1),b.morphAttributes.normal!==void 0&&(GA=2),b.morphAttributes.color!==void 0&&(GA=3);let rA,X,lA,yA;if(AA){const Eg=Ti[AA];rA=Eg.vertexShader,X=Eg.fragmentShader}else rA=w.vertexShader,X=w.fragmentShader,o.update(w),lA=o.getVertexShaderID(w),yA=o.getFragmentShaderID(w);const SA=e.getRenderTarget(),JA=J.isInstancedMesh===!0,ZA=J.isBatchedMesh===!0,FA=!!w.map,IA=!!w.matcap,q=!!z,tA=!!w.aoMap,iA=!!w.lightMap,EA=!!w.bumpMap,gA=!!w.normalMap,K=!!w.displacementMap,R=!!w.emissiveMap,N=!!w.metalnessMap,k=!!w.roughnessMap,P=w.anisotropy>0,CA=w.clearcoat>0,DA=w.iridescence>0,eA=w.sheen>0,MA=w.transmission>0,wA=P&&!!w.anisotropyMap,dA=CA&&!!w.clearcoatMap,kA=CA&&!!w.clearcoatNormalMap,_A=CA&&!!w.clearcoatRoughnessMap,hA=DA&&!!w.iridescenceMap,LA=DA&&!!w.iridescenceThicknessMap,II=eA&&!!w.sheenColorMap,jA=eA&&!!w.sheenRoughnessMap,VA=!!w.specularMap,qA=!!w.specularColorMap,eI=!!w.specularIntensityMap,vA=MA&&!!w.transmissionMap,Z=MA&&!!w.thicknessMap,fA=!!w.gradientMap,cA=!!w.alphaMap,W=w.alphaTest>0,pA=!!w.alphaHash,mA=!!w.extensions,gI=!!b.attributes.uv1,AI=!!b.attributes.uv2,SI=!!b.attributes.uv3;let sI=He;return w.toneMapped&&(SA===null||SA.isXRRenderTarget===!0)&&(sI=e.toneMapping),{isWebGL2:n,shaderID:AA,shaderType:w.type,shaderName:w.name,vertexShader:rA,fragmentShader:X,defines:w.defines,customVertexShaderID:lA,customFragmentShaderID:yA,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:a,batching:ZA,instancing:JA,instancingColor:JA&&J.instanceColor!==null,supportsVertexTextures:s,outputColorSpace:SA===null?e.outputColorSpace:SA.isXRRenderTarget===!0?SA.texture.colorSpace:ei,map:FA,matcap:IA,envMap:q,envMapMode:q&&z.mapping,envMapCubeUVHeight:V,aoMap:tA,lightMap:iA,bumpMap:EA,normalMap:gA,displacementMap:s&&K,emissiveMap:R,normalMapObjectSpace:gA&&w.normalMapType===LN,normalMapTangentSpace:gA&&w.normalMapType===Ht,metalnessMap:N,roughnessMap:k,anisotropy:P,anisotropyMap:wA,clearcoat:CA,clearcoatMap:dA,clearcoatNormalMap:kA,clearcoatRoughnessMap:_A,iridescence:DA,iridescenceMap:hA,iridescenceThicknessMap:LA,sheen:eA,sheenColorMap:II,sheenRoughnessMap:jA,specularMap:VA,specularColorMap:qA,specularIntensityMap:eI,transmission:MA,transmissionMap:vA,thicknessMap:Z,gradientMap:fA,opaque:w.transparent===!1&&w.blending===LB,alphaMap:cA,alphaTest:W,alphaHash:pA,combine:w.combine,mapUv:FA&&l(w.map.channel),aoMapUv:tA&&l(w.aoMap.channel),lightMapUv:iA&&l(w.lightMap.channel),bumpMapUv:EA&&l(w.bumpMap.channel),normalMapUv:gA&&l(w.normalMap.channel),displacementMapUv:K&&l(w.displacementMap.channel),emissiveMapUv:R&&l(w.emissiveMap.channel),metalnessMapUv:N&&l(w.metalnessMap.channel),roughnessMapUv:k&&l(w.roughnessMap.channel),anisotropyMapUv:wA&&l(w.anisotropyMap.channel),clearcoatMapUv:dA&&l(w.clearcoatMap.channel),clearcoatNormalMapUv:kA&&l(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_A&&l(w.clearcoatRoughnessMap.channel),iridescenceMapUv:hA&&l(w.iridescenceMap.channel),iridescenceThicknessMapUv:LA&&l(w.iridescenceThicknessMap.channel),sheenColorMapUv:II&&l(w.sheenColorMap.channel),sheenRoughnessMapUv:jA&&l(w.sheenRoughnessMap.channel),specularMapUv:VA&&l(w.specularMap.channel),specularColorMapUv:qA&&l(w.specularColorMap.channel),specularIntensityMapUv:eI&&l(w.specularIntensityMap.channel),transmissionMapUv:vA&&l(w.transmissionMap.channel),thicknessMapUv:Z&&l(w.thicknessMap.channel),alphaMapUv:cA&&l(w.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(gA||P),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:gI,vertexUv2s:AI,vertexUv3s:SI,pointsUvs:J.isPoints===!0&&!!b.attributes.uv&&(FA||cA),fog:!!m,useFog:w.fog===!0,fogExp2:m&&m.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:E,skinning:J.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:aA,morphTextureStride:GA,numDirLights:p.directional.length,numPointLights:p.point.length,numSpotLights:p.spot.length,numSpotLightMaps:p.spotLightMap.length,numRectAreaLights:p.rectArea.length,numHemiLights:p.hemi.length,numDirLightShadows:p.directionalShadowMap.length,numPointLightShadows:p.pointShadowMap.length,numSpotLightShadows:p.spotShadowMap.length,numSpotLightShadowsWithMaps:p.numSpotLightShadowsWithMaps,numLightProbes:p.numLightProbes,numClippingPlanes:t.numPlanes,numClipIntersection:t.numIntersection,dithering:w.dithering,shadowMapEnabled:e.shadowMap.enabled&&F.length>0,shadowMapType:e.shadowMap.type,toneMapping:sI,useLegacyLights:e._useLegacyLights,decodeVideoTexture:FA&&w.map.isVideoTexture===!0&&jI.getTransfer(w.map.colorSpace)===ag,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===SC,flipSided:w.side===Oi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:mA&&w.extensions.derivatives===!0,extensionFragDepth:mA&&w.extensions.fragDepth===!0,extensionDrawBuffers:mA&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:mA&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mA&&w.extensions.clipCullDistance&&g.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:n||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:n||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:n||g.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function h(w){const p=[];if(w.shaderID?p.push(w.shaderID):(p.push(w.customVertexShaderID),p.push(w.customFragmentShaderID)),w.defines!==void 0)for(const F in w.defines)p.push(F),p.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(S(p,w),D(p,w),p.push(e.outputColorSpace)),p.push(w.customProgramCacheKey),p.join()}function S(w,p){w.push(p.precision),w.push(p.outputColorSpace),w.push(p.envMapMode),w.push(p.envMapCubeUVHeight),w.push(p.mapUv),w.push(p.alphaMapUv),w.push(p.lightMapUv),w.push(p.aoMapUv),w.push(p.bumpMapUv),w.push(p.normalMapUv),w.push(p.displacementMapUv),w.push(p.emissiveMapUv),w.push(p.metalnessMapUv),w.push(p.roughnessMapUv),w.push(p.anisotropyMapUv),w.push(p.clearcoatMapUv),w.push(p.clearcoatNormalMapUv),w.push(p.clearcoatRoughnessMapUv),w.push(p.iridescenceMapUv),w.push(p.iridescenceThicknessMapUv),w.push(p.sheenColorMapUv),w.push(p.sheenRoughnessMapUv),w.push(p.specularMapUv),w.push(p.specularColorMapUv),w.push(p.specularIntensityMapUv),w.push(p.transmissionMapUv),w.push(p.thicknessMapUv),w.push(p.combine),w.push(p.fogExp2),w.push(p.sizeAttenuation),w.push(p.morphTargetsCount),w.push(p.morphAttributeCount),w.push(p.numDirLights),w.push(p.numPointLights),w.push(p.numSpotLights),w.push(p.numSpotLightMaps),w.push(p.numHemiLights),w.push(p.numRectAreaLights),w.push(p.numDirLightShadows),w.push(p.numPointLightShadows),w.push(p.numSpotLightShadows),w.push(p.numSpotLightShadowsWithMaps),w.push(p.numLightProbes),w.push(p.shadowMapType),w.push(p.toneMapping),w.push(p.numClippingPlanes),w.push(p.numClipIntersection),w.push(p.depthPacking)}function D(w,p){B.disableAll(),p.isWebGL2&&B.enable(0),p.supportsVertexTextures&&B.enable(1),p.instancing&&B.enable(2),p.instancingColor&&B.enable(3),p.matcap&&B.enable(4),p.envMap&&B.enable(5),p.normalMapObjectSpace&&B.enable(6),p.normalMapTangentSpace&&B.enable(7),p.clearcoat&&B.enable(8),p.iridescence&&B.enable(9),p.alphaTest&&B.enable(10),p.vertexColors&&B.enable(11),p.vertexAlphas&&B.enable(12),p.vertexUv1s&&B.enable(13),p.vertexUv2s&&B.enable(14),p.vertexUv3s&&B.enable(15),p.vertexTangents&&B.enable(16),p.anisotropy&&B.enable(17),p.alphaHash&&B.enable(18),p.batching&&B.enable(19),w.push(B.mask),B.disableAll(),p.fog&&B.enable(0),p.useFog&&B.enable(1),p.flatShading&&B.enable(2),p.logarithmicDepthBuffer&&B.enable(3),p.skinning&&B.enable(4),p.morphTargets&&B.enable(5),p.morphNormals&&B.enable(6),p.morphColors&&B.enable(7),p.premultipliedAlpha&&B.enable(8),p.shadowMapEnabled&&B.enable(9),p.useLegacyLights&&B.enable(10),p.doubleSided&&B.enable(11),p.flipSided&&B.enable(12),p.useDepthPacking&&B.enable(13),p.dithering&&B.enable(14),p.transmission&&B.enable(15),p.sheen&&B.enable(16),p.opaque&&B.enable(17),p.pointsUvs&&B.enable(18),p.decodeVideoTexture&&B.enable(19),w.push(B.mask)}function d(w){const p=r[w.type];let F;if(p){const T=Ti[p];F=uh.clone(T.uniforms)}else F=w.uniforms;return F}function f(w,p){let F;for(let T=0,J=Q.length;T<J;T++){const m=Q[T];if(m.cacheKey===p){F=m,++F.usedTimes;break}}return F===void 0&&(F=new s1(e,p,w,C),Q.push(F)),F}function u(w){if(--w.usedTimes===0){const p=Q.indexOf(w);Q[p]=Q[Q.length-1],Q.pop(),w.destroy()}}function y(w){o.remove(w)}function M(){o.dispose()}return{getParameters:c,getProgramCacheKey:h,getUniforms:d,acquireProgram:f,releaseProgram:u,releaseShaderCache:y,programs:Q,dispose:M}}function l1(){let e=new WeakMap;function A(C){let t=e.get(C);return t===void 0&&(t={},e.set(C,t)),t}function I(C){e.delete(C)}function g(C,t,B){e.get(C)[t]=B}function i(){e=new WeakMap}return{get:A,remove:I,update:g,dispose:i}}function D1(e,A){return e.groupOrder!==A.groupOrder?e.groupOrder-A.groupOrder:e.renderOrder!==A.renderOrder?e.renderOrder-A.renderOrder:e.material.id!==A.material.id?e.material.id-A.material.id:e.z!==A.z?e.z-A.z:e.id-A.id}function Ky(e,A){return e.groupOrder!==A.groupOrder?e.groupOrder-A.groupOrder:e.renderOrder!==A.renderOrder?e.renderOrder-A.renderOrder:e.z!==A.z?A.z-e.z:e.id-A.id}function Jy(){const e=[];let A=0;const I=[],g=[],i=[];function C(){A=0,I.length=0,g.length=0,i.length=0}function t(E,s,a,r,l,c){let h=e[A];return h===void 0?(h={id:E.id,object:E,geometry:s,material:a,groupOrder:r,renderOrder:E.renderOrder,z:l,group:c},e[A]=h):(h.id=E.id,h.object=E,h.geometry=s,h.material=a,h.groupOrder=r,h.renderOrder=E.renderOrder,h.z=l,h.group=c),A++,h}function B(E,s,a,r,l,c){const h=t(E,s,a,r,l,c);a.transmission>0?g.push(h):a.transparent===!0?i.push(h):I.push(h)}function o(E,s,a,r,l,c){const h=t(E,s,a,r,l,c);a.transmission>0?g.unshift(h):a.transparent===!0?i.unshift(h):I.unshift(h)}function Q(E,s){I.length>1&&I.sort(E||D1),g.length>1&&g.sort(s||Ky),i.length>1&&i.sort(s||Ky)}function n(){for(let E=A,s=e.length;E<s;E++){const a=e[E];if(a.id===null)break;a.id=null,a.object=null,a.geometry=null,a.material=null,a.group=null}}return{opaque:I,transmissive:g,transparent:i,init:C,push:B,unshift:o,finish:n,sort:Q}}function S1(){let e=new WeakMap;function A(g,i){const C=e.get(g);let t;return C===void 0?(t=new Jy,e.set(g,[t])):i>=C.length?(t=new Jy,C.push(t)):t=C[i],t}function I(){e=new WeakMap}return{get:A,dispose:I}}function d1(){const e={};return{get:function(A){if(e[A.id]!==void 0)return e[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new x,color:new $A};break;case"SpotLight":I={position:new x,direction:new x,color:new $A,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new x,color:new $A,distance:0,decay:0};break;case"HemisphereLight":I={direction:new x,skyColor:new $A,groundColor:new $A};break;case"RectAreaLight":I={color:new $A,position:new x,halfWidth:new x,halfHeight:new x};break}return e[A.id]=I,I}}}function w1(){const e={};return{get:function(A){if(e[A.id]!==void 0)return e[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new UA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new UA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new UA,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[A.id]=I,I}}}let p1=0;function u1(e,A){return(A.castShadow?2:0)-(e.castShadow?2:0)+(A.map?1:0)-(e.map?1:0)}function y1(e,A){const I=new d1,g=w1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let n=0;n<9;n++)i.probe.push(new x);const C=new x,t=new EI,B=new EI;function o(n,E){let s=0,a=0,r=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let l=0,c=0,h=0,S=0,D=0,d=0,f=0,u=0,y=0,M=0,w=0;n.sort(u1);const p=E===!0?Math.PI:1;for(let T=0,J=n.length;T<J;T++){const m=n[T],b=m.color,O=m.intensity,z=m.distance,V=m.shadow&&m.shadow.map?m.shadow.map.texture:null;if(m.isAmbientLight)s+=b.r*O*p,a+=b.g*O*p,r+=b.b*O*p;else if(m.isLightProbe){for(let AA=0;AA<9;AA++)i.probe[AA].addScaledVector(m.sh.coefficients[AA],O);w++}else if(m.isDirectionalLight){const AA=I.get(m);if(AA.color.copy(m.color).multiplyScalar(m.intensity*p),m.castShadow){const oA=m.shadow,aA=g.get(m);aA.shadowBias=oA.bias,aA.shadowNormalBias=oA.normalBias,aA.shadowRadius=oA.radius,aA.shadowMapSize=oA.mapSize,i.directionalShadow[l]=aA,i.directionalShadowMap[l]=V,i.directionalShadowMatrix[l]=m.shadow.matrix,d++}i.directional[l]=AA,l++}else if(m.isSpotLight){const AA=I.get(m);AA.position.setFromMatrixPosition(m.matrixWorld),AA.color.copy(b).multiplyScalar(O*p),AA.distance=z,AA.coneCos=Math.cos(m.angle),AA.penumbraCos=Math.cos(m.angle*(1-m.penumbra)),AA.decay=m.decay,i.spot[h]=AA;const oA=m.shadow;if(m.map&&(i.spotLightMap[y]=m.map,y++,oA.updateMatrices(m),m.castShadow&&M++),i.spotLightMatrix[h]=oA.matrix,m.castShadow){const aA=g.get(m);aA.shadowBias=oA.bias,aA.shadowNormalBias=oA.normalBias,aA.shadowRadius=oA.radius,aA.shadowMapSize=oA.mapSize,i.spotShadow[h]=aA,i.spotShadowMap[h]=V,u++}h++}else if(m.isRectAreaLight){const AA=I.get(m);AA.color.copy(b).multiplyScalar(O),AA.halfWidth.set(m.width*.5,0,0),AA.halfHeight.set(0,m.height*.5,0),i.rectArea[S]=AA,S++}else if(m.isPointLight){const AA=I.get(m);if(AA.color.copy(m.color).multiplyScalar(m.intensity*p),AA.distance=m.distance,AA.decay=m.decay,m.castShadow){const oA=m.shadow,aA=g.get(m);aA.shadowBias=oA.bias,aA.shadowNormalBias=oA.normalBias,aA.shadowRadius=oA.radius,aA.shadowMapSize=oA.mapSize,aA.shadowCameraNear=oA.camera.near,aA.shadowCameraFar=oA.camera.far,i.pointShadow[c]=aA,i.pointShadowMap[c]=V,i.pointShadowMatrix[c]=m.shadow.matrix,f++}i.point[c]=AA,c++}else if(m.isHemisphereLight){const AA=I.get(m);AA.skyColor.copy(m.color).multiplyScalar(O*p),AA.groundColor.copy(m.groundColor).multiplyScalar(O*p),i.hemi[D]=AA,D++}}S>0&&(A.isWebGL2?e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=PA.LTC_FLOAT_1,i.rectAreaLTC2=PA.LTC_FLOAT_2):(i.rectAreaLTC1=PA.LTC_HALF_1,i.rectAreaLTC2=PA.LTC_HALF_2):e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=PA.LTC_FLOAT_1,i.rectAreaLTC2=PA.LTC_FLOAT_2):e.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=PA.LTC_HALF_1,i.rectAreaLTC2=PA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=s,i.ambient[1]=a,i.ambient[2]=r;const F=i.hash;(F.directionalLength!==l||F.pointLength!==c||F.spotLength!==h||F.rectAreaLength!==S||F.hemiLength!==D||F.numDirectionalShadows!==d||F.numPointShadows!==f||F.numSpotShadows!==u||F.numSpotMaps!==y||F.numLightProbes!==w)&&(i.directional.length=l,i.spot.length=h,i.rectArea.length=S,i.point.length=c,i.hemi.length=D,i.directionalShadow.length=d,i.directionalShadowMap.length=d,i.pointShadow.length=f,i.pointShadowMap.length=f,i.spotShadow.length=u,i.spotShadowMap.length=u,i.directionalShadowMatrix.length=d,i.pointShadowMatrix.length=f,i.spotLightMatrix.length=u+y-M,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=w,F.directionalLength=l,F.pointLength=c,F.spotLength=h,F.rectAreaLength=S,F.hemiLength=D,F.numDirectionalShadows=d,F.numPointShadows=f,F.numSpotShadows=u,F.numSpotMaps=y,F.numLightProbes=w,i.version=p1++)}function Q(n,E){let s=0,a=0,r=0,l=0,c=0;const h=E.matrixWorldInverse;for(let S=0,D=n.length;S<D;S++){const d=n[S];if(d.isDirectionalLight){const f=i.directional[s];f.direction.setFromMatrixPosition(d.matrixWorld),C.setFromMatrixPosition(d.target.matrixWorld),f.direction.sub(C),f.direction.transformDirection(h),s++}else if(d.isSpotLight){const f=i.spot[r];f.position.setFromMatrixPosition(d.matrixWorld),f.position.applyMatrix4(h),f.direction.setFromMatrixPosition(d.matrixWorld),C.setFromMatrixPosition(d.target.matrixWorld),f.direction.sub(C),f.direction.transformDirection(h),r++}else if(d.isRectAreaLight){const f=i.rectArea[l];f.position.setFromMatrixPosition(d.matrixWorld),f.position.applyMatrix4(h),B.identity(),t.copy(d.matrixWorld),t.premultiply(h),B.extractRotation(t),f.halfWidth.set(d.width*.5,0,0),f.halfHeight.set(0,d.height*.5,0),f.halfWidth.applyMatrix4(B),f.halfHeight.applyMatrix4(B),l++}else if(d.isPointLight){const f=i.point[a];f.position.setFromMatrixPosition(d.matrixWorld),f.position.applyMatrix4(h),a++}else if(d.isHemisphereLight){const f=i.hemi[c];f.direction.setFromMatrixPosition(d.matrixWorld),f.direction.transformDirection(h),c++}}}return{setup:o,setupView:Q,state:i}}function qy(e,A){const I=new y1(e,A),g=[],i=[];function C(){g.length=0,i.length=0}function t(E){g.push(E)}function B(E){i.push(E)}function o(E){I.setup(g,E)}function Q(E){I.setupView(g,E)}return{init:C,state:{lightsArray:g,shadowsArray:i,lights:I},setupLights:o,setupLightsView:Q,pushLight:t,pushShadow:B}}function f1(e,A){let I=new WeakMap;function g(C,t=0){const B=I.get(C);let o;return B===void 0?(o=new qy(e,A),I.set(C,[o])):t>=B.length?(o=new qy(e,A),B.push(o)):o=B[t],o}function i(){I=new WeakMap}return{get:g,dispose:i}}class sw extends gi{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JN,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class aw extends gi{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const G1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
      position: absolute;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 20px;
      border: 1px solid white;
      background: rgba(0, 0, 0, 0.1);
      color: white;
      outline: none;
      z-index: 10;
      ${C.style??""}
    `,C)},[o,g,B,a,C,Q,n,E,r]}class pZ extends bI{constructor(A){super(),_I(this,A,wZ,dZ,TI,{mode:0,sessionInit:5,force:6,styled:7})}}function uZ(e){let A,I;const g=[{sessionInit:{optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]}},e[0],{mode:"immersive-vr"}];let i={};for(let C=0;C<g.length;C+=1)i=mi(i,g[C]);return A=new pZ({props:i}),A.$on("click",e[1]),A.$on("error",e[2]),{c(){YA(A.$$.fragment)},l(C){HA(A.$$.fragment,C)},m(C,t){xA(A,C,t),I=!0},p(C,[t]){const B=t&1?Tr(g,[g[0],US(C[0]),g[2]]):{};A.$set(B)},i(C){I||(BA(A.$$.fragment,C),I=!0)},o(C){sA(A.$$.fragment,C),I=!1},d(C){TA(A,C)}}}function yZ(e,A,I){const g=[];let i=uC(A,g);function C(B){Pw.call(this,e,B)}function t(B){Pw.call(this,e,B)}return e.$$set=B=>{A=mi(mi({},A),Ut(B)),I(0,i=uC(A,g))},[i,C,t]}class fZ extends bI{constructor(A){super(),_I(this,A,yZ,uZ,TI,{})}}const Lf=new Ai,ja=new x;class tF extends mw{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const A=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],I=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],g=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(g),this.setAttribute("position",new oI(A,3)),this.setAttribute("uv",new oI(I,2))}applyMatrix4(A){const I=this.attributes.instanceStart,g=this.attributes.instanceEnd;return I!==void 0&&(I.applyMatrix4(A),g.applyMatrix4(A),I.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(A){let I;A instanceof Float32Array?I=A:Array.isArray(A)&&(I=new Float32Array(A));const g=new Lr(I,6,1);return this.setAttribute("instanceStart",new AC(g,3,0)),this.setAttribute("instanceEnd",new AC(g,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(A){let I;A instanceof Float32Array?I=A:Array.isArray(A)&&(I=new Float32Array(A));const g=new Lr(I,6,1);return this.setAttribute("instanceColorStart",new AC(g,3,0)),this.setAttribute("instanceColorEnd",new AC(g,3,3)),this}fromWireframeGeometry(A){return this.setPositions(A.attributes.position.array),this}fromEdgesGeometry(A){return this.setPositions(A.attributes.position.array),this}fromMesh(A){return this.fromWireframeGeometry(new uw(A.geometry)),this}fromLineSegments(A){const I=A.geometry;return this.setPositions(I.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const A=this.attributes.instanceStart,I=this.attributes.instanceEnd;A!==void 0&&I!==void 0&&(this.boundingBox.setFromBufferAttribute(A),Lf.setFromBufferAttribute(I),this.boundingBox.union(Lf))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ii),this.boundingBox===null&&this.computeBoundingBox();const A=this.attributes.instanceStart,I=this.attributes.instanceEnd;if(A!==void 0&&I!==void 0){const g=this.boundingSphere.center;this.boundingBox.getCenter(g);let i=0;for(let C=0,t=A.count;C<t;C++)ja.fromBufferAttribute(A,C),i=Math.max(i,g.distanceToSquared(ja)),ja.fromBufferAttribute(I,C),i=Math.max(i,g.distanceToSquared(ja));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(A){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(A)}}PA.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new UA(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Ti.line={uniforms:uh.merge([PA.common,PA.fog,PA.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
    uniform mat4 projectionMatrix;
    uniform mat4 modelViewMatrix;
    attribute vec2 uv;
    attribute vec3 position;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,B=`
    precision mediump float;
    uniform float thickness;
    uniform vec3 color;
    varying vec2 vUv;
    void main() {
      float radius = 0.1;
      float dist = length(vUv - vec2(0.5));
      float alpha = 1.0 - step(thickness, abs(distance(vUv, vec2(0.5)) - 0.25));
      gl_FragColor = vec4(color, alpha);
    }
          uniform mat4 modelViewMatrix;
          uniform mat4 projectionMatrix;
          attribute vec2 uv;
          attribute vec3 position;
          varying vec2 vUv;
          void main() {
            vUv = uv;
          }
        `,fragmentShader:`

//
