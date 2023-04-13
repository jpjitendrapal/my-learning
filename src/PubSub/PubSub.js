function PubSub() {
  this.subscribers = {};
}
PubSub.prototype.subcribe = function (eventName, fn) {
  if (!this.subscribers[eventName]) this.subscribers[eventName] = [];
  this.subscribers[eventName].push(fn);
};
PubSub.prototype.publish = function (eventName, payload) {
  if (this.subscribers[eventName]) {
    this.subscribers[eventName].forEach((subscriber) => {
      subscriber(payload);
    });
  }
};

export default PubSub;
