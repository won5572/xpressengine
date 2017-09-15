webpackJsonp([8],{

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar EmailBox = function () {\n  var _this;\n  var _$wrapper = $();\n  var _mails = [];\n  var _email = '';\n  var _userId = '';\n  var _url = {};\n\n  var _bindEvents = function _bindEvents() {\n    _$wrapper.on('click', '.btnDeleteEmail', function (e) {\n      e.preventDefault();\n\n      var $this = $(this);\n\n      $this.css({ display: 'none' }).siblings().css({ display: 'inline-block' });\n    });\n\n    _$wrapper.on('click', '.btnDeleteEmailConfirm', function (e) {\n      e.preventDefault();\n\n      var $this = $(this);\n      var email = $this.closest('li.list-group-item').find('[name=email]').val();\n\n      _this.delete(email);\n    });\n\n    _$wrapper.on('click', '.btnDeleteEmailCancle', function (e) {\n      e.preventDefault();\n\n      var $this = $(this);\n\n      $this.siblings().andSelf().css({ display: 'none' }).parent().find('.btnDelete').css({ display: 'inline-block' });\n    });\n\n    _$wrapper.on('click', '#__xe_emailAddBtn', function () {\n      var $input = $('#__xe_addedEmailInput');\n      var email = $input.val();\n      if (!email) {\n        return;\n      }\n\n      $input.val('');\n\n      _this.add(email);\n    });\n\n    _$wrapper.on('change', '[name=email]', function (e) {\n      var $this = $(this);\n      var $liWrapper = $this.closest('li.list-group-item');\n      var $ul = $liWrapper.closest('ul');\n\n      $liWrapper.siblings().each(function () {\n        var $li = $(this);\n\n        if (!$li.find('> span.pull-right').length) {\n          var temp = '<span class=\"pull-right\">';\n          temp += '<a href=\"#\" class=\"btn btn-sm btn-link btnDeleteEmail\" style=\"display: inline-block;\">삭제</a>';\n          temp += '<a href=\"#\" class=\"btn btn-sm btn-link btnDeleteEmailConfirm\" style=\"display: none;\">삭제확인</a>';\n          temp += '<a href=\"#\" class=\"btn btn-sm btn-link btnDeleteEmailCancle\" style=\"display: none;\">취소</a>';\n          temp += '</span>';\n\n          $li.append(temp);\n        }\n      });\n\n      if ($liWrapper.find('> span.pull-right').length > 0) {\n        $liWrapper.find('> span.pull-right').remove();\n      }\n\n      $ul.prepend($liWrapper.detach());\n    });\n  };\n\n  return {\n    init: function init(opt) {\n      _this = this;\n      _$wrapper = opt.$wrapper;\n      _email = opt.email;\n      _userId = opt.userId;\n      _url = opt.url;\n\n      _bindEvents();\n\n      _this.getEmailList();\n\n      return this;\n    },\n\n    getEmailList: function getEmailList() {\n      $.ajax({\n        url: _url.mail.list,\n        type: 'get',\n        dataType: 'json',\n        data: { userId: _userId },\n        context: this,\n        success: function success(result) {\n          _mails = result.mails;\n\n          _this.render(result.mails);\n        },\n\n        error: function error(result) {\n          XE.toast('danger', '오류!.', '.__xe_alertEmailModal');\n        }\n      });\n    },\n\n    delete: function _delete(email) {\n      $.ajax({\n        url: _url.mail.delete,\n        type: 'post',\n        dataType: 'json',\n        data: { userId: _userId, address: email },\n        context: this,\n        success: function success(result) {\n          var i = _mails.indexOf(email);\n          _mails.splice(i, 1);\n\n          _this.render(_mails);\n\n          XE.toast('success', '삭제하였습니다.', '.__xe_alertEmailModal');\n        },\n\n        error: function error(result) {\n          XE.toast('danger', result.responseJSON.message, '.__xe_alertEmailModal');\n        }\n      });\n    },\n\n    add: function add(email) {\n      $.ajax({\n        url: _url.mail.add,\n        type: 'post',\n        dataType: 'json',\n        data: { userId: _userId, address: email },\n        context: this,\n        success: function success(result) {\n          var email = result.mail;\n\n          _mails.push(email);\n\n          _this.render(_mails);\n\n          XE.toast('success', '추가되었습니다.', '.__xe_alertEmailModal');\n        },\n\n        error: function error(result) {\n          XE.toast('danger', result.responseJSON.message, '.__xe_alertEmailModal');\n        }\n      });\n    },\n\n    render: function render(emails) {\n\n      var temp = '';\n\n      temp += '<div>';\n\n      if (emails.length > 0) {\n        temp += '<ul class=\"list-group\">';\n\n        emails.forEach(function (email, i) {\n          var address = email.address;\n          var checked = address === _email ? 'checked=\"checked\"' : '';\n\n          temp += '<li class=\"list-group-item clearfix\">';\n          temp += '<label><input type=\"radio\" name=\"email\" value=\"' + address + '\" ' + checked + '/> ' + address + '</label>';\n\n          if (email.address !== _email) {\n            temp += '<span class=\"pull-right\">';\n            temp += '<a href=\"#\" class=\"btn btn-sm btn-link btnDeleteEmail\" style=\"display: inline-block;\">삭제</a>';\n            temp += '<a href=\"#\" class=\"btn btn-sm btn-link btnDeleteEmailConfirm\" style=\"display: none;\">삭제확인</a>';\n            temp += '<a href=\"#\" class=\"btn btn-sm btn-link btnDeleteEmailCancle\" style=\"display: none;\">취소</a>';\n            temp += '</span>';\n          }\n\n          temp += '</li>';\n        });\n\n        temp += '</ul>';\n      }\n\n      temp += '<div class=\"input-group input-group-sm\" style=\"margin-bottom: 20px;\">';\n      temp += '<input type=\"text\" class=\"form-control\" id=\"__xe_addedEmailInput\" placeholder=\"이메일을 입력하세요\">';\n      temp += '<span class=\"input-group-btn\"><buttion id=\"__xe_emailAddBtn\" class=\"btn btn-default\" type=\"button\">추가</buttion></span>';\n      temp += '</div>';\n\n      _$wrapper.html(temp);\n    }\n  };\n}();\n\n$(function () {\n  $('.__xe_settingEmail').click(function () {\n    $('.__xe_emailView').slideToggle();\n    $('#__xe_emailSetting').slideToggle();\n  });\n\n  EmailBox.init({\n    $wrapper: $('#__xe_emailSetting'),\n    url: url,\n    userId: $('#__xe_emailSetting').data('user-id'),\n    email: $('#__xe_emailSetting').data('email')\n  });\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./resources/assets/core/member/settings/edit.js\n// module id = 324\n// module chunks = 8\n\n//# sourceURL=webpack:///./resources/assets/core/member/settings/edit.js?");

/***/ })

},[324]);