import { ReactNode } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

interface Props {
    children: ReactNode
}
export function HomeLayout({ children }: Props) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}