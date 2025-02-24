"use client"
// React Hook Form
import { useForm } from "react-hook-form"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// Shadcnui
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
// React
import { useEffect, useState } from "react"
import { Button } from "@/components"

const formSchema = z.object({
    name: z.string().min(1, {
        message: "name cannot be empty",
    }),
    number: z.string({
        required_error: "number is required",
        invalid_type_error: "number must be a string",
    }).min(7, {
        message: "number must be at least 7 characters.",
    }).max(14, {
        message: "number must be at most 14 characters.",
    }).regex(/^\d+$/, {
        message: "number number can only contain digits.",
    }),
    email: z.string().email({
        message: "please use a valid email",
    }),
    company: z.string(),
    hear: z.string(),
    message: z.string(),
})

const FrontEndForm = ({ button = "Submit" }) => {
    const [loading, setLoading] = useState(false)
    const [url, setURL] = useState(false)
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            number: "",
            email: "",
            message: "",
            company: "",
            hear: ""
        }
    })
    const handleSubmit = async (values) => {
        setLoading(true)
        const filteredValues = Object.entries(values).reduce((acc, [key, value]) => {
            if (value !== '' && value !== false) {
                acc[key] = value
            }
            return acc
        }, {})
        try {
            let ip
            try {
                const ipResponse = await fetch("https://ipinfo.io/?token=9e980d0651edf4", {
                    method: "GET",
                });
                if (!ipResponse.ok) {
                    throw new Error(`Failed to fetch IP: ${ipResponse.status}`)
                }
                const ipData = await ipResponse.json()
                ip = ipData?.ip
            } catch (error) {
                console.error("Error fetching IP:", error)
                ip = '38.92.49.37'
            }

            const response = await fetch("https://brandsapi.pulse-force.com/api/v1/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "page_url": url,
                    "user_ip": ip,
                    "lead_data": filteredValues
                })
            })

            if (!response.ok) {
                const errorData = await response.text()
                throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorData}`)
            }

            window.location.href = "/thankyou"

        } catch (error) {
            console.error("Error:", error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        setURL(window.location.href)
    }, [setURL])
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 gap-5">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
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
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="(000) 000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="Company" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="hear"
                    render={({ field }) => (
                        <FormItem>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="How did you hear about us?" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Social Media">Social Media</SelectItem>
                                    <SelectItem value="Google">Google</SelectItem>
                                    <SelectItem value="Person">Person</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
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
                            <FormControl>
                                <Textarea placeholder="Tell us about your project..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="button">
                    {loading ? "Loading..." : button}
                </Button>
            </form>
        </Form>
    )
}

export default FrontEndForm