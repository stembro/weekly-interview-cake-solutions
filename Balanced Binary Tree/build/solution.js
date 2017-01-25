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

	var isSuperBalanced = function isSuperBalanced(_ref) {
	    var minDepth = _ref.minDepth,
	        maxDepth = _ref.maxDepth;

	    return !Number.isNaN(minDepth) && !Number.isNaN(maxDepth) && maxDepth - minDepth <= 1;
	}; // Stephen Brown
	// ontheheap@gmail.com
	// Interview Cake - Balanced Binary Tree
	// https://www.interviewcake.com/question/javascript/balanced-binary-tree

	var getMinAndMaxLeafDepths = function getMinAndMaxLeafDepths(root) {
	    var maxDepth = Number.NaN;
	    var minDepth = Number.NaN;

	    var preOrder = function preOrder(root) {
	        var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	        if (!root) {
	            return;
	        }

	        if (!root.left && !root.right) {
	            maxDepth = Number.isNaN(maxDepth) ? depth : Math.max(maxDepth, depth);
	            minDepth = Number.isNaN(minDepth) ? depth : Math.min(minDepth, depth);
	            return;
	        }

	        preOrder(root.left, depth + 1);
	        preOrder(root.right, depth + 1);
	    };

	    preOrder(root);

	    return {
	        maxDepth: maxDepth,
	        minDepth: minDepth
	    };
	};

	var balancedRoot = new _binary_tree2.default(1);
	var balancedRootLeft = balancedRoot.insertLeft(2);
	var balancedRootLeftLeft = balancedRootLeft.insertLeft(3);
	var balancedRootLeftRight = balancedRootLeft.insertRight(4);
	var balancedRootRight = balancedRoot.insertRight(5);
	var balancedRootRightLeft = balancedRootRight.insertLeft(6);
	var balancedRootRightRight = balancedRootRight.insertRight(7);

	var unbalancedRoot = new _binary_tree2.default(1);
	var unbalancedRootLeft = unbalancedRoot.insertLeft(2);
	var unbalancedRootLeftLeft = unbalancedRootLeft.insertLeft(3);
	var unbalancedRootLeftLeftLeft = unbalancedRootLeftLeft.insertLeft(4);
	var unbalancedRootRight = unbalancedRoot.insertRight(5);

	console.log(isSuperBalanced(getMinAndMaxLeafDepths(balancedRoot)));
	console.log(isSuperBalanced(getMinAndMaxLeafDepths(unbalancedRoot)));

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