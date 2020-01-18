(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/support/commonProperties":53,"esri/layers/mixins/OperationalLayer":64,"esri/symbols/support/ElevationInfo":67,"esri/symbols/support/FeatureExpressionInfo":68,"esri/symbols/support/unitConversionUtils":69,"esri/layers/MapImageLayer":109,"esri/layers/support/TimeInfo":233,"esri/layers/mixins/TemporalLayer":256,"esri/layers/support/TimeReference":257,"esri/geometry/support/scaleUtils":304})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[69,32,86,87,88,89,90,91,92,93,94,95],{109:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(35),t(29),t(28),t(83),t(31),t(32),t(44),t(36),t(40),t(99),t(34),t(30),t(304),t(108),t(469),t(126),t(64),t(59),t(88),t(66),t(470),t(256),t(53),t(359)],void 0===(n=function(e,r,t,i,n,o,a,l,p,s,u,c,d,y,f,v,m,h,g,w,S,b,I,x,L,T){return function(e){function r(r,t){var i=e.call(this,r)||this;return i.alwaysRefetch=!1,i.dpi=96,i.gdbVersion=null,i.imageFormat="png24",i.imageMaxHeight=2048,i.imageMaxWidth=2048,i.imageTransparency=!0,i.labelsVisible=!1,i.isReference=null,i.operationalLayerType="ArcGISMapServiceLayer",i.sourceJSON=null,i.sublayers=null,i.type="map-image",i.url=null,i}return i(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},r.prototype.load=function(e){var r=this,t=u.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then(function(){return r._fetchService(t)})),this.when()},r.prototype.readImageFormat=function(e,r){var t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"},r.prototype.createExportImageParameters=function(e,r,i,n){var o=n&&n.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var a=new T.ExportImageParameters({layer:this,scale:f.getScale({extent:e,width:r})*o}),l=a.toJSON();a.layer=null,a.destroy();var p=!n||!n.rotation||this.version<10.3?{}:{rotation:-n.rotation},s=e&&e.spatialReference,u=s.wkid||JSON.stringify(s.toJSON());l.dpi*=o;var c={};if(n&&n.timeExtent){var d=n.timeExtent.toJSON(),y=d.start,v=d.end;y&&v&&y===v?c.time=""+y:null==y&&null==v||(c.time=(null==y?"null":y)+","+(null==v?"null":v))}return t({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:u,imageSR:u,size:r+","+i},l,p,c)},r.prototype.fetchImage=function(e,r,i,n){var o={responseType:"image"};n&&n.timestamp&&(o.query={_ts:n.timestamp}),n&&n.signal&&(o.signal=n.signal);var a=this.parsedUrl.path+"/export",l=t({},this.parsedUrl.query,this.createExportImageParameters(e,r,i,n),{f:"image",_ts:this.alwaysRefetch?Date.now():null});return null==l.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(o.query?o.query=t({},l,o.query):o.query=l,p(a,o).then(function(e){return e.data}).catch(function(e){if(d.isAbortError(e))throw e;throw new s("mapimagelayer:image-fetch-error","Unable to load image: "+a,{error:e})})):d.reject(new s("mapimagelayer:dynamiclayer-not-supported","service "+this.url+" doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.",{query:l}))},r.prototype._fetchService=function(e){return l(this,void 0,void 0,function(){var r,i;return a(this,function(n){switch(n.label){case 0:return this.sourceJSON?(this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),[2]):[4,p(this.parsedUrl.path,{query:t({f:"json"},this.parsedUrl.query),signal:e})];case 1:return r=n.sent(),i=r.data,r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i,this.read(i,{origin:"service",url:this.parsedUrl}),[2]}})})},n([y.property()],r.prototype,"alwaysRefetch",void 0),n([y.property()],r.prototype,"dpi",void 0),n([y.property()],r.prototype,"gdbVersion",void 0),n([y.property({json:{read:!1,write:!1}})],r.prototype,"popupEnabled",void 0),n([y.property()],r.prototype,"imageFormat",void 0),n([y.reader("imageFormat",["supportedImageFormatTypes"])],r.prototype,"readImageFormat",null),n([y.property({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],r.prototype,"imageMaxHeight",void 0),n([y.property({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],r.prototype,"imageMaxWidth",void 0),n([y.property()],r.prototype,"imageTransparency",void 0),n([y.property({json:{read:!1,write:!1}})],r.prototype,"labelsVisible",void 0),n([y.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],r.prototype,"isReference",void 0),n([y.property({type:["ArcGISMapServiceLayer"]})],r.prototype,"operationalLayerType",void 0),n([y.property()],r.prototype,"sourceJSON",void 0),n([y.property()],r.prototype,"sublayers",void 0),n([y.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),n([y.property({json:{read:!1},readOnly:!0,value:"map-image"})],r.prototype,"type",void 0),n([y.property(L.url)],r.prototype,"url",void 0),n([y.subclass("esri.layers.MapImageLayer")],r)}(y.declared(x.TemporalLayer(b.ScaleRangeLayer(S.RefreshableLayer(I.SublayersOwner(m.ArcGISMapService(h.ArcGISService(g.OperationalLayer(w.PortalLayer(c.MultiOriginJSONMixin(v)))))))))))}.apply(null,i))||(e.exports=n)},233:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(29),t(28),t(97),t(210),t(33),t(38),t(30),t(257),t(178)],void 0===(n=function(e,r,t,i,n,o,a,l,p,s,u){return function(e){function r(r){var t=e.call(this,r)||this;return t.cumulative=!1,t.endField=null,t.fullTimeExtent=null,t.hasLiveData=!1,t.interval=null,t.startField=null,t.timeReference=null,t.trackIdField=null,t.useTime=!0,t}var a;return t(r,e),a=r,r.prototype.readFullTimeExtent=function(e,r){if(!r.timeExtent||!Array.isArray(r.timeExtent)||2!==r.timeExtent.length)return null;var t=r.timeExtent[0],i=r.timeExtent[1];return new n({start:t,end:i})},r.prototype.writeFullTimeExtent=function(e,r){e&&e.start&&e.end?r.timeExtent=[e.start.getTime(),e.end.getTime()]:r.timeExtent=null},r.prototype.readInterval=function(e,r){return r.timeInterval&&r.timeIntervalUnits?new o({value:r.timeInterval,unit:u.timeUnitKebabDictionary.fromJSON(r.timeIntervalUnits)}):r.defaultTimeInterval&&r.defaultTimeIntervalUnits?new o({value:r.defaultTimeInterval,unit:u.timeUnitKebabDictionary.fromJSON(r.defaultTimeIntervalUnits)}):null},r.prototype.writeInterval=function(e,r){if(e){var t=e.toJSON();r.timeInterval=t.value,r.timeIntervalUnits=t.unit}else r.timeInterval=null,r.timeIntervalUnits=null},r.prototype.clone=function(){var e=this,r=e.cumulative,t=e.endField,i=e.hasLiveData,n=e.interval,o=e.startField,p=e.timeReference,s=e.fullTimeExtent,u=e.trackIdField,c=e.useTime;return new a({cumulative:r,endField:t,hasLiveData:i,interval:n,startField:o,timeReference:l.clone(p),fullTimeExtent:l.clone(s),trackIdField:u,useTime:c})},i([p.property({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],r.prototype,"cumulative",void 0),i([p.property({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],r.prototype,"endField",void 0),i([p.property({type:n,json:{write:{enabled:!0,allowNull:!0}}})],r.prototype,"fullTimeExtent",void 0),i([p.reader("fullTimeExtent",["timeExtent"])],r.prototype,"readFullTimeExtent",null),i([p.writer("fullTimeExtent")],r.prototype,"writeFullTimeExtent",null),i([p.property({type:Boolean,json:{write:!0}})],r.prototype,"hasLiveData",void 0),i([p.property({type:o,json:{write:{enabled:!0,allowNull:!0}}})],r.prototype,"interval",void 0),i([p.reader("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],r.prototype,"readInterval",null),i([p.writer("interval")],r.prototype,"writeInterval",null),i([p.property({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],r.prototype,"startField",void 0),i([p.property({type:s,json:{write:{enabled:!0,allowNull:!0}}})],r.prototype,"timeReference",void 0),i([p.property({type:String,json:{write:{enabled:!0,allowNull:!0}}})],r.prototype,"trackIdField",void 0),i([p.property({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],r.prototype,"useTime",void 0),a=i([p.subclass("esri.layers.support.TimeInfo")],r)}(p.declared(a.JSONSupport))}.apply(null,i))||(e.exports=n)},256:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(29),t(28),t(97),t(210),t(30),t(233),t(65),t(178)],void 0===(n=function(e,r,t,i,n,o,a,l,p,s){Object.defineProperty(r,"__esModule",{value:!0}),r.TemporalLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.timeExtent=null,r.timeOffset=null,r.useViewTime=!0,r}return t(r,e),r.prototype.readOffset=function(e,r){var t=r.timeInfo.exportOptions;if(!t)return null;var i=t.timeOffset,n=s.timeUnitKebabDictionary.fromJSON(t.timeOffsetUnits);return i&&n?new o({value:i,unit:n}):null},Object.defineProperty(r.prototype,"timeInfo",{set:function(e){p.fixTimeInfoFields(e,this.fields),this._set("timeInfo",e)},enumerable:!0,configurable:!0}),i([a.property({type:n,json:{write:!1}})],r.prototype,"timeExtent",void 0),i([a.property({type:o})],r.prototype,"timeOffset",void 0),i([a.reader("service","timeOffset",["timeInfo.exportOptions"])],r.prototype,"readOffset",null),i([a.property({value:null,type:l,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],r.prototype,"timeInfo",null),i([a.property({type:Boolean,json:{write:!1}})],r.prototype,"useViewTime",void 0),i([a.subclass("esri.layers.mixins.TemporalLayer")],r)}(a.declared(e))}}.apply(null,i))||(e.exports=n)},257:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(29),t(28),t(33),t(30)],void 0===(n=function(e,r,t,i,n,o){return function(e){function r(r){var t=e.call(this,r)||this;return t.respectsDaylightSaving=!1,t.timezone=null,t}var n;return t(r,e),n=r,r.prototype.readRespectsDaylightSaving=function(e,r){return void 0!==r.respectsDaylightSaving?r.respectsDaylightSaving:void 0!==r.respectDaylightSaving&&r.respectDaylightSaving},r.prototype.clone=function(){var e=this.respectsDaylightSaving,r=this.timezone;return new n({respectsDaylightSaving:e,timezone:r})},i([o.property({type:Boolean,json:{write:!0}})],r.prototype,"respectsDaylightSaving",void 0),i([o.reader("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],r.prototype,"readRespectsDaylightSaving",null),i([o.property({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],r.prototype,"timezone",void 0),n=i([o.subclass("esri.layers.support.TimeReference")],r)}(o.declared(n.JSONSupport))}.apply(null,i))||(e.exports=n)},304:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(174)],void 0===(n=function(e,r,t){function i(e,r){return e/(t.getMetersPerUnitForSR(r)*t.inchesPerMeter*n)}Object.defineProperty(r,"__esModule",{value:!0});var n=96;r.getScale=function(e,r){var i=r||e.extent,o=e.width,a=t.getMetersPerUnitForSR(i&&i.spatialReference);return i&&o?i.width/o*a*t.inchesPerMeter*n:0},r.getResolutionForScale=i,r.getScaleForResolution=function(e,r){return e*(t.getMetersPerUnitForSR(r)*t.inchesPerMeter*n)},r.getExtentForScale=function(e,r){var t=e.extent,n=e.width,o=i(r,t.spatialReference);return t.clone().expand(o*n/t.width)}}.apply(null,i))||(e.exports=n)},53:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(35),t(39),t(75),t(61),t(67),t(139)],void 0===(n=function(e,r,t,i,n,o,a,l){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){return null==r.screenSizePerspective&&"defaults"===this.originOf("screenSizePerspectiveEnabled")?void n.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0):r.screenSizePerspective}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,t,i){"defaults"===this.originOf("screenSizePerspectiveEnabled")&&e?r[t]=e:o.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},i)&&(r[t]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,t){r[t]=!e}}}},r.labelsVisible={type:Boolean,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{write:{isRequired:!0,ignoreOrigin:!0,writer:i.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:a,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0}}}},r.opacityDrawingInfo=t({},r.opacity,{json:t({},r.opacity.json,{origins:{"web-document":t({},r.opacity.json.origins["web-document"],{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?l.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:l.transparencyToOpacity(r.drawingInfo.transparency)}}})})}.apply(null,i))||(e.exports=n)},64:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(29),t(28),t(36),t(34),t(30),t(137),t(61),t(53)],void 0===(n=function(e,r,i,n,o,a,l,p,s,u){Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=function(e){return function(e){function t(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return i(t,e),t.prototype.writeListMode=function(e,r,t,i){i&&"ground"===i.layerContainerType?r[t]=e:e&&s.willPropertyWrite(this,t,{},i)&&(r[t]=e)},t.prototype.writeTitle=function(e,r){r.title=e||"Layer"},t.prototype.writeOperationalLayerType=function(e,r){e&&(r.layerType=e)},t.prototype.read=function(e,r){var t=this,i=arguments;r&&(r.layer=this),p.readLoadable(this,e,function(r){return t.inherited(i,[e,r])},r)},t.prototype.write=function(e,t){if(t&&t.origin){var i=t.origin+"/"+(t.layerContainerType||"operational-layers"),n=r.supportedTypes[i],a=n&&n[this.operationalLayerType];if("write"!==a&&"readwrite"!==a)return t.messages&&t.messages.push(new o("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+i+"'",{layer:this})),null}var l=this.inherited(arguments,[e,t]),p=!!t&&!!t.messages&&!!t.messages.filter(function(e){return e instanceof o&&"web-document-write:property-required"===e.name}).length;return!this.url&&p?null:l},n([l.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"id",void 0),n([l.property({json:{write:{ignoreOrigin:!0}}})],t.prototype,"listMode",void 0),n([l.writer("listMode")],t.prototype,"writeListMode",null),n([l.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"title",void 0),n([l.writer("title")],t.prototype,"writeTitle",null),n([l.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0}}})],t.prototype,"operationalLayerType",void 0),n([l.writer("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),n([l.property(u.opacity)],t.prototype,"opacity",void 0),n([l.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"},origins:{"web-document":{read:{source:"visibility"},write:{target:"visibility"},default:!0}}}})],t.prototype,"visible",void 0),n([l.subclass("esri.layers.mixins.OperationalLayer")],t)}(l.declared(e))},r.typeModuleMap={ArcGISFeatureLayer:function(){return a.create(function(e){return Promise.all([t.e(0),t.e(71)]).then(function(){var r=[t(87)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISImageServiceLayer:function(){return a.create(function(e){return Promise.all([t.e(1),t.e(13),t.e(17)]).then(function(){var r=[t(128)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISImageServiceVectorLayer:function(){return a.resolve(null)},ArcGISMapServiceLayer:function(){return a.create(function(e){return Promise.all([t.e(4),t.e(78)]).then(function(){var r=[t(109)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISSceneServiceLayer:function(){return a.create(function(e){return Promise.all([t.e(0),t.e(24)]).then(function(){var r=[t(131)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISStreamLayer:function(){return a.create(function(e){return Promise.all([t.e(0),t.e(26)]).then(function(){var r=[t(133)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISTiledElevationServiceLayer:function(){return a.create(function(e){return t.e(11).then(function(){var r=[t(118)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISTiledImageServiceLayer:function(){return a.create(function(e){return Promise.all([t.e(4),t.e(12)]).then(function(){var r=[t(62)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISTiledMapServiceLayer:function(){return a.create(function(e){return Promise.all([t.e(4),t.e(12)]).then(function(){var r=[t(62)];e.apply(null,r)}.bind(this)).catch(t.oe)})},BingMapsAerial:function(){return a.create(function(e){return t.e(15).then(function(){var r=[t(51)];e.apply(null,r)}.bind(this)).catch(t.oe)})},BingMapsRoad:function(){return a.create(function(e){return t.e(15).then(function(){var r=[t(51)];e.apply(null,r)}.bind(this)).catch(t.oe)})},BingMapsHybrid:function(){return a.create(function(e){return t.e(15).then(function(){var r=[t(51)];e.apply(null,r)}.bind(this)).catch(t.oe)})},BuildingSceneLayer:function(){return a.create(function(e){return t.e(21).then(function(){var r=[t(132)];e.apply(null,r)}.bind(this)).catch(t.oe)})},CSV:function(){return a.create(function(e){return Promise.all([t.e(0),t.e(25)]).then(function(){var r=[t(127)];e.apply(null,r)}.bind(this)).catch(t.oe)})},GeoRSS:function(){return a.create(function(e){return t.e(97).then(function(){var r=[t(120)];e.apply(null,r)}.bind(this)).catch(t.oe)})},GroupLayer:function(){return a.create(function(e){return t.e(109).then(function(){var r=[t(111)];e.apply(null,r)}.bind(this)).catch(t.oe)})},IntegratedMeshLayer:function(){return a.create(function(e){return t.e(83).then(function(){var r=[t(122)];e.apply(null,r)}.bind(this)).catch(t.oe)})},KML:function(){return a.create(function(e){return t.e(29).then(function(){var r=[t(129)];e.apply(null,r)}.bind(this)).catch(t.oe)})},OpenStreetMap:function(){return a.create(function(e){return t.e(84).then(function(){var r=[t(121)];e.apply(null,r)}.bind(this)).catch(t.oe)})},PointCloudLayer:function(){return a.create(function(e){return t.e(19).then(function(){var r=[t(130)];e.apply(null,r)}.bind(this)).catch(t.oe)})},VectorTileLayer:function(){return a.create(function(e){return t.e(22).then(function(){var r=[t(134)];e.apply(null,r)}.bind(this)).catch(t.oe)})},WebTiledLayer:function(){return a.create(function(e){return t.e(85).then(function(){var r=[t(95)];e.apply(null,r)}.bind(this)).catch(t.oe)})},WFS:function(){return a.resolve(null)},WMS:function(){return a.create(function(e){return t.e(30).then(function(){var r=[t(135)];e.apply(null,r)}.bind(this)).catch(t.oe)})},RasterDataLayer:function(){return a.resolve(null)}},r.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISSceneServiceLayer:"readwrite",ArcGISTiledElevationServiceLayer:"read",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",BuildingSceneLayer:"readwrite",GroupLayer:"readwrite",IntegratedMeshLayer:"readwrite",PointCloudLayer:"readwrite",WebTiledLayer:"readwrite",CSV:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",KML:"readwrite",RasterDataLayer:"readwrite"},"web-scene/basemap":{ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",WebTiledLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",WMS:"readwrite",ArcGISMapServiceLayer:"readwrite"},"web-scene/ground":{ArcGISTiledElevationServiceLayer:"readwrite"},"web-map/operational-layers":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISStreamLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",ArcGISFeatureLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite",CSV:"readwrite",GeoRSS:"readwrite",KML:"readwrite",VectorTileLayer:"readwrite",WFS:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite"},"web-map/basemap":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite"}}}.apply(null,i))||(e.exports=n)},67:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(29),t(28),t(31),t(32),t(41),t(33),t(30),t(68),t(69)],void 0===(n=function(e,r,t,i,n,o,a,l,p,s,u){var c=a.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new a.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var n;return t(r,e),n=r,r.prototype.readFeatureExpressionInfo=function(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0},r.prototype.writeFeatureExpressionInfo=function(e,r,t,i){r[t]=e.write(null,i),"0"===e.expression&&(r.featureExpression={value:0})},Object.defineProperty(r.prototype,"mode",{get:function(){return this._isOverridden("mode")?this._get("mode"):null!=this.offset||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"unit",{set:function(e){this._set("unit",e)},enumerable:!0,configurable:!0}),r.prototype.write=function(){return this.offset||this.mode||this.featureExpressionInfo||this.unit?this.inherited(arguments):null},r.prototype.clone=function(){return new n({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})},i([p.property({type:s,json:{write:!0}})],r.prototype,"featureExpressionInfo",void 0),i([p.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],r.prototype,"readFeatureExpressionInfo",null),i([p.writer("featureExpressionInfo",{featureExpressionInfo:{type:s},"featureExpression.value":{type:[0]}})],r.prototype,"writeFeatureExpressionInfo",null),i([p.property({type:c.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:c.jsonValues,read:c.read,write:{writer:c.write,isRequired:!0}}})],r.prototype,"mode",null),i([p.property({type:Number,json:{write:!0}})],r.prototype,"offset",void 0),i([p.property({type:u.supportedUnits,json:{type:String,read:d.read,write:d.write}})],r.prototype,"unit",null),n=i([p.subclass("esri.layers.support.ElevationInfo")],r)}(p.declared(l.JSONSupport))}.apply(null,i))||(e.exports=n)},68:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(29),t(28),t(31),t(32),t(33),t(30),t(65)],void 0===(n=function(e,r,t,i,n,o,a,l,p){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var a;return t(r,e),a=r,r.prototype.collectRequiredFields=function(e,r){return o(this,void 0,void 0,function(){return n(this,function(t){return[2,p.collectArcadeFieldNames(e,r,this.expression)]})})},r.prototype.clone=function(){return new a({expression:this.expression,title:this.title})},i([l.property({type:String,json:{write:!0}})],r.prototype,"expression",void 0),i([l.property({type:String,json:{write:!0}})],r.prototype,"title",void 0),a=i([l.subclass("esri.layers.support.FeatureExpressionInfo")],r)}(l.declared(a.JSONSupport))}.apply(null,i))||(e.exports=n)},69:function(e,r,t){var i,n;i=[t.dj.c(e.i),r,t(110)],void 0===(n=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.supportsUnit=function(e){return null!=t.meterIn[e]},r.getMetersPerUnit=function(e){return 1/(t.meterIn[e]||1)},r.supportedUnits=function(){var e=Object.keys(t.meterIn);return e.sort(),e}()}.apply(null,i))||(e.exports=n)}}]);