import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="flex flex-col space-y-3 justify-center items-center mt-20">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="flex justify-between">
          <Skeleton className="h-4 w-[70px]" />
          <Skeleton className="h-4 w-[70px]" />
        </div>
      </div>
    </>
  );
}
