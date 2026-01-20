import { JoinContent } from "@/components/sections/join/join-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Club | DICPC Membership Application",
  description: "Apply to join the premier programming community at Daffodil International College. Elevate your coding skills, compete in contests, and build innovative projects.",
  keywords: ["Join DICPC", "Membership Application", "Programming Club", "Coding Community", "Daffodil College"],
};

export default function JoinPage() {
  return <JoinContent />;
}
