import { useSearchParams } from "react-router-dom";

function PostListPage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const filterQuery = searchParams.get(`filter`);

    setSearchParams({
        filter: `react`,
    });
}