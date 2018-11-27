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
                        <Route path="/registration" component={Registration} />
                        <Route exact path="/dialogs/:id" component={ChatSingle}/>
                        <Route exact path="/dialogs" component={ChatList}/>
                        <Route exact path="/" render={() => (<Redirect to="/registration" />)} />
                    </div>
                </BrowserRouter>
        );
    }
}


export default App
