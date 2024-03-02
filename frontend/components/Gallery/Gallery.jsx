import { useEffect, useState } from 'react'

const Gallery = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/API/v1/la-ruta') // Remplaza 'tu-ruta' con la
        .then((response) => response.json())
        .then ((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error))
    }, []);

    return (
        <div>
            Esto son los datos: {data}
        </div>
    );
};

export default Gallery