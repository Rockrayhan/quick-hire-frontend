import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { applyToJob } from "../../api/applicationApi";
import { Loader2 } from "lucide-react"; 

type Props = {
  jobId: number;
};

/* ======================
   ZOD SCHEMA
====================== */
const schema = z.object({
  name: z.string().min(1, "Name required"),
  email: z.string().email("Invalid email"),
  resume_link: z.string().url("Invalid resume URL"),
  cover_note: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const ApplyForm = ({ jobId }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [successMsg, setSuccessMsg] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      setSuccessMsg("");
      await applyToJob({
        job_id: jobId,
        ...data,
      });
      toast.success("Application submitted ✅");
      setSuccessMsg("Your Application has been submitted.");
      reset();
    } catch {
      toast.error("Application failed. Please try again.");
    }
  };

 

  return (
    <div className="border border-border p-6 rounded-lg bg-white">
      <h3 className="text-xl text-secondary mb-6">Apply Now</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input className="placeholder:text-muted"  placeholder="Your Name" {...register("name")} />
        <Input className="placeholder:text-muted" type="email" placeholder="Email Address" {...register("email")} />
        <Input className="placeholder:text-muted" placeholder="Resume Link" {...register("resume_link")} />
        <Textarea className="placeholder:text-muted" placeholder="Cover Note" {...register("cover_note")} />

        <Button
          className="w-full flex items-center justify-center gap-2"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Apply Now"
          )}
        </Button>
      </form>

      {successMsg && (
        <p className="mt-4 text-green-600 font-medium">{successMsg}</p>
      )}
    </div>
  );
};

export default ApplyForm;