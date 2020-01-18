(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/support/ClipArea":57,"esri/views/layers/LayerView":144,"esri/views/2d/layers/LayerView2D":149,"esri/views/layers/support/ClipRect":150,"esri/views/layers/support/Geometry":151,"esri/views/layers/support/Path":152,"esri/views/2d/layers/BitmapTileLayerView2D":602,"esri/views/2d/layers/WMTSLayerView2D":2202})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{144:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(29),i(28),i(47),i(106),i(141),i(167),i(37),i(154),i(30)],void 0===(n=function(e,t,i,r,n,o,s,p,a,l,u){return function(e){function t(t){var i=e.call(this,t)||this;return i.layer=null,i.parent=null,i}return i(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";throw a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+i+"')",t),t}})},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},r([u.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),r([u.property()],t.prototype,"layer",void 0),r([u.property()],t.prototype,"parent",void 0),r([u.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),r([u.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),r([u.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),r([u.subclass("esri.views.layers.LayerView")],t)}(u.declared(s.HandleOwnerMixin(p.IdentifiableMixin(l.EsriPromiseMixin(o.EventedMixin(n))))))}.apply(null,r))||(e.exports=n)},149:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(29),i(28),i(55),i(168),i(56),i(30),i(57),i(150),i(151),i(152)],void 0===(n=function(e,t,i,r,n,o,s,p,a,l,u,d){Object.defineProperty(t,"__esModule",{value:!0});var c=n.ofType({key:"type",base:a,typeMap:{rect:l,path:d,geometry:u}});t.LayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new c,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return i(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()},function(){});var t=function(){return e.notifyChange("rendering")};this.handles.add([s.init(this,"suspended",function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),s.init(this,["fullOpacity","container"],function(){e.container&&(e.container.opacity=e.fullOpacity)},!0),s.on(this,"container","post-render",t),s.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,i=this.layer,r=i.minScale,n=i.maxScale;if(null!=r&&null!=n){var o=!r,s=!n;!o&&e<=r&&(o=!0),!s&&e>=n&&(s=!0),t=o&&s}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},r([p.property({type:c,set:function(e){var t=o.referenceSetter(e,this._get("clips"),c);this._set("clips",t)}})],t.prototype,"clips",void 0),r([p.property()],t.prototype,"moving",void 0),r([p.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),r([p.property()],t.prototype,"attached",void 0),r([p.property()],t.prototype,"container",void 0),r([p.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),r([p.property({readOnly:!0})],t.prototype,"updateParameters",void 0),r([p.property()],t.prototype,"updateRequested",void 0),r([p.property({dependsOn:["updateRequested","attached","suspended"]})],t.prototype,"updating",null),r([p.property()],t.prototype,"view",void 0),r([p.subclass("esri.views.2d.layers.LayerView2D")],t)}(p.declared(e))}}.apply(null,r))||(e.exports=n)},150:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(28),i(29),i(30),i(57)],void 0===(n=function(e,t,i,r,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),i([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),i([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),i([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),i([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),i([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),o=i([n.subclass("esri.views.layers.support.ClipRect")],t)}(n.declared(o))}.apply(null,r))||(e.exports=n)},151:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(28),i(29),i(42),i(30),i(96),i(46),i(57)],void 0===(n=function(e,t,i,r,n,o,s,p,a){var l={base:s,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var n;return r(t,e),n=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({geometry:this.geometry.clone()})},i([o.property({types:l,json:{read:p.fromJSON,write:!0}})],t.prototype,"geometry",void 0),i([o.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),n=i([o.subclass("esri.views.layers.support.Geometry")],t)}(o.declared(a))}.apply(null,r))||(e.exports=n)},152:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(28),i(29),i(30),i(57)],void 0===(n=function(e,t,i,r,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return r(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),i([n.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),i([n.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),i([n.subclass("esri.views.layers.support.Path")],t)}(n.declared(o))}.apply(null,r))||(e.exports=n)},2202:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(29),i(28),i(31),i(32),i(82),i(30),i(90),i(602),i(149),i(244),i(343),i(344),i(144),i(264)],void 0===(n=function(e,t,i,r,n,o,s,p,a,l,u,d,c,y,h,f){var v=[102113,102100,3857,3785,900913];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new s,t._tileStrategy=null,t._fetchQueue=null,t._tileRequests=new Map,t.layer=null,t}return i(t,e),Object.defineProperty(t.prototype,"tileMatrixSet",{get:function(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;var e=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return e?(this.layer.activeLayer.tileMatrixSetId=e.id,e):null},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(){return null},t.prototype.update=function(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")},t.prototype.attach=function(){var e=this,t=this.layer.activeLayer,i=this.tileMatrixSet;if(i){var r=i.tileInfo.spatialReference,n=t.fullExtent&&t.fullExtent.clone();r.isWebMercator?n=a.geographicToWebMercator(n):r.isWGS84||(n=i.fullExtent),this._tileInfoView=new d(i.tileInfo,n),this._fetchQueue=new c({tileInfoView:this._tileInfoView,process:function(t){return e.fetchTile(t)}}),this._tileStrategy=new y({cachePolicy:"keep",acquireTile:function(t){return e.acquireTile(t)},releaseTile:function(t){return e.releaseTile(t)},tileInfoView:this._tileInfoView}),this._handles.add(this.watch("layer.activeLayer.styleId, tileMatrixSet",function(){return e._refresh()})),this.inherited(arguments)}},t.prototype.detach=function(){this.inherited(arguments),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(){return o(this,void 0,void 0,function(){return n(this,function(e){return this.updateRequested||this.suspended?[2]:(this._refresh(),[2])})})},t.prototype.isUpdating=function(){return this._fetchQueue.length>0},t.prototype.acquireTile=function(e){var t,i,r=this,n=this._bitmapView.createTile(e),o=n.bitmap;t=this._tileInfoView.getTileCoords([0,0],n.key),o.x=t[0],o.y=t[1],o.resolution=this._tileInfoView.getTileResolution(n.key),i=this._tileInfoView.tileInfo.size,o.width=i[0],o.height=i[1],this._tileInfoView.getTileCoords(o,n.key);var s={id:e.id,fulfilled:!1,promise:this._fetchQueue.push(n.key).then(function(e){n.bitmap.source=e,n.once("attach",function(){return r.requestUpdate()}),r._bitmapView.addChild(n)}).catch(function(){n.bitmap.source=null,n.once("attach",function(){return r.requestUpdate()}),r._bitmapView.addChild(n)})};return s.promise.then(function(){return s.fulfilled=!0},function(){return s.fulfilled=!0}),this._tileRequests.set(n,s),this.requestUpdate(),n},t.prototype.releaseTile=function(e){var t=this._tileRequests.get(e);t.fulfilled||this._fetchQueue.abort(t.id),this._tileRequests.delete(e),this._bitmapView.removeChild(e),this.requestUpdate()},t.prototype.fetchTile=function(e){return o(this,void 0,void 0,function(){return n(this,function(t){return[2,this.layer.fetchTile(e.level,e.row,e.col)]})})},t.prototype.canResume=function(){var e=this.inherited(arguments);return e?null!==this.tileMatrixSet:e},t.prototype._refresh=function(){var e=this;this._fetchQueue.reset(),this._tileStrategy.tiles.forEach(function(t){if(t.bitmap.source){t.bitmap.source=null;var i={id:t.key.id,fulfilled:!1,promise:e._fetchQueue.push(t.key).then(function(i){t.bitmap.source=i,t.requestRender(),e.notifyChange("updating")})};i.promise.then(function(){return i.fulfilled=!0},function(){return i.fulfilled=!0}),e._tileRequests.set(t,i)}}),this.notifyChange("updating")},t.prototype._getTileMatrixSetBySpatialReference=function(e){var t=this.view.spatialReference,i=e.tileMatrixSets.find(function(e){return e.tileInfo.spatialReference.wkid===t.wkid});return!i&&t.isWebMercator&&(i=e.tileMatrixSets.find(function(e){return v.indexOf(e.tileInfo.spatialReference.wkid)>-1})),i},r([p.property({dependsOn:["tileMatrixSet"]})],t.prototype,"suspended",void 0),r([p.property({readOnly:!0,dependsOn:["view.spatialReference","layer.activeLayer"]})],t.prototype,"tileMatrixSet",null),r([p.subclass("esri.views.2d.layers.WMTSLayerView2D")],t)}(p.declared(f.RefreshableLayerView(l.BitmapTileLayerView2D(u.LayerView2D(h)))))}.apply(null,r))||(e.exports=n)},57:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(28),i(29),i(33),i(30)],void 0===(n=function(e,t,i,r,n,o){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),i([o.subclass("esri.views.layers.support.ClipArea")],t)}(o.declared(n.JSONSupport))}.apply(null,r))||(e.exports=n)},602:function(e,t,i){var r,n;r=[i.dj.c(e.i),t,i(28),i(29),i(30),i(433),i(285)],void 0===(n=function(e,t,i,r,n,o,s){Object.defineProperty(t,"__esModule",{value:!0}),t.BitmapTileLayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.container=new s.Container,t}return r(t,e),t.prototype.attach=function(){var e=this;this.view.timeline.record(this.layer.title+" (BitmapTileLayer) Attach"),this._bitmapView=new o.BitmapTileContainer(this._tileInfoView,this.clips),this.handles.add(this.clips.on("change",function(){return e._bitmapView.setClips(e.clips)})),this.container.addChild(this._bitmapView)},t.prototype.detatch=function(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()},i([n.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],t)}(n.declared(e))}}.apply(null,r))||(e.exports=n)}}]);