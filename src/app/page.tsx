"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import ModeToggle from "@/components/mode-toggle"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Calendar, GraduationCap, Briefcase, Code } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="font-bold text-xl">Yuhao Cheng</div>
          <div className="flex items-center gap-4">
            <a href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </a>
            <a href="#education" className="text-sm font-medium hover:underline underline-offset-4">
              Education
            </a>
            <a href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </a>
            <a href="#experience" className="text-sm font-medium hover:underline underline-offset-4">
              Experience
            </a>
            <a href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </a>
            <ModeToggle />
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="about" className="py-16 text-center min-h-[600px]">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Yuhao Cheng
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Master's Student in Computer Science at University of Illinois Urbana-Champaign
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specializing in Full Stack Development, Machine Learning, and Natural Language Processing. 
              Passionate about building innovative solutions that bridge technology and real-world applications.
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>603 E Clark St, IL 61820</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:yuhaoc7@outlook.com" className="hover:underline">
                  yuhaoc7@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>US: +1 217-979-8890</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>CN: +86 18356008578</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Education Section */}
        <section id="education" className="py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <GraduationCap className="h-8 w-8" />
              Education
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Master of Computer Science (MCS)</CardTitle>
                      <CardDescription className="text-base font-medium">
                        University of Illinois Urbana-Champaign
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Aug 2025 – Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    <strong>Coursework:</strong> Software Engineering, Communication Networks, Text Information Systems
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Bachelor of Science in Computer Engineering</CardTitle>
                      <CardDescription className="text-base font-medium">
                        University of Illinois Urbana-Champaign
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      2021 – 2025
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Coursework:</strong> Data Structures, Operating Systems, AI, Databases, Algorithms
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Code className="h-8 w-8" />
              Projects
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        FinTrack Financial Tracking Platform
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardTitle>
                      <CardDescription>Full-stack financial tracking application with AI-powered forecasting</CardDescription>
                    </div>
                    <Badge variant="outline">Feb 2025 – Apr 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Built frontend with React + Material UI and backend with Node.js + Express, supporting real-time multi-currency conversion via APIs</li>
                      <li>• Implemented time series forecasting (ARIMA, LSTM) for expense prediction and personalized budgeting</li>
                      <li>• Designed MySQL schema, triggers, and stored procedures (SQL) ensuring transaction consistency</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Material UI</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">Express</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">LSTM</Badge>
                      <Badge variant="secondary">ARIMA</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Web Navigation Agent Research Project
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardTitle>
                      <CardDescription>Advanced RL-based web agent with memory mechanisms</CardDescription>
                    </div>
                    <Badge variant="outline">Sep 2024 – May 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Overcame the long-standing challenge of designing an effective reward function for RL-based web agents, enabling stable and efficient training</li>
                      <li>• Integrated agent memory mechanisms to mitigate forgetting issues in complex, multi-step tasks, significantly improving long-horizon task performance</li>
                      <li>• Fine-tuned LLMs with PyTorch using Supervised Fine-Tuning (SFT) and NLP techniques, achieving higher completion rates and stronger generalization on WebArena</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">PyTorch</Badge>
                      <Badge variant="secondary">Reinforcement Learning</Badge>
                      <Badge variant="secondary">NLP</Badge>
                      <Badge variant="secondary">LLMs</Badge>
                      <Badge variant="secondary">WebArena</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Briefcase className="h-8 w-8" />
              Experience
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Frontend Developer Intern</CardTitle>
                      <CardDescription className="text-base font-medium">visibilityx.ai</CardDescription>
                    </div>
                    <Badge variant="default">Jun 2025 – Aug 2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Developed a Vue 3 + TypeScript SPA with Vuex state management and Vue Router</li>
                      <li>• Built interactive dashboards and data visualizations (ECharts, SQL-backed APIs) with real-time updates</li>
                      <li>• Improved performance with Vite build system, modular SCSS, and API error handling</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">Vue 3</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">Vuex</Badge>
                      <Badge variant="secondary">ECharts</Badge>
                      <Badge variant="secondary">Vite</Badge>
                      <Badge variant="secondary">SCSS</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Deep Learning Intern</CardTitle>
                      <CardDescription className="text-base font-medium">HiABR Lab</CardDescription>
                    </div>
                    <Badge variant="default">May 2024 – Aug 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Automated PPT generation via prompt engineering + python-pptx, creating structured multi-slide outputs</li>
                      <li>• Built text-to-image service using Docker + FastAPI, adding async scheduling for GPU efficiency</li>
                      <li>• Deployed PyTorch ML models with CUDA multi-streaming, doubling throughput and cutting latency by 40%</li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary">PyTorch</Badge>
                      <Badge variant="secondary">Docker</Badge>
                      <Badge variant="secondary">FastAPI</Badge>
                      <Badge variant="secondary">CUDA</Badge>
                      <Badge variant="secondary">Python</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">C/C++</Badge>
                    <Badge variant="outline">C#</Badge>
                    <Badge variant="outline">SQL</Badge>
                    <Badge variant="outline">SystemVerilog</Badge>
                    <Badge variant="outline">Verilog</Badge>
                    <Badge variant="outline">Assembly</Badge>
                    <Badge variant="outline">LaTeX</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">PyTorch</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Vue 3</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Express</Badge>
                    <Badge variant="outline">MySQL</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">FastAPI</Badge>
                    <Badge variant="outline">ECharts</Badge>
                    <Badge variant="outline">Chart.js</Badge>
                    <Badge variant="outline">Vite</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Domains</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Full Stack Development</Badge>
                    <Badge variant="outline">Machine Learning</Badge>
                    <Badge variant="outline">NLP</Badge>
                    <Badge variant="outline">Reinforcement Learning</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">VS Code</Badge>
                    <Badge variant="outline">Unity3D</Badge>
                    <Badge variant="outline">Xilinx Vivado</Badge>
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">CUDA</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-muted-foreground">
          <p>&copy; 2025 Yuhao Cheng. Built with Next.js and shadcn/ui.</p>
        </footer>
      </main>
    </div>
  )
}