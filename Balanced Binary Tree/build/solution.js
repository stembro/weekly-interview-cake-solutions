/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _binary_tree = __webpack_require__(1);

	var _binary_tree2 = _interopRequireDefault(_binary_tree);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var isSuperBalanced = function isSuperBalanced(root) {
	    return true;
	}; // Stephen Brown
	// ontheheap@gmail.com
	// Interview Cake - Balanced Binary Tree
	// https://www.interviewcake.com/question/javascript/balanced-binary-tree

	var root = new _binary_tree2.default(1);

	var root_left = root.insertLeft(2);
	var root_left_left = root_left.insertLeft(3);
	var root_left_right = root_left.insertRight(4);

	var root_right = root.insertRight(5);
	var root_right_left = root_right.insertLeft(6);
	var root_right_right = root_right.insertRight(7);

	console.log(isSuperBalanced(root));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var BinaryTreeNode = function () {
	    function BinaryTreeNode(value) {
	        _classCallCheck(this, BinaryTreeNode);

	        this.value = value;
	        this.left = null;
	        this.right = null;
	    }

	    _createClass(BinaryTreeNode, [{
	        key: "insertLeft",
	        value: function insertLeft(value) {
	            this.left = new BinaryTreeNode(value);
	            return this.left;
	        }
	    }, {
	        key: "insertRight",
	        value: function insertRight(value) {
	            this.right = new BinaryTreeNode(value);
	            return this.right;
	        }
	    }]);

	    return BinaryTreeNode;
	}();

	exports.default = BinaryTreeNode;

/***/ }
/******/ ]);