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
const SignUp = () => {
    return (
        <div className='flex items-center justify-center py-12'>
            <Card className="w-[450px]">
                <CardHeader>
                    <CardTitle className='flex items-center justify-center'>Create an account</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className='space-y-10'>
                        <div className="grid space-y-4 w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Enter Name" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Email</Label>
                                <Input id="password" placeholder="Email..." />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" placeholder="Password..." />
                            </div>
                            <Button>CREATE ACCOUNT</Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center items-center">
                    Have an Account ? LOGIN
                </CardFooter>
            </Card>
        </div>
    )
}

export default SignUp
