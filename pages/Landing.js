import { TailSpin } from  'react-loader-spinner'

const Landing = () => {
  return (
    <div className=''>
     <TailSpin
              height="100"
              width="100"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="5"
              wrapperStyle={{justifyContent:"center",marginTop:"200px"}}
              wrapperClass=""
              visible={true}
            />
    </div>
  )
}

export default Landing