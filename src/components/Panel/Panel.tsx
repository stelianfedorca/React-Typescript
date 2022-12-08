import React from 'react';

interface PanelProps {
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onShow: () => void;
}
export function Panel({ title, isActive, children, onShow }: PanelProps) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}
