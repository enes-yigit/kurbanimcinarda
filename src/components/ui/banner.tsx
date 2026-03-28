'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Button } from './button';

const bannerVariants = cva(
	'relative overflow-hidden border shadow-lg text-sm w-full font-sans',
	{
		variants: {
			variant: {
				default: 'bg-muted/40 border-muted/80',
				success:
					'bg-green-50 border-green-200 text-green-900',
				warning:
					'bg-amber-50 border-amber-200 text-amber-900',
				info: 'bg-blue-50 border-blue-200 text-blue-900',
				premium:
					'bg-[#1a2f24] border-b border-[#2d4a3a] text-white',
				gradient:
					'bg-slate-50 border-slate-200 text-slate-900',
			},
			size: {
				default: 'py-2 px-4',
				sm: 'text-xs py-1.5 px-3',
				lg: 'text-base py-3 px-6',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

type BannerProps = React.ComponentProps<'div'> &
	VariantProps<typeof bannerVariants> & {
		// Content
		title: string;
		description?: string;

		// Icons and visuals
		icon?: React.ReactNode;
		showShade?: boolean;

		// Actions
		show?: boolean;
		onHide?: () => void;
		action?: React.ReactNode;
		closable?: boolean;

		// Behavior
		autoHide?: number; // milliseconds
	};

export function Banner({
	variant = 'default',
	size = 'default',
	title,
	description,
	icon,
	showShade = false,
	show = true,
	onHide,
	action,
	closable = false,
	className,
	autoHide,
	...props
}: BannerProps) {
	React.useEffect(() => {
		if (autoHide && show) {
			const timer = setTimeout(() => {
				onHide?.();
			}, autoHide);
			return () => clearTimeout(timer);
		}
	}, [autoHide, onHide, show]);

	if (!show) return null;

	return (
		<div
			className={cn(bannerVariants({ variant, size }), className)}
			role={variant === 'warning' || variant === 'default' ? 'alert' : 'status'}
			{...props}
		>
			{/* Shimmer effect */}
			{showShade && (
				<div className="absolute inset-0 -z-10 -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%', animation: 'shimmer 3s infinite' }} />
			)}

			<div className="flex items-center justify-between gap-4 max-w-[85rem] mx-auto w-full">
				<div className="flex min-w-0 flex-1 items-center justify-center md:justify-start gap-3">
					{icon && <div className="flex-shrink-0">{icon}</div>}

					<div className="min-w-0 flex-1 flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-center md:text-left">
						<div className="flex flex-wrap items-center justify-center md:justify-start">
							<p className="truncate font-bold tracking-wide">{title}</p>
						</div>
						{description && <p className="text-sm opacity-90 font-medium md:border-l md:border-white/20 md:pl-3">{description}</p>}
					</div>
				</div>

				<div className="flex flex-shrink-0 items-center justify-center gap-2">
					{action && action}

					{closable && (
						<Button onClick={onHide} size="icon" variant="ghost" className="h-8 w-8 hover:bg-white/10 text-white/70 hover:text-white">
							<X size={18} />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
