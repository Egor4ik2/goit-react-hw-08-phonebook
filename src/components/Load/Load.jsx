import { ColorRing } from "react-loader-spinner";

const Loader = () => { 
  return (
    <ColorRing
      height="40"
      width="40"
      wrapperStyle={{margin: '0 auto'}}
    />
  );
}

export default Loader;