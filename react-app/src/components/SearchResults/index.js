import './SearchResults.css'

export default function SearchResults() {
    const { searchInput } = useParams();
    return (
        <>
            search results page
            {searchInput}
        </>
    )
}