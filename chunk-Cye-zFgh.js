import{C as u,E as y,S as t,T as x,_ as k,a as C,b as r,c as R,d as Z,f as a,g,h as f,i as A,m as e,n as m,p as d,s as E,t as l,v as n,w,y as o}from"./main-LGTBZY5J.js";var Ip={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};var Pp={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var wf=0;var Gc=1;var Rf=2;var fo=1;var Cf=2;var sr=3;var ri=0;var jt=1;var pn=2;var ds=0;var rr=1;var or=2;var Vc=3;var Wc=4;var If=5;var ps=100;var Pf=101;var Lf=102;var Df=103;var Nf=104;var Uf=200;var Of=201;var Ff=202;var Bf=203;var Xc=204;var qc=205;var zf=206;var kf=207;var Hf=208;var Gf=209;var Vf=210;var Wf=211;var Xf=212;var qf=213;var Yf=214;var ca=0;var ha=1;var ua=2;var ks=3;var fa=4;var da=5;var pa=6;var ma=7;var Fa=0;var Kf=1;var Zf=2;var oi=0;var Yc=1;var Kc=2;var Zc=3;var Jc=4;var $c=5;var jc=6;var Qc=7;var _c=`attached`;var Jf=`detached`;var eh=300;var ms=301;var ar=302;var Ba=303;var za=304;var Un=1e3;var Dn=1001;var Hs=1002;var St=1003;var ka=1004;var gs=1005;var zt=1006;var lr=1007;var zn=1008;var vn=1009;var th=1010;var nh=1011;var cr=1012;var Ha=1013;var Zn=1014;var Cn=1015;var Jn=1016;var Ga=1017;var Va=1018;var _s=1020;var ih=35902;var sh=35899;var rh=1021;var oh=1022;var kn=1023;var xi=1026;var Ri=1027;var Wa=1028;var Xa=1029;var Xi=1030;var qa=1031;var Ya=1033;var po=33776;var mo=33777;var go=33778;var _o=33779;var Ka=35840;var Za=35841;var Ja=35842;var $a=35843;var ja=36196;var Qa=37492;var el=37496;var tl=37488;var nl=37489;var xo=37490;var il=37491;var sl=37808;var rl=37809;var ol=37810;var al=37811;var ll=37812;var cl=37813;var hl=37814;var ul=37815;var fl=37816;var dl=37817;var pl=37818;var ml=37819;var gl=37820;var _l=37821;var xl=36492;var yl=36494;var vl=36495;var Ml=36283;var Sl=36284;var yo=36285;var bl=36286;var is=2300;var ss=2301;var aa=2302;var xc=2303;var yc=2400;var vc=2401;var Mc=2402;var $f=2500;var ah=0;var vo=1;var hr=2;var jf=3200;var Lp=3201;var ur=0;var Qf=1;var Ci=``;var xt=`srgb`;var Jt=`srgb-linear`;var Pr=`linear`;var ct=`srgb`;var la=7680;var ed=519;var td=512;var nd=513;var id=514;var lh=515;var sd=516;var rd=517;var ch=518;var hh=519;var uh=35044;var fh=`300 es`;var Nn=2e3;var Gs=2001;function Dp(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Np(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Vs(s){return document.createElementNS(`http://www.w3.org/1999/xhtml`,s)}function od(){let s=Vs(`canvas`);return s.style.display=`block`,s}var Lu={};var Ws=null;function Lr(...s){let e=`THREE.`+s.shift();Ws?Ws(`log`,e,...s):console.log(e,...s)}function ad(s){let e=s[0];if(typeof e==`string`&&e.startsWith(`TSL:`)){let t=s[1];t&&t.isStackTrace?s[0]+=` `+t.getLocation():s[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return s}function Ce(...s){s=ad(s);let e=`THREE.`+s.shift();if(Ws)Ws(`warn`,e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Be(...s){s=ad(s);let e=`THREE.`+s.shift();if(Ws)Ws(`error`,e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ns(...s){let e=s.join(` `);e in Lu||(Lu[e]=!0,Ce(...s))}function ld(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var cd={[ca]:ca,[ua]:pa,[fa]:fa,[ks]:da,[ha]:ha,[pa]:ua,[ma]:ma,[da]:ks};var Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}};var nn=[`00`,`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`0a`,`0b`,`0c`,`0d`,`0e`,`0f`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`1a`,`1b`,`1c`,`1d`,`1e`,`1f`,`20`,`21`,`22`,`23`,`24`,`25`,`26`,`27`,`28`,`29`,`2a`,`2b`,`2c`,`2d`,`2e`,`2f`,`30`,`31`,`32`,`33`,`34`,`35`,`36`,`37`,`38`,`39`,`3a`,`3b`,`3c`,`3d`,`3e`,`3f`,`40`,`41`,`42`,`43`,`44`,`45`,`46`,`47`,`48`,`49`,`4a`,`4b`,`4c`,`4d`,`4e`,`4f`,`50`,`51`,`52`,`53`,`54`,`55`,`56`,`57`,`58`,`59`,`5a`,`5b`,`5c`,`5d`,`5e`,`5f`,`60`,`61`,`62`,`63`,`64`,`65`,`66`,`67`,`68`,`69`,`6a`,`6b`,`6c`,`6d`,`6e`,`6f`,`70`,`71`,`72`,`73`,`74`,`75`,`76`,`77`,`78`,`79`,`7a`,`7b`,`7c`,`7d`,`7e`,`7f`,`80`,`81`,`82`,`83`,`84`,`85`,`86`,`87`,`88`,`89`,`8a`,`8b`,`8c`,`8d`,`8e`,`8f`,`90`,`91`,`92`,`93`,`94`,`95`,`96`,`97`,`98`,`99`,`9a`,`9b`,`9c`,`9d`,`9e`,`9f`,`a0`,`a1`,`a2`,`a3`,`a4`,`a5`,`a6`,`a7`,`a8`,`a9`,`aa`,`ab`,`ac`,`ad`,`ae`,`af`,`b0`,`b1`,`b2`,`b3`,`b4`,`b5`,`b6`,`b7`,`b8`,`b9`,`ba`,`bb`,`bc`,`bd`,`be`,`bf`,`c0`,`c1`,`c2`,`c3`,`c4`,`c5`,`c6`,`c7`,`c8`,`c9`,`ca`,`cb`,`cc`,`cd`,`ce`,`cf`,`d0`,`d1`,`d2`,`d3`,`d4`,`d5`,`d6`,`d7`,`d8`,`d9`,`da`,`db`,`dc`,`dd`,`de`,`df`,`e0`,`e1`,`e2`,`e3`,`e4`,`e5`,`e6`,`e7`,`e8`,`e9`,`ea`,`eb`,`ec`,`ed`,`ee`,`ef`,`f0`,`f1`,`f2`,`f3`,`f4`,`f5`,`f6`,`f7`,`f8`,`f9`,`fa`,`fb`,`fc`,`fd`,`fe`,`ff`];var Du=1234567;var wr=Math.PI/180;var rs=180/Math.PI;function $n(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+`-`+nn[e&255]+nn[e>>8&255]+`-`+nn[e>>16&15|64]+nn[e>>24&255]+`-`+nn[t&63|128]+nn[t>>8&255]+`-`+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function $e(s,e,t){return Math.max(e,Math.min(t,s))}function dh(s,e){return(s%e+e)%e}function Up(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Op(s,e,t){return s!==e?(t-s)/(e-s):0}function Rr(s,e,t){return(1-t)*s+t*e}function Fp(s,e,t,n){return Rr(s,e,1-Math.exp(-t*n))}function Bp(s,e=1){return e-Math.abs(dh(s,e*2)-e)}function zp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function kp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Hp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Gp(s,e){return s+Math.random()*(e-s)}function Vp(s){return s*(.5-Math.random())}function Wp(s){s!==void 0&&(Du=s);let e=Du+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xp(s){return s*wr}function qp(s){return s*rs}function Yp(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Kp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ph(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zp(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(i){case`XYX`:s.set(a*h,l*u,l*f,a*c);break;case`YZY`:s.set(l*f,a*h,l*u,a*c);break;case`ZXZ`:s.set(l*u,l*f,a*h,a*c);break;case`XZX`:s.set(a*h,l*p,l*d,a*c);break;case`YXY`:s.set(l*d,a*h,l*p,a*c);break;case`ZYZ`:s.set(l*p,l*d,a*h,a*c);break;default:Ce(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function El(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function mh(s,e){if(e.constructor===Float32Array)return s;let t=El(e);if(t===void 0)throw new Error(`THREE.MathUtils: Invalid component type.`);return Math.max(s/t,-1)}function gh(s,e){if(e.constructor===Float32Array)return s;let t=El(e);if(t===void 0)throw new Error(`THREE.MathUtils: Invalid component type.`);return Math.round(s*t)}var Tl={DEG2RAD:wr,RAD2DEG:rs,generateUUID:$n,clamp:$e,euclideanModulo:dh,mapLinear:Up,inverseLerp:Op,lerp:Rr,damp:Fp,pingpong:Bp,smoothstep:zp,smootherstep:kp,randInt:Hp,randFloat:Gp,randFloatSpread:Vp,seededRandom:Wp,degToRad:Xp,radToDeg:qp,isPowerOfTwo:Yp,ceilPowerOfTwo:Kp,floorPowerOfTwo:ph,setQuaternionFromProperEuler:Zp,normalize:gh,denormalize:mh};var Me=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var Tn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);g=Math.sin(g*v)/b,a=Math.sin(a*v)/b,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(o){case`XYZ`:this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case`YXZ`:this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case`ZXY`:this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case`ZYX`:this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case`YZX`:this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case`XZY`:this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Ce(`Quaternion: .setFromEuler() encountered an unknown order: `+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var L=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};var Wl=new L;var Nu=new Tn;var He=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=i[0],m=i[3],g=i[6],v=i[1],b=i[4],y=i[7],T=i[2],A=i[5],_=i[8];return r[0]=o*x+a*v+l*T,r[3]=o*m+a*b+l*A,r[6]=o*g+a*y+l*_,r[1]=c*x+h*v+u*T,r[4]=c*m+h*b+u*A,r[7]=c*g+h*y+u*_,r[2]=f*x+d*v+p*T,r[5]=f*m+d*b+p*A,r[8]=f*g+d*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(a*n-i*o)*x,e[3]=f*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return ns(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return ns(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return ns(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};var Xl=new He;var Uu=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322);var Ou=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jp(){let s={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===`srgb`&&(i.r=_i(i.r),i.g=_i(i.g),i.b=_i(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===`srgb`&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===``?Pr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Jt]:{primaries:e,whitePoint:n,transfer:Pr,toXYZ:Uu,fromXYZ:Ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xt},outputColorSpaceConfig:{drawingBufferColorSpace:xt}},[xt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Uu,fromXYZ:Ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xt}}}),s}var Je=Jp();function _i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Es;var ga=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=Vs(`canvas`)),Es.width=e.width,Es.height=e.height;let i=Es.getContext(`2d`);e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Vs(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}};var $p=0;var Xs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ql(i[o].image)):r.push(ql(i[o]))}else r=ql(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ql(s){return typeof HTMLImageElement<`u`&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&s instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&s instanceof ImageBitmap?ga.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ce(`Texture: Unable to serialize Texture.`),{})}var jp=0;var Yl=new L;var kt=class s extends Kn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Dn,i=Dn,r=zt,o=zn,a=kn,l=vn,c=s.DEFAULT_ANISOTROPY,h=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=$n(),this.name=``,this.source=new Xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Un:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Un:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=eh;kt.DEFAULT_ANISOTROPY=1;var ut=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,y=(d+1)/2,T=(g+1)/2,A=(h+f)/4,_=(u+x)/4,E=(p+m)/4;return b>y&&b>T?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=_/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=E/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=_/r,i=E/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var _a=class extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new kt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Xs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}};var An=class extends _a{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};var Dr=class extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=/* @__PURE__ */ new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var xa=class extends kt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xe=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,l,c,h,u,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,x,m)}set(e,t,n,i,r,o,a,l,c,h,u,f,d,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ts.setFromMatrixColumn(e,0).length(),r=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order===`XYZ`){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order===`YXZ`){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order===`ZXY`){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order===`ZYX`){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order===`YZX`){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order===`XZY`){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qp,e,e0)}lookAt(e,t,n){let i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Di.crossVectors(n,bn),Di.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Di.crossVectors(n,bn)),Di.normalize(),No.crossVectors(bn,Di),i[0]=Di.x,i[4]=No.x,i[8]=bn.x,i[1]=Di.y,i[5]=No.y,i[9]=bn.y,i[2]=Di.z,i[6]=No.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],v=n[3],b=n[7],y=n[11],T=n[15],A=i[0],_=i[4],E=i[8],D=i[12],I=i[1],O=i[5],B=i[9],z=i[13],R=i[2],W=i[6],Y=i[10],V=i[14],se=i[3],q=i[7],ee=i[11],ie=i[15];return r[0]=o*A+a*I+l*R+c*se,r[4]=o*_+a*O+l*W+c*q,r[8]=o*E+a*B+l*Y+c*ee,r[12]=o*D+a*z+l*V+c*ie,r[1]=h*A+u*I+f*R+d*se,r[5]=h*_+u*O+f*W+d*q,r[9]=h*E+u*B+f*Y+d*ee,r[13]=h*D+u*z+f*V+d*ie,r[2]=p*A+x*I+m*R+g*se,r[6]=p*_+x*O+m*W+g*q,r[10]=p*E+x*B+m*Y+g*ee,r[14]=p*D+x*z+m*V+g*ie,r[3]=v*A+b*I+y*R+T*se,r[7]=v*_+b*O+y*W+T*q,r[11]=v*E+b*B+y*Y+T*ee,r[15]=v*D+b*z+y*V+T*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],m=e[11],g=e[15],v=l*d-c*f,b=a*d-c*u,y=a*f-l*u,T=o*d-c*h,A=o*f-l*h,_=o*u-a*h;return t*(x*v-m*b+g*y)-n*(p*v-m*T+g*A)+i*(p*b-x*T+g*_)-r*(p*y-x*A+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],m=e[14],g=e[15],v=t*a-n*o,b=t*l-i*o,y=t*c-r*o,T=n*l-i*a,A=n*c-r*a,_=i*c-r*l,E=h*x-u*p,D=h*m-f*p,I=h*g-d*p,O=u*m-f*x,B=u*g-d*x,z=f*g-d*m,R=v*z-b*B+y*O+T*I-A*D+_*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/R;return e[0]=(a*z-l*B+c*O)*W,e[1]=(i*B-n*z-r*O)*W,e[2]=(x*_-m*A+g*T)*W,e[3]=(f*A-u*_-d*T)*W,e[4]=(l*I-o*z-c*D)*W,e[5]=(t*z-i*I+r*D)*W,e[6]=(m*y-p*_-g*b)*W,e[7]=(h*_-f*y+d*b)*W,e[8]=(o*B-a*I+c*E)*W,e[9]=(n*I-t*B-r*E)*W,e[10]=(p*A-x*y+g*v)*W,e[11]=(u*y-h*A-d*v)*W,e[12]=(a*D-o*O-l*E)*W,e[13]=(t*O-n*D+i*E)*W,e[14]=(x*b-p*T-m*v)*W,e[15]=(h*T-u*b+f*v)*W,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,m=o*u,g=a*u,v=l*c,b=l*h,y=l*u,T=n.x,A=n.y,_=n.z;return i[0]=(1-(x+g))*T,i[1]=(d+y)*T,i[2]=(p-b)*T,i[3]=0,i[4]=(d-y)*A,i[5]=(1-(f+g))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(p+b)*_,i[9]=(m-v)*_,i[10]=(1-(f+x))*_,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ts.set(i[0],i[1],i[2]).length(),a=Ts.set(i[4],i[5],i[6]).length(),l=Ts.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Wn.copy(this);let c=1/o,h=1/a,u=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,i,r,o,a=Nn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Nn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Gs)p=-o/(o-r),x=-o*r/(o-r);else throw new Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Nn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Nn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Gs)p=-1/(o-r),x=-r/(o-r);else throw new Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};var Ts=new L;var Wn=new Xe;var Qp=new L(0,0,0);var e0=new L(1,1,1);var Di=new L;var No=new L;var bn=new L;var Fu=new Xe;var Bu=new Tn;var ni=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case`XYZ`:this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case`ZXY`:this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case`ZYX`:this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case`YZX`:this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case`XZY`:this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ce(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER=`XYZ`;var qs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var t0=0;var zu=new L;var As=new Tn;var ui=new Xe;var Uo=new L;var _r=new L;var n0=new L;var i0=new Tn;var ku=new L(1,0,0);var Hu=new L(0,1,0);var Gu=new L(0,0,1);var Vu={type:`added`};var s0={type:`removed`};var ws={type:`childadded`,child:null};var Kl={type:`childremoved`,child:null};var yt=class s extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=$n(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new ni,n=new Tn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new He}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(_r,Uo,this.up):ui.lookAt(Uo,_r,this.up),this.quaternion.setFromRotationMatrix(ui),i&&(ui.extractRotation(i.matrixWorld),As.setFromRotationMatrix(ui),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Be(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),ws.child=e,this.dispatchEvent(ws),ws.child=null):Be(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(s0),Kl.child=e,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,n0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,i0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type=`InstancedMesh`,i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type=`BatchedMesh`,i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>m(l({},a),{boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>l({},a)),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bt=class extends yt{constructor(){super(),this.isGroup=!0,this.type=`Group`}};var r0={type:`move`};var Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints[`index-finger-tip`],u=c.joints[`thumb-tip`],f=h.position.distanceTo(u.position);c.inputState.pinching&&f>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:`gripUpdated`,data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var hd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};var Ni={h:0,s:0,l:0};var Oo={h:0,s:0,l:0};function Zl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i==`number`?this.setHex(i):typeof i==`string`&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=dh(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Zl(o,r,e+1/3),this.g=Zl(o,r,e),this.b=Zl(o,r,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=xt){function n(r){r!==void 0&&parseFloat(r)<1&&Ce(`Color: Alpha component of `+e+` will be ignored.`)}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case`rgb`:case`rgba`:if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case`hsl`:case`hsla`:if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce(`Color: Unknown color model `+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ce(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=hd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce(`Color: Unknown color `+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Je.workingToColorSpace(sn.copy(this),e),Math.round($e(sn.r*255,0,255))*65536+Math.round($e(sn.g*255,0,255))*256+Math.round($e(sn.b*255,0,255))}getHexString(e=xt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(sn.copy(this),t);let n=sn.r,i=sn.g,r=sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=xt){Je.workingToColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,i=sn.b;return e!==`srgb`?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Oo);let n=Rr(Ni.h,Oo.h,t),i=Rr(Ni.s,Oo.s,t),r=Rr(Ni.l,Oo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};var sn=new we;we.NAMES=hd;var Sc=class extends yt{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Xn=new L;var fi=new L;var Jl=new L;var di=new L;var Rs=new L;var Cs=new L;var Wu=new L;var $l=new L;var jl=new L;var Ql=new L;var ec=new ut;var tc=new ut;var nc=new ut;var zi=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xn.subVectors(e,t),i.cross(Xn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xn.subVectors(i,t),fi.subVectors(n,t),Jl.subVectors(e,t);let o=Xn.dot(Xn),a=Xn.dot(fi),l=Xn.dot(Jl),c=fi.dot(fi),h=fi.dot(Jl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,di)===null?(l.x=0,l.y=0,`z`in l&&(l.z=0),`w`in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return ec.setScalar(0),tc.setScalar(0),nc.setScalar(0),ec.fromBufferAttribute(e,t),tc.fromBufferAttribute(e,n),nc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ec,r.x),o.addScaledVector(tc,r.y),o.addScaledVector(nc,r.z),o}static isFrontFacing(e,t,n,i){return Xn.subVectors(n,t),fi.subVectors(e,t),Xn.cross(fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Xn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Rs.subVectors(i,n),Cs.subVectors(r,n),$l.subVectors(e,n);let l=Rs.dot($l),c=Cs.dot($l);if(l<=0&&c<=0)return t.copy(n);jl.subVectors(e,i);let h=Rs.dot(jl),u=Cs.dot(jl);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(n).addScaledVector(Rs,o);Ql.subVectors(e,r);let d=Rs.dot(Ql),p=Cs.dot(Ql);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Cs,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Wu.subVectors(r,i),a=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(Wu,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(n).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var dn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fo.copy(n.boundingBox)),Fo.applyMatrix4(e.matrixWorld),this.union(Fo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xr),Bo.subVectors(this.max,xr),Is.subVectors(e.a,xr),Ps.subVectors(e.b,xr),Ls.subVectors(e.c,xr),Ui.subVectors(Ps,Is),Oi.subVectors(Ls,Ps),ji.subVectors(Is,Ls);let t=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-ji.z,ji.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,ji.z,0,-ji.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-ji.y,ji.x,0];return!ic(t,Is,Ps,Ls,Bo)||(t=[1,0,0,0,1,0,0,0,1],!ic(t,Is,Ps,Ls,Bo))?!1:(zo.crossVectors(Ui,Oi),t=[zo.x,zo.y,zo.z],ic(t,Is,Ps,Ls,Bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};var pi=[new L,new L,new L,new L,new L,new L,new L,new L];var qn=new L;var Fo=new dn;var Is=new L;var Ps=new L;var Ls=new L;var Ui=new L;var Oi=new L;var ji=new L;var xr=new L;var Bo=new L;var zo=new L;var Qi=new L;function ic(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Qi.fromArray(s,r);let a=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),h=n.dot(Qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Nt=new L;var ko=new Me;var o0=0;var Ut=class extends Kn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:o0++}),this.name=``,this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=Cn,this.version=0,this._normalizationScale=e!==void 0?El(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gh(e,this.array)}};var Nr=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ur=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}};var a0=new dn;var yr=new L;var sc=new L;var xn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):a0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);let t=yr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(yr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(sc)),this.expandByPoint(yr.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};var l0=0;var Ln=new Xe;var rc=new yt;var Ds=new L;var En=new dn;var vr=new dn;var qt=new L;var bt=class s extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=$n(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dp(e)?Ur:Nr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute(`position`,new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ce(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(En.min,vr.min),En.expandByPoint(qt),qt.addVectors(En.max,vr.max),En.expandByPoint(qt)):(En.expandByPoint(vr.min),En.expandByPoint(vr.max))}En.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qt.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),qt.add(Ds)),i=Math.max(i,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Be(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,i=t.normal,r=t.uv,o=this.getAttribute(`tangent`);(o===void 0||o.count!==n.count)&&(o=new Ut(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,o));let a=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)a[D]=new L,l[D]=new L;let h=new L,u=new L,f=new L,d=new Me,p=new Me,x=new Me,m=new L,g=new L;function v(D,I,O){c[D]=c[I]=c[O]=1,h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,O),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,I),x.fromBufferAttribute(r,O),u.sub(h),f.sub(h),p.sub(d),x.sub(d);let B=1/(p.x*x.y-x.x*p.y);isFinite(B)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(B),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(B),a[D].add(m),a[I].add(m),a[O].add(m),l[D].add(g),l[I].add(g),l[O].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,I=b.length;D<I;++D){let O=b[D],B=O.start,z=O.count;for(let R=B,W=B+z;R<W;R+=3)v(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let y=new L,T=new L,A=new L,_=new L;function E(D){A.fromBufferAttribute(i,D),_.copy(A);let I=a[D];y.copy(I),y.sub(A.multiplyScalar(A.dot(I))).normalize(),T.crossVectors(_,I);let B=T.dot(l[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,B)}for(let D=0,I=n.count;D<I;++D)c[D]&&E(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Ut(f,h,u)}if(this.index===null)return Ce(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}};var ki=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uh,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Xu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Xu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Xu(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=$n()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+`:`+s.byteOffset+`:`+s.byteLength}var fn=new L;var Hi=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?El(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Lr(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Lr(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):mh(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gh(e,this.data.array)}};var oc=new L;var c0=new L;var h0=new He;var Yn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=oc.subVectors(n,t).cross(c0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(oc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||h0.getNormalMatrix(e),i=this.coplanarPoint(oc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};var u0=0;var rn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=$n(),this.name=``,this.type=`Material`,this.blending=rr,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xc,this.blendDst=qc,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=la,this.stencilZFail=la,this.stencilZPass=la,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new we().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Yn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Me().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}};var mi=new L;var ac=new L;var Ho=new L;var Go=new L;var Gi=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ac.copy(e).add(t).multiplyScalar(.5),Ho.copy(t).sub(e).normalize(),Go.copy(this.origin).sub(ac);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ho),a=Go.dot(this.direction),l=-Go.dot(Ho),c=Go.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ac).addScaledVector(Ho,f),d}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),i=mi.dot(mi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,v=n.y-o.y,b=n.z-o.z,y=Math.abs(l),T=Math.abs(c),A=Math.abs(h),_,E,D,I,O,B,z,R,W,Y,V,se;if(y>=T&&y>=A?(D=l,B=u,W=p,se=g,l>=0?(_=c,E=h,I=f,O=d,z=x,R=m,Y=v,V=b):(_=h,E=c,I=d,O=f,z=m,R=x,Y=b,V=v)):T>=A?(D=c,B=f,W=x,se=v,c>=0?(_=h,E=l,I=d,O=u,z=m,R=p,Y=b,V=g):(_=l,E=h,I=u,O=d,z=p,R=m,Y=g,V=b)):(D=h,B=d,W=m,se=b,h>=0?(_=l,E=c,I=u,O=f,z=p,R=x,Y=g,V=v):(_=c,E=l,I=f,O=u,z=x,R=p,Y=v,V=g)),D===0)return null;let q=_/D,ee=E/D,ie=1/D,Se=I-q*B,Fe=O-ee*B,$=z-q*W,C=R-ee*W,Z=Y-q*se,oe=V-ee*se,ne=Z*C-oe*$,be=Se*oe-Fe*Z,ze=$*Fe-C*Se;if(i){if(ne<0||be<0||ze<0)return null}else if((ne<0||be<0||ze<0)&&(ne>0||be>0||ze>0))return null;let ue=ne+be+ze;if(ue===0)return null;let Ve=ie*(ne*B+be*W+ze*se);return(ue>0?Ve<0:Ve>0)?null:this.at(Ve/ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var on=class extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var qu=new Xe;var es=new Gi;var Vo=new xn;var Yu=new L;var Wo=new L;var Xo=new L;var qo=new L;var lc=new L;var Yo=new L;var Ku=new L;var Ko=new L;var Oe=class extends yt{constructor(e=new bt,t=new on){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Yo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(lc.fromBufferAttribute(u,e),o?Yo.addScaledVector(lc,h):Yo.addScaledVector(lc.sub(t),h))}t.add(Yo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(Vo.containsPoint(es.origin)===!1&&(es.intersectSphere(Vo,Yu)===null||es.origin.distanceToSquared(Yu)>(e.far-e.near)**2))&&(qu.copy(r).invert(),es.copy(e.ray).applyMatrix4(qu),(n.boundingBox===null||es.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,T=b;y<T;y+=3){let A=a.getX(y),_=a.getX(y+1),E=a.getX(y+2);i=Zo(this,g,e,n,c,h,u,A,_,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);i=Zo(this,o,e,n,c,h,u,v,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,T=b;y<T;y+=3){let A=y,_=y+1,E=y+2;i=Zo(this,g,e,n,c,h,u,A,_,E),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let v=m,b=m+1,y=m+2;i=Zo(this,o,e,n,c,h,u,v,b,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function f0(s,e,t,n,i,r,o,a){let l;if(e.side===1?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===ri,a),l===null)return null;Ko.copy(a),Ko.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ko);return c<t.near||c>t.far?null:{distance:c,point:Ko.clone(),object:s}}function Zo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Wo),s.getVertexPosition(l,Xo),s.getVertexPosition(c,qo);let h=f0(s,e,t,n,Wo,Xo,qo,Ku);if(h){let u=new L;zi.getBarycoord(Ku,Wo,Xo,qo,u),i&&(h.uv=zi.getInterpolatedAttribute(i,a,l,c,u,new Me)),r&&(h.uv1=zi.getInterpolatedAttribute(r,a,l,c,u,new Me)),o&&(h.normal=zi.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};zi.getNormal(Wo,Xo,qo,f.normal),h.face=f,h.barycoord=u}return h}var Mr=new ut;var Zu=new ut;var Ju=new ut;var d0=new ut;var $u=new Xe;var Jo=new L;var cc=new xn;var ju=new Xe;var hc=new Gi;var Or=class extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=_c,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingBox.expandByPoint(Jo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingSphere.expandByPoint(Jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cc.copy(this.boundingSphere),cc.applyMatrix4(i),e.ray.intersectsSphere(cc)!==!1&&(ju.copy(i).invert(),hc.copy(e.ray).applyMatrix4(ju),(this.boundingBox===null||hc.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,hc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_c?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Zu.fromBufferAttribute(i.attributes.skinIndex,e),Ju.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Mr.copy(t),t.set(0,0,0,0)):(Mr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Mr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Ju.getComponent(r);if(o!==0){let a=Zu.getComponent(r);$u.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(d0.copy(Mr).applyMatrix4($u),o)}}return t.isVector4&&(t.w=Mr.w),t.applyMatrix4(this.bindMatrixInverse)}};var Ks=class extends yt{constructor(){super(),this.isBone=!0,this.type=`Bone`}};var Zs=class extends kt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=St,h=St,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qu=new Xe;var p0=new Xe;var Fr=class s{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ce(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:p0;Qu.multiplyMatrices(a,t[r]),Qu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Zs(t,e,e,kn,Cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ce(`Skeleton: No bone found with UUID:`,r),o=new Ks),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}};var yi=class extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var Ns=new Xe;var ef=new Xe;var $o=[];var tf=new dn;var m0=new Xe;var Sr=new Oe;var br=new xn;var Br=class extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,m0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),tf.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(tf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),br.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,o=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ns),ef.multiplyMatrices(n,Ns),Sr.matrixWorld=ef,Sr.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){let l=$o[o];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zs(new Float32Array(i*this.count),i,this.count,Wa,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};var ts=new xn;var g0=new Me(.5,.5);var jo=new L;var Vi=class{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Nn,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],b=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,d-h,g-p,T-v).normalize(),i[1].setComponents(c+o,d+h,g+p,T+v).normalize(),i[2].setComponents(c+a,d+u,g+x,T+b).normalize(),i[3].setComponents(c-a,d-u,g-x,T-b).normalize(),n)i[4].setComponents(l,f,m,y).normalize(),i[5].setComponents(c-l,d-f,g-m,T-y).normalize();else if(i[4].setComponents(c-l,d-f,g-m,T-y).normalize(),t===Nn)i[5].setComponents(c+l,d+f,g+m,T+y).normalize();else if(t===Gs)i[5].setComponents(l,f,m,y).normalize();else throw new Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);return ts.radius=.7071067811865476+g0.distanceTo(e.center),ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(jo.x=i.normal.x>0?e.max.x:e.min.x,jo.y=i.normal.y>0?e.max.y:e.min.y,jo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nf=new Xe;var ya=class s{constructor(){this.coordinateSystem=Nn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];nf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Vi),n[i].setFromProjectionMatrix(nf,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new Vi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Js=class extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};var va=new L;var Ma=new L;var sf=new Xe;var Er=new Gi;var Qo=new xn;var uc=new L;var rf=new L;var os=class extends yt{constructor(e=new bt,t=new Js){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)va.fromBufferAttribute(t,i-1),Ma.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=va.distanceTo(Ma);e.setAttribute(`lineDistance`,new tt(n,1))}else Ce(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qo.copy(n.boundingSphere),Qo.applyMatrix4(i),Qo.radius+=r,e.ray.intersectsSphere(Qo)===!1)return;sf.copy(i).invert(),Er.copy(e.ray).applyMatrix4(sf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=h.getX(x),v=h.getX(x+1),b=ea(this,e,Er,l,g,v,x);b&&t.push(b)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=ea(this,e,Er,l,x,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=ea(this,e,Er,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=ea(this,e,Er,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ea(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(va.fromBufferAttribute(a,i),Ma.fromBufferAttribute(a,r),t.distanceSqToSegment(va,Ma,uc,rf)>n)return;uc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(uc);if(!(c<e.near||c>e.far))return{distance:c,point:rf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var of=new L;var af=new L;var zr=class extends os{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)of.fromBufferAttribute(t,i),af.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+of.distanceTo(af);e.setAttribute(`lineDistance`,new tt(n,1))}else Ce(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}};var kr=class extends os{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}};var $s=class extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var lf=new Xe;var bc=new Gi;var ta=new xn;var na=new L;var Hr=class extends yt{constructor(e=new bt,t=new $s){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ta.copy(n.boundingSphere),ta.applyMatrix4(i),ta.radius+=r,e.ray.intersectsSphere(ta)===!1)return;lf.copy(i).invert(),bc.copy(e.ray).applyMatrix4(lf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=c.getX(p);na.fromBufferAttribute(u,m),cf(na,m,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)na.fromBufferAttribute(u,p),cf(na,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cf(s,e,t,n,i,r,o){let a=bc.distanceSqToPoint(s);if(a<t){let l=new L;bc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Gr=class extends kt{constructor(e=[],t=ms,n,i,r,o,a,l,c,h){super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Vr=class extends kt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var vi=class extends kt{constructor(e,t,n=Zn,i,r,o,a=St,l=St,c,h=xi,u=1){if(h!==xi&&h!==1027)throw new Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};var Wr=class extends vi{constructor(e,t=Zn,n=ms,i,r,o=St,a=St,l,c=xi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};var Xr=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var On=class s extends bt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p(`z`,`y`,`x`,-1,-1,n,t,e,o,r,0),p(`z`,`y`,`x`,1,-1,n,t,-e,o,r,1),p(`x`,`z`,`y`,1,1,e,n,t,i,o,2),p(`x`,`z`,`y`,1,-1,e,n,-t,i,o,3),p(`x`,`y`,`z`,1,-1,e,t,n,i,r,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute(`position`,new tt(c,3)),this.setAttribute(`normal`,new tt(h,3)),this.setAttribute(`uv`,new tt(u,2));function p(x,m,g,v,b,y,T,A,_,E,D){let I=y/_,O=T/E,B=y/2,z=T/2,R=A/2,W=_+1,Y=E+1,V=0,se=0,q=new L;for(let ee=0;ee<Y;ee++){let ie=ee*O-z;for(let Se=0;Se<W;Se++)q[x]=(Se*I-B)*v,q[m]=ie*b,q[g]=R,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[g]=A>0?1:-1,h.push(q.x,q.y,q.z),u.push(Se/_),u.push(1-ee/E),V+=1}for(let ee=0;ee<E;ee++)for(let ie=0;ie<_;ie++){let Se=f+ie+W*ee,Fe=f+ie+W*(ee+1),$=f+(ie+1)+W*(ee+1),C=f+(ie+1)+W*ee;l.push(Se,Fe,C),l.push(Fe,$,C),se+=6}a.addGroup(d,se,D),d+=se,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ec=class s extends bt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=n*2+r,x=i+1,m=new L,g=new L;for(let v=0;v<=p;v++){let b=0,y=0,T=0,A=0;if(v<=n){let D=v/n,I=D*Math.PI/2;y=-h-e*Math.cos(I),T=e*Math.sin(I),A=-e*Math.cos(I),b=D*u}else if(v<=n+r){let D=(v-n)/r;y=-h+D*t,T=e,A=0,b=u+D*f}else{let D=(v-n-r)/n,I=D*Math.PI/2;y=h+e*Math.sin(I),T=e*Math.cos(I),A=e*Math.sin(I),b=u+f+D*u}let _=Math.max(0,Math.min(1,b/d)),E=0;v===0?E=.5/i:v===p&&(E=-.5/i);for(let D=0;D<=i;D++){let I=D/i,O=I*Math.PI*2,B=Math.sin(O),z=Math.cos(O);g.x=-T*z,g.y=y,g.z=T*B,a.push(g.x,g.y,g.z),m.set(-T*z,A,T*B),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+E,_)}if(v>0){let D=(v-1)*x;for(let I=0;I<i;I++){let O=D+I,B=D+I+1,z=v*x+I,R=v*x+I+1;o.push(O,B,z),o.push(B,R,z)}}}this.setIndex(o),this.setAttribute(`position`,new tt(a,3)),this.setAttribute(`normal`,new tt(l,3)),this.setAttribute(`uv`,new tt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Mi=class s extends bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new Me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute(`position`,new tt(o,3)),this.setAttribute(`normal`,new tt(a,3)),this.setAttribute(`uv`,new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var Fn=class s extends bt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],m=n/2,g=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute(`position`,new tt(u,3)),this.setAttribute(`normal`,new tt(f,3)),this.setAttribute(`uv`,new tt(d,2));function v(){let y=new L,T=new L,A=0,_=(t-e)/n;for(let E=0;E<=r;E++){let D=[],I=E/r,O=I*(t-e)+e;for(let B=0;B<=i;B++){let z=B/i,R=z*l+a,W=Math.sin(R),Y=Math.cos(R);T.x=O*W,T.y=-I*n+m,T.z=O*Y,u.push(T.x,T.y,T.z),y.set(W,_,Y).normalize(),f.push(y.x,y.y,y.z),d.push(z,1-I),D.push(p++)}x.push(D)}for(let E=0;E<i;E++)for(let D=0;D<r;D++){let I=x[D][E],O=x[D+1][E],B=x[D+1][E+1],z=x[D][E+1];(e>0||D!==0)&&(h.push(I,O,z),A+=3),(t>0||D!==r-1)&&(h.push(O,B,z),A+=3)}c.addGroup(g,A,0),g+=A}function b(y){let T=p,A=new Me,_=new L,E=0,D=y===!0?e:t,I=y===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*I,0),f.push(0,I,0),d.push(.5,.5),p++;let O=p;for(let B=0;B<=i;B++){let R=B/i*l+a,W=Math.cos(R),Y=Math.sin(R);_.x=D*Y,_.y=m*I,_.z=D*W,u.push(_.x,_.y,_.z),f.push(0,I,0),A.x=W*.5+.5,A.y=Y*.5*I+.5,d.push(A.x,A.y),p++}for(let B=0;B<i;B++){let z=T+B,R=O+B;y===!0?h.push(R,R+1,z):h.push(R+1,R,z),E+=3}c.addGroup(g,E,y===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var qr=class s extends Fn{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wn=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Me:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,i=[],r=[],o=[],a=new L,l=new Xe;for(let d=0;d<=e;d++){let p=d/e;i[d]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos($e(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos($e(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};var js=class extends wn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Me){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}};var Sa=class extends js{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type=`ArcCurve`}};function _h(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var hf=new L;var uf=new L;var fc=new _h;var dc=new _h;var pc=new _h;var Qs=class extends wn{constructor(e=[],t=!1,n=`centripetal`,i=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(uf.subVectors(i[0],i[1]).add(i[0]),c=uf);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(hf.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=hf),this.curveType===`centripetal`||this.curveType===`chordal`){let d=this.curveType===`chordal`?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),fc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,m),dc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,m),pc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,m)}else this.curveType===`catmullrom`&&(fc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),dc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),pc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(fc.calc(l),dc.calc(l),pc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ff(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function _0(s,e){let t=1-s;return t*t*e}function x0(s,e){return 2*(1-s)*s*e}function y0(s,e){return s*s*e}function Cr(s,e,t,n){return _0(s,e)+x0(s,t)+y0(s,n)}function v0(s,e){let t=1-s;return t*t*t*e}function M0(s,e){let t=1-s;return 3*t*t*s*e}function S0(s,e){return 3*(1-s)*s*s*e}function b0(s,e){return s*s*s*e}function Ir(s,e,t,n,i){return v0(s,e)+M0(s,t)+S0(s,n)+b0(s,i)}var Yr=class extends wn{constructor(e=new Me,t=new Me,n=new Me,i=new Me){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Me){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ir(e,i.x,r.x,o.x,a.x),Ir(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var ba=class extends wn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ir(e,i.x,r.x,o.x,a.x),Ir(e,i.y,r.y,o.y,a.y),Ir(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}};var Kr=class extends wn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Ea=class extends wn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Zr=class extends wn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(e,i.x,r.x,o.x),Cr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var Jr=class extends wn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Cr(e,i.x,r.x,o.x),Cr(e,i.y,r.y,o.y),Cr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}};var $r=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new Me){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ff(a,l.x,c.x,h.x,u.x),ff(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Me().fromArray(i))}return this}};var Tc=Object.freeze({__proto__:null,ArcCurve:Sa,CatmullRomCurve3:Qs,CubicBezierCurve:Yr,CubicBezierCurve3:ba,EllipseCurve:js,LineCurve:Kr,LineCurve3:Ea,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:Jr,SplineCurve:$r});var Ta=class extends wn{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Tc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Tc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}};var jr=class extends Ta{constructor(e){super(),this.type=`Path`,this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Kr(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Zr(this.currentPoint.clone(),new Me(e,t),new Me(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new Yr(this.currentPoint.clone(),new Me(e,t),new Me(n,i),new Me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let n=new $r([this.currentPoint.clone()].concat(e));return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new js(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var er=class extends jr{constructor(e){super(e),this.uuid=$n(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new jr().fromJSON(i))}return this}};function E0(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=ud(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=C0(s,e,r,t)),s.length>80*t){a=s[0],l=s[1];let h=a,u=l;for(let f=t;f<i;f+=t){let d=s[f],p=s[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Qr(r,o,t,a,l,c,0),o}function ud(s,e,t,n,i){let r;if(i===k0(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=df(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=df(o/n|0,s[o],s[o+1],r);return r&&tr(r,r.next)&&(to(r),r=r.next),r}function as(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(tr(t,t.next)||At(t.prev,t,t.next)===0)){if(to(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Qr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&N0(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?A0(s,n,i,r):T0(s)){e.push(l.i,s.i,c.i),to(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=w0(as(s),e),Qr(s,e,t,n,i,r,2)):o===2&&R0(s,e,t,n,i,r):Qr(as(s),e,t,n,i,r,1);break}}}function T0(s){let e=s.prev,t=s,n=s.next;if(At(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Tr(i,a,r,l,o,c,p.x,p.y)&&At(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function A0(s,e,t,n){let i=s.prev,r=s,o=s.next;if(At(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),g=Ac(d,p,e,t,n),v=Ac(x,m,e,t,n),b=s.prevZ,y=s.nextZ;for(;b&&b.z>=g&&y&&y.z<=v;){if(b.x>=d&&b.x<=x&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Tr(a,h,l,u,c,f,b.x,b.y)&&At(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Tr(a,h,l,u,c,f,y.x,y.y)&&At(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=d&&b.x<=x&&b.y>=p&&b.y<=m&&b!==i&&b!==o&&Tr(a,h,l,u,c,f,b.x,b.y)&&At(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&Tr(a,h,l,u,c,f,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function w0(s,e){let t=s;do{let n=t.prev,i=t.next.next;!tr(n,i)&&dd(n,t,t.next,i)&&eo(n,i)&&eo(i,n)&&(e.push(n.i,t.i,i.i),to(t),to(t.next),t=s=i),t=t.next}while(t!==s);return as(t)}function R0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&F0(o,a)){let l=pd(o,a);o=as(o,o.next),l=as(l,l.next),Qr(o,e,t,n,i,r,0),Qr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function C0(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let c=ud(s,e[r]*n,r<o-1?e[r+1]*n:s.length,n,!1);c===c.next&&(c.steiner=!0),i.push(O0(c))}i.sort(I0);for(let r=0;r<i.length;r++)t=P0(i[r],t);return t}function I0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0))t=(s.next.y-s.y)/(s.next.x-s.x)-(e.next.y-e.y)/(e.next.x-e.x);return t}function P0(s,e){let t=L0(s,e);if(!t)return e;let n=pd(t,s);return as(n,n.next),as(t,t.next)}function L0(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(tr(s,t))return t;do{if(tr(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&fd(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);eo(t,s)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&D0(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function D0(s,e){return At(s.prev,s,e.prev)<0&&At(e.next,s,s.next)<0}function N0(s,e,t,n){let i=s;do i.z===0&&(i.z=Ac(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,U0(i)}function U0(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Ac(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function O0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function fd(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Tr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&fd(s,e,t,n,i,r,o,a)}function F0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!B0(s,e)&&(eo(s,e)&&eo(e,s)&&z0(s,e)&&(At(s.prev,s,e.prev)||At(s,e.prev,e))||tr(s,e)&&At(s.prev,s,s.next)>0&&At(e.prev,e,e.next)>0)}function At(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function tr(s,e){return s.x===e.x&&s.y===e.y}function dd(s,e,t,n){let i=sa(At(s,e,t)),r=sa(At(s,e,n)),o=sa(At(t,n,s)),a=sa(At(t,n,e));return!!(i!==r&&o!==a||i===0&&ia(s,t,e)||r===0&&ia(s,n,e)||o===0&&ia(t,s,n)||a===0&&ia(t,e,n))}function ia(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function sa(s){return s>0?1:s<0?-1:0}function B0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&dd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function eo(s,e){return At(s.prev,s,s.next)<0?At(s,e,s.next)>=0&&At(s,s.prev,e)>=0:At(s,e,s.prev)<0||At(s,s.next,e)<0}function z0(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function pd(s,e){let t=wc(s.i,s.x,s.y),n=wc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function df(s,e,t,n){let i=wc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function to(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k0(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Rc=class{static triangulate(e,t,n=2){return E0(e,t,n)}};var zs=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];pf(e),mf(n,e);let o=e.length;t.forEach(pf);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,mf(n,t[l]);let a=Rc.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function pf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function mf(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var $t=class s extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*f-o;for(let b=0;b<c;b++){let y=b*u-r;p.push(y,-v,0),x.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let b=v+c*g,y=v+c*(g+1),T=v+1+c*(g+1),A=v+1+c*g;d.push(b,y,A),d.push(y,T,A)}this.setIndex(d),this.setAttribute(`position`,new tt(p,3)),this.setAttribute(`normal`,new tt(x,3)),this.setAttribute(`uv`,new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var no=class s extends bt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/i,d=new L,p=new Me;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=r+m/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let v=g+m,b=v,y=v+n+1,T=v+n+2,A=v+1;a.push(b,y,A),a.push(y,T,A)}}this.setIndex(a),this.setAttribute(`position`,new tt(l,3)),this.setAttribute(`normal`,new tt(c,3)),this.setAttribute(`uv`,new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var io=class s extends bt{constructor(e=new er([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute(`position`,new tt(i,3)),this.setAttribute(`normal`,new tt(r,3)),this.setAttribute(`uv`,new tt(o,2));function c(h){let u=i.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;zs.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];zs.isClockWise(v)===!0&&(p[m]=v.reverse())}let x=zs.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];d=d.concat(v)}for(let m=0,g=d.length;m<g;m++){let v=d[m];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){let v=x[m],b=v[0]+u,y=v[1]+u,T=v[2]+u;n.push(b,y,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return H0(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let o=t[e.shapes[i]];n.push(o)}return new s(n,e.curveSegments)}};function H0(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Si=class s extends bt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,d=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let v=[],b=g/n,y=o+b*a,T=e*Math.cos(y),A=Math.sqrt(e*e-T*T),_=0;g===0&&o===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let D=E/t,I=i+D*r;u.x=-A*Math.cos(I),u.y=T,u.z=A*Math.sin(I),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(D+_,1-b),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let b=h[g][v+1],y=h[g][v],T=h[g+1][v],A=h[g+1][v+1];(g!==0||o>0)&&d.push(b,y,A),(g!==n-1||l<Math.PI)&&d.push(y,T,A)}this.setIndex(d),this.setAttribute(`position`,new tt(p,3)),this.setAttribute(`normal`,new tt(x,3)),this.setAttribute(`uv`,new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var so=class s extends bt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],u=[],f=new L,d=new L,p=new L;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let g=0;g<=i;g++){let v=g/i*r;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/i),u.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=i;m++){let g=(i+1)*x+m-1,v=(i+1)*(x-1)+m-1,b=(i+1)*(x-1)+m,y=(i+1)*x+m;l.push(g,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute(`position`,new tt(c,3)),this.setAttribute(`normal`,new tt(h,3)),this.setAttribute(`uv`,new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var ro=class s extends bt{constructor(e=new Jr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new Me,h=new L,u=[],f=[],d=[],p=[];x(),this.setIndex(p),this.setAttribute(`position`,new tt(u,3)),this.setAttribute(`normal`,new tt(f,3)),this.setAttribute(`uv`,new tt(d,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),v(),g()}function m(b){h=e.getPointAt(b/t,h);let y=o.normals[b],T=o.binormals[b];for(let A=0;A<=i;A++){let _=A/i*Math.PI*2,E=Math.sin(_),D=-Math.cos(_);l.x=D*y.x+E*T.x,l.y=D*y.y+E*T.y,l.z=D*y.z+E*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let b=1;b<=t;b++)for(let y=1;y<=i;y++){let T=(i+1)*(b-1)+(y-1),A=(i+1)*b+(y-1),_=(i+1)*b+y,E=(i+1)*(b-1)+y;p.push(T,A,E),p.push(A,_,E)}}function v(){for(let b=0;b<=t;b++)for(let y=0;y<=i;y++)c.x=b/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Tc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function xs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(gf(i))i.isRenderTargetTexture?(Ce(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(gf(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function an(s){let e={};for(let t=0;t<s.length;t++){let n=xs(s[t]);for(let i in n)e[i]=n[i]}return e}function gf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function G0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var md={clone:xs,merge:an};var V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;var W0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;var ii=class extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=W0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=G0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:`t`,value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:`c`,value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:`v2`,value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:`v3`,value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:`v4`,value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:`m3`,value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:`m4`,value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case`t`:this.uniforms[n].value=t[i.value]||null;break;case`c`:this.uniforms[n].value=new we().setHex(i.value);break;case`v2`:this.uniforms[n].value=new Me().fromArray(i.value);break;case`v3`:this.uniforms[n].value=new L().fromArray(i.value);break;case`v4`:this.uniforms[n].value=new ut().fromArray(i.value);break;case`m3`:this.uniforms[n].value=new He().fromArray(i.value);break;case`m4`:this.uniforms[n].value=new Xe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};var Aa=class extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}};var it=class extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Lt=class extends it{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ns(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ns(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Cc=class extends rn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Ic=class extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ur,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Fa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var wa=class extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var Ra=class extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bi(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT==`number`?new e(s):Array.prototype.slice.call(s)}function Ar(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function X0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _f(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function q0(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var si=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}};var Ca=class extends si{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case vc:r=e,a=2*t-n;break;case Mc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vc:o=e,l=2*n-t;break;case Mc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,b=(-1-d)*m+(1.5+d)*x+.5*p,y=d*m-d*x;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+v*o[c+T]+b*o[l+T]+y*o[u+T];return r}};var Ia=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}};var Pa=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};var La=class extends si{interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(i-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*f+p*2,v=u[g],b=u[g+1],y=e*f+p*2,T=h[y],A=h[y+1],_=K0(n,t,v,T,i);r[p]=gd(_,x,b,A,m)}return r}};function gd(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Y0(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function K0(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){let a=gd(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;let l=Y0(r,e,t,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw new Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Bi(t,this.TimeBufferType),this.values=Bi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bi(e.times,Array),values:Bi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Ar(e.settings)&&(n.settings={inTangents:Bi(e.settings.inTangents,Array),outTangents:Bi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new La(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case ss:t=this.InterpolantFactoryMethodLinear;break;case aa:t=this.InterpolantFactoryMethodSmooth;break;case xc:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let n=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce(`KeyframeTrack:`,n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return ss;case this.InterpolantFactoryMethodSmooth:return aa;case this.InterpolantFactoryMethodBezier:return xc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;Ar(this.settings)&&(xf(this.settings.inTangents,e),xf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Ar(this.settings)&&(yf(this.settings.inTangents,e),yf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Be(`KeyframeTrack: Track is empty.`,this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l==`number`&&isNaN(l)){Be(`KeyframeTrack: Time is not a valid number.`,this,a,l),e=!1;break}if(o!==null&&o>l){Be(`KeyframeTrack: Out of order keys.`,this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Np(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Be(`KeyframeTrack: Value is not a valid number.`,this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===aa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a];if(c!==e[a+1]&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ar(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function xf(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function yf(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}yn.prototype.ValueTypeName=``;yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=ss;var bi=class extends yn{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName=`bool`;bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=is;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};oo.prototype.ValueTypeName=`color`;var Ei=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Ei.prototype.ValueTypeName=`number`;var Da=class extends si{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)Tn.slerpFlat(r,0,o,c-a,o,c,l);return r}};var Ti=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Da(this.times,this.values,this.getValueSize(),e)}};Ti.prototype.ValueTypeName=`quaternion`;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends yn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName=`string`;Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=is;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends yn{constructor(e,t,n,i){super(e,t,n,i)}};Wi.prototype.ValueTypeName=`vector`;var ao=class{constructor(e=``,t=-1,n=[],i=$f){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(J0(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||`{}`),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=X0(l);l=_f(l,1,h),c=_f(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ei(`.morphTargetInfluences[`+t[a].name+`]`,l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=i[u];f||(i[u]=f=[]),f.push(c)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Z0(s){switch(s.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Ei;case`vector`:case`vector2`:case`vector3`:case`vector4`:return Wi;case`color`:return oo;case`quaternion`:return Ti;case`bool`:case`boolean`:return bi;case`string`:return Ai}throw new Error(`THREE.KeyframeTrack: Unsupported typeName: `+s)}function J0(s){if(s.type===void 0)throw new Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let e=Z0(s.type);if(s.times===void 0){let n=[],i=[];q0(s.keys,n,i,`value`),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Ar(s.settings)&&(t.settings={inTangents:Bi(s.settings.inTangents,Float32Array),outTangents:Bi(s.settings.outTangents,Float32Array)}),t}var ti={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(vf(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!vf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function vf(s){try{let e=s.slice(s.indexOf(`:`)+1);return new URL(e).protocol===`blob:`}catch{return!1}}var Na=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize(`NFC`),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};var _d=new Na;var Bn=class{constructor(e){this.manager=e!==void 0?e:_d,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Bn.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var gi={};var Pc=class extends Error{constructor(e,t){super(e),this.response=t}};var wi=class extends Bn{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ti.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:n,onError:i});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ce(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||c.body===void 0||c.body.getReader===void 0)return c;let h=gi[e],u=c.body.getReader(),f=c.headers.get(`X-File-Size`)||c.headers.get(`Content-Length`),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){v();function v(){u.read().then(({done:b,value:y})=>{if(b)g.close();else{x+=y.byteLength;let T=new ProgressEvent(`progress`,{lengthComputable:p,loaded:x,total:d});for(let A=0,_=h.length;A<_;A++){let E=h[A];E.onProgress&&E.onProgress(T)}g.enqueue(y),v()}},b=>{g.error(b)})}}});return new Response(m)}else throw new Pc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case`arraybuffer`:return c.arrayBuffer();case`blob`:return c.blob();case`document`:return c.text().then(h=>new DOMParser().parseFromString(h,a));case`json`:return c.json();default:if(a===``)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{ti.add(`file:${e}`,c);let h=gi[e];delete gi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=gi[e];if(h===void 0)throw this.manager.itemError(e),c;delete gi[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Us=/* @__PURE__ */ new WeakMap;var Ua=class extends Bn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ti.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Us.get(o);u===void 0&&(u=[],Us.set(o,u)),u.push({onLoad:t,onError:i})}return o}let a=Vs(`img`);function l(){h(),t&&t(this);let u=Us.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Us.delete(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),ti.remove(`image:${e}`);let f=Us.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Us.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener(`load`,l,!1),a.removeEventListener(`error`,c,!1)}return a.addEventListener(`load`,l,!1),a.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ti.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var ls=class extends Bn{constructor(e){super(e)}load(e,t,n,i){let r=new kt,o=new Ua(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}};var cs=class extends yt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new we(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var lo=class extends cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};var mc=new Xe;var Mf=new L;var Sf=new L;var nr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vi,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Mf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mf),Sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(mc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;e.coordinateSystem===Gs||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var ra=new L;var oa=new Tn;var ei=new L;var co=class extends yt{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ra,oa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,oa,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ra,oa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ra,oa,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};var Fi=new L;var bf=new Me;var Ef=new Me;var Zt=class extends co{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,bf,Ef),t.subVectors(Ef,bf)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Lc=class extends nr{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=rs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}};var ho=class extends cs{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Lc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}};var Dc=class extends nr{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0}};var hs=class extends cs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=i,this.shadow=new Dc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var us=class extends co{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Nc=class extends nr{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};var fs=class extends cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Nc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Rn=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var gc=/* @__PURE__ */ new WeakMap;var uo=class extends Bn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&Ce(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&Ce(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=ti.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{gc.has(o)===!0?(i&&i(gc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!==`anonymous`?`include`:`same-origin`,a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:`none`}))}).then(function(c){return ti.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),gc.set(l,c),ti.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ti.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Os=-90;var Fs=1;var ir=class extends yt{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Zt(Os,Fs,e,t);i.layers=this.layers,this.add(i);let r=new Zt(Os,Fs,e,t);r.layers=this.layers,this.add(r);let o=new Zt(Os,Fs,e,t);o.layers=this.layers,this.add(o);let a=new Zt(Os,Fs,e,t);a.layers=this.layers,this.add(a);let l=new Zt(Os,Fs,e,t);l.layers=this.layers,this.add(l);let c=new Zt(Os,Fs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}};var Oa=class extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Uc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$0.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function $0(){this._document.hidden===!1&&this.reset()}var yh=`\\[\\]\\.:\\/`;var j0=new RegExp(`[`+yh+`]`,`g`);var vh=`[^`+yh+`]`;var Q0=`[^`+yh.replace(`\\.`,``)+`]`;var em=/((?:WC+[\/:])*)/.source.replace(`WC`,vh);var tm=/(WCOD+)?/.source.replace(`WCOD`,Q0);var nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace(`WC`,vh);var im=/\.(WC+)(?:\[(.+)\])?/.source.replace(`WC`,vh);var sm=new RegExp(`^`+em+tm+nm+im+`$`);var rm=[`material`,`materials`,`bones`,`map`];var Oc=class{constructor(e,t,n){let i=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};var gt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(j0,``)}static parseTrackName(e){let t=sm.exec(e);if(t===null)throw new Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);rm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(n){let c=t.objectIndex;switch(n){case`materials`:if(!e.material){Be(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.materials){Be(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}e=e.material.materials;break;case`bones`:if(!e.skeleton){Be(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case`map`:if(`map`in e){e=e.map;break}if(!e.material){Be(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.map){Be(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}e=e.material.map;break;default:if(e[n]===void 0){Be(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Be(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;Be(`PropertyBinding: Trying to update property for track: `+c+`.`+i+` but it wasn't found.`,e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i===`morphTargetInfluences`){if(!e.geometry){Be(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!e.geometry.morphAttributes){Be(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=Oc;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tf=new Xe;var Fc=class{constructor(e,t,n=0,i=1/0){this.ray=new Gi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Be(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Tf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tf),this}intersectObject(e,t=!0,n=[]){return Bc(e,this,n,t),n.sort(Af),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Bc(e[i],this,n,t);return n.sort(Af),n}};function Af(s,e){return s.distance-e.distance}function Bc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Bc(r[o],e,t,!0)}}var zc=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var kc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};var Hc=class extends Kn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Mh(s,e,t,n){let i=om(n);switch(t){case rh:return s*e;case Wa:return s*e/i.components*i.byteLength;case Xa:return s*e/i.components*i.byteLength;case Xi:return s*e*2/i.components*i.byteLength;case qa:return s*e*2/i.components*i.byteLength;case oh:return s*e*3/i.components*i.byteLength;case kn:return s*e*4/i.components*i.byteLength;case Ya:return s*e*4/i.components*i.byteLength;case po:case mo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case go:case _o:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Za:case $a:return Math.max(s,16)*Math.max(e,8)/4;case Ka:case Ja:return Math.max(s,8)*Math.max(e,8)/2;case ja:case Qa:case tl:case nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case el:case xo:case il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ol:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case al:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ll:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case cl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case hl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ul:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case dl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ml:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case _l:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case xl:case yl:case vl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ml:case Sl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case yo:case bl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function om(s){switch(s){case vn:case th:return{byteLength:1,components:1};case cr:case nh:case Jn:return{byteLength:2,components:1};case Ga:case Va:return{byteLength:2,components:4};case Zn:case Ha:case Cn:return{byteLength:4,components:1};case ih:case sh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}}));typeof window<`u`&&(window.__THREE__?Ce(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function kd(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function lm(s){let e=/* @__PURE__ */ new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<`u`&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var et={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`};var ye={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}};var li={basic:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new we(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:an([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:an([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:an([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new we(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:an([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:an([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:an([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:an([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:an([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:an([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:an([ye.lights,ye.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};li.physical={uniforms:an([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var Al={r:0,b:0,g:0};var G_=new Xe;var Hd=new He;Hd.set(-1,0,0,0,1,0,0,0,1);function V_(s,e,t,n,i,r){let o=new we(0),a=i===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=e.get(b,y)}return b}function p(v){let b=!1,y=d(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);let T=s.xr.getEnvironmentBlendMode();T===`additive`?t.buffers.color.setClear(0,0,0,1,r):T===`alpha-blend`&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,b){let y=d(b);y&&y.isCubeTexture?(c===void 0&&(c=new Oe(new On(1,1,1),new ii({name:`BackgroundCubeMaterial`,uniforms:xs(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),c.geometry.deleteAttribute(`uv`),c.onBeforeRender=function(T,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(G_.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Hd),c.material.toneMapped=Je.getTransfer(y.colorSpace)!==ct,(h!==y||u!==y.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,f=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Oe(new $t(2,2),new ii({name:`BackgroundMaterial`,uniforms:xs(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Je.getTransfer(y.colorSpace)!==`srgb`,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(Al,xh(s)),t.buffers.color.setClear(Al.r,Al.g,Al.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:x,dispose:g}}function W_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(O,B,z,R,W){let Y=!1,V=u(O,R,z,B);r!==V&&(r=V,c(r.object)),Y=d(O,R,z,W),Y&&p(O,R,z,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(O,B,z,R),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(O){return s.bindVertexArray(O)}function h(O){return s.deleteVertexArray(O)}function u(O,B,z,R){let W=R.wireframe===!0,Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);let V=O.isInstancedMesh===!0?O.id:0,se=Y[V];se===void 0&&(se={},Y[V]=se);let q=se[z.id];q===void 0&&(q={},se[z.id]=q);let ee=q[W];return ee===void 0&&(ee=f(l()),q[W]=ee),ee}function f(O){let B=[],z=[],R=[];for(let W=0;W<t;W++)B[W]=0,z[W]=0,R[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:R,object:O,attributes:{},index:null}}function d(O,B,z,R){let W=r.attributes,Y=B.attributes,V=0,se=z.getAttributes();for(let q in se)if(se[q].location>=0){let ie=W[q],Se=Y[q];if(Se===void 0&&(q===`instanceMatrix`&&O.instanceMatrix&&(Se=O.instanceMatrix),q===`instanceColor`&&O.instanceColor&&(Se=O.instanceColor)),ie===void 0||ie.attribute!==Se||Se&&ie.data!==Se.data)return!0;V++}return r.attributesNum!==V||r.index!==R}function p(O,B,z,R){let W={},Y=B.attributes,V=0,se=z.getAttributes();for(let q in se)if(se[q].location>=0){let ie=Y[q];ie===void 0&&(q===`instanceMatrix`&&O.instanceMatrix&&(ie=O.instanceMatrix),q===`instanceColor`&&O.instanceColor&&(ie=O.instanceColor));let Se={};Se.attribute=ie,ie&&ie.data&&(Se.data=ie.data),W[q]=Se,V++}r.attributes=W,r.attributesNum=V,r.index=R}function x(){let O=r.newAttributes;for(let B=0,z=O.length;B<z;B++)O[B]=0}function m(O){g(O,0)}function g(O,B){let z=r.newAttributes,R=r.enabledAttributes,W=r.attributeDivisors;z[O]=1,R[O]===0&&(s.enableVertexAttribArray(O),R[O]=1),W[O]!==B&&(s.vertexAttribDivisor(O,B),W[O]=B)}function v(){let O=r.newAttributes,B=r.enabledAttributes;for(let z=0,R=B.length;z<R;z++)B[z]!==O[z]&&(s.disableVertexAttribArray(z),B[z]=0)}function b(O,B,z,R,W,Y,V){V===!0?s.vertexAttribIPointer(O,B,z,W,Y):s.vertexAttribPointer(O,B,z,R,W,Y)}function y(O,B,z,R){x();let W=R.attributes,Y=z.getAttributes(),V=B.defaultAttributeValues;for(let se in Y){let q=Y[se];if(q.location>=0){let ee=W[se];if(ee===void 0&&(se===`instanceMatrix`&&O.instanceMatrix&&(ee=O.instanceMatrix),se===`instanceColor`&&O.instanceColor&&(ee=O.instanceColor)),ee!==void 0){let ie=ee.normalized,Se=ee.itemSize,Fe=e.get(ee);if(Fe===void 0)continue;let $=Fe.buffer,C=Fe.type,Z=Fe.bytesPerElement,oe=C===s.INT||C===s.UNSIGNED_INT||ee.gpuType===Ha;if(ee.isInterleavedBufferAttribute){let ne=ee.data,be=ne.isInterleavedBuffer===!0?ne.stride:ne.itemSize,ze=ee.offset;if(ne.isInstancedInterleavedBuffer||ne.isInstancedBufferAttribute){for(let ue=0;ue<q.locationSize;ue++)g(q.location+ue,ne.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<q.locationSize;ue++)m(q.location+ue);s.bindBuffer(s.ARRAY_BUFFER,$);for(let ue=0;ue<q.locationSize;ue++)b(q.location+ue,Se/q.locationSize,C,ie,be*Z,(ze+Se/q.locationSize*ue)*Z,oe)}else{if(ee.isInstancedBufferAttribute){for(let ne=0;ne<q.locationSize;ne++)g(q.location+ne,ee.meshPerAttribute);O.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ne=0;ne<q.locationSize;ne++)m(q.location+ne);s.bindBuffer(s.ARRAY_BUFFER,$);for(let ne=0;ne<q.locationSize;ne++)b(q.location+ne,Se/q.locationSize,C,ie,Se*Z,Se/q.locationSize*ne*Z,oe)}}else if(V!==void 0){let ie=V[se];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(q.location,ie);break;case 3:s.vertexAttrib3fv(q.location,ie);break;case 4:s.vertexAttrib4fv(q.location,ie);break;default:s.vertexAttrib1fv(q.location,ie)}}}}v()}function T(){D();for(let O in n){let B=n[O];for(let z in B){let R=B[z];for(let W in R){let Y=R[W];for(let V in Y)h(Y[V].object),delete Y[V];delete R[W]}}delete n[O]}}function A(O){if(n[O.id]===void 0)return;let B=n[O.id];for(let z in B){let R=B[z];for(let W in R){let Y=R[W];for(let V in Y)h(Y[V].object),delete Y[V];delete R[W]}}delete n[O.id]}function _(O){for(let B in n){let z=n[B];for(let R in z){let W=z[R];if(W[O.id]===void 0)continue;let Y=W[O.id];for(let V in Y)h(Y[V].object),delete Y[V];delete W[O.id]}}}function E(O){for(let B in n){let z=n[B],R=O.isInstancedMesh===!0?O.id:0,W=z[R];if(W!==void 0){for(let Y in W){let V=W[Y];for(let se in V)h(V[se].object),delete V[se];delete W[Y]}delete z[R],Object.keys(z).length===0&&delete n[B]}}}function D(){I(),o=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function X_(s,e,t){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function q_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has(`EXT_texture_filter_anisotropic`)===!0){let _=e.get(`EXT_texture_filter_anisotropic`);i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==1023&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let E=_===1016&&(e.has(`EXT_color_buffer_half_float`)||e.has(`EXT_color_buffer_float`));return!(_!==1009&&_!==Cn&&!E&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_===`highp`){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return`highp`;_=`mediump`}return _===`mediump`&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let c=t.precision!==void 0?t.precision:`highp`,h=l(c);h!==c&&(Ce(`WebGLRenderer:`,c,`not supported, using`,h,`instead.`),c=h);let u=t.reversedDepthBuffer===!0&&e.has(`EXT_clip_control`),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Ce(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),t.logarithmicDepthBuffer===!0&&u===!0&&Ce(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:T,samples:A}}function Y_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Yn,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,b=v*4,y=g.clippingState||null;l.value=y,y=h(p,f,b,d);for(let T=0;T!==b;++T)y[T]=t[T];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=d;b!==x;++b,y+=4)o.copy(u[b]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var bo=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new On(5,5,5),r=new ii({name:`CubemapFromEquirect`,uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=t;let o=new Oe(i,r),a=t.minFilter;return t.minFilter===1008&&(t.minFilter=zt),new ir(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}};var xd=256;var K_=3;var Z_=20;var Gd=256;var Vd=16;var J_=3;var $_=new L;var j_=new we;var Rl=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ir(1,10,null),this._boxMesh=new Oe(new On(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=$_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(j_));let m=new ir(n,i,h);return m.position.copy(a),m.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(xd,ph(e))}_fromTexture(e,t){e.mapping===ms||e.mapping===ar?this._setSize(e.image.length===0?xd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=yd(e,!1,!1),n=Math.log2(e)-K_;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ms||e.mapping===ar?(this._cubemapMaterial===null&&(this._cubemapMaterial=Md()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Q_(),this._integrationMaterial=ex());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Vd);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-J_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Gd*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=tx());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function yd(s,e,t){return new bo(s,{minFilter:zn,generateMipmaps:e,type:Jn,colorSpace:Jt,depthBuffer:t})}function Eo(s,e,t){return new ii({name:s,uniforms:e,vertexShader:et.cube_vert,fragmentShader:t,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Q_(){return Eo(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ex(){return Eo(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function tx(){return Eo(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Z_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function vd(){return Eo(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Md(){return Eo(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function nx(s){let e=/* @__PURE__ */ new WeakMap,t=/* @__PURE__ */ new WeakMap,n=null;function i(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ba||d===za)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new bo(p.height);return x.fromEquirectangularTexture(s,f),e.set(f,x),f.addEventListener(`dispose`,c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Ba||d===za,x=d===ms||d===ar;if(p||x){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Rl(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Rl(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener(`dispose`,h),m.texture):null}}}return f}function a(f,d){return d===Ba?f.mapping=ms:d===za&&(f.mapping=ar),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener(`dispose`,c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener(`dispose`,h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=/* @__PURE__ */ new WeakMap,t=/* @__PURE__ */ new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function ix(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t(`EXT_color_buffer_float`),t(`WEBGL_clip_cull_distance`),t(`OES_texture_float_linear`),t(`EXT_color_buffer_half_float`),t(`WEBGL_multisampled_render_to_texture`),t(`WEBGL_render_shared_exponent`)},get:function(n){let i=t(n);return i===null&&ns(`WebGLRenderer: `+n+` extension not supported.`),i}}}function sx(s,e,t,n){let i={},r=/* @__PURE__ */ new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener(`dispose`,a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(e.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener(`dispose`,a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),t.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)e.update(x[m],s.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let v=x!==null?x.array.length:m.array.length/3-1,y=new(m.count>=65535?Ur:Nr)(Math.ceil(v/3)*6,1),T=y.array;if(x!==null){let _=x.array;g=x.version;for(let E=0,D=0;E<v;E+=3){let I=_[E+0],O=_[E+1],B=_[E+2];T[D++]=I,T[D++]=O,T[D++]=O,T[D++]=B,T[D++]=B,T[D++]=I}}else{g=m.version;for(let _=0,E=0;_<v;_+=3){let D=_+0,I=_+1,O=_+2;T[E++]=D,T[E++]=I,T[E++]=I,T[E++]=O,T[E++]=O,T[E++]=D}}y.version=g;let A=r.get(p);A&&e.remove(A),r.set(p,y)}function f(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function rx(s,e,t){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){s.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,d){d!==0&&(s.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ox(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Be(`WebGLInfo: Unknown draw mode:`,o)}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ax(s,e,t){let n=/* @__PURE__ */ new WeakMap,i=new ut;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let D=function(){_.dispose(),n.delete(a),a.removeEventListener(`dispose`,D)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let y=a.attributes.position.count*b,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*T*4*u),_=new Dr(A,y,T,u);_.type=Cn,_.needsUpdate=!0;let E=b*4;for(let I=0;I<u;I++){let O=m[I],B=g[I],z=v[I],R=y*T*4*I;for(let W=0;W<O.count;W++){let Y=W*E;d===!0&&(i.fromBufferAttribute(O,W),A[R+Y+0]=i.x,A[R+Y+1]=i.y,A[R+Y+2]=i.z,A[R+Y+3]=0),p===!0&&(i.fromBufferAttribute(B,W),A[R+Y+4]=i.x,A[R+Y+5]=i.y,A[R+Y+6]=i.z,A[R+Y+7]=0),x===!0&&(i.fromBufferAttribute(z,W),A[R+Y+8]=i.x,A[R+Y+9]=i.y,A[R+Y+10]=i.z,A[R+Y+11]=z.itemSize===4?i.w:1)}}f={count:u,texture:_,size:new Me(y,T)},n.set(a,f),a.addEventListener(`dispose`,D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,`morphTexture`,o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,`morphTargetBaseInfluence`,p),l.getUniforms().setValue(s,`morphTargetInfluences`,c)}l.getUniforms().setValue(s,`morphTargetsTexture`,f.texture,t),l.getUniforms().setValue(s,`morphTargetsTextureSize`,f.size)}return{update:r}}function lx(s,e,t,n,i){let r=/* @__PURE__ */ new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener(`dispose`,l)===!1&&c.addEventListener(`dispose`,l),r.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=/* @__PURE__ */ new WeakMap}function l(c){let h=c.target;h.removeEventListener(`dispose`,l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var cx={[1]:`LINEAR_TONE_MAPPING`,[2]:`REINHARD_TONE_MAPPING`,[3]:`CINEON_TONE_MAPPING`,[4]:`ACES_FILMIC_TONE_MAPPING`,[6]:`AGX_TONE_MAPPING`,[7]:`NEUTRAL_TONE_MAPPING`,[5]:`CUSTOM_TONE_MAPPING`};function hx(s,e,t,n,i,r){let o=new An(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new bt;h.setAttribute(`position`,new tt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute(`uv`,new tt([0,2,0,0,2,0],2));let u=new Aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Oe(h,u),d=new us(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,v=null,b=[],y=!1;this.setSize=function(T,A){o.setSize(T,A),a!==null&&a.setSize(T,A),l!==null&&l.setSize(T,A);for(let _=0;_<b.length;_++){let E=b[_];E.setSize&&E.setSize(T,A)}},this.setEffects=function(T){b=T,y=b.length>0&&b[0].isRenderPass===!0;let A=o.width,_=o.height;b.length>0&&a===null&&(a=new An(A,_,{type:1016,depthBuffer:!1,stencilBuffer:!1}),l=new An(A,_,{type:1016,depthBuffer:!1,stencilBuffer:!1}));let E=i===!0&&b.some(D=>D.needsDepthTexture===!0);E!==(o.depthTexture!==null)&&(E===!0&&c===null&&(c=new vi(A,_),r===!0&&(c.format=1027,c.type=1020)),o.dispose(),o.depthTexture=E?c:null,o.resolveDepthBuffer=E,o.storeMultisampledDepthBuffer=E);for(let D=0;D<b.length;D++){let I=b[D];I.setSize&&I.setSize(A,_),E&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(T,A){if(m||T.toneMapping===oi&&b.length===0)return!1;if(v=A,A!==null){let _=A.width,E=A.height;(o.width!==_||o.height!==E)&&this.setSize(_,E)}return y===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=oi,!0},this.hasRenderPass=function(){return y},this.end=function(T,A){T.toneMapping=g,m=!0;let _=o,E=a;for(let D=0;D<b.length;D++){let I=b[D];I.enabled!==!1&&(I.render(T,E,_,A),I.needsSwap!==!1&&(_=E,E=E===a?l:a))}if(p!==T.outputColorSpace||x!==T.toneMapping){p=T.outputColorSpace,x=T.toneMapping,u.defines={},Je.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let D=cx[x];D&&(u.defines[D]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(v),T.render(f,d),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Wd=new kt;var Xd=new vi(1,1);var qd=new Wr(1);var Yd=new Dr;var Kd=new xa;var Zd=new Gr;var Sd=[];var bd=[];var Ed=/* @__PURE__ */ new Float32Array(16);var Td=/* @__PURE__ */ new Float32Array(9);var Ad=/* @__PURE__ */ new Float32Array(4);function dr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Sd[i];if(r===void 0&&(r=new Float32Array(i),Sd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ht(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Gt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Cl(s,e){let t=bd[e];t===void 0&&(t=new Int32Array(e),bd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ux(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2fv(this.addr,e),Gt(t,e)}}function dx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;s.uniform3fv(this.addr,e),Gt(t,e)}}function px(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4fv(this.addr,e),Gt(t,e)}}function mx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Ad.set(n),s.uniformMatrix2fv(this.addr,!1,Ad),Gt(t,n)}}function gx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Td.set(n),s.uniformMatrix3fv(this.addr,!1,Td),Gt(t,n)}}function _x(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Ht(t,n))return;Ed.set(n),s.uniformMatrix4fv(this.addr,!1,Ed),Gt(t,n)}}function xx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2iv(this.addr,e),Gt(t,e)}}function vx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3iv(this.addr,e),Gt(t,e)}}function Mx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4iv(this.addr,e),Gt(t,e)}}function Sx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;s.uniform2uiv(this.addr,e),Gt(t,e)}}function Ex(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;s.uniform3uiv(this.addr,e),Gt(t,e)}}function Tx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;s.uniform4uiv(this.addr,e),Gt(t,e)}}function Il(s){return s.version===0&&(s.compareFunction=hh,s.needsUpdate=!0),s}function Ax(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=Il(Xd):r=Wd,t.setTexture2D(e||r,i)}function wx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kd,i)}function Rx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=Il(qd):r=Zd,t.setTextureCube(e||r,i)}function Cx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yd,i)}function Ix(s){switch(s){case 5126:return ux;case 35664:return fx;case 35665:return dx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return _x;case 5124:case 35670:return xx;case 35667:case 35671:return yx;case 35668:case 35672:return vx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return bx;case 36295:return Ex;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Rx;case 36289:case 36303:case 36311:case 36292:return Cx}}function Px(s,e){s.uniform1fv(this.addr,e)}function Lx(s,e){let t=dr(e,this.size,2);s.uniform2fv(this.addr,t)}function Dx(s,e){let t=dr(e,this.size,3);s.uniform3fv(this.addr,t)}function Nx(s,e){let t=dr(e,this.size,4);s.uniform4fv(this.addr,t)}function Ux(s,e){let t=dr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Ox(s,e){let t=dr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Fx(s,e){let t=dr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Bx(s,e){s.uniform1iv(this.addr,e)}function zx(s,e){s.uniform2iv(this.addr,e)}function kx(s,e){s.uniform3iv(this.addr,e)}function Hx(s,e){s.uniform4iv(this.addr,e)}function Gx(s,e){s.uniform1uiv(this.addr,e)}function Vx(s,e){s.uniform2uiv(this.addr,e)}function Wx(s,e){s.uniform3uiv(this.addr,e)}function Xx(s,e){s.uniform4uiv(this.addr,e)}function qx(s,e,t){let n=this.cache,i=e.length,r=Cl(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Il(Xd):o=Wd;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function Yx(s,e,t){let n=this.cache,i=e.length,r=Cl(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Kd,r[o])}function Kx(s,e,t){let n=this.cache,i=e.length,r=Cl(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=Il(qd):o=Zd;for(let a=0;a!==i;++a)t.setTextureCube(e[a]||o,r[a])}function Zx(s,e,t){let n=this.cache,i=e.length,r=Cl(t,i);Ht(n,r)||(s.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Yd,r[o])}function Jx(s){switch(s){case 5126:return Px;case 35664:return Lx;case 35665:return Dx;case 35666:return Nx;case 35674:return Ux;case 35675:return Ox;case 35676:return Fx;case 5124:case 35670:return Bx;case 35667:case 35671:return zx;case 35668:case 35672:return kx;case 35669:case 35673:return Hx;case 5125:return Gx;case 36294:return Vx;case 36295:return Wx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Zx}}var Eh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ix(t.type)}};var Th=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jx(t.type)}};var Ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}};var Sh=/(\w+)(\])?(\[|\.)?/g;function wd(s,e){s.seq.push(e),s.map[e.id]=e}function $x(s,e,t){let n=s.name,i=n.length;for(Sh.lastIndex=0;;){let r=Sh.exec(n),o=Sh.lastIndex,a=r[1],l=r[2]===`]`,c=r[3];if(l&&(a=a|0),c===void 0||c===`[`&&o+2===i){wd(t,c===void 0?new Eh(a,s,e):new Th(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Ah(a),wd(t,u)),t=u}}}var fr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o);$x(a,e.getUniformLocation(t,a.name),this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Rd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var jx=37297;var Qx=0;function ey(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?`>`:` `} ${a}: ${t[o]}`)}return n.join(`
`)}var Cd=new He;function ty(s){Je._getMatrix(Cd,Je.workingColorSpace,s);let e=`mat3( ${Cd.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(s)){case Pr:return[e,`LinearTransferOETF`];case ct:return[e,`sRGBTransferOETF`];default:return Ce(`WebGLProgram: Unsupported color space: `,s),[e,`LinearTransferOETF`]}}function Id(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||``).trim();if(n&&r===``)return``;let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ey(s.getShaderSource(e),a)}else return r}function ny(s,e){let t=ty(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var iy={[1]:`Linear`,[2]:`Reinhard`,[3]:`Cineon`,[4]:`ACESFilmic`,[6]:`AgX`,[7]:`Neutral`,[5]:`Custom`};function sy(s,e){let t=iy[e];return t===void 0?(Ce(`WebGLProgram: Unsupported toneMapping:`,e),`vec3 `+s+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+s+`( vec3 color ) { return `+t+`ToneMapping( color ); }`}var wl=new L;function ry(){Je.getLuminanceCoefficients(wl);return[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${wl.x.toFixed(4)}, ${wl.y.toFixed(4)}, ${wl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function oy(s){return[s.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,s.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(So).join(`
`)}function ay(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push(`#define `+t+` `+n)}return e.join(`
`)}function ly(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function So(s){return s!==``}function Pd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ld(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cy=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(s){return s.replace(cy,hy)}function hy(s,e){let t=et[e];if(t===void 0)throw new Error(`THREE.WebGLProgram: Can not resolve #include <`+e+`>`);return wh(t)}var uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dd(s){return s.replace(uy,fy)}function fy(s,e,t,n){let i=``;for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,`[ `+r+` ]`).replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision===`highp`?e+=`
#define HIGH_PRECISION`:s.precision===`mediump`?e+=`
#define MEDIUM_PRECISION`:s.precision===`lowp`&&(e+=`
#define LOW_PRECISION`),e}var dy={[1]:`SHADOWMAP_TYPE_PCF`,[sr]:`SHADOWMAP_TYPE_VSM`};function py(s){return dy[s.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var my={[ar]:`ENVMAP_MODE_REFRACTION`};function gy(s){return s.envMap===!1?`ENVMAP_MODE_REFLECTION`:my[s.envMapMode]||`ENVMAP_MODE_REFLECTION`}var _y={[Fa]:`ENVMAP_BLENDING_MULTIPLY`,[Kf]:`ENVMAP_BLENDING_MIX`,[Zf]:`ENVMAP_BLENDING_ADD`};function xy(s){return s.envMap===!1?`ENVMAP_BLENDING_NONE`:_y[s.combine]||`ENVMAP_BLENDING_NONE`}function yy(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=py(t),c=t.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,h=gy(t),u=xy(t),f=oy(t),d=ay(r),p=i.createProgram(),x,m,g=t.glslVersion?`#version `+t.glslVersion+`
`:``;t.isRawShaderMaterial?(x=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,d].filter(So).join(`
`),x.length>0&&(x+=`
`),m=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,d].filter(So).join(`
`),m.length>0&&(m+=`
`)):(x=[Nd(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,d,t.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,t.batching?`#define USE_BATCHING`:``,t.batchingColor?`#define USE_BATCHING_COLOR`:``,t.instancing?`#define USE_INSTANCING`:``,t.instancingColor?`#define USE_INSTANCING_COLOR`:``,t.instancingMorph?`#define USE_INSTANCING_MORPH`:``,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.map?`#define USE_MAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+h:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.displacementMap?`#define USE_DISPLACEMENTMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.mapUv?`#define MAP_UV `+t.mapUv:``,t.alphaMapUv?`#define ALPHAMAP_UV `+t.alphaMapUv:``,t.lightMapUv?`#define LIGHTMAP_UV `+t.lightMapUv:``,t.aoMapUv?`#define AOMAP_UV `+t.aoMapUv:``,t.emissiveMapUv?`#define EMISSIVEMAP_UV `+t.emissiveMapUv:``,t.bumpMapUv?`#define BUMPMAP_UV `+t.bumpMapUv:``,t.normalMapUv?`#define NORMALMAP_UV `+t.normalMapUv:``,t.displacementMapUv?`#define DISPLACEMENTMAP_UV `+t.displacementMapUv:``,t.metalnessMapUv?`#define METALNESSMAP_UV `+t.metalnessMapUv:``,t.roughnessMapUv?`#define ROUGHNESSMAP_UV `+t.roughnessMapUv:``,t.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+t.anisotropyMapUv:``,t.clearcoatMapUv?`#define CLEARCOATMAP_UV `+t.clearcoatMapUv:``,t.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+t.clearcoatNormalMapUv:``,t.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+t.clearcoatRoughnessMapUv:``,t.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+t.diffuseRoughnessMapUv:``,t.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+t.iridescenceMapUv:``,t.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+t.iridescenceThicknessMapUv:``,t.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+t.sheenColorMapUv:``,t.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+t.sheenRoughnessMapUv:``,t.specularMapUv?`#define SPECULARMAP_UV `+t.specularMapUv:``,t.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+t.specularColorMapUv:``,t.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+t.specularIntensityMapUv:``,t.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+t.transmissionMapUv:``,t.thicknessMapUv?`#define THICKNESSMAP_UV `+t.thicknessMapUv:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexNormals?`#define HAS_NORMAL`:``,t.vertexColors?`#define USE_COLOR`:``,t.vertexAlphas?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.flatShading?`#define FLAT_SHADED`:``,t.skinning?`#define USE_SKINNING`:``,t.morphTargets?`#define USE_MORPHTARGETS`:``,t.morphNormals&&t.flatShading===!1?`#define USE_MORPHNORMALS`:``,t.morphColors?`#define USE_MORPHCOLORS`:``,t.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+t.morphTextureStride:``,t.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+t.morphTargetsCount:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+l:``,t.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(So).join(`
`),m=[Nd(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,d,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,t.map?`#define USE_MAP`:``,t.matcap?`#define USE_MATCAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+c:``,t.envMap?`#define `+h:``,t.envMap?`#define `+u:``,t.envMapPMREM?`#define ENVMAP_MAX_LOD `+t.envMapMaxLod+`.0`:``,t.envMapPMREM?`#define ENVMAP_SIZE `+t.envMapSize+`.0`:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoat?`#define USE_CLEARCOAT`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,t.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,t.dispersion?`#define USE_DISPERSION`:``,t.retroreflection?`#define USE_RETROREFLECTION`:``,t.iridescence?`#define USE_IRIDESCENCE`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaTest?`#define USE_ALPHATEST`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.sheen?`#define USE_SHEEN`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexColors||t.instancingColor?`#define USE_COLOR`:``,t.vertexAlphas||t.batchingColor?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.gradientMap?`#define USE_GRADIENTMAP`:``,t.flatShading?`#define FLAT_SHADED`:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+l:``,t.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,t.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,t.toneMapping!==oi?`#define TONE_MAPPING`:``,t.toneMapping!==oi?et.tonemapping_pars_fragment:``,t.toneMapping!==oi?sy(`toneMapping`,t.toneMapping):``,t.dithering?`#define DITHERING`:``,t.opaque?`#define OPAQUE`:``,et.colorspace_pars_fragment,ny(`linearToOutputTexel`,t.outputColorSpace),ry(),t.useDepthPacking?`#define DEPTH_PACKING `+t.depthPacking:``,`
`].filter(So).join(`
`)),o=wh(o),o=Pd(o,t),o=Ld(o,t),a=wh(a),a=Pd(a,t),a=Ld(a,t),o=Dd(o),a=Dd(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+x,m=[`#define varying in`,t.glslVersion===fh?``:`layout(location = 0) out highp vec4 pc_fragColor;`,t.glslVersion===fh?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+m);let v=g+x+o,b=g+m+a,y=Rd(i,i.VERTEX_SHADER,v),T=Rd(i,i.FRAGMENT_SHADER,b);i.attachShader(p,y),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,`position`),i.linkProgram(p);function A(I){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(p)||``,B=i.getShaderInfoLog(y)||``,z=i.getShaderInfoLog(T)||``,R=O.trim(),W=B.trim(),Y=z.trim(),V=!0,se=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError==`function`)s.debug.onShaderError(i,p,y,T);else{let q=Id(i,y,`vertex`),ee=Id(i,T,`fragment`);Be(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+R+`
`+q+`
`+ee)}else R!==``?Ce(`WebGLProgram: Program Info Log:`,R):(W===``||Y===``)&&(se=!1);se&&(I.diagnostics={runnable:V,programLog:R,vertexShader:{log:W,prefix:x},fragmentShader:{log:Y,prefix:m}})}i.deleteShader(y),i.deleteShader(T),_=new fr(i,p),E=ly(i,p)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(p,jx)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qx++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}var vy=0;var Rh=class{constructor(){this.shaderCache=/* @__PURE__ */ new Map,this.materialCache=/* @__PURE__ */ new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=/* @__PURE__ */ new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ch(e),t.set(e,n)),n}};var Ch=class{constructor(e){this.id=vy++,this.code=e,this.usedTimes=0}};function My(s){return s===Xi||s===xo||s===yo}function Sy(s,e,t,n,i,r){let o=new qs,a=new Rh,l=/* @__PURE__ */ new Set,c=[],h=/* @__PURE__ */ new Map,u=n.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function d(_){return l.add(_),_===0?`uv`:`uv${_}`}function p(_,E,D,I,O,B){let z=I.fog,R=O.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||W,Y),se=f[_.type],q=n.precision;_.precision!==null&&(q=n.getMaxPrecision(_.precision),q!==_.precision&&Ce(`WebGLProgram.getParameters:`,_.precision,`not supported, using`,q,`instead.`));let ee=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ie=ee!==void 0?ee.length:0,Se=0;R.morphAttributes.position!==void 0&&(Se=1),R.morphAttributes.normal!==void 0&&(Se=2),R.morphAttributes.color!==void 0&&(Se=3);let Fe,$,C,Z;if(se){let xe=li[se];Fe=xe.vertexShader,$=xe.fragmentShader}else{Fe=_.vertexShader,$=_.fragmentShader;let xe=a.getVertexShaderStage(_),ht=a.getFragmentShaderStage(_);a.update(_,xe,ht),C=xe.id,Z=ht.id}let oe=s.getRenderTarget(),ne=s.state.buffers.depth.getReversed(),be=O.isInstancedMesh===!0,ze=O.isBatchedMesh===!0,ue=!!_.map,Ve=!!_.matcap,Ke=!!V,ke=Ke&&V.isPMREMTexture===!0,dt=!!_.aoMap,Et=!!_.lightMap,pt=!!_.bumpMap&&_.wireframe===!1,at=!!_.normalMap,hn=!!_.displacementMap,Rt=!!_.emissiveMap,mn=!!_.metalnessMap,gn=!!_.roughnessMap,_n=_.anisotropy>0,F=_.clearcoat>0,In=_.diffuseRoughness>0,vt=_.dispersion>0,Mt=_.retroreflectivity>0,_e=_.iridescence>0,Ft=_.sheen>0,Ue=_.transmission>0,We=_n&&!!_.anisotropyMap,w=F&&!!_.clearcoatMap,M=F&&!!_.clearcoatNormalMap,H=F&&!!_.clearcoatRoughnessMap,re=In&&!!_.diffuseRoughnessMap,te=_e&&!!_.iridescenceMap,ce=_e&&!!_.iridescenceThicknessMap,me=Ft&&!!_.sheenColorMap,J=Ft&&!!_.sheenRoughnessMap,j=!!_.specularMap,fe=!!_.specularColorMap,P=!!_.specularIntensityMap,Q=Ue&&!!_.transmissionMap,K=Ue&&!!_.thicknessMap,de=!!_.gradientMap,le=!!_.alphaMap,he=_.alphaTest>0,Ie=!!_.alphaHash,Qe=!!_.extensions,ae=oi;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ae=s.toneMapping);let De=ke?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ze={shaderID:se,shaderType:_.type,shaderName:_.name,vertexShader:Fe,fragmentShader:$,defines:_.defines,customVertexShaderID:C,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:ze,batchingColor:ze&&O._colorsTexture!==null,instancing:be,instancingColor:be&&O.instanceColor!==null,instancingMorph:be&&O.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ue,matcap:Ve,envMap:Ke,envMapMode:Ke&&V.mapping,envMapPMREM:ke,envMapMaxLod:ke?De.length-1:null,envMapSize:ke?De[0].width:null,aoMap:dt,lightMap:Et,bumpMap:pt,normalMap:at,displacementMap:hn,emissiveMap:Rt,normalMapObjectSpace:at&&_.normalMapType===Qf,normalMapTangentSpace:at&&_.normalMapType===ur,packedNormalMap:at&&_.normalMapType===ur&&My(_.normalMap.format),metalnessMap:mn,roughnessMap:gn,anisotropy:_n,anisotropyMap:We,clearcoat:F,clearcoatMap:w,clearcoatNormalMap:M,clearcoatRoughnessMap:H,diffuseRoughness:In,diffuseRoughnessMap:re,dispersion:vt,retroreflection:Mt,iridescence:_e,iridescenceMap:te,iridescenceThicknessMap:ce,sheen:Ft,sheenColorMap:me,sheenRoughnessMap:J,specularMap:j,specularColorMap:fe,specularIntensityMap:P,transmission:Ue,transmissionMap:Q,thicknessMap:K,gradientMap:de,opaque:_.transparent===!1&&_.blending===rr&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:he,alphaHash:Ie,combine:_.combine,mapUv:ue&&d(_.map.channel),aoMapUv:dt&&d(_.aoMap.channel),lightMapUv:Et&&d(_.lightMap.channel),bumpMapUv:pt&&d(_.bumpMap.channel),normalMapUv:at&&d(_.normalMap.channel),displacementMapUv:hn&&d(_.displacementMap.channel),emissiveMapUv:Rt&&d(_.emissiveMap.channel),metalnessMapUv:mn&&d(_.metalnessMap.channel),roughnessMapUv:gn&&d(_.roughnessMap.channel),anisotropyMapUv:We&&d(_.anisotropyMap.channel),clearcoatMapUv:w&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:M&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:te&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&d(_.sheenRoughnessMap.channel),specularMapUv:j&&d(_.specularMap.channel),specularColorMapUv:fe&&d(_.specularColorMap.channel),specularIntensityMapUv:P&&d(_.specularIntensityMap.channel),transmissionMapUv:Q&&d(_.transmissionMap.channel),thicknessMapUv:K&&d(_.thicknessMap.channel),alphaMapUv:le&&d(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(at||_n),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!R.attributes.uv&&(ue||le),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&at===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ne,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Se,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:ue&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:Rt&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===2,flipSided:_.side===1,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qe&&_.extensions.clipCullDistance===!0&&t.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Qe&&_.extensions.multiDraw===!0||ze)&&t.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:t.has(`KHR_parallel_shader_compile`),customProgramCacheKey:_.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function x(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)E.push(D),E.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(E,_),g(E,_),E.push(s.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function m(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function g(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.diffuseRoughness&&o.enable(25),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let E=f[_.type],D;if(E){let I=li[E];D=md.clone(I.uniforms)}else D=_.uniforms;return D}function b(_,E){let D=h.get(E);return D!==void 0?++D.usedTimes:(D=new yy(s,E,_,i),c.push(D),h.set(E,D)),D}function y(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function A(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:b,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:A}}function by(){let s=/* @__PURE__ */ new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=/* @__PURE__ */ new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Ey(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ud(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Od(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let v=s[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},s[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=g),e++,v}function l(f,d,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let b=a(f,d,p,x,m,g);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):t.push(b)}function c(f,d,p,x,m,g){let v=a(f,d,p,x,m,g);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function h(f,d){t.length>1&&t.sort(f||Ey),n.length>1&&n.sort(d||Ud),i.length>1&&i.sort(d||Ud)}function u(){for(let f=e,d=s.length;f<d;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Ty(){let s=/* @__PURE__ */ new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new Od,s.set(n,[o])):i>=r.length?(o=new Od,r.push(o)):o=r[i],o}function t(){s=/* @__PURE__ */ new WeakMap}return{get:e,dispose:t}}function Ay(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case`SunLight`:case`DirectionalLight`:t={direction:new L,color:new we};break;case`SpotLight`:t={position:new L,direction:new L,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:t={position:new L,color:new we,distance:0,decay:0};break;case`HemisphereLight`:t={direction:new L,skyColor:new we,groundColor:new we};break;case`RectAreaLight`:t={color:new we,position:new L,halfWidth:new L,halfHeight:new L}}return s[e.id]=t,t}}}function wy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case`SunLight`:case`DirectionalLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case`SpotLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case`PointLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3}}return s[e.id]=t,t}}}var Ry=0;function Cy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Iy(s){let e=new Ay,t=wy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,r=new Xe,o=new Xe;function a(c){let h=0,u=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,v=0,b=0,y=0,T=0,A=0,_=0,E=0,D=0,I=0;c.sort(Cy);for(let B=0,z=c.length;B<z;B++){let R=c[B],W=R.color,Y=R.intensity,V=R.distance,se=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Xi?se=R.shadow.map.texture:se=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=W.r*Y,u+=W.g*Y,f+=W.b*Y;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],Y);I++}else if(R.isSunLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ee=R.shadow,ie=t.get(R);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[p]=ie,n.sunShadowMap[p]=se;let Se=ee.getViewportCount();for(let Fe=0;Fe<Se;Fe++)n.sunShadowMatrix[x+Fe]=ee.getMatrix(Fe),n.sunShadowCascade[x+Fe]=ee._cascadeData[Fe];x+=Se,p++}n.sun[d]=q,d++}else if(R.isDirectionalLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let ee=R.shadow,ie=t.get(R);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,n.directionalShadow[m]=ie,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=R.shadow.matrix,T++}n.directional[m]=q,m++}else if(R.isSpotLight){let q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(W).multiplyScalar(Y),q.distance=V,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[v]=q;let ee=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,ee.updateMatrices(R),R.castShadow&&D++),n.spotLightMatrix[v]=ee.matrix,R.castShadow){let ie=t.get(R);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,n.spotShadow[v]=ie,n.spotShadowMap[v]=se,_++}v++}else if(R.isRectAreaLight){let q=e.get(R);q.color.copy(W).multiplyScalar(Y),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[b]=q,b++}else if(R.isPointLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let ee=R.shadow,ie=t.get(R);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=se,n.pointShadowMatrix[g]=R.shadow.matrix,A++}n.point[g]=q,g++}else if(R.isHemisphereLight){let q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(Y),q.groundColor.copy(R.groundColor).multiplyScalar(Y),n.hemi[y]=q,y++}}b>0&&(s.has(`OES_texture_float_linear`)===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let O=n.hash;(O.sunLength!==d||O.directionalLength!==m||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==b||O.hemiLength!==y||O.numSunShadows!==p||O.numDirectionalShadows!==T||O.numPointShadows!==A||O.numSpotShadows!==_||O.numSpotMaps!==E||O.numLightProbes!==I)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=b,n.point.length=g,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-D,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,O.sunLength=d,O.directionalLength=m,O.pointLength=g,O.spotLength=v,O.rectAreaLength=b,O.hemiLength=y,O.numSunShadows=p,O.numDirectionalShadows=T,O.numPointShadows=A,O.numSpotShadows=_,O.numSpotMaps=E,O.numLightProbes=I,n.version=Ry++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),u++}else if(y.isDirectionalLight){let T=n.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),f++}else if(y.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Fd(s){let e=new Iy(s),t=[],n=[],i=[];function r(u){h.camera=u,t.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):t.push(u)}function a(u){n.push(u)}function l(){e.setup(t),i.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Py(s){let e=/* @__PURE__ */ new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Fd(s),e.set(i,[a])):r>=o.length?(a=new Fd(s),o.push(a)):a=o[r],a}function n(){e=/* @__PURE__ */ new WeakMap}return{get:t,dispose:n}}var Ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;var Dy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`;var Ny=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)];var Uy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)];var Bd=new Xe;var Mo=new L;var bh=new L;function Oy(s,e,t){let n=new Vi,i=new Me,r=new Me,o=new ut,a=new wa,l=new Ra,c={},h=t.maxTextureSize,u={[ri]:1,[1]:ri,[2]:2},f=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Ly,fragmentShader:Dy}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new bt;p.setAttribute(`position`,new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Oe(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let g=this.type;this.render=function(A,_,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Cf&&(Ce(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let D=s.getRenderTarget(),I=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),B=s.state;B.setBlending(0),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=g!==this.type;z&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(W=>W.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,W=A.length;R<W;R++){let Y=A[R],V=Y.shadow;if(V===void 0){Ce(`WebGLShadowMap:`,Y,`has no shadow.`);continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let se=V.getFrameExtents();i.multiply(se),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/se.x),i.x=r.x*se.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/se.y),i.y=r.y*se.y,V.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=q,V.map===null||z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===sr){if(Y.isPointLight){Ce(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}V.map=new An(i.x,i.y,{format:Xi,type:Jn,minFilter:zt,magFilter:zt,generateMipmaps:!1}),V.map.texture.name=Y.name+`.shadowMap`,V.map.depthTexture=new vi(i.x,i.y,Cn),V.map.depthTexture.name=Y.name+`.shadowMapDepth`,V.map.depthTexture.format=xi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=St,V.map.depthTexture.magFilter=St}else Y.isPointLight?(V.map=new bo(i.x),V.map.depthTexture=new Wr(i.x,Zn)):(V.map=new An(i.x,i.y),V.map.depthTexture=new vi(i.x,i.y,Zn)),V.map.depthTexture.name=Y.name+`.shadowMap`,V.map.depthTexture.format=xi,this.type===1?(V.map.depthTexture.compareFunction=q?ch:lh,V.map.depthTexture.minFilter=zt,V.map.depthTexture.magFilter=zt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=St,V.map.depthTexture.magFilter=St);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);let ee=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Y.isPointLight!==!0&&V.updateMatrices(Y,E);let ie=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:E.layers;for(let Se=0;Se<ee;Se++){let Fe=V.getCamera(Se);if(Y.isPointLight){let $=V.camera,C=V.matrix,Z=Y.distance||$.far;Z!==$.far&&($.far=Z,$.updateProjectionMatrix()),Mo.setFromMatrixPosition(Y.matrixWorld),$.position.copy(Mo),bh.copy($.position),bh.add(Ny[Se]),$.up.copy(Uy[Se]),$.lookAt(bh),$.updateMatrixWorld(),C.makeTranslation(-Mo.x,-Mo.y,-Mo.z),Bd.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Bd,$.coordinateSystem,$.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(V.map),s.clear());let $=V.getViewport(Se);o.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),B.viewport(o)}n=V.getFrustum(Se),y(_,E,Fe,Y,ie,this.type)}V.isPointLightShadow!==!0&&this.type===sr&&v(V,E),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(D,I,O)};function v(A,_){let E=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new An(i.x,i.y,{format:Xi,type:Jn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(_,null,E,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(_,null,E,d,x,null)}function b(A,_,E,D){let I=null,O=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)I=O;else if(I=E.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=I.uuid,z=_.uuid,R=c[B];R===void 0&&(R={},c[B]=R);let W=R[z];W===void 0&&(W=I.clone(),R[z]=W,_.addEventListener(`dispose`,T)),I=W}if(I.visible=_.visible,I.wireframe=_.wireframe,D===sr?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:u[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=s.properties.get(I);B.light=E}return I}function y(A,_,E,D,I,O){if(A.visible===!1)return;if(A.layers.test(I)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===sr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);let R=e.update(A),W=A.material;if(Array.isArray(W)){let Y=R.groups;for(let V=0,se=Y.length;V<se;V++){let q=Y[V],ee=W[q.materialIndex];if(ee&&ee.visible){let ie=b(A,ee,D,O);A.onBeforeShadow(s,A,_,E,R,ie,q),s.renderBufferDirect(E,null,R,ie,A,q),A.onAfterShadow(s,A,_,E,R,ie,q)}}}else if(W.visible){let Y=b(A,W,D,O);A.onBeforeShadow(s,A,_,E,R,Y,null),s.renderBufferDirect(E,null,R,Y,A,null),A.onAfterShadow(s,A,_,E,R,Y,null)}}let z=A.children;for(let R=0,W=z.length;R<W;R++)y(z[R],_,E,D,I,O)}function T(A){A.target.removeEventListener(`dispose`,T);for(let E in c){let D=c[E],I=A.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function Fy(s,e){function t(){let P=!1,Q=new ut,K=null,de=new ut(0,0,0,0);return{setMask:function(le){K!==le&&!P&&(s.colorMask(le,le,le,le),K=le)},setLocked:function(le){P=le},setClear:function(le,he,Ie,Qe,ae){ae===!0&&(le*=Qe,he*=Qe,Ie*=Qe),Q.set(le,he,Ie,Qe),de.equals(Q)===!1&&(s.clearColor(le,he,Ie,Qe),de.copy(Q))},reset:function(){P=!1,K=null,de.set(-1,0,0,0)}}}function n(){let P=!1,Q=!1,K=null,de=null,le=null;return{setReversed:function(he){if(Q!==he){let Ie=e.get(`EXT_clip_control`);he?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Q=he;let Qe=le;le=null,this.setClear(Qe)}},getReversed:function(){return Q},setTest:function(he){he?ne(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(he){K!==he&&!P&&(s.depthMask(he),K=he)},setFunc:function(he){if(Q&&(he=cd[he]),de!==he){switch(he){case ca:s.depthFunc(s.NEVER);break;case ha:s.depthFunc(s.ALWAYS);break;case ua:s.depthFunc(s.LESS);break;case ks:s.depthFunc(s.LEQUAL);break;case fa:s.depthFunc(s.EQUAL);break;case da:s.depthFunc(s.GEQUAL);break;case pa:s.depthFunc(s.GREATER);break;case ma:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=he}},setLocked:function(he){P=he},setClear:function(he){le!==he&&(le=he,Q&&(he=1-he),s.clearDepth(he))},reset:function(){P=!1,K=null,de=null,le=null,Q=!1}}}function i(){let P=!1,Q=null,K=null,de=null,le=null,he=null,Ie=null,Qe=null,ae=null;return{setTest:function(De){P||(De?ne(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(De){Q!==De&&!P&&(s.stencilMask(De),Q=De)},setFunc:function(De,Ze,xe){(K!==De||de!==Ze||le!==xe)&&(s.stencilFunc(De,Ze,xe),K=De,de=Ze,le=xe)},setOp:function(De,Ze,xe){(he!==De||Ie!==Ze||Qe!==xe)&&(s.stencilOp(De,Ze,xe),he=De,Ie=Ze,Qe=xe)},setLocked:function(De){P=De},setClear:function(De){ae!==De&&(s.clearStencil(De),ae=De)},reset:function(){P=!1,Q=null,K=null,de=null,le=null,he=null,Ie=null,Qe=null,ae=null}}}let r=new t,o=new n,a=new i,l={},c=/* @__PURE__ */ new WeakMap,h={},u={},f={},d=/* @__PURE__ */ new WeakMap,p=[],x=null,m=!1,g=null,v=null,b=null,y=null,T=null,A=null,_=null,E=new we(0,0,0),D=0,I=!1,O=null,B=null,z=null,R=null,W=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,se=0,q=s.getParameter(s.VERSION);q.indexOf(`WebGL`)!==-1?(se=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=se>=1):q.indexOf(`OpenGL ES`)!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=se>=2);let ee=null,ie={},Se=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),$=new ut().fromArray(Se),C=new ut().fromArray(Fe);function Z(P,Q,K,de){let le=/* @__PURE__ */ new Uint8Array(4),he=s.createTexture();s.bindTexture(P,he),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ie=0;Ie<K;Ie++)P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY?s.texImage3D(Q,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(Q+Ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return he}let oe={};oe[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(s.DEPTH_TEST),o.setFunc(ks),pt(!1),at(Gc),ne(s.CULL_FACE),dt(0);function ne(P){h[P]!==!0&&(s.enable(P),h[P]=!0)}function be(P){h[P]!==!1&&(s.disable(P),h[P]=!1)}function ze(P,Q){return f[P]!==Q?(s.bindFramebuffer(P,Q),f[P]=Q,P===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Q),P===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Q),!0):!1}function ue(P,Q){let K=p,de=!1;if(P){K=d.get(Q),K===void 0&&(K=[],d.set(Q,K));let le=P.textures;if(K.length!==le.length||K[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Ie=le.length;he<Ie;he++)K[he]=s.COLOR_ATTACHMENT0+he;K.length=le.length,de=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,de=!0);de&&s.drawBuffers(K)}function Ve(P){return x!==P?(s.useProgram(P),x=P,!0):!1}let Ke={[100]:s.FUNC_ADD,[Pf]:s.FUNC_SUBTRACT,[Lf]:s.FUNC_REVERSE_SUBTRACT};Ke[Df]=s.MIN,Ke[Nf]=s.MAX;let ke={[200]:s.ZERO,[Of]:s.ONE,[Ff]:s.SRC_COLOR,[Xc]:s.SRC_ALPHA,[Vf]:s.SRC_ALPHA_SATURATE,[208]:s.DST_COLOR,[206]:s.DST_ALPHA,[Bf]:s.ONE_MINUS_SRC_COLOR,[qc]:s.ONE_MINUS_SRC_ALPHA,[Gf]:s.ONE_MINUS_DST_COLOR,[kf]:s.ONE_MINUS_DST_ALPHA,[Wf]:s.CONSTANT_COLOR,[Xf]:s.ONE_MINUS_CONSTANT_COLOR,[qf]:s.CONSTANT_ALPHA,[Yf]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(P,Q,K,de,le,he,Ie,Qe,ae,De){if(P===0){m===!0&&(be(s.BLEND),m=!1);return}if(m===!1&&(ne(s.BLEND),m=!0),P!==5){if(P!==g||De!==I){if((v!==100||T!==100)&&(s.blendEquation(s.FUNC_ADD),v=100,T=100),De)switch(P){case rr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case Vc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Be(`WebGLState: Invalid blending: `,P)}else switch(P){case rr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vc:Be(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case Wc:Be(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Be(`WebGLState: Invalid blending: `,P)}b=null,y=null,A=null,_=null,E.set(0,0,0),D=0,g=P,I=De}return}le=le||Q,he=he||K,Ie=Ie||de,(Q!==v||le!==T)&&(s.blendEquationSeparate(Ke[Q],Ke[le]),v=Q,T=le),(K!==b||de!==y||he!==A||Ie!==_)&&(s.blendFuncSeparate(ke[K],ke[de],ke[he],ke[Ie]),b=K,y=de,A=he,_=Ie),(Qe.equals(E)===!1||ae!==D)&&(s.blendColor(Qe.r,Qe.g,Qe.b,ae),E.copy(Qe),D=ae),g=P,I=!1}function Et(P,Q){P.side===2?be(s.CULL_FACE):ne(s.CULL_FACE);let K=P.side===1;Q&&(K=!K),pt(K),P.blending===rr&&P.transparent===!1?dt(0):dt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);let de=P.stencilWrite;a.setTest(de),de&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Rt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ne(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(P){O!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),O=P)}function at(P){P!==wf?(ne(s.CULL_FACE),P!==B&&(P===Gc?s.cullFace(s.BACK):P===Rf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),B=P}function hn(P){P!==z&&(V&&s.lineWidth(P),z=P)}function Rt(P,Q,K){P?(ne(s.POLYGON_OFFSET_FILL),(R!==Q||W!==K)&&(R=Q,W=K,o.getReversed()&&(Q=-Q,K=-K),s.polygonOffset(Q,K))):be(s.POLYGON_OFFSET_FILL)}function mn(P){P?ne(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function gn(P){P===void 0&&(P=s.TEXTURE0+Y-1),ee!==P&&(s.activeTexture(P),ee=P)}function _n(P,Q,K){K===void 0&&(ee===null?K=s.TEXTURE0+Y-1:K=ee);let de=ie[K];de===void 0&&(de={type:void 0,texture:void 0},ie[K]=de),(de.type!==P||de.texture!==Q)&&(ee!==K&&(s.activeTexture(K),ee=K),s.bindTexture(P,Q||oe[P]),de.type=P,de.texture=Q)}function F(){let P=ie[ee];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function In(){try{s.compressedTexImage2D(...arguments)}catch(P){Be(`WebGLState:`,P)}}function vt(){try{s.compressedTexImage3D(...arguments)}catch(P){Be(`WebGLState:`,P)}}function Mt(){try{s.texSubImage2D(...arguments)}catch(P){Be(`WebGLState:`,P)}}function _e(){try{s.texSubImage3D(...arguments)}catch(P){Be(`WebGLState:`,P)}}function Ft(){try{s.compressedTexSubImage2D(...arguments)}catch(P){Be(`WebGLState:`,P)}}function Ue(){try{s.compressedTexSubImage3D(...arguments)}catch(P){Be(`WebGLState:`,P)}}function We(){try{s.texStorage2D(...arguments)}catch(P){Be(`WebGLState:`,P)}}function w(){try{s.texStorage3D(...arguments)}catch(P){Be(`WebGLState:`,P)}}function M(){try{s.texImage2D(...arguments)}catch(P){Be(`WebGLState:`,P)}}function H(){try{s.texImage3D(...arguments)}catch(P){Be(`WebGLState:`,P)}}function re(P){return u[P]!==void 0?u[P]:s.getParameter(P)}function te(P,Q){u[P]!==Q&&(s.pixelStorei(P,Q),u[P]=Q)}function ce(P){$.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),$.copy(P))}function me(P){C.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),C.copy(P))}function J(P,Q){let K=c.get(Q);K===void 0&&(K=/* @__PURE__ */ new WeakMap,c.set(Q,K));let de=K.get(P);de===void 0&&(de=s.getUniformBlockIndex(Q,P.name),s.uniformBlockBinding(Q,de,de),K.set(P,de))}function j(P,Q,K){let le=c.get(Q).get(P);l[le]!==K&&(s.bindBufferBase(s.UNIFORM_BUFFER,le,K),l[le]=K)}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},ee=null,ie={},f={},l={},d=/* @__PURE__ */ new WeakMap,p=[],x=null,m=!1,g=null,v=null,b=null,y=null,T=null,A=null,_=null,E=new we(0,0,0),D=0,I=!1,O=null,B=null,z=null,R=null,W=null,$.set(0,0,s.canvas.width,s.canvas.height),C.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:be,bindFramebuffer:ze,drawBuffers:ue,useProgram:Ve,setBlending:dt,setMaterial:Et,setFlipSided:pt,setCullFace:at,setLineWidth:hn,setPolygonOffset:Rt,setScissorTest:mn,activeTexture:gn,bindTexture:_n,unbindTexture:F,compressedTexImage2D:In,compressedTexImage3D:vt,texImage2D:M,texImage3D:H,pixelStorei:te,getParameter:re,updateUBOMapping:J,uniformBlockBinding:j,texStorage2D:We,texStorage3D:w,texSubImage2D:Mt,texSubImage3D:_e,compressedTexSubImage2D:Ft,compressedTexSubImage3D:Ue,scissor:ce,viewport:me,reset:fe}}function By(s,e,t,n,i,r,o){let a=e.has(`WEBGL_multisampled_render_to_texture`)?e.get(`WEBGL_multisampled_render_to_texture`):null,l=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=/* @__PURE__ */ new WeakMap,u=/* @__PURE__ */ new Set,f,d=/* @__PURE__ */ new WeakMap,p=/* @__PURE__ */ new Set,x=new FinalizationRegistry(w=>p.delete(w)),m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function g(w,M){return m?new OffscreenCanvas(w,M):Vs(`canvas`)}function v(w,M,H){let re=1,te=We(w);if((te.width>H||te.height>H)&&(re=H/Math.max(te.width,te.height)),re<1)if(typeof HTMLImageElement<`u`&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&w instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&w instanceof ImageBitmap||typeof VideoFrame<`u`&&w instanceof VideoFrame){let ce=Math.floor(re*te.width),me=Math.floor(re*te.height);f===void 0&&(f=g(ce,me));let J=M?g(ce,me):f;return J.width=ce,J.height=me,J.getContext(`2d`).drawImage(w,0,0,ce,me),Ce(`WebGLRenderer: Texture has been resized from (`+te.width+`x`+te.height+`) to (`+ce+`x`+me+`).`),J}else return`data`in w&&Ce(`WebGLRenderer: Image in DataTexture is too big (`+te.width+`x`+te.height+`).`),w;return w}function b(w){return w.generateMipmaps}function y(w){s.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(w,M,H,re,te,ce=!1){if(w!==null){if(s[w]!==void 0)return s[w];Ce(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+w+`'`)}let me;re&&(me=e.get(`EXT_texture_norm16`),me||Ce(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let J=M;if(M===s.RED&&(H===s.FLOAT&&(J=s.R32F),H===s.HALF_FLOAT&&(J=s.R16F),H===s.UNSIGNED_BYTE&&(J=s.R8),H===s.UNSIGNED_SHORT&&me&&(J=me.R16_EXT),H===s.SHORT&&me&&(J=me.R16_SNORM_EXT)),M===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.R8UI),H===s.UNSIGNED_SHORT&&(J=s.R16UI),H===s.UNSIGNED_INT&&(J=s.R32UI),H===s.BYTE&&(J=s.R8I),H===s.SHORT&&(J=s.R16I),H===s.INT&&(J=s.R32I)),M===s.RG&&(H===s.FLOAT&&(J=s.RG32F),H===s.HALF_FLOAT&&(J=s.RG16F),H===s.UNSIGNED_BYTE&&(J=s.RG8),H===s.UNSIGNED_SHORT&&me&&(J=me.RG16_EXT),H===s.SHORT&&me&&(J=me.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RG8UI),H===s.UNSIGNED_SHORT&&(J=s.RG16UI),H===s.UNSIGNED_INT&&(J=s.RG32UI),H===s.BYTE&&(J=s.RG8I),H===s.SHORT&&(J=s.RG16I),H===s.INT&&(J=s.RG32I)),M===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGB8UI),H===s.UNSIGNED_SHORT&&(J=s.RGB16UI),H===s.UNSIGNED_INT&&(J=s.RGB32UI),H===s.BYTE&&(J=s.RGB8I),H===s.SHORT&&(J=s.RGB16I),H===s.INT&&(J=s.RGB32I)),M===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),H===s.UNSIGNED_INT&&(J=s.RGBA32UI),H===s.BYTE&&(J=s.RGBA8I),H===s.SHORT&&(J=s.RGBA16I),H===s.INT&&(J=s.RGBA32I)),M===s.RGB&&(H===s.UNSIGNED_SHORT&&me&&(J=me.RGB16_EXT),H===s.SHORT&&me&&(J=me.RGB16_SNORM_EXT),H===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(J=s.R11F_G11F_B10F)),M===s.RGBA){let j=ce?Pr:Je.getTransfer(te);H===s.FLOAT&&(J=s.RGBA32F),H===s.HALF_FLOAT&&(J=s.RGBA16F),H===s.UNSIGNED_BYTE&&(J=j===`srgb`?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT&&me&&(J=me.RGBA16_EXT),H===s.SHORT&&me&&(J=me.RGBA16_SNORM_EXT),H===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get(`EXT_color_buffer_float`),J}function _(w,M){let H;return w?M===null||M===Zn||M===1020?H=s.DEPTH24_STENCIL8:M===Cn?H=s.DEPTH32F_STENCIL8:M===cr&&(H=s.DEPTH24_STENCIL8,Ce(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):M===null||M===Zn||M===1020?H=s.DEPTH_COMPONENT24:M===Cn?H=s.DEPTH_COMPONENT32F:M===cr&&(H=s.DEPTH_COMPONENT16),H}function E(w,M){return b(w)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==zt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function D(w){let M=new WeakRef(w);n.get(w).__ref=M,p.add(M),x.register(w,M,M)}function I(w){let M=n.get(w).__ref;M!==void 0&&(p.delete(M),x.unregister(M))}function O(w){z(w.target)}function B(w){R(w.target)}function z(w){w.removeEventListener(`dispose`,O),I(w),Y(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function R(w){w.removeEventListener(`dispose`,B),I(w),se(w)}function W(){for(let w of p){let M=w.deref();M!==void 0&&(M.isRenderTarget===!0?R(M):z(M))}p.clear(),u.clear()}function Y(w){let M=n.get(w);if(M.__webglInit===void 0)return;let H=w.source,re=d.get(H);if(re){let te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&V(w),Object.keys(re).length===0&&d.delete(H)}n.remove(w)}function V(w){let M=n.get(w);s.deleteTexture(M.__webglTexture);let H=w.source,re=d.get(H);delete re[M.__cacheKey],o.memory.textures--}function se(w){let M=n.get(w);M.__depthDisposeCallback&&M.__depthDisposeCallback();let H=w.depthTexture;if(H&&H.renderTarget===w&&z(H),w.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let ce=0;ce<M.__webglFramebuffer[te].length;ce++)s.deleteFramebuffer(M.__webglFramebuffer[te][ce]);else s.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)s.deleteFramebuffer(M.__webglFramebuffer[te]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let re=w.textures;for(let te=0,ce=re.length;te<ce;te++){let me=n.get(re[te]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(re[te])}n.remove(w)}let q=0;function ee(){q=0}function ie(){return q}function Se(w){q=w}function Fe(){let w=q;return w>=i.maxTextures&&Ce(`WebGLTextures: Trying to use `+(w+1)+` texture units while this GPU supports only `+i.maxTextures),q+=1,w}function $(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.mipmapsAutoUpdate),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function C(w,M){let H=n.get(w);if(w.isVideoTexture&&Ft(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){let re=w.image;if(re===null)Ce(`WebGLRenderer: Texture marked for update but no image data found.`);else if(re.complete===!1)Ce(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Et(H,w,M);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+M)}function Z(w,M){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Et(H,w,M);return}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+M)}function oe(w,M){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){Et(H,w,M);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+M)}function ne(w,M){let H=n.get(w);if(w.version>0&&H.__version!==w.version){pt(H,w,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+M)}let be={[Un]:s.REPEAT,[Dn]:s.CLAMP_TO_EDGE,[Hs]:s.MIRRORED_REPEAT},ze={[St]:s.NEAREST,[ka]:s.NEAREST_MIPMAP_NEAREST,[gs]:s.NEAREST_MIPMAP_LINEAR,[zt]:s.LINEAR,[lr]:s.LINEAR_MIPMAP_NEAREST,[zn]:s.LINEAR_MIPMAP_LINEAR},ue={[td]:s.NEVER,[hh]:s.ALWAYS,[nd]:s.LESS,[lh]:s.LEQUAL,[id]:s.EQUAL,[ch]:s.GEQUAL,[sd]:s.GREATER,[rd]:s.NOTEQUAL};function Ve(w,M){if(M.type===Cn&&e.has(`OES_texture_float_linear`)===!1&&(M.magFilter===zt||M.magFilter===lr||M.magFilter===gs||M.magFilter===1008||M.minFilter===zt||M.minFilter===lr||M.minFilter===gs||M.minFilter===1008)&&Ce(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),s.texParameteri(w,s.TEXTURE_WRAP_S,be[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,be[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,be[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ze[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ze[M.minFilter]),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ue[M.compareFunction])),e.has(`EXT_texture_filter_anisotropic`)===!0){if(M.magFilter===1003||M.minFilter!==gs&&M.minFilter!==1008||M.type===Cn&&e.has(`OES_texture_float_linear`)===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=e.get(`EXT_texture_filter_anisotropic`);s.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ke(w,M){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener(`dispose`,O),D(M));let re=M.source,te=d.get(re);te===void 0&&(te={},d.set(re,te));let ce=$(M);if(ce!==w.__cacheKey){te[ce]===void 0&&(te[ce]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),te[ce].usedTimes++;let me=te[w.__cacheKey];me!==void 0&&(te[w.__cacheKey].usedTimes--,me.usedTimes===0&&V(M)),w.__cacheKey=ce,w.__webglTexture=te[ce].texture}return H}function ke(w,M,H){return Math.floor(Math.floor(w/H)/M)}function dt(w,M,H,re){let ce=w.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,H,re,M.data);else{ce.sort((P,Q)=>P.start-Q.start);let me=0;for(let P=1;P<ce.length;P++){let Q=ce[me],K=ce[P],de=Q.start+Q.count,le=ke(K.start,M.width,4),he=ke(Q.start,M.width,4);K.start<=de+1&&le===he&&ke(K.start+K.count-1,M.width,4)===le?Q.count=Math.max(Q.count,K.start+K.count-Q.start):(++me,ce[me]=K)}ce.length=me+1;let J=t.getParameter(s.UNPACK_ROW_LENGTH),j=t.getParameter(s.UNPACK_SKIP_PIXELS),fe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let P=0,Q=ce.length;P<Q;P++){let K=ce[P],de=Math.floor(K.start/4),le=Math.ceil(K.count/4),he=de%M.width,Ie=Math.floor(de/M.width),Qe=le;t.pixelStorei(s.UNPACK_SKIP_PIXELS,he),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ie),t.texSubImage2D(s.TEXTURE_2D,0,he,Ie,Qe,1,H,re,M.data)}w.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,J),t.pixelStorei(s.UNPACK_SKIP_PIXELS,j),t.pixelStorei(s.UNPACK_SKIP_ROWS,fe)}}function Et(w,M,H){let re=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=s.TEXTURE_3D);let te=Ke(w,M),ce=M.source;t.bindTexture(re,w.__webglTexture,s.TEXTURE0+H);let me=n.get(ce);if(ce.version!==me.__version||te===!0){if(t.activeTexture(s.TEXTURE0+H),(typeof ImageBitmap<`u`&&M.image instanceof ImageBitmap)===!1){let ae=Je.getPrimaries(Je.workingColorSpace),De=M.colorSpace===``?null:Je.getPrimaries(M.colorSpace),Ze=M.colorSpace===``||ae===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let j=v(M.image,!1,i.maxTextureSize);j=Ue(M,j);let fe=r.convert(M.format,M.colorSpace),P=r.convert(M.type),Q=A(M.internalFormat,fe,P,M.normalized,M.colorSpace,M.isVideoTexture);Ve(re,M);let K,de=M.mipmaps,le=M.isVideoTexture!==!0,he=me.__version===void 0||te===!0,Ie=ce.dataReady,Qe=E(M,j);if(M.isDepthTexture)Q=_(M.format===Ri,M.type),he&&(le?t.texStorage2D(s.TEXTURE_2D,1,Q,j.width,j.height):t.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,fe,P,null));else if(M.isDataTexture)if(de.length>0){le&&he&&t.texStorage2D(s.TEXTURE_2D,Qe,Q,de[0].width,de[0].height);for(let ae=0,De=de.length;ae<De;ae++)K=de[ae],le?Ie&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,K.width,K.height,fe,P,K.data):t.texImage2D(s.TEXTURE_2D,ae,Q,K.width,K.height,0,fe,P,K.data);M.generateMipmaps=!1}else le?(he&&t.texStorage2D(s.TEXTURE_2D,Qe,Q,j.width,j.height),Ie&&dt(M,j,fe,P)):t.texImage2D(s.TEXTURE_2D,0,Q,j.width,j.height,0,fe,P,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){le&&he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Qe,Q,de[0].width,de[0].height,j.depth);for(let ae=0,De=de.length;ae<De;ae++)if(K=de[ae],M.format!==1023)if(fe!==null)if(le){if(Ie)if(M.layerUpdates.size>0){let Ze=Mh(K.width,K.height,M.format,M.type);for(let xe of M.layerUpdates){let ht=K.data.subarray(xe*Ze/K.data.BYTES_PER_ELEMENT,(xe+1)*Ze/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,xe,K.width,K.height,1,fe,ht)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,K.width,K.height,j.depth,fe,K.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Q,K.width,K.height,j.depth,0,K.data,0,0);else Ce(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else le?Ie&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,K.width,K.height,j.depth,fe,P,K.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,Q,K.width,K.height,j.depth,0,fe,P,K.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{le&&he&&t.texStorage2D(s.TEXTURE_2D,Qe,Q,de[0].width,de[0].height);for(let ae=0,De=de.length;ae<De;ae++)K=de[ae],M.format!==1023?fe!==null?le?Ie&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,K.width,K.height,fe,K.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,Q,K.width,K.height,0,K.data):Ce(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):le?Ie&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,K.width,K.height,fe,P,K.data):t.texImage2D(s.TEXTURE_2D,ae,Q,K.width,K.height,0,fe,P,K.data)}else if(M.isDataArrayTexture)if(le){if(he&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Qe,Q,j.width,j.height,j.depth),Ie)if(M.layerUpdates.size>0){let ae=Mh(j.width,j.height,M.format,M.type);for(let De of M.layerUpdates){let Ze=j.data.subarray(De*ae/j.data.BYTES_PER_ELEMENT,(De+1)*ae/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,De,j.width,j.height,1,fe,P,Ze)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,fe,P,j.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Q,j.width,j.height,j.depth,0,fe,P,j.data);else if(M.isData3DTexture)le?(he&&t.texStorage3D(s.TEXTURE_3D,Qe,Q,j.width,j.height,j.depth),Ie&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,fe,P,j.data)):t.texImage3D(s.TEXTURE_3D,0,Q,j.width,j.height,j.depth,0,fe,P,j.data);else if(M.isFramebufferTexture){if(he)if(le)t.texStorage2D(s.TEXTURE_2D,Qe,Q,j.width,j.height);else{let ae=j.width,De=j.height;for(let Ze=0;Ze<Qe;Ze++)t.texImage2D(s.TEXTURE_2D,Ze,Q,ae,De,0,fe,P,null),ae>>=1,De>>=1}}else if(M.isHTMLTexture){if(`texElementImage2D`in s){let ae=s.canvas;if(ae.hasAttribute(`layoutsubtree`)||ae.setAttribute(`layoutsubtree`,`true`),j.parentNode!==ae){ae.appendChild(j),u.add(M),ae.onpaint=De=>{let Ze=De.changedElements;for(let xe of u)Ze.includes(xe.image)&&(xe.needsUpdate=!0)},ae.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,j);else{let Ze=s.RGBA,xe=s.RGBA,ht=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ze,xe,ht,j)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(de.length>0){if(le&&he){let ae=We(de[0]);t.texStorage2D(s.TEXTURE_2D,Qe,Q,ae.width,ae.height)}for(let ae=0,De=de.length;ae<De;ae++)K=de[ae],le?Ie&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,fe,P,K):t.texImage2D(s.TEXTURE_2D,ae,Q,fe,P,K);M.generateMipmaps=!1}else if(le){if(he){let ae=We(j);t.texStorage2D(s.TEXTURE_2D,Qe,Q,ae.width,ae.height)}Ie&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,P,j)}else t.texImage2D(s.TEXTURE_2D,0,Q,fe,P,j);b(M)&&M.mipmapsAutoUpdate===!0&&y(re),me.__version=ce.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function pt(w,M,H){if(M.image.length!==6)return;let re=Ke(w,M),te=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+H);let ce=n.get(te);if(te.version!==ce.__version||re===!0){t.activeTexture(s.TEXTURE0+H);let me=Je.getPrimaries(Je.workingColorSpace),J=M.colorSpace===``?null:Je.getPrimaries(M.colorSpace),j=M.colorSpace===``||me===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let fe=M.isCompressedTexture||M.image[0].isCompressedTexture,P=M.image[0]&&M.image[0].isDataTexture,Q=[];for(let xe=0;xe<6;xe++)!fe&&!P?Q[xe]=v(M.image[xe],!0,i.maxCubemapSize):Q[xe]=P?M.image[xe].image:M.image[xe],Q[xe]=Ue(M,Q[xe]);let K=Q[0],de=r.convert(M.format,M.colorSpace),le=r.convert(M.type),he=A(M.internalFormat,de,le,M.normalized,M.colorSpace),Ie=M.isVideoTexture!==!0,Qe=ce.__version===void 0||re===!0,ae=te.dataReady,De=E(M,K);Ve(s.TEXTURE_CUBE_MAP,M);let Ze;if(M.isDepthTexture){if(he=_(M.format===1027,M.type),Qe)if(Ie)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,he,K.width,K.height);else for(let xe=0;xe<6;xe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,K.width,K.height,0,de,le,null)}else if(fe){Ie&&Qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,he,K.width,K.height);for(let xe=0;xe<6;xe++){Ze=Q[xe].mipmaps;for(let ht=0;ht<Ze.length;ht++){let Vt=Ze[ht];M.format!==1023?de!==null?Ie?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht,0,0,Vt.width,Vt.height,de,Vt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht,he,Vt.width,Vt.height,0,Vt.data):Ce(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):Ie?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht,0,0,Vt.width,Vt.height,de,le,Vt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht,he,Vt.width,Vt.height,0,de,le,Vt.data)}}}else{if(Ze=M.mipmaps,Ie&&Qe){Ze.length>0&&De++;let xe=We(Q[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,he,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(P){Ie?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Q[xe].width,Q[xe].height,de,le,Q[xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,Q[xe].width,Q[xe].height,0,de,le,Q[xe].data);for(let ht=0;ht<Ze.length;ht++){let Ii=Ze[ht].image[xe].image;Ie?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht+1,0,0,Ii.width,Ii.height,de,le,Ii.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht+1,he,Ii.width,Ii.height,0,de,le,Ii.data)}}else{Ie?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,de,le,Q[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,he,de,le,Q[xe]);for(let ht=0;ht<Ze.length;ht++){let Vt=Ze[ht];Ie?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht+1,0,0,de,le,Vt.image[xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ht+1,he,de,le,Vt.image[xe])}}}b(M)&&M.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),ce.__version=te.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function at(w,M,H,re,te,ce){let me=r.convert(H.format,H.colorSpace),J=r.convert(H.type),j=A(H.internalFormat,me,J,H.normalized,H.colorSpace),fe=n.get(M),P=n.get(H);if(P.__renderTarget=M,!fe.__hasExternalTextures){let Q=Math.max(1,M.width>>ce),K=Math.max(1,M.height>>ce);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,ce,j,Q,K,M.depth,0,me,J,null):t.texImage2D(te,ce,j,Q,K,0,me,J,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),_e(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,te,P.__webglTexture,0,Mt(M)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,te,P.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function hn(w,M,H){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer){let re=M.depthTexture,te=re&&re.isDepthTexture?re.type:null,ce=_(M.stencilBuffer,te),me=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;_e(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(M),ce,M.width,M.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(M),ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ce,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,w)}else{let re=M.textures;for(let te=0;te<re.length;te++){let ce=re[te],me=r.convert(ce.format,ce.colorSpace),J=r.convert(ce.type),j=A(ce.internalFormat,me,J,ce.normalized,ce.colorSpace);_e(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(M),j,M.width,M.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(M),j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(w,M,H){let re=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let te=n.get(M.depthTexture);te.__renderTarget=M;let ce=re?M.depthTexture.image[0]:M.depthTexture.image;(!te.__webglTexture||ce.width!==M.width||ce.height!==M.height)&&(ce.width=M.width,ce.height=M.height,M.depthTexture.needsUpdate=!0),re?ne(M.depthTexture,0):C(M.depthTexture,0);let me=te.__webglTexture,J=Mt(M),j=re?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,fe=M.depthTexture.format===1027?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===xi)_e(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,j,me,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,fe,j,me,0);else if(M.depthTexture.format===1027)_e(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,j,me,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,fe,j,me,0);else throw new Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function mn(w){let M=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let re=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),re){let te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,re.removeEventListener(`dispose`,te)};re.addEventListener(`dispose`,te),M.__depthDisposeCallback=te}M.__boundDepthTexture=re}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let re=0;re<6;re++)Rt(M.__webglFramebuffer[re],w,re);else w.texture.mipmaps.length>0?Rt(M.__webglFramebuffer[0],w,0):Rt(M.__webglFramebuffer,w,0);else if(H){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]===void 0)M.__webglDepthbuffer[re]=s.createRenderbuffer(),hn(M.__webglDepthbuffer[re],w,!1);else{let te=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,ce)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),hn(M.__webglDepthbuffer,w,!1);else{let te=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,ce)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function gn(w,M,H){let re=n.get(w);M!==void 0&&at(re.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&mn(w)}function _n(w){let M=w.texture,H=n.get(w),re=n.get(M);w.addEventListener(`dispose`,B),D(w);let te=w.textures,ce=w.isWebGLCubeRenderTarget===!0,me=te.length>1;if(me||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=M.version,o.memory.textures++),ce){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let j=0;j<M.mipmaps.length;j++)H.__webglFramebuffer[J][j]=s.createFramebuffer()}else H.__webglFramebuffer[J]=s.createFramebuffer()}else{if(M.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)H.__webglFramebuffer[J]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(me)for(let J=0,j=te.length;J<j;J++){let fe=n.get(te[J]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&_e(w)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<te.length;J++){let j=te[J];H.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[J]);let fe=r.convert(j.format,j.colorSpace),P=r.convert(j.type),Q=A(j.internalFormat,fe,P,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),K=Mt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,K,Q,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,H.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),hn(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Ve(s.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)at(H.__webglFramebuffer[J][j],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else at(H.__webglFramebuffer[J],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);b(M)?y(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(me){for(let J=0,j=te.length;J<j;J++){let fe=te[J],P=n.get(fe),Q=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Q,P.__webglTexture),Ve(Q,fe),at(H.__webglFramebuffer,w,fe,s.COLOR_ATTACHMENT0+J,Q,0),b(fe)&&y(Q)}t.unbindTexture()}else{let J=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,re.__webglTexture),Ve(J,M),M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)at(H.__webglFramebuffer[j],w,M,s.COLOR_ATTACHMENT0,J,j);else at(H.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,J,0);b(M)?y(J):M.mipmaps.length>0&&s.texParameteri(J,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&mn(w)}function F(w){let M=w.textures;for(let H=0,re=M.length;H<re;H++){let te=M[H];if(b(te)&&te.mipmapsAutoUpdate===!0){let ce=T(w),me=n.get(te).__webglTexture;t.bindTexture(ce,me),y(ce),t.unbindTexture()}}}let In=[];function vt(w){if(w.samples>0){if(_e(w)===!1){let M=w.textures,H=w.width,re=w.height,te=s.COLOR_BUFFER_BIT,ce=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(w),J=M.length>1;if(J)for(let fe=0;fe<M.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),J){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);let P=n.get(M[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,P,0)}s.blitFramebuffer(0,0,H,re,0,0,H,re,te,s.NEAREST),l===!0&&(In.length=0,In.push(s.COLOR_ATTACHMENT0+fe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&In.push(ce),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,In))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let fe=0;fe<M.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,me.__webglColorRenderbuffer[fe]);let P=n.get(M[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,P,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let M=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Mt(w){return Math.min(i.maxSamples,w.samples)}function _e(w){let M=n.get(w);return w.samples>0&&e.has(`WEBGL_multisampled_render_to_texture`)===!0&&M.__useRenderToTexture!==!1}function Ft(w){let M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function Ue(w,M){let H=w.colorSpace,re=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Jt&&H!==``&&(Je.getTransfer(H)===`srgb`?(re!==1023||te!==1009)&&Ce(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Be(`WebGLTextures: Unsupported texture color space:`,H)),M}function We(w){return typeof HTMLImageElement<`u`&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<`u`&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Fe,this.resetTextureUnits=ee,this.getTextureUnits=ie,this.setTextureUnits=Se,this.setTexture2D=C,this.setTexture2DArray=Z,this.setTexture3D=oe,this.setTextureCube=ne,this.rebindTextures=gn,this.setupRenderTarget=_n,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=mn,this.setupFrameBufferTexture=at,this.useMultisampledRTT=_e,this.dispose=W}function zy(s,e){function t(n,i=``){let r,o=Je.getTransfer(i);if(n===1009)return s.UNSIGNED_BYTE;if(n===Ga)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ih)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===th)return s.BYTE;if(n===nh)return s.SHORT;if(n===cr)return s.UNSIGNED_SHORT;if(n===Ha)return s.INT;if(n===Zn)return s.UNSIGNED_INT;if(n===Cn)return s.FLOAT;if(n===1016)return s.HALF_FLOAT;if(n===rh)return s.ALPHA;if(n===oh)return s.RGB;if(n===1023)return s.RGBA;if(n===xi)return s.DEPTH_COMPONENT;if(n===1027)return s.DEPTH_STENCIL;if(n===Wa)return s.RED;if(n===Xa)return s.RED_INTEGER;if(n===Xi)return s.RG;if(n===qa)return s.RG_INTEGER;if(n===Ya)return s.RGBA_INTEGER;if(n===po||n===mo||n===go||n===_o)if(o===`srgb`)if(r=e.get(`WEBGL_compressed_texture_s3tc_srgb`),r!==null){if(n===po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get(`WEBGL_compressed_texture_s3tc`),r!==null){if(n===po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===Za||n===Ja||n===$a)if(r=e.get(`WEBGL_compressed_texture_pvrtc`),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ja||n===Qa||n===el||n===tl||n===nl||n===xo||n===il)if(r=e.get(`WEBGL_compressed_texture_etc`),r!==null){if(n===ja||n===Qa)return o===`srgb`?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tl)return r.COMPRESSED_R11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===xo)return r.COMPRESSED_RG11_EAC;if(n===il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===fl||n===dl||n===pl||n===ml||n===gl||n===_l)if(r=e.get(`WEBGL_compressed_texture_astc`),r!==null){if(n===sl)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ol)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===al)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cl)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return o===`srgb`?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xl||n===yl||n===vl)if(r=e.get(`EXT_texture_compression_bptc`),r!==null){if(n===xl)return o===`srgb`?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===Sl||n===yo||n===bl)if(r=e.get(`EXT_texture_compression_rgtc`),r!==null){if(n===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`;var Hy=`
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

}`;var Ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Xr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ii({vertexShader:ky,fragmentShader:Hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new $t(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var Ph=class extends Kn{constructor(e,t){super();let n=this,i=null,r=1,o=null,a=`local-floor`,l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<`u`,m=new Ih,g={},v=t.getContextAttributes(),b=null,y=null,T=[],A=[],_=new Me,E=null,D=null,I=new Zt;I.viewport=new ut;let O=new Zt;O.viewport=new ut;let B=[I,O],z=new Oa,R=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let C=T[$];return C===void 0&&(C=new Ys,T[$]=C),C.getTargetRaySpace()},this.getControllerGrip=function($){let C=T[$];return C===void 0&&(C=new Ys,T[$]=C),C.getGripSpace()},this.getHand=function($){let C=T[$];return C===void 0&&(C=new Ys,T[$]=C),C.getHandSpace()};function Y($){let C=A.indexOf($.inputSource);if(C===-1)return;let Z=T[C];Z!==void 0&&(Z.update($.inputSource,$.frame,c||o),Z.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener(`select`,Y),i.removeEventListener(`selectstart`,Y),i.removeEventListener(`selectend`,Y),i.removeEventListener(`squeeze`,Y),i.removeEventListener(`squeezestart`,Y),i.removeEventListener(`squeezeend`,Y),i.removeEventListener(`end`,V),i.removeEventListener(`inputsourceschange`,se);for(let $=0;$<T.length;$++){let C=A[$];C!==null&&(A[$]=null,T[$].disconnect(C))}R=null,W=null,m.reset();for(let $ in g)delete g[$];if(e.setRenderTarget(b),d=null,f=null,u=null,i=null,y=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),D!==null){let $=D.camera;$.fov=D.fov,$.zoom=D.zoom,$.updateProjectionMatrix(),D=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ce(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Ce(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(b=e.getRenderTarget(),i.addEventListener(`select`,Y),i.addEventListener(`selectstart`,Y),i.addEventListener(`selectend`,Y),i.addEventListener(`squeeze`,Y),i.addEventListener(`squeezestart`,Y),i.addEventListener(`squeezeend`,Y),i.addEventListener(`end`,V),i.addEventListener(`inputsourceschange`,se),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),x&&`createProjectionLayer`in XRWebGLBinding.prototype){let Z=null,oe=null,ne=null;v.depth&&(ne=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=v.stencil?1027:xi,oe=v.stencil?1020:Zn);let be={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new An(f.textureWidth,f.textureHeight,{format:kn,type:vn,depthTexture:new vi(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Z={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new An(d.framebufferWidth,d.framebufferHeight,{format:kn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Fe.setContext(i),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se($){for(let C=0;C<$.removed.length;C++){let Z=$.removed[C],oe=A.indexOf(Z);oe>=0&&(A[oe]=null,T[oe].disconnect(Z))}for(let C=0;C<$.added.length;C++){let Z=$.added[C],oe=A.indexOf(Z);if(oe===-1){for(let be=0;be<T.length;be++)if(be>=A.length){A.push(Z),oe=be;break}else if(A[be]===null){A[be]=Z,oe=be;break}if(oe===-1)break}let ne=T[oe];ne&&ne.connect(Z)}}function q($,C){C===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(C.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let C=$.near,Z=$.far;m.texture!==null&&(m.depthNear>0&&(C=m.depthNear),m.depthFar>0&&(Z=m.depthFar)),z.near=O.near=I.near=C,z.far=O.far=I.far=Z,(R!==z.near||W!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),R=z.near,W=z.far),z.layers.mask=$.layers.mask|6,I.layers.mask=z.layers.mask&-5,O.layers.mask=z.layers.mask&-3;let oe=$.parent,ne=z.cameras;q(z,oe);for(let be=0;be<ne.length;be++)q(ne[be],oe);z.projectionMatrix.copy(I.projectionMatrix),z.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&$.isPerspectiveCamera&&(D={camera:$,fov:$.fov,zoom:$.zoom}),ee($,z,oe)};function ee($,C,Z){Z===null?$.matrix.copy(C.matrixWorld):($.matrix.copy(Z.matrixWorld),$.matrix.invert(),$.matrix.multiply(C.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(C.projectionMatrix),$.projectionMatrixInverse.copy(C.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=rs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return g[$]};let ie=null;function Se($,C){if(h=C.getViewerPose(c||o),p=C,h!==null){let Z=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let oe=!1;Z.length!==z.cameras.length&&(z.cameras.length=0,oe=!0);for(let ue=0;ue<Z.length;ue++){let Ve=Z[ue],Ke=null;if(d!==null)Ke=d.getViewport(Ve);else{let dt=u.getViewSubImage(f,Ve);Ke=dt.viewport,ue===0&&(e.setRenderTargetTextures(y,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(y))}let ke=B[ue];ke===void 0&&(ke=new Zt,ke.layers.enable(ue),ke.viewport=new ut,B[ue]=ke),ke.matrix.fromArray(Ve.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(Ve.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ue===0&&(z.matrix.copy(ke.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),oe===!0&&z.cameras.push(ke)}let ne=i.enabledFeatures;if(ne&&ne.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&x){u=n.getBinding();let ue=u.getDepthInformation(Z[0]);ue&&ue.isValid&&ue.texture&&m.init(ue,i.renderState)}if(ne&&ne.includes(`camera-access`)&&x){e.state.unbindTexture(),u=n.getBinding();for(let ue=0;ue<Z.length;ue++){let Ve=Z[ue].camera;if(Ve){let Ke=g[Ve];Ke||(Ke=new Xr,g[Ve]=Ke);let ke=u.getCameraImage(Ve);Ke.sourceTexture=ke}}}}for(let Z=0;Z<T.length;Z++){let oe=A[Z],ne=T[Z];oe!==null&&ne!==void 0&&ne.update(oe,C,c||o)}ie&&ie($,C),C.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:C}),p=null}let Fe=new kd;Fe.setAnimationLoop(Se),this.setAnimationLoop=function($){ie=$},this.dispose=function(){}}};var Gy=new Xe;var Jd=new He;Jd.set(-1,0,0,0,1,0,0,0,1);function Vy(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,xh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,v,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===1&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===1&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=e.get(g),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===1&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wy(s,e,t,n){let i={},r={};function o(v,b){let y=b.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,b){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener(`dispose`,m));let T=b.program;n.updateUBOMapping(v,T);let A=e.render.frame;r[v.id]!==A&&(c(v),r[v.id]=A)}function l(v){let b=s.createBuffer(),y=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),b}function c(v){let b=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,_=y.length;A<_;A++){let E=y[A];if(Array.isArray(E))for(let D=0,I=E.length;D<I;D++)h(E[D],A,D,T);else h(E,A,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,b,y,T){if(f(v,b,y,T)===!0){let A=v.__offset,_=v.value;if(Array.isArray(_)){let E=0;for(let D=0;D<_.length;D++){let I=_[D],O=x(I,!0);u(I,v.__data,E),E+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,A,v.__data)}}function u(v,b,y){typeof v==`number`||typeof v==`boolean`?b[y]=v:v.isMatrix3?(b[y]=v.elements[0],b[y+1]=v.elements[1],b[y+2]=v.elements[2],b[y+3]=0,b[y+4]=v.elements[3],b[y+5]=v.elements[4],b[y+6]=v.elements[5],b[y+7]=0,b[y+8]=v.elements[6],b[y+9]=v.elements[7],b[y+10]=v.elements[8],b[y+11]=0):ArrayBuffer.isView(v)?b.set(v.subarray(0,b.length-y),y):v.toArray(b,y)}function f(v,b,y,T){let A=v.value,_=b+`_`+y;if(Array.isArray(A)){T[_]===void 0&&(T[_]=[]);let E=T[_],D=!1;for(let I=0;I<A.length;I++)d(A[I],E,I)===!0&&(D=!0);return D}return d(A,T,_)}function d(v,b,y){if(b[y]===void 0)return typeof v==`number`||typeof v==`boolean`?b[y]=v:ArrayBuffer.isView(v)?b[y]=v.slice():b[y]=v.clone(),!0;{let T=b[y];if(typeof v==`number`||typeof v==`boolean`){if(T!==v)return b[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let b=v.uniforms,y=0,T=16;for(let _=0,E=b.length;_<E;_++){let D=Array.isArray(b[_])?b[_]:[b[_]];for(let I=0,O=D.length;I<O;I++){let B=D[I],z=Array.isArray(B.value)?B.value:[B.value],R=Array.isArray(b[_])||Array.isArray(B.value),W=y;for(let V=0,se=z.length;V<se;V++){let q=z[V],ee=x(q,R),ie=y%T,Se=ie%ee.boundary,Fe=ie+Se;y+=Se,Fe!==0&&T-Fe<ee.storage&&(y+=T-Fe),V===0&&(W=y),y+=ee.storage}B.__data=new(B.type===`int`?Int32Array:B.type===`uint`?Uint32Array:Float32Array)((y-W)/Float32Array.BYTES_PER_ELEMENT),B.__offset=W}}let A=y%T;return A>0&&(y+=T-A),v.__size=y,v.__cache={},this}function x(v,b){let y={boundary:0,storage:0};return typeof v==`number`||typeof v==`boolean`?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Ce(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ce(`WebGLRenderer: Unsupported uniform value type.`,v),b===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let b=v.target;b.removeEventListener(`dispose`,m),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function g(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:g}}var Xy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var ai=null;function qy(){return ai===null&&(ai=new Zs(Xy,16,16,Xi,1016),ai.name=`DFG_LUT`,ai.minFilter=zt,ai.magFilter=zt,ai.wrapS=Dn,ai.wrapT=Dn,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}var zd=class{constructor(e={}){let{canvas:t=od(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=vn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw new Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=o;let x=d,m=/* @__PURE__ */ new Set([Ya,qa,Xa]),g=/* @__PURE__ */ new Set([vn,Zn,cr,_s,Ga,Va]),v=/* @__PURE__ */ new Uint32Array(4),b=/* @__PURE__ */ new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,A=null,_=[],E=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,O=!1,B=null,z=null,R=null,W=null;this._outputColorSpace=xt;let Y=0,V=0,se=null,q=-1,ee=null,ie=new ut,Se=new ut,Fe=null,$=new we(0),C=0,Z=t.width,oe=t.height,ne=1,be=null,ze=null,ue=new ut(0,0,Z,oe),Ve=new ut(0,0,Z,oe),Ke=!1,ke=new Vi,dt=new ya,Et=!1,pt=!1,at=new Xe,hn=new L,Rt=new ut,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gn=!1;function _n(){return se===null?ne:1}let F=n;function In(S,U){return t.getContext(S,U)}let vt,Mt,_e,Ft,Ue,We,w,M,H,re,te,ce,me,J,j,fe,P,Q,K,de,le,he,Ie;try{let S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,De,!1),t.addEventListener(`webglcontextrestored`,Ze,!1),t.addEventListener(`webglcontextcreationerror`,xe,!1),F===null){let U=`webgl2`;if(F=In(U,S),F===null)throw In(U)?/* @__PURE__ */ new Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):/* @__PURE__ */ new Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Qe()}catch(S){throw t.removeEventListener(`webglcontextlost`,De,!1),t.removeEventListener(`webglcontextrestored`,Ze,!1),t.removeEventListener(`webglcontextcreationerror`,xe,!1),Be(`WebGLRenderer: `+S.message),S}function Qe(){vt=new ix(F),vt.init(),le=new zy(F,vt),Mt=new q_(F,vt,e,le),_e=new Fy(F,vt),Mt.reversedDepthBuffer&&f&&_e.buffers.depth.setReversed(!0),z=F.createFramebuffer(),R=F.createFramebuffer(),W=F.createFramebuffer(),Ft=new ox(F),Ue=new by,We=new By(F,vt,_e,Ue,Mt,le,Ft),w=new nx(I),M=new lm(F),he=new W_(F,M),H=new sx(F,M,Ft,he),re=new lx(F,H,M,he,Ft),Q=new ax(F,Mt,We),j=new Y_(Ue),te=new Sy(I,w,vt,Mt,he,j),ce=new Vy(I,Ue),me=new Ty,J=new Py(vt),P=new V_(I,w,_e,re,p,l),fe=new Oy(I,re,Mt),Ie=new Wy(F,Ft,Mt,_e),K=new X_(F,vt,Ft),de=new rx(F,vt,Ft),Ft.programs=te.programs,I.capabilities=Mt,I.extensions=vt,I.properties=Ue,I.renderLists=me,I.shadowMap=fe,I.state=_e,I.info=Ft}x!==1009&&(D=new hx(x,t.width,t.height,a,i,r));let ae=new Ph(I,F);this.xr=ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let S=vt.get(`WEBGL_lose_context`);S&&S.loseContext()},this.forceContextRestore=function(){let S=vt.get(`WEBGL_lose_context`);S&&S.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(S){S!==void 0&&(ne=S,this.setSize(Z,oe,!1))},this.getSize=function(S){return S.set(Z,oe)},this.setSize=function(S,U,X=!0){if(ae.isPresenting){Ce(`WebGLRenderer: Can't change size while VR device is presenting.`);return}Z=S,oe=U,t.width=Math.floor(S*ne),t.height=Math.floor(U*ne),X===!0&&(t.style.width=S+`px`,t.style.height=U+`px`),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Z*ne,oe*ne).floor()},this.setDrawingBufferSize=function(S,U,X){Z=S,oe=U,ne=X,t.width=Math.floor(S*X),t.height=Math.floor(U*X),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(x===1009){Be(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Ce(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}D.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ie)},this.getViewport=function(S){return S.copy(ue)},this.setViewport=function(S,U,X,k){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,U,X,k),_e.viewport(ie.copy(ue).multiplyScalar(_n()).round())},this.getScissor=function(S){return S.copy(Ve)},this.setScissor=function(S,U,X,k){S.isVector4?Ve.set(S.x,S.y,S.z,S.w):Ve.set(S,U,X,k),_e.scissor(Se.copy(Ve).multiplyScalar(_n()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(S){_e.setScissorTest(Ke=S)},this.setOpaqueSort=function(S){be=S},this.setTransparentSort=function(S){ze=S},this.getClearColor=function(S){return S.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,X=!0){let k=0;if(S){let G=!1;if(se!==null){let ge=se.texture.format;G=m.has(ge)}if(G){let ge=se.texture.type,Ee=g.has(ge),pe=P.getClearColor(),ve=P.getClearAlpha(),Re=pe.r,qe=pe.g,st=pe.b;Ee?(v[0]=Re,v[1]=qe,v[2]=st,v[3]=ve,F.clearBufferuiv(F.COLOR,0,v)):(b[0]=Re,b[1]=qe,b[2]=st,b[3]=ve,F.clearBufferiv(F.COLOR,0,b))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){t.removeEventListener(`webglcontextlost`,De,!1),t.removeEventListener(`webglcontextrestored`,Ze,!1),t.removeEventListener(`webglcontextcreationerror`,xe,!1),P.dispose(),me.dispose(),J.dispose(),We.dispose(),Ue.dispose(),w.dispose(),re.dispose(),H.dispose(),he.dispose(),Ie.dispose(),te.dispose(),ae.dispose(),ae.removeEventListener(`sessionstart`,xu),ae.removeEventListener(`sessionend`,yu),Yi.stop()};function De(S){S.preventDefault(),Lr(`WebGLRenderer: Context Lost.`),O=!0}function Ze(){Lr(`WebGLRenderer: Context Restored.`),O=!1;let S=Ft.autoReset,U=fe.enabled,X=fe.autoUpdate,k=fe.needsUpdate,G=fe.type;Qe(),Ft.autoReset=S,fe.enabled=U,fe.autoUpdate=X,fe.needsUpdate=k,fe.type=G}function xe(S){Be(`WebGLRenderer: A WebGL context could not be created. Reason: `,S.statusMessage)}function ht(S){let U=S.target;U.removeEventListener(`dispose`,ht),Vt(U)}function Vt(S){Ii(S),Ue.remove(S)}function Ii(S){let U=Ue.get(S).programs;U!==void 0&&(U.forEach(function(X){te.releaseProgram(X)}),S.isShaderMaterial&&te.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,X,k,G,ge){U===null&&(U=mn);let Ee=G.isMesh&&G.matrixWorld.determinantAffine()<0,pe=wp(S,U,X,k,G);_e.setMaterial(k,Ee);let ve=X.index,Re=1;if(k.wireframe===!0){if(ve=H.getWireframeAttribute(X),ve===void 0)return;Re=2}let qe=X.drawRange,st=X.attributes.position,Te=qe.start*Re,rt=(qe.start+qe.count)*Re;ge!==null&&(Te=Math.max(Te,ge.start*Re),rt=Math.min(rt,(ge.start+ge.count)*Re)),ve!==null?(Te=Math.max(Te,0),rt=Math.min(rt,ve.count)):st!=null&&(Te=Math.max(Te,0),rt=Math.min(rt,st.count));let Dt=rt-Te;if(Dt<0||Dt===1/0)return;he.setup(G,k,pe,X,ve);let _t,mt=K;if(ve!==null&&(_t=M.get(ve),mt=de,mt.setIndex(_t)),G.isMesh)k.wireframe===!0?(_e.setLineWidth(k.wireframeLinewidth*_n()),mt.setMode(F.LINES)):mt.setMode(F.TRIANGLES);else if(G.isLine){let en=k.linewidth;en===void 0&&(en=1),_e.setLineWidth(en*_n()),G.isLineSegments?mt.setMode(F.LINES):G.isLineLoop?mt.setMode(F.LINE_LOOP):mt.setMode(F.LINE_STRIP)}else G.isPoints?mt.setMode(F.POINTS):G.isSprite&&mt.setMode(F.TRIANGLES);if(G.isBatchedMesh)if(vt.get(`WEBGL_multi_draw`))mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let en=G._multiDrawStarts,Ae=G._multiDrawCounts,un=G._multiDrawCount,lt=ve?M.get(ve).bytesPerElement:1,Ki=Ue.get(k).currentProgram.getUniforms();for(let tn=0;tn<un;tn++)Ki.setValue(F,`_gl_DrawID`,tn),mt.render(en[tn]/lt,Ae[tn])}else if(G.isInstancedMesh)mt.renderInstances(Te,Dt,G.count);else if(X.isInstancedBufferGeometry){let en=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ae=Math.min(X.instanceCount,en);mt.renderInstances(Te,Dt,Ae)}else mt.render(Te,Dt)};function _u(S,U,X,k){B!==null&&S.isNodeMaterial&&B.setObject(k,S),Et===!0&&j.setState(S,X,!1),S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=1,S.needsUpdate=!0,mr(S,U,k),S.side=ri,S.needsUpdate=!0,mr(S,U,k),S.side=2):mr(S,U,k)}this.compile=function(S,U,X=null){X===null&&(X=S),B!==null&&B.renderStart(S,U,X),A=J.get(X),A.init(U),E.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),S!==X&&S.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),B!==null&&B.updateLights(A.state.lightsArray),pt=this.localClippingEnabled,Et=j.init(this.clippingPlanes,pt),Et===!0&&j.setGlobalState(this.clippingPlanes,U),B!==null&&fe.render(A.state.shadowsArray,X,U);let k=/* @__PURE__ */ new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ge=G.material;if(ge)if(Array.isArray(ge))for(let Ee=0;Ee<ge.length;Ee++){let pe=ge[Ee];_u(pe,X,U,G),k.add(pe)}else _u(ge,X,U,G),k.add(ge)}),A=E.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(S,U,X=null){let k=this.compile(S,U,X);return new Promise(G=>{function ge(){if(k.forEach(function(Ee){let ve=Ue.get(Ee).currentProgram;(ve===void 0||ve.isReady())&&k.delete(Ee)}),k.size===0){G(S);return}setTimeout(ge,10)}vt.get(`KHR_parallel_shader_compile`)!==null?ge():setTimeout(ge,10)})};let Hl=null;function Tp(S){Hl&&Hl(S)}function xu(){Yi.stop()}function yu(){Yi.start()}let Yi=new kd;Yi.setAnimationLoop(Tp),typeof self<`u`&&Yi.setContext(self),this.setAnimationLoop=function(S){Hl=S,ae.setAnimationLoop(S),S===null?Yi.stop():Yi.start()},ae.addEventListener(`sessionstart`,xu),ae.addEventListener(`sessionend`,yu),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Be(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(O===!0)return;B!==null&&B.renderStart(S,U);let X=ae.enabled===!0&&ae.isPresenting===!0,k=D!==null&&(se===null||X)&&D.begin(I,se);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(U),U=ae.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,U,se),A=J.get(S,E.length),A.init(U),A.state.textureUnits=We.getTextureUnits(),E.push(A),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?dt.setFromArrayCamera(U):ke.setFromProjectionMatrix(at,Nn,U.reversedDepth),pt=this.localClippingEnabled,Et=j.init(this.clippingPlanes,pt),T=me.get(S,_.length),T.init(),_.push(T),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Ee=I.xr.getDepthSensingMesh();Ee!==null&&Gl(Ee,U,-1/0,I.sortObjects)}Gl(S,U,0,I.sortObjects),T.finish(),B!==null&&B.updateLights(A.state.lightsArray),I.sortObjects===!0&&T.sort(be,ze),gn=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,gn&&P.addToRenderList(T,S),this.info.autoReset===!0&&this.info.reset(),Et===!0&&j.beginShadows();let G=A.state.shadowsArray;if(fe.render(G,S,U),Et===!0&&j.endShadows(),(k&&D.hasRenderPass())===!1){let Ee=T.opaque,pe=T.transmissive;if(A.setupLights(),U.isArrayCamera){let ve=U.cameras;if(pe.length>0)for(let Re=0,qe=ve.length;Re<qe;Re++){let st=ve[Re];Mu(Ee,pe,S,st)}gn&&P.render(S);for(let Re=0,qe=ve.length;Re<qe;Re++){let st=ve[Re];vu(T,S,st,st.viewport)}}else pe.length>0&&Mu(Ee,pe,S,U),gn&&P.render(S),vu(T,S,U)}se!==null&&V===0&&(We.updateMultisampleRenderTarget(se),We.updateRenderTargetMipmap(se)),k&&D.end(I),S.isScene===!0&&S.onAfterRender(I,S,U),he.resetDefaultState(),q=-1,ee=null,E.pop(),E.length>0?(A=E[E.length-1],We.setTextureUnits(A.state.textureUnits),Et===!0&&j.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,B!==null&&B.renderEnd()};function Gl(S,U,X,k){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){let Ee=U.isArrayCamera?dt:ke;if(!S.frustumCulled||S.intersectsFrustum(Ee)){k&&Rt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(at);let pe=re.update(S),ve=S.material;ve.visible&&T.push(S,pe,ve,X,Rt.z,null,U)}}else if(S.isMesh||S.isLine||S.isPoints){let Ee=U.isArrayCamera?dt:ke;if(!S.frustumCulled||S.intersectsFrustum(Ee)){let pe=re.update(S),ve=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Rt.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Rt.copy(pe.boundingSphere.center)),Rt.applyMatrix4(S.matrixWorld).applyMatrix4(at)),Array.isArray(ve)){let Re=pe.groups;for(let qe=0,st=Re.length;qe<st;qe++){let Te=Re[qe],rt=ve[Te.materialIndex];rt&&rt.visible&&T.push(S,pe,rt,X,Rt.z,Te,U)}}else ve.visible&&T.push(S,pe,ve,X,Rt.z,null,U)}}}let ge=S.children;for(let Ee=0,pe=ge.length;Ee<pe;Ee++)Gl(ge[Ee],U,X,k)}function vu(S,U,X,k){let{opaque:G,transmissive:ge,transparent:Ee}=S;A.setupLightsView(X),Et===!0&&j.setGlobalState(I.clippingPlanes,X),k&&_e.viewport(ie.copy(k)),G.length>0&&Ro(G,U,X),ge.length>0&&Ro(ge,U,X),Ee.length>0&&Ro(Ee,U,X),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Mu(S,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){let Te=vt.has(`EXT_color_buffer_half_float`)||vt.has(`EXT_color_buffer_float`);A.state.transmissionRenderTarget[k.id]=new An(1,1,{generateMipmaps:!0,type:Te?Jn:vn,minFilter:zn,samples:Math.max(4,Mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let ge=A.state.transmissionRenderTarget[k.id],Ee=k.viewport||ie;ge.setSize(Ee.z*I.transmissionResolutionScale,Ee.w*I.transmissionResolutionScale);let pe=I.getRenderTarget(),ve=I.getActiveCubeFace(),Re=I.getActiveMipmapLevel();I.setRenderTarget(ge),I.getClearColor($),C=I.getClearAlpha(),C<1&&I.setClearColor(16777215,.5),I.clear(),gn&&P.render(X);let qe=I.toneMapping;I.toneMapping=oi;let st=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),Et===!0&&j.setGlobalState(I.clippingPlanes,k),Ro(S,X,k),We.updateMultisampleRenderTarget(ge),We.updateRenderTargetMipmap(ge),vt.has(`WEBGL_multisampled_render_to_texture`)===!1){let Te=!1;for(let rt=0,Dt=U.length;rt<Dt;rt++){let{object:mt,geometry:en,material:Ae,group:un}=U[rt];if(Ae.side===2&&mt.layers.test(k.layers)){let lt=Ae.side;Ae.side=1,Ae.needsUpdate=!0,Su(mt,X,k,en,Ae,un),Ae.side=lt,Ae.needsUpdate=!0,Te=!0}}Te===!0&&(We.updateMultisampleRenderTarget(ge),We.updateRenderTargetMipmap(ge))}I.setRenderTarget(pe,ve,Re),I.setClearColor($,C),st!==void 0&&(k.viewport=st),I.toneMapping=qe}function Ro(S,U,X){let k=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ge=S.length;G<ge;G++){let Ee=S[G],{object:pe,geometry:ve,group:Re}=Ee,qe=Ee.material;qe.allowOverride===!0&&k!==null&&(qe=k),pe.layers.test(X.layers)&&Su(pe,U,X,ve,qe,Re)}}function Su(S,U,X,k,G,ge){B!==null&&G.isNodeMaterial&&B.setObject(S,G),S.onBeforeRender(I,U,X,k,G,ge),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(I,U,X,k,S,ge),G.transparent===!0&&G.side===2&&G.forceSinglePass===!1?(G.side=1,G.needsUpdate=!0,I.renderBufferDirect(X,U,k,G,S,ge),G.side=ri,G.needsUpdate=!0,I.renderBufferDirect(X,U,k,G,S,ge),G.side=2):I.renderBufferDirect(X,U,k,G,S,ge),S.onAfterRender(I,U,X,k,G,ge)}function bu(S){let U=0;for(let X of S)X.texture!==null&&U++;return U}function mr(S,U,X){U.isScene!==!0&&(U=mn);let k=Ue.get(S),G=A.state.lights,ge=A.state.shadowsArray,Ee=G.state.version,pe=te.getParameters(S,G.state,ge,U,X,A.state.lightProbeGridArray),ve=te.getProgramCacheKey(pe),Re=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let qe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=w.get(S.envMap||k.environment,qe),k.envMapRotation=k.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Re===void 0&&(S.addEventListener(`dispose`,ht),Re=/* @__PURE__ */ new Map,k.programs=Re,k.programVariants=/* @__PURE__ */ new Map);let st=Re.get(ve);if(st!==void 0){if(k.currentProgram===st&&k.lightsStateVersion===Ee)return Tu(S,pe),st}else pe.uniforms=te.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,X,pe),S.onBeforeCompile(pe,I),st=te.acquireProgram(pe,ve),Re.set(ve,st),k.uniforms=pe.uniforms;let Te=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=j.uniform),Tu(S,pe),k.needsLights=Cp(S),k.lightsStateVersion=Ee,k.needsLights&&(Te.ambientLightColor.value=G.state.ambient,Te.lightProbe.value=G.state.probe,Te.sunLights.value=G.state.sun,Te.sunLightShadows.value=G.state.sunShadow,Te.directionalLights.value=G.state.directional,Te.directionalLightShadows.value=G.state.directionalShadow,Te.spotLights.value=G.state.spot,Te.spotLightShadows.value=G.state.spotShadow,Te.rectAreaLights.value=G.state.rectArea,Te.ltc_1.value=G.state.rectAreaLTC1,Te.ltc_2.value=G.state.rectAreaLTC2,Te.pointLights.value=G.state.point,Te.pointLightShadows.value=G.state.pointShadow,Te.hemisphereLights.value=G.state.hemi,Te.sunShadowMatrix.value=G.state.sunShadowMatrix,Te.sunShadowCascade.value=G.state.sunShadowCascade,Te.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Te.spotLightMatrix.value=G.state.spotLightMatrix,Te.spotLightMap.value=G.state.spotLightMap,Te.pointShadowMatrix.value=G.state.pointShadowMatrix),k.numLightProbeGrids=bu(A.state.lightProbeGridArray),k.currentProgram=st,k.uniformsList=null,st}function Ap(S,U,X,k,G){let ge=Ue.get(S),Ee=ge.currentProgram.id+`,`+k+`,`+G,pe=ge.programVariants.get(Ee);return pe===void 0?(pe=mr(S,U,X),ge.programVariants.set(Ee,pe)):(ge.currentProgram=pe,ge.uniformsList=null,ge.outputColorSpace=k,ge.toneMapping=G),pe}function Eu(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=fr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Tu(S,U){let X=Ue.get(S);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function wp(S,U,X,k,G){U.isScene!==!0&&(U=mn),We.resetTextureUnits();let ge=U.fog,Ee=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,pe=se===null?I.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Je.workingColorSpace,ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Re=w.get(k.envMap||Ee,ve),qe=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,st=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Te=!!X.morphAttributes.position,rt=!!X.morphAttributes.normal,Dt=!!X.morphAttributes.color,_t=oi;k.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(_t=I.toneMapping);let mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,en=mt!==void 0?mt.length:0,Ae=Ue.get(k),un=A.state.lights;if(Et===!0&&(pt===!0||S!==ee)){let Tt=S===ee&&k.id===q;j.setState(k,S,Tt)}let lt=!1,Ki=!1;k.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==un.state.version||G.isBatchedMesh&&Ae.batching===!1||!G.isBatchedMesh&&Ae.batching===!0||G.isBatchedMesh&&Ae.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ae.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ae.instancing===!1||!G.isInstancedMesh&&Ae.instancing===!0||G.isSkinnedMesh&&Ae.skinning===!1||!G.isSkinnedMesh&&Ae.skinning===!0||G.isInstancedMesh&&Ae.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ae.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ae.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ae.instancingMorph===!1&&G.morphTexture!==null||Ae.envMap!==Re||k.fog===!0&&Ae.fog!==ge||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==j.numPlanes||Ae.numIntersection!==j.numIntersection)||Ae.vertexAlphas!==qe||Ae.vertexTangents!==st||Ae.morphTargets!==Te||Ae.morphNormals!==rt||Ae.morphColors!==Dt||Ae.morphTargetsCount!==en||Ae.numLightProbeGrids!==bu(A.state.lightProbeGridArray)?lt=!0:(Ae.outputColorSpace!==pe||Ae.toneMapping!==_t)&&(Ki=!0):(lt=!0,Ae.__version=k.version);let tn=Ae.currentProgram;(lt===!0||Ki===!0)&&(tn=Ki===!0?Ap(k,U,G,pe,_t):mr(k,U,G),B&&k.isNodeMaterial&&B.onUpdateProgram(k,tn,Ae));let Co=!1,Pi=!1,Zi=!1,ot=tn.getUniforms(),Kt=Ae.uniforms;if(_e.useProgram(tn.program)&&(Co=!0,Pi=!0,Zi=!0),k.id!==q&&(q=k.id,Pi=!0),Co||ee!==S){_e.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ot.setValue(F,`projectionMatrix`,S.projectionMatrix),ot.setValue(F,`viewMatrix`,S.matrixWorldInverse);let Wt=ot.map.cameraPosition;Wt!==void 0&&Wt.setValue(F,hn.setFromMatrixPosition(S.matrixWorld)),Mt.logarithmicDepthBuffer&&ot.setValue(F,`logDepthBufFC`,2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ot.setValue(F,`isOrthographic`,S.isOrthographicCamera===!0),ee!==S&&(ee=S,Pi=!0,Zi=!0)}if(Ae.needsLights&&(un.state.sunShadowMap.length>0&&ot.setValue(F,`sunShadowMap`,un.state.sunShadowMap,We),un.state.directionalShadowMap.length>0&&ot.setValue(F,`directionalShadowMap`,un.state.directionalShadowMap,We),un.state.spotShadowMap.length>0&&ot.setValue(F,`spotShadowMap`,un.state.spotShadowMap,We),un.state.pointShadowMap.length>0&&ot.setValue(F,`pointShadowMap`,un.state.pointShadowMap,We)),G.isSkinnedMesh){ot.setOptional(F,G,`bindMatrix`),ot.setOptional(F,G,`bindMatrixInverse`);let Tt=G.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),ot.setValue(F,`boneTexture`,Tt.boneTexture,We))}G.isBatchedMesh&&(ot.setOptional(F,G,`batchingTexture`),ot.setValue(F,`batchingTexture`,G._matricesTexture,We),ot.setOptional(F,G,`batchingIdTexture`),ot.setValue(F,`batchingIdTexture`,G._indirectTexture,We),ot.setOptional(F,G,`batchingColorTexture`),G._colorsTexture!==null&&ot.setValue(F,`batchingColorTexture`,G._colorsTexture,We));let Vn=X.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&Q.update(G,X,tn),(Pi||Ae.receiveShadow!==G.receiveShadow)&&(Ae.receiveShadow=G.receiveShadow,ot.setValue(F,`receiveShadow`,G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Kt.envMapIntensity.value=U.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=qy()),Pi){if(ot.setValue(F,`toneMappingExposure`,I.toneMappingExposure),Ae.needsLights&&Rp(Kt,Zi),ge&&k.fog===!0&&ce.refreshFogUniforms(Kt,ge),ce.refreshMaterialUniforms(Kt,k,ne,oe,A.state.transmissionRenderTarget[S.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){let Tt=y,Wt=0;for(let hi of A.state.lightProbeGridArray)hi.texture!==null&&(Tt.textures[Wt]=hi.texture,Tt.min[Wt]=hi.boundingBox.min,Tt.max[Wt]=hi.boundingBox.max,Tt.resolution[Wt]=hi.resolution,Wt++);for(let hi in Tt)Tt[hi].length=Wt;Kt.probesSH.value=Tt.textures,Kt.probesMin.value=Tt.min,Kt.probesMax.value=Tt.max,Kt.probesResolution.value=Tt.resolution}fr.upload(F,Eu(Ae),Kt,We)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(fr.upload(F,Eu(Ae),Kt,We),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ot.setValue(F,`center`,G.center),ot.setValue(F,`modelViewMatrix`,G.modelViewMatrix),ot.setValue(F,`normalMatrix`,G.normalMatrix),ot.setValue(F,`modelMatrix`,G.matrixWorld),k.uniformsGroups!==void 0){let Tt=k.uniformsGroups;for(let Wt=0,hi=Tt.length;Wt<hi;Wt++){let wu=Tt[Wt];Ie.update(wu,tn),Ie.bind(wu,tn)}}return tn}function Rp(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Cp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(S,U,X){let k=Ue.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Ue.get(S.texture).__webglTexture=U,Ue.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let X=Ue.get(S);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,X=0){se=S,Y=U,V=X;let k=null,G=!1,ge=!1;if(S){let pe=Ue.get(S);if(pe.__useDefaultFramebuffer!==void 0){_e.bindFramebuffer(F.FRAMEBUFFER,pe.__webglFramebuffer),ie.copy(S.viewport),Se.copy(S.scissor),Fe=S.scissorTest,_e.viewport(ie),_e.scissor(Se),_e.setScissorTest(Fe),q=-1;return}else if(pe.__webglFramebuffer===void 0)We.setupRenderTarget(S);else if(pe.__hasExternalTextures)We.rebindTextures(S,Ue.get(S.texture).__webglTexture,Ue.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let qe=S.depthTexture;if(pe.__boundDepthTexture!==qe){if(qe!==null&&Ue.has(qe)&&(S.width!==qe.image.width||S.height!==qe.image.height))throw new Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);We.setupDepthRenderbuffer(S)}}let ve=S.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(ge=!0);let Re=Ue.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?k=Re[U][X]:k=Re[U],G=!0):S.samples>0&&We.useMultisampledRTT(S)===!1?k=Ue.get(S).__webglMultisampledFramebuffer:Array.isArray(Re)?k=Re[X]:k=Re,ie.copy(S.viewport),Se.copy(S.scissor),Fe=S.scissorTest}else ie.copy(ue).multiplyScalar(ne).floor(),Se.copy(Ve).multiplyScalar(ne).floor(),Fe=Ke;if(X!==0&&(k=z),_e.bindFramebuffer(F.FRAMEBUFFER,k)&&_e.drawBuffers(S,k),_e.viewport(ie),_e.scissor(Se),_e.setScissorTest(Fe),G){let pe=Ue.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,X)}else if(ge){let pe=U;for(let ve=0;ve<S.textures.length;ve++){let Re=Ue.get(S.textures[ve]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ve,Re.__webglTexture,X,pe)}}else if(S!==null&&X!==0){let pe=Ue.get(S.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,X)}q=-1};function Au(S){let U=Ue.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=Mt.textureFormatReadable(S.format),U.__typeReadable=Mt.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,X,k,G,ge,Ee,pe=0){if(!(S&&S.isWebGLRenderTarget)){Be(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let ve=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(ve=ve[Ee],Array.isArray(ve)&&(ve=ve[0])),ve){_e.bindFramebuffer(F.FRAMEBUFFER,ve);try{let Re=S.textures[pe],qe=Re.format,st=Re.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);let Te=Au(Re);if(Te.__formatReadable===!1){Be(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(Te.__typeReadable===!1){Be(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}U>=0&&U<=S.width-k&&X>=0&&X<=S.height-G&&F.readPixels(U,X,k,G,le.convert(qe),le.convert(st),ge)}finally{let Re=se!==null?Ue.get(se).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(S,U,X,k,G,ge,Ee,pe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let ve=Ue.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ee!==void 0&&(ve=ve[Ee],Array.isArray(ve)&&(ve=ve[0])),ve)if(U>=0&&U<=S.width-k&&X>=0&&X<=S.height-G){_e.bindFramebuffer(F.FRAMEBUFFER,ve);let Re=S.textures[pe],qe=Re.format,st=Re.type;S.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pe);let Te=Au(Re);if(Te.__formatReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(Te.__typeReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let rt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,rt),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),F.readPixels(U,X,k,G,le.convert(qe),le.convert(st),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Dt=se!==null?Ue.get(se).__webglFramebuffer:null;_e.bindFramebuffer(F.FRAMEBUFFER,Dt);let _t=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ld(F,_t,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,rt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(rt),F.deleteSync(_t),ge}else throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(S,U=null,X=0){let k=Math.pow(2,-X),G=Math.floor(S.image.width*k),ge=Math.floor(S.image.height*k),Ee=U!==null?U.x:0,pe=U!==null?U.y:0;We.setTexture2D(S,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Ee,pe,G,ge),_e.unbindTexture()},this.copyTextureToTexture=function(S,U,X=null,k=null,G=0,ge=0){let Ee,pe,ve,Re,qe,st,Te,rt,Dt,_t=S.isCompressedTexture?S.mipmaps[ge]:S.image;if(X!==null)Ee=X.max.x-X.min.x,pe=X.max.y-X.min.y,ve=X.isBox3?X.max.z-X.min.z:1,Re=X.min.x,qe=X.min.y,st=X.isBox3?X.min.z:0;else{let ot=Math.pow(2,-G);Ee=Math.floor(_t.width*ot),pe=Math.floor(_t.height*ot),S.isDataArrayTexture?ve=_t.depth:S.isData3DTexture?ve=Math.floor(_t.depth*ot):ve=1,Re=0,qe=0,st=0}k!==null?(Te=k.x,rt=k.y,Dt=k.z):(Te=0,rt=0,Dt=0);let mt=le.convert(U.format),en=le.convert(U.type),Ae;U.isData3DTexture?(We.setTexture3D(U,0),Ae=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(We.setTexture2DArray(U,0),Ae=F.TEXTURE_2D_ARRAY):(We.setTexture2D(U,0),Ae=F.TEXTURE_2D),_e.activeTexture(F.TEXTURE0),_e.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),_e.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_e.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let un=_e.getParameter(F.UNPACK_ROW_LENGTH),lt=_e.getParameter(F.UNPACK_IMAGE_HEIGHT),Ki=_e.getParameter(F.UNPACK_SKIP_PIXELS),tn=_e.getParameter(F.UNPACK_SKIP_ROWS),Co=_e.getParameter(F.UNPACK_SKIP_IMAGES);_e.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),_e.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),_e.pixelStorei(F.UNPACK_SKIP_PIXELS,Re),_e.pixelStorei(F.UNPACK_SKIP_ROWS,qe),_e.pixelStorei(F.UNPACK_SKIP_IMAGES,st);let Pi=S.isDataArrayTexture||S.isData3DTexture,Zi=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let ot=Ue.get(S),Kt=Ue.get(U),Vn=Ue.get(ot.__renderTarget),Tt=Ue.get(Kt.__renderTarget);_e.bindFramebuffer(F.READ_FRAMEBUFFER,Vn.__webglFramebuffer),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Wt=0;Wt<ve;Wt++)Pi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.get(S).__webglTexture,G,st+Wt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.get(U).__webglTexture,ge,Dt+Wt)),F.blitFramebuffer(Re,qe,Re+Ee,qe+pe,Te,rt,Te+Ee,rt+pe,F.DEPTH_BUFFER_BIT,F.NEAREST);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||Ue.has(S)){let ot=Ue.get(S),Kt=Ue.get(U);_e.bindFramebuffer(F.READ_FRAMEBUFFER,R),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,W);for(let Vn=0;Vn<ve;Vn++)Pi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ot.__webglTexture,G,st+Vn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ot.__webglTexture,G),Zi?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Kt.__webglTexture,ge,Dt+Vn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Kt.__webglTexture,ge),G!==0?F.blitFramebuffer(Re,qe,Re+Ee,qe+pe,Te,rt,Te+Ee,rt+pe,F.COLOR_BUFFER_BIT,F.NEAREST):Zi?F.copyTexSubImage3D(Ae,ge,Te,rt,Dt+Vn,Re,qe,Ee,pe):F.copyTexSubImage2D(Ae,ge,Te,rt,Re,qe,Ee,pe);_e.bindFramebuffer(F.READ_FRAMEBUFFER,null),_e.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Zi?S.isDataTexture||S.isData3DTexture?F.texSubImage3D(Ae,ge,Te,rt,Dt,Ee,pe,ve,mt,en,_t.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ae,ge,Te,rt,Dt,Ee,pe,ve,mt,_t.data):F.texSubImage3D(Ae,ge,Te,rt,Dt,Ee,pe,ve,mt,en,_t):S.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,Te,rt,Ee,pe,mt,en,_t.data):S.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,Te,rt,_t.width,_t.height,mt,_t.data):F.texSubImage2D(F.TEXTURE_2D,ge,Te,rt,Ee,pe,mt,en,_t);_e.pixelStorei(F.UNPACK_ROW_LENGTH,un),_e.pixelStorei(F.UNPACK_IMAGE_HEIGHT,lt),_e.pixelStorei(F.UNPACK_SKIP_PIXELS,Ki),_e.pixelStorei(F.UNPACK_SKIP_ROWS,tn),_e.pixelStorei(F.UNPACK_SKIP_IMAGES,Co),ge===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Ae),_e.unbindTexture()},this.initRenderTarget=function(S){Ue.get(S).__webglFramebuffer===void 0&&We.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?We.setTextureCube(S,0):S.isData3DTexture?We.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?We.setTexture2DArray(S,0):We.setTexture2D(S,0),_e.unbindTexture()},this.resetState=function(){Y=0,V=0,se=null,_e.reset(),he.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};function QS(s,e){let t=0;s.traverse(n=>{n.isMesh&&e(n,`m${t++}`)})}function eb(s){let e=s.material;return`${s.userData.shape?.t??s.geometry.type}:${e.color?.getHexString()??``}`}var Lh=/* @__PURE__ */ new WeakMap;var Yy=new URL(`../libs/draco/draco_decoder.wasm`,import.meta.url).toString();var Ky=new URL(`../libs/draco/draco_wasm_wrapper.js`,import.meta.url).toString();var Zy=new URL(`../libs/draco/draco_decoder.js`,import.meta.url).toString();new URL(`../libs/draco/gltf/draco_wasm_wrapper.js`,import.meta.url).toString(),new URL(`../libs/draco/gltf/draco_decoder.wasm`,import.meta.url).toString();var Pl=class extends Bn{constructor(e){super(e),this.decoderPaths={js:Ky,wasm:Yy,dep_js:Zy},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL=``,this.defaultAttributeIDs={position:`POSITION`,normal:`NORMAL`,color:`COLOR`,uv:`TEX_COORD`},this.defaultAttributeTypes={position:`Float32Array`,normal:`Float32Array`,color:`Float32Array`,uv:`Float32Array`}}setDecoderPath(e){let{decoderPaths:t}=this;return typeof e==`object`?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=Rn.resolveURL(`draco_wasm_wrapper.js`,e),t.wasm=Rn.resolveURL(`draco_decoder.wasm`,e),t.dep_js=Rn.resolveURL(`draco_decoder.js`,e)),this}setDecoderConfig(e){return console.warn(`THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194.`),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let r=new wi(this.manager);r.setPriority(this.priority),r.setCache(this.cache),r.setPath(this.path),r.setResponseType(`arraybuffer`),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,xt,n).catch(n)}decodeDracoFile(e,t,n,i,r=Jt,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(Lh.has(e)){let l=Lh.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error(`THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.`)}let i,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:`decode`,id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Lh.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new bt;e.index&&t.setIndex(new Ut(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let{name:i,array:r,itemSize:o,stride:a,vertexColorSpace:l}=e.attributes[n],c;if(o===a)c=new Ut(r,o);else c=new Hi(new ki(r,a),o,0);i===`color`&&(this._assignVertexColorSpace(c,l),c.normalized=!(r instanceof Float32Array)),t.setAttribute(i,c)}return t}_assignVertexColorSpace(e,t){if(t!==`srgb`)return;let n=new we;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Je.colorSpaceToWorking(n,xt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new wi(this.manager);return n.setPriority(this.priority),n.setCache(this.cache),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!=`object`||this.decoderConfig.type===`js`,t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error(`THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.`);t.push(this._loadLibrary(n.dep_js,`text`))}else t.push(this._loadLibrary(n.js,`text`)),t.push(this._loadLibrary(n.wasm,`arraybuffer`));return this.decoderPending=Promise.all(t).then(i=>{let r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);let o=Jy.toString(),a=[`/* draco decoder */`,r,``,`/* worker */`,o.substring(o.indexOf(`{`)+1,o.lastIndexOf(`}`))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:`init`,decoderConfig:this.decoderConfig}),i.onmessage=function(r){let o=r.data;switch(o.type){case`decode`:i._callbacks[o.id].resolve(o);break;case`error`:i._callbacks[o.id].reject(o);break;default:console.error(`THREE.DRACOLoader: Unexpected message, "`+o.type+`"`)}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log(`Task load: `,this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==``&&URL.revokeObjectURL(this.workerSourceURL),this}};function Jy(){let s,e;onmessage=function(o){let a=o.data;switch(a.type){case`init`:s=a.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case`decode`:let l=a.buffer,c=a.taskConfig;e.then(h=>{let u=h.draco,f=new u.Decoder;try{let d=t(u,f,new Int8Array(l),c),p=d.attributes.map(x=>x.array.buffer);d.index&&p.push(d.index.array.buffer),self.postMessage({type:`decode`,id:a.id,geometry:d},p)}catch(d){console.error(d),self.postMessage({type:`error`,id:a.id,error:d.message})}finally{u.destroy(f)}})}};function t(o,a,l,c){let h=c.attributeIDs,u=c.attributeTypes,f,d,p=a.GetEncodedGeometryType(l);if(p===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(p===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error(`THREE.DRACOLoader: Unexpected geometry type.`);if(!d.ok()||f.ptr===0)throw new Error(`THREE.DRACOLoader: Decoding failed: `+d.error_msg());let x={index:null,attributes:[]};for(let m in h){let g=self[u[m]],v,b;if(c.useUniqueIDs)b=h[m],v=a.GetAttributeByUniqueId(f,b);else{if(b=a.GetAttributeId(f,o[h[m]]),b===-1)continue;v=a.GetAttribute(f,b)}let y=i(o,a,f,m,g,v);m===`color`&&(y.vertexColorSpace=c.vertexColorSpace),x.attributes.push(y)}return p===o.TRIANGULAR_MESH&&(x.index=n(o,a,f)),o.destroy(f),x}function n(o,a,l){let h=l.num_faces()*3,u=h*4,f=o._malloc(u);a.GetTrianglesUInt32Array(l,u,f);let d=new Uint32Array(o.HEAPF32.buffer,f,h).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,h,u){let f=l.num_points(),d=u.num_components(),p=r(o,h),x=d*h.BYTES_PER_ELEMENT,m=Math.ceil(x/4)*4,g=m/h.BYTES_PER_ELEMENT,v=f*x,b=f*m,y=o._malloc(v);a.GetAttributeDataArrayForAllPoints(l,u,p,v,y);let T=new h(o.HEAPF32.buffer,y,v/h.BYTES_PER_ELEMENT),A;if(x===m)A=T.slice();else{A=new h(b/h.BYTES_PER_ELEMENT);let _=0;for(let E=0;E<f;E++){for(let D=0;D<d;D++)A[_+D]=T[E*d+D];_+=g}}return o._free(y),{name:c,count:f,itemSize:d,array:A,stride:g}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function Dh(s,e){if(e===ah)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),s;if(e===hr||e===vo){let t=s.getIndex();if(t===null){let r=[],o=s.getAttribute(`position`);if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),s}let n=t.count-2,i=[];if(e===hr)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`),s.setIndex(i),s.clearGroups(),s}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,e),s}function $d(s){let e=/* @__PURE__ */ new Map,t=/* @__PURE__ */ new Map,n=s.clone();return jd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function jd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)jd(s.children[n],e.children[n],t)}var Ll=class extends Bn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kh(t)}),this.register(function(t){return new Hh(t)}),this.register(function(t){return new Gh(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new jh(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new Wh(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new Vh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Dl(t,nt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Dl(t,nt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new eu(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!==``)o=this.resourcePath;else if(this.path!==``){let c=Rn.extractUrlBase(e);o=Rn.resolveURL(c,this.path)}else o=Rn.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new wi(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType(`arraybuffer`),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},l=new TextDecoder;if(typeof e==`string`)r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ip){try{o[nt.KHR_BINARY_GLTF]=new tu(e)}catch(u){i&&i(u);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(/* @__PURE__ */ new Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new lu(r,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:o[u]=new Bh;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[u]=new nu(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[u]=new iu;break;case nt.KHR_MESH_QUANTIZATION:o[u]=new su;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+u+`".`)}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function $y(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function wt(s,e,t){let n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var nt={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DIFFUSE_ROUGHNESS:`KHR_materials_diffuse_roughness`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`};var Fh=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Jt);let u=l.range!==void 0?l.range:0;switch(l.type){case`directional`:c=new fs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case`point`:c=new hs(h),c.distance=u;break;case`spot`:c=new ho(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error(`THREE.GLTFLoader: Unexpected light type: `+l.type)}return c.position.set(0,0,0),ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||`light_`+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}};var Bh=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){let i=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,`map`,r.baseColorTexture,`srgb`))}return Promise.all(i)}};var zh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}};var kh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Lt:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(r,r)}return Promise.all(i)}};var Hh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Lt:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,`diffuseRoughnessMap`,n.diffuseRoughnessTexture)),Promise.all(i)}};var Gh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Lt:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}};var Vh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Lt:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(i)}};var Wh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Lt:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Jt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,`srgb`)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(i)}};var Xh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Lt:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(i)}};var qh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Lt:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(r[0],r[1],r[2],Jt),Promise.all(i)}};var Yh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Lt:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}};var Kh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Lt:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(r[0],r[1],r[2],Jt),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,`srgb`)),Promise.all(i)}};var Zh=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Lt:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(i)}};var Jh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return wt(this.parser,e,this.name)!==null?Lt:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(i)}};var $h=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,r.source,o)}};var jh=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};var Qh=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}};var Dl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency(`buffer`,i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(a){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}};var eu=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Hn.TRIANGLES&&c.mode!==Hn.TRIANGLE_STRIP&&c.mode!==Hn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency(`accessor`,o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let p of u){let x=new Xe,m=new L,g=new Tn,v=new L(1,1,1),b=new Br(p.geometry,p.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,T),l.SCALE&&v.fromBufferAttribute(l.SCALE,T),b.setMatrixAt(T,x.compose(m,g,v));let y=null;for(let T in l)if(T===`_COLOR_0`){let A=l[T];b.instanceColor=new yi(A.array,A.itemSize,A.normalized)}else if(T!==`TRANSLATION`&&T!==`ROTATION`&&T!==`SCALE`){if(y===null){let _=b.geometry;y=new bt,y.name=_.name;for(let E in _.attributes)y.setAttribute(E,_.attributes[E]);for(let E in _.morphAttributes)y.morphAttributes[E]=_.morphAttributes[E];_.index!==null&&y.setIndex(_.index),y.morphTargetsRelative=_.morphTargetsRelative;for(let E of _.groups)y.addGroup(E.start,E.count,E.materialIndex);_.boundingBox!==null&&(y.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(y.boundingSphere=_.boundingSphere.clone()),y.drawRange.start=_.drawRange.start,y.drawRange.count=_.drawRange.count,y.userData=Object.assign({},_.userData),b.geometry=y}let A=l[T];y.setAttribute(T,new yi(A.array,A.itemSize,A.normalized))}yt.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),d.push(b)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}};var ip=`glTF`;var To=12;var Qd={JSON:1313821514,BIN:5130562};var tu=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,To),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ip)throw new Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw new Error(`THREE.GLTFLoader: Legacy binary file detected.`);let i=this.header.length-To,r=new DataView(e,To),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Qd.JSON){let c=new Uint8Array(e,To+o,a);this.content=n.decode(c)}else if(l===Qd.BIN){let c=To+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error(`THREE.GLTFLoader: JSON content not found.`)}};var nu=class{constructor(e,t){if(!t)throw new Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=ou[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=ou[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]];c[u]=pr[f.componentType].name,l[u]=f.normalized===!0}}return t.getDependency(`bufferView`,r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(d)},a,c,Jt,f)})})}};var iu=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}};var su=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}};var Nl=class extends si{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,p=e*c,x=p-c,m=-2*d+3*f,g=d-f,v=1-m,b=g-f+u;for(let y=0;y!==a;y++){let T=o[x+y+a],A=o[x+y+l]*h,_=o[p+y+a],E=o[p+y]*h;r[y]=v*T+b*A+m*_+g*E}return r}};var jy=new Tn;var ru=class extends Nl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return jy.fromArray(r).normalize().toArray(r),r}};var Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123};var pr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array};var ep={9728:St,9729:zt,9984:ka,9985:lr,9986:gs,9987:zn};var tp={33071:Dn,33648:Hs,10497:Un};var Nh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16};var ou={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`};var qi={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`};var Qy={CUBICSPLINE:void 0,LINEAR:ss,STEP:is};var Uh={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function ev(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new it({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ri})),s.DefaultMaterial}function vs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ci(s,e){e.extras!==void 0&&(typeof e.extras==`object`?Object.assign(s.userData,e.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+e.extras))}function tv(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency(`accessor`,u.POSITION):s.attributes.position;o.push(f)}if(i){let f=u.NORMAL!==void 0?t.getDependency(`accessor`,u.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency(`accessor`,u.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function nv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function iv(s){let e,t=s.extensions&&s.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e=`draco:`+t.bufferView+`:`+t.indices+`:`+Oh(t.attributes):e=s.indices+`:`+Oh(s.attributes)+`:`+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=`:`+Oh(s.targets[n]);return e}function Oh(s){let e=``,t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+`:`+s[t[n]]+`;`;return e}function au(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function sv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?`image/jpeg`:s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?`image/webp`:s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var rv=new Xe;var lu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $y,this.associations=/* @__PURE__ */ new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<`u`&&typeof navigator.userAgent<`u`){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf(`Firefox`)>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>`u`||n&&i<17||r&&o<98?(this.textureLoader=new ls(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new uo(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wi(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType(`arraybuffer`),(this.options.withCredentials||this.options.crossOrigin===`use-credentials`)&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return vs(r,a,i),ci(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+=`_instance_`+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+`:`+t,i=this.cache.get(n);if(!i){switch(e){case`scene`:i=this.loadScene(t);break;case`node`:i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case`mesh`:i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case`accessor`:i=this.loadAccessor(t);break;case`bufferView`:i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case`buffer`:i=this.loadBuffer(t);break;case`material`:i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case`texture`:i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case`skin`:i=this.loadSkin(t);break;case`animation`:i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case`camera`:i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error(`Unknown type: `+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw new Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Rn.resolveURL(t.uri,i.path),r,void 0,function(){o(/* @__PURE__ */ new Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Nh[i.type],a=pr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Ut(c,o,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency(`bufferView`,i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency(`bufferView`,i.sparse.indices.bufferView)),r.push(this.getDependency(`bufferView`,i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Nh[i.type],c=pr[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,x,m;if(d&&d!==u){let g=Math.floor(f/d),v=`InterleavedBuffer:`+i.bufferView+`:`+i.componentType+`:`+g+`:`+i.count,b=t.cache.get(v);b||(x=new c(a,g*d,i.count*d/h),b=new ki(x,d/h),t.cache.add(v,b)),m=new Hi(b,l,f%d/h,p)}else a===null?x=new c(i.count*l):x=new c(a,f,i.count*l),m=new Ut(x,l,p);if(i.sparse!==void 0){let g=Nh.SCALAR,v=pr[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,T=new v(o[1],b,i.sparse.count*g),A=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,E=T.length;_<E;_++){let D=T[_];if(m.setX(D,A[_*l]),l>=2&&m.setY(D,A[_*l+1]),l>=3&&m.setZ(D,A[_*l+2]),l>=4&&m.setW(D,A[_*l+3]),l>=5)throw new Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+`:`+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||``,h.name===``&&typeof a.uri==`string`&&a.uri.startsWith(`data:image/`)===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=ep[f.magFilter]||zt,h.minFilter=ep[f.minFilter]||1008,h.wrapS=tp[f.wrapS]||1e3,h.wrapT=tp[f.wrapT]||1e3,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==1003&&h.minFilter!==zt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,l=o.uri||``,c=!1,h;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)h=n.getDependency(`bufferView`,o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)l=n.getDependency(`bufferView`,o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);h=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let x=d;t.isImageBitmapLoader===!0&&(x=function(m){let g=new kt(m);g.needsUpdate=!0,d(g)}),t.load(Rn.resolveURL(f,r.path),x,void 0,p)})})}let u=h.then(function(f){return c===!0&&a.revokeObjectURL(l),ci(f,o),f.userData.mimeType=o.mimeType||sv(o.uri),f}).catch(function(f){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency(`texture`,n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a=`PointsMaterial:`+n.uuid,l=this.cache.get(a);l||(l=new $s,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a=`LineBasicMaterial:`+n.uuid,l=this.cache.get(a);l||(l=new Js,rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a=`ClonedMaterial:`+n.uuid+`:`;i&&(a+=`derivative-tangents:`),r&&(a+=`vertex-colors:`),o&&(a+=`flat-shading:`);let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return it}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[nt.KHR_MATERIALS_UNLIT]){let u=i[nt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new we(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Jt),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,`map`,u.baseColorTexture,`srgb`)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,`metalnessMap`,u.metallicRoughnessTexture)),c.push(t.assignTexture(a,`roughnessMap`,u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=2);let h=r.alphaMode||Uh.OPAQUE;if(h===Uh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Uh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,`normalMap`,r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==on&&(c.push(t.assignTexture(a,`aoMap`,r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==on){let u=r.emissiveFactor;a.emissive=new we().setRGB(u[0],u[1],u[2],Jt)}return r.emissiveTexture!==void 0&&o!==on&&c.push(t.assignTexture(a,`emissiveMap`,r.emissiveTexture,`srgb`)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),ci(u,r),t.associations.set(u,{materials:e}),r.extensions&&vs(i,u,r),u})}createUniqueName(e){let t=gt.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return np(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=iv(c),u=i[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=np(new bt,c,t),c.mode===Hn.TRIANGLE_STRIP?f=f.then(d=>Dh(d,vo)):c.mode===Hn.TRIANGLE_FAN&&(f=f.then(d=>Dh(d,hr))),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?ev(this.cache):this.getDependency(`material`,o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],m=o[d],g,v=c[d];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0){let b=r.isSkinnedMesh===!0,y=x.hasAttribute(`skinIndex`)&&x.hasAttribute(`skinWeight`);b&&y===!1&&console.warn(`THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.`),g=b&&y?new Or(x,v):new Oe(x,v),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Hn.LINES)g=new zr(x,v);else if(m.mode===Hn.LINE_STRIP)g=new os(x,v);else if(m.mode===Hn.LINE_LOOP)g=new kr(x,v);else if(m.mode===Hn.POINTS)g=new Hr(x,v);else throw new Error(`THREE.GLTFLoader: Primitive mode unsupported: `+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&nv(g,r),g.name=t.createUniqueName(r.name||`mesh_`+e),ci(g,r),m.extensions&&vs(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&vs(i,u[0],r),u[0];let f=new Bt;r.extensions&&vs(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new Zt(Tl.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type===`orthographic`&&(t=new us(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ci(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency(`accessor`,t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Xe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[c])}return new Fr(a,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:`animation_`+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){let d=i.channels[u],p=i.samplers[d.sampler],x=d.target,m=x.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,v=i.parameters!==void 0?i.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency(`node`,m)),a.push(this.getDependency(`accessor`,g)),l.push(this.getDependency(`accessor`,v)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let b=0,y=f.length;b<y;b++){let T=f[b],A=d[b],_=p[b],E=x[b],D=m[b];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let I=n._createAnimationTracks(T,A,_,E,D);if(I)for(let O=0;O<I.length;O++)g.push(I[O])}let v=new ao(r,void 0,g);return ci(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency(`mesh`,i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency(`node`,a[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,rv)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new L().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):``,a=[],l$1=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l$1&&a.push(l$1),r.camera!==void 0&&a.push(i.getDependency(`camera`,r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Ks:c.length>1?h=new Bt:c.length===1?h=c[0]:h=new yt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),ci(h,r),r.extensions&&vs(n,h,r),r.matrix!==void 0){let u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let u=i.associations.get(h);i.associations.set(h,l({},u))}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Bt;n.name&&(r.name=i.createUniqueName(n.name)),ci(r,n),n.extensions&&vs(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency(`node`,o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add($d(f)):r.add(f)}let c=h=>{let u=/* @__PURE__ */ new Map;for(let[f,d]of i.associations)(f instanceof rn||f instanceof kt)&&u.set(f,d);return h.traverse(f=>{let d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}qi[r.path]===qi.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(qi[r.path]){case qi.weights:h=Ei;break;case qi.rotation:h=Ti;break;case qi.translation:case qi.scale:h=Wi;break;default:n.itemSize===1?h=Ei:h=Wi}let u=i.interpolation!==void 0?Qy[i.interpolation]:ss,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let x=new h(l[d]+`.`+qi[r.path],t.array,f,u);i.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=au(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){return new(this instanceof Ti?ru:Nl)(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ov(s,e,t){let n=e.attributes,i=new dn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){let h=au(pr[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let r=e.targets;if(r!==void 0){let a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=au(pr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(a)}s.boundingBox=i;let o=new xn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function np(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency(`accessor`,o).then(function(l){s.setAttribute(a,l)})}for(let o in n){let a=ou[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency(`accessor`,e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Je.workingColorSpace!==Jt&&`COLOR_0`in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),ci(s,e),ov(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?tv(s,e.targets,t):s})}var av=[`manette-nes`,`canard`,`cadre-photo`];async function mb(){let s=new Pl().setDecoderPath(`draco/`),e=new Ll().setDRACOLoader(s),t=/* @__PURE__ */ new Map;return await Promise.all(av.map(async n=>{try{let i=await lv(n),r=await e.parseAsync(i,`models/`);t.set(n,r.scene)}catch{console.warn(`Mod\xE8le \xAB ${n} \xBB indisponible : version dessin\xE9e \xE0 la place.`)}})),s.dispose(),t}async function lv(s){let e=await fetch(`models/${s}.glb`);if(e.ok){let n=await e.arrayBuffer();if(new TextDecoder().decode(new Uint8Array(n,0,4))===`glTF`)return n}let{data:t}=await(await fetch(`models/${s}.glb.json`)).json();return Uint8Array.from(atob(t),n=>n.charCodeAt(0)).buffer}var cu=new dn;var Ul=new L;var hu=new L;function Ao(s,e,t,n){let i=s.get(e);if(!i)return null;let r=i.clone(!0);cu.setFromObject(r).getSize(Ul);let o=n/Math.max(Ul.x,Ul.y,Ul.z);r.scale.setScalar(o),cu.setFromObject(r).getCenter(hu),r.position.set(-hu.x,-cu.min.y,-hu.z);let a=new Bt;return a.add(r),r.traverse(l=>{let c=l;c.isMesh&&(c.castShadow=c.receiveShadow=!0)}),t.add(a),a}var uu={desk:[`cadres/bureau-1.webp`,`cadres/bureau-2.webp`,`cadres/bureau-3.webp`,`cadres/bureau-4.webp`,`cadres/bureau-5.webp`],tv:[`cadres/tv-1-mononoke.webp`,`cadres/tv-2-kiki.webp`,`cadres/tv-3-chihiro.webp`,`cadres/tv-4-howl.webp`,`cadres/tv-5-totoro.webp`,`cadres/tv-6-ponyo.webp`]};var wo=new L;function Gn(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;wo.copy(e),wo[n]=0,wo.normalize();let c=.5*o/(o+a),h=1-wo.angleTo(s)/l;return Math.sign(wo[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Ol=class s extends On{constructor(e=1,t=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,x=new L,m=.5/o;for(let g=0,v=0;g<u.length;g+=3,v+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),d[v+0]=Gn(x,c,`z`,`y`,r,n),d[v+1]=1-Gn(x,c,`y`,`z`,r,t);break;case 1:x.set(-1,0,0),d[v+0]=1-Gn(x,c,`z`,`y`,r,n),d[v+1]=1-Gn(x,c,`y`,`z`,r,t);break;case 2:x.set(0,1,0),d[v+0]=1-Gn(x,c,`x`,`z`,r,e),d[v+1]=Gn(x,c,`z`,`x`,r,n);break;case 3:x.set(0,-1,0),d[v+0]=1-Gn(x,c,`x`,`z`,r,e),d[v+1]=1-Gn(x,c,`z`,`x`,r,n);break;case 4:x.set(0,0,1),d[v+0]=1-Gn(x,c,`x`,`y`,r,e),d[v+1]=1-Gn(x,c,`y`,`x`,r,t);break;case 5:x.set(0,0,-1),d[v+0]=Gn(x,c,`x`,`y`,r,e),d[v+1]=1-Gn(x,c,`y`,`x`,r,t)}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};var Fl=7;function je(){return Fl=Fl*16807%2147483647,(Fl-1)/2147483646}function op(s=7){Fl=s}var sp=/* @__PURE__ */ new Map;function Ye(s,e={}){let t=s+JSON.stringify(e),n=sp.get(t);return n||(n=new it(l({color:s,roughness:.8,metalness:0},e)),sp.set(t,n)),n}function jn(s,e=1.5){return new it({color:s,emissive:s,emissiveIntensity:e,roughness:.6})}var fu=s=>typeof s==`string`?Ye(s):s;var rp=/* @__PURE__ */ new Map;function Bl(s,e){let t=rp.get(s);return t||(t=e(),rp.set(s,t)),t}function du(s,e){return s.castShadow=!0,s.receiveShadow=!0,e.add(s),s}function N(s,e,t,n,i,r,o,a,l=.015){let c=Math.min(l,e/2-.001,t/2-.001,n/2-.001),u=new Oe(c>.003?Bl(`rb:${e}:${t}:${n}:${c}`,()=>new Ol(e,t,n,4,c)):Bl(`b:${e}:${t}:${n}`,()=>new On(e,t,n)),fu(i));return u.position.set(r,o+t/2,a),u.userData.shape={t:`box`,w:e,h:t,d:n,r:Math.max(c,0)},du(u,s)}function Ne(s,e,t,n,i,r,o,a,l=20){let c=Math.min(64,Math.max(16,Math.round(l*1.8))),h=new Oe(Bl(`c:${e}:${t}:${n}:${c}`,()=>new Fn(e,t,n,c)),fu(i));return h.position.set(r,o+n/2,a),h.userData.shape={t:`cyl`,rt:e,rb:t,h:n,seg:c},du(h,s)}function Le(s,e,t,n,i,r,o=1,a=1,l=1){let c=new Oe(Bl(`s:${e}`,()=>new Si(e,40,28)),fu(t));return c.position.set(n,i,r),c.scale.set(o,a,l),c.userData.shape={t:`sph`,r:e},du(c,s)}function ln(s,e,t,n,i,r,o,a=0){let l=new Oe(new $t(e,t),n);return l.position.set(i,r,o),l.rotation.y=a,s.add(l),l}function Pe(s,e){let t=new Bt;return e&&(t.name=e),s.add(t),t}function Yt(s,e,t,n,i,r,o){let a=new hs(e,t,n,2);return a.position.set(i,r,o),s.add(a),a}function Qt(s,e,t){let n=document.createElement(`canvas`);n.width=s,n.height=e,t(n.getContext(`2d`),s,e);let i=new Vr(n);return i.colorSpace=xt,i.anisotropy=4,i}var cv=new ls;function pu(s,e,t,n){e&&cv.load(e,i=>{i.colorSpace=`srgb`,i.anisotropy=8;let r=i.image,o=t/n,a=r.width/r.height;a>o?(i.repeat.set(o/a,1),i.offset.set((1-o/a)/2,0)):(i.repeat.set(1,a/o),i.offset.set(0,(1-a/o)/2)),s.map=i,s.needsUpdate=!0;let l=s.userData.bakedTwin;l&&(l.map=i,l.needsUpdate=!0)},void 0,()=>console.warn(`Image de cadre introuvable : ${e}`))}var{width:hv}=x,ap=`#d6ae7b`;function cp(s,e,t,n){let i=Pe(s,`corner-shelves`);i.position.set(hv,0,0);let r=.3,o=[1.08,1.36,1.64,1.92],a=new Fn(r,r,.025,28,1,!1,3*Math.PI/2,Math.PI/2),l=Ye(ap,{roughness:.6});o.forEach(h=>{let u=new Oe(a,l);u.position.set(0,h+.0125,0),u.castShadow=u.receiveShadow=!0,i.add(u)});let c=h=>new L(-.12,h+.025,.12);{let h=c(o[0]),u=Pe(i);u.position.copy(h),u.rotation.y=3*Math.PI/4;let f=new it({map:lp(),roughness:.7}),d=Ao(n,`cadre-photo`,u,.16);if(d){d.rotation.y=Math.PI/2,f.map=lp(180,240);let p=Pe(u);p.position.set(0,0,-.0335),p.rotation.x=uv,ln(p,.1,.13,f,0,.082,0,Math.PI).castShadow=!0}else N(u,.2,.15,.015,ap,0,0,0,.003),ln(u,.17,.12,f,0,.075,-.0085,Math.PI).castShadow=!0}{let h=c(o[1]),u=Pe(i);u.position.copy(h),u.rotation.y=3*Math.PI/4;let f=jn(`#fff6ea`,.6);e(f,.05,1.1),Le(u,.085,f,0,.075,0,1.15,.88,1),Le(u,.03,f,0,.16,.01),[-1,1].forEach(d=>{let p=Ne(u,0,.012,.035,`#d9b48c`,d*.055,.13,0,12);p.rotation.z=-d*.5}),[-1,1].forEach(d=>N(u,.022,.005,.004,`#3a2a2a`,d*.03,.09,-.083,.002)),Le(u,.022,`#7a3b3b`,0,.055,-.078,1,.8,.5),Le(u,.012,`#f08aa0`,0,.047,-.086,1,.6,.5),t(Yt(i,16767136,.05,1.4,-.16,o[1]+.1,.16),.02,.7)}{let h=c(o[2]),u=Pe(i);u.position.copy(h),u.rotation.y=3*Math.PI/4,Le(u,.07,Ye(`#c8261f`,{roughness:.35}),0,.075,0,1,1.12,1),Le(u,.045,`#f6e6cf`,0,.095,-.04,1,.9,.55),[-1,1].forEach(f=>Le(u,.009,f<0?`#1d1d22`:`#f6e6cf`,f*.018,.1,-.064)),N(u,.05,.004,.004,`#d9a63c`,0,.06,-.067,0),N(u,.024,.03,.003,`#d9a63c`,0,.022,-.066,0)}{let h=c(o[3]),u=Pe(i);u.position.copy(h),u.rotation.y=3*Math.PI/4,N(u,.13,.02,.1,`#2a2730`,0,0,0,.004);let f=Ye(`#33303a`,{roughness:.5,metalness:.2});for(let p=0;p<9;p++){let x=p/9*Math.PI*2,m=p===0?0:.025+je()*.02,g=p===0?.22:.08+je()*.09;Ne(u,0,.012+je()*.01,g,f,Math.cos(x)*m,.02,Math.sin(x)*m,6)}ln(u,.05,.035,new it({map:fv(`33`,`#d9b45a`),transparent:!0,roughness:.5}),0,.09,-.04,Math.PI)}}function hp(s,e){let t=n=>n+.009;{let n=Pe(s);n.position.set(0,t(1.42),-.01),Ne(n,.055,.06,.012,`#121216`,0,0,0,32);let i=`#f1d9c8`,r=Ye(`#1b1a20`,{roughness:.45});[-1,1].forEach(a=>{Ne(n,.011,.012,.03,r,a*.014,.012,0,12),Ne(n,.007,.009,.11,`#3a3540`,a*.013,.04,0,12)}),Ne(n,.03,.024,.04,r,0,.14,0,20),Ne(n,.02,.026,.06,r,0,.18,0,20),N(n,.07,.05,.03,`#26242c`,0,.19,.003,.01),Ne(n,.006,.006,.015,i,0,.24,0,10),Le(n,.022,i,0,.27,0),Le(n,.025,`#141317`,0,.278,.006,1,.95,1);let o=Ne(n,.005,.006,.07,i,.03,.2,-.01,8);o.rotation.z=-.6,Ne(n,.002,.002,.25,`#8b8b94`,.06,.012,-.02,8),Le(n,.008,`#2b2b30`,.06,.265,-.02)}{let n=Pe(s);n.position.set(.02,t(.55),.02),n.rotation.y=-.12,N(n,.22,.06,.2,`#d8d6d2`,0,0,0,.006),N(n,.222,.025,.2,`#4a4a50`,0,0,0,.004),N(n,.12,.004,.11,`#3a3a40`,0,.06,.02,.002),N(n,.04,.012,.004,`#c9302c`,-.07,.03,-.101,.002);let i=Pe(s);if(i.position.set(-.06,t(.55),-.12),i.rotation.y=.25,Ao(e,`manette-nes`,i,.24)){i.position.set(-.02,t(.55),-.1),i.rotation.y=Math.PI+.2;return}N(i,.1,.012,.045,`#cfcdc9`,0,0,0,.004),N(i,.09,.003,.035,`#1f1f24`,0,.012,0,.002),[.02,.035].forEach(o=>Le(i,.005,`#c9302c`,o,.016,0)),N(i,.016,.004,.016,`#cfcdc9`,-.025,.014,0,.002)}}function up(s,e,t){let n=Pe(s,`pothos`);n.position.set(t*.18,e,.02),Ne(n,.065,.05,.1,Ye(`#efe6da`,{roughness:.7}),0,0,0,28),Ne(n,.06,.06,.008,`#4a3a2e`,0,.092,0,24);let i=Ye(`#4e8a3a`,{roughness:.55,side:2}),r=Ye(`#b9c95a`,{roughness:.55,side:2}),o=(a,l,c,h=1)=>{Le(n,.026*h,je()<.3?r:i,a,l,c,1,.35,1.4).rotation.set(je()*1.2-.6,je()*Math.PI*2,je()*.8-.4)};for(let a=0;a<18;a++){let l=je()*Math.PI*2,c=.02+je()*.07;o(Math.cos(l)*c,.11+je()*.09,Math.sin(l)*c,.9+je()*.4)}[-.06,.04,.13].forEach((a,l)=>{let c=.55+l*.18,h=9+l*2;for(let u=0;u<h;u++){let f=u/(h-1),d=t*(.07+Math.min(f*3,1)*.1),p=.1-Math.max(0,f*3-1)*(c/2)-Math.min(f*3,1)*.02,x=a+Math.sin(f*5+l)*.025;Ne(n,.002,.002,c/h,`#5d7a3a`,d,p,x,5),o(d+t*.012,p,x,.8+je()*.3)}})}var uv=.2;function lp(s=256,e=180){return Qt(s,e,(t,n,i)=>{let r=t.createLinearGradient(0,0,0,i*.55);r.addColorStop(0,`#8ea6bd`),r.addColorStop(1,`#d5dde3`),t.fillStyle=r,t.fillRect(0,0,n,i),t.fillStyle=`#5f7f97`,t.fillRect(0,i*.5,n,i*.14),t.fillStyle=`#e7e2d6`,t.fillRect(0,i*.64,n,i*.36),t.fillStyle=`#3d4a5c`,t.fillRect(n*.38,i*.36,n*.26,i*.2),t.beginPath(),t.moveTo(n*.35,i*.37),t.lineTo(n*.51,i*.24),t.lineTo(n*.67,i*.37),t.fill(),t.fillStyle=`#e9dcc0`,[.42,.5,.58].forEach(o=>t.fillRect(n*o,i*.42,n*.035,i*.05)),t.fillStyle=`#4a4a4a`,[.4,.62].forEach(o=>t.fillRect(n*o,i*.56,n*.012,i*.1))})}function fv(s,e){return Qt(128,90,(t,n,i)=>{t.clearRect(0,0,n,i),t.fillStyle=e,t.font=`700 64px Georgia, serif`,t.textAlign=`center`,t.textBaseline=`middle`,t.fillText(s,n/2,i/2+4)})}function fp(s){dv(s),pv(s),mv(s),gv(s)}function dv({gTV:s,register:e,dimLight:t,dimEmissive:n,tickers:i,eggEffects:r}){let c=Pe(s,`aquarium`);c.position.set(k.x,k.shelfY,k.z);let h=Ye(`#eef0f3`,{roughness:.35,metalness:.25});N(c,.16,.02,.12,`#dfe2e7`,0,0,0,.006);let u=Pe(c);u.position.set(0,.19,0);let f=new Oe(new Fn(.17,.17,.19,64,1,!0),h);f.rotation.x=Math.PI/2,f.castShadow=!0,u.add(f);let d=new Oe(new Mi(.17,64),h);d.position.z=.19/2,u.add(d);let p=new Oe(new no(.125,.17,64),h);p.position.z=-.19/2,p.rotation.y=Math.PI,u.add(p);let x=new it({color:`#0d1b33`,emissive:`#2f8fe0`,emissiveIntensity:.6,roughness:.6});n(x,.45,.9);let m=new Oe(new Fn(.125,.125,.18,64,1,!0),x);m.material.side=1,m.rotation.x=Math.PI/2,u.add(m);let g=new Oe(new Mi(.125,64),new it({color:`#06101f`,emissive:`#123a6b`,emissiveIntensity:.5}));g.position.z=.19/2-.006,g.rotation.y=Math.PI,u.add(g);let v=new Oe(new Mi(.125,64),new Lt({color:`#bfe6ff`,transparent:!0,opacity:.12,roughness:.02,clearcoat:1,depthWrite:!1}));v.position.z=-.091,v.rotation.y=Math.PI,u.add(v);t(Yt(u,7324671,0,1.2,0,0,-.3),.05,.45);let y=0,T=new it({color:`#e6f4ff`,emissive:`#bfe4ff`,emissiveIntensity:.6,transparent:!0,opacity:.8,roughness:.3});n(T,.5,1.1);let A=new Si(.014,20,10,0,Math.PI*2,0,Math.PI/2),_=new Fn(.0012,5e-4,.022,4);_.translate(0,-.011,0);let E=[];for(let B=0;B<11;B++){let z=new Bt,R=new Oe(A,T);z.add(R);let W=[];for(let V=0;V<5;V++){let se=new Oe(_,T),q=V/5*Math.PI*2;se.position.set(Math.cos(q)*.007,0,Math.sin(q)*.007),z.add(se),W.push(se)}let Y=.7+je()*.6;z.scale.setScalar(Y),u.add(z),E.push({g:z,bell:R,tents:W,phase:je()*6,a:je()*Math.PI*2,rad:.02+je()*.08,z:-.05+je()*.1})}let D=0,I=B=>{let z=B/E.length*Math.PI*2,R=.0055;return[16*Math.sin(z)**3*R,(13*Math.cos(z)-5*Math.cos(2*z)-2*Math.cos(3*z)-Math.cos(4*z))*R+.01]},O=B=>E.forEach((z,R)=>{let W=z.a+B*.12,Y=Math.cos(W)*z.rad,V=Math.sin(W*1.3+z.phase)*z.rad,se=Math.min(1,D)**2*(3-2*Math.min(1,D)),[q,ee]=I(R);z.g.position.set(Y+(q-Y)*se,V+(ee-V)*se,z.z+(-.04-z.z)*se);let ie=1+Math.sin(B*2.6+z.phase)*.14;z.bell.scale.set(ie,1/ie,ie),z.tents.forEach((Se,Fe)=>Se.rotation.z=Math.sin(B*2.6+z.phase+Fe)*.3)});O(0),i.push(B=>{y=Math.max(0,y-.016),D=Math.max(0,D-.006),O(B),T.opacity=.75+y*.25}),Ot(c,.38,.4,.23,0,.19,0),e(`egg-aquarium`,c),r.set(`egg-aquarium`,()=>{y=1,D=1.6;let B=T.emissiveIntensity;T.emissiveIntensity=B+1.2,setTimeout(()=>T.emissiveIntensity=B,1200)})}function pv({root:s,register:e}){let t=Pe(s,`sunflowers`);t.position.set(A.x,A.y,A.z),t.scale.setScalar(.72),Ne(t,.07,.09,.3,`#f6f1e8`,0,0,0,20),Ne(t,.072,.072,.02,`#f2b8c6`,0,.24,0,20);let n=Ye(`#f7c948`,{roughness:.7}),i=Ye(`#6b4423`,{roughness:.9});[[0,.72,0,0],[-.06,.62,.05,.25],[.05,.56,-.05,-.2]].forEach(([r,o,a,l])=>{let c=Ne(t,.006,.006,o,`#6a8a4a`,r/2,.05,a/2,6);c.rotation.z=l*.3;let h=Pe(t);h.position.set(r,o+.05,a),h.rotation.set(-.35,l*.6,0);for(let f=0;f<12;f++){let d=f/12*Math.PI*2,p=Le(h,.025,n,Math.cos(d)*.05,Math.sin(d)*.05,0,1.4,.55,.25);p.rotation.z=d}Le(h,.035,i,0,0,.01,1,1,.45);let u=Le(t,.03,`#7fa860`,r/2+.03,o*.5,a/2,1.6,.3,.8);u.rotation.z=.6}),Ot(t,.3,.9,.3,0,.45,0),e(`egg-sunflowers`,t)}function mv({gEnd:s,register:e,dimEmissive:t,tickers:n,eggEffects:i}){let r=Pe(s,`stars`);r.position.set(.012,C.y,(C.z0+C.z1)/2);let o=new er;for(let p=0;p<10;p++){let x=p%2?.018:.042,m=p/10*Math.PI*2+Math.PI/2;o[p?`lineTo`:`moveTo`](Math.cos(m)*x,Math.sin(m)*x)}let a=new io(o),l=C.z1-C.z0,c=[];for(let p=0;p<11;p++){let x=new it({color:`#f4f0cf`,emissive:`#e9ff9e`,emissiveIntensity:.05});t(x,.04,1.6);let m=new Oe(a,x);m.rotation.y=Math.PI/2,m.rotation.x=je()*.6;let g=.6+je()*.7;m.scale.setScalar(g),m.position.set(0,(je()-.5)*.36,-l/2+p/10*l+(je()-.5)*.08),r.add(m),c.push({m,mat:x,phase:je()*6})}let h=new it({color:`#fff6d8`,emissive:`#fff1b0`,emissiveIntensity:.05});t(h,.04,1.4);let u=new Oe(new Mi(.07,24),h);u.rotation.y=Math.PI/2,u.position.set(0,.1,-l/2-.12),r.add(u);let f=new Oe(new Mi(.065,24),Ye(`#f4ede5`,{roughness:.95}));f.rotation.y=Math.PI/2,f.position.set(.001,.125,-l/2-.09),r.add(f);let d=0;n.push(p=>{d=Math.max(0,d-.012),c.forEach(x=>{let m=1+Math.sin(p*2.2+x.phase)*.06+d*Math.abs(Math.sin(p*9+x.phase))*.5;x.m.scale.setScalar(m*(x.m.userData.base??(x.m.userData.base=x.m.scale.x)))})}),Ot(r,.06,.5,l+.3,.03,0,-.05),e(`egg-stars`,r),i.set(`egg-stars`,()=>{d=1,c.forEach(p=>{let x=p.mat.emissiveIntensity;p.mat.emissiveIntensity=x+1.2,setTimeout(()=>p.mat.emissiveIntensity=x,1400)})})}function gv({root:s,register:e}){let t=Pe(s,`bowl`);t.position.set(w.x,0,w.z),t.rotation.y=w.rotY,N(t,.34,.006,.24,`#f6c9d3`,0,0,0,.003),Ne(t,.07,.055,.045,`#ffffff`,-.07,.006,0,20),Ne(t,.065,.065,.005,`#c9a07a`,-.07,.045,0,20),Ne(t,.07,.055,.045,`#cbbcf6`,.08,.006,0,20),Ne(t,.064,.064,.004,Ye(`#a9dcff`,{roughness:.1}),.08,.044,0,20);let n=Le(t,.022,`#e38aa3`,0,.01,.09,1.6,.3,.9);n.castShadow=!1,Ot(t,.4,.12,.3,0,.05,0),e(`egg-bowl`,t)}function dp(s,e,t,n){let i=Pe(s,`teardown`);i.position.set(t,.36,n),i.rotation.y=-.4,N(i,.2,.012,.11,`#c8b4ef`,0,0,0,.006),N(i,.18,.006,.09,`#2f7a4f`,0,.012,0,.002),N(i,.03,.006,.03,`#1d1d22`,-.03,.018,0,.002),N(i,.02,.006,.015,`#1d1d22`,.03,.018,-.02,.002),N(i,.05,.004,.008,`#e9c46a`,.04,.018,.025,0),N(i,.04,.012,.05,`#cfd6ff`,.06,.018,0,.003);let r=N(i,.2,.01,.11,`#c8b4ef`,0,0,.13,.006);r.rotation.y=.15,N(i,.07,.003,.05,`#9bbc6a`,-.02,.01,.13,.002);for(let a=0;a<4;a++)Ne(i,.004,.004,.006,`#b9b9c4`,-.12+a*.012,0,.07+a%2*.01,6);let o=Pe(i);o.position.set(-.04,.008,-.09),o.rotation.y=.3,Ne(o,.008,.009,.06,`#e38aa3`,0,0,0,8).rotation.z=Math.PI/2,Ne(o,.002,.002,.06,`#b9b9c4`,.055,.006,0,6).rotation.z=Math.PI/2,Ot(i,.3,.08,.3,0,.02,.04),e(`egg-teardown`,i)}function pp(s,e,t,n,i,r){let o=Pe(s,`duck`);if(o.position.set(t,n,i),o.rotation.y=2.3,Ao(r,`canard`,o,.085)){Ot(o,.12,.12,.12,0,.05,0),e(`egg-duck`,o);return}let a=Ye(`#ffd84d`,{roughness:.4});Le(o,.035,a,0,.03,0,1.25,.9,1),Le(o,.024,a,.03,.07,0),Le(o,.012,`#f08a24`,.055,.066,0,1.3,.5,1),Le(o,.005,`#1d1d22`,.045,.078,.012),Le(o,.005,`#1d1d22`,.045,.078,-.012),Ot(o,.12,.12,.12,0,.05,0),e(`egg-duck`,o)}function mp(s,e,t,n,i){let r=Pe(s,`lava-lamp`);r.position.set(t,n,i);let o=Ye(`#c3c0cc`,{metalness:.6,roughness:.35});Ne(r,.04,.065,.1,o,0,0,0,24);let a=new it({color:`#ff8fb8`,emissive:`#ff6fa0`,emissiveIntensity:.1,transparent:!0,opacity:.55,roughness:.15}),l=Ne(r,.028,.042,.2,a,0,.1,0,24);l.castShadow=!1,Ne(r,.012,.03,.05,o,0,.3,0,20);let c=new it({color:`#ffb36b`,emissive:`#ff9a4d`,emissiveIntensity:.1,roughness:.4}),h=[.02,.016,.022,.014].map((p,x)=>{let m=Le(r,p,c,x%2?.008:-.008,.12,0,1,1.3,1);return m.castShadow=!1,{mesh:m,phase:x*1.7,speed:.22+x*.07,r:p}}),u=Yt(r,16752574,0,3,.05,.25,.2);Ot(r,.14,.38,.14,0,.17,0),e(`lava-lamp`,r);let f=0,d={on:!1,step(p,x,m,g){f+=((d.on?1:0)-f)*Math.min(1,p*2.5),a.emissiveIntensity=.08+f*1.3,c.emissiveIntensity=.05+f*1.6,u.intensity=f*(.5+1.9*m),h.forEach(v=>{let y=.125+(g?.35:Math.sin(x*v.speed+v.phase)*.5+.5)*.14*f;v.mesh.position.y+=(y-v.mesh.position.y)*Math.min(1,p*1.5);let T=g?1:1+Math.sin(x*.9+v.phase)*.15*f;v.mesh.scale.set(1/T,T*1.2,1/T)})}};return d}function gp(s,e){let t=Pe(s,`consoles`),n=i=>i+.009;{let i=Pe(t);i.position.set(0,n(.56),.02),i.rotation.y=.15;N(i,.15,.12,.16,Ye(`#5b4b9e`,{roughness:.5}),0,0,0,.012),Ne(i,.052,.052,.006,Ye(`#4a3c86`),-.01,.12,0,28),N(i,.12,.012,.014,Ye(`#3a3a44`),0,.122,.068,.004),[-.045,-.015,.015,.045].forEach(o=>N(i,.02,.012,.004,`#2a2a33`,o,.025,-.081,.002)),Le(i,.008,`#c9c6d3`,.05,.085,-.081)}{let i=Pe(t);i.position.set(0,n(.99),0),i.rotation.y=-.12;let r=Ye(`#36363e`,{roughness:.55});N(i,.26,.055,.19,r,0,0,0,.02),N(i,.12,.03,.13,r,0,.05,.01,.015),N(i,.1,.07,.02,Ye(`#7a7a82`),0,.07,.01,.004),N(i,.07,.035,.002,Ye(`#e8c25a`),0,.095,-.001,0),[-.075,-.025,.025,.075].forEach(o=>N(i,.03,.018,.004,`#1d1d22`,o,.015,-.096,.003)),N(i,.022,.008,.012,`#9a9aa4`,-.035,.08,-.05,.002),N(i,.022,.008,.012,`#9a9aa4`,.035,.08,-.05,.002)}{let i=Pe(t);i.position.set(-.12,n(1.43),.01),i.rotation.y=.2,N(i,.06,.012,.05,Ye(`#e9e6ef`),0,0,.02,.004);let r=Pe(i);r.position.set(0,.012,0),r.rotation.x=.35,N(r,.17,.074,.02,Ye(`#1d1d22`,{roughness:.25,metalness:.2}),0,0,0,.02);let o=new Oe(new $t(.095,.054),new it({color:`#141420`,emissive:`#3a4a8a`,emissiveIntensity:.25,roughness:.1}));o.position.set(0,.037,-.0105),o.rotation.y=Math.PI,r.add(o),N(r,.014,.004,.003,`#55555f`,-.068,.04,-.011,.001),N(r,.004,.014,.003,`#55555f`,-.068,.035,-.011,.001),[0,1,2,3].forEach(f=>Le(r,.0035,`#6b6b75`,.066+(f%2?.007:-.007)*(f<2?1:0),.04+(f<2?0:f===2?.007:-.007),-.011));let a=Pe(t);a.position.set(.13,n(1.43),0),a.rotation.y=-.25;let l=Ye(`#38a7c7`,{roughness:.3,metalness:.15});N(a,.134,.012,.074,l,0,0,0,.006);let c=new Oe(new $t(.06,.045),Ye(`#1a1a24`,{roughness:.1}));c.rotation.x=-Math.PI/2,c.position.set(0,.0125,0),a.add(c);let h=Pe(a);h.position.set(0,.012,.037),h.rotation.x=.28,N(h,.134,.074,.01,l,0,0,0,.006);let u=new Oe(new $t(.09,.055),new it({color:`#141420`,emissive:`#7fc6ff`,emissiveIntensity:.3,roughness:.1}));u.position.set(0,.037,-.0055),u.rotation.y=Math.PI,h.add(u)}Ot(t,.54,1,.36,0,1,0),e(`egg-consoles`,t)}function _p(s,e){let t=Ye(`#6b3fa0`,{roughness:.45}),n=Ye(`#7ccf4a`,{roughness:.45}),i=Ye(`#f08a24`,{roughness:.5});Ne(s,.05,.055,.012,`#2b2533`,0,0,0,24),[-1,1].forEach(l=>{let c=Ne(s,.011,.014,.085,t,l*.02,.012,0,10);c.rotation.z=l*.06,N(s,.022,.012,.034,t,l*.022,.012,.006,.004),N(s,.006,.03,.004,n,l*.02,.05,.013,.001)});let r=Pe(s);r.position.set(0,.095,0),r.rotation.x=.12,N(r,.05,.022,.03,t,0,0,0,.006),N(r,.052,.055,.034,t,0,.02,0,.008),N(r,.03,.022,.004,n,0,.045,.017,.002),N(r,.014,.008,.004,i,0,.034,.018,.002),[-1,1].forEach(l=>{let c=N(r,.024,.04,.034,t,l*.04,.05,0,.006);c.rotation.z=-l*.25,N(r,.026,.006,.036,n,l*.04,.084,0,.002);let h=Ne(r,.008,.009,.07,t,l*.042,-.02,.004,8);h.rotation.z=l*.12});let o=Pe(r);o.position.set(0,.08,.004),N(o,.022,.028,.026,t,0,0,0,.006),N(o,.016,.008,.008,n,0,.004,.012,.002),Le(o,.0035,`#ffe24d`,-.005,.017,.013),Le(o,.0035,`#ffe24d`,.005,.017,.013);let a=new Oe(new qr(.004,.03,6),t);a.position.set(0,.035,.008),a.rotation.x=.35,o.add(a),Ot(s,.14,.24,.12,0,.12,0),e(`egg-eva-figure`,s)}function xp(){let s=Qt(1024,1024,(e,t,n)=>{let r=n/16;for(let o=0;o<16;o++){let a=-(o%3)*90;for(;a<t;){let l=220+je()*200;e.fillStyle=`hsl(30,${42+je()*8}%,${58+je()*8}%)`,e.fillRect(a,o*r,l,r),e.fillStyle=`rgba(90,55,25,.25)`,e.fillRect(a,o*r,2,r),a+=l}e.fillStyle=`rgba(90,55,25,.3)`,e.fillRect(0,o*r,t,1.5)}});return s.wrapS=s.wrapT=Un,s.repeat.set(2.4,1.4),s}function zl(s){let e=[`#fbe3ec`,`#e9e3fb`,`#e3f1fb`,`#fdf1dc`,`#e5f5ec`];return Qt(200,260,(t,n,i)=>{t.fillStyle=e[s%5],t.fillRect(0,0,n,i);for(let r=0;r<5;r++)t.fillStyle=`hsla(${(s*70+r*50)%360},55%,${60+r*5}%,.8)`,t.beginPath(),t.ellipse(n*je(),i*je(),20+je()*40,20+je()*50,je()*3,0,7),t.fill();t.strokeStyle=`rgba(70,60,80,.6)`,t.lineWidth=3,t.beginPath(),t.moveTo(n*.3,i*.8),t.bezierCurveTo(n*.2,i*.3,n*.8,i*.5,n*.7,i*.15),t.stroke()})}function mu(s){return Qt(256,256,(e,t,n)=>{let i=e.createRadialGradient(t/2,n/2,10,t/2,n/2,t/2);i.addColorStop(0,s),i.addColorStop(1,`rgba(0,0,0,0)`),e.fillStyle=i,e.fillRect(0,0,t,n)})}function Ms(s,e,t,n,i,r){s.beginPath(),s.roundRect(e,t,n,i,r)}function yp(){return Qt(512,300,(s,e,t)=>{let n=s.createLinearGradient(0,0,0,t);n.addColorStop(0,`#5aa7e6`),n.addColorStop(1,`#0d2350`),s.fillStyle=n,s.fillRect(0,0,e,t);for(let i=0;i<7;i++){let r=40+je()*(e-80),o=40+je()*(t-110),a=12+je()*30,l=s.createRadialGradient(r,o,2,r,o,a);l.addColorStop(0,`rgba(255,230,245,.95)`),l.addColorStop(1,`rgba(200,170,255,.25)`),s.fillStyle=l,s.beginPath(),s.ellipse(r,o,a,a*.7,0,Math.PI,0),s.fill(),s.strokeStyle=`rgba(240,210,255,.55)`,s.lineWidth=1.5;for(let c=0;c<5;c++)s.beginPath(),s.moveTo(r-a*.7+c*a*.35,o),s.quadraticCurveTo(r-a*.5+c*a*.35+8,o+a*1.2,r-a*.7+c*a*.35,o+a*2.2),s.stroke()}})}function vp(){return Qt(512,300,(s,e,t)=>{let n=s.createLinearGradient(0,0,e,t);n.addColorStop(0,`#1b1f3a`),n.addColorStop(1,`#3a2a5e`),s.fillStyle=n,s.fillRect(0,0,e,t),s.fillStyle=`#fff`,s.font=`600 26px sans-serif`,s.fillText(`HubTV`,28,46),s.fillStyle=`rgba(255,255,255,.6)`,s.font=`16px sans-serif`,s.fillText(`Mode TV`,120,46);let i=[`#f2b8c6`,`#9fc3f0`,`#c8b4ef`,`#bfe8d6`,`#ffe08a`];for(let r=0;r<5;r++)s.fillStyle=i[r],Ms(s,28+r*94,90,82,r===0?130:110,10),s.fill();s.strokeStyle=`#fff`,s.lineWidth=4,Ms(s,26,88,86,134,12),s.stroke(),s.fillStyle=`rgba(255,255,255,.7)`,s.font=`15px sans-serif`,s.fillText(`Ⓐ Lancer    Ⓑ Retour au bureau`,28,262)})}function gu(s,e){return Qt(512,296,(t,n,i)=>{t.fillStyle=`#f4f2f7`,t.fillRect(0,0,n,i),t.fillStyle=`#1f1d2b`,t.fillRect(0,0,n,36),t.fillStyle=`#fff`,t.font=`600 18px sans-serif`,t.fillText(s,14,24),t.fillStyle=e,Ms(t,n-104,9,90,18,9),t.fill(),t.fillStyle=`#1f1d2b`,t.font=`700 11px sans-serif`,t.fillText(`UI kit Angular`,n-96,22),t.fillStyle=`#e6e2ee`,t.fillRect(0,36,96,i-36);for(let r=0;r<5;r++)t.fillStyle=r===0?e:`#cfc9db`,Ms(t,12,54+r*30,72,14,7),t.fill();for(let r=0;r<2;r++)for(let o=0;o<2;o++){let a=112+o*196,l=50+r*118;t.fillStyle=`#2b2838`,Ms(t,a,l,184,106,8),t.fill(),t.fillStyle=`rgba(255,255,255,.75)`,t.font=`600 12px sans-serif`,t.fillText(`CAM ${r*2+o+1}`,a+10,l+20)}})}function Mp(){return Qt(256,362,(s,e,t)=>{s.fillStyle=`#fffdf9`,s.fillRect(0,0,e,t),s.fillStyle=`#e38aa3`,s.fillRect(0,0,e,10),s.fillStyle=`#4a3a4f`,s.font=`700 26px sans-serif`,s.fillText(`CV`,22,52),s.font=`600 17px sans-serif`,s.fillText(`Léna Simonin`,22,80),s.fillStyle=`#c8bcc6`;for(let n=0;n<12;n++)s.fillRect(22,112+n*18,120+n*53%90,5)})}function Sp(){return Qt(256,340,(s,e,t)=>{s.fillStyle=`#cbbcf6`,s.fillRect(0,0,e,t),s.fillStyle=`#8f7ae6`,s.fillRect(0,0,22,t),s.fillStyle=`#ffffff`,Ms(s,50,60,170,70,10),s.fill(),s.fillStyle=`#4a3a4f`,s.font=`600 24px sans-serif`,s.fillText(`Mon travail`,62,104),[`#f2b8c6`,`#ffe08a`,`#bfe8d6`,`#9fc3f0`].forEach((i,r)=>{s.fillStyle=i,Ms(s,54+r*42,170,34,34,8),s.fill()})})}function kl(s){let t={jelly:{bg:`#2b2440`,colors:{p:`#f2b8c6`,l:`#ffe3ef`,w:`#ffffff`,b:`#c8b4ef`},rows:[`............`,`....pppp....`,`..pplllppp..`,`.pplwlllppp.`,`.pplllllppp.`,`.pppppppppp.`,`..b.b..b.b..`,`..b.b..b.b..`,`.b..b..b..b.`,`.b...b.b..b.`,`..b..b..b...`,`............`]},cat:{bg:`#f6d6e2`,colors:{c:`#7a6150`,d:`#4e3d33`,y:`#d8c24a`,n:`#c98b88`},rows:[`............`,`..c......c..`,`..cc....cc..`,`..cccccccc..`,`.ccyccccycc.`,`.cccccnccc..`,`..cccccccc..`,`...cdcdcc...`,`..cccccccc..`,`..cccccccccc`,`..cc.cc.cc.c`,`............`]},pad:{bg:`#cfe8ff`,colors:{g:`#6b6b78`,d:`#3b3b46`,r:`#e38aa3`,v:`#8f7ae6`},rows:[`............`,`............`,`..gggggggg..`,`.gggggggggg.`,`.gdgggggrgg.`,`.dddgggvgrg.`,`.gdgggggvgg.`,`.gggggggggg.`,`.ggg....ggg.`,`..g......g..`,`............`,`............`]}}[s],n=Qt(192,192,(i,r)=>{i.fillStyle=t.bg,i.fillRect(0,0,r,r);let o=r/12;t.rows.forEach((a,l)=>[...a].forEach((c,h)=>{c!==`.`&&(i.fillStyle=t.colors[c],i.fillRect(h*o,l*o,o,o))}))});return n.magFilter=St,n}function bp(){let s=Qt(256,150,(e,t,n)=>{let i=e.createLinearGradient(0,0,0,n);i.addColorStop(0,`#2b2058`),i.addColorStop(1,`#6b4fa8`),e.fillStyle=i,e.fillRect(0,0,t,n),e.fillStyle=`#fff6c8`;for(let r=0;r<18;r++)e.fillRect(r*53%t,r*29%70,2,2);e.fillStyle=`#3e8a69`,e.fillRect(0,118,t,32),e.fillStyle=`#7cc9a6`;for(let r=0;r<t;r+=16)e.fillRect(r,118,8,4);e.fillStyle=`#c9a07a`,e.fillRect(150,86,48,8),e.fillRect(40,70,40,8),e.fillStyle=`#ffe08a`,[160,172,184,50,62].forEach((r,o)=>e.fillRect(r,o<3?74:58,6,6)),e.fillStyle=`#f2b8c6`,e.fillRect(96,92,18,10),e.fillRect(98,88,14,4),e.fillStyle=`#ffffff`,e.fillRect(101,94,3,3),e.fillStyle=`#c8b4ef`,[98,103,108,112].forEach(r=>e.fillRect(r,102,2,10)),e.fillStyle=`#ffffff`,e.font=`bold 12px monospace`,e.fillText(`SCORE 004200`,8,16),e.fillText(`PRESS START`,86,40)});return s.magFilter=St,s}function Ep(s){return Qt(240,340,(e,t,n)=>{let i=(l,c)=>{let h=e.createLinearGradient(0,0,0,n);h.addColorStop(0,l),h.addColorStop(1,c),e.fillStyle=h,e.fillRect(0,0,t,n)},r=(l,c)=>{e.fillStyle=l,e.beginPath(),c.forEach(([h,u],f)=>f?e.lineTo(h*t,u*n):e.moveTo(h*t,u*n)),e.closePath(),e.fill()},o=(l,c,h,u)=>{e.fillStyle=l,e.beginPath(),e.arc(c*t,h*n,u*t,0,7),e.fill()},a=(l,c,h)=>{[0,.06,.12].forEach((u,f)=>o(`rgba(255,255,255,.85)`,l+u*h,c-(f===1?.02:0)*h,.06*h))};switch(s%6){case 0:i(`#cfe3e6`,`#f4ead7`),a(.15,.2,1.2),a(.62,.72,1),r(`#7f9c7a`,[[.25,.42],[.75,.42],[.62,.52],[.38,.52]]),r(`#9b8a74`,[[.38,.52],[.62,.52],[.5,.64]]),o(`#5f7d5c`,.5,.36,.13),r(`#e8dfcc`,[[.44,.42],[.56,.42],[.56,.33],[.5,.28],[.44,.33]]);break;case 1:i(`#e9c9b6`,`#8fa7bf`),o(`#f6e6c8`,.7,.3,.09),e.fillStyle=`#9db6c9`,e.fillRect(0,n*.6,t,n*.4),e.fillStyle=`#4a5a6e`,e.fillRect(t*.12,n*.52,t*.76,n*.07);for(let l=0;l<5;l++)e.fillStyle=`#f2d9a6`,e.fillRect(t*(.16+l*.14),n*.54,t*.07,n*.025);e.fillStyle=`rgba(74,90,110,.35)`,e.fillRect(t*.12,n*.62,t*.76,n*.04);break;case 2:i(`#d9e4d0`,`#eef0e2`),e.strokeStyle=`rgba(120,140,150,.35)`;for(let l=0;l<40;l++){let c=l*37%t,h=l*53%(n*.6);e.beginPath(),e.moveTo(c,h),e.lineTo(c-4,h+14),e.stroke()}r(`#a9bf8e`,[[0,.78],[.3,.68],[.7,.7],[1,.8],[1,1],[0,1]]),e.fillStyle=`#6b5440`,e.fillRect(t*.47,n*.45,t*.06,n*.26),o(`#4f7a52`,.5,.38,.22),o(`#5f8a5f`,.36,.44,.13),o(`#5f8a5f`,.64,.44,.13);break;case 3:i(`#cde6ea`,`#f2ecdc`),a(.2,.18,1),e.fillStyle=`#7fb3bf`,e.fillRect(0,n*.62,t,n*.38),r(`#c9b28f`,[[.45,1],[.55,.55],[1,.52],[1,1]]),r(`#d9cbb5`,[[.66,.52],[.86,.52],[.86,.42],[.76,.35],[.66,.42]]),r(`#c2675a`,[[.63,.43],[.76,.33],[.89,.43]]),e.strokeStyle=`rgba(255,255,255,.7)`,e.lineWidth=2;for(let l=0;l<4;l++)e.beginPath(),e.arc(t*(.1+l*.1),n*(.72+l%2*.05),8,Math.PI,0),e.stroke();break;case 4:i(`#3f3557`,`#8a5d6e`);for(let l=0;l<14;l++)o(`rgba(255,240,200,.8)`,l*41%100/100,l*23%30/100+.05,.006);e.fillStyle=`#5d6f86`,e.fillRect(0,n*.68,t,n*.32),r(`#b9473f`,[[.25,.68],[.25,.42],[.5,.3],[.75,.42],[.75,.68]]),r(`#7c2f2b`,[[.2,.44],[.5,.26],[.8,.44]]);for(let l=0;l<6;l++)o(`#ffcf7a`,.3+l*.08,.5,.015);e.fillStyle=`rgba(255,207,122,.35)`,e.fillRect(t*.25,n*.7,t*.5,n*.05);break;default:i(`#bcd7ef`,`#f7efd8`),a(.18,.25,1.6),a(.6,.15,1.2),r(`#c7d68d`,[[0,.62],[1,.58],[1,1],[0,1]]);for(let l=0;l<60;l++)o(l%3?`#f2d16b`:`#f2b8c6`,l*17%100/100,.66+l*29%34/100,.008)}e.strokeStyle=`#fbf7ef`,e.lineWidth=14,e.strokeRect(0,0,t,n),e.fillStyle=`rgba(60,50,60,.35)`,e.fillRect(t*.35,n-18,t*.3,3)})}var{width:ft,depth:Ge,height:Ss,wallThickness:cn,doorRecessDepth:Qn}=x,_v=`#f4ede5`;function Zb(s=/* @__PURE__ */ new Map){op(7);let e$1=new Bt;e$1.name=`room`;let t$1=[],n=/* @__PURE__ */ new Map,i=[],r=[],o$1=/* @__PURE__ */ new Map,a$1=(C,Z,oe)=>C+(Z-C)*oe,l=(C,Z,oe)=>i.push({apply:ne=>C.intensity=a$1(Z,oe,ne)}),c=(C,Z,oe)=>i.push({apply:ne=>C.emissiveIntensity=a$1(Z,oe,ne)}),h=(C,Z,oe)=>i.push({apply:ne=>C.opacity=a$1(Z,oe,ne)}),u$1=(C,Z)=>{Z.userData.interactiveId=C,Z.name=C,n.set(C,Z)},f$1=(C,Z,oe,ne)=>{let be=Pe(e$1);return t$1.push({group:be,center:new L(C,Ss/2,Z),normal:new L(oe,0,ne)}),be},d$1=f$1(ft/2,0,0,-1),p=f$1(ft/2,Ge,0,1),x=f$1(0,Ge/2,-1,0),m=f$1(ft,Ge/2,1,0),g$1=Ye(_v,{roughness:.95});N(d$1,ft-1+cn,Ss,cn,g$1,1+(ft-1)/2+cn/2,0,-cn/2,0),N(d$1,1,Ss,cn,g$1,.5,0,-Qn-cn/2,0),N(d$1,cn,Ss,Qn,g$1,1+cn/2,0,-Qn/2,0),N(p,ft+cn*2,Ss,cn,g$1,ft/2,0,Ge+cn/2,0),N(x,cn,Ss,Ge+Qn+cn,g$1,-cn/2,0,(Ge-Qn)/2,0),N(m,cn,Ss,Ge,g$1,ft+cn/2,0,Ge/2,0),N(d$1,ft-1,.07,.02,`#ffffff`,1+(ft-1)/2,0,.01,0),N(p,ft,.07,.02,`#ffffff`,ft/2,0,Ge-.01,0),N(x,.02,.07,Ge,`#ffffff`,.01,0,Ge/2,0);let v=new it({map:xp(),roughness:.55}),b=new Oe(new $t(ft,Ge),v);b.rotation.x=-Math.PI/2,b.position.set(ft/2,0,Ge/2),b.receiveShadow=!0,b.name=`floor`,e$1.add(b);let y$1=new Oe(new $t(1,Qn),v);y$1.rotation.x=-Math.PI/2,y$1.position.set(.5,0,-Qn/2),y$1.receiveShadow=!0,e$1.add(y$1),N(e$1,ft+.4,.18,Ge+.4+Qn,Ye(`#e9dccf`,{roughness:.9}),ft/2,-.181,(Ge-Qn)/2,.04);let T=new it({color:`#cfe8ff`,emissive:`#d8eeff`,emissiveIntensity:.9});T.userData.window=!0,i.push({apply:C=>{T.color.lerpColors(new we(`#cfe8ff`),new we(`#1d2547`),C),T.emissive.lerpColors(new we(`#d8eeff`),new we(`#141a38`),C),T.emissiveIntensity=a$1(.9,.5,C)}}),N(d$1,.85,2.05,.04,`#ece4da`,.5,0,-Qn+.02,.01),Le(d$1,.025,`#b9a99a`,.82,1,-Qn+.06),[[1.5,1.45,.42,.55],[2,1.58,.38,.5],[2.45,1.52,.36,.48],[2.85,1.6,.26,.36],[1.55,2.08,.24,.32]].forEach(([C,Z,oe,ne],be)=>{N(d$1,oe,ne,.025,`#1f1b22`,C,Z-ne/2,.0125,.004);let ze=new it({map:be===0?kl(`jelly`):be===2?kl(`cat`):be===3?kl(`pad`):zl(be),roughness:.9});ln(d$1,oe-.05,ne-.05,ze,C,Z,.027),pu(ze,uu.desk[be]??null,oe-.05,ne-.05)});let A=4.9;N(d$1,1.2,1,.02,Ye(`#d9cfe0`,{roughness:.25,metalness:.1}),A,1,.01,0),[.98,2].forEach(C=>N(d$1,1.28,.05,.05,`#ffffff`,A,C,.025,.005)),[4.28,5.5200000000000005].forEach(C=>N(d$1,.05,1.05,.05,`#ffffff`,C,.98,.025,.005)),N(d$1,.42,.5,.025,`#e9dccb`,3.85,1.35,.0125,.005),ln(d$1,.36,.44,new it({map:zl(7),roughness:.9}),3.85,1.6,.027),N(d$1,.3,.42,.025,`#1f1b22`,3.2,1.58,.0125,.004),ln(d$1,.25,.37,new it({map:zl(3),roughness:.9}),3.2,1.79,.027);let _=jn(`#ffd89a`,3);c(_,.4,3);for(let C=0;C<14;C++)Le(d$1,.012,_,4.32+C*.089,1.95-Math.sin(C/13*Math.PI)*.08,.06);{let C=new on({map:mu(`rgba(170,140,255,0.95)`),transparent:!0,blending:2,depthWrite:!1});h(C,.25,1),ln(d$1,2,1,C,t.x-.05,1,.03),l(Yt(d$1,10849535,1.6,2.5,t.x-.05,1,.3),.1,1.6)}{let C=Pe(x);C.position.set(.04,0,1.05),C.rotation.z=-.05,N(C,.03,1.8,.62,`#2a2630`,0,0,0,.01),N(C,.01,1.72,.54,Ye(`#d8e8f0`,{metalness:.9,roughness:.08}),.02,.04,0,0)}{let C=Pe(x);C.position.set(.06,.85,.38),C.rotation.y=Math.PI/2,Ne(C,.17,.17,.08,`#a86b3c`,0,.15,0,24).rotation.x=Math.PI/2,Ne(C,.13,.13,.08,`#a86b3c`,0,.42,0,24).rotation.x=Math.PI/2,Ne(C,.04,.04,.09,`#2a1a10`,0,.27,0).rotation.x=Math.PI/2,N(C,.05,.55,.03,`#3a2a20`,0,.55,0,.005),N(C,.08,.12,.03,`#3a2a20`,0,1.1,0,.01);for(let Z=0;Z<4;Z++)N(C,.003,.8,.002,`#e8e2d6`,-.015+Z*.01,.12,.046,0);Ot(C,.4,1.25,.15,0,.6,0),u$1(`egg-guitar`,C)}N(m,.02,u.height,u.width,T,ft-.01,u.sill,u.z,0).castShadow=!1,[u.sill,u.sill+u.height].forEach(C=>N(m,.06,.06,u.width+.08,`#ffffff`,ft-.03,C-.03,u.z,.005)),[u.z-.6,u.z+.6,u.z].forEach(C=>N(m,.06,1.26,.06,`#ffffff`,ft-.03,u.sill-.03,C,.005)),[u.z-.78,u.z+.78].forEach(C=>{for(let Z=0;Z<4;Z++)Ne(m,.05,.06,2.2,`#d8bdae`,ft-.12,.05,C-.12+Z*.08,10)});for(let C=0;C<14;C++)N(e$1,.08,.55,.05,`#f7f7f5`,ft-.09,.15,u.z-.53+C*.077,.01);N(e$1,.42,.03,.6,`#f6ece0`,ft-.32,.72,u.z,.015),[u.z-.28,u.z+.28].forEach(C=>{let Z=Ne(e$1,.006,.006,.3,`#c9c9cf`,ft-.2,.7,C,6);Z.rotation.z=.9});let{x0:E$1,x1:D}=E,I=(E$1+D)/2;N(p,D-E$1,2.15,.02,T,I,.02,Ge-.01,0).castShadow=!1,[E$1,I,D].forEach(C=>N(p,.06,2.2,.06,`#ffffff`,C,0,Ge-.03,.005)),N(p,D-E$1+.06,.06,.06,`#ffffff`,I,2.17,Ge-.03,.005),N(p,D-E$1,.06,.06,`#ffffff`,I,1.05,Ge-.03,.005),[E$1-.12,D+.12].forEach(C=>{for(let Z=0;Z<4;Z++)Ne(p,.05,.06,2.3,`#f6f3ee`,C-.12+Z*.08,.02,Ge-.12,10)});for(let C=0;C<6;C++){let Z=f.x+(C-2.5)*.29,oe=new it({map:Ep(C),roughness:.9}),ne=uu.tv[5-C]??null,be=.23,ze=.3443;pu(oe,ne,be,ze),N(p,.27,.39,.025,`#d8b893`,Z,1.525,Ge-.0125,.004),ln(p,be,ze,oe,Z,1.72,Ge-.027,Math.PI)}{let C=new on({map:mu(`rgba(90,170,255,1)`),transparent:!0,blending:2,depthWrite:!1});h(C,.2,1),ln(p,2.4,1.5,C,f.x,.98,Ge-.012,Math.PI),l(Yt(e$1,5942015,2.2,3,f.x,.95,Ge-.35),.1,2.2)}let O=t.height;N(e$1,t.width,.04,t.depth,`#d9b48c`,t.x,O-.04,t.z,.01),N(e$1,.05,O-.04,t.depth-.08,`#f4f4f2`,t.x-t.width/2+.05,0,t.z,.005),N(e$1,.38,.7,.6,`#f7f5f2`,t.drawerX,0,t.z-.06,.01);for(let C=0;C<5;C++)N(e$1,.36,.005,.01,`#d9d2c8`,t.drawerX,.12+C*.135,t.z+.245,0);N(e$1,.95,.006,.36,`#f3f1ee`,t.x-.1,O,t.z+.1,.003),N(e$1,.42,.025,.13,Ye(`#ffffff`,{emissive:`#bcd6ff`,emissiveIntensity:.25}),Z.keyboard.x,O+.006,Z.keyboard.z,.006),Le(e$1,.03,`#ffffff`,Z.keyboard.x+.37,O+.02,Z.keyboard.z+.02,1,.6,1.4),[[`monitor-left`,y.left,gu(`Icare Portal`,`#f2b8c6`)],[`monitor-right`,y.right,gu(`Moniteur Virtuel`,`#cbbcf6`)]].forEach(([C,Z,oe])=>{let ne=Pe(e$1);ne.position.set(Z.x,y.centerY,y.z),ne.rotation.y=Z.rotY,N(ne,y.width,y.height,.035,`#16151b`,0,-y.height/2,0,.008),N(ne,.06,.008,.002,`#6b6b75`,0,-y.height/2+.006,.019,0),ln(ne,y.width-.03,y.height-.04,new on({map:oe}),0,.006,.019),Ne(ne,.015,.015,.28,`#222`,0,-.5,-.06),N(ne,.2,.012,.16,`#222`,0,-y.centerY+O,-.04,.004),l(Yt(ne,C===`monitor-left`?9414911:14272767,0,1.6,0,0,.35),0,.7),u$1(C,ne)}),N(e$1,.3,.44,.44,`#f5f5f7`,t.drawerX,O-.02,.3,.012);let B=jn(`#b79cff`,1.3);c(B,.6,1.3),N(e$1,.26,.38,.005,B,t.drawerX,O+.01,.523,0),l(Yt(e$1,11111423,.6,1.4,t.drawerX,.95,.65),.1,.6);let z=mp(e$1,u$1,Z.lamp.x,O-.02,Z.lamp.z);pp(e$1,u$1,3.12,O,.68,s),Ne(e$1,.18,.16,.4,`#d5b48a`,1.6,0,.35,24),Ne(e$1,.19,.19,.04,`#c9a57a`,1.6,.4,.35,24),N(e$1,.3,.28,.2,`#222226`,2.45,0,.3,.02);{let C=Pe(e$1);C.position.set(Z.notebook.x,O+.003,Z.notebook.z),C.rotation.y=Z.notebook.rotY,N(C,.2,.022,.27,`#f7f2ea`,0,0,0,.004);let Z$1=ln(C,.2,.27,new it({map:Sp(),roughness:.7}),0,.0235,0);Z$1.rotation.x=-Math.PI/2,N(C,.008,.008,.2,`#8f7ae6`,.06,.022,.02,0),Ot(C,.26,.08,.32,0,.02,0),u$1(`notebook`,C)}{let C=Pe(e$1);C.position.set(Z.cvSheet.x,O+.004,Z.cvSheet.z),C.rotation.y=Z.cvSheet.rotY;let Z$2=ln(C,.18,.255,new it({map:Mp(),roughness:.85}),0,.002,0);Z$2.rotation.x=-Math.PI/2,Z$2.receiveShadow=!0,N(C,.05,.006,.014,`#e38aa3`,0,.002,-.12,.002),Ot(C,.22,.06,.29,0,.02,0),u$1(`cv-sheet`,C)}{let C=Pe(e$1,`gaming-chair`);C.position.set(d.gaming.x,0,d.gaming.z),C.rotation.y=d.gaming.rotY;let Z=new Lt({color:d.gaming.main,roughness:.45,clearcoat:.35,clearcoatRoughness:.5}),oe=Ye(d.gaming.accent,{roughness:.5}),ne=Ye(`#18181c`,{roughness:.5});Ne(C,.028,.032,.3,Ye(`#c9ccd3`,{metalness:.9,roughness:.25}),0,.08,0,24),Ne(C,.06,.06,.05,ne,0,.36,0,24);for(let ue=0;ue<5;ue++){let Ve=ue/5*Math.PI*2,Ke=N(C,.3,.035,.05,ne,Math.cos(Ve)*.15,.06,Math.sin(Ve)*.15,.015);Ke.rotation.y=-Ve,Ke.rotation.z=0,Le(C,.028,ne,Math.cos(Ve)*.3,.028,Math.sin(Ve)*.3,1,1,.8)}N(C,.4,.09,.5,Z,0,.4,0,.04),[-1,1].forEach(ue=>{N(C,.08,.13,.5,Z,ue*.24,.39,0,.04),N(C,.012,.012,.46,oe,ue*.2,.488,0,.004)});let ze=Pe(C);ze.position.set(0,.47,.25),ze.rotation.x=.14,N(ze,.4,.86,.1,Z,0,0,0,.05),[-1,1].forEach(ue=>{let Ve=N(ze,.08,.66,.15,Z,ue*.235,.02,-.02,.04);Ve.rotation.y=-ue*.28;let Ke=N(ze,.1,.16,.12,Z,ue*.2,.66,-.005,.04);Ke.rotation.z=ue*.12,N(ze,.04,.09,.012,`#0b0b0e`,ue*.08,.7,-.051,.004),N(ze,.012,.62,.012,oe,ue*.16,.1,-.052,.004)}),N(ze,.3,.012,.012,oe,0,.6,-.052,.004),N(ze,.26,.11,.08,oe,0,.72,-.08,.04),N(ze,.3,.13,.08,oe,0,.12,-.08,.05),[-1,1].forEach(ue=>{N(C,.035,.2,.05,ne,ue*.3,.42,.08,.01),N(C,.08,.03,.26,ne,ue*.3,.62,.04,.014)})}{let C=Qt(256,256,(pt,at,hn)=>{pt.fillStyle=`#e7dac6`,pt.fillRect(0,0,at,hn);for(let Rt=0;Rt<2600;Rt++){let mn=je()*at,gn=je()*hn,_n=1.5+je()*2.5;pt.strokeStyle=je()<.5?`rgba(255,250,240,.55)`:`rgba(170,150,125,.35)`,pt.lineWidth=1.2,pt.beginPath(),pt.arc(mn,gn,_n,0,7),pt.stroke()}});C.wrapS=C.wrapT=Un,C.repeat.set(3,3);let Z=new it({map:C,color:e.fabric,roughness:1}),oe=new it({map:C,color:e.fabricLight,roughness:1}),ne=Pe(e$1,`sofa`),be=e.x0,ze=e.x1,ue=e.z0,Ve=ue+e.seatDepth,Ke=ue+e.chaiseDepth,ke=be+e.armWidth,dt=ke+e.chaiseWidth,Et=ze-e.armWidth;N(ne,ze-be,.36,Ve-ue,Z,(be+ze)/2,.03,(ue+Ve)/2,.05),N(ne,dt-ke,.36,Ke-Ve,Z,(ke+dt)/2,.03,(Ve+Ke)/2,.05),N(ne,ze-be-.02,.26,.17,Z,(be+ze)/2,.39,ue+.085,.05),N(ne,e.armWidth,.57,Ke-ue,Z,be+.125,.03,(ue+Ke)/2,.07),N(ne,e.armWidth,.57,Ve-ue,Z,ze-.125,.03,(ue+Ve)/2,.07),N(ne,dt-ke-.01,.08,Ke-ue-.2,oe,(ke+dt)/2,.39,(ue+.17+Ke-.03)/2,.04),N(ne,Et-dt-.01,.08,.7,oe,(dt+Et)/2,.39,ue+.17+.35,.04),[[ke+.47,.94],[dt+.63,1.24]].forEach(([pt,at])=>{N(ne,at-.03,.4,.2,oe,pt,.45,ue+.2,.08).rotation.x=-.16}),[[be+.2,ue+.1],[ze-.2,ue+.1],[be+.2,Ke-.1],[dt-.1,Ke-.1],[ze-.2,Ve-.1]].forEach(([pt,at])=>Ne(ne,.02,.02,.03,`#1d1d22`,pt,0,at,8)),[[`#f2b8c6`,ke+.2,-.12],[`#fbf3e8`,ke+.7,.1],[`#e2d8f7`,dt+.35,-.1],[`#f2b8c6`,Et-.25,.15]].forEach(([pt,at,hn])=>N(ne,.42,.4,.13,pt,at,.47,ue+.36,.09).rotation.set(-.22,hn,0)),N(ne,.8,.035,.55,`#f6c9d3`,(ke+dt)/2,.47,Ke-.38,.015)}N(e$1,ft-3.15,.85,.2,`#f1ebe3`,3.15+(ft-3.15)/2,0,.1,.01),N(e$1,ft-3.15,.025,.21,`#e9e1d6`,3.15+(ft-3.15)/2,.85,.105,.005),Ne(e$1,.035,.035,.08,Ye(`#1f1f24`,{roughness:.3}),3.4,.875,.1),cp(e$1,c,l,s),l(Yt(e$1,16763274,.25,2.5,5.6,1.75,.4),.1,1.1),N(e$1,g.width,.015,g.depth,`#f5ecde`,g.x,0,g.z,.006);{let{x:C,z:Z}=o;N(e$1,1,.36,.56,`#f7f5f2`,C,0,Z,.02);let oe=Pe(e$1);oe.position.set(C-.22,.36,Z+.02),oe.rotation.y=.5,N(oe,.15,.03,.09,`#f2f2f2`,0,0,0,.02),Le(oe,.035,`#f2f2f2`,-.07,.02,.02,1,.6,1.2),Le(oe,.035,`#f2f2f2`,.07,.02,.02,1,.6,1.2),Le(oe,.012,`#e38aa3`,.05,.035,-.01),Le(oe,.012,`#8f7ae6`,-.05,.035,-.01),Ot(oe,.28,.1,.2,0,.02,.01),u$1(`egg-controller`,oe),dp(e$1,u$1,C+.16,Z-.02)}let R=f.x;N(e$1,f.cabinetWidth,f.cabinetHeight,f.cabinetDepth,`#f7f5f2`,R,0,Ge-.21,.01),N(e$1,f.cabinetWidth+.15,.03,.44,`#c9a47c`,R,f.cabinetHeight,Ge-.22,.005),[R-.3,R+.3].forEach(C=>N(e$1,.005,.44,.005,`#d8d0c6`,C,.02,Ge-.425,0));let W=jn(`#fff1d6`,1.5);c(W,.5,2.4),N(e$1,f.cabinetWidth-.1,.008,.01,W,R,f.cabinetHeight-.02,Ge-.43,0),l(Yt(e$1,9422079,0,1.6,R,.3,Ge-.75),0,.9);let Y=yp(),V=vp(),se=new it({color:`#07070b`,roughness:.25,metalness:.2,emissive:`#ffffff`,emissiveMap:Y,emissiveIntensity:0}),q=Yt(e$1,8369919,0,2.5,R,.95,Ge-.7);{let C=Pe(e$1);N(C,.06,.06,.2,`#2a2a2e`,R-.35,.51,Ge-.24,.005),N(C,.06,.06,.2,`#2a2a2e`,R+.35,.51,Ge-.24,.005),N(C,f.screenWidth+.04,f.screenHeight+.04,.05,`#15141a`,R,.58,Ge-.25,.01),ln(C,f.screenWidth,f.screenHeight,se,R,.6+f.screenHeight/2,Ge-.276,Math.PI),N(C,.05,.008,.002,`#77777f`,R,.585,Ge-.277,0),u$1(`tv`,C)}{let C=Pe(e$1,`plush`);C.position.set(3.68,.875,.1),C.rotation.y=.15,Mv(C),Ot(C,.3,.3,.25,0,.13,0),u$1(`egg-plush`,C)}{let C=Pe(e$1,`retro-console`);C.position.set(R-.52,.51,Ge-.22),N(C,.26,.06,.18,`#d9d6e3`,0,0,0,.012),N(C,.26,.012,.18,`#8f7ae6`,0,.06,0,.004),N(C,.1,.05,.02,`#3b3b46`,.02,.06,.02,.004),N(C,.085,.03,.022,`#f2b8c6`,.02,.085,.02,.003),Le(C,.008,`#e38aa3`,-.09,.035,-.091),N(C,.03,.012,.004,`#6b6b78`,-.05,.03,-.091,.002),Ot(C,.32,.16,.24,0,.06,0),u$1(`egg-retro`,C)}{let C=R-.75;Ne(e$1,.025,.04,.18,`#fff6ea`,C,.51,Ge-.2,16);let Z=jn(`#ffe4b8`,1.2);c(Z,.15,1.3);let oe=new Oe(new Si(.1,24,12,0,6.3,0,Math.PI/2),Z);oe.position.set(C,.69,Ge-.2),e$1.add(oe),l(Yt(e$1,16763274,.25,2.5,C,.72,Ge-.35),.05,1.3)}xv(p,l,c,u$1,s);{let{x:C,z:Z}=a;N(e$1,.5,.08,.45,`#d9cfc0`,C,0,Z,.02),Ne(e$1,.06,.06,.9,`#cfae7e`,C+.1,.08,Z,12),Ne(e$1,.05,.05,.5,`#cfae7e`,C-.15,.08,Z+.05,12),N(e$1,.32,.25,.3,`#e6ddd0`,C-.1,.58,Z,.04),N(e$1,.45,.04,.4,`#e6ddd0`,C+.05,.98,Z,.02),Ne(e$1,.05,.05,.4,`#cfae7e`,C+.05,1.02,Z,12),N(e$1,.4,.05,.36,`#e6ddd0`,C+.05,1.42,Z,.03)}fp({root:e$1,gEnd:x,gTV:p,register:u$1,dimLight:l,dimEmissive:c,tickers:r,eggEffects:o$1}),yv(e$1,u$1,l,c,r);let ee=new lo(16774894,14271668,1.4);e$1.add(ee);let ie=new fs(16773336,2.4);ie.position.set(ft+3,4.2,u.z+.4),ie.castShadow=!0,ie.shadow.mapSize.set(2048,2048),Object.assign(ie.shadow.camera,{left:-5,right:5,top:5,bottom:-5,near:.5,far:20}),ie.shadow.bias=-3e-4,ie.shadow.normalBias=.02,e$1.add(ie);let Se=new yt;Se.position.set(ft/2,0,Ge/2),e$1.add(Se),ie.target=Se;let Fe=new we(16774894),$=new we(10130109);return i.push({apply:C=>{ie.intensity=a$1(2.4,0,C),ie.visible=C<.999,ee.intensity=a$1(1,.28,C),ee.color.lerpColors(Fe,$,C)}}),Sv(e$1,u$1),{root:e$1,walls:t$1,interactives:n,dimmables:i,sun:ie,hemi:ee,tv:{screen:se,light:q,jellyfish:Y,hubtv:V,retro:bp()},tickers:r,eggEffects:o$1,lava:z}}function Ot(s,e,t,n,i,r,o){let a=new Oe(new On(e,t,n),new on({visible:!1}));return a.position.set(i,r,o),a.userData.hitBox=!0,s.add(a),a}function xv(s,e,t,n$1,i){let r=jn(`#fff1d6`,2.2);t(r,.4,2.2);let o=new it({color:`#eef7ff`,transparent:!0,opacity:.18,roughness:.05,metalness:.1}),a=[];n.columnsX.forEach(l=>{let c=n.columnWidth,h=n.columnHeight,u=.4,f=.018,d=Pe(s);d.position.set(l,0,Ge-u/2),N(d,f,h,u,`#f8f7f4`,-c/2+f/2,0,0,.003),N(d,f,h,u,`#f8f7f4`,c/2-f/2,0,0,.003),N(d,c,f,u,`#f8f7f4`,0,h-f,0,.003),N(d,c,.06,u,`#f8f7f4`,0,0,0,.003),N(d,c,h,.01,`#fbf8f2`,0,0,u/2-.005,0),[.55,.98,1.42].forEach(x=>N(d,c-2*f,.008,.36000000000000004,o,0,x,0,0)),N(d,c-2*f,.005,.03,r,0,h-f-.012,-.16,0);let p=new Oe(new $t(c-.01,h-.07),o);p.position.set(0,.06+(h-.07)/2,-.4/2-.002),p.rotation.y=Math.PI,d.add(p),[-c/2+.01,c/2-.01].forEach(x=>N(d,.012,h-.07,.012,`#ffffff`,x,.06,-.4/2,0)),N(d,c-.04,.48,.38,`#f3efe8`,0,.06,0,.01),e(Yt(s,16767398,.7,1.6,l,1.6,Ge-.5),.05,.7),a.push(d)}),N(s,1.8,.03,.24,`#f8f7f4`,f.x,n.ledgeY,Ge-.12,.006),N(s,1.8,.035,.012,`#f8f7f4`,f.x,n.ledgeY+.03,Ge-.235,.003),N(s,1.76,.006,.02,r,f.x,n.ledgeY-.01,Ge-.2,0),e(Yt(s,16767398,.5,1.2,f.x,1.4,Ge-.3),.05,.5),hp(a[0],i),up(a[0],n.columnHeight,-1),gp(a[1],n$1)}function yv(s,e,t,n,i){let r$1=r.size,o=r.size,a=r.depth,l=.035,c=r.cells,h=(r$1-(c+1)*l)/c,u=Pe(s,`kallax`);u.position.set(a/2+.01,0,r.z),u.rotation.y=-Math.PI/2;let f=`#f8f7f4`,d=-r$1/2;N(u,l,o,a,f,d+l/2,0,0,.004),N(u,l,o,a,f,d+r$1-l/2,0,0,.004),N(u,r$1,l,a,f,0,0,0,.004),N(u,r$1,l,a,f,0,o-l,0,.004);for(let b=1;b<c;b++)N(u,l,o-2*l,a,f,d+l/2+b*(h+l),l,0,0),N(u,r$1-2*l,l,a,f,0,b*(h+l),0,0);N(u,r$1,o,.01,f,0,0,a/2-.005,0);let p=b=>d+l+h/2+b*(h+l),x=b=>l+b*(h+l),m=new it({color:`#fff3dc`,emissive:`#ffd9a0`,emissiveIntensity:.9});n(m,.12,.9);let g=jn(`#fff1d6`,2);n(g,.3,2);let v=/* @__PURE__ */ new Map;Object.entries(r.projectCells).forEach(([b,[y,T]])=>v.set(`${y},${T}`,b));for(let b=0;b<c;b++)for(let y=0;y<c;y++){let T=p(b),A=x(y);if(y===0||y===1&&(b===0||b===4)){N(u,h-.02,h-.02,h-.04,`#efe9e0`,T,A+.005,.01,.01),Le(u,.012,`#b9ad9e`,T,A+h*.7,-.17);continue}ln(u,h,h,m,T,A+h/2,a/2-.012,Math.PI),N(u,h-.04,.008,.02,g,T,A+h-.01,-.15,0);let _=v.get(`${b},${y}`);if(_){let E=Pe(u);E.position.set(T,A,0),vv(E,_,i),Ot(E,h-.02,h-.02,a-.04,0,h/2,-.02),e(_,E);continue}if(b===r.evaFigureCell[0]&&y===r.evaFigureCell[1]){let E=Pe(u);E.position.set(T,A,-.02),E.rotation.y=Math.PI,_p(E,e);continue}}t(Yt(u,16765594,1.4,2.8,0,1.45,-.75),.1,2.4)}function vv(s,e,t){switch(e){case`kallax-cards`:N(s,.18,.1,.13,`#5b3a8e`,-.02,0,.02,.008),N(s,.185,.03,.135,`#e9c46a`,-.02,.1,.02,.008),[`#f2b8c6`,`#9fc3f0`,`#ffe08a`,`#bfe8d6`].forEach((i,r)=>{let o=N(s,.06,.085,.004,i,.08+r*.012,0,-.08,.004);o.rotation.z=-.35+r*.2,o.rotation.x=-.25});break;case`kallax-console`:{Ne(s,.05,.06,.02,`#ffffff`,0,0,0,20);let n=Le(s,.07,`#f2b8c6`,0,.1,0,1,1.15,.55);n.rotation.x=.15;let i=new Oe(new $t(.06,.05),jn(`#cfeccf`,.6));i.position.set(0,.115,-.04),i.rotation.y=Math.PI,s.add(i),[-.025,0,.025].forEach(o=>Le(s,.008,`#8f7ae6`,o,.065,-.035));let r=new Oe(new $t(.012,.012),new on({color:`#2f4a2f`}));r.position.set(0,.112,-.041),r.rotation.y=Math.PI,s.add(r),t.push(o=>r.position.x=Math.round(Math.sin(o*1.3)*2)*.008);break}case`kallax-binder`:{let n=N(s,.05,.24,.2,`#e7c9a6`,-.03,0,0,.008);n.rotation.z=.08,[`#f2b8c6`,`#c8b4ef`,`#9fc3f0`,`#bfe8d6`,`#ffe08a`].forEach((i,r)=>{N(s,.04,.03,.022,i,0,.03+r*.042,-.1,.004)}),[`#f6d6e2`,`#cfe8ff`].forEach((i,r)=>{let o=N(s,.07,.004,.07,i,.1,0+r*.006,-.02+r*.03,.002);o.rotation.y=r*.4});break}case`kallax-server`:{N(s,.14,.22,.2,`#2b2b33`,0,0,.01,.01);let n=[];for(let r=0;r<4;r++){N(s,.1,.003,.002,`#4a4a55`,0,.035+r*.045,-.091,0);let o=jn(r%2?`#7cf0b0`:`#7fc6ff`,2);n.push(o),N(s,.012,.012,.004,o,.045,.045+r*.045,-.092,.002)}t.push(r=>n.forEach((o,a)=>o.emissiveIntensity=Math.sin(r*(3+a*1.7)+a)>.2?2.2:.3));let i=Ne(s,.004,.004,.12,`#1d1d22`,.09,0,.05,6);i.rotation.z=1.2;break}}}function Mv(s){let e=new Lt({color:`#fbfcff`,roughness:.9,sheen:1,sheenRoughness:.5,sheenColor:new we(`#dfe9ff`)}),t=Pe(s,`plush-inner`);Le(t,.05,e,0,.055,0,1,1.05,.95),[-1,1].forEach(l=>{Le(t,.02,e,l*.026,.014,.03,1,.7,1.2),Le(t,.016,e,l*.05,.075,.02,.8,1.2,.9)});let n=Pe(t);n.position.set(0,.155,.005),Le(n,.075,e,0,0,0,1.2,.9,1);let i=new Lt({color:`#3e6fc4`,roughness:.15,clearcoat:1});[-1,1].forEach(l=>{Le(n,.012,i,l*.032,.002,.066,.7,1,.45),Le(n,.0035,Ye(`#ffffff`,{roughness:.2}),l*.03,.007,.071),Le(n,.012,Ye(`#f7b8c9`,{roughness:.8}),l*.055,-.02,.058,1.2,.7,.35)});let r=new Oe(new so(.007,.0015,8,20,Math.PI),Ye(`#3a3150`));r.position.set(0,-.016,.071),r.rotation.z=Math.PI,n.add(r),[-1,1].forEach(l=>{let c=Pe(n,l<0?`ear-l`:`ear-r`);c.position.set(l*.07,.035,0),c.rotation.z=l*-.55,Le(c,.055,e,l*.06,-.01,0,1.55,.38,.85)});let o=[];for(let l=0;l<=40;l++){let c=l/40*Math.PI*3.2,h=.024*(1-l/52);o.push(new L(Math.cos(c)*h,.065+Math.sin(c)*h,-.05-l*4e-4))}let a=new Oe(new ro(new Qs(o),60,.0075,10),e);t.add(a)}function Sv(s,e){let t=r.size,n=r.depth,i=.035,r$2=r.cells,o=(t-(r$2+1)*i)/r$2,a=Pe(s,`kallax-extras`);a.position.set(n/2+.01,0,r.z),a.rotation.y=-Math.PI/2;let l=u=>-t/2+i+o/2+u*(o+i),c=u=>i+u*(o+i),h=(u,[f,d])=>{let p=Pe(a);return p.position.set(l(f),c(d),0),Ot(p,o-.02,o-.02,n-.04,0,o/2,-.02),e(u,p),p};{let u=h(`kallax-salon`,r.extraCells.salon);N(u,.24,.012,.2,`#d6ae7b`,0,0,0,.003),N(u,.24,.13,.012,`#f4ede5`,0,.012,.094,.002),N(u,.012,.13,.2,`#f4ede5`,.114,.012,0,.002),N(u,.1,.03,.045,`#efe4d3`,.04,.012,.055,.006),N(u,.1,.03,.012,`#efe4d3`,.04,.03,.076,.004),N(u,.07,.006,.035,`#d6ae7b`,-.07,.05,.068,.002),N(u,.006,.038,.006,`#c39563`,-.1,.012,.055,0),N(u,.006,.038,.006,`#c39563`,-.04,.012,.055,0),N(u,.03,.022,.004,`#26222b`,-.07,.056,.08,.001),N(u,.02,.028,.02,d.gaming.main,-.07,.012,.03,.004),Le(u,.012,R.coat,0,.024,-.04,1.4,.9,1),Le(u,.008,R.coat,.016,.034,-.04)}{let u=h(`kallax-hubtv`,r.extraCells.hubtv);N(u,.2,.012,.06,`#e9e6ef`,0,0,.04,.003),N(u,.22,.13,.014,`#16151b`,0,.02,.05,.005),N(u,.2,.11,.002,`#4b3f8f`,0,.03,.042,0),N(u,.05,.035,.001,`#f2b8c6`,-.055,.06,.0405,0),N(u,.05,.035,.001,`#cbbcf6`,0,.06,.0405,0),N(u,.05,.035,.001,`#9fc3f0`,.055,.06,.0405,0);let f=Pe(u);f.position.set(.02,0,-.07),f.rotation.y=.3,N(f,.09,.022,.05,`#3a3a44`,0,0,0,.012),Le(f,.012,`#3a3a44`,-.04,.012,.01),Le(f,.012,`#3a3a44`,.04,.012,.01)}{let u=h(`kallax-azura`,r.extraCells.azura);N(u,.08,.012,.07,`#efe4d3`,0,0,0,.004);let f=Pe(u);f.position.set(0,.012,.01),f.rotation.x=.18,N(f,.075,.15,.009,`#2a2638`,0,0,0,.008),N(f,.066,.135,.001,`#f7f2fb`,0,.0075,-.005,0),[`#f2b8c6`,`#ffe08a`,`#bfe8d6`,`#9fc3f0`,`#cbbcf6`].forEach((d,p)=>Le(f,.0055,d,-.024+p*.012,.11,-.006)),N(f,.05,.004,.001,`#c8b4ef`,0,.085,-.0058,0),N(f,.04,.004,.001,`#c8b4ef`,0,.075,-.0058,0)}{let u=h(`kallax-routine`,r.extraCells.routine);N(u,.14,.012,.1,`#fffaf2`,-.03,0,0,.003),N(u,.004,.013,.1,`#cbbcf6`,-.03,0,0,0),[0,1,2].forEach(f=>N(u,.05,.002,.004,`#b8a596`,-.065,.012,-.03+f*.02,0)),[0,1,2].forEach(f=>N(u,.05,.002,.004,`#b8a596`,.005,.012,-.03+f*.02,0));for(let f=0;f<5;f++)N(u,.06,.004,.085,f%2?`#f2b8c6`:`#9fc3f0`,.08,f*.004,0,.003)}{let u=h(`kallax-iut`,r.extraCells.iut);N(u,.22,.15,.18,`#c9a27a`,0,0,.01,.006),N(u,.226,.03,.186,`#b58d66`,0,.15,.01,.006),N(u,.12,.05,.004,`#fffaf2`,0,.06,-.081,.002),N(u,.08,.008,.002,`#7a6150`,0,.085,-.084,0),N(u,.06,.006,.002,`#b8a596`,0,.072,-.084,0)}}export{kt as $,Rl as A,Yn as B,Oe as C,QS as D,Pp as E,Uc as F,bt as G,Zs as H,Un as I,eb as J,ct as K,Vr as L,St as M,Tl as N,Qt as O,Tn as P,kn as Q,Xe as R,Me as S,Pl as T,Zt as U,Zb as V,_s as W,ii as X,hs as Y,it as Z,L as _,Bt as a,tt as at,Lp as b,Fc as c,vn as ct,Hc as d,xt as dt,ls as et,He as f,yt as ft,Jn as g,Je as h,zn as ht,Br as i,qr as it,Sc as j,Ri as k,Fn as l,wa as lt,Ip as m,zd as mt,Aa as n,md as nt,Cc as o,us as ot,Ic as p,zc as pt,dn as q,An as r,on as rt,Ec as s,vi as st,$t as t,mb as tt,Gi as u,we as ut,Le as v,On as w,Lt as x,Ll as y,Ye as z};