"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import LoadingButton from "./LoadingButton";
import { FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";
import { createMailSubscriber } from "@/lib/actions";

const formSchema = z.object({
  email: z.string().email(),
});

const EmailInput = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Joining mailing list...");

    const createMailSubscriberResponse = await createMailSubscriber(
      values.email,
    );
    if (
      typeof createMailSubscriberResponse === "string" &&
      createMailSubscriberResponse.includes("ERROR")
    ) {
      toast.error("Email already in mailing list", { id: toastId });
    } else {
      toast.success("Joined mailing list", { id: toastId });
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="flex items-center gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Enter email here" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton loading={form.formState.isSubmitting}>
            Join <FaPaperPlane className="ml-2" />
          </LoadingButton>
        </div>
      </form>
    </Form>
  );
};
export default EmailInput;
