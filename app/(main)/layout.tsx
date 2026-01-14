import Navbar from "@/features/layout/components/navbar";
import Footer from "@/features/layout/components/footer";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <Navbar />
            <Footer />
        </>
    );
}

