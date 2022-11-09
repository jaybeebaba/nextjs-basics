import Link from "next/link"

export const getStaticProps = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");

    const data = await res.json();

    return{
        props:{
            albums: data
        }
    }
}
const Index = ({albums}) => {

    const albumslist = albums.map(album =>{
        return (
            <Link href={'/albums/' + album.id} key={album.id}>
        
            <h3>{ album.title }</h3>
          
          </Link>
        )
    })
  return (
    <>
    <div>Albums</div>
    {albumslist}

    </>
  )
}

export default Index