"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/domelementtype";
exports.ids = ["vendor-chunks/domelementtype"];
exports.modules = {

/***/ "(rsc)/./node_modules/domelementtype/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/domelementtype/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;\n/** Types of elements found in htmlparser2's DOM */ var ElementType;\n(function(ElementType) {\n    /** Type for the root element of a document */ ElementType[\"Root\"] = \"root\";\n    /** Type for Text */ ElementType[\"Text\"] = \"text\";\n    /** Type for <? ... ?> */ ElementType[\"Directive\"] = \"directive\";\n    /** Type for <!-- ... --> */ ElementType[\"Comment\"] = \"comment\";\n    /** Type for <script> tags */ ElementType[\"Script\"] = \"script\";\n    /** Type for <style> tags */ ElementType[\"Style\"] = \"style\";\n    /** Type for Any tag */ ElementType[\"Tag\"] = \"tag\";\n    /** Type for <![CDATA[ ... ]]> */ ElementType[\"CDATA\"] = \"cdata\";\n    /** Type for <!doctype ...> */ ElementType[\"Doctype\"] = \"doctype\";\n})(ElementType = exports.ElementType || (exports.ElementType = {}));\n/**\n * Tests whether an element is a tag or not.\n *\n * @param elem Element to test\n */ function isTag(elem) {\n    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;\n}\nexports.isTag = isTag;\n// Exports for backwards compatibility\n/** Type for the root element of a document */ exports.Root = ElementType.Root;\n/** Type for Text */ exports.Text = ElementType.Text;\n/** Type for <? ... ?> */ exports.Directive = ElementType.Directive;\n/** Type for <!-- ... --> */ exports.Comment = ElementType.Comment;\n/** Type for <script> tags */ exports.Script = ElementType.Script;\n/** Type for <style> tags */ exports.Style = ElementType.Style;\n/** Type for Any tag */ exports.Tag = ElementType.Tag;\n/** Type for <![CDATA[ ... ]]> */ exports.CDATA = ElementType.CDATA;\n/** Type for <!doctype ...> */ exports.Doctype = ElementType.Doctype;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZG9tZWxlbWVudHR5cGUvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2JBLDhDQUE2QztJQUFFRyxPQUFPO0FBQUssQ0FBQyxFQUFDO0FBQzdERCxlQUFlLEdBQUdBLGFBQWEsR0FBR0EsV0FBVyxHQUFHQSxhQUFhLEdBQUdBLGNBQWMsR0FBR0EsZUFBZSxHQUFHQSxpQkFBaUIsR0FBR0EsWUFBWSxHQUFHQSxZQUFZLEdBQUdBLGFBQWEsR0FBR0EsbUJBQW1CLEdBQUcsS0FBSztBQUNoTSxpREFBaUQsR0FDakQsSUFBSVk7QUFDSCxVQUFVQSxXQUFXO0lBQ2xCLDRDQUE0QyxHQUM1Q0EsV0FBVyxDQUFDLE9BQU8sR0FBRztJQUN0QixrQkFBa0IsR0FDbEJBLFdBQVcsQ0FBQyxPQUFPLEdBQUc7SUFDdEIsdUJBQXVCLEdBQ3ZCQSxXQUFXLENBQUMsWUFBWSxHQUFHO0lBQzNCLDBCQUEwQixHQUMxQkEsV0FBVyxDQUFDLFVBQVUsR0FBRztJQUN6QiwyQkFBMkIsR0FDM0JBLFdBQVcsQ0FBQyxTQUFTLEdBQUc7SUFDeEIsMEJBQTBCLEdBQzFCQSxXQUFXLENBQUMsUUFBUSxHQUFHO0lBQ3ZCLHFCQUFxQixHQUNyQkEsV0FBVyxDQUFDLE1BQU0sR0FBRztJQUNyQiwrQkFBK0IsR0FDL0JBLFdBQVcsQ0FBQyxRQUFRLEdBQUc7SUFDdkIsNEJBQTRCLEdBQzVCQSxXQUFXLENBQUMsVUFBVSxHQUFHO0FBQzdCLEdBQUdBLGNBQWNaLFFBQVFZLFdBQVcsSUFBS1osQ0FBQUEsbUJBQW1CLEdBQUcsQ0FBQztBQUNoRTs7OztDQUlDLEdBQ0QsU0FBU1csTUFBTUUsSUFBSTtJQUNmLE9BQVFBLEtBQUtDLElBQUksS0FBS0YsWUFBWVIsR0FBRyxJQUNqQ1MsS0FBS0MsSUFBSSxLQUFLRixZQUFZTixNQUFNLElBQ2hDTyxLQUFLQyxJQUFJLEtBQUtGLFlBQVlQLEtBQUs7QUFDdkM7QUFDQUwsYUFBYSxHQUFHVztBQUNoQixzQ0FBc0M7QUFDdEMsNENBQTRDLEdBQzVDWCxZQUFZLEdBQUdZLFlBQVlGLElBQUk7QUFDL0Isa0JBQWtCLEdBQ2xCVixZQUFZLEdBQUdZLFlBQVlILElBQUk7QUFDL0IsdUJBQXVCLEdBQ3ZCVCxpQkFBaUIsR0FBR1ksWUFBWUosU0FBUztBQUN6QywwQkFBMEIsR0FDMUJSLGVBQWUsR0FBR1ksWUFBWUwsT0FBTztBQUNyQywyQkFBMkIsR0FDM0JQLGNBQWMsR0FBR1ksWUFBWU4sTUFBTTtBQUNuQywwQkFBMEIsR0FDMUJOLGFBQWEsR0FBR1ksWUFBWVAsS0FBSztBQUNqQyxxQkFBcUIsR0FDckJMLFdBQVcsR0FBR1ksWUFBWVIsR0FBRztBQUM3QiwrQkFBK0IsR0FDL0JKLGFBQWEsR0FBR1ksWUFBWVQsS0FBSztBQUNqQyw0QkFBNEIsR0FDNUJILGVBQWUsR0FBR1ksWUFBWVYsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2Ntcy1ibG9nLy4vbm9kZV9tb2R1bGVzL2RvbWVsZW1lbnR0eXBlL2xpYi9pbmRleC5qcz9jYmM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Eb2N0eXBlID0gZXhwb3J0cy5DREFUQSA9IGV4cG9ydHMuVGFnID0gZXhwb3J0cy5TdHlsZSA9IGV4cG9ydHMuU2NyaXB0ID0gZXhwb3J0cy5Db21tZW50ID0gZXhwb3J0cy5EaXJlY3RpdmUgPSBleHBvcnRzLlRleHQgPSBleHBvcnRzLlJvb3QgPSBleHBvcnRzLmlzVGFnID0gZXhwb3J0cy5FbGVtZW50VHlwZSA9IHZvaWQgMDtcbi8qKiBUeXBlcyBvZiBlbGVtZW50cyBmb3VuZCBpbiBodG1scGFyc2VyMidzIERPTSAqL1xudmFyIEVsZW1lbnRUeXBlO1xuKGZ1bmN0aW9uIChFbGVtZW50VHlwZSkge1xuICAgIC8qKiBUeXBlIGZvciB0aGUgcm9vdCBlbGVtZW50IG9mIGEgZG9jdW1lbnQgKi9cbiAgICBFbGVtZW50VHlwZVtcIlJvb3RcIl0gPSBcInJvb3RcIjtcbiAgICAvKiogVHlwZSBmb3IgVGV4dCAqL1xuICAgIEVsZW1lbnRUeXBlW1wiVGV4dFwiXSA9IFwidGV4dFwiO1xuICAgIC8qKiBUeXBlIGZvciA8PyAuLi4gPz4gKi9cbiAgICBFbGVtZW50VHlwZVtcIkRpcmVjdGl2ZVwiXSA9IFwiZGlyZWN0aXZlXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhLS0gLi4uIC0tPiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiQ29tbWVudFwiXSA9IFwiY29tbWVudFwiO1xuICAgIC8qKiBUeXBlIGZvciA8c2NyaXB0PiB0YWdzICovXG4gICAgRWxlbWVudFR5cGVbXCJTY3JpcHRcIl0gPSBcInNjcmlwdFwiO1xuICAgIC8qKiBUeXBlIGZvciA8c3R5bGU+IHRhZ3MgKi9cbiAgICBFbGVtZW50VHlwZVtcIlN0eWxlXCJdID0gXCJzdHlsZVwiO1xuICAgIC8qKiBUeXBlIGZvciBBbnkgdGFnICovXG4gICAgRWxlbWVudFR5cGVbXCJUYWdcIl0gPSBcInRhZ1wiO1xuICAgIC8qKiBUeXBlIGZvciA8IVtDREFUQVsgLi4uIF1dPiAqL1xuICAgIEVsZW1lbnRUeXBlW1wiQ0RBVEFcIl0gPSBcImNkYXRhXCI7XG4gICAgLyoqIFR5cGUgZm9yIDwhZG9jdHlwZSAuLi4+ICovXG4gICAgRWxlbWVudFR5cGVbXCJEb2N0eXBlXCJdID0gXCJkb2N0eXBlXCI7XG59KShFbGVtZW50VHlwZSA9IGV4cG9ydHMuRWxlbWVudFR5cGUgfHwgKGV4cG9ydHMuRWxlbWVudFR5cGUgPSB7fSkpO1xuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIGFuIGVsZW1lbnQgaXMgYSB0YWcgb3Igbm90LlxuICpcbiAqIEBwYXJhbSBlbGVtIEVsZW1lbnQgdG8gdGVzdFxuICovXG5mdW5jdGlvbiBpc1RhZyhlbGVtKSB7XG4gICAgcmV0dXJuIChlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlRhZyB8fFxuICAgICAgICBlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlNjcmlwdCB8fFxuICAgICAgICBlbGVtLnR5cGUgPT09IEVsZW1lbnRUeXBlLlN0eWxlKTtcbn1cbmV4cG9ydHMuaXNUYWcgPSBpc1RhZztcbi8vIEV4cG9ydHMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4vKiogVHlwZSBmb3IgdGhlIHJvb3QgZWxlbWVudCBvZiBhIGRvY3VtZW50ICovXG5leHBvcnRzLlJvb3QgPSBFbGVtZW50VHlwZS5Sb290O1xuLyoqIFR5cGUgZm9yIFRleHQgKi9cbmV4cG9ydHMuVGV4dCA9IEVsZW1lbnRUeXBlLlRleHQ7XG4vKiogVHlwZSBmb3IgPD8gLi4uID8+ICovXG5leHBvcnRzLkRpcmVjdGl2ZSA9IEVsZW1lbnRUeXBlLkRpcmVjdGl2ZTtcbi8qKiBUeXBlIGZvciA8IS0tIC4uLiAtLT4gKi9cbmV4cG9ydHMuQ29tbWVudCA9IEVsZW1lbnRUeXBlLkNvbW1lbnQ7XG4vKiogVHlwZSBmb3IgPHNjcmlwdD4gdGFncyAqL1xuZXhwb3J0cy5TY3JpcHQgPSBFbGVtZW50VHlwZS5TY3JpcHQ7XG4vKiogVHlwZSBmb3IgPHN0eWxlPiB0YWdzICovXG5leHBvcnRzLlN0eWxlID0gRWxlbWVudFR5cGUuU3R5bGU7XG4vKiogVHlwZSBmb3IgQW55IHRhZyAqL1xuZXhwb3J0cy5UYWcgPSBFbGVtZW50VHlwZS5UYWc7XG4vKiogVHlwZSBmb3IgPCFbQ0RBVEFbIC4uLiBdXT4gKi9cbmV4cG9ydHMuQ0RBVEEgPSBFbGVtZW50VHlwZS5DREFUQTtcbi8qKiBUeXBlIGZvciA8IWRvY3R5cGUgLi4uPiAqL1xuZXhwb3J0cy5Eb2N0eXBlID0gRWxlbWVudFR5cGUuRG9jdHlwZTtcbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkRvY3R5cGUiLCJDREFUQSIsIlRhZyIsIlN0eWxlIiwiU2NyaXB0IiwiQ29tbWVudCIsIkRpcmVjdGl2ZSIsIlRleHQiLCJSb290IiwiaXNUYWciLCJFbGVtZW50VHlwZSIsImVsZW0iLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/domelementtype/lib/index.js\n");

/***/ })

};
;