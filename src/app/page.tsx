import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-wrap min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="link">Button</Button>
      <Button variant="ghost">Button</Button>
    </div>
  );
}
