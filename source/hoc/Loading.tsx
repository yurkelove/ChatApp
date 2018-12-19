import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


interface ILoadingHocInterface {
  loading: boolean,
  onMount: () => void,
  [key:string]: any
}

function LoadingHoc(Component:any){
  return class HOC extends React.Component<ILoadingHocInterface> {
    componentDidMount(){
      const onMount = this.props.onMount;
      if(onMount){
        onMount();
      }
    }

    public render () {
      const {loading,...props} = this.props;
      if(loading){
        return <CircularProgress/>
      }else{
        return(
          <Component {...props}/>
        )
      }
    }
  };
}



export default LoadingHoc;


