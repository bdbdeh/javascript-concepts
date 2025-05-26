const heading = React.createElement("h1", {
    id: "12344",
    class: "title"
}, "Hello all wellcome to React");
// multiple div
const parentheading = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "Created structure div"),
    React.createElement("h1", {}, "Child H1 tag")
]));
const renderBothComponents = React.createElement(React.Fragment, {}, heading, parentheading); //setupRoot.render(renderBothComponents); with Fragnments
const setupRoot = ReactDOM.createRoot(document.getElementById("root"));
setupRoot.render([
    heading,
    parentheading
]);

//# sourceMappingURL=javascript-concepts.6bd02f5a.js.map
