"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import LoadingButton from "./LoadingButton";
import { FaPaperPlane } from "react-icons/fa";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/lib/actions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .email(),
});

const SupportForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      message: "",
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const emailResponse = await sendEmail({
      name: values.name,
      subject: values.subject,
      message: values.message,
      email: values.email,
    });

    if (emailResponse.success) alert("DID WELL!");
    else alert("SOMETHING WENT WRONG...");
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Smith" {...field} autoFocus />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Email</FormLabel>
                <FormControl>
                  <Input placeholder="johnsmith@mail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Reporting a Bug" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="font-semibold">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Leave a message about a bug, a problem, criticism, anything!"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton
            loading={form.formState.isSubmitting}
            className="ml-auto mt-4 font-semibold"
          >
            Submit <FaPaperPlane className="ml-2" />
          </LoadingButton>
        </form>
      </Form>
    </div>
  );
};
export default SupportForm;
