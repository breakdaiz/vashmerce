import React from 'react';
import './collection-overview.styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import  { SelectCollections } from '../../redux/shop/shop.selector';

import CollectionPreview from '../../components/preview-collection/CollectionPreview';

const CollectionOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      { collections.map(({id, ...otherProps}) => (
        <CollectionPreview key={id}  {...otherProps} />
        ))
      }
    </div> 
  )
}

const mapStateToProps = createStructuredSelector({
  collections: SelectCollections

})


export default connect(mapStateToProps)(CollectionOverview);
