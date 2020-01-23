import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import DevAssetItem from './DevAssetItem';
import './DevAssetsList.css'

const DevAssetsList = props => {
    if (props.items.length === 0) {
        return (
        <div className="dev-list center">
            <Card>
                <h2>No Assets Added</h2>
                <Button>Share Asset</Button>
            </Card>
        </div>
    )
  };
  

  return <ul className="dev-list">
      {props.items.map(devAsset => <DevAssetItem 
        key={devAsset.id} 
        id={devAsset.id} 
        title={devAsset.title} 
        description={devAsset.description} 
        creatorId={DevAssetsList.creatorId} 
        />)}
  </ul>;

};

export default DevAssetsList;