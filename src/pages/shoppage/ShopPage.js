import React, { Component } from 'react';
import SHOP_DATA from './shoppage_data';
import CollectionPreview from '../preview-collection/CollectionPreview'

 class ShopPage extends Component {

     constructor(props) {
         super(props);

         this.state = {
             collections : SHOP_DATA
         }

     }

    render() {
        const {collections} = this.state;

        return (
            <div className="shop-page">
                {
                 collections.map(({id, ...otherCollectioProps}) => (
                        <CollectionPreview key={id} {...otherCollectioProps} />
                    ))
                }
               
            </div>
        )
    }
}

export default ShopPage;
