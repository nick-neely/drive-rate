"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { calculateRate } from "@/lib/calculateRate";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const currentYear = new Date().getFullYear();

export const rateSchema = z.object({
  age: z.number().min(16).max(100),
  drivingRecord: z.enum(["clean", "accidents", "tickets"]),
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.number().min(1900).max(currentYear),
  location: z.string().min(1),
});

export function RateForm() {
  const [rate, setRate] = useState<number | null>(null);
  const form = useForm<z.infer<typeof rateSchema>>({
    resolver: zodResolver(rateSchema),
  });

  async function onSubmit(data: z.infer<typeof rateSchema>) {
    const result = await calculateRate(data);
    setRate(result.rate); // Set the fetched rate
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get Your Rate</CardTitle>
        <CardDescription>
          Fill out the form to get a personalized car insurance quote.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="age">Age</FormLabel>
                      <FormControl>
                        <Input
                          id="age"
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="drivingRecord"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="driving-record">
                        Driving Record
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select driving record" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clean">Clean</SelectItem>
                            <SelectItem value="accidents">Accidents</SelectItem>
                            <SelectItem value="tickets">Tickets</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="make"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="make">Make</FormLabel>
                      <FormControl>
                        <Input id="make" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="model"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="model">Model</FormLabel>
                      <FormControl>
                        <Input id="model" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="year">Year</FormLabel>
                      <FormControl>
                        <Input
                          id="year"
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="location">Location</FormLabel>
                    <FormControl>
                      <Input id="location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Get Quote
            </Button>
          </CardFooter>
        </form>
      </Form>
      {rate !== null && (
        <div className="mt-4 rounded-md bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Your Car Insurance Rate</h3>
            <span className="text-2xl font-bold">${rate.toFixed(2)}/month</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            This rate is an estimate and should not be considered as a factual
            representation. It is provided for informational purposes only.
            Actual rates may vary depending on additional factors and your final
            policy.
          </p>
        </div>
      )}
    </Card>
  );
}
