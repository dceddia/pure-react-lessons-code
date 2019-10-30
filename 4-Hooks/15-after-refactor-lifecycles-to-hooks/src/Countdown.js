import React, {
  useState,
  useEffect,
  useRef
} from 'react';

function Countdown({ startTime }) {
  const [seconds, setSeconds] = useState(startTime);
  const timer = useRef();

  useEffect(() => {
    if (seconds === 0) {
      console.log('clear');
      clearInterval(timer.current);
    }
  }, [seconds]);

  useEffect(() => {
    setSeconds(startTime);
    if (startTime > 0) {
      timer.current = setInterval(() => {
        setSeconds(prev => {
          if (prev > 0) {
            return prev - 1;
          } else {
            return prev;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer.current);
  }, [startTime]);

  return <div>{seconds}</div>;
}

// class Countdown extends React.Component {
//   timer = null;

//   state = {
//     seconds: 0
//   };

//   componentDidMount() {
//     this.setupCountdown(this.props.startTime);
//   }

//   setupCountdown(startTime) {
//     this.setState({ seconds: startTime });
//     if (startTime > 0) {
//       this.timer = setInterval(() => {
//         if (this.state.seconds > 0) {
//           this.setState(state => ({
//             seconds: state.seconds - 1
//           }));
//         } else {
//           clearInterval(this.timer);
//         }
//       }, 1000);
//     }
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.startTime !== prevProps.startTime) {
//       clearInterval(this.timer);
//       this.setupCountdown(this.props.startTime);
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return <div>{this.state.seconds}</div>;
//   }
// }

export default Countdown;
