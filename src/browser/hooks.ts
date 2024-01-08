import { useContext, useEffect, useState } from 'react';
import {SpeedcontrolContext} from './providers/speedcontrol';
import { ScAdditionContext } from './providers/sc-additions';
import { RunData } from '../nodecg/external/speedcontrol';

export type Participant = {
    id: string;
    name: string;
    social: {
        twitch: string | null;
        twitter: string | null;
        nico: string | null;
        youtube: string | null;
    }
}

export const useCurrent = () => {

  const {runDataArray: speedcontrolRuns } = useContext(SpeedcontrolContext);
  const {
    speedcontrolCurrentRunIndex: currentRunIndex,
    speedcontrolUserAdditionArray: userAdditions,
    commentatorArray: commentatorsInAddition,
  } = useContext(ScAdditionContext);

  const [currentRun, setCurrentRun] = useState<RunData>();
  const [runners, setRunners] = useState<Participant[]>([]);
  const [commentators, setCommentators] = useState<Participant[]>([]);

  useEffect(() => {
    const currentRun = speedcontrolRuns[currentRunIndex];
    if (!currentRun) {
      return;
    }
    setCurrentRun(currentRun);
    setRunners(currentRun.teams.flatMap(t => t.players).flatMap(p => {
      const addition = userAdditions.find(addition => addition.id === p.id);
      return {
        id: p.id,
        name: p.name,
        social: {
          twitch: p.social.twitch ?? null,
          twitter: addition?.social.twitter ?? null,
          nico: addition?.social.nico ?? null,
          youtube: addition?.social.youtube ?? null,
        }
      };
    }));
    setCommentators(commentatorsInAddition.filter(
      commentator => commentator.assignedRunIdArray.includes(currentRun.id)
    ).map(commentator => ({
      id: commentator.id,
      name: commentator.name,
      social: {
        twitch: commentator.social.twitch ?? null,
        twitter: commentator.social.twitter ?? null,
        nico:commentator.social.nico ?? null,
        youtube: commentator.social.youtube ?? null,
      }
    })));
  }, [ speedcontrolRuns, currentRunIndex, userAdditions]);

  return [currentRun, runners, commentators] as const;
};
