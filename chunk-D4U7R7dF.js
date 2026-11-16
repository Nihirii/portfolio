import{D as a,O as o,c as R$1,l as S,n as m,o as D,t as l,u as W,x as s}from"./main-LGTBZY5J.js";import{$ as kt,A as Rl,B as Yn,C as Oe$1,D as QS,E as Pp,F as Uc,G as bt,H as Zs,I as Un,J as eb,K as ct,L as Vr,M as St,N as Tl,O as Qt,P as Tn,Q as kn,R as Xe$1,S as Me,T as Pl,U as Zt,V as Zb,W as _s,X as ii,Y as hs$1,Z as it$1,_ as L,a as Bt$1,at as tt$1,b as Lp,c as Fc,ct as vn,d as Hc,dt as xt,et as ls$1,ft as yt,g as Jn,h as Je$1,ht as zn,i as Br,it as qr,j as Sc,k as Ri,l as Fn,lt as wa,m as Ip,mt as zd,n as Aa,nt as md,o as Cc,ot as us$1,p as Ic,pt as zc,q as dn,r as An,rt as on,s as Ec,st as vi,t as $t,tt as mb,u as Gi$1,ut as we,v as Le,w as On,x as Lt,y as Ll,z as Ye}from"./chunk-Cye-zFgh.js";var Hi={type:`change`};var It={type:`start`};var zi={type:`end`};var Xe=new Gi$1;var Li=new Yn;var ts=Math.cos(70*Tl.DEG2RAD);var R=new L;var V=2*Math.PI;var g={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};var Nt=1e-6;var Qe=class extends Hc{constructor(e,t=null){super(e,t),this.state=g.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:Ip.ROTATE,MIDDLE:Ip.DOLLY,RIGHT:Ip.PAN},this.touches={ONE:Pp.ROTATE,TWO:Pp.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Tn,this._lastTargetPosition=new L,this._quat=new Tn().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zc,this._sphericalDelta=new zc,this._scale=1,this._panOffset=new L,this._rotateStart=new Me,this._rotateEnd=new Me,this._rotateDelta=new Me,this._panStart=new Me,this._panEnd=new Me,this._panDelta=new Me,this._dollyStart=new Me,this._dollyEnd=new Me,this._dollyDelta=new Me,this._dollyDirection=new L,this._mouse=new Me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ss.bind(this),this._onPointerDown=is.bind(this),this._onPointerUp=os.bind(this),this._onContextMenu=us.bind(this),this._onMouseWheel=ns.bind(this),this._onKeyDown=hs.bind(this),this._onTouchStart=ls.bind(this),this._onTouchMove=cs.bind(this),this._onMouseDown=as.bind(this),this._onMouseMove=rs.bind(this),this._interceptControlDown=ds.bind(this),this._interceptControlUp=ps.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=g.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hi),this.update(),this.state=g.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;R.copy(t).sub(this.target),R.applyQuaternion(this._quat),this._spherical.setFromVector3(R),this.autoRotate&&this.state===g.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=V:i>Math.PI&&(i-=V),s<-Math.PI?s+=V:s>Math.PI&&(s-=V),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(R.setFromSpherical(this._spherical),R.applyQuaternion(this._quatInverse),t.copy(this.target).add(R),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let r=R.length();a=this._clampDistance(r*this._scale);let h=r-a;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){let r=new L(this._mouse.x,this._mouse.y,0);r.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;let l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(r),this.object.updateMatrixWorld(),a=R.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Xe.origin.copy(this.object.position),Xe.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xe.direction))<ts?this.object.lookAt(this.target):(Li.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xe.intersectPlane(Li,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Nt||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nt||this._lastTargetPosition.distanceToSquared(this.target)>Nt?(this.dispatchEvent(Hi),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?V/60*this.autoRotateSpeed*e:V/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){R.setFromMatrixColumn(t,0),R.multiplyScalar(-e),this._panOffset.add(R)}_panUp(e,t){this.screenSpacePanning===!0?R.setFromMatrixColumn(t,1):(R.setFromMatrixColumn(t,0),R.crossVectors(this.object.up,R)),R.multiplyScalar(e),this._panOffset.add(R)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;R.copy(s).sub(this.target);let o=R.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,o=t-i.top,a=i.width,r=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(o/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(V*this._rotateDelta.x/t.clientHeight),this._rotateUp(V*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-V*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(s,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(V*this._rotateDelta.x/t.clientHeight),this._rotateUp(V*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,o=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,r=(e.pageY+t.y)*.5;this._updateZoomParameters(a,r)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function is(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType===`touch`?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function ss(n){this.enabled!==!1&&(n.pointerType===`touch`?this._onTouchMove(n):this._onMouseMove(n))}function os(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(zi),this.state=g.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y})}}function as(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ip.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=g.DOLLY;break;case Ip.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=g.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=g.ROTATE}break;case Ip.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=g.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=g.PAN}break;default:this.state=g.NONE}this.state!==g.NONE&&this.dispatchEvent(It)}function rs(n){switch(this.state){case g.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case g.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case g.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n)}}function ns(n){this.enabled===!1||this.enableZoom===!1||this.state!==g.NONE||(n.preventDefault(),this.dispatchEvent(It),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(zi))}function hs(n){this.enabled!==!1&&this._handleKeyDown(n)}function ls(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Pp.ROTATE:if(this.enableRotate===!1){this.state=g.NONE;break}this._handleTouchStartRotate(n),this.state=g.TOUCH_ROTATE;break;case Pp.PAN:if(this.enablePan===!1){this.state=g.NONE;break}this._handleTouchStartPan(n),this.state=g.TOUCH_PAN;break;default:this.state=g.NONE}break;case 2:switch(this.touches.TWO){case Pp.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=g.TOUCH_DOLLY_PAN;break;case Pp.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=g.TOUCH_DOLLY_ROTATE;break;default:this.state=g.NONE}break;default:this.state=g.NONE}this.state!==g.NONE&&this.dispatchEvent(It)}function cs(n){switch(this._trackPointer(n),this.state){case g.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case g.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case g.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case g.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=g.NONE}}function us(n){this.enabled!==!1&&n.preventDefault()}function ds(n){n.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function ps(n){n.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var ie={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var U=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}};var fs=new us$1(-1,1,1,-1,0,1);var Bt=class extends bt{constructor(){super(),this.setAttribute(`position`,new tt$1([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new tt$1([0,2,0,0,2,0],2))}};var ms=new Bt;var X=class{constructor(e){this._mesh=new Oe$1(ms,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fs)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var qe=class extends U{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ii?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=md.clone(e.uniforms),this.material=new ii({name:e.name!==void 0?e.name:`unspecified`,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new X(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Oe=class extends U{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}};var $e=class extends U{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Je=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new Me);this._width=i.width,this._height=i.height,t=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jn}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qe(ie),this.copyPass.material.blending=0,this.timer=new Uc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,o=this.passes.length;s<o;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let r=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Oe!==void 0&&(a instanceof Oe?i=!0:a instanceof $e&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ue=class n extends U{constructor(e,t,i,s){super(),this.renderScene=t,this.renderCamera=i,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new we(1,1,1),this.hiddenEdgeColor=new we(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=/* @__PURE__ */ new Map,this._selectionCache=/* @__PURE__ */ new Set,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256);let o=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new An(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name=`OutlinePass.mask`,this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new wa,this.depthMaterial.side=2,this.depthMaterial.depthPacking=Lp,this.depthMaterial.blending=0,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=2,this.prepareMaskMaterial.fragmentShader=c(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new An(this.resolution.x,this.resolution.y,{type:Jn}),this.renderTargetDepthBuffer.texture.name=`OutlinePass.depth`,this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new An(o,a,{type:Jn,depthBuffer:!1}),this.renderTargetMaskDownSampleBuffer.texture.name=`OutlinePass.depthDownSample`,this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new An(o,a,{type:Jn,depthBuffer:!1}),this.renderTargetBlurBuffer1.texture.name=`OutlinePass.blur1`,this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new An(Math.round(o/2),Math.round(a/2),{type:Jn,depthBuffer:!1}),this.renderTargetBlurBuffer2.texture.name=`OutlinePass.blur2`,this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new An(o,a,{type:Jn,depthBuffer:!1}),this.renderTargetEdgeBuffer1.texture.name=`OutlinePass.edge1`,this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new An(Math.round(o/2),Math.round(a/2),{type:Jn,depthBuffer:!1}),this.renderTargetEdgeBuffer2.texture.name=`OutlinePass.edge2`,this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;let r=4,h=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(r),this.separableBlurMaterial1.uniforms.texSize.value.set(o,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(h),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(o/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=h,this.overlayMaterial=this._getOverlayMaterial();let l=ie;this.copyUniforms=md.clone(l.uniforms),this.materialCopy=new ii({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new we,this.oldClearAlpha=1,this._fsQuad=new X(null),this.tempPulseColor1=new we,this.tempPulseColor2=new we,this.textureMatrix=new Xe$1;function c(d,m){let f=m.isPerspectiveCamera?`perspective`:`orthographic`;return d.replace(/DEPTH_TO_VIEW_Z/g,f+`DepthToViewZ`)}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let i=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(i,s),this.renderTargetBlurBuffer1.setSize(i,s),this.renderTargetEdgeBuffer1.setSize(i,s),this.separableBlurMaterial1.uniforms.texSize.value.set(i,s),i=Math.round(i/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(i,s),this.renderTargetEdgeBuffer2.setSize(i,s),this.separableBlurMaterial2.uniforms.texSize.value.set(i,s)}render(e,t,i,s,o){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,o&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);let r=this.renderScene.background,h=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=r,this.renderScene.overrideMaterial=h,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){let l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=n.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,o&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=i.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){let e=this._selectionCache;function t(i){i.isMesh&&e.add(i)}e.clear();for(let i=0;i<this.selectedObjects.length;i++)this.selectedObjects[i].traverse(t)}_changeVisibilityOfSelectedObjects(e){let t=this._visibilityCache;for(let i of this._selectionCache)e===!0?i.visible=t.get(i):(t.set(i,i.visible),i.visible=e)}_changeVisibilityOfNonSelectedObjects(e){let t=this._visibilityCache,i=this._selectionCache;function s(o){if(o.isPoints||o.isLine||o.isLine2)e===!0?o.visible=t.get(o):(t.set(o,o.visible),o.visible=e);else if((o.isMesh||o.isSprite)&&!i.has(o)){let a=o.visible;(e===!1||t.get(o)===!0)&&(o.visible=e),t.set(o,a)}}this.renderScene.traverse(s)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new ii({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Me(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <batching_vertex>
					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}_getEdgeDetectionMaterial(){return new ii({uniforms:{maskTexture:{value:null},texSize:{value:new Me(.5,.5)},visibleEdgeColor:{value:new L(1,1,1)},hiddenEdgeColor:{value:new L(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}_getSeparableBlurMaterial(e){return new ii({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}_getOverlayMaterial(){return new ii({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:2,depthTest:!1,depthWrite:!1,transparent:!0})}};ue.BlurDirectionX=new Me(1,0);ue.BlurDirectionY=new Me(0,1);var Ae={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var et=class extends U{constructor(){super(),this.isOutputPass=!0,this.uniforms=md.clone(Ae.uniforms),this.material=new Aa({name:Ae.name,uniforms:this.uniforms,vertexShader:Ae.vertexShader,fragmentShader:Ae.fragmentShader}),this._fsQuad=new X(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je$1.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var tt=class extends U{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new we}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Ne={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Xe$1},cameraProjectionMatrixInverse:{value:new Xe$1},cameraWorldMatrix:{value:new Xe$1},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`};var Ie={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`};var it={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Vi(n=5){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=vs(e),i=t.length,s=new Uint8Array(i*4);for(let a=0;a<i;++a){let r=t[a],h=2*Math.PI*r/i,l=new L(Math.cos(h),Math.sin(h),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let o=new Zs(s,e,e);return o.wrapS=Un,o.wrapT=Un,o.needsUpdate=!0,o}function vs(n){let e=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),t=e*e,i=Array(t).fill(0),s=Math.floor(e/2),o=e-1;for(let a=1;a<=t;){if(s===-1&&o===e?(o=e-2,s=0):(o===e&&(o=0),s<0&&(s=e-1)),i[s*e+o]!==0){o-=2,s++;continue}else i[s*e+o]=a++;o++,s--}return i}var Be={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Ut(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Me},cameraProjectionMatrixInverse:{value:new Xe$1},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ut(n,e,t){let i=gs(n,e,t),s=`vec3[SAMPLES](`;for(let o=0;o<n;o++){let a=i[o];s+=`vec3(${a.x}, ${a.y}, ${a.z})${o<n-1?`,`:`)`}`}return s}function gs(n,e,t){let i=[];for(let s=0;s<n;s++){let o=2*Math.PI*e*s/n,a=Math.pow(s/(n-1),t);i.push(new L(Math.cos(o),Math.sin(o),a))}return i}var st=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,s,o,a=.5*(Math.sqrt(3)-1),r=(e+t)*a,h=Math.floor(e+r),l=Math.floor(t+r),c=(3-Math.sqrt(3))/6,d=(h+l)*c,m=h-d,f=l-d,u=e-m,w=t-f,E,M;u>w?(E=1,M=0):(E=0,M=1);let b=u-E+c,D=w-M+c,T=u-1+2*c,O=w-1+2*c,x=h&255,H=l&255,F=this.perm[x+this.perm[H]]%12,y=this.perm[x+E+this.perm[H+M]]%12,_=this.perm[x+1+this.perm[H+1]]%12,S=.5-u*u-w*w;S<0?i=0:(S*=S,i=S*S*this._dot(this.grad3[F],u,w));let P=.5-b*b-D*D;P<0?s=0:(P*=P,s=P*P*this._dot(this.grad3[y],b,D));let Y=.5-T*T-O*O;return Y<0?o=0:(Y*=Y,o=Y*Y*this._dot(this.grad3[_],T,O)),70*(i+s+o)}noise3d(e,t,i){let s,o,a,r,l=(e+t+i)*.3333333333333333,c=Math.floor(e+l),d=Math.floor(t+l),m=Math.floor(i+l),f=1/6,u=(c+d+m)*f,w=c-u,E=d-u,M=m-u,b=e-w,D=t-E,T=i-M,O,x,H,F,y,_;b>=D?D>=T?(O=1,x=0,H=0,F=1,y=1,_=0):b>=T?(O=1,x=0,H=0,F=1,y=0,_=1):(O=0,x=0,H=1,F=1,y=0,_=1):D<T?(O=0,x=0,H=1,F=0,y=1,_=1):b<T?(O=0,x=1,H=0,F=0,y=1,_=1):(O=0,x=1,H=0,F=1,y=1,_=0);let S=b-O+f,P=D-x+f,Y=T-H+f,fe=b-F+2*f,me=D-y+2*f,ve=T-_+2*f,ge=b-1+3*f,Me=D-1+3*f,A=T-1+3*f,se=c&255,oe=d&255,ae=m&255,He=this.perm[se+this.perm[oe+this.perm[ae]]]%12,Le=this.perm[se+O+this.perm[oe+x+this.perm[ae+H]]]%12,ze=this.perm[se+F+this.perm[oe+y+this.perm[ae+_]]]%12,Ve=this.perm[se+1+this.perm[oe+1+this.perm[ae+1]]]%12,Q=.6-b*b-D*D-T*T;Q<0?s=0:(Q*=Q,s=Q*Q*this._dot3(this.grad3[He],b,D,T));let q=.6-S*S-P*P-Y*Y;q<0?o=0:(q*=q,o=q*q*this._dot3(this.grad3[Le],S,P,Y));let $=.6-fe*fe-me*me-ve*ve;$<0?a=0:($*=$,a=$*$*this._dot3(this.grad3[ze],fe,me,ve));let J=.6-ge*ge-Me*Me-A*A;return J<0?r=0:(J*=J,r=J*J*this._dot3(this.grad3[Ve],ge,Me,A)),32*(s+o+a+r)}noise4d(e,t,i,s){let o=this.grad4,a=this.simplex,r=this.perm,h=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,c,d,m,f,u,w=(e+t+i+s)*h,E=Math.floor(e+w),M=Math.floor(t+w),b=Math.floor(i+w),D=Math.floor(s+w),T=(E+M+b+D)*l,O=E-T,x=M-T,H=b-T,F=D-T,y=e-O,_=t-x,S=i-H,P=s-F,Y=y>_?32:0,fe=y>S?16:0,me=_>S?8:0,ve=y>P?4:0,ge=_>P?2:0,Me=S>P?1:0,A=Y+fe+me+ve+ge+Me,se=a[A][0]>=3?1:0,oe=a[A][1]>=3?1:0,ae=a[A][2]>=3?1:0,He=a[A][3]>=3?1:0,Le=a[A][0]>=2?1:0,ze=a[A][1]>=2?1:0,Ve=a[A][2]>=2?1:0,Q=a[A][3]>=2?1:0,q=a[A][0]>=1?1:0,$=a[A][1]>=1?1:0,J=a[A][2]>=1?1:0,Lt=a[A][3]>=1?1:0,ht=y-se+l,lt=_-oe+l,ct=S-ae+l,ut=P-He+l,dt=y-Le+2*l,pt=_-ze+2*l,ft=S-Ve+2*l,mt=P-Q+2*l,vt=y-q+3*l,gt=_-$+3*l,Mt=S-J+3*l,bt=P-Lt+3*l,Et=y-1+4*l,wt=_-1+4*l,Tt=S-1+4*l,yt=P-1+4*l,be=E&255,Ee=M&255,we=b&255,Te=D&255,Xi=r[be+r[Ee+r[we+r[Te]]]]%32,Qi=r[be+se+r[Ee+oe+r[we+ae+r[Te+He]]]]%32,qi=r[be+Le+r[Ee+ze+r[we+Ve+r[Te+Q]]]]%32,$i=r[be+q+r[Ee+$+r[we+J+r[Te+Lt]]]]%32,Ji=r[be+1+r[Ee+1+r[we+1+r[Te+1]]]]%32,ye=.6-y*y-_*_-S*S-P*P;ye<0?c=0:(ye*=ye,c=ye*ye*this._dot4(o[Xi],y,_,S,P));let _e=.6-ht*ht-lt*lt-ct*ct-ut*ut;_e<0?d=0:(_e*=_e,d=_e*_e*this._dot4(o[Qi],ht,lt,ct,ut));let xe=.6-dt*dt-pt*pt-ft*ft-mt*mt;xe<0?m=0:(xe*=xe,m=xe*xe*this._dot4(o[qi],dt,pt,ft,mt));let Se=.6-vt*vt-gt*gt-Mt*Mt-bt*bt;Se<0?f=0:(Se*=Se,f=Se*Se*this._dot4(o[$i],vt,gt,Mt,bt));let Pe=.6-Et*Et-wt*wt-Tt*Tt-yt*yt;return Pe<0?u=0:(Pe*=Pe,u=Pe*Pe*this._dot4(o[Ji],Et,wt,Tt,yt)),27*(c+d+m+f+u)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}_dot4(e,t,i,s,o){return e[0]*t+e[1]*i+e[2]*s+e[3]*o}};var de=class n extends U{constructor(e,t,i=512,s=512,o,a,r){super(),this.width=i,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Vi(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new An(this.width,this.height,{type:Jn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ii({defines:Object.assign({},Ne.defines),uniforms:md.clone(Ne.uniforms),vertexShader:Ne.vertexShader,fragmentShader:Ne.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Cc,this.normalMaterial.blending=0,this.pdMaterial=new ii({defines:Object.assign({},Be.defines),uniforms:md.clone(Be.uniforms),vertexShader:Be.vertexShader,fragmentShader:Be.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ii({defines:Object.assign({},Ie.defines),uniforms:md.clone(Ie.uniforms),vertexShader:Ie.vertexShader,fragmentShader:Ie.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ii({uniforms:md.clone(ie.uniforms),vertexShader:ie.vertexShader,fragmentShader:ie.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new ii({uniforms:md.clone(it.uniforms),vertexShader:it.vertexShader,fragmentShader:it.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new X(null),this._originalClearColor=new we,this.setGBuffer(o?o.depthTexture:void 0,o?o.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),r!==void 0&&this.updatePdMaterial(r)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new vi;s.format=Ri,s.type=_s,this.normalRenderTarget=new An(this.width,this.height,{minFilter:St,magFilter:St,type:Jn,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let i=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ut(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=0,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,i,s,o){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(o||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=r,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,s,o){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),r=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,o=t.clearAlpha||o,s!=null&&(e.setClearColor(s),e.setClearAlpha(o||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=r,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,t.push(i))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new st,i=e*e*4,s=new Uint8Array(i);for(let a=0;a<e;a++)for(let r=0;r<e;r++){let h=a,l=r;s[(a*e+r)*4]=(t.noise(h,l)*.5+.5)*255,s[(a*e+r)*4+1]=(t.noise(h+e,l)*.5+.5)*255,s[(a*e+r)*4+2]=(t.noise(h,l+e)*.5+.5)*255,s[(a*e+r)*4+3]=(t.noise(h+e,l+e)*.5+.5)*255}let o=new Zs(s,e,e,kn,vn);return o.wrapS=Un,o.wrapT=Un,o.needsUpdate=!0,o}};de.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var ot=class extends Sc{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new On;e.deleteAttribute(`uv`);let t=new it$1({side:1}),i=new it$1,s=new hs$1(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let o=new Oe$1(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let a=new Br(e,i,6),r=new yt;r.position.set(-10.906,2.009,1.846),r.rotation.set(0,-.195,0),r.scale.set(2.328,7.905,4.651),r.updateMatrix(),a.setMatrixAt(0,r.matrix),r.position.set(-5.607,-.754,-.758),r.rotation.set(0,.994,0),r.scale.set(1.97,1.534,3.955),r.updateMatrix(),a.setMatrixAt(1,r.matrix),r.position.set(6.167,.857,7.803),r.rotation.set(0,.561,0),r.scale.set(3.927,6.285,3.687),r.updateMatrix(),a.setMatrixAt(2,r.matrix),r.position.set(-2.017,.018,6.124),r.rotation.set(0,.333,0),r.scale.set(2.002,4.566,2.064),r.updateMatrix(),a.setMatrixAt(3,r.matrix),r.position.set(2.291,-.756,-2.621),r.rotation.set(0,-.286,0),r.scale.set(1.546,1.552,1.496),r.updateMatrix(),a.setMatrixAt(4,r.matrix),r.position.set(-2.193,-.369,-5.547),r.rotation.set(0,.516,0),r.scale.set(3.875,3.487,2.986),r.updateMatrix(),a.setMatrixAt(5,r.matrix),this.add(a);let h=new Oe$1(e,pe(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);let l=new Oe$1(e,pe(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let c=new Oe$1(e,pe(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);let d=new Oe$1(e,pe(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let m=new Oe$1(e,pe(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let f=new Oe$1(e,pe(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=/* @__PURE__ */ new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function pe(n){return new Ic({color:0,emissive:16777215,emissiveIntensity:n})}var Ue=`room/`;async function Ms(){try{let n=new Pl().setDecoderPath(`draco/`),e=new Ll().setDRACOLoader(n),t=new ls$1,[i,s,o]=await Promise.all([bs().then(r=>e.parseAsync(r,Ue).then(h=>h.scene)),t.loadAsync(Ue+`light-day.webp`),t.loadAsync(Ue+`light-night.webp`)]);n.dispose();for(let r of[s,o])r.flipY=!1,r.colorSpace=``,r.channel=1,r.generateMipmaps=!0,r.minFilter=zn,r.anisotropy=4;let a=/* @__PURE__ */ new Map;return i.updateMatrixWorld(!0),i.traverse(r=>{let h=r;h.isMesh&&(h.geometry.applyMatrix4(h.matrixWorld),a.set(h.name,h))}),{meshes:a,day:s,night:o}}catch(n){return console.warn(`Lumière pré-calculée indisponible, rendu temps réel.`,n),null}}async function bs(){let n=await fetch(Ue+`room.glb`);if(n.ok){let t=await n.arrayBuffer();if(new TextDecoder().decode(new Uint8Array(t,0,4))===`glTF`)return t}let{data:e}=await(await fetch(Ue+`room.glb.json`)).json();return Uint8Array.from(atob(e),t=>t.charCodeAt(0)).buffer}function Gi(n,e){let t={night:{value:0},exposure:{value:1},count:0},i=/* @__PURE__ */ new Map,s=[];n.updateMatrixWorld(!0);let o=new Xe$1;return QS(n,(a,r)=>{let h=e.meshes.get(r);if(!h)return;let l=f=>String(f).split(`:`)[0];if(l(h.userData.sig)!==l(eb(a))){s.push(r);return}let c=a.material,d=i.get(c);d||(d=ws(c,e,t),i.set(c,d),c.userData.bakedTwin=d);let m=h.geometry.clone();if(m.applyMatrix4(o.copy(a.matrixWorld).invert()),!Es(m,a.geometry)){m.dispose(),s.push(r);return}if(!m.attributes.uv1)m.setAttribute(`uv1`,m.attributes.uv),m.deleteAttribute(`uv`);else{let f=m.attributes.uv;for(let u=0;u<f.count;u++)f.setY(u,1-f.getY(u));f.needsUpdate=!0}m.computeBoundingSphere(),a.geometry=m,a.material=d,a.castShadow=!1,a.receiveShadow=!1,t.count++}),s.length&&console.warn(`Lumi\xE8re pr\xE9-calcul\xE9e p\xE9rim\xE9e pour ${s.length} objet(s) : relancer \xAB npm run bake \xBB.`,s.slice(0,10)),t}var ji=new L;var Fi=new L;function Es(n,e){return n.computeBoundingBox(),e.boundingBox||e.computeBoundingBox(),n.boundingBox.getSize(ji),e.boundingBox.getSize(Fi),ji.distanceTo(Fi)<.02}function ws(n,e,t){let i=new on({color:n.color,map:n.map,side:n.side,lightMap:e.day});return i.onBeforeCompile=s=>{s.uniforms.lightMapNight={value:e.night},s.uniforms.uNight=t.night,s.uniforms.uExposure=t.exposure,s.fragmentShader=s.fragmentShader.replace(`void main() {`,`uniform sampler2D lightMapNight;
uniform float uNight;
uniform float uExposure;
vec3 decodeLight( vec3 e ) {
  vec3 t = min( pow( e, vec3( 2.2 ) ), vec3( 0.996 ) );
  return t / ( 1.0 - t );
}
void main() {`).replace(`reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;`,`vec3 lightDay = decodeLight( lightMapTexel.rgb );
    // soir tamis\xE9 : les lampes ressortent, le reste de la pi\xE8ce reste dans la p\xE9nombre
    vec3 lightNight = decodeLight( texture2D( lightMapNight, vLightMapUv ).rgb ) * 0.42;
    reflectedLight.indirectDiffuse += mix( lightDay, lightNight, uNight ) * uExposure;`)},i.customProgramCacheKey=()=>`baked`,i}var at={stand:{hip:.175,pitch:0,front:0,hind:0,legScale:1,headPitch:0,headDrop:0,headYaw:0,tailLift:.9,tailCurl:-.18,tailYaw:0,eyes:1,curl:0},sit:{hip:.16,pitch:.62,front:-.62,hind:1.25,legScale:.8,headPitch:-.55,headDrop:0,headYaw:.15,tailLift:-.75,tailCurl:.05,tailYaw:.5,eyes:1,curl:0},sleep:{hip:.075,pitch:0,front:-1.45,hind:1.45,legScale:.55,headPitch:.25,headDrop:-.06,headYaw:1.15,tailLift:-.15,tailCurl:0,tailYaw:1.3,eyes:0,curl:1}};var rt=class{root=new Bt$1;body=new Bt$1;torso;head=new Bt$1;ears=[];eyes=[];legs=[];tail=[];pose=l({},at.sit);behaviour=`sit`;timer=4;spot=`rug`;path=[];hop=null;walkPhase=0;heading=-2.4;petTimer=0;earTwitch=0;destination=null;lookYaw=0;reducedMotion=!1;night=0;contactShadow=null;constructor(){this.build();let e=R$1.spots[this.spot];this.root.position.set(e.x,e.y,e.z),this.root.rotation.y=this.heading,this.root.scale.setScalar(R$1.scale)}setReducedMotion(e){this.reducedMotion=e}setContactShadow(e,t){if(!t){this.contactShadow?.removeFromParent();return}if(!this.contactShadow){let i=document.createElement(`canvas`);i.width=i.height=64;let s=i.getContext(`2d`),o=s.createRadialGradient(32,32,0,32,32,32);o.addColorStop(0,`rgba(40,28,22,0.55)`),o.addColorStop(.55,`rgba(40,28,22,0.25)`),o.addColorStop(1,`rgba(40,28,22,0)`),s.fillStyle=o,s.fillRect(0,0,64,64);let a=new Vr(i);a.colorSpace=xt;let r=new Oe$1(new $t(.6,.34),new on({map:a,transparent:!0,depthWrite:!1}));r.geometry.rotateX(-Math.PI/2),r.renderOrder=1,r.raycast=()=>{},this.contactShadow=r}e.add(this.contactShadow)}followShadow(){let e=this.contactShadow;e?.parent&&(e.position.set(this.root.position.x,this.root.position.y+.004,this.root.position.z),e.rotation.y=this.root.rotation.y,e.scale.setScalar(this.root.scale.x))}isAsleep(){return this.behaviour===`sleep`}anchor(e){return this.torso.getWorldPosition(e).add(new L(0,.16,0))}pet(e){if(this.behaviour===`sleep`)return this.earTwitch=.6,`ear`;if(this.behaviour===`walk`&&(this.behaviour=`idle`,this.path=[],this.hop=null),this.petTimer=Math.max(this.petTimer,2.4),e){let t=this.root.worldToLocal(e.clone());this.lookYaw=Tl.clamp(Math.atan2(-t.z,t.x),-.9,.9)}return`purr`}debugSet(e,t){if(t){this.spot=t;let i=R$1.spots[t];this.root.position.set(i.x,i.y,i.z)}this.path=[],this.hop=null,this.behaviour=e,this.timer=60}goTo(e){if(this.behaviour===`sleep`&&this.reducedMotion)return;if(this.spot===e&&!this.path.length){this.behaviour=`sit`,this.timer=6;return}let t=this.route(this.spot,e);t.length>1&&(this.petTimer=0,this.path=t.slice(1),this.behaviour=`walk`,this.destination=e)}notice(){this.earTwitch<=0&&(this.earTwitch=.6)}isBeingPetted(){return this.petTimer>0}update(e,t,i){this.followShadow(),this.night=i,e=Math.min(e,.1),this.petTimer>0&&(this.petTimer-=e),this.earTwitch>0&&(this.earTwitch-=e),this.petTimer<=0&&this.think(e),this.behaviour===`walk`&&this.petTimer<=0&&this.walk(e);let s=this.behaviour===`sleep`?at.sleep:this.behaviour===`sit`?at.sit:at.stand,o=l({},s),a=this.petTimer>0;a&&(o.eyes=0,o.headPitch=s.headPitch+.3,o.headYaw=this.lookYaw,o.pitch=s.pitch+.06);let r=1-Math.exp(-e*(this.reducedMotion?3:5));Object.keys(o).forEach(h=>{this.pose[h]+=(o[h]-this.pose[h])*r}),this.applyPose(t,a)}think(e){if(this.behaviour===`walk`||(this.timer-=e,this.timer>0))return;let t=this.night>.5,i=t?R$1.sleepSpots.night:R$1.sleepSpots.day,s=Math.random();if(this.reducedMotion){this.behaviour=this.behaviour===`sleep`?`sit`:s<(t?.7:.4)?`sleep`:`sit`,this.timer=this.behaviour===`sleep`?20:10;return}if(this.behaviour===`sleep`){this.behaviour=`sit`,this.timer=3+Math.random()*3;return}if(i.includes(this.spot)&&s<(t?.75:.35)){this.behaviour=`sleep`,this.timer=t?30+Math.random()*25:14+Math.random()*12;return}if(s<.3){this.behaviour=`sit`,this.timer=4+Math.random()*5;return}let a=Object.keys(R$1.spots),h=(Math.random()<(t?.8:.35)?i:a).filter(d=>d!==this.spot),l=h[Math.floor(Math.random()*h.length)],c=this.route(this.spot,l);c.length>1?(this.path=c.slice(1),this.behaviour=`walk`):(this.behaviour=`idle`,this.timer=2)}route(e,t){let i=/* @__PURE__ */ new Map([[e,null]]),s=[e];for(;s.length;){let a=s.shift();if(a===t)break;for(let[r,h]of R$1.links){let l=r===a?h:h===a?r:null;l&&!i.has(l)&&(i.set(l,a),s.push(l))}}if(!i.has(t))return[e];let o=[];for(let a=t;a;a=i.get(a)??null)o.unshift(a);return o}walk(e){let t=this.path[0];if(!t){this.behaviour=`idle`,this.timer=1+Math.random()*2;return}let i=R$1.spots[t],s=new L(i.x,i.y,i.z),o=this.root.position;if(this.hop){this.hop.t+=e/.55;let d=Math.min(1,this.hop.t);o.lerpVectors(this.hop.from,this.hop.to,d),o.y+=Math.sin(d*Math.PI)*.35,d>=1&&(this.hop=null,this.arrive(t));return}let a=new L(s.x-o.x,0,s.z-o.z),r=a.length(),h=Math.atan2(-a.z,a.x);if(this.heading=Ts(this.heading,h,e*4),this.root.rotation.y=this.heading,Math.abs(s.y-o.y)>.05&&r<.75){this.hop={from:o.clone(),to:s,t:0};return}let c=Math.abs(Wi(this.heading,h))<.6?.38:.08;if(this.walkPhase+=e*c*22,r<.03){this.arrive(t);return}a.normalize().multiplyScalar(Math.min(r,c*e)),o.add(a)}arrive(e){if(this.spot=e,this.path.shift(),!this.path.length){if(this.destination===e){this.destination=null,this.behaviour=`sit`,this.timer=6,e===`bowl`&&(this.heading=this.root.rotation.y=Math.PI),e===`aquarium`&&(this.heading=this.root.rotation.y=-Math.PI/2);return}this.behaviour=`idle`,this.timer=.6+Math.random()}}build(){let e=Yi(R$1.coat,R$1.belly,.38),t=Yi(R$1.coat,R$1.belly,.5),i=u=>new Lt({map:u,roughness:.85,sheen:.8,sheenRoughness:.6,sheenColor:new we(`#e9d2bd`)}),s=i(e),o=new Lt({color:R$1.coat,roughness:.85,sheen:.8,sheenRoughness:.6,sheenColor:new we(`#e9d2bd`)}),a=Ye(R$1.belly,{roughness:.9}),r=Ye(`#e7a3a6`,{roughness:.6});this.root.name=`hiki`,this.root.add(this.body),this.torso=Le(this.body,.1,s,0,0,0,1.85,.95,1),Le(this.body,.07,a,.1,-.025,0,1,1,.9),this.head.position.set(.18,.08,0),this.body.add(this.head);let h=Le(this.head,.074,i(t),0,.004,0,1,.92,1.08);h.rotation.z=Math.PI/2,[-1,1].forEach(u=>Le(this.head,.04,o,.035,-.022,u*.032,1,.85,1)),Le(this.head,.03,a,.064,-.028,0,.8,.7,1.35),Le(this.head,.009,r,.091,-.012,0,.7,.6,1.1);let l=new Lt({color:R$1.eyes,roughness:.15,clearcoat:1,clearcoatRoughness:.05});[-1,1].forEach(u=>{let w=Le(this.head,.017,l,.055,.014,u*.032,.75,1,1);Le(w,.011,Ye(`#15110e`),.01,0,0,.5,1.05,.42),Le(w,.0038,Ye(`#ffffff`,{roughness:.2}),.016,.006,-u*.004),this.eyes.push(w);let E=new Bt$1;E.position.set(-.012,.052,u*.04),E.rotation.x=u*.32;let M=new Oe$1(new qr(.03,.062,24),o);M.scale.set(1,1,.55),M.position.y=.026,M.castShadow=!0,E.add(M);let b=new Oe$1(new qr(.019,.042,20),r);b.scale.set(.45,1,.5),b.position.set(.011,.022,0),E.add(b),this.head.add(E),this.ears.push(E);let D=Ye(`#f4efe8`,{roughness:.4});[-.25,0,.25].forEach((T,O)=>{let x=new Oe$1(new Fn(7e-4,4e-4,.075,4),D);x.position.set(.07,-.026+O*.004,u*.05),x.rotation.set(Math.PI/2+u*.15,0,T*u),x.rotation.order=`XZY`,x.rotation.y=u*.35,this.head.add(x)})});let c=new Ec(.02,.12,8,16);c.translate(0,-.075,0),[[.12,.05,!0],[.12,-.05,!0],[-.12,.055,!1],[-.12,-.055,!1]].forEach(([u,w,E])=>{let M=new Bt$1;M.position.set(u,-.03,w);let b=new Oe$1(c,o);b.castShadow=!0,M.add(b),Le(M,.024,a,.008,-.158,0,1.25,.65,1.05),this.body.add(M),this.legs.push({pivot:M,front:E})});let d=this.body,m=9;for(let u=0;u<m;u++){let w=.019-u/m*.007,E=new Ec(w,.03,6,14);E.rotateZ(Math.PI/2),E.translate(-.019,0,0);let M=new Bt$1;M.position.set(u===0?-.175:-.038,u===0?.03:0,0);let b=new Oe$1(E,u>=7?Ye(`#4e3d33`,{roughness:.9}):u%2?o:Ye(R$1.coatLight,{roughness:.9}));b.castShadow=!0,M.add(b),d.add(M),this.tail.push(M),d=M}let f=new Oe$1(new On(.55,.32,.3),new on({visible:!1}));f.position.set(.02,0,0),f.userData.hitBox=!0,this.body.add(f)}applyPose(e,t){let i=this.pose,s=this.behaviour===`walk`&&!t&&!this.hop,o=Math.sin(e*(this.behaviour===`sleep`?1.6:2.6))*(this.behaviour===`sleep`?.04:.015);this.body.position.y=i.hip+(s?Math.abs(Math.sin(this.walkPhase))*.008:0),this.body.rotation.z=i.pitch,this.torso.scale.set(1.85-i.curl*.35,.95*(1+o),1+i.curl*.25),this.head.position.set(.18-i.curl*.04,.08+i.headDrop,i.curl*.06),this.head.rotation.set(0,i.headYaw,i.headPitch+(t?Math.sin(e*2)*.05:0)),this.legs.forEach(({pivot:c,front:d},m)=>{let f=s?Math.sin(this.walkPhase+(m%2?Math.PI:0)+(d?0:Math.PI/2))*.45:0;c.rotation.z=(d?i.front:i.hind)+f,c.scale.y=i.legScale});let a=t?.35:s?.12:this.behaviour===`sleep`?.03:.08,r=t?4:2;this.tail.forEach((c,d)=>{let m=Math.sin(e*r-d*.6)*a*(d/6);c.rotation.z=d===0?i.tailLift:i.tailCurl,c.rotation.y=(d===0?0:i.tailYaw/6*(1+i.curl))+m});let h=i.eyes>.5&&e%4.3<.12?.15:1;this.eyes.forEach(c=>c.scale.y=Math.max(.12,i.eyes*h));let l=this.earTwitch>0?Math.sin((.6-this.earTwitch)*30)*.5:0;this.ears[0].rotation.z=l,this.ears[1].rotation.z=0}};function Wi(n,e){let t=e-n;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t}function Ts(n,e,t){let i=Wi(n,e);return n+Math.sign(i)*Math.min(Math.abs(i),t)}function Yi(n,e,t){return Qt(512,256,(i,s,o)=>{let a=i.createLinearGradient(0,0,0,o);a.addColorStop(0,`#5e4a3d`),a.addColorStop(.25,n),a.addColorStop(1-t,n),a.addColorStop(1,e),i.fillStyle=a,i.fillRect(0,0,s,o),i.strokeStyle=`rgba(58,42,32,0.55)`,i.lineCap=`round`;for(let r=0;r<22;r++){let h=r/22*s+Math.sin(r*7.3)*6;i.lineWidth=5+r%3*3,i.beginPath(),i.moveTo(h,0),i.bezierCurveTo(h+10,o*.2,h-8,o*.35,h+4,o*(.55-r%4*.04)),i.stroke()}for(let r=0;r<2500;r++)i.fillStyle=r%2?`rgba(255,240,225,0.06)`:`rgba(40,28,20,0.08)`,i.fillRect(Math.random()*s,Math.random()*o,1,3)})}var nt=class{pos=new Me(s.start.x,s.start.z);yaw=0;pitch=0;stick=new Me;keys=/* @__PURE__ */ new Set;vel=new Me;bobPhase=0;bobAmount=0;rects;circles;r=s.bodyRadius;constructor(){let e=D();this.rects=e.rects,this.circles=e.circles,this.lookAtPoint(new L(...s.lookAt))}lookAtPoint(e){let t=e.x-this.pos.x,i=e.z-this.pos.y,s$1=e.y-s.eyeHeight;this.yaw=Math.atan2(-t,-i),this.pitch=Math.atan2(s$1,Math.hypot(t,i))}press(e,t){t?this.keys.add(e):this.keys.delete(e)}release(){this.keys.clear(),this.stick.set(0,0),this.vel.set(0,0),this.bobAmount=0}look(e,t){this.yaw+=e*.0042,this.pitch=Tl.clamp(this.pitch+t*.0042,-1.15,1)}update(e,t){let i=0,s$2=0;t.frozen||(i=(this.keys.has(`forward`)?1:0)-(this.keys.has(`back`)?1:0)+this.stick.y,s$2=(this.keys.has(`right`)?1:0)-(this.keys.has(`left`)?1:0)+this.stick.x);let o=Math.hypot(i,s$2);o>1&&(i/=o,s$2/=o);let a=Math.sin(this.yaw),r=Math.cos(this.yaw),h=(-a*i+r*s$2)*s.walkSpeed,l=(-r*i-a*s$2)*s.walkSpeed,c=1-Math.exp(-e*(t.frozen?20:9));if(this.vel.x+=(h-this.vel.x)*c,this.vel.y+=(l-this.vel.y)*c,this.vel.lengthSq()<1e-6)return this.vel.set(0,0),this.bobAmount=Math.max(0,this.bobAmount-e*3),!1;let d=this.pos.clone(),m=Math.max(1,Math.ceil(this.vel.length()*e/.05));for(let u=0;u<m;u++)this.move(this.vel.x*e/m,this.vel.y*e/m);let f=d.distanceTo(this.pos);return t.reducedMotion?this.bobAmount=0:(this.bobPhase+=f/.7*Math.PI,this.bobAmount=Math.min(1,this.bobAmount+e*4)),f<1e-4&&(this.bobAmount=Math.max(0,this.bobAmount-e*3)),f>1e-5}apply(e,t){let i=this.bobAmount;e.position.set(this.pos.x,s.eyeHeight+Math.abs(Math.sin(this.bobPhase))*.022*i-.011*i,this.pos.y),e.rotation.order=`YXZ`,e.rotation.set(this.pitch,this.yaw,Math.sin(this.bobPhase)*.004*i),t&&t.copy(e.position).add(this.forward())}forward(){let e=Math.cos(this.pitch);return new L(-Math.sin(this.yaw)*e,Math.sin(this.pitch),-Math.cos(this.yaw)*e)}view(){let e=new L(this.pos.x,s.eyeHeight,this.pos.y);return{position:e,target:e.clone().add(this.forward())}}blocked(e,t){let i=this.r;for(let s of this.rects)if(e>s.minX-i&&e<s.maxX+i&&t>s.minZ-i&&t<s.maxZ+i)return!0;for(let s of this.circles)if(Math.hypot(e-s.x,t-s.z)<s.r+i)return!0;return!1}move(e,t){let i=this.pos,s=this.circles.find(o=>Math.hypot(i.x+e-o.x,i.y+t-o.z)<o.r+this.r);if(s){let o=i.x-s.x,a=i.y-s.z,r=Math.hypot(o,a)||1,h=(e*o+t*a)/r;h<0&&(e-=h*o/r,t-=h*a/r)}this.blocked(i.x+e,i.y)||(i.x+=e),this.blocked(i.x,i.y+t)||(i.y+=t)}};var Ki=class{constructor(e,t,i,s=null,o=/* @__PURE__ */ new Map){this.host=e;this.canvas=t;this.cb=i;this.renderer=new zd({canvas:t,antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.camera=new Zt(W.fov,1,.05,60),this.room=Zb(o),this.bake=s?Gi(this.room.root,s):null,this.bake&&(this.renderer.shadowMap.enabled=!1,this.hiki.setContactShadow(this.scene,!0)),this.scene.add(this.room.root),this.scene.add(this.hiki.root),this.hiki.root.userData.interactiveId=`hiki`,this.room.interactives.set(`hiki`,this.hiki.root),this.controls=new Qe(this.camera,t),this.controls.enablePan=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.08,this.controls.rotateSpeed=.5,this.controls.zoomSpeed=.6;let a=new Rl(this.renderer);this.scene.environment=a.fromScene(new ot,.04).texture,a.dispose();let r=new An(1,1,{type:Jn,samples:4});if(this.composer=new Je(this.renderer,r),this.composer.addPass(new tt(this.scene,this.camera)),!(typeof matchMedia<`u`&&matchMedia(`(pointer: coarse)`).matches)&&!this.bake){let l=new de(this.scene,this.camera,1,1);l.output=de.OUTPUT.Default,l.blendIntensity=.75,l.updateGtaoMaterial({radius:.35,distanceExponent:1.5,thickness:1,scale:1}),this.composer.addPass(l),this.aoPass=l}this.outline=new ue(new Me(256,256),this.scene,this.camera),this.outline.edgeStrength=3.2,this.outline.edgeGlow=.2,this.outline.edgeThickness=1.2,this.outline.visibleEdgeColor.set(`#ff8fb3`),this.outline.hiddenEdgeColor.set(`#b38fff`),this.composer.addPass(this.outline),this.composer.addPass(new et),this.room.interactives.forEach((l,c)=>{c!==`hiki`&&this.rest.set(c,{pos:l.position.clone(),rot:l.rotation.clone(),lift:0})}),this.applyNight(),this.resize(),this.camera.position.copy(this.overview.position),this.controls.target.copy(this.overview.target),this.camera.fov=this.overview.fov??W.fov,this.applyViewOffset(),this.controls.update(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),e.addEventListener(`pointerdown`,this.onPointerDown,{capture:!0}),e.addEventListener(`pointermove`,this.onPointerMove),window.addEventListener(`pointerup`,this.onPointerUp),window.addEventListener(`pointercancel`,this.onPointerUp),t.addEventListener(`pointerleave`,this.onPointerLeave),t.addEventListener(`pointerenter`,this.onPointerEnter),window.addEventListener(`keydown`,this.onKeyDown),window.addEventListener(`keyup`,this.onKeyUp),window.addEventListener(`blur`,this.onBlur),this.loop()}host;canvas;cb;renderer;scene=new Sc;camera;controls;composer;outline;room;hiki=new rt;walker=new nt;looking=null;inputEnabled=!0;pointerInside=!1;keyOf=/* @__PURE__ */ new Map;raycaster=new Fc;timer=new Uc;frameId=0;aoPass=null;bake;perf={frames:0,time:0};resizeObserver;night=0;nightTarget=0;tvOn=!1;tvFlashTimer=0;tvFlashKind=`hubtv`;reducedMotion=!1;lavaOverride=null;inset={right:0,bottom:0};insetTarget={right:0,bottom:0};overview;viewMode=`inside`;savedView=null;tween=null;focused=null;hovered=null;keyboardHighlight=null;pointer=new Me;pointerDirty=!1;down=null;petting=!1;lastStroke=0;strokes=0;rest=/* @__PURE__ */ new Map;eggAnims=[];setNight(e,t=!1){(e?1:0)!==this.nightTarget&&(this.lavaOverride=null),this.nightTarget=e?1:0,t&&(this.night=this.nightTarget,this.applyNight())}setReducedMotion(e){this.reducedMotion=e,this.hiki.setReducedMotion(e),this.controls.enableDamping=!e}setTvOn(e){this.tvOn=e}setInsets(e,t){this.insetTarget={right:e,bottom:t}}setInputEnabled(e){this.inputEnabled=e,e||(this.walker.release(),this.keyOf.clear(),this.looking=null)}setMoveInput(e,t){this.walker.stick.set(e,t)}toggleLava(){return this.lavaOverride=!this.room.lava.on,this.room.lava.on=this.lavaOverride,this.lavaOverride}flashTv(e=`hubtv`){this.tvFlashKind=e,this.tvFlashTimer=e===`retro`?4.5:2.8}highlight(e){this.keyboardHighlight=e,this.updateOutline()}petHiki(){let e=this.hiki.pet(this.camera.position);return this.cb.petted(e),e}hikiAsleep(){return this.hiki.isAsleep()}focus(e){let t=o(e),i=this.room.interactives.get(e);if(!t.focus||!i)return;let s=this.centerOf(i),[o$1,a,r]=t.focus.offset,h=(this.host.clientWidth||1)/(this.host.clientHeight||1),l$1=(t.focus.distanceScale??1)*(h<1?1.25/Math.max(h,.45):1),c=new L(o$1,a,r).multiplyScalar(Math.min(l$1,2.6)),d={target:s,position:s.clone().add(c),fov:this.overview.fov};this.savedView||(this.viewMode===`inside`?(this.walker.release(),this.savedView=m(l({},this.walker.view()),{fov:this.camera.fov})):this.savedView=this.currentView()),this.focused=e,this.controls.enabled=!1,this.startTween(d,.6)}unfocus(){if(!this.savedView)return;let e=this.savedView;this.savedView=null,this.focused=null,this.startTween(e,.5,()=>this.enterModeControls())}enterModeControls(){this.viewMode===`inside`?(this.controls.enabled=!1,this.walker.apply(this.camera,this.controls.target)):(this.configureOrbit(),this.controls.enabled=!0,this.controls.update())}setViewMode(e,t=!1){if(!(e===this.viewMode&&!t)){if(this.viewMode=e,this.overview=this.computeOverview(),this.focused){this.savedView=this.overview;return}if(this.controls.enabled=!1,this.walker.release(),t){this.camera.position.copy(this.overview.position),this.controls.target.copy(this.overview.target),this.camera.fov=this.overview.fov??W.fov,this.applyViewOffset(),this.enterModeControls();return}this.startTween(this.overview,.8,()=>this.enterModeControls())}}travel(e){let t=S[e];this.savedView=null,this.focused=null,this.viewMode=`inside`,this.controls.enabled=!1,this.walker.release(),this.walker.pos.set(t.x,t.z),this.walker.lookAtPoint(new L(...t.lookAt));let i=(this.host.clientWidth||1)/(this.host.clientHeight||1);this.overview=m(l({},this.walker.view()),{fov:i<1?s.fovPortrait:s.fov}),this.startTween(this.overview,.7,()=>this.enterModeControls())}resetView(){this.savedView=null,this.focused=null,this.startTween(this.overview,.6,()=>this.enterModeControls())}screenPosition(e,t){let i=this.room.interactives.get(e);if(!i)return t.visible=!1;let s=e===`hiki`?this.hiki.anchor(new L):this.topOf(i);return s.project(this.camera),t.visible=s.z<1&&Math.abs(s.x)<1.1&&Math.abs(s.y)<1.1&&this.isShown(i),t.x=(s.x+1)/2*this.host.clientWidth,t.y=(1-s.y)/2*this.host.clientHeight,t.visible}sideOf(e){let t=this.room.interactives.get(e);return t&&this.centerOf(t).applyMatrix4(this.camera.matrixWorldInverse).x<0?-1:1}playEgg(e){let t=this.room.interactives.get(e);!t||this.eggAnims.some(i=>i.obj===t)||(this.eggAnims.push({obj:t,t:0,kind:e,base:this.rest.get(e)?.rot.clone()??t.rotation.clone(),basePos:this.rest.get(e)?.pos.clone()??t.position.clone()}),e===`egg-controller`&&this.flashTv(),e===`egg-bowl`&&this.hiki.goTo(`bowl`),e===`egg-aquarium`&&this.hiki.goTo(`aquarium`),e===`egg-retro`&&this.flashTv(`retro`),this.room.eggEffects.get(e)?.())}dispose(){cancelAnimationFrame(this.frameId),this.resizeObserver.disconnect(),this.host.removeEventListener(`pointerdown`,this.onPointerDown,{capture:!0}),this.host.removeEventListener(`pointermove`,this.onPointerMove),window.removeEventListener(`pointerup`,this.onPointerUp),window.removeEventListener(`pointercancel`,this.onPointerUp),this.canvas.removeEventListener(`pointerleave`,this.onPointerLeave),this.canvas.removeEventListener(`pointerenter`,this.onPointerEnter),window.removeEventListener(`keydown`,this.onKeyDown),window.removeEventListener(`keyup`,this.onKeyUp),window.removeEventListener(`blur`,this.onBlur),this.controls.dispose(),this.composer.dispose(),this.scene.traverse(e=>{let t=e;t.geometry?.dispose(),(Array.isArray(t.material)?t.material:t.material?[t.material]:[]).forEach(s=>{Object.values(s).forEach(o=>o instanceof kt&&o.dispose()),s.dispose()})}),this.renderer.dispose()}loop=()=>{this.frameId=requestAnimationFrame(this.loop),this.timer.update();let e=Math.min(this.timer.getDelta(),.1),t=this.timer.getElapsed();if(this.checkPerformance(this.timer.getDelta()),this.night!==this.nightTarget){let r=e/(this.reducedMotion?.8:2.6);this.night+=Math.sign(this.nightTarget-this.night)*Math.min(r,Math.abs(this.nightTarget-this.night)),this.applyNight()}this.tvFlashTimer>0&&(this.tvFlashTimer-=e);let i=this.tvFlashTimer>0,s=this.room.tv.screen,o=i?this.room.tv[this.tvFlashKind]:this.room.tv.jellyfish;s.emissiveMap!==o&&(s.emissiveMap=o,s.needsUpdate=!0);let a=this.tvOn||i?1:0;if(s.emissiveIntensity+=(a-s.emissiveIntensity)*Math.min(1,e*8),this.room.tv.light.intensity=s.emissiveIntensity*.9,this.room.lava.on=this.lavaOverride??this.nightTarget>.5,this.room.lava.step(e,t,this.night,this.reducedMotion),this.stepInsets(e),this.tween)this.stepTween(e);else if(this.viewMode===`inside`){if(!this.focused){let r=this.walker.update(e,{frozen:this.petting||!this.inputEnabled,reducedMotion:this.reducedMotion});this.walker.apply(this.camera,this.controls.target),r&&this.pointerInside&&(this.pointerDirty=!0)}}else this.controls.update();this.reducedMotion||this.room.tickers.forEach(r=>r(t)),this.hiki.update(e,t,this.night),this.stepHover(e,t),this.stepEggs(e),this.updateWalls(),this.pointerDirty&&(this.pointerDirty=!1,this.updateHover()),this.composer.render(),this.cb.frame()};checkPerformance(e){!this.aoPass?.enabled||this.perf.frames>90||(this.perf.frames++,!(this.perf.frames<=10)&&(this.perf.time+=e,this.perf.frames===90&&this.perf.time/80>1/35&&(this.aoPass.enabled=!1)))}computeOverview(){let e=(this.host.clientWidth||1)/(this.host.clientHeight||1);if(this.viewMode===`inside`)return m(l({},this.walker.view()),{fov:e<1?s.fovPortrait:s.fov});let t=new L(...W.target),i=new L(...W.direction).normalize(),s$3=(this.host.clientWidth||1)/(this.host.clientHeight||1),o=7.4,a=Tl.degToRad(W.fov),r=2*Math.atan(Math.tan(a/2)*s$3),h=o/2/Math.tan(r/2),l$2=Math.max(W.distance,h*.92);return{target:t,position:t.clone().addScaledVector(i,l$2),fov:W.fov}}configureOrbit(){if(this.viewMode===`inside`)return;this.controls.rotateSpeed=.5,this.controls.enableZoom=!0;let e=this.overview.position.distanceTo(this.overview.target),t=this.overview.position.clone().sub(this.overview.target),i=new zc().setFromVector3(t);this.controls.minAzimuthAngle=i.theta-.38,this.controls.maxAzimuthAngle=i.theta+.38,this.controls.minPolarAngle=Math.max(.35,i.phi-.3),this.controls.maxPolarAngle=Math.min(1.25,i.phi+.22),this.controls.minDistance=e*.55,this.controls.maxDistance=e*1.12}currentView(){return{position:this.camera.position.clone(),target:this.controls.target.clone(),fov:this.camera.fov}}startTween(e,t,i){this.tween={from:this.currentView(),to:e,t:0,duration:this.reducedMotion?0:t,done:i}}stepTween(e){let t=this.tween;t.t=t.duration===0?1:Math.min(1,t.t+e/t.duration);let i=t.t<.5?4*t.t**3:1-(-2*t.t+2)**3/2;this.camera.position.lerpVectors(t.from.position,t.to.position,i),this.controls.target.lerpVectors(t.from.target,t.to.target,i),t.from.fov!==void 0&&t.to.fov!==void 0&&(this.camera.fov=t.from.fov+(t.to.fov-t.from.fov)*i,this.applyViewOffset()),this.camera.lookAt(this.controls.target),t.t>=1&&(this.tween=null,t.done?.(),this.controls.update())}stepInsets(e){let t=this.reducedMotion?1:Math.min(1,e*5),i=this.inset,s=this.insetTarget;if(Math.abs(i.right-s.right)<.5&&Math.abs(i.bottom-s.bottom)<.5){if(i.right===s.right&&i.bottom===s.bottom)return;i.right=s.right,i.bottom=s.bottom}else i.right+=(s.right-i.right)*t,i.bottom+=(s.bottom-i.bottom)*t;this.applyViewOffset()}applyViewOffset(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1,{right:i,bottom:s}=this.inset;this.camera.aspect=(e+i)/(t+s),i<.5&&s<.5?this.camera.clearViewOffset():this.camera.setViewOffset(e+i,t+s,i,s,e,t),this.camera.updateProjectionMatrix()}resize(){let e=this.host.clientWidth||1,t=this.host.clientHeight||1;this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.camera.aspect=e/t,this.applyViewOffset();let i=this.overview;this.overview=this.computeOverview(),this.configureOrbit(),i&&!this.focused&&!this.tween&&(this.camera.fov=this.overview.fov??W.fov,this.applyViewOffset(),this.viewMode===`inside`?this.walker.apply(this.camera,this.controls.target):(this.camera.position.copy(this.overview.position),this.controls.target.copy(this.overview.target),this.controls.update()))}applyNight(){let e=this.night,t=e*e*(3-2*e);this.room.dimmables.forEach(i=>i.apply(t)),this.renderer.toneMappingExposure=1+t*.25,this.bake&&(this.bake.night.value=t),this.scene.environmentIntensity=.45-t*.37}tmp=new L;updateWalls(){for(let e of this.room.walls)e.group.visible=this.tmp.copy(this.camera.position).sub(e.center).dot(e.normal)<.5}onPointerDown=e=>{if(e.button!==0&&e.pointerType===`mouse`||e.target!==this.canvas)return;this.setPointer(e);let i=this.pick()===`hiki`;if(this.down={x:e.clientX,y:e.clientY,time:performance.now(),id:e.pointerId,onHiki:i},i&&!this.focused){this.petting=!0,this.strokes=0,this.controls.enabled=!1,this.canvas.style.cursor=`grabbing`,this.cb.petGesture(!0),e.preventDefault();return}if(this.viewMode===`inside`&&!this.focused&&!this.tween&&this.inputEnabled){this.looking={id:e.pointerId,x:e.clientX,y:e.clientY};try{this.canvas.setPointerCapture(e.pointerId)}catch{}}};onPointerMove=e=>{if(this.looking&&e.pointerId===this.looking.id&&!this.petting&&(this.walker.look(e.clientX-this.looking.x,e.clientY-this.looking.y),this.looking.x=e.clientX,this.looking.y=e.clientY),!(e.target!==this.canvas&&!this.petting&&!this.looking)){if(this.setPointer(e),this.petting){let t=performance.now();t-this.lastStroke>280&&this.pick()===`hiki`&&this.down&&Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>8&&(this.lastStroke=t,this.strokes++,this.petHiki());return}e.pointerType===`mouse`&&(this.pointerDirty=!0)}};onPointerUp=e=>{this.looking?.id===e.pointerId&&(this.looking=null);let t=this.down;if(this.down=null,!t||t.id!==e.pointerId)return;let i=Math.hypot(e.clientX-t.x,e.clientY-t.y),s=performance.now()-t.time<600;if(this.petting){this.petting=!1,this.canvas.style.cursor=``,!this.focused&&this.viewMode===`top`&&(this.controls.enabled=!0),this.cb.petGesture(!1),this.strokes===0&&this.petHiki();return}if(i<8&&s&&e.target===this.canvas){this.setPointer(e);let o=this.pick();o&&this.cb.activate(o)}};onPointerEnter=()=>{this.pointerInside=!0};onKeyDown=e=>{if(e.ctrlKey||e.metaKey||e.altKey||this.viewMode!==`inside`||this.focused||!this.inputEnabled)return;let t=e.target;if(t&&(t.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)))return;let i=Zi(e.key);i&&(e.preventDefault(),this.keyOf.set(e.code,i),this.walker.press(i,!0))};onKeyUp=e=>{let t=this.keyOf.get(e.code)??Zi(e.key);this.keyOf.delete(e.code),t&&![...this.keyOf.values()].includes(t)&&this.walker.press(t,!1)};onBlur=()=>{this.walker.release(),this.keyOf.clear(),this.looking=null};onPointerLeave=()=>{this.pointerInside=!1,this.hovered&&(this.hovered=null,this.updateOutline(),this.cb.hover(null)),this.canvas.style.cursor=``};setPointer(e){let t=this.canvas.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}pick(){this.raycaster.setFromCamera(this.pointer,this.camera);let e=this.raycaster.intersectObjects([this.room.root,this.hiki.root],!0);for(let t of e){if(!this.isShown(t.object))continue;let s=t.object.material;if(s&&!s.visible&&!t.object.userData.hitBox||s?.transparent&&!t.object.userData.hitBox)continue;let o=t.object;for(;o;){let a=o.userData.interactiveId;if(a)return a;o=o.parent}if(!t.object.userData.hitBox)return null}return null}isShown(e){for(let t=e;t;t=t.parent)if(!t.visible)return!1;return!0}updateHover(){if(this.focused||this.tween)return;let e=this.pick();e!==this.hovered&&(this.hovered=e,this.updateOutline(),this.cb.hover(e),e===`hiki`&&!this.reducedMotion&&this.hiki.notice()),this.canvas.style.cursor=e?e===`hiki`?`grab`:`pointer`:``}updateOutline(){let e=[this.hovered,this.keyboardHighlight].filter(t=>!!t);this.outline.selectedObjects=e.filter(t=>a.find(i=>i.id===t)?.primary).map(t=>this.room.interactives.get(t)).filter(Boolean)}centerOf(e){return new dn().setFromObject(e).getCenter(new L)}topOf(e){let t=new dn().setFromObject(e),i=t.getCenter(new L);return i.y=t.max.y+.04,i}stepHover(e,t){let i=Math.min(1,e*10);this.rest.forEach((s,o)=>{let a=this.room.interactives.get(o);if(this.eggAnims.some(l=>l.obj===a))return;let h=!this.reducedMotion&&!this.focused&&(o===this.hovered||o===this.keyboardHighlight)?1:0;h===0&&s.lift===0||(s.lift+=(h-s.lift)*i,h===0&&s.lift<.002&&(s.lift=0),a.position.y=s.pos.y+s.lift*(.035+Math.sin(t*4)*.008))})}stepEggs(e){this.eggAnims=this.eggAnims.filter(t=>{t.t+=e;let i=Math.min(1,t.t/1.2),s=1-i;return t.kind===`egg-plush`?(t.obj.position.y=t.basePos.y+Math.sin(i*Math.PI)*.12,t.obj.rotation.y=t.base.y+i*Math.PI*2):t.kind===`egg-controller`?(t.obj.position.x=t.basePos.x+Math.sin(t.t*70)*.006*s,t.obj.rotation.y=t.base.y+Math.sin(t.t*55)*.08*s):t.kind===`egg-guitar`||t.kind===`egg-sunflowers`?t.obj.rotation.z=t.base.z+Math.sin(t.t*9)*.06*s:t.kind===`egg-bowl`||t.kind===`egg-duck`||t.kind===`egg-teardown`||t.kind===`egg-retro`?t.obj.position.y=t.basePos.y+Math.abs(Math.sin(t.t*10))*.015*s:t.kind===`egg-eva-figure`&&(t.obj.rotation.z=t.base.z+Math.sin(t.t*14)*.12*s),i>=1?(t.obj.position.copy(t.basePos),t.obj.rotation.copy(t.base),!1):!0})}};function Zi(n){switch(n.toLowerCase()){case`z`:case`w`:case`arrowup`:return`forward`;case`s`:case`arrowdown`:return`back`;case`q`:case`a`:case`arrowleft`:return`left`;case`d`:case`arrowright`:return`right`;default:return null}}export{Ki as RoomScene,Ms as loadBake,mb as loadDecorAssets};