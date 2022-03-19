export default function LandingPageGrid() {
    return (
        <div id="pinGrid">
            {Array(8).map((i, idx) => (
                <PinCard key={idx} />
            ))}


        </div >
    )
}