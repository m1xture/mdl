import { Component } from "react";
import OpenBtn from "../OpenBtn/OpenBtn";
import Modal from "../Modal/Modal";

class Wrapper extends Component {
  state = {
    hidden: true,
  };
  openModal = () => this.setState({ hidden: false });
  closeModal = () => this.setState({ hidden: true });
  render() {
    return (
      <>
        <OpenBtn openModal={this.openModal} />{" "}
        {!this.state.hidden && <Modal closeModal={this.closeModal} />}
      </>
    );
  }
}
export default Wrapper;
