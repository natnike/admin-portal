import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  console.log(process.env.NEXTAUTH_SECRET);
  return (
    <div>
      <Button>Button</Button>
      <h1>{process.env.ADMIN_PORTAL_API_SECRET}</h1>
    </div>
  );
}
