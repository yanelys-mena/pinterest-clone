import './SearchResults.css'
import { load_pins } from '../../store/pins';
import { useDispatch, useSelector, } from 'react-redux';

export default function SearchResults() {
    const { searchInput } = useParams();
    const user = useSelector((state) => state.session?.user);
    const pins = useSelector(state => Object.values(state?.pins));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(load_pins())
    }, [dispatch]);


    return (
        <>
            search results page
            {searchInput}
        </>
    )
}