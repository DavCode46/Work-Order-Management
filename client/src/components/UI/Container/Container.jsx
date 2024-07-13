import './container.css'
const Container = ({title, children}) => {
  return (
    <div className='container'>
        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default Container