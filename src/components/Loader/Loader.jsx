import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
  <ThreeDots
    height="30"
    width="30"
    radius="9"
    color="#5a7fb7"
    ariaLabel="three-dots-loading"
    wrapperStyle={{
      position: 'absolute',
      right: '-40px',
      top: '40%',
      transform: 'translateY(-50%)',
    }}
    wrapperClassName=""
    visible={true}
  />
);
