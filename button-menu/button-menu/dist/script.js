const { Component } = React;
const { render } = ReactDOM;
const { Motion, StaggeredMotion, spring } = ReactMotion;
const { noop } = _;

/**
 * <App />
 */
class App extends Component {
  constructor() {
    super();

    this.state = {
      active: false };


    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.setState({
      active: !this.state.active });

  }

  render() {
    const iconArrayOne = [1, 2, 3];
    const iconArrayTwo = [1, 2, 3].reverse();
    const tooltipArrayOne = ['One', 'Two', 'Three'];
    const tooltipArrayTwo = ['One', 'Two', 'Three'].reverse();

    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement(ButtonGroup, null, /*#__PURE__*/
      React.createElement(StaggeredMotion, {
        defaultStyles: [
        { x: -45, o: 0 },
        { x: -45, o: 0 },
        { x: -45, o: 0 }],

        styles: prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
          return i === prevInterpolatedStyles.length - 1 ?
          {
            x: spring(this.state.active ? 0 : -45, { stiffness: 330, damping: 20 }),
            o: spring(this.state.active ? 1 : 0, { stiffness: 330, damping: 20 }) } :
          {
            x: spring(prevInterpolatedStyles[i + 1].x, { stiffness: 330, damping: 20 }),
            o: spring(prevInterpolatedStyles[i + 1].o, { stiffness: 330, damping: 20 }) };

        }) },

      (interpolatingStyles) => /*#__PURE__*/
      React.createElement(ButtonGroup, null,
      interpolatingStyles.map((style, i) => /*#__PURE__*/
      React.createElement(Button, {
        key: i,
        style: {
          position: 'relative',
          right: style.x,
          opacity: style.o,
          pointerEvents: this.state.active ? 'auto' : 'none' } }, /*#__PURE__*/


      React.createElement(Tooltip, { text: tooltipArrayOne[i] }),
      iconArrayOne[i])))), /*#__PURE__*/






      React.createElement(Motion, {
        defaultStyle: { s: 0.675 },
        style: { s: spring(this.state.active ? 1 : 0.675, { stiffness: 330, damping: 14 }) } },

      (interpolatingStyles) => /*#__PURE__*/
      React.createElement(Button, {
        className: "button--large",
        onClick: this._onClick,
        style: {
          transform: 'scale(' + interpolatingStyles.s + ')' } }, /*#__PURE__*/


      React.createElement("span", { className: this.state.active ? 'icon active' : 'icon' }))), /*#__PURE__*/




      React.createElement(StaggeredMotion, {
        defaultStyles: [
        { x: -45, o: 0 },
        { x: -45, o: 0 },
        { x: -45, o: 0 }],

        styles: prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
          return i === 0 ?
          {
            x: spring(this.state.active ? 0 : -45, { stiffness: 330, damping: 20 }),
            o: spring(this.state.active ? 1 : 0, { stiffness: 330, damping: 20 }) } :
          {
            x: spring(prevInterpolatedStyles[i - 1].x, { stiffness: 330, damping: 20 }),
            o: spring(prevInterpolatedStyles[i - 1].o, { stiffness: 330, damping: 20 }) };

        }) },

      (interpolatingStyles) => /*#__PURE__*/
      React.createElement(ButtonGroup, null,
      interpolatingStyles.map((style, i) => /*#__PURE__*/
      React.createElement(Button, {
        key: i,
        style: {
          position: 'relative',
          left: style.x,
          opacity: style.o,
          pointerEvents: this.state.active ? 'auto' : 'none' } }, /*#__PURE__*/


      React.createElement(Tooltip, { text: tooltipArrayTwo[i] }),
      iconArrayTwo[i])))))));








  }}


/**
 * <Tooltip />
 */
const Tooltip = props => /*#__PURE__*/React.createElement("span", { className: "tooltip" }, props.text);

/**
 * <ButtonGroup />
 */
const ButtonGroup = props => /*#__PURE__*/React.createElement("div", { className: "button-group", style: props.style }, props.children);

/**
 * <Button />
 */
const Button = props => /*#__PURE__*/React.createElement("button", { className: classNames('button', props.className), style: props.style, onClick: props.onClick || noop }, props.children);

/**
 * Target #root and render <App />
 */
render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));