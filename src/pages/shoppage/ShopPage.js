import React, { Component } from 'react';
import SHOP_DATA from './shoppage_data';
import CollectionPreview from '../../components/preview-collection/CollectionPreview'



class ShopPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
          collectionData: SHOP_DATA

      }
    }

    render() {
        const {collectionData} = this.state
        return (
            
            <div className="shop-page"> {
                collectionData.map(({id, ...otherProps}) => (
             
                <CollectionPreview key={id}  {...otherProps} />
                ))
            }
                
            </div>
        );
    }
}

export default ShopPage;