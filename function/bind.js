const anObject = {
  x: 99,
  getX: () => {
    console.log(this.x);
  },
  //   getX: function () {
  //     console.log(this.x);
  //   },
};

anObject.getX();
const boundGetX = anObject.getX.bind(anObject);
boundGetX();
anObject.getX.call(anObject);
