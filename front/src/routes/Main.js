import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../components/App";
import HomePage from '../pages/HomePage';
import CoursePage from '../pages/CoursePage';
import CourseListPage from '../pages/CourseListPage';
import WishListPage from '../pages/WishListPage';


function Main() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="courses">
                        <Route index element={<CourseListPage/>}/>
                        <Route path="react-frontend-development" element={<CourseListPage/>}/>
                    </Route>
                </Route>
                <Route path="questions" element={ <QuestionListPage/>} />
                <Route path="questions/616825" element={ <QuestionPage/>} />
                <Route path="wishlist" element={ <WishListPage/>} />
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}


//NotFoundPage
function NotFoundPage(){
    return(
        <Container className={styles.container}>
            <Warn
                variant="big"
                title="존재하지 않는 페이지에요"
                description="올바른 주소가 맞는지 다시 한 번 확인해 주세요.">
            </Warn>
            <div className={styles.link}>
                <Link to="/">
                    <Button as="div">홈으로 가기</Button>
                </Link>
            </div>
        </Container>
    );
}


function CourseListPage(){
    const [searchParam, setSearchParam] = useSearchParams();
    const initKeyword = SearchParam.get('keyword');
    const [ keyword, setKeyword] = useState(initKeyword || ``);
    const courses = getCourses(initKeyword);

    const handleKeywordChange = (e) => setKeyword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParam(keyword ? { keyword } : {});
    };
}

//CoursePage
function CoursePage(){
    const navigate = useNavigate();
    const { coursesSlug} = useParams();
    const course = gtCourseBySlug(courseSlug);
    const courseColor = getCourseColor(course?.code);

    if (!course){
        return <Navigate to = "/courses"/>;
    }

    const headerStyle = {
        borderTopColor : courseColor,
    };

    const handleAddWishListClick = () => { 
        addWishList(course?.slug);
        navigate(`/wishList`);
    };

}

// App
function App(){
    return(
        <>
            <Nav className={styles.nav}/>
            <div className={styles.body}><Qutlet/></div>
            <Footer className={styles.footer} />
        </>
    );
}