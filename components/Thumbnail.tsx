import Image from "next/image"
import { modalState, movieState } from "../atoms/modalAtom"
import { Movie } from "../typings"
import { useRecoilState } from 'recoil'

interface Props {
    movie: Movie
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  return (
    <div className="relative h-28 min-w-[180px] transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105" onClick={() => { setCurrentMovie(movie), setShowModal(true)}}>
        <Image className="rounded-sm object-cover md:rounded" src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} layout="fill" />
    </div>
  )
}

export default Thumbnail