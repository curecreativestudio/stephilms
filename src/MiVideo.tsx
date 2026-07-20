import { CalculateMetadataFunction, Composition } from "remotion";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

export const MiVideoComposition = () => {
  return (
    <Composition
      id="mi-video"
      component={MiVideoComponent}
      durationInFrames={60}
      fps={30}
      width={1280}
      height={720}
      calculateMetadata={calculateMetadata}
    />
  );
};

export const MiVideoComponent: React.FC<Props> = () => {
  return null;
};
