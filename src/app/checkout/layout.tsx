import { type ReactNode } from "react";
import { AuthProvider } from "@/ui/components/AuthProvider";

export const metadata = {
	title: "Checkout | Genérico Ecuador",
	description: "CBD Products | CBD Oil, CBD Gummies, CBD Beer, CBD Coffee, CBD Creams.",
};

export default function RootLayout(props: { children: ReactNode }) {
	return (
		<main>
			<AuthProvider>{props.children}</AuthProvider>
		</main>
	);
}
