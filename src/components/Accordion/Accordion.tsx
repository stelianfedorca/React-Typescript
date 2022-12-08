import React, { useState } from 'react';
import { Panel } from '../Panel';

export function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Bla bla bla</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's lar
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from
      </Panel>
    </>
  );
}
