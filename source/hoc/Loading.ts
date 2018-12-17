import React from 'React';

const LoadingHoc = (Component:any) => (props:any) => {
  return class Loading extends React.Component {
    render(){
      if(props.loading) {
        return
      }else{
        return
      }
    }
  }
};

export default LoadingHoc;
