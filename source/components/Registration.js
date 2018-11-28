var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { AppBar } from '../../node_modules/@material-ui/core/index';
import { Tabs } from '../../node_modules/@material-ui/core/index';
import { Tab } from '../../node_modules/@material-ui/core/index';
var Registration = /** @class */ (function (_super) {
    __extends(Registration, _super);
    function Registration() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: 'one',
        };
        _this.handleChange = function (event, value) {
            _this.setState({ value: value });
        };
        return _this;
    }
    Registration.prototype.render = function () {
        var value = this.state.value;
        return (React.createElement("div", null,
            React.createElement(AppBar, { position: "static" },
                React.createElement(Tabs, { value: value, onChange: this.handleChange },
                    React.createElement(Tab, { value: "one", label: "\u0412\u043E\u0439\u0442\u0438" }),
                    React.createElement(Tab, { value: "two", label: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F" })))));
    };
    return Registration;
}(React.Component));
export default Registration;
