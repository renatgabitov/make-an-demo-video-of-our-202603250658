import React from 'react';
import {AbsoluteFill, Easing, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

/* TRANSPILED_SHOWCASE_SCENE_2 */
/* COMPONENT_REFERENCE_ID:d3404193-6edf-4ef9-a931-2f90cd50af53 */

const SparklesIcon: React.FC<{color?: string}> = ({color = '#7E8896'}) => (
	<svg width='22' height='22' viewBox='0 0 24 24' style={{display: 'block'}}>
		<rect x='3.5' y='4.5' width='13' height='13' rx='2.5' fill='none' stroke={color} strokeWidth='1.8' />
		<path d='M8 9.2h4.5M8 12.2h2.8' stroke={color} strokeWidth='1.8' strokeLinecap='round' />
		<path d='M18.8 8.4l.55 1.45 1.45.55-1.45.55-.55 1.45-.55-1.45-1.45-.55 1.45-.55.55-1.45Z' fill={color} />
	</svg>
);

const WrenchIcon: React.FC<{color?: string}> = ({color = '#3B82FF'}) => (
	<svg width='22' height='22' viewBox='0 0 24 24' style={{display: 'block'}}>
		<path
			d='M14.6 4.4a4.7 4.7 0 0 0 1.3 4.9l-7.7 7.7a2.2 2.2 0 1 0 3.1 3.1l7.7-7.7a4.7 4.7 0 0 0 4.9-1.3 4.8 4.8 0 0 1-5.9-5.9 4.7 4.7 0 0 0-3.4-.8Z'
			fill='none'
			stroke={color}
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<circle cx='7.7' cy='18.3' r='1' fill={color} />
	</svg>
);

const DocIcon: React.FC<{color?: string}> = ({color = '#22C55E'}) => (
	<svg width='22' height='22' viewBox='0 0 24 24' style={{display: 'block'}}>
		<rect x='4' y='4' width='16' height='16' rx='4' fill='none' stroke={color} strokeWidth='2' />
		<path d='M8 10h8M8 14h5' stroke={color} strokeWidth='2' strokeLinecap='round' />
	</svg>
);

const PaperclipIcon: React.FC = () => (
	<svg width='28' height='28' viewBox='0 0 24 24' style={{display: 'block'}}>
		<path
			d='M8.8 12.8l5.9-5.9a3 3 0 1 1 4.2 4.2l-7.6 7.6a4.8 4.8 0 1 1-6.8-6.8l8-8'
			fill='none'
			stroke='#97A0AA'
			strokeWidth='1.9'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

const MicIcon: React.FC = () => (
	<svg width='28' height='28' viewBox='0 0 24 24' style={{display: 'block'}}>
		<path d='M12 4.5a2.8 2.8 0 0 1 2.8 2.8v4.7a2.8 2.8 0 1 1-5.6 0V7.3A2.8 2.8 0 0 1 12 4.5Z' fill='none' stroke='#97A0AA' strokeWidth='1.9' />
		<path d='M6.8 11.6a5.2 5.2 0 0 0 10.4 0M12 16.8v3.2M9.3 20h5.4' fill='none' stroke='#97A0AA' strokeWidth='1.9' strokeLinecap='round' />
	</svg>
);

const SendIcon: React.FC = () => (
	<svg width='34' height='34' viewBox='0 0 34 34' style={{display: 'block'}}>
		<path d='M17 24.5V9.2' stroke='#FFFFFF' strokeWidth='3.4' strokeLinecap='round' />
		<path d='M9.6 16.2 17 8.8l7.4 7.4' fill='none' stroke='#FFFFFF' strokeWidth='3.4' strokeLinecap='round' strokeLinejoin='round' />
	</svg>
);

const Tag: React.FC<{label: string; type: 'tool' | 'doc'; style?: React.CSSProperties}> = ({label, type, style}) => (
	<div
		style={{
			height: 58,
			padding: '0 24px',
			borderRadius: 29,
			backgroundColor: '#FFFFFF',
			display: 'flex',
			alignItems: 'center',
			gap: 12,
			boxShadow: '0 1px 0 rgba(0,0,0,0.02)',
			...style,
		}}
	>
		{type === 'tool' ? <WrenchIcon /> : <DocIcon />}
		<div
			style={{
				fontSize: 30,
				lineHeight: 1,
				color: '#2D3640',
				fontWeight: 500,
				fontFamily: 'Inter, Arial, sans-serif',
				letterSpacing: '-0.02em',
			}}
		>
			{label}
		</div>
	</div>
);

const ReferenceOverlay: React.FC<{frame: number}> = ({frame}) => {
	const chipsFloatA = Math.sin(frame / 12) * 4;
	const chipsFloatB = Math.sin(frame / 14 + 0.8) * 5;
	const inputPulse = 1 + Math.sin(frame / 10) * 0.004;
	const localBlur = interpolate(frame, [0, 12, 82, 89], [14, 0, 0, 10], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const localOpacity = interpolate(frame, [0, 8, 84, 89], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const row1In = spring({frame: frame - 10, fps: 30, config: {damping: 200, stiffness: 140}});
	const row2In = spring({frame: frame - 14, fps: 30, config: {damping: 200, stiffness: 140}});
	const headingIn = spring({frame: frame - 4, fps: 30, config: {damping: 170, stiffness: 120}});

	return (
		<div
			style={{
				position: 'absolute',
				left: '50%',
				top: '56%',
				width: 1280,
				height: 620,
				transform: 'translate(-50%, -50%)',
				backgroundColor: 'transparent',
				opacity: localOpacity,
				filter: `blur(${localBlur}px)`,
			}}
		>
			<div
				style={{
					position: 'absolute',
					left: 230,
					top: 120,
					width: 820,
					height: 260,
					borderRadius: 180,
					background: 'radial-gradient(circle, rgba(255,227,141,0.34) 0%, rgba(255,232,167,0.16) 40%, rgba(255,255,255,0) 72%)',
					filter: 'blur(8px)',
					opacity: 0.9,
				}}
			/>

			<div
				style={{
					position: 'absolute',
					top: 22 - (1 - headingIn) * 18,
					left: 0,
					right: 0,
					textAlign: 'center',
					fontSize: 60,
					fontWeight: 700,
					color: '#141B23',
					letterSpacing: '-0.045em',
					opacity: headingIn,
				}}
			>
				How can I help?
			</div>

			<div
				style={{
					position: 'absolute',
					top: 124,
					left: 26,
					width: 1228,
					height: 201,
					backgroundColor: '#FFFFFF',
					borderRadius: 27,
					border: '2px solid rgba(198,205,214,0.55)',
					boxShadow: '0 20px 40px rgba(28,36,46,0.12), 0 6px 18px rgba(28,36,46,0.08)',
					transform: `translateY(${Math.sin(frame / 16) * 1.5}px) scale(${inputPulse})`,
				}}
			>
				<div
					style={{
						position: 'absolute',
						inset: 0,
						borderRadius: 27,
						background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(249,251,255,0.66) 100%)',
						pointerEvents: 'none',
					}}
				/>
				<div
					style={{
						position: 'absolute',
						top: 34,
						left: 27,
						fontSize: 29,
						color: '#6E7B90',
						fontWeight: 400,
						letterSpacing: '-0.03em',
					}}
				>
					Build an agent or perform a task
				</div>

				<div
					style={{
						position: 'absolute',
						left: 27,
						top: 108,
						height: 58,
						padding: '0 26px 0 22px',
						borderRadius: 29,
						border: '2px solid #E0E5EB',
						display: 'flex',
						alignItems: 'center',
						gap: 10,
						backgroundColor: '#FFF',
						boxShadow: '0 8px 16px rgba(78,88,110,0.05)',
					}}
				>
					<SparklesIcon />
					<div
						style={{
							fontSize: 28,
							color: '#1C2530',
							fontWeight: 500,
							letterSpacing: '-0.03em',
						}}
					>
						Build apps
					</div>
				</div>

				<div
					style={{
						position: 'absolute',
						right: 145,
						top: 120,
						display: 'flex',
						alignItems: 'center',
						gap: 22,
					}}
				>
					<PaperclipIcon />
					<MicIcon />
				</div>

				<div
					style={{
						position: 'absolute',
						right: 26,
						top: 109,
						width: 62,
						height: 62,
						borderRadius: 31,
						backgroundColor: '#88A9FF',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						boxShadow: '0 14px 28px rgba(88,128,255,0.34)',
					}}
				>
					<div
						style={{
							position: 'absolute',
							inset: -8,
							borderRadius: 40,
							background: 'radial-gradient(circle, rgba(136,169,255,0.28) 0%, rgba(136,169,255,0) 72%)',
							filter: 'blur(8px)',
						}}
					/>
					<SendIcon />
				</div>
			</div>

			<div
				style={{
					position: 'absolute',
					top: 364 + chipsFloatA,
					left: 84,
					display: 'flex',
					gap: 12,
					alignItems: 'center',
					transform: `scale(${0.96 + row1In * 0.04})`,
					opacity: row1In,
					filter: `blur(${(1 - row1In) * 8}px)`,
				}}
			>
				<Tag label='Personal website' type='doc' />
				<Tag label='Customer support email' type='tool' />
				<Tag label='Outbound sales calls' type='tool' />
				<Tag label='Lead gen' type='doc' />
			</div>

			<div
				style={{
					position: 'absolute',
					top: 438 + chipsFloatB,
					left: 238,
					display: 'flex',
					gap: 14,
					alignItems: 'center',
					transform: `scale(${0.96 + row2In * 0.04})`,
					opacity: row2In,
					filter: `blur(${(1 - row2In) * 8}px)`,
				}}
			>
				<Tag label='Meeting recorder' type='tool' />
				<Tag label='LinkedIn outreach' type='doc' />
				<Tag label='Support chatbot' type='tool' />
			</div>
		</div>
	);
};

export const Scene02TranspiledWorkflowBuilderShowcase: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const intro = spring({frame, fps, config: {damping: 180, stiffness: 110}});
	const heroIn = spring({frame: frame - 4, fps, config: {damping: 150, stiffness: 120}});
	const exitOpacity = interpolate(frame, [80, 89], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const titleOpacity = interpolate(frame, [0, 10, 76, 86], [0, 1, 1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const titleBlur = interpolate(frame, [0, 10, 78, 89], [18, 0, 0, 10], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const heroScale = interpolate(frame, [0, 18, 52, 78, 89], [0.93, 0.99, 1.035, 1.02, 0.985], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const heroX = interpolate(frame, [0, 28, 58, 89], [-26, -6, 12, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const heroY = interpolate(frame, [0, 24, 60, 89], [22, 6, -10, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const rotateY = interpolate(frame, [0, 30, 60, 89], [-5, -1.5, 1.5, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const rotateX = interpolate(frame, [0, 30, 60, 89], [2.5, 0.8, -0.8, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const rotateZ = interpolate(frame, [0, 44, 89], [-0.35, 0.25, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const envShift = Math.sin(frame / 20) * 20;
	const stripeMove = interpolate(frame, [0, 89], [0, 26], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				background: 'linear-gradient(180deg, #FCF6ED 0%, #FFFDF8 52%, #FFF9EA 100%)',
				fontFamily: 'Inter, Arial, sans-serif',
				overflow: 'hidden',
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: -180,
					background: 'radial-gradient(circle at 18% 78%, rgba(255,213,79,0.42) 0%, rgba(255,213,79,0.14) 22%, rgba(255,255,255,0) 46%), radial-gradient(circle at 82% 82%, rgba(255,214,83,0.42) 0%, rgba(255,214,83,0.13) 24%, rgba(255,255,255,0) 48%), radial-gradient(circle at 50% 8%, rgba(255,222,120,0.18) 0%, rgba(255,255,255,0) 40%)',
					transform: `translateY(${envShift * 0.2}px) scale(1.08)`,
					filter: 'blur(8px)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background: 'repeating-linear-gradient(62deg, rgba(255,211,77,0.05) 0px, rgba(255,211,77,0.05) 14px, rgba(255,255,255,0) 14px, rgba(255,255,255,0) 48px)',
					opacity: 0.42,
					transform: `translateX(${stripeMove}px) scale(1.03)`,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					left: -120,
					top: 240,
					width: 520,
					height: 520,
					borderRadius: 260,
					background: 'radial-gradient(circle, rgba(255,234,170,0.34) 0%, rgba(255,255,255,0) 70%)',
					filter: 'blur(8px)',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					right: -80,
					top: 180,
					width: 460,
					height: 460,
					borderRadius: 230,
					background: 'radial-gradient(circle, rgba(255,238,186,0.28) 0%, rgba(255,255,255,0) 72%)',
					filter: 'blur(8px)',
				}}
			/>

			<div
				style={{
					position: 'absolute',
					top: 88 - (1 - intro) * 24,
					left: 0,
					right: 0,
					textAlign: 'center',
					opacity: titleOpacity * exitOpacity,
					filter: `blur(${titleBlur}px)`,
					transform: `scale(${0.97 + intro * 0.03})`,
				}}
			>
				<div
					style={{
						fontSize: 82,
						lineHeight: 0.95,
						fontWeight: 800,
						color: '#121A23',
						letterSpacing: '-0.06em',
						textShadow: '0 10px 30px rgba(255,255,255,0.3)',
					}}
				>
					Introducing The AI Workflow Builder
				</div>
			</div>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					opacity: heroIn * exitOpacity,
					transform: `perspective(1800px) translate(${heroX}px, ${heroY}px) scale(${heroScale}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
					transformOrigin: '50% 54%',
					filter: `drop-shadow(0 26px 70px rgba(50,58,72,0.08))`,
				}}
			>
				<ReferenceOverlay frame={frame} />
			</div>

			<div
				style={{
					position: 'absolute',
					inset: 0,
					background: 'radial-gradient(circle at center, rgba(255,255,255,0) 48%, rgba(255,248,232,0.3) 76%, rgba(244,232,206,0.48) 100%)',
					mixBlendMode: 'multiply',
					pointerEvents: 'none',
				}}
			/>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background: 'linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 24%, rgba(255,255,255,0) 76%, rgba(244,234,213,0.22) 100%)',
					pointerEvents: 'none',
				}}
			/>
		</AbsoluteFill>
	);
};

export default Scene02TranspiledWorkflowBuilderShowcase;