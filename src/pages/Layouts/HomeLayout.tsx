import { ReactNode } from "react";
import { Header } from "../../components/Header/Header";

interface Props {
    children: ReactNode
}
export function HomeLayout({ children }: Props) {
    return (
        <div>
            <Header />
            {children}
            <div> FOOTER</div>
        </div>
    )
}