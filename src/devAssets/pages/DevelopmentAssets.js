import React from 'react';

import DevAssetsList from '../components/DevAssetsList';

const TEMP_ASSETS = [
  {
    id:'assetAlpha',
    title: 'El Lead 4K',
    description: 'Learn the 4K way!',
    creatorId: 'ht88',
  },
  {
    id:'assetZulu',
    title: 'Dev React',
    description: 'Learn React',
    creatorId: 'ht90',
  }
];

const DevelopmentAssets = () => {
  return <DevAssetsList items={
    TEMP_ASSETS} />
};

export default DevelopmentAssets;