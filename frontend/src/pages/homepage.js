import React from 'react';

import MenuTop from '../components/menu';
import AboutScreen from '../components/about'
import ProductScreen from '../components/product'
import {BrowserRouter,Route} from 'react-router-dom'
import DetailsScreen from '../components/detailsproduct';
import CartScreen from '../components/cart';
import SigninScreen from '../components/signin';
import RegisterScreen from '../components/register';
import CreateProductScreen from '../components/createProduct';
import ProfileScreen from '../components/profile';

function HomePage() {
  return (
    <BrowserRouter>
      <div className="bg-main">
        <MenuTop />
        
        <div className="main">
          <Route exact path="/" component={AboutScreen} />
          <Route path='/products' component={ProductScreen} />
          <Route path='/product/:id' component={DetailsScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/createproduct' component={CreateProductScreen} />
          
        </div>
     </div>
    </BrowserRouter>
  );
}


export default HomePage;
