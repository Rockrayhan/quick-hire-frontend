import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import { createJob } from "../../api/jobsApi";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

/* Zod Schema */
const jobSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company is required"),
  location: z.string().min(1, "Location is required"),
  category: z.string().min(1, "Category is required"),
  description: z.string().min(1, "Description is required"),
});

type FormData = z.infer<typeof jobSchema>;

const JobFormModal = ({ open, onClose, onSuccess }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(jobSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await createJob(data);
      toast.success("Job created successfully ✅");
      reset();
      onSuccess();
    } catch (err) {
      toast.error("Failed to create job");
      console.error(err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add New Job</DialogTitle>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Input className="placeholder:text-muted" placeholder="Job Title" {...register("title")} required />
          <Input className="placeholder:text-muted" placeholder="Company" {...register("company")} required />
          <Input className="placeholder:text-muted" placeholder="Location" {...register("location")} required />
          <Input className="placeholder:text-muted" placeholder="Category" {...register("category")} required />
          <Textarea className="placeholder:text-muted"pmain placeholder="Job Description" {...register("description")} required />

          <DialogFooter>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Add Job"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default JobFormModal;