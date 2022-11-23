import { redirect } from "next/navigation";

export default function Page() {
  redirect(process.env.NEXT_PUBLIC_CORE_FRONTEND_URL as string);

  return <div />;
}
