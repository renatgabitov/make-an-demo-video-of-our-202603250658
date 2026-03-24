import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Scene_scene_01 = () => {
  const frame = useCurrentFrame();
  const {fps, width, height} = useVideoConfig();
  const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'};

  const enter = spring({fps, frame: frame - 2, config: {damping: 200, stiffness: 120, mass: 0.9}});
  const settle = spring({fps, frame: frame - 16, config: {damping: 180, stiffness: 90, mass: 1}});

  const fadeIn = interpolate(frame, [0, 8], [0, 1], clamp);
  const fadeOut = interpolate(frame, [62, 72], [1, 0], clamp);
  const sceneOpacity = fadeIn * fadeOut;
  const sceneBlur = interpolate(frame, [0, 8, 60, 72], [18, 0, 0, 16], clamp);
  const sceneScale = interpolate(frame, [0, 18, 60, 72], [1.05, 1, 1.02, 1.05], clamp);

  const titleSoftBlur = interpolate(frame, [0, 12, 24], [30, 10, 0], clamp);
  const titleSoftOpacity = interpolate(frame, [0, 6, 18], [0, 0.72, 1], clamp);
  const titleCrispOpacity = interpolate(frame, [8, 24], [0, 1], clamp);
  const titleScale = interpolate(enter, [0, 1], [0.92, 1.03]);
  const titleY = interpolate(frame, [0, 72], [22, -16], clamp);
  const glowBlur = interpolate(frame, [0, 18, 48], [64, 26, 18], clamp);
  const glowOpacity = interpolate(frame, [0, 10, 34, 60], [0, 0.72, 0.32, 0.18], clamp);

  const lineOpacity = interpolate(frame, [8, 24, 60, 72], [0, 0.34, 0.18, 0], clamp);
  const lineScale = interpolate(settle, [0, 1], [0.96, 1.04]);
  const dashOffset = interpolate(frame, [0, 72], [180, 0], clamp);

  const leftGlowX = interpolate(frame, [0, 72], [-80, 90], clamp);
  const rightGlowX = interpolate(frame, [0, 72], [80, -60], clamp);
  const topGlowY = interpolate(frame, [0, 72], [-30, 40], clamp);

  const title = 'Introducing\nThe AI Workflow Builder';

  const titleStyle = {
    position: 'absolute',
    textAlign: 'center',
    whiteSpace: 'pre-line',
    fontFamily: 'Inter, Arial, sans-serif',
    fontWeight: 900,
    letterSpacing: '-0.055em',
    lineHeight: 0.92,
    fontSize: Math.min(width * 0.083, 160),
    color: '#13100d',
    maxWidth: width * 0.86,
    paddingLeft: 120,
    paddingRight: 120,
  };

  const pathA = `M ${width * 0.08} ${height * 0.58} C ${width * 0.24} ${height * 0.34}, ${width * 0.39} ${height * 0.34}, ${width * 0.5} ${height * 0.49}`;
  const pathB = `M ${width * 0.92} ${height * 0.42} C ${width * 0.76} ${height * 0.66}, ${width * 0.61} ${height * 0.64}, ${width * 0.5} ${height * 0.51}`;
  const pathC = `M ${width * 0.29} ${height * 0.37} C ${width * 0.41} ${height * 0.29}, ${width * 0.59} ${height * 0.29}, ${width * 0.71} ${height * 0.37}`;
  const pathD = `M ${width * 0.32} ${height * 0.66} C ${width * 0.43} ${height * 0.72}, ${width * 0.57} ${height * 0.72}, ${width * 0.68} ${height * 0.66}`;

  return (
    <AbsoluteFill style={{backgroundColor: '#120d08', overflow: 'hidden'}}>
      <AbsoluteFill
        style={{
          opacity: sceneOpacity,
          filter: `blur(${sceneBlur}px)`,
          transform: `scale(${sceneScale})`,
        }}
      >
        <AbsoluteFill
          style={{
            background: 'linear-gradient(135deg, #f5ead7 0%, #f8f1e4 38%, #f0d7ad 100%)',
          }}
        />

        <AbsoluteFill
          style={{
            background: 'radial-gradient(circle at 50% 46%, rgba(255,252,241,0.98) 0%, rgba(255,244,219,0.78) 18%, rgba(255,234,190,0.26) 42%, rgba(255,227,170,0) 64%)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: -140,
            background: 'repeating-linear-gradient(115deg, rgba(255,255,255,0.11) 0 2px, rgba(255,255,255,0) 2px 44px)',
            opacity: 0.16,
            transform: 'scale(1.15)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: -height * 0.16 + topGlowY,
            left: -width * 0.18 + leftGlowX,
            width: width * 0.72,
            height: width * 0.72,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,220,150,0.46) 0%, rgba(255,220,150,0.14) 34%, rgba(255,220,150,0) 68%)',
            filter: 'blur(8px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            right: -width * 0.16 + rightGlowX,
            bottom: -height * 0.18,
            width: width * 0.7,
            height: width * 0.7,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,209,128,0.36) 0%, rgba(255,209,128,0.12) 36%, rgba(255,209,128,0) 70%)',
            filter: 'blur(8px)',
          }}
        />

        <div
          style={{
            position: 'absolute',
            left: width * 0.22,
            top: height * 0.12,
            width: width * 0.56,
            height: height * 0.56,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,250,239,0.7) 0%, rgba(255,250,239,0.18) 38%, rgba(255,250,239,0) 70%)',
            filter: 'blur(8px)',
            opacity: 0.9,
          }}
        />

        <svg
          viewBox={`0 0 ${width} ${height}`}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: lineOpacity,
            transform: `scale(${lineScale})`,
            transformOrigin: 'center center',
          }}
        >
          <defs>
            <linearGradient id='workflow-stroke-a' x1='0' y1='0' x2='1' y2='1'>
              <stop offset='0%' stopColor='rgba(255,214,145,0.0)' />
              <stop offset='42%' stopColor='rgba(255,196,103,0.8)' />
              <stop offset='100%' stopColor='rgba(255,243,213,0.0)' />
            </linearGradient>
            <linearGradient id='workflow-stroke-b' x1='1' y1='0' x2='0' y2='1'>
              <stop offset='0%' stopColor='rgba(255,214,145,0.0)' />
              <stop offset='48%' stopColor='rgba(255,188,92,0.75)' />
              <stop offset='100%' stopColor='rgba(255,243,213,0.0)' />
            </linearGradient>
          </defs>

          <g style={{filter: 'blur(8px)', opacity: 0.55}}>
            <path d={pathA} fill='none' stroke='url(#workflow-stroke-a)' strokeWidth='18' strokeLinecap='round' />
            <path d={pathB} fill='none' stroke='url(#workflow-stroke-b)' strokeWidth='18' strokeLinecap='round' />
            <path d={pathC} fill='none' stroke='url(#workflow-stroke-a)' strokeWidth='12' strokeLinecap='round' />
            <path d={pathD} fill='none' stroke='url(#workflow-stroke-b)' strokeWidth='12' strokeLinecap='round' />
          </g>

          <path d={pathA} fill='none' stroke='url(#workflow-stroke-a)' strokeWidth='3' strokeLinecap='round' strokeDasharray='8 22' strokeDashoffset={dashOffset} />
          <path d={pathB} fill='none' stroke='url(#workflow-stroke-b)' strokeWidth='3' strokeLinecap='round' strokeDasharray='8 22' strokeDashoffset={dashOffset * 0.75} />
          <path d={pathC} fill='none' stroke='url(#workflow-stroke-a)' strokeWidth='2.5' strokeLinecap='round' strokeDasharray='6 18' strokeDashoffset={dashOffset * 0.5} />
          <path d={pathD} fill='none' stroke='url(#workflow-stroke-b)' strokeWidth='2.5' strokeLinecap='round' strokeDasharray='6 18' strokeDashoffset={dashOffset * 0.35} />

          <circle cx={width * 0.5} cy={height * 0.5} r='6' fill='rgba(255,228,168,0.8)' />
          <circle cx={width * 0.29} cy={height * 0.37} r='4' fill='rgba(255,228,168,0.55)' />
          <circle cx={width * 0.71} cy={height * 0.37} r='4' fill='rgba(255,228,168,0.55)' />
          <circle cx={width * 0.32} cy={height * 0.66} r='4' fill='rgba(255,228,168,0.4)' />
          <circle cx={width * 0.68} cy={height * 0.66} r='4' fill='rgba(255,228,168,0.4)' />
        </svg>

        <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
          <div
            style={{
              ...titleStyle,
              color: '#fff3d7',
              opacity: glowOpacity,
              filter: `blur(${glowBlur}px)`,
              transform: `translateY(${titleY}px) scale(${titleScale * 1.035})`,
            }}
          >
            {title}
          </div>

          <div
            style={{
              ...titleStyle,
              color: 'rgba(67,44,14,0.2)',
              opacity: titleSoftOpacity,
              filter: `blur(${Math.max(titleSoftBlur * 0.5, 0)}px)`,
              transform: `translateY(${titleY + 3}px) scale(${titleScale * 1.012})`,
            }}
          >
            {title}
          </div>

          <div
            style={{
              ...titleStyle,
              color: '#17120d',
              opacity: titleSoftOpacity,
              filter: `blur(${titleSoftBlur}px)`,
              transform: `translateY(${titleY}px) scale(${titleScale})`,
            }}
          >
            {title}
          </div>

          <div
            style={{
              ...titleStyle,
              color: '#15110d',
              opacity: titleCrispOpacity,
              textShadow: '0 0 24px rgba(255,244,219,0.44), 0 18px 42px rgba(71,45,13,0.14)',
              transform: `translateY(${titleY}px) scale(${titleScale})`,
            }}
          >
            {title}
          </div>
        </AbsoluteFill>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

export default Scene_scene_01;