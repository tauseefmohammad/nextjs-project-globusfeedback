import { GradientHeader } from "@/components/gradient-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Map, MessageSquare, Users, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/*Hearo section*/}
      <GradientHeader title="Shape the future of our product"
      subtitle="GlobusFeedback is where your ideas come to life. suggest features, vote on what matters most, and follow our public roadmap.">
        <div className="flex gap-4 justify-center pt-4">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/feedback/new">Submit Feedback <ArrowRight className="ml-2 h-4 w-4 "/> </Link>
          </Button>
           <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
            <Link href="/roadmap">View Roadmap <Map className="ml-2 h-4 w-4 "/> </Link>
          </Button>
        </div>
      </GradientHeader>
      {/*feature section*/}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <MessageSquare className="h-8 w-8 text-primary mb-2"/>
              <CardTitle>Submit Ideas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Share your suggestion and feature requests with the community. </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart className="h-8 w-8 text-primary mb-2"/>
              <CardTitle>Vote & Prioratize</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Upvote ideas you love to help us understad what matters most.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2"/>
              <CardTitle>Track Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Follow our public roadmap to see what we're working on next. </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2"/>
              <CardTitle>See Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Watch as your feedback transforms into real features and improvements</p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/*Stats section*/} 
      
    </div>
  );
}
