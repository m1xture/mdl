import { Component } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* backdrop-filter: blur(2px); */
  background-color: rgb(0, 0, 0, 0.5);
`;
const ModalBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  background-color: #040404;

  border-radius: 15px;
`;

const ModalTitle = styled.h2`
  font-size: 32px;
  color: #dedede;
`;
const Form = styled.form`
  padding: 5px;
  display: flex;
  /* justify-content: center; */
`;
const Input = styled.input`
  background-color: transparent;
  border: none;
  border: 1.5px solid gray;
  padding: 5px;
  border-radius: 5px;
  margin-right: auto;
  width: 100%;
  border-right: none;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  color: #eee;
  &:focus,
  &:active {
    outline: none;
    /* border: none; */
  }
`;
const SubmitBtn = styled.button`
  margin-left: auto;
  border-radius: 2px;
  border: none;
  /* outline: 1px solid gray; */
  background-color: #76b900;
  color: #181818;
  padding: 10px;
`;
const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: #777777;
`;
class Modal extends Component {
  state = {
    value: "",
  };
  submit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    // this.state.cb();
    document.querySelector("[data-close]").click();
  };
  keypress = (e) => {
    // console.log(e.key);
    if (e.key === "Escape") {
      document.querySelector("[data-close]").click();
    }
  };
  componentDidMount() {
    const form = document.querySelector("form");
    form.addEventListener("submit", this.submit);
    document.addEventListener("keydown", this.keypress);
  }
  componentDidUpdate = (nextProps, nextState) => {
    const regExp =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const res = regExp.test(nextState.value);
    if (!res && nextState.value) {
      console.log("Invalid email");
    }
  };
  componentWillUnmount = () => {
    // console.log("memem");
    document.querySelector("form").removeEventListener("submit", this.submit);
    document.removeEventListener("keydown", this.keypress);
  };
  setValue = (e) => this.setState({ value: e.target.value });

  render() {
    return (
      <>
        {!this.state.hidden && (
          <Overlay data-overlay>
            <ModalBlock>
              <CloseBtn onClick={this.props.closeModal} data-close>
                ✖
              </CloseBtn>
              <ModalTitle>Leave your email here</ModalTitle>
              <Form>
                <Input
                  onChange={this.setValue}
                  autoComplete="false"
                  name="email"
                />
                <SubmitBtn>Send</SubmitBtn>
              </Form>
            </ModalBlock>
          </Overlay>
        )}
      </>
    );
  }
}

export default Modal;
