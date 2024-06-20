"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
// import "../../styles/globals.css";
require("@/styles/globals.css");
var Navbar_1 = require("@/components/Navbar");
require("slick-carousel/slick/slick.css");
var PageBtn_1 = require("@/components/PageBtn");
var Layout_1 = require("@/components/Layout");
var Footer_1 = require("@/components/Footer");
// .
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Orebi Shopping Store || Best place to shop",
    description: "Your trusted online shopping store"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: inter.className },
            React.createElement(Layout_1["default"], null,
                React.createElement(Navbar_1["default"], null),
                React.createElement(PageBtn_1["default"], null),
                children,
                React.createElement(Footer_1["default"], null)))));
}
exports["default"] = RootLayout;
