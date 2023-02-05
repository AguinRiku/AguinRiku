class MobileMenu {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelector(".mobile-menu__btn");
    this.DOM.cover = document.querySelector(".mobile-menu__cover");
    this.DOM.container = document.querySelector("#global-container");
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    const isTouchCapable = "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch);

    return isTouchCapable ? "touchstart" : "click";
  }

  _toggle() {
    this.DOM.container.classList.toggle("menu-open");
  }

  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
  }
}
