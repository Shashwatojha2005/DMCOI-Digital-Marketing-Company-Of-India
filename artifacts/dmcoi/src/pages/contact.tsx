import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  businessType: z.string().min(1, 'Please select a business type'),
  budget: z.string().min(1, 'Please select a monthly budget'),
  message: z.string().optional(),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      businessType: '',
      budget: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Request Received",
      description: "The Bulgarian Horse has received your signal. We'll be in touch.",
    });
    form.reset();
  }

  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="font-display text-6xl md:text-8xl mb-6">BOOK YOUR STRATEGY CALL</h1>
          <p className="text-xl text-muted-foreground">Stop guessing. Let's build a machine that prints pipeline.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-24">
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-display text-3xl mb-6">DIRECT COMMS</h3>
              <div className="space-y-6">
                <a href="mailto:hello@dmcoi.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <div className="bg-background p-3 rounded-full border border-border"><Mail className="w-6 h-6" /></div>
                  <span className="text-lg font-medium">hello@dmcoi.com</span>
                </a>
                <a href="https://wa.me/123456789" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                  <div className="bg-background p-3 rounded-full border border-border"><Phone className="w-6 h-6" /></div>
                  <span className="text-lg font-medium">WhatsApp Us</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="bg-background p-3 rounded-full border border-border"><MapPin className="w-6 h-6" /></div>
                  <span className="text-lg font-medium">Global (US, CA, AU)</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-primary" />
                <h3 className="font-display text-2xl">CALENDLY</h3>
              </div>
              <p className="text-muted-foreground mb-4">Direct booking integration coming soon. Fill out the form to get priority placement.</p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-card border border-border rounded-xl p-8 md:p-10">
            <h2 className="font-display text-4xl mb-8">INITIATE SEQUENCE</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background">
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="home-services">Home Services / Trades</SelectItem>
                            <SelectItem value="medical">Medical / Aesthetics</SelectItem>
                            <SelectItem value="coaching">Coaching / Consulting</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="ecommerce">E-Commerce</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Marketing Budget</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-1k">Under $1,000</SelectItem>
                          <SelectItem value="1k-3k">$1,000 - $3,000</SelectItem>
                          <SelectItem value="3k-10k">$3,000 - $10,000</SelectItem>
                          <SelectItem value="over-10k">$10,000+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Biggest Challenge? (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="e.g. We get traffic but no leads, our CPL is too high..." 
                          className="bg-background resize-none" 
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full font-bold text-lg h-14">
                  SUBMIT TRANSMISSION
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}