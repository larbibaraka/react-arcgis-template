(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/support/commonProperties":53,"esri/layers/mixins/OperationalLayer":64,"esri/symbols/support/ElevationInfo":67,"esri/symbols/support/FeatureExpressionInfo":68,"esri/symbols/support/unitConversionUtils":69})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[86,32,87,88,89,90,91,92,93,94,95],{53:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(35),t(39),t(75),t(61),t(67),t(139)],void 0===(i=function(e,r,t,n,i,o,a,s){Object.defineProperty(r,"__esModule",{value:!0}),r.screenSizePerspectiveEnabled={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(e,r){return null==r.screenSizePerspective&&"defaults"===this.originOf("screenSizePerspectiveEnabled")?void i.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0):r.screenSizePerspective}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(e,r,t,n){"defaults"===this.originOf("screenSizePerspectiveEnabled")&&e?r[t]=e:o.willPropertyWrite(this,"screenSizePerspectiveEnabled",{},n)&&(r[t]=e)}}}}}},r.popupEnabled={type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:function(e,r){return!r.disablePopup}},write:{target:"disablePopup",writer:function(e,r,t){r[t]=!e}}}},r.labelsVisible={type:Boolean,json:{read:{source:"showLabels"},write:{target:"showLabels"}}},r.url={type:String,json:{write:{isRequired:!0,ignoreOrigin:!0,writer:n.write}}},r.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}},r.elevationInfo={value:null,type:a,json:{origins:{service:{read:{source:"elevationInfo"},write:{target:"elevationInfo",enabled:!1}}},read:{source:"layerDefinition.elevationInfo"},write:{target:"layerDefinition.elevationInfo"}}},r.readOnlyService=function(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}},r.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0}}}},r.opacityDrawingInfo=t({},r.opacity,{json:t({},r.opacity.json,{origins:{"web-document":t({},r.opacity.json.origins["web-document"],{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(e,r,t){return t&&"service"!==t.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition&&r.layerDefinition.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?s.transparencyToOpacity(r.layerDefinition.drawingInfo.transparency):void 0:s.transparencyToOpacity(r.drawingInfo.transparency)}}})})}.apply(null,n))||(e.exports=i)},64:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(29),t(28),t(36),t(34),t(30),t(137),t(61),t(53)],void 0===(i=function(e,r,n,i,o,a,s,u,c,p){Object.defineProperty(r,"__esModule",{value:!0}),r.OperationalLayer=function(e){return function(e){function t(){var r=null!==e&&e.apply(this,arguments)||this;return r.title="Layer",r}return n(t,e),t.prototype.writeListMode=function(e,r,t,n){n&&"ground"===n.layerContainerType?r[t]=e:e&&c.willPropertyWrite(this,t,{},n)&&(r[t]=e)},t.prototype.writeTitle=function(e,r){r.title=e||"Layer"},t.prototype.writeOperationalLayerType=function(e,r){e&&(r.layerType=e)},t.prototype.read=function(e,r){var t=this,n=arguments;r&&(r.layer=this),u.readLoadable(this,e,function(r){return t.inherited(n,[e,r])},r)},t.prototype.write=function(e,t){if(t&&t.origin){var n=t.origin+"/"+(t.layerContainerType||"operational-layers"),i=r.supportedTypes[n],a=i&&i[this.operationalLayerType];if("write"!==a&&"readwrite"!==a)return t.messages&&t.messages.push(new o("layer:unsupported","Layers ("+this.title+", "+this.id+") of type '"+this.declaredClass+"' are not supported in the context of '"+n+"'",{layer:this})),null}var s=this.inherited(arguments,[e,t]),u=!!t&&!!t.messages&&!!t.messages.filter(function(e){return e instanceof o&&"web-document-write:property-required"===e.name}).length;return!this.url&&u?null:s},i([s.property({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"id",void 0),i([s.property({json:{write:{ignoreOrigin:!0}}})],t.prototype,"listMode",void 0),i([s.writer("listMode")],t.prototype,"writeListMode",null),i([s.property({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}}}}})],t.prototype,"title",void 0),i([s.writer("title")],t.prototype,"writeTitle",null),i([s.property({type:String,readOnly:!0,json:{write:{target:"layerType",ignoreOrigin:!0}}})],t.prototype,"operationalLayerType",void 0),i([s.writer("operationalLayerType")],t.prototype,"writeOperationalLayerType",null),i([s.property(p.opacity)],t.prototype,"opacity",void 0),i([s.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"},origins:{"web-document":{read:{source:"visibility"},write:{target:"visibility"},default:!0}}}})],t.prototype,"visible",void 0),i([s.subclass("esri.layers.mixins.OperationalLayer")],t)}(s.declared(e))},r.typeModuleMap={ArcGISFeatureLayer:function(){return a.create(function(e){return Promise.all([t.e(0),t.e(71)]).then(function(){var r=[t(87)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISImageServiceLayer:function(){return a.create(function(e){return Promise.all([t.e(1),t.e(13),t.e(17)]).then(function(){var r=[t(128)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISImageServiceVectorLayer:function(){return a.resolve(null)},ArcGISMapServiceLayer:function(){return a.create(function(e){return Promise.all([t.e(4),t.e(78)]).then(function(){var r=[t(109)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISSceneServiceLayer:function(){return a.create(function(e){return Promise.all([t.e(0),t.e(24)]).then(function(){var r=[t(131)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISStreamLayer:function(){return a.create(function(e){return Promise.all([t.e(0),t.e(26)]).then(function(){var r=[t(133)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISTiledElevationServiceLayer:function(){return a.create(function(e){return t.e(11).then(function(){var r=[t(118)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISTiledImageServiceLayer:function(){return a.create(function(e){return Promise.all([t.e(4),t.e(12)]).then(function(){var r=[t(62)];e.apply(null,r)}.bind(this)).catch(t.oe)})},ArcGISTiledMapServiceLayer:function(){return a.create(function(e){return Promise.all([t.e(4),t.e(12)]).then(function(){var r=[t(62)];e.apply(null,r)}.bind(this)).catch(t.oe)})},BingMapsAerial:function(){return a.create(function(e){return t.e(15).then(function(){var r=[t(51)];e.apply(null,r)}.bind(this)).catch(t.oe)})},BingMapsRoad:function(){return a.create(function(e){return t.e(15).then(function(){var r=[t(51)];e.apply(null,r)}.bind(this)).catch(t.oe)})},BingMapsHybrid:function(){return a.create(function(e){return t.e(15).then(function(){var r=[t(51)];e.apply(null,r)}.bind(this)).catch(t.oe)})},BuildingSceneLayer:function(){return a.create(function(e){return t.e(21).then(function(){var r=[t(132)];e.apply(null,r)}.bind(this)).catch(t.oe)})},CSV:function(){return a.create(function(e){return Promise.all([t.e(0),t.e(25)]).then(function(){var r=[t(127)];e.apply(null,r)}.bind(this)).catch(t.oe)})},GeoRSS:function(){return a.create(function(e){return t.e(97).then(function(){var r=[t(120)];e.apply(null,r)}.bind(this)).catch(t.oe)})},GroupLayer:function(){return a.create(function(e){return t.e(109).then(function(){var r=[t(111)];e.apply(null,r)}.bind(this)).catch(t.oe)})},IntegratedMeshLayer:function(){return a.create(function(e){return t.e(83).then(function(){var r=[t(122)];e.apply(null,r)}.bind(this)).catch(t.oe)})},KML:function(){return a.create(function(e){return t.e(29).then(function(){var r=[t(129)];e.apply(null,r)}.bind(this)).catch(t.oe)})},OpenStreetMap:function(){return a.create(function(e){return t.e(84).then(function(){var r=[t(121)];e.apply(null,r)}.bind(this)).catch(t.oe)})},PointCloudLayer:function(){return a.create(function(e){return t.e(19).then(function(){var r=[t(130)];e.apply(null,r)}.bind(this)).catch(t.oe)})},VectorTileLayer:function(){return a.create(function(e){return t.e(22).then(function(){var r=[t(134)];e.apply(null,r)}.bind(this)).catch(t.oe)})},WebTiledLayer:function(){return a.create(function(e){return t.e(85).then(function(){var r=[t(95)];e.apply(null,r)}.bind(this)).catch(t.oe)})},WFS:function(){return a.resolve(null)},WMS:function(){return a.create(function(e){return t.e(30).then(function(){var r=[t(135)];e.apply(null,r)}.bind(this)).catch(t.oe)})},RasterDataLayer:function(){return a.resolve(null)}},r.supportedTypes={"web-scene/operational-layers":{ArcGISFeatureLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISSceneServiceLayer:"readwrite",ArcGISTiledElevationServiceLayer:"read",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",BuildingSceneLayer:"readwrite",GroupLayer:"readwrite",IntegratedMeshLayer:"readwrite",PointCloudLayer:"readwrite",WebTiledLayer:"readwrite",CSV:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",KML:"readwrite",RasterDataLayer:"readwrite"},"web-scene/basemap":{ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",WebTiledLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",ArcGISImageServiceLayer:"readwrite",WMS:"readwrite",ArcGISMapServiceLayer:"readwrite"},"web-scene/ground":{ArcGISTiledElevationServiceLayer:"readwrite"},"web-map/operational-layers":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISStreamLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",ArcGISFeatureLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite",CSV:"readwrite",GeoRSS:"readwrite",KML:"readwrite",VectorTileLayer:"readwrite",WFS:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite"},"web-map/basemap":{ArcGISImageServiceLayer:"readwrite",ArcGISImageServiceVectorLayer:"readwrite",ArcGISMapServiceLayer:"readwrite",ArcGISTiledImageServiceLayer:"readwrite",ArcGISTiledMapServiceLayer:"readwrite",OpenStreetMap:"readwrite",VectorTileLayer:"readwrite",WMS:"readwrite",WebTiledLayer:"readwrite",BingMapsAerial:"readwrite",BingMapsRoad:"readwrite",BingMapsHybrid:"readwrite"}}}.apply(null,n))||(e.exports=i)},67:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(29),t(28),t(31),t(32),t(41),t(33),t(30),t(68),t(69)],void 0===(i=function(e,r,t,n,i,o,a,s,u,c,p){var l=a.strict()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new a.JSONMap({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var i;return t(r,e),i=r,r.prototype.readFeatureExpressionInfo=function(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0},r.prototype.writeFeatureExpressionInfo=function(e,r,t,n){r[t]=e.write(null,n),"0"===e.expression&&(r.featureExpression={value:0})},Object.defineProperty(r.prototype,"mode",{get:function(){return this._isOverridden("mode")?this._get("mode"):null!=this.offset||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"},set:function(e){this._override("mode",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"unit",{set:function(e){this._set("unit",e)},enumerable:!0,configurable:!0}),r.prototype.write=function(){return this.offset||this.mode||this.featureExpressionInfo||this.unit?this.inherited(arguments):null},r.prototype.clone=function(){return new i({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})},n([u.property({type:c,json:{write:!0}})],r.prototype,"featureExpressionInfo",void 0),n([u.reader("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],r.prototype,"readFeatureExpressionInfo",null),n([u.writer("featureExpressionInfo",{featureExpressionInfo:{type:c},"featureExpression.value":{type:[0]}})],r.prototype,"writeFeatureExpressionInfo",null),n([u.property({type:l.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:l.jsonValues,read:l.read,write:{writer:l.write,isRequired:!0}}})],r.prototype,"mode",null),n([u.property({type:Number,json:{write:!0}})],r.prototype,"offset",void 0),n([u.property({type:p.supportedUnits,json:{type:String,read:d.read,write:d.write}})],r.prototype,"unit",null),i=n([u.subclass("esri.layers.support.ElevationInfo")],r)}(u.declared(s.JSONSupport))}.apply(null,n))||(e.exports=i)},68:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(29),t(28),t(31),t(32),t(33),t(30),t(65)],void 0===(i=function(e,r,t,n,i,o,a,s,u){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var a;return t(r,e),a=r,r.prototype.collectRequiredFields=function(e,r){return o(this,void 0,void 0,function(){return i(this,function(t){return[2,u.collectArcadeFieldNames(e,r,this.expression)]})})},r.prototype.clone=function(){return new a({expression:this.expression,title:this.title})},n([s.property({type:String,json:{write:!0}})],r.prototype,"expression",void 0),n([s.property({type:String,json:{write:!0}})],r.prototype,"title",void 0),a=n([s.subclass("esri.layers.support.FeatureExpressionInfo")],r)}(s.declared(a.JSONSupport))}.apply(null,n))||(e.exports=i)},69:function(e,r,t){var n,i;n=[t.dj.c(e.i),r,t(110)],void 0===(i=function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0}),r.supportsUnit=function(e){return null!=t.meterIn[e]},r.getMetersPerUnit=function(e){return 1/(t.meterIn[e]||1)},r.supportedUnits=function(){var e=Object.keys(t.meterIn);return e.sort(),e}()}.apply(null,n))||(e.exports=i)}}]);