import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const LogIn = () => {
    return (
        <div className='flex items-center justify-center py-12'>
            <Card className="w-[450px]">
                <CardHeader>
                    <CardTitle className='flex items-center justify-center text-lg font-bold'>Login</CardTitle>
                    <CardDescription className='flex items-center justify-center'>Welcome back to ECOMMERCE</CardDescription>
                    <CardDescription className='flex items-center justify-center'>The next gen business marketplace</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className='space-y-10'>
                        <div className="grid space-y-4 w-full items-center gap-4">

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Email</Label>
                                <Input id="password" placeholder="Email..." />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="Password..." />
                            </div>
                            <Button>Log In</Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                    Have an Account ? SIGN UP
                </CardFooter>
            </Card>
        </div>
    )
}

export default LogIn
