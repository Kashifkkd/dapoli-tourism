"use client";
import { FC } from "react";
import Image from "next/image";

// Types
export interface iCardItem {
	title: string;
	description: string;
	tag: string;
	src: string;
	link: string;
	color: string;
	textColor: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
	i: number;
	src: string;
}

// Constants
const TOP_VALUES: Record<number, string> = {
	1: "1/2",
	2: "1/2",
	3: "1/2",
	4: "1/2",
};

// Components
const Card: FC<iCardProps> = ({
	title,
	description,
	color,
	textColor,
	i,
	src,
}) => {
	return (
		<div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
			<div
				className="relative flex flex-col h-[300px] max-h-[300px] w-[700px] py-12 px-10 md:px-12
				rotate-0 md:h-[400px] md:max-h-[400px] md:w-[600px] items-center justify-center mx-auto 
				shadow-2xl pr-3 pl-3 pt-3 pb-4 rounded-xl overflow-hidden"
				style={{ backgroundColor: color }}
			>
				<div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
					<span className="font-bold relative text-5xl md:text-7xl mt-5">
						<span
							className="relative font-headline font-black tracking-tight drop-shadow-lg"
							style={{ color: textColor }}
						>
							{title}
						</span>
					</span>
					<div
						className="font-body text-lg md:text-2xl font-medium text-center mb-0 mt-2 tracking-wide drop-shadow-md min-h-[4rem]"
						style={{ lineHeight: 1.4, color: textColor }}
					>
						{description}
					</div>
				</div>
				<div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-black/30">
					<Image
						className="w-full h-full object-cover"
						src={src}
						alt="Background"
						fill
					/>
				</div>
			</div>
		</div>
	);
};

export interface iCardSlideProps {
	items: iCardItem[];
}

export const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
	return (
		<div className="">
			{items.map((project, i) => {
				return <Card key={`p_${i}`} {...project} i={i} />;
			})}
		</div>
	);
};
