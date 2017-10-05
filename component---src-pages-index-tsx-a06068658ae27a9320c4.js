webpackJsonp([221374088121123],{

/***/ "./src/components/contact-thumbnail/contact-thumbnail.scss":
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),

/***/ "./src/components/contact-thumbnail/contact-thumbnail.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	__webpack_require__("./src/components/contact-thumbnail/contact-thumbnail.scss");
	const ContactThumbnail = thumbnail => {
	    return React.createElement("div", { className: "contact-thumbnail" }, React.createElement("img", { src: ("/static-pages") + "/img/" + thumbnail.img, alt: `Thumbnail of ${thumbnail.name}` }), React.createElement("h2", null, thumbnail.name), React.createElement("ul", null, React.createElement("li", null, thumbnail.title), React.createElement("li", null, thumbnail.phone), React.createElement("li", null, thumbnail.email)));
	};
	exports.default = ContactThumbnail;

/***/ }),

/***/ "./src/components/lists/list.scss":
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),

/***/ "./src/components/lists/list.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	__webpack_require__("./src/components/lists/list.scss");
	const side_title_1 = __webpack_require__("./src/typography/side-title.tsx");
	const List = list => {
	    if (!list.listitems || list.listitems.length === 0) {
	        return React.createElement("div", null, "Spinner");
	    }
	    return React.createElement("section", { className: "list block-l" }, React.createElement(side_title_1.default, null, list.title), React.createElement("dl", null, list.listitems.map(item => {
	        return [React.createElement("dt", null, item.title), React.createElement("dd", null, item.content)];
	    })));
	};
	exports.default = List;

/***/ }),

/***/ "./src/img/doctor-illustration.png":
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/doctor-illustration.e224f13c.png";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/ingvildindrebo/static-pages/confrere/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/index.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const list_1 = __webpack_require__("./src/components/lists/list.tsx");
	const contact_thumbnail_1 = __webpack_require__("./src/components/contact-thumbnail/contact-thumbnail.tsx");
	const side_title_1 = __webpack_require__("./src/typography/side-title.tsx");
	const doctor = __webpack_require__("./src/img/doctor-illustration.png"); // Tell Webpack this JS file uses this image
	class default_1 extends React.Component {
	  render() {
	    const main = this.props.data.site.siteMetadata.pages.main;
	    const lists = main.lists;
	    const thumnails = this.props.data.site.siteMetadata.pages.about.teams.teammembers;
	    return React.createElement("div", { className: "main-page" }, React.createElement("section", null, React.createElement(side_title_1.default, null, main.title), React.createElement("img", { src: doctor, alt: "illustration of the product", className: "block-l" })), lists.map(list => {
	      return React.createElement(list_1.default, { title: list.title, listitems: list.listitems, key: list.title });
	    }), React.createElement("section", { className: "thumbnails" }, React.createElement(side_title_1.default, null, main.getInTouch, " "), React.createElement("div", null, thumnails.map(thumbnail => {
	      return React.createElement(contact_thumbnail_1.default, Object.assign({ key: thumbnail.img }, thumbnail));
	    }))));
	  }
	}
	exports.default = default_1;
	/* tslint:disable */
	exports.indexQuery = "** extracted graphql fragment **";

/***/ }),

/***/ "./src/typography/side-title.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const SideTitle = ({ children }) => {
	    return React.createElement("h1", { className: "side-title" }, children);
	};
	exports.default = SideTitle;

/***/ })

});
//# sourceMappingURL=component---src-pages-index-tsx-a06068658ae27a9320c4.js.map