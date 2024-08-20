import React from "react";

// const ClassComponent = () => {
//     return (
//         <div>

//         </div>
//     );
// };

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    // console.log(this);
    const { count } = this.state;
    return (
      <div className="">
        <button onClick={() => this.setState({ count: count + 1 })}>
          {count}
        </button>
      </div>
    );
  }
}

export default ClassComponent;
