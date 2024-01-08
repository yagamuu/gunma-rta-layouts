import React, { useEffect, useState } from 'react';
import { BundleNodecgInstance } from '../../nodecg';
import styled from 'styled-components';

const ImageBase = styled.div`
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const EventLogo = ({ setup }: { setup?: boolean}) => {
  const [logoUrl, setLogoUrl] = useState<string>();
  const [sponsorLogoUrl, setSponsorLogoUrl] = useState<string>();


  useEffect(() => {
    (nodecg as BundleNodecgInstance).readReplicant('assets:logo', (assets) => {
      const [asset] = assets;
      if (asset) {
        setLogoUrl(asset.url);
      }
    });
    (nodecg as BundleNodecgInstance).readReplicant('assets:sponsor-logo', (assets) => {
      const [asset] = assets;
      if (asset) {
        setSponsorLogoUrl(asset.url);
      }
    });
  }, []);

  return (
    <div style={{
      position: 'absolute',
      left: '16px',
      top: '16px',
    }}>
      <ImageBase style={{
        width: setup ? '256px' : '192px',
        height: setup ? '256px' : '192px',
        margin: '0 16px',
        backgroundImage: `url(${logoUrl})`,
      }} />
      <ImageBase style={{
        width: setup ? '256px' : '192px',
        height: setup ? '256px' : '192px',
        backgroundImage: `url(${sponsorLogoUrl})`,
      }} />
    </div>
  );
};