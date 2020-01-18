(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/TileLayer":62,"esri/tasks/support/Query":74,"esri/tasks/support/QuantizationParameters":85,"esri/tasks/support/StatisticDefinition":93,"esri/layers/support/TilemapCache":230,"esri/layers/support/Tilemap":296,"esri/layers/support/serviceTileInfoProperty":325,"esri/layers/mixins/ArcGISCachedService":379})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{230:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(35),r(29),r(28),r(31),r(32),r(44),r(47),r(36),r(82),r(37),r(354),r(260),r(34),r(146),r(39),r(56),r(30),r(296)],void 0===(o=function(e,t,r,i,o,n,a,l,s,p,u,c,y,d,h,f,v,m,w,b){Object.defineProperty(t,"__esModule",{value:!0}),t.TILEMAP_SIZE_EXP=5;var g=c.getLogger("esri.layers.support.TilemapCache"),S=function(e){function s(t){var r=e.call(this,t)||this;return r._handles=new u,r._pendingTilemapRequests={},r._availableLevels={},r.levels=5,r.cacheByteSize=2097152,r.request=l,r._prefetchingEnabled=!0,r}var c;return i(s,e),c=s,s.prototype.initialize=function(){var e=this;this._tilemapCache=new y(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],function(){return e._initializeTilemapDefinition()}),m.init(this,"layer.tileInfo.lods",function(t){return e._initializeAvailableLevels(t)},!0)]),this._initializeTilemapDefinition()},s.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},s.prototype.castLevels=function(e){return e<=2?(g.error("Minimum levels for Tilemap is 3, but got ",e),3):e},Object.defineProperty(s.prototype,"size",{get:function(){return 1<<this.levels},enumerable:!0,configurable:!0}),s.prototype.fetchTilemap=function(e,t,i,o){var n=this;if(!this._availableLevels[e])return h.reject(new p("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"));var a=this._tmpTilemapDefinition,l=this._tilemapFromCache(e,t,i,a);if(l)return h.resolve(l);var s=o&&o.signal;return o=r({},o,{signal:null}),h.create(function(e,t){h.onAbort(s,function(){return t(h.createAbortError())});var r=b.tilemapDefinitionId(a),i=n._pendingTilemapRequests[r];if(!i){i=b.Tilemap.fromDefinition(a,o).then(function(e){return n._tilemapCache.put(r,e,e.byteSize),e});var l=function(){return delete n._pendingTilemapRequests[r]};n._pendingTilemapRequests[r]=i,i.then(l,l)}i.then(e,t)})},s.prototype.getAvailability=function(e,t,r){if(!this._availableLevels[e])return"unavailable";var i=this._tilemapFromCache(e,t,r,this._tmpTilemapDefinition);return i?i.getAvailability(t,r):"unknown"},s.prototype.getAvailabilityUpsample=function(e,t,r,i){i.level=e,i.row=t,i.col=r;var o=this.layer.tileInfo;for(o.updateTileInfo(i);;){var n=this.getAvailability(i.level,i.row,i.col);if("unavailable"!==n)return n;if(!o.upsampleTile(i))return"unavailable"}},s.prototype.fetchAvailability=function(e,t,r,i){return this._availableLevels[e]?this.fetchTilemap(e,t,r,i).catch(function(e){return e}).then(function(i){if(i instanceof b.Tilemap){var o=i.getAvailability(t,r);return"unavailable"===o?h.reject(new p("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:r})):o}if(h.isAbortError(i))throw i;return"unknown"}):h.reject(new p("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"))},s.prototype.fetchAvailabilityUpsample=function(e,t,r,i,o){var n=this;i.level=e,i.row=t,i.col=r;var a=this.layer.tileInfo;a.updateTileInfo(i);var l=this.fetchAvailability(e,t,r,o).catch(function(e){if(h.isAbortError(e))throw e;if(a.upsampleTile(i))return n.fetchAvailabilityUpsample(i.level,i.row,i.col,i);throw e});return this._fetchAvailabilityUpsamplePrefetch(i.id,e,t,r,o,l),l},s.prototype._fetchAvailabilityUpsamplePrefetch=function(e,t,i,o,l,s){return a(this,void 0,void 0,function(){var a,p,u,y,d,v,m,w,b,g;return n(this,function(n){switch(n.label){case 0:if(!this._prefetchingEnabled)return[2];if(a="prefetch-"+e,this._handles.has(a))return[2];p=h.createAbortController(),s.then(function(){return p.abort()},function(){return p.abort()}),u=!1,y={remove:function(){u||(u=!0,p.abort())}},this._handles.add(y,a),n.label=1;case 1:return n.trys.push([1,3,,4]),[4,f.waitTicks(10,p.signal)];case 2:return n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:if(u||(u=!0,this._handles.remove(a)),h.isAborted(p))return[2];for(d={id:e,level:t,row:i,col:o},v=r({},l,{signal:p.signal}),m=this.layer.tileInfo,w=function(e){var t=b.fetchAvailability(d.level,d.row,d.col,v);c._prefetches.push(t);var r=function(){c._prefetches.removeUnordered(t)};t.then(r,r)},b=this,g=0;c._prefetches.length<c._maxPrefetch&&m.upsampleTile(d);++g)w();return[2]}})})},s.prototype._initializeTilemapDefinition=function(){if(this.layer.parsedUrl){var e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?v.objectToQuery(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}},s.prototype._tilemapFromCache=function(e,t,r,i){var o=this._getTilemapDefinition(e,t,r,i),n=b.tilemapDefinitionId(o);return this._tilemapCache.get(n)},s.prototype._getTilemapDefinition=function(e,r,i,o){o.level=e;var n=e>t.TILEMAP_SIZE_EXP;return o.row=n?r-r%this.size:r,o.col=n?i-i%this.size:i,o},s.prototype._initializeAvailableLevels=function(e){var t=this;this._availableLevels={},e&&e.forEach(function(e){return t._availableLevels[e.level]=!0})},Object.defineProperty(s.prototype,"test",{get:function(){var e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:function(t,r,i){return!!e._tilemapFromCache(t,r,i,e._tmpTilemapDefinition)}}},enumerable:!0,configurable:!0}),s._maxPrefetch=4,s._prefetches=new d({initialSize:c._maxPrefetch}),o([w.property({constructOnly:!0,type:Number})],s.prototype,"levels",void 0),o([w.cast("levels")],s.prototype,"castLevels",null),o([w.property({readOnly:!0,dependsOn:["levels"],type:Number})],s.prototype,"size",null),o([w.property({constructOnly:!0,type:Number})],s.prototype,"cacheByteSize",void 0),o([w.property({constructOnly:!0})],s.prototype,"layer",void 0),o([w.property({constructOnly:!0})],s.prototype,"request",void 0),c=o([w.subclass("esri.layers.support.TilemapCache")],s)}(w.declared(s));t.TilemapCache=S}.apply(null,i))||(e.exports=o)},296:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(35),r(44),r(136),r(36),r(38)],void 0===(o=function(e,t,r,i,o,n,a){function l(e){var t;if("vector-tile"===e.service.type)t=e.service.url+"/tilemap/"+e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height;else{var r=e.service.tileServers;t=(r&&r.length?r[e.row%r.length]:e.service.url)+"/tilemap/"+e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height}var i=e.service.query;return i&&(t=t+"?"+i),t}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}return e.prototype.getAvailability=function(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;var r=(e-this.location.top)*this.location.width+(t-this.location.left),i=r%8,o=r>>3,n=this._tileAvailabilityBitSet;return o<0||o>n.length?"unknown":n[o]&1<<i?"available":"unavailable"},e.prototype._updateFromData=function(e){for(var t=this.location.width,r=this.location.height,i=!0,o=!0,n=Math.ceil(t*r/8),a=new Uint8Array(n),l=0,s=0;s<e.length;s++){var p=s%8;e[s]?(o=!1,a[l]|=1<<p):i=!1,7===p&&++l}o?this._allAvailability="unavailable":i?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=a,this.byteSize+=a.length)},e.fromDefinition=function(t,a){var s=t.service.request||i,p=t.row,u=t.col,c=t.width,y=t.height,d={query:{f:"json"}};return a=a?r({},d,a):d,s(l(t),a).then(function(e){return e.data}).catch(function(e){if(e&&e.details&&422===e.details.httpStatus)return{location:{top:p,left:u,width:c,height:y},valid:!0,data:o.constant(c*y,0)};throw e}).then(function(t){if(t.location&&(t.location.top!==p||t.location.left!==u||t.location.width!==c||t.location.height!==y))throw new n("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:p,left:u,width:c,height:y}});return e.fromJSON(t)})},e.fromJSON=function(t){e.validateJSON(t);var r=new e;return r.location=Object.freeze(a.clone(t.location)),r._updateFromData(t.data),Object.freeze(r)},e.validateJSON=function(e){if(!e||!e.location)throw new n("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new n("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new n("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new n("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new n("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")},e}();t.Tilemap=s,t.tilemapDefinitionId=function(e){return e.level+"/"+e.row+"/"+e.col+"/"+e.width+"/"+e.height},t.tilemapDefinitionUrl=l,t.default=s}.apply(null,i))||(e.exports=o)},325:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(35),r(138)],void 0===(o=function(e,t,r,i){function o(e,t,o,n){if(!e)return null;var a=t.minScale,l=t.maxScale,s=t.minLOD,p=t.maxLOD;if(null!=s&&null!=p)return n&&n.ignoreMinMaxLOD?i.fromJSON(e):i.fromJSON(r({},e,{lods:e.lods.filter(function(e){var t=e.level;return null!=t&&t>=s&&t<=p})}));if(0!==a&&0!==l){var u=function(e){return Math.round(1e4*e)/1e4},c=a?u(a):1/0,y=l?u(l):-1/0;return i.fromJSON(r({},e,{lods:e.lods.filter(function(e){var t=u(e.scale);return t<=c&&t>=y})}))}return i.fromJSON(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.serviceTileInfoProperty={type:i,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:o}}}}},t.readServiceTileInfo=o}.apply(null,i))||(e.exports=o)},379:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(35),r(29),r(28),r(42),r(30),r(325),r(230)],void 0===(o=function(e,t,r,i,o,n,a,l,s){Object.defineProperty(t,"__esModule",{value:!0}),t.ArcGISCachedService=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.copyright=null,t.minScale=0,t.maxScale=0,t.spatialReference=null,t.tileInfo=null,t.tilemapCache=null,t}return i(t,e),t.prototype.readMinScale=function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0},t.prototype.readMaxScale=function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0},Object.defineProperty(t.prototype,"supportsBlankTile",{get:function(){return this.version>=10.2},enumerable:!0,configurable:!0}),t.prototype.readTilemapCache=function(e,t){return t.capabilities&&t.capabilities.indexOf("Tilemap")>-1?new s.TilemapCache({layer:this}):null},o([a.property({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),o([a.property()],t.prototype,"minScale",void 0),o([a.reader("service","minScale")],t.prototype,"readMinScale",null),o([a.property()],t.prototype,"maxScale",void 0),o([a.reader("service","maxScale")],t.prototype,"readMaxScale",null),o([a.property({type:n.SpatialReference})],t.prototype,"spatialReference",void 0),o([a.property({readOnly:!0,dependsOn:["version"]})],t.prototype,"supportsBlankTile",null),o([a.property(l.serviceTileInfoProperty)],t.prototype,"tileInfo",void 0),o([a.property()],t.prototype,"tilemapCache",void 0),o([a.reader("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),o([a.property()],t.prototype,"version",void 0),o([a.subclass("esri.layers.mixins.ArcGISCachedService")],t)}(a.declared(e))}}.apply(null,i))||(e.exports=o)},62:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(35),r(29),r(28),r(31),r(32),r(42),r(44),r(36),r(40),r(99),r(34),r(39),r(30),r(108),r(379),r(469),r(126),r(64),r(59),r(88),r(66),r(470),r(116),r(116),r(53)],void 0===(o=function(e,t,r,i,o,n,a,l,s,p,u,c,y,d,h,f,v,m,w,b,g,S,_,T,j,O,x){var R=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];return function(e){function t(t,r){var i=e.call(this,t)||this;return i.listMode="show",i.isReference=null,i.resampling=!0,i.sourceJSON=null,i.spatialReference=null,i.path=null,i.sublayers=null,i.type="tile",i.url=null,i}return i(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r({url:e},t):e},t.prototype.load=function(e){var t=this,r=u.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]},e).then(function(){return t._fetchService(r)},function(){return t._fetchService(r)})),this.when()},Object.defineProperty(t.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"operationalLayerType",{get:function(){if(this.capabilities&&this.capabilities.operations)return this.capabilities.operations.supportsExportMap?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"},enumerable:!0,configurable:!0}),t.prototype.readSpatialReference=function(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&l.SpatialReference.fromJSON(e)},Object.defineProperty(t.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},enumerable:!0,configurable:!0}),t.prototype.castTileServers=function(e){return Array.isArray(e)?e.map(function(e){return d.urlToObject(e).path}):null},t.prototype.fetchTile=function(e,t,r,i){void 0===i&&(i={});var o=i.signal,n=i.timestamp,a=this.getTileUrl(e,t,r),l={responseType:"image",signal:o};return null!=n&&(l.query={_ts:i.timestamp}),s(a,l).then(function(e){return e.data})},t.prototype.getTileUrl=function(e,t,i){var o=!this.tilemapCache&&this.supportsBlankTile,n=d.objectToQuery(r({},this.parsedUrl.query,{blankTile:!o&&null})),a=this.tileServers;return(a&&a.length?a[t%a.length]:this.parsedUrl.path)+"/tile/"+e+"/"+t+"/"+i+(n?"?"+n:"")},t.prototype._fetchService=function(e){var t=this;return y.create(function(i,o){if(t.sourceJSON)i({data:t.sourceJSON});else{if(!t.parsedUrl)throw new p("tile-layer:undefined-url","layer's url is not defined");s(t.parsedUrl.path,{query:r({f:"json"},t.parsedUrl.query),responseType:"json",signal:e}).then(i,o)}}).then(function(r){if(r.ssl&&(t.url=t.url.replace(/^http:/i,"https:")),t.sourceJSON=r.data,t.read(r.data,{origin:"service",url:t.parsedUrl}),10.1===t.version&&!O.isHostedAgolService(t.url))return t._fetchServerVersion(t.url,e).then(function(e){t.read({currentVersion:e})}).catch(function(){})})},t.prototype._fetchServerVersion=function(e,t){if(!j.isArcGISUrl(e))return y.reject();var r=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return s(r,{query:{f:"json"},responseType:"json",signal:t}).then(function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new p("tile-layer:version-not-available")})},t.prototype._getMapName=function(e){var t=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]},t.prototype._getDefaultAttribution=function(e){if(e){var t;e=e.toLowerCase();for(var r=0,i=R.length;r<i;r++)if((t=R[r]).toLowerCase().indexOf(e)>-1)return d.makeAbsolute("//static.arcgis.com/attribution/"+t)}},t.prototype._getDefaultTileServers=function(e){var t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),r=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||r?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]},o([h.property({readOnly:!0,dependsOn:["parsedUrl"]})],t.prototype,"attributionDataUrl",null),o([h.property({type:["show","hide","hide-children"]})],t.prototype,"listMode",void 0),o([h.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],t.prototype,"isReference",void 0),o([h.property({readOnly:!0})],t.prototype,"operationalLayerType",null),o([h.property()],t.prototype,"popupTemplates",void 0),o([h.property({type:Boolean})],t.prototype,"resampling",void 0),o([h.property()],t.prototype,"sourceJSON",void 0),o([h.property({type:l.SpatialReference})],t.prototype,"spatialReference",void 0),o([h.reader("spatialReference",["spatialReference","tileInfo"])],t.prototype,"readSpatialReference",null),o([h.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),o([h.property({readOnly:!0})],t.prototype,"sublayers",void 0),o([h.property({dependsOn:["parsedUrl"]})],t.prototype,"tileServers",null),o([h.cast("tileServers")],t.prototype,"castTileServers",null),o([h.property({readOnly:!0,json:{read:!1}})],t.prototype,"type",void 0),o([h.property(x.url)],t.prototype,"url",void 0),o([h.subclass("esri.layers.TileLayer")],t)}(h.declared(T.SublayersOwner(_.ScaleRangeLayer(S.RefreshableLayer(b.OperationalLayer(g.PortalLayer(v.ArcGISCachedService(m.ArcGISMapService(w.ArcGISService(c.MultiOriginJSONMixin(f)))))))))))}.apply(null,i))||(e.exports=o)},74:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(29),r(28),r(42),r(42),r(71),r(97),r(41),r(33),r(38),r(30),r(48),r(46),r(80),r(85),r(93)],void 0===(o=function(e,t,r,i,o,n,a,l,s,p,u,c,y,d,h,f,v){var m=new s.default({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),w=new s.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});return function(e){function t(t){var r=e.call(this,t)||this;return r.cacheHint=!1,r.datumTransformation=null,r.distance=void 0,r.gdbVersion=null,r.geometry=null,r.geometryPrecision=void 0,r.groupByFieldsForStatistics=null,r.having=null,r.historicMoment=null,r.maxAllowableOffset=void 0,r.maxRecordCountFactor=1,r.multipatchOption=null,r.num=void 0,r.objectIds=null,r.orderByFields=null,r.outFields=null,r.outSpatialReference=null,r.outStatistics=null,r.parameterValues=null,r.pixelSize=null,r.quantizationParameters=null,r.rangeValues=null,r.relationParameter=null,r.resultType=null,r.returnCentroid=!1,r.returnDistinctValues=!1,r.returnExceededLimitFeatures=!0,r.returnGeometry=!1,r.returnQueryGeometry=!1,r.returnM=void 0,r.returnZ=void 0,r.source=null,r.spatialRelationship="intersects",r.start=void 0,r.sqlFormat=null,r.text=null,r.timeExtent=null,r.units=null,r.where=null,r}var s;return r(t,e),s=t,t.from=function(e){return y.ensureClass(s,e)},t.prototype.castDatumTransformation=function(e){return"number"==typeof e||"object"==typeof e?e:null},t.prototype.writeHistoricMoment=function(e,t){t.historicMoment=e&&e.getTime()},t.prototype.writeParameterValues=function(e,t){if(e){var r={};for(var i in e){var o=e[i];Array.isArray(o)?r[i]=o.map(function(e){return e instanceof Date?e.getTime():e}):o instanceof Date?r[i]=o.getTime():r[i]=o}t.parameterValues=r}},t.prototype.writeStart=function(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10,t.where="1=1"},t.prototype.writeWhere=function(e,t){t.where=e||"1=1"},t.prototype.clone=function(){return new s(u.clone({cacheHint:this.cacheHint,datumTransformation:this.datumTransformation,distance:this.distance,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:this.historicMoment?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,source:this.source,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,units:this.units,where:this.where}))},t.MAX_MAX_RECORD_COUNT_FACTOR=5,i([c.property({type:Boolean,json:{write:!0,default:!1}})],t.prototype,"cacheHint",void 0),i([c.property({json:{write:!0}})],t.prototype,"datumTransformation",void 0),i([c.cast("datumTransformation")],t.prototype,"castDatumTransformation",null),i([c.property({type:Number,json:{write:{overridePolicy:function(e){return{enabled:e>0}}}}})],t.prototype,"distance",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"gdbVersion",void 0),i([c.property({types:n.geometryTypes,json:{read:d.fromJSON,write:!0}})],t.prototype,"geometry",void 0),i([c.property({type:Number,json:{write:!0}})],t.prototype,"geometryPrecision",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"groupByFieldsForStatistics",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"having",void 0),i([c.property({type:Date})],t.prototype,"historicMoment",void 0),i([c.writer("historicMoment")],t.prototype,"writeHistoricMoment",null),i([c.property({type:Number,json:{write:!0}})],t.prototype,"maxAllowableOffset",void 0),i([c.property({type:Number,cast:function(e){return e<1?1:e>s.MAX_MAX_RECORD_COUNT_FACTOR?s.MAX_MAX_RECORD_COUNT_FACTOR:e},json:{write:{overridePolicy:function(e){return{enabled:e>1}}}}})],t.prototype,"maxRecordCountFactor",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"multipatchOption",void 0),i([c.property({type:Number,json:{read:{source:"resultRecordCount"}}})],t.prototype,"num",void 0),i([c.property({type:[Number],json:{write:!0}})],t.prototype,"objectIds",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"orderByFields",void 0),i([c.property({type:[String],json:{write:!0}})],t.prototype,"outFields",void 0),i([c.property({type:o.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],t.prototype,"outSpatialReference",void 0),i([c.property({type:[v],json:{write:!0}})],t.prototype,"outStatistics",void 0),i([c.property({json:{write:!0}})],t.prototype,"parameterValues",void 0),i([c.writer("parameterValues")],t.prototype,"writeParameterValues",null),i([c.property({types:a.symbolTypes,json:{read:h.read,write:!0}})],t.prototype,"pixelSize",void 0),i([c.property({type:f.default,json:{write:!0}})],t.prototype,"quantizationParameters",void 0),i([c.property({type:[Object],json:{write:!0}})],t.prototype,"rangeValues",void 0),i([c.property({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy:function(){return{enabled:"relation"===this.spatialRelationship}}}}})],t.prototype,"relationParameter",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"resultType",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnCentroid",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnDistinctValues",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:!e}}}}})],t.prototype,"returnExceededLimitFeatures",void 0),i([c.property({type:Boolean,json:{write:!0}})],t.prototype,"returnGeometry",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnQueryGeometry",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnM",void 0),i([c.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"returnZ",void 0),i([c.property({json:{write:!0}})],t.prototype,"source",void 0),i([c.property({type:String,json:{read:{source:"spatialRel",reader:m.read},write:{target:"spatialRel",writer:m.write}}})],t.prototype,"spatialRelationship",void 0),i([c.property({type:Number,json:{read:{source:"resultOffset"}}})],t.prototype,"start",void 0),i([c.writer("start"),c.writer("num")],t.prototype,"writeStart",null),i([c.property({type:String,json:{write:!0}})],t.prototype,"sqlFormat",void 0),i([c.property({type:String,json:{write:!0}})],t.prototype,"text",void 0),i([c.property({type:l,json:{write:!0}})],t.prototype,"timeExtent",void 0),i([c.property({type:String,json:{read:w.read,write:{writer:w.write,overridePolicy:function(e){return{enabled:e&&this.distance>0}}}}})],t.prototype,"units",void 0),i([c.property({type:String,json:{write:{overridePolicy:function(e){return{enabled:null!=e||this.start>0}}}}})],t.prototype,"where",void 0),i([c.writer("where")],t.prototype,"writeWhere",null),s=i([c.subclass("esri.tasks.support.Query")],t)}(c.declared(p.JSONSupport))}.apply(null,i))||(e.exports=o)},85:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(29),r(28),r(42),r(41),r(33),r(38),r(30)],void 0===(o=function(e,t,r,i,o,n,a,l,s){Object.defineProperty(t,"__esModule",{value:!0});var p=new n.default({upperLeft:"upper-left",lowerLeft:"lower-left"}),u=function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.mode="view",r.originPosition="upper-left",r.tolerance=1,r}var n;return r(t,e),n=t,t.prototype.clone=function(){return new n(l.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))},i([s.property({type:o.Extent,json:{write:!0}})],t.prototype,"extent",void 0),i([s.property({type:["view","edit"],json:{write:!0}})],t.prototype,"mode",void 0),i([s.property({type:String,json:{read:p.read,write:p.write}})],t.prototype,"originPosition",void 0),i([s.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),n=i([s.subclass("esri.tasks.support.QuantizationParameters")],t)}(s.declared(a.JSONSupport));t.default=u}.apply(null,i))||(e.exports=o)},93:function(e,t,r){var i,o;i=[r.dj.c(e.i),t,r(29),r(28),r(33),r(30)],void 0===(o=function(e,t,r,i,o,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.maxPointCount=void 0,r.maxRecordCount=void 0,r.maxVertexCount=void 0,r.onStatisticField=null,r.outStatisticFieldName=null,r.statisticType=null,r}var o;return r(t,e),o=t,t.prototype.clone=function(){return new o({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType})},i([n.property({type:Number,json:{write:!0}})],t.prototype,"maxPointCount",void 0),i([n.property({type:Number,json:{write:!0}})],t.prototype,"maxRecordCount",void 0),i([n.property({type:Number,json:{write:!0}})],t.prototype,"maxVertexCount",void 0),i([n.property({type:String,json:{write:!0}})],t.prototype,"onStatisticField",void 0),i([n.property({type:String,json:{write:!0}})],t.prototype,"outStatisticFieldName",void 0),i([n.property({type:String,json:{write:!0}})],t.prototype,"statisticType",void 0),o=i([n.subclass("esri.tasks.support.StatisticDefinition")],t)}(n.declared(o.JSONSupport))}.apply(null,i))||(e.exports=o)}}]);