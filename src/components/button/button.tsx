
const Button = (props: {linke:string}) => {
  return (
    <>
      <a href={props.linke} className="bg-blue-600 text-white px-3 py-2 rounded-lg font-semibold capitalize block" >Garantir agora</a>
    </>
  )
}

export default Button
