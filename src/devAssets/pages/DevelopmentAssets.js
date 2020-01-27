import React from 'react';

import DevAssetsList from '../components/DevAssetsList';

const TEMP_ASSETS = [
  {
    id:'assetAlpha',
    title: 'El Lead 4K',
    description: 'Learn the 4K way!',
    addedBy: 'El Sr Crasa',
  },
  {
    id:'assetZulu',
    title: 'Dev React',
    description: 'Learn React',
    addedBy: 'Mongo Martines',
  }
];

const DevelopmentAssets = () => {
  return <DevAssetsList items={
    TEMP_ASSETS} />
};

export default DevelopmentAssets;