import "./index.css";
import { MyComposition } from "./Composition";
import { MiVideoComposition } from "./MiVideo";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <MyComposition />
      <MiVideoComposition />
    </>
  );
};
