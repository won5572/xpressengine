webpackJsonp([9],{

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(5);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(15);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n$(function () {\n  $('.__xe_settingEmail').click(function () {\n    $('.__xe_emailView').slideToggle();\n    $('#__xe_emailSetting').slideToggle();\n  });\n});\n\n$(function () {\n  var EmailBox = _react2.default.createClass({\n    displayName: 'EmailBox',\n\n    componentDidMount: function componentDidMount() {\n      this.loadCommentsFromServer();\n    },\n\n    getInitialState: function getInitialState() {\n      return { mails: [], selected: this.props.email };\n    },\n\n    loadCommentsFromServer: function loadCommentsFromServer() {\n      $.ajax({\n        url: this.props.url.mail.list,\n        type: 'get',\n        dataType: 'json',\n        data: { userId: this.props.userId },\n        context: this,\n        success: function success(result) {\n          this.setState({ mails: result.mails });\n        },\n\n        error: function error(result) {\n          XE.toast('danger', '오류!.', '.__xe_alertEmailModal');\n        }\n      });\n    },\n\n    handleChange: function handleChange(address) {\n      this.setState($.extend(this.state, { selected: address }));\n    },\n\n    handleAddEmail: function handleAddEmail(email) {\n      $.ajax({\n        url: this.props.url.mail.add,\n        type: 'post',\n        dataType: 'json',\n        data: { userId: this.props.userId, address: email.address },\n        context: this,\n        success: function success(result) {\n          var mails = this.state.mails;\n          mails[mails.length] = result.mail;\n          this.setState({ mails: mails });\n          XE.toast('success', '추가되었습니다.', '.__xe_alertEmailModal');\n        },\n\n        error: function error(result) {\n          XE.toast('danger', result.responseJSON.message, '.__xe_alertEmailModal');\n        }\n      });\n    },\n\n    handleDeleteEmail: function handleDeleteEmail(email) {\n\n      $.ajax({\n        url: this.props.url.mail.delete,\n        type: 'post',\n        dataType: 'json',\n        data: { userId: this.props.userId, address: email.address },\n        context: this,\n        success: function success(result) {\n          var i = this.state.mails.indexOf(email);\n          this.state.mails.splice(i, 1);\n          this.setState(this.state.mails);\n          XE.toast('success', '삭제하였습니다.', '.__xe_alertEmailModal');\n        },\n\n        error: function error(result) {\n          XE.toast('danger', result.responseJSON.message, '.__xe_alertEmailModal');\n        }\n      });\n    },\n\n    render: function render() {\n      return _react2.default.createElement('div', null, _react2.default.createElement(EmailList, {\n        box: this,\n        selected: this.state.selected,\n        selectedOrigin: this.props.email,\n        mails: this.state.mails,\n        onChange: this.handleChange,\n        onDeleteEmail: this.handleDeleteEmail\n      }), _react2.default.createElement(EmailInserter, { onAddEmail: this.handleAddEmail }));\n    }\n  });\n  var EmailList = _react2.default.createClass({\n    displayName: 'EmailList',\n\n    handleChange: function handleChange(address) {\n      this.props.onChange(address);\n    },\n\n    render: function render() {\n      var mails = this.props.mails;\n      var selected = this.props.selected;\n      var selectedOrigin = this.props.selectedOrigin;\n      var _this = this;\n      var selectedItem = null;\n      var lists = mails.map(function (mail, i) {\n        var item = _react2.default.createElement(EmailItem, {\n          box: _this.props.box,\n          seq: i,\n          isSelected: mail.address == selected,\n          isSelectedOrigin: mail.address == selectedOrigin,\n          mail: mail,\n          onChange: _this.handleChange,\n          onDeleteEmail: _this.props.onDeleteEmail\n        });\n        if (mail.address != selected) {\n          return item;\n        } else {\n          selectedItem = item;\n        }\n      });\n\n      return _react2.default.createElement('ul', { className: 'list-group' }, selectedItem, lists);\n    }\n  });\n  var EmailItem = _react2.default.createClass({\n    displayName: 'EmailItem',\n\n    componentDidMount: function componentDidMount() {\n      this.$deleteBtn = $(_reactDom2.default.findDOMNode(this.refs.deleteBtn));\n      this.$deleteConfirmBtn = $(_reactDom2.default.findDOMNode(this.refs.deleteConfirmBtn));\n      this.$deleteCancelBtn = $(_reactDom2.default.findDOMNode(this.refs.deleteCancelBtn));\n    },\n\n    handleChange: function handleChange(e) {\n      this.props.onChange(this.props.mail.address);\n    },\n\n    handleDelete: function handleDelete() {\n      this.$deleteBtn.hide();\n      this.$deleteConfirmBtn.show();\n      this.$deleteCancelBtn.show();\n    },\n\n    handleDeleteConfirm: function handleDeleteConfirm() {\n      this.props.onDeleteEmail(this.props.mail);\n    },\n\n    handleDeleteCancel: function handleDeleteCancel() {\n      this.$deleteBtn.show();\n      this.$deleteConfirmBtn.hide();\n      this.$deleteCancelBtn.hide();\n    },\n\n    render: function render() {\n      var mail = this.props.mail;\n\n      var deleteBtns = null;\n\n      if (!this.props.isSelectedOrigin) {\n        deleteBtns = _react2.default.createElement('span', { className: 'pull-right' }, _react2.default.createElement('a', {\n          ref: 'deleteBtn',\n          href: '#',\n          className: 'btn btn-sm btn-link',\n          onClick: this.handleDelete\n        }, '삭제'), _react2.default.createElement('a', {\n          ref: 'deleteConfirmBtn',\n          href: '#',\n          style: { display: 'none' },\n          className: 'btn btn-sm btn-link',\n          onClick: this.handleDeleteConfirm\n        }, '삭제확인'), _react2.default.createElement('a', {\n          ref: 'deleteCancelBtn',\n          href: '#',\n          style: { display: 'none' },\n          className: 'btn btn-sm btn-link',\n          onClick: this.handleDeleteCancel\n        }, '취소'));\n      }\n\n      return _react2.default.createElement('li', { className: 'list-group-item clearfix' }, _react2.default.createElement('label', null, _react2.default.createElement('input', {\n        type: 'radio',\n        ref: 'input',\n        onChange: this.handleChange,\n        name: 'email',\n        value: mail.address,\n        checked: this.props.isSelected\n      }), ' ' + mail.address), deleteBtns);\n    }\n  });\n  var EmailInserter = _react2.default.createClass({\n    displayName: 'EmailInserter',\n\n    handleClick: function handleClick(e) {\n      e.preventDefault();\n      var $input = $(_reactDom2.default.findDOMNode(this.refs.input));\n      var email = $input.val();\n      if (!email) {\n        return;\n      }\n\n      $input.val('');\n      this.props.onAddEmail({ address: email });\n    },\n\n    render: function render() {\n      return _react2.default.createElement('div', {\n        className: 'input-group input-group-sm',\n        style: { marginBottom: '20px' }\n      }, _react2.default.createElement('input', {\n        type: 'text',\n        className: 'form-control',\n        id: '__xe_addedEmailInput',\n        ref: 'input',\n        placeholder: '이메일을 입력하세요'\n      }), _react2.default.createElement('span', { className: 'input-group-btn' }, _react2.default.createElement('buttion', {\n        id: '__xe_emailAddBtn',\n        className: 'btn btn-default',\n        type: 'button',\n        onClick: this.handleClick,\n        ref: 'btn'\n      }, '추가')));\n    }\n  });\n\n  var $box = $('#__xe_emailSetting');\n  _reactDom2.default.render(_react2.default.createElement(EmailBox, {\n    url: url,\n    userId: $box.data('userId'),\n    email: $box.data('email')\n  }), $box.get(0));\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./resources/assets/core/member/settings/edit.js\n// module id = 240\n// module chunks = 9\n\n//# sourceURL=webpack:///./resources/assets/core/member/settings/edit.js?");

/***/ })

},[240]);