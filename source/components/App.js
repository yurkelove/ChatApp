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
import ChatList from './ChatsList';
import ChatSingle from './ChatSingle';
import Registration from './Registration';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(BrowserRouter, null,
            React.createElement("div", null,
                React.createElement(Route, { path: "/registration", component: Registration }),
                React.createElement(Route, { exact: true, path: "/dialogs/:id", component: ChatSingle }),
                React.createElement(Route, { exact: true, path: "/dialogs", component: ChatList }),
                React.createElement(Route, { exact: true, path: "/", render: function () { return (React.createElement(Redirect, { to: "/registration" })); } }))));
    };
    ;
    return App;
}(React.Component));
export default App;
