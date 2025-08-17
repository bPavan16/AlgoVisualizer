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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

interface CodeTabProps {
    codeSnippets: {
        C: string;
        "C++": string;
        Python: string;
        Java: string;
        JavaScript: string;
    };
}

export function CodeTab({ codeSnippets }: CodeTabProps) {
    return (
        <Tabs defaultValue="C++" className="w-full ">
            <TabsList className="grid w-full grid-cols-5 p-1">
                <TabsTrigger value="C">C</TabsTrigger>
                <TabsTrigger value="C++">C++</TabsTrigger>
                <TabsTrigger value="Python">Python</TabsTrigger>
                <TabsTrigger value="Java">Java</TabsTrigger>
                <TabsTrigger value="JavaScript">JavaScript</TabsTrigger>
            </TabsList>
            <TabsContent value="C" className="">
                <Card className="h-max bg-slate-800 text-white">
                    <CardHeader>
                        <CardTitle className="">C Code</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 bg-slate-800 text-white">
                        <pre className="text-left">
                            {codeSnippets.C}
                        </pre>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="C++">
                <Card className="bg-slate-800  text-white">
                    <CardHeader>
                        <CardTitle>C++ Code</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <pre className="text-left">
                            {codeSnippets["C++"]}
                        </pre>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="Python">
                <Card className="bg-slate-800 text-white">
                    <CardHeader>
                        <CardTitle>Python Code</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <pre className="text-left">
                            {codeSnippets["Python"]}
                        </pre>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="Java">
                <Card className="bg-slate-800 text-white">
                    <CardHeader>
                        <CardTitle>Java Code</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <pre className="text-left">
                            {codeSnippets["Java"]}
                        </pre>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="JavaScript">
                <Card className="bg-slate-800 text-white">
                    <CardHeader>
                        <CardTitle>JavaScript Code</CardTitle>
                        <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <pre className="text-left">
                            {codeSnippets["JavaScript"]}
                        </pre>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
