import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Search from './SearchWidget/Search';
import Demo from './Portfolio/Portfolio';
import Portfolio from './Portfolio/Portfolio';
import {Grid, Col, Row} from 'react-bootstrap';
// import Avatar from './Profile';

const Dashboard = () => <h2>Dashboard</h2>;
const NewTrade = () => <h2>Trade</h2>;


class App extends Component {
  componentDidMount () {
    this.props.fetchUser ();
  }
  render () {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/portfolio/trade" component={NewTrade} />
            <Route path="/search" component={Search} />
            <Grid>
      <Row className="show-grid">
        <Col xs={6} md={4}>
        <Route path="/Demo" component={Demo} />
        
        </Col>
        <Col xs={6} md={4}>
        <Route path="/Demo" component={Search}/>
        </Col>
      </Row>
    </Grid>
            
            
            {/* <Route path="/profile" component={Avatar} /> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect (null, actions) (App);
// const App = () => {
//   return (
//     <div classname="container">
//       <div>
//         <BrowserRouter>
//           <div>
//             <Header />
//             <Route exact path="/" component={Landing} />
//             <Route exact path="/portfolio" component={Dashboard} />
//             <Route path="/portfolio/trade" component={NewTrade} />
//             <Route path="/search" component={Search} />
//           </div>
//         </BrowserRouter>
//       </div>
//     </div>
//   );
// };
