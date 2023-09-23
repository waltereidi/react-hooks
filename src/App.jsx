import React, { Component, Fragment } from 'react'; 
export default ({ items , objetos }) => (
<Fragment>
  <ul>
    {items.map(i => (
      <li key={i}>{i}</li>
    ))}

  </ul>
  <ul>
      {objetos.map(o => (
        <li key={o.id}>{o.item}</li>

      ))}
  </ul>
</Fragment>
)