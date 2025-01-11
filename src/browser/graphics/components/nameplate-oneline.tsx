import React, { useContext } from 'react';
import { Participant } from '../../hooks';
import { Styles } from '../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FocusSocialContext } from '../../providers/focus-social';
import styled from 'styled-components';
import {
  SwitchTransition,
  Transition,
  TransitionStatus,
} from 'react-transition-group';

const FadeContainer = styled.div<{state: TransitionStatus}>`
	transition: all 0.5s;
	opacity: 0;
	opacity: ${(props) =>
    ['entered', 'existing'].includes(props.state) ? '1' : '0'};
`;

export const NameplateOneline = ({participant, isCommentator}: {participant: Participant; isCommentator?: boolean}) => {
  const focus = useContext(FocusSocialContext);

  const displayPlatform = participant.social.nico 
    ? 'nico'
    : participant.social.youtube
      ? 'youtube'
      : participant.social.twitch
        ? 'twitch' : 'none';

  const displayFocus = focus === 'platform'
    ? displayPlatform !== 'none' ? 'platform' : (participant.social.twitter ? 'twitter' : 'none')
    : participant.social.twitter ? 'twitter' : (displayPlatform !== 'none' ? 'platform' : 'none');

  const icon = isCommentator ? faMicrophone : faGamepad;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '86px 16px 389px 389px',
      gridTemplateRows: '60px',
      alignItems: 'center',
    }}>
      <div style={{
        gridColumn: '1 / 2',
        gridRow: '1 / 1',
        fontSize: Styles.fonts.game.secondary,
        justifySelf: 'center',
      }}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div style={{
        gridColumn: '3 / 4',
        gridRow: '1 / 1',
        fontSize: Styles.fonts.game.secondary,
      }}>{ participant.name }</div>
      <div style={{
        gridColumn: '4 / 5',
        gridRow: '1 / 1',
        fontSize: Styles.fonts.game.secondary,
      }}>
        <SwitchTransition>
          <Transition key={displayFocus} timeout={500}>
            {(state) => (
              <FadeContainer state={state}>
                {
                  displayFocus === 'none' && (
                    <div>-</div>
                  )
                }
                {
                  displayFocus === 'platform' && (
                    <div>
                      {
                        displayPlatform === 'twitch' && (
                          <>
                            <FontAwesomeIcon icon={faTwitch} style={{
                              marginRight: '8px'
                            }} />
                            {participant.social.twitch}
                          </>
                        )
                      }
                      {
                        displayPlatform === 'nico' && (
                          <>
                            {participant.social.nico}
                          </>
                        )
                      }
                      {
                        displayPlatform === 'youtube' && (
                          <>
                            <FontAwesomeIcon icon={faYoutube} style={{
                              marginRight: '8px'
                            }} />
                            {participant.social.youtube}
                          </>
                        )
                      }
                    </div>
                  )
                }
                {
                  displayFocus === 'twitter' && (
                    <div>
                      <FontAwesomeIcon icon={faTwitter} style={{
                        marginRight: '8px'
                      }} />
                      {participant.social.twitter}
                    </div>
                  )
                }

              </FadeContainer>
            )}
          </Transition>
        </SwitchTransition>
      </div>
    </div>
  );
};