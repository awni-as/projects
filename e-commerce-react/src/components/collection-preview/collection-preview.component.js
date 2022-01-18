import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.styles.scss";

function CollectionPreview(props) {
  return (
    <div className="collection-preview">
      <h1 className="title">{props.title}</h1>
      <div className="preview">
        {props.items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
