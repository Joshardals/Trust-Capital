import { Icons } from "../icons";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen text-babyblue bg-navyblue">
      <div className="flex flex-col items-center space-y-4">
        <p>System is Validating Authentication Status, Please Wait...</p>
        <span>
          <Icons.spinner className="h-6 w-6 animate-spin" />
        </span>
      </div>
    </div>
  );
}
