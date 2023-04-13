function PubSub() {
  this.subscribers = {};
}
PubSub.prototype.subcribe = function (eventName, fn) {
  if (!this.subscribers[eventName]) this.subscribers[eventName] = [];
  this.subscribers[eventName].push(fn);
};
PubSub.prototype.executeSubcriber = function (payload, index, subscriberList) {
  const len = subscriberList && subscriberList.length;
  let nextSubscriber = subscriberList && subscriberList[index + 1];

  if (index <= len && subscriberList[index]) {
    subscriberList[index](payload, () => {
      // console.log("this is for next", index, nextSubscriber);
      nextSubscriber &&
        this.executeSubcriber(payload, index + 1, subscriberList);
    });
  }
};
PubSub.prototype.publish = function (eventName, payload) {
  const subscriberList = this.subscribers[eventName];
  if (subscriberList) {
    this.executeSubcriber(payload, 0, subscriberList);
  }
};

export default PubSub;
