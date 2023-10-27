import React, { useEffect, useState } from 'react'
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularMovies, getTopRatedMovies, getUpComingMovies }
  from '../redux/movieSlice';
import Banner from '../components/Banner';
import FadeLoader from 'react-spinners/FadeLoader';
import MovieSlide from '../components/MovieSlide';

const Home = () => {
  // 기존에 있던 session movie를 지워버릴거림
  sessionStorage.removeItem('movie');

  
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(state => state.movies);
  const [loading, setLoading] = useState(true);

  /* 화면이 렌더링 되자마자, API를 가져올 것 */
  useEffect(() => {
    const popularApi = axios.get('/popular?language=ko-KR&page=1');
    const topRatedApi = axios.get('/top_rated?language=ko-KR&page=1');
    const upComingApi = axios.get('/upcoming?language=ko-KR&page=1');

    // promise.all을 사용하여 어러 번의 API 요청을 병렬로 처리
    Promise
      .all([popularApi, topRatedApi, upComingApi])
      .then(res => {
        console.log(res)


        // API에서 받아온 데이터를 store 안에 넣고싶음! => useDispatch
        dispatch(getPopularMovies(res[0].data));
        dispatch(getTopRatedMovies(res[1].data));
        dispatch(getUpComingMovies(res[2].data));
      })
      .then(() => {
        setLoading(false);
      })
      ;
  }, [])

  // store에 값이 잘 들어갔는지 확인해보는 용도
  // useEffect(()=>{
  //   console.log('store의 상태', popularMovies, topRatedMovies, upComingMovies)
  // },[popularMovies, topRatedMovies, upComingMovies])

  if (loading) {
    return (
      <FadeLoader
        color="#d63636"
        loading={loading}
        size={50}
        speedMultiplier={1}>
      </FadeLoader>
    )
  }


  return (
    <div>

      {/* LifeCycle 생명주기 - 컴포넌트
        - popularMovies 존재하면? => result
        - 존재하지 않는다면 배너 띄울필요X
      */}

      {/* 로딩스피너를 만들며 데이터가 안왔을 때는 로딩만 리턴이 되기 때문에
          별도로 조건부 처리를 해 줄 필요가 없다.
      */}
      {/* {popularMovies.results && */}
      <Banner movie={popularMovies.results[7]} />
      {/* }      */}

      <p>Popular Movies</p>
      {/* 카드슬라이드 */}
      <MovieSlide movies={popularMovies} type="popularMovies"></MovieSlide>

      <p>TopRated Movies</p>
      {/* 카드슬라이드 */}
      <MovieSlide movies={topRatedMovies} type="topRatedMovies"></MovieSlide>

      <p>Upcoming Movies</p>
      {/* 카드슬라이드 */}
      <MovieSlide movies={upComingMovies} type="upComingMovies"></MovieSlide>
    </div>
  )
}

export default Home