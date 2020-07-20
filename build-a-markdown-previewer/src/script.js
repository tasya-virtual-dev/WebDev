class MarkdownPreviewer extends React.Component {
  render() {
    return (
      <div className='markdown-previewer'>
        <h4>&#9989; Markdown previewer</h4>
        <div dangerouslySetInnerHTML={this.props.markup}></div>
      </div>
    );
  }
}

class MarkdownEditor extends React.Component {
  render() {
    return (
      <div className='markdown-editor'>
        <h4>&#9998; Markdown editor</h4>
        <textarea onChange={this.props.onChange} value={this.props.value}></textarea>
      </div>
    );
  }
}

class MarkdownContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: "# FreeCodeCamp\n## Open-source community\n### of busy adults who learn to code ###\n---\nIt's a ~~good~~ **great** `place` to *start learning*:\n* Front End development\n* Back End development\n* Data Visualization\n* See more at [www.freecodecamp.org](https://www.freecodecamp.org)\n\nThings you need to start:\n1. Aspiration\n2. ~~Cookies~~\n\nHave a nice day! &#9786;"};
    this.handleChange = this.handleChange.bind(this);
  }
  createMarkup() {
    var options = {sanitize: true};
    return {__html: marked(this.state.text, options)};
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div>
        <MarkdownEditor onChange={this.handleChange} value={this.state.text}/>
        <MarkdownPreviewer markup={this.createMarkup()} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <MarkdownContainer />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);