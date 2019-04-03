import React from "react";
import { inject, observer } from "mobx-react";

class Timer extends React.Component {
  render() {
    console.log("TIMER PROPS:", this.props);
    return (
      //   <span>
      //     value from store: {this.props.myStore.storeMap.get("any_key")}{" "}
      //   </span>
      <span>TEST</span>
    );
  }
}

export default inject("myStore")(observer(Timer));
