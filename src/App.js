import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homePage.component';
import ShopPage from './pages/shop/shop.component';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/shop" component={ShopPage}></Route>
            </Switch>
        </div>
    )
}

// const HomePage = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <Link to="/topics">Topics</Link>
//             <h1>Home Page</h1>
//         </div>
//     );
// };

// const TopicList = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>Topic List</h1>
//             <Link to={`${props.match.url}/13`}>To Topic 13</Link>
//             <Link to={`${props.match.url}/17`}>To Topic 17</Link>
//             <Link to={`${props.match.url}/21`}>To Topic 21</Link>
//         </div>
//     );
// };

// const TopicDetail = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h1>Topic Details: {props.match.params.topicId}</h1>
//         </div>
//     );
// };

// function App() {
//     return (
//         <div>
//             <BrowserRouter>
//                 <Route extact path='/' component={HomePage} />
//                 <Route extact path="/topics" component={TopicList} />
//                 <Route path="/topics/:topicId" component={TopicDetail} />
//             </BrowserRouter>
//         </div>
//     )
// }

export default App;