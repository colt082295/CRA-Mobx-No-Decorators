import React from "react";
import { inject, observer } from "mobx-react";

// const Test = props => {
//   console.log("THE PROPS:", props, props.store.prototype);
//   return null;
// };

class Test extends React.Component {
  submitReview = e => {
    e.preventDefault();
    const review = this.review.value;
    const stars = 4;
    this.props.store.addReview({ review, stars });
  };
  render() {
    console.log("STORE:", this.props.store);
    return (
      <div>
        <div>
          <form onSubmit={this.submitReview}>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="review"
                    ref={node => {
                      this.review = node;
                    }}
                    id="review"
                    placeholder="Write a review"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {this.props.store.reviewList.map((review, index) => {
          return <p key={index}>{review.review}</p>;
        })}
      </div>
    );
  }
}

export default inject("store")(observer(Test));
