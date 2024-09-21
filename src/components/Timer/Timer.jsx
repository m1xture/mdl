import { Component } from "react";
import styled from "styled-components";

const TimerElem = styled.p`
  color: #eee;
  font-size: 18px;
`;
const endDate = new Date("October 13, 2024 00:00:00").getTime();
class Timer extends Component {
  state = {
    timeStr: "01:23:45  ",
  };
  updateTime = () => {
    setInterval(() => {
      const date = new Date(endDate - new Date().getTime());
      const days = Math.floor(date / (1000 * 3600 * 24));
      const hours = Math.floor((date % (1000 * 3600 * 24)) / (1000 * 3600));
      const minutes = Math.floor((date % (1000 * 3600)) / (1000 * 60));
      const seconds = Math.floor((date % (1000 * 60)) / 1000);
      this.setState({
        timeStr: `${days < 10 ? "0" + String(days) : days}:${
          hours < 10 ? "0" + hours : hours
        }:${minutes < 10 ? "0" + minutes : minutes}:${
          seconds < 10 ? "0" + seconds : seconds
        }`,
      });
    }, 1000);
  };
  render() {
    this.updateTime();
    return <TimerElem>{this.state.timeStr}</TimerElem>;
  }
}

export default Timer;
