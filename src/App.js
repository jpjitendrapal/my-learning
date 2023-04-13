import "./styles.css";
// import "./polyfills/polyfills";
// import RenderList from "./RenderList";
// import ToDo from "./ToDo/ToDo";
// import RenderList from "./RenderList";
// import testMyAll from "./Problems/Promise-all-polyfill";
// import Timer from "./Timer/Timer";
// import PubSub from "./PubSub/PubSub_v2";
// import { useEffect, useRef } from "react";
// import pipe from "./Problems/Pipe_Compose";
import "../src/Problems/problem";

export default function App() {
  // const isCalled2 = useRef(false);
  // useEffect(() => {
  //   if (isCalled2.current) return;
  //   isCalled2.current = true;
  //   let pubSub = new PubSub();
  //   pubSub.subcribe("evt1", (data, next) => {
  //     console.log("evt1_1", data);
  //     setTimeout(() => {
  //       next();
  //     }, 5000);
  //   });
  //   pubSub.subcribe("evt1", (data, next) => {
  //     console.log("evt1_2", data);
  //     setTimeout(() => {
  //       next();
  //     }, 10000);
  //   });
  //   pubSub.subcribe("evt1", (data, next) => {
  //     console.log("evt1_3", data);
  //     setTimeout(() => {
  //       next();
  //     }, 10000);
  //   });
  //   pubSub.subcribe("evt2", (data, next) => {
  //     console.log("evt2_2", data);
  //   });
  //   pubSub.publish("evt1", 100);
  //   pubSub.publish("evt2", 200);
  // }, []);

  return (
    <div className="App">
      <h1>My Learning Of React Application</h1>
      {/* <RenderList /> */}
      {/* <ToDo /> */}
      {/* <Timer forTime={5 * 60} /> */}
    </div>
  );
}
