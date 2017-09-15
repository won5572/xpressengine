webpackJsonp([9],{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n(function (root, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof exports.nodeName !== 'string') {\n    // CommonJS\n    factory(exports);\n  } else {\n    factory({});\n  }\n})(undefined, function (exports) {\n\n  'use strict';\n  /**\n   * @module griper\n   * */\n\n  var $ = jQuery = window.jQuery;\n\n  DynamicLoadManager.cssLoad('/assets/core/common/css/griper.css');\n\n  /**\n   * @memberof module:griper\n   * @name options\n   * @prop {object} options\n    * */\n  exports.options = {\n    toastContainer: {\n      template: '<div class=\"__xe_toast_container xe-toast-container\"></div>',\n      boxTemplate: '<div class=\"toast_box\"></div>'\n    },\n    toast: {\n      classSet: {\n        danger: 'xe-danger',\n        positive: 'xe-positive',\n        warning: 'xe-warning',\n        success: 'xe-success',\n        fail: 'xe-fail',\n        error: 'xe-danger',\n        info: 'xe-positive'\n      },\n      expireTimes: {\n        'xe-danger': 0,\n        'xe-positive': 5,\n        'xe-warning': 10,\n        'xe-success': 2,\n        'xe-fail': 5\n      },\n      status: { 500: 'xe-danger', 401: 'xe-warning' },\n      template: '<div class=\"alert-dismissable xe-alert\" style=\"display:none;\"><button type=\"button\" class=\"__xe_close xe-btn-alert-close\" aria-label=\"Close\"><i class=\"xi-close\"></i></button>' + '<span class=\"message\"></span></div>'\n    },\n    form: {\n      selectors: {\n        elementGroup: '.form-group',\n        errorText: '.__xe_error_text'\n      },\n      classes: {\n        message: ['error-text', '__xe_error_text']\n      },\n      tags: {\n        message: 'p'\n      }\n    }\n  };\n\n  /**\n   * @memberof module:griper\n   * @name toast\n   * @function\n   * @param {string} type\n   * @param {string} messagge\n   * @param {string} pos\n   * */\n  exports.toast = function (type, message, pos) {\n    var position = '';\n\n    if (navigator.userAgent.toLowerCase().indexOf('mobile') != -1) {\n      if (pos && pos.indexOf('top') != -1) {\n        position = 'top';\n      } else {\n        position = 'bottom';\n      }\n    } else {\n      position = pos || 'bottom';\n    }\n\n    this.toast.fn.add(type, message, position);\n  };\n\n  var $toastBox = null;\n  var toastBoxMap = {};\n\n  exports.toast.fn = exports.toast.prototype = {\n    constructor: exports.toast,\n    options: exports.options.toast,\n    statusToType: function statusToType(status) {\n      var type = this.options.status[status];\n      return type === undefined ? 'danger' : type.split('-')[1];\n    },\n\n    add: function add(type, message, pos) {\n      exports.toast.fn.create(type, message, pos);\n      return this;\n    },\n\n    create: function create(type, message, pos) {\n      var expireTime = 0;\n      var type = this.options.classSet[type] || 'xe-danger';\n\n      if (this.options.expireTimes[type] != 0) {\n        expireTime = parseInt(new Date().getTime() / 1000) + this.options.expireTimes[type];\n      }\n\n      var $alert = $(this.options.template);\n      $alert.attr('data-expire-time', expireTime).addClass(type).find('.message').remove();\n      $alert.append(message);\n\n      if (pos && pos.indexOf('top') != -1) {\n        exports.toast.fn.container(pos).prepend($alert);\n      } else {\n        exports.toast.fn.container(pos).append($alert);\n      }\n\n      this.show($alert);\n    },\n\n    show: function show(alert) {\n      alert.slideDown('slow');\n    },\n\n    destroy: function destroy(alert) {\n      alert.slideUp('slow', function () {\n        alert.remove();\n      });\n    },\n\n    container: function container(pos) {\n      if (toastBoxMap.hasOwnProperty(pos)) {\n        return toastBoxMap[pos];\n      }\n\n      var cssJSON = {};\n      var direction = 'up';\n\n      if (!pos) {\n        pos = 'bottom';\n      }\n\n      switch (pos) {\n        case 'top':\n          $.extend(cssJSON, {\n            top: 0,\n            bottom: 'initial',\n            margin: '0 auto'\n          });\n          break;\n\n        case 'topLeft':\n          $.extend(cssJSON, {\n            margin: 0,\n            top: 0,\n            left: 0,\n            right: 'initial',\n            bottom: 'initial',\n            minWidth: '50%'\n          });\n          break;\n\n        case 'topRight':\n          $.extend(cssJSON, {\n            margin: 0,\n            top: 0,\n            right: 0,\n            left: 'initial',\n            bottom: 'initial',\n            minWidth: '50%'\n          });\n          break;\n\n        case 'bottom':\n          $.extend(cssJSON, {\n            bottom: 0,\n            left: 0,\n            right: 0,\n            top: 'initial',\n            margin: '0 auto'\n          });\n          break;\n\n        case 'bottomLeft':\n          $.extend(cssJSON, {\n            margin: 0,\n            bottom: 0,\n            left: 0,\n            right: 'initial',\n            top: 'initial',\n            minWidth: '50%'\n          });\n          break;\n\n        case 'bottomRight':\n          $.extend(cssJSON, {\n            margin: 0,\n            bottom: 0,\n            left: 'initial',\n            right: 0,\n            top: 'initial',\n            minWidth: '50%'\n          });\n          break;\n      }\n\n      $toastBox = $(exports.options.toastContainer.boxTemplate);\n\n      var container = $(exports.options.toastContainer.template).append($toastBox).css(cssJSON);\n\n      toastBoxMap[pos] = $toastBox;\n\n      $('body').append(container);\n\n      container.on('click', 'button.__xe_close', function (e) {\n        exports.toast.fn.destroy($(this).parents('.xe-alert'));\n        e.preventDefault();\n      });\n\n      var timeChecker = function timeChecker($box) {\n        var interval;\n        return function () {\n          interval = setInterval(function () {\n            var time = parseInt(new Date().getTime() / 1000);\n            $box.find('div.xe-alert').each(function () {\n              var expireTime = parseInt($(this).data('expire-time'));\n              if (expireTime != 0 && time > expireTime) {\n                exports.toast.fn.destroy($(this));\n              }\n            });\n          }, 1000);\n        };\n      };\n\n      timeChecker($toastBox)();\n\n      return $toastBox;\n    }\n  };\n\n  /**\n   * @memberof module:griper\n   * @name form\n   * @function\n   * @param {jQuery} $element\n   * @param {string} message\n   * */\n  exports.form = function ($element, message) {\n    exports.form.fn.putByElement($element, message);\n  };\n\n  exports.form.fn = exports.form.prototype = {\n    constructor: exports.form,\n    options: exports.options.form,\n    getGroup: function getGroup($element) {\n      return $element.closest(this.options.selectors.elementGroup);\n    },\n\n    putByElement: function putByElement($element, message) {\n      this.put(this.getGroup($element), message, $element);\n    },\n\n    put: function put($group, message, $element) {\n      // $group 이 1 보다 클땐 어찌 될지 모르겠음...\n      if ($group.length == 1) {\n        $group.append($('<' + this.options.tags.message + '>').addClass(this.options.classes.message.join(' ')).text(message));\n      } else if ($group.length == 0) {\n        $element.after($('<' + this.options.tags.message + '>').addClass(this.options.classes.message.join(' ')).text(message));\n      }\n    },\n\n    clear: function clear($form) {\n      $form.find(this.options.tags.message + this.options.selectors.errorText).remove();\n    }\n  };\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./resources/assets/core/common/js/griper.js\n// module id = 318\n// module chunks = 9\n\n//# sourceURL=webpack:///./resources/assets/core/common/js/griper.js?");

/***/ })

},[318]);