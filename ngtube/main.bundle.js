webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main-block></main-block>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_videos_list_videos_list_component__ = __webpack_require__("../../../../../src/app/main/videos-list/videos-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_videos_playlist_videos_playlist_component__ = __webpack_require__("../../../../../src/app/main/videos-playlist/videos-playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_videos_search_videos_search_component__ = __webpack_require__("../../../../../src/app/main/videos-search/videos-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_video_player_video_player_component__ = __webpack_require__("../../../../../src/app/main/video-player/video-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_youtube_api_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_playlist_store_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_browser_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/browser-notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_pipes_video_duration_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/video-duration.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_pipes_video_likes_views_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/video-likes-views.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_pipes_video_name_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/video-name.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_directives_lazy_scroll_lazy_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/directives/lazy-scroll/lazy-scroll.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Components






// Services





// Pipes




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_videos_list_videos_list_component__["a" /* VideosListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__main_videos_search_videos_search_component__["a" /* VideosSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_9__main_video_player_video_player_component__["a" /* VideoPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__main_videos_playlist_videos_playlist_component__["a" /* VideosPlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_15__shared_pipes_video_duration_pipe__["a" /* VideoDurationPipe */],
                __WEBPACK_IMPORTED_MODULE_16__shared_pipes_video_likes_views_pipe__["a" /* VideoLikesViewsPipe */],
                __WEBPACK_IMPORTED_MODULE_17__shared_pipes_video_name_pipe__["a" /* VideoNamePipe */],
                __WEBPACK_IMPORTED_MODULE_18__shared_directives_lazy_scroll_lazy_scroll_directive__["a" /* LazyScrollDirective */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__shared_services_youtube_api_service__["a" /* YoutubeApiService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_services_youtube_player_service__["a" /* YoutubePlayerService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_services_playlist_store_service__["a" /* PlaylistStoreService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_services_notification_service__["a" /* NotificationService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_services_browser_notification_service__["a" /* BrowserNotificationService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* unused harmony namespace reexport */




/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mdl-navigation {\r\n  width: 100%;\r\n}\r\n\r\n.mdl-layout-title {\r\n  margin-right: 10px;\r\n}\r\n\r\n.mdl-layout-title>img {\r\n  height: 35px;\r\n}\r\n\r\n.mdl-layout__header {\r\n  height: 64px;\r\n  background-color: rgb(79, 111, 144);\r\n}\r\n\r\n.mdl-layout__content {\r\n  width: 95%;\r\n}\r\n\r\n.mdl-layout__header-row {\r\n  padding: 0 40px 0 16px;\r\n}\r\n\r\n.mdl-layout__drawer-button {\r\n  right: 0;\r\n  left: inherit;\r\n}\r\n\r\n.blur-main-playlist-opened {\r\n  opacity: 0.4;\r\n  transition: all 0.3s ease;\r\n  -moz-transition: all 0.3s ease;\r\n  -ms-transition: all 0.3s ease;\r\n  -webkit-transition: all 0.3s ease;\r\n  -o-transition: all 0.3s ease;\r\n}\r\n\r\n.mdl-js-snackbar {\r\n  bottom: 0;\r\n  z-index: 999;\r\n  right: 0;\r\n  background-color: rgba(196, 48, 43, 0.85);\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  .mdl-layout-title>img {\r\n    height: 30px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1150px) {\r\n  .mdl-layout__content {\r\n    width: 100%;\r\n  }\r\n  .yt-player,\r\n  .ytp-cued-thumbnail-overlay {\r\n    width: 100px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-layout mdl-js-layout mdl-layout--fixed-header\">\r\n\r\n  <header class=\"mdl-layout__header\">\r\n    <div class=\"mdl-layout__header-row\">\r\n      <div class=\"mdl-layout-title\">\r\n        <img src=\"assets/logo.png\">\r\n      </div>\r\n      <nav class=\"mdl-navigation\">\r\n        <videos-search (videosUpdated)=\"handleSearchVideo($event)\" [loadingInProgress]=\"loadingInProgress\">\r\n        </videos-search>\r\n      </nav>\r\n      <div aria-expanded=\"false\" role=\"button\" tabindex=\"0\" class=\"mdl-layout__drawer-button toggle-playlist-icon\" (click)=\"togglePlaylist()\">\r\n        <i class=\"material-icons\"></i>\r\n      </div>\r\n    </div>\r\n  </header>\r\n\r\n  <videos-playlist [repeat]=\"repeat\" [shuffle]=\"shuffle\" [playlistToggle]=\"playlistToggle\" [playlistNames]=\"playlistNames\" [videoPlaylist]=\"videoPlaylist\">\r\n  </videos-playlist>\r\n\r\n  <main class=\"mdl-layout__content\" LazyScroll (OnScrollMethod)=\"searchMore()\" ScrollDistance=\"3\">\r\n    <div class=\"page-content\" [ngClass]=\"{'blur-main-playlist-opened': playlistToggle}\">\r\n      <videos-list *ngIf=\"videoList.length\" class=\"mdl-grid\" (videoPlaylist)=\"checkAddToPlaylist($event)\" [videoList]=\"videoList\" [loadingInProgress]=\"loadingInProgress\">\r\n      </videos-list>\r\n      <div class=\"loader\" *ngIf=\"!videoList.length\">\r\n        <div class=\"loading\"></div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n\r\n</div>\r\n\r\n<video-player (closePlaylist)=\"closePlaylist()\" (importPlaylist)=\"importPlaylist($event)\" (exportPlaylist)=\"exportPlaylist()\" (clearPlaylist)=\"clearPlaylist()\" (playFirstInPlaylist)=\"playFirstInPlaylist()\" (repeatActive)=\"repeatActive($event)\" (shuffleActive)=\"shuffleActive($event)\"\r\n  (nextVideoEvent)=\"nextVideo()\" (prevVideoEvent)=\"prevVideo()\">\r\n</video-player>\r\n\r\n<div id=\"demo-toast-example\" class=\"mdl-js-snackbar mdl-snackbar\">\r\n  <div class=\"mdl-snackbar__text\"></div>\r\n  <button class=\"mdl-snackbar__action\" type=\"button\"></button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_api_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_playlist_store_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = /** @class */ (function () {
    function MainComponent(youtubeService, youtubePlayer, playlistService, notificationService) {
        this.youtubeService = youtubeService;
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.notificationService = notificationService;
        this.videoList = [];
        this.videoPlaylist = [];
        this.loadingInProgress = false;
        this.playlistToggle = false;
        this.playlistNames = false;
        this.repeat = false;
        this.shuffle = false;
        this.pageLoadingFinished = false;
        this.videoPlaylist = this.playlistService.retrieveStorage().playlists;
    }
    MainComponent.prototype.ngAfterViewInit = function () {
        this.playlistElement = document.getElementById('playlist');
    };
    MainComponent.prototype.playFirstInPlaylist = function () {
        if (this.videoPlaylist[0]) {
            this.playlistElement.scrollTop = 0;
            this.youtubePlayer.playVideo(this.videoPlaylist[0].id, this.videoPlaylist[0].snippet.title);
        }
    };
    MainComponent.prototype.handleSearchVideo = function (videos) {
        this.videoList = videos;
    };
    MainComponent.prototype.checkAddToPlaylist = function (video) {
        var _this = this;
        if (!this.videoPlaylist.some(function (e) { return e.id === video.id; })) {
            this.videoPlaylist.push(video);
            this.playlistService.addToPlaylist(video);
            var inPlaylist_1 = this.videoPlaylist.length - 1;
            setTimeout(function () {
                var topPos = document.getElementById(_this.videoPlaylist[inPlaylist_1].id).offsetTop;
                _this.playlistElement.scrollTop = topPos - 100;
            });
        }
    };
    MainComponent.prototype.repeatActive = function (val) {
        this.repeat = val;
        this.shuffle = false;
    };
    MainComponent.prototype.shuffleActive = function (val) {
        this.shuffle = val;
        this.repeat = false;
    };
    MainComponent.prototype.togglePlaylist = function () {
        var _this = this;
        this.playlistToggle = !this.playlistToggle;
        setTimeout(function () {
            _this.playlistNames = !_this.playlistNames;
        }, 200);
    };
    MainComponent.prototype.searchMore = function () {
        var _this = this;
        if (this.loadingInProgress || this.pageLoadingFinished || this.videoList.length < 1) {
            return;
        }
        this.loadingInProgress = true;
        this.youtubeService.searchNext()
            .then(function (data) {
            _this.loadingInProgress = false;
            if (data.length < 1 || data.status === 400) {
                setTimeout(function () {
                    _this.pageLoadingFinished = true;
                    setTimeout(function () {
                        _this.pageLoadingFinished = false;
                    }, 10000);
                });
                return;
            }
            data.forEach(function (val) {
                _this.videoList.push(val);
            });
        }).catch(function (error) {
            _this.loadingInProgress = false;
        });
    };
    MainComponent.prototype.nextVideo = function () {
        this.playPrevNext(true);
    };
    MainComponent.prototype.prevVideo = function () {
        this.playPrevNext(false);
    };
    MainComponent.prototype.playPrevNext = function (value) {
        var current = this.youtubePlayer.getCurrentVideo();
        var inPlaylist;
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === current) {
                inPlaylist = index;
            }
        });
        // if-else hell
        if (inPlaylist !== undefined) {
            var topPos = document.getElementById(this.videoPlaylist[inPlaylist].id).offsetTop;
            if (this.shuffle) {
                var shuffled = this.videoPlaylist[this.youtubePlayer.getShuffled(inPlaylist, this.videoPlaylist.length)];
                this.youtubePlayer.playVideo(shuffled.id, shuffled.snippet.title);
                this.playlistElement.scrollTop = document.getElementById(shuffled.id).offsetTop - 100;
            }
            else {
                if (value) {
                    if (this.videoPlaylist.length - 1 === inPlaylist) {
                        this.youtubePlayer.playVideo(this.videoPlaylist[0].id, this.videoPlaylist[0].snippet.title);
                        this.playlistElement.scrollTop = 0;
                    }
                    else {
                        this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist + 1].id, this.videoPlaylist[inPlaylist + 1].snippet.title);
                        this.playlistElement.scrollTop = topPos - 100;
                    }
                }
                else {
                    if (inPlaylist === 0) {
                        this.youtubePlayer.playVideo(this.videoPlaylist[this.videoPlaylist.length - 1].id, this.videoPlaylist[this.videoPlaylist.length - 1].snippet.title);
                        this.playlistElement.scrollTop = this.playlistElement.offsetHeight;
                    }
                    else {
                        this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist - 1].id, this.videoPlaylist[inPlaylist - 1].snippet.title);
                        this.playlistElement.scrollTop = topPos - 230;
                    }
                }
            }
        }
        else {
            this.playFirstInPlaylist();
        }
    };
    MainComponent.prototype.closePlaylist = function () {
        this.playlistToggle = false;
        this.playlistNames = false;
    };
    MainComponent.prototype.clearPlaylist = function () {
        this.videoPlaylist = [];
        this.playlistService.clearPlaylist();
        this.notificationService.showNotification('Playlist cleared.');
    };
    MainComponent.prototype.exportPlaylist = function () {
        if (this.videoPlaylist.length < 1) {
            this.notificationService.showNotification('Nothing to export.');
            return;
        }
        var data = JSON.stringify(this.videoPlaylist);
        var a = document.createElement('a');
        var file = new Blob([data], { type: 'text/json' });
        a.href = URL.createObjectURL(file);
        a.download = 'playlist.json';
        a.click();
        this.notificationService.showNotification('Playlist exported.');
    };
    MainComponent.prototype.importPlaylist = function (playlist) {
        this.videoPlaylist = playlist;
        this.playlistService.importPlaylist(this.videoPlaylist);
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'main-block',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_api_service__["a" /* YoutubeApiService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_player_service__["a" /* YoutubePlayerService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_playlist_store_service__["a" /* PlaylistStoreService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__["a" /* NotificationService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/video-player/video-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-player-block {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 50px;\r\n  bottom: 0;\r\n  background-color: rgba(79, 111, 144, 1);\r\n  z-index: 992;\r\n}\r\n\r\n.player-containter {\r\n  transition: all 300ms ease-in-out;\r\n  width: 440px;\r\n  height: 250px;\r\n  position: fixed;\r\n  z-index: 992;\r\n  bottom: 16px;\r\n  left: 16px;\r\n  background-color: #000;\r\n  border: 3px solid rgba(79, 111, 144, 0.75);\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n.player-containter.minimized {\r\n  -webkit-transform: translate3d(-20%, 20%, 0) scale(0.6);\r\n          transform: translate3d(-20%, 20%, 0) scale(0.6);\r\n}\r\n\r\n.player-containter.super-minimized {\r\n  -webkit-transform: translate3d(-42.5%, 46.5%, 0) scale(0.15);\r\n          transform: translate3d(-42.5%, 46.5%, 0) scale(0.15);\r\n}\r\n\r\n.player-view-controls {\r\n  position: absolute;\r\n  color: white;\r\n  background-color: rgb(196, 48, 43);\r\n  top: -27px;\r\n  left: -3px;\r\n  font-size: 30px;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n\r\n.player-view-controls i {\r\n  cursor: pointer;\r\n}\r\n\r\n.player-view-controls .minimize {\r\n  margin-left: -7px;\r\n}\r\n\r\n.player-controls-block {\r\n  margin-top: 5px;\r\n  text-align: center;\r\n  color: #fff;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.mdl-button--icon.play {\r\n  width: 42px;\r\n  height: 42px;\r\n}\r\n\r\n.mdl-button--icon.play i {\r\n  -webkit-transform: translate(-20px, -12px);\r\n          transform: translate(-20px, -12px);\r\n  font-size: 40px;\r\n}\r\n\r\n.mdl-button--icon.prev {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.mdl-button--icon.prev i {\r\n  -webkit-transform: translate(-15px, -12px);\r\n          transform: translate(-15px, -12px);\r\n  font-size: 28px;\r\n}\r\n\r\n.mdl-button--icon.next {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\n.mdl-button--icon.next i {\r\n  -webkit-transform: translate(-14px, -12px);\r\n          transform: translate(-14px, -12px);\r\n  font-size: 28px;\r\n}\r\n\r\n.repeat-shuffle-block {\r\n  margin-left: 40px;\r\n  position: absolute;\r\n  top: 10px;\r\n}\r\n\r\n.repeat-shuffle-block button.active {\r\n  background-color: rgba(196, 48, 43, 0.85);\r\n}\r\n\r\n.mute-block {\r\n  margin-left: -80px;\r\n  position: absolute;\r\n  top: 10px;\r\n}\r\n\r\n.mute-block button.active {\r\n  background-color: rgba(196, 48, 43, 0.85);\r\n}\r\n\r\n.playlist-drop-button {\r\n  position: absolute;\r\n  color: #fff;\r\n  right: 12px;\r\n  top: 10px;\r\n}\r\n\r\n.main-yt-player-block {\r\n  position: relative;\r\n  text-align: center;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.main-yt-player-block .material-icons {\r\n  position: absolute;\r\n  color: white;\r\n  font-size: 255px;\r\n  left: 0;\r\n  right: 0;\r\n  margin: 0 auto;\r\n  cursor: pointer;\r\n  display: none;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n.main-yt-player-block:hover .material-icons {\r\n  display: block;\r\n}\r\n\r\n.player-fullscreen {\r\n  bottom: 50px;\r\n  left: 0;\r\n  width: 95%;\r\n  height: calc(100% - 114px);\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\n\r\n.current-playing-text {\r\n  max-width: 320px;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  left: 10.5em;\r\n  top: 1.4em;\r\n  font-size: 12px;\r\n  text-align: left;\r\n  text-align: left;\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  pointer-events: none;\r\n}\r\n\r\n.now-playing-label {\r\n  opacity: 0.75;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n\r\n@media (max-width: 850px) {\r\n  .player-containter {\r\n    bottom: 60px;\r\n  }\r\n  .current-playing-text {\r\n    display: none !important;\r\n  }\r\n  .player-controls-block {\r\n    left: 0;\r\n  }\r\n  .repeat-shuffle-block {\r\n    margin-left: 10px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1150px) {\r\n  .player-fullscreen {\r\n    bottom: 50px;\r\n    width: 100%;\r\n  }\r\n  .current-playing-text {\r\n    max-width: 160px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/video-player/video-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-player-block\">\r\n  <div class=\"player-controls-block\">\r\n    <div class=\"current-playing-text\" *ngIf=\"superMinPlayer\">\r\n      <span class=\"now-playing-label\">Now playing: </span>\r\n      <span>{{ currentVideoText | videoName: [56, 51] }}</span>\r\n    </div>\r\n    <span class=\"mute-block\">\r\n\t\t\t<button id=\"fullscreen_tip\" class=\"mdl-button mdl-js-button mdl-button--icon\"\r\n              [ngClass]=\"{'active': fullscreenActive}\" (click)=\"toggleFullscreen()\">\r\n\t\t\t\t<i class=\"material-icons\">fullscreen</i>\r\n\t\t\t</button>\r\n\t\t\t<div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"fullscreen_tip\">\r\n\t\t\t\tFullscreen\r\n\t\t\t</div>\r\n\t\t</span>\r\n    <button id=\"prev_tip\" class=\"mdl-button mdl-js-button mdl-button--icon prev\" (click)=\"prevVideo()\">\r\n      <i class=\"material-icons\">skip_previous</i>\r\n    </button>\r\n    <div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"prev_tip\">\r\n      Previous\r\n    </div>\r\n    <button class=\"mdl-button mdl-js-button mdl-button--icon play\" (click)=\"playPause('play')\" *ngIf=\"playingEvent === 'pause'\">\r\n      <i class=\"material-icons\">play_circle_filled</i>\r\n    </button>\r\n    <button class=\"mdl-button mdl-js-button mdl-button--icon play\" (click)=\"playPause('pause')\" *ngIf=\"playingEvent === 'play'\">\r\n      <i class=\"material-icons\">pause_circle_filled</i>\r\n    </button>\r\n    <button id=\"next_tip\" class=\"mdl-button mdl-js-button mdl-button--icon next\" (click)=\"nextVideo()\">\r\n      <i class=\"material-icons\">skip_next</i>\r\n    </button>\r\n    <div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"next_tip\">\r\n      Next\r\n    </div>\r\n    <span class=\"repeat-shuffle-block\">\r\n      <button id=\"repeat_tip\" class=\"mdl-button mdl-js-button mdl-button--icon\" [ngClass]=\"{'active': repeat}\"\r\n              (click)=\"toggleRepeat()\">\r\n\t\t\t\t<i class=\"material-icons\">repeat_one</i>\r\n\t\t\t</button>\r\n\t\t\t<div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"repeat_tip\">\r\n\t\t\t\tRepeat one\r\n\t\t\t</div>\r\n      <button id=\"shuffle_tip\" class=\"mdl-button mdl-js-button mdl-button--icon\" [ngClass]=\"{'active': shuffle}\"\r\n              (click)=\"toggleShuffle()\">\r\n\t\t\t\t<i class=\"material-icons\">shuffle</i>\r\n\t\t\t</button>\r\n\t\t\t<div class=\"mdl-tooltip mdl-tooltip--top\" data-mdl-for=\"shuffle_tip\">\r\n\t\t\t\tShuffle\r\n\t\t\t</div>\r\n    </span>\r\n  </div>\r\n  <div class=\"player-containter\" [ngClass]=\"{'minimized': minPlayer, 'super-minimized': superMinPlayer, 'player-fullscreen': fullscreenActive}\">\r\n    <div class=\"player-view-controls\">\r\n      <i class=\"material-icons\" *ngIf=\"!minPlayer && !superMinPlayer && !fullscreenActive\" (click)=\"togglePlayer()\">arrow_drop_down</i>\r\n      <i class=\"material-icons arrow_drop_up\" *ngIf=\"minPlayer && !superMinPlayer && !fullscreenActive\" (click)=\"togglePlayer()\">arrow_drop_up</i>\r\n      <i class=\"material-icons minimize\" *ngIf=\"!superMinPlayer && !fullscreenActive\" (click)=\"minimizePlayer()\">remove</i>\r\n    </div>\r\n    <div class=\"main-yt-player-block\">\r\n      <i class=\"material-icons\" *ngIf=\"superMinPlayer\" (click)=\"minimizePlayer()\">zoom_out_map</i>\r\n      <div id=\"yt-player\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <button id=\"demo-menu-top-right\" class=\"mdl-button mdl-js-button mdl-button--icon playlist-drop-button\" (click)=\"openClosedPlaylist()\">\r\n    <i class=\"material-icons\">more_vert</i>\r\n  </button>\r\n\r\n  <ul class=\"mdl-menu mdl-menu--top-right mdl-js-menu\" data-mdl-for=\"demo-menu-top-right\">\r\n    <li class=\"mdl-menu__item\" (click)=\"exportPlaylistAction()\">Export playlist</li>\r\n    <li class=\"mdl-menu__item\" (click)=\"importPlaylistAction()\">Import playlist</li>\r\n    <li class=\"mdl-menu__item mdl-menu__item--full-bleed-divider\" (click)=\"clearPlaylistAction()\">Clear playlist</li>\r\n    <li class=\"mdl-menu__item\" (click)=\"toggleNotifications()\" [ngStyle]=\"{'color': !notifications ? 'rgb(186, 52, 54)': 'rgb(53, 132, 39)' }\">Notifications</li>\r\n  </ul>\r\n\r\n  <input id=\"import_button\" style=\"display: none;\" type=\"file\" name=\"file\" accept=\".json, .txt\" (change)=\"handleInputChange($event)\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/video-player/video-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_browser_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/browser-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var VideoPlayerComponent = /** @class */ (function () {
    function VideoPlayerComponent(youtubePlayer, notificationService, browserNotification) {
        var _this = this;
        this.youtubePlayer = youtubePlayer;
        this.notificationService = notificationService;
        this.browserNotification = browserNotification;
        this.currentVideoText = 'None';
        this.playingEvent = 'pause';
        this.minPlayer = true;
        this.superMinPlayer = false;
        this.shuffle = false;
        this.repeat = false;
        this.fullscreenActive = false;
        this.notifications = false;
        this.repeatActive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.shuffleActive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.nextVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.prevVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.playFirstInPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.clearPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.exportPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.importPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.closePlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.youtubePlayer.playPauseEvent.subscribe(function (event) { return _this.playingEvent = event; });
        this.youtubePlayer.currentVideoText.subscribe(function (event) { return _this.currentVideoText = event || 'None'; });
    }
    VideoPlayerComponent.prototype.ngAfterContentInit = function () {
        var doc = window.document;
        var playerApi = doc.createElement('script');
        playerApi.type = 'text/javascript';
        playerApi.src = 'https://www.youtube.com/iframe_api';
        doc.body.appendChild(playerApi);
        this.youtubePlayer.createPlayer();
    };
    VideoPlayerComponent.prototype.toggleFullscreen = function () {
        this.minPlayer = false;
        this.superMinPlayer = false;
        this.fullscreenActive = !this.fullscreenActive;
        var width = this.fullscreenActive ? window.innerWidth - 70 : 440;
        var height = this.fullscreenActive ? window.innerHeight - 120 : 250;
        this.youtubePlayer.resizePlayer(width, height);
    };
    VideoPlayerComponent.prototype.playPause = function (event) {
        this.playingEvent = event;
        if (!this.youtubePlayer.getCurrentVideo()) {
            this.playFirstInPlaylist.emit();
            return;
        }
        event === 'pause' ? this.youtubePlayer.pausePlayingVideo() : this.youtubePlayer.playPausedVideo();
    };
    VideoPlayerComponent.prototype.nextVideo = function () {
        this.nextVideoEvent.emit();
    };
    VideoPlayerComponent.prototype.prevVideo = function () {
        this.prevVideoEvent.emit();
    };
    VideoPlayerComponent.prototype.togglePlayer = function () {
        this.minPlayer = !this.minPlayer;
        this.superMinPlayer = false;
    };
    VideoPlayerComponent.prototype.minimizePlayer = function () {
        this.superMinPlayer = !this.superMinPlayer;
    };
    VideoPlayerComponent.prototype.toggleRepeat = function () {
        this.repeat = !this.repeat;
        this.shuffle = false;
        this.repeatActive.emit(this.repeat);
    };
    VideoPlayerComponent.prototype.toggleShuffle = function () {
        this.shuffle = !this.shuffle;
        this.repeat = false;
        this.shuffleActive.emit(this.shuffle);
    };
    VideoPlayerComponent.prototype.openClosedPlaylist = function () {
        this.closePlaylist.emit();
    };
    VideoPlayerComponent.prototype.clearPlaylistAction = function () {
        this.clearPlaylist.emit();
    };
    VideoPlayerComponent.prototype.exportPlaylistAction = function () {
        this.exportPlaylist.emit();
    };
    VideoPlayerComponent.prototype.importPlaylistAction = function () {
        var import_button = document.getElementById('import_button');
        import_button.click();
    };
    VideoPlayerComponent.prototype.handleInputChange = function (e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        if (file.name.split('.').pop() !== 'json') {
            this.notificationService.showNotification('File not supported.');
            return;
        }
        var reader = new FileReader();
        var me = this;
        reader.readAsText(file);
        reader.onload = function (ev) {
            var list;
            try {
                list = JSON.parse(ev.target['result']);
            }
            catch (exc) {
                list = null;
            }
            if (!list || list.length < 1) {
                me.notificationService.showNotification('Playlist not valid.');
                return;
            }
            me.importPlaylist.emit(list);
            me.notificationService.showNotification('Playlist imported.');
            document.getElementById('import_button')['value'] = '';
        };
    };
    VideoPlayerComponent.prototype.toggleNotifications = function () {
        var _this = this;
        this.notifications ?
            (this.notifications = false,
                this.browserNotification.disable()) :
            this.browserNotification.checkNotification().then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.notifications = res === 'granted' ? true : (this.notificationService.showNotification('Browser notifications blocked.'),
                        false);
                    return [2 /*return*/];
                });
            }); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "repeatActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "shuffleActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "nextVideoEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "prevVideoEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "playFirstInPlaylist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "clearPlaylist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "exportPlaylist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "importPlaylist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], VideoPlayerComponent.prototype, "closePlaylist", void 0);
    VideoPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'video-player',
            template: __webpack_require__("../../../../../src/app/main/video-player/video-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/video-player/video-player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_browser_notification_service__["a" /* BrowserNotificationService */]])
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/videos-list/videos-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader-progress {\r\n  position: relative;\r\n  width: 100%;\r\n  margin-bottom: 60px;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.loader-progress>.loading {\r\n  margin: 0 auto;\r\n}\r\n\r\n.demo-card-square.mdl-card {\r\n  height: 210px;\r\n  width: 100%;\r\n}\r\n\r\n.custom-cell.mdl-cell--2-col {\r\n  width: calc(20% - 16px);\r\n}\r\n\r\n.custom-cell {\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.demo-card-square>.mdl-card__title {\r\n  color: #fff;\r\n}\r\n\r\n.mdl-card__title {\r\n  position: relative;\r\n  transition: all 0.3s ease;\r\n  -moz-transition: all 0.3s ease;\r\n  -ms-transition: all 0.3s ease;\r\n  -webkit-transition: all 0.3s ease;\r\n  -o-transition: all 0.3s ease;\r\n}\r\n\r\n.mdl-card--expand:hover {\r\n  box-shadow: inset 0 0 0 9999px rgba(0, 0, 0, 0.3);\r\n  background-size: 130% !important;\r\n  cursor: pointer;\r\n}\r\n\r\n.mdl-card__supporting-text {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  padding: 6px 2px 2px 2px;\r\n  color: rgb(196, 48, 43);\r\n  text-align: right;\r\n  width: 97%;\r\n}\r\n\r\n.mdl-card__supporting-text .material-icons {\r\n  cursor: pointer;\r\n  font-size: 20px;\r\n}\r\n\r\n.video-name-block {\r\n  font-size: 11px;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 40px;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.video-info-block {\r\n  font-size: 11px;\r\n  font-weight: normal;\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 30px;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.video-informations {\r\n  padding: 8px;\r\n  text-align: center;\r\n}\r\n\r\n.video-informations i {\r\n  font-size: 11px;\r\n}\r\n\r\n.video-play-button {\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n}\r\n\r\n.video-play-button i {\r\n  font-size: 50px;\r\n  visibility: hidden;\r\n}\r\n\r\n.mdl-card--expand:hover .video-play-button i {\r\n  visibility: visible;\r\n}\r\n\r\n.last-item {\r\n  margin-bottom: 45px;\r\n}\r\n\r\n@media (max-width: 479px) {\r\n  .custom-cell.mdl-cell--2-col {\r\n    width: calc(100% - 16px);\r\n  }\r\n}\r\n\r\n@media (max-width: 839px) and (min-width: 480px) {\r\n  .custom-cell.mdl-cell--2-col {\r\n    width: calc(50% - 16px);\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/videos-list/videos-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mdl-cell custom-cell mdl-cell--2-col\" id=\"{{i + video.id}}\" *ngFor=\"let video of videoList; let i = index;\" [ngClass]=\"{'last-item': i === videoList.length-1}\">\r\n  <div class=\"demo-card-square mdl-card mdl-shadow--2dp\">\r\n    <div class=\"mdl-card__title mdl-card--expand\" (click)=\"play(video)\" [ngStyle]=\"{'background': '#000 url(' + video.snippet?.thumbnails.high.url + ') center center no-repeat', 'background-size': '125%'}\">\r\n      <div class=\"video-info-block\">\r\n        <div class=\"video-informations\">\r\n          <span style=\"float: left;\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">thumb_up</i>\r\n\t\t\t\t\t\t{{ video.statistics?.likeCount | videoLikesViews }}\r\n\t\t\t\t\t</span>\r\n          <span style=\"margin-left: 10px;\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">remove_red_eye</i>\r\n\t\t\t\t\t\t{{ video.statistics?.viewCount | videoLikesViews }}\r\n\t\t\t\t\t</span>\r\n          <span style=\"margin-left: 10px; float: right;\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">access_time</i>\r\n\t\t\t\t\t\t{{ video.contentDetails?.duration | videoDuration }}\r\n\t\t\t\t\t</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"video-name-block\">\r\n        <div class=\"video-informations\">\r\n          {{ video.snippet?.title | videoName: [65, 62] }}\r\n        </div>\r\n      </div>\r\n      <div class=\"video-play-button\">\r\n        <i class=\"material-icons\">play_circle_filled</i>\r\n      </div>\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text\">\r\n      <i (click)=\"addToPlaylist(video)\" class=\"material-icons\">playlist_add</i>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"loader loader-progress\" *ngIf=\"loadingInProgress\">\r\n  <div class=\"loading\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/videos-list/videos-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideosListComponent = /** @class */ (function () {
    function VideosListComponent(youtubePlayer, playlistService) {
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.videoPlaylist = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
    }
    VideosListComponent.prototype.play = function (video) {
        this.youtubePlayer.playVideo(video.id, video.snippet.title);
        this.addToPlaylist(video);
    };
    VideosListComponent.prototype.addToPlaylist = function (video) {
        this.videoPlaylist.emit(video);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], VideosListComponent.prototype, "videoList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], VideosListComponent.prototype, "loadingInProgress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], VideosListComponent.prototype, "videoPlaylist", void 0);
    VideosListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'videos-list',
            template: __webpack_require__("../../../../../src/app/main/videos-list/videos-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/videos-list/videos-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__["a" /* PlaylistStoreService */]])
    ], VideosListComponent);
    return VideosListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/videos-playlist/videos-playlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".playlist {\r\n  height: calc(100% - 113px);\r\n  width: 5%;\r\n  max-width: 70px;\r\n  position: fixed;\r\n  top: 64px;\r\n  right: 0;\r\n  background-color: rgba(49, 68, 86, 1);\r\n  overflow-x: hidden;\r\n  transition: 0.1s;\r\n  box-shadow: -2px 2px 2px 0 rgba(0, 0, 0, .14), -2px 3px 1px -2px rgba(0, 0, 0, .2), -2px 1px 5px 0 rgba(0, 0, 0, .12);\r\n  -webkit-touch-callout: none;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.playlist.opened {\r\n  width: 25%;\r\n  max-width: 25%;\r\n  z-index: 993;\r\n  height: calc(100% - 114px);\r\n  box-shadow: none;\r\n}\r\n\r\n.playlist-thumbnail {\r\n  height: 55px;\r\n  width: 55px;\r\n  background: #000;\r\n  margin: 5px;\r\n  display: inline-block;\r\n  position: relative;\r\n}\r\n\r\n.playist-item.playing {\r\n  background: rgba(196, 48, 43, 0.95);\r\n}\r\n\r\n.playist-item-empty {\r\n  color: #fff;\r\n}\r\n\r\n.playist-item-empty .playlist-thumbnail {\r\n  text-align: center;\r\n}\r\n\r\n.playist-item-empty i {\r\n  margin-top: 10px;\r\n  font-size: 35px;\r\n}\r\n\r\n.playist-item:hover {\r\n  background: rgba(196, 48, 43, 0.5);\r\n  cursor: pointer;\r\n}\r\n\r\n.playist-item:hover .delete-from-playlist {\r\n  display: block;\r\n}\r\n\r\n.no-in-playlist {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n}\r\n\r\n.video-duration {\r\n  color: #fff;\r\n  text-shadow: 2px 2px 2px #000;\r\n  position: absolute;\r\n  bottom: -4px;\r\n  left: 1px;\r\n  font-size: 9px;\r\n}\r\n\r\n.opened-item-info {\r\n  display: inline-block;\r\n  color: rgba(255, 255, 255, 0.8);\r\n  position: absolute;\r\n  left: 70px;\r\n  margin-top: 8px;\r\n}\r\n\r\n.opened-item-info.closed {\r\n  display: none;\r\n}\r\n\r\n.delete-from-playlist {\r\n  position: absolute;\r\n  display: none;\r\n  bottom: 0;\r\n  right: 0;\r\n  color: #f44542;\r\n  background-color: rgba(0, 0, 0, 0.65);\r\n  font-size: 16px;\r\n}\r\n\r\n@media (max-width: 1150px) {\r\n  .playlist {\r\n    width: 0;\r\n  }\r\n  .playlist.opened {\r\n    width: 40%;\r\n    max-width: 40%;\r\n  }\r\n}\r\n\r\n@media (max-width: 620px) {\r\n  .playlist.opened {\r\n    width: 70%;\r\n    max-width: 70%;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/videos-playlist/videos-playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"playlist\" class=\"playlist\" [ngClass]=\"{'opened': playlistToggle}\">\r\n\r\n  <div *ngFor=\"let video of videoPlaylist; let i = index;\" id=\"{{video.id}}\" class=\"playist-item\" (click)=\"play(video.id)\" [ngClass]=\"{'playing': currentPlaying(video.id)}\">\r\n    <div class=\"playlist-thumbnail\" [ngStyle]=\"{'background': '#000 url(' + video.snippet.thumbnails.default.url + ') center center no-repeat', 'background-size': '100%'}\">\r\n      <span class=\"no-in-playlist\">{{ i + 1 }}</span>\r\n      <span class=\"video-duration\">{{ video.contentDetails.duration | videoDuration }}</span>\r\n      <i class=\"material-icons delete-from-playlist\" (click)=\"removeFromPlaylist(video)\">cancel</i>\r\n    </div>\r\n\r\n    <div class=\"opened-item-info\" [ngClass]=\"{'closed': !playlistToggle}\" *ngIf=\"playlistNames\">\r\n      {{ video.snippet.title | videoName: [65, 62] }}\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"playist-item-empty\" *ngIf=\"!videoPlaylist.length\">\r\n    <div class=\"playlist-thumbnail\" [ngStyle]=\"{'background': '#000'}\">\r\n      <i class=\"material-icons\">block</i>\r\n    </div>\r\n    <div class=\"opened-item-info\" [ngClass]=\"{'closed': !playlistToggle}\" *ngIf=\"playlistNames\">\r\n      Playlist is empty\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/videos-playlist/videos-playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosPlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__ = __webpack_require__("../../../../../src/app/shared/services/playlist-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideosPlaylistComponent = /** @class */ (function () {
    function VideosPlaylistComponent(youtubePlayer, playlistService) {
        var _this = this;
        this.youtubePlayer = youtubePlayer;
        this.playlistService = playlistService;
        this.youtubePlayer.videoChangeEvent.subscribe(function (event) { return event ? _this.playNextVideo() : false; });
    }
    VideosPlaylistComponent.prototype.play = function (id) {
        var videoText = 'None';
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === id) {
                videoText = video.snippet.title;
            }
        });
        this.youtubePlayer.playVideo(id, videoText);
    };
    VideosPlaylistComponent.prototype.currentPlaying = function (id) {
        return this.youtubePlayer.getCurrentVideo() === id;
    };
    VideosPlaylistComponent.prototype.removeFromPlaylist = function (video) {
        this.videoPlaylist.splice(this.videoPlaylist.indexOf(video), 1);
        this.playlistService.removeFromPlaylist(video);
    };
    VideosPlaylistComponent.prototype.playNextVideo = function () {
        var current = this.youtubePlayer.getCurrentVideo();
        var inPlaylist;
        if (this.repeat) {
            this.play(current);
            return;
        }
        this.videoPlaylist.forEach(function (video, index) {
            if (video.id === current) {
                inPlaylist = index;
            }
        });
        if (inPlaylist !== undefined) {
            var topPos = document.getElementById(this.videoPlaylist[inPlaylist].id).offsetTop;
            var playlistEl = document.getElementById('playlist');
            if (this.shuffle) {
                var shuffled = this.videoPlaylist[this.youtubePlayer.getShuffled(inPlaylist, this.videoPlaylist.length)];
                this.youtubePlayer.playVideo(shuffled.id, shuffled.snippet.title);
                playlistEl.scrollTop = document.getElementById(shuffled).offsetTop - 100;
            }
            else {
                if (this.videoPlaylist.length - 1 === inPlaylist) {
                    this.youtubePlayer.playVideo(this.videoPlaylist[0].id, this.videoPlaylist[0].snippet.title);
                    playlistEl.scrollTop = 0;
                }
                else {
                    this.youtubePlayer.playVideo(this.videoPlaylist[inPlaylist + 1].id, this.videoPlaylist[inPlaylist + 1].snippet.title);
                    playlistEl.scrollTop = topPos - 100;
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "playlistToggle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "videoPlaylist", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "playlistNames", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "repeat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], VideosPlaylistComponent.prototype, "shuffle", void 0);
    VideosPlaylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'videos-playlist',
            template: __webpack_require__("../../../../../src/app/main/videos-playlist/videos-playlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/videos-playlist/videos-playlist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_youtube_player_service__["a" /* YoutubePlayerService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_playlist_store_service__["a" /* PlaylistStoreService */]])
    ], VideosPlaylistComponent);
    return VideosPlaylistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/videos-search/videos-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mdl-textfield--floating-label.is-focused>.mdl-textfield__label {\r\n  color: #fff;\r\n}\r\n\r\n.mdl-textfield__input {\r\n  border-bottom: 1px solid rgba(255, 255, 255, .12);\r\n}\r\n\r\n.mdl-textfield__label {\r\n  color: rgba(255, 255, 255, .26);\r\n}\r\n\r\n.mdl-textfield__label:after {\r\n  background-color: #fff;\r\n}\r\n\r\n@media (max-width: 750px) {\r\n  .mdl-textfield {\r\n    width: 140px;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/videos-search/videos-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"searchForm\" (ngSubmit)=\"doSearch($event)\">\r\n  <div class=\"mdl-textfield mdl-js-textfield\">\r\n    <input class=\"mdl-textfield__input\" formControlName=\"query\" type=\"text\" id=\"query\" autocomplete=\"off\">\r\n    <label class=\"mdl-textfield__label\" for=\"query\">Search</label>\r\n  </div>\r\n  <button type=\"submit\" class=\"mdl-button mdl-js-button mdl-button--icon\">\r\n\t\t<i class=\"material-icons\">search</i>\r\n\t</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/main/videos-search/videos-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_api_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_youtube_player_service__ = __webpack_require__("../../../../../src/app/shared/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VideosSearchComponent = /** @class */ (function () {
    function VideosSearchComponent(fb, youtubeService, youtubePlayer, notificationService) {
        var _this = this;
        this.fb = fb;
        this.youtubeService = youtubeService;
        this.youtubePlayer = youtubePlayer;
        this.notificationService = notificationService;
        this.videosUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.searchForm = this.fb.group({
            query: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        this.youtubeService.searchVideos('')
            .then(function (data) {
            _this.videosUpdated.emit(data);
        });
    }
    VideosSearchComponent.prototype.doSearch = function (event) {
        var _this = this;
        if (this.loadingInProgress ||
            (this.searchForm.value.query.trim().length === 0) ||
            (this.last_search && this.last_search === this.searchForm.value.query)) {
            return;
        }
        this.videosUpdated.emit([]);
        this.last_search = this.searchForm.value.query;
        this.youtubeService.searchVideos(this.last_search)
            .then(function (data) {
            if (data.length < 1) {
                _this.notificationService.showNotification('No matches found.');
            }
            _this.videosUpdated.emit(data);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], VideosSearchComponent.prototype, "videosUpdated", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], VideosSearchComponent.prototype, "loadingInProgress", void 0);
    VideosSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'videos-search',
            template: __webpack_require__("../../../../../src/app/main/videos-search/videos-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/videos-search/videos-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_youtube_api_service__["a" /* YoutubeApiService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_youtube_player_service__["a" /* YoutubePlayerService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__["a" /* NotificationService */]])
    ], VideosSearchComponent);
    return VideosSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YOUTUBE_API_KEY; });
var YOUTUBE_API_KEY = 'AIzaSyAsMiGn7Z09Yh1zYyJlmPf0ak8XwZ7lFJY';


/***/ }),

/***/ "../../../../../src/app/shared/directives/lazy-scroll/lazy-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LazyScrollDirective = /** @class */ (function () {
    function LazyScrollDirective(element) {
        this.element = element;
        this.OnScrollMethod = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this._element = this.element.nativeElement;
        if (!this.scrollTrigger) {
            this.scrollTrigger = 1;
        }
    }
    LazyScrollDirective.prototype.onScroll = function () {
        this._count++;
        if (this._element.scrollTop + this._element.clientHeight >= this._element.scrollHeight) {
            this.OnScrollMethod.emit(null);
        }
        else {
            if (this._count % this.scrollTrigger === 0) {
                this.OnScrollMethod.emit(null);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])('ScrollDistance'),
        __metadata("design:type", Number)
    ], LazyScrollDirective.prototype, "scrollTrigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", Object)
    ], LazyScrollDirective.prototype, "OnScrollMethod", void 0);
    LazyScrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[LazyScroll]',
            host: {
                '(scroll)': 'onScroll($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], LazyScrollDirective);
    return LazyScrollDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/video-duration.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDurationPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoDurationPipe = /** @class */ (function () {
    function VideoDurationPipe() {
    }
    VideoDurationPipe.prototype.transform = function (value, args) {
        var time = value;
        if (!time) {
            return '...';
        }
        return ['PT', 'H', 'M', 'S'].reduce(function (prev, cur, i, arr) {
            var now = prev.rest.split(cur);
            if (cur !== 'PT' && cur !== 'H' && !prev.rest.match(cur)) {
                prev.new.push('00');
            }
            if (now.length === 1) {
                return prev;
            }
            prev.new.push(now[0]);
            return {
                rest: now[1].replace(cur, ''),
                new: prev.new
            };
        }, { rest: time, new: [] })
            .new.filter(function (_time) { return _time !== ''; })
            .map(function (_time) { return _time.length === 1 ? "0" + _time : _time; })
            .join(':');
    };
    VideoDurationPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'videoDuration'
        })
    ], VideoDurationPipe);
    return VideoDurationPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/video-likes-views.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoLikesViewsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoLikesViewsPipe = /** @class */ (function () {
    function VideoLikesViewsPipe() {
    }
    VideoLikesViewsPipe.prototype.transform = function (value, args) {
        return parseInt(value, 10).toLocaleString('en');
    };
    VideoLikesViewsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'videoLikesViews'
        })
    ], VideoLikesViewsPipe);
    return VideoLikesViewsPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/video-name.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoNamePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VideoNamePipe = /** @class */ (function () {
    function VideoNamePipe() {
    }
    VideoNamePipe.prototype.transform = function (value, args) {
        var dots = '...';
        if (value.length > args[0]) {
            value = value.substring(0, args[1]) + dots;
        }
        return value;
    };
    VideoNamePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Pipe */])({
            name: 'videoName'
        })
    ], VideoNamePipe);
    return VideoNamePipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/browser-notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowserNotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var _window = window;
var BrowserNotificationService = /** @class */ (function () {
    function BrowserNotificationService() {
        this.enabled = false;
        this.notifSupported = window.Notification && Notification.permission !== 'denied' ? true : false;
    }
    BrowserNotificationService.prototype.checkNotification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.enabled) {
                    return [2 /*return*/, Notification.requestPermission(function (result) {
                            return result === 'granted' ? (_this.enabled = true) : false;
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    BrowserNotificationService.prototype.disable = function () {
        this.enabled = false;
    };
    BrowserNotificationService.prototype.show = function (name) {
        if (!this.notifSupported || !this.enabled) {
            return;
        }
        Notification.requestPermission(function (status) {
            var n = new Notification('Now playing', {
                body: name,
                icon: 'assets/logo_git.png'
            });
        });
    };
    BrowserNotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BrowserNotificationService);
    return BrowserNotificationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.timeoutDuration = 3500;
    }
    NotificationService.prototype.showNotification = function (message) {
        var notification = document.querySelector('.mdl-js-snackbar');
        var data = {
            message: message,
            timeout: this.timeoutDuration
        };
        notification['MaterialSnackbar'].showSnackbar(data);
    };
    NotificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/playlist-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlaylistStoreService = /** @class */ (function () {
    function PlaylistStoreService() {
        this.ngxYTPlayer = 'ngx_yt_player';
        this.playlists_template = {
            'playlists': []
        };
    }
    PlaylistStoreService.prototype.init = function () {
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(this.playlists_template));
    };
    PlaylistStoreService.prototype.retrieveStorage = function () {
        var storedPlaylist = this.parse();
        if (!storedPlaylist) {
            this.init();
            storedPlaylist = this.parse();
        }
        return storedPlaylist;
    };
    PlaylistStoreService.prototype.addToPlaylist = function (video) {
        var store = this.parse();
        store.playlists.push(video);
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistStoreService.prototype.removeFromPlaylist = function (video) {
        var store = this.parse();
        store.playlists = store.playlists.filter(function (item) { return item.id !== video.id; });
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistStoreService.prototype.parse = function () {
        return JSON.parse(localStorage.getItem(this.ngxYTPlayer));
    };
    PlaylistStoreService.prototype.clearPlaylist = function () {
        this.init();
    };
    PlaylistStoreService.prototype.importPlaylist = function (videos) {
        var store = this.parse();
        store.playlists = videos;
        localStorage.setItem(this.ngxYTPlayer, JSON.stringify(store));
    };
    PlaylistStoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PlaylistStoreService);
    return PlaylistStoreService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/youtube-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("../../../../../src/app/shared/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var YoutubeApiService = /** @class */ (function () {
    function YoutubeApiService(http, notificationService) {
        this.http = http;
        this.notificationService = notificationService;
        this.base_url = 'https://www.googleapis.com/youtube/v3/';
        this.max_results = 50;
    }
    YoutubeApiService.prototype.searchVideos = function (query) {
        var _this = this;
        var url = this.base_url + "search?q=" + query + "&maxResults=" + this.max_results + "&type=video&part=snippet,id&key=" + __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* YOUTUBE_API_KEY */] + "&videoEmbeddable=true"; // tslint:disable-line
        return this.http.get(url)
            .map(function (response) {
            var jsonRes = response.json();
            var res = jsonRes['items'];
            _this.lastQuery = query;
            _this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
            var ids = [];
            res.forEach(function (item) {
                ids.push(item.id.videoId);
            });
            return _this.getVideos(ids);
        })
            .toPromise()
            .catch(this.handleError);
    };
    YoutubeApiService.prototype.searchNext = function () {
        var _this = this;
        var url = this.base_url + "search?q=" + this.lastQuery + "&pageToken=" + this.nextToken + "&maxResults=" + this.max_results + "&type=video&part=snippet,id&key=" + __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* YOUTUBE_API_KEY */] + "&videoEmbeddable=true"; // tslint:disable-line
        return this.http.get(url)
            .map(function (response) {
            var jsonRes = response.json();
            var res = jsonRes['items'];
            _this.nextToken = jsonRes['nextPageToken'] ? jsonRes['nextPageToken'] : undefined;
            var ids = [];
            res.forEach(function (item) {
                ids.push(item.id.videoId);
            });
            return _this.getVideos(ids);
        })
            .toPromise()
            .catch(this.handleError);
    };
    YoutubeApiService.prototype.getVideos = function (ids) {
        var url = this.base_url + "videos?id=" + ids.join(',') + "&maxResults=" + this.max_results + "&type=video&part=snippet,contentDetails,statistics&key=" + __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* YOUTUBE_API_KEY */]; // tslint:disable-line
        return this.http.get(url)
            .map(function (results) {
            return results.json()['items'];
        })
            .toPromise()
            .catch(this.handleError);
    };
    YoutubeApiService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        this.notificationService.showNotification(errMsg);
        return Promise.reject(errMsg);
    };
    YoutubeApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__notification_service__["a" /* NotificationService */]])
    ], YoutubeApiService);
    return YoutubeApiService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/youtube-player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_service__ = __webpack_require__("../../../../../src/app/shared/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser_notification_service__ = __webpack_require__("../../../../../src/app/shared/services/browser-notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var _window = window;
var YoutubePlayerService = /** @class */ (function () {
    function YoutubePlayerService(notificationService, browserNotification) {
        this.notificationService = notificationService;
        this.browserNotification = browserNotification;
        this.videoChangeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](true);
        this.playPauseEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](true);
        this.currentVideoText = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](true);
    }
    YoutubePlayerService.prototype.createPlayer = function () {
        var _this = this;
        var interval = setInterval(function () {
            if ((typeof _window.YT !== 'undefined') && _window.YT && _window.YT.Player) {
                _this.yt_player = new _window.YT.Player('yt-player', {
                    width: '440',
                    height: '250',
                    playerVars: {
                        iv_load_policy: '3',
                        rel: '0'
                    },
                    events: {
                        onStateChange: function (ev) {
                            _this.onPlayerStateChange(ev);
                        }
                    }
                });
                clearInterval(interval);
            }
        }, 100);
    };
    YoutubePlayerService.prototype.onPlayerStateChange = function (event) {
        var state = event.data;
        switch (state) {
            case 0:
                this.videoChangeEvent.emit(true);
                this.playPauseEvent.emit('pause');
                break;
            case 1:
                this.playPauseEvent.emit('play');
                break;
            case 2:
                this.playPauseEvent.emit('pause');
                break;
        }
    };
    YoutubePlayerService.prototype.playVideo = function (videoId, videoText) {
        if (!this.yt_player) {
            this.notificationService.showNotification('Player not ready.');
            return;
        }
        this.yt_player.loadVideoById(videoId);
        this.currentVideoId = videoId;
        this.currentVideoText.emit(videoText);
        this.browserNotification.show(videoText);
    };
    YoutubePlayerService.prototype.pausePlayingVideo = function () {
        this.yt_player.pauseVideo();
    };
    YoutubePlayerService.prototype.playPausedVideo = function () {
        this.yt_player.playVideo();
    };
    YoutubePlayerService.prototype.getCurrentVideo = function () {
        return this.currentVideoId;
    };
    YoutubePlayerService.prototype.resizePlayer = function (width, height) {
        this.yt_player.setSize(width, height);
    };
    YoutubePlayerService.prototype.getShuffled = function (index, max) {
        if (max < 2) {
            return;
        }
        var i = Math.floor(Math.random() * max);
        return i !== index ? i : this.getShuffled(index, max);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], YoutubePlayerService.prototype, "videoChangeEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], YoutubePlayerService.prototype, "playPauseEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], YoutubePlayerService.prototype, "currentVideoText", void 0);
    YoutubePlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_2__browser_notification_service__["a" /* BrowserNotificationService */]])
    ], YoutubePlayerService);
    return YoutubePlayerService;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app___ = __webpack_require__("../../../../../src/app/index.ts");



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_7" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app___["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map