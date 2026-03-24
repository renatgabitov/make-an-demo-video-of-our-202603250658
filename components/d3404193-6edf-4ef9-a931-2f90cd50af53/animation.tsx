import React from 'react';
import {AbsoluteFill} from 'remotion';

const SparklesIcon: React.FC<{color?: string}> = ({color = '#7E8896'}) => (
	<svg width="22" height="22" viewBox="0 0 24 24" style={{display: 'block'}}>
		<rect x="3.5" y="4.5" width="13" height="13" rx="2.5" fill="none" stroke={color} strokeWidth="1.8" />
		<path d="M8 9.2h4.5M8 12.2h2.8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
		<path d="M18.8 8.4l.55 1.45 1.45.55-1.45.55-.55 1.45-.55-1.45-1.45-.55 1.45-.55.55-1.45Z" fill={color} />
	</svg>
);

const WrenchIcon: React.FC<{color?: string}> = ({color = '#3B82FF'}) => (
	<svg width="22" height="22" viewBox="0 0 24 24" style={{display: 'block'}}>
		<path
			d="M14.6 4.4a4.7 4.7 0 0 0 1.3 4.9l-7.7 7.7a2.2 2.2 0 1 0 3.1 3.1l7.7-7.7a4.7 4.7 0 0 0 4.9-1.3 4.8 4.8 0 0 1-5.9-5.9 4.7 4.7 0 0 0-3.4-.8Z"
			fill="none"
			stroke={color}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<circle cx="7.7" cy="18.3" r="1" fill={color} />
	</svg>
);

const DocIcon: React.FC<{color?: string}> = ({color = '#22C55E'}) => (
	<svg width="22" height="22" viewBox="0 0 24 24" style={{display: 'block'}}>
		<rect x="4" y="4" width="16" height="16" rx="4" fill="none" stroke={color} strokeWidth="2" />
		<path d="M8 10h8M8 14h5" stroke={color} strokeWidth="2" strokeLinecap="round" />
	</svg>
);

const PaperclipIcon: React.FC = () => (
	<svg width="28" height="28" viewBox="0 0 24 24" style={{display: 'block'}}>
		<path
			d="M8.8 12.8l5.9-5.9a3 3 0 1 1 4.2 4.2l-7.6 7.6a4.8 4.8 0 1 1-6.8-6.8l8-8"
			fill="none"
			stroke="#97A0AA"
			strokeWidth="1.9"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const MicIcon: React.FC = () => (
	<svg width="28" height="28" viewBox="0 0 24 24" style={{display: 'block'}}>
		<path d="M12 4.5a2.8 2.8 0 0 1 2.8 2.8v4.7a2.8 2.8 0 1 1-5.6 0V7.3A2.8 2.8 0 0 1 12 4.5Z" fill="none" stroke="#97A0AA" strokeWidth="1.9" />
		<path d="M6.8 11.6a5.2 5.2 0 0 0 10.4 0M12 16.8v3.2M9.3 20h5.4" fill="none" stroke="#97A0AA" strokeWidth="1.9" strokeLinecap="round" />
	</svg>
);

const SendIcon: React.FC = () => (
	<svg width="34" height="34" viewBox="0 0 34 34" style={{display: 'block'}}>
		<path d="M17 24.5V9.2" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" />
		<path d="M9.6 16.2 17 8.8l7.4 7.4" fill="none" stroke="#FFFFFF" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
);

const Tag: React.FC<{
	label: string;
	type: 'tool' | 'doc';
}> = ({label, type}) => (
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

export const ScreenshotRecreation: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				background:
					'radial-gradient(circle at 18% 80%, rgba(255,213,79,0.38) 0%, rgba(255,213,79,0.14) 24%, rgba(255,255,255,0) 46%), radial-gradient(circle at 82% 80%, rgba(255,214,83,0.38) 0%, rgba(255,214,83,0.13) 25%, rgba(255,255,255,0) 48%), radial-gradient(circle at 50% 10%, rgba(255,222,120,0.16) 0%, rgba(255,255,255,0) 38%), linear-gradient(180deg, #FCF6ED 0%, #FFFDF8 52%, #FFF9EA 100%)',
				fontFamily: 'Inter, Arial, sans-serif',
			}}
		>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					background:
						'repeating-linear-gradient(62deg, rgba(255,211,77,0.045) 0px, rgba(255,211,77,0.045) 14px, rgba(255,255,255,0) 14px, rgba(255,255,255,0) 48px)',
					opacity: 0.55,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					top: 292,
					left: 0,
					right: 0,
					textAlign: 'center',
					fontSize: 60,
					fontWeight: 700,
					color: '#141B23',
					letterSpacing: '-0.045em',
				}}
			>
				How can I help?
			</div>

			<div
				style={{
					position: 'absolute',
					top: 394,
					left: 388,
					width: 1228,
					height: 201,
					backgroundColor: '#FFFFFF',
					borderRadius: 27,
					border: '2px solid rgba(198,205,214,0.55)',
					boxShadow: '0 10px 24px rgba(28,36,46,0.10), 0 2px 6px rgba(28,36,46,0.06)',
				}}
			>
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
					}}
				>
					<SendIcon />
				</div>
			</div>

			<div
				style={{
					position: 'absolute',
					top: 634,
					left: 446,
					display: 'flex',
					gap: 12,
					alignItems: 'center',
				}}
			>
				<Tag label="Personal website" type="doc" />
				<Tag label="Customer support email" type="tool" />
				<Tag label="Outbound sales calls" type="tool" />
				<Tag label="Lead gen" type="doc" />
			</div>

			<div
				style={{
					position: 'absolute',
					top: 708,
					left: 600,
					display: 'flex',
					gap: 14,
					alignItems: 'center',
				}}
			>
				<Tag label="Meeting recorder" type="tool" />
				<Tag label="LinkedIn outreach" type="doc" />
				<Tag label="Support chatbot" type="tool" />
			</div>
		</AbsoluteFill>
	);
};