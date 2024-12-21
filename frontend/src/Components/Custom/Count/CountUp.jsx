import CountUp from "react-countup";
import { FaPlus } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./count.css";

export const CountUpComponent = () => {
  // Create individual useInView hooks for each counter
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 1.0,
    triggerOnce: true,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 1.0,
    triggerOnce: true,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 1.0,
    triggerOnce: true,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 1.0,
    triggerOnce: true,
  });

  return (
    <div className="countUp">
      <div ref={ref1}>
        {inView1 && (
          <div className="countDiv">
            <CountUp end={850} duration={2} delay={0.5} />
            <FaPlus size={20} />
          </div>
        )}
        <p>ELEGANT APARTMENTS</p>
      </div>
      <div ref={ref2}>
        {inView2 && (
          <div className="countDiv">
            <CountUp end={950} duration={2} delay={0.5} />
            <FaPlus size={20} />
          </div>
        )}
        <p>LUXURY HOUSES</p>
      </div>
      <div ref={ref3}>
        {inView3 && (
          <div className="countDiv">
            <CountUp end={18000} duration={2} delay={0.5} />
            <FaPlus size={20} />
          </div>
        )}
        <p>SATISFIED GUESTS</p>
      </div>
      <div ref={ref4}>
        {inView4 && (
          <div className="countDiv">
            <CountUp end={2000} duration={2} delay={0.5} />
            <FaPlus size={20} />
          </div>
        )}
        <p>HAPPY OWNERS</p>
      </div>
    </div>
  );
};
