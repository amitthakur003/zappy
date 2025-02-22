import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn 
        appearance={{
          layout: {
            socialButtonsPlacement: "bottom",
            termsPlacement: "bottom",
          },
          elements: {
            card: "shadow-lg p-6 rounded-lg",
          },
        }} 
      />
    </div>
  );
}
