import React from 'react';
import { useEffect, useRef } from 'react';
import { BundleNodecgInstance } from '../../../nodecg';

export type RectPath = {
  x: number;
  y: number;
  w: number;
  h: number;
}

type Props = {
  clipPath?: RectPath[];
  hiddenOnNoInput?: boolean;
  setup?: boolean;
}

export const ClippedBackground = ({ clipPath, setup }: Props) => {
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const assetName = setup ? 'assets:background-setup' : 'assets:background-game';
    (nodecg as BundleNodecgInstance).readReplicant(assetName, (assets) => {
      if (assets[0] && canvasRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        canvasRef.current.width = width;
        canvasRef.current.height = height;

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) {
          return;
        }
        ctx.globalCompositeOperation = 'xor';
        clipPath?.forEach(path => {
          ctx.fillRect(path.x, path.y, path.w, path.h);
        });

        const background = new Image();
        background.onload = () => {
          ctx.drawImage(background, 0, 0, width, height);
        };
        background.src = assets[0].url;
      }
    });

  }, [canvasRef, clipPath]);

  return (
    <>
      <canvas style={{
        position: 'fixed'
      }} ref={canvasRef} />
    </>
  );
};