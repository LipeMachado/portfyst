import Button from "../ui/button";
import Link from "next/link";

export default async function Header() {

  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="ProjectInBio Logo" />
        <h3 className="text-white text-2xl font-bold">ProjectInBio</h3>
      </div>
      <div className="flex items-center gap-4">
        <Link href={`/`}>
          <Button>Minha Página</Button>
        </Link>
        <form action="">
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}