import React from 'react';
import { useCurrent } from '../../hooks.js';
import { NameplateOneline } from './nameplate-oneline.js';

export const CommentatorOneline = () => {
  const [_, __, commentators] = useCurrent();

  return <div>
    { commentators.map(commentator => (
      <NameplateOneline key={commentator.id} participant={commentator} isCommentator />
    ))}
  </div>;
};
