export const Skeleton = ({ h, w }: { h: number; w: number }) => {
    return (
        <div
            className="bg-gray-600 animate-pulse rounded-lg"
            style={{ height: `${h}px`, width: `${w}px` }}
        ></div>
    )
}
