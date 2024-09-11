// components/Component.js

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from 'next/image' 

export default function Component() {
  return (
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
          <h2 className="text-2xl font-bold text-black">Contact Us</h2>
          <p className="text-black md:text-lg">Our team will get back to you as soon as possible...</p>
            <Image 
              src="/images/contact_us.png" 
              alt="Contact Us"
              width={500} 
              height={500} 
              className="object-cover"
            />
            
          </div>
          <Card className="bg-white pt-8">
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-black">
                    Name
                  </Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-black">
                    Email
                  </Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject" className="text-black">
                    Subject
                  </Label>
                  <Input id="subject" placeholder="Enter the subject" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category" className="text-black">
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="volunteer">Volunteer</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-black">
                    Message
                  </Label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
                </div>
                <Button type="submit" className="w-full bg-red-500 text-white hover:bg-red-600">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
