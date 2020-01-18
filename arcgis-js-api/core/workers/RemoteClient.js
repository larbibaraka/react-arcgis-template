// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../Error","../events","../promiseUtils","./utils","../../views/support/Scheduler"],function(e,t,s,o,n,r,i){function a(e,t){e.delete(t)}var p=r.MessageType.CLOSE,h=r.MessageType.ABORT,c=r.MessageType.INVOKE,u=r.MessageType.RESPONSE,l=r.MessageType.OPEN_PORT,_=r.MessageType.ON,f=function(){function e(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e){e.type===r.MessageType.ABORT?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))},e.prototype.clear=function(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null},e.prototype._process=function(){this._timer=null;for(var e=0,t=this._invokeMessages;e<t.length;e++){var s=t[e];this._cancelledJobIds.has(s.jobId)||this._invoke(s)}this._cancelledJobIds.clear(),this._invokeMessages.length=0},e}();return function(){function e(e,t,s){var o=this;this._port=e,this._client=t,this._outJobs=new Map,this._inJobs=new Map,this._invokeQueue=new f(function(e){return o._onInvokeMessage(e)}),this._responseQueue=[],this._onMessage=this._onMessage.bind(this),this._channel=s.channel,s.scheduler&&(this._frameTask=s.scheduler.registerTask(i.Task.REMOTE_CLIENT,function(e){return o._update(e)},function(){return o._responseQueue.length>0})),this._port.addEventListener("message",this._onMessage),this._port.start()}return e.connect=function(t){var s,o=new MessageChannel;return s="function"==typeof t?new t:"default"in t&&"function"==typeof t.default?new t.default:t,s.remoteClient=new e(o.port1,s,{channel:o}),o.port2},e.prototype.close=function(){this._post({type:p}),this._close()},e.prototype.isBusy=function(){return this._outJobs.size>0},e.prototype.invoke=function(e,t,o){var i=this,p=o&&o.signal,u=o&&o.transferList;if(!this._port)return n.reject(new s("remote-client:port-closed","Can't invoke(), port is closed"));var l=r.newJobId(),_=function(){var e=i._outJobs.get(l);e&&(a(i._outJobs,l),i._post({type:h,jobId:l}),e.reject(n.createAbortError()))};return n.create(function(s,o){n.onAbortOrThrow(p,function(){_(),o(n.createAbortError())});var r={resolve:s,reject:o};i._outJobs.set(l,r),i._post({type:c,jobId:l,methodName:e,abortable:!0},t,u)},_)},e.prototype.on=function(e,t){function s(e){t(e.data)}var o=new MessageChannel;return this._port.postMessage({type:r.MessageType.ON,eventType:e,port:o.port2},[o.port2]),o.port1.addEventListener("message",s),o.port1.start(),{remove:function(){o.port1.postMessage({type:r.MessageType.CLOSE}),o.port1.close(),o.port1.removeEventListener("message",s)}}},e.prototype.openPort=function(){var e=new MessageChannel;return this._post({type:l,port:e.port2}),e.port1},e.prototype._close=function(){this._channel&&(this._channel=null),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach(function(e){return e.reject(n.createAbortError("Abort job: worker closing"))}),this._inJobs.clear(),this._outJobs.clear(),this._invokeQueue.clear(),this._port=this._client=null,this._frameTask&&this._frameTask.remove(),this._frameTask=null,this._responseQueue=null},e.prototype._onMessage=function(e){var t=r.receiveMessage(e);if(t)switch(t.type){case u:this._onResponseMessage(t);break;case c:this._invokeQueue.push(t);break;case h:this._onAbortMessage(t);break;case p:this._onCloseMessage();break;case l:this._onOpenPortMessage(t);break;case _:this._onOnMessage(t)}},e.prototype._onAbortMessage=function(e){var t=this._inJobs,s=e.jobId,o=t.get(s);this._invokeQueue.push(e),o&&(o.controller&&o.controller.abort(),a(t,s))},e.prototype._onCloseMessage=function(){var e=this._client;this._close(),e&&e.remoteClient===this&&"destroy"in e&&e.destroy(),e.remoteClient=null},e.prototype._onInvokeMessage=function(e){var t,s=this,o=e.methodName,i=e.jobId,p=e.data,h=e.abortable,c=h?n.createAbortController():null,l=this._inJobs,_=this._client,f=_[o];try{if(!f&&o&&-1!==o.indexOf("."))for(var g=o.split("."),d=0;d<g.length-1;d++)_=_[g[d]],f=_[g[d+1]];if("function"!=typeof f)throw new TypeError(o+" is not a function");t=f.call(_,p,{client:this,signal:c?c.signal:null})}catch(e){return void this._post({type:u,jobId:i,error:r.toInvokeError(e)})}n.isPromiseLike(t)?(l.set(i,{controller:c,promise:t}),c&&"cancel"in t&&n.onAbort(c.signal,function(){return t.cancel()}),t.then(function(e){l.has(i)&&(a(l,i),s._post({type:u,jobId:i},e))},function(e){l.has(i)&&(a(l,i),n.isAbortError(e)||s._post({type:u,jobId:i,error:r.toInvokeError(e||{message:"Error encountered at method "+o})}))})):this._post({type:u,jobId:i},t)},e.prototype._onOpenPortMessage=function(t){new e(t.port,this._client,{})},e.prototype._onOnMessage=function(e){var t=e.port,s=this._client.on(e.eventType,function(e){delete e.target,t.postMessage(e)}),n=o.on(e.port,"message",function(e){r.receiveMessage(e).type===r.MessageType.CLOSE&&(n.remove(),s.remove(),t.close())})},e.prototype._onResponseMessage=function(e){this._frameTask?this._responseQueue.push(e):this._handleResponse(e)},e.prototype._update=function(e){for(;!e.done&&this._responseQueue.length>0;)this._handleResponse(this._responseQueue.shift()),e.madeProgress()},e.prototype._handleResponse=function(e){var t=e.jobId,o=e.error,n=e.data,r=this._outJobs;if(r.has(t)){var i=r.get(t);a(r,t),o?i.reject(s.fromJSON(JSON.parse(o))):i.resolve(n)}},e.prototype._post=function(e,t,s){return r.postMessage(this._port,e,t,s)},e}()});