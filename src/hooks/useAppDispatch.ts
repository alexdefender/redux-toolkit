import { useDispatch } from 'react-redux';
import { AppDispatch } from '../services/store';

// const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
