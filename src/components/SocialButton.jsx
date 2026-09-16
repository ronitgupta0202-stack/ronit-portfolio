import React from 'react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function SocialButton({ type, url, className = "", children }) {
  const targetUrl = type === 'github' 
    ? 'https://github.com/ronitgupta0202-stack' 
    : 'https://www.linkedin.com/in/ronit-gupta-121859333/';

  const label = type === 'github' ? 'GitHub' : 'LinkedIn';

  return (
    <a
      href={url || targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={`${label} Profile`}
    >
      {children ? children : (
        <>
          {type === 'github' ? <GithubIcon className="w-4 h-4 text-cyan-400" /> : <LinkedinIcon className="w-4 h-4 text-blue-400" />}
          <span>{label}</span>
        </>
      )}
    </a>
  );
}
