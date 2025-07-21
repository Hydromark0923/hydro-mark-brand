import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Recycle, Award, CheckCircle, Star, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-water-bottles.jpg";

export default function Home() {
  const certifications = [
    {
      icon: Shield,
      name: "FSSAI",
      description: "Food Safety and Standards Authority of India certified",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Recycle,
      name: "Recyclable",
      description: "100% recyclable materials for environmental sustainability",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: Award,
      name: "NSF",
      description: "National Sanitation Foundation approved for safety",
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: CheckCircle,
      name: "BIS",
      description: "Bureau of Indian Standards quality certification",
      color: "bg-orange-100 text-orange-700"
    }
  ];

  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "High-grade materials ensuring durability and safety"
    },
    {
      icon: Users,
      title: "Custom Branding",
      description: "Personalized designs that reflect your brand identity"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Premium Custom Branding
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Custom Branded<br />
                  <span className="text-primary-glow">Water Bottles</span><br />
                  for Your Business
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  Transform your brand presence with premium custom water bottles. 
                  Perfect for hotels, restaurants, events, and corporate branding.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="group shadow-glow"
                  asChild
                >
                  <Link to="/contact">
                    Get Your Customized Bottle Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  variant="glass" 
                  size="lg"
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <img
                src={heroImage}
                alt="Custom branded water bottles showcase"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Certified Quality Standards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our water bottles meet the highest industry standards and certifications for quality, safety, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 rounded-2xl ${cert.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose HydroMark?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine purity with personality – every bottle carries your brand with pride.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center space-y-4 group"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="h-10 w-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Brand Your Business?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started with custom water bottles that perfectly represent your brand identity.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="group shadow-glow"
              asChild
            >
              <Link to="/contact">
                Start Your Order Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}