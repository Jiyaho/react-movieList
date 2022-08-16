import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// useParam: 라우터 사용 시 파라미터 정보를 가져와 활용할때 사용하는 함수. 영화 Detail Page의 아이디값을 가져오기 위해 사용.
import DetailMovie from "../components/DetailMovie";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detailMovie, setDetailMovie] = useState();
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetailMovie(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    console.log(detailMovie);
    return (
        <div>
            {loading ? (
                <h1>Detail Page is Loading...</h1>
            ) : (
            <div>
                {<DetailMovie 
                    key={detailMovie.id}
                    id={detailMovie.id}
                    coverImg={detailMovie.large_cover_image}
                    title={detailMovie.title_long}
                    descriptionFull={detailMovie.description_full}
                    genres={detailMovie.genres}
                />}
            </div>
            )}
        </div>
    );
};
export default Detail;