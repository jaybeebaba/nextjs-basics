
export const getStaticPaths = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");

  const data = await res.json();

  const paths = data.map(album =>{
    return {
      params:{
          id: album.id.toString()
      } 
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps = async (context) =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/albums/" + context.params.id)

  const data = await res.json();

  return{
    props: {
      album: data
    }
  }
}
const Details = ({album}) => {
  return (
    <h3>{album.title}</h3>
  )
}

export default Details