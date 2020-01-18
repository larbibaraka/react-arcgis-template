(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/support/ClipArea":57,"esri/views/layers/LayerView":144,"esri/views/2d/layers/LayerView2D":149,"esri/views/layers/support/ClipRect":150,"esri/views/layers/support/Geometry":151,"esri/views/layers/support/Path":152,"esri/views/2d/layers/GraphicsLayerView2D":2182})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{144:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(29),r(28),r(47),r(106),r(141),r(167),r(37),r(154),r(30)],void 0===(n=function(e,t,r,i,n,o,p,s,a,u,l){return function(e){function t(t){var r=e.call(this,t)||this;return r.layer=null,r.parent=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch(function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";throw a.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),t}})},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},i([l.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),i([l.property()],t.prototype,"layer",void 0),i([l.property()],t.prototype,"parent",void 0),i([l.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),i([l.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),i([l.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),i([l.subclass("esri.views.layers.LayerView")],t)}(l.declared(p.HandleOwnerMixin(s.IdentifiableMixin(u.EsriPromiseMixin(o.EventedMixin(n))))))}.apply(null,i))||(e.exports=n)},149:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(29),r(28),r(55),r(168),r(56),r(30),r(57),r(150),r(151),r(152)],void 0===(n=function(e,t,r,i,n,o,p,s,a,u,l,d){Object.defineProperty(t,"__esModule",{value:!0});var c=n.ofType({key:"type",base:a,typeMap:{rect:u,path:d,geometry:l}});t.LayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new c,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.when(function(){e.requestUpdate()},function(){});var t=function(){return e.notifyChange("rendering")};this.handles.add([p.init(this,"suspended",function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)},!0),p.init(this,["fullOpacity","container"],function(){e.container&&(e.container.opacity=e.fullOpacity)},!0),p.on(this,"container","post-render",t),p.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,p=!n;!o&&e<=i&&(o=!0),!p&&e>=n&&(p=!0),t=o&&p}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},i([s.property({type:c,set:function(e){var t=o.referenceSetter(e,this._get("clips"),c);this._set("clips",t)}})],t.prototype,"clips",void 0),i([s.property()],t.prototype,"moving",void 0),i([s.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),i([s.property()],t.prototype,"attached",void 0),i([s.property()],t.prototype,"container",void 0),i([s.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),i([s.property({readOnly:!0})],t.prototype,"updateParameters",void 0),i([s.property()],t.prototype,"updateRequested",void 0),i([s.property({dependsOn:["updateRequested","attached","suspended"]})],t.prototype,"updating",null),i([s.property()],t.prototype,"view",void 0),i([s.subclass("esri.views.2d.layers.LayerView2D")],t)}(s.declared(e))}}.apply(null,i))||(e.exports=n)},150:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(28),r(29),r(30),r(57)],void 0===(n=function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var o;return i(t,e),o=t,t.prototype.clone=function(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),o=r([n.subclass("esri.views.layers.support.ClipRect")],t)}(n.declared(o))}.apply(null,i))||(e.exports=n)},151:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(28),r(29),r(42),r(30),r(96),r(46),r(57)],void 0===(n=function(e,t,r,i,n,o,p,s,a){var u={base:p,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var n;return i(t,e),n=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({geometry:this.geometry.clone()})},r([o.property({types:u,json:{read:s.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([o.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),n=r([o.subclass("esri.views.layers.support.Geometry")],t)}(o.declared(a))}.apply(null,i))||(e.exports=n)},152:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(28),r(29),r(30),r(57)],void 0===(n=function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return i(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r([n.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r([n.subclass("esri.views.layers.support.Path")],t)}(n.declared(o))}.apply(null,i))||(e.exports=n)},2182:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(29),r(28),r(31),r(32),r(77),r(55),r(82),r(34),r(30),r(285),r(149),r(361),r(144)],void 0===(n=function(e,t,r,i,n,o,p,s,a,u,l,d,c,y,h){var f={remove:function(){},pause:function(){},resume:function(){}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._handles=new a,t.container=new d.Container,t}return r(t,e),t.prototype.initialize=function(){this.graphicsView=new y.default({view:this.view,graphics:this.layer.graphics})},t.prototype.attach=function(){var e=this;this.graphicsView.install(this.container),this._handles.add([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.clips.on("change",function(){return e.graphicsView.container.setClips(e.clips)})]),this.graphicsView.container.setClips(this.clips)},t.prototype.detach=function(){this.graphicsView.destroy(),this._handles.removeAll()},t.prototype.hitTest=function(e,t){return this.suspended||!this.graphicsView?u.resolve(null):this.graphicsView.hitTest(e,t)},t.prototype.fetchPopupFeatures=function(e){return o(this,void 0,void 0,function(){return n(this,function(t){return this.graphicsView?[2,this.graphicsView.searchFeatures(e).then(function(e){return e.filter(function(e){return!!e.popupTemplate})})]:[2,void 0]})})},t.prototype.update=function(e){this.graphicsView.update(e)},t.prototype.moveStart=function(){this.requestUpdate()},t.prototype.viewChange=function(){this.requestUpdate()},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.isUpdating=function(){return!this.graphicsView||this.graphicsView.updating},t.prototype.highlight=function(e){var t,r=this;return"number"==typeof e?t=[e]:e instanceof p?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map(function(e){return e&&e.uid}):s.isCollection(e)&&(t=e.map(function(e){return e&&e.uid}).toArray()),(t=t.filter(function(e){return null!=e})).length?(this.graphicsView.addHighlight(t),{remove:function(){return r.graphicsView.removeHighlight(t)},pause:function(){},resume:function(){}}):f},t.prototype.queryGraphics=function(){return u.resolve(this.graphicsView.graphics)},i([l.property()],t.prototype,"graphicsView",void 0),i([l.property({dependsOn:["graphicsView.updating"]})],t.prototype,"updating",void 0),i([l.subclass("esri.views.2d.layers.GraphicsLayerView2D")],t)}(l.declared(c.LayerView2D(h)))}.apply(null,i))||(e.exports=n)},57:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(28),r(29),r(33),r(30)],void 0===(n=function(e,t,r,i,n,o){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),r([o.subclass("esri.views.layers.support.ClipArea")],t)}(o.declared(n.JSONSupport))}.apply(null,i))||(e.exports=n)}}]);