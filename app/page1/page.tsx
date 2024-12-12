"use client";
import { useSession } from "next-auth/react";

export default function Page1() {
  const { data: session } = useSession();

  const handleUpdateSession = async () => {
    if (session?.user) {
      try {
        const response = await fetch("/api/update-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: "asma khan" }),
        });

        if (!response.ok) {
          throw new Error("Failed to update session");
        }
        alert("Session updated successfully!");
      } catch (error) {
        console.error(error);
        alert("Failed to update session.");
      }
    }
  };

  return (
    <>
      <button onClick={handleUpdateSession}>Update session</button>
      <h1>Can be accessed by any user.</h1>
    </>
  );
}
