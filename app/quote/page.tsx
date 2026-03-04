"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FileText, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  serviceRequired: z.string().min(1, "Please select a service"),
  pickupLocation: z.string().min(2, "Please enter pickup location"),
  deliveryLocation: z.string().min(2, "Please enter delivery location"),
  message: z.string().min(10, "Please provide more details about your requirements"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function QuotePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Quote form data:", data);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="pt-16 lg:pt-20">
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                <FileText className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Request a Transport Quote
            </h1>
            <p className="text-xl text-gray-200">
              Get a Customized Logistics Solution - Tell us about your transport
              needs, and our team will provide a competitive and tailored
              quotation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200"
              {...fadeInUp}
            >
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-8 flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Quote Request Received!</h3>
                    <p className="text-sm">
                      Thank you for your quote request. Our team will review your
                      requirements and get back to you within 24 hours with a
                      competitive quotation.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      {...register("fullName")}
                      placeholder="John Doe"
                      className="mt-1"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      {...register("companyName")}
                      placeholder="Your Company Ltd"
                      className="mt-1"
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.companyName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="john@company.com"
                      className="mt-1"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="+27 XX XXX XXXX"
                      className="mt-1"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="serviceRequired">Service Required *</Label>
                  <Controller
                    name="serviceRequired"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="road-freight">
                            Road Freight Transport
                          </SelectItem>
                          <SelectItem value="car-carrier">
                            Car Carrier Division
                          </SelectItem>
                          <SelectItem value="container">
                            Container Movement
                          </SelectItem>
                          <SelectItem value="break-bulk">
                            Break Bulk Cargo
                          </SelectItem>
                          <SelectItem value="other">
                            Other / Multiple Services
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.serviceRequired && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.serviceRequired.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="pickupLocation">Pickup Location *</Label>
                    <Input
                      id="pickupLocation"
                      {...register("pickupLocation")}
                      placeholder="e.g., Durban"
                      className="mt-1"
                    />
                    {errors.pickupLocation && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pickupLocation.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="deliveryLocation">Delivery Location *</Label>
                    <Input
                      id="deliveryLocation"
                      {...register("deliveryLocation")}
                      placeholder="e.g., Johannesburg"
                      className="mt-1"
                    />
                    {errors.deliveryLocation && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.deliveryLocation.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">
                    Additional Details & Requirements *
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Please provide details about your cargo (type, weight, dimensions, special requirements, preferred timeline, etc.)"
                    rows={6}
                    className="mt-1"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    * All fields are required. Your information will be kept
                    confidential and used solely for providing you with a quote.
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="secondary"
                  className="w-full text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request My Quote"}
                </Button>
              </form>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {[
                {
                  title: "Fast Response",
                  description: "Quote within 24 hours",
                },
                {
                  title: "Competitive Pricing",
                  description: "Best rates guaranteed",
                },
                {
                  title: "No Obligation",
                  description: "Free quote, no commitment",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-200"
                >
                  <CheckCircle2 className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h3 className="font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
