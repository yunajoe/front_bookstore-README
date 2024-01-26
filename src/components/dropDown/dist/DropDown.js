"use strict";
exports.__esModule = true;
var react_1 = require("react");
var useShowDropDown_1 = require("@/hooks/useShowDropDown");
var image_1 = require("next/image");
var orderDate_1 = require("@/components/orderDate/orderDate");
var dropDownItem_1 = require("@/components/dropDown/dropDownItem");
function DropDown() {
    var _a = react_1.useState('전체보기'), seletedItem = _a[0], setSelectedItem = _a[1];
    var ref = react_1.useRef(null);
    var _b = useShowDropDown_1["default"](ref, false), showOptions = _b[0], setShowOptions = _b[1];
    var handleClick = function () { return setShowOptions(!showOptions); };
    var menus = [
        '전체보기',
        '최근 1개월',
        '최근 3개월',
        '최근 6개월',
        '최근 1년',
        '직접 입력',
    ];
    return (React.createElement("div", { className: "flex relative" },
        React.createElement("div", { ref: ref },
            React.createElement("div", { className: "flex relative w-180" },
                React.createElement("button", { onClick: handleClick, className: "flex justify-between flex-row items-center px-5 border-solid border-2\r\n              rounded-[5px] border-gray-1 w-150 h-42 text-left" },
                    seletedItem,
                    React.createElement("div", null,
                        React.createElement(image_1["default"], { src: showOptions ? 'icons/UpArrow.svg' : 'icons/DownArrow.svg', alt: "", width: 20, height: 20 })))),
            showOptions && (React.createElement("ul", { className: "w-150 border-solid border-2 border-gray-1 absolute" }, menus.map(function (menu) {
                return (React.createElement(dropDownItem_1["default"], { key: menu, menu: menu, setSeltedItem: setSelectedItem, setIsClick: setShowOptions }));
            })))),
        React.createElement("div", { className: "flex-center" },
            React.createElement(orderDate_1["default"], { pastDate: seletedItem, setSelectedItem: setSelectedItem }))));
}
exports["default"] = DropDown;
