import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex items-center justify-center gap-4">
    <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="h-4 w-2/3 bg-gray-300" />
        <Skeleton className="h-4 w-1/2 bg-gray-300" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full bg-gray-300" />
      </CardContent>
    </Card>
    <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="h-4 w-2/3 bg-gray-300" />
        <Skeleton className="h-4 w-1/2 bg-gray-300" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full bg-gray-300" />
      </CardContent>
    </Card>
    <Card className="w-full max-w-xs">
      <CardHeader>
        <Skeleton className="h-4 w-2/3 bg-gray-300" />
        <Skeleton className="h-4 w-1/2 bg-gray-300" />
      </CardHeader>
      <CardContent>
        <Skeleton className="aspect-video w-full bg-gray-300" />
      </CardContent>
    </Card>
    </div>
  )
}
