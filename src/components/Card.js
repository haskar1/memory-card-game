export default function Card({ id, imgURL, alt, onClick }) {
  return (
    <>
      {imgURL && <img id={id} className="card" src={imgURL} onClick={onClick} alt={alt}></img>}
    </>
  )
}