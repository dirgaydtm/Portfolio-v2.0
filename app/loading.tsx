import { Skeleton } from "@/shared/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen">
            {/* Hero Section Skeleton */}
            <section className="flex min-h-[90vh] flex-col items-center justify-center px-4">
                <div className="flex flex-col items-center gap-6">
                    {/* Avatar */}
                    <Skeleton className="h-32 w-32 rounded-full" />

                    {/* Name */}
                    <Skeleton className="h-12 w-64" />

                    {/* Title */}
                    <Skeleton className="h-6 w-48" />

                    {/* Bio */}
                    <div className="flex flex-col items-center gap-2">
                        <Skeleton className="h-4 w-80" />
                        <Skeleton className="h-4 w-72" />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-4">
                        <Skeleton className="h-10 w-32 rounded-md" />
                        <Skeleton className="h-10 w-32 rounded-md" />
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4 mt-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Tech Stack Section Skeleton */}
            <section className="px-4 py-20">
                <div className="mx-auto max-w-5xl">
                    <div className="flex flex-col items-center gap-4">
                        <Skeleton className="h-6 w-24" />
                        <Skeleton className="h-10 w-64" />
                        <Skeleton className="h-4 w-96" />
                    </div>

                    {/* Tech Icons */}
                    <div className="mt-12 flex justify-center gap-8">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} className="h-12 w-12 rounded-lg" />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section Skeleton */}
            <section className="px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col items-center gap-4 mb-12">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-10 w-48" />
                    </div>

                    {/* Project Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="rounded-lg border p-4">
                                <Skeleton className="h-48 w-full rounded-md mb-4" />
                                <Skeleton className="h-6 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-full mb-1" />
                                <Skeleton className="h-4 w-2/3" />
                                <div className="flex gap-2 mt-4">
                                    <Skeleton className="h-5 w-16 rounded-full" />
                                    <Skeleton className="h-5 w-16 rounded-full" />
                                    <Skeleton className="h-5 w-16 rounded-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
