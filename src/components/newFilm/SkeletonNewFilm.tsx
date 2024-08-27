import React from "react";
import ContentLoader from "react-content-loader";

interface SkeletonNewFilmProps {
  speed?: number;
  width?: number;
  height?: number;
  viewBox?: string;
  backgroundColor?: string;
  foregroundColor?: string;
}

const SkeletonNewFilm: React.FC<SkeletonNewFilmProps> = (props) => (
  <ContentLoader
    speed={1}
    width={240}
    height={300}
    viewBox="0 0 240 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="240" height="300" />
  </ContentLoader>
);

export default SkeletonNewFilm;
