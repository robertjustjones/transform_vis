class VisController {

  constructor(el, vis) {
    this.vis = vis;
    this.el = el;
    this.container = document.createElement('div');
    this.container.className = 'output-vis';
    this.el.appendChild(this.container);
    this.g2 = document.createElement('script');
    this.g2.src = 'https://s3-us-west-2.amazonaws.com/misc.hop.market/g2.min.js';
    this.el.appendChild(this.g2);
  }

  render(visData, status) {
    return new Promise(resolve => {
      this.container.innerHTML = visData;
      resolve('done rendering');
    });
  }

  destroy() {
    this.el.innerHTML = '';
  }

};

export { VisController };
