webpackJsonp([147894599050189],{

/***/ "./src/components/paragraphs/paragraphs.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const content_title_1 = __webpack_require__("./src/typography/content-title.tsx");
	const Paragraph = paragraph => {
	    return React.createElement("div", { className: "paragraph block" }, React.createElement(content_title_1.default, null, paragraph.title), paragraph.texts.map((text, index) => React.createElement("p", { key: "paragraph-" + index }, text)), paragraph.img ? React.createElement("img", { src: ("/static-pages") + "/img/" + paragraph.img, alt: paragraph.img }) : null);
	};
	exports.default = Paragraph;

/***/ }),

/***/ "./src/components/team/team.scss":
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),

/***/ "./src/components/team/team.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const teamMember_1 = __webpack_require__("./src/components/team/teamMember.tsx");
	const side_title_1 = __webpack_require__("./src/typography/side-title.tsx");
	const Team = teams => {
	    return React.createElement("div", null, React.createElement(side_title_1.default, null, teams.title), teams.teammembers.map((team, index) => {
	        return React.createElement(teamMember_1.default, { member: team, twitter: teams.twitter, linkedin: teams.linkedin, key: "teammember" + index });
	    }));
	};
	exports.default = Team;

/***/ }),

/***/ "./src/components/team/teamMember.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const content_title_1 = __webpack_require__("./src/typography/content-title.tsx");
	__webpack_require__("./src/components/team/team.scss");
	const TeamMember = ({ member, twitter, linkedin }) => {
	    return React.createElement("div", { className: "teammember" }, React.createElement("div", { className: "teammember-details" }, React.createElement("div", null, React.createElement(content_title_1.default, null, member.name), React.createElement("p", null, member.title)), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", { href: "tel:" + member.phone }, member.phone)), React.createElement("li", null, React.createElement("a", { href: "mailto:" + member.email }, member.email)), React.createElement("li", null, React.createElement("a", { href: member.twitter }, twitter)), React.createElement("li", null, React.createElement("a", { href: member.linkedin }, linkedin)))), React.createElement("div", null, member.text));
	};
	exports.default = TeamMember;

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/ingvildindrebo/static-pages/confrere/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/pages/about.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const side_title_1 = __webpack_require__("./src/typography/side-title.tsx");
	const team_1 = __webpack_require__("./src/components/team/team.tsx");
	const paragraphs_1 = __webpack_require__("./src/components/paragraphs/paragraphs.tsx");
	__webpack_require__("./src/pages/page.scss");
	class default_1 extends React.Component {
	  render() {
	    const about = this.props.data.site.siteMetadata.pages.about;
	    return React.createElement("div", { className: "page" }, React.createElement("article", null, React.createElement(side_title_1.default, null, about.title, " "), about.paragraphs.map((paragraph, index) => {
	      return React.createElement(paragraphs_1.default, Object.assign({}, paragraph, { key: "paragraph-" + index }));
	    })), React.createElement("article", null, React.createElement(team_1.default, Object.assign({}, about.teams))));
	  }
	}
	exports.default = default_1;
	/* tslint:disable */
	exports.aboutQuery = "** extracted graphql fragment **";

/***/ }),

/***/ "./src/pages/page.scss":
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),

/***/ "./src/typography/content-title.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const ContentTitle = ({ children }) => {
	    return React.createElement("h2", { className: "content-title" }, children);
	};
	exports.default = ContentTitle;

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
//# sourceMappingURL=component---src-pages-about-tsx-57eadc94a3f929fa7f74.js.map