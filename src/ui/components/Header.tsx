import { Logo } from "./Logo";
import { Nav } from "./nav/Nav";

export function Header({ channel }: { channel: string }) {
	return (
		<header className="sticky top-0 z-20 bg-green-500/80 backdrop-blur-md">
			<div className="mx-auto max-w-7xl px-3 ">
				<div className="flex h-24 justify-between gap-4 md:gap-8">
					<Logo />
					<Nav channel={channel} />
				</div>
			</div>
		</header>
	);
}
