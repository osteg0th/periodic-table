import { Elements } from "@/app/components/GridElements";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
        <Elements />
    </div>
  );
}
