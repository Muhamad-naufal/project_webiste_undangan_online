import Home from "../page";

export default async function Page({
  params,
}: {
  params: Promise<{ guest: string }>;
}) {
  const { guest } = await params;

  const guestName = guest
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return <Home guestName={guestName} />;
}
