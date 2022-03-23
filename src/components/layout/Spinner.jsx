import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div classname='w-10 mt-20'>
      <img 
        width={180} 
        className='text-center mx-auto' 
        src={spinner} 
        alt="Loading..." />
    </div>
  )
}
export default Spinner