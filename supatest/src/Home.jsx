import React, { useEffect, useState } from 'react'
import supabase from './supabaseConfig'
import SupaCard from './SupaCard'

const Home = () => {
    const [supa, setSupa] = useState(null)
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
        const fetchSupa = async () => {
            // Fetch data from Supabase
            const { data, error } = await supabase.from('smoothie').select()

            if (error) {
                setFetchError(error.message || 'An error occurred');
                setSupa(null);
                console.log(error);
            } else {
                setFetchError(null);
                setSupa(data);
                console.log(data); // Debugging: Check what data is returned
            }
        }

        fetchSupa();
    }, []);



    return (
        <div>
            {fetchError && <p>{fetchError}</p>}
            {supa && (
                <div className='container'>
                    {supa.map((s) => {
                        return (
                            <SupaCard s={s}/>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Home;
