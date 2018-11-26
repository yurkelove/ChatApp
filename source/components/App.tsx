import * as React from 'react';
import ChatList from './listChats';
import SingleChat from './singleChat';
import Registration from './registration';
import { Route, BrowserRouter } from 'react-router-dom';


class App extends React.Component{

    render (){

        return(

                <BrowserRouter>
                    <div>
                        <Route path="/registration" component={Registration} />
                        <Route exact path="/singleChat" component={SingleChat}/>
                        <Route exact path="/listChats" component={ChatList}/>
                    </div>
                </BrowserRouter>

        );
    }
}


export default App
