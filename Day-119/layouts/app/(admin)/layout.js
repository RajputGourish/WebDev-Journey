import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Admin-Facebook - Connect with the world",
    description: "This is my facebook app clone thanks and connect with the world and the nation get the world with the group and called it with the quote and kindly describe for the connection world",
};

export default function adminLayout({ children }) {
    return (
        <>
            <span>Admin Navbar</span>
            {children}
        </>
    );
}
