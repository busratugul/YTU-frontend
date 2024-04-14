import {useSelector} from 'react-redux'


const TotalCompleteItems = () => {
	const isler = useSelector(state => state.tds)
	const tamamlananSayisi = isler.filter((is) => is.completed === true)
	return <h4 className='mt-3'>Total Complete Items: {tamamlananSayisi.length}</h4>;
};

export default TotalCompleteItems;
