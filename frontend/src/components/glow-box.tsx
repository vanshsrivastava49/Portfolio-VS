import React from 'react';

type TGlowBox = {
  color: string;
  icon: React.ReactNode;
  title?: string;
  link?: string; // This must be included
};

export const GlowBox = ({ color, icon, title, link }: TGlowBox) => {
  const content = (
    <div className="glow-box-parent">
      <div className="glow-box-title">{title}</div>
      <div
        className="glow-box"
        style={{
          '--clr': color,
        } as React.CSSProperties}
      >
        {icon}
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      {content}
    </a>
  ) : (
    content
  );
};
