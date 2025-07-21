import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Target, Users, Lightbulb, ArrowRight } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Quality",
      description: "Every bottle is crafted with meticulous attention to detail and unwavering commitment to excellence."
    },
    {
      icon: Target,
      title: "Brand Precision",
      description: "We understand that your brand is unique, and we ensure every bottle reflects your distinct identity."
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description: "Your success is our success. We work closely with you to exceed expectations at every step."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously evolving our processes and designs to stay ahead of industry trends."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "50K+", label: "Bottles Delivered" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Quality Guarantee" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              About <span className="text-primary-glow">HydroMark</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We combine purity with personality – every bottle carries your brand with pride.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At HydroMark, we specialize in creating tailor-made branding solutions for water bottles that cater to hotels, restaurants, events, and private labels. Our commitment goes beyond just customization – we're dedicated to delivering premium quality that reflects the essence of your brand.
                </p>
                <p>
                  Founded with the vision of transforming ordinary water bottles into powerful branding tools, we understand that every business has a unique story to tell. Our expert team works closely with clients to ensure that each bottle not only meets the highest quality standards but also serves as an extension of their brand identity.
                </p>
                <p>
                  From concept to delivery, we maintain strict quality controls and use only the finest materials, ensuring that every HydroMark bottle is a testament to excellence and reliability.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20"></div>
              <Card className="relative border-border/50 shadow-soft">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">Our Promise</h3>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "We combine purity with personality – every bottle carries your brand with pride."
                    </p>
                    <div className="flex justify-center">
                      <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at HydroMark.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that speak to our commitment and expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-white/90">
              Let's create something amazing together. Get in touch to discuss your custom branding needs.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="group shadow-glow bg-white text-primary hover:bg-white/90"
              asChild
            >
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}