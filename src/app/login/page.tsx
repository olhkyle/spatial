import { Form } from "@/components/login";
import { Button } from "@/components/ui";

export default function LoginPage() {
  return (
    <section>
      <div className="mx-auto pt-16 w-[400px]">
        <h2 className="text-2xl font-bold text-center">Welcome to Spatial</h2>
        <Form />
        <div className="my-4 text-sm text-center">
          <span>OR</span>
        </div>
        <Button type="button" variant="secondary" size="lg" className="w-full">
          Continue with Google
        </Button>
      </div>
    </section>
  );
}
