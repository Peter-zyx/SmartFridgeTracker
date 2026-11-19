(()=>{var fh=0,Ac=1,ph=2;var Cc=1,mh=2,vn=3,Pn=0,Ft=1,yn=2,Nn=0,yi=1,Rc=2,Ic=3,Pc=4,gh=5,Zn=100,_h=101,xh=102,vh=103,yh=104,Mh=200,Sh=201,bh=202,Eh=203,so=204,ro=205,wh=206,Th=207,Ah=208,Ch=209,Rh=210,Ih=211,Ph=212,Lh=213,Dh=214,Do=0,Uo=1,No=2,Mi=3,Fo=4,Oo=5,Bo=6,ko=7,Lc=0,Uh=1,Nh=2,Fn=0,Fh=1,Oh=2,Bh=3,ms=4,kh=5,zh=6,Vh=7;var Dc=300,Ri=301,Ii=302,zo=303,Vo=304,vr=306,oo=1e3,$n=1001,ao=1002,nn=1003,Hh=1004;var yr=1005;var un=1006,Ho=1007;var ti=1008;var mn=1009,Uc=1010,Nc=1011,gs=1012,Go=1013,ni=1014,Mn=1015,_s=1016,Wo=1017,Xo=1018,xs=1020,Fc=35902,Oc=35899,Bc=1021,kc=1022,rn=1023,ts=1026,vs=1027,zc=1028,qo=1029,Vc=1030,Yo=1031;var $o=1033,Mr=33776,Sr=33777,br=33778,Er=33779,Zo=35840,Jo=35841,Ko=35842,Qo=35843,jo=36196,ea=37492,ta=37496,na=37808,ia=37809,sa=37810,ra=37811,oa=37812,aa=37813,ca=37814,la=37815,ha=37816,ua=37817,da=37818,fa=37819,pa=37820,ma=37821,ga=36492,_a=36494,xa=36495,va=36283,ya=36284,Ma=36285,Sa=36286;var Ws=2300,co=2301,io=2302,mc=2400,gc=2401,_c=2402;var Gh=3200,Wh=3201;var Hc=0,Xh=1,On="",Mt="srgb",Si="srgb-linear",Xs="linear",tt="srgb";var xi=7680;var xc=519,qh=512,Yh=513,$h=514,Gc=515,Zh=516,Jh=517,Kh=518,Qh=519,vc=35044;var Wc="300 es",hn=2e3,qs=2001;var Ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zl=1234567,zs=Math.PI/180,ns=180/Math.PI;function Pi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Xc(i,e){return(i%e+e)%e}function pd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function md(i,e,t){return i!==e?(t-i)/(e-i):0}function Vs(i,e,t){return(1-t)*i+t*e}function gd(i,e,t,n){return Vs(i,e,1-Math.exp(-t*n))}function _d(i,e=1){return e-Math.abs(Xc(i,e*2)-e)}function xd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function yd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Md(i,e){return i+Math.random()*(e-i)}function Sd(i){return i*(.5-Math.random())}function bd(i){i!==void 0&&(zl=i);let e=zl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ed(i){return i*zs}function wd(i){return i*ns}function Td(i){return(i&i-1)===0&&i!==0}function Ad(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Cd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Rd(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var qc={DEG2RAD:zs,RAD2DEG:ns,generateUUID:Pi,clamp:qe,euclideanModulo:Xc,mapLinear:pd,inverseLerp:md,lerp:Vs,damp:gd,pingpong:_d,smoothstep:xd,smootherstep:vd,randInt:yd,randFloat:Md,randFloatSpread:Sd,seededRandom:bd,degToRad:Ed,radToDeg:wd,isPowerOfTwo:Td,ceilPowerOfTwo:Ad,floorPowerOfTwo:Cd,setQuaternionFromProperEuler:Rd,normalize:Nt,denormalize:ji},le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],_=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(u!==y||c!==d||l!==p||h!==_){let m=1-a,f=c*d+l*p+h*_+u*y,C=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){let P=Math.sqrt(T),R=Math.atan2(P,f*C);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}let S=a*C;if(c=c*m+d*S,l=l*m+p*S,h=h*m+_*S,u=u*m+y*S,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*u+c*p-l*d,e[t+1]=c*_+h*d+l*u-a*p,e[t+2]=l*_+h*p+a*d-c*u,e[t+3]=h*_-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"YZX":this._x=d*h*u+l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u-d*p*_;break;case"XZY":this._x=d*h*u-l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ga=new D,Vl=new Dn,Ve=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],y=s[0],m=s[3],f=s[6],C=s[1],T=s[4],S=s[7],P=s[2],R=s[5],b=s[8];return r[0]=o*y+a*C+c*P,r[3]=o*m+a*T+c*R,r[6]=o*f+a*S+c*b,r[1]=l*y+h*C+u*P,r[4]=l*m+h*T+u*R,r[7]=l*f+h*S+u*b,r[2]=d*y+p*C+_*P,r[5]=d*m+p*T+_*R,r[8]=d*f+p*S+_*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,_=t*u+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Wa.makeScale(e,t)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wa=new Ve;function Yc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jh(){let i=Ys("canvas");return i.style.display="block",i}var Hl={};function is(i){i in Hl||(Hl[i]=!0,console.warn(i))}function eu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Gl=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Id(){let i={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tt&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===On?Xs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return is("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return is("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Si]:{primaries:e,whitePoint:n,transfer:Xs,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mt},outputColorSpaceConfig:{drawingBufferColorSpace:Mt}},[Mt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mt}}}),i}var Je=Id();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function es(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Vi,lo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vi===void 0&&(Vi=Ys("canvas")),Vi.width=e.width,Vi.height=e.height;let s=Vi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=In(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Pd=0,ss=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xa(s[o].image)):r.push(Xa(s[o]))}else r=Xa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Xa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ld=0,qa=new D,kt=class i extends Ln{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=$n,s=$n,r=un,o=ti,a=rn,c=mn,l=i.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Pi(),this.name="",this.source=new ss(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qa).x}get height(){return this.source.getSize(qa).y}get depth(){return this.source.getSize(qa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Dc;kt.DEFAULT_ANISOTROPY=1;var et=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],_=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,S=(p+1)/2,P=(f+1)/2,R=(h+d)/4,b=(u+y)/4,A=(_+m)/4;return T>S&&T>P?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=R/n,r=b/n):S>P?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=A/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=b/r,s=A/r),this.set(n,s,r,t),this}let C=Math.sqrt((m-_)*(m-_)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(m-_)/C,this.y=(u-y)/C,this.z=(d-h)/C,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ho=class extends Ln{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new kt(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ss(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},_n=class extends ho{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$s=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var uo=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fr.copy(n.boundingBox)),Fr.applyMatrix4(e.matrixWorld),this.union(Fr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Or.subVectors(this.max,Us),Hi.subVectors(e.a,Us),Gi.subVectors(e.b,Us),Wi.subVectors(e.c,Us),Vn.subVectors(Gi,Hi),Hn.subVectors(Wi,Gi),pi.subVectors(Hi,Wi);let t=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-pi.z,pi.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,pi.z,0,-pi.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-pi.y,pi.x,0];return!Ya(t,Hi,Gi,Wi,Or)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,Hi,Gi,Wi,Or))?!1:(Br.crossVectors(Vn,Hn),t=[Br.x,Br.y,Br.z],Ya(t,Hi,Gi,Wi,Or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wn=[new D,new D,new D,new D,new D,new D,new D,new D],an=new D,Fr=new xn,Hi=new D,Gi=new D,Wi=new D,Vn=new D,Hn=new D,pi=new D,Us=new D,Or=new D,Br=new D,mi=new D;function Ya(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){mi.fromArray(i,r);let a=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),c=e.dot(mi),l=t.dot(mi),h=n.dot(mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Dd=new xn,Ns=new D,$a=new D,rs=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Dd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);let t=Ns.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add($a)),this.expandByPoint(Ns.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Tn=new D,Za=new D,kr=new D,Gn=new D,Ja=new D,zr=new D,Ka=new D,Zs=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Za.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),Gn.copy(this.origin).sub(Za);let r=e.distanceTo(t)*.5,o=-this.direction.dot(kr),a=Gn.dot(this.direction),c=-Gn.dot(kr),l=Gn.lengthSq(),h=Math.abs(1-o*o),u,d,p,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Za).addScaledVector(kr,d),p}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);let n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,n,s,r){Ja.subVectors(t,e),zr.subVectors(n,e),Ka.crossVectors(Ja,zr);let o=this.direction.dot(Ka),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,e);let c=a*this.direction.dot(zr.crossVectors(Gn,zr));if(c<0)return null;let l=a*this.direction.dot(Ja.cross(Gn));if(l<0||c+l>o)return null;let h=-a*Gn.dot(Ka);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,p,_,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,p,_,y,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,p,_,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),r=1/Xi.setFromMatrixColumn(e,1).length(),o=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,_=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,_=l*h,y=l*u;t[0]=d+y*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,_=l*h,y=l*u;t[0]=d-y*a,t[4]=-o*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,_=a*h,y=a*u;t[0]=c*h,t[4]=_*l-p,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,_=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=_*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+_,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*c,p=o*l,_=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=o*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ud,e,Nd)}lookAt(e,t,n){let s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Wn.crossVectors(n,qt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Wn.crossVectors(n,qt)),Wn.normalize(),Vr.crossVectors(qt,Wn),s[0]=Wn.x,s[4]=Vr.x,s[8]=qt.x,s[1]=Wn.y,s[5]=Vr.y,s[9]=qt.y,s[2]=Wn.z,s[6]=Vr.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],y=n[6],m=n[10],f=n[14],C=n[3],T=n[7],S=n[11],P=n[15],R=s[0],b=s[4],A=s[8],g=s[12],x=s[1],w=s[5],L=s[9],N=s[13],k=s[2],V=s[6],z=s[10],W=s[14],H=s[3],ne=s[7],fe=s[11],xe=s[15];return r[0]=o*R+a*x+c*k+l*H,r[4]=o*b+a*w+c*V+l*ne,r[8]=o*A+a*L+c*z+l*fe,r[12]=o*g+a*N+c*W+l*xe,r[1]=h*R+u*x+d*k+p*H,r[5]=h*b+u*w+d*V+p*ne,r[9]=h*A+u*L+d*z+p*fe,r[13]=h*g+u*N+d*W+p*xe,r[2]=_*R+y*x+m*k+f*H,r[6]=_*b+y*w+m*V+f*ne,r[10]=_*A+y*L+m*z+f*fe,r[14]=_*g+y*N+m*W+f*xe,r[3]=C*R+T*x+S*k+P*H,r[7]=C*b+T*w+S*V+P*ne,r[11]=C*A+T*L+S*z+P*fe,r[15]=C*g+T*N+S*W+P*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],f=e[15];return _*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+y*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],f=e[15],C=u*m*l-y*d*l+y*c*p-a*m*p-u*c*f+a*d*f,T=_*d*l-h*m*l-_*c*p+o*m*p+h*c*f-o*d*f,S=h*y*l-_*u*l+_*a*p-o*y*p-h*a*f+o*u*f,P=_*u*c-h*y*c-_*a*d+o*y*d+h*a*m-o*u*m,R=t*C+n*T+s*S+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/R;return e[0]=C*b,e[1]=(y*d*r-u*m*r-y*s*p+n*m*p+u*s*f-n*d*f)*b,e[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*f+n*c*f)*b,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*b,e[4]=T*b,e[5]=(h*m*r-_*d*r+_*s*p-t*m*p-h*s*f+t*d*f)*b,e[6]=(_*c*r-o*m*r-_*s*l+t*m*l+o*s*f-t*c*f)*b,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*b,e[8]=S*b,e[9]=(_*u*r-h*y*r-_*n*p+t*y*p+h*n*f-t*u*f)*b,e[10]=(o*y*r-_*a*r+_*n*l-t*y*l-o*n*f+t*a*f)*b,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*b,e[12]=P*b,e[13]=(h*y*s-_*u*s+_*n*d-t*y*d-h*n*m+t*u*m)*b,e[14]=(_*a*s-o*y*s-_*n*c+t*y*c+o*n*m-t*a*m)*b,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*b,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,_=r*u,y=o*h,m=o*u,f=a*u,C=c*l,T=c*h,S=c*u,P=n.x,R=n.y,b=n.z;return s[0]=(1-(y+f))*P,s[1]=(p+S)*P,s[2]=(_-T)*P,s[3]=0,s[4]=(p-S)*R,s[5]=(1-(d+f))*R,s[6]=(m+C)*R,s[7]=0,s[8]=(_+T)*b,s[9]=(m-C)*b,s[10]=(1-(d+y))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Xi.set(s[0],s[1],s[2]).length(),o=Xi.set(s[4],s[5],s[6]).length(),a=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],cn.copy(this);let l=1/r,h=1/o,u=1/a;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=u,cn.elements[9]*=u,cn.elements[10]*=u,t.setFromRotationMatrix(cn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=hn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),_,y;if(c)_=r/(o-r),y=o*r/(o-r);else if(a===hn)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===qs)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),_,y;if(c)_=1/(o-r),y=o/(o-r);else if(a===hn)_=-2/(o-r),y=-(o+r)/(o-r);else if(a===qs)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xi=new D,cn=new ut,Ud=new D(0,0,0),Nd=new D(1,1,1),Wn=new D,Vr=new D,qt=new D,Xl=new ut,ql=new Dn,dn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fd=0,Yl=new D,qi=new Dn,An=new ut,Hr=new D,Fs=new D,Od=new D,Bd=new Dn,$l=new D(1,0,0),Zl=new D(0,1,0),Jl=new D(0,0,1),Kl={type:"added"},kd={type:"removed"},Yi={type:"childadded",child:null},Qa={type:"childremoved",child:null},Pt=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new dn,n=new Dn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ve}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(Zl,e)}rotateZ(e){return this.rotateOnAxis(Jl,e)}translateOnAxis(e,t){return Yl.copy(e).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(Zl,e)}translateZ(e){return this.translateOnAxis(Jl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hr.copy(e):Hr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Fs,Hr,this.up):An.lookAt(Hr,Fs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(An),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kd),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,e,Od),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Pt.DEFAULT_UP=new D(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new D,Cn=new D,ja=new D,Rn=new D,$i=new D,Zi=new D,Ql=new D,ec=new D,tc=new D,nc=new D,ic=new et,sc=new et,rc=new et,Yn=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ln.subVectors(e,t),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ln.subVectors(s,t),Cn.subVectors(n,t),ja.subVectors(e,t);let o=ln.dot(ln),a=ln.dot(Cn),c=ln.dot(ja),l=Cn.dot(Cn),h=Cn.dot(ja),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(a,Rn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return ic.setScalar(0),sc.setScalar(0),rc.setScalar(0),ic.fromBufferAttribute(e,t),sc.fromBufferAttribute(e,n),rc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ic,r.x),o.addScaledVector(sc,r.y),o.addScaledVector(rc,r.z),o}static isFrontFacing(e,t,n,s){return ln.subVectors(n,t),Cn.subVectors(e,t),ln.cross(Cn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),ln.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;$i.subVectors(s,n),Zi.subVectors(r,n),ec.subVectors(e,n);let c=$i.dot(ec),l=Zi.dot(ec);if(c<=0&&l<=0)return t.copy(n);tc.subVectors(e,s);let h=$i.dot(tc),u=Zi.dot(tc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector($i,o);nc.subVectors(e,r);let p=$i.dot(nc),_=Zi.dot(nc);if(_>=0&&p<=_)return t.copy(r);let y=p*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Zi,a);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Ql.subVectors(r,s),a=(u-h)/(u-h+(p-_)),t.copy(s).addScaledVector(Ql,a);let f=1/(m+y+d);return o=y*f,a=d*f,t.copy(n).addScaledVector($i,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function oc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Xc(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=oc(o,r,e+1/3),this.g=oc(o,r,e),this.b=oc(o,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mt){let n=tu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mt){return Je.workingToColorSpace(It.copy(this),e),Math.round(qe(It.r*255,0,255))*65536+Math.round(qe(It.g*255,0,255))*256+Math.round(qe(It.b*255,0,255))}getHexString(e=Mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(It.copy(this),t);let n=It.r,s=It.g,r=It.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Mt){Je.workingToColorSpace(It.copy(this),e);let t=It.r,n=It.g,s=It.b;return e!==Mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(Gr);let n=Vs(Xn.h,Gr.h,t),s=Vs(Xn.s,Gr.s,t),r=Vs(Xn.l,Gr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},It=new Ye;Ye.NAMES=tu;var zd=0,Jn=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=yi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ro,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ro&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zt=class extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var yt=new D,Wr=new le,Vd=0,$t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wr.fromBufferAttribute(this,t),Wr.applyMatrix3(e),this.setXY(t,Wr.x,Wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}};var Js=class extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ks=class extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hd=0,tn=new ut,ac=new Pt,Ji=new D,Yt=new xn,Os=new xn,wt=new D,zt=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yc(e)?Ks:Js)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Yt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Yt.min,Os.min),Yt.expandByPoint(wt),wt.addVectors(Yt.max,Os.max),Yt.expandByPoint(wt)):(Yt.expandByPoint(Os.min),Yt.expandByPoint(Os.max))}Yt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)wt.fromBufferAttribute(a,l),c&&(Ji.fromBufferAttribute(e,l),wt.add(Ji)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new D,c[A]=new D;let l=new D,h=new D,u=new D,d=new le,p=new le,_=new le,y=new D,m=new D;function f(A,g,x){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,g),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,g),_.fromBufferAttribute(r,x),h.sub(l),u.sub(l),p.sub(d),_.sub(d);let w=1/(p.x*_.y-_.x*p.y);isFinite(w)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(w),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(w),a[A].add(y),a[g].add(y),a[x].add(y),c[A].add(m),c[g].add(m),c[x].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let A=0,g=C.length;A<g;++A){let x=C[A],w=x.start,L=x.count;for(let N=w,k=w+L;N<k;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let T=new D,S=new D,P=new D,R=new D;function b(A){P.fromBufferAttribute(s,A),R.copy(P);let g=a[A];T.copy(g),T.sub(P.multiplyScalar(P.dot(g))).normalize(),S.crossVectors(R,g);let w=S.dot(c[A])<0?-1:1;o.setXYZW(A,T.x,T.y,T.z,w)}for(let A=0,g=C.length;A<g;++A){let x=C[A],w=x.start,L=x.count;for(let N=w,k=w+L;N<k;N+=3)b(e.getX(N+0)),b(e.getX(N+1)),b(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){let _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,_=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let f=0;f<h;f++)d[_++]=l[p++]}return new $t(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jl=new ut,gi=new Zs,Xr=new rs,eh=new D,qr=new D,Yr=new D,$r=new D,cc=new D,Zr=new D,th=new D,Jr=new D,St=class extends Pt{constructor(e=new zt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Zr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(cc.fromBufferAttribute(u,e),o?Zr.addScaledVector(cc,h):Zr.addScaledVector(cc.sub(t),h))}t.add(Zr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),gi.copy(e.ray).recast(e.near),!(Xr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(Xr,eh)===null||gi.origin.distanceToSquared(eh)>(e.far-e.near)**2))&&(jl.copy(r).invert(),gi.copy(e.ray).applyMatrix4(jl),!(n.boundingBox!==null&&gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){let m=d[_],f=o[m.materialIndex],C=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=C,P=T;S<P;S+=3){let R=a.getX(S),b=a.getX(S+1),A=a.getX(S+2);s=Kr(this,f,e,n,l,h,u,R,b,A),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){let C=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);s=Kr(this,o,e,n,l,h,u,C,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){let m=d[_],f=o[m.materialIndex],C=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=C,P=T;S<P;S+=3){let R=S,b=S+1,A=S+2;s=Kr(this,f,e,n,l,h,u,R,b,A),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){let C=m,T=m+1,S=m+2;s=Kr(this,o,e,n,l,h,u,C,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Gd(i,e,t,n,s,r,o,a){let c;if(e.side===Ft?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Pn,a),c===null)return null;Jr.copy(a),Jr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Jr);return l<t.near||l>t.far?null:{distance:l,point:Jr.clone(),object:i}}function Kr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,qr),i.getVertexPosition(c,Yr),i.getVertexPosition(l,$r);let h=Gd(i,e,t,n,qr,Yr,$r,th);if(h){let u=new D;Yn.getBarycoord(th,qr,Yr,$r,u),s&&(h.uv=Yn.getInterpolatedAttribute(s,a,c,l,u,new le)),r&&(h.uv1=Yn.getInterpolatedAttribute(r,a,c,l,u,new le)),o&&(h.normal=Yn.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};Yn.getNormal(qr,Yr,$r,d.normal),h.face=d,h.barycoord=u}return h}var Kn=class i extends zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function _(y,m,f,C,T,S,P,R,b,A,g){let x=S/b,w=P/A,L=S/2,N=P/2,k=R/2,V=b+1,z=A+1,W=0,H=0,ne=new D;for(let fe=0;fe<z;fe++){let xe=fe*w-N;for(let Ue=0;Ue<V;Ue++){let Oe=Ue*x-L;ne[y]=Oe*C,ne[m]=xe*T,ne[f]=k,l.push(ne.x,ne.y,ne.z),ne[y]=0,ne[m]=0,ne[f]=R>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Ue/b),u.push(1-fe/A),W+=1}}for(let fe=0;fe<A;fe++)for(let xe=0;xe<b;xe++){let Ue=d+xe+V*fe,Oe=d+xe+V*(fe+1),Ze=d+(xe+1)+V*(fe+1),ke=d+(xe+1)+V*fe;c.push(Ue,Oe,ke),c.push(Oe,Ze,ke),H+=6}a.addGroup(p,H,g),p+=H,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Li(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){let e={};for(let t=0;t<i.length;t++){let n=Li(i[t]);for(let s in n)e[s]=n[s]}return e}function Wd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $c(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var nu={clone:Li,merge:Lt},Xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xd,this.fragmentShader=qd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Wd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qs=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qn=new D,nh=new le,ih=new le,Tt=class extends Qs{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qn.x,qn.y).multiplyScalar(-e/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-e/qn.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ki=-90,Qi=1,fo=class extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tt(Ki,Qi,e,t);s.layers=this.layers,this.add(s);let r=new Tt(Ki,Qi,e,t);r.layers=this.layers,this.add(r);let o=new Tt(Ki,Qi,e,t);o.layers=this.layers,this.add(o);let a=new Tt(Ki,Qi,e,t);a.layers=this.layers,this.add(a);let c=new Tt(Ki,Qi,e,t);c.layers=this.layers,this.add(c);let l=new Tt(Ki,Qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},js=class extends kt{constructor(e=[],t=Ri,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},po=class extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new js(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kn(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ft,blending:Nn});r.uniforms.tEquirect.value=t;let o=new St(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=un),new fo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},vt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yd={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var bi=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var lc=new D,$d=new D,Zd=new Ve,pt=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=lc.subVectors(n,t).cross($d.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(lc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zd.getNormalMatrix(e),s=this.coplanarPoint(lc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new rs,Jd=new le(.5,.5),Qr=new D,cs=class{constructor(e=new pt,t=new pt,n=new pt,s=new pt,r=new pt,o=new pt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],_=r[8],y=r[9],m=r[10],f=r[11],C=r[12],T=r[13],S=r[14],P=r[15];if(s[0].setComponents(l-o,p-h,f-_,P-C).normalize(),s[1].setComponents(l+o,p+h,f+_,P+C).normalize(),s[2].setComponents(l+a,p+u,f+y,P+T).normalize(),s[3].setComponents(l-a,p-u,f-y,P-T).normalize(),n)s[4].setComponents(c,d,m,S).normalize(),s[5].setComponents(l-c,p-d,f-m,P-S).normalize();else if(s[4].setComponents(l-c,p-d,f-m,P-S).normalize(),t===hn)s[5].setComponents(l+c,p+d,f+m,P+S).normalize();else if(t===qs)s[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){_i.center.set(0,0,0);let t=Jd.distanceTo(e.center);return _i.radius=.7071067811865476+t,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qr.x=s.normal.x>0?e.max.x:e.min.x,Qr.y=s.normal.y>0?e.max.y:e.min.y,Qr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Un=class extends kt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},er=class extends kt{constructor(e,t,n=ni,s,r,o,a=nn,c=nn,l,h=ts,u=1){if(h!==ts&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ss(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},tr=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ls=class i extends zt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],_=0,y=[],m=n/2,f=0;C(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(p,2));function C(){let S=new D,P=new D,R=0,b=(t-e)/n;for(let A=0;A<=r;A++){let g=[],x=A/r,w=x*(t-e)+e;for(let L=0;L<=s;L++){let N=L/s,k=N*c+a,V=Math.sin(k),z=Math.cos(k);P.x=w*V,P.y=-x*n+m,P.z=w*z,u.push(P.x,P.y,P.z),S.set(V,b,z).normalize(),d.push(S.x,S.y,S.z),p.push(N,1-x),g.push(_++)}y.push(g)}for(let A=0;A<s;A++)for(let g=0;g<r;g++){let x=y[g][A],w=y[g+1][A],L=y[g+1][A+1],N=y[g][A+1];(e>0||g!==0)&&(h.push(x,w,N),R+=3),(t>0||g!==r-1)&&(h.push(w,L,N),R+=3)}l.addGroup(f,R,0),f+=R}function T(S){let P=_,R=new le,b=new D,A=0,g=S===!0?e:t,x=S===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),_++;let w=_;for(let L=0;L<=s;L++){let k=L/s*c+a,V=Math.cos(k),z=Math.sin(k);b.x=g*z,b.y=m*x,b.z=g*V,u.push(b.x,b.y,b.z),d.push(0,x,0),R.x=V*.5+.5,R.y=z*.5*x+.5,p.push(R.x,R.y),_++}for(let L=0;L<s;L++){let N=P+L,k=w+L;S===!0?h.push(k,k+1,N):h.push(k+1,k,N),A+=3}l.addGroup(f,A,S===!0?1:2),f+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},nr=class i extends ls{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Jt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new le:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],o=[],a=new D,c=new ut;for(let p=0;p<=e;p++){let _=p/e;s[p]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(qe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(qe(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},hs=class extends Jt{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mo=class extends hs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Zc(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var jr=new D,hc=new Zc,uc=new Zc,dc=new Zc,us=class extends Jt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(jr.subVectors(s[0],s[1]).add(s[0]),l=jr);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(jr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),hc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,y,m),uc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,y,m),dc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,y,m)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),uc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),dc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(hc.calc(c),uc.calc(c),dc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function sh(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Kd(i,e){let t=1-i;return t*t*e}function Qd(i,e){return 2*(1-i)*i*e}function jd(i,e){return i*i*e}function Hs(i,e,t,n){return Kd(i,e)+Qd(i,t)+jd(i,n)}function ef(i,e){let t=1-i;return t*t*t*e}function tf(i,e){let t=1-i;return 3*t*t*i*e}function nf(i,e){return 3*(1-i)*i*i*e}function sf(i,e){return i*i*i*e}function Gs(i,e,t,n,s){return ef(i,e)+tf(i,t)+nf(i,n)+sf(i,s)}var ir=class extends Jt{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(e,s.x,r.x,o.x,a.x),Gs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},go=class extends Jt{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Gs(e,s.x,r.x,o.x,a.x),Gs(e,s.y,r.y,o.y,a.y),Gs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sr=class extends Jt{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_o=class extends Jt{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rr=class extends Jt{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(e,s.x,r.x,o.x),Hs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},or=class extends Jt{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Hs(e,s.x,r.x,o.x),Hs(e,s.y,r.y,o.y),Hs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ar=class extends Jt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(sh(a,c.x,l.x,h.x,u.x),sh(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},xo=Object.freeze({__proto__:null,ArcCurve:mo,CatmullRomCurve3:us,CubicBezierCurve:ir,CubicBezierCurve3:go,EllipseCurve:hs,LineCurve:sr,LineCurve3:_o,QuadraticBezierCurve:rr,QuadraticBezierCurve3:or,SplineCurve:ar}),vo=class extends Jt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new xo[s.type]().fromJSON(s))}return this}},cr=class extends vo{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sr(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new rr(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ir(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ar(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new hs(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ds=class extends cr{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new cr().fromJSON(s))}return this}};function rf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=iu(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=hf(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let p=i[d],_=i[d+1];p<a&&(a=p),_<c&&(c=_),p>h&&(h=p),_>u&&(u=_)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return lr(r,o,t,a,c,l,0),o}function iu(i,e,t,n,s){let r;if(s===Mf(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=rh(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=rh(o/n|0,i[o],i[o+1],r);return r&&fs(r,r.next)&&(ur(r),r=r.next),r}function Ei(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(fs(t,t.next)||mt(t.prev,t,t.next)===0)){if(ur(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function lr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&mf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?af(i,n,s,r):of(i)){e.push(c.i,i.i,l.i),ur(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=cf(Ei(i),e),lr(i,e,t,n,s,r,2)):o===2&&lf(i,e,t,n,s,r):lr(Ei(i),e,t,n,s,r,1);break}}}function of(i){let e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),p=Math.max(a,c,l),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=p&&ks(s,a,r,c,o,l,_.x,_.y)&&mt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function af(i,e,t,n){let s=i.prev,r=i,o=i.next;if(mt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=Math.min(a,c,l),_=Math.min(h,u,d),y=Math.max(a,c,l),m=Math.max(h,u,d),f=yc(p,_,e,t,n),C=yc(y,m,e,t,n),T=i.prevZ,S=i.nextZ;for(;T&&T.z>=f&&S&&S.z<=C;){if(T.x>=p&&T.x<=y&&T.y>=_&&T.y<=m&&T!==s&&T!==o&&ks(a,h,c,u,l,d,T.x,T.y)&&mt(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=p&&S.x<=y&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&ks(a,h,c,u,l,d,S.x,S.y)&&mt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=f;){if(T.x>=p&&T.x<=y&&T.y>=_&&T.y<=m&&T!==s&&T!==o&&ks(a,h,c,u,l,d,T.x,T.y)&&mt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=C;){if(S.x>=p&&S.x<=y&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&ks(a,h,c,u,l,d,S.x,S.y)&&mt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function cf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!fs(n,s)&&ru(n,t,t.next,s)&&hr(n,s)&&hr(s,n)&&(e.push(n.i,t.i,s.i),ur(t),ur(t.next),t=i=s),t=t.next}while(t!==i);return Ei(t)}function lf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xf(o,a)){let c=ou(o,a);o=Ei(o,o.next),c=Ei(c,c.next),lr(o,e,t,n,s,r,0),lr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function hf(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=iu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(_f(l))}s.sort(uf);for(let r=0;r<s.length;r++)t=df(s[r],t);return t}function uf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function df(i,e){let t=ff(i,e);if(!t)return e;let n=ou(t,i);return Ei(n,n.next),Ei(t,t.next)}function ff(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(fs(i,t))return t;do{if(fs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&su(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);hr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&pf(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function pf(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function mf(i,e,t,n){let s=i;do s.z===0&&(s.z=yc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gf(s)}function gf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function yc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _f(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function su(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function ks(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&su(i,e,t,n,s,r,o,a)}function xf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vf(i,e)&&(hr(i,e)&&hr(e,i)&&yf(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||fs(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function fs(i,e){return i.x===e.x&&i.y===e.y}function ru(i,e,t,n){let s=to(mt(i,e,t)),r=to(mt(i,e,n)),o=to(mt(t,n,i)),a=to(mt(t,n,e));return!!(s!==r&&o!==a||s===0&&eo(i,t,e)||r===0&&eo(i,n,e)||o===0&&eo(t,i,n)||a===0&&eo(t,e,n))}function eo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function to(i){return i>0?1:i<0?-1:0}function vf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ru(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function hr(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function yf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ou(i,e){let t=Mc(i.i,i.x,i.y),n=Mc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function rh(i,e,t,n){let s=Mc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ur(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mf(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Sc=class{static triangulate(e,t,n=2){return rf(e,t,n)}},vi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];oh(e),ah(n,e);let o=e.length;t.forEach(oh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,ah(n,t[c]);let a=Sc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function oh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ah(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var dr=class i extends zt{constructor(e=new ds([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:Sf,T,S=!1,P,R,b,A;f&&(T=f.getSpacedPoints(h),S=!0,d=!1,P=f.computeFrenetFrames(h,!1),R=new D,b=new D,A=new D),d||(m=0,p=0,_=0,y=0);let g=a.extractPoints(l),x=g.shape,w=g.holes;if(!vi.isClockWise(x)){x=x.reverse();for(let ee=0,Q=w.length;ee<Q;ee++){let Z=w[ee];vi.isClockWise(Z)&&(w[ee]=Z.reverse())}}function N(ee){let Z=10000000000000001e-36,J=ee[0];for(let ue=1;ue<=ee.length;ue++){let ie=ue%ee.length,he=ee[ie],Le=he.x-J.x,Ne=he.y-J.y,M=Le*Le+Ne*Ne,v=Math.max(Math.abs(he.x),Math.abs(he.y),Math.abs(J.x),Math.abs(J.y)),U=Z*v*v;if(M<=U){ee.splice(ie,1),ue--;continue}J=he}}N(x),w.forEach(N);let k=w.length,V=x;for(let ee=0;ee<k;ee++){let Q=w[ee];x=x.concat(Q)}function z(ee,Q,Z){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(Q,Z)}let W=x.length;function H(ee,Q,Z){let J,ue,ie,he=ee.x-Q.x,Le=ee.y-Q.y,Ne=Z.x-ee.x,M=Z.y-ee.y,v=he*he+Le*Le,U=he*M-Le*Ne;if(Math.abs(U)>Number.EPSILON){let G=Math.sqrt(v),K=Math.sqrt(Ne*Ne+M*M),Y=Q.x-Le/G,Me=Q.y+he/G,ae=Z.x-M/K,ye=Z.y+Ne/K,Te=((ae-Y)*M-(ye-Me)*Ne)/(he*M-Le*Ne);J=Y+he*Te-ee.x,ue=Me+Le*Te-ee.y;let se=J*J+ue*ue;if(se<=2)return new le(J,ue);ie=Math.sqrt(se/2)}else{let G=!1;he>Number.EPSILON?Ne>Number.EPSILON&&(G=!0):he<-Number.EPSILON?Ne<-Number.EPSILON&&(G=!0):Math.sign(Le)===Math.sign(M)&&(G=!0),G?(J=-Le,ue=he,ie=Math.sqrt(v)):(J=he,ue=Le,ie=Math.sqrt(v/2))}return new le(J/ie,ue/ie)}let ne=[];for(let ee=0,Q=V.length,Z=Q-1,J=ee+1;ee<Q;ee++,Z++,J++)Z===Q&&(Z=0),J===Q&&(J=0),ne[ee]=H(V[ee],V[Z],V[J]);let fe=[],xe,Ue=ne.concat();for(let ee=0,Q=k;ee<Q;ee++){let Z=w[ee];xe=[];for(let J=0,ue=Z.length,ie=ue-1,he=J+1;J<ue;J++,ie++,he++)ie===ue&&(ie=0),he===ue&&(he=0),xe[J]=H(Z[J],Z[ie],Z[he]);fe.push(xe),Ue=Ue.concat(xe)}let Oe;if(m===0)Oe=vi.triangulateShape(V,w);else{let ee=[],Q=[];for(let Z=0;Z<m;Z++){let J=Z/m,ue=p*Math.cos(J*Math.PI/2),ie=_*Math.sin(J*Math.PI/2)+y;for(let he=0,Le=V.length;he<Le;he++){let Ne=z(V[he],ne[he],ie);Ce(Ne.x,Ne.y,-ue),J===0&&ee.push(Ne)}for(let he=0,Le=k;he<Le;he++){let Ne=w[he];xe=fe[he];let M=[];for(let v=0,U=Ne.length;v<U;v++){let G=z(Ne[v],xe[v],ie);Ce(G.x,G.y,-ue),J===0&&M.push(G)}J===0&&Q.push(M)}}Oe=vi.triangulateShape(ee,Q)}let Ze=Oe.length,ke=_+y;for(let ee=0;ee<W;ee++){let Q=d?z(x[ee],Ue[ee],ke):x[ee];S?(b.copy(P.normals[0]).multiplyScalar(Q.x),R.copy(P.binormals[0]).multiplyScalar(Q.y),A.copy(T[0]).add(b).add(R),Ce(A.x,A.y,A.z)):Ce(Q.x,Q.y,0)}for(let ee=1;ee<=h;ee++)for(let Q=0;Q<W;Q++){let Z=d?z(x[Q],Ue[Q],ke):x[Q];S?(b.copy(P.normals[ee]).multiplyScalar(Z.x),R.copy(P.binormals[ee]).multiplyScalar(Z.y),A.copy(T[ee]).add(b).add(R),Ce(A.x,A.y,A.z)):Ce(Z.x,Z.y,u/h*ee)}for(let ee=m-1;ee>=0;ee--){let Q=ee/m,Z=p*Math.cos(Q*Math.PI/2),J=_*Math.sin(Q*Math.PI/2)+y;for(let ue=0,ie=V.length;ue<ie;ue++){let he=z(V[ue],ne[ue],J);Ce(he.x,he.y,u+Z)}for(let ue=0,ie=w.length;ue<ie;ue++){let he=w[ue];xe=fe[ue];for(let Le=0,Ne=he.length;Le<Ne;Le++){let M=z(he[Le],xe[Le],J);S?Ce(M.x,M.y+T[h-1].y,T[h-1].x+Z):Ce(M.x,M.y,u+Z)}}}$(),te();function $(){let ee=s.length/3;if(d){let Q=0,Z=W*Q;for(let J=0;J<Ze;J++){let ue=Oe[J];be(ue[2]+Z,ue[1]+Z,ue[0]+Z)}Q=h+m*2,Z=W*Q;for(let J=0;J<Ze;J++){let ue=Oe[J];be(ue[0]+Z,ue[1]+Z,ue[2]+Z)}}else{for(let Q=0;Q<Ze;Q++){let Z=Oe[Q];be(Z[2],Z[1],Z[0])}for(let Q=0;Q<Ze;Q++){let Z=Oe[Q];be(Z[0]+W*h,Z[1]+W*h,Z[2]+W*h)}}n.addGroup(ee,s.length/3-ee,0)}function te(){let ee=s.length/3,Q=0;ve(V,Q),Q+=V.length;for(let Z=0,J=w.length;Z<J;Z++){let ue=w[Z];ve(ue,Q),Q+=ue.length}n.addGroup(ee,s.length/3-ee,1)}function ve(ee,Q){let Z=ee.length;for(;--Z>=0;){let J=Z,ue=Z-1;ue<0&&(ue=ee.length-1);for(let ie=0,he=h+m*2;ie<he;ie++){let Le=W*ie,Ne=W*(ie+1),M=Q+J+Le,v=Q+ue+Le,U=Q+ue+Ne,G=Q+J+Ne;He(M,v,U,G)}}}function Ce(ee,Q,Z){c.push(ee),c.push(Q),c.push(Z)}function be(ee,Q,Z){Ge(ee),Ge(Q),Ge(Z);let J=s.length/3,ue=C.generateTopUV(n,s,J-3,J-2,J-1);I(ue[0]),I(ue[1]),I(ue[2])}function He(ee,Q,Z,J){Ge(ee),Ge(Q),Ge(J),Ge(Q),Ge(Z),Ge(J);let ue=s.length/3,ie=C.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);I(ie[0]),I(ie[1]),I(ie[3]),I(ie[1]),I(ie[2]),I(ie[3])}function Ge(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function I(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bf(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xo[s.type]().fromJSON(s)),new i(n,e.options)}},Sf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new le(r,o),new le(a,c),new le(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],_=e[s*3+2],y=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new le(o,1-c),new le(l,1-u),new le(d,1-_),new le(y,1-f)]:[new le(a,1-c),new le(h,1-u),new le(p,1-_),new le(m,1-f)]}};function bf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var fr=class i extends zt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=qe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new D,d=new le,p=new D,_=new D,y=new D,m=0,f=0;for(let C=0;C<=e.length-1;C++)switch(C){case 0:m=e[C+1].x-e[C].x,f=e[C+1].y-e[C].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:m=e[C+1].x-e[C].x,f=e[C+1].y-e[C].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),c.push(p.x,p.y,p.z),y.copy(_)}for(let C=0;C<=t;C++){let T=n+C*h*s,S=Math.sin(T),P=Math.cos(T);for(let R=0;R<=e.length-1;R++){u.x=e[R].x*S,u.y=e[R].y,u.z=e[R].x*P,o.push(u.x,u.y,u.z),d.x=C/t,d.y=R/(e.length-1),a.push(d.x,d.y);let b=c[3*R+0]*S,A=c[3*R+1],g=c[3*R+0]*P;l.push(b,A,g)}}for(let C=0;C<t;C++)for(let T=0;T<e.length-1;T++){let S=T+C*e.length,P=S,R=S+e.length,b=S+e.length+1,A=S+1;r.push(P,R,A),r.push(b,A,R)}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var pn=class i extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],_=[],y=[],m=[];for(let f=0;f<h;f++){let C=f*d-o;for(let T=0;T<l;T++){let S=T*u-r;_.push(S,-C,0),y.push(0,0,1),m.push(T/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let C=0;C<a;C++){let T=C+l*f,S=C+l*(f+1),P=C+1+l*(f+1),R=C+1+l*f;p.push(T,S,R),p.push(S,P,R)}this.setIndex(p),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var pr=class i extends zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new D,d=new D,p=[],_=[],y=[],m=[];for(let f=0;f<=n;f++){let C=[],T=f/n,S=0;f===0&&o===0?S=.5/t:f===n&&c===Math.PI&&(S=-.5/t);for(let P=0;P<=t;P++){let R=P/t;u.x=-e*Math.cos(s+R*r)*Math.sin(o+T*a),u.y=e*Math.cos(o+T*a),u.z=e*Math.sin(s+R*r)*Math.sin(o+T*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(R+S,1-T),C.push(l++)}h.push(C)}for(let f=0;f<n;f++)for(let C=0;C<t;C++){let T=h[f][C+1],S=h[f][C],P=h[f+1][C],R=h[f+1][C+1];(f!==0||o>0)&&p.push(T,S,R),(f!==n-1||c<Math.PI)&&p.push(S,P,R)}this.setIndex(p),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(y,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mr=class i extends zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){let y=_/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){let y=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,C=(s+1)*p+_;o.push(y,m,C),o.push(m,f,C)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var gr=class i extends zt{constructor(e=new or(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,c=new D,l=new le,h=new D,u=[],d=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(p,2));function y(){for(let T=0;T<t;T++)m(T);m(r===!1?t:0),C(),f()}function m(T){h=e.getPointAt(T/t,h);let S=o.normals[T],P=o.binormals[T];for(let R=0;R<=s;R++){let b=R/s*Math.PI*2,A=Math.sin(b),g=-Math.cos(b);c.x=g*S.x+A*P.x,c.y=g*S.y+A*P.y,c.z=g*S.z+A*P.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let T=1;T<=t;T++)for(let S=1;S<=s;S++){let P=(s+1)*(T-1)+(S-1),R=(s+1)*T+(S-1),b=(s+1)*T+S,A=(s+1)*(T-1)+S;_.push(P,R,A),_.push(R,b,A)}}function C(){for(let T=0;T<=t;T++)for(let S=0;S<=s;S++)l.x=T/t,l.y=S/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new xo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var sn=class extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var yo=class extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mo=class extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function no(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ef(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var wi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},So=class extends wi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gc:r=e,a=2*t-n;break;case _c:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gc:o=e,c=2*n-t;break;case _c:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),y=_*_,m=y*_,f=-d*m+2*d*y-d*_,C=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*_+1,T=(-1-p)*m+(1.5+p)*y+.5*_,S=p*m-p*y;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+C*o[l+P]+T*o[c+P]+S*o[u+P];return r}},bo=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},Eo=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=no(t,this.TimeBufferType),this.values=no(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:no(e.times,Array),values:no(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new So(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ws:t=this.InterpolantFactoryMethodDiscrete;break;case co:t=this.InterpolantFactoryMethodLinear;break;case io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ws;case this.InterpolantFactoryMethodLinear:return co;case this.InterpolantFactoryMethodSmooth:return io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ef(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===io,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){let y=t[u+_];if(y!==t[d+_]||y!==t[p+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Kt.prototype.ValueTypeName="";Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=co;var Qn=class extends Kt{constructor(e,t,n){super(e,t,n)}};Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=Ws;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};wo.prototype.ValueTypeName="color";var To=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};To.prototype.ValueTypeName="number";var Ao=class extends wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Dn.slerpFlat(r,0,o,l-a,o,l,c);return r}},_r=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ao(this.times,this.values,this.getValueSize(),e)}};_r.prototype.ValueTypeName="quaternion";_r.prototype.InterpolantFactoryMethodSmooth=void 0;var jn=class extends Kt{constructor(e,t,n){super(e,t,n)}};jn.prototype.ValueTypeName="string";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=Ws;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Co=class extends Kt{constructor(e,t,n,s){super(e,t,n,s)}};Co.prototype.ValueTypeName="vector";var Ro=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},au=new Ro,Io=class{constructor(e){this.manager=e!==void 0?e:au,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Io.DEFAULT_MATERIAL_NAME="__DEFAULT";var ps=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ti=class extends ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fc=new ut,ch=new D,lh=new D,Po=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(ch),lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lh),t.updateMatrixWorld(),fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var hh=new ut,Bs=new D,pc=new D,bc=class extends Po{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bs),pc.copy(n.position),pc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pc),n.updateMatrixWorld(),s.makeTranslation(-Bs.x,-Bs.y,-Bs.z),hh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh,n.coordinateSystem,n.reversedDepth)}},Ai=class extends ps{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new bc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ci=class extends Qs{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ec=class extends Po{constructor(){super(new Ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ei=class extends ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Ec}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Lo=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Jc="\\[\\]\\.:\\/",wf=new RegExp("["+Jc+"]","g"),Kc="[^"+Jc+"]",Tf="[^"+Jc.replace("\\.","")+"]",Af=/((?:WC+[\/:])*)/.source.replace("WC",Kc),Cf=/(WCOD+)?/.source.replace("WCOD",Tf),Rf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kc),If=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kc),Pf=new RegExp("^"+Af+Cf+Rf+If+"$"),Lf=["material","materials","bones","map"],wc=class{constructor(e,t,n){let s=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wf,"")}static parseTrackName(e){let t=Pf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=wc;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var F_=new Float32Array(1);var uh=new ut,xr=class{constructor(e,t,n=0,s=1/0){this.ray=new Zs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new os,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return uh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uh),this}intersectObject(e,t=!0,n=[]){return Tc(e,this,n,t),n.sort(dh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Tc(e[s],this,n,t);return n.sort(dh),n}};function dh(i,e){return i.distance-e.distance}function Tc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Tc(r[o],e,t,!0)}}function Qc(i,e,t,n){let s=Df(n);switch(t){case Bc:return i*e;case zc:return i*e/s.components*s.byteLength;case qo:return i*e/s.components*s.byteLength;case Vc:return i*e*2/s.components*s.byteLength;case Yo:return i*e*2/s.components*s.byteLength;case kc:return i*e*3/s.components*s.byteLength;case rn:return i*e*4/s.components*s.byteLength;case $o:return i*e*4/s.components*s.byteLength;case Mr:case Sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case br:case Er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jo:case Qo:return Math.max(i,16)*Math.max(e,8)/4;case Zo:case Ko:return Math.max(i,8)*Math.max(e,8)/2;case jo:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ga:case _a:case xa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case va:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Df(i){switch(i){case mn:case Uc:return{byteLength:1,components:1};case gs:case Nc:case _s:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case ni:case Go:case Mn:return{byteLength:4,components:1};case Fc:case Oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Pu(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Nf(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){let _=u[d],y=u[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){let y=u[p];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Of=`#ifdef USE_ALPHAHASH
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
#endif`,Bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hf=`#ifdef USE_AOMAP
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
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$f=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zf=`#ifdef USE_IRIDESCENCE
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ap=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
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
}`,Ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ap=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Up=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Np=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xp=`#if defined( USE_POINTS_UV )
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
#endif`,qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sm=`#ifdef USE_NORMALMAP
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
#endif`,rm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,am=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Em=`#ifdef USE_SKINNING
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
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fm=`uniform sampler2D t2D;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Hm=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`uniform float scale;
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
}`,$m=`uniform vec3 diffuse;
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
}`,Zm=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Km=`#define LAMBERT
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
}`,Qm=`#define LAMBERT
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
}`,jm=`#define MATCAP
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
}`,eg=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,ng=`#define NORMAL
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
}`,ig=`#define PHONG
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
}`,sg=`#define PHONG
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
}`,rg=`#define STANDARD
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
}`,og=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,ag=`#define TOON
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
}`,cg=`#define TOON
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
}`,lg=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
}`,ug=`#include <common>
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
}`,dg=`uniform vec3 color;
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
}`,fg=`uniform float rotation;
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
}`,pg=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Ff,alphahash_pars_fragment:Of,alphamap_fragment:Bf,alphamap_pars_fragment:kf,alphatest_fragment:zf,alphatest_pars_fragment:Vf,aomap_fragment:Hf,aomap_pars_fragment:Gf,batching_pars_vertex:Wf,batching_vertex:Xf,begin_vertex:qf,beginnormal_vertex:Yf,bsdfs:$f,iridescence_fragment:Zf,bumpmap_pars_fragment:Jf,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:jf,clipping_planes_vertex:ep,color_fragment:tp,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:sp,common:rp,cube_uv_reflection_fragment:op,defaultnormal_vertex:ap,displacementmap_pars_vertex:cp,displacementmap_vertex:lp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:dp,colorspace_pars_fragment:fp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:_p,envmap_physical_pars_fragment:Cp,envmap_vertex:xp,fog_vertex:vp,fog_pars_vertex:yp,fog_fragment:Mp,fog_pars_fragment:Sp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:Ep,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Tp,lights_pars_begin:Ap,lights_toon_fragment:Rp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Pp,lights_phong_pars_fragment:Lp,lights_physical_fragment:Dp,lights_physical_pars_fragment:Up,lights_fragment_begin:Np,lights_fragment_maps:Fp,lights_fragment_end:Op,logdepthbuf_fragment:Bp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:zp,logdepthbuf_vertex:Vp,map_fragment:Hp,map_pars_fragment:Gp,map_particle_fragment:Wp,map_particle_pars_fragment:Xp,metalnessmap_fragment:qp,metalnessmap_pars_fragment:Yp,morphinstance_vertex:$p,morphcolor_vertex:Zp,morphnormal_vertex:Jp,morphtarget_pars_vertex:Kp,morphtarget_vertex:Qp,normal_fragment_begin:jp,normal_fragment_maps:em,normal_pars_fragment:tm,normal_pars_vertex:nm,normal_vertex:im,normalmap_pars_fragment:sm,clearcoat_normal_fragment_begin:rm,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:am,iridescence_pars_fragment:cm,opaque_fragment:lm,packing:hm,premultiplied_alpha_fragment:um,project_vertex:dm,dithering_fragment:fm,dithering_pars_fragment:pm,roughnessmap_fragment:mm,roughnessmap_pars_fragment:gm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:xm,shadowmap_vertex:vm,shadowmask_pars_fragment:ym,skinbase_vertex:Mm,skinning_pars_vertex:Sm,skinning_vertex:bm,skinnormal_vertex:Em,specularmap_fragment:wm,specularmap_pars_fragment:Tm,tonemapping_fragment:Am,tonemapping_pars_fragment:Cm,transmission_fragment:Rm,transmission_pars_fragment:Im,uv_pars_fragment:Pm,uv_pars_vertex:Lm,uv_vertex:Dm,worldpos_vertex:Um,background_vert:Nm,background_frag:Fm,backgroundCube_vert:Om,backgroundCube_frag:Bm,cube_vert:km,cube_frag:zm,depth_vert:Vm,depth_frag:Hm,distanceRGBA_vert:Gm,distanceRGBA_frag:Wm,equirect_vert:Xm,equirect_frag:qm,linedashed_vert:Ym,linedashed_frag:$m,meshbasic_vert:Zm,meshbasic_frag:Jm,meshlambert_vert:Km,meshlambert_frag:Qm,meshmatcap_vert:jm,meshmatcap_frag:eg,meshnormal_vert:tg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:og,meshtoon_vert:ag,meshtoon_frag:cg,points_vert:lg,points_frag:hg,shadow_vert:ug,shadow_frag:dg,sprite_vert:fg,sprite_frag:pg},pe={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Sn={basic:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Lt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Lt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Lt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Lt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Lt([pe.points,pe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Lt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Lt([pe.common,pe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Lt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Lt([pe.sprite,pe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Lt([pe.common,pe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Lt([pe.lights,pe.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Sn.physical={uniforms:Lt([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var ba={r:0,b:0,g:0},Di=new dn,mg=new ut;function gg(i,e,t,n,s,r,o){let a=new Ye(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function _(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function y(T){let S=!1,P=_(T);P===null?f(a,c):P&&P.isColor&&(f(P,1),S=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,S){let P=_(S);P&&(P.isCubeTexture||P.mapping===vr)?(h===void 0&&(h=new St(new Kn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Li(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Di.copy(S.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mg.makeRotationFromEuler(Di)),h.material.toneMapped=Je.getTransfer(P.colorSpace)!==tt,(u!==P||d!==P.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=P,d=P.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new St(new pn(2,2),new fn({name:"BackgroundMaterial",uniforms:Li(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Je.getTransfer(P.colorSpace)!==tt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||d!==P.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=P,d=P.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function f(T,S){T.getRGB(ba,$c(i)),n.buffers.color.setClear(ba.r,ba.g,ba.b,S,o)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,f(a,c)},render:y,addToRenderList:m,dispose:C}}function _g(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(x,w,L,N,k){let V=!1,z=u(N,L,w);r!==z&&(r=z,l(r.object)),V=p(x,N,L,k),V&&_(x,N,L,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,S(x,w,L,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,w,L){let N=L.wireframe===!0,k=n[x.id];k===void 0&&(k={},n[x.id]=k);let V=k[w.id];V===void 0&&(V={},k[w.id]=V);let z=V[N];return z===void 0&&(z=d(c()),V[N]=z),z}function d(x){let w=[],L=[],N=[];for(let k=0;k<t;k++)w[k]=0,L[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:N,object:x,attributes:{},index:null}}function p(x,w,L,N){let k=r.attributes,V=w.attributes,z=0,W=L.getAttributes();for(let H in W)if(W[H].location>=0){let fe=k[H],xe=V[H];if(xe===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),fe===void 0||fe.attribute!==xe||xe&&fe.data!==xe.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function _(x,w,L,N){let k={},V=w.attributes,z=0,W=L.getAttributes();for(let H in W)if(W[H].location>=0){let fe=V[H];fe===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(fe=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(fe=x.instanceColor));let xe={};xe.attribute=fe,fe&&fe.data&&(xe.data=fe.data),k[H]=xe,z++}r.attributes=k,r.attributesNum=z,r.index=N}function y(){let x=r.newAttributes;for(let w=0,L=x.length;w<L;w++)x[w]=0}function m(x){f(x,0)}function f(x,w){let L=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;L[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),k[x]!==w&&(i.vertexAttribDivisor(x,w),k[x]=w)}function C(){let x=r.newAttributes,w=r.enabledAttributes;for(let L=0,N=w.length;L<N;L++)w[L]!==x[L]&&(i.disableVertexAttribArray(L),w[L]=0)}function T(x,w,L,N,k,V,z){z===!0?i.vertexAttribIPointer(x,w,L,k,V):i.vertexAttribPointer(x,w,L,N,k,V)}function S(x,w,L,N){y();let k=N.attributes,V=L.getAttributes(),z=w.defaultAttributeValues;for(let W in V){let H=V[W];if(H.location>=0){let ne=k[W];if(ne===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor)),ne!==void 0){let fe=ne.normalized,xe=ne.itemSize,Ue=e.get(ne);if(Ue===void 0)continue;let Oe=Ue.buffer,Ze=Ue.type,ke=Ue.bytesPerElement,$=Ze===i.INT||Ze===i.UNSIGNED_INT||ne.gpuType===Go;if(ne.isInterleavedBufferAttribute){let te=ne.data,ve=te.stride,Ce=ne.offset;if(te.isInstancedInterleavedBuffer){for(let be=0;be<H.locationSize;be++)f(H.location+be,te.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let be=0;be<H.locationSize;be++)m(H.location+be);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let be=0;be<H.locationSize;be++)T(H.location+be,xe/H.locationSize,Ze,fe,ve*ke,(Ce+xe/H.locationSize*be)*ke,$)}else{if(ne.isInstancedBufferAttribute){for(let te=0;te<H.locationSize;te++)f(H.location+te,ne.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let te=0;te<H.locationSize;te++)m(H.location+te);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let te=0;te<H.locationSize;te++)T(H.location+te,xe/H.locationSize,Ze,fe,xe*ke,xe/H.locationSize*te*ke,$)}}else if(z!==void 0){let fe=z[W];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(H.location,fe);break;case 3:i.vertexAttrib3fv(H.location,fe);break;case 4:i.vertexAttrib4fv(H.location,fe);break;default:i.vertexAttrib1fv(H.location,fe)}}}}C()}function P(){A();for(let x in n){let w=n[x];for(let L in w){let N=w[L];for(let k in N)h(N[k].object),delete N[k];delete w[L]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;let w=n[x.id];for(let L in w){let N=w[L];for(let k in N)h(N[k].object),delete N[k];delete w[L]}delete n[x.id]}function b(x){for(let w in n){let L=n[w];if(L[x.id]===void 0)continue;let N=L[x.id];for(let k in N)h(N[k].object),delete N[k];delete L[x.id]}}function A(){g(),o=!0,r!==s&&(r=s,l(r.object))}function g(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:g,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:m,disableUnusedAttributes:C}}function xg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let y=0;y<u;y++)_+=h[y]*d[y];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function vg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==rn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let A=b===_s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==mn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Mn&&!A)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:C,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:P,maxSamples:R}}function yg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new pt,a=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let _=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{let C=r?0:n,T=C*4,S=f.clippingState||null;c.value=S,S=h(_,d,T,p);for(let P=0;P!==T;++P)S[P]=t[P];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,_){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,_!==!0||m===null){let f=p+y*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,S=p;T!==y;++T,S+=4)o.copy(u[T]).applyMatrix4(C,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Mg(i){let e=new WeakMap;function t(o,a){return a===zo?o.mapping=Ri:a===Vo&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===zo||a===Vo)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new po(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ms=4,cu=[.125,.215,.35,.446,.526,.582],Fi=20,jc=new Ci,lu=new Ye,el=null,tl=0,nl=0,il=!1,Ni=(1+Math.sqrt(5))/2,ys=1/Ni,hu=[new D(-Ni,ys,0),new D(Ni,ys,0),new D(-ys,0,Ni),new D(ys,0,Ni),new D(0,Ni,-ys),new D(0,Ni,ys),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Sg=new D,Ta=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Sg}=r;el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(el,tl,nl),this._renderer.xr.enabled=il,e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),el=this._renderer.getRenderTarget(),tl=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:_s,format:rn,colorSpace:Si,depthBuffer:!1},s=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bg(r)),this._blurMaterial=Eg(r,e,t)}return s}_compileMaterial(e){let t=new St(this._lodPlanes[0],e);this._renderer.compile(t,jc)}_sceneToCubeUV(e,t,n,s,r){let c=new Tt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(lu),u.toneMapping=Fn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let y=new Zt({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),m=new St(new Kn,y),f=!1,C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,f=!0):(y.color.copy(lu),f=!0);for(let T=0;T<6;T++){let S=T%3;S===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[T],r.y,r.z)):S===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[T]));let P=this._cubeSize;Ea(s,S*P,T>2?P:0,P,P),u.setRenderTarget(s),f&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=C}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ri||e.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ea(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,jc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hu[(s-r-1)%hu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new St(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),y=r/_,m=isFinite(r)?1+Math.floor(h*y):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);let f=[],C=0;for(let b=0;b<Fi;++b){let A=b/y,g=Math.exp(-A*A/2);f.push(g),b===0?C+=g:b<m&&(C+=2*g)}for(let b=0;b<f.length;b++)f[b]=f[b]/C;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;let S=this._sizeLods[s],P=3*S*(s>T-Ms?s-T+Ms:0),R=4*(this._cubeSize-S);Ea(t,P,R,3*S,2*S),c.setRenderTarget(t),c.render(u,jc)}};function bg(i){let e=[],t=[],n=[],s=i,r=i-Ms+1+cu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ms?c=cu[o-i+Ms-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,y=3,m=2,f=1,C=new Float32Array(y*_*p),T=new Float32Array(m*_*p),S=new Float32Array(f*_*p);for(let R=0;R<p;R++){let b=R%3*2/3-1,A=R>2?0:-1,g=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];C.set(g,y*_*R),T.set(d,m*_*R);let x=[R,R,R,R,R,R];S.set(x,f*_*R)}let P=new zt;P.setAttribute("position",new $t(C,y)),P.setAttribute("uv",new $t(T,m)),P.setAttribute("faceIndex",new $t(S,f)),e.push(P),s>Ms&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uu(i,e,t){let n=new _n(i,e,t);return n.texture.mapping=vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Eg(i,e,t){let n=new Float32Array(Fi),s=new D(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function du(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function fu(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function wg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===zo||c===Vo,h=c===Ri||c===Ii;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Ta(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ta(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Tg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&is("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ag(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,_=u.attributes.position,y=0;if(p!==null){let C=p.array;y=p.version;for(let T=0,S=C.length;T<S;T+=3){let P=C[T+0],R=C[T+1],b=C[T+2];d.push(P,R,R,b,b,P)}}else if(_!==void 0){let C=_.array;y=_.version;for(let T=0,S=C.length/3-1;T<S;T+=3){let P=T+0,R=T+1,b=T+2;d.push(P,R,R,b,b,P)}}else return;let m=new(Yc(d)?Ks:Js)(d,1);m.version=y;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Cg(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*o,_),t.update(p,n,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function u(d,p,_,y){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,_);let f=0;for(let C=0;C<_;C++)f+=p[C]*y[C];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Rg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ig(i,e,t){let n=new WeakMap,s=new et;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let g=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",g)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],T=0;p===!0&&(T=1),_===!0&&(T=2),y===!0&&(T=3);let S=a.attributes.position.count*T,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let R=new Float32Array(S*P*4*u),b=new $s(R,S,P,u);b.type=Mn,b.needsUpdate=!0;let A=T*4;for(let x=0;x<u;x++){let w=m[x],L=f[x],N=C[x],k=S*P*4*x;for(let V=0;V<w.count;V++){let z=V*A;p===!0&&(s.fromBufferAttribute(w,V),R[k+z+0]=s.x,R[k+z+1]=s.y,R[k+z+2]=s.z,R[k+z+3]=0),_===!0&&(s.fromBufferAttribute(L,V),R[k+z+4]=s.x,R[k+z+5]=s.y,R[k+z+6]=s.z,R[k+z+7]=0),y===!0&&(s.fromBufferAttribute(N,V),R[k+z+8]=s.x,R[k+z+9]=s.y,R[k+z+10]=s.z,R[k+z+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new le(S,P)},n.set(a,d),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Pg(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Lu=new kt,pu=new er(1,1),Du=new $s,Uu=new uo,Nu=new js,mu=[],gu=[],_u=new Float32Array(16),xu=new Float32Array(9),vu=new Float32Array(4);function Es(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=mu[s];if(r===void 0&&(r=new Float32Array(s),mu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Aa(i,e){let t=gu[e];t===void 0&&(t=new Int32Array(e),gu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function Fg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),Et(t,n)}}function Og(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),Et(t,n)}}function Bg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(bt(t,n))return;_u.set(n),i.uniformMatrix4fv(this.addr,!1,_u),Et(t,n)}}function kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function Gg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function Yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pu.compareFunction=Gc,r=pu):r=Lu,t.setTexture2D(e||r,s)}function $g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Uu,s)}function Zg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Nu,s)}function Jg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Du,s)}function Kg(i){switch(i){case 5126:return Lg;case 35664:return Dg;case 35665:return Ug;case 35666:return Ng;case 35674:return Fg;case 35675:return Og;case 35676:return Bg;case 5124:case 35670:return kg;case 35667:case 35671:return zg;case 35668:case 35672:return Vg;case 35669:case 35673:return Hg;case 5125:return Gg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function Qg(i,e){i.uniform1fv(this.addr,e)}function jg(i,e){let t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function e0(i,e){let t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function t0(i,e){let t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function n0(i,e){let t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function i0(i,e){let t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function s0(i,e){let t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r0(i,e){i.uniform1iv(this.addr,e)}function o0(i,e){i.uniform2iv(this.addr,e)}function a0(i,e){i.uniform3iv(this.addr,e)}function c0(i,e){i.uniform4iv(this.addr,e)}function l0(i,e){i.uniform1uiv(this.addr,e)}function h0(i,e){i.uniform2uiv(this.addr,e)}function u0(i,e){i.uniform3uiv(this.addr,e)}function d0(i,e){i.uniform4uiv(this.addr,e)}function f0(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Lu,r[o])}function p0(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Uu,r[o])}function m0(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Nu,r[o])}function g0(i,e,t){let n=this.cache,s=e.length,r=Aa(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Du,r[o])}function _0(i){switch(i){case 5126:return Qg;case 35664:return jg;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return o0;case 35668:case 35672:return a0;case 35669:case 35673:return c0;case 5125:return l0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}var rl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kg(t.type)}},ol=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_0(t.type)}},al=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},sl=/(\w+)(\])?(\[|\.)?/g;function yu(i,e){i.seq.push(e),i.map[e.id]=e}function x0(i,e,t){let n=i.name,s=n.length;for(sl.lastIndex=0;;){let r=sl.exec(n),o=sl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){yu(t,l===void 0?new rl(a,i,e):new ol(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new al(a),yu(t,u)),t=u}}}var Ss=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);x0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Mu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var v0=37297,y0=0;function M0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Su=new Ve;function S0(i){Je._getMatrix(Su,Je.workingColorSpace,i);let e=`mat3( ${Su.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Xs:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+M0(i.getShaderSource(e),a)}else return r}function b0(i,e){let t=S0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function E0(i,e){let t;switch(e){case Fh:t="Linear";break;case Oh:t="Reinhard";break;case Bh:t="Cineon";break;case ms:t="ACESFilmic";break;case zh:t="AgX";break;case Vh:t="Neutral";break;case kh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wa=new D;function w0(){Je.getLuminanceCoefficients(wa);let i=wa.x.toFixed(4),e=wa.y.toFixed(4),t=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wr).join(`
`)}function A0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wr(i){return i!==""}function Eu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var R0=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(R0,P0)}var I0=new Map;function P0(i,e){let t=Xe[e];if(t===void 0){let n=I0.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cl(t)}var L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tu(i){return i.replace(L0,D0)}function D0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===mh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function N0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ri:case Ii:e="ENVMAP_TYPE_CUBE";break;case vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function O0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lc:e="ENVMAP_BLENDING_MULTIPLY";break;case Uh:e="ENVMAP_BLENDING_MIX";break;case Nh:e="ENVMAP_BLENDING_ADD";break}return e}function B0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function k0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=U0(t),l=N0(t),h=F0(t),u=O0(t),d=B0(t),p=T0(t),_=A0(r),y=s.createProgram(),m,f,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(wr).join(`
`),f.length>0&&(f+=`
`)):(m=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),f=[Au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Fn?E0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,b0("linearToOutputTexel",t.outputColorSpace),w0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=cl(o),o=Eu(o,t),o=wu(o,t),a=cl(a),a=Eu(a,t),a=wu(a,t),o=Tu(o),a=Tu(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=C+m+o,S=C+f+a,P=Mu(s,s.VERTEX_SHADER,T),R=Mu(s,s.FRAGMENT_SHADER,S);s.attachShader(y,P),s.attachShader(y,R),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function b(w){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(P)||"",k=s.getShaderInfoLog(R)||"",V=L.trim(),z=N.trim(),W=k.trim(),H=!0,ne=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,P,R);else{let fe=bu(s,P,"vertex"),xe=bu(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+fe+`
`+xe)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(z===""||W==="")&&(ne=!1);ne&&(w.diagnostics={runnable:H,programLog:V,vertexShader:{log:z,prefix:m},fragmentShader:{log:W,prefix:f}})}s.deleteShader(P),s.deleteShader(R),A=new Ss(s,y),g=C0(s,y)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let g;this.getAttributes=function(){return g===void 0&&b(this),g};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,v0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=R,this}var z0=0,ll=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new hl(e),t.set(e,n)),n}},hl=class{constructor(e){this.id=z0++,this.code=e,this.usedTimes=0}};function V0(i,e,t,n,s,r,o){let a=new os,c=new ll,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(g){return l.add(g),g===0?"uv":`uv${g}`}function m(g,x,w,L,N){let k=L.fog,V=N.geometry,z=g.isMeshStandardMaterial?L.environment:null,W=(g.isMeshStandardMaterial?t:e).get(g.envMap||z),H=W&&W.mapping===vr?W.image.height:null,ne=_[g.type];g.precision!==null&&(p=s.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));let fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=fe!==void 0?fe.length:0,Ue=0;V.morphAttributes.position!==void 0&&(Ue=1),V.morphAttributes.normal!==void 0&&(Ue=2),V.morphAttributes.color!==void 0&&(Ue=3);let Oe,Ze,ke,$;if(ne){let je=Sn[ne];Oe=je.vertexShader,Ze=je.fragmentShader}else Oe=g.vertexShader,Ze=g.fragmentShader,c.update(g),ke=c.getVertexShaderID(g),$=c.getFragmentShaderID(g);let te=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),Ce=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,He=!!g.map,Ge=!!g.matcap,I=!!W,ee=!!g.aoMap,Q=!!g.lightMap,Z=!!g.bumpMap,J=!!g.normalMap,ue=!!g.displacementMap,ie=!!g.emissiveMap,he=!!g.metalnessMap,Le=!!g.roughnessMap,Ne=g.anisotropy>0,M=g.clearcoat>0,v=g.dispersion>0,U=g.iridescence>0,G=g.sheen>0,K=g.transmission>0,Y=Ne&&!!g.anisotropyMap,Me=M&&!!g.clearcoatMap,ae=M&&!!g.clearcoatNormalMap,ye=M&&!!g.clearcoatRoughnessMap,Te=U&&!!g.iridescenceMap,se=U&&!!g.iridescenceThicknessMap,_e=G&&!!g.sheenColorMap,Fe=G&&!!g.sheenRoughnessMap,Re=!!g.specularMap,me=!!g.specularColorMap,We=!!g.specularIntensityMap,F=K&&!!g.transmissionMap,ce=K&&!!g.thicknessMap,de=!!g.gradientMap,Ee=!!g.alphaMap,re=g.alphaTest>0,j=!!g.alphaHash,Ae=!!g.extensions,ze=Fn;g.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ze=i.toneMapping);let rt={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:Oe,fragmentShader:Ze,defines:g.defines,customVertexShaderID:ke,customFragmentShaderID:$,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Si,alphaToCoverage:!!g.alphaToCoverage,map:He,matcap:Ge,envMap:I,envMapMode:I&&W.mapping,envMapCubeUVHeight:H,aoMap:ee,lightMap:Q,bumpMap:Z,normalMap:J,displacementMap:d&&ue,emissiveMap:ie,normalMapObjectSpace:J&&g.normalMapType===Xh,normalMapTangentSpace:J&&g.normalMapType===Hc,metalnessMap:he,roughnessMap:Le,anisotropy:Ne,anisotropyMap:Y,clearcoat:M,clearcoatMap:Me,clearcoatNormalMap:ae,clearcoatRoughnessMap:ye,dispersion:v,iridescence:U,iridescenceMap:Te,iridescenceThicknessMap:se,sheen:G,sheenColorMap:_e,sheenRoughnessMap:Fe,specularMap:Re,specularColorMap:me,specularIntensityMap:We,transmission:K,transmissionMap:F,thicknessMap:ce,gradientMap:de,opaque:g.transparent===!1&&g.blending===yi&&g.alphaToCoverage===!1,alphaMap:Ee,alphaTest:re,alphaHash:j,combine:g.combine,mapUv:He&&y(g.map.channel),aoMapUv:ee&&y(g.aoMap.channel),lightMapUv:Q&&y(g.lightMap.channel),bumpMapUv:Z&&y(g.bumpMap.channel),normalMapUv:J&&y(g.normalMap.channel),displacementMapUv:ue&&y(g.displacementMap.channel),emissiveMapUv:ie&&y(g.emissiveMap.channel),metalnessMapUv:he&&y(g.metalnessMap.channel),roughnessMapUv:Le&&y(g.roughnessMap.channel),anisotropyMapUv:Y&&y(g.anisotropyMap.channel),clearcoatMapUv:Me&&y(g.clearcoatMap.channel),clearcoatNormalMapUv:ae&&y(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&y(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&y(g.iridescenceMap.channel),iridescenceThicknessMapUv:se&&y(g.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&y(g.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&y(g.sheenRoughnessMap.channel),specularMapUv:Re&&y(g.specularMap.channel),specularColorMapUv:me&&y(g.specularColorMap.channel),specularIntensityMapUv:We&&y(g.specularIntensityMap.channel),transmissionMapUv:F&&y(g.transmissionMap.channel),thicknessMapUv:ce&&y(g.thicknessMap.channel),alphaMapUv:Ee&&y(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(J||Ne),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(He||Ee),fog:!!k,useFog:g.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ue,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:He&&g.map.isVideoTexture===!0&&Je.getTransfer(g.map.colorSpace)===tt,decodeVideoTextureEmissive:ie&&g.emissiveMap.isVideoTexture===!0&&Je.getTransfer(g.emissiveMap.colorSpace)===tt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===yn,flipSided:g.side===Ft,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ae&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&g.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function f(g){let x=[];if(g.shaderID?x.push(g.shaderID):(x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID)),g.defines!==void 0)for(let w in g.defines)x.push(w),x.push(g.defines[w]);return g.isRawShaderMaterial===!1&&(C(x,g),T(x,g),x.push(i.outputColorSpace)),x.push(g.customProgramCacheKey),x.join()}function C(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapCubeUVHeight),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.morphAttributeCount),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)}function T(g,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),g.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),g.push(a.mask)}function S(g){let x=_[g.type],w;if(x){let L=Sn[x];w=nu.clone(L.uniforms)}else w=g.uniforms;return w}function P(g,x){let w;for(let L=0,N=h.length;L<N;L++){let k=h[L];if(k.cacheKey===x){w=k,++w.usedTimes;break}}return w===void 0&&(w=new k0(i,x,g,r),h.push(w)),w}function R(g){if(--g.usedTimes===0){let x=h.indexOf(g);h[x]=h[h.length-1],h.pop(),g.destroy()}}function b(g){c.remove(g)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:P,releaseProgram:R,releaseShaderCache:b,programs:h,dispose:A}}function H0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function G0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ru(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,_,y,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:y,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=y,f.group=m),e++,f}function a(u,d,p,_,y,m){let f=o(u,d,p,_,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,_,y,m){let f=o(u,d,p,_,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||G0),n.length>1&&n.sort(d||Cu),s.length>1&&s.sort(d||Cu)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function W0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ru,i.set(n,[o])):s>=r.length?(o=new Ru,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function X0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Ye};break;case"SpotLight":t={position:new D,direction:new D,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function q0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Y0=0;function $0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Z0(i){let e=new X0,t=q0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new ut,o=new ut;function a(l){let h=0,u=0,d=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let p=0,_=0,y=0,m=0,f=0,C=0,T=0,S=0,P=0,R=0,b=0;l.sort($0);for(let g=0,x=l.length;g<x;g++){let w=l[g],L=w.color,N=w.intensity,k=w.distance,V=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=L.r*N,u+=L.g*N,d+=L.b*N;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],N);b++}else if(w.isDirectionalLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let W=w.shadow,H=t.get(w);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=w.shadow.matrix,C++}n.directional[p]=z,p++}else if(w.isSpotLight){let z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(L).multiplyScalar(N),z.distance=k,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[y]=z;let W=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,W.updateMatrices(w),w.castShadow&&R++),n.spotLightMatrix[y]=W.matrix,w.castShadow){let H=t.get(w);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=V,S++}y++}else if(w.isRectAreaLight){let z=e.get(w);z.color.copy(L).multiplyScalar(N),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=z,m++}else if(w.isPointLight){let z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){let W=w.shadow,H=t.get(w);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=V,n.pointShadowMatrix[_]=w.shadow.matrix,T++}n.point[_]=z,_++}else if(w.isHemisphereLight){let z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(N),z.groundColor.copy(w.groundColor).multiplyScalar(N),n.hemi[f]=z,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==p||A.pointLength!==_||A.spotLength!==y||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==C||A.numPointShadows!==T||A.numSpotShadows!==S||A.numSpotMaps!==P||A.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=b,A.directionalLength=p,A.pointLength=_,A.spotLength=y,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=C,A.numPointShadows=T,A.numSpotShadows=S,A.numSpotMaps=P,A.numLightProbes=b,n.version=Y0++)}function c(l,h){let u=0,d=0,p=0,_=0,y=0,m=h.matrixWorldInverse;for(let f=0,C=l.length;f<C;f++){let T=l[f];if(T.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(T.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(T.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function Iu(i){let e=new Z0(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function J0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Iu(i),e.set(s,[a])):r>=o.length?(a=new Iu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q0=`uniform sampler2D shadow_pass;
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
}`;function j0(i,e,t){let n=new cs,s=new le,r=new le,o=new et,a=new yo({depthPacking:Wh}),c=new Mo,l={},h=t.maxTextureSize,u={[Pn]:Ft,[Ft]:Pn,[yn]:yn},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:K0,fragmentShader:Q0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new zt;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new St(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let f=this.type;this.render=function(R,b,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let g=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Nn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=f!==vn&&this.type===vn,k=f===vn&&this.type!==vn;for(let V=0,z=R.length;V<z;V++){let W=R[V],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let ne=H.getFrameExtents();if(s.multiply(ne),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,H.mapSize.y=r.y)),H.map===null||N===!0||k===!0){let xe=this.type!==vn?{minFilter:nn,magFilter:nn}:{};H.map!==null&&H.map.dispose(),H.map=new _n(s.x,s.y,xe),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let fe=H.getViewportCount();for(let xe=0;xe<fe;xe++){let Ue=H.getViewport(xe);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),L.viewport(o),H.updateMatrices(W,xe),n=H.getFrustum(),S(b,A,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===vn&&C(H,A),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(g,x,w)};function C(R,b){let A=e.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new _n(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(b,null,A,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(b,null,A,p,y,null)}function T(R,b,A,g){let x=null,w=A.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)x=w;else if(x=A.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let L=x.uuid,N=b.uuid,k=l[L];k===void 0&&(k={},l[L]=k);let V=k[N];V===void 0&&(V=x.clone(),k[N]=V,b.addEventListener("dispose",P)),x=V}if(x.visible=b.visible,x.wireframe=b.wireframe,g===vn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let L=i.properties.get(x);L.light=A}return x}function S(R,b,A,g,x){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===vn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,R.matrixWorld);let N=e.update(R),k=R.material;if(Array.isArray(k)){let V=N.groups;for(let z=0,W=V.length;z<W;z++){let H=V[z],ne=k[H.materialIndex];if(ne&&ne.visible){let fe=T(R,ne,g,x);R.onBeforeShadow(i,R,b,A,N,fe,H),i.renderBufferDirect(A,null,N,fe,R,H),R.onAfterShadow(i,R,b,A,N,fe,H)}}}else if(k.visible){let V=T(R,k,g,x);R.onBeforeShadow(i,R,b,A,N,V,null),i.renderBufferDirect(A,null,N,V,R,null),R.onAfterShadow(i,R,b,A,N,V,null)}}let L=R.children;for(let N=0,k=L.length;N<k;N++)S(L[N],b,A,g,x)}function P(R){R.target.removeEventListener("dispose",P);for(let A in l){let g=l[A],x=R.target.uuid;x in g&&(g[x].dispose(),delete g[x])}}}var e_={[Do]:Uo,[No]:Bo,[Fo]:ko,[Mi]:Oo,[Uo]:Do,[Bo]:No,[ko]:Fo,[Oo]:Mi};function t_(i,e){function t(){let F=!1,ce=new et,de=null,Ee=new et(0,0,0,0);return{setMask:function(re){de!==re&&!F&&(i.colorMask(re,re,re,re),de=re)},setLocked:function(re){F=re},setClear:function(re,j,Ae,ze,rt){rt===!0&&(re*=ze,j*=ze,Ae*=ze),ce.set(re,j,Ae,ze),Ee.equals(ce)===!1&&(i.clearColor(re,j,Ae,ze),Ee.copy(ce))},reset:function(){F=!1,de=null,Ee.set(-1,0,0,0)}}}function n(){let F=!1,ce=!1,de=null,Ee=null,re=null;return{setReversed:function(j){if(ce!==j){let Ae=e.get("EXT_clip_control");j?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ce=j;let ze=re;re=null,this.setClear(ze)}},getReversed:function(){return ce},setTest:function(j){j?te(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(j){de!==j&&!F&&(i.depthMask(j),de=j)},setFunc:function(j){if(ce&&(j=e_[j]),Ee!==j){switch(j){case Do:i.depthFunc(i.NEVER);break;case Uo:i.depthFunc(i.ALWAYS);break;case No:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case Bo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=j}},setLocked:function(j){F=j},setClear:function(j){re!==j&&(ce&&(j=1-j),i.clearDepth(j),re=j)},reset:function(){F=!1,de=null,Ee=null,re=null,ce=!1}}}function s(){let F=!1,ce=null,de=null,Ee=null,re=null,j=null,Ae=null,ze=null,rt=null;return{setTest:function(je){F||(je?te(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(je){ce!==je&&!F&&(i.stencilMask(je),ce=je)},setFunc:function(je,En,gn){(de!==je||Ee!==En||re!==gn)&&(i.stencilFunc(je,En,gn),de=je,Ee=En,re=gn)},setOp:function(je,En,gn){(j!==je||Ae!==En||ze!==gn)&&(i.stencilOp(je,En,gn),j=je,Ae=En,ze=gn)},setLocked:function(je){F=je},setClear:function(je){rt!==je&&(i.clearStencil(je),rt=je)},reset:function(){F=!1,ce=null,de=null,Ee=null,re=null,j=null,Ae=null,ze=null,rt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],_=null,y=!1,m=null,f=null,C=null,T=null,S=null,P=null,R=null,b=new Ye(0,0,0),A=0,g=!1,x=null,w=null,L=null,N=null,k=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,W=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=W>=2);let ne=null,fe={},xe=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),Oe=new et().fromArray(xe),Ze=new et().fromArray(Ue);function ke(F,ce,de,Ee){let re=new Uint8Array(4),j=i.createTexture();i.bindTexture(F,j),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<de;Ae++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,re):i.texImage2D(ce+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,re);return j}let $={};$[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(Mi),Z(!1),J(Ac),te(i.CULL_FACE),ee(Nn);function te(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function ve(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ce(F,ce){return u[F]!==ce?(i.bindFramebuffer(F,ce),u[F]=ce,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function be(F,ce){let de=p,Ee=!1;if(F){de=d.get(ce),de===void 0&&(de=[],d.set(ce,de));let re=F.textures;if(de.length!==re.length||de[0]!==i.COLOR_ATTACHMENT0){for(let j=0,Ae=re.length;j<Ae;j++)de[j]=i.COLOR_ATTACHMENT0+j;de.length=re.length,Ee=!0}}else de[0]!==i.BACK&&(de[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(de)}function He(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let Ge={[Zn]:i.FUNC_ADD,[_h]:i.FUNC_SUBTRACT,[xh]:i.FUNC_REVERSE_SUBTRACT};Ge[vh]=i.MIN,Ge[yh]=i.MAX;let I={[Mh]:i.ZERO,[Sh]:i.ONE,[bh]:i.SRC_COLOR,[so]:i.SRC_ALPHA,[Rh]:i.SRC_ALPHA_SATURATE,[Ah]:i.DST_COLOR,[wh]:i.DST_ALPHA,[Eh]:i.ONE_MINUS_SRC_COLOR,[ro]:i.ONE_MINUS_SRC_ALPHA,[Ch]:i.ONE_MINUS_DST_COLOR,[Th]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Ph]:i.ONE_MINUS_CONSTANT_COLOR,[Lh]:i.CONSTANT_ALPHA,[Dh]:i.ONE_MINUS_CONSTANT_ALPHA};function ee(F,ce,de,Ee,re,j,Ae,ze,rt,je){if(F===Nn){y===!0&&(ve(i.BLEND),y=!1);return}if(y===!1&&(te(i.BLEND),y=!0),F!==gh){if(F!==m||je!==g){if((f!==Zn||S!==Zn)&&(i.blendEquation(i.FUNC_ADD),f=Zn,S=Zn),je)switch(F){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rc:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ic:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}C=null,T=null,P=null,R=null,b.set(0,0,0),A=0,m=F,g=je}return}re=re||ce,j=j||de,Ae=Ae||Ee,(ce!==f||re!==S)&&(i.blendEquationSeparate(Ge[ce],Ge[re]),f=ce,S=re),(de!==C||Ee!==T||j!==P||Ae!==R)&&(i.blendFuncSeparate(I[de],I[Ee],I[j],I[Ae]),C=de,T=Ee,P=j,R=Ae),(ze.equals(b)===!1||rt!==A)&&(i.blendColor(ze.r,ze.g,ze.b,rt),b.copy(ze),A=rt),m=F,g=!1}function Q(F,ce){F.side===yn?ve(i.CULL_FACE):te(i.CULL_FACE);let de=F.side===Ft;ce&&(de=!de),Z(de),F.blending===yi&&F.transparent===!1?ee(Nn):ee(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let Ee=F.stencilWrite;a.setTest(Ee),Ee&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(F){x!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),x=F)}function J(F){F!==fh?(te(i.CULL_FACE),F!==w&&(F===Ac?i.cullFace(i.BACK):F===ph?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),w=F}function ue(F){F!==L&&(z&&i.lineWidth(F),L=F)}function ie(F,ce,de){F?(te(i.POLYGON_OFFSET_FILL),(N!==ce||k!==de)&&(i.polygonOffset(ce,de),N=ce,k=de)):ve(i.POLYGON_OFFSET_FILL)}function he(F){F?te(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function Le(F){F===void 0&&(F=i.TEXTURE0+V-1),ne!==F&&(i.activeTexture(F),ne=F)}function Ne(F,ce,de){de===void 0&&(ne===null?de=i.TEXTURE0+V-1:de=ne);let Ee=fe[de];Ee===void 0&&(Ee={type:void 0,texture:void 0},fe[de]=Ee),(Ee.type!==F||Ee.texture!==ce)&&(ne!==de&&(i.activeTexture(de),ne=de),i.bindTexture(F,ce||$[F]),Ee.type=F,Ee.texture=ce)}function M(){let F=fe[ne];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(F){Oe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Oe.copy(F))}function Fe(F){Ze.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ze.copy(F))}function Re(F,ce){let de=l.get(ce);de===void 0&&(de=new WeakMap,l.set(ce,de));let Ee=de.get(F);Ee===void 0&&(Ee=i.getUniformBlockIndex(ce,F.name),de.set(F,Ee))}function me(F,ce){let Ee=l.get(ce).get(F);c.get(ce)!==Ee&&(i.uniformBlockBinding(ce,Ee,F.__bindingPointIndex),c.set(ce,Ee))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ne=null,fe={},u={},d=new WeakMap,p=[],_=null,y=!1,m=null,f=null,C=null,T=null,S=null,P=null,R=null,b=new Ye(0,0,0),A=0,g=!1,x=null,w=null,L=null,N=null,k=null,Oe.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:ve,bindFramebuffer:Ce,drawBuffers:be,useProgram:He,setBlending:ee,setMaterial:Q,setFlipSided:Z,setCullFace:J,setLineWidth:ue,setPolygonOffset:ie,setScissorTest:he,activeTexture:Le,bindTexture:Ne,unbindTexture:M,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Te,texImage3D:se,updateUBOMapping:Re,uniformBlockBinding:me,texStorage2D:ae,texStorage3D:ye,texSubImage2D:G,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:Me,scissor:_e,viewport:Fe,reset:We}}function n_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new le,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,v){return p?new OffscreenCanvas(M,v):Ys("canvas")}function y(M,v,U){let G=1,K=Ne(M);if((K.width>U||K.height>U)&&(G=U/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let Y=Math.floor(G*K.width),Me=Math.floor(G*K.height);u===void 0&&(u=_(Y,Me));let ae=v?_(Y,Me):u;return ae.width=Y,ae.height=Me,ae.getContext("2d").drawImage(M,0,0,Y,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+Me+")."),ae}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function m(M){return M.generateMipmaps}function f(M){i.generateMipmap(M)}function C(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(M,v,U,G,K=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Y=v;if(v===i.RED&&(U===i.FLOAT&&(Y=i.R32F),U===i.HALF_FLOAT&&(Y=i.R16F),U===i.UNSIGNED_BYTE&&(Y=i.R8)),v===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.R8UI),U===i.UNSIGNED_SHORT&&(Y=i.R16UI),U===i.UNSIGNED_INT&&(Y=i.R32UI),U===i.BYTE&&(Y=i.R8I),U===i.SHORT&&(Y=i.R16I),U===i.INT&&(Y=i.R32I)),v===i.RG&&(U===i.FLOAT&&(Y=i.RG32F),U===i.HALF_FLOAT&&(Y=i.RG16F),U===i.UNSIGNED_BYTE&&(Y=i.RG8)),v===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RG8UI),U===i.UNSIGNED_SHORT&&(Y=i.RG16UI),U===i.UNSIGNED_INT&&(Y=i.RG32UI),U===i.BYTE&&(Y=i.RG8I),U===i.SHORT&&(Y=i.RG16I),U===i.INT&&(Y=i.RG32I)),v===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),U===i.UNSIGNED_INT&&(Y=i.RGB32UI),U===i.BYTE&&(Y=i.RGB8I),U===i.SHORT&&(Y=i.RGB16I),U===i.INT&&(Y=i.RGB32I)),v===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),U===i.UNSIGNED_INT&&(Y=i.RGBA32UI),U===i.BYTE&&(Y=i.RGBA8I),U===i.SHORT&&(Y=i.RGBA16I),U===i.INT&&(Y=i.RGBA32I)),v===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),v===i.RGBA){let Me=K?Xs:Je.getTransfer(G);U===i.FLOAT&&(Y=i.RGBA32F),U===i.HALF_FLOAT&&(Y=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Y=Me===tt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(M,v){let U;return M?v===null||v===ni||v===xs?U=i.DEPTH24_STENCIL8:v===Mn?U=i.DEPTH32F_STENCIL8:v===gs&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ni||v===xs?U=i.DEPTH_COMPONENT24:v===Mn?U=i.DEPTH_COMPONENT32F:v===gs&&(U=i.DEPTH_COMPONENT16),U}function P(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==nn&&M.minFilter!==un?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function R(M){let v=M.target;v.removeEventListener("dispose",R),A(v),v.isVideoTexture&&h.delete(v)}function b(M){let v=M.target;v.removeEventListener("dispose",b),x(v)}function A(M){let v=n.get(M);if(v.__webglInit===void 0)return;let U=M.source,G=d.get(U);if(G){let K=G[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&g(M),Object.keys(G).length===0&&d.delete(U)}n.remove(M)}function g(M){let v=n.get(M);i.deleteTexture(v.__webglTexture);let U=M.source,G=d.get(U);delete G[v.__cacheKey],o.memory.textures--}function x(M){let v=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(v.__webglFramebuffer[G]))for(let K=0;K<v.__webglFramebuffer[G].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[G][K]);else i.deleteFramebuffer(v.__webglFramebuffer[G]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[G])}else{if(Array.isArray(v.__webglFramebuffer))for(let G=0;G<v.__webglFramebuffer.length;G++)i.deleteFramebuffer(v.__webglFramebuffer[G]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let G=0;G<v.__webglColorRenderbuffer.length;G++)v.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[G]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let U=M.textures;for(let G=0,K=U.length;G<K;G++){let Y=n.get(U[G]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(U[G])}n.remove(M)}let w=0;function L(){w=0}function N(){let M=w;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),w+=1,M}function k(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function V(M,v){let U=n.get(M);if(M.isVideoTexture&&he(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){let G=M.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(U,M,v);return}}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+v)}function z(M,v){let U=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){$(U,M,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+v)}function W(M,v){let U=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){$(U,M,v);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+v)}function H(M,v){let U=n.get(M);if(M.version>0&&U.__version!==M.version){te(U,M,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+v)}let ne={[oo]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[ao]:i.MIRRORED_REPEAT},fe={[nn]:i.NEAREST,[Hh]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Ho]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},xe={[qh]:i.NEVER,[Qh]:i.ALWAYS,[Yh]:i.LESS,[Gc]:i.LEQUAL,[$h]:i.EQUAL,[Kh]:i.GEQUAL,[Zh]:i.GREATER,[Jh]:i.NOTEQUAL};function Ue(M,v){if(v.type===Mn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===un||v.magFilter===Ho||v.magFilter===yr||v.magFilter===ti||v.minFilter===un||v.minFilter===Ho||v.minFilter===yr||v.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,ne[v.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,ne[v.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,ne[v.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,fe[v.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===nn||v.minFilter!==yr&&v.minFilter!==ti||v.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Oe(M,v){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",R));let G=v.source,K=d.get(G);K===void 0&&(K={},d.set(G,K));let Y=k(v);if(Y!==M.__cacheKey){K[Y]===void 0&&(K[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[Y].usedTimes++;let Me=K[M.__cacheKey];Me!==void 0&&(K[M.__cacheKey].usedTimes--,Me.usedTimes===0&&g(v)),M.__cacheKey=Y,M.__webglTexture=K[Y].texture}return U}function Ze(M,v,U){return Math.floor(Math.floor(M/U)/v)}function ke(M,v,U,G){let Y=M.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,U,G,v.data);else{Y.sort((se,_e)=>se.start-_e.start);let Me=0;for(let se=1;se<Y.length;se++){let _e=Y[Me],Fe=Y[se],Re=_e.start+_e.count,me=Ze(Fe.start,v.width,4),We=Ze(_e.start,v.width,4);Fe.start<=Re+1&&me===We&&Ze(Fe.start+Fe.count-1,v.width,4)===me?_e.count=Math.max(_e.count,Fe.start+Fe.count-_e.start):(++Me,Y[Me]=Fe)}Y.length=Me+1;let ae=i.getParameter(i.UNPACK_ROW_LENGTH),ye=i.getParameter(i.UNPACK_SKIP_PIXELS),Te=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let se=0,_e=Y.length;se<_e;se++){let Fe=Y[se],Re=Math.floor(Fe.start/4),me=Math.ceil(Fe.count/4),We=Re%v.width,F=Math.floor(Re/v.width),ce=me,de=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,We,F,ce,de,U,G,v.data)}M.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function $(M,v,U){let G=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(G=i.TEXTURE_3D);let K=Oe(M,v),Y=v.source;t.bindTexture(G,M.__webglTexture,i.TEXTURE0+U);let Me=n.get(Y);if(Y.version!==Me.__version||K===!0){t.activeTexture(i.TEXTURE0+U);let ae=Je.getPrimaries(Je.workingColorSpace),ye=v.colorSpace===On?null:Je.getPrimaries(v.colorSpace),Te=v.colorSpace===On||ae===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let se=y(v.image,!1,s.maxTextureSize);se=Le(v,se);let _e=r.convert(v.format,v.colorSpace),Fe=r.convert(v.type),Re=T(v.internalFormat,_e,Fe,v.colorSpace,v.isVideoTexture);Ue(G,v);let me,We=v.mipmaps,F=v.isVideoTexture!==!0,ce=Me.__version===void 0||K===!0,de=Y.dataReady,Ee=P(v,se);if(v.isDepthTexture)Re=S(v.format===vs,v.type),ce&&(F?t.texStorage2D(i.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Re,se.width,se.height,0,_e,Fe,null));else if(v.isDataTexture)if(We.length>0){F&&ce&&t.texStorage2D(i.TEXTURE_2D,Ee,Re,We[0].width,We[0].height);for(let re=0,j=We.length;re<j;re++)me=We[re],F?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,_e,Fe,me.data):t.texImage2D(i.TEXTURE_2D,re,Re,me.width,me.height,0,_e,Fe,me.data);v.generateMipmaps=!1}else F?(ce&&t.texStorage2D(i.TEXTURE_2D,Ee,Re,se.width,se.height),de&&ke(v,se,_e,Fe)):t.texImage2D(i.TEXTURE_2D,0,Re,se.width,se.height,0,_e,Fe,se.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Re,We[0].width,We[0].height,se.depth);for(let re=0,j=We.length;re<j;re++)if(me=We[re],v.format!==rn)if(_e!==null)if(F){if(de)if(v.layerUpdates.size>0){let Ae=Qc(me.width,me.height,v.format,v.type);for(let ze of v.layerUpdates){let rt=me.data.subarray(ze*Ae/me.data.BYTES_PER_ELEMENT,(ze+1)*Ae/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,ze,me.width,me.height,1,_e,rt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,se.depth,_e,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Re,me.width,me.height,se.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,se.depth,_e,Fe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Re,me.width,me.height,se.depth,0,_e,Fe,me.data)}else{F&&ce&&t.texStorage2D(i.TEXTURE_2D,Ee,Re,We[0].width,We[0].height);for(let re=0,j=We.length;re<j;re++)me=We[re],v.format!==rn?_e!==null?F?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,_e,me.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Re,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,me.width,me.height,_e,Fe,me.data):t.texImage2D(i.TEXTURE_2D,re,Re,me.width,me.height,0,_e,Fe,me.data)}else if(v.isDataArrayTexture)if(F){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Re,se.width,se.height,se.depth),de)if(v.layerUpdates.size>0){let re=Qc(se.width,se.height,v.format,v.type);for(let j of v.layerUpdates){let Ae=se.data.subarray(j*re/se.data.BYTES_PER_ELEMENT,(j+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,se.width,se.height,1,_e,Fe,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Fe,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,_e,Fe,se.data);else if(v.isData3DTexture)F?(ce&&t.texStorage3D(i.TEXTURE_3D,Ee,Re,se.width,se.height,se.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Fe,se.data)):t.texImage3D(i.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,_e,Fe,se.data);else if(v.isFramebufferTexture){if(ce)if(F)t.texStorage2D(i.TEXTURE_2D,Ee,Re,se.width,se.height);else{let re=se.width,j=se.height;for(let Ae=0;Ae<Ee;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Re,re,j,0,_e,Fe,null),re>>=1,j>>=1}}else if(We.length>0){if(F&&ce){let re=Ne(We[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Re,re.width,re.height)}for(let re=0,j=We.length;re<j;re++)me=We[re],F?de&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,_e,Fe,me):t.texImage2D(i.TEXTURE_2D,re,Re,_e,Fe,me);v.generateMipmaps=!1}else if(F){if(ce){let re=Ne(se);t.texStorage2D(i.TEXTURE_2D,Ee,Re,re.width,re.height)}de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Fe,se)}else t.texImage2D(i.TEXTURE_2D,0,Re,_e,Fe,se);m(v)&&f(G),Me.__version=Y.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function te(M,v,U){if(v.image.length!==6)return;let G=Oe(M,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+U);let Y=n.get(K);if(K.version!==Y.__version||G===!0){t.activeTexture(i.TEXTURE0+U);let Me=Je.getPrimaries(Je.workingColorSpace),ae=v.colorSpace===On?null:Je.getPrimaries(v.colorSpace),ye=v.colorSpace===On||Me===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Te=v.isCompressedTexture||v.image[0].isCompressedTexture,se=v.image[0]&&v.image[0].isDataTexture,_e=[];for(let j=0;j<6;j++)!Te&&!se?_e[j]=y(v.image[j],!0,s.maxCubemapSize):_e[j]=se?v.image[j].image:v.image[j],_e[j]=Le(v,_e[j]);let Fe=_e[0],Re=r.convert(v.format,v.colorSpace),me=r.convert(v.type),We=T(v.internalFormat,Re,me,v.colorSpace),F=v.isVideoTexture!==!0,ce=Y.__version===void 0||G===!0,de=K.dataReady,Ee=P(v,Fe);Ue(i.TEXTURE_CUBE_MAP,v);let re;if(Te){F&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,We,Fe.width,Fe.height);for(let j=0;j<6;j++){re=_e[j].mipmaps;for(let Ae=0;Ae<re.length;Ae++){let ze=re[Ae];v.format!==rn?Re!==null?F?de&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,0,0,ze.width,ze.height,Re,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,We,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,0,0,ze.width,ze.height,Re,me,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae,We,ze.width,ze.height,0,Re,me,ze.data)}}}else{if(re=v.mipmaps,F&&ce){re.length>0&&Ee++;let j=Ne(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,We,j.width,j.height)}for(let j=0;j<6;j++)if(se){F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_e[j].width,_e[j].height,Re,me,_e[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,_e[j].width,_e[j].height,0,Re,me,_e[j].data);for(let Ae=0;Ae<re.length;Ae++){let rt=re[Ae].image[j].image;F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,0,0,rt.width,rt.height,Re,me,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,We,rt.width,rt.height,0,Re,me,rt.data)}}else{F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Re,me,_e[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,We,Re,me,_e[j]);for(let Ae=0;Ae<re.length;Ae++){let ze=re[Ae];F?de&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,0,0,Re,me,ze.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ae+1,We,Re,me,ze.image[j])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),Y.__version=K.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ve(M,v,U,G,K,Y){let Me=r.convert(U.format,U.colorSpace),ae=r.convert(U.type),ye=T(U.internalFormat,Me,ae,U.colorSpace),Te=n.get(v),se=n.get(U);if(se.__renderTarget=v,!Te.__hasExternalTextures){let _e=Math.max(1,v.width>>Y),Fe=Math.max(1,v.height>>Y);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Y,ye,_e,Fe,v.depth,0,Me,ae,null):t.texImage2D(K,Y,ye,_e,Fe,0,Me,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,M),ie(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,K,se.__webglTexture,0,ue(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,K,se.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(M,v,U){if(i.bindRenderbuffer(i.RENDERBUFFER,M),v.depthBuffer){let G=v.depthTexture,K=G&&G.isDepthTexture?G.type:null,Y=S(v.stencilBuffer,K),Me=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=ue(v);ie(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,Y,v.width,v.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,Y,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Y,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,M)}else{let G=v.textures;for(let K=0;K<G.length;K++){let Y=G[K],Me=r.convert(Y.format,Y.colorSpace),ae=r.convert(Y.type),ye=T(Y.internalFormat,Me,ae,Y.colorSpace),Te=ue(v);U&&ie(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ye,v.width,v.height):ie(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,ye,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ye,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let G=n.get(v.depthTexture);G.__renderTarget=v,(!G.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);let K=G.__webglTexture,Y=ue(v);if(v.depthTexture.format===ts)ie(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===vs)ie(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function He(M){let v=n.get(M),U=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){let G=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),G){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=G}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let G=M.texture.mipmaps;G&&G.length>0?be(v.__webglFramebuffer[0],M):be(v.__webglFramebuffer,M)}else if(U){v.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[G]),v.__webglDepthbuffer[G]===void 0)v.__webglDepthbuffer[G]=i.createRenderbuffer(),Ce(v.__webglDepthbuffer[G],M,!1);else{let K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Y)}}else{let G=M.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ce(v.__webglDepthbuffer,M,!1);else{let K=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(M,v,U){let G=n.get(M);v!==void 0&&ve(G.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&He(M)}function I(M){let v=M.texture,U=n.get(M),G=n.get(v);M.addEventListener("dispose",b);let K=M.textures,Y=M.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=v.version,o.memory.textures++),Y){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let ye=0;ye<v.mipmaps.length;ye++)U.__webglFramebuffer[ae][ye]=i.createFramebuffer()}else U.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)U.__webglFramebuffer[ae]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ae=0,ye=K.length;ae<ye;ae++){let Te=n.get(K[ae]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&ie(M)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ae=0;ae<K.length;ae++){let ye=K[ae];U.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ae]);let Te=r.convert(ye.format,ye.colorSpace),se=r.convert(ye.type),_e=T(ye.internalFormat,Te,se,ye.colorSpace,M.isXRRenderTarget===!0),Fe=ue(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,_e,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,U.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(U.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,v);for(let ae=0;ae<6;ae++)if(v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)ve(U.__webglFramebuffer[ae][ye],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye);else ve(U.__webglFramebuffer[ae],M,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,ye=K.length;ae<ye;ae++){let Te=K[ae],se=n.get(Te),_e=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(_e=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,se.__webglTexture),Ue(_e,Te),ve(U.__webglFramebuffer,M,Te,i.COLOR_ATTACHMENT0+ae,_e,0),m(Te)&&f(_e)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ae=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,G.__webglTexture),Ue(ae,v),v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)ve(U.__webglFramebuffer[ye],M,v,i.COLOR_ATTACHMENT0,ae,ye);else ve(U.__webglFramebuffer,M,v,i.COLOR_ATTACHMENT0,ae,0);m(v)&&f(ae),t.unbindTexture()}M.depthBuffer&&He(M)}function ee(M){let v=M.textures;for(let U=0,G=v.length;U<G;U++){let K=v[U];if(m(K)){let Y=C(M),Me=n.get(K).__webglTexture;t.bindTexture(Y,Me),f(Y),t.unbindTexture()}}}let Q=[],Z=[];function J(M){if(M.samples>0){if(ie(M)===!1){let v=M.textures,U=M.width,G=M.height,K=i.COLOR_BUFFER_BIT,Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(M),ae=v.length>1;if(ae)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let ye=M.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]);let se=n.get(v[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,U,G,0,0,U,G,K,i.NEAREST),c===!0&&(Q.length=0,Z.length=0,Q.push(i.COLOR_ATTACHMENT0+Te),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Q.push(Y),Z.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Te]);let se=n.get(v[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){let v=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ue(M){return Math.min(s.maxSamples,M.samples)}function ie(M){let v=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function he(M){let v=o.render.frame;h.get(M)!==v&&(h.set(M,v),M.update())}function Le(M,v){let U=M.colorSpace,G=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==Si&&U!==On&&(Je.getTransfer(U)===tt?(G!==rn||K!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function Ne(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=H,this.rebindTextures=Ge,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ie}function i_(i,e){function t(n,s=On){let r,o=Je.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uc)return i.BYTE;if(n===Nc)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===_s)return i.HALF_FLOAT;if(n===Bc)return i.ALPHA;if(n===kc)return i.RGB;if(n===rn)return i.RGBA;if(n===ts)return i.DEPTH_COMPONENT;if(n===vs)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===Vc)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===$o)return i.RGBA_INTEGER;if(n===Mr||n===Sr||n===br||n===Er)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Jo||n===Ko||n===Qo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===ea||n===ta)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===ea)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===na)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===aa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ha)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ua)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===da)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pa)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===_a||n===xa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ga)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===va||n===ya||n===Ma||n===Sa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
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

}`,ul=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new tr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new St(new pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dl=class extends Ln{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,_=null,y=typeof XRWebGLBinding<"u",m=new ul,f={},C=t.getContextAttributes(),T=null,S=null,P=[],R=[],b=new le,A=null,g=new Tt;g.viewport=new et;let x=new Tt;x.viewport=new et;let w=[g,x],L=new Lo,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=P[$];return te===void 0&&(te=new as,P[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=P[$];return te===void 0&&(te=new as,P[$]=te),te.getGripSpace()},this.getHand=function($){let te=P[$];return te===void 0&&(te=new as,P[$]=te),te.getHandSpace()};function V($){let te=R.indexOf($.inputSource);if(te===-1)return;let ve=P[te];ve!==void 0&&(ve.update($.inputSource,$.frame,l||o),ve.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",W);for(let $=0;$<P.length;$++){let te=R[$];te!==null&&(R[$]=null,P[$].disconnect(te))}N=null,k=null,m.reset();for(let $ in f)delete f[$];e.setRenderTarget(T),p=null,d=null,u=null,s=null,S=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",z),s.addEventListener("inputsourceschange",W),C.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ce=null,be=null;C.depth&&(be=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=C.stencil?vs:ts,Ce=C.stencil?xs:ni);let He={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(He),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new _n(d.textureWidth,d.textureHeight,{format:rn,type:mn,depthTexture:new er(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new _n(p.framebufferWidth,p.framebufferHeight,{format:rn,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W($){for(let te=0;te<$.removed.length;te++){let ve=$.removed[te],Ce=R.indexOf(ve);Ce>=0&&(R[Ce]=null,P[Ce].disconnect(ve))}for(let te=0;te<$.added.length;te++){let ve=$.added[te],Ce=R.indexOf(ve);if(Ce===-1){for(let He=0;He<P.length;He++)if(He>=R.length){R.push(ve),Ce=He;break}else if(R[He]===null){R[He]=ve,Ce=He;break}if(Ce===-1)break}let be=P[Ce];be&&be.connect(ve)}}let H=new D,ne=new D;function fe($,te,ve){H.setFromMatrixPosition(te.matrixWorld),ne.setFromMatrixPosition(ve.matrixWorld);let Ce=H.distanceTo(ne),be=te.projectionMatrix.elements,He=ve.projectionMatrix.elements,Ge=be[14]/(be[10]-1),I=be[14]/(be[10]+1),ee=(be[9]+1)/be[5],Q=(be[9]-1)/be[5],Z=(be[8]-1)/be[0],J=(He[8]+1)/He[0],ue=Ge*Z,ie=Ge*J,he=Ce/(-Z+J),Le=he*-Z;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Le),$.translateZ(he),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),be[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let Ne=Ge+he,M=I+he,v=ue-Le,U=ie+(Ce-Le),G=ee*I/M*Ne,K=Q*I/M*Ne;$.projectionMatrix.makePerspective(v,U,G,K,Ne,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function xe($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let te=$.near,ve=$.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),L.near=x.near=g.near=te,L.far=x.far=g.far=ve,(N!==L.near||k!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,k=L.far),L.layers.mask=$.layers.mask|6,g.layers.mask=L.layers.mask&3,x.layers.mask=L.layers.mask&5;let Ce=$.parent,be=L.cameras;xe(L,Ce);for(let He=0;He<be.length;He++)xe(be[He],Ce);be.length===2?fe(L,g,x):L.projectionMatrix.copy(g.projectionMatrix),Ue($,L,Ce)};function Ue($,te,ve){ve===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(ve.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ns*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function($){return f[$]};let Oe=null;function Ze($,te){if(h=te.getViewerPose(l||o),_=te,h!==null){let ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ce=!1;ve.length!==L.cameras.length&&(L.cameras.length=0,Ce=!0);for(let I=0;I<ve.length;I++){let ee=ve[I],Q=null;if(p!==null)Q=p.getViewport(ee);else{let J=u.getViewSubImage(d,ee);Q=J.viewport,I===0&&(e.setRenderTargetTextures(S,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(S))}let Z=w[I];Z===void 0&&(Z=new Tt,Z.layers.enable(I),Z.viewport=new et,w[I]=Z),Z.matrix.fromArray(ee.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(ee.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Q.x,Q.y,Q.width,Q.height),I===0&&(L.matrix.copy(Z.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ce===!0&&L.cameras.push(Z)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let I=u.getDepthInformation(ve[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(be&&be.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let I=0;I<ve.length;I++){let ee=ve[I].camera;if(ee){let Q=f[ee];Q||(Q=new tr,f[ee]=Q);let Z=u.getCameraImage(ee);Q.sourceTexture=Z}}}}for(let ve=0;ve<P.length;ve++){let Ce=R[ve],be=P[ve];Ce!==null&&be!==void 0&&be.update(Ce,te,l||o)}Oe&&Oe($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}let ke=new Pu;ke.setAnimationLoop(Ze),this.setAnimationLoop=function($){Oe=$},this.dispose=function(){}}},Ui=new dn,o_=new ut;function a_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,$c(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,C,T,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,C,T):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ft&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ft&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let C=e.get(f),T=C.envMap,S=C.envMapRotation;T&&(m.envMap.value=T,Ui.copy(S),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(o_.makeRotationFromEuler(Ui)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,C,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*C,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,C){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ft&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let C=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(C,T){let S=T.program;n.uniformBlockBinding(C,S)}function l(C,T){let S=s[C.id];S===void 0&&(_(C),S=h(C),s[C.id]=S,C.addEventListener("dispose",m));let P=T.program;n.updateUBOMapping(C,P);let R=e.render.frame;r[C.id]!==R&&(d(C),r[C.id]=R)}function h(C){let T=u();C.__bindingPointIndex=T;let S=i.createBuffer(),P=C.__size,R=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function u(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let T=s[C.id],S=C.uniforms,P=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,b=S.length;R<b;R++){let A=Array.isArray(S[R])?S[R]:[S[R]];for(let g=0,x=A.length;g<x;g++){let w=A[g];if(p(w,R,g,P)===!0){let L=w.__offset,N=Array.isArray(w.value)?w.value:[w.value],k=0;for(let V=0;V<N.length;V++){let z=N[V],W=y(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+k,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):(z.toArray(w.__data,k),k+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(C,T,S,P){let R=C.value,b=T+"_"+S;if(P[b]===void 0)return typeof R=="number"||typeof R=="boolean"?P[b]=R:P[b]=R.clone(),!0;{let A=P[b];if(typeof R=="number"||typeof R=="boolean"){if(A!==R)return P[b]=R,!0}else if(A.equals(R)===!1)return A.copy(R),!0}return!1}function _(C){let T=C.uniforms,S=0,P=16;for(let b=0,A=T.length;b<A;b++){let g=Array.isArray(T[b])?T[b]:[T[b]];for(let x=0,w=g.length;x<w;x++){let L=g[x],N=Array.isArray(L.value)?L.value:[L.value];for(let k=0,V=N.length;k<V;k++){let z=N[k],W=y(z),H=S%P,ne=H%W.boundary,fe=H+ne;S+=ne,fe!==0&&P-fe<W.storage&&(S+=P-fe),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=W.storage}}}let R=S%P;return R>0&&(S+=P-R),C.__size=S,C.__cache={},this}function y(C){let T={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(T.boundary=4,T.storage=4):C.isVector2?(T.boundary=8,T.storage=8):C.isVector3||C.isColor?(T.boundary=16,T.storage=12):C.isVector4?(T.boundary=16,T.storage=16):C.isMatrix3?(T.boundary=48,T.storage=48):C.isMatrix4?(T.boundary=64,T.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),T}function m(C){let T=C.target;T.removeEventListener("dispose",m);let S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(let C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var bs=class{constructor(e={}){let{canvas:t=jh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,C=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,P=!1;this._outputColorSpace=Mt;let R=0,b=0,A=null,g=-1,x=null,w=new et,L=new et,N=null,k=new Ye(0),V=0,z=t.width,W=t.height,H=1,ne=null,fe=null,xe=new et(0,0,z,W),Ue=new et(0,0,z,W),Oe=!1,Ze=new cs,ke=!1,$=!1,te=new ut,ve=new D,Ce=new et,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function Ge(){return A===null?H:1}let I=n;function ee(E,O){return t.getContext(E,O)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",re,!1),I===null){let O="webgl2";if(I=ee(O,E),I===null)throw ee(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,Z,J,ue,ie,he,Le,Ne,M,v,U,G,K,Y,Me,ae,ye,Te,se,_e,Fe,Re,me,We;function F(){Q=new Tg(I),Q.init(),Re=new i_(I,Q),Z=new vg(I,Q,e,Re),J=new t_(I,Q),Z.reversedDepthBuffer&&d&&J.buffers.depth.setReversed(!0),ue=new Rg(I),ie=new H0,he=new n_(I,Q,J,ie,Z,Re,ue),Le=new Mg(S),Ne=new wg(S),M=new Nf(I),me=new _g(I,M),v=new Ag(I,M,ue,me),U=new Pg(I,v,M,ue),se=new Ig(I,Z,he),ae=new yg(ie),G=new V0(S,Le,Ne,Q,Z,me,ae),K=new a_(S,ie),Y=new W0,Me=new J0(Q),Te=new gg(S,Le,Ne,J,U,p,c),ye=new j0(S,U,Z),We=new c_(I,ue,Z,J),_e=new xg(I,Q,ue),Fe=new Cg(I,Q,ue),ue.programs=G.programs,S.capabilities=Z,S.extensions=Q,S.properties=ie,S.renderLists=Y,S.shadowMap=ye,S.state=J,S.info=ue}F();let ce=new dl(S,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(z,W,!1))},this.getSize=function(E){return E.set(z,W)},this.setSize=function(E,O,X=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,W=O,t.width=Math.floor(E*H),t.height=Math.floor(O*H),X===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(z*H,W*H).floor()},this.setDrawingBufferSize=function(E,O,X){z=E,W=O,H=X,t.width=Math.floor(E*X),t.height=Math.floor(O*X),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,O,X,q){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,O,X,q),J.viewport(w.copy(xe).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Ue)},this.setScissor=function(E,O,X,q){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,O,X,q),J.scissor(L.copy(Ue).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){J.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,X=!0){let q=0;if(E){let B=!1;if(A!==null){let oe=A.texture.format;B=oe===$o||oe===Yo||oe===qo}if(B){let oe=A.texture.type,ge=oe===mn||oe===ni||oe===gs||oe===xs||oe===Wo||oe===Xo,we=Te.getClearColor(),Se=Te.getClearAlpha(),De=we.r,Be=we.g,Ie=we.b;ge?(_[0]=De,_[1]=Be,_[2]=Ie,_[3]=Se,I.clearBufferuiv(I.COLOR,0,_)):(y[0]=De,y[1]=Be,y[2]=Ie,y[3]=Se,I.clearBufferiv(I.COLOR,0,y))}else q|=I.COLOR_BUFFER_BIT}O&&(q|=I.DEPTH_BUFFER_BIT),X&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Te.dispose(),Y.dispose(),Me.dispose(),ie.dispose(),Le.dispose(),Ne.dispose(),U.dispose(),me.dispose(),We.dispose(),G.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",gn),ce.removeEventListener("sessionend",Ul),di.stop()};function de(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let E=ue.autoReset,O=ye.enabled,X=ye.autoUpdate,q=ye.needsUpdate,B=ye.type;F(),ue.autoReset=E,ye.enabled=O,ye.autoUpdate=X,ye.needsUpdate=q,ye.type=B}function re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function j(E){let O=E.target;O.removeEventListener("dispose",j),Ae(O)}function Ae(E){ze(E),ie.remove(E)}function ze(E){let O=ie.get(E).programs;O!==void 0&&(O.forEach(function(X){G.releaseProgram(X)}),E.isShaderMaterial&&G.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,X,q,B,oe){O===null&&(O=be);let ge=B.isMesh&&B.matrixWorld.determinant()<0,we=cd(E,O,X,q,B);J.setMaterial(q,ge);let Se=X.index,De=1;if(q.wireframe===!0){if(Se=v.getWireframeAttribute(X),Se===void 0)return;De=2}let Be=X.drawRange,Ie=X.attributes.position,$e=Be.start*De,nt=(Be.start+Be.count)*De;oe!==null&&($e=Math.max($e,oe.start*De),nt=Math.min(nt,(oe.start+oe.count)*De)),Se!==null?($e=Math.max($e,0),nt=Math.min(nt,Se.count)):Ie!=null&&($e=Math.max($e,0),nt=Math.min(nt,Ie.count));let _t=nt-$e;if(_t<0||_t===1/0)return;me.setup(B,q,we,X,Se);let ot,it=_e;if(Se!==null&&(ot=M.get(Se),it=Fe,it.setIndex(ot)),B.isMesh)q.wireframe===!0?(J.setLineWidth(q.wireframeLinewidth*Ge()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(B.isLine){let Pe=q.linewidth;Pe===void 0&&(Pe=1),J.setLineWidth(Pe*Ge()),B.isLineSegments?it.setMode(I.LINES):B.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else B.isPoints?it.setMode(I.POINTS):B.isSprite&&it.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)is("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Pe=B._multiDrawStarts,dt=B._multiDrawCounts,Ke=B._multiDrawCount,Wt=Se?M.get(Se).bytesPerElement:1,zi=ie.get(q).currentProgram.getUniforms();for(let Xt=0;Xt<Ke;Xt++)zi.setValue(I,"_gl_DrawID",Xt),it.render(Pe[Xt]/Wt,dt[Xt])}else if(B.isInstancedMesh)it.renderInstances($e,_t,B.count);else if(X.isInstancedBufferGeometry){let Pe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,dt=Math.min(X.instanceCount,Pe);it.renderInstances($e,_t,dt)}else it.render($e,_t)};function rt(E,O,X){E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=Ft,E.needsUpdate=!0,Nr(E,O,X),E.side=Pn,E.needsUpdate=!0,Nr(E,O,X),E.side=yn):Nr(E,O,X)}this.compile=function(E,O,X=null){X===null&&(X=E),f=Me.get(X),f.init(O),T.push(f),X.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),E!==X&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();let q=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let oe=B.material;if(oe)if(Array.isArray(oe))for(let ge=0;ge<oe.length;ge++){let we=oe[ge];rt(we,X,B),q.add(we)}else rt(oe,X,B),q.add(oe)}),f=T.pop(),q},this.compileAsync=function(E,O,X=null){let q=this.compile(E,O,X);return new Promise(B=>{function oe(){if(q.forEach(function(ge){ie.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){B(E);return}setTimeout(oe,10)}Q.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let je=null;function En(E){je&&je(E)}function gn(){di.stop()}function Ul(){di.start()}let di=new Pu;di.setAnimationLoop(En),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(E){je=E,ce.setAnimationLoop(E),E===null?di.stop():di.start()},ce.addEventListener("sessionstart",gn),ce.addEventListener("sessionend",Ul),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,O,A),f=Me.get(E,T.length),f.init(O),T.push(f),te.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ze.setFromProjectionMatrix(te,hn,O.reversedDepth),$=this.localClippingEnabled,ke=ae.init(this.clippingPlanes,$),m=Y.get(E,C.length),m.init(),C.push(m),ce.enabled===!0&&ce.isPresenting===!0){let oe=S.xr.getDepthSensingMesh();oe!==null&&Va(oe,O,-1/0,S.sortObjects)}Va(E,O,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ne,fe),He=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,He&&Te.addToRenderList(m,E),this.info.render.frame++,ke===!0&&ae.beginShadows();let X=f.state.shadowsArray;ye.render(X,E,O),ke===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){let oe=O.cameras;if(B.length>0)for(let ge=0,we=oe.length;ge<we;ge++){let Se=oe[ge];Fl(q,B,E,Se)}He&&Te.render(E);for(let ge=0,we=oe.length;ge<we;ge++){let Se=oe[ge];Nl(m,E,Se,Se.viewport)}}else B.length>0&&Fl(q,B,E,O),He&&Te.render(E),Nl(m,E,O);A!==null&&b===0&&(he.updateMultisampleRenderTarget(A),he.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(S,E,O),me.resetDefaultState(),g=-1,x=null,T.pop(),T.length>0?(f=T[T.length-1],ke===!0&&ae.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Va(E,O,X,q){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ze.intersectsSprite(E)){q&&Ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(te);let ge=U.update(E),we=E.material;we.visible&&m.push(E,ge,we,X,Ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ze.intersectsObject(E))){let ge=U.update(E),we=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ce.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ce.copy(ge.boundingSphere.center)),Ce.applyMatrix4(E.matrixWorld).applyMatrix4(te)),Array.isArray(we)){let Se=ge.groups;for(let De=0,Be=Se.length;De<Be;De++){let Ie=Se[De],$e=we[Ie.materialIndex];$e&&$e.visible&&m.push(E,ge,$e,X,Ce.z,Ie)}}else we.visible&&m.push(E,ge,we,X,Ce.z,null)}}let oe=E.children;for(let ge=0,we=oe.length;ge<we;ge++)Va(oe[ge],O,X,q)}function Nl(E,O,X,q){let B=E.opaque,oe=E.transmissive,ge=E.transparent;f.setupLightsView(X),ke===!0&&ae.setGlobalState(S.clippingPlanes,X),q&&J.viewport(w.copy(q)),B.length>0&&Ur(B,O,X),oe.length>0&&Ur(oe,O,X),ge.length>0&&Ur(ge,O,X),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Fl(E,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new _n(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?_s:mn,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let oe=f.state.transmissionRenderTarget[q.id],ge=q.viewport||w;oe.setSize(ge.z*S.transmissionResolutionScale,ge.w*S.transmissionResolutionScale);let we=S.getRenderTarget(),Se=S.getActiveCubeFace(),De=S.getActiveMipmapLevel();S.setRenderTarget(oe),S.getClearColor(k),V=S.getClearAlpha(),V<1&&S.setClearColor(16777215,.5),S.clear(),He&&Te.render(X);let Be=S.toneMapping;S.toneMapping=Fn;let Ie=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),ke===!0&&ae.setGlobalState(S.clippingPlanes,q),Ur(E,X,q),he.updateMultisampleRenderTarget(oe),he.updateRenderTargetMipmap(oe),Q.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let nt=0,_t=O.length;nt<_t;nt++){let ot=O[nt],it=ot.object,Pe=ot.geometry,dt=ot.material,Ke=ot.group;if(dt.side===yn&&it.layers.test(q.layers)){let Wt=dt.side;dt.side=Ft,dt.needsUpdate=!0,Ol(it,X,q,Pe,dt,Ke),dt.side=Wt,dt.needsUpdate=!0,$e=!0}}$e===!0&&(he.updateMultisampleRenderTarget(oe),he.updateRenderTargetMipmap(oe))}S.setRenderTarget(we,Se,De),S.setClearColor(k,V),Ie!==void 0&&(q.viewport=Ie),S.toneMapping=Be}function Ur(E,O,X){let q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,oe=E.length;B<oe;B++){let ge=E[B],we=ge.object,Se=ge.geometry,De=ge.group,Be=ge.material;Be.allowOverride===!0&&q!==null&&(Be=q),we.layers.test(X.layers)&&Ol(we,O,X,Se,Be,De)}}function Ol(E,O,X,q,B,oe){E.onBeforeRender(S,O,X,q,B,oe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(S,O,X,q,E,oe),B.transparent===!0&&B.side===yn&&B.forceSinglePass===!1?(B.side=Ft,B.needsUpdate=!0,S.renderBufferDirect(X,O,q,B,E,oe),B.side=Pn,B.needsUpdate=!0,S.renderBufferDirect(X,O,q,B,E,oe),B.side=yn):S.renderBufferDirect(X,O,q,B,E,oe),E.onAfterRender(S,O,X,q,B,oe)}function Nr(E,O,X){O.isScene!==!0&&(O=be);let q=ie.get(E),B=f.state.lights,oe=f.state.shadowsArray,ge=B.state.version,we=G.getParameters(E,B.state,oe,O,X),Se=G.getProgramCacheKey(we),De=q.programs;q.environment=E.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(E.isMeshStandardMaterial?Ne:Le).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",j),De=new Map,q.programs=De);let Be=De.get(Se);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===ge)return kl(E,we),Be}else we.uniforms=G.getUniforms(E),E.onBeforeCompile(we,S),Be=G.acquireProgram(we,Se),De.set(Se,Be),q.uniforms=we.uniforms;let Ie=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=ae.uniform),kl(E,we),q.needsLights=hd(E),q.lightsStateVersion=ge,q.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function Bl(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Ss.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function kl(E,O){let X=ie.get(E);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function cd(E,O,X,q,B){O.isScene!==!0&&(O=be),he.resetTextureUnits();let oe=O.fog,ge=q.isMeshStandardMaterial?O.environment:null,we=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Si,Se=(q.isMeshStandardMaterial?Ne:Le).get(q.envMap||ge),De=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ie=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,nt=!!X.morphAttributes.color,_t=Fn;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_t=S.toneMapping);let ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=ot!==void 0?ot.length:0,Pe=ie.get(q),dt=f.state.lights;if(ke===!0&&($===!0||E!==x)){let Ut=E===x&&q.id===g;ae.setState(q,E,Ut)}let Ke=!1;q.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==dt.state.version||Pe.outputColorSpace!==we||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==Se||q.fog===!0&&Pe.fog!==oe||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ae.numPlanes||Pe.numIntersection!==ae.numIntersection)||Pe.vertexAlphas!==De||Pe.vertexTangents!==Be||Pe.morphTargets!==Ie||Pe.morphNormals!==$e||Pe.morphColors!==nt||Pe.toneMapping!==_t||Pe.morphTargetsCount!==it)&&(Ke=!0):(Ke=!0,Pe.__version=q.version);let Wt=Pe.currentProgram;Ke===!0&&(Wt=Nr(q,O,B));let zi=!1,Xt=!1,Ds=!1,ft=Wt.getUniforms(),jt=Pe.uniforms;if(J.useProgram(Wt.program)&&(zi=!0,Xt=!0,Ds=!0),q.id!==g&&(g=q.id,Xt=!0),zi||x!==E){J.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ft.setValue(I,"projectionMatrix",E.projectionMatrix),ft.setValue(I,"viewMatrix",E.matrixWorldInverse);let Bt=ft.map.cameraPosition;Bt!==void 0&&Bt.setValue(I,ve.setFromMatrixPosition(E.matrixWorld)),Z.logarithmicDepthBuffer&&ft.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ft.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Xt=!0,Ds=!0)}if(B.isSkinnedMesh){ft.setOptional(I,B,"bindMatrix"),ft.setOptional(I,B,"bindMatrixInverse");let Ut=B.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),ft.setValue(I,"boneTexture",Ut.boneTexture,he))}B.isBatchedMesh&&(ft.setOptional(I,B,"batchingTexture"),ft.setValue(I,"batchingTexture",B._matricesTexture,he),ft.setOptional(I,B,"batchingIdTexture"),ft.setValue(I,"batchingIdTexture",B._indirectTexture,he),ft.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&ft.setValue(I,"batchingColorTexture",B._colorsTexture,he));let en=X.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&se.update(B,X,Wt),(Xt||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,ft.setValue(I,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(jt.envMap.value=Se,jt.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(jt.envMapIntensity.value=O.environmentIntensity),Xt&&(ft.setValue(I,"toneMappingExposure",S.toneMappingExposure),Pe.needsLights&&ld(jt,Ds),oe&&q.fog===!0&&K.refreshFogUniforms(jt,oe),K.refreshMaterialUniforms(jt,q,H,W,f.state.transmissionRenderTarget[E.id]),Ss.upload(I,Bl(Pe),jt,he)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ss.upload(I,Bl(Pe),jt,he),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ft.setValue(I,"center",B.center),ft.setValue(I,"modelViewMatrix",B.modelViewMatrix),ft.setValue(I,"normalMatrix",B.normalMatrix),ft.setValue(I,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Ut=q.uniformsGroups;for(let Bt=0,Ha=Ut.length;Bt<Ha;Bt++){let fi=Ut[Bt];We.update(fi,Wt),We.bind(fi,Wt)}}return Wt}function ld(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function hd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,O,X){let q=ie.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),ie.get(E.texture).__webglTexture=O,ie.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let X=ie.get(E);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};let ud=I.createFramebuffer();this.setRenderTarget=function(E,O=0,X=0){A=E,R=O,b=X;let q=!0,B=null,oe=!1,ge=!1;if(E){let Se=ie.get(E);if(Se.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Se.__webglFramebuffer===void 0)he.setupRenderTarget(E);else if(Se.__hasExternalTextures)he.rebindTextures(E,ie.get(E.texture).__webglTexture,ie.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ie=E.depthTexture;if(Se.__boundDepthTexture!==Ie){if(Ie!==null&&ie.has(Ie)&&(E.width!==Ie.image.width||E.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ge=!0);let Be=ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?B=Be[O][X]:B=Be[O],oe=!0):E.samples>0&&he.useMultisampledRTT(E)===!1?B=ie.get(E).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[X]:B=Be,w.copy(E.viewport),L.copy(E.scissor),N=E.scissorTest}else w.copy(xe).multiplyScalar(H).floor(),L.copy(Ue).multiplyScalar(H).floor(),N=Oe;if(X!==0&&(B=ud),J.bindFramebuffer(I.FRAMEBUFFER,B)&&q&&J.drawBuffers(E,B),J.viewport(w),J.scissor(L),J.setScissorTest(N),oe){let Se=ie.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,X)}else if(ge){let Se=O;for(let De=0;De<E.textures.length;De++){let Be=ie.get(E.textures[De]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+De,Be.__webglTexture,X,Se)}}else if(E!==null&&X!==0){let Se=ie.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Se.__webglTexture,X)}g=-1},this.readRenderTargetPixels=function(E,O,X,q,B,oe,ge,we=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se){J.bindFramebuffer(I.FRAMEBUFFER,Se);try{let De=E.textures[we],Be=De.format,Ie=De.type;if(!Z.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-q&&X>=0&&X<=E.height-B&&(E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+we),I.readPixels(O,X,q,B,Re.convert(Be),Re.convert(Ie),oe))}finally{let De=A!==null?ie.get(A).__webglFramebuffer:null;J.bindFramebuffer(I.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,O,X,q,B,oe,ge,we=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Se=Se[ge]),Se)if(O>=0&&O<=E.width-q&&X>=0&&X<=E.height-B){J.bindFramebuffer(I.FRAMEBUFFER,Se);let De=E.textures[we],Be=De.format,Ie=De.type;if(!Z.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.bufferData(I.PIXEL_PACK_BUFFER,oe.byteLength,I.STREAM_READ),E.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+we),I.readPixels(O,X,q,B,Re.convert(Be),Re.convert(Ie),0);let nt=A!==null?ie.get(A).__webglFramebuffer:null;J.bindFramebuffer(I.FRAMEBUFFER,nt);let _t=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await eu(I,_t,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,$e),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,oe),I.deleteBuffer($e),I.deleteSync(_t),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,X=0){let q=Math.pow(2,-X),B=Math.floor(E.image.width*q),oe=Math.floor(E.image.height*q),ge=O!==null?O.x:0,we=O!==null?O.y:0;he.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ge,we,B,oe),J.unbindTexture()};let dd=I.createFramebuffer(),fd=I.createFramebuffer();this.copyTextureToTexture=function(E,O,X=null,q=null,B=0,oe=null){oe===null&&(B!==0?(is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=B,B=0):oe=0);let ge,we,Se,De,Be,Ie,$e,nt,_t,ot=E.isCompressedTexture?E.mipmaps[oe]:E.image;if(X!==null)ge=X.max.x-X.min.x,we=X.max.y-X.min.y,Se=X.isBox3?X.max.z-X.min.z:1,De=X.min.x,Be=X.min.y,Ie=X.isBox3?X.min.z:0;else{let en=Math.pow(2,-B);ge=Math.floor(ot.width*en),we=Math.floor(ot.height*en),E.isDataArrayTexture?Se=ot.depth:E.isData3DTexture?Se=Math.floor(ot.depth*en):Se=1,De=0,Be=0,Ie=0}q!==null?($e=q.x,nt=q.y,_t=q.z):($e=0,nt=0,_t=0);let it=Re.convert(O.format),Pe=Re.convert(O.type),dt;O.isData3DTexture?(he.setTexture3D(O,0),dt=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(he.setTexture2DArray(O,0),dt=I.TEXTURE_2D_ARRAY):(he.setTexture2D(O,0),dt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let Ke=I.getParameter(I.UNPACK_ROW_LENGTH),Wt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),zi=I.getParameter(I.UNPACK_SKIP_PIXELS),Xt=I.getParameter(I.UNPACK_SKIP_ROWS),Ds=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,De),I.pixelStorei(I.UNPACK_SKIP_ROWS,Be),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ie);let ft=E.isDataArrayTexture||E.isData3DTexture,jt=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let en=ie.get(E),Ut=ie.get(O),Bt=ie.get(en.__renderTarget),Ha=ie.get(Ut.__renderTarget);J.bindFramebuffer(I.READ_FRAMEBUFFER,Bt.__webglFramebuffer),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ha.__webglFramebuffer);for(let fi=0;fi<Se;fi++)ft&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ie.get(E).__webglTexture,B,Ie+fi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ie.get(O).__webglTexture,oe,_t+fi)),I.blitFramebuffer(De,Be,ge,we,$e,nt,ge,we,I.DEPTH_BUFFER_BIT,I.NEAREST);J.bindFramebuffer(I.READ_FRAMEBUFFER,null),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||ie.has(E)){let en=ie.get(E),Ut=ie.get(O);J.bindFramebuffer(I.READ_FRAMEBUFFER,dd),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,fd);for(let Bt=0;Bt<Se;Bt++)ft?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,en.__webglTexture,B,Ie+Bt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,en.__webglTexture,B),jt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ut.__webglTexture,oe,_t+Bt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ut.__webglTexture,oe),B!==0?I.blitFramebuffer(De,Be,ge,we,$e,nt,ge,we,I.COLOR_BUFFER_BIT,I.NEAREST):jt?I.copyTexSubImage3D(dt,oe,$e,nt,_t+Bt,De,Be,ge,we):I.copyTexSubImage2D(dt,oe,$e,nt,De,Be,ge,we);J.bindFramebuffer(I.READ_FRAMEBUFFER,null),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else jt?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(dt,oe,$e,nt,_t,ge,we,Se,it,Pe,ot.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(dt,oe,$e,nt,_t,ge,we,Se,it,ot.data):I.texSubImage3D(dt,oe,$e,nt,_t,ge,we,Se,it,Pe,ot):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,oe,$e,nt,ge,we,it,Pe,ot.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,oe,$e,nt,ot.width,ot.height,it,ot.data):I.texSubImage2D(I.TEXTURE_2D,oe,$e,nt,ge,we,it,Pe,ot);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ke),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Wt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zi),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ds),oe===0&&O.generateMipmaps&&I.generateMipmap(dt),J.unbindTexture()},this.initRenderTarget=function(E){ie.get(E).__webglFramebuffer===void 0&&he.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?he.setTextureCube(E,0):E.isData3DTexture?he.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?he.setTexture2DArray(E,0):he.setTexture2D(E,0),J.unbindTexture()},this.resetState=function(){R=0,b=0,A=null,J.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}};var ws=Object.freeze({left:-.775,right:.775,bottom:-1.65,top:1.64,back:-.56,front:.55}),Ca=1.6,ml=(i,e,t)=>Math.max(e,Math.min(t,i));function Ra(i){return ml(i.scrollLeft,0,Math.max(0,i.scrollWidth-i.clientWidth))}function l_(i){return[new pt(new D(1,0,0),-i.left),new pt(new D(-1,0,0),i.right),new pt(new D(0,1,0),-i.bottom),new pt(new D(0,-1,0),i.top),new pt(new D(0,0,1),-i.back),new pt(new D(0,0,-1),i.front)]}function Fu(i,e){return!i.material?.clippingPlanes||i.material.clippingPlanes.every(t=>t.distanceToPoint(e)>=-1e-6)}function Ou(i,e,t="fridge"){let n=new vt,s=1.65/e,r=t==="drinks"?3.16/(Math.max(1,i.length)*s):Math.min(1.75,3.16/(Math.max(1,i.length)*s)),o=1.55-r*s*.5,a=new Set,c=[],l=new pt(new D(1,0,0),-ws.left),h=new pt(new D(-1,0,0),ws.right),u=[...l_(ws),l,h],d=(y,m)=>y.traverse(f=>{f.material&&(f.material=f.material.clone(),f.material.clippingPlanes=m,a.add(f.material))});i.forEach((y,m)=>{let f=new vt;f.scale.setScalar(s),f.position.set(0,o-m*r*s,-.03),n.add(f);for(let R of[y.floor,y.frontRail,y.rearRail]){let b=R.clone(!0);b.scale.x=e-.12,d(b,u),f.add(b)}let C=[...y.element.querySelectorAll(".food-card")],T=f.position.y-.6175*s,S=m===0?ws.top:f.position.y+(r-.6725)*s,P=[...u,new pt(new D(0,1,0),-T),new pt(new D(0,-1,0),S)];y.groups.forEach((R,b)=>{let A=R.clone(!0);A.position.set(0,0,0);let g=new xn().setFromObject(A),x=Math.min(r-.1,(S-T)/s-.02),w=Math.min(1,x/(g.max.y-g.min.y),(C[b].offsetWidth/100-.07)/(g.max.x-g.min.x));A.scale.multiplyScalar(w),A.position.y=-.61-g.min.y*w,A.userData.category={row:m,index:b},d(A,P),f.add(A),c.push({clone:A,element:y.element,card:C[b],floorY:T,ceilingY:S})})});function p(){for(let{clone:y,element:m,card:f}of c)y.position.x=(f.offsetLeft-Ra(m)+f.offsetWidth/2-m.clientWidth/2)/100}function _(y){n.position.x=y,l.constant=-ws.left-y,h.constant=ws.right+y}return n.userData={dispose:()=>{a.forEach(y=>y.dispose())},updatePositions:p,setSlide:_,positions:c,rowElements:i.map(y=>y.element),pitch:r,rows:i.length,scale:s,width:e,top:o},p(),_(0),n}var Tr=new D;function on(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Tr.copy(e),Tr[n]=0,Tr.normalize();let l=.5*o/(o+a),h=1-Tr.angleTo(i)/c;return Math.sign(Tr[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Ts=class i extends Kn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new D,l=new D,h=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,_=u.length/6,y=new D,m=.5/o;for(let f=0,C=0;f<u.length;f+=3,C+=2)switch(c.fromArray(u,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[f+0]=h.x*Math.sign(c.x)+l.x*r,u[f+1]=h.y*Math.sign(c.y)+l.y*r,u[f+2]=h.z*Math.sign(c.z)+l.z*r,d[f+0]=l.x,d[f+1]=l.y,d[f+2]=l.z,Math.floor(f/_)){case 0:y.set(1,0,0),p[C+0]=on(y,l,"z","y",r,n),p[C+1]=1-on(y,l,"y","z",r,t);break;case 1:y.set(-1,0,0),p[C+0]=1-on(y,l,"z","y",r,n),p[C+1]=1-on(y,l,"y","z",r,t);break;case 2:y.set(0,1,0),p[C+0]=1-on(y,l,"x","z",r,e),p[C+1]=on(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),p[C+0]=1-on(y,l,"x","z",r,e),p[C+1]=1-on(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),p[C+0]=1-on(y,l,"x","y",r,e),p[C+1]=1-on(y,l,"y","x",r,t);break;case 5:y.set(0,0,-1),p[C+0]=on(y,l,"x","y",r,e),p[C+1]=1-on(y,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var xl=new Map,lt=(i,e={})=>new sn({color:i,roughness:.46,...e}),Bn=lt(16777215),Ar=lt(2599033),Oi=lt(2644032),vl=lt(15656654),h_=lt(15967851),La=lt(13887711,{transparent:!0,opacity:.3,roughness:.15,metalness:.08,depthWrite:!1}),gl=new Map;function u_(i,e="#183a32",t="#fffef6"){let n=i+e+t;if(gl.has(n))return gl.get(n);let s=document.createElement("canvas");s.width=256,s.height=256;let r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,256,256),r.textAlign="center",r.fillStyle=e,r.font="600 38px -apple-system,sans-serif",r.fillText(i,128,145);let o=new Un(s);return o.colorSpace=Mt,gl.set(n,o),o}function zn(i,e,t,n,s,r){let o=new St(e,t);return o.position.set(n,s,r),i.add(o),o}function ct(i,e,t,n,s,r,o,a=Bn,c=.025){return zn(i,new Ts(e,t,n,3,c),a,s,r,o)}function Cr(i,e,t,n,s,r,o=1,a=1,c=1){let l=zn(i,new pr(e,20,14),r,t,n,s);return l.scale.set(o,a,c),l}function kn(i,e,t,n,s,r,o,a){return zn(i,new ls(e,t,n,24),a,s,r,o)}function As(i,e,t,n,s,r,o,a,c){return zn(i,new pn(t,n),new Zt({map:u_(e,a,c),toneMapped:!1}),s,r,o)}function d_(i,e,t,n=1){let s=new vt;s.position.set(e,0,t),s.scale.setScalar(n),i.add(s),ct(s,.39,.82,.34,0,.41,0,Bn),ct(s,.4,.19,.35,0,.53,0,Ar,.01);let r=new ds;r.moveTo(-.195,0),r.lineTo(.195,0),r.lineTo(0,.17),r.closePath();let o=new dr(r,{depth:.34,bevelEnabled:!1});o.translate(0,0,-.17),zn(s,o,Bn,0,.82,0),kn(s,.055,.055,.035,.09,.98,.04,Ar),As(s,"MILK",.32,.29,0,.31,.176)}function _l(i,e,t,n=12815948,s=""){let r=new vt;r.position.set(e,0,t),i.add(r);let o=lt(n);return kn(r,.17,.17,.48,0,.24,0,o),kn(r,.184,.184,.055,0,.51,0,Oi),kn(r,.18,.18,.48,0,.25,0,La),s&&As(r,s,.26,.2,0,.27,.185),r}function Ia(i,e,t,n="YOGURT",s=16777215){let r=new vt;return r.position.set(e,0,t),i.add(r),kn(r,.22,.17,.43,0,.215,0,lt(s)),kn(r,.235,.235,.035,0,.45,0,Ar),As(r,n,.32,.2,0,.25,.205),r}function Pa(i,e,t,n=15053173){let s=new vt;return s.position.set(e,0,t),i.add(s),ct(s,.65,.29,.43,0,.17,0,La,.055),ct(s,.57,.15,.35,0,.14,0,lt(n),.04),ct(s,.69,.05,.47,0,.33,0,Bn,.04),ct(s,.21,.045,.03,0,.3,.24,Ar,.012),s}function f_(i,e){if(e!=="leaves")for(let t=0;t<3;t++){let n=zn(i,new nr(.085,.59,16),lt(15307841),.17+t*.095,.3,.08-t*.08);n.rotation.z=Math.PI+.15;for(let s=0;s<2;s++){let r=Cr(i,.1,.18+t*.095,.63,.04-t*.08,Oi,.42,1.7,.4);r.rotation.z=(s-.5)*.5}}if(e!=="carrots")for(let t=0;t<9;t++){let n=t*2.4,s=Cr(i,.18,-.21+Math.sin(n)*.13,.27+t%3*.1,-.03+Math.cos(n)*.12,lt(t%2?6327618:8759387),.7,1.4,.5);s.rotation.z=Math.sin(n)*.6}}function p_(i){ct(i,.86,.09,.47,0,.045,0,vl,.025);for(let e=0;e<2;e++)for(let t=0;t<3;t++)Cr(i,.115,(t-1)*.25,.18,(e-.5)*.23,lt(15984332),.86,1.25,.86)}function m_(i){let e=[15702836,14511682,15317325];for(let t=0;t<3;t++){let n=(t-1)*.23,s=t===1?-.16:.08;Cr(i,.19,n,.2,s,lt(e[t])),kn(i,.012,.012,.075,n,.4,s,Oi);let r=Cr(i,.07,n+.05,.42,s,Oi,1.4,.25,.6);r.rotation.z=.3}}function Bu(i){ct(i,.85,.045,.58,0,.03,0,Bn,.04),ct(i,.88,.06,.025,0,.045,.3,vl,.012)}var Da=document.createElement("canvas");Da.width=Da.height=64;var yl=Da.getContext("2d"),Ml=yl.createRadialGradient(32,32,4,32,32,32);Ml.addColorStop(0,"rgba(24,58,50,.24)");Ml.addColorStop(1,"rgba(24,58,50,0)");yl.fillStyle=Ml;yl.fillRect(0,0,64,64);var g_=new Un(Da);function __(i,e){let t={Milk:[16250604,"MILK",2599033],"Oat milk":[14799794,"OAT",1587762],Juice:[15250257,"ORANGE",2599033],Cola:[4927524,"COLA",1587762],Water:[13360854,"WATER",8168079],"Sparkling water":[12178113,"SPARKLING",1587762],Tonic:[14476500,"TONIC",1587762],Wine:[5794878,"WINE",1587762],Beer:[8411179,"LAGER",13153135],Cider:[8492892,"CIDER",1587762]},[n,s,r]=t[e],o=["Wine","Beer","Cider"].includes(e),a=[[0,0],[.18,0],[.21,.035],[.215,.1],[.215,.72],[.205,.8],[.17,.86],[.09,.94],[.075,o?1.24:1.04],[0,o?1.24:1.04]].map(([h,u])=>new le(h,u)),c=lt(n,{roughness:.25,metalness:.06});zn(i,new fr(a,32),c,0,.01,0),kn(i,.087,.087,.065,0,o?1.25:1.06,0,lt(r)),As(i,s,.35,.32,0,.49,.218,"#183a32","#fffef6");let l=lt(16777215,{transparent:!0,opacity:.2,depthWrite:!1});if(ct(i,.023,.49,.008,-.13,.44,.175,l,.004),e==="Water"||e==="Sparkling water")for(let h=0;h<3;h++){let u=zn(i,new mr(.216,.009,6,32),c,0,.12+h*.075,0);u.rotation.x=Math.PI/2}e==="Beer"&&i.scale.setScalar(.89)}function x_(i){let e=new vt;switch(i){case"Milk":case"Oat milk":case"Juice":case"Cola":case"Water":case"Sparkling water":case"Tonic":case"Wine":case"Beer":case"Cider":__(e,i);break;case"Dairy":d_(e,-.2,-.03,.92),ct(e,.35,.2,.3,.27,.11,.15,lt(15782269),.025);break;case"Vegetables":f_(e);break;case"Leftovers":Pa(e,-.1,.05,14459749);let n=Pa(e,.07,-.04,9347693);n.position.y=.37;break;case"Yogurt":Ia(e,-.2,0),Ia(e,.22,-.15,"YOGURT").scale.setScalar(.85);break;case"Meat & fish":Bu(e);let r=ct(e,.59,.16,.32,0,.15,.02,lt(15641235),.06);r.rotation.y=-.12;for(let a=0;a<5;a++){let c=ct(e,.014,.005,.3,-.23+a*.105,.234,.02,lt(16573136),.002);c.rotation.y=-.12}break;case"Sauces":_l(e,-.24,.04,7770956,"PESTO");let o=_l(e,.19,-.05,12613451,"SAUCE");o.scale.y=1.3;break;case"Deli":Bu(e),kn(e,.22,.22,.18,-.14,.15,0,lt(14796443)),ct(e,.3,.16,.3,.22,.15,.07,lt(15649140));break;case"Fruit":m_(e);break;case"Eggs":p_(e);break;case"Snacks":ct(e,.29,.64,.15,-.19,.34,-.04,Oi),As(e,"COCOA",.25,.22,-.19,.42,.04,"#fff","#285840"),_l(e,.22,.07,9605460,"OLIVES");break;case"Frozen veg":ct(e,.55,.73,.24,0,.38,0,lt(12180683),.065),As(e,"GREENS",.43,.3,0,.38,.125);break;case"Ice cream":Ia(e,-.19,.03,"VANILLA",15984332),Ia(e,.23,-.15,"MANGO",15978381);break;case"Frozen meals":Pa(e,0,0),ct(e,.74,.065,.53,0,.42,0,Oi);break;default:Pa(e,0,0,12180683)}let t=zn(e,new pn(1.1,.85),new Zt({map:g_,transparent:!0,depthWrite:!1}),0,.004,.03);return t.rotation.x=-Math.PI/2,e.rotation.y=-.13,e}function Ua(i,e){xl.get(i)?.dispose();let t;try{t=new bs({alpha:!0,antialias:!0})}catch(y){console.error(y);return}t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setClearColor(0,0),t.outputColorSpace=Mt,t.toneMapping=ms,t.toneMappingExposure=1;let n=t.domElement;n.className="interior-canvas",n.setAttribute("aria-hidden","true"),i.prepend(n),i.classList.add("modeled");let s=[...i.querySelectorAll(".shelf-row")],r=e.map((y,m)=>{let f=new bi;f.background=new Ye(16251383),f.add(new Ti(16777215,11057838,2.1));let C=new ei(16777215,2.4);C.position.set(-2,5,4),f.add(C);let T=new Ai(15335410,1.6,6);T.position.set(0,1,.6),f.add(T);let S=new vt;f.add(S);let P=ct(S,1,2.5,.08,0,.25,-.8,lt(15134184),.025),R=ct(S,.14,2.5,1.7,-1,.25,0,Bn,.04),b=ct(S,.14,2.5,1.7,1,.25,0,Bn,.04),A=ct(S,1,.045,1.6,0,-.64,0,La,.012),g=ct(S,1,.035,.04,0,-.62,-.74,Bn,.008),x=ct(S,1,.065,.07,0,-.64,.83,lt(12180683,{roughness:.25,metalness:.15}),.012),w=ct(S,1,.025,.025,0,1.26,-.48,new Zt({color:16449530}),.005),L=[];for(let V=0;V<4;V++)L.push(ct(S,.3,.016,.008,0,.89+V*.075,-.752,lt(13359311),.004));let N=y.map(V=>{let z=x_(V.name);return z.name=V.name,z.userData.foods=V.foods??[],z.position.y=-.61,f.add(z),z}),k=new Ci(-2,2,1.2,-1.2,.1,30);return k.position.set(0,2.1,9),k.lookAt(0,-.04,0),{scene:f,camera:k,groups:N,back:P,left:R,right:b,floor:A,rearRail:g,frontRail:x,led:w,element:s[m]}}),o=!0,a=0,c=!0,l=0,h=0,u=new ResizeObserver(()=>c=!0);u.observe(i);let d=()=>c=!0;s.forEach(y=>y.addEventListener("scroll",d,{passive:!0}));let p=new MutationObserver(d);p.observe(document.body,{attributes:!0,attributeFilter:["class"]});function _(){if(a=requestAnimationFrame(_),!o||!c||!document.body.classList.contains("inventory-visible"))return;let y=i.clientWidth,m=i.clientHeight;!y||!m||((y!==l||m!==h)&&(t.setSize(y,m,!1),l=y,h=m),t.setScissorTest(!1),t.clear(),t.setScissorTest(!0),r.forEach(f=>{let C={width:f.element.clientWidth,left:f.element.offsetLeft,top:f.element.offsetTop+f.element.parentElement.offsetTop},T=f.element.clientHeight-35,S=C.width/100,P=T/100;f.camera.left=-S/2,f.camera.right=S/2,f.camera.top=P/2,f.camera.bottom=-P/2,f.camera.updateProjectionMatrix(),f.back.scale.x=S,f.left.position.x=-S/2+.035,f.right.position.x=S/2-.035;for(let A of[f.floor,f.frontRail,f.rearRail,f.led])A.scale.x=S-.12;let R=[...f.element.querySelectorAll(".food-card")];f.groups.forEach((A,g)=>{A.position.x=(R[g].offsetLeft-f.element.scrollLeft+R[g].offsetWidth/2-C.width/2)/100});let b=m-C.top-T;t.setViewport(C.left,b,C.width,T),t.setScissor(C.left,b,C.width,T),t.render(f.scene,f.camera)}),c=!1)}_(),xl.set(i,{scenes:r,root:i,dispose:()=>{o=!1,cancelAnimationFrame(a),u.disconnect(),p.disconnect(),s.forEach(y=>y.removeEventListener("scroll",d)),r.forEach(y=>y.scene.traverse(m=>{m.geometry?.dispose(),m.material&&!Object.values({white:Bn,green:Ar,darkGreen:Oi,cream:vl,orange:h_,glass:La}).includes(m.material)&&m.material.dispose()})),t.dispose(),t.forceContextLoss(),n.remove(),i.classList.remove("modeled")}})}function Sl(i="fridge"){let t=(i==="drinks"?["#drinks-shelves"]:["#shelves","#freezer-shelf"]).flatMap(s=>xl.get(document.querySelector(s))?.scenes??[]),n=document.querySelector("#shelves").clientWidth/100;return Ou(t,n,i)}var v_={Milk:[["Whole milk","\u{1F95B}",1,"1 litre",2]],"Oat milk":[["Oat milk","\u{1F95B}",1,"1 litre",6]],Juice:[["Orange juice","\u{1F34A}",1,"750 ml",3]],Cola:[["Cola","\u{1F964}",2,"2 \xD7 330 ml",90]],Water:[["Still mineral water","\u{1F4A7}",2,"2 \xD7 500 ml",180]],"Sparkling water":[["Sparkling water","\u{1F4A7}",2,"2 \xD7 500 ml",120]],Tonic:[["Tonic water","\u{1F964}",2,"2 \xD7 200 ml",90]],Wine:[["White wine","\u{1F377}",1,"750 ml",120]],Beer:[["Lager","\u{1F37A}",2,"2 \xD7 330 ml",90]],Cider:[["Apple cider","\u{1F34E}",1,"500 ml",90]],Dairy:[["Milk","\u{1F95B}",1,"1 litre",1],["Cheddar","\u{1F9C0}",1,"200 g",9],["Butter","\u{1F9C8}",1,"250 g",21],["Double cream","\u{1F95B}",1,"300 ml",7]],Vegetables:[["Spinach","\u{1F96C}",1,"1 bag",2],["Broccoli","\u{1F966}",1,"1 head",6],["Carrots","\u{1F955}",3,"3 carrots",10],["Cucumber","\u{1F952}",1,"1 cucumber",6],["Red pepper","\u{1FAD1}",1,"1 pepper",7]],Leftovers:[["Vegetable pasta","\u{1F35D}",1,"1 container",1],["Roast vegetables","\u{1F958}",1,"1 container",2]],Yogurt:[["Greek yogurt","\u{1F963}",1,"500 g",5],["Strawberry yogurt","\u{1F963}",2,"2 pots",8]],"Meat & fish":[["Chicken breast","\u{1F357}",2,"2 portions",2],["Salmon fillet","\u{1F41F}",1,"1 fillet",4]],Sauces:[["Pesto","\u{1FAD9}",1,"1 jar",7],["Mayonnaise","\u{1FAD9}",1,"1 jar",25],["Mustard","\u{1FAD9}",1,"1 jar",35],["Soy sauce","\u{1FAD9}",1,"1 bottle",90],["Hot sauce","\u{1F336}\uFE0F",1,"1 bottle",60],["Ketchup","\u{1F345}",1,"1 bottle",40]],Deli:[["Hummus","\u{1F9C6}",1,"200 g",5],["Sliced ham","\u{1F953}",1,"120 g",4]],Fruit:[["Oranges","\u{1F34A}",2,"2 oranges",10],["Apples","\u{1F34E}",2,"2 apples",14],["Blueberries","\u{1FAD0}",1,"1 punnet",4]],Eggs:[["Free-range eggs","\u{1F95A}",12,"12 eggs",16]],Snacks:[["Dark chocolate","\u{1F36B}",1,"1 bar",90],["Olives","\u{1FAD2}",1,"1 tub",10],["Cheese bites","\u{1F9C0}",1,"1 pack",8]],"Frozen veg":[["Frozen peas","\u{1FADB}",1,"500 g",90],["Sweetcorn","\u{1F33D}",1,"500 g",80],["Mixed vegetables","\u{1F966}",1,"1 bag",100]],"Ice cream":[["Vanilla ice cream","\u{1F368}",1,"500 ml",60],["Mango sorbet","\u{1F96D}",1,"500 ml",70]],"Frozen meals":[["Vegetable dumplings","\u{1F95F}",2,"2 packs",45],["Margherita pizza","\u{1F355}",1,"1 pizza",60],["Vegetable curry","\u{1F35B}",1,"1 portion",30]]};function y_(i){return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`}function M_(i,e=new Date){if(!/^\d{4}-\d{2}-\d{2}$/.test(i??""))return null;let[t,n,s]=i.split("-").map(Number),r=new Date(t,n-1,s);return r.getFullYear()!==t||r.getMonth()!==n-1||r.getDate()!==s?null:Math.round((Date.UTC(t,n-1,s)-Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))/864e5)}function ku(i,e=new Date){return(v_[i]??[]).map(([t,n,s,r,o],a)=>{let c=new Date(e.getFullYear(),e.getMonth(),e.getDate()+o);return{id:`${i}-${a}`,name:t,icon:n,quantity:s,portion:r,expiresOn:y_(c)}})}function S_(i,e=new Date){let t=M_(i.expiresOn,e);return{urgent:t!==null&&t<=3,label:t===null?"No date":t<0?"Expired":t===0?"Use today":t===1?"Use tomorrow":t<=3?`Use in ${t} days`:`${t} days left`}}function zu(i,e=new Date){return i.reduce((t,n)=>({count:t.count+n.quantity,useSoon:t.useSoon+(S_(n,e).urgent?n.quantity:0)}),{count:0,useSoon:0})}var b_=[[{name:"Dairy",icon:"\u{1F95B}",count:4,useSoon:1},{name:"Vegetables",icon:"\u{1F96C}",count:7},{name:"Leftovers",icon:"\u{1F371}",count:2,useSoon:2},{name:"Yogurt",icon:"\u{1F963}",count:3}],[{name:"Meat & fish",icon:"\u{1F41F}",count:3},{name:"Sauces",icon:"\u{1FAD9}",count:6},{name:"Deli",icon:"\u{1F9C0}",count:2}],[{name:"Fruit",icon:"\u{1F34A}",count:5},{name:"Eggs",icon:"\u{1F95A}",count:12},{name:"Snacks",icon:"\u{1F36B}",count:3}]],Ct;try{let i=JSON.parse(localStorage.getItem("fridge-shelves-v1"));Array.isArray(i)&&i.length>=1&&i.length<=6&&i.every(e=>Array.isArray(e)&&e.every(t=>typeof t.name=="string"&&typeof t.icon=="string"&&Number.isFinite(t.count)))&&(Ct=i)}catch{}Ct??=b_;function Cs(i){Array.isArray(i.foods)||(i.foods=ku(i.name)),Object.assign(i,zu(i.foods))}for(let i of Ct)for(let e of i)Cs(e);var Qe=i=>document.querySelector(i),Na=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ii=Qe("#item-dialog");function E_(){try{localStorage.setItem("fridge-shelves-v1",JSON.stringify(Ct))}catch{}}function bl(i,e,t=!0,n=t?e:"frozen"){return`<section class="shelf"><div class="shelf-row" tabindex="0" aria-label="${String(n).startsWith("drinks-")?"Drinks shelf "+(e+1):t?"Shelf "+(e+1):"Freezer"} inventory, scroll horizontally">${i.map((s,r)=>`<button class="food-card" data-shelf="${n}" data-item="${r}"><span class="food-art">${s.icon}</span><span class="food-name">${Na(s.name)}</span><span class="food-count">${s.count} ${s.count===1?"item":"items"}</span></button>`).join("")}${t?`<button class="add-card" data-add="${e}" aria-label="Add category to shelf ${e+1}"><span>+</span><small>Add</small></button>`:""}</div><div class="shelf-ledge"></div></section>`}var Bi=[{name:"Frozen veg",icon:"\u{1F966}"},{name:"Ice cream",icon:"\u{1F368}"},{name:"Frozen meals",icon:"\u{1F95F}"}];try{let i=JSON.parse(localStorage.getItem("fridge-frozen-v1"));if(Array.isArray(i))for(let e of Bi){let t=i.find(n=>n.name===e.name);Array.isArray(t?.foods)&&(e.foods=t.foods)}}catch{}Bi.forEach(Cs);try{localStorage.setItem("fridge-frozen-v1",JSON.stringify(Bi))}catch{}var Rs=[[{name:"Milk",icon:"\u{1F95B}"},{name:"Oat milk",icon:"\u{1F95B}"},{name:"Juice",icon:"\u{1F34A}"}],[{name:"Cola",icon:"\u{1F964}"},{name:"Water",icon:"\u{1F4A7}"},{name:"Sparkling water",icon:"\u{1F4A7}"},{name:"Tonic",icon:"\u{1F964}"}],[{name:"Wine",icon:"\u{1F377}"},{name:"Beer",icon:"\u{1F37A}"},{name:"Cider",icon:"\u{1F34E}"}]];try{let i=JSON.parse(localStorage.getItem("fridge-drinks-v1"));if(Array.isArray(i))for(let e of Rs.flat()){let t=i.flat().find(n=>n.name===e.name);Array.isArray(t?.foods)&&(e.foods=t.foods)}}catch{}Rs.flat().forEach(Cs);try{localStorage.setItem("fridge-drinks-v1",JSON.stringify(Rs))}catch{}Qe("#drinks-shelves").innerHTML=Rs.map((i,e)=>bl(i,e,!1,"drinks-"+e)).join("");Ua(Qe("#drinks-shelves"),Rs);function Oa(){Ct.flat().forEach(Cs),Bi.forEach(Cs),Qe("#shelves").innerHTML=Ct.map((i,e)=>bl(i,e)).join(""),Qe("#shelf-count").textContent=Ct.length,Qe("#shelf-less").disabled=Ct.length<=1,Qe("#shelf-more").disabled=Ct.length>=6,Qe("#freezer-shelf").innerHTML=bl(Bi,0,!1),Ua(Qe("#shelves"),Ct),Ua(Qe("#freezer-shelf"),[Bi]),E_()}Qe("#shelf-more").onclick=()=>{Ct.length<6&&(Ct.push([]),Oa())};Qe("#shelf-less").onclick=()=>{if(Ct.length>1){let i=Ct.pop();Ct.at(-1).push(...i),Oa(),Qe("#inventory-note").textContent="Categories from the removed shelf moved to the shelf above."}};var Fa=null;function Vu(i,e){ii.classList.remove("food-detail"),Qe("#dialog-title").textContent=i,Qe("#dialog-body").innerHTML=e,ii.showModal()}function w_(i){return`<article class="food-entry"><span class="entry-icon" aria-hidden="true">${Na(i.icon)}</span><div class="entry-info"><h3>${Na(i.name)}</h3><p>${Na(i.portion)}</p></div></article>`}Qe("#inventory").addEventListener("click",i=>{let e=i.target.closest("[data-add]");if(e){Fa={shelf:Number(e.dataset.add),item:null},Vu("Add category",'<label>Category name<input id="category-name" maxlength="32" required placeholder="e.g. Breakfast" autocomplete="off"></label><button class="save-item" type="submit">Add to shelf</button>');return}let t=i.target.closest("[data-item]");if(t){let n=t.dataset.shelf==="frozen",r=(t.dataset.shelf.startsWith("drinks-")?Rs[Number(t.dataset.shelf.split("-")[1])]:n?Bi:Ct[Number(t.dataset.shelf)])[Number(t.dataset.item)];Fa=null,Cs(r);let o=[...r.foods].sort((a,c)=>(a.expiresOn||"9999").localeCompare(c.expiresOn||"9999"));Vu(r.name,`<p class="category-summary">${r.count} ${r.count===1?"item":"items"}</p><div class="food-list">${o.length?o.map(w_).join(""):'<p class="empty-category">No food in this category yet.</p>'}</div>`),ii.classList.add("food-detail")}});Qe("#category-form").onsubmit=i=>{if(i.preventDefault(),!Fa)return;let e=Qe("#category-name").value.trim();e&&(Ct[Fa.shelf].push({name:e,count:0,icon:"\u{1F9FA}",foods:[]}),Oa(),ii.close())};Qe("#dialog-close").onclick=()=>ii.close();ii.addEventListener("click",i=>{i.target===ii&&ii.close()});for(let i of document.querySelectorAll("[data-section]"))i.onclick=()=>window.dispatchEvent(new CustomEvent("cabinet-select",{detail:"fridge"}));Qe("#drinks-button").onclick=()=>window.dispatchEvent(new CustomEvent("cabinet-select",{detail:"drinks"}));Qe("#recipe-button").onclick=()=>window.dispatchEvent(new Event("recipe-select"));Qe("#menu-button").onclick=()=>window.dispatchEvent(new Event("menu-select"));Oa();var At=null,Rr=0;Qe("#inventory").addEventListener("pointerdown",i=>{let e=i.target.closest(".shelf-row");e&&(At={row:e,x:i.clientX,y:i.clientY,left:e.scrollLeft,id:i.pointerId,moved:!1})});Qe("#inventory").addEventListener("pointermove",i=>{if(!At||At.id!==i.pointerId)return;let e=i.clientX-At.x,t=i.clientY-At.y;if(!At.moved&&Math.abs(t)>Math.abs(e)&&Math.abs(t)>8){At=null;return}Math.abs(e)>8&&!At.moved&&(At.moved=!0,At.row.style.scrollSnapType="none",At.row.setPointerCapture(i.pointerId)),At.moved&&(i.preventDefault(),At.row.scrollLeft=At.left-e,Rr=performance.now()+350)},{passive:!1});function Hu(){At?.moved&&(At.row.style.scrollSnapType="",Rr=performance.now()+350),At=null}Qe("#inventory").addEventListener("pointerup",Hu);Qe("#inventory").addEventListener("pointercancel",Hu);Qe("#inventory").addEventListener("click",i=>{performance.now()<Rr&&(i.preventDefault(),i.stopImmediatePropagation())},!0);var Qt=null;Qe("#inventory").addEventListener("touchstart",i=>{let e=i.target.closest(".shelf-row");if(!e||i.touches.length!==1)return;let t=i.touches[0];Qt={row:e,x:t.clientX,y:t.clientY,left:e.scrollLeft,moved:!1}},{passive:!0});Qe("#inventory").addEventListener("touchmove",i=>{if(!Qt||i.touches.length!==1)return;let e=i.touches[0],t=e.clientX-Qt.x,n=e.clientY-Qt.y;if(!Qt.moved&&Math.abs(n)>Math.abs(t)&&Math.abs(n)>8){Qt=null;return}Math.abs(t)>8&&(i.preventDefault(),Qt.moved=!0,Qt.row.style.scrollSnapType="none",Qt.row.scrollLeft=Qt.left-t,Rr=performance.now()+500)},{passive:!1});function Gu(){Qt?.moved&&(Qt.row.style.scrollSnapType="",Rr=performance.now()+500),Qt=null}Qe("#inventory").addEventListener("touchend",Gu);Qe("#inventory").addEventListener("touchcancel",Gu);var Xu="fridge-recipes-v1",El=["\u{1F957}","\u{1F35D}","\u{1F35C}","\u{1F35A}","\u{1F96A}","\u{1F372}","\u{1F373}","\u{1F95E}","\u{1F32E}","\u{1F355}","\u{1F954}","\u{1F966}"],T_=[{id:"spinach-eggs",name:"Spinach & eggs",icon:"\u{1F957}",minutes:15,servings:1,ingredients:["2 eggs","2 handfuls spinach","30 g cheddar","1 tsp mustard","1 tsp olive oil"],steps:["Boil the eggs for 9 minutes, then cool, peel and slice.","Wash the spinach and place it in a bowl. Add the sliced eggs and grated cheddar.","Mix the mustard and olive oil, drizzle over the salad and serve."]},{id:"tomato-pasta",name:"Tomato pasta",icon:"\u{1F35D}",minutes:20,servings:2,ingredients:["180 g pasta","400 g chopped tomatoes","2 garlic cloves","1 tbsp olive oil","20 g parmesan","Salt and pepper"],steps:["Bring a pan of salted water to the boil. Cook the pasta according to the packet.","Finely chop the garlic. Warm the oil in a pan and gently cook the garlic for 1 minute.","Add the tomatoes and simmer for 10 minutes. Season to taste.","Drain the pasta, keeping a little cooking water. Toss with the sauce and a splash of the water, then top with parmesan."]},{id:"vegetable-rice",name:"Veggie rice",icon:"\u{1F35A}",minutes:25,servings:2,ingredients:["150 g uncooked rice","1 carrot, diced","100 g frozen peas","2 eggs","1 tbsp soy sauce","1 tbsp vegetable oil"],steps:["Cook the rice according to its packet instructions and drain well.","Heat the oil in a large pan. Cook the diced carrot for 4 minutes, then add the peas.","Push the vegetables aside and scramble the eggs in the pan.","Add the rice and soy sauce. Stir over the heat until everything is hot, then serve."]},{id:"avocado-toast",name:"Avocado toast",icon:"\u{1F96A}",minutes:10,servings:1,ingredients:["2 slices bread","1 ripe avocado","1 tsp lemon juice","A pinch of chilli flakes","Salt and pepper"],steps:["Toast the bread until golden.","Mash the avocado with the lemon juice, salt and pepper.","Spread over the toast and finish with chilli flakes."]},{id:"vegetable-soup",name:"Vegetable soup",icon:"\u{1F372}",minutes:30,servings:3,ingredients:["1 onion","2 carrots","1 potato","100 g peas","750 ml vegetable stock","1 tbsp olive oil"],steps:["Peel and dice the onion, carrots and potato.","Heat the oil in a saucepan. Cook the onion for 5 minutes until softened.","Add the carrots, potato and stock. Simmer for 18 minutes, or until the vegetables are tender.","Add the peas and simmer for another 3 minutes. Season and serve."]},{id:"cheese-omelette",name:"Cheese omelette",icon:"\u{1F373}",minutes:10,servings:1,ingredients:["2 eggs","30 g cheddar","1 tsp butter","Salt and pepper"],steps:["Beat the eggs with a pinch of salt and pepper. Grate the cheese.","Melt the butter in a small pan over medium heat. Pour in the eggs and gently move the cooked edges towards the centre.","When the egg is set, scatter over the cheese, fold the omelette and serve."]},{id:"banana-pancakes",name:"Banana pancakes",icon:"\u{1F95E}",minutes:20,servings:2,ingredients:["1 ripe banana","1 egg","100 g plain flour","120 ml milk","1 tsp baking powder","1 tsp vegetable oil"],steps:["Mash the banana. Whisk in the egg and milk.","Stir in the flour and baking powder until just combined.","Lightly oil a pan over medium heat. Add small spoonfuls of batter.","Cook until bubbles form, flip and cook the other side until golden and cooked through."]},{id:"bean-tacos",name:"Bean tacos",icon:"\u{1F32E}",minutes:15,servings:2,ingredients:["4 small tortillas","400 g canned beans, drained","1 tomato","1 handful lettuce","30 g cheddar","1 tsp ground cumin"],steps:["Warm the beans in a pan with the cumin and a splash of water.","Dice the tomato, shred the lettuce and grate the cheese.","Warm the tortillas and fill them with the beans. Add the vegetables and cheese."]},{id:"pesto-potatoes",name:"Pesto potatoes",icon:"\u{1F954}",minutes:30,servings:2,ingredients:["400 g baby potatoes","2 tbsp pesto","1 tbsp olive oil","20 g parmesan"],steps:["Heat the oven to 200\xB0C. Halve the potatoes and toss with the oil.","Spread on a baking tray and roast for 25 minutes, turning halfway, until tender.","Toss with the pesto and sprinkle over the parmesan."]}],Wu=i=>String(i??"").split(/\r?\n/).map(e=>e.trim()).filter(Boolean);function wl(i,e){let t=String(i.name??"").trim(),n=Number(i.minutes),s=Number(i.servings),r=Array.isArray(i.ingredients)?i.ingredients:Wu(i.ingredients),o=Array.isArray(i.steps)?i.steps:Wu(i.steps);if(!t||t.length>60)throw new Error("Enter a recipe name (up to 60 characters).");if(!Number.isInteger(n)||n<1||n>1440)throw new Error("Enter a cooking time between 1 and 1,440 minutes.");if(!Number.isInteger(s)||s<1||s>50)throw new Error("Enter between 1 and 50 servings.");if(!r.length||r.length>40||r.some(a=>typeof a!="string"||!a.trim()||a.length>180))throw new Error("Add 1\u201340 ingredients, one per line (up to 180 characters each).");if(!o.length||o.length>30||o.some(a=>typeof a!="string"||!a.trim()||a.length>1200))throw new Error("Add 1\u201330 steps, one per line (up to 1,200 characters each).");return{id:e,name:t,icon:El.includes(i.icon)?i.icon:"\u{1F372}",minutes:n,servings:s,ingredients:r.map(a=>a.trim()),steps:o.map(a=>a.trim())}}function qu(i){try{let e=i.getItem(Xu);if(e!==null){let t=JSON.parse(e);if(!Array.isArray(t))throw new Error("Invalid recipe data");let n=new Set;return t.map(s=>{if(typeof s.id!="string"||!s.id||n.has(s.id))throw new Error("Invalid recipe ID");return n.add(s.id),wl(s,s.id)})}}catch{}return structuredClone(T_)}function Yu(i,e){i.setItem(Xu,JSON.stringify(e))}function $u(i,e){return i.filter(t=>t.id!==e)}var bn=document.querySelector("#recipes-page"),Vt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ku='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7"/></svg>',Ht=qu(localStorage),si=null,Pr=!1,Tl="list",Qu="list",Ir=null,Zu;bn.innerHTML=`<section class="recipe-pane recipe-library" data-pane="list" aria-label="Recipe library">
 <header class="recipe-heading"><div><p class="recipe-eyebrow">YOUR COLLECTION</p><h1>Recipes<span>.</span></h1></div><button class="recipe-add" aria-label="Add recipe">+</button></header>
 <div class="recipe-list-tools"><span id="recipe-count"></span><button id="recipe-manage">Manage</button></div>
 <div class="recipe-grid"></div><div class="recipe-empty" hidden><span>\u{1F37D}\uFE0F</span><h2>Your recipe book is empty</h2><button class="recipe-primary" id="recipe-empty-add">Add a recipe</button></div>
 </section>
 <section class="recipe-pane recipe-detail" data-pane="detail" aria-label="Recipe details" inert></section>
 <section class="recipe-pane recipe-editor" data-pane="editor" aria-label="Recipe editor" inert></section>
 <div class="recipe-toast" role="status" hidden><span></span><button type="button">Undo</button></div>`;var xt=i=>bn.querySelector(i);function Is(i){Tl=i,bn.dataset.view=i;for(let e of bn.querySelectorAll("[data-pane]"))e.inert=e.dataset.pane!==i}function ju(i){requestAnimationFrame(()=>xt(i+" h1")?.focus({preventScroll:!0}))}function Ps(){xt("#recipe-count").textContent=`${Ht.length} ${Ht.length===1?"recipe":"recipes"}`,xt("#recipe-manage").textContent=Pr?"Done":"Manage",xt("#recipe-manage").hidden=!Ht.length,xt("#recipe-manage").setAttribute("aria-pressed",String(Pr)),xt(".recipe-grid").innerHTML=Ht.map(i=>`<article class="recipe-tile"><button class="recipe-card" data-recipe="${Vt(i.id)}" aria-label="Open ${Vt(i.name)}"><span class="recipe-logo" aria-hidden="true">${Vt(i.icon)}</span><strong>${Vt(i.name)}</strong><small>${i.minutes} min</small></button>${Pr?`<button class="recipe-remove" data-delete="${Vt(i.id)}" aria-label="Delete ${Vt(i.name)}">\u2212</button>`:""}</article>`).join(""),xt(".recipe-empty").hidden=Ht.length>0}function Al(i){try{return Yu(localStorage,i),Ht=i,!0}catch{return Ba("Could not save. Please try again."),!1}}function Ba(i,e=!1){clearTimeout(Zu),xt(".recipe-toast span").textContent=i,xt(".recipe-toast button").hidden=!e,xt(".recipe-toast").hidden=!1,Zu=setTimeout(()=>{xt(".recipe-toast").hidden=!0},6500)}function Cl(i){let e=Ht.find(t=>t.id===i);e&&(si=i,xt(".recipe-detail").innerHTML=`<header class="recipe-subnav"><button class="recipe-back recipe-circle" aria-label="Back to recipes">${Ku}</button><button class="recipe-edit" type="button">Edit</button></header>
 <div class="recipe-hero"><div class="recipe-hero-logo" aria-hidden="true">${Vt(e.icon)}</div><h1 tabindex="-1">${Vt(e.name)}</h1><div class="recipe-meta"><span>\u25F7 ${e.minutes} min</span><span>${e.servings} ${e.servings===1?"serving":"servings"}</span></div></div>
 <section class="recipe-ingredients"><h2>Ingredients <small>${e.ingredients.length}</small></h2><ul>${e.ingredients.map(t=>`<li>${Vt(t)}</li>`).join("")}</ul></section>
 <section class="recipe-method"><h2>Method</h2><ol>${e.steps.map((t,n)=>`<li><span aria-hidden="true">${n+1}</span><p>${Vt(t)}</p></li>`).join("")}</ol></section>
 <button class="recipe-delete-text" data-delete="${Vt(e.id)}">Delete recipe</button>`,xt(".recipe-detail").scrollTop=0,Is("detail"),ju(".recipe-detail"))}function Ju(i=null){Qu=i?"detail":"list",si=i?.id??null,xt(".recipe-editor").innerHTML=`<header class="recipe-subnav"><button class="recipe-editor-back recipe-circle" aria-label="Cancel recipe changes">${Ku}</button><span>${i?"Edit recipe":"New recipe"}</span></header>
 <h1 tabindex="-1">${i?"Make it yours.":"Add a recipe."}</h1>
 <form id="recipe-form"><fieldset class="recipe-icon-picker"><legend>Dish icon</legend>${El.map(e=>`<label><input type="radio" name="icon" value="${e}" ${(i?.icon??"\u{1F372}")===e?"checked":""}><span>${e}</span></label>`).join("")}</fieldset>
 <label class="recipe-field">Recipe name<input name="name" maxlength="60" required value="${Vt(i?.name??"")}" placeholder="e.g. Mushroom pasta"></label>
 <div class="recipe-form-row"><label class="recipe-field">Time (minutes)<input name="minutes" type="number" min="1" max="1440" required value="${i?.minutes??20}" inputmode="numeric"></label><label class="recipe-field">Servings<input name="servings" type="number" min="1" max="50" required value="${i?.servings??2}" inputmode="numeric"></label></div>
 <label class="recipe-field">Ingredients <small>One ingredient and its amount per line</small><textarea name="ingredients" rows="5" maxlength="7200" required placeholder="200 g pasta&#10;150 g mushrooms">${Vt(i?.ingredients.join(`
`)??"")}</textarea></label>
 <label class="recipe-field">Method <small>One step per line</small><textarea name="steps" rows="6" maxlength="36000" required placeholder="Bring a pan of water to the boil.&#10;Slice and saut\xE9 the mushrooms.">${Vt(i?.steps.join(`
`)??"")}</textarea></label>
 <p class="recipe-form-error" role="alert" hidden></p><button class="recipe-primary" type="submit">Save recipe</button></form>`,xt(".recipe-editor").scrollTop=0,Is("editor"),ju(".recipe-editor"),xt("#recipe-form").onsubmit=e=>{e.preventDefault();try{let t=Object.fromEntries(new FormData(e.currentTarget)),n=si??crypto.randomUUID(),s=wl(t,n),r=si?Ht.map(o=>o.id===si?s:o):[s,...Ht];if(!Al(r))return;Ps(),Cl(n),Ba("Recipe saved")}catch(t){xt(".recipe-form-error").hidden=!1,xt(".recipe-form-error").textContent=t.message}}}function ed(){Tl==="editor"&&Qu==="detail"?Cl(si):(Is("list"),requestAnimationFrame(()=>(bn.querySelector(`[data-recipe="${CSS.escape(si??"")}"]`)??xt(".recipe-add")).focus({preventScroll:!0})))}bn.addEventListener("click",i=>{let e=i.target.closest("[data-recipe]");if(e){Cl(e.dataset.recipe);return}let t=i.target.closest("[data-delete]");if(t){let n=Ht.findIndex(r=>r.id===t.dataset.delete);if(n<0)return;let s=Ht[n];if(!Al($u(Ht,s.id)))return;Ir={record:s,index:n},Ps(),Is("list"),Ba("Recipe deleted",!0);return}i.target.closest(".recipe-add,#recipe-empty-add")&&Ju(),i.target.closest(".recipe-edit")&&Ju(Ht.find(n=>n.id===si)),i.target.closest(".recipe-back,.recipe-editor-back")&&ed()});xt("#recipe-manage").onclick=()=>{Pr=!Pr,Ps()};xt(".recipe-toast button").onclick=()=>{if(!Ir)return;let i=[...Ht];i.splice(Ir.index,0,Ir.record),Al(i)&&(Ir=null,Ps(),Ba("Recipe restored"))};window.addEventListener("recipes-show",()=>{bn.inert=!1,bn.setAttribute("aria-hidden","false"),Ps(),Is("list")});window.addEventListener("recipes-hide",()=>{bn.inert=!0,bn.setAttribute("aria-hidden","true"),xt(".recipe-toast").hidden=!0});document.addEventListener("keydown",i=>{i.key==="Escape"&&document.body.classList.contains("recipes-open")&&!document.querySelector("dialog[open]")&&Tl!=="list"&&(i.preventDefault(),i.stopImmediatePropagation(),ed())},!0);Ps();Is("list");var Ls=function(i,e){let s=i,r=Lr[e],o=null,a=0,c=null,l=[],h={},u=function(b,A){a=s*4+17,o=(function(g){let x=new Array(g);for(let w=0;w<g;w+=1){x[w]=new Array(g);for(let L=0;L<g;L+=1)x[w][L]=null}return x})(a),d(0,0),d(a-7,0),d(0,a-7),y(),_(),f(b,A),s>=7&&m(b),c==null&&(c=S(s,r,l)),C(c,A)},d=function(b,A){for(let g=-1;g<=7;g+=1)if(!(b+g<=-1||a<=b+g))for(let x=-1;x<=7;x+=1)A+x<=-1||a<=A+x||(0<=g&&g<=6&&(x==0||x==6)||0<=x&&x<=6&&(g==0||g==6)||2<=g&&g<=4&&2<=x&&x<=4?o[b+g][A+x]=!0:o[b+g][A+x]=!1)},p=function(){let b=0,A=0;for(let g=0;g<8;g+=1){u(!0,g);let x=oi.getLostPoint(h);(g==0||b>x)&&(b=x,A=g)}return A},_=function(){for(let b=8;b<a-8;b+=1)o[b][6]==null&&(o[b][6]=b%2==0);for(let b=8;b<a-8;b+=1)o[6][b]==null&&(o[6][b]=b%2==0)},y=function(){let b=oi.getPatternPosition(s);for(let A=0;A<b.length;A+=1)for(let g=0;g<b.length;g+=1){let x=b[A],w=b[g];if(o[x][w]==null)for(let L=-2;L<=2;L+=1)for(let N=-2;N<=2;N+=1)L==-2||L==2||N==-2||N==2||L==0&&N==0?o[x+L][w+N]=!0:o[x+L][w+N]=!1}},m=function(b){let A=oi.getBCHTypeNumber(s);for(let g=0;g<18;g+=1){let x=!b&&(A>>g&1)==1;o[Math.floor(g/3)][g%3+a-8-3]=x}for(let g=0;g<18;g+=1){let x=!b&&(A>>g&1)==1;o[g%3+a-8-3][Math.floor(g/3)]=x}},f=function(b,A){let g=r<<3|A,x=oi.getBCHTypeInfo(g);for(let w=0;w<15;w+=1){let L=!b&&(x>>w&1)==1;w<6?o[w][8]=L:w<8?o[w+1][8]=L:o[a-15+w][8]=L}for(let w=0;w<15;w+=1){let L=!b&&(x>>w&1)==1;w<8?o[8][a-w-1]=L:w<9?o[8][15-w-1+1]=L:o[8][15-w-1]=L}o[a-8][8]=!b},C=function(b,A){let g=-1,x=a-1,w=7,L=0,N=oi.getMaskFunction(A);for(let k=a-1;k>0;k-=2)for(k==6&&(k-=1);;){for(let V=0;V<2;V+=1)if(o[x][k-V]==null){let z=!1;L<b.length&&(z=(b[L]>>>w&1)==1),N(x,k-V)&&(z=!z),o[x][k-V]=z,w-=1,w==-1&&(L+=1,w=7)}if(x+=g,x<0||a<=x){x-=g,g=-g;break}}},T=function(b,A){let g=0,x=0,w=0,L=new Array(A.length),N=new Array(A.length);for(let W=0;W<A.length;W+=1){let H=A[W].dataCount,ne=A[W].totalCount-H;x=Math.max(x,H),w=Math.max(w,ne),L[W]=new Array(H);for(let Oe=0;Oe<L[W].length;Oe+=1)L[W][Oe]=255&b.getBuffer()[Oe+g];g+=H;let fe=oi.getErrorCorrectPolynomial(ne),Ue=Dr(L[W],fe.getLength()-1).mod(fe);N[W]=new Array(fe.getLength()-1);for(let Oe=0;Oe<N[W].length;Oe+=1){let Ze=Oe+Ue.getLength()-N[W].length;N[W][Oe]=Ze>=0?Ue.getAt(Ze):0}}let k=0;for(let W=0;W<A.length;W+=1)k+=A[W].totalCount;let V=new Array(k),z=0;for(let W=0;W<x;W+=1)for(let H=0;H<A.length;H+=1)W<L[H].length&&(V[z]=L[H][W],z+=1);for(let W=0;W<w;W+=1)for(let H=0;H<A.length;H+=1)W<N[H].length&&(V[z]=N[H][W],z+=1);return V},S=function(b,A,g){let x=td.getRSBlocks(b,A),w=nd();for(let N=0;N<g.length;N+=1){let k=g[N];w.put(k.getMode(),4),w.put(k.getLength(),oi.getLengthInBits(k.getMode(),b)),k.write(w)}let L=0;for(let N=0;N<x.length;N+=1)L+=x[N].dataCount;if(w.getLengthInBits()>L*8)throw"code length overflow. ("+w.getLengthInBits()+">"+L*8+")";for(w.getLengthInBits()+4<=L*8&&w.put(0,4);w.getLengthInBits()%8!=0;)w.putBit(!1);for(;!(w.getLengthInBits()>=L*8||(w.put(236,8),w.getLengthInBits()>=L*8));)w.put(17,8);return T(w,x)};h.addData=function(b,A){A=A||"Byte";let g=null;switch(A){case"Numeric":g=A_(b);break;case"Alphanumeric":g=C_(b);break;case"Byte":g=R_(b);break;case"Kanji":g=I_(b);break;default:throw"mode:"+A}l.push(g),c=null},h.isDark=function(b,A){if(b<0||a<=b||A<0||a<=A)throw b+","+A;return o[b][A]},h.getModuleCount=function(){return a},h.make=function(){if(s<1){let b=1;for(;b<40;b++){let A=td.getRSBlocks(b,r),g=nd();for(let w=0;w<l.length;w++){let L=l[w];g.put(L.getMode(),4),g.put(L.getLength(),oi.getLengthInBits(L.getMode(),b)),L.write(g)}let x=0;for(let w=0;w<A.length;w++)x+=A[w].dataCount;if(g.getLengthInBits()<=x*8)break}s=b}u(!1,p())},h.createTableTag=function(b,A){b=b||2,A=typeof A>"u"?b*4:A;let g="";g+='<table style="',g+=" border-width: 0px; border-style: none;",g+=" border-collapse: collapse;",g+=" padding: 0px; margin: "+A+"px;",g+='">',g+="<tbody>";for(let x=0;x<h.getModuleCount();x+=1){g+="<tr>";for(let w=0;w<h.getModuleCount();w+=1)g+='<td style="',g+=" border-width: 0px; border-style: none;",g+=" border-collapse: collapse;",g+=" padding: 0px; margin: 0px;",g+=" width: "+b+"px;",g+=" height: "+b+"px;",g+=" background-color: ",g+=h.isDark(x,w)?"#000000":"#ffffff",g+=";",g+='"/>';g+="</tr>"}return g+="</tbody>",g+="</table>",g},h.createSvgTag=function(b,A,g,x){let w={};typeof arguments[0]=="object"&&(w=arguments[0],b=w.cellSize,A=w.margin,g=w.alt,x=w.title),b=b||2,A=typeof A>"u"?b*4:A,g=typeof g=="string"?{text:g}:g||{},g.text=g.text||null,g.id=g.text?g.id||"qrcode-description":null,x=typeof x=="string"?{text:x}:x||{},x.text=x.text||null,x.id=x.text?x.id||"qrcode-title":null;let L=h.getModuleCount()*b+A*2,N,k,V,z,W="",H;for(H="l"+b+",0 0,"+b+" -"+b+",0 0,-"+b+"z ",W+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',W+=w.scalable?"":' width="'+L+'px" height="'+L+'px"',W+=' viewBox="0 0 '+L+" "+L+'" ',W+=' preserveAspectRatio="xMinYMin meet"',W+=x.text||g.text?' role="img" aria-labelledby="'+P([x.id,g.id].join(" ").trim())+'"':"",W+=">",W+=x.text?'<title id="'+P(x.id)+'">'+P(x.text)+"</title>":"",W+=g.text?'<description id="'+P(g.id)+'">'+P(g.text)+"</description>":"",W+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',W+='<path d="',V=0;V<h.getModuleCount();V+=1)for(z=V*b+A,N=0;N<h.getModuleCount();N+=1)h.isDark(V,N)&&(k=N*b+A,W+="M"+k+","+z+H);return W+='" stroke="transparent" fill="black"/>',W+="</svg>",W},h.createDataURL=function(b,A){b=b||2,A=typeof A>"u"?b*4:A;let g=h.getModuleCount()*b+A*2,x=A,w=g-A;return U_(g,g,function(L,N){if(x<=L&&L<w&&x<=N&&N<w){let k=Math.floor((L-x)/b),V=Math.floor((N-x)/b);return h.isDark(V,k)?0:1}else return 1})},h.createImgTag=function(b,A,g){b=b||2,A=typeof A>"u"?b*4:A;let x=h.getModuleCount()*b+A*2,w="";return w+="<img",w+=' src="',w+=h.createDataURL(b,A),w+='"',w+=' width="',w+=x,w+='"',w+=' height="',w+=x,w+='"',g&&(w+=' alt="',w+=P(g),w+='"'),w+="/>",w};let P=function(b){let A="";for(let g=0;g<b.length;g+=1){let x=b.charAt(g);switch(x){case"<":A+="&lt;";break;case">":A+="&gt;";break;case"&":A+="&amp;";break;case'"':A+="&quot;";break;default:A+=x;break}}return A},R=function(b){b=typeof b>"u"?2:b;let g=h.getModuleCount()*1+b*2,x=b,w=g-b,L,N,k,V,z,W={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},H={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},ne="";for(L=0;L<g;L+=2){for(k=Math.floor((L-x)/1),V=Math.floor((L+1-x)/1),N=0;N<g;N+=1)z="\u2588",x<=N&&N<w&&x<=L&&L<w&&h.isDark(k,Math.floor((N-x)/1))&&(z=" "),x<=N&&N<w&&x<=L+1&&L+1<w&&h.isDark(V,Math.floor((N-x)/1))?z+=" ":z+="\u2588",ne+=b<1&&L+1>=w?H[z]:W[z];ne+=`
`}return g%2&&b>0?ne.substring(0,ne.length-g-1)+Array(g+1).join("\u2580"):ne.substring(0,ne.length-1)};return h.createASCII=function(b,A){if(b=b||1,b<2)return R(A);b-=1,A=typeof A>"u"?b*2:A;let g=h.getModuleCount()*b+A*2,x=A,w=g-A,L,N,k,V,z=Array(b+1).join("\u2588\u2588"),W=Array(b+1).join("  "),H="",ne="";for(L=0;L<g;L+=1){for(k=Math.floor((L-x)/b),ne="",N=0;N<g;N+=1)V=1,x<=N&&N<w&&x<=L&&L<w&&h.isDark(k,Math.floor((N-x)/b))&&(V=0),ne+=V?z:W;for(k=0;k<b;k+=1)H+=ne+`
`}return H.substring(0,H.length-1)},h.renderTo2dContext=function(b,A){A=A||2;let g=h.getModuleCount();for(let x=0;x<g;x++)for(let w=0;w<g;w++)b.fillStyle=h.isDark(x,w)?"black":"white",b.fillRect(w*A,x*A,A,A)},h};Ls.stringToBytes=function(i){let e=[];for(let t=0;t<i.length;t+=1){let n=i.charCodeAt(t);e.push(n&255)}return e};Ls.createStringToBytes=function(i,e){let t=(function(){let s=L_(i),r=function(){let c=s.read();if(c==-1)throw"eof";return c},o=0,a={};for(;;){let c=s.read();if(c==-1)break;let l=r(),h=r(),u=r(),d=String.fromCharCode(c<<8|l),p=h<<8|u;a[d]=p,o+=1}if(o!=e)throw o+" != "+e;return a})(),n=63;return function(s){let r=[];for(let o=0;o<s.length;o+=1){let a=s.charCodeAt(o);if(a<128)r.push(a);else{let c=t[s.charAt(o)];typeof c=="number"?(c&255)==c?r.push(c):(r.push(c>>>8),r.push(c&255)):r.push(n)}}return r}};var Dt={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},Lr={L:1,M:0,Q:3,H:2},ri={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},oi=(function(){let i=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,t=7973,n=21522,s={},r=function(o){let a=0;for(;o!=0;)a+=1,o>>>=1;return a};return s.getBCHTypeInfo=function(o){let a=o<<10;for(;r(a)-r(e)>=0;)a^=e<<r(a)-r(e);return(o<<10|a)^n},s.getBCHTypeNumber=function(o){let a=o<<12;for(;r(a)-r(t)>=0;)a^=t<<r(a)-r(t);return o<<12|a},s.getPatternPosition=function(o){return i[o-1]},s.getMaskFunction=function(o){switch(o){case ri.PATTERN000:return function(a,c){return(a+c)%2==0};case ri.PATTERN001:return function(a,c){return a%2==0};case ri.PATTERN010:return function(a,c){return c%3==0};case ri.PATTERN011:return function(a,c){return(a+c)%3==0};case ri.PATTERN100:return function(a,c){return(Math.floor(a/2)+Math.floor(c/3))%2==0};case ri.PATTERN101:return function(a,c){return a*c%2+a*c%3==0};case ri.PATTERN110:return function(a,c){return(a*c%2+a*c%3)%2==0};case ri.PATTERN111:return function(a,c){return(a*c%3+(a+c)%2)%2==0};default:throw"bad maskPattern:"+o}},s.getErrorCorrectPolynomial=function(o){let a=Dr([1],0);for(let c=0;c<o;c+=1)a=a.multiply(Dr([1,ai.gexp(c)],0));return a},s.getLengthInBits=function(o,a){if(1<=a&&a<10)switch(o){case Dt.MODE_NUMBER:return 10;case Dt.MODE_ALPHA_NUM:return 9;case Dt.MODE_8BIT_BYTE:return 8;case Dt.MODE_KANJI:return 8;default:throw"mode:"+o}else if(a<27)switch(o){case Dt.MODE_NUMBER:return 12;case Dt.MODE_ALPHA_NUM:return 11;case Dt.MODE_8BIT_BYTE:return 16;case Dt.MODE_KANJI:return 10;default:throw"mode:"+o}else if(a<41)switch(o){case Dt.MODE_NUMBER:return 14;case Dt.MODE_ALPHA_NUM:return 13;case Dt.MODE_8BIT_BYTE:return 16;case Dt.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+a},s.getLostPoint=function(o){let a=o.getModuleCount(),c=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1){let p=0,_=o.isDark(u,d);for(let y=-1;y<=1;y+=1)if(!(u+y<0||a<=u+y))for(let m=-1;m<=1;m+=1)d+m<0||a<=d+m||y==0&&m==0||_==o.isDark(u+y,d+m)&&(p+=1);p>5&&(c+=3+p-5)}for(let u=0;u<a-1;u+=1)for(let d=0;d<a-1;d+=1){let p=0;o.isDark(u,d)&&(p+=1),o.isDark(u+1,d)&&(p+=1),o.isDark(u,d+1)&&(p+=1),o.isDark(u+1,d+1)&&(p+=1),(p==0||p==4)&&(c+=3)}for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(u,d)&&!o.isDark(u,d+1)&&o.isDark(u,d+2)&&o.isDark(u,d+3)&&o.isDark(u,d+4)&&!o.isDark(u,d+5)&&o.isDark(u,d+6)&&(c+=40);for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(d,u)&&!o.isDark(d+1,u)&&o.isDark(d+2,u)&&o.isDark(d+3,u)&&o.isDark(d+4,u)&&!o.isDark(d+5,u)&&o.isDark(d+6,u)&&(c+=40);let l=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1)o.isDark(d,u)&&(l+=1);let h=Math.abs(100*l/a/a-50)/5;return c+=h*10,c},s})(),ai=(function(){let i=new Array(256),e=new Array(256);for(let n=0;n<8;n+=1)i[n]=1<<n;for(let n=8;n<256;n+=1)i[n]=i[n-4]^i[n-5]^i[n-6]^i[n-8];for(let n=0;n<255;n+=1)e[i[n]]=n;let t={};return t.glog=function(n){if(n<1)throw"glog("+n+")";return e[n]},t.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return i[n]},t})(),Dr=function(i,e){if(typeof i.length>"u")throw i.length+"/"+e;let t=(function(){let s=0;for(;s<i.length&&i[s]==0;)s+=1;let r=new Array(i.length-s+e);for(let o=0;o<i.length-s;o+=1)r[o]=i[o+s];return r})(),n={};return n.getAt=function(s){return t[s]},n.getLength=function(){return t.length},n.multiply=function(s){let r=new Array(n.getLength()+s.getLength()-1);for(let o=0;o<n.getLength();o+=1)for(let a=0;a<s.getLength();a+=1)r[o+a]^=ai.gexp(ai.glog(n.getAt(o))+ai.glog(s.getAt(a)));return Dr(r,0)},n.mod=function(s){if(n.getLength()-s.getLength()<0)return n;let r=ai.glog(n.getAt(0))-ai.glog(s.getAt(0)),o=new Array(n.getLength());for(let a=0;a<n.getLength();a+=1)o[a]=n.getAt(a);for(let a=0;a<s.getLength();a+=1)o[a]^=ai.gexp(ai.glog(s.getAt(a))+r);return Dr(o,0).mod(s)},n},td=(function(){let i=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e=function(s,r){let o={};return o.totalCount=s,o.dataCount=r,o},t={},n=function(s,r){switch(r){case Lr.L:return i[(s-1)*4+0];case Lr.M:return i[(s-1)*4+1];case Lr.Q:return i[(s-1)*4+2];case Lr.H:return i[(s-1)*4+3];default:return}};return t.getRSBlocks=function(s,r){let o=n(s,r);if(typeof o>"u")throw"bad rs block @ typeNumber:"+s+"/errorCorrectionLevel:"+r;let a=o.length/3,c=[];for(let l=0;l<a;l+=1){let h=o[l*3+0],u=o[l*3+1],d=o[l*3+2];for(let p=0;p<h;p+=1)c.push(e(u,d))}return c},t})(),nd=function(){let i=[],e=0,t={};return t.getBuffer=function(){return i},t.getAt=function(n){let s=Math.floor(n/8);return(i[s]>>>7-n%8&1)==1},t.put=function(n,s){for(let r=0;r<s;r+=1)t.putBit((n>>>s-r-1&1)==1)},t.getLengthInBits=function(){return e},t.putBit=function(n){let s=Math.floor(e/8);i.length<=s&&i.push(0),n&&(i[s]|=128>>>e%8),e+=1},t},A_=function(i){let e=Dt.MODE_NUMBER,t=i,n={};n.getMode=function(){return e},n.getLength=function(o){return t.length},n.write=function(o){let a=t,c=0;for(;c+2<a.length;)o.put(s(a.substring(c,c+3)),10),c+=3;c<a.length&&(a.length-c==1?o.put(s(a.substring(c,c+1)),4):a.length-c==2&&o.put(s(a.substring(c,c+2)),7))};let s=function(o){let a=0;for(let c=0;c<o.length;c+=1)a=a*10+r(o.charAt(c));return a},r=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return n},C_=function(i){let e=Dt.MODE_ALPHA_NUM,t=i,n={};n.getMode=function(){return e},n.getLength=function(r){return t.length},n.write=function(r){let o=t,a=0;for(;a+1<o.length;)r.put(s(o.charAt(a))*45+s(o.charAt(a+1)),11),a+=2;a<o.length&&r.put(s(o.charAt(a)),6)};let s=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;if("A"<=r&&r<="Z")return r.charCodeAt(0)-65+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return n},R_=function(i){let e=Dt.MODE_8BIT_BYTE,t=i,n=Ls.stringToBytes(i),s={};return s.getMode=function(){return e},s.getLength=function(r){return n.length},s.write=function(r){for(let o=0;o<n.length;o+=1)r.put(n[o],8)},s},I_=function(i){let e=Dt.MODE_KANJI,t=i,n=Ls.stringToBytes;(function(o,a){let c=n(o);if(c.length!=2||(c[0]<<8|c[1])!=a)throw"sjis not supported."})("\u53CB",38726);let s=n(i),r={};return r.getMode=function(){return e},r.getLength=function(o){return~~(s.length/2)},r.write=function(o){let a=s,c=0;for(;c+1<a.length;){let l=(255&a[c])<<8|255&a[c+1];if(33088<=l&&l<=40956)l-=33088;else if(57408<=l&&l<=60351)l-=49472;else throw"illegal char at "+(c+1)+"/"+l;l=(l>>>8&255)*192+(l&255),o.put(l,13),c+=2}if(c<a.length)throw"illegal char at "+(c+1)},r},id=function(){let i=[],e={};return e.writeByte=function(t){i.push(t&255)},e.writeShort=function(t){e.writeByte(t),e.writeByte(t>>>8)},e.writeBytes=function(t,n,s){n=n||0,s=s||t.length;for(let r=0;r<s;r+=1)e.writeByte(t[r+n])},e.writeString=function(t){for(let n=0;n<t.length;n+=1)e.writeByte(t.charCodeAt(n))},e.toByteArray=function(){return i},e.toString=function(){let t="";t+="[";for(let n=0;n<i.length;n+=1)n>0&&(t+=","),t+=i[n];return t+="]",t},e},P_=function(){let i=0,e=0,t=0,n="",s={},r=function(a){n+=String.fromCharCode(o(a&63))},o=function(a){if(a<0)throw"n:"+a;if(a<26)return 65+a;if(a<52)return 97+(a-26);if(a<62)return 48+(a-52);if(a==62)return 43;if(a==63)return 47;throw"n:"+a};return s.writeByte=function(a){for(i=i<<8|a&255,e+=8,t+=1;e>=6;)r(i>>>e-6),e-=6},s.flush=function(){if(e>0&&(r(i<<6-e),i=0,e=0),t%3!=0){let a=3-t%3;for(let c=0;c<a;c+=1)n+="="}},s.toString=function(){return n},s},L_=function(i){let e=i,t=0,n=0,s=0,r={};r.read=function(){for(;s<8;){if(t>=e.length){if(s==0)return-1;throw"unexpected end of file./"+s}let c=e.charAt(t);if(t+=1,c=="=")return s=0,-1;if(c.match(/^\s$/))continue;n=n<<6|o(c.charCodeAt(0)),s+=6}let a=n>>>s-8&255;return s-=8,a};let o=function(a){if(65<=a&&a<=90)return a-65;if(97<=a&&a<=122)return a-97+26;if(48<=a&&a<=57)return a-48+52;if(a==43)return 62;if(a==47)return 63;throw"c:"+a};return r},D_=function(i,e){let t=i,n=e,s=new Array(i*e),r={};r.setPixel=function(l,h,u){s[h*t+l]=u},r.write=function(l){l.writeString("GIF87a"),l.writeShort(t),l.writeShort(n),l.writeByte(128),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(255),l.writeByte(255),l.writeByte(255),l.writeString(","),l.writeShort(0),l.writeShort(0),l.writeShort(t),l.writeShort(n),l.writeByte(0);let h=2,u=a(h);l.writeByte(h);let d=0;for(;u.length-d>255;)l.writeByte(255),l.writeBytes(u,d,255),d+=255;l.writeByte(u.length-d),l.writeBytes(u,d,u.length-d),l.writeByte(0),l.writeString(";")};let o=function(l){let h=l,u=0,d=0,p={};return p.write=function(_,y){if(_>>>y)throw"length over";for(;u+y>=8;)h.writeByte(255&(_<<u|d)),y-=8-u,_>>>=8-u,d=0,u=0;d=_<<u|d,u=u+y},p.flush=function(){u>0&&h.writeByte(d)},p},a=function(l){let h=1<<l,u=(1<<l)+1,d=l+1,p=c();for(let C=0;C<h;C+=1)p.add(String.fromCharCode(C));p.add(String.fromCharCode(h)),p.add(String.fromCharCode(u));let _=id(),y=o(_);y.write(h,d);let m=0,f=String.fromCharCode(s[m]);for(m+=1;m<s.length;){let C=String.fromCharCode(s[m]);m+=1,p.contains(f+C)?f=f+C:(y.write(p.indexOf(f),d),p.size()<4095&&(p.size()==1<<d&&(d+=1),p.add(f+C)),f=C)}return y.write(p.indexOf(f),d),y.write(u,d),y.flush(),_.toByteArray()},c=function(){let l={},h=0,u={};return u.add=function(d){if(u.contains(d))throw"dup key:"+d;l[d]=h,h+=1},u.size=function(){return h},u.indexOf=function(d){return l[d]},u.contains=function(d){return typeof l[d]<"u"},u};return r},U_=function(i,e,t){let n=D_(i,e);for(let a=0;a<e;a+=1)for(let c=0;c<i;c+=1)n.setPixel(c,a,t(c,a));let s=id();n.write(s);let r=P_(),o=s.toByteArray();for(let a=0;a<o.length;a+=1)r.writeByte(o[a]);return r.flush(),"data:image/gif;base64,"+r},sd=Ls,jy=Ls.stringToBytes;var od="fridge-settings-v1",Gt={accountId:null,name:"",clock:"24"};try{let i=JSON.parse(localStorage.getItem(od));typeof i?.accountId=="string"&&/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(i.accountId)&&(Gt.accountId=i.accountId),typeof i?.name=="string"&&(Gt.name=i.name.trim().slice(0,48)),i?.clock==="12"&&(Gt.clock="12")}catch{}var Ot=document.querySelector("#menu-page"),ki=Ot.querySelector("#profile-dialog"),ci=Ot.querySelector("#profile-input"),rd=Ot.querySelector("#settings-status"),ad=ki.querySelector(".profile-error"),li=Ot.querySelector("#qr-dialog"),ka=Ot.querySelector("#profile-qr");function N_(){if(!Gt.accountId&&!Il({accountId:crypto.randomUUID()})){ka.hidden=!0;return}ka.hidden=!1;let i=li.querySelector("img");if(i.hasAttribute("src"))return;let e=sd(0,"M");e.addData("SMART FRIDGE ACCOUNT: "+Gt.accountId.toUpperCase(),"Alphanumeric"),e.make();let t=e.createSvgTag({cellSize:4}).replace('fill="black"','fill="#183a32"');i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(t),ka.querySelector("img").src=i.src,li.querySelector("code").textContent=Gt.accountId}ka.onclick=()=>{li.querySelector(".qr-owner").textContent=Gt.name||"My profile",li.showModal()};li.querySelector("button").onclick=()=>li.close();function Rl(){Ot.querySelector("#profile-name").textContent=Gt.name||"My profile",Ot.querySelector(`input[name="clock"][value="${Gt.clock}"]`).checked=!0}function Il(i){let e={...Gt,...i};try{localStorage.setItem(od,JSON.stringify(e))}catch{Rl();let t=ki.open?ad:rd;return t.hidden=!1,t.textContent="Could not save on this device. Try again.",!1}return Object.assign(Gt,e),rd.textContent="",Rl(),i.clock&&window.dispatchEvent(new Event("clock-change")),!0}Ot.querySelector("#profile-edit").onclick=()=>{ci.value=Gt.name,ci.setCustomValidity(""),ad.hidden=!0,ki.showModal(),ci.focus()};ci.oninput=()=>ci.setCustomValidity("");Ot.querySelector("#profile-cancel").onclick=()=>ki.close();Ot.querySelector("#profile-form").onsubmit=i=>{i.preventDefault();let e=ci.value.trim();if(!e){ci.setCustomValidity("Enter a display name."),ci.reportValidity();return}Il({name:e})&&ki.close()};Ot.addEventListener("change",({target:i})=>{i.name==="clock"&&Il({clock:i.value})});window.addEventListener("menu-show",()=>{N_(),Rl(),Ot.hidden=!1,Ot.scrollTop=0,Ot.querySelector("h1").focus({preventScroll:!0})});window.addEventListener("menu-hide",()=>{ki.open&&ki.close(),li.open&&li.close(),Ot.hidden=!0});var gt=document.querySelector("#scene"),hi=matchMedia("(prefers-reduced-motion: reduce)"),Pl=!1,Ll=0,ht="home",ui=0,za=0,Dl=document.querySelector("#inventory");try{let h=function(M,v,U,G,K,Y,Me=o,ae=.025){let ye=new St(new Ts(M,v,U,5,ae),Me);return ye.position.set(G,K,Y),r.add(ye),ye},y=function(){d&&(r.remove(d),d.userData.dispose()),d=Sl(p),r.add(d)},P=function(M){for(let G of[-1.08,.1,1.27])h(.043,.105,.095,M,G,.8,a,.014);let v=new us([new D(M,-1.16,.817),new D(M,-1.04,.875),new D(M,.05,.9),new D(M,1.22,.875),new D(M,1.34,.817)]),U=new St(new gr(v,48,.024,12,!1),o);r.add(U)},N=function(){let M=w;M.fillStyle="#e7ece8",M.fillRect(0,0,480,736),M.textAlign="center",M.fillStyle="#25312d",M.font="500 86px -apple-system, sans-serif",M.fillText(new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hourCycle:Gt.clock==="12"?"h12":"h23"}),240,213),M.fillStyle="#6d7e72",M.font="25px -apple-system, sans-serif",M.fillText(new Date().toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"}),240,260),M.strokeStyle="#27a879",M.lineWidth=9,M.beginPath(),M.arc(240,366,24,Math.PI,0),M.stroke(),M.fillStyle="#27a879",M.beginPath(),M.roundRect(205,365,70,57,11),M.fill(),M.fillStyle="#63766b",M.font="23px -apple-system, sans-serif",M.fillText("Tap to wake",240,585),L.needsUpdate=!0},Ze=function(){let{width:M,height:v}=gt.getBoundingClientRect();t.setSize(M,v),e.aspect=M/v,e.updateProjectionMatrix();let U=qc.degToRad(e.fov/2),G=Math.max(2.55/Math.tan(U),1.5/(Math.tan(U)*e.aspect));Ue.set(-G*.31,G*.115,G*.95);let K=Math.max(2.12/Math.tan(U),1.09/(Math.tan(U)*e.aspect));Oe.set(0,.06,K)},$=function(){let M=ke==="recipes"?"recipe":ke??p;for(let U of document.querySelectorAll(".inventory-nav button")){let G=U.id===M+"-button"||M==="fridge"&&U.dataset.section==="fridge-section";U.classList.toggle("active",G),G?U.setAttribute("aria-current","page"):U.removeAttribute("aria-current")}let v={menu:"Settings",recipes:"Recipes"};Dl.setAttribute("aria-label",v[ke]??(p==="drinks"?"Drinks cabinet":"Fridge inventory")),gt.setAttribute("aria-label",p==="drinks"?"Drinks cabinet. Tap a bottle for details; swipe each shelf to browse.":"Open fridge. Tap food to view it; swipe each shelf to browse."),document.querySelector("#close-fridge").setAttribute("aria-label",p==="drinks"?"Back to fridge":"Back to closed fridge")},te=function(M){if(ht!=="inventory"||_||!["fridge","drinks"].includes(M))return;if(ve(null),M===p){$();return}ee();let v=d,U=M==="drinks"?1:-1;if(p=M,d=Sl(M),r.add(d),$(),hi.matches){r.remove(v),v.userData.dispose();return}d.userData.setSlide(U*Ca),_={outgoing:v,direction:U,start:performance.now()}},ve=function(M){M!==ke&&(ee(),ke&&(document.body.classList.remove(ke+"-open"),window.dispatchEvent(new Event(ke+"-hide"))),ke=M,gt.inert=!!M,M&&(document.body.classList.add(M+"-open"),window.dispatchEvent(new Event(M+"-show"))),$())},Ce=function(){ht==="home"?(Pl=!0,ht="zooming",za=performance.now(),document.body.classList.add("zoomed"),gt.setAttribute("aria-label","Close-up fridge. Tap to open both doors and see inventory.")):ht==="focused"&&(y(),document.querySelector(".inventory-scroll").scrollTop=0,ht="opening",za=performance.now())},be=function(){if(!(ht!=="inventory"||_)){if(ke){ve(null);return}if(p==="drinks"){te("fridge");return}ee(),Dl.inert=!0,gt.inert=!1,document.body.classList.remove("inventory-ready"),document.body.classList.remove("interior-open"),ht="closing",za=performance.now(),gt.focus({preventScroll:!0})}},ee=function(){Ge?.id!==void 0&&gt.hasPointerCapture(Ge.id)&&gt.releasePointerCapture(Ge.id),Ge=null,I=null},Q=function(M,v){let U=v-M.x;Math.abs(U)<=8&&!M.moved||(M.moved=!0,M.row.style.scrollSnapType="none",M.row.scrollLeft=ml(M.left-U,0,Math.max(0,M.row.scrollWidth-M.row.clientWidth)),d.userData.updatePositions())},Z=function(M){let v=gt.getBoundingClientRect();He.setFromCamera(new le((M.clientX-v.left)/v.width*2-1,-(M.clientY-v.top)/v.height*2+1),e)},J=function(M){Z(M);let v=new D;He.ray.intersectPlane(new pt(new D(0,0,1),0),v);let{top:U,pitch:G,scale:K,rowElements:Y}=d.userData,Me=Math.round((U-v.y)/(G*K));return Y[Math.max(0,Math.min(Y.length-1,Me))]},ue=function(M){Z(M);for(let v of He.intersectObject(d,!0)){if(!Fu(v.object,v.point))continue;let U=v.object,G=null;for(;U&&U!==d;){if(!U.visible){G=null;break}U.userData.category&&(G=U),U=U.parent}if(G)return G}return null},ie=function(M){Ge?.id===M.pointerId&&ee()},Ne=function(M){requestAnimationFrame(Ne);let v=Math.min((M-he)/1e3,.05);if(he=M,ke)return;if(Ll+=((Pl?1:0)-Ll)*(hi.matches?1:1-Math.exp(-v*6)),_){let{outgoing:K,direction:Y,start:Me}=_,ae=Math.min(1,(M-Me)/600),ye=Le(ae);K.userData.setSlide(-Y*Ca*ye),d.userData.setSlide(Y*Ca*(1-ye)),ae===1&&(r.remove(K),K.userData.dispose(),_=null)}let U=M-za;ht==="zooming"&&(U>650||hi.matches)&&(ht="focused"),ht==="opening"&&(ui=Le(Math.min(U/(hi.matches?1:1350),1)),(hi.matches||U>2300)&&(ui=1,ht="inventory",Dl.inert=!1,document.body.classList.add("interior-open","inventory-ready"),$())),ht==="closing"&&(ui=1-Le(Math.max(0,Math.min((U-550)/(hi.matches?1:1200),1))),(hi.matches||U>1800)&&(ui=0,ht="focused")),S.visible=ui<.03,z.rotation.y=-ui*Math.PI*.57,W.rotation.y=ui*Math.PI*.57,m.intensity=ui*.7;let G=ht==="inventory"?1:ht==="opening"?hi.matches?1:Le(Math.max(0,Math.min((U-850)/1300,1))):ht==="closing"?1-Le(Math.min(U/700,1)):0;e.position.lerpVectors(Ue,Oe,Ll),e.position.z-=G*1.1,e.position.y-=G*.12,e.lookAt(0,-G*.12,0),t.render(i,e)},i=new bi,e=new Tt(34,1,.1,100),t=new bs({antialias:!0,alpha:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setClearColor(0,0),t.localClippingEnabled=!0,t.outputColorSpace=Mt,t.toneMapping=ms,t.toneMappingExposure=1,gt.appendChild(t.domElement),i.add(new Ti(16777215,12830401,2.1));let n=new ei(16776438,3.2);n.position.set(-3,5,6),i.add(n);let s=new ei(16777215,.65);s.position.set(4,1,-3),i.add(s);let r=new vt;i.add(r);let o=new sn({color:16777215,roughness:.31,metalness:.07}),a=new sn({color:16119283,roughness:.43,metalness:.04}),c=new sn({color:9607057,roughness:.82}),l=new sn({color:4475203,roughness:.85});h(1.8,3.48,.09,0,0,-.66,a,.025),h(.07,3.48,1.3,-.865,0,-.055,a,.025),h(.07,3.48,1.3,.865,0,-.055,a,.025),h(1.8,.07,1.3,0,1.705,-.055,a,.025),h(1.8,.07,1.3,0,-1.705,-.055,a,.025);let u=new sn({color:15199464,roughness:.65,emissive:12180683,emissiveIntensity:.12});h(1.65,3.3,.025,0,0,-.6,u,.01),h(.06,3.3,1.08,-.805,0,-.02,o,.018),h(.06,3.3,1.08,.805,0,-.02,o,.018),h(1.55,.025,.035,0,1.58,-.48,new Zt({color:16449530}),.005);let d=null,p="fridge",_=null;y();let m=new Ai(15597555,0,5);m.position.set(0,1.5,.42),r.add(m);let f=r.children.length;h(.801,3.4,.14,-.4775,.018,.69,o,.036);let C=r.children[f],T=h(.931,3.4,.14,.4085,.018,.69,o,.036),S=h(.032,3.35,.025,-.067,.018,.687,c,.004),R=r.children.length;P(-.155);let b=[C,...r.children.slice(R)],A=r.children.length;P(.025);let g=new sn({color:13358028,roughness:.4});h(.574,.854,.024,.48,.64,.776,g,.025),h(.558,.838,.025,.48,.64,.795,o,.025);let x=document.createElement("canvas");x.width=480,x.height=736;let w=x.getContext("2d"),L=new Un(x);L.colorSpace=Mt,L.anisotropy=t.capabilities.getMaxAnisotropy(),window.addEventListener("clock-change",N),N(),setInterval(N,3e4);let k=new St(new pn(.508,.782),new Zt({map:L,toneMapped:!1}));k.position.set(.48,.64,.809),r.add(k);let V=[T,...r.children.slice(A)],z=new vt;z.position.set(-.878,0,.69),r.add(z);let W=new vt;W.position.set(.874,0,.69),r.add(W),i.updateMatrixWorld(!0),b.forEach(M=>z.attach(M)),V.forEach(M=>W.attach(M)),h(1.76,.025,1.29,0,1.745,-.045,o,.008),h(1.65,.045,.1,0,-1.725,.57,a,.012),h(.14,.075,.23,-.68,-1.773,.36,l,.014),h(.14,.075,.23,.68,-1.773,.36,l,.014);let H=document.createElement("canvas");H.width=H.height=128;let ne=H.getContext("2d"),fe=ne.createRadialGradient(64,64,10,64,64,64);fe.addColorStop(0,"rgba(45,50,43,.20)"),fe.addColorStop(1,"rgba(45,50,43,0)"),ne.fillStyle=fe,ne.fillRect(0,0,128,128);let xe=new St(new pn(3.1,2.5),new Zt({map:new Un(H),transparent:!0,depthWrite:!1}));xe.rotation.x=-Math.PI/2,xe.position.y=-1.815,i.add(xe);let Ue=new D,Oe=new D,ke=null;for(let[M,v]of[["recipe-select","recipes"],["menu-select","menu"]])window.addEventListener(M,()=>{ht==="inventory"&&!_&&ve(v)});window.addEventListener("cabinet-select",M=>te(M.detail)),document.querySelector("#close-fridge").onclick=be;let He=new xr,Ge=null,I=null;gt.addEventListener("pointerdown",M=>{if(!M.isPrimary||ke||Ge||_||!["home","focused","inventory"].includes(ht))return;let v=ht==="inventory",U=v?J(M):null;Ge={id:M.pointerId,x:M.clientX,y:M.clientY,row:U,left:U?Ra(U):0},v&&gt.setPointerCapture(M.pointerId)}),gt.addEventListener("pointermove",M=>{Ge?.id!==M.pointerId||ht!=="inventory"||_||Ge.row&&Q(Ge,M.clientX)}),gt.addEventListener("pointercancel",ie),gt.addEventListener("lostpointercapture",ie),window.addEventListener("blur",ee),gt.addEventListener("pointerup",M=>{let v=Ge;if(!(v?.id!==M.pointerId||_)&&(Ge=null,!(v.moved||Math.hypot(M.clientX-v.x,M.clientY-v.y)>12)))if(ht==="inventory"){let U=ue(M);if(U){let{row:G,index:K}=U.userData.category;d.userData.rowElements[G].querySelectorAll(".food-card")[K]?.click()}}else Z(M),He.intersectObject(r,!0).length&&Ce()}),gt.addEventListener("touchstart",M=>{if(ht!=="inventory"||_||M.touches.length!==1)return;let v=M.touches[0],U=J(v);U&&(I={row:U,x:v.clientX,left:Ra(U)})},{passive:!0}),gt.addEventListener("touchmove",M=>{if(!I||ht!=="inventory"||_||M.touches.length!==1)return;let v=M.touches[0].clientX-I.x;Math.abs(v)<8||(M.preventDefault(),Ge&&(Ge.moved=!0),Q(I,M.touches[0].clientX))},{passive:!1}),gt.addEventListener("touchend",()=>{I=null}),gt.addEventListener("touchcancel",()=>{I=null}),gt.addEventListener("keydown",M=>{(M.key==="Enter"||M.key===" ")&&(M.preventDefault(),Ce()),M.key==="Escape"&&ht==="focused"&&(Pl=!1,ht="home",document.body.classList.remove("zoomed"),gt.setAttribute("aria-label","White double-door fridge. Tap to zoom in."))}),document.addEventListener("keydown",M=>{M.key==="Escape"&&!document.querySelector("dialog[open]")&&be()}),new ResizeObserver(Ze).observe(gt),Ze();let he=0,Le=M=>M*M*(3-2*M);requestAnimationFrame(Ne)}catch(i){console.error(i),document.querySelector("#render-error").hidden=!1}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
