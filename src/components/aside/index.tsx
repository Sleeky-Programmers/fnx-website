'use client';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

interface AsideProps {
	title?: string;
	description?: string;
	showHeader?: true;
	position: 'top' | 'right' | 'bottom' | 'left';
	triggerButton?: React.ReactNode;
	children: React.ReactNode;
}

export function Aside({ position, triggerButton, title, description, children, showHeader }: AsideProps) {
	return (
		<Sheet>
			{triggerButton && <SheetTrigger asChild>{triggerButton}</SheetTrigger>}
			<SheetContent
				side={position}
				className="w-3/4 bg-white/60 md:w-2/4">
				{showHeader && (
					<SheetHeader>
						{title && <SheetTitle>{title}</SheetTitle>}
						{description && <SheetDescription>{description}</SheetDescription>}
					</SheetHeader>
				)}
				{children}
			</SheetContent>
		</Sheet>
	);
}
