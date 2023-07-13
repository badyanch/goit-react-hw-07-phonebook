import { RotatingLines } from 'react-loader-spinner';

export const BtnLoader = () => (
  <RotatingLines
    strokeColor="grey"
    strokeWidth="5"
    animationDuration="0.75"
    width="16"
    visible={true}
  />
);
