import * as React from 'react';
import ChatList from './ChatsList';
import ChatSingle from './ChatSingle';
import Registration from './Registration';
import { Route, Redirect, BrowserRouter } from 'react-router-dom';


class App extends React.Component{




    render (){

        return(

                <BrowserRouter>
                    <div>
                        <Route path="/Registration" component={Registration} />
                        <Route exact path="/ChatSingle" component={ChatSingle}/>
                        <Route exact path="/ChatList" component={ChatList}/>
                        <Route exact path="/" render={() => (<Redirect to="/Registration" />)} />
                    </div>
                </BrowserRouter>

        );

    }

}


export default App
