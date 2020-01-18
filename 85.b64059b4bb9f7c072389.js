(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/mixins/PortalLayer":59,"esri/layers/mixins/ScaleRangeLayer":66,"esri/layers/mixins/RefreshableLayer":88,"esri/layers/WebTileLayer":95,"esri/layers/support/WMTSLayerInfo":234})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{234:function(e,t,r){var l,o;l=[r.dj.c(e.i),t,r(29),r(28),r(33),r(38),r(30)],void 0===(o=function(e,t,r,l,o,n,i){Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(t){return e.call(this,t)||this}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o({customLayerParameters:n.clone(this.customLayerParameters),customParameters:n.clone(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})},l([i.property({json:{type:Object,write:!0}})],t.prototype,"customLayerParameters",void 0),l([i.property({json:{type:Object,write:!0}})],t.prototype,"customParameters",void 0),l([i.property({type:String,json:{write:!0}})],t.prototype,"layerIdentifier",void 0),l([i.property({type:String,json:{write:!0}})],t.prototype,"tileMatrixSet",void 0),l([i.property({type:String,json:{write:!0}})],t.prototype,"url",void 0),o=l([i.subclass("esri.layer.support.WMTSLayerInfo")],t)}(i.declared(o.JSONSupport));t.WMTSLayerInfo=a,t.default=a}.apply(null,l))||(e.exports=o)},59:function(e,t,r){var l,o;l=[r.dj.c(e.i),t,r(29),r(28),r(31),r(32),r(36),r(37),r(34),r(39),r(30),r(72),r(76)],void 0===(o=function(e,t,l,o,n,i,a,p,s,u,c,y,d){Object.defineProperty(t,"__esModule",{value:!0});var f=p.getLogger("esri.layers.mixins.PortalLayer");t.PortalLayer=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),Object.defineProperty(t.prototype,"portalItem",{set:function(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))},enumerable:!0,configurable:!0}),t.prototype.readPortalItem=function(e,t,r){if(t.itemId)return new d({id:t.itemId,portal:r&&r.portal})},t.prototype.writePortalItem=function(e,t){e&&e.id&&(t.itemId=e.id)},t.prototype.loadFromPortal=function(e,t){return i(this,void 0,void 0,function(){var l,o;return n(this,function(n){switch(n.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,s.create(function(e){return r.e(99).then(function(){var t=[r(123)];e.apply(null,t)}.bind(this)).catch(r.oe)})];case 2:return l=n.sent(),s.throwIfAborted(t),[4,l.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},t)];case 3:return[2,n.sent()];case 4:throw o=n.sent(),f.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+o),o;case 5:return[2]}})})},t.prototype.read=function(e,t){var r=arguments;t&&(t.layer=this),this.inherited(r)},t.prototype.write=function(e,t){var r=t&&t.portal,l=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||y.getDefault());return r&&l&&!u.hasSamePortal(l.restUrl,r.restUrl)?(t.messages&&t.messages.push(new a("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},o([c.property({type:d})],t.prototype,"portalItem",null),o([c.reader("web-document","portalItem",["itemId"])],t.prototype,"readPortalItem",null),o([c.writer("portalItem",{itemId:{type:String}})],t.prototype,"writePortalItem",null),o([c.subclass("esri.layers.mixins.PortalLayer")],t)}(c.declared(e))}}.apply(null,l))||(e.exports=o)},66:function(e,t,r){var l,o;l=[r.dj.c(e.i),t,r(29),r(28),r(30)],void 0===(o=function(e,t,r,l,o){Object.defineProperty(t,"__esModule",{value:!0}),t.ScaleRangeLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.minScale=0,t.maxScale=0,t}return r(t,e),Object.defineProperty(t.prototype,"scaleRangeId",{get:function(){return this.minScale+","+this.maxScale},enumerable:!0,configurable:!0}),l([o.property({type:Number,json:{write:!0}})],t.prototype,"minScale",void 0),l([o.property({type:Number,json:{write:!0}})],t.prototype,"maxScale",void 0),l([o.property({readOnly:!0,dependsOn:["minScale","maxScale"]})],t.prototype,"scaleRangeId",null),l([o.subclass("esri.layers.mixins.ScaleRangeLayer")],t)}(o.declared(e))}}.apply(null,l))||(e.exports=o)},88:function(e,t,r){var l,o;l=[r.dj.c(e.i),t,r(29),r(28),r(30)],void 0===(o=function(e,t,r,l,o){Object.defineProperty(t,"__esModule",{value:!0}),t.RefreshableLayer=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.refreshInterval=0,t}return r(t,e),t.prototype.refresh=function(){this.emit("refresh")},l([o.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),l([o.subclass("esri.layers.mixins.RefreshableLayer")],t)}(o.declared(e))}}.apply(null,l))||(e.exports=o)},95:function(e,t,r){var l,o;l=[r.dj.c(e.i),t,r(35),r(29),r(28),r(31),r(32),r(42),r(44),r(36),r(38),r(99),r(124),r(39),r(39),r(30),r(108),r(64),r(59),r(88),r(66),r(239),r(138),r(234)],void 0===(o=function(e,t,r,l,o,n,i,a,p,s,u,c,y,d,f,m,h,v,w,b,g,I,S,T){return function(e){function t(t,r){var l=e.call(this,t)||this;return l.copyright="",l.fullExtent=new a.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,a.SpatialReference.WebMercator),l.legendEnabled=!1,l.isReference=null,l.popupEnabled=!1,l.spatialReference=a.SpatialReference.WebMercator,l.subDomains=null,l.tileInfo=new S({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new a.Point({x:-20037508.342787,y:20037508.342787,spatialReference:a.SpatialReference.WebMercator}),spatialReference:a.SpatialReference.WebMercator,lods:[new I({level:0,scale:591657527.591555,resolution:156543.033928}),new I({level:1,scale:295828763.795777,resolution:78271.5169639999}),new I({level:2,scale:147914381.897889,resolution:39135.7584820001}),new I({level:3,scale:73957190.948944,resolution:19567.8792409999}),new I({level:4,scale:36978595.474472,resolution:9783.93962049996}),new I({level:5,scale:18489297.737236,resolution:4891.96981024998}),new I({level:6,scale:9244648.868618,resolution:2445.98490512499}),new I({level:7,scale:4622324.434309,resolution:1222.99245256249}),new I({level:8,scale:2311162.217155,resolution:611.49622628138}),new I({level:9,scale:1155581.108577,resolution:305.748113140558}),new I({level:10,scale:577790.554289,resolution:152.874056570411}),new I({level:11,scale:288895.277144,resolution:76.4370282850732}),new I({level:12,scale:144447.638572,resolution:38.2185141425366}),new I({level:13,scale:72223.819286,resolution:19.1092570712683}),new I({level:14,scale:36111.909643,resolution:9.55462853563415}),new I({level:15,scale:18055.954822,resolution:4.77731426794937}),new I({level:16,scale:9027.977411,resolution:2.38865713397468}),new I({level:17,scale:4513.988705,resolution:1.19432856685505}),new I({level:18,scale:2256.994353,resolution:.597164283559817}),new I({level:19,scale:1128.497176,resolution:.298582141647617})]}),l.type="web-tile",l.urlTemplate=null,l.wmtsInfo=null,l}return l(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?u.mixin({urlTemplate:e},t||{}):e},t.prototype.load=function(e){var t=this,r=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var r=new d.Url(t.urlTemplate);!!t.subDomains&&t.subDomains.length>0||-1===r.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new s("web-tile-layer:load","WebTileLayer (title: '"+t.title+"', id: '"+t.id+"') "+e)});return this.addResolvingPromise(r),this.when()},Object.defineProperty(t.prototype,"levelValues",{get:function(){var e=[];if(!this.tileInfo)return null;for(var t=0,r=this.tileInfo.lods;t<r.length;t++){var l=r[t];e[l.level]=l.levelValue||l.level}return e},enumerable:!0,configurable:!0}),t.prototype.readSpatialReference=function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&a.SpatialReference.fromJSON(t.fullExtent.spatialReference)},Object.defineProperty(t.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,l=new d.Url(t),o=l.scheme?l.scheme+"://":"//",n=o+l.authority+"/";if(-1===l.authority.indexOf("{subDomain}"))e.push(n);else if(r&&r.length>0&&l.authority.split(".").length>1)for(var i=0,a=r;i<a.length;i++){var p=a[i];e.push(o+l.authority.replace(/\{subDomain\}/gi,p)+"/")}return e.map(function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e})},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new d.Url(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)},enumerable:!0,configurable:!0}),t.prototype.readUrlTemplate=function(e,t){return e||t.templateUrl},t.prototype.writeUrlTemplate=function(e,t){e&&f.isProtocolRelative(e)&&(e="https:"+e),t.templateUrl=e?f.normalize(e):e},t.prototype.fetchTile=function(e,t,r,l){void 0===l&&(l={});var o=l.signal,n=l.timestamp,i=this.getTileUrl(e,t,r),a={responseType:"image",signal:o};return null!=n&&(a.query={_ts:l.timestamp}),p(i,a).then(function(e){return e.data})},t.prototype.getTileUrl=function(e,t,r){var l=this.levelValues[e],o=this.tileServers[t%this.tileServers.length]+y.replace(this.urlPath,{level:l,col:r,row:t});return o.replace(/\{level\}/gi,""+l).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)},o([m.property({type:String,value:"",json:{write:!0}})],t.prototype,"copyright",void 0),o([m.property({type:a.Extent,json:{write:!0}})],t.prototype,"fullExtent",void 0),o([m.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"legendEnabled",void 0),o([m.property({type:["show","hide"]})],t.prototype,"listMode",void 0),o([m.property({dependsOn:["tileInfo"]})],t.prototype,"levelValues",null),o([m.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],t.prototype,"isReference",void 0),o([m.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],t.prototype,"operationalLayerType",void 0),o([m.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),o([m.property({type:a.SpatialReference})],t.prototype,"spatialReference",void 0),o([m.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],t.prototype,"readSpatialReference",null),o([m.property({type:[String],json:{write:!0}})],t.prototype,"subDomains",void 0),o([m.property({type:S,json:{write:!0}})],t.prototype,"tileInfo",void 0),o([m.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],t.prototype,"tileServers",null),o([m.property({json:{read:!1}})],t.prototype,"type",void 0),o([m.property({dependsOn:["urlTemplate"]})],t.prototype,"urlPath",null),o([m.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],t.prototype,"urlTemplate",void 0),o([m.reader("urlTemplate",["urlTemplate","templateUrl"])],t.prototype,"readUrlTemplate",null),o([m.writer("urlTemplate",{templateUrl:{type:String}})],t.prototype,"writeUrlTemplate",null),o([m.property({type:T.default,json:{write:!0}})],t.prototype,"wmtsInfo",void 0),o([m.subclass("esri.layers.WebTileLayer")],t)}(m.declared(b.RefreshableLayer(g.ScaleRangeLayer(v.OperationalLayer(w.PortalLayer(c.MultiOriginJSONMixin(h)))))))}.apply(null,l))||(e.exports=o)}}]);