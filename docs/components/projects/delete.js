import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function DeleteUser() {
    const { id } = useParams();
    axios
        .get('http://localhost:5000/delete/' + id)
        .catch(err => {
            console.log(err);
        });
}