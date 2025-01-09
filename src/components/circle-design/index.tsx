export const CircleDesign = () => {
	return (
		<section className="w-full flex items-center justify-center h-[90dvh] p-4 mt-22">
			<div className="bg-fnx-border p-10 rounded-full">
				<div className="relative flex justify-center items-center size-44 bg-white rounded-full shadow-2xl">
					<span className="text-2xl font-bold ">FNX</span>

					{[
						{ label: 'Tailored Solutions', top: '-105%', border: 'border-fnx-teal' },
						{ label: 'Practical', bottom: '25%', left: '-105%', border: 'border-fnx-brown' },
						{ label: 'Responsiveness', bottom: '25%', right: '-105%', border: 'border-fnx-blue' },
						{ label: 'Real-World Experience', bottom: '-85%', right: '75%', border: 'border-fnx-gray' },
						{ label: 'Transparency', bottom: '-85%', left: '75%', border: 'border-fnx-navy' },
					].map((circle, index) => (
						<div
							key={index}
							className={`absolute flex flex-col justify-center items-center size-44 bg-white border-[22px] ${circle.border} rounded-full shadow-lg text-center`}
							style={{ top: circle.top, left: circle.left, right: circle.right, bottom: circle.bottom }}>
							<span className={`text-sm font-bold tracking-wide text-fnx-text`}>{circle.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
