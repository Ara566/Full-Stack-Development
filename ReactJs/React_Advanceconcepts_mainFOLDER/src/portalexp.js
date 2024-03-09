/*
In React, a portal is a way to render children into a DOM node that exists outside the hierarchy
of the parent component. This means that the children can be rendered at a different place
in the DOM tree, such as at the top level of the document or inside a different container.

Portals are useful for situations where you need to render content outside the normal DOM hierarchy
, such as for modals, tooltips, or popovers. They allow you to maintain the logical hierarchy
 of your React components while rendering content in a different part of the DOM.


 

import React from 'react';
import ReactDOM from 'react-dom';

// Create a portal element
const portalRoot = document.getElementById('portal-root');
const portalElement = document.createElement('div');
portalRoot.appendChild(portalElement);

// Child component using portal
const Modal = ({ children }) =>
  ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>,
    portalElement
  );

// Parent component
const App = () => (
  <div>
    <h1>My App</h1>
    <p>Content of the parent component.</p>
    <Modal>
      <p>Content of the modal.</p>
    </Modal>
  </div>
);

// Render the parent component
ReactDOM.render(<App />, document.getElementById('root'));


*/