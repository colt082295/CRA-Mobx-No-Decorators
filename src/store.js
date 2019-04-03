class Store {
  reviewList = [
    { review: "AhHhHh", stars: 2 },
    { review: "WoHooHoo", stars: 4 }
  ];

  addReview = e => {
    this.reviewList.push(e);
  };

  testList = [{ review: "test1", stars: 2 }, { review: "test2", stars: 4 }];
}

export default Store;
