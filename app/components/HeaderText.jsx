const HeaderText = ({ title, value }) => {
  return (
    <h2 className='text-4xl font-semibold capitalize text-center text-gray-800 mt-4 mb-8'>
      {title}{value && `: `}{value ? <span className='font-normal'>{value}</span> : null}
    </h2>
  )
}

export default HeaderText