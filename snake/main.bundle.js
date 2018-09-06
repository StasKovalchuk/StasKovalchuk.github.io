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

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".game-header {\r\n  color: #fff;\r\n  padding: 5px 15px 5px 0px;\r\n  position: relative;\r\n}\r\n\r\n.game-header>.score-block {\r\n  display: inline-block;\r\n}\r\n\r\n.score-block>.score {\r\n  position: absolute;\r\n  right: 8px;\r\n  top: -5px;\r\n}\r\n\r\n.score-block>.best-score {\r\n  position: absolute;\r\n  right: 8px;\r\n  margin-top: 5px;\r\n  font-size: 12px;\r\n}\r\n\r\n.game-header>.logo {\r\n  display: inline-block;\r\n  padding-left: 15px;\r\n}\r\n\r\n.game-container {\r\n  width: 468px;\r\n  position: relative;\r\n  display: block;\r\n  margin: auto;\r\n  background-color: #47565A;\r\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\r\n  border-radius: 5px;\r\n}\r\n\r\n.row {\r\n  height: 26px;\r\n}\r\n\r\n.column {\r\n  border: 1px solid rgba(97, 131, 138, .1);\r\n  width: 24px;\r\n  height: 24px;\r\n  display: inline-block;\r\n}\r\n\r\n.start-button {\r\n  padding: 15px;\r\n  text-align: center;\r\n  background-color: #47565A;\r\n  color: white;\r\n  border-radius: 5px;\r\n}\r\n\r\n.start-button:hover {\r\n  opacity: 0.65;\r\n  cursor: pointer;\r\n}\r\n\r\n.start-button.new-game-button {\r\n  margin: 0 105px 4px 105px;\r\n}\r\n\r\n.disable-clicks {\r\n  pointer-events: none;\r\n}\r\n\r\n.new-game-menu {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  bottom: 0;\r\n  padding: 40% 0;\r\n  text-align: center;\r\n  background: rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.new-game-menu-label {\r\n  font-size: 1.17em;\r\n  margin-bottom: 13px;\r\n  display: block;\r\n  color: #fff;\r\n}\r\n\r\n.new-best-score {\r\n  -webkit-animation: glow .5s infinite alternate;\r\n          animation: glow .5s infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes glow {\r\n  to {\r\n    text-shadow: 0 0 15px #ffff00;\r\n  }\r\n}\r\n\r\n@keyframes glow {\r\n  to {\r\n    text-shadow: 0 0 15px #ffff00;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .game-container {\r\n    width: 100%;\r\n  }\r\n  .column {\r\n    width: 5.55%;\r\n    height: 0;\r\n    padding-bottom: 5.06%;\r\n    box-sizing: border-box;\r\n  }\r\n  .row {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 0;\r\n    padding-bottom: 5.5%;\r\n  }\r\n  .new-game-menu {\r\n    width: 100%;\r\n    top: 8px;\r\n    padding-top: 30%;\r\n    font-size: 80%;\r\n  }\r\n  .start-button.new-game-button {\r\n    margin: 0 15% 1% 15%;\r\n  }\r\n  @-moz-document url-prefix() {\r\n    .column {\r\n      min-height: 5.5vw;\r\n    }\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"game-container\">\r\n  <div class=\"game-header\">\r\n    <h3 class=\"logo\">ngx-Snake</h3>\r\n    <div class=\"score-block\">\r\n      <h3 class=\"score\" [ngClass]=\"{'new-best-score': newBestScore}\">Score: {{score}}</h3>\r\n      <h3 class=\"best-score\" [ngClass]=\"{'new-best-score': newBestScore}\">Best Score: {{best_score}}</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngFor=\"let column of board; let i = index;\">\r\n    <div class=\"column\" [ngStyle]=\"{'background-color': setColors(i, j)}\" *ngFor=\"let row of column; let j = index\"></div>\r\n  </div>\r\n  <div class=\"start-button\" [ngClass]=\"{'disable-clicks': gameStarted}\" (click)=\"showMenu()\">Start Game</div>\r\n  <div class=\"new-game-menu\" *ngIf=\"showMenuChecker\">\r\n    <span class=\"new-game-menu-label\">Select Mode</span>\r\n    <div class=\"start-button new-game-button\" (click)=\"newGame(mode)\" *ngFor=\"let mode of getKeys(all_modes)\">{{all_modes[mode]}}</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_storage_service__ = __webpack_require__("../../../../../src/app/app.storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(bestScoreService) {
        this.bestScoreService = bestScoreService;
        this.default_mode = 'classic';
        this.isGameOver = false;
        this.all_modes = __WEBPACK_IMPORTED_MODULE_2__app_constants__["d" /* GAME_MODES */];
        this.getKeys = Object.keys;
        this.board = [];
        this.obstacles = [];
        this.score = 0;
        this.showMenuChecker = false;
        this.gameStarted = false;
        this.newBestScore = false;
        this.best_score = this.bestScoreService.retrieve();
        this.snake = {
            direction: __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].LEFT,
            parts: [
                {
                    x: -1,
                    y: -1
                }
            ]
        };
        this.fruit = {
            x: -1,
            y: -1
        };
        this.setBoard();
    }
    AppComponent.prototype.handleKeyboardEvents = function (e) {
        if (e.keyCode === __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].LEFT && this.snake.direction !== __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].RIGHT) {
            this.tempDirection = __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].LEFT;
        }
        else if (e.keyCode === __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].UP && this.snake.direction !== __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].DOWN) {
            this.tempDirection = __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].UP;
        }
        else if (e.keyCode === __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].RIGHT && this.snake.direction !== __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].LEFT) {
            this.tempDirection = __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].RIGHT;
        }
        else if (e.keyCode === __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].DOWN && this.snake.direction !== __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].UP) {
            this.tempDirection = __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].DOWN;
        }
    };
    AppComponent.prototype.setColors = function (col, row) {
        if (this.isGameOver) {
            return __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* COLORS */].GAME_OVER;
        }
        else if (this.fruit.x === row && this.fruit.y === col) {
            return __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* COLORS */].FRUIT;
        }
        else if (this.snake.parts[0].x === row && this.snake.parts[0].y === col) {
            return __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* COLORS */].HEAD;
        }
        else if (this.board[col][row] === true) {
            return __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* COLORS */].BODY;
        }
        else if (this.default_mode === 'obstacles' && this.checkObstacles(row, col)) {
            return __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* COLORS */].OBSTACLE;
        }
        return __WEBPACK_IMPORTED_MODULE_2__app_constants__["b" /* COLORS */].BOARD;
    };
    ;
    AppComponent.prototype.updatePositions = function () {
        var newHead = this.repositionHead();
        var me = this;
        if (this.default_mode === 'classic' && this.boardCollision(newHead)) {
            return this.gameOver();
        }
        else if (this.default_mode === 'no_walls') {
            this.noWallsTransition(newHead);
        }
        else if (this.default_mode === 'obstacles') {
            this.noWallsTransition(newHead);
            if (this.obstacleCollision(newHead)) {
                return this.gameOver();
            }
        }
        if (this.selfCollision(newHead)) {
            return this.gameOver();
        }
        else if (this.fruitCollision(newHead)) {
            this.eatFruit();
        }
        var oldTail = this.snake.parts.pop();
        this.board[oldTail.y][oldTail.x] = false;
        this.snake.parts.unshift(newHead);
        this.board[newHead.y][newHead.x] = true;
        this.snake.direction = this.tempDirection;
        setTimeout(function () {
            me.updatePositions();
        }, this.interval);
    };
    AppComponent.prototype.repositionHead = function () {
        var newHead = Object.assign({}, this.snake.parts[0]);
        if (this.tempDirection === __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].LEFT) {
            newHead.x -= 1;
        }
        else if (this.tempDirection === __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].RIGHT) {
            newHead.x += 1;
        }
        else if (this.tempDirection === __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].UP) {
            newHead.y -= 1;
        }
        else if (this.tempDirection === __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].DOWN) {
            newHead.y += 1;
        }
        return newHead;
    };
    AppComponent.prototype.noWallsTransition = function (part) {
        if (part.x === __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* BOARD_SIZE */]) {
            part.x = 0;
        }
        else if (part.x === -1) {
            part.x = __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* BOARD_SIZE */] - 1;
        }
        if (part.y === __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* BOARD_SIZE */]) {
            part.y = 0;
        }
        else if (part.y === -1) {
            part.y = __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* BOARD_SIZE */] - 1;
        }
    };
    AppComponent.prototype.addObstacles = function () {
        var x = this.randomNumber();
        var y = this.randomNumber();
        if (this.board[y][x] === true || y === 8) {
            return this.addObstacles();
        }
        this.obstacles.push({
            x: x,
            y: y
        });
    };
    AppComponent.prototype.checkObstacles = function (x, y) {
        var res = false;
        this.obstacles.forEach(function (val) {
            if (val.x === x && val.y === y) {
                res = true;
            }
        });
        return res;
    };
    AppComponent.prototype.obstacleCollision = function (part) {
        return this.checkObstacles(part.x, part.y);
    };
    AppComponent.prototype.boardCollision = function (part) {
        return part.x === __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* BOARD_SIZE */] || part.x === -1 || part.y === __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* BOARD_SIZE */] || part.y === -1;
    };
    AppComponent.prototype.selfCollision = function (part) {
        return this.board[part.y][part.x] === true;
    };
    AppComponent.prototype.fruitCollision = function (part) {
        return part.x === this.fruit.x && part.y === this.fruit.y;
    };
    AppComponent.prototype.resetFruit = function () {
        var x = this.randomNumber();
        var y = this.randomNumber();
        if (this.board[y][x] === true || this.checkObstacles(x, y)) {
            return this.resetFruit();
        }
        this.fruit = {
            x: x,
            y: y
        };
    };
    AppComponent.prototype.eatFruit = function () {
        this.score++;
        var tail = Object.assign({}, this.snake.parts[this.snake.parts.length - 1]);
        this.snake.parts.push(tail);
        this.resetFruit();
        if (this.score % 5 === 0) {
            this.interval -= 15;
        }
    };
    AppComponent.prototype.gameOver = function () {
        this.isGameOver = true;
        this.gameStarted = false;
        var me = this;
        if (this.score > this.best_score) {
            this.bestScoreService.store(this.score);
            this.best_score = this.score;
            this.newBestScore = true;
        }
        setTimeout(function () {
            me.isGameOver = false;
        }, 500);
        this.setBoard();
    };
    AppComponent.prototype.randomNumber = function () {
        return Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* BOARD_SIZE */]);
    };
    AppComponent.prototype.setBoard = function () {
        this.board = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* BOARD_SIZE */]; i++) {
            this.board[i] = [];
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* BOARD_SIZE */]; j++) {
                this.board[i][j] = false;
            }
        }
    };
    AppComponent.prototype.showMenu = function () {
        this.showMenuChecker = !this.showMenuChecker;
    };
    AppComponent.prototype.newGame = function (mode) {
        this.default_mode = mode || 'classic';
        this.showMenuChecker = false;
        this.newBestScore = false;
        this.gameStarted = true;
        this.score = 0;
        this.tempDirection = __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].LEFT;
        this.isGameOver = false;
        this.interval = 150;
        this.snake = {
            direction: __WEBPACK_IMPORTED_MODULE_2__app_constants__["c" /* CONTROLS */].LEFT,
            parts: []
        };
        for (var i = 0; i < 3; i++) {
            this.snake.parts.push({ x: 8 + i, y: 8 });
        }
        if (mode === 'obstacles') {
            this.obstacles = [];
            var j = 1;
            do {
                this.addObstacles();
            } while (j++ < 9);
        }
        this.resetFruit();
        this.updatePositions();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-snake',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            host: {
                '(document:keydown)': 'handleKeyboardEvents($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_storage_service__["a" /* BestScoreManager */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BOARD_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CONTROLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GAME_MODES; });
var BOARD_SIZE = 18;
var CONTROLS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
var COLORS = {
    GAME_OVER: '#D24D57',
    FRUIT: '#EC644B',
    HEAD: '#336E7B',
    BODY: '#C8F7C5',
    BOARD: '#86B5BD',
    OBSTACLE: '#383522'
};
var GAME_MODES = {
    classic: 'Classic',
    no_walls: 'No Walls',
    obstacles: 'Obstacles'
};


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_storage_service__ = __webpack_require__("../../../../../src/app/app.storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__app_storage_service__["a" /* BestScoreManager */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestScoreManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BestScoreManager = /** @class */ (function () {
    function BestScoreManager() {
        this.ngxSnake = 'ngx_snake';
    }
    BestScoreManager.prototype.store = function (score) {
        localStorage.setItem(this.ngxSnake, JSON.stringify({ 'best_score': score }));
    };
    BestScoreManager.prototype.retrieve = function () {
        var storage = this.parse();
        if (!storage) {
            this.store(0);
            storage = this.parse();
        }
        return storage.best_score;
    };
    BestScoreManager.prototype.parse = function () {
        return JSON.parse(localStorage.getItem(this.ngxSnake));
    };
    BestScoreManager = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
    ], BestScoreManager);
    return BestScoreManager;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_5" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map