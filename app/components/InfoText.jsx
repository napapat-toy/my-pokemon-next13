const InfoText = ({ title, value }) => (
    <div className="flex gap-2">
        <p className='text-xl font-semibold capitalize'>{title}:</p>
        <p className='text-lg'>{value}</p>
    </div>
)

export default InfoText