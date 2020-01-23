import React, { useState } from 'react';

import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';
import './DevAssetItem.css';

const DevAssetItem = props => {
    const [showDetails, setShowDetails] = useState(false);

    const openDetailsHandler = () => setShowDetails(true);

    const closeDetailsHandler = () => setShowDetails(false);

    return (
     <React.Fragment>
         <Modal 
           show={showDetails} 
           onCanel={closeDetailsHandler} 
           header={props.title}
           contentClass="dev-item__modal-content"
           footerClass="place-item__modal-actions"
           footer={<Button onClick={closeDetailsHandler}>CLOSE</Button>}
           >
          <div className="details-container">
              <h2 className="dev-item__info h2">{props.description}</h2>
          </div>  
        </Modal>
      <li className="dev-item">
          <Card className="dev-item__content">
          <div className="dev-item__info">
              <h2>{props.title}</h2>
              <h3>{props.description}</h3>
          </div>
          <div className="dev-item__actions">
              <Button inverse onClick={openDetailsHandler}>VIEW DETAILS</Button>
              <Button to={`/assets/${props.id}`}>EDIT</  Button>
              <Button danger>ARCHIVE</Button>
          </div>
          </Card>
      </li>
      </React.Fragment>
    );
};

export default DevAssetItem;