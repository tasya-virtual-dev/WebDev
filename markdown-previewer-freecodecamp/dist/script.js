class Application extends React.Component {
  render() {
    return (
      React.createElement("div", { className: "container" },
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-xs-12" },
      React.createElement("h1", { className: "text-center" }, "Markdown Live Preview"),
      React.createElement("hr", null))),


      React.createElement(UserInput, null)));


  }}


class UserInput extends React.Component {
  constructor() {
    super();
    this.state = {
      md: '# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n#### Created by:\n[Jay Karlsven](https://jpkarlsven.com \"Jay Karlsven\'s Website\")' };

  }

  updatePreview(e) {
    this.setState({
      md: e.target.value });

  }

  render() {
    return (
      React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col-md-6" },
      React.createElement("h3", { className: "text-center" }, "Enter Markdown"),
      React.createElement("textarea", { type: "text", className: "md-input", value: this.state.md, onChange: this.updatePreview.bind(this) })),

      React.createElement("div", { className: "col-md-6" },
      React.createElement("h3", { className: "text-center" }, "Result"),
      React.createElement(MarkdownPreview, { markdown: this.state.md }))));



  }}


class MarkdownPreview extends React.Component {

  createMarkup() {
    return { __html: marked(this.props.markdown) };
  }

  render() {
    return (
      React.createElement("div", { className: "well", dangerouslySetInnerHTML: this.createMarkup() }));


  }}


React.render(React.createElement(Application, null), document.getElementById('app'));