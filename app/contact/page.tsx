"use client";
import TabSwitch from "@/components/custom/TabSwitch/TabSwitch";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Updates from "@/components/custom/Contact/Updates";
import data from '@/public/assets/data/Insights/Insights.json'

const FormSchema = z.object({
  role: z.string().min(1, { message: "Please select your role." }),
  reason: z.string().min(1, { message: "Please select a reason." }),
  username: z
    .string()
    .email({ message: "Please enter a valid email address." }),
});

export default function Contact() {
  const limitedInsights = data.posts.slice(0, 6);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      role: "",
      reason: "",
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Form Submitted Successfully",
      description: `Role: ${data.role}, Reason: ${data.reason}, Email: ${data.username}`,
    });
  }

  return (
    <div>

      <TabSwitch
        index={5}
        primaryTab={{
          title: "Contact",
          count: '5',
          description:
            "I am an IT student and developer who is passionate about entrepreneurship. I love to explore new technologies and am currently developing cool projects.",
        }}
        primaryChildren={
          <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-10 sm:py-20">
            <div className="max-w-sm">
              <h1 className="uppercase text-7xl font-bold tracking-wide">
                how can <br /> i help you?
              </h1>
              <p className="py-5 text-lg tracking-tight text-pretty">
                Have a question or want to discuss a project? I&apos;m ready to
                hear from you.
              </p>
            </div>
            <div>
              <div className="max-w-sm ml-auto">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {/* Role Selection */}
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>You are</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => field.onChange(value)}
                              value={field.value}
                            >
                              <SelectTrigger className="w-full text-left">
                                <SelectValue
                                  className="!text-base !font-normal truncate"
                                  placeholder="Select your role"
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Developer">Developer</SelectItem>
                                <SelectItem value="Recruiter">Recruiter</SelectItem>
                                <SelectItem value="Student">Student</SelectItem>
                                <SelectItem value="Entrepreneur">
                                  Entrepreneur
                                </SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Reason Selection */}
                    <FormField
                      control={form.control}
                      name="reason"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reason for reaching out</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => field.onChange(value)}
                              value={field.value}
                            >
                              <SelectTrigger className="w-full text-left">
                                <SelectValue
                                  className="!text-base !font-normal truncate"
                                  placeholder="Select a reason"
                                />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Collaborate on a project">
                                  Collaborate on a project
                                </SelectItem>
                                <SelectItem value="Discuss career opportunities">
                                  Discuss career opportunities
                                </SelectItem>
                                <SelectItem value="Share technical ideas">
                                  Share technical ideas
                                </SelectItem>
                                <SelectItem value="General inquiry">
                                  General inquiry
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email Input */}
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className={`w-full px-4 py-2 text-sm font-medium ${form.formState.isValid
                        ? "bg-foreground text-background border border-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
                        : "bg-muted text-muted-foreground border border-muted cursor-not-allowed"
                        }`}
                      disabled={!form.formState.isValid}
                    >
                      Submit
                    </button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        }
      />

      <section className="px-4 py-10">
        <Updates title="View My Latest Insights" posts={limitedInsights} />
      </section>
    </div>
  );
}
