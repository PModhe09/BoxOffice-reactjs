// import { useQuery } from '@tanstack/react-query';
// import { getShowById } from '../api/tvmaze';
// import  {useStarredShows}  from '../components/UseStarredShows';
// import ShowGrid from '../components/shows/ShowGrid';


const Starred = () => {
  // const [starredShowsIds] = useStarredShows();

  // const { data: starredShows, error: starredShowsError } = useQuery({
  //   queryKey: ['starred', starredShowsIds],
  //   queryFn: () =>
  //     getShowById(starredShowsIds).then(result =>
  //       result.map(show => ({ show }))
  //     ),
  //   refetchOnWindowFocus: false,
  // });

  // if (starredShows?.length === 0) {
  //   return <div>No shows are starred</div>;
  // }

  // if (starredShows?.length > 0) {
  //   return <ShowGrid shows={starredShows} />;
  // }

  // if (starredShowsError) {
  //   return <div>Error occured: {starredShowsError.message}</div>;
  // }

  return <div>Shows are loading</div>;
};

export default Starred;