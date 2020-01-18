/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "precache-manifest.bfb983807d35b7133be3eee243ea6f04.js"
);

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|gif)$/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/\.(?:eot|ttf|jpeg|woff|woff2)$/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https:\/\/js.arcgis.com\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/arcgis.com\/sharing\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/static.arcgis.com\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts.gstatic.com\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts.googleapis.com\//, new workbox.strategies.StaleWhileRevalidate(), 'GET');
