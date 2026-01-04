import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
  state = {
    name: "Pham Dinh Nam",
    arrJobs: [
      { id: "abcJob1", title: "developer", salary: "500 " },
      { id: "abcJob2", title: "tester", salary: "300 " },
      { id: "abcJob3", title: "Pm", salary: "700 " },
    ],
  };

  addNewJob = (job) => {
    console.log("check job", job);
    // let currenJobs = this.state.arrJobs;
    // currenJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: currenJobs,
    });
  };

  deleteAJob = (job) => {
    let currenJobs = this.state.arrJobs;
    currenJobs = currenJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currenJobs,
    });
  };

  /*
  JSX => return block
  fragment <></>
  */
  handleClickButton = () => {
    alert("click me!");
  };
  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
    console.log("render: ", this.state);
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
        <div class="second">
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChangeName(event)}
          />
          My name is: {this.state["name"]}
        </div>
        <div class="third">
          <button onClick={() => this.handleClickButton()}>Click me</button>
        </div>
      </>
    );
  }
}

export default MyComponent;
