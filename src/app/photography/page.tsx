import PhotographyContent from "@/components/PhotographyContent";

export function generateMetadata() {
    return {
        title: "Photography | Yuhao Cheng",
        description: "A visual journey through urban landscapes, nature, and portraits.",
        openGraph: {
            title: "Photography | Yuhao Cheng",
            description: "A visual journey through urban landscapes, nature, and portraits.",
            images: ["/profile_picture.png"],
        },
    };
}

export default function PhotographyPage() {
    return <PhotographyContent />;
}
