"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Copy, ArrowRight, CheckCircle } from "lucide-react"

export default function MarketingPromptBuilder() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    role: "",
    challenge: "",
    taskType: "",
    businessType: "",
  })
  const [generatedPrompt, setGeneratedPrompt] = useState("")
  const [copied, setCopied] = useState(false)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const generatePrompt = () => {
    const prompts = {
      "email-copy": `You are an expert email marketing copywriter. Help me write a compelling email for my ${formData.businessType} business.

My main challenge: ${formData.challenge}

Please create:
1. A subject line that gets opened
2. An engaging opening hook
3. Clear value proposition
4. Strong call-to-action

Keep the tone conversational and focus on solving my customer's problem. Make it feel personal, not salesy.`,

      "social-media": `You are a social media marketing expert. Help me create engaging content for my ${formData.businessType} business.

My main challenge: ${formData.challenge}

Please create:
1. 3 different post ideas with captions
2. Relevant hashtag suggestions
3. Engagement questions to boost comments
4. Best posting times recommendation

Make the content authentic and valuable to my audience, not just promotional.`,

      "ad-copy": `You are a direct response advertising expert. Help me write high-converting ad copy for my ${formData.businessType} business.

My main challenge: ${formData.challenge}

Please create:
1. Attention-grabbing headline
2. Problem-focused opening
3. Clear benefit statements
4. Compelling call-to-action
5. 2-3 variations to test

Focus on customer pain points and how my solution helps them achieve their desired outcome.`,

      "content-ideas": `You are a content marketing strategist. Help me brainstorm content ideas for my ${formData.businessType} business.

My main challenge: ${formData.challenge}

Please provide:
1. 10 blog post/video topic ideas
2. 5 lead magnet concepts
3. 3 content series ideas
4. Seasonal content opportunities

Make sure each idea addresses my target audience's problems and positions me as the helpful expert.`,
    }

    const selectedPrompt = prompts[formData.taskType as keyof typeof prompts] || prompts["email-copy"]
    setGeneratedPrompt(selectedPrompt)
    setStep(4)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(generatedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const resetTool = () => {
    setStep(1)
    setFormData({ role: "", challenge: "", taskType: "", businessType: "" })
    setGeneratedPrompt("")
    setCopied(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0000ff] text-white py-12">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-3xl font-semibold mb-4">Marketing Prompt Builder</h1>
          <p className="text-lg opacity-90 font-light">
            Generate professional ChatGPT prompts tailored to your marketing objectives
          </p>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {step === 1 && (
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="bg-gray-50 border-b border-gray-200 py-8">
              <CardTitle className="text-2xl font-medium text-center text-gray-900">
                Professional AI Prompt Generation
              </CardTitle>
            </CardHeader>
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-xl font-medium mb-8 text-gray-800">What you'll receive:</h2>
                <div className="grid gap-6 text-left max-w-2xl mx-auto">
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-[#0000ff] rounded-full flex items-center justify-center text-white text-sm font-medium mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Custom ChatGPT Prompt</h3>
                      <p className="text-gray-600">Tailored specifically to your business and marketing challenge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-[#0000ff] rounded-full flex items-center justify-center text-white text-sm font-medium mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Ready to Use</h3>
                      <p className="text-gray-600">Copy and paste directly into ChatGPT with no modifications needed</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-[#0000ff] rounded-full flex items-center justify-center text-white text-sm font-medium mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Immediate Results</h3>
                      <p className="text-gray-600">Start improving your marketing content within minutes</p>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                onClick={handleNext}
                className="w-full bg-[#0000ff] hover:bg-blue-700 text-white font-medium py-4 text-lg"
              >
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 2 && (
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="bg-gray-50 border-b border-gray-200 py-6">
              <CardTitle className="text-xl font-medium text-gray-900">Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="p-10">
              <div className="space-y-10">
                <div>
                  <Label className="text-lg font-medium mb-6 block text-gray-900">Your role in marketing:</Label>
                  <RadioGroup
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-[#0000ff] hover:bg-gray-50 transition-all">
                      <RadioGroupItem value="business-owner" id="business-owner" />
                      <Label htmlFor="business-owner" className="text-base font-normal cursor-pointer">
                        Business Owner / Executive
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-[#0000ff] hover:bg-gray-50 transition-all">
                      <RadioGroupItem value="marketing-manager" id="marketing-manager" />
                      <Label htmlFor="marketing-manager" className="text-base font-normal cursor-pointer">
                        Marketing Manager / Director
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-[#0000ff] hover:bg-gray-50 transition-all">
                      <RadioGroupItem value="freelancer" id="freelancer" />
                      <Label htmlFor="freelancer" className="text-base font-normal cursor-pointer">
                        Consultant / Agency Professional
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-[#0000ff] hover:bg-gray-50 transition-all">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other" className="text-base font-normal cursor-pointer">
                        Other Marketing Professional
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="business-type" className="text-lg font-medium mb-4 block text-gray-900">
                    Industry or business type:
                  </Label>
                  <Input
                    id="business-type"
                    placeholder="e.g., Professional services, B2B software, Healthcare, Financial services..."
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="text-base py-3 px-4 border-gray-300 focus:border-[#0000ff] focus:ring-1 focus:ring-[#0000ff]"
                  />
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!formData.role || !formData.businessType}
                  className="w-full bg-[#0000ff] hover:bg-blue-700 text-white font-medium py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 3 && (
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="bg-gray-50 border-b border-gray-200 py-6">
              <CardTitle className="text-xl font-medium text-gray-900">Marketing Objectives</CardTitle>
            </CardHeader>
            <CardContent className="p-10">
              <div className="space-y-10">
                <div>
                  <Label className="text-lg font-medium mb-6 block text-gray-900">
                    Select your primary focus area:
                  </Label>
                  <RadioGroup
                    value={formData.taskType}
                    onValueChange={(value) => setFormData({ ...formData, taskType: value })}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-[#0000ff] hover:bg-gray-50 transition-all">
                      <RadioGroupItem value="email-copy" id="email-copy" />
                      <Label htmlFor="email-copy" className="text-base font-normal cursor-pointer">
                        Email Marketing & Campaigns
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-[#0000ff] hover:bg-gray-50 transition-all">
                      <RadioGroupItem value="social-media" id="social-media" />
                      <Label htmlFor="social-media" className="text-base font-normal cursor-pointer">
                        Social Media & Content Marketing
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-[#0000ff] hover:bg-gray-50 transition-all">
                      <RadioGroupItem value="ad-copy" id="ad-copy" />
                      <Label htmlFor="ad-copy" className="text-base font-normal cursor-pointer">
                        Advertising Copy & Headlines
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-[#0000ff] hover:bg-gray-50 transition-all">
                      <RadioGroupItem value="content-ideas" id="content-ideas" />
                      <Label htmlFor="content-ideas" className="text-base font-normal cursor-pointer">
                        Content Strategy & Planning
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="challenge" className="text-lg font-medium mb-4 block text-gray-900">
                    Describe your current marketing challenge:
                  </Label>
                  <Textarea
                    id="challenge"
                    placeholder="Please describe the specific challenge you're facing or the outcome you're trying to achieve..."
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="text-base min-h-[120px] p-4 border-gray-300 focus:border-[#0000ff] focus:ring-1 focus:ring-[#0000ff]"
                  />
                </div>

                <Button
                  onClick={generatePrompt}
                  disabled={!formData.taskType || !formData.challenge}
                  className="w-full bg-[#ff0033] hover:bg-red-700 text-white font-medium py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Generate Custom Prompt
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 4 && (
          <div className="space-y-8">
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader className="bg-gray-50 border-b border-gray-200 py-6">
                <CardTitle className="text-xl font-medium text-gray-900">Your Custom ChatGPT Prompt</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                    <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white">
                      <h4 className="font-medium text-gray-900">Your Custom Prompt</h4>
                      <Button
                        onClick={copyToClipboard}
                        className="bg-[#0000ff] hover:bg-blue-700 text-white font-medium"
                        size="sm"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        {copied ? "Copied" : "Copy"}
                      </Button>
                    </div>
                    <div className="p-6">
                      <pre className="whitespace-pre-wrap text-sm leading-relaxed font-mono text-gray-800 overflow-x-auto">
                        {generatedPrompt}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="font-medium text-lg mb-4 text-gray-900">How to use this prompt:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-base text-gray-700">
                    <li>Copy the prompt above using the copy button</li>
                    <li>Navigate to ChatGPT at chat.openai.com</li>
                    <li>Paste the prompt into the chat interface</li>
                    <li>Review and refine the generated content as needed</li>
                  </ol>
                </div>

                <div className="text-center">
                  <Button
                    onClick={resetTool}
                    variant="outline"
                    className="border-[#0000ff] text-[#0000ff] hover:bg-[#0000ff] hover:text-white font-medium py-3 px-6 bg-transparent"
                  >
                    Generate Another Prompt
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Professional CTA Section */}
            <Card className="border-2 border-[#ff0033] shadow-sm">
              <CardContent className="p-10 text-center">
                <div className="mb-8">
                  <h2 className="text-2xl font-medium text-gray-900 mb-4">Expand Your AI Marketing Toolkit</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Access our comprehensive collection of 1000+ professional marketing prompts, tools, and resources
                    designed for marketing professionals.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8 max-w-2xl mx-auto">
                  <div className="grid gap-4 text-left">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0000ff] flex-shrink-0" />
                      <span className="text-base text-gray-700">Advanced SEO content generation tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0000ff] flex-shrink-0" />
                      <span className="text-base text-gray-700">7-day structured ChatGPT training program</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0000ff] flex-shrink-0" />
                      <span className="text-base text-gray-700">Professional communication templates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0000ff] flex-shrink-0" />
                      <span className="text-base text-gray-700">Industry-specific prompt libraries</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xl font-medium text-gray-900 mb-2">Complete Marketing AI Bundle</p>
                  <p className="text-lg text-gray-600">$29.99 - One-time purchase</p>
                </div>

                <a href="https://prompts.aibeginnermode.com" className="inline-block">
                  <Button className="bg-[#ff0033] hover:bg-red-700 text-white font-medium py-4 px-8 text-lg">
                    View Complete Bundle
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-base text-gray-600">
            © 2024 AI Beginner Mode. Professional AI tools for marketing professionals.
          </p>
        </div>
      </footer>
    </div>
  )
}
