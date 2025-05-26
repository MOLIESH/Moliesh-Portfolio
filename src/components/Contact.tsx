"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendContactForm } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Footer from "./Footer";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z
    .string()
    .min(10, { message: "Must be a valid Phone Number" })
    .max(14, { message: "Must be a valid Phone Number" }),
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid Email."),

  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});
export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await sendContactForm(data);
      form.reset();
      toast({
        variant: "default",
        title: "Message Received",
        description: "Thank you for reaching out! I'll get back to you shortly",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Message Not Sent",
        description: "We couldn't send your message. Please try again later.",
      });
    }
  }
  return (
    <section
      id="Contact"
      className="relative w-full bg-transparent py-20 bg-grid-white/[0.05]"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#020223]/100 [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />
      <header className="z-20 mx-auto mb-10 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h1 className="font-heading z-20 bg-gradient-to-b from-neutral-100 to-neutral-500 bg-clip-text text-4xl font-bold leading-[1.1] text-transparent sm:text-4xl md:text-6xl">
          Let&apos;s Work Together
        </h1>
        <p className="z-20 max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Contact me let&apos;s build ideas into something innovative together
        </p>
      </header>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="z-20 rounded-2xl"
        >
          <div className="z-20 mx-auto max-w-xl px-6">
            <div className="z-20 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="z-20">Name</FormLabel>
                    <FormControl>
                      <Input
                        className="z-20 mb-4 h-12"
                        placeholder="Enter Name"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Phone</FormLabel>
                    <FormControl>
                      <Input
                        className="mb-4 h-12"
                        placeholder="Enter Phone Number"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="mb-4 h-12"
                      placeholder="Enter Email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us a little bit about yourself"
                      className="h-44 resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={form.formState.isSubmitting}
              type="submit"
              className="hover:border-sky-450 group my-8 inline-flex h-12 w-full cursor-pointer place-content-center justify-center gap-2 rounded-lg border-2 border-transparent bg-sky-500 px-5 py-3 text-center text-sm font-medium text-primary-foreground shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition duration-500 hover:bg-[#0c75ff4f] hover:text-white sm:w-auto"
            >
              Send Message
              {form.formState.isSubmitting && (
                <Loader className="ml-2 h-6 w-6 animate-spin" />
              )}
            </Button>
          </div>
        </form>
      </Form>
      <Footer />
    </section>
  );
}
