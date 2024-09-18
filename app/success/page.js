import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="text-sm text-slate-500 text-center p-5 flex flex-row justify-center dark:bg-black z-50">
      <Link href={"/"}>You're ordered was received</Link>
    </div>
  );
}
