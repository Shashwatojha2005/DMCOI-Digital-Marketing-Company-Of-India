import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Mail, Phone, CalendarDays, ExternalLink } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { BulgarianHorse } from '@/components/BulgarianHorse';

const CALENDAR_URL = 'https://calendar.app.google/N9bU7euuWj3RUn5y9';

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
    defaultValues: { name: '', email: '', phone: '', businessType: '', budget: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Request Received',
      description: 'The Bulgarian Horse has received your signal. We\'ll be in touch within 24 hours.',
    });
    form.reset();
  }

  return (
    <div className="bg-background min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded border border-primary/40 bg-primary/10 text-xs font-bold tracking-widest text-primary mb-6">
            FREE STRATEGY CALL · NO OBLIGATION
          </span>
          <h1 className="font-display text-6xl md:text-8xl mb-4 leading-none">BOOK YOUR<br/><span className="text-primary">STRATEGY CALL</span></h1>
          <p className="text-xl text-muted-foreground">Stop guessing. Let's build a machine that prints pipeline.</p>
        </div>

        {/* Calendar CTA — Primary */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative overflow-hidden bg-card border-2 border-primary rounded-2xl p-8 md:p-12 shadow-[0_0_60px_rgba(0,102,255,0.15)]">
            <div className="absolute top-0 right-0 bottom-0 w-48 opacity-10 pointer-events-none flex items-center justify-end pr-4">
              <BulgarianHorse variant="approved" className="w-44 object-contain select-none" />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <CalendarDays className="w-8 h-8 text-primary" />
                  <h2 className="font-display text-3xl md:text-4xl">BOOK DIRECTLY</h2>
                </div>
                <p className="text-muted-foreground text-lg mb-2">
                  Pick a time that works for you. 30-minute call. No pitch. Just strategy.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> We analyse your current marketing</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> We identify your biggest growth levers</li>
                  <li className="flex items-center gap-2"><span className="text-primary font-bold">✓</span> You leave with a clear action plan</li>
                </ul>
              </div>
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-book-calendar"
                className="shrink-0 flex items-center gap-3 bg-primary text-primary-foreground font-bold px-8 py-5 rounded-xl text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-[0_0_30px_rgba(0,102,255,0.4)]"
              >
                <CalendarDays className="w-5 h-5" />
                Book on Google Calendar
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="font-display text-3xl mb-6">DIRECT COMMS</h3>
              <div className="space-y-6">
                <a
                  href="mailto:hello@dmcoi.com"
                  data-testid="link-email"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="bg-background p-3 rounded-full border border-border">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">hello@dmcoi.com</span>
                </a>
                <a
                  href="https://wa.me/61400000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-whatsapp"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  <div className="bg-background p-3 rounded-full border border-border">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">WhatsApp Us</span>
                </a>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="bg-background p-3 rounded-full border border-border">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-medium">AU · US · CA</span>
                </div>
              </div>
            </div>

            {/* Mascot story panel */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <BulgarianHorse variant="strategy" className="w-24 mx-auto object-contain mb-4 select-none" />
              <p className="font-display text-xl mb-2">THE HORSE IS THINKING.</p>
              <p className="text-sm text-muted-foreground">
                While you fill in the form, we're already building your strategy. Fast response within 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-card border border-border rounded-xl p-8 md:p-10">
            <h2 className="font-display text-4xl mb-2">OR SEND A SIGNAL</h2>
            <p className="text-muted-foreground mb-8">Fill out the form and we'll reach out to schedule your call.</p>
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
                          <Input data-testid="input-name" placeholder="John Doe" className="bg-background" {...field} />
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
                          <Input data-testid="input-email" placeholder="john@company.com" className="bg-background" {...field} />
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
                          <Input data-testid="input-phone" placeholder="+1 (555) 000-0000" className="bg-background" {...field} />
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
                            <SelectTrigger data-testid="select-business-type" className="bg-background">
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="home-services">Home Services / Trades</SelectItem>
                            <SelectItem value="medical">Medical / Aesthetics</SelectItem>
                            <SelectItem value="coaching">Coaching / Consulting</SelectItem>
                            <SelectItem value="real-estate">Real Estate</SelectItem>
                            <SelectItem value="ecommerce">E-Commerce</SelectItem>
                            <SelectItem value="local-business">Local Business</SelectItem>
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
                          <SelectTrigger data-testid="select-budget" className="bg-background">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-1k">Under $1,000</SelectItem>
                          <SelectItem value="1k-3k">$1,000 – $3,000</SelectItem>
                          <SelectItem value="3k-10k">$3,000 – $10,000</SelectItem>
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
                          data-testid="textarea-message"
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

                <Button data-testid="button-submit" type="submit" size="lg" className="w-full font-bold text-lg h-14">
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
