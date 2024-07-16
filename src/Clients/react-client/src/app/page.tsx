import { Elements } from "@/app/components/GridElements";

export default function Home({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-1">
      <div>
        <Elements />
      </div>  
    </main>
  );
}
