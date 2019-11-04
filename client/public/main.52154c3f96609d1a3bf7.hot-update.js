webpackHotUpdate("main",{

/***/ "./src/components/Game/Game.jsx":
/*!**************************************!*\
  !*** ./src/components/Game/Game.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Game_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game.style */ "./src/components/Game/Game.style.js");
/* harmony import */ var Context_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Context/Context */ "./src/contexts/Context.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Game = function Game() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(Context_Context__WEBPACK_IMPORTED_MODULE_2__["Context"]),
      changePage = _useContext.changePage,
      gameInPlay = _useContext.gameInPlay,
      setGameInPlay = _useContext.setGameInPlay,
      showInstructions = _useContext.showInstructions,
      setShowInstructions = _useContext.setShowInstructions,
      topScores = _useContext.topScores;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(3),
      _useState2 = _slicedToArray(_useState, 2),
      countdown = _useState2[0],
      setCountdown = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      playerHasLost = _useState4[0],
      setPlayerHasLost = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      playerName = _useState6[0],
      setPlayerName = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      direction = _useState8[0],
      setDirection = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(51),
      _useState10 = _slicedToArray(_useState9, 2),
      head = _useState10[0],
      setHead = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      body = _useState12[0],
      setBody = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState14 = _slicedToArray(_useState13, 2),
      food = _useState14[0],
      setFood = _useState14[1]; // Get Heads next square #


  var getNextSquare = function getNextSquare() {
    switch (direction) {
      case 38:
        // up
        return head - 10;

      case 40:
        // down
        return head + 10;

      case 37:
        // left
        return head - 1;

      case 39: // right

      default:
        return head + 1;
    }
  }; // Change Heads direction on keydown, prevent Head from colliding with Neck


  var handleKeydown = function handleKeydown(newDirection, currentDirection) {
    if (newDirection === 38 && currentDirection === 40) {
      // Moving up trying to go down
      return 40;
    } else if (newDirection === 40 && currentDirection === 38) {
      // Moving down trying to go up
      return 38;
    } else if (newDirection === 37 && currentDirection === 39) {
      // Moving left trying to go right
      return 39;
    } else if (newDirection === 39 && currentDirection === 37) {
      // Moving right trying to go left
      return 37;
    } else if (![37, 38, 39, 40].includes(newDirection)) {
      // Not an arrow key
      return currentDirection;
    } else {
      // New direction is valid and non-conflicting
      return newDirection;
    }
  };

  var handleSubmit = function handleSubmit() {
    return console.log(playerName);
  }; // Place food randomly, prevent collision with snake


  var getRandomFood = function getRandomFood() {
    var number = Math.floor(Math.random() * 100);

    while (number === head || body.includes(number)) {
      number = Math.floor(Math.random() * 100);
    }

    return number;
  }; // Determine if the Heads next square is Valid


  var nextMoveIsInvalid = function nextMoveIsInvalid(currentHead, nextHead) {
    if ( // Player hit Right Wall
    currentHead === 9 && nextHead === 10 || currentHead === 19 && nextHead === 20 || currentHead === 29 && nextHead === 30 || currentHead === 39 && nextHead === 40 || currentHead === 49 && nextHead === 50 || currentHead === 59 && nextHead === 60 || currentHead === 69 && nextHead === 70 || currentHead === 79 && nextHead === 80 || currentHead === 89 && nextHead === 90 || currentHead === 99 && nextHead === 100) {
      return true;
    } else if ( // Player hit Left Wall
    currentHead === 10 && nextHead === 9 || currentHead === 20 && nextHead === 19 || currentHead === 30 && nextHead === 29 || currentHead === 40 && nextHead === 39 || currentHead === 50 && nextHead === 49 || currentHead === 60 && nextHead === 59 || currentHead === 70 && nextHead === 69 || currentHead === 80 && nextHead === 79 || currentHead === 90 && nextHead === 89) {
      return true;
    } else if (nextHead > 100 || nextHead < 0) {
      // Player hit Top or Bottom Wall
      return true;
    } else if (body.includes(nextHead)) {
      // Player hit Own Tail
      return true;
    }
  }; // Set up Game, Reset to Defaults after unmount


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setFood(getRandomFood);
    setGameInPlay(false);
    window.addEventListener('keydown', function (_ref) {
      var keyCode = _ref.keyCode;
      return setDirection(function (prevDirection) {
        return handleKeydown(keyCode, prevDirection);
      });
    });
    return function () {
      setCountdown(3);
      setGameInPlay(false);
      setPlayerHasLost(false);
      setShowInstructions(true);
    };
  }, []); // Dismiss Instructions, begin Recursive Countdown, Start Game at 0, Start Moving Right

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    !showInstructions && countdown > -1 && setTimeout(function () {
      return setCountdown(countdown - 1);
    }, 1000);
    !showInstructions && countdown === 0 && setGameInPlay(true);
    countdown === 0 && setHead(52);
    countdown === 0 && setDirection(39);
  }, [countdown, showInstructions]); // Decide to move head or end game based on current + next head #'s.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var nextHead = getNextSquare();

    if (playerHasLost) {
      return;
    } else if (head === food && !playerHasLost) {
      setFood(getRandomFood);
      setBody([head].concat(_toConsumableArray(body)));
    } else if (!playerHasLost) {
      body.length < 3 ? setBody([head].concat(_toConsumableArray(body))) : setBody([head].concat(_toConsumableArray(body.slice(0, body.length - 1))));
    }

    setPlayerHasLost(nextMoveIsInvalid(head, nextHead));
    gameInPlay && setTimeout(function () {
      return setHead(nextHead);
    }, 125);
  }, [head]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setGameInPlay(false);
  }, [playerHasLost]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledSection"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledBoard"], {
    gameInPlay: gameInPlay
  }, _toConsumableArray(Array(100).keys()).map(function (number) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledGameCell"], {
      body: body.includes(number),
      food: number === food,
      head: number === head,
      key: number
    });
  })), showInstructions && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledModal"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledH4"], null, "How To Play"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledP"], null, "Use your arrow keys to direct the head of the snake towards the food. Be careful not to eat your own tail or run into a wall."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledButton"], {
    onClick: function onClick() {
      return setShowInstructions(false);
    }
  }, "Got it"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledButton"], {
    onClick: function onClick() {
      return handleSave();
    }
  }, "Don't show me this again")), countdown === 3 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledH6"], {
    showInstructions: showInstructions
  }, countdown), countdown === 2 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledH6"], {
    showInstructions: showInstructions
  }, countdown), countdown === 1 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledH6"], {
    showInstructions: showInstructions
  }, countdown), countdown === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledH6"], {
    showInstructions: showInstructions
  }, "GO!"), playerHasLost && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledModal"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledH4"], null, "You've Lost"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledScoreBox"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledSpan"], null, "Your Score:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledH5"], null, body.length)), topScores.filter(function (_ref2) {
    var score = _ref2.score;
    return score >= body.length;
  }).length < 10 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Top Score!") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Not a top score"), topScores.filter(function (_ref3) {
    var score = _ref3.score;
    return score >= body.length;
  }).length < 10 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledInput"], {
    value: playerName,
    onChange: function onChange(_ref4) {
      var value = _ref4.target.value;
      return setPlayerName(value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledLengthIndicator"], {
    nameLength: playerName.length
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledButton"], {
    onClick: topScores.filter(function (_ref5) {
      var score = _ref5.score;
      return score >= body.length;
    }).length < 10 ? handleSubmit() : changePage('greeting')
  }, topScores.filter(function (_ref6) {
    var score = _ref6.score;
    return score >= body.length;
  }).length < 10 ? 'Submit Your Score' : 'Go Home'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game_style__WEBPACK_IMPORTED_MODULE_1__["StyledButton"], {
    onClick: topScores.filter(function (_ref7) {
      var score = _ref7.score;
      return score >= body.length;
    }).length < 10 ? handleSubmit() : changePage('greeting')
  }, topScores.filter(function (_ref8) {
    var score = _ref8.score;
    return score >= body.length;
  }).length < 10 ? "Nah, let's play again" : 'Try Again')));
};

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/components/Game/Game.style.js":
/*!*******************************************!*\
  !*** ./src/components/Game/Game.style.js ***!
  \*******************************************/
/*! exports provided: StyledBoard, StyledGameCell, StyledModal, StyledH4, StyledP, StyledButton, StyledSection, StyledH6, StyledScoreBox, StyledH5, StyledSpan, StyledInput, StyledLengthIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledBoard", function() { return StyledBoard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledGameCell", function() { return StyledGameCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledModal", function() { return StyledModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledH4", function() { return StyledH4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledP", function() { return StyledP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSection", function() { return StyledSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledH6", function() { return StyledH6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledScoreBox", function() { return StyledScoreBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledH5", function() { return StyledH5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledSpan", function() { return StyledSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLengthIndicator", function() { return StyledLengthIndicator; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n\tmargin: 10px 0;\n\theight: 1px;\n\twidth: 100%;\n\tbackground-color: black;\n\ttransform-origin: center;\n\ttransition: all 0.3s ease-in-out;\n\ttransform: ", ";\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\twidth: 75%;\n\tmargin: 15px 12.5%;\n\tbackground: none;\n\tborder: none;\n\tborder-left: 2px solid black;\n\tfont-size: 20px;\n\tline-height: 24px;\n\tletter-spacing: 0.25px;\n\ttext-align: center;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 18px;\n\tfont-weight: 100;\n\tline-height: 22px;\n\ttext-transform: uppercase;\n\tletter-spacing: 0.75px;\n\tmargin-right: 20px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n\tfont-size: 30px;\n\tfont-weight: 300;\n\tline-height: 35px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n\t", ";\n\tpadding: 10px 0;\n\ttext-align: center;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n\t\t\tanimation: ", " 1s linear;\n\t\t"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\tfont-size: 20vh;\n\tline-height: 24px;\n\tletter-spacing: 1px;\n\ttransition: all 1s ease-in-out;\n\ttransform: translate(-50%, -500%);\n\tz-index: 0;\n\n\t", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n\tposition: relative;\n\theight: 100vh;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\twidth: 50%;\n\tz-index: 9999;\n\n\t&:not(:last-of-type) {\n\t\tmargin-bottom: 15px;\n\t}\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n\tmargin-bottom: 50px;\n\tfont-size: 16px;\n\tline-height: 22px;\n\tletter-spacing: 0.5px;\n\ttext-align: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n\tmargin-bottom: 50px;\n\tfont-size: 50px;\n\ttext-transform: uppercase;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n\t", "\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\twidth: 75vw;\n\tpadding: 25px;\n\tbackground-color: rgba(255, 255, 255, 0.925);\n\tborder: 1px solid black;\n\tfont-size: 16px;\n\tline-height: 20px;\n\ttransform: translate(-50%, -50%);\n\tz-index: 9999;\n\n\t& > * {\n\t\tposition: relative;\n\t\tz-index: 2;\n\t}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n\t\t\tbackground-color: red;\n\t\t"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n\t\t\tbackground-color: black;\n\t\t"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\t\t\tbackground-color: black;\n\t\t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\theight: 100%;\n\twidth: 100%;\n\tborder: 1px solid black;\n\n\t", "\n\n\t", "\n\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\t\t\tbackground-color: rgba(0, 0, 0, 0.4);\n\t\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n\tposition: absolute;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tgrid-template-rows: repeat(10, 1fr);\n\ttop: 10%;\n\tright: 10%;\n\tbottom: 20%;\n\tleft: 10%;\n\tborder: 1px solid black;\n\ttransition: all 0.075s ease-in-out;\n\tz-index: -2;\n\n\t", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    from {\n        transform: translate(-50%, -500%);\n        opacity: 1;\n    } to {\n        transform: translate(-50%, -1000%);\n        opacity: 0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var fadeAway = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var StyledBoard = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2(), function (_ref) {
  var gameInPlay = _ref.gameInPlay;
  return !gameInPlay && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
});
var StyledGameCell = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4(), function (_ref2) {
  var head = _ref2.head;
  return head && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5());
}, function (_ref3) {
  var body = _ref3.body;
  return body && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6());
}, function (_ref4) {
  var food = _ref4.food;
  return food && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7());
});
var StyledModal = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject8(), function (_ref5) {
  var flexin = _ref5.theme.flexin;
  return flexin('flex-start', 'center', 'column');
});
var StyledH4 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4(_templateObject9());
var StyledP = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p(_templateObject10());
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject11(), function (_ref6) {
  var button = _ref6.theme.button;
  return button;
});
var StyledSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject12());
var StyledH6 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h6(_templateObject13(), function (_ref7) {
  var showInstructions = _ref7.showInstructions;
  return !showInstructions && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject14(), fadeAway);
});
var StyledScoreBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject15(), function (_ref8) {
  var flexin = _ref8.theme.flexin;
  return flexin();
});
var StyledH5 = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h5(_templateObject16());
var StyledSpan = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span(_templateObject17());
var StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input(_templateObject18());
var StyledLengthIndicator = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject19(), function (props) {
  return "scaleX(".concat(props.nameLength * 0.015, ")");
});

/***/ })

})
//# sourceMappingURL=main.52154c3f96609d1a3bf7.hot-update.js.map