import { bouncy } from "ldrs";

type SpinnerProps = {
  size: string;
};

function Spinner({ size }: SpinnerProps) {
  bouncy.register();

  return <l-bouncy size={size} speed="0.8" color="#EDEDED"></l-bouncy>;
}

export default Spinner;
