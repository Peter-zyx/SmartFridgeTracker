(()=>{var kh=0,Xc=1,zh=2;var qc=1,Hh=2,An=3,Vn=0,zt=1,Cn=2,qn=0,Fi=1,Yc=2,$c=3,Zc=4,Vh=5,ai=100,Gh=101,Wh=102,Xh=103,qh=104,Yh=200,$h=201,Zh=202,Jh=203,Mo=204,So=205,Kh=206,Qh=207,jh=208,eu=209,tu=210,nu=211,iu=212,su=213,ru=214,Zo=0,Jo=1,Ko=2,Oi=3,Qo=4,jo=5,ea=6,ta=7,Jc=0,ou=1,au=2,Yn=0,cu=1,lu=2,hu=3,Is=4,uu=5,du=6,fu=7;var Kc=300,Xi=301,qi=302,na=303,ia=304,Pr=306,bo=1e3,oi=1001,Eo=1002,cn=1003,pu=1004;var Dr=1005;var _n=1006,sa=1007;var fi=1008;var Mn=1009,Qc=1010,jc=1011,Ps=1012,ra=1013,pi=1014,Rn=1015,Ds=1016,oa=1017,aa=1018,Ls=1020,el=35902,tl=35899,nl=1021,il=1022,hn=1023,_s=1026,Us=1027,sl=1028,ca=1029,rl=1030,la=1031;var ha=1033,Lr=33776,Ur=33777,Nr=33778,Fr=33779,ua=35840,da=35841,fa=35842,pa=35843,ma=36196,ga=37492,_a=37496,xa=37808,ya=37809,va=37810,Ma=37811,Sa=37812,ba=37813,Ea=37814,wa=37815,Ta=37816,Aa=37817,Ca=37818,Ra=37819,Ia=37820,Pa=37821,Da=36492,La=36494,Ua=36495,Na=36283,Fa=36284,Oa=36285,Ba=36286;var nr=2300,wo=2301,vo=2302,Lc=2400,Uc=2401,Nc=2402;var mu=3200,gu=3201;var ol=0,_u=1,$n="",St="srgb",Bi="srgb-linear",ir="linear",it="srgb";var Ui=7680;var Fc=519,xu=512,yu=513,vu=514,al=515,Mu=516,Su=517,bu=518,Eu=519,Oc=35044;var cl="300 es",gn=2e3,sr=2001;var Gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=1234567,Qs=Math.PI/180,xs=180/Math.PI;function Yi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function ll(i,e){return(i%e+e)%e}function Zd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jd(i,e,t){return i!==e?(t-i)/(e-i):0}function js(i,e,t){return(1-t)*i+t*e}function Kd(i,e,t,n){return js(i,e,1-Math.exp(-t*n))}function Qd(i,e=1){return e-Math.abs(ll(i,e*2)-e)}function jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ef(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function nf(i,e){return i+Math.random()*(e-i)}function sf(i){return i*(.5-Math.random())}function rf(i){i!==void 0&&(dh=i);let e=dh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function of(i){return i*Qs}function af(i){return i*xs}function cf(i){return(i&i-1)===0&&i!==0}function lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uf(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ms(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wt={DEG2RAD:Qs,RAD2DEG:xs,generateUUID:Yi,clamp:qe,euclideanModulo:ll,mapLinear:Zd,inverseLerp:Jd,lerp:js,damp:Kd,pingpong:Qd,smoothstep:jd,smootherstep:ef,randInt:tf,randFloat:nf,randFloatSpread:sf,seededRandom:rf,degToRad:of,radToDeg:af,isPowerOfTwo:cf,ceilPowerOfTwo:lf,floorPowerOfTwo:hf,setQuaternionFromProperEuler:uf,normalize:Bt,denormalize:ms},ye=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],_=r[o+2],y=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(u!==y||c!==d||l!==p||h!==_){let m=1-a,f=c*d+l*p+h*_+u*y,A=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let I=Math.sqrt(w),C=Math.atan2(I,f*A);m=Math.sin(m*C)/I,a=Math.sin(a*C)/I}let S=a*A;if(c=c*m+d*S,l=l*m+p*S,h=h*m+_*S,u=u*m+y*S,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],_=r[o+3];return e[t]=a*_+h*u+c*p-l*d,e[t+1]=c*_+h*d+l*u-a*p,e[t+2]=l*_+h*p+a*d-c*u,e[t+3]=h*_-a*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"YZX":this._x=d*h*u+l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u-d*p*_;break;case"XZY":this._x=d*h*u-l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ac.copy(this).projectOnVector(e),this.sub(ac)}reflect(e){return this.sub(ac.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ac=new L,fh=new Wn,We=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],y=s[0],m=s[3],f=s[6],A=s[1],w=s[4],S=s[7],I=s[2],C=s[5],b=s[8];return r[0]=o*y+a*A+c*I,r[3]=o*m+a*w+c*C,r[6]=o*f+a*S+c*b,r[1]=l*y+h*A+u*I,r[4]=l*m+h*w+u*C,r[7]=l*f+h*S+u*b,r[2]=d*y+p*A+_*I,r[5]=d*m+p*w+_*C,r[8]=d*f+p*S+_*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,_=t*u+n*d+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=u*y,e[1]=(s*l-h*n)*y,e[2]=(a*n-s*o)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-a*t)*y,e[6]=p*y,e[7]=(n*c-l*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cc.makeScale(e,t)),this}rotate(e){return this.premultiply(cc.makeRotation(-e)),this}translate(e,t){return this.premultiply(cc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},cc=new We;function hl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wu(){let i=rr("canvas");return i.style.display="block",i}var ph={};function ys(i){i in ph||(ph[i]=!0,console.warn(i))}function Tu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var mh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function df(){let i={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===it&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ys("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bi]:{primaries:e,whitePoint:n,transfer:ir,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:n,transfer:it,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),i}var Ze=df();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var is,To=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=rr("canvas")),is.width=e.width,is.height=e.height;let s=is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ff=0,vs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(lc(s[o].image)):r.push(lc(s[o]))}else r=lc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function lc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?To.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pf=0,hc=new L,Vt=class i extends Gn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=oi,s=oi,r=_n,o=fi,a=hn,c=Mn,l=i.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Yi(),this.name="",this.source=new vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hc).x}get height(){return this.source.getSize(hc).y}get depth(){return this.source.getSize(hc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bo:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bo:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Kc;Vt.DEFAULT_ANISOTROPY=1;var tt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],_=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,S=(p+1)/2,I=(f+1)/2,C=(h+d)/4,b=(u+y)/4,T=(_+m)/4;return w>S&&w>I?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=C/n,r=b/n):S>I?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=T/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=b/r,s=T/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(u-y)/A,this.z=(d-h)/A,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ao=class extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Vt(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new vs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends Ao{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},or=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Co=class extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ln=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),jr.subVectors(this.max,qs),ss.subVectors(e.a,qs),rs.subVectors(e.b,qs),os.subVectors(e.c,qs),jn.subVectors(rs,ss),ei.subVectors(os,rs),Ii.subVectors(ss,os);let t=[0,-jn.z,jn.y,0,-ei.z,ei.y,0,-Ii.z,Ii.y,jn.z,0,-jn.x,ei.z,0,-ei.x,Ii.z,0,-Ii.x,-jn.y,jn.x,0,-ei.y,ei.x,0,-Ii.y,Ii.x,0];return!uc(t,ss,rs,os,jr)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,ss,rs,os,jr))?!1:(eo.crossVectors(jn,ei),t=[eo.x,eo.y,eo.z],uc(t,ss,rs,os,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fn=[new L,new L,new L,new L,new L,new L,new L,new L],fn=new L,Qr=new ln,ss=new L,rs=new L,os=new L,jn=new L,ei=new L,Ii=new L,qs=new L,jr=new L,eo=new L,Pi=new L;function uc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);let a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var mf=new ln,Ys=new L,dc=new L,Ms=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);let t=Ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ys,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(dc)),this.expandByPoint(Ys.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},On=new L,fc=new L,to=new L,ti=new L,pc=new L,no=new L,mc=new L,ar=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fc.copy(e).add(t).multiplyScalar(.5),to.copy(t).sub(e).normalize(),ti.copy(this.origin).sub(fc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(to),a=ti.dot(this.direction),c=-ti.dot(to),l=ti.lengthSq(),h=Math.abs(1-o*o),u,d,p,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(fc).addScaledVector(to,d),p}intersectSphere(e,t){On.subVectors(e.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){pc.subVectors(t,e),no.subVectors(n,e),mc.crossVectors(pc,no);let o=this.direction.dot(mc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,e);let c=a*this.direction.dot(no.crossVectors(ti,no));if(c<0)return null;let l=a*this.direction.dot(pc.cross(ti));if(l<0||c+l>o)return null;let h=-a*ti.dot(mc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},pt=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,p,_,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,p,_,y,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,p,_,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,_=a*h,y=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=d-y*l,t[9]=-a*c,t[2]=y-d*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,_=l*h,y=l*u;t[0]=d+y*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=y+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,_=l*h,y=l*u;t[0]=d-y*a,t[4]=-o*u,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=y-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,p=o*u,_=a*h,y=a*u;t[0]=c*h,t[4]=_*l-p,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,p=o*l,_=a*c,y=a*l;t[0]=c*h,t[4]=y-d*u,t[8]=_*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*u+_,t[10]=d-y*u}else if(e.order==="XZY"){let d=o*c,p=o*l,_=a*c,y=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=o*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=a*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,_f)}lookAt(e,t,n){let s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ni.crossVectors(n,Kt),ni.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ni.crossVectors(n,Kt)),ni.normalize(),io.crossVectors(Kt,ni),s[0]=ni.x,s[4]=io.x,s[8]=Kt.x,s[1]=ni.y,s[5]=io.y,s[9]=Kt.y,s[2]=ni.z,s[6]=io.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],y=n[6],m=n[10],f=n[14],A=n[3],w=n[7],S=n[11],I=n[15],C=s[0],b=s[4],T=s[8],g=s[12],x=s[1],v=s[5],P=s[9],F=s[13],D=s[2],O=s[6],B=s[10],H=s[14],k=s[3],X=s[7],j=s[11],ae=s[15];return r[0]=o*C+a*x+c*D+l*k,r[4]=o*b+a*v+c*O+l*X,r[8]=o*T+a*P+c*B+l*j,r[12]=o*g+a*F+c*H+l*ae,r[1]=h*C+u*x+d*D+p*k,r[5]=h*b+u*v+d*O+p*X,r[9]=h*T+u*P+d*B+p*j,r[13]=h*g+u*F+d*H+p*ae,r[2]=_*C+y*x+m*D+f*k,r[6]=_*b+y*v+m*O+f*X,r[10]=_*T+y*P+m*B+f*j,r[14]=_*g+y*F+m*H+f*ae,r[3]=A*C+w*x+S*D+I*k,r[7]=A*b+w*v+S*O+I*X,r[11]=A*T+w*P+S*B+I*j,r[15]=A*g+w*F+S*H+I*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],f=e[15];return _*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+y*(+t*c*p-t*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+t*l*u-t*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],f=e[15],A=u*m*l-y*d*l+y*c*p-a*m*p-u*c*f+a*d*f,w=_*d*l-h*m*l-_*c*p+o*m*p+h*c*f-o*d*f,S=h*y*l-_*u*l+_*a*p-o*y*p-h*a*f+o*u*f,I=_*u*c-h*y*c-_*a*d+o*y*d+h*a*m-o*u*m,C=t*A+n*w+s*S+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/C;return e[0]=A*b,e[1]=(y*d*r-u*m*r-y*s*p+n*m*p+u*s*f-n*d*f)*b,e[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*f+n*c*f)*b,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*b,e[4]=w*b,e[5]=(h*m*r-_*d*r+_*s*p-t*m*p-h*s*f+t*d*f)*b,e[6]=(_*c*r-o*m*r-_*s*l+t*m*l+o*s*f-t*c*f)*b,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*p+t*c*p)*b,e[8]=S*b,e[9]=(_*u*r-h*y*r-_*n*p+t*y*p+h*n*f-t*u*f)*b,e[10]=(o*y*r-_*a*r+_*n*l-t*y*l-o*n*f+t*a*f)*b,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*p-t*a*p)*b,e[12]=I*b,e[13]=(h*y*s-_*u*s+_*n*d-t*y*d-h*n*m+t*u*m)*b,e[14]=(_*a*s-o*y*s-_*n*c+t*y*c+o*n*m-t*a*m)*b,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*b,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,_=r*u,y=o*h,m=o*u,f=a*u,A=c*l,w=c*h,S=c*u,I=n.x,C=n.y,b=n.z;return s[0]=(1-(y+f))*I,s[1]=(p+S)*I,s[2]=(_-w)*I,s[3]=0,s[4]=(p-S)*C,s[5]=(1-(d+f))*C,s[6]=(m+A)*C,s[7]=0,s[8]=(_+w)*b,s[9]=(m-A)*b,s[10]=(1-(d+y))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=as.set(s[0],s[1],s[2]).length(),o=as.set(s[4],s[5],s[6]).length(),a=as.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pn.copy(this);let l=1/r,h=1/o,u=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,t.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=gn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),_,y;if(c)_=r/(o-r),y=o*r/(o-r);else if(a===gn)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===sr)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=gn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),_,y;if(c)_=1/(o-r),y=o/(o-r);else if(a===gn)_=-2/(o-r),y=-(o+r)/(o-r);else if(a===sr)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},as=new L,pn=new pt,gf=new L(0,0,0),_f=new L(1,1,1),ni=new L,io=new L,Kt=new L,_h=new pt,xh=new Wn,xn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _h.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_h,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},xf=0,yh=new L,cs=new Wn,Bn=new pt,so=new L,$s=new L,yf=new L,vf=new Wn,vh=new L(1,0,0),Mh=new L(0,1,0),Sh=new L(0,0,1),bh={type:"added"},Mf={type:"removed"},ls={type:"childadded",child:null},gc={type:"childremoved",child:null},Ut=class i extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new xn,n=new Wn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new We}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(Mh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return yh.copy(e).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(Mh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?so.copy(e):so.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt($s,so,this.up):Bn.lookAt(so,$s,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Bn),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bh),ls.child=e,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mf),gc.child=e,this.dispatchEvent(gc),gc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bh),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,yf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,vf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new L(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new L,kn=new L,_c=new L,zn=new L,hs=new L,us=new L,Eh=new L,xc=new L,yc=new L,vc=new L,Mc=new tt,Sc=new tt,bc=new tt,ri=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),kn.subVectors(n,t),_c.subVectors(e,t);let o=mn.dot(mn),a=mn.dot(kn),c=mn.dot(_c),l=kn.dot(kn),h=kn.dot(_c),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(o,zn.y),c.addScaledVector(a,zn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Mc.setScalar(0),Sc.setScalar(0),bc.setScalar(0),Mc.fromBufferAttribute(e,t),Sc.fromBufferAttribute(e,n),bc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mc,r.x),o.addScaledVector(Sc,r.y),o.addScaledVector(bc,r.z),o}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),kn.subVectors(e,t),mn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),mn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;hs.subVectors(s,n),us.subVectors(r,n),xc.subVectors(e,n);let c=hs.dot(xc),l=us.dot(xc);if(c<=0&&l<=0)return t.copy(n);yc.subVectors(e,s);let h=hs.dot(yc),u=us.dot(yc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(hs,o);vc.subVectors(e,r);let p=hs.dot(vc),_=us.dot(vc);if(_>=0&&p<=_)return t.copy(r);let y=p*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(us,a);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Eh.subVectors(r,s),a=(u-h)/(u-h+(p-_)),t.copy(s).addScaledVector(Eh,a);let f=1/(m+y+d);return o=y*f,a=d*f,t.copy(n).addScaledVector(hs,o).addScaledVector(us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},ro={h:0,s:0,l:0};function Ec(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=ll(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ec(o,r,e+1/3),this.g=Ec(o,r,e),this.b=Ec(o,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let n=Au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return Ze.workingToColorSpace(Lt.copy(this),e),Math.round(qe(Lt.r*255,0,255))*65536+Math.round(qe(Lt.g*255,0,255))*256+Math.round(qe(Lt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Lt.copy(this),t);let n=Lt.r,s=Lt.g,r=Lt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=St){Ze.workingToColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,s=Lt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ii),this.setHSL(ii.h+e,ii.s+t,ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ii),e.getHSL(ro);let n=js(ii.h,ro.h,t),s=js(ii.s,ro.s,t),r=js(ii.l,ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new Ye;Ye.NAMES=Au;var Sf=0,ci=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Fi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=So,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mo&&(n.blendSrc=this.blendSrc),this.blendDst!==So&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rt=class extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var bt=new L,oo=new ye,bf=0,jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Oc,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ms(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),s=Bt(s,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}};var cr=class extends jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lr=class extends jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var et=class extends jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ef=0,an=new pt,wc=new Ut,ds=new L,Qt=new ln,Zs=new ln,Tt=new L,kt=class i extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hl(e)?lr:cr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return wc.lookAt(e),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new et(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ms);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(Qt.min,Zs.min),Qt.expandByPoint(Tt),Tt.addVectors(Qt.max,Zs.max),Qt.expandByPoint(Tt)):(Qt.expandByPoint(Zs.min),Qt.expandByPoint(Zs.max))}Qt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Tt.fromBufferAttribute(a,l),c&&(ds.fromBufferAttribute(e,l),Tt.add(ds)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<n.count;T++)a[T]=new L,c[T]=new L;let l=new L,h=new L,u=new L,d=new ye,p=new ye,_=new ye,y=new L,m=new L;function f(T,g,x){l.fromBufferAttribute(n,T),h.fromBufferAttribute(n,g),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,g),_.fromBufferAttribute(r,x),h.sub(l),u.sub(l),p.sub(d),_.sub(d);let v=1/(p.x*_.y-_.x*p.y);isFinite(v)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(v),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(v),a[T].add(y),a[g].add(y),a[x].add(y),c[T].add(m),c[g].add(m),c[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let T=0,g=A.length;T<g;++T){let x=A[T],v=x.start,P=x.count;for(let F=v,D=v+P;F<D;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let w=new L,S=new L,I=new L,C=new L;function b(T){I.fromBufferAttribute(s,T),C.copy(I);let g=a[T];w.copy(g),w.sub(I.multiplyScalar(I.dot(g))).normalize(),S.crossVectors(C,g);let v=S.dot(c[T])<0?-1:1;o.setXYZW(T,w.x,w.y,w.z,v)}for(let T=0,g=A.length;T<g;++T){let x=A[T],v=x.start,P=x.count;for(let F=v,D=v+P;F<D;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){let _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,_=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let f=0;f<h;f++)d[_++]=l[p++]}return new jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wh=new pt,Di=new ar,ao=new Ms,Th=new L,co=new L,lo=new L,ho=new L,Tc=new L,uo=new L,Ah=new L,fo=new L,xt=class extends Ut{constructor(e=new kt,t=new Rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Tc.fromBufferAttribute(u,e),o?uo.addScaledVector(Tc,h):uo.addScaledVector(Tc.sub(t),h))}t.add(uo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(ao.containsPoint(Di.origin)===!1&&(Di.intersectSphere(ao,Th)===null||Di.origin.distanceToSquared(Th)>(e.far-e.near)**2))&&(wh.copy(r).invert(),Di.copy(e.ray).applyMatrix4(wh),!(n.boundingBox!==null&&Di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){let m=d[_],f=o[m.materialIndex],A=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,I=w;S<I;S+=3){let C=a.getX(S),b=a.getX(S+1),T=a.getX(S+2);s=po(this,f,e,n,l,h,u,C,b,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){let A=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);s=po(this,o,e,n,l,h,u,A,w,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){let m=d[_],f=o[m.materialIndex],A=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,I=w;S<I;S+=3){let C=S,b=S+1,T=S+2;s=po(this,f,e,n,l,h,u,C,b,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){let A=m,w=m+1,S=m+2;s=po(this,o,e,n,l,h,u,A,w,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function wf(i,e,t,n,s,r,o,a){let c;if(e.side===zt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Vn,a),c===null)return null;fo.copy(a),fo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(fo);return l<t.near||l>t.far?null:{distance:l,point:fo.clone(),object:i}}function po(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,co),i.getVertexPosition(c,lo),i.getVertexPosition(l,ho);let h=wf(i,e,t,n,co,lo,ho,Ah);if(h){let u=new L;ri.getBarycoord(Ah,co,lo,ho,u),s&&(h.uv=ri.getInterpolatedAttribute(s,a,c,l,u,new ye)),r&&(h.uv1=ri.getInterpolatedAttribute(r,a,c,l,u,new ye)),o&&(h.normal=ri.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};ri.getNormal(co,lo,ho,d.normal),h.face=d,h.barycoord=u}return h}var Tn=class i extends kt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function _(y,m,f,A,w,S,I,C,b,T,g){let x=S/b,v=I/T,P=S/2,F=I/2,D=C/2,O=b+1,B=T+1,H=0,k=0,X=new L;for(let j=0;j<B;j++){let ae=j*v-F;for(let Me=0;Me<O;Me++){let de=Me*x-P;X[y]=de*A,X[m]=ae*w,X[f]=D,l.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[f]=C>0?1:-1,h.push(X.x,X.y,X.z),u.push(Me/b),u.push(1-j/T),H+=1}}for(let j=0;j<T;j++)for(let ae=0;ae<b;ae++){let Me=d+ae+O*j,de=d+ae+O*(j+1),He=d+(ae+1)+O*(j+1),Le=d+(ae+1)+O*j;c.push(Me,de,Le),c.push(de,He,Le),k+=6}a.addGroup(p,k,g),p+=k,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $i(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nt(i){let e={};for(let t=0;t<i.length;t++){let n=$i(i[t]);for(let s in n)e[s]=n[s]}return e}function Tf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ul(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Cu={clone:$i,merge:Nt},Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=Tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},hr=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},si=new L,Ch=new ye,Rh=new ye,Ct=class extends hr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Ch,Rh),t.subVectors(Rh,Ch)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fs=-90,ps=1,Ro=class extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ct(fs,ps,e,t);s.layers=this.layers,this.add(s);let r=new Ct(fs,ps,e,t);r.layers=this.layers,this.add(r);let o=new Ct(fs,ps,e,t);o.layers=this.layers,this.add(o);let a=new Ct(fs,ps,e,t);a.layers=this.layers,this.add(a);let c=new Ct(fs,ps,e,t);c.layers=this.layers,this.add(c);let l=new Ct(fs,ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ur=class extends Vt{constructor(e=[],t=Xi,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Io=class extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ur(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tn(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:qn});r.uniforms.tEquirect.value=t;let o=new xt(s,r),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=_n),new Ro(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},nt=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rf={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),f=this._getHandJoint(l,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ki=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ac=new L,If=new L,Pf=new We,ft=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ac.subVectors(n,t).cross(If.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ac),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pf.getNormalMatrix(e),s=this.coplanarPoint(Ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Li=new Ms,Df=new ye(.5,.5),mo=new L,Es=class{constructor(e=new ft,t=new ft,n=new ft,s=new ft,r=new ft,o=new ft){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],_=r[8],y=r[9],m=r[10],f=r[11],A=r[12],w=r[13],S=r[14],I=r[15];if(s[0].setComponents(l-o,p-h,f-_,I-A).normalize(),s[1].setComponents(l+o,p+h,f+_,I+A).normalize(),s[2].setComponents(l+a,p+u,f+y,I+w).normalize(),s[3].setComponents(l-a,p-u,f-y,I-w).normalize(),n)s[4].setComponents(c,d,m,S).normalize(),s[5].setComponents(l-c,p-d,f-m,I-S).normalize();else if(s[4].setComponents(l-c,p-d,f-m,I-S).normalize(),t===gn)s[5].setComponents(l+c,p+d,f+m,I+S).normalize();else if(t===sr)s[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);let t=Df.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(mo.x=s.normal.x>0?e.max.x:e.min.x,mo.y=s.normal.y>0?e.max.y:e.min.y,mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var vn=class extends Vt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},dr=class extends Vt{constructor(e,t,n=pi,s,r,o,a=cn,c=cn,l,h=_s,u=1){if(h!==_s&&h!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fr=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var li=class i extends kt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new L,h=new ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("normal",new et(a,3)),this.setAttribute("uv",new et(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Xn=class i extends kt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],_=0,y=[],m=n/2,f=0;A(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(p,2));function A(){let S=new L,I=new L,C=0,b=(t-e)/n;for(let T=0;T<=r;T++){let g=[],x=T/r,v=x*(t-e)+e;for(let P=0;P<=s;P++){let F=P/s,D=F*c+a,O=Math.sin(D),B=Math.cos(D);I.x=v*O,I.y=-x*n+m,I.z=v*B,u.push(I.x,I.y,I.z),S.set(O,b,B).normalize(),d.push(S.x,S.y,S.z),p.push(F,1-x),g.push(_++)}y.push(g)}for(let T=0;T<s;T++)for(let g=0;g<r;g++){let x=y[g][T],v=y[g+1][T],P=y[g+1][T+1],F=y[g][T+1];(e>0||g!==0)&&(h.push(x,v,F),C+=3),(t>0||g!==r-1)&&(h.push(v,P,F),C+=3)}l.addGroup(f,C,0),f+=C}function w(S){let I=_,C=new ye,b=new L,T=0,g=S===!0?e:t,x=S===!0?1:-1;for(let P=1;P<=s;P++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),_++;let v=_;for(let P=0;P<=s;P++){let D=P/s*c+a,O=Math.cos(D),B=Math.sin(D);b.x=g*B,b.y=m*x,b.z=g*O,u.push(b.x,b.y,b.z),d.push(0,x,0),C.x=O*.5+.5,C.y=B*.5*x+.5,p.push(C.x,C.y),_++}for(let P=0;P<s;P++){let F=I+P,D=v+P;S===!0?h.push(D,D+1,F):h.push(D+1,D,F),T+=3}l.addGroup(f,T,S===!0?1:2),f+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pr=class i extends Xn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ye:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new pt;for(let p=0;p<=e;p++){let _=p/e;s[p]=this.getTangentAt(_,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(qe(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,_))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(qe(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],p*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ws=class extends en{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ye){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Po=class extends ws{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function dl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var go=new L,Cc=new dl,Rc=new dl,Ic=new dl,Ts=class extends en{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(go.subVectors(s[0],s[1]).add(s[0]),l=go);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(go.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=go),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),_<1e-4&&(_=y),m<1e-4&&(m=y),Cc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,y,m),Rc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,y,m),Ic.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,y,m)}else this.curveType==="catmullrom"&&(Cc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Rc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ic.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Cc.calc(c),Rc.calc(c),Ic.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ih(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Lf(i,e){let t=1-i;return t*t*e}function Uf(i,e){return 2*(1-i)*i*e}function Nf(i,e){return i*i*e}function er(i,e,t,n){return Lf(i,e)+Uf(i,t)+Nf(i,n)}function Ff(i,e){let t=1-i;return t*t*t*e}function Of(i,e){let t=1-i;return 3*t*t*i*e}function Bf(i,e){return 3*(1-i)*i*i*e}function kf(i,e){return i*i*i*e}function tr(i,e,t,n,s){return Ff(i,e)+Of(i,t)+Bf(i,n)+kf(i,s)}var mr=class extends en{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(e,s.x,r.x,o.x,a.x),tr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Do=class extends en{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(e,s.x,r.x,o.x,a.x),tr(e,s.y,r.y,o.y,a.y),tr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gr=class extends en{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends en{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_r=class extends en{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(er(e,s.x,r.x,o.x),er(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xr=class extends en{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(er(e,s.x,r.x,o.x),er(e,s.y,r.y,o.y),er(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yr=class extends en{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ih(a,c.x,l.x,h.x,u.x),Ih(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},Uo=Object.freeze({__proto__:null,ArcCurve:Po,CatmullRomCurve3:Ts,CubicBezierCurve:mr,CubicBezierCurve3:Do,EllipseCurve:ws,LineCurve:gr,LineCurve3:Lo,QuadraticBezierCurve:_r,QuadraticBezierCurve3:xr,SplineCurve:yr}),No=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Uo[s.type]().fromJSON(s))}return this}},vr=class extends No{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new gr(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new _r(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new mr(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new yr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new ws(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},As=class extends vr{constructor(e){super(e),this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new vr().fromJSON(s))}return this}};function zf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ru(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Xf(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let p=i[d],_=i[d+1];p<a&&(a=p),_<c&&(c=_),p>h&&(h=p),_>u&&(u=_)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Mr(r,o,t,a,c,l,0),o}function Ru(i,e,t,n,s){let r;if(s===np(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ph(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ph(o/n|0,i[o],i[o+1],r);return r&&Cs(r,r.next)&&(br(r),r=r.next),r}function zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Cs(t,t.next)||_t(t.prev,t,t.next)===0)){if(br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Mr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Jf(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Vf(i,n,s,r):Hf(i)){e.push(c.i,i.i,l.i),br(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Gf(zi(i),e),Mr(i,e,t,n,s,r,2)):o===2&&Wf(i,e,t,n,s,r):Mr(zi(i),e,t,n,s,r,1);break}}}function Hf(i){let e=i.prev,t=i,n=i.next;if(_t(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),p=Math.max(a,c,l),_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=p&&Ks(s,a,r,c,o,l,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Vf(i,e,t,n){let s=i.prev,r=i,o=i.next;if(_t(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=Math.min(a,c,l),_=Math.min(h,u,d),y=Math.max(a,c,l),m=Math.max(h,u,d),f=Bc(p,_,e,t,n),A=Bc(y,m,e,t,n),w=i.prevZ,S=i.nextZ;for(;w&&w.z>=f&&S&&S.z<=A;){if(w.x>=p&&w.x<=y&&w.y>=_&&w.y<=m&&w!==s&&w!==o&&Ks(a,h,c,u,l,d,w.x,w.y)&&_t(w.prev,w,w.next)>=0||(w=w.prevZ,S.x>=p&&S.x<=y&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&Ks(a,h,c,u,l,d,S.x,S.y)&&_t(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;w&&w.z>=f;){if(w.x>=p&&w.x<=y&&w.y>=_&&w.y<=m&&w!==s&&w!==o&&Ks(a,h,c,u,l,d,w.x,w.y)&&_t(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;S&&S.z<=A;){if(S.x>=p&&S.x<=y&&S.y>=_&&S.y<=m&&S!==s&&S!==o&&Ks(a,h,c,u,l,d,S.x,S.y)&&_t(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Gf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Cs(n,s)&&Pu(n,t,t.next,s)&&Sr(n,s)&&Sr(s,n)&&(e.push(n.i,t.i,s.i),br(t),br(t.next),t=i=s),t=t.next}while(t!==i);return zi(t)}function Wf(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jf(o,a)){let c=Du(o,a);o=zi(o,o.next),c=zi(c,c.next),Mr(o,e,t,n,s,r,0),Mr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Xf(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Ru(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Qf(l))}s.sort(qf);for(let r=0;r<s.length;r++)t=Yf(s[r],t);return t}function qf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Yf(i,e){let t=$f(i,e);if(!t)return e;let n=Du(t,i);return zi(n,n.next),zi(t,t.next)}function $f(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Cs(i,t))return t;do{if(Cs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Iu(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Sr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Zf(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Zf(i,e){return _t(i.prev,i,e.prev)<0&&_t(e.next,i,i.next)<0}function Jf(i,e,t,n){let s=i;do s.z===0&&(s.z=Bc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kf(s)}function Kf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Bc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Qf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Iu(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ks(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Iu(i,e,t,n,s,r,o,a)}function jf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!ep(i,e)&&(Sr(i,e)&&Sr(e,i)&&tp(i,e)&&(_t(i.prev,i,e.prev)||_t(i,e.prev,e))||Cs(i,e)&&_t(i.prev,i,i.next)>0&&_t(e.prev,e,e.next)>0)}function _t(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Cs(i,e){return i.x===e.x&&i.y===e.y}function Pu(i,e,t,n){let s=xo(_t(i,e,t)),r=xo(_t(i,e,n)),o=xo(_t(t,n,i)),a=xo(_t(t,n,e));return!!(s!==r&&o!==a||s===0&&_o(i,t,e)||r===0&&_o(i,n,e)||o===0&&_o(t,i,n)||a===0&&_o(t,e,n))}function _o(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xo(i){return i>0?1:i<0?-1:0}function ep(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Pu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Sr(i,e){return _t(i.prev,i,i.next)<0?_t(i,e,i.next)>=0&&_t(i,i.prev,e)>=0:_t(i,e,i.prev)<0||_t(i,i.next,e)<0}function tp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Du(i,e){let t=kc(i.i,i.x,i.y),n=kc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ph(i,e,t,n){let s=kc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function br(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function np(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var zc=class{static triangulate(e,t,n=2){return zf(e,t,n)}},Ni=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Dh(e),Lh(n,e);let o=e.length;t.forEach(Dh);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Lh(n,t[c]);let a=zc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Dh(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Lh(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Er=class i extends kt{constructor(e=new As([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new et(s,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:ip,w,S=!1,I,C,b,T;f&&(w=f.getSpacedPoints(h),S=!0,d=!1,I=f.computeFrenetFrames(h,!1),C=new L,b=new L,T=new L),d||(m=0,p=0,_=0,y=0);let g=a.extractPoints(l),x=g.shape,v=g.holes;if(!Ni.isClockWise(x)){x=x.reverse();for(let oe=0,ne=v.length;oe<ne;oe++){let K=v[oe];Ni.isClockWise(K)&&(v[oe]=K.reverse())}}function F(oe){let K=10000000000000001e-36,te=oe[0];for(let pe=1;pe<=oe.length;pe++){let ce=pe%oe.length,_e=oe[ce],ze=_e.x-te.x,Oe=_e.y-te.y,R=ze*ze+Oe*Oe,M=Math.max(Math.abs(_e.x),Math.abs(_e.y),Math.abs(te.x),Math.abs(te.y)),W=K*M*M;if(R<=W){oe.splice(ce,1),pe--;continue}te=_e}}F(x),v.forEach(F);let D=v.length,O=x;for(let oe=0;oe<D;oe++){let ne=v[oe];x=x.concat(ne)}function B(oe,ne,K){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ne,K)}let H=x.length;function k(oe,ne,K){let te,pe,ce,_e=oe.x-ne.x,ze=oe.y-ne.y,Oe=K.x-oe.x,R=K.y-oe.y,M=_e*_e+ze*ze,W=_e*R-ze*Oe;if(Math.abs(W)>Number.EPSILON){let Q=Math.sqrt(M),re=Math.sqrt(Oe*Oe+R*R),ee=ne.x-ze/Q,Ie=ne.y+_e/Q,ue=K.x-R/re,Te=K.y+Oe/re,Re=((ue-ee)*R-(Te-Ie)*Oe)/(_e*R-ze*Oe);te=ee+_e*Re-oe.x,pe=Ie+ze*Re-oe.y;let U=te*te+pe*pe;if(U<=2)return new ye(te,pe);ce=Math.sqrt(U/2)}else{let Q=!1;_e>Number.EPSILON?Oe>Number.EPSILON&&(Q=!0):_e<-Number.EPSILON?Oe<-Number.EPSILON&&(Q=!0):Math.sign(ze)===Math.sign(R)&&(Q=!0),Q?(te=-ze,pe=_e,ce=Math.sqrt(M)):(te=_e,pe=ze,ce=Math.sqrt(M/2))}return new ye(te/ce,pe/ce)}let X=[];for(let oe=0,ne=O.length,K=ne-1,te=oe+1;oe<ne;oe++,K++,te++)K===ne&&(K=0),te===ne&&(te=0),X[oe]=k(O[oe],O[K],O[te]);let j=[],ae,Me=X.concat();for(let oe=0,ne=D;oe<ne;oe++){let K=v[oe];ae=[];for(let te=0,pe=K.length,ce=pe-1,_e=te+1;te<pe;te++,ce++,_e++)ce===pe&&(ce=0),_e===pe&&(_e=0),ae[te]=k(K[te],K[ce],K[_e]);j.push(ae),Me=Me.concat(ae)}let de;if(m===0)de=Ni.triangulateShape(O,v);else{let oe=[],ne=[];for(let K=0;K<m;K++){let te=K/m,pe=p*Math.cos(te*Math.PI/2),ce=_*Math.sin(te*Math.PI/2)+y;for(let _e=0,ze=O.length;_e<ze;_e++){let Oe=B(O[_e],X[_e],ce);be(Oe.x,Oe.y,-pe),te===0&&oe.push(Oe)}for(let _e=0,ze=D;_e<ze;_e++){let Oe=v[_e];ae=j[_e];let R=[];for(let M=0,W=Oe.length;M<W;M++){let Q=B(Oe[M],ae[M],ce);be(Q.x,Q.y,-pe),te===0&&R.push(Q)}te===0&&ne.push(R)}}de=Ni.triangulateShape(oe,ne)}let He=de.length,Le=_+y;for(let oe=0;oe<H;oe++){let ne=d?B(x[oe],Me[oe],Le):x[oe];S?(b.copy(I.normals[0]).multiplyScalar(ne.x),C.copy(I.binormals[0]).multiplyScalar(ne.y),T.copy(w[0]).add(b).add(C),be(T.x,T.y,T.z)):be(ne.x,ne.y,0)}for(let oe=1;oe<=h;oe++)for(let ne=0;ne<H;ne++){let K=d?B(x[ne],Me[ne],Le):x[ne];S?(b.copy(I.normals[oe]).multiplyScalar(K.x),C.copy(I.binormals[oe]).multiplyScalar(K.y),T.copy(w[oe]).add(b).add(C),be(T.x,T.y,T.z)):be(K.x,K.y,u/h*oe)}for(let oe=m-1;oe>=0;oe--){let ne=oe/m,K=p*Math.cos(ne*Math.PI/2),te=_*Math.sin(ne*Math.PI/2)+y;for(let pe=0,ce=O.length;pe<ce;pe++){let _e=B(O[pe],X[pe],te);be(_e.x,_e.y,u+K)}for(let pe=0,ce=v.length;pe<ce;pe++){let _e=v[pe];ae=j[pe];for(let ze=0,Oe=_e.length;ze<Oe;ze++){let R=B(_e[ze],ae[ze],te);S?be(R.x,R.y+w[h-1].y,w[h-1].x+K):be(R.x,R.y,u+K)}}}q(),Z();function q(){let oe=s.length/3;if(d){let ne=0,K=H*ne;for(let te=0;te<He;te++){let pe=de[te];Se(pe[2]+K,pe[1]+K,pe[0]+K)}ne=h+m*2,K=H*ne;for(let te=0;te<He;te++){let pe=de[te];Se(pe[0]+K,pe[1]+K,pe[2]+K)}}else{for(let ne=0;ne<He;ne++){let K=de[ne];Se(K[2],K[1],K[0])}for(let ne=0;ne<He;ne++){let K=de[ne];Se(K[0]+H*h,K[1]+H*h,K[2]+H*h)}}n.addGroup(oe,s.length/3-oe,0)}function Z(){let oe=s.length/3,ne=0;ve(O,ne),ne+=O.length;for(let K=0,te=v.length;K<te;K++){let pe=v[K];ve(pe,ne),ne+=pe.length}n.addGroup(oe,s.length/3-oe,1)}function ve(oe,ne){let K=oe.length;for(;--K>=0;){let te=K,pe=K-1;pe<0&&(pe=oe.length-1);for(let ce=0,_e=h+m*2;ce<_e;ce++){let ze=H*ce,Oe=H*(ce+1),R=ne+te+ze,M=ne+pe+ze,W=ne+pe+Oe,Q=ne+te+Oe;Ge(R,M,W,Q)}}}function be(oe,ne,K){c.push(oe),c.push(ne),c.push(K)}function Se(oe,ne,K){Je(oe),Je(ne),Je(K);let te=s.length/3,pe=A.generateTopUV(n,s,te-3,te-2,te-1);N(pe[0]),N(pe[1]),N(pe[2])}function Ge(oe,ne,K,te){Je(oe),Je(ne),Je(te),Je(ne),Je(K),Je(te);let pe=s.length/3,ce=A.generateSideWallUV(n,s,pe-6,pe-3,pe-2,pe-1);N(ce[0]),N(ce[1]),N(ce[3]),N(ce[1]),N(ce[2]),N(ce[3])}function Je(oe){s.push(c[oe*3+0]),s.push(c[oe*3+1]),s.push(c[oe*3+2])}function N(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return sp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Uo[s.type]().fromJSON(s)),new i(n,e.options)}},ip={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ye(r,o),new ye(a,c),new ye(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],p=e[s*3+1],_=e[s*3+2],y=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ye(o,1-c),new ye(l,1-u),new ye(d,1-_),new ye(y,1-f)]:[new ye(a,1-c),new ye(h,1-u),new ye(p,1-_),new ye(m,1-f)]}};function sp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var wr=class i extends kt{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=qe(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new L,d=new ye,p=new L,_=new L,y=new L,m=0,f=0;for(let A=0;A<=e.length-1;A++)switch(A){case 0:m=e[A+1].x-e[A].x,f=e[A+1].y-e[A].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:m=e[A+1].x-e[A].x,f=e[A+1].y-e[A].y,p.x=f*1,p.y=-m,p.z=f*0,_.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),c.push(p.x,p.y,p.z),y.copy(_)}for(let A=0;A<=t;A++){let w=n+A*h*s,S=Math.sin(w),I=Math.cos(w);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*S,u.y=e[C].y,u.z=e[C].x*I,o.push(u.x,u.y,u.z),d.x=A/t,d.y=C/(e.length-1),a.push(d.x,d.y);let b=c[3*C+0]*S,T=c[3*C+1],g=c[3*C+0]*I;l.push(b,T,g)}}for(let A=0;A<t;A++)for(let w=0;w<e.length-1;w++){let S=w+A*e.length,I=S,C=S+e.length,b=S+e.length+1,T=S+1;r.push(I,C,T),r.push(b,T,C)}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("uv",new et(a,2)),this.setAttribute("normal",new et(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var tn=class i extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,p=[],_=[],y=[],m=[];for(let f=0;f<h;f++){let A=f*d-o;for(let w=0;w<l;w++){let S=w*u-r;_.push(S,-A,0),y.push(0,0,1),m.push(w/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<a;A++){let w=A+l*f,S=A+l*(f+1),I=A+1+l*(f+1),C=A+1+l*f;p.push(w,S,C),p.push(S,I,C)}this.setIndex(p),this.setAttribute("position",new et(_,3)),this.setAttribute("normal",new et(y,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Tr=class i extends kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,d=new L,p=[],_=[],y=[],m=[];for(let f=0;f<=n;f++){let A=[],w=f/n,S=0;f===0&&o===0?S=.5/t:f===n&&c===Math.PI&&(S=-.5/t);for(let I=0;I<=t;I++){let C=I/t;u.x=-e*Math.cos(s+C*r)*Math.sin(o+w*a),u.y=e*Math.cos(o+w*a),u.z=e*Math.sin(s+C*r)*Math.sin(o+w*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(C+S,1-w),A.push(l++)}h.push(A)}for(let f=0;f<n;f++)for(let A=0;A<t;A++){let w=h[f][A+1],S=h[f][A],I=h[f+1][A],C=h[f+1][A+1];(f!==0||o>0)&&p.push(w,S,C),(f!==n-1||c<Math.PI)&&p.push(S,I,C)}this.setIndex(p),this.setAttribute("position",new et(_,3)),this.setAttribute("normal",new et(y,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ar=class i extends kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let p=0;p<=n;p++)for(let _=0;_<=s;_++){let y=_/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=s;_++){let y=(s+1)*p+_-1,m=(s+1)*(p-1)+_-1,f=(s+1)*(p-1)+_,A=(s+1)*p+_;o.push(y,m,A),o.push(m,f,A)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Cr=class i extends kt{constructor(e=new xr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new ye,h=new L,u=[],d=[],p=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(d,3)),this.setAttribute("uv",new et(p,2));function y(){for(let w=0;w<t;w++)m(w);m(r===!1?t:0),A(),f()}function m(w){h=e.getPointAt(w/t,h);let S=o.normals[w],I=o.binormals[w];for(let C=0;C<=s;C++){let b=C/s*Math.PI*2,T=Math.sin(b),g=-Math.cos(b);c.x=g*S.x+T*I.x,c.y=g*S.y+T*I.y,c.z=g*S.z+T*I.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let w=1;w<=t;w++)for(let S=1;S<=s;S++){let I=(s+1)*(w-1)+(S-1),C=(s+1)*w+(S-1),b=(s+1)*w+S,T=(s+1)*(w-1)+S;_.push(I,C,T),_.push(C,b,T)}}function A(){for(let w=0;w<=t;w++)for(let S=0;S<=s;S++)l.x=w/t,l.y=S/s,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Gt=class extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Fo=class extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo=class extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bo=class extends Hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lc,endingEnd:Lc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uc:r=e,a=2*t-n;break;case Nc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Uc:o=e,c=2*n-t;break;case Nc:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),y=_*_,m=y*_,f=-d*m+2*d*y-d*_,A=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*_+1,w=(-1-p)*m+(1.5+p)*y+.5*_,S=p*m-p*y;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+A*o[l+I]+w*o[c+I]+S*o[u+I];return r}},ko=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},zo=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},nn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yo(t,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:yo(e.times,Array),values:yo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case wo:t=this.InterpolantFactoryMethodLinear;break;case vo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return vo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&rp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vo,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){let y=t[u+_];if(y!==t[d+_]||y!==t[p+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};nn.prototype.ValueTypeName="";nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=wo;var hi=class extends nn{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=nr;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Ho.prototype.ValueTypeName="color";var Vo=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Vo.prototype.ValueTypeName="number";var Go=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Wn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Rr=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Go(this.times,this.values,this.getValueSize(),e)}};Rr.prototype.ValueTypeName="quaternion";Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends nn{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=nr;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends nn{constructor(e,t,n,s){super(e,t,n,s)}};Wo.prototype.ValueTypeName="vector";var Xo=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],_=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Lu=new Xo,qo=class{constructor(e){this.manager=e!==void 0?e:Lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};qo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vi=class extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pc=new pt,Uh=new L,Nh=new L,Yo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uh),Nh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nh),t.updateMatrixWorld(),Pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Fh=new pt,Js=new L,Dc=new L,Hc=class extends Yo{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),n.position.copy(Js),Dc.copy(n.position),Dc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dc),n.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),Fh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh,n.coordinateSystem,n.reversedDepth)}},Gi=class extends Rs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Wi=class extends hr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vc=class extends Yo{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},di=class extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Vc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $o=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var fl="\\[\\]\\.:\\/",op=new RegExp("["+fl+"]","g"),pl="[^"+fl+"]",ap="[^"+fl.replace("\\.","")+"]",cp=/((?:WC+[\/:])*)/.source.replace("WC",pl),lp=/(WCOD+)?/.source.replace("WCOD",ap),hp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl),up=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl),dp=new RegExp("^"+cp+lp+hp+up+"$"),fp=["material","materials","bones","map"],Gc=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(op,"")}static parseTrackName(e){let t=dp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Gc;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Sx=new Float32Array(1);var Oh=new pt,Ir=class{constructor(e,t,n=0,s=1/0){this.ray=new ar(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Oh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oh),this}intersectObject(e,t=!0,n=[]){return Wc(e,this,n,t),n.sort(Bh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Wc(e[s],this,n,t);return n.sort(Bh),n}};function Bh(i,e){return i.distance-e.distance}function Wc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Wc(r[o],e,t,!0)}}function ml(i,e,t,n){let s=pp(n);switch(t){case nl:return i*e;case sl:return i*e/s.components*s.byteLength;case ca:return i*e/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case la:return i*e*2/s.components*s.byteLength;case il:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case ha:return i*e*4/s.components*s.byteLength;case Lr:case Ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nr:case Fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case da:case pa:return Math.max(i,16)*Math.max(e,8)/4;case ua:case fa:return Math.max(i,8)*Math.max(e,8)/2;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Da:case La:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Na:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pp(i){switch(i){case Mn:case Qc:return{byteLength:1,components:1};case Ps:case jc:case Ds:return{byteLength:2,components:1};case oa:case aa:return{byteLength:2,components:4};case pi:case ra:case Rn:return{byteLength:4,components:1};case el:case tl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function id(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function gp(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){let _=u[d],y=u[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){let y=u[p];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var _p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ip=`#ifdef USE_IRIDESCENCE
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
#endif`,Pp=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vp=`vec3 transformedNormal = objectNormal;
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
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sm=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cm=`uniform bool receiveShadow;
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
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
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
#endif`,mm=`struct PhysicalMaterial {
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
}`,gm=`
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
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
#endif`,xm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Em=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Um=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,km=`#ifdef USE_NORMALMAP
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
#endif`,zm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tg=`float getShadowMask() {
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
}`,ng=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_g=`uniform sampler2D t2D;
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`#include <common>
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
}`,bg=`#if DEPTH_PACKING == 3200
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
}`,Eg=`#define DISTANCE
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
}`,wg=`#define DISTANCE
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ag=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cg=`uniform float scale;
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
}`,Rg=`uniform vec3 diffuse;
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
}`,Ig=`#include <common>
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Dg=`#define LAMBERT
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
}`,Lg=`#define LAMBERT
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
}`,Ug=`#define MATCAP
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
}`,Ng=`#define MATCAP
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
}`,Fg=`#define NORMAL
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
}`,Og=`#define NORMAL
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
}`,Bg=`#define PHONG
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
}`,kg=`#define PHONG
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
}`,zg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
}`,Vg=`#define TOON
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
}`,Gg=`#define TOON
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
}`,Wg=`uniform float size;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Yg=`uniform vec3 color;
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
}`,$g=`uniform float rotation;
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
}`,Zg=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:_p,alphahash_pars_fragment:xp,alphamap_fragment:yp,alphamap_pars_fragment:vp,alphatest_fragment:Mp,alphatest_pars_fragment:Sp,aomap_fragment:bp,aomap_pars_fragment:Ep,batching_pars_vertex:wp,batching_vertex:Tp,begin_vertex:Ap,beginnormal_vertex:Cp,bsdfs:Rp,iridescence_fragment:Ip,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Np,color_fragment:Fp,color_pars_fragment:Op,color_pars_vertex:Bp,color_vertex:kp,common:zp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Wp,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:$p,envmap_fragment:Zp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:Kp,envmap_pars_vertex:Qp,envmap_physical_pars_fragment:lm,envmap_vertex:jp,fog_vertex:em,fog_pars_vertex:tm,fog_fragment:nm,fog_pars_fragment:im,gradientmap_pars_fragment:sm,lightmap_pars_fragment:rm,lights_lambert_fragment:om,lights_lambert_pars_fragment:am,lights_pars_begin:cm,lights_toon_fragment:hm,lights_toon_pars_fragment:um,lights_phong_fragment:dm,lights_phong_pars_fragment:fm,lights_physical_fragment:pm,lights_physical_pars_fragment:mm,lights_fragment_begin:gm,lights_fragment_maps:_m,lights_fragment_end:xm,logdepthbuf_fragment:ym,logdepthbuf_pars_fragment:vm,logdepthbuf_pars_vertex:Mm,logdepthbuf_vertex:Sm,map_fragment:bm,map_pars_fragment:Em,map_particle_fragment:wm,map_particle_pars_fragment:Tm,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Cm,morphinstance_vertex:Rm,morphcolor_vertex:Im,morphnormal_vertex:Pm,morphtarget_pars_vertex:Dm,morphtarget_vertex:Lm,normal_fragment_begin:Um,normal_fragment_maps:Nm,normal_pars_fragment:Fm,normal_pars_vertex:Om,normal_vertex:Bm,normalmap_pars_fragment:km,clearcoat_normal_fragment_begin:zm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Vm,iridescence_pars_fragment:Gm,opaque_fragment:Wm,packing:Xm,premultiplied_alpha_fragment:qm,project_vertex:Ym,dithering_fragment:$m,dithering_pars_fragment:Zm,roughnessmap_fragment:Jm,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Qm,shadowmap_pars_vertex:jm,shadowmap_vertex:eg,shadowmask_pars_fragment:tg,skinbase_vertex:ng,skinning_pars_vertex:ig,skinning_vertex:sg,skinnormal_vertex:rg,specularmap_fragment:og,specularmap_pars_fragment:ag,tonemapping_fragment:cg,tonemapping_pars_fragment:lg,transmission_fragment:hg,transmission_pars_fragment:ug,uv_pars_fragment:dg,uv_pars_vertex:fg,uv_vertex:pg,worldpos_vertex:mg,background_vert:gg,background_frag:_g,backgroundCube_vert:xg,backgroundCube_frag:yg,cube_vert:vg,cube_frag:Mg,depth_vert:Sg,depth_frag:bg,distanceRGBA_vert:Eg,distanceRGBA_frag:wg,equirect_vert:Tg,equirect_frag:Ag,linedashed_vert:Cg,linedashed_frag:Rg,meshbasic_vert:Ig,meshbasic_frag:Pg,meshlambert_vert:Dg,meshlambert_frag:Lg,meshmatcap_vert:Ug,meshmatcap_frag:Ng,meshnormal_vert:Fg,meshnormal_frag:Og,meshphong_vert:Bg,meshphong_frag:kg,meshphysical_vert:zg,meshphysical_frag:Hg,meshtoon_vert:Vg,meshtoon_frag:Gg,points_vert:Wg,points_frag:Xg,shadow_vert:qg,shadow_frag:Yg,sprite_vert:$g,sprite_frag:Zg},Ee={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},In={basic:{uniforms:Nt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Nt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Nt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Nt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Nt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Nt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Nt([Ee.points,Ee.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Nt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Nt([Ee.common,Ee.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Nt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Nt([Ee.sprite,Ee.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Nt([Ee.common,Ee.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Nt([Ee.lights,Ee.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};In.physical={uniforms:Nt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var ka={r:0,b:0,g:0},Zi=new xn,Jg=new pt;function Kg(i,e,t,n,s,r,o){let a=new Ye(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function _(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function y(w){let S=!1,I=_(w);I===null?f(a,c):I&&I.isColor&&(f(I,1),S=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,S){let I=_(S);I&&(I.isCubeTexture||I.mapping===Pr)?(h===void 0&&(h=new xt(new Tn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:$i(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zi.copy(S.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jg.makeRotationFromEuler(Zi)),h.material.toneMapped=Ze.getTransfer(I.colorSpace)!==it,(u!==I||d!==I.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(l===void 0&&(l=new xt(new tn(2,2),new yn({name:"BackgroundMaterial",uniforms:$i(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=I,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(I.colorSpace)!==it,I.matrixAutoUpdate===!0&&I.updateMatrix(),l.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=I,d=I.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function f(w,S){w.getRGB(ka,ul(i)),n.buffers.color.setClear(ka.r,ka.g,ka.b,S,o)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),c=S,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,f(a,c)},render:y,addToRenderList:m,dispose:A}}function Qg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(x,v,P,F,D){let O=!1,B=u(F,P,v);r!==B&&(r=B,l(r.object)),O=p(x,F,P,D),O&&_(x,F,P,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,S(x,v,P,F),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,v,P){let F=P.wireframe===!0,D=n[x.id];D===void 0&&(D={},n[x.id]=D);let O=D[v.id];O===void 0&&(O={},D[v.id]=O);let B=O[F];return B===void 0&&(B=d(c()),O[F]=B),B}function d(x){let v=[],P=[],F=[];for(let D=0;D<t;D++)v[D]=0,P[D]=0,F[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:P,attributeDivisors:F,object:x,attributes:{},index:null}}function p(x,v,P,F){let D=r.attributes,O=v.attributes,B=0,H=P.getAttributes();for(let k in H)if(H[k].location>=0){let j=D[k],ae=O[k];if(ae===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),j===void 0||j.attribute!==ae||ae&&j.data!==ae.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function _(x,v,P,F){let D={},O=v.attributes,B=0,H=P.getAttributes();for(let k in H)if(H[k].location>=0){let j=O[k];j===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(j=x.instanceColor));let ae={};ae.attribute=j,j&&j.data&&(ae.data=j.data),D[k]=ae,B++}r.attributes=D,r.attributesNum=B,r.index=F}function y(){let x=r.newAttributes;for(let v=0,P=x.length;v<P;v++)x[v]=0}function m(x){f(x,0)}function f(x,v){let P=r.newAttributes,F=r.enabledAttributes,D=r.attributeDivisors;P[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),D[x]!==v&&(i.vertexAttribDivisor(x,v),D[x]=v)}function A(){let x=r.newAttributes,v=r.enabledAttributes;for(let P=0,F=v.length;P<F;P++)v[P]!==x[P]&&(i.disableVertexAttribArray(P),v[P]=0)}function w(x,v,P,F,D,O,B){B===!0?i.vertexAttribIPointer(x,v,P,D,O):i.vertexAttribPointer(x,v,P,F,D,O)}function S(x,v,P,F){y();let D=F.attributes,O=P.getAttributes(),B=v.defaultAttributeValues;for(let H in O){let k=O[H];if(k.location>=0){let X=D[H];if(X===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),X!==void 0){let j=X.normalized,ae=X.itemSize,Me=e.get(X);if(Me===void 0)continue;let de=Me.buffer,He=Me.type,Le=Me.bytesPerElement,q=He===i.INT||He===i.UNSIGNED_INT||X.gpuType===ra;if(X.isInterleavedBufferAttribute){let Z=X.data,ve=Z.stride,be=X.offset;if(Z.isInstancedInterleavedBuffer){for(let Se=0;Se<k.locationSize;Se++)f(k.location+Se,Z.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Se=0;Se<k.locationSize;Se++)m(k.location+Se);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Se=0;Se<k.locationSize;Se++)w(k.location+Se,ae/k.locationSize,He,j,ve*Le,(be+ae/k.locationSize*Se)*Le,q)}else{if(X.isInstancedBufferAttribute){for(let Z=0;Z<k.locationSize;Z++)f(k.location+Z,X.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Z=0;Z<k.locationSize;Z++)m(k.location+Z);i.bindBuffer(i.ARRAY_BUFFER,de);for(let Z=0;Z<k.locationSize;Z++)w(k.location+Z,ae/k.locationSize,He,j,ae*Le,ae/k.locationSize*Z*Le,q)}}else if(B!==void 0){let j=B[H];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(k.location,j);break;case 3:i.vertexAttrib3fv(k.location,j);break;case 4:i.vertexAttrib4fv(k.location,j);break;default:i.vertexAttrib1fv(k.location,j)}}}}A()}function I(){T();for(let x in n){let v=n[x];for(let P in v){let F=v[P];for(let D in F)h(F[D].object),delete F[D];delete v[P]}delete n[x]}}function C(x){if(n[x.id]===void 0)return;let v=n[x.id];for(let P in v){let F=v[P];for(let D in F)h(F[D].object),delete F[D];delete v[P]}delete n[x.id]}function b(x){for(let v in n){let P=n[v];if(P[x.id]===void 0)continue;let F=P[x.id];for(let D in F)h(F[D].object),delete F[D];delete P[x.id]}}function T(){g(),o=!0,r!==s&&(r=s,l(r.object))}function g(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:g,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function jg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let y=0;y<u;y++)_+=h[y]*d[y];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function e0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==hn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let T=b===Ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Mn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Rn&&!T)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:I,maxSamples:C}}function t0(i){let e=this,t=null,n=0,s=!1,r=!1,o=new ft,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let _=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{let A=r?0:n,w=A*4,S=f.clippingState||null;c.value=S,S=h(_,d,w,p);for(let I=0;I!==w;++I)S[I]=t[I];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,_){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,_!==!0||m===null){let f=p+y*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,S=p;w!==y;++w,S+=4)o.copy(u[w]).applyMatrix4(A,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function n0(i){let e=new WeakMap;function t(o,a){return a===na?o.mapping=Xi:a===ia&&(o.mapping=qi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===na||a===ia)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Io(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Fs=4,Uu=[.125,.215,.35,.446,.526,.582],Qi=20,gl=new Wi,Nu=new Ye,_l=null,xl=0,yl=0,vl=!1,Ki=(1+Math.sqrt(5))/2,Ns=1/Ki,Fu=[new L(-Ki,Ns,0),new L(Ki,Ns,0),new L(-Ns,0,Ki),new L(Ns,0,Ki),new L(0,Ki,-Ns),new L(0,Ki,Ns),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],i0=new L,Va=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=i0}=r;_l=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,xl,yl),this._renderer.xr.enabled=vl,e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),yl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ds,format:hn,colorSpace:Bi,depthBuffer:!1},s=Ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s0(r)),this._blurMaterial=r0(r,e,t)}return s}_compileMaterial(e){let t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,n,s,r){let c=new Ct(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Nu),u.toneMapping=Yn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let y=new Rt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),m=new xt(new Tn,y),f=!1,A=e.background;A?A.isColor&&(y.color.copy(A),e.background=null,f=!0):(y.color.copy(Nu),f=!0);for(let w=0;w<6;w++){let S=w%3;S===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):S===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let I=this._cubeSize;za(s,S*I,w>2?I:0,I,I),u.setRenderTarget(s),f&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=A}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Xi||e.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;za(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,gl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fu[(s-r-1)%Fu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new xt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Qi-1),y=r/_,m=isFinite(r)?1+Math.floor(h*y):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);let f=[],A=0;for(let b=0;b<Qi;++b){let T=b/y,g=Math.exp(-T*T/2);f.push(g),b===0?A+=g:b<m&&(A+=2*g)}for(let b=0;b<f.length;b++)f[b]=f[b]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-n;let S=this._sizeLods[s],I=3*S*(s>w-Fs?s-w+Fs:0),C=4*(this._cubeSize-S);za(t,I,C,3*S,2*S),c.setRenderTarget(t),c.render(u,gl)}};function s0(i){let e=[],t=[],n=[],s=i,r=i-Fs+1+Uu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Fs?c=Uu[o-i+Fs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,y=3,m=2,f=1,A=new Float32Array(y*_*p),w=new Float32Array(m*_*p),S=new Float32Array(f*_*p);for(let C=0;C<p;C++){let b=C%3*2/3-1,T=C>2?0:-1,g=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];A.set(g,y*_*C),w.set(d,m*_*C);let x=[C,C,C,C,C,C];S.set(x,f*_*C)}let I=new kt;I.setAttribute("position",new jt(A,y)),I.setAttribute("uv",new jt(w,m)),I.setAttribute("faceIndex",new jt(S,f)),e.push(I),s>Fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ou(i,e,t){let n=new wn(i,e,t);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function r0(i,e,t){let n=new Float32Array(Qi),s=new L(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Il(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Bu(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ku(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}function o0(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===na||c===ia,h=c===Xi||c===qi;if(l||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Va(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Va(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function a0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function c0(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(u){let d=[],p=u.index,_=u.attributes.position,y=0;if(p!==null){let A=p.array;y=p.version;for(let w=0,S=A.length;w<S;w+=3){let I=A[w+0],C=A[w+1],b=A[w+2];d.push(I,C,C,b,b,I)}}else if(_!==void 0){let A=_.array;y=_.version;for(let w=0,S=A.length/3-1;w<S;w+=3){let I=w+0,C=w+1,b=w+2;d.push(I,C,C,b,b,I)}}else return;let m=new(hl(d)?lr:cr)(d,1);m.version=y;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function l0(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function l(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*o,_),t.update(p,n,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function u(d,p,_,y){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,_);let f=0;for(let A=0;A<_;A++)f+=p[A]*y[A];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function h0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function u0(i,e,t){let n=new WeakMap,s=new tt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let g=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",g)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],w=0;p===!0&&(w=1),_===!0&&(w=2),y===!0&&(w=3);let S=a.attributes.position.count*w,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let C=new Float32Array(S*I*4*u),b=new or(C,S,I,u);b.type=Rn,b.needsUpdate=!0;let T=w*4;for(let x=0;x<u;x++){let v=m[x],P=f[x],F=A[x],D=S*I*4*x;for(let O=0;O<v.count;O++){let B=O*T;p===!0&&(s.fromBufferAttribute(v,O),C[D+B+0]=s.x,C[D+B+1]=s.y,C[D+B+2]=s.z,C[D+B+3]=0),_===!0&&(s.fromBufferAttribute(P,O),C[D+B+4]=s.x,C[D+B+5]=s.y,C[D+B+6]=s.z,C[D+B+7]=0),y===!0&&(s.fromBufferAttribute(F,O),C[D+B+8]=s.x,C[D+B+9]=s.y,C[D+B+10]=s.z,C[D+B+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new ye(S,I)},n.set(a,d),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function d0(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var sd=new Vt,zu=new dr(1,1),rd=new or,od=new Co,ad=new ur,Hu=[],Vu=[],Gu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function ks(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function f0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function p0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function m0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function g0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function _0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;Xu.set(n),i.uniformMatrix2fv(this.addr,!1,Xu),wt(t,n)}}function x0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;Wu.set(n),i.uniformMatrix3fv(this.addr,!1,Wu),wt(t,n)}}function y0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Et(t,n))return;Gu.set(n),i.uniformMatrix4fv(this.addr,!1,Gu),wt(t,n)}}function v0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function M0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function S0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function b0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function E0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function w0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function T0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function A0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function C0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zu.compareFunction=al,r=zu):r=sd,t.setTexture2D(e||r,s)}function R0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||od,s)}function I0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ad,s)}function P0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||rd,s)}function D0(i){switch(i){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return x0;case 35676:return y0;case 5124:case 35670:return v0;case 35667:case 35671:return M0;case 35668:case 35672:return S0;case 35669:case 35673:return b0;case 5125:return E0;case 36294:return w0;case 36295:return T0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return I0;case 36289:case 36303:case 36311:case 36292:return P0}}function L0(i,e){i.uniform1fv(this.addr,e)}function U0(i,e){let t=ks(e,this.size,2);i.uniform2fv(this.addr,t)}function N0(i,e){let t=ks(e,this.size,3);i.uniform3fv(this.addr,t)}function F0(i,e){let t=ks(e,this.size,4);i.uniform4fv(this.addr,t)}function O0(i,e){let t=ks(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function B0(i,e){let t=ks(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function k0(i,e){let t=ks(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function z0(i,e){i.uniform1iv(this.addr,e)}function H0(i,e){i.uniform2iv(this.addr,e)}function V0(i,e){i.uniform3iv(this.addr,e)}function G0(i,e){i.uniform4iv(this.addr,e)}function W0(i,e){i.uniform1uiv(this.addr,e)}function X0(i,e){i.uniform2uiv(this.addr,e)}function q0(i,e){i.uniform3uiv(this.addr,e)}function Y0(i,e){i.uniform4uiv(this.addr,e)}function $0(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||sd,r[o])}function Z0(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||od,r[o])}function J0(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ad,r[o])}function K0(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||rd,r[o])}function Q0(i){switch(i){case 5126:return L0;case 35664:return U0;case 35665:return N0;case 35666:return F0;case 35674:return O0;case 35675:return B0;case 35676:return k0;case 5124:case 35670:return z0;case 35667:case 35671:return H0;case 35668:case 35672:return V0;case 35669:case 35673:return G0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return K0}}var Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=D0(t.type)}},bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Q0(t.type)}},El=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ml=/(\w+)(\])?(\[|\.)?/g;function qu(i,e){i.seq.push(e),i.map[e.id]=e}function j0(i,e,t){let n=i.name,s=n.length;for(Ml.lastIndex=0;;){let r=Ml.exec(n),o=Ml.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){qu(t,l===void 0?new Sl(a,i,e):new bl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new El(a),qu(t,u)),t=u}}}var Os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);j0(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Yu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var e_=37297,t_=0;function n_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var $u=new We;function i_(i){Ze._getMatrix($u,Ze.workingColorSpace,i);let e=`mat3( ${$u.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case ir:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+n_(i.getShaderSource(e),a)}else return r}function s_(i,e){let t=i_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function r_(i,e){let t;switch(e){case cu:t="Linear";break;case lu:t="Reinhard";break;case hu:t="Cineon";break;case Is:t="ACESFilmic";break;case du:t="AgX";break;case fu:t="Neutral";break;case uu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ha=new L;function o_(){Ze.getLuminanceCoefficients(Ha);let i=Ha.x.toFixed(4),e=Ha.y.toFixed(4),t=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function c_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Or(i){return i!==""}function Ju(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(h_,d_)}var u_=new Map;function d_(i,e){let t=Xe[e];if(t===void 0){let n=u_.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}var f_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(i){return i.replace(f_,p_)}function p_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ju(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function m_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function g_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case qi:e="ENVMAP_TYPE_CUBE";break;case Pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function __(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qi:e="ENVMAP_MODE_REFRACTION";break}return e}function x_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Jc:e="ENVMAP_BLENDING_MULTIPLY";break;case ou:e="ENVMAP_BLENDING_MIX";break;case au:e="ENVMAP_BLENDING_ADD";break}return e}function y_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function v_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=m_(t),l=g_(t),h=__(t),u=x_(t),d=y_(t),p=a_(t),_=c_(r),y=s.createProgram(),m,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Or).join(`
`),f.length>0&&(f+=`
`)):(m=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),f=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Yn?r_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,s_("linearToOutputTexel",t.outputColorSpace),o_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Or).join(`
`)),o=wl(o),o=Ju(o,t),o=Ku(o,t),a=wl(a),a=Ju(a,t),a=Ku(a,t),o=Qu(o),a=Qu(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=A+m+o,S=A+f+a,I=Yu(s,s.VERTEX_SHADER,w),C=Yu(s,s.FRAGMENT_SHADER,S);s.attachShader(y,I),s.attachShader(y,C),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function b(v){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(y)||"",F=s.getShaderInfoLog(I)||"",D=s.getShaderInfoLog(C)||"",O=P.trim(),B=F.trim(),H=D.trim(),k=!0,X=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,C);else{let j=Zu(s,I,"vertex"),ae=Zu(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+O+`
`+j+`
`+ae)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||H==="")&&(X=!1);X&&(v.diagnostics={runnable:k,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(I),s.deleteShader(C),T=new Os(s,y),g=l_(s,y)}let T;this.getUniforms=function(){return T===void 0&&b(this),T};let g;this.getAttributes=function(){return g===void 0&&b(this),g};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,e_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t_++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=C,this}var M_=0,Tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Al(e),t.set(e,n)),n}},Al=class{constructor(e){this.id=M_++,this.code=e,this.usedTimes=0}};function S_(i,e,t,n,s,r,o){let a=new Ss,c=new Tl,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(g){return l.add(g),g===0?"uv":`uv${g}`}function m(g,x,v,P,F){let D=P.fog,O=F.geometry,B=g.isMeshStandardMaterial?P.environment:null,H=(g.isMeshStandardMaterial?t:e).get(g.envMap||B),k=H&&H.mapping===Pr?H.image.height:null,X=_[g.type];g.precision!==null&&(p=s.getMaxPrecision(g.precision),p!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",p,"instead."));let j=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ae=j!==void 0?j.length:0,Me=0;O.morphAttributes.position!==void 0&&(Me=1),O.morphAttributes.normal!==void 0&&(Me=2),O.morphAttributes.color!==void 0&&(Me=3);let de,He,Le,q;if(X){let je=In[X];de=je.vertexShader,He=je.fragmentShader}else de=g.vertexShader,He=g.fragmentShader,c.update(g),Le=c.getVertexShaderID(g),q=c.getFragmentShaderID(g);let Z=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),be=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,Ge=!!g.map,Je=!!g.matcap,N=!!H,oe=!!g.aoMap,ne=!!g.lightMap,K=!!g.bumpMap,te=!!g.normalMap,pe=!!g.displacementMap,ce=!!g.emissiveMap,_e=!!g.metalnessMap,ze=!!g.roughnessMap,Oe=g.anisotropy>0,R=g.clearcoat>0,M=g.dispersion>0,W=g.iridescence>0,Q=g.sheen>0,re=g.transmission>0,ee=Oe&&!!g.anisotropyMap,Ie=R&&!!g.clearcoatMap,ue=R&&!!g.clearcoatNormalMap,Te=R&&!!g.clearcoatRoughnessMap,Re=W&&!!g.iridescenceMap,U=W&&!!g.iridescenceThicknessMap,J=Q&&!!g.sheenColorMap,ie=Q&&!!g.sheenRoughnessMap,xe=!!g.specularMap,me=!!g.specularColorMap,Ue=!!g.specularIntensityMap,z=re&&!!g.transmissionMap,le=re&&!!g.thicknessMap,ge=!!g.gradientMap,Ae=!!g.alphaMap,he=g.alphaTest>0,se=!!g.alphaHash,De=!!g.extensions,Ve=Yn;g.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let lt={shaderID:X,shaderType:g.type,shaderName:g.name,vertexShader:de,fragmentShader:He,defines:g.defines,customVertexShaderID:Le,customFragmentShaderID:q,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:p,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:be,instancingColor:be&&F.instanceColor!==null,instancingMorph:be&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Bi,alphaToCoverage:!!g.alphaToCoverage,map:Ge,matcap:Je,envMap:N,envMapMode:N&&H.mapping,envMapCubeUVHeight:k,aoMap:oe,lightMap:ne,bumpMap:K,normalMap:te,displacementMap:d&&pe,emissiveMap:ce,normalMapObjectSpace:te&&g.normalMapType===_u,normalMapTangentSpace:te&&g.normalMapType===ol,metalnessMap:_e,roughnessMap:ze,anisotropy:Oe,anisotropyMap:ee,clearcoat:R,clearcoatMap:Ie,clearcoatNormalMap:ue,clearcoatRoughnessMap:Te,dispersion:M,iridescence:W,iridescenceMap:Re,iridescenceThicknessMap:U,sheen:Q,sheenColorMap:J,sheenRoughnessMap:ie,specularMap:xe,specularColorMap:me,specularIntensityMap:Ue,transmission:re,transmissionMap:z,thicknessMap:le,gradientMap:ge,opaque:g.transparent===!1&&g.blending===Fi&&g.alphaToCoverage===!1,alphaMap:Ae,alphaTest:he,alphaHash:se,combine:g.combine,mapUv:Ge&&y(g.map.channel),aoMapUv:oe&&y(g.aoMap.channel),lightMapUv:ne&&y(g.lightMap.channel),bumpMapUv:K&&y(g.bumpMap.channel),normalMapUv:te&&y(g.normalMap.channel),displacementMapUv:pe&&y(g.displacementMap.channel),emissiveMapUv:ce&&y(g.emissiveMap.channel),metalnessMapUv:_e&&y(g.metalnessMap.channel),roughnessMapUv:ze&&y(g.roughnessMap.channel),anisotropyMapUv:ee&&y(g.anisotropyMap.channel),clearcoatMapUv:Ie&&y(g.clearcoatMap.channel),clearcoatNormalMapUv:ue&&y(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&y(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&y(g.iridescenceMap.channel),iridescenceThicknessMapUv:U&&y(g.iridescenceThicknessMap.channel),sheenColorMapUv:J&&y(g.sheenColorMap.channel),sheenRoughnessMapUv:ie&&y(g.sheenRoughnessMap.channel),specularMapUv:xe&&y(g.specularMap.channel),specularColorMapUv:me&&y(g.specularColorMap.channel),specularIntensityMapUv:Ue&&y(g.specularIntensityMap.channel),transmissionMapUv:z&&y(g.transmissionMap.channel),thicknessMapUv:le&&y(g.thicknessMap.channel),alphaMapUv:Ae&&y(g.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(te||Oe),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!O.attributes.uv&&(Ge||Ae),fog:!!D,useFog:g.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:g.flatShading===!0&&g.wireframe===!1,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Me,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ge&&g.map.isVideoTexture===!0&&Ze.getTransfer(g.map.colorSpace)===it,decodeVideoTextureEmissive:ce&&g.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(g.emissiveMap.colorSpace)===it,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Cn,flipSided:g.side===zt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:De&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&g.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function f(g){let x=[];if(g.shaderID?x.push(g.shaderID):(x.push(g.customVertexShaderID),x.push(g.customFragmentShaderID)),g.defines!==void 0)for(let v in g.defines)x.push(v),x.push(g.defines[v]);return g.isRawShaderMaterial===!1&&(A(x,g),w(x,g),x.push(i.outputColorSpace)),x.push(g.customProgramCacheKey),x.join()}function A(g,x){g.push(x.precision),g.push(x.outputColorSpace),g.push(x.envMapMode),g.push(x.envMapCubeUVHeight),g.push(x.mapUv),g.push(x.alphaMapUv),g.push(x.lightMapUv),g.push(x.aoMapUv),g.push(x.bumpMapUv),g.push(x.normalMapUv),g.push(x.displacementMapUv),g.push(x.emissiveMapUv),g.push(x.metalnessMapUv),g.push(x.roughnessMapUv),g.push(x.anisotropyMapUv),g.push(x.clearcoatMapUv),g.push(x.clearcoatNormalMapUv),g.push(x.clearcoatRoughnessMapUv),g.push(x.iridescenceMapUv),g.push(x.iridescenceThicknessMapUv),g.push(x.sheenColorMapUv),g.push(x.sheenRoughnessMapUv),g.push(x.specularMapUv),g.push(x.specularColorMapUv),g.push(x.specularIntensityMapUv),g.push(x.transmissionMapUv),g.push(x.thicknessMapUv),g.push(x.combine),g.push(x.fogExp2),g.push(x.sizeAttenuation),g.push(x.morphTargetsCount),g.push(x.morphAttributeCount),g.push(x.numDirLights),g.push(x.numPointLights),g.push(x.numSpotLights),g.push(x.numSpotLightMaps),g.push(x.numHemiLights),g.push(x.numRectAreaLights),g.push(x.numDirLightShadows),g.push(x.numPointLightShadows),g.push(x.numSpotLightShadows),g.push(x.numSpotLightShadowsWithMaps),g.push(x.numLightProbes),g.push(x.shadowMapType),g.push(x.toneMapping),g.push(x.numClippingPlanes),g.push(x.numClipIntersection),g.push(x.depthPacking)}function w(g,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),g.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),g.push(a.mask)}function S(g){let x=_[g.type],v;if(x){let P=In[x];v=Cu.clone(P.uniforms)}else v=g.uniforms;return v}function I(g,x){let v;for(let P=0,F=h.length;P<F;P++){let D=h[P];if(D.cacheKey===x){v=D,++v.usedTimes;break}}return v===void 0&&(v=new v_(i,x,g,r),h.push(v)),v}function C(g){if(--g.usedTimes===0){let x=h.indexOf(g);h[x]=h[h.length-1],h.pop(),g.destroy()}}function b(g){c.remove(g)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:I,releaseProgram:C,releaseShaderCache:b,programs:h,dispose:T}}function b_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function E_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function td(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,_,y,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:y,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=y,f.group=m),e++,f}function a(u,d,p,_,y,m){let f=o(u,d,p,_,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(u,d,p,_,y,m){let f=o(u,d,p,_,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||E_),n.length>1&&n.sort(d||ed),s.length>1&&s.sort(d||ed)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function w_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new td,i.set(n,[o])):s>=r.length?(o=new td,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function T_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ye};break;case"SpotLight":t={position:new L,direction:new L,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function A_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var C_=0;function R_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function I_(i){let e=new T_,t=A_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new pt,o=new pt;function a(l){let h=0,u=0,d=0;for(let g=0;g<9;g++)n.probe[g].set(0,0,0);let p=0,_=0,y=0,m=0,f=0,A=0,w=0,S=0,I=0,C=0,b=0;l.sort(R_);for(let g=0,x=l.length;g<x;g++){let v=l[g],P=v.color,F=v.intensity,D=v.distance,O=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)h+=P.r*F,u+=P.g*F,d+=P.b*F;else if(v.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(v.sh.coefficients[B],F);b++}else if(v.isDirectionalLight){let B=e.get(v);if(B.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let H=v.shadow,k=t.get(v);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=v.shadow.matrix,A++}n.directional[p]=B,p++}else if(v.isSpotLight){let B=e.get(v);B.position.setFromMatrixPosition(v.matrixWorld),B.color.copy(P).multiplyScalar(F),B.distance=D,B.coneCos=Math.cos(v.angle),B.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),B.decay=v.decay,n.spot[y]=B;let H=v.shadow;if(v.map&&(n.spotLightMap[I]=v.map,I++,H.updateMatrices(v),v.castShadow&&C++),n.spotLightMatrix[y]=H.matrix,v.castShadow){let k=t.get(v);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[y]=k,n.spotShadowMap[y]=O,S++}y++}else if(v.isRectAreaLight){let B=e.get(v);B.color.copy(P).multiplyScalar(F),B.halfWidth.set(v.width*.5,0,0),B.halfHeight.set(0,v.height*.5,0),n.rectArea[m]=B,m++}else if(v.isPointLight){let B=e.get(v);if(B.color.copy(v.color).multiplyScalar(v.intensity),B.distance=v.distance,B.decay=v.decay,v.castShadow){let H=v.shadow,k=t.get(v);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[_]=k,n.pointShadowMap[_]=O,n.pointShadowMatrix[_]=v.shadow.matrix,w++}n.point[_]=B,_++}else if(v.isHemisphereLight){let B=e.get(v);B.skyColor.copy(v.color).multiplyScalar(F),B.groundColor.copy(v.groundColor).multiplyScalar(F),n.hemi[f]=B,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let T=n.hash;(T.directionalLength!==p||T.pointLength!==_||T.spotLength!==y||T.rectAreaLength!==m||T.hemiLength!==f||T.numDirectionalShadows!==A||T.numPointShadows!==w||T.numSpotShadows!==S||T.numSpotMaps!==I||T.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,T.directionalLength=p,T.pointLength=_,T.spotLength=y,T.rectAreaLength=m,T.hemiLength=f,T.numDirectionalShadows=A,T.numPointShadows=w,T.numSpotShadows=S,T.numSpotMaps=I,T.numLightProbes=b,n.version=C_++)}function c(l,h){let u=0,d=0,p=0,_=0,y=0,m=h.matrixWorldInverse;for(let f=0,A=l.length;f<A;f++){let w=l[f];if(w.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(w.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function nd(i){let e=new I_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function P_(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new nd(i),e.set(s,[a])):r>=o.length?(a=new nd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
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
}`;function U_(i,e,t){let n=new Es,s=new ye,r=new ye,o=new tt,a=new Fo({depthPacking:gu}),c=new Oo,l={},h=t.maxTextureSize,u={[Vn]:zt,[zt]:Vn,[Cn]:Cn},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:D_,fragmentShader:L_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new kt;_.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new xt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let f=this.type;this.render=function(C,b,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let g=i.getRenderTarget(),x=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),P=i.state;P.setBlending(qn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let F=f!==An&&this.type===An,D=f===An&&this.type!==An;for(let O=0,B=C.length;O<B;O++){let H=C[O],k=H.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let X=k.getFrameExtents();if(s.multiply(X),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,k.mapSize.y=r.y)),k.map===null||F===!0||D===!0){let ae=this.type!==An?{minFilter:cn,magFilter:cn}:{};k.map!==null&&k.map.dispose(),k.map=new wn(s.x,s.y,ae),k.map.texture.name=H.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let j=k.getViewportCount();for(let ae=0;ae<j;ae++){let Me=k.getViewport(ae);o.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),P.viewport(o),k.updateMatrices(H,ae),n=k.getFrustum(),S(b,T,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===An&&A(k,T),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(g,x,v)};function A(C,b){let T=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new wn(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,T,d,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,T,p,y,null)}function w(C,b,T,g){let x=null,v=T.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(v!==void 0)x=v;else if(x=T.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){let P=x.uuid,F=b.uuid,D=l[P];D===void 0&&(D={},l[P]=D);let O=D[F];O===void 0&&(O=x.clone(),D[F]=O,b.addEventListener("dispose",I)),x=O}if(x.visible=b.visible,x.wireframe=b.wireframe,g===An?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:u[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let P=i.properties.get(x);P.light=T}return x}function S(C,b,T,g,x){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===An)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,C.matrixWorld);let F=e.update(C),D=C.material;if(Array.isArray(D)){let O=F.groups;for(let B=0,H=O.length;B<H;B++){let k=O[B],X=D[k.materialIndex];if(X&&X.visible){let j=w(C,X,g,x);C.onBeforeShadow(i,C,b,T,F,j,k),i.renderBufferDirect(T,null,F,j,C,k),C.onAfterShadow(i,C,b,T,F,j,k)}}}else if(D.visible){let O=w(C,D,g,x);C.onBeforeShadow(i,C,b,T,F,O,null),i.renderBufferDirect(T,null,F,O,C,null),C.onAfterShadow(i,C,b,T,F,O,null)}}let P=C.children;for(let F=0,D=P.length;F<D;F++)S(P[F],b,T,g,x)}function I(C){C.target.removeEventListener("dispose",I);for(let T in l){let g=l[T],x=C.target.uuid;x in g&&(g[x].dispose(),delete g[x])}}}var N_={[Zo]:Jo,[Ko]:ea,[Qo]:ta,[Oi]:jo,[Jo]:Zo,[ea]:Ko,[ta]:Qo,[jo]:Oi};function F_(i,e){function t(){let z=!1,le=new tt,ge=null,Ae=new tt(0,0,0,0);return{setMask:function(he){ge!==he&&!z&&(i.colorMask(he,he,he,he),ge=he)},setLocked:function(he){z=he},setClear:function(he,se,De,Ve,lt){lt===!0&&(he*=Ve,se*=Ve,De*=Ve),le.set(he,se,De,Ve),Ae.equals(le)===!1&&(i.clearColor(he,se,De,Ve),Ae.copy(le))},reset:function(){z=!1,ge=null,Ae.set(-1,0,0,0)}}}function n(){let z=!1,le=!1,ge=null,Ae=null,he=null;return{setReversed:function(se){if(le!==se){let De=e.get("EXT_clip_control");se?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),le=se;let Ve=he;he=null,this.setClear(Ve)}},getReversed:function(){return le},setTest:function(se){se?Z(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(se){ge!==se&&!z&&(i.depthMask(se),ge=se)},setFunc:function(se){if(le&&(se=N_[se]),Ae!==se){switch(se){case Zo:i.depthFunc(i.NEVER);break;case Jo:i.depthFunc(i.ALWAYS);break;case Ko:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case Qo:i.depthFunc(i.EQUAL);break;case jo:i.depthFunc(i.GEQUAL);break;case ea:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=se}},setLocked:function(se){z=se},setClear:function(se){he!==se&&(le&&(se=1-se),i.clearDepth(se),he=se)},reset:function(){z=!1,ge=null,Ae=null,he=null,le=!1}}}function s(){let z=!1,le=null,ge=null,Ae=null,he=null,se=null,De=null,Ve=null,lt=null;return{setTest:function(je){z||(je?Z(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(je){le!==je&&!z&&(i.stencilMask(je),le=je)},setFunc:function(je,Nn,En){(ge!==je||Ae!==Nn||he!==En)&&(i.stencilFunc(je,Nn,En),ge=je,Ae=Nn,he=En)},setOp:function(je,Nn,En){(se!==je||De!==Nn||Ve!==En)&&(i.stencilOp(je,Nn,En),se=je,De=Nn,Ve=En)},setLocked:function(je){z=je},setClear:function(je){lt!==je&&(i.clearStencil(je),lt=je)},reset:function(){z=!1,le=null,ge=null,Ae=null,he=null,se=null,De=null,Ve=null,lt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],_=null,y=!1,m=null,f=null,A=null,w=null,S=null,I=null,C=null,b=new Ye(0,0,0),T=0,g=!1,x=null,v=null,P=null,F=null,D=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,H=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=H>=1):k.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=H>=2);let X=null,j={},ae=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),de=new tt().fromArray(ae),He=new tt().fromArray(Me);function Le(z,le,ge,Ae){let he=new Uint8Array(4),se=i.createTexture();i.bindTexture(z,se),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<ge;De++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(le+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return se}let q={};q[i.TEXTURE_2D]=Le(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Le(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Oi),K(!1),te(Xc),Z(i.CULL_FACE),oe(qn);function Z(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function ve(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function be(z,le){return u[z]!==le?(i.bindFramebuffer(z,le),u[z]=le,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Se(z,le){let ge=p,Ae=!1;if(z){ge=d.get(le),ge===void 0&&(ge=[],d.set(le,ge));let he=z.textures;if(ge.length!==he.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let se=0,De=he.length;se<De;se++)ge[se]=i.COLOR_ATTACHMENT0+se;ge.length=he.length,Ae=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(ge)}function Ge(z){return _!==z?(i.useProgram(z),_=z,!0):!1}let Je={[ai]:i.FUNC_ADD,[Gh]:i.FUNC_SUBTRACT,[Wh]:i.FUNC_REVERSE_SUBTRACT};Je[Xh]=i.MIN,Je[qh]=i.MAX;let N={[Yh]:i.ZERO,[$h]:i.ONE,[Zh]:i.SRC_COLOR,[Mo]:i.SRC_ALPHA,[tu]:i.SRC_ALPHA_SATURATE,[jh]:i.DST_COLOR,[Kh]:i.DST_ALPHA,[Jh]:i.ONE_MINUS_SRC_COLOR,[So]:i.ONE_MINUS_SRC_ALPHA,[eu]:i.ONE_MINUS_DST_COLOR,[Qh]:i.ONE_MINUS_DST_ALPHA,[nu]:i.CONSTANT_COLOR,[iu]:i.ONE_MINUS_CONSTANT_COLOR,[su]:i.CONSTANT_ALPHA,[ru]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(z,le,ge,Ae,he,se,De,Ve,lt,je){if(z===qn){y===!0&&(ve(i.BLEND),y=!1);return}if(y===!1&&(Z(i.BLEND),y=!0),z!==Vh){if(z!==m||je!==g){if((f!==ai||S!==ai)&&(i.blendEquation(i.FUNC_ADD),f=ai,S=ai),je)switch(z){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yc:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case $c:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}A=null,w=null,I=null,C=null,b.set(0,0,0),T=0,m=z,g=je}return}he=he||le,se=se||ge,De=De||Ae,(le!==f||he!==S)&&(i.blendEquationSeparate(Je[le],Je[he]),f=le,S=he),(ge!==A||Ae!==w||se!==I||De!==C)&&(i.blendFuncSeparate(N[ge],N[Ae],N[se],N[De]),A=ge,w=Ae,I=se,C=De),(Ve.equals(b)===!1||lt!==T)&&(i.blendColor(Ve.r,Ve.g,Ve.b,lt),b.copy(Ve),T=lt),m=z,g=!1}function ne(z,le){z.side===Cn?ve(i.CULL_FACE):Z(i.CULL_FACE);let ge=z.side===zt;le&&(ge=!ge),K(ge),z.blending===Fi&&z.transparent===!1?oe(qn):oe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let Ae=z.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),ce(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(z){x!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),x=z)}function te(z){z!==kh?(Z(i.CULL_FACE),z!==v&&(z===Xc?i.cullFace(i.BACK):z===zh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),v=z}function pe(z){z!==P&&(B&&i.lineWidth(z),P=z)}function ce(z,le,ge){z?(Z(i.POLYGON_OFFSET_FILL),(F!==le||D!==ge)&&(i.polygonOffset(le,ge),F=le,D=ge)):ve(i.POLYGON_OFFSET_FILL)}function _e(z){z?Z(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function ze(z){z===void 0&&(z=i.TEXTURE0+O-1),X!==z&&(i.activeTexture(z),X=z)}function Oe(z,le,ge){ge===void 0&&(X===null?ge=i.TEXTURE0+O-1:ge=X);let Ae=j[ge];Ae===void 0&&(Ae={type:void 0,texture:void 0},j[ge]=Ae),(Ae.type!==z||Ae.texture!==le)&&(X!==ge&&(i.activeTexture(ge),X=ge),i.bindTexture(z,le||q[z]),Ae.type=z,Ae.texture=le)}function R(){let z=j[X];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ue(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Te(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(z){de.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),de.copy(z))}function ie(z){He.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),He.copy(z))}function xe(z,le){let ge=l.get(le);ge===void 0&&(ge=new WeakMap,l.set(le,ge));let Ae=ge.get(z);Ae===void 0&&(Ae=i.getUniformBlockIndex(le,z.name),ge.set(z,Ae))}function me(z,le){let Ae=l.get(le).get(z);c.get(le)!==Ae&&(i.uniformBlockBinding(le,Ae,z.__bindingPointIndex),c.set(le,Ae))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},X=null,j={},u={},d=new WeakMap,p=[],_=null,y=!1,m=null,f=null,A=null,w=null,S=null,I=null,C=null,b=new Ye(0,0,0),T=0,g=!1,x=null,v=null,P=null,F=null,D=null,de.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Z,disable:ve,bindFramebuffer:be,drawBuffers:Se,useProgram:Ge,setBlending:oe,setMaterial:ne,setFlipSided:K,setCullFace:te,setLineWidth:pe,setPolygonOffset:ce,setScissorTest:_e,activeTexture:ze,bindTexture:Oe,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:W,texImage2D:Re,texImage3D:U,updateUBOMapping:xe,uniformBlockBinding:me,texStorage2D:ue,texStorage3D:Te,texSubImage2D:Q,texSubImage3D:re,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ie,scissor:J,viewport:ie,reset:Ue}}function O_(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return p?new OffscreenCanvas(R,M):rr("canvas")}function y(R,M,W){let Q=1,re=Oe(R);if((re.width>W||re.height>W)&&(Q=W/Math.max(re.width,re.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ee=Math.floor(Q*re.width),Ie=Math.floor(Q*re.height);u===void 0&&(u=_(ee,Ie));let ue=M?_(ee,Ie):u;return ue.width=ee,ue.height=Ie,ue.getContext("2d").drawImage(R,0,0,ee,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Ie+")."),ue}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,M,W,Q,re=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=M;if(M===i.RED&&(W===i.FLOAT&&(ee=i.R32F),W===i.HALF_FLOAT&&(ee=i.R16F),W===i.UNSIGNED_BYTE&&(ee=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.R8UI),W===i.UNSIGNED_SHORT&&(ee=i.R16UI),W===i.UNSIGNED_INT&&(ee=i.R32UI),W===i.BYTE&&(ee=i.R8I),W===i.SHORT&&(ee=i.R16I),W===i.INT&&(ee=i.R32I)),M===i.RG&&(W===i.FLOAT&&(ee=i.RG32F),W===i.HALF_FLOAT&&(ee=i.RG16F),W===i.UNSIGNED_BYTE&&(ee=i.RG8)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RG8UI),W===i.UNSIGNED_SHORT&&(ee=i.RG16UI),W===i.UNSIGNED_INT&&(ee=i.RG32UI),W===i.BYTE&&(ee=i.RG8I),W===i.SHORT&&(ee=i.RG16I),W===i.INT&&(ee=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),W===i.UNSIGNED_INT&&(ee=i.RGB32UI),W===i.BYTE&&(ee=i.RGB8I),W===i.SHORT&&(ee=i.RGB16I),W===i.INT&&(ee=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),W===i.UNSIGNED_INT&&(ee=i.RGBA32UI),W===i.BYTE&&(ee=i.RGBA8I),W===i.SHORT&&(ee=i.RGBA16I),W===i.INT&&(ee=i.RGBA32I)),M===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),M===i.RGBA){let Ie=re?ir:Ze.getTransfer(Q);W===i.FLOAT&&(ee=i.RGBA32F),W===i.HALF_FLOAT&&(ee=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ee=Ie===it?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(R,M){let W;return R?M===null||M===pi||M===Ls?W=i.DEPTH24_STENCIL8:M===Rn?W=i.DEPTH32F_STENCIL8:M===Ps&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===pi||M===Ls?W=i.DEPTH_COMPONENT24:M===Rn?W=i.DEPTH_COMPONENT32F:M===Ps&&(W=i.DEPTH_COMPONENT16),W}function I(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){let M=R.target;M.removeEventListener("dispose",C),T(M),M.isVideoTexture&&h.delete(M)}function b(R){let M=R.target;M.removeEventListener("dispose",b),x(M)}function T(R){let M=n.get(R);if(M.__webglInit===void 0)return;let W=R.source,Q=d.get(W);if(Q){let re=Q[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&g(R),Object.keys(Q).length===0&&d.delete(W)}n.remove(R)}function g(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let W=R.source,Q=d.get(W);delete Q[M.__cacheKey],o.memory.textures--}function x(R){let M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let re=0;re<M.__webglFramebuffer[Q].length;re++)i.deleteFramebuffer(M.__webglFramebuffer[Q][re]);else i.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[Q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let W=R.textures;for(let Q=0,re=W.length;Q<re;Q++){let ee=n.get(W[Q]);ee.__webglTexture&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),n.remove(W[Q])}n.remove(R)}let v=0;function P(){v=0}function F(){let R=v;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),v+=1,R}function D(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function O(R,M){let W=n.get(R);if(R.isVideoTexture&&_e(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){let Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(W,R,M);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function B(R,M){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){q(W,R,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function H(R,M){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){q(W,R,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function k(R,M){let W=n.get(R);if(R.version>0&&W.__version!==R.version){Z(W,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}let X={[bo]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},j={[cn]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[sa]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},ae={[xu]:i.NEVER,[Eu]:i.ALWAYS,[yu]:i.LESS,[al]:i.LEQUAL,[vu]:i.EQUAL,[bu]:i.GEQUAL,[Mu]:i.GREATER,[Su]:i.NOTEQUAL};function Me(R,M){if(M.type===Rn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===_n||M.magFilter===sa||M.magFilter===Dr||M.magFilter===fi||M.minFilter===_n||M.minFilter===sa||M.minFilter===Dr||M.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,X[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,X[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,X[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,j[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,j[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==Dr&&M.minFilter!==fi||M.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function de(R,M){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));let Q=M.source,re=d.get(Q);re===void 0&&(re={},d.set(Q,re));let ee=D(M);if(ee!==R.__cacheKey){re[ee]===void 0&&(re[ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[ee].usedTimes++;let Ie=re[R.__cacheKey];Ie!==void 0&&(re[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&g(M)),R.__cacheKey=ee,R.__webglTexture=re[ee].texture}return W}function He(R,M,W){return Math.floor(Math.floor(R/W)/M)}function Le(R,M,W,Q){let ee=R.updateRanges;if(ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,W,Q,M.data);else{ee.sort((U,J)=>U.start-J.start);let Ie=0;for(let U=1;U<ee.length;U++){let J=ee[Ie],ie=ee[U],xe=J.start+J.count,me=He(ie.start,M.width,4),Ue=He(J.start,M.width,4);ie.start<=xe+1&&me===Ue&&He(ie.start+ie.count-1,M.width,4)===me?J.count=Math.max(J.count,ie.start+ie.count-J.start):(++Ie,ee[Ie]=ie)}ee.length=Ie+1;let ue=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let U=0,J=ee.length;U<J;U++){let ie=ee[U],xe=Math.floor(ie.start/4),me=Math.ceil(ie.count/4),Ue=xe%M.width,z=Math.floor(xe/M.width),le=me,ge=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),t.texSubImage2D(i.TEXTURE_2D,0,Ue,z,le,ge,W,Q,M.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function q(R,M,W){let Q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=i.TEXTURE_3D);let re=de(R,M),ee=M.source;t.bindTexture(Q,R.__webglTexture,i.TEXTURE0+W);let Ie=n.get(ee);if(ee.version!==Ie.__version||re===!0){t.activeTexture(i.TEXTURE0+W);let ue=Ze.getPrimaries(Ze.workingColorSpace),Te=M.colorSpace===$n?null:Ze.getPrimaries(M.colorSpace),Re=M.colorSpace===$n||ue===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let U=y(M.image,!1,s.maxTextureSize);U=ze(M,U);let J=r.convert(M.format,M.colorSpace),ie=r.convert(M.type),xe=w(M.internalFormat,J,ie,M.colorSpace,M.isVideoTexture);Me(Q,M);let me,Ue=M.mipmaps,z=M.isVideoTexture!==!0,le=Ie.__version===void 0||re===!0,ge=ee.dataReady,Ae=I(M,U);if(M.isDepthTexture)xe=S(M.format===Us,M.type),le&&(z?t.texStorage2D(i.TEXTURE_2D,1,xe,U.width,U.height):t.texImage2D(i.TEXTURE_2D,0,xe,U.width,U.height,0,J,ie,null));else if(M.isDataTexture)if(Ue.length>0){z&&le&&t.texStorage2D(i.TEXTURE_2D,Ae,xe,Ue[0].width,Ue[0].height);for(let he=0,se=Ue.length;he<se;he++)me=Ue[he],z?ge&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,me.width,me.height,J,ie,me.data):t.texImage2D(i.TEXTURE_2D,he,xe,me.width,me.height,0,J,ie,me.data);M.generateMipmaps=!1}else z?(le&&t.texStorage2D(i.TEXTURE_2D,Ae,xe,U.width,U.height),ge&&Le(M,U,J,ie)):t.texImage2D(i.TEXTURE_2D,0,xe,U.width,U.height,0,J,ie,U.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){z&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,xe,Ue[0].width,Ue[0].height,U.depth);for(let he=0,se=Ue.length;he<se;he++)if(me=Ue[he],M.format!==hn)if(J!==null)if(z){if(ge)if(M.layerUpdates.size>0){let De=ml(me.width,me.height,M.format,M.type);for(let Ve of M.layerUpdates){let lt=me.data.subarray(Ve*De/me.data.BYTES_PER_ELEMENT,(Ve+1)*De/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,Ve,me.width,me.height,1,J,lt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,me.width,me.height,U.depth,J,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,xe,me.width,me.height,U.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,me.width,me.height,U.depth,J,ie,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,xe,me.width,me.height,U.depth,0,J,ie,me.data)}else{z&&le&&t.texStorage2D(i.TEXTURE_2D,Ae,xe,Ue[0].width,Ue[0].height);for(let he=0,se=Ue.length;he<se;he++)me=Ue[he],M.format!==hn?J!==null?z?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,me.width,me.height,J,me.data):t.compressedTexImage2D(i.TEXTURE_2D,he,xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ge&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,me.width,me.height,J,ie,me.data):t.texImage2D(i.TEXTURE_2D,he,xe,me.width,me.height,0,J,ie,me.data)}else if(M.isDataArrayTexture)if(z){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,xe,U.width,U.height,U.depth),ge)if(M.layerUpdates.size>0){let he=ml(U.width,U.height,M.format,M.type);for(let se of M.layerUpdates){let De=U.data.subarray(se*he/U.data.BYTES_PER_ELEMENT,(se+1)*he/U.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,U.width,U.height,1,J,ie,De)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,J,ie,U.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,U.width,U.height,U.depth,0,J,ie,U.data);else if(M.isData3DTexture)z?(le&&t.texStorage3D(i.TEXTURE_3D,Ae,xe,U.width,U.height,U.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,J,ie,U.data)):t.texImage3D(i.TEXTURE_3D,0,xe,U.width,U.height,U.depth,0,J,ie,U.data);else if(M.isFramebufferTexture){if(le)if(z)t.texStorage2D(i.TEXTURE_2D,Ae,xe,U.width,U.height);else{let he=U.width,se=U.height;for(let De=0;De<Ae;De++)t.texImage2D(i.TEXTURE_2D,De,xe,he,se,0,J,ie,null),he>>=1,se>>=1}}else if(Ue.length>0){if(z&&le){let he=Oe(Ue[0]);t.texStorage2D(i.TEXTURE_2D,Ae,xe,he.width,he.height)}for(let he=0,se=Ue.length;he<se;he++)me=Ue[he],z?ge&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,J,ie,me):t.texImage2D(i.TEXTURE_2D,he,xe,J,ie,me);M.generateMipmaps=!1}else if(z){if(le){let he=Oe(U);t.texStorage2D(i.TEXTURE_2D,Ae,xe,he.width,he.height)}ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J,ie,U)}else t.texImage2D(i.TEXTURE_2D,0,xe,J,ie,U);m(M)&&f(Q),Ie.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Z(R,M,W){if(M.image.length!==6)return;let Q=de(R,M),re=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);let ee=n.get(re);if(re.version!==ee.__version||Q===!0){t.activeTexture(i.TEXTURE0+W);let Ie=Ze.getPrimaries(Ze.workingColorSpace),ue=M.colorSpace===$n?null:Ze.getPrimaries(M.colorSpace),Te=M.colorSpace===$n||Ie===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Re=M.isCompressedTexture||M.image[0].isCompressedTexture,U=M.image[0]&&M.image[0].isDataTexture,J=[];for(let se=0;se<6;se++)!Re&&!U?J[se]=y(M.image[se],!0,s.maxCubemapSize):J[se]=U?M.image[se].image:M.image[se],J[se]=ze(M,J[se]);let ie=J[0],xe=r.convert(M.format,M.colorSpace),me=r.convert(M.type),Ue=w(M.internalFormat,xe,me,M.colorSpace),z=M.isVideoTexture!==!0,le=ee.__version===void 0||Q===!0,ge=re.dataReady,Ae=I(M,ie);Me(i.TEXTURE_CUBE_MAP,M);let he;if(Re){z&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Ue,ie.width,ie.height);for(let se=0;se<6;se++){he=J[se].mipmaps;for(let De=0;De<he.length;De++){let Ve=he[De];M.format!==hn?xe!==null?z?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,Ve.width,Ve.height,xe,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,Ue,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,0,0,Ve.width,Ve.height,xe,me,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De,Ue,Ve.width,Ve.height,0,xe,me,Ve.data)}}}else{if(he=M.mipmaps,z&&le){he.length>0&&Ae++;let se=Oe(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Ue,se.width,se.height)}for(let se=0;se<6;se++)if(U){z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,J[se].width,J[se].height,xe,me,J[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ue,J[se].width,J[se].height,0,xe,me,J[se].data);for(let De=0;De<he.length;De++){let lt=he[De].image[se].image;z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,lt.width,lt.height,xe,me,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,Ue,lt.width,lt.height,0,xe,me,lt.data)}}else{z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,xe,me,J[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ue,xe,me,J[se]);for(let De=0;De<he.length;De++){let Ve=he[De];z?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,0,0,xe,me,Ve.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,De+1,Ue,xe,me,Ve.image[se])}}}m(M)&&f(i.TEXTURE_CUBE_MAP),ee.__version=re.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ve(R,M,W,Q,re,ee){let Ie=r.convert(W.format,W.colorSpace),ue=r.convert(W.type),Te=w(W.internalFormat,Ie,ue,W.colorSpace),Re=n.get(M),U=n.get(W);if(U.__renderTarget=M,!Re.__hasExternalTextures){let J=Math.max(1,M.width>>ee),ie=Math.max(1,M.height>>ee);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,ee,Te,J,ie,M.depth,0,Ie,ue,null):t.texImage2D(re,ee,Te,J,ie,0,Ie,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),ce(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,re,U.__webglTexture,0,pe(M)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,re,U.__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(R,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let Q=M.depthTexture,re=Q&&Q.isDepthTexture?Q.type:null,ee=S(M.stencilBuffer,re),Ie=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=pe(M);ce(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,ee,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,ee,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ee,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,R)}else{let Q=M.textures;for(let re=0;re<Q.length;re++){let ee=Q[re],Ie=r.convert(ee.format,ee.colorSpace),ue=r.convert(ee.type),Te=w(ee.internalFormat,Ie,ue,ee.colorSpace),Re=pe(M);W&&ce(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Te,M.width,M.height):ce(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Te,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Te,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(M.depthTexture);Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),O(M.depthTexture,0);let re=Q.__webglTexture,ee=pe(M);if(M.depthTexture.format===_s)ce(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(M.depthTexture.format===Us)ce(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ge(R){let M=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let Q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){let re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",re)};Q.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=Q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");let Q=R.texture.mipmaps;Q&&Q.length>0?Se(M.__webglFramebuffer[0],R):Se(M.__webglFramebuffer,R)}else if(W){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=i.createRenderbuffer(),be(M.__webglDepthbuffer[Q],R,!1);else{let re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ee)}}else{let Q=R.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),be(M.__webglDepthbuffer,R,!1);else{let re=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(R,M,W){let Q=n.get(R);M!==void 0&&ve(Q.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Ge(R)}function N(R){let M=R.texture,W=n.get(R),Q=n.get(M);R.addEventListener("dispose",b);let re=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Ie=re.length>1;if(Ie||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=M.version,o.memory.textures++),ee){W.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[ue]=[];for(let Te=0;Te<M.mipmaps.length;Te++)W.__webglFramebuffer[ue][Te]=i.createFramebuffer()}else W.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)W.__webglFramebuffer[ue]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let ue=0,Te=re.length;ue<Te;ue++){let Re=n.get(re[ue]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ce(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ue=0;ue<re.length;ue++){let Te=re[ue];W.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ue]);let Re=r.convert(Te.format,Te.colorSpace),U=r.convert(Te.type),J=w(Te.internalFormat,Re,U,Te.colorSpace,R.isXRRenderTarget===!0),ie=pe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,J,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,W.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),be(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ee){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Me(i.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)ve(W.__webglFramebuffer[ue][Te],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Te);else ve(W.__webglFramebuffer[ue],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ue=0,Te=re.length;ue<Te;ue++){let Re=re[ue],U=n.get(Re),J=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,U.__webglTexture),Me(J,Re),ve(W.__webglFramebuffer,R,Re,i.COLOR_ATTACHMENT0+ue,J,0),m(Re)&&f(J)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Q.__webglTexture),Me(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)ve(W.__webglFramebuffer[Te],R,M,i.COLOR_ATTACHMENT0,ue,Te);else ve(W.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,ue,0);m(M)&&f(ue),t.unbindTexture()}R.depthBuffer&&Ge(R)}function oe(R){let M=R.textures;for(let W=0,Q=M.length;W<Q;W++){let re=M[W];if(m(re)){let ee=A(R),Ie=n.get(re).__webglTexture;t.bindTexture(ee,Ie),f(ee),t.unbindTexture()}}}let ne=[],K=[];function te(R){if(R.samples>0){if(ce(R)===!1){let M=R.textures,W=R.width,Q=R.height,re=i.COLOR_BUFFER_BIT,ee=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(R),ue=M.length>1;if(ue)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Te=R.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);let U=n.get(M[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,U,0)}i.blitFramebuffer(0,0,W,Q,0,0,W,Q,re,i.NEAREST),c===!0&&(ne.length=0,K.length=0,ne.push(i.COLOR_ATTACHMENT0+Re),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ne.push(ee),K.push(ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,K)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);let U=n.get(M[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,U,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function pe(R){return Math.min(s.maxSamples,R.samples)}function ce(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _e(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function ze(R,M){let W=R.colorSpace,Q=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Bi&&W!==$n&&(Ze.getTransfer(W)===it?(Q!==hn||re!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function Oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=k,this.rebindTextures=Je,this.setupRenderTarget=N,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ce}function B_(i,e){function t(n,s=$n){let r,o=Ze.getTransfer(s);if(n===Mn)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===el)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qc)return i.BYTE;if(n===jc)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Ds)return i.HALF_FLOAT;if(n===nl)return i.ALPHA;if(n===il)return i.RGB;if(n===hn)return i.RGBA;if(n===_s)return i.DEPTH_COMPONENT;if(n===Us)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===rl)return i.RG;if(n===la)return i.RG_INTEGER;if(n===ha)return i.RGBA_INTEGER;if(n===Lr||n===Ur||n===Nr||n===Fr)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ua||n===da||n===fa||n===pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ma||n===ga||n===_a)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ma||n===ga)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_a)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xa||n===ya||n===va||n===Ma||n===Sa||n===ba||n===Ea||n===wa||n===Ta||n===Aa||n===Ca||n===Ra||n===Ia||n===Pa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===va)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ta)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Aa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ca)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ra)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ia)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Da||n===La||n===Ua)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Da)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ua)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Na||n===Fa||n===Oa||n===Ba)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var k_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
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

}`,Cl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yn({vertexShader:k_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rl=class extends Gn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,_=null,y=typeof XRWebGLBinding<"u",m=new Cl,f={},A=t.getContextAttributes(),w=null,S=null,I=[],C=[],b=new ye,T=null,g=new Ct;g.viewport=new tt;let x=new Ct;x.viewport=new tt;let v=[g,x],P=new $o,F=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=I[q];return Z===void 0&&(Z=new bs,I[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=I[q];return Z===void 0&&(Z=new bs,I[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=I[q];return Z===void 0&&(Z=new bs,I[q]=Z),Z.getHandSpace()};function O(q){let Z=C.indexOf(q.inputSource);if(Z===-1)return;let ve=I[Z];ve!==void 0&&(ve.update(q.inputSource,q.frame,l||o),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",H);for(let q=0;q<I.length;q++){let Z=C[q];Z!==null&&(C[q]=null,I[q].disconnect(Z))}F=null,D=null,m.reset();for(let q in f)delete f[q];e.setRenderTarget(w),p=null,d=null,u=null,s=null,S=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",B),s.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(b),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,be=null,Se=null;A.depth&&(Se=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=A.stencil?Us:_s,be=A.stencil?Ls:pi);let Ge={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new wn(d.textureWidth,d.textureHeight,{format:hn,type:Mn,depthTexture:new dr(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ve={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new wn(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(q){for(let Z=0;Z<q.removed.length;Z++){let ve=q.removed[Z],be=C.indexOf(ve);be>=0&&(C[be]=null,I[be].disconnect(ve))}for(let Z=0;Z<q.added.length;Z++){let ve=q.added[Z],be=C.indexOf(ve);if(be===-1){for(let Ge=0;Ge<I.length;Ge++)if(Ge>=C.length){C.push(ve),be=Ge;break}else if(C[Ge]===null){C[Ge]=ve,be=Ge;break}if(be===-1)break}let Se=I[be];Se&&Se.connect(ve)}}let k=new L,X=new L;function j(q,Z,ve){k.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(ve.matrixWorld);let be=k.distanceTo(X),Se=Z.projectionMatrix.elements,Ge=ve.projectionMatrix.elements,Je=Se[14]/(Se[10]-1),N=Se[14]/(Se[10]+1),oe=(Se[9]+1)/Se[5],ne=(Se[9]-1)/Se[5],K=(Se[8]-1)/Se[0],te=(Ge[8]+1)/Ge[0],pe=Je*K,ce=Je*te,_e=be/(-K+te),ze=_e*-K;if(Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ze),q.translateZ(_e),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let Oe=Je+_e,R=N+_e,M=pe-ze,W=ce+(be-ze),Q=oe*N/R*Oe,re=ne*N/R*Oe;q.projectionMatrix.makePerspective(M,W,Q,re,Oe,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ae(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Z=q.near,ve=q.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),P.near=x.near=g.near=Z,P.far=x.far=g.far=ve,(F!==P.near||D!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,D=P.far),P.layers.mask=q.layers.mask|6,g.layers.mask=P.layers.mask&3,x.layers.mask=P.layers.mask&5;let be=q.parent,Se=P.cameras;ae(P,be);for(let Ge=0;Ge<Se.length;Ge++)ae(Se[Ge],be);Se.length===2?j(P,g,x):P.projectionMatrix.copy(g.projectionMatrix),Me(q,P,be)};function Me(q,Z,ve){ve===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=xs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(q){return f[q]};let de=null;function He(q,Z){if(h=Z.getViewerPose(l||o),_=Z,h!==null){let ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let be=!1;ve.length!==P.cameras.length&&(P.cameras.length=0,be=!0);for(let N=0;N<ve.length;N++){let oe=ve[N],ne=null;if(p!==null)ne=p.getViewport(oe);else{let te=u.getViewSubImage(d,oe);ne=te.viewport,N===0&&(e.setRenderTargetTextures(S,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(S))}let K=v[N];K===void 0&&(K=new Ct,K.layers.enable(N),K.viewport=new tt,v[N]=K),K.matrix.fromArray(oe.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(oe.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(ne.x,ne.y,ne.width,ne.height),N===0&&(P.matrix.copy(K.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),be===!0&&P.cameras.push(K)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){u=n.getBinding();let N=u.getDepthInformation(ve[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),u=n.getBinding();for(let N=0;N<ve.length;N++){let oe=ve[N].camera;if(oe){let ne=f[oe];ne||(ne=new fr,f[oe]=ne);let K=u.getCameraImage(oe);ne.sourceTexture=K}}}}for(let ve=0;ve<I.length;ve++){let be=C[ve],Se=I[ve];be!==null&&Se!==void 0&&Se.update(be,Z,l||o)}de&&de(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}let Le=new id;Le.setAnimationLoop(He),this.setAnimationLoop=function(q){de=q},this.dispose=function(){}}},Ji=new xn,H_=new pt;function V_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ul(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,w,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,A,w):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let A=e.get(f),w=A.envMap,S=A.envMapRotation;w&&(m.envMap.value=w,Ji.copy(S),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(Ji)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,A,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,w){let S=w.program;n.uniformBlockBinding(A,S)}function l(A,w){let S=s[A.id];S===void 0&&(_(A),S=h(A),s[A.id]=S,A.addEventListener("dispose",m));let I=w.program;n.updateUBOMapping(A,I);let C=e.render.frame;r[A.id]!==C&&(d(A),r[A.id]=C)}function h(A){let w=u();A.__bindingPointIndex=w;let S=i.createBuffer(),I=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,I,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){let w=s[A.id],S=A.uniforms,I=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,b=S.length;C<b;C++){let T=Array.isArray(S[C])?S[C]:[S[C]];for(let g=0,x=T.length;g<x;g++){let v=T[g];if(p(v,C,g,I)===!0){let P=v.__offset,F=Array.isArray(v.value)?v.value:[v.value],D=0;for(let O=0;O<F.length;O++){let B=F[O],H=y(B);typeof B=="number"||typeof B=="boolean"?(v.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,P+D,v.__data)):B.isMatrix3?(v.__data[0]=B.elements[0],v.__data[1]=B.elements[1],v.__data[2]=B.elements[2],v.__data[3]=0,v.__data[4]=B.elements[3],v.__data[5]=B.elements[4],v.__data[6]=B.elements[5],v.__data[7]=0,v.__data[8]=B.elements[6],v.__data[9]=B.elements[7],v.__data[10]=B.elements[8],v.__data[11]=0):(B.toArray(v.__data,D),D+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,P,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,w,S,I){let C=A.value,b=w+"_"+S;if(I[b]===void 0)return typeof C=="number"||typeof C=="boolean"?I[b]=C:I[b]=C.clone(),!0;{let T=I[b];if(typeof C=="number"||typeof C=="boolean"){if(T!==C)return I[b]=C,!0}else if(T.equals(C)===!1)return T.copy(C),!0}return!1}function _(A){let w=A.uniforms,S=0,I=16;for(let b=0,T=w.length;b<T;b++){let g=Array.isArray(w[b])?w[b]:[w[b]];for(let x=0,v=g.length;x<v;x++){let P=g[x],F=Array.isArray(P.value)?P.value:[P.value];for(let D=0,O=F.length;D<O;D++){let B=F[D],H=y(B),k=S%I,X=k%H.boundary,j=k+X;S+=X,j!==0&&I-j<H.storage&&(S+=I-j),P.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=S,S+=H.storage}}}let C=S%I;return C>0&&(S+=I-C),A.__size=S,A.__cache={},this}function y(A){let w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function m(A){let w=A.target;w.removeEventListener("dispose",m);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(let A in s)i.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var Bs=class{constructor(e={}){let{canvas:t=wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,A=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,I=!1;this._outputColorSpace=St;let C=0,b=0,T=null,g=-1,x=null,v=new tt,P=new tt,F=null,D=new Ye(0),O=0,B=t.width,H=t.height,k=1,X=null,j=null,ae=new tt(0,0,B,H),Me=new tt(0,0,B,H),de=!1,He=new Es,Le=!1,q=!1,Z=new pt,ve=new L,be=new tt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function Je(){return T===null?k:1}let N=n;function oe(E,V){return t.getContext(E,V)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",he,!1),N===null){let V="webgl2";if(N=oe(V,E),N===null)throw oe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ne,K,te,pe,ce,_e,ze,Oe,R,M,W,Q,re,ee,Ie,ue,Te,Re,U,J,ie,xe,me,Ue;function z(){ne=new a0(N),ne.init(),xe=new B_(N,ne),K=new e0(N,ne,e,xe),te=new F_(N,ne),K.reversedDepthBuffer&&d&&te.buffers.depth.setReversed(!0),pe=new h0(N),ce=new b_,_e=new O_(N,ne,te,ce,K,xe,pe),ze=new n0(S),Oe=new o0(S),R=new gp(N),me=new Qg(N,R),M=new c0(N,R,pe,me),W=new d0(N,M,R,pe),U=new u0(N,K,_e),ue=new t0(ce),Q=new S_(S,ze,Oe,ne,K,me,ue),re=new V_(S,ce),ee=new w_,Ie=new P_(ne),Re=new Kg(S,ze,Oe,te,W,p,c),Te=new U_(S,W,K),Ue=new G_(N,pe,K,te),J=new jg(N,ne,pe),ie=new l0(N,ne,pe),pe.programs=Q.programs,S.capabilities=K,S.extensions=ne,S.properties=ce,S.renderLists=ee,S.shadowMap=Te,S.state=te,S.info=pe}z();let le=new Rl(S,N);this.xr=le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(B,H,!1))},this.getSize=function(E){return E.set(B,H)},this.setSize=function(E,V,Y=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,H=V,t.width=Math.floor(E*k),t.height=Math.floor(V*k),Y===!0&&(t.style.width=E+"px",t.style.height=V+"px"),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(B*k,H*k).floor()},this.setDrawingBufferSize=function(E,V,Y){B=E,H=V,k=Y,t.width=Math.floor(E*Y),t.height=Math.floor(V*Y),this.setViewport(0,0,E,V)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(ae)},this.setViewport=function(E,V,Y,$){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,V,Y,$),te.viewport(v.copy(ae).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(Me)},this.setScissor=function(E,V,Y,$){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,V,Y,$),te.scissor(P.copy(Me).multiplyScalar(k).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(E){te.setScissorTest(de=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,Y=!0){let $=0;if(E){let G=!1;if(T!==null){let fe=T.texture.format;G=fe===ha||fe===la||fe===ca}if(G){let fe=T.texture.type,we=fe===Mn||fe===pi||fe===Ps||fe===Ls||fe===oa||fe===aa,Pe=Re.getClearColor(),Ce=Re.getClearAlpha(),Be=Pe.r,ke=Pe.g,Ne=Pe.b;we?(_[0]=Be,_[1]=ke,_[2]=Ne,_[3]=Ce,N.clearBufferuiv(N.COLOR,0,_)):(y[0]=Be,y[1]=ke,y[2]=Ne,y[3]=Ce,N.clearBufferiv(N.COLOR,0,y))}else $|=N.COLOR_BUFFER_BIT}V&&($|=N.DEPTH_BUFFER_BIT),Y&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Re.dispose(),ee.dispose(),Ie.dispose(),ce.dispose(),ze.dispose(),Oe.dispose(),W.dispose(),me.dispose(),Ue.dispose(),Q.dispose(),le.dispose(),le.removeEventListener("sessionstart",En),le.removeEventListener("sessionend",oh),Ci.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let E=pe.autoReset,V=Te.enabled,Y=Te.autoUpdate,$=Te.needsUpdate,G=Te.type;z(),pe.autoReset=E,Te.enabled=V,Te.autoUpdate=Y,Te.needsUpdate=$,Te.type=G}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){let V=E.target;V.removeEventListener("dispose",se),De(V)}function De(E){Ve(E),ce.remove(E)}function Ve(E){let V=ce.get(E).programs;V!==void 0&&(V.forEach(function(Y){Q.releaseProgram(Y)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,Y,$,G,fe){V===null&&(V=Se);let we=G.isMesh&&G.matrixWorld.determinant()<0,Pe=Gd(E,V,Y,$,G);te.setMaterial($,we);let Ce=Y.index,Be=1;if($.wireframe===!0){if(Ce=M.getWireframeAttribute(Y),Ce===void 0)return;Be=2}let ke=Y.drawRange,Ne=Y.attributes.position,$e=ke.start*Be,rt=(ke.start+ke.count)*Be;fe!==null&&($e=Math.max($e,fe.start*Be),rt=Math.min(rt,(fe.start+fe.count)*Be)),Ce!==null?($e=Math.max($e,0),rt=Math.min(rt,Ce.count)):Ne!=null&&($e=Math.max($e,0),rt=Math.min(rt,Ne.count));let vt=rt-$e;if(vt<0||vt===1/0)return;me.setup(G,$,Pe,Y,Ce);let ut,ot=J;if(Ce!==null&&(ut=R.get(Ce),ot=ie,ot.setIndex(ut)),G.isMesh)$.wireframe===!0?(te.setLineWidth($.wireframeLinewidth*Je()),ot.setMode(N.LINES)):ot.setMode(N.TRIANGLES);else if(G.isLine){let Fe=$.linewidth;Fe===void 0&&(Fe=1),te.setLineWidth(Fe*Je()),G.isLineSegments?ot.setMode(N.LINES):G.isLineLoop?ot.setMode(N.LINE_LOOP):ot.setMode(N.LINE_STRIP)}else G.isPoints?ot.setMode(N.POINTS):G.isSprite&&ot.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ys("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))ot.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Fe=G._multiDrawStarts,mt=G._multiDrawCounts,Ke=G._multiDrawCount,Zt=Ce?R.get(Ce).bytesPerElement:1,ns=ce.get($).currentProgram.getUniforms();for(let Jt=0;Jt<Ke;Jt++)ns.setValue(N,"_gl_DrawID",Jt),ot.render(Fe[Jt]/Zt,mt[Jt])}else if(G.isInstancedMesh)ot.renderInstances($e,vt,G.count);else if(Y.isInstancedBufferGeometry){let Fe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,mt=Math.min(Y.instanceCount,Fe);ot.renderInstances($e,vt,mt)}else ot.render($e,vt)};function lt(E,V,Y){E.transparent===!0&&E.side===Cn&&E.forceSinglePass===!1?(E.side=zt,E.needsUpdate=!0,Kr(E,V,Y),E.side=Vn,E.needsUpdate=!0,Kr(E,V,Y),E.side=Cn):Kr(E,V,Y)}this.compile=function(E,V,Y=null){Y===null&&(Y=E),f=Ie.get(Y),f.init(V),w.push(f),Y.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),E!==Y&&E.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(f.pushLight(G),G.castShadow&&f.pushShadow(G))}),f.setupLights();let $=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let fe=G.material;if(fe)if(Array.isArray(fe))for(let we=0;we<fe.length;we++){let Pe=fe[we];lt(Pe,Y,G),$.add(Pe)}else lt(fe,Y,G),$.add(fe)}),f=w.pop(),$},this.compileAsync=function(E,V,Y=null){let $=this.compile(E,V,Y);return new Promise(G=>{function fe(){if($.forEach(function(we){ce.get(we).currentProgram.isReady()&&$.delete(we)}),$.size===0){G(E);return}setTimeout(fe,10)}ne.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let je=null;function Nn(E){je&&je(E)}function En(){Ci.stop()}function oh(){Ci.start()}let Ci=new id;Ci.setAnimationLoop(Nn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(E){je=E,le.setAnimationLoop(E),E===null?Ci.stop():Ci.start()},le.addEventListener("sessionstart",En),le.addEventListener("sessionend",oh),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(V),V=le.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,V,T),f=Ie.get(E,w.length),f.init(V),w.push(f),Z.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),He.setFromProjectionMatrix(Z,gn,V.reversedDepth),q=this.localClippingEnabled,Le=ue.init(this.clippingPlanes,q),m=ee.get(E,A.length),m.init(),A.push(m),le.enabled===!0&&le.isPresenting===!0){let fe=S.xr.getDepthSensingMesh();fe!==null&&rc(fe,V,-1/0,S.sortObjects)}rc(E,V,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(X,j),Ge=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,Ge&&Re.addToRenderList(m,E),this.info.render.frame++,Le===!0&&ue.beginShadows();let Y=f.state.shadowsArray;Te.render(Y,E,V),Le===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=m.opaque,G=m.transmissive;if(f.setupLights(),V.isArrayCamera){let fe=V.cameras;if(G.length>0)for(let we=0,Pe=fe.length;we<Pe;we++){let Ce=fe[we];ch($,G,E,Ce)}Ge&&Re.render(E);for(let we=0,Pe=fe.length;we<Pe;we++){let Ce=fe[we];ah(m,E,Ce,Ce.viewport)}}else G.length>0&&ch($,G,E,V),Ge&&Re.render(E),ah(m,E,V);T!==null&&b===0&&(_e.updateMultisampleRenderTarget(T),_e.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(S,E,V),me.resetDefaultState(),g=-1,x=null,w.pop(),w.length>0?(f=w[w.length-1],Le===!0&&ue.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function rc(E,V,Y,$){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||He.intersectsSprite(E)){$&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);let we=W.update(E),Pe=E.material;Pe.visible&&m.push(E,we,Pe,Y,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||He.intersectsObject(E))){let we=W.update(E),Pe=E.material;if($&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),be.copy(we.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(Pe)){let Ce=we.groups;for(let Be=0,ke=Ce.length;Be<ke;Be++){let Ne=Ce[Be],$e=Pe[Ne.materialIndex];$e&&$e.visible&&m.push(E,we,$e,Y,be.z,Ne)}}else Pe.visible&&m.push(E,we,Pe,Y,be.z,null)}}let fe=E.children;for(let we=0,Pe=fe.length;we<Pe;we++)rc(fe[we],V,Y,$)}function ah(E,V,Y,$){let G=E.opaque,fe=E.transmissive,we=E.transparent;f.setupLightsView(Y),Le===!0&&ue.setGlobalState(S.clippingPlanes,Y),$&&te.viewport(v.copy($)),G.length>0&&Jr(G,V,Y),fe.length>0&&Jr(fe,V,Y),we.length>0&&Jr(we,V,Y),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function ch(E,V,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[$.id]===void 0&&(f.state.transmissionRenderTarget[$.id]=new wn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Ds:Mn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));let fe=f.state.transmissionRenderTarget[$.id],we=$.viewport||v;fe.setSize(we.z*S.transmissionResolutionScale,we.w*S.transmissionResolutionScale);let Pe=S.getRenderTarget(),Ce=S.getActiveCubeFace(),Be=S.getActiveMipmapLevel();S.setRenderTarget(fe),S.getClearColor(D),O=S.getClearAlpha(),O<1&&S.setClearColor(16777215,.5),S.clear(),Ge&&Re.render(Y);let ke=S.toneMapping;S.toneMapping=Yn;let Ne=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),f.setupLightsView($),Le===!0&&ue.setGlobalState(S.clippingPlanes,$),Jr(E,Y,$),_e.updateMultisampleRenderTarget(fe),_e.updateRenderTargetMipmap(fe),ne.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let rt=0,vt=V.length;rt<vt;rt++){let ut=V[rt],ot=ut.object,Fe=ut.geometry,mt=ut.material,Ke=ut.group;if(mt.side===Cn&&ot.layers.test($.layers)){let Zt=mt.side;mt.side=zt,mt.needsUpdate=!0,lh(ot,Y,$,Fe,mt,Ke),mt.side=Zt,mt.needsUpdate=!0,$e=!0}}$e===!0&&(_e.updateMultisampleRenderTarget(fe),_e.updateRenderTargetMipmap(fe))}S.setRenderTarget(Pe,Ce,Be),S.setClearColor(D,O),Ne!==void 0&&($.viewport=Ne),S.toneMapping=ke}function Jr(E,V,Y){let $=V.isScene===!0?V.overrideMaterial:null;for(let G=0,fe=E.length;G<fe;G++){let we=E[G],Pe=we.object,Ce=we.geometry,Be=we.group,ke=we.material;ke.allowOverride===!0&&$!==null&&(ke=$),Pe.layers.test(Y.layers)&&lh(Pe,V,Y,Ce,ke,Be)}}function lh(E,V,Y,$,G,fe){E.onBeforeRender(S,V,Y,$,G,fe),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(S,V,Y,$,E,fe),G.transparent===!0&&G.side===Cn&&G.forceSinglePass===!1?(G.side=zt,G.needsUpdate=!0,S.renderBufferDirect(Y,V,$,G,E,fe),G.side=Vn,G.needsUpdate=!0,S.renderBufferDirect(Y,V,$,G,E,fe),G.side=Cn):S.renderBufferDirect(Y,V,$,G,E,fe),E.onAfterRender(S,V,Y,$,G,fe)}function Kr(E,V,Y){V.isScene!==!0&&(V=Se);let $=ce.get(E),G=f.state.lights,fe=f.state.shadowsArray,we=G.state.version,Pe=Q.getParameters(E,G.state,fe,V,Y),Ce=Q.getProgramCacheKey(Pe),Be=$.programs;$.environment=E.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(E.isMeshStandardMaterial?Oe:ze).get(E.envMap||$.environment),$.envMapRotation=$.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,Be===void 0&&(E.addEventListener("dispose",se),Be=new Map,$.programs=Be);let ke=Be.get(Ce);if(ke!==void 0){if($.currentProgram===ke&&$.lightsStateVersion===we)return uh(E,Pe),ke}else Pe.uniforms=Q.getUniforms(E),E.onBeforeCompile(Pe,S),ke=Q.acquireProgram(Pe,Ce),Be.set(Ce,ke),$.uniforms=Pe.uniforms;let Ne=$.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=ue.uniform),uh(E,Pe),$.needsLights=Xd(E),$.lightsStateVersion=we,$.needsLights&&(Ne.ambientLightColor.value=G.state.ambient,Ne.lightProbe.value=G.state.probe,Ne.directionalLights.value=G.state.directional,Ne.directionalLightShadows.value=G.state.directionalShadow,Ne.spotLights.value=G.state.spot,Ne.spotLightShadows.value=G.state.spotShadow,Ne.rectAreaLights.value=G.state.rectArea,Ne.ltc_1.value=G.state.rectAreaLTC1,Ne.ltc_2.value=G.state.rectAreaLTC2,Ne.pointLights.value=G.state.point,Ne.pointLightShadows.value=G.state.pointShadow,Ne.hemisphereLights.value=G.state.hemi,Ne.directionalShadowMap.value=G.state.directionalShadowMap,Ne.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ne.spotShadowMap.value=G.state.spotShadowMap,Ne.spotLightMatrix.value=G.state.spotLightMatrix,Ne.spotLightMap.value=G.state.spotLightMap,Ne.pointShadowMap.value=G.state.pointShadowMap,Ne.pointShadowMatrix.value=G.state.pointShadowMatrix),$.currentProgram=ke,$.uniformsList=null,ke}function hh(E){if(E.uniformsList===null){let V=E.currentProgram.getUniforms();E.uniformsList=Os.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function uh(E,V){let Y=ce.get(E);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Gd(E,V,Y,$,G){V.isScene!==!0&&(V=Se),_e.resetTextureUnits();let fe=V.fog,we=$.isMeshStandardMaterial?V.environment:null,Pe=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Bi,Ce=($.isMeshStandardMaterial?Oe:ze).get($.envMap||we),Be=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ke=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ne=!!Y.morphAttributes.position,$e=!!Y.morphAttributes.normal,rt=!!Y.morphAttributes.color,vt=Yn;$.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(vt=S.toneMapping);let ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ot=ut!==void 0?ut.length:0,Fe=ce.get($),mt=f.state.lights;if(Le===!0&&(q===!0||E!==x)){let Ot=E===x&&$.id===g;ue.setState($,E,Ot)}let Ke=!1;$.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==mt.state.version||Fe.outputColorSpace!==Pe||G.isBatchedMesh&&Fe.batching===!1||!G.isBatchedMesh&&Fe.batching===!0||G.isBatchedMesh&&Fe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Fe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Fe.instancing===!1||!G.isInstancedMesh&&Fe.instancing===!0||G.isSkinnedMesh&&Fe.skinning===!1||!G.isSkinnedMesh&&Fe.skinning===!0||G.isInstancedMesh&&Fe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Fe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Fe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Fe.instancingMorph===!1&&G.morphTexture!==null||Fe.envMap!==Ce||$.fog===!0&&Fe.fog!==fe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ue.numPlanes||Fe.numIntersection!==ue.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==ke||Fe.morphTargets!==Ne||Fe.morphNormals!==$e||Fe.morphColors!==rt||Fe.toneMapping!==vt||Fe.morphTargetsCount!==ot)&&(Ke=!0):(Ke=!0,Fe.__version=$.version);let Zt=Fe.currentProgram;Ke===!0&&(Zt=Kr($,V,G));let ns=!1,Jt=!1,Xs=!1,gt=Zt.getUniforms(),rn=Fe.uniforms;if(te.useProgram(Zt.program)&&(ns=!0,Jt=!0,Xs=!0),$.id!==g&&(g=$.id,Jt=!0),ns||x!==E){te.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),gt.setValue(N,"projectionMatrix",E.projectionMatrix),gt.setValue(N,"viewMatrix",E.matrixWorldInverse);let Ht=gt.map.cameraPosition;Ht!==void 0&&Ht.setValue(N,ve.setFromMatrixPosition(E.matrixWorld)),K.logarithmicDepthBuffer&&gt.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&gt.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Jt=!0,Xs=!0)}if(G.isSkinnedMesh){gt.setOptional(N,G,"bindMatrix"),gt.setOptional(N,G,"bindMatrixInverse");let Ot=G.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),gt.setValue(N,"boneTexture",Ot.boneTexture,_e))}G.isBatchedMesh&&(gt.setOptional(N,G,"batchingTexture"),gt.setValue(N,"batchingTexture",G._matricesTexture,_e),gt.setOptional(N,G,"batchingIdTexture"),gt.setValue(N,"batchingIdTexture",G._indirectTexture,_e),gt.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&gt.setValue(N,"batchingColorTexture",G._colorsTexture,_e));let on=Y.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&U.update(G,Y,Zt),(Jt||Fe.receiveShadow!==G.receiveShadow)&&(Fe.receiveShadow=G.receiveShadow,gt.setValue(N,"receiveShadow",G.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(rn.envMap.value=Ce,rn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(rn.envMapIntensity.value=V.environmentIntensity),Jt&&(gt.setValue(N,"toneMappingExposure",S.toneMappingExposure),Fe.needsLights&&Wd(rn,Xs),fe&&$.fog===!0&&re.refreshFogUniforms(rn,fe),re.refreshMaterialUniforms(rn,$,k,H,f.state.transmissionRenderTarget[E.id]),Os.upload(N,hh(Fe),rn,_e)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Os.upload(N,hh(Fe),rn,_e),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&gt.setValue(N,"center",G.center),gt.setValue(N,"modelViewMatrix",G.modelViewMatrix),gt.setValue(N,"normalMatrix",G.normalMatrix),gt.setValue(N,"modelMatrix",G.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Ot=$.uniformsGroups;for(let Ht=0,oc=Ot.length;Ht<oc;Ht++){let Ri=Ot[Ht];Ue.update(Ri,Zt),Ue.bind(Ri,Zt)}}return Zt}function Wd(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Xd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,V,Y){let $=ce.get(E);$.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ce.get(E.texture).__webglTexture=V,ce.get(E.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:Y,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){let Y=ce.get(E);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};let qd=N.createFramebuffer();this.setRenderTarget=function(E,V=0,Y=0){T=E,C=V,b=Y;let $=!0,G=null,fe=!1,we=!1;if(E){let Ce=ce.get(E);if(Ce.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(Ce.__webglFramebuffer===void 0)_e.setupRenderTarget(E);else if(Ce.__hasExternalTextures)_e.rebindTextures(E,ce.get(E.texture).__webglTexture,ce.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ne=E.depthTexture;if(Ce.__boundDepthTexture!==Ne){if(Ne!==null&&ce.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_e.setupDepthRenderbuffer(E)}}let Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);let ke=ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[V])?G=ke[V][Y]:G=ke[V],fe=!0):E.samples>0&&_e.useMultisampledRTT(E)===!1?G=ce.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?G=ke[Y]:G=ke,v.copy(E.viewport),P.copy(E.scissor),F=E.scissorTest}else v.copy(ae).multiplyScalar(k).floor(),P.copy(Me).multiplyScalar(k).floor(),F=de;if(Y!==0&&(G=qd),te.bindFramebuffer(N.FRAMEBUFFER,G)&&$&&te.drawBuffers(E,G),te.viewport(v),te.scissor(P),te.setScissorTest(F),fe){let Ce=ce.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ce.__webglTexture,Y)}else if(we){let Ce=V;for(let Be=0;Be<E.textures.length;Be++){let ke=ce.get(E.textures[Be]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Be,ke.__webglTexture,Y,Ce)}}else if(E!==null&&Y!==0){let Ce=ce.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ce.__webglTexture,Y)}g=-1},this.readRenderTargetPixels=function(E,V,Y,$,G,fe,we,Pe=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){te.bindFramebuffer(N.FRAMEBUFFER,Ce);try{let Be=E.textures[Pe],ke=Be.format,Ne=Be.type;if(!K.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-$&&Y>=0&&Y<=E.height-G&&(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pe),N.readPixels(V,Y,$,G,xe.convert(ke),xe.convert(Ne),fe))}finally{let Be=T!==null?ce.get(T).__webglFramebuffer:null;te.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(E,V,Y,$,G,fe,we,Pe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(V>=0&&V<=E.width-$&&Y>=0&&Y<=E.height-G){te.bindFramebuffer(N.FRAMEBUFFER,Ce);let Be=E.textures[Pe],ke=Be.format,Ne=Be.type;if(!K.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$e),N.bufferData(N.PIXEL_PACK_BUFFER,fe.byteLength,N.STREAM_READ),E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Pe),N.readPixels(V,Y,$,G,xe.convert(ke),xe.convert(Ne),0);let rt=T!==null?ce.get(T).__webglFramebuffer:null;te.bindFramebuffer(N.FRAMEBUFFER,rt);let vt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Tu(N,vt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,fe),N.deleteBuffer($e),N.deleteSync(vt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,Y=0){let $=Math.pow(2,-Y),G=Math.floor(E.image.width*$),fe=Math.floor(E.image.height*$),we=V!==null?V.x:0,Pe=V!==null?V.y:0;_e.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,we,Pe,G,fe),te.unbindTexture()};let Yd=N.createFramebuffer(),$d=N.createFramebuffer();this.copyTextureToTexture=function(E,V,Y=null,$=null,G=0,fe=null){fe===null&&(G!==0?(ys("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=G,G=0):fe=0);let we,Pe,Ce,Be,ke,Ne,$e,rt,vt,ut=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(Y!==null)we=Y.max.x-Y.min.x,Pe=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Be=Y.min.x,ke=Y.min.y,Ne=Y.isBox3?Y.min.z:0;else{let on=Math.pow(2,-G);we=Math.floor(ut.width*on),Pe=Math.floor(ut.height*on),E.isDataArrayTexture?Ce=ut.depth:E.isData3DTexture?Ce=Math.floor(ut.depth*on):Ce=1,Be=0,ke=0,Ne=0}$!==null?($e=$.x,rt=$.y,vt=$.z):($e=0,rt=0,vt=0);let ot=xe.convert(V.format),Fe=xe.convert(V.type),mt;V.isData3DTexture?(_e.setTexture3D(V,0),mt=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(_e.setTexture2DArray(V,0),mt=N.TEXTURE_2D_ARRAY):(_e.setTexture2D(V,0),mt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);let Ke=N.getParameter(N.UNPACK_ROW_LENGTH),Zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ns=N.getParameter(N.UNPACK_SKIP_PIXELS),Jt=N.getParameter(N.UNPACK_SKIP_ROWS),Xs=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ut.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),N.pixelStorei(N.UNPACK_SKIP_ROWS,ke),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne);let gt=E.isDataArrayTexture||E.isData3DTexture,rn=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){let on=ce.get(E),Ot=ce.get(V),Ht=ce.get(on.__renderTarget),oc=ce.get(Ot.__renderTarget);te.bindFramebuffer(N.READ_FRAMEBUFFER,Ht.__webglFramebuffer),te.bindFramebuffer(N.DRAW_FRAMEBUFFER,oc.__webglFramebuffer);for(let Ri=0;Ri<Ce;Ri++)gt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ce.get(E).__webglTexture,G,Ne+Ri),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ce.get(V).__webglTexture,fe,vt+Ri)),N.blitFramebuffer(Be,ke,we,Pe,$e,rt,we,Pe,N.DEPTH_BUFFER_BIT,N.NEAREST);te.bindFramebuffer(N.READ_FRAMEBUFFER,null),te.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||ce.has(E)){let on=ce.get(E),Ot=ce.get(V);te.bindFramebuffer(N.READ_FRAMEBUFFER,Yd),te.bindFramebuffer(N.DRAW_FRAMEBUFFER,$d);for(let Ht=0;Ht<Ce;Ht++)gt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,on.__webglTexture,G,Ne+Ht):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,on.__webglTexture,G),rn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.__webglTexture,fe,vt+Ht):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ot.__webglTexture,fe),G!==0?N.blitFramebuffer(Be,ke,we,Pe,$e,rt,we,Pe,N.COLOR_BUFFER_BIT,N.NEAREST):rn?N.copyTexSubImage3D(mt,fe,$e,rt,vt+Ht,Be,ke,we,Pe):N.copyTexSubImage2D(mt,fe,$e,rt,Be,ke,we,Pe);te.bindFramebuffer(N.READ_FRAMEBUFFER,null),te.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else rn?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(mt,fe,$e,rt,vt,we,Pe,Ce,ot,Fe,ut.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(mt,fe,$e,rt,vt,we,Pe,Ce,ot,ut.data):N.texSubImage3D(mt,fe,$e,rt,vt,we,Pe,Ce,ot,Fe,ut):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,fe,$e,rt,we,Pe,ot,Fe,ut.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,fe,$e,rt,ut.width,ut.height,ot,ut.data):N.texSubImage2D(N.TEXTURE_2D,fe,$e,rt,we,Pe,ot,Fe,ut);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ke),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ns),N.pixelStorei(N.UNPACK_SKIP_ROWS,Jt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xs),fe===0&&V.generateMipmaps&&N.generateMipmap(mt),te.unbindTexture()},this.initRenderTarget=function(E){ce.get(E).__webglFramebuffer===void 0&&_e.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?_e.setTextureCube(E,0):E.isData3DTexture?_e.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?_e.setTexture2DArray(E,0):_e.setTexture2D(E,0),te.unbindTexture()},this.resetState=function(){C=0,b=0,T=null,te.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var Br=new L;function un(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Br.copy(e),Br[n]=0,Br.normalize();let l=.5*o/(o+a),h=1-Br.angleTo(i)/c;return Math.sign(Br[t])===1?h*l:a/(o+a)+l+l*(1-h)}var mi=class i extends Tn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new L,l=new L,h=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,p=this.attributes.uv.array,_=u.length/6,y=new L,m=.5/o;for(let f=0,A=0;f<u.length;f+=3,A+=2)switch(c.fromArray(u,f),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[f+0]=h.x*Math.sign(c.x)+l.x*r,u[f+1]=h.y*Math.sign(c.y)+l.y*r,u[f+2]=h.z*Math.sign(c.z)+l.z*r,d[f+0]=l.x,d[f+1]=l.y,d[f+2]=l.z,Math.floor(f/_)){case 0:y.set(1,0,0),p[A+0]=un(y,l,"z","y",r,n),p[A+1]=1-un(y,l,"y","z",r,t);break;case 1:y.set(-1,0,0),p[A+0]=1-un(y,l,"z","y",r,n),p[A+1]=1-un(y,l,"y","z",r,t);break;case 2:y.set(0,1,0),p[A+0]=1-un(y,l,"x","z",r,e),p[A+1]=un(y,l,"z","x",r,n);break;case 3:y.set(0,-1,0),p[A+0]=1-un(y,l,"x","z",r,e),p[A+1]=1-un(y,l,"z","x",r,n);break;case 4:y.set(0,0,1),p[A+0]=1-un(y,l,"x","y",r,e),p[A+1]=1-un(y,l,"y","x",r,t);break;case 5:y.set(0,0,-1),p[A+0]=un(y,l,"x","y",r,e),p[A+1]=1-un(y,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var W_={Milk:[["Whole milk","\u{1F95B}",1,"1 litre",2]],"Oat milk":[["Oat milk","\u{1F95B}",1,"1 litre",6]],Juice:[["Orange juice","\u{1F34A}",1,"750 ml",3]],Cola:[["Cola","\u{1F964}",2,"2 \xD7 330 ml",90]],Water:[["Still mineral water","\u{1F4A7}",2,"2 \xD7 500 ml",180]],"Sparkling water":[["Sparkling water","\u{1F4A7}",2,"2 \xD7 500 ml",120]],Tonic:[["Tonic water","\u{1F964}",2,"2 \xD7 200 ml",90]],Wine:[["White wine","\u{1F377}",1,"750 ml",120]],Beer:[["Lager","\u{1F37A}",2,"2 \xD7 330 ml",90]],Cider:[["Apple cider","\u{1F34E}",1,"500 ml",90]],Dairy:[["Milk","\u{1F95B}",1,"1 litre",1],["Cheddar","\u{1F9C0}",1,"200 g",9],["Butter","\u{1F9C8}",1,"250 g",21],["Double cream","\u{1F95B}",1,"300 ml",7]],Vegetables:[["Spinach","\u{1F96C}",1,"1 bag",2],["Broccoli","\u{1F966}",1,"1 head",6],["Carrots","\u{1F955}",3,"3 carrots",10],["Cucumber","\u{1F952}",1,"1 cucumber",6],["Red pepper","\u{1FAD1}",1,"1 pepper",7]],Leftovers:[["Vegetable pasta","\u{1F35D}",1,"1 container",1],["Roast vegetables","\u{1F958}",1,"1 container",2]],Yogurt:[["Greek yogurt","\u{1F963}",1,"500 g",5],["Strawberry yogurt","\u{1F963}",2,"2 pots",8]],"Meat & fish":[["Chicken breast","\u{1F357}",2,"2 portions",2],["Salmon fillet","\u{1F41F}",1,"1 fillet",4]],Sauces:[["Pesto","\u{1FAD9}",1,"1 jar",7],["Mayonnaise","\u{1FAD9}",1,"1 jar",25],["Mustard","\u{1FAD9}",1,"1 jar",35],["Soy sauce","\u{1FAD9}",1,"1 bottle",90],["Hot sauce","\u{1F336}\uFE0F",1,"1 bottle",60],["Ketchup","\u{1F345}",1,"1 bottle",40]],Deli:[["Hummus","\u{1F9C6}",1,"200 g",5],["Sliced ham","\u{1F953}",1,"120 g",4]],Fruit:[["Oranges","\u{1F34A}",2,"2 oranges",10],["Apples","\u{1F34E}",2,"2 apples",14],["Blueberries","\u{1FAD0}",1,"1 punnet",4]],Eggs:[["Free-range eggs","\u{1F95A}",12,"12 eggs",16]],Snacks:[["Dark chocolate","\u{1F36B}",1,"1 bar",90],["Olives","\u{1FAD2}",1,"1 tub",10],["Cheese bites","\u{1F9C0}",1,"1 pack",8]],"Frozen veg":[["Frozen peas","\u{1FADB}",1,"500 g",90],["Sweetcorn","\u{1F33D}",1,"500 g",80],["Mixed vegetables","\u{1F966}",1,"1 bag",100]],"Ice cream":[["Vanilla ice cream","\u{1F368}",1,"500 ml",60],["Mango sorbet","\u{1F96D}",1,"500 ml",70]],"Frozen meals":[["Vegetable dumplings","\u{1F95F}",2,"2 packs",45],["Margherita pizza","\u{1F355}",1,"1 pizza",60],["Vegetable curry","\u{1F35B}",1,"1 portion",30]]};function X_(i){return`${i.getFullYear()}-${String(i.getMonth()+1).padStart(2,"0")}-${String(i.getDate()).padStart(2,"0")}`}function gi(i,e=new Date){if(!/^\d{4}-\d{2}-\d{2}$/.test(i??""))return null;let[t,n,s]=i.split("-").map(Number),r=new Date(t,n-1,s);return r.getFullYear()!==t||r.getMonth()!==n-1||r.getDate()!==s?null:Math.round((Date.UTC(t,n-1,s)-Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))/864e5)}function cd(i,e=new Date){return(W_[i]??[]).map(([t,n,s,r,o],a)=>{let c=new Date(e.getFullYear(),e.getMonth(),e.getDate()+o);return{id:`${i}-${a}`,name:t,icon:n,quantity:s,portion:r,expiresOn:X_(c)}})}function _i(i,e=new Date){let t=gi(i.expiresOn,e);return{urgent:t!==null&&t<=3,label:t===null?"No date":t<0?"Expired":t===0?"Use today":t===1?"Use tomorrow":t<=3?`Use in ${t} days`:`${t} days left`}}function Pl(i,e=new Date){return i.reduce((t,n)=>({count:t.count+n.quantity,useSoon:t.useSoon+(_i(n,e).urgent?n.quantity:0)}),{count:0,useSoon:0})}function ld(i,e=new Date){let t=i.filter(s=>s.quantity>0&&_i(s,e).urgent),n=t.some(s=>gi(s.expiresOn,e)<0);return{urgent:t.length>0,expired:n,label:n?"Contains expired food":t.length?"Contains food due within 3 days":""}}function Wa(i){let e=new nt,t=(a,c={})=>new Rt({color:a,toneMapped:!1,clippingPlanes:i,...c}),n=(a,c,l)=>{let h=new xt(a,c);return h.position.z=l,e.add(h),h},s=n(new li(.17,32),t(16729148,{transparent:!0,opacity:.18,depthWrite:!1}),-.006);n(new li(.122,32),t(16777215),0),n(new li(.103,32),t(15548472),.002);let r=n(new Tn(.025,.09,.004),t(16777215),.006);r.position.y=.022;let o=n(new li(.015,16),t(16777215),.009);return o.position.y=-.051,e.userData.halo=s,e}var Xt=Object.freeze({left:-.775,right:.775,bottom:-1.65,top:1.64,back:-.56,front:.55}),Xa=1.6,Sn=(i,e,t)=>Math.max(e,Math.min(t,i));function qa(i){return Sn(i.scrollLeft,0,Math.max(0,i.scrollWidth-i.clientWidth))}function Dl(i){return[new ft(new L(1,0,0),-i.left),new ft(new L(-1,0,0),i.right),new ft(new L(0,1,0),-i.bottom),new ft(new L(0,-1,0),i.top),new ft(new L(0,0,1),-i.back),new ft(new L(0,0,-1),i.front)]}function hd(i,e){return!i.material?.clippingPlanes||i.material.clippingPlanes.every(t=>t.distanceToPoint(e)>=-1e-6)}function Ya(i,e,t="fridge",n){let s=new nt,r=1.65/e,o=Math.max(1,i.length),a=n!==void 0?(Xt.top-n)/(o*r):t==="drinks"?3.16/(Math.max(1,i.length)*r):Math.min(1.75,3.16/(Math.max(1,i.length)*r)),c=n!==void 0?n+((o-1)*a+.6175)*r:1.55-a*r*.5,l=new Set,h=new Set,u=[],d=[],p=new ft(new L(1,0,0),-Xt.left),_=new ft(new L(-1,0,0),Xt.right),y=[...Dl(Xt),p,_],m=(I,C)=>I.traverse(b=>{b.material&&(b.material=b.material.clone(),b.material.clippingPlanes=C,l.add(b.material))});i.forEach((I,C)=>{let b=new nt;b.scale.setScalar(r),b.position.set(0,c-C*a*r,-.03),s.add(b);for(let P of[I.floor,I.frontRail,I.rearRail]){let F=P.clone(!0);F.scale.x=e-.12,m(F,y),b.add(F)}let T=[...I.element.querySelectorAll(".food-card")],g=b.position.y-.6175*r,x=C===0?Xt.top:b.position.y+(a-.6725)*r,v=[...y,new ft(new L(0,1,0),-g),new ft(new L(0,-1,0),x)];I.groups.forEach((P,F)=>{let D=P.clone(!0);D.position.set(0,0,0);let O=new ln().setFromObject(D),B=Math.min(a-.1,(x-g)/r-.02),H=Math.min(1,B/(O.max.y-O.min.y),(T[F].offsetWidth/100-.07)/(O.max.x-O.min.x));D.scale.multiplyScalar(H),D.position.y=-.61-O.min.y*H,D.userData.category={row:C,index:F},m(D,v),b.add(D);let k=Wa(v);k.userData.category={row:C,index:F},k.position.set(.23,Sn(D.position.y+O.max.y*H+.15,-.39,(x-b.position.y)/r-.19),.48),k.traverse(j=>{j.material&&l.add(j.material),j.geometry&&h.add(j.geometry)}),b.add(k);let X={marker:k,foods:P.userData.foods??[],status:null};d.push(X),u.push({clone:D,marker:k,element:I.element,card:T[F],floorY:g,ceilingY:x})})});function f(){for(let{clone:I,marker:C,element:b,card:T}of u)I.position.x=(T.offsetLeft-qa(b)+T.offsetWidth/2-b.clientWidth/2)/100,C.position.x=I.position.x+.23}let A=0;function w(I,C=!1,b=!0,T=new Date){let g=I>=A;g&&(A=I+6e4);for(let x of d){(g||!x.status)&&(x.status=ld(x.foods,T),x.marker.userData.alertLabel=x.status.label),x.marker.visible=b&&x.status.urgent;let v=C?0:(Math.sin(I/2200*Math.PI*2)+1)/2;x.marker.userData.halo.scale.setScalar(1+v*.08),x.marker.userData.halo.material.opacity=.16+v*.1}}function S(I){s.position.x=I,p.constant=-Xt.left-I,_.constant=Xt.right+I}return s.userData={dispose:()=>{l.forEach(I=>I.dispose()),h.forEach(I=>I.dispose())},updatePositions:f,updateAlerts:w,setSlide:S,positions:u,alerts:d,rowElements:i.map(I=>I.element),pitch:a,rows:i.length,scale:r,width:e,top:c},f(),w(0,!0),S(0),s}function Ll(i,e){let t=i.map(()=>Array.from({length:5},()=>[])),n=new Set(i.flat()),s=new Set;for(let[r,o]of t.entries())for(let[a,c]of o.entries()){let l=e?.[r]?.[a];if(Array.isArray(l))for(let h of l)n.has(h)&&!s.has(h)&&(s.add(h),c.push(h))}return i.forEach((r,o)=>r.forEach((a,c)=>{if(s.has(a))return;let l=t[o],h=Math.min(4,Math.floor((c+.5)*5/Math.min(r.length,5))%5),u=Math.min(...l.map(p=>p.length));(l[h].length===u?l[h]:l.find(p=>p.length===u)).push(a),s.add(a)})),t}function $a(i,e,t,n,s){let r=i.flat().find(c=>c.includes(e)),o=i[t]?.[n];if(!r||!o||r===o&&r.at(-1)===e)return!1;let a=[...o.filter(c=>c!==e),e];return s(a,t)?(r.splice(r.indexOf(e),1),o.push(e),!0):!1}var dd=1.58,Pn=-.65,ud=["#427655","#d4a642","#82a16c","#eee4be","#e8a64f","#9cbcab","#ba644e","#d5a562"],q_={"Frozen peas":"Peas","Mixed vegetables":"Mixed veg","Vanilla ice cream":"Vanilla","Mango sorbet":"Mango","Vegetable dumplings":"Dumplings","Margherita pizza":"Margherita","Vegetable curry":"Veg curry"};function fd(i,e,t){let n=new nt;n.userData.drawer=!0,i.add(n);let s=new Set,r=new Set,o=new Set,a=Dl(Xt).slice(0,2);function c(v,P={}){let F=new Gt({color:v,roughness:.48,clippingPlanes:a,...P});return s.add(F),F}function l(v,P,F,D,O,B){r.add(P);let H=new xt(P,F);return H.position.set(D,O,B),v.add(H),H}function h(v,P,F,D,O,B,H,k,X=.018){return l(v,new mi(P,F,D,3,X),k,O,B,H)}function u(v,P,F,D,O,B,H,k=!1){let X=document.createElement("canvas");X.width=384,X.height=192,H(X.getContext("2d"));let j=new vn(X);j.colorSpace=St,o.add(j);let ae=new Rt({map:j,toneMapped:!1,transparent:!0,clippingPlanes:a});s.add(ae);let Me=l(v,new tn(P,F),ae,D,O,B);return k&&(Me.rotation.x=-Math.PI/2),Me}let d=c(15791087),p=c(14016472),_=c(11650490),y=c(7374715);h(n,1.51,1.55,.075,0,-.805,.45,d,.035),h(n,1.48,.07,1,0,Pn-.035,-.055,p);for(let v of[-.731,.731])h(n,.045,.6,1,v,Pn+.28,-.055,d);h(n,1.49,.6,.045,0,Pn+.28,-.54,d),h(n,1.39,.108,.028,0,-.19,.49,y,.015),h(n,1.42,.055,.105,0,-.153,.504,d,.021),u(n,.34,.17,0,-.4,.49,v=>{v.strokeStyle="#467563",v.lineWidth=5,v.lineCap="round",v.save(),v.translate(192,66);for(let P=0;P<6;P++)v.rotate(Math.PI/3),v.beginPath(),v.moveTo(0,0),v.lineTo(0,-38),v.moveTo(-11,-22),v.lineTo(0,-30),v.lineTo(11,-22),v.stroke();v.restore(),v.fillStyle="#466758",v.textAlign="center",v.font="600 37px -apple-system,sans-serif",v.fillText("FREEZER",192,154)});let m=e.flatMap(v=>(v.userData.foods??[]).filter(P=>P.quantity>0).map(P=>({food:P,category:v.name}))),f=3,A=Math.max(1,Math.ceil(m.length/f)),w=.464,S=.9/A,I=Math.min(.245,S*.83);for(let v=1;v<f;v++)h(n,.014,.105,.92,(v-1.5)*w,Pn+.052,-.045,_,.005);let C=[];for(let[v,{food:P,category:F}]of m.entries()){let D=new nt;D.userData.freezerFood=P,n.add(D);let O=ud[v%ud.length],B=c(O),H=F==="Ice cream",k=H?.153:.115,X=H?Math.min(.34,I*1.3):.384;if(H)l(D,new Xn(.5,.44,k,36),d,0,k/2,0).scale.set(X,1,I),l(D,new Xn(.515,.515,.028,36),B,0,k,0).scale.set(X,1,I);else if(h(D,X,k,I,0,k/2,0,B,.026),F==="Frozen veg")for(let He of[-1,1])h(D,.019,.035,I*.96,He*(X/2-.008),k*.5,0,B,.005);else h(D,X*.98,.022,I*.99,0,k-.005,0,d,.009);u(D,X*(H?.76:.87),I*(H?.68:.88),0,k+.016,0,de=>{de.fillStyle="#faf8ee",de.beginPath(),de.roundRect(0,0,384,192,H?58:13),de.fill(),de.textAlign="center",de.font="74px Apple Color Emoji,sans-serif",de.fillText(P.icon??"",192,87),de.fillStyle="#203d32",de.font="bold 46px -apple-system,sans-serif",de.fillText(q_[P.name]??P.name,192,151,350)},!0);let j=u(D,.083,.083,X*.36,k+.021,-I*.32,de=>{de.fillStyle="#d93b35",de.beginPath(),de.ellipse(192,96,185,93,0,0,Math.PI*2),de.fill(),de.fillStyle="#fff",de.textAlign="center",de.font="bold 150px -apple-system,sans-serif",de.fillText("!",192,151)},!0),ae=v%f,Me=Math.floor(v/f);D.position.set((ae-1)*w,Pn+.004,(Me+.5)*S-.5),D.rotation.y=(v%3-1)*.035,C.push({pack:D,alert:j,food:P,angle:D.rotation.y,id:JSON.stringify([F,P.id??P.name]),height:k+.021,velocity:0})}let b=i.userData,T=b.dispose,g=b.updateAlerts,x=0;if(b.drawer=n,t){let k=function(X,j){v.forEach((ae,Me)=>ae.forEach((de,He)=>{let Le=Pn+.004;for(let q of de){let Z=P.get(q);if(Z===H)continue;let ve=Z.pack.position,be=j?1:1-Math.exp(-X*22);ve.x+=((He-1)*w-ve.x)*be,ve.z+=((Me+.5)*S-.5-ve.z)*be,Z.velocity-=X*3.4,ve.y+=X*Z.velocity,(j||ve.y<=Le)&&(ve.y=Le,Z.velocity=j||Math.abs(Z.velocity)<.2?0:Math.abs(Z.velocity)*.23),Le=ve.y+Z.height}}))},v=Array.from({length:A},()=>Array.from({length:f},()=>[])),P=new Map(C.map(X=>[X.id,X])),F=new Set,D="freezer-drawer-layout-v1",O=X=>X.reduce((j,ae)=>j+P.get(ae).height,0)<.55,B;try{B=JSON.parse(localStorage.getItem(D))}catch{}for(let X=0;X<A;X++)for(let j=0;j<f;j++){let ae=B?.[X]?.[j];if(Array.isArray(ae))for(let Me of ae)P.has(Me)&&!F.has(Me)&&O([...v[X][j],Me])&&(v[X][j].push(Me),F.add(Me))}for(let[X,j]of C.entries()){if(F.has(j.id))continue;let ae=v[Math.floor(X/f)][X%f];(O([...ae,j.id])?ae:v.flat().find(de=>O([...de,j.id]))).push(j.id)}let H=null;k(0,!0),b.drawerGame={begin(X){H=C.find(j=>j.food===X),H&&(H.pack.position.y=Pn+.58,H.velocity=0)},drag(X){H&&(H.pack.position.x=Wt.clamp(X.x,-w,w),H.pack.position.z=Wt.clamp(X.z,-.5+S/2,.4-S/2))},release(){if(!H)return;let{x:X,z:j}=H.pack.position;if($a(v,H.id,Math.round((j+.5)/S-.5),Math.round(X/w)+1,O))try{localStorage.setItem(D,JSON.stringify(v))}catch{}H=null},cancel(){H=null,k(0,!0)},tick:k}}b.updateAlerts=(v,P,F,D=new Date)=>{g(v,P,F,D);let O=v>=x;for(let B of C)O&&(B.urgent=_i(B.food,D).urgent,B.expired=gi(B.food.expiresOn,D)<0&&B.urgent),B.alert.visible=F&&B.urgent,t&&(B.pack.rotation.y=B.angle+(B.expired&&!P?Math.sin(v*.014)*.022:0));O&&(x=v+6e4)},b.dispose=()=>{T(),r.forEach(v=>v.dispose()),s.forEach(v=>v.dispose()),o.forEach(v=>v.dispose())}}function pd(i,e,t,n,s){let r=Ya(i.map(D=>({...D,groups:[]})),e,t,s),o=r.userData,a=i.map((D,O)=>o.top-(O*o.pitch+.6175)*o.scale),c=a.map((D,O)=>O?a[O-1]-.055*o.scale:Xt.top),l=(Xt.right-Xt.left-.06)/5,h=-l*5/2,u=new Map,d=i.map(()=>[]),p=new Set,_=new Set,y=r.children[0]?.children[0]?.material.clippingPlanes,m="fridge-game-layout-v1-"+t,f;try{f=JSON.parse(localStorage.getItem(m))}catch{}i.forEach((D,O)=>D.groups.forEach((B,H)=>{for(let k of B.userData.foods??[]){if(!(k.quantity>0))continue;let X=JSON.stringify([B.name,k.id??k.name]);if(u.has(X))continue;let j=(t==="drinks"?B:n(k,B.name)).clone(!0);j.position.set(0,0,0);for(let de of[...j.children])de.material?.map&&de.rotation.x===-Math.PI/2&&j.remove(de);j.traverse(de=>{de.material&&(de.material=de.material.clone(),de.material.clippingPlanes=y,p.add(de.material))});let ae=new nt;ae.userData.category={row:O,index:H},ae.userData.pieceId=X,ae.userData.food=k,ae.add(j);let Me=Wa(y);Me.traverse(de=>{de.material&&p.add(de.material),de.geometry&&_.add(de.geometry)}),ae.add(Me),r.add(ae),d[O].push(X),u.set(X,{id:X,food:k,base:ae,stock:j,badge:Me,size:new ln().setFromObject(j)})}}));let A=Ll(d,f),w=Math.min(...c.map((D,O)=>D-a[O])),S=Math.max(2,...d.map(D=>Math.ceil(D.length/5)));for(let D of u.values()){let{size:O,stock:B,badge:H}=D,k=O.getSize(new L),X=Math.min(l*.86/k.x,(w/S-.025)/k.y,.4/k.z);B.scale.multiplyScalar(X),B.position.set(-(O.max.x+O.min.x)*X/2,-O.min.y*X,-(O.max.z+O.min.z)*X/2),D.height=k.y*X,D.velocity=0,D.compression=0,H.scale.setScalar(.24),H.position.set(Math.min(k.x*X*.42,.085),D.height-.006,k.z*X/2+.012)}function I(D,O){return D.reduce((B,H)=>B+u.get(H).height+.003,.002)<=c[O]-a[O]}A.some((D,O)=>D.some(B=>!I(B,O)))&&A.splice(0,A.length,...Ll(d,null));let C=null,b=0,T=!0,g=.15;function x(D){D.velocity=0,D.compression=0,D.approach=null,D.base.scale.setScalar(1)}function v(D,O){let B=!1;A.forEach((H,k)=>H.forEach((X,j)=>{if(!X.length)return;let ae=h+l*(j+.5),Me=a[k]+.002,de=c[k]-X.reduce((Le,q)=>q===C?.id?Le:Le+u.get(q).height+.003,0),He=null;for(let Le of X){let q=u.get(Le);if(q===C)continue;let Z=q.base.position,ve=Math.max(Me,de);if(O)x(q),Z.set(ae,Me,g);else if(q.approach){let be=q.approach;be.elapsed+=D;let Se=Math.min(1,be.elapsed/.16),Ge=Se*Se*(3-2*Se),Je=Sn(Math.max(be.start.y,Me+.035),Me,ve);Z.x=Wt.lerp(be.start.x,ae,Ge),Z.y=Wt.lerp(be.start.y,Je,1-(1-Se)**3),Z.z=Wt.lerp(be.start.z,g,Se*Se),Se===1&&(q.approach=null),B=!0}else{if(q.velocity-=7.6*D,Z.y+=q.velocity*D,Z.y<=Me){let be=Math.max(0,-q.velocity);Z.y=Me,q.velocity=be>.38?be*.23:0,be>.38&&(q.compression=Math.min(.052,be*.022),He&&(He.compression=Math.max(He.compression,q.compression*.55)))}else Z.y>ve&&(Z.y=ve,q.velocity=Math.min(0,q.velocity));q.compression*=Math.exp(-D*17),q.compression<5e-4&&(q.compression=0),q.base.scale.set(1+q.compression*.4,1-q.compression,1+q.compression*.4),B||=q.velocity!==0||Z.y>Me+1e-5||q.compression>0}Me=Z.y+q.height*q.base.scale.y+.003,de+=q.height+.003,He=q}})),T=B}function P(D,O){if(!T)return;if(O){v(0,!0);return}let B=Math.max(1,Math.ceil(D*120));for(let H=0;H<B&&T;H++)v(D/B,!1)}v(0,!0),o.game={tick:P,begin(D){C=u.get(D),C&&(x(C),T=!0)},position(D){return u.get(D)?.base.position},drag(D,O){C&&C.base.position.set(Sn(D,h+l/2,-h-l/2),Sn(O,a.at(-1),Xt.top-C.height),.32)},release(){if(!C)return;let{x:D,y:O}=C.base.position,B=a.findIndex(k=>O+C.height*.5>=k),H=Sn(Math.floor((D-h)/l),0,4);if($a(A,C.id,B,H,I))try{localStorage.setItem(m,JSON.stringify(A))}catch{}else if(!A[B]?.[H]?.includes(C.id)){C=null,v(0,!0);return}C.approach={start:C.base.position.clone(),elapsed:0},C=null,T=!0},cancel(){C=null,v(0,!0)}},o.updateAlerts=(D,O,B,H=new Date)=>{let k=D>=b;k&&(b=D+6e4);let X=0;for(let j of u.values()){if(k){j.urgent=_i(j.food,H).urgent;let Me=gi(j.food.expiresOn,H);j.expired=Me!==null&&Me<0}j.badge.visible=B&&j.urgent;let ae=(D+X++*183)%2600;j.base.rotation.z=!O&&j.expired&&j!==C&&ae<620?.033*Math.sin(ae/620*Math.PI*6)*Math.sin(ae/620*Math.PI):0}};let F=o.dispose;return o.dispose=()=>{F(),p.forEach(D=>D.dispose()),_.forEach(D=>D.dispose())},o.updateAlerts(0,!0,!1),r}var Ka=new Map,st=(i,e={})=>new Gt({color:i,roughness:.46,...e}),Zn=st(16777215),Hr=st(2599033),dn=st(2644032),Ol=st(15656654),Y_=st(15967851),Qa=st(13887711,{transparent:!0,opacity:.3,roughness:.15,metalness:.08,depthWrite:!1}),Ul=new Map;function $_(i,e="#183a32",t="#fffef6"){let n=i+e+t;if(Ul.has(n))return Ul.get(n);let s=document.createElement("canvas");s.width=256,s.height=256;let r=s.getContext("2d");r.fillStyle=t,r.fillRect(0,0,256,256),r.textAlign="center",r.fillStyle=e,r.font="600 38px -apple-system,sans-serif",r.fillText(i,128,145);let o=new vn(s);return o.colorSpace=St,Ul.set(n,o),o}function Jn(i,e,t,n,s,r){let o=new xt(e,t);return o.position.set(n,s,r),i.add(o),o}function ht(i,e,t,n,s,r,o,a=Zn,c=.025){return Jn(i,new mi(e,t,n,3,c),a,s,r,o)}function Dn(i,e,t,n,s,r,o=1,a=1,c=1){let l=Jn(i,new Tr(e,20,14),r,t,n,s);return l.scale.set(o,a,c),l}function bn(i,e,t,n,s,r,o,a){return Jn(i,new Xn(e,t,n,24),a,s,r,o)}function xi(i,e,t,n,s,r,o,a,c){return Jn(i,new tn(t,n),new Rt({map:$_(e,a,c),toneMapped:!1}),s,r,o)}function gd(i,e,t,n=1){let s=new nt;s.position.set(e,0,t),s.scale.setScalar(n),i.add(s),ht(s,.39,.82,.34,0,.41,0,Zn),ht(s,.4,.19,.35,0,.53,0,Hr,.01);let r=new As;r.moveTo(-.195,0),r.lineTo(.195,0),r.lineTo(0,.17),r.closePath();let o=new Er(r,{depth:.34,bevelEnabled:!1});o.translate(0,0,-.17),Jn(s,o,Zn,0,.82,0),bn(s,.055,.055,.035,.09,.98,.04,Hr),xi(s,"MILK",.32,.29,0,.31,.176)}function Ja(i,e,t,n=12815948,s=""){let r=new nt;r.position.set(e,0,t),i.add(r);let o=st(n);return bn(r,.17,.17,.48,0,.24,0,o),bn(r,.184,.184,.055,0,.51,0,dn),bn(r,.18,.18,.48,0,.25,0,Qa),s&&xi(r,s,.26,.2,0,.27,.185),r}function kr(i,e,t,n="YOGURT",s=16777215){let r=new nt;return r.position.set(e,0,t),i.add(r),bn(r,.22,.17,.43,0,.215,0,st(s)),bn(r,.235,.235,.035,0,.45,0,Hr),xi(r,n,.32,.2,0,.25,.205),r}function zr(i,e,t,n=15053173){let s=new nt;return s.position.set(e,0,t),i.add(s),ht(s,.65,.29,.43,0,.17,0,Qa,.055),ht(s,.57,.15,.35,0,.14,0,st(n),.04),ht(s,.69,.05,.47,0,.33,0,Zn,.04),ht(s,.21,.045,.03,0,.3,.24,Hr,.012),s}function Fl(i,e){if(e!=="leaves")for(let t=0;t<3;t++){let n=Jn(i,new pr(.085,.59,16),st(15307841),.17+t*.095,.3,.08-t*.08);n.rotation.z=Math.PI+.15;for(let s=0;s<2;s++){let r=Dn(i,.1,.18+t*.095,.63,.04-t*.08,dn,.42,1.7,.4);r.rotation.z=(s-.5)*.5}}if(e!=="carrots")for(let t=0;t<9;t++){let n=t*2.4,s=Dn(i,.18,-.21+Math.sin(n)*.13,.27+t%3*.1,-.03+Math.cos(n)*.12,st(t%2?6327618:8759387),.7,1.4,.5);s.rotation.z=Math.sin(n)*.6}}function _d(i){ht(i,.86,.09,.47,0,.045,0,Ol,.025);for(let e=0;e<2;e++)for(let t=0;t<3;t++)Dn(i,.115,(t-1)*.25,.18,(e-.5)*.23,st(15984332),.86,1.25,.86)}function Z_(i){let e=[15702836,14511682,15317325];for(let t=0;t<3;t++){let n=(t-1)*.23,s=t===1?-.16:.08;Dn(i,.19,n,.2,s,st(e[t])),bn(i,.012,.012,.075,n,.4,s,dn);let r=Dn(i,.07,n+.05,.42,s,dn,1.4,.25,.6);r.rotation.z=.3}}function md(i){ht(i,.85,.045,.58,0,.03,0,Zn,.04),ht(i,.88,.06,.025,0,.045,.3,Ol,.012)}var ja=document.createElement("canvas");ja.width=ja.height=64;var Bl=ja.getContext("2d"),kl=Bl.createRadialGradient(32,32,4,32,32,32);kl.addColorStop(0,"rgba(24,58,50,.24)");kl.addColorStop(1,"rgba(24,58,50,0)");Bl.fillStyle=kl;Bl.fillRect(0,0,64,64);var J_=new vn(ja);function K_(i,e){let t={Milk:[16250604,"MILK",2599033],"Oat milk":[14799794,"OAT",1587762],Juice:[15250257,"ORANGE",2599033],Cola:[4927524,"COLA",1587762],Water:[13360854,"WATER",8168079],"Sparkling water":[12178113,"SPARKLING",1587762],Tonic:[14476500,"TONIC",1587762],Wine:[5794878,"WINE",1587762],Beer:[8411179,"LAGER",13153135],Cider:[8492892,"CIDER",1587762]},[n,s,r]=t[e],o=["Wine","Beer","Cider"].includes(e),a=[[0,0],[.18,0],[.21,.035],[.215,.1],[.215,.72],[.205,.8],[.17,.86],[.09,.94],[.075,o?1.24:1.04],[0,o?1.24:1.04]].map(([h,u])=>new ye(h,u)),c=st(n,{roughness:.25,metalness:.06});Jn(i,new wr(a,32),c,0,.01,0),bn(i,.087,.087,.065,0,o?1.25:1.06,0,st(r)),xi(i,s,.35,.32,0,.49,.218,"#183a32","#fffef6");let l=st(16777215,{transparent:!0,opacity:.2,depthWrite:!1});if(ht(i,.023,.49,.008,-.13,.44,.175,l,.004),e==="Water"||e==="Sparkling water")for(let h=0;h<3;h++){let u=Jn(i,new Ar(.216,.009,6,32),c,0,.12+h*.075,0);u.rotation.x=Math.PI/2}e==="Beer"&&i.scale.setScalar(.89)}function Q_(i){let e=new nt;switch(i){case"Milk":case"Oat milk":case"Juice":case"Cola":case"Water":case"Sparkling water":case"Tonic":case"Wine":case"Beer":case"Cider":K_(e,i);break;case"Dairy":gd(e,-.2,-.03,.92),ht(e,.35,.2,.3,.27,.11,.15,st(15782269),.025);break;case"Vegetables":Fl(e);break;case"Leftovers":zr(e,-.1,.05,14459749);let n=zr(e,.07,-.04,9347693);n.position.y=.37;break;case"Yogurt":kr(e,-.2,0),kr(e,.22,-.15,"YOGURT").scale.setScalar(.85);break;case"Meat & fish":md(e);let r=ht(e,.59,.16,.32,0,.15,.02,st(15641235),.06);r.rotation.y=-.12;for(let a=0;a<5;a++){let c=ht(e,.014,.005,.3,-.23+a*.105,.234,.02,st(16573136),.002);c.rotation.y=-.12}break;case"Sauces":Ja(e,-.24,.04,7770956,"PESTO");let o=Ja(e,.19,-.05,12613451,"SAUCE");o.scale.y=1.3;break;case"Deli":md(e),bn(e,.22,.22,.18,-.14,.15,0,st(14796443)),ht(e,.3,.16,.3,.22,.15,.07,st(15649140));break;case"Fruit":Z_(e);break;case"Eggs":_d(e);break;case"Snacks":ht(e,.29,.64,.15,-.19,.34,-.04,dn),xi(e,"COCOA",.25,.22,-.19,.42,.04,"#fff","#285840"),Ja(e,.22,.07,9605460,"OLIVES");break;case"Frozen veg":ht(e,.55,.73,.24,0,.38,0,st(12180683),.065),xi(e,"GREENS",.43,.3,0,.38,.125);break;case"Ice cream":kr(e,-.19,.03,"VANILLA",15984332),kr(e,.23,-.15,"MANGO",15978381);break;case"Frozen meals":zr(e,0,0),ht(e,.74,.065,.53,0,.42,0,dn);break;default:zr(e,0,0,12180683)}let t=Jn(e,new tn(1.1,.85),new Rt({map:J_,transparent:!0,depthWrite:!1}),0,.004,.03);return t.rotation.x=-Math.PI/2,e.rotation.y=-.13,e}var Nl=new Map;function j_(i,e){let t=e+" / "+i.name;if(Nl.has(t))return Nl.get(t);let n=new nt;if(e==="Eggs")_d(n);else if(i.name==="Milk"||i.name==="Double cream")gd(n,0,0,i.name==="Milk"?1:.7);else if(e==="Yogurt"||e==="Ice cream"||i.name==="Hummus")kr(n,0,0,i.name.split(" ")[0].toUpperCase());else if(e==="Sauces"||i.name==="Olives")Ja(n,0,0,{Pesto:7837524,Mustard:13147976,"Soy sauce":5323310,"Hot sauce":12739137,Ketchup:11290167}[i.name]??13351300,i.name.split(" ")[0].toUpperCase());else if(e==="Vegetables")if(i.name==="Carrots")Fl(n,"carrots");else if(i.name==="Spinach")Fl(n,"leaves");else if(i.name==="Broccoli"){bn(n,.07,.1,.25,0,.14,0,st(8628581));for(let s=0;s<5;s++)Dn(n,.13,.11*Math.cos(s*2),.28+(s===4?.08:0),.09*Math.sin(s*2),dn)}else i.name==="Cucumber"?Dn(n,.2,0,.13,0,dn,1.55,.65,.65):(Dn(n,.19,0,.2,0,st(13125950)),bn(n,.025,.03,.1,0,.41,0,dn));else if(e==="Fruit"&&i.name!=="Blueberries")Dn(n,.21,0,.22,0,st(i.name==="Apples"?11819845:15702836)),Dn(n,.07,.04,.44,0,dn,1.3,.28,.55);else if(e==="Dairy"||i.name==="Cheese bites"||i.name==="Dark chocolate"){let s=i.name==="Dark chocolate";ht(n,.47,s?.42:.19,.25,0,s?.21:.1,0,s?dn:st(15849098)),xi(n,s?"COCOA":i.name.toUpperCase(),.31,.14,0,s?.23:.1,.128)}else{let s=e==="Meat & fish"?15051666:e==="Frozen veg"?9615226:i.name==="Blueberries"?7828383:15053173;zr(n,0,0,s),xi(n,i.name.split(" ")[0].toUpperCase(),.44,.15,0,.16,.224)}return n.rotation.y=-.1,Nl.set(t,n),n}function ec(i,e){Ka.get(i)?.dispose();let t;try{t=new Bs({alpha:!0,antialias:!0})}catch(y){console.error(y);return}t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setClearColor(0,0),t.outputColorSpace=St,t.toneMapping=Is,t.toneMappingExposure=1;let n=t.domElement;n.className="interior-canvas",n.setAttribute("aria-hidden","true"),i.prepend(n),i.classList.add("modeled");let s=[...i.querySelectorAll(".shelf-row")],r=e.map((y,m)=>{let f=new ki;f.background=new Ye(16251383),f.add(new Vi(16777215,11057838,2.1));let A=new di(16777215,2.4);A.position.set(-2,5,4),f.add(A);let w=new Gi(15335410,1.6,6);w.position.set(0,1,.6),f.add(w);let S=new nt;f.add(S);let I=ht(S,1,2.5,.08,0,.25,-.8,st(15134184),.025),C=ht(S,.14,2.5,1.7,-1,.25,0,Zn,.04),b=ht(S,.14,2.5,1.7,1,.25,0,Zn,.04),T=ht(S,1,.045,1.6,0,-.64,0,Qa,.012),g=ht(S,1,.035,.04,0,-.62,-.74,Zn,.008),x=ht(S,1,.065,.07,0,-.64,.83,st(12180683,{roughness:.25,metalness:.15}),.012),v=ht(S,1,.025,.025,0,1.26,-.48,new Rt({color:16449530}),.005),P=[];for(let O=0;O<4;O++)P.push(ht(S,.3,.016,.008,0,.89+O*.075,-.752,st(13359311),.004));let F=y.map(O=>{let B=Q_(O.name);return B.name=O.name,B.userData.foods=O.foods??[],B.position.y=-.61,f.add(B),B}),D=new Wi(-2,2,1.2,-1.2,.1,30);return D.position.set(0,2.1,9),D.lookAt(0,-.04,0),{scene:f,camera:D,groups:F,back:I,left:C,right:b,floor:T,rearRail:g,frontRail:x,led:v,element:s[m]}}),o=!0,a=0,c=!0,l=0,h=0,u=new ResizeObserver(()=>c=!0);u.observe(i);let d=()=>c=!0;s.forEach(y=>y.addEventListener("scroll",d,{passive:!0}));let p=new MutationObserver(d);p.observe(document.body,{attributes:!0,attributeFilter:["class"]});function _(){if(a=requestAnimationFrame(_),!o||!c||!document.body.classList.contains("inventory-visible"))return;let y=i.clientWidth,m=i.clientHeight;!y||!m||((y!==l||m!==h)&&(t.setSize(y,m,!1),l=y,h=m),t.setScissorTest(!1),t.clear(),t.setScissorTest(!0),r.forEach(f=>{let A={width:f.element.clientWidth,left:f.element.offsetLeft,top:f.element.offsetTop+f.element.parentElement.offsetTop},w=f.element.clientHeight-35,S=A.width/100,I=w/100;f.camera.left=-S/2,f.camera.right=S/2,f.camera.top=I/2,f.camera.bottom=-I/2,f.camera.updateProjectionMatrix(),f.back.scale.x=S,f.left.position.x=-S/2+.035,f.right.position.x=S/2-.035;for(let T of[f.floor,f.frontRail,f.rearRail,f.led])T.scale.x=S-.12;let C=[...f.element.querySelectorAll(".food-card")];f.groups.forEach((T,g)=>{T.position.x=(C[g].offsetLeft-f.element.scrollLeft+C[g].offsetWidth/2-A.width/2)/100});let b=m-A.top-w;t.setViewport(A.left,b,A.width,w),t.setScissor(A.left,b,A.width,w),t.render(f.scene,f.camera)}),c=!1)}_(),Ka.set(i,{scenes:r,root:i,dispose:()=>{o=!1,cancelAnimationFrame(a),u.disconnect(),p.disconnect(),s.forEach(y=>y.removeEventListener("scroll",d)),r.forEach(y=>y.scene.traverse(m=>{m.geometry?.dispose(),m.material&&!Object.values({white:Zn,green:Hr,darkGreen:dn,cream:Ol,orange:Y_,glass:Qa}).includes(m.material)&&m.material.dispose()})),t.dispose(),t.forceContextLoss(),n.remove(),i.classList.remove("modeled")}})}function zl(i="fridge",e=!1){let t=i==="fridge",n=Ka.get(document.querySelector(t?"#shelves":"#drinks-shelves"))?.scenes??[],s=document.querySelector("#shelves").clientWidth/100,r=t?.07:void 0,o=e?pd(n,s,i,j_,r):Ya(n,s,i,r);if(t){let a=Ka.get(document.querySelector("#freezer-shelf"))?.scenes[0]?.groups??[];fd(o,a,e)}return o}var ex=[[{name:"Dairy",icon:"\u{1F95B}",count:4,useSoon:1},{name:"Vegetables",icon:"\u{1F96C}",count:7},{name:"Leftovers",icon:"\u{1F371}",count:2,useSoon:2},{name:"Yogurt",icon:"\u{1F963}",count:3}],[{name:"Meat & fish",icon:"\u{1F41F}",count:3},{name:"Sauces",icon:"\u{1FAD9}",count:6},{name:"Deli",icon:"\u{1F9C0}",count:2}],[{name:"Fruit",icon:"\u{1F34A}",count:5},{name:"Eggs",icon:"\u{1F95A}",count:12},{name:"Snacks",icon:"\u{1F36B}",count:3}]],At;try{let i=JSON.parse(localStorage.getItem("fridge-shelves-v1"));Array.isArray(i)&&i.length>=1&&i.length<=6&&i.every(e=>Array.isArray(e)&&e.every(t=>typeof t.name=="string"&&typeof t.icon=="string"&&Number.isFinite(t.count)))&&(At=i)}catch{}At??=ex;function Hs(i){Array.isArray(i.foods)||(i.foods=cd(i.name)),Object.assign(i,Pl(i.foods))}for(let i of At)for(let e of i)Hs(e);var Hl=i=>Pl(i.foods??[]).useSoon,Qe=i=>document.querySelector(i),Vr=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Kn=Qe("#item-dialog");function tx(){try{localStorage.setItem("fridge-shelves-v1",JSON.stringify(At))}catch{}}function Vl(i,e,t=!0,n=t?e:"frozen"){return`<section class="shelf"><div class="shelf-row" tabindex="0" aria-label="${String(n).startsWith("drinks-")?"Drinks shelf "+(e+1):t?"Shelf "+(e+1):"Freezer"} inventory, scroll horizontally">${i.map((s,r)=>`<button class="food-card${Hl(s)>0?" expiring":""}" data-shelf="${n}" data-item="${r}">${Hl(s)>0?`<span class="expiry-badge">${Hl(s)} use soon</span>`:""}<span class="food-art">${s.icon}</span><span class="food-name">${Vr(s.name)}</span><span class="food-count">${s.count} ${s.count===1?"item":"items"}</span></button>`).join("")}${t?`<button class="add-card" data-add="${e}" aria-label="Add category to shelf ${e+1}"><span>+</span><small>Add</small></button>`:""}</div><div class="shelf-ledge"></div></section>`}var yi=[{name:"Frozen veg",icon:"\u{1F966}"},{name:"Ice cream",icon:"\u{1F368}"},{name:"Frozen meals",icon:"\u{1F95F}"}];try{let i=JSON.parse(localStorage.getItem("fridge-frozen-v1"));if(Array.isArray(i))for(let e of yi){let t=i.find(n=>n.name===e.name);Array.isArray(t?.foods)&&(e.foods=t.foods)}}catch{}yi.forEach(Hs);try{localStorage.setItem("fridge-frozen-v1",JSON.stringify(yi))}catch{}var ji=[[{name:"Milk",icon:"\u{1F95B}"},{name:"Oat milk",icon:"\u{1F95B}"},{name:"Juice",icon:"\u{1F34A}"}],[{name:"Cola",icon:"\u{1F964}"},{name:"Water",icon:"\u{1F4A7}"},{name:"Sparkling water",icon:"\u{1F4A7}"},{name:"Tonic",icon:"\u{1F964}"}],[{name:"Wine",icon:"\u{1F377}"},{name:"Beer",icon:"\u{1F37A}"},{name:"Cider",icon:"\u{1F34E}"}]];try{let i=JSON.parse(localStorage.getItem("fridge-drinks-v1"));if(Array.isArray(i))for(let e of ji.flat()){let t=i.flat().find(n=>n.name===e.name);Array.isArray(t?.foods)&&(e.foods=t.foods)}}catch{}ji.flat().forEach(Hs);function Wl(){return[{name:"Fridge",categories:At.flat()},{name:"Freezer",categories:yi},{name:"Drinks",categories:ji.flat()}]}function Xl(){return Wl().flatMap(i=>i.categories.flatMap(e=>e.foods))}try{localStorage.setItem("fridge-drinks-v1",JSON.stringify(ji))}catch{}Qe("#drinks-shelves").innerHTML=ji.map((i,e)=>Vl(i,e,!1,"drinks-"+e)).join("");ec(Qe("#drinks-shelves"),ji);function tc(){At.flat().forEach(Hs),yi.forEach(Hs),Qe("#shelves").innerHTML=At.map((i,e)=>Vl(i,e)).join(""),Qe("#shelf-count").textContent=At.length,Qe("#shelf-less").disabled=At.length<=1,Qe("#shelf-more").disabled=At.length>=6,Qe("#freezer-shelf").innerHTML=Vl(yi,0,!1),ec(Qe("#shelves"),At),ec(Qe("#freezer-shelf"),[yi]),tx()}Qe("#shelf-more").onclick=()=>{At.length<6&&(At.push([]),tc())};Qe("#shelf-less").onclick=()=>{if(At.length>1){let i=At.pop();At.at(-1).push(...i),tc(),Qe("#inventory-note").textContent="Categories from the removed shelf moved to the shelf above."}};var Gr=null;function Gl(i,e){Kn.classList.remove("food-detail"),Qe("#dialog-title").textContent=i,Qe("#dialog-body").innerHTML=e,Kn.showModal()}function xd(i){let e=_i(i),t=i.expiresOn?new Date(i.expiresOn+"T12:00:00").toLocaleDateString("en-GB",{day:"numeric",month:"short"}):"";return`<article class="food-entry${e.urgent?" urgent":""}"><span class="entry-icon" aria-hidden="true">${Vr(i.icon)}</span><div class="entry-info"><h3>${Vr(i.name)}</h3><p>${Vr(i.portion)}</p><div class="entry-expiry"><span class="freshness">${e.label}</span>${t?`<time datetime="${Vr(i.expiresOn)}">${t}</time>`:""}</div></div></article>`}function ql(i){Gr=null,Gl(i.name,'<div class="food-list">'+xd(i)+"</div>"),Kn.classList.add("food-detail")}Qe("#inventory").addEventListener("click",i=>{let e=i.target.closest("[data-add]");if(e){Gr={shelf:Number(e.dataset.add),item:null},Gl("Add category",'<label>Category name<input id="category-name" maxlength="32" required placeholder="e.g. Breakfast" autocomplete="off"></label><button class="save-item" type="submit">Add to shelf</button>');return}let t=i.target.closest("[data-item]");if(t){let n=t.dataset.shelf==="frozen",r=(t.dataset.shelf.startsWith("drinks-")?ji[Number(t.dataset.shelf.split("-")[1])]:n?yi:At[Number(t.dataset.shelf)])[Number(t.dataset.item)];Gr=null,Hs(r);let o=[...r.foods].sort((a,c)=>(a.expiresOn||"9999").localeCompare(c.expiresOn||"9999"));Gl(r.name,`<p class="category-summary">${r.count} ${r.count===1?"item":"items"}${r.useSoon?` <span>${r.useSoon} use soon</span>`:""}</p><div class="food-list">${o.length?o.map(xd).join(""):'<p class="empty-category">No food in this category yet.</p>'}</div>`),Kn.classList.add("food-detail")}});Qe("#category-form").onsubmit=i=>{if(i.preventDefault(),!Gr)return;let e=Qe("#category-name").value.trim();e&&(At[Gr.shelf].push({name:e,count:0,icon:"\u{1F9FA}",foods:[]}),tc(),Kn.close())};Qe("#dialog-close").onclick=()=>Kn.close();Kn.addEventListener("click",i=>{i.target===Kn&&Kn.close()});for(let i of document.querySelectorAll("[data-section]"))i.onclick=()=>window.dispatchEvent(new CustomEvent("cabinet-select",{detail:"fridge"}));Qe("#list-button").onclick=()=>window.dispatchEvent(new Event("list-select"));Qe("#recipe-button").onclick=()=>window.dispatchEvent(new Event("recipe-select"));Qe("#menu-button").onclick=()=>window.dispatchEvent(new Event("menu-select"));tc();var It=null,Wr=0;Qe("#inventory").addEventListener("pointerdown",i=>{let e=i.target.closest(".shelf-row");e&&(It={row:e,x:i.clientX,y:i.clientY,left:e.scrollLeft,id:i.pointerId,moved:!1})});Qe("#inventory").addEventListener("pointermove",i=>{if(!It||It.id!==i.pointerId)return;let e=i.clientX-It.x,t=i.clientY-It.y;if(!It.moved&&Math.abs(t)>Math.abs(e)&&Math.abs(t)>8){It=null;return}Math.abs(e)>8&&!It.moved&&(It.moved=!0,It.row.style.scrollSnapType="none",It.row.setPointerCapture(i.pointerId)),It.moved&&(i.preventDefault(),It.row.scrollLeft=It.left-e,Wr=performance.now()+350)},{passive:!1});function yd(){It?.moved&&(It.row.style.scrollSnapType="",Wr=performance.now()+350),It=null}Qe("#inventory").addEventListener("pointerup",yd);Qe("#inventory").addEventListener("pointercancel",yd);Qe("#inventory").addEventListener("click",i=>{performance.now()<Wr&&(i.preventDefault(),i.stopImmediatePropagation())},!0);var sn=null;Qe("#inventory").addEventListener("touchstart",i=>{let e=i.target.closest(".shelf-row");if(!e||i.touches.length!==1)return;let t=i.touches[0];sn={row:e,x:t.clientX,y:t.clientY,left:e.scrollLeft,moved:!1}},{passive:!0});Qe("#inventory").addEventListener("touchmove",i=>{if(!sn||i.touches.length!==1)return;let e=i.touches[0],t=e.clientX-sn.x,n=e.clientY-sn.y;if(!sn.moved&&Math.abs(n)>Math.abs(t)&&Math.abs(n)>8){sn=null;return}Math.abs(t)>8&&(i.preventDefault(),sn.moved=!0,sn.row.style.scrollSnapType="none",sn.row.scrollLeft=sn.left-t,Wr=performance.now()+500)},{passive:!1});function vd(){sn?.moved&&(sn.row.style.scrollSnapType="",Wr=performance.now()+500),sn=null}Qe("#inventory").addEventListener("touchend",vd);Qe("#inventory").addEventListener("touchcancel",vd);var Md=new Map;function es(i,e,t){for(let n of t.split(" "))Md.set(n,{dimension:i,factor:e})}es("g",1,"g gram grams gramme grammes");es("g",1e3,"kg kilogram kilograms");es("ml",1,"ml millilitre millilitres milliliter milliliters");es("ml",1e3,"l litre litres liter liters");es("ml",5,"tsp teaspoon teaspoons");es("ml",15,"tbsp tablespoon tablespoons");for(let i of["bag","bottle","box","container","fillet","handful","head","jar","pack","portion","pot","punnet","slice","tub","clove","pinch","can"])es(i,1,i+" "+(i==="box"?"boxes":i+"s"));var nx={"\xBD":"1/2","\xBC":"1/4","\xBE":"3/4","\u2153":"1/3","\u2154":"2/3"};function Yl(i){return String(i??"").toLowerCase().replace(/[½¼¾⅓⅔]/g,e=>" "+nx[e]).replace(/[-‐‑](?=[a-z])/g," ").replace(/\s+/g," ").trim()}var ix=/^(\d+\s+\d+\/\d+|\d+\/\d+|\d*\.\d+|\d+)(?=\s|[a-z]|$)\s*/;function Sd(i){let e=i.match(ix);if(!e)return{name:i,dimension:"presence",amount:1};let t=e[1].split(/\s+/).reduce((o,a)=>{let[c,l=1]=a.split("/").map(Number);return o+c/l},0),n=i.slice(e[0].length),s=n.match(/^[a-z]+\b/)?.[0],r=Md.get(s);return r&&(n=n.slice(s.length).trim().replace(/^of\s+/,"")),{name:n,dimension:r?.dimension??"count",amount:t*(r?.factor??1)}}var sx=new Map(Object.entries({"free range egg":"egg","whole milk":"milk","cheddar cheese":"cheddar","still mineral water":"water","garlic clove":"garlic"})),rx={potatoes:"potato",tomatoes:"tomato",leaves:"leaf",loaves:"loaf",knives:"knife"};function bd(i){let e=Yl(i).replace(/\s+(?:to taste|as needed)$/,"").replace(/\b(?:grated|diced|sliced|peeled|ripe|finely|chopped|shredded|large|small|medium)\s+/g,"").trim().split(/\s+/),t=e.pop(),n=rx[t]??t.replace(/ies$/,"y").replace(/(?<!s|u|i)s$/,""),s=[...e,n].join(" ");return sx.get(s)??s}function $l(i,e=new Date){let t=[];for(let n of i){if(!(n.quantity>0)||!n.name||(gi(n.expiresOn,e)??0)<0)continue;let s={count:n.quantity},r=Yl(n.portion),o=r.match(/^(\d+)\s*[×x]\s*(.+)$/),a=Sd(o?o[2]:r);a.dimension!=="presence"&&a.dimension!=="count"&&!a.name&&(s[a.dimension]=a.amount*(o?Number(o[1]):1)),t.push({name:bd(n.name),amounts:s})}return t}function ox(i){return Yl(i).replace(/,\s*(?:finely |roughly )?(?:chopped|diced|sliced|peeled|drained|grated|to taste)$/,"").split(/\s+(?:and|&)\s+/).map(t=>{let n=Sd(t.replace(/^(?:a|an)\s+/,"1 "));return n.name=bd(n.name),n})}function ax({name:i,dimension:e,amount:t},n,s){if(!i||!Number.isFinite(t)||t<=0)return"unknown";let r=!1,o=!1,a=t;for(let[c,l]of n.entries()){if(l.name!==i)continue;if(r=!0,e==="presence")return"ready";let h=l.amounts[e];if(!h){s[c]>0&&(o=!0);continue}let u=Math.min(a,s[c]*h);if(a-=u,s[c]-=u/h,a<1e-8)return"ready"}return r?o?"unknown":"short":"missing"}function Zl(i,e){let t=i.ingredients.map(()=>"ready"),n=e.map(()=>1),s=i.ingredients.flatMap((a,c)=>ox(a).map(l=>({...l,index:c}))),r=a=>a==="presence"?0:a==="count"?2:1;s.sort((a,c)=>r(a.dimension)-r(c.dimension));let o={ready:0,unknown:1,short:2,missing:3};for(let a of s){let c=ax(a,e,n);o[c]>o[t[a.index]]&&(t[a.index]=c)}return t}function Ed(i,e){let t=Zl(i,e);return t.length>0&&t.every(n=>n==="ready")}var Td="fridge-recipes-v1",Jl=["\u{1F957}","\u{1F35D}","\u{1F35C}","\u{1F35A}","\u{1F96A}","\u{1F372}","\u{1F373}","\u{1F95E}","\u{1F32E}","\u{1F355}","\u{1F954}","\u{1F966}"],cx=[{id:"spinach-eggs",name:"Spinach & eggs",icon:"\u{1F957}",minutes:15,servings:1,ingredients:["2 eggs","2 handfuls spinach","30 g cheddar","1 tsp mustard","1 tsp olive oil"],steps:["Boil the eggs for 9 minutes, then cool, peel and slice.","Wash the spinach and place it in a bowl. Add the sliced eggs and grated cheddar.","Mix the mustard and olive oil, drizzle over the salad and serve."]},{id:"tomato-pasta",name:"Tomato pasta",icon:"\u{1F35D}",minutes:20,servings:2,ingredients:["180 g pasta","400 g chopped tomatoes","2 garlic cloves","1 tbsp olive oil","20 g parmesan","Salt and pepper"],steps:["Bring a pan of salted water to the boil. Cook the pasta according to the packet.","Finely chop the garlic. Warm the oil in a pan and gently cook the garlic for 1 minute.","Add the tomatoes and simmer for 10 minutes. Season to taste.","Drain the pasta, keeping a little cooking water. Toss with the sauce and a splash of the water, then top with parmesan."]},{id:"vegetable-rice",name:"Veggie rice",icon:"\u{1F35A}",minutes:25,servings:2,ingredients:["150 g uncooked rice","1 carrot, diced","100 g frozen peas","2 eggs","1 tbsp soy sauce","1 tbsp vegetable oil"],steps:["Cook the rice according to its packet instructions and drain well.","Heat the oil in a large pan. Cook the diced carrot for 4 minutes, then add the peas.","Push the vegetables aside and scramble the eggs in the pan.","Add the rice and soy sauce. Stir over the heat until everything is hot, then serve."]},{id:"avocado-toast",name:"Avocado toast",icon:"\u{1F96A}",minutes:10,servings:1,ingredients:["2 slices bread","1 ripe avocado","1 tsp lemon juice","A pinch of chilli flakes","Salt and pepper"],steps:["Toast the bread until golden.","Mash the avocado with the lemon juice, salt and pepper.","Spread over the toast and finish with chilli flakes."]},{id:"vegetable-soup",name:"Vegetable soup",icon:"\u{1F372}",minutes:30,servings:3,ingredients:["1 onion","2 carrots","1 potato","100 g peas","750 ml vegetable stock","1 tbsp olive oil"],steps:["Peel and dice the onion, carrots and potato.","Heat the oil in a saucepan. Cook the onion for 5 minutes until softened.","Add the carrots, potato and stock. Simmer for 18 minutes, or until the vegetables are tender.","Add the peas and simmer for another 3 minutes. Season and serve."]},{id:"cheese-omelette",name:"Cheese omelette",icon:"\u{1F373}",minutes:10,servings:1,ingredients:["2 eggs","30 g cheddar","1 tsp butter","Salt and pepper"],steps:["Beat the eggs with a pinch of salt and pepper. Grate the cheese.","Melt the butter in a small pan over medium heat. Pour in the eggs and gently move the cooked edges towards the centre.","When the egg is set, scatter over the cheese, fold the omelette and serve."]},{id:"banana-pancakes",name:"Banana pancakes",icon:"\u{1F95E}",minutes:20,servings:2,ingredients:["1 ripe banana","1 egg","100 g plain flour","120 ml milk","1 tsp baking powder","1 tsp vegetable oil"],steps:["Mash the banana. Whisk in the egg and milk.","Stir in the flour and baking powder until just combined.","Lightly oil a pan over medium heat. Add small spoonfuls of batter.","Cook until bubbles form, flip and cook the other side until golden and cooked through."]},{id:"bean-tacos",name:"Bean tacos",icon:"\u{1F32E}",minutes:15,servings:2,ingredients:["4 small tortillas","400 g canned beans, drained","1 tomato","1 handful lettuce","30 g cheddar","1 tsp ground cumin"],steps:["Warm the beans in a pan with the cumin and a splash of water.","Dice the tomato, shred the lettuce and grate the cheese.","Warm the tortillas and fill them with the beans. Add the vegetables and cheese."]},{id:"pesto-potatoes",name:"Pesto potatoes",icon:"\u{1F954}",minutes:30,servings:2,ingredients:["400 g baby potatoes","2 tbsp pesto","1 tbsp olive oil","20 g parmesan"],steps:["Heat the oven to 200\xB0C. Halve the potatoes and toss with the oil.","Spread on a baking tray and roast for 25 minutes, turning halfway, until tender.","Toss with the pesto and sprinkle over the parmesan."]}],wd=i=>String(i??"").split(/\r?\n/).map(e=>e.trim()).filter(Boolean);function Kl(i,e){let t=String(i.name??"").trim(),n=Number(i.minutes),s=Number(i.servings),r=Array.isArray(i.ingredients)?i.ingredients:wd(i.ingredients),o=Array.isArray(i.steps)?i.steps:wd(i.steps);if(!t||t.length>60)throw new Error("Enter a recipe name (up to 60 characters).");if(!Number.isInteger(n)||n<1||n>1440)throw new Error("Enter a cooking time between 1 and 1,440 minutes.");if(!Number.isInteger(s)||s<1||s>50)throw new Error("Enter between 1 and 50 servings.");if(!r.length||r.length>40||r.some(a=>typeof a!="string"||!a.trim()||a.length>180))throw new Error("Add 1\u201340 ingredients, one per line (up to 180 characters each).");if(!o.length||o.length>30||o.some(a=>typeof a!="string"||!a.trim()||a.length>1200))throw new Error("Add 1\u201330 steps, one per line (up to 1,200 characters each).");return{id:e,name:t,icon:Jl.includes(i.icon)?i.icon:"\u{1F372}",minutes:n,servings:s,ingredients:r.map(a=>a.trim()),steps:o.map(a=>a.trim())}}function Ad(i){try{let e=i.getItem(Td);if(e!==null){let t=JSON.parse(e);if(!Array.isArray(t))throw new Error("Invalid recipe data");let n=new Set;return t.map(s=>{if(typeof s.id!="string"||!s.id||n.has(s.id))throw new Error("Invalid recipe ID");return n.add(s.id),Kl(s,s.id)})}}catch{}return structuredClone(cx)}function Cd(i,e){i.setItem(Td,JSON.stringify(e))}function Rd(i,e){return i.filter(t=>t.id!==e)}var Ln=document.querySelector("#recipes-page"),qt=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Dd='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7"/></svg>',Yt=Ad(localStorage),vi=null,qr=!1,Ql="list",Ld="list",Xr=null,Id;Ln.innerHTML=`<section class="recipe-pane recipe-library" data-pane="list" aria-label="Recipe library">
 <header class="recipe-heading"><div><p class="recipe-eyebrow">YOUR COLLECTION</p><h1>Recipes<span>.</span></h1></div><button class="recipe-add" aria-label="Add recipe">+</button></header>
 <div class="recipe-list-tools"><span id="recipe-count"></span><button id="recipe-manage">Manage</button></div>
 <div class="recipe-grid"></div><div class="recipe-empty" hidden><span>\u{1F37D}\uFE0F</span><h2>Your recipe book is empty</h2><button class="recipe-primary" id="recipe-empty-add">Add a recipe</button></div>
 </section>
 <section class="recipe-pane recipe-detail" data-pane="detail" aria-label="Recipe details" inert></section>
 <section class="recipe-pane recipe-editor" data-pane="editor" aria-label="Recipe editor" inert></section>
 <div class="recipe-toast" role="status" hidden><span></span><button type="button">Undo</button></div>`;var Mt=i=>Ln.querySelector(i);function Vs(i){Ql=i,Ln.dataset.view=i;for(let e of Ln.querySelectorAll("[data-pane]"))e.inert=e.dataset.pane!==i}function Ud(i){requestAnimationFrame(()=>Mt(i+" h1")?.focus({preventScroll:!0}))}function Gs(){Mt("#recipe-count").textContent=`${Yt.length} ${Yt.length===1?"recipe":"recipes"}`,Mt("#recipe-manage").textContent=qr?"Done":"Manage",Mt("#recipe-manage").hidden=!Yt.length,Mt("#recipe-manage").setAttribute("aria-pressed",String(qr));let i=$l(Xl());Mt(".recipe-grid").innerHTML=Yt.map(e=>{let t=Ed(e,i);return`<article class="recipe-tile"><button class="recipe-card" data-recipe="${qt(e.id)}" aria-label="Open ${qt(e.name)}${t?", ingredients available":""}"><span class="recipe-logo" aria-hidden="true">${qt(e.icon)}${t?'<span class="recipe-ready"><svg viewBox="0 0 16 16"><path d="m3.5 8 3 3 6-6"/></svg></span>':""}</span><strong>${qt(e.name)}</strong><small>${e.minutes} min</small></button>${qr?`<button class="recipe-remove" data-delete="${qt(e.id)}" aria-label="Delete ${qt(e.name)}">\u2212</button>`:""}</article>`}).join(""),Mt(".recipe-empty").hidden=Yt.length>0}function jl(i){try{return Cd(localStorage,i),Yt=i,!0}catch{return nc("Could not save. Please try again."),!1}}function nc(i,e=!1){clearTimeout(Id),Mt(".recipe-toast span").textContent=i,Mt(".recipe-toast button").hidden=!e,Mt(".recipe-toast").hidden=!1,Id=setTimeout(()=>{Mt(".recipe-toast").hidden=!0},6500)}var lx={ready:"In stock",missing:"Missing",short:"Not enough",unknown:"Check amount"};function hx(i,e){let t=e==="ready";return`<li class="ingredient-${t?"ready":"warning"}">
  <span class="ingredient-name">${qt(i)}</span>
  <span class="ingredient-status"><span class="ingredient-symbol" aria-hidden="true">${t?"\u2713":"!"}</span><span${t?' class="sr-only"':""}>${lx[e]}</span></span>
 </li>`}function eh(i){let e=Yt.find(n=>n.id===i);if(!e)return;vi=i;let t=Zl(e,$l(Xl()));Mt(".recipe-detail").innerHTML=`<header class="recipe-subnav"><button class="recipe-back recipe-circle" aria-label="Back to recipes">${Dd}</button><button class="recipe-edit" type="button">Edit</button></header>
 <div class="recipe-hero"><div class="recipe-hero-logo" aria-hidden="true">${qt(e.icon)}</div><h1 tabindex="-1">${qt(e.name)}</h1><div class="recipe-meta"><span>\u25F7 ${e.minutes} min</span><span>${e.servings} ${e.servings===1?"serving":"servings"}</span></div></div>
 <section class="recipe-ingredients"><h2>Ingredients <small>${e.ingredients.length}</small></h2><ul>${e.ingredients.map((n,s)=>hx(n,t[s])).join("")}</ul></section>
 <section class="recipe-method"><h2>Method</h2><ol>${e.steps.map((n,s)=>`<li><span aria-hidden="true">${s+1}</span><p>${qt(n)}</p></li>`).join("")}</ol></section>
 <button class="recipe-delete-text" data-delete="${qt(e.id)}">Delete recipe</button>`,Mt(".recipe-detail").scrollTop=0,Vs("detail"),Ud(".recipe-detail")}function Pd(i=null){Ld=i?"detail":"list",vi=i?.id??null,Mt(".recipe-editor").innerHTML=`<header class="recipe-subnav"><button class="recipe-editor-back recipe-circle" aria-label="Cancel recipe changes">${Dd}</button><span>${i?"Edit recipe":"New recipe"}</span></header>
 <h1 tabindex="-1">${i?"Make it yours.":"Add a recipe."}</h1>
 <form id="recipe-form"><fieldset class="recipe-icon-picker"><legend>Dish icon</legend>${Jl.map(e=>`<label><input type="radio" name="icon" value="${e}" ${(i?.icon??"\u{1F372}")===e?"checked":""}><span>${e}</span></label>`).join("")}</fieldset>
 <label class="recipe-field">Recipe name<input name="name" maxlength="60" required value="${qt(i?.name??"")}" placeholder="e.g. Mushroom pasta"></label>
 <div class="recipe-form-row"><label class="recipe-field">Time (minutes)<input name="minutes" type="number" min="1" max="1440" required value="${i?.minutes??20}" inputmode="numeric"></label><label class="recipe-field">Servings<input name="servings" type="number" min="1" max="50" required value="${i?.servings??2}" inputmode="numeric"></label></div>
 <label class="recipe-field">Ingredients <small>One ingredient and its amount per line</small><textarea name="ingredients" rows="5" maxlength="7200" required placeholder="200 g pasta&#10;150 g mushrooms">${qt(i?.ingredients.join(`
`)??"")}</textarea></label>
 <label class="recipe-field">Method <small>One step per line</small><textarea name="steps" rows="6" maxlength="36000" required placeholder="Bring a pan of water to the boil.&#10;Slice and saut\xE9 the mushrooms.">${qt(i?.steps.join(`
`)??"")}</textarea></label>
 <p class="recipe-form-error" role="alert" hidden></p><button class="recipe-primary" type="submit">Save recipe</button></form>`,Mt(".recipe-editor").scrollTop=0,Vs("editor"),Ud(".recipe-editor"),Mt("#recipe-form").onsubmit=e=>{e.preventDefault();try{let t=Object.fromEntries(new FormData(e.currentTarget)),n=vi??crypto.randomUUID(),s=Kl(t,n),r=vi?Yt.map(o=>o.id===vi?s:o):[s,...Yt];if(!jl(r))return;Gs(),eh(n),nc("Recipe saved")}catch(t){Mt(".recipe-form-error").hidden=!1,Mt(".recipe-form-error").textContent=t.message}}}function Nd(){Ql==="editor"&&Ld==="detail"?eh(vi):(Vs("list"),requestAnimationFrame(()=>(Ln.querySelector(`[data-recipe="${CSS.escape(vi??"")}"]`)??Mt(".recipe-add")).focus({preventScroll:!0})))}Ln.addEventListener("click",i=>{let e=i.target.closest("[data-recipe]");if(e){eh(e.dataset.recipe);return}let t=i.target.closest("[data-delete]");if(t){let n=Yt.findIndex(r=>r.id===t.dataset.delete);if(n<0)return;let s=Yt[n];if(!jl(Rd(Yt,s.id)))return;Xr={record:s,index:n},Gs(),Vs("list"),nc("Recipe deleted",!0);return}i.target.closest(".recipe-add,#recipe-empty-add")&&Pd(),i.target.closest(".recipe-edit")&&Pd(Yt.find(n=>n.id===vi)),i.target.closest(".recipe-back,.recipe-editor-back")&&Nd()});Mt("#recipe-manage").onclick=()=>{qr=!qr,Gs()};Mt(".recipe-toast button").onclick=()=>{if(!Xr)return;let i=[...Yt];i.splice(Xr.index,0,Xr.record),jl(i)&&(Xr=null,Gs(),nc("Recipe restored"))};window.addEventListener("recipes-show",()=>{Ln.inert=!1,Ln.setAttribute("aria-hidden","false"),Gs(),Vs("list")});window.addEventListener("recipes-hide",()=>{Ln.inert=!0,Ln.setAttribute("aria-hidden","true"),Mt(".recipe-toast").hidden=!0});document.addEventListener("keydown",i=>{i.key==="Escape"&&document.body.classList.contains("recipes-open")&&!document.querySelector("dialog[open]")&&Ql!=="list"&&(i.preventDefault(),i.stopImmediatePropagation(),Nd())},!0);Gs();Vs("list");var Si=document.querySelector("#list-page"),Qn=Si.querySelector("#stock-search"),ux=Si.querySelector("#stock-results"),dx=Si.querySelector("#stock-summary");function Mi(i,e,t){let n=document.createElement(i);return n.className=e,n.textContent=t,n}function th(){let i=Qn.value.toLowerCase().trim().split(/\s+/).filter(Boolean),e=document.createDocumentFragment(),t=0;for(let n of Wl()){let s=document.createElement("section");s.append(Mi("h2","stock-zone",n.name));for(let r of n.categories){let o=r.foods.filter(h=>{let u=[n.name,r.name,h.name].join(" ").toLowerCase();return h.quantity>0&&i.every(d=>u.includes(d))});if(!o.length)continue;t+=o.length;let a=o.reduce((h,u)=>h+u.quantity,0),c=Mi("h3","stock-category",r.name);c.append(Mi("small","stock-total",a+(a===1?" item":" items")));let l=document.createElement("ul");l.className="stock-items";for(let h of o){let u=document.createElement("li"),d=Mi("span","stock-icon",h.icon);d.setAttribute("aria-hidden","true");let p=Mi("span","stock-description",h.name);h.portion&&p.append(Mi("small","stock-portion",h.portion)),u.append(d,p,Mi("span","stock-quantity","\xD7 "+h.quantity)),l.append(u)}s.append(c,l)}s.childElementCount>1&&e.append(s)}t||e.append(Mi("p","stock-empty",i.length?"No matching items":"Your inventory is empty")),ux.replaceChildren(e),dx.textContent=t+(t===1?" result":" results")}Qn.addEventListener("input",()=>{th(),Si.scrollTop=0});Qn.addEventListener("keydown",i=>{i.key==="Enter"&&Qn.blur(),i.key==="Escape"&&(i.stopPropagation(),Qn.value?(i.preventDefault(),Qn.value="",th()):Qn.blur())});window.addEventListener("list-show",()=>{Qn.value="",th(),Si.hidden=!1,Si.scrollTop=0,Si.querySelector("h1").focus({preventScroll:!0})});window.addEventListener("list-hide",()=>{Qn.blur(),Si.hidden=!0});var Ws=function(i,e){let s=i,r=Yr[e],o=null,a=0,c=null,l=[],h={},u=function(b,T){a=s*4+17,o=(function(g){let x=new Array(g);for(let v=0;v<g;v+=1){x[v]=new Array(g);for(let P=0;P<g;P+=1)x[v][P]=null}return x})(a),d(0,0),d(a-7,0),d(0,a-7),y(),_(),f(b,T),s>=7&&m(b),c==null&&(c=S(s,r,l)),A(c,T)},d=function(b,T){for(let g=-1;g<=7;g+=1)if(!(b+g<=-1||a<=b+g))for(let x=-1;x<=7;x+=1)T+x<=-1||a<=T+x||(0<=g&&g<=6&&(x==0||x==6)||0<=x&&x<=6&&(g==0||g==6)||2<=g&&g<=4&&2<=x&&x<=4?o[b+g][T+x]=!0:o[b+g][T+x]=!1)},p=function(){let b=0,T=0;for(let g=0;g<8;g+=1){u(!0,g);let x=Ei.getLostPoint(h);(g==0||b>x)&&(b=x,T=g)}return T},_=function(){for(let b=8;b<a-8;b+=1)o[b][6]==null&&(o[b][6]=b%2==0);for(let b=8;b<a-8;b+=1)o[6][b]==null&&(o[6][b]=b%2==0)},y=function(){let b=Ei.getPatternPosition(s);for(let T=0;T<b.length;T+=1)for(let g=0;g<b.length;g+=1){let x=b[T],v=b[g];if(o[x][v]==null)for(let P=-2;P<=2;P+=1)for(let F=-2;F<=2;F+=1)P==-2||P==2||F==-2||F==2||P==0&&F==0?o[x+P][v+F]=!0:o[x+P][v+F]=!1}},m=function(b){let T=Ei.getBCHTypeNumber(s);for(let g=0;g<18;g+=1){let x=!b&&(T>>g&1)==1;o[Math.floor(g/3)][g%3+a-8-3]=x}for(let g=0;g<18;g+=1){let x=!b&&(T>>g&1)==1;o[g%3+a-8-3][Math.floor(g/3)]=x}},f=function(b,T){let g=r<<3|T,x=Ei.getBCHTypeInfo(g);for(let v=0;v<15;v+=1){let P=!b&&(x>>v&1)==1;v<6?o[v][8]=P:v<8?o[v+1][8]=P:o[a-15+v][8]=P}for(let v=0;v<15;v+=1){let P=!b&&(x>>v&1)==1;v<8?o[8][a-v-1]=P:v<9?o[8][15-v-1+1]=P:o[8][15-v-1]=P}o[a-8][8]=!b},A=function(b,T){let g=-1,x=a-1,v=7,P=0,F=Ei.getMaskFunction(T);for(let D=a-1;D>0;D-=2)for(D==6&&(D-=1);;){for(let O=0;O<2;O+=1)if(o[x][D-O]==null){let B=!1;P<b.length&&(B=(b[P]>>>v&1)==1),F(x,D-O)&&(B=!B),o[x][D-O]=B,v-=1,v==-1&&(P+=1,v=7)}if(x+=g,x<0||a<=x){x-=g,g=-g;break}}},w=function(b,T){let g=0,x=0,v=0,P=new Array(T.length),F=new Array(T.length);for(let H=0;H<T.length;H+=1){let k=T[H].dataCount,X=T[H].totalCount-k;x=Math.max(x,k),v=Math.max(v,X),P[H]=new Array(k);for(let de=0;de<P[H].length;de+=1)P[H][de]=255&b.getBuffer()[de+g];g+=k;let j=Ei.getErrorCorrectPolynomial(X),Me=$r(P[H],j.getLength()-1).mod(j);F[H]=new Array(j.getLength()-1);for(let de=0;de<F[H].length;de+=1){let He=de+Me.getLength()-F[H].length;F[H][de]=He>=0?Me.getAt(He):0}}let D=0;for(let H=0;H<T.length;H+=1)D+=T[H].totalCount;let O=new Array(D),B=0;for(let H=0;H<x;H+=1)for(let k=0;k<T.length;k+=1)H<P[k].length&&(O[B]=P[k][H],B+=1);for(let H=0;H<v;H+=1)for(let k=0;k<T.length;k+=1)H<F[k].length&&(O[B]=F[k][H],B+=1);return O},S=function(b,T,g){let x=Fd.getRSBlocks(b,T),v=Od();for(let F=0;F<g.length;F+=1){let D=g[F];v.put(D.getMode(),4),v.put(D.getLength(),Ei.getLengthInBits(D.getMode(),b)),D.write(v)}let P=0;for(let F=0;F<x.length;F+=1)P+=x[F].dataCount;if(v.getLengthInBits()>P*8)throw"code length overflow. ("+v.getLengthInBits()+">"+P*8+")";for(v.getLengthInBits()+4<=P*8&&v.put(0,4);v.getLengthInBits()%8!=0;)v.putBit(!1);for(;!(v.getLengthInBits()>=P*8||(v.put(236,8),v.getLengthInBits()>=P*8));)v.put(17,8);return w(v,x)};h.addData=function(b,T){T=T||"Byte";let g=null;switch(T){case"Numeric":g=fx(b);break;case"Alphanumeric":g=px(b);break;case"Byte":g=mx(b);break;case"Kanji":g=gx(b);break;default:throw"mode:"+T}l.push(g),c=null},h.isDark=function(b,T){if(b<0||a<=b||T<0||a<=T)throw b+","+T;return o[b][T]},h.getModuleCount=function(){return a},h.make=function(){if(s<1){let b=1;for(;b<40;b++){let T=Fd.getRSBlocks(b,r),g=Od();for(let v=0;v<l.length;v++){let P=l[v];g.put(P.getMode(),4),g.put(P.getLength(),Ei.getLengthInBits(P.getMode(),b)),P.write(g)}let x=0;for(let v=0;v<T.length;v++)x+=T[v].dataCount;if(g.getLengthInBits()<=x*8)break}s=b}u(!1,p())},h.createTableTag=function(b,T){b=b||2,T=typeof T>"u"?b*4:T;let g="";g+='<table style="',g+=" border-width: 0px; border-style: none;",g+=" border-collapse: collapse;",g+=" padding: 0px; margin: "+T+"px;",g+='">',g+="<tbody>";for(let x=0;x<h.getModuleCount();x+=1){g+="<tr>";for(let v=0;v<h.getModuleCount();v+=1)g+='<td style="',g+=" border-width: 0px; border-style: none;",g+=" border-collapse: collapse;",g+=" padding: 0px; margin: 0px;",g+=" width: "+b+"px;",g+=" height: "+b+"px;",g+=" background-color: ",g+=h.isDark(x,v)?"#000000":"#ffffff",g+=";",g+='"/>';g+="</tr>"}return g+="</tbody>",g+="</table>",g},h.createSvgTag=function(b,T,g,x){let v={};typeof arguments[0]=="object"&&(v=arguments[0],b=v.cellSize,T=v.margin,g=v.alt,x=v.title),b=b||2,T=typeof T>"u"?b*4:T,g=typeof g=="string"?{text:g}:g||{},g.text=g.text||null,g.id=g.text?g.id||"qrcode-description":null,x=typeof x=="string"?{text:x}:x||{},x.text=x.text||null,x.id=x.text?x.id||"qrcode-title":null;let P=h.getModuleCount()*b+T*2,F,D,O,B,H="",k;for(k="l"+b+",0 0,"+b+" -"+b+",0 0,-"+b+"z ",H+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',H+=v.scalable?"":' width="'+P+'px" height="'+P+'px"',H+=' viewBox="0 0 '+P+" "+P+'" ',H+=' preserveAspectRatio="xMinYMin meet"',H+=x.text||g.text?' role="img" aria-labelledby="'+I([x.id,g.id].join(" ").trim())+'"':"",H+=">",H+=x.text?'<title id="'+I(x.id)+'">'+I(x.text)+"</title>":"",H+=g.text?'<description id="'+I(g.id)+'">'+I(g.text)+"</description>":"",H+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',H+='<path d="',O=0;O<h.getModuleCount();O+=1)for(B=O*b+T,F=0;F<h.getModuleCount();F+=1)h.isDark(O,F)&&(D=F*b+T,H+="M"+D+","+B+k);return H+='" stroke="transparent" fill="black"/>',H+="</svg>",H},h.createDataURL=function(b,T){b=b||2,T=typeof T>"u"?b*4:T;let g=h.getModuleCount()*b+T*2,x=T,v=g-T;return vx(g,g,function(P,F){if(x<=P&&P<v&&x<=F&&F<v){let D=Math.floor((P-x)/b),O=Math.floor((F-x)/b);return h.isDark(O,D)?0:1}else return 1})},h.createImgTag=function(b,T,g){b=b||2,T=typeof T>"u"?b*4:T;let x=h.getModuleCount()*b+T*2,v="";return v+="<img",v+=' src="',v+=h.createDataURL(b,T),v+='"',v+=' width="',v+=x,v+='"',v+=' height="',v+=x,v+='"',g&&(v+=' alt="',v+=I(g),v+='"'),v+="/>",v};let I=function(b){let T="";for(let g=0;g<b.length;g+=1){let x=b.charAt(g);switch(x){case"<":T+="&lt;";break;case">":T+="&gt;";break;case"&":T+="&amp;";break;case'"':T+="&quot;";break;default:T+=x;break}}return T},C=function(b){b=typeof b>"u"?2:b;let g=h.getModuleCount()*1+b*2,x=b,v=g-b,P,F,D,O,B,H={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},k={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},X="";for(P=0;P<g;P+=2){for(D=Math.floor((P-x)/1),O=Math.floor((P+1-x)/1),F=0;F<g;F+=1)B="\u2588",x<=F&&F<v&&x<=P&&P<v&&h.isDark(D,Math.floor((F-x)/1))&&(B=" "),x<=F&&F<v&&x<=P+1&&P+1<v&&h.isDark(O,Math.floor((F-x)/1))?B+=" ":B+="\u2588",X+=b<1&&P+1>=v?k[B]:H[B];X+=`
`}return g%2&&b>0?X.substring(0,X.length-g-1)+Array(g+1).join("\u2580"):X.substring(0,X.length-1)};return h.createASCII=function(b,T){if(b=b||1,b<2)return C(T);b-=1,T=typeof T>"u"?b*2:T;let g=h.getModuleCount()*b+T*2,x=T,v=g-T,P,F,D,O,B=Array(b+1).join("\u2588\u2588"),H=Array(b+1).join("  "),k="",X="";for(P=0;P<g;P+=1){for(D=Math.floor((P-x)/b),X="",F=0;F<g;F+=1)O=1,x<=F&&F<v&&x<=P&&P<v&&h.isDark(D,Math.floor((F-x)/b))&&(O=0),X+=O?B:H;for(D=0;D<b;D+=1)k+=X+`
`}return k.substring(0,k.length-1)},h.renderTo2dContext=function(b,T){T=T||2;let g=h.getModuleCount();for(let x=0;x<g;x++)for(let v=0;v<g;v++)b.fillStyle=h.isDark(x,v)?"black":"white",b.fillRect(v*T,x*T,T,T)},h};Ws.stringToBytes=function(i){let e=[];for(let t=0;t<i.length;t+=1){let n=i.charCodeAt(t);e.push(n&255)}return e};Ws.createStringToBytes=function(i,e){let t=(function(){let s=xx(i),r=function(){let c=s.read();if(c==-1)throw"eof";return c},o=0,a={};for(;;){let c=s.read();if(c==-1)break;let l=r(),h=r(),u=r(),d=String.fromCharCode(c<<8|l),p=h<<8|u;a[d]=p,o+=1}if(o!=e)throw o+" != "+e;return a})(),n=63;return function(s){let r=[];for(let o=0;o<s.length;o+=1){let a=s.charCodeAt(o);if(a<128)r.push(a);else{let c=t[s.charAt(o)];typeof c=="number"?(c&255)==c?r.push(c):(r.push(c>>>8),r.push(c&255)):r.push(n)}}return r}};var Ft={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},Yr={L:1,M:0,Q:3,H:2},bi={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},Ei=(function(){let i=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,t=7973,n=21522,s={},r=function(o){let a=0;for(;o!=0;)a+=1,o>>>=1;return a};return s.getBCHTypeInfo=function(o){let a=o<<10;for(;r(a)-r(e)>=0;)a^=e<<r(a)-r(e);return(o<<10|a)^n},s.getBCHTypeNumber=function(o){let a=o<<12;for(;r(a)-r(t)>=0;)a^=t<<r(a)-r(t);return o<<12|a},s.getPatternPosition=function(o){return i[o-1]},s.getMaskFunction=function(o){switch(o){case bi.PATTERN000:return function(a,c){return(a+c)%2==0};case bi.PATTERN001:return function(a,c){return a%2==0};case bi.PATTERN010:return function(a,c){return c%3==0};case bi.PATTERN011:return function(a,c){return(a+c)%3==0};case bi.PATTERN100:return function(a,c){return(Math.floor(a/2)+Math.floor(c/3))%2==0};case bi.PATTERN101:return function(a,c){return a*c%2+a*c%3==0};case bi.PATTERN110:return function(a,c){return(a*c%2+a*c%3)%2==0};case bi.PATTERN111:return function(a,c){return(a*c%3+(a+c)%2)%2==0};default:throw"bad maskPattern:"+o}},s.getErrorCorrectPolynomial=function(o){let a=$r([1],0);for(let c=0;c<o;c+=1)a=a.multiply($r([1,wi.gexp(c)],0));return a},s.getLengthInBits=function(o,a){if(1<=a&&a<10)switch(o){case Ft.MODE_NUMBER:return 10;case Ft.MODE_ALPHA_NUM:return 9;case Ft.MODE_8BIT_BYTE:return 8;case Ft.MODE_KANJI:return 8;default:throw"mode:"+o}else if(a<27)switch(o){case Ft.MODE_NUMBER:return 12;case Ft.MODE_ALPHA_NUM:return 11;case Ft.MODE_8BIT_BYTE:return 16;case Ft.MODE_KANJI:return 10;default:throw"mode:"+o}else if(a<41)switch(o){case Ft.MODE_NUMBER:return 14;case Ft.MODE_ALPHA_NUM:return 13;case Ft.MODE_8BIT_BYTE:return 16;case Ft.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+a},s.getLostPoint=function(o){let a=o.getModuleCount(),c=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1){let p=0,_=o.isDark(u,d);for(let y=-1;y<=1;y+=1)if(!(u+y<0||a<=u+y))for(let m=-1;m<=1;m+=1)d+m<0||a<=d+m||y==0&&m==0||_==o.isDark(u+y,d+m)&&(p+=1);p>5&&(c+=3+p-5)}for(let u=0;u<a-1;u+=1)for(let d=0;d<a-1;d+=1){let p=0;o.isDark(u,d)&&(p+=1),o.isDark(u+1,d)&&(p+=1),o.isDark(u,d+1)&&(p+=1),o.isDark(u+1,d+1)&&(p+=1),(p==0||p==4)&&(c+=3)}for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(u,d)&&!o.isDark(u,d+1)&&o.isDark(u,d+2)&&o.isDark(u,d+3)&&o.isDark(u,d+4)&&!o.isDark(u,d+5)&&o.isDark(u,d+6)&&(c+=40);for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(d,u)&&!o.isDark(d+1,u)&&o.isDark(d+2,u)&&o.isDark(d+3,u)&&o.isDark(d+4,u)&&!o.isDark(d+5,u)&&o.isDark(d+6,u)&&(c+=40);let l=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1)o.isDark(d,u)&&(l+=1);let h=Math.abs(100*l/a/a-50)/5;return c+=h*10,c},s})(),wi=(function(){let i=new Array(256),e=new Array(256);for(let n=0;n<8;n+=1)i[n]=1<<n;for(let n=8;n<256;n+=1)i[n]=i[n-4]^i[n-5]^i[n-6]^i[n-8];for(let n=0;n<255;n+=1)e[i[n]]=n;let t={};return t.glog=function(n){if(n<1)throw"glog("+n+")";return e[n]},t.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return i[n]},t})(),$r=function(i,e){if(typeof i.length>"u")throw i.length+"/"+e;let t=(function(){let s=0;for(;s<i.length&&i[s]==0;)s+=1;let r=new Array(i.length-s+e);for(let o=0;o<i.length-s;o+=1)r[o]=i[o+s];return r})(),n={};return n.getAt=function(s){return t[s]},n.getLength=function(){return t.length},n.multiply=function(s){let r=new Array(n.getLength()+s.getLength()-1);for(let o=0;o<n.getLength();o+=1)for(let a=0;a<s.getLength();a+=1)r[o+a]^=wi.gexp(wi.glog(n.getAt(o))+wi.glog(s.getAt(a)));return $r(r,0)},n.mod=function(s){if(n.getLength()-s.getLength()<0)return n;let r=wi.glog(n.getAt(0))-wi.glog(s.getAt(0)),o=new Array(n.getLength());for(let a=0;a<n.getLength();a+=1)o[a]=n.getAt(a);for(let a=0;a<s.getLength();a+=1)o[a]^=wi.gexp(wi.glog(s.getAt(a))+r);return $r(o,0).mod(s)},n},Fd=(function(){let i=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e=function(s,r){let o={};return o.totalCount=s,o.dataCount=r,o},t={},n=function(s,r){switch(r){case Yr.L:return i[(s-1)*4+0];case Yr.M:return i[(s-1)*4+1];case Yr.Q:return i[(s-1)*4+2];case Yr.H:return i[(s-1)*4+3];default:return}};return t.getRSBlocks=function(s,r){let o=n(s,r);if(typeof o>"u")throw"bad rs block @ typeNumber:"+s+"/errorCorrectionLevel:"+r;let a=o.length/3,c=[];for(let l=0;l<a;l+=1){let h=o[l*3+0],u=o[l*3+1],d=o[l*3+2];for(let p=0;p<h;p+=1)c.push(e(u,d))}return c},t})(),Od=function(){let i=[],e=0,t={};return t.getBuffer=function(){return i},t.getAt=function(n){let s=Math.floor(n/8);return(i[s]>>>7-n%8&1)==1},t.put=function(n,s){for(let r=0;r<s;r+=1)t.putBit((n>>>s-r-1&1)==1)},t.getLengthInBits=function(){return e},t.putBit=function(n){let s=Math.floor(e/8);i.length<=s&&i.push(0),n&&(i[s]|=128>>>e%8),e+=1},t},fx=function(i){let e=Ft.MODE_NUMBER,t=i,n={};n.getMode=function(){return e},n.getLength=function(o){return t.length},n.write=function(o){let a=t,c=0;for(;c+2<a.length;)o.put(s(a.substring(c,c+3)),10),c+=3;c<a.length&&(a.length-c==1?o.put(s(a.substring(c,c+1)),4):a.length-c==2&&o.put(s(a.substring(c,c+2)),7))};let s=function(o){let a=0;for(let c=0;c<o.length;c+=1)a=a*10+r(o.charAt(c));return a},r=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return n},px=function(i){let e=Ft.MODE_ALPHA_NUM,t=i,n={};n.getMode=function(){return e},n.getLength=function(r){return t.length},n.write=function(r){let o=t,a=0;for(;a+1<o.length;)r.put(s(o.charAt(a))*45+s(o.charAt(a+1)),11),a+=2;a<o.length&&r.put(s(o.charAt(a)),6)};let s=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;if("A"<=r&&r<="Z")return r.charCodeAt(0)-65+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return n},mx=function(i){let e=Ft.MODE_8BIT_BYTE,t=i,n=Ws.stringToBytes(i),s={};return s.getMode=function(){return e},s.getLength=function(r){return n.length},s.write=function(r){for(let o=0;o<n.length;o+=1)r.put(n[o],8)},s},gx=function(i){let e=Ft.MODE_KANJI,t=i,n=Ws.stringToBytes;(function(o,a){let c=n(o);if(c.length!=2||(c[0]<<8|c[1])!=a)throw"sjis not supported."})("\u53CB",38726);let s=n(i),r={};return r.getMode=function(){return e},r.getLength=function(o){return~~(s.length/2)},r.write=function(o){let a=s,c=0;for(;c+1<a.length;){let l=(255&a[c])<<8|255&a[c+1];if(33088<=l&&l<=40956)l-=33088;else if(57408<=l&&l<=60351)l-=49472;else throw"illegal char at "+(c+1)+"/"+l;l=(l>>>8&255)*192+(l&255),o.put(l,13),c+=2}if(c<a.length)throw"illegal char at "+(c+1)},r},Bd=function(){let i=[],e={};return e.writeByte=function(t){i.push(t&255)},e.writeShort=function(t){e.writeByte(t),e.writeByte(t>>>8)},e.writeBytes=function(t,n,s){n=n||0,s=s||t.length;for(let r=0;r<s;r+=1)e.writeByte(t[r+n])},e.writeString=function(t){for(let n=0;n<t.length;n+=1)e.writeByte(t.charCodeAt(n))},e.toByteArray=function(){return i},e.toString=function(){let t="";t+="[";for(let n=0;n<i.length;n+=1)n>0&&(t+=","),t+=i[n];return t+="]",t},e},_x=function(){let i=0,e=0,t=0,n="",s={},r=function(a){n+=String.fromCharCode(o(a&63))},o=function(a){if(a<0)throw"n:"+a;if(a<26)return 65+a;if(a<52)return 97+(a-26);if(a<62)return 48+(a-52);if(a==62)return 43;if(a==63)return 47;throw"n:"+a};return s.writeByte=function(a){for(i=i<<8|a&255,e+=8,t+=1;e>=6;)r(i>>>e-6),e-=6},s.flush=function(){if(e>0&&(r(i<<6-e),i=0,e=0),t%3!=0){let a=3-t%3;for(let c=0;c<a;c+=1)n+="="}},s.toString=function(){return n},s},xx=function(i){let e=i,t=0,n=0,s=0,r={};r.read=function(){for(;s<8;){if(t>=e.length){if(s==0)return-1;throw"unexpected end of file./"+s}let c=e.charAt(t);if(t+=1,c=="=")return s=0,-1;if(c.match(/^\s$/))continue;n=n<<6|o(c.charCodeAt(0)),s+=6}let a=n>>>s-8&255;return s-=8,a};let o=function(a){if(65<=a&&a<=90)return a-65;if(97<=a&&a<=122)return a-97+26;if(48<=a&&a<=57)return a-48+52;if(a==43)return 62;if(a==47)return 63;throw"c:"+a};return r},yx=function(i,e){let t=i,n=e,s=new Array(i*e),r={};r.setPixel=function(l,h,u){s[h*t+l]=u},r.write=function(l){l.writeString("GIF87a"),l.writeShort(t),l.writeShort(n),l.writeByte(128),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(0),l.writeByte(255),l.writeByte(255),l.writeByte(255),l.writeString(","),l.writeShort(0),l.writeShort(0),l.writeShort(t),l.writeShort(n),l.writeByte(0);let h=2,u=a(h);l.writeByte(h);let d=0;for(;u.length-d>255;)l.writeByte(255),l.writeBytes(u,d,255),d+=255;l.writeByte(u.length-d),l.writeBytes(u,d,u.length-d),l.writeByte(0),l.writeString(";")};let o=function(l){let h=l,u=0,d=0,p={};return p.write=function(_,y){if(_>>>y)throw"length over";for(;u+y>=8;)h.writeByte(255&(_<<u|d)),y-=8-u,_>>>=8-u,d=0,u=0;d=_<<u|d,u=u+y},p.flush=function(){u>0&&h.writeByte(d)},p},a=function(l){let h=1<<l,u=(1<<l)+1,d=l+1,p=c();for(let A=0;A<h;A+=1)p.add(String.fromCharCode(A));p.add(String.fromCharCode(h)),p.add(String.fromCharCode(u));let _=Bd(),y=o(_);y.write(h,d);let m=0,f=String.fromCharCode(s[m]);for(m+=1;m<s.length;){let A=String.fromCharCode(s[m]);m+=1,p.contains(f+A)?f=f+A:(y.write(p.indexOf(f),d),p.size()<4095&&(p.size()==1<<d&&(d+=1),p.add(f+A)),f=A)}return y.write(p.indexOf(f),d),y.write(u,d),y.flush(),_.toByteArray()},c=function(){let l={},h=0,u={};return u.add=function(d){if(u.contains(d))throw"dup key:"+d;l[d]=h,h+=1},u.size=function(){return h},u.indexOf=function(d){return l[d]},u.contains=function(d){return typeof l[d]<"u"},u};return r},vx=function(i,e,t){let n=yx(i,e);for(let a=0;a<e;a+=1)for(let c=0;c<i;c+=1)n.setPixel(c,a,t(c,a));let s=Bd();n.write(s);let r=_x(),o=s.toByteArray();for(let a=0;a<o.length;a+=1)r.writeByte(o[a]);return r.flush(),"data:image/gif;base64,"+r},kd=Ws,o1=Ws.stringToBytes;var Hd="fridge-settings-v1",at={accountId:null,name:"",clock:"24",markers:!0,game:!1};try{let i=JSON.parse(localStorage.getItem(Hd));typeof i?.accountId=="string"&&/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(i.accountId)&&(at.accountId=i.accountId),typeof i?.name=="string"&&(at.name=i.name.trim().slice(0,48)),at.game=i?.game===!0,i?.clock==="12"&&(at.clock="12"),typeof i?.markers=="boolean"&&(at.markers=i.markers)}catch{}var Pt=document.querySelector("#menu-page"),ts=Pt.querySelector("#profile-dialog"),Ti=Pt.querySelector("#profile-input"),zd=Pt.querySelector("#settings-status"),Vd=ts.querySelector(".profile-error"),Ai=Pt.querySelector("#qr-dialog"),ic=Pt.querySelector("#profile-qr");function Mx(){if(!at.accountId&&!Zr({accountId:crypto.randomUUID()})){ic.hidden=!0;return}ic.hidden=!1;let i=Ai.querySelector("img");if(i.hasAttribute("src"))return;let e=kd(0,"M");e.addData("SMART FRIDGE ACCOUNT: "+at.accountId.toUpperCase(),"Alphanumeric"),e.make();let t=e.createSvgTag({cellSize:4}).replace('fill="black"','fill="#183a32"');i.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(t),ic.querySelector("img").src=i.src,Ai.querySelector("code").textContent=at.accountId}ic.onclick=()=>{Ai.querySelector(".qr-owner").textContent=at.name||"My profile",Ai.showModal()};Ai.querySelector("button").onclick=()=>Ai.close();function nh(){Pt.querySelector("#profile-name").textContent=at.name||"My profile",Pt.querySelector(`input[name="clock"][value="${at.clock}"]`).checked=!0,Pt.querySelector("#game-mode").checked=at.game,Pt.querySelector("#expiry-markers").checked=at.markers}function Zr(i){let e={...at,...i};try{localStorage.setItem(Hd,JSON.stringify(e))}catch{nh();let t=ts.open?Vd:zd;return t.hidden=!1,t.textContent="Could not save on this device. Try again.",!1}return Object.assign(at,e),zd.textContent="",nh(),"game"in i&&window.dispatchEvent(new Event("game-change")),i.clock&&window.dispatchEvent(new Event("clock-change")),!0}Pt.querySelector("#profile-edit").onclick=()=>{Ti.value=at.name,Ti.setCustomValidity(""),Vd.hidden=!0,ts.showModal(),Ti.focus()};Ti.oninput=()=>Ti.setCustomValidity("");Pt.querySelector("#profile-cancel").onclick=()=>ts.close();Pt.querySelector("#profile-form").onsubmit=i=>{i.preventDefault();let e=Ti.value.trim();if(!e){Ti.setCustomValidity("Enter a display name."),Ti.reportValidity();return}Zr({name:e})&&ts.close()};Pt.addEventListener("change",({target:i})=>{i.name==="clock"&&Zr({clock:i.value}),i.id==="game-mode"&&Zr({game:i.checked}),i.id==="expiry-markers"&&Zr({markers:i.checked})});window.addEventListener("menu-show",()=>{Mx(),nh(),Pt.hidden=!1,Pt.scrollTop=0,Pt.querySelector("h1").focus({preventScroll:!0})});window.addEventListener("menu-hide",()=>{ts.open&&ts.close(),Ai.open&&Ai.close(),Pt.hidden=!0});var yt=document.querySelector("#scene"),$t=matchMedia("(prefers-reduced-motion: reduce)"),ih=!1,sh=0,ct="home",Un=0,sc=0,rh=document.querySelector("#inventory");try{let h=function(U,J,ie,xe,me,Ue,z=o,le=.025){let ge=new xt(new mi(U,J,ie,5,le),z);return ge.position.set(xe,me,Ue),r.add(ge),ge},y=function(){d&&(r.remove(d),d.userData.dispose()),d=zl(p,at.game),r.add(d)},I=function(U){for(let xe of[-1.08,.1,1.27])h(.043,.105,.095,U,xe,.8,a,.014);let J=new Ts([new L(U,-1.16,.817),new L(U,-1.04,.875),new L(U,.05,.9),new L(U,1.22,.875),new L(U,1.34,.817)]),ie=new xt(new Cr(J,48,.024,12,!1),o);r.add(ie)},F=function(){let U=v;U.fillStyle="#e7ece8",U.fillRect(0,0,480,736),U.textAlign="center",U.fillStyle="#25312d",U.font="500 86px -apple-system, sans-serif",U.fillText(new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",hourCycle:at.clock==="12"?"h12":"h23"}),240,213),U.fillStyle="#6d7e72",U.font="25px -apple-system, sans-serif",U.fillText(new Date().toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"}),240,260),U.strokeStyle="#27a879",U.lineWidth=9,U.beginPath(),U.arc(240,366,24,Math.PI,0),U.stroke(),U.fillStyle="#27a879",U.beginPath(),U.roundRect(205,365,70,57,11),U.fill(),U.fillStyle="#63766b",U.font="23px -apple-system, sans-serif",U.fillText("Tap to wake",240,585),P.needsUpdate=!0},He=function(){let{width:U,height:J}=yt.getBoundingClientRect();t.setSize(U,J),e.aspect=U/J,e.updateProjectionMatrix();let ie=Wt.degToRad(e.fov/2),xe=Math.max(2.55/Math.tan(ie),1.5/(Math.tan(ie)*e.aspect));Me.set(-xe*.31,xe*.115,xe*.95);let me=Math.max(2.12/Math.tan(ie),1.09/(Math.tan(ie)*e.aspect));de.set(0,.06,me)},be=function(U){ct!=="inventory"||Le||p!=="fridge"||_||(pe(),Z=U?1:0,Se())},Se=function(){let U=Le==="recipes"?"recipe":Le??"fridge";for(let ie of document.querySelectorAll(".inventory-nav button")){let xe=ie.id===U+"-button"||U==="fridge"&&ie.dataset.section==="fridge-section";ie.classList.toggle("active",xe),xe?ie.setAttribute("aria-current","page"):ie.removeAttribute("aria-current")}let J={menu:"Settings",recipes:"Recipes",list:"Inventory list"};rh.setAttribute("aria-label",J[Le]??(Z?"Freezer drawer":p==="drinks"?"Drinks cabinet":"Fridge inventory")),document.querySelector("#open-drinks").hidden=!!Le||p!=="fridge"||!!(Z||q),yt.setAttribute("aria-label",Z?"Open freezer drawer. Tap a food to see its details.":at.game?"Game mode. Drag an item onto a shelf or another item. Tap for details.":p==="drinks"?"Drinks cabinet. Tap a bottle for details; swipe each shelf to browse.":"Open fridge. Tap food to view it; swipe each shelf to browse. Tap the freezer drawer to open it."),document.querySelector("#close-fridge").setAttribute("aria-label",Z?"Close freezer drawer":p==="drinks"?"Back to fridge":"Back to closed fridge")},Ge=function(U){if(ct!=="inventory"||_||!["fridge","drinks"].includes(U))return;if(Je(null),Z||q){be(!1);return}if(U===p){Se();return}pe();let J=d,ie=U==="drinks"?1:-1;if(p=U,d=zl(U,at.game),r.add(d),Se(),$t.matches){r.remove(J),J.userData.dispose();return}d.userData.setSlide(ie*Xa),_={outgoing:J,direction:ie,start:performance.now()}},Je=function(U){U!==Le&&(pe(),Le&&(document.body.classList.remove(Le+"-open"),window.dispatchEvent(new Event(Le+"-hide"))),Le=U,yt.inert=!!U,U&&(document.body.classList.add(U+"-open"),window.dispatchEvent(new Event(U+"-show"))),Se())},N=function(){ct==="home"?(ih=!0,ct="zooming",sc=performance.now(),document.body.classList.add("zoomed"),yt.setAttribute("aria-label","Close-up fridge. Tap to open both doors and see inventory.")):ct==="focused"&&(y(),document.querySelector(".inventory-scroll").scrollTop=0,ct="opening",sc=performance.now())},oe=function(){if(!(ct!=="inventory"||_)){if(Le){Je(null);return}if(Z||q){be(!1);return}if(p==="drinks"){Ge("fridge");return}pe(),rh.inert=!0,yt.inert=!1,document.body.classList.remove("inventory-ready"),document.body.classList.remove("interior-open"),ct="closing",sc=performance.now(),yt.focus({preventScroll:!0})}},pe=function(){K?.drawerDrag&&d.userData.drawerGame?.cancel(),K?.gameDrag&&d.userData.game?.cancel(),K?.id!==void 0&&yt.hasPointerCapture(K.id)&&yt.releasePointerCapture(K.id),K=null,te=null},ce=function(U,J){let ie=J-U.x;Math.abs(ie)<=8&&!U.moved||(U.moved=!0,U.row.style.scrollSnapType="none",U.row.scrollLeft=Sn(U.left-ie,0,Math.max(0,U.row.scrollWidth-U.row.clientWidth)),d.userData.updatePositions())},_e=function(U){let J=yt.getBoundingClientRect();ne.setFromCamera(new ye((U.clientX-J.left)/J.width*2-1,-(U.clientY-J.top)/J.height*2+1),e)},ze=function(U){_e(U);let J=new L;if(ne.ray.intersectPlane(new ft(new L(0,0,1),0),J),p==="fridge"&&(Z||q||J.y<.07))return null;let{top:ie,pitch:xe,scale:me,rowElements:Ue}=d.userData,z=Math.round((ie-J.y)/(xe*me));return Ue[Math.max(0,Math.min(Ue.length-1,z))]},Oe=function(U){_e(U);for(let J of ne.intersectObject(d,!0)){if(!hd(J.object,J.point))continue;let ie=J.object,xe=null;for(;ie&&ie!==d;){if(!ie.visible){xe=null;break}if(ie.userData.drawer)return Z?xe:ie;(ie.userData.freezerFood||ie.userData.category)&&(xe=ie),ie=ie.parent}if(xe&&!Z)return xe}return null},M=function(U){return _e(U),ne.ray.intersectPlane(R,new L)},W=function(U,J){let ie=M(J);if(ie){if(!U.gameDrag){if(Math.hypot(J.clientX-U.x,J.clientY-U.y)<6)return;d.userData.game.begin(U.piece),U.gameDrag=!0}ie.add(U.offset),d.userData.game.drag(ie.x,ie.y)}},re=function(U,J){if(!U.drawerDrag){if(Math.hypot(J.clientX-U.x,J.clientY-U.y)<6)return;d.userData.drawerGame.begin(U.freezerFood),U.drawerDrag=!0}_e(J);let ie=ne.ray.intersectPlane(Q,new L);ie&&d.userData.drawerGame.drag(d.userData.drawer.worldToLocal(ie))},ee=function(U){K?.id===U.pointerId&&pe()},Re=function(U){requestAnimationFrame(Re);let J=Math.min((U-Ie)/1e3,.05);if(Ie=U,Le)return;if(sh+=((ih?1:0)-sh)*($t.matches?1:1-Math.exp(-J*6)),_){let{outgoing:Ue,direction:z,start:le}=_,ge=Math.min(1,(U-le)/600),Ae=ue(ge);Ue.userData.setSlide(-z*Xa*Ae),d.userData.setSlide(z*Xa*(1-Ae)),ge===1&&(r.remove(Ue),Ue.userData.dispose(),_=null)}let ie=U-sc;ct==="zooming"&&(ie>650||$t.matches)&&(ct="focused"),ct==="opening"&&(Un=ue(Math.min(ie/($t.matches?1:1350),1)),($t.matches||ie>2300)&&(Un=1,ct="inventory",rh.inert=!1,document.body.classList.add("interior-open","inventory-ready"),Se())),ct==="closing"&&(Un=1-ue(Math.max(0,Math.min((ie-550)/($t.matches?1:1200),1))),($t.matches||ie>1800)&&(Un=0,ct="focused")),q&&d.userData.drawerGame?.tick(J,$t.matches),d.userData.game?.tick(J,$t.matches),_?.outgoing.userData.game?.tick(J,$t.matches),d.userData.updateAlerts(U,$t.matches,Un>.06&&at.markers),_?.outgoing.userData.updateAlerts(U,$t.matches,Un>.06&&at.markers),S.visible=Un<.03,B.rotation.y=-Un*Math.PI*.57,H.rotation.y=Un*Math.PI*.57,m.intensity=Un*.7;let xe=ct==="inventory"?1:ct==="opening"?$t.matches?1:ue(Math.max(0,Math.min((ie-850)/1300,1))):ct==="closing"?1-ue(Math.min(ie/700,1)):0;e.position.lerpVectors(Me,de,sh),e.position.z-=xe*1.1,e.position.y-=xe*.12,Te.set(0,-xe*.12,0);let me=d.userData.drawer;if(me){if(ve()){let z=$t.matches?1:J/1.4;q+=Math.sign(Z-q)*Math.min(z,Math.abs(Z-q)),ve()||Se()}let Ue=ue(Sn(q/.7,0,1));if(me.position.z=dd*Ue,q>0){let z=ue(Sn((q-.18)/.82,0,1)),le=e.position.distanceTo(Te),ge=Math.max(1.28,.89/e.aspect)/Math.tan(Wt.degToRad(e.fov/2)),Ae=Wt.lerp(le,ge,z),he=Wt.lerp(Math.atan2(e.position.y-Te.y,e.position.z),Math.PI*.454,z);Te.y=Wt.lerp(Te.y,Pn,z),Te.z=(me.position.z-.045)*z,e.position.set(0,Te.y+Ae*Math.sin(he),Te.z+Ae*Math.cos(he))}}e.lookAt(Te),t.render(i,e)},i=new ki,e=new Ct(34,1,.1,100),t=new Bs({antialias:!0,alpha:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.setClearColor(0,0),t.localClippingEnabled=!0,t.outputColorSpace=St,t.toneMapping=Is,t.toneMappingExposure=1,yt.appendChild(t.domElement),i.add(new Vi(16777215,12830401,2.1));let n=new di(16776438,3.2);n.position.set(-3,5,6),i.add(n);let s=new di(16777215,.65);s.position.set(4,1,-3),i.add(s);let r=new nt;i.add(r);let o=new Gt({color:16777215,roughness:.31,metalness:.07}),a=new Gt({color:16119283,roughness:.43,metalness:.04}),c=new Gt({color:9607057,roughness:.82}),l=new Gt({color:4475203,roughness:.85});h(1.8,3.48,.09,0,0,-.66,a,.025),h(.07,3.48,1.3,-.865,0,-.055,a,.025),h(.07,3.48,1.3,.865,0,-.055,a,.025),h(1.8,.07,1.3,0,1.705,-.055,a,.025),h(1.8,.07,1.3,0,-1.705,-.055,a,.025);let u=new Gt({color:15199464,roughness:.65,emissive:12180683,emissiveIntensity:.12});h(1.65,3.3,.025,0,0,-.6,u,.01),h(.06,3.3,1.08,-.805,0,-.02,o,.018),h(.06,3.3,1.08,.805,0,-.02,o,.018),h(1.55,.025,.035,0,1.58,-.48,new Rt({color:16449530}),.005);let d=null,p="fridge",_=null;y();let m=new Gi(15597555,0,5);m.position.set(0,1.5,.42),r.add(m);let f=r.children.length;h(.801,3.4,.14,-.4775,.018,.69,o,.036);let A=r.children[f],w=h(.931,3.4,.14,.4085,.018,.69,o,.036),S=h(.032,3.35,.025,-.067,.018,.687,c,.004),C=r.children.length;I(-.155);let b=[A,...r.children.slice(C)],T=r.children.length;I(.025);let g=new Gt({color:13358028,roughness:.4});h(.574,.854,.024,.48,.64,.776,g,.025),h(.558,.838,.025,.48,.64,.795,o,.025);let x=document.createElement("canvas");x.width=480,x.height=736;let v=x.getContext("2d"),P=new vn(x);P.colorSpace=St,P.anisotropy=t.capabilities.getMaxAnisotropy(),window.addEventListener("clock-change",F),F(),setInterval(F,3e4);let D=new xt(new tn(.508,.782),new Rt({map:P,toneMapped:!1}));D.position.set(.48,.64,.809),r.add(D);let O=[w,...r.children.slice(T)],B=new nt;B.position.set(-.878,0,.69),r.add(B);let H=new nt;H.position.set(.874,0,.69),r.add(H),i.updateMatrixWorld(!0),b.forEach(U=>B.attach(U)),O.forEach(U=>H.attach(U)),h(1.76,.025,1.29,0,1.745,-.045,o,.008),h(1.65,.045,.1,0,-1.725,.57,a,.012),h(.14,.075,.23,-.68,-1.773,.36,l,.014),h(.14,.075,.23,.68,-1.773,.36,l,.014);let k=document.createElement("canvas");k.width=k.height=128;let X=k.getContext("2d"),j=X.createRadialGradient(64,64,10,64,64,64);j.addColorStop(0,"rgba(45,50,43,.20)"),j.addColorStop(1,"rgba(45,50,43,0)"),X.fillStyle=j,X.fillRect(0,0,128,128);let ae=new xt(new tn(3.1,2.5),new Rt({map:new vn(k),transparent:!0,depthWrite:!1}));ae.rotation.x=-Math.PI/2,ae.position.y=-1.815,i.add(ae);let Me=new L,de=new L,Le=null,q=0,Z=0,ve=()=>q!==Z;for(let[U,J]of[["recipe-select","recipes"],["menu-select","menu"],["list-select","list"]])window.addEventListener(U,()=>{ct==="inventory"&&!_&&Je(J)});window.addEventListener("game-change",()=>{pe(),y(),Se()}),window.addEventListener("cabinet-select",U=>Ge(U.detail)),document.querySelector("#open-drinks").onclick=()=>Ge("drinks"),document.querySelector("#close-fridge").onclick=oe;let ne=new Ir,K=null,te=null,R=new ft(new L(0,0,1),-.15);yt.addEventListener("pointerdown",U=>{if(!U.isPrimary||Le||K||_||ve()||!["home","focused","inventory"].includes(ct))return;let J=ct==="inventory",ie=J&&!at.game?ze(U):null;if(K={id:U.pointerId,x:U.clientX,y:U.clientY,row:ie,left:ie?qa(ie):0},J&&at.game&&Z&&(K.freezerFood=Oe(U)?.userData.freezerFood),J&&at.game&&!Z){let xe=Oe(U)?.userData.pieceId,me=M(U);if(xe&&me){let Ue=d.userData.game.position(xe);Object.assign(K,{piece:xe,offset:Ue.clone().sub(me)})}}J&&yt.setPointerCapture(U.pointerId)});let Q=new ft(new L(0,1,0),-(Pn+.58));yt.addEventListener("pointermove",U=>{K?.id!==U.pointerId||ct!=="inventory"||_||(K.freezerFood?re(K,U):K.piece?W(K,U):K.row&&ce(K,U.clientX))}),yt.addEventListener("pointercancel",ee),yt.addEventListener("lostpointercapture",ee),window.addEventListener("blur",pe),yt.addEventListener("pointerup",U=>{let J=K;if(!(J?.id!==U.pointerId||_)){if(K=null,J.freezerFood&&re(J,U),J.drawerDrag){d.userData.drawerGame.release();return}if(J.piece&&W(J,U),J.gameDrag){d.userData.game.release();return}if(!(J.moved||Math.hypot(U.clientX-J.x,U.clientY-J.y)>12))if(ct==="inventory"){let ie=Oe(U);if(ie?.userData.drawer)be(!0);else if(ie?.userData.freezerFood)ql(ie.userData.freezerFood);else if(ie?.userData.food)ql(ie.userData.food);else if(ie){let{row:xe,index:me}=ie.userData.category;d.userData.rowElements[xe].querySelectorAll(".food-card")[me]?.click()}}else _e(U),ne.intersectObject(r,!0).length&&N()}}),yt.addEventListener("touchstart",U=>{if(at.game||ct!=="inventory"||_||U.touches.length!==1)return;let J=U.touches[0],ie=ze(J);ie&&(te={row:ie,x:J.clientX,left:qa(ie)})},{passive:!0}),yt.addEventListener("touchmove",U=>{if(!te||ct!=="inventory"||_||U.touches.length!==1)return;let J=U.touches[0].clientX-te.x;Math.abs(J)<8||(U.preventDefault(),K&&(K.moved=!0),ce(te,U.touches[0].clientX))},{passive:!1}),yt.addEventListener("touchend",()=>{te=null}),yt.addEventListener("touchcancel",()=>{te=null}),yt.addEventListener("keydown",U=>{(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),ct==="inventory"&&p==="fridge"?be(!Z):N()),U.key==="Escape"&&ct==="focused"&&(ih=!1,ct="home",document.body.classList.remove("zoomed"),yt.setAttribute("aria-label","White double-door fridge. Tap to zoom in."))}),document.addEventListener("keydown",U=>{U.key==="Escape"&&!document.querySelector("dialog[open]")&&oe()}),new ResizeObserver(He).observe(yt),He();let Ie=0,ue=U=>U*U*(3-2*U),Te=new L;requestAnimationFrame(Re)}catch(i){console.error(i),document.querySelector("#render-error").hidden=!1}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
